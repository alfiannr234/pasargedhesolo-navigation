/**
 * Map Module - Leaflet Indoor Map for Pasar Gedhe Solo & Pasar Buah
 * Handles authentic architectural SVG floorplans, interactive stall icons/pins,
 * category filter visibility, and turn-by-turn routing paths.
 */

const MarketMap = (() => {
    let map = null;
    let currentBuilding = 'pasar-gede';
    let currentFloor = 1;
    let svgOverlay = null;
    let markersLayer = null;
    let routeLayer = null;
    let highlightLayer = null;
    let markersByCategory = {}; // { categoryId: [L.marker, ...] }

    // Map bounds in Leaflet CRS.Simple (0,0 to 1024,1024 matching the SVG viewBox)
    const bounds = [[0, 0], [1024, 1024]];

    /**
     * Map SVG paths for each building and floor
     */
    const svgMapPaths = {
        'pasar-gede-1': 'assets/svg/pasar_gede_lt1.svg',
        'pasar-gede-2': 'assets/svg/pasar_gede_lt2.svg',
        'pasar-buah-1': 'assets/svg/pasar_buah_lt1.svg',
        'pasar-buah-2': 'assets/svg/pasar_buah_lt2.svg'
    };

    /**
     * Initialize Leaflet Map
     */
    function init() {
        const container = document.getElementById('map-container');
        if (!container) return;

        // Initialize map with CRS.Simple Cartesian coordinates
        map = L.map('map-container', {
            crs: L.CRS.Simple,
            minZoom: -1,
            maxZoom: 3,
            zoomDelta: 0.5,
            zoomSnap: 0.25,
            attributionControl: false,
            zoomControl: false
        });

        // Set bounds
        map.fitBounds(bounds);
        map.setMaxBounds([[-150, -150], [1174, 1174]]);

        // Initialize marker layer group
        markersLayer = L.layerGroup().addTo(map);

        // Load initial floor plan (Pasar Gede Lt 1)
        loadFloorPlan(currentBuilding, currentFloor);

        // Click handler on map canvas
        map.on('click', (e) => {
            const selecting = Navigation.getSelectingFor();
            if (selecting) {
                // Find nearest node
                const closest = findClosestNode(e.latlng.lng, e.latlng.lat, currentFloor, currentBuilding);
                if (closest) {
                    Navigation.setLocationFromMap(closest.id, closest.name);
                }
            } else {
                // Clicking blank space closes detail panel and clears highlight
                clearHighlight();
                DetailPanel.close();
            }
        });

        setupMapControls();
    }

    /**
     * Find nearest navigable node to clicked coordinate
     */
    function findClosestNode(x, y, floor, bldId) {
        const flNodes = NavigationGraph.getNodesForFloor(floor, bldId);
        let closest = null;
        let minDist = Infinity;

        for (const [id, node] of Object.entries(flNodes)) {
            const dx = node.x - x;
            const dy = node.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDist) {
                minDist = dist;
                closest = node;
            }
        }
        return closest;
    }

    /**
     * Load official SVG architectural blueprint and stall markers
     */
    function loadFloorPlan(buildingId, floorNum) {
        currentBuilding = buildingId;
        currentFloor = floorNum;
        MarketData.setBuilding(buildingId);

        const key = buildingId + '-' + floorNum;
        const svgPath = svgMapPaths[key];

        // 1. Swap SVG floorplan overlay
        if (svgOverlay) {
            map.removeLayer(svgOverlay);
            svgOverlay = null;
        }

        if (svgPath) {
            svgOverlay = L.imageOverlay(svgPath, bounds, {
                opacity: 0.96,
                interactive: false
            }).addTo(map);
        }

        // 2. Clear previous markers
        markersLayer.clearLayers();
        markersByCategory = {};

        // 3. Render stall/kios icons from real data
        const stalls = MarketData.getFloorStalls(floorNum, buildingId);

        stalls.forEach(stall => {
            const catId = (stall.category || '').toLowerCase();
            const category = (MarketData.getCategory ? MarketData.getCategory(stall.category) : null) || 
                MarketData.getCategories()[stall.category] || {
                id: catId || 'kios',
                name: stall.categoryLabel || 'Kios',
                icon: stall.icon || '📍',
                color: stall.color || '#C0392B'
            };

            if (!markersByCategory[catId]) {
                markersByCategory[catId] = [];
            }

            // Ensure coordinates exist and fallback safely
            const stallLat = stall.lat !== undefined ? stall.lat : (1024 - (stall.y || 500));
            const stallLng = stall.lng !== undefined ? stall.lng : (stall.x || 500);

            // Create custom icon
            const markerIcon = createStallMarkerIcon(stall, category);
            const marker = L.marker([stallLat, stallLng], {
                icon: markerIcon,
                title: stall.name,
                keyboard: true
            });

            // Tooltip on hover
            marker.bindTooltip(`
                <strong>${stall.name}</strong><br>
                <small style="color:${category.color || '#C0392B'}; font-weight:600;">${category.name || stall.categoryLabel || 'Kios'}</small>
            `, {
                direction: 'top',
                offset: [0, -14],
                className: 'custom-map-tooltip'
            });

            // Click interaction
            marker.on('click', (e) => {
                L.DomEvent.stopPropagation(e);
                const selecting = Navigation.getSelectingFor();
                if (selecting) {
                    Navigation.setLocationFromMap(stall.nodeId || stall.id, stall.name);
                } else {
                    highlightStall(stall);
                    DetailPanel.show(stall.id);
                }
            });

            // Store marker in category array
            markersByCategory[catId].push(marker);

            // Add to map if category is currently checked in legend
            if (Legend.isCategoryActive(catId) || Legend.isCategoryActive(stall.category)) {
                markersLayer.addLayer(marker);
            }
        });

        // Update UI Indicators
        updateUIIndicators();

        // Re-draw route if active
        const activeRoute = Navigation.getCurrentRoute();
        if (activeRoute) {
            drawRoute(activeRoute);
        }
    }

    /**
     * Create custom pin marker icon with category emoji and colors
     */
    function createStallMarkerIcon(stall, category) {
        const isLegendary = stall.isLegendary;
        const color = category.color || '#C0392B';
        const iconEmoji = category.icon || '📍';

        return L.divIcon({
            className: 'stall-map-marker',
            html: `
                <div class="stall-marker-inner ${isLegendary ? 'legendary' : ''}" style="border-color: ${color};">
                    <span>${iconEmoji}</span>
                </div>
            `,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
    }

    /**
     * Show/Hide stall markers when category is toggled in the legend
     */
    function setCategoryVisibility(categoryId, isVisible) {
        if (!categoryId) {
            refreshCategoryVisibility();
            return;
        }
        const catKey = String(categoryId).toLowerCase();
        const markers = markersByCategory[catKey] || markersByCategory[categoryId];
        if (!markers) return;

        markers.forEach(marker => {
            if (isVisible) {
                if (!markersLayer.hasLayer(marker)) {
                    markersLayer.addLayer(marker);
                }
            } else {
                if (markersLayer.hasLayer(marker)) {
                    markersLayer.removeLayer(marker);
                }
            }
        });
    }

    /**
     * Refresh all marker visibility based on current Legend state
     */
    function refreshCategoryVisibility() {
        const activeCats = Legend.getActiveCategories();
        for (const [catId, markers] of Object.entries(markersByCategory)) {
            const isVisible = activeCats.has(catId) || activeCats.has(catId.toLowerCase());
            markers.forEach(marker => {
                if (isVisible) {
                    if (!markersLayer.hasLayer(marker)) {
                        markersLayer.addLayer(marker);
                    }
                } else {
                    if (markersLayer.hasLayer(marker)) {
                        markersLayer.removeLayer(marker);
                    }
                }
            });
        }
    }

    /**
     * Reload current floor and re-render all stall markers
     */
    function reloadFloor() {
        loadFloorPlan(currentBuilding, currentFloor);
    }

    /**
     * Switch building (Pasar Gede vs Pasar Buah)
     */
    function switchBuilding(buildingId) {
        if (currentBuilding === buildingId) return;
        currentBuilding = buildingId;

        // Reset to floor 1
        currentFloor = 1;

        // Update Building buttons in sidebar
        document.querySelectorAll('.building-btn').forEach(btn => {
            const isTarget = btn.dataset.building === buildingId;
            btn.classList.toggle('active', isTarget);
            btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
        });

        // Update Floor buttons in sidebar
        document.querySelectorAll('.floor-btn').forEach(btn => {
            const btnFloor = parseInt(btn.dataset.floor, 10);
            const isTarget = btnFloor === 1;
            btn.classList.toggle('active', isTarget);
            btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
        });

        // Re-render legend
        const legendContainer = document.getElementById('legendContainer');
        Legend.init(legendContainer, 1, (catKey, isVis) => {
            if (catKey) {
                setCategoryVisibility(catKey, isVis);
            } else {
                // All toggle
                Object.keys(markersByCategory).forEach(k => setCategoryVisibility(k, isVis));
            }
        }, buildingId);

        // Load new floorplan
        loadFloorPlan(buildingId, 1);
        map.fitBounds(bounds);

        const bldInfo = MarketData.getBuildingInfo(buildingId);
        A11y.announce(`Beralih ke gedung ${bldInfo ? bldInfo.name : buildingId}`);
    }

    /**
     * Switch floor level (1 or 2)
     */
    function switchFloor(floorNum) {
        if (currentFloor === floorNum) return;
        currentFloor = floorNum;

        // Update Floor buttons in sidebar
        document.querySelectorAll('.floor-btn').forEach(btn => {
            const btnFloor = parseInt(btn.dataset.floor, 10);
            const isTarget = btnFloor === floorNum;
            btn.classList.toggle('active', isTarget);
            btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
        });

        // Re-render legend for this floor
        const legendContainer = document.getElementById('legendContainer');
        Legend.render(legendContainer, floorNum, currentBuilding);

        // Load floorplan
        loadFloorPlan(currentBuilding, floorNum);

        A11y.announce(`Beralih ke Lantai ${floorNum}`);
    }

    /**
     * Update header & badge text
     */
    function updateUIIndicators() {
        const bldInfo = MarketData.getBuildingInfo(currentBuilding);
        const bldName = bldInfo ? bldInfo.name : 'Pasar Gedhe';

        const headerSubtitle = document.getElementById('headerSubtitle');
        if (headerSubtitle) {
            headerSubtitle.textContent = `${bldName} · Lantai ${currentFloor}`;
        }

        // Subtitles in floor selector
        const f1Sub = document.getElementById('floor1Subtitle');
        const f2Sub = document.getElementById('floor2Subtitle');
        if (f1Sub && f2Sub) {
            if (currentBuilding === 'pasar-gede') {
                f1Sub.textContent = 'Pasar Basah, Buah & Sembako';
                f2Sub.textContent = 'Sentra Kuliner Legendaris';
            } else {
                f1Sub.textContent = 'Sentra Buah Segar & Kios';
                f2Sub.textContent = 'Foodcourt & Kuliner Buah';
            }
        }
    }

    /**
     * Draw navigation route
     */
    function drawRoute(route) {
        clearRoute();
        if (!route || !route.coordinates || route.coordinates.length < 2) return;

        routeLayer = L.layerGroup().addTo(map);

        // Helper to convert coordinate object to Leaflet [lat, lng]
        const toLatLng = (c) => [
            c.lat !== undefined ? c.lat : (1024 - c.y),
            c.lng !== undefined ? c.lng : c.x
        ];

        // Coordinates matching current building and floor
        const floorCoords = route.coordinates.filter(c => c.floor === currentFloor && (!c.buildingId || c.buildingId === currentBuilding));

        if (floorCoords.length > 0) {
            const latlngs = floorCoords.map(toLatLng);
            const mode = route.mode || 'normal';

            let lineColor = '#C0392B';
            let lineDash = '10, 8';
            let lineWeight = 6;

            if (mode === 'wheelchair') {
                lineColor = '#2196F3';
                lineDash = '8, 6';
                lineWeight = 6;
            } else if (mode === 'blind') {
                lineColor = '#8E44AD';
                lineDash = '6, 6';
                lineWeight = 7;
            }

            // Glow / casing line
            L.polyline(latlngs, {
                color: mode === 'wheelchair' ? '#BBDEFB' : mode === 'blind' ? '#E1BEE7' : '#FFCDD2',
                weight: lineWeight + 4,
                opacity: 0.7,
                lineCap: 'round',
                lineJoin: 'round'
            }).addTo(routeLayer);

            // Flowing animated line along authentic corridors
            const activeLine = L.polyline(latlngs, {
                color: lineColor,
                weight: lineWeight,
                opacity: 0.95,
                className: 'route-line-animated',
                dashArray: lineDash,
                lineCap: 'round',
                lineJoin: 'round'
            }).addTo(routeLayer);

            // Start marker if on this floor & building
            const startCoord = route.coordinates[0];
            const endCoord = route.coordinates[route.coordinates.length - 1];

            if (startCoord.floor === currentFloor && (!startCoord.buildingId || startCoord.buildingId === currentBuilding)) {
                L.circleMarker(toLatLng(startCoord), {
                    radius: 8,
                    fillColor: '#27AE60',
                    color: '#FFFFFF',
                    weight: 3,
                    fillOpacity: 1
                }).bindTooltip(`Mulai: ${route.startNode ? route.startNode.name : 'Titik Awal'}`, { permanent: true, direction: 'top' }).addTo(routeLayer);
            }

            if (endCoord.floor === currentFloor && (!endCoord.buildingId || endCoord.buildingId === currentBuilding)) {
                L.circleMarker(toLatLng(endCoord), {
                    radius: 9,
                    fillColor: '#C0392B',
                    color: '#FFFFFF',
                    weight: 3,
                    fillOpacity: 1
                }).bindTooltip(`Tujuan: ${route.endNode ? route.endNode.name : 'Tujuan'}`, { permanent: true, direction: 'top' }).addTo(routeLayer);
            }

            // Transition badges (floor changes or crosswalks)
            if (route.steps) {
                route.steps.forEach(step => {
                    if (step.type === 'floor-change' || step.type === 'building-change') {
                        const c = step.coord;
                        if (c && c.floor === currentFloor && (!c.buildingId || c.buildingId === currentBuilding)) {
                            const icon = L.divIcon({
                                className: 'trans-marker',
                                html: `
                                    <div style="
                                        background: ${step.type === 'building-change' ? '#E67E22' : '#8E44AD'};
                                        color: white;
                                        padding: 5px 10px;
                                        border-radius: 14px;
                                        font-size: 11px;
                                        font-weight: bold;
                                        white-space: nowrap;
                                        box-shadow: 0 3px 8px rgba(0,0,0,0.3);
                                        display: flex;
                                        align-items: center;
                                        gap: 4px;
                                    ">
                                        <span>${step.icon}</span>
                                        <span>${step.text}</span>
                                    </div>
                                `,
                                iconAnchor: [60, 15]
                            });
                            L.marker(toLatLng(c), { icon }).addTo(routeLayer);
                        }
                    }
                });
            }

            map.fitBounds(activeLine.getBounds(), { padding: [60, 60] });
        }
    }

    function clearRoute() {
        if (routeLayer) {
            map.removeLayer(routeLayer);
            routeLayer = null;
        }
    }

    /**
     * Clear active highlight marker
     */
    function clearHighlight() {
        if (highlightLayer) {
            map.removeLayer(highlightLayer);
            highlightLayer = null;
        }
    }

    /**
     * Highlight specific stall with pulsing marker
     */
    function highlightStall(stall) {
        if (!stall) return;

        // Switch building & floor if needed
        if (stall.buildingId && stall.buildingId !== currentBuilding) {
            switchBuilding(stall.buildingId);
        }
        if (stall.floor !== currentFloor) {
            switchFloor(stall.floor);
        }

        // Remove previous highlight
        clearHighlight();

        const lat = stall.lat !== undefined ? stall.lat : (1024 - (stall.y || 500));
        const lng = stall.lng !== undefined ? stall.lng : (stall.x || 500);
        const latlng = L.latLng(lat, lng);

        highlightLayer = L.circleMarker(latlng, {
            radius: 22,
            color: '#C0392B',
            weight: 3,
            fillColor: '#FFCDD2',
            fillOpacity: 0.5,
            className: 'pulse'
        }).addTo(map);

        map.setView(latlng, 1.25, { animate: true });
    }

    function setupMapControls() {
        const zoomInBtn = document.getElementById('zoomIn');
        const zoomOutBtn = document.getElementById('zoomOut');
        const resetViewBtn = document.getElementById('resetView');
        const fullscreenBtn = document.getElementById('fullscreen');

        if (zoomInBtn) zoomInBtn.addEventListener('click', () => map.zoomIn());
        if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => map.zoomOut());
        if (resetViewBtn) {
            resetViewBtn.addEventListener('click', () => {
                map.fitBounds(bounds);
                A11y.announce('Peta dipusatkan kembali');
            });
        }
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => {});
                } else {
                    document.exitFullscreen().catch(() => {});
                }
            });
        }
    }

    function getCurrentBuilding() {
        return currentBuilding;
    }

    function getCurrentFloor() {
        return currentFloor;
    }

    function getMap() {
        return map;
    }

    return {
        init,
        switchBuilding,
        switchFloor,
        reloadFloor,
        refreshFloor: reloadFloor,
        setCategoryVisibility,
        refreshCategoryVisibility,
        drawRoute,
        clearRoute,
        highlightStall,
        clearHighlight,
        getCurrentBuilding,
        getCurrentFloor,
        getMap
    };
})();
