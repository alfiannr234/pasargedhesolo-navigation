/**
 * Navigation Component
 * Handles origin/destination inputs, mode toggling, route finding, and turn-by-turn list
 */

const Navigation = (() => {
    let currentRoute = null;
    let currentMode = 'normal';
    let selectingFor = null; // 'from' or 'to'
    let fromNodeId = null;
    let toNodeId = null;
    let onRouteFoundCallback = null;
    let onRouteClearedCallback = null;
    let onLocationSelectCallback = null;

    function init(onRouteFound, onRouteCleared, onLocationSelect) {
        onRouteFoundCallback = onRouteFound;
        onRouteClearedCallback = onRouteCleared;
        onLocationSelectCallback = onLocationSelect;

        setupInputAutocomplete('navFrom', 'navFromSuggestions', 'from');
        setupInputAutocomplete('navTo', 'navToSuggestions', 'to');
        setupRouteMode();
        setupButtons();
    }

    function setupInputAutocomplete(inputId, suggestionsId, type) {
        const input = document.getElementById(inputId);
        const suggestions = document.getElementById(suggestionsId);
        if (!input || !suggestions) return;

        let debounceTimer;

        input.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const query = input.value.trim().toLowerCase();
                if (query.length < 1) {
                    suggestions.classList.remove('active');
                    return;
                }

                const locations = NavigationGraph.getAllNavigableLocations();
                const filtered = locations.filter(loc => 
                    loc.name.toLowerCase().includes(query)
                ).slice(0, 8);

                if (filtered.length === 0) {
                    suggestions.classList.remove('active');
                    return;
                }

                suggestions.innerHTML = filtered.map(loc => {
                    let emoji = '📍';
                    if (loc.type === 'entrance') emoji = '🚪';
                    else if (loc.type === 'stairs') emoji = '🪜';
                    else if (loc.type === 'ramp') emoji = '♿';
                    else if (loc.name.toLowerCase().includes('toilet')) emoji = '🚻';
                    else if (loc.name.toLowerCase().includes('mushola')) emoji = '🕌';
                    else if (loc.name.toLowerCase().includes('mie') || loc.name.toLowerCase().includes('soto')) emoji = '🍜';
                    else if (loc.name.toLowerCase().includes('dawet') || loc.name.toLowerCase().includes('tahok')) emoji = '🥤';
                    else if (loc.name.toLowerCase().includes('buah')) emoji = '🍎';

                    return `
                        <div class="nav-suggestion-item" data-node-id="${loc.nodeId}" role="option">
                            <span class="nav-suggestion-emoji">${emoji}</span>
                            <span>${loc.name} (Lt.${loc.floor})</span>
                        </div>
                    `;
                }).join('');

                suggestions.classList.add('active');

                suggestions.querySelectorAll('.nav-suggestion-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const nodeId = item.dataset.nodeId;
                        const node = NavigationGraph.getNode(nodeId);
                        if (node) {
                            input.value = node.name;
                            if (type === 'from') fromNodeId = nodeId;
                            else toNodeId = nodeId;
                            suggestions.classList.remove('active');
                            updateGoButton();
                        }
                    });
                });
            }, 150);
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest(`#${inputId}`) && !e.target.closest(`#${suggestionsId}`)) {
                suggestions.classList.remove('active');
            }
        });
    }

    function setupRouteMode() {
        document.querySelectorAll('.route-mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.route-mode-btn').forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-checked', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-checked', 'true');
                currentMode = btn.dataset.mode;
                
                A11y.setMode(currentMode);
                
                // Re-calculate route if one exists
                if (currentRoute && fromNodeId && toNodeId) {
                    findRoute();
                }
            });
        });
    }

    function setupButtons() {
        const goBtn = document.getElementById('navGoBtn');
        if (goBtn) {
            goBtn.addEventListener('click', findRoute);
        }

        const clearBtn = document.getElementById('clearRoute');
        if (clearBtn) {
            clearBtn.addEventListener('click', clearRoute);
        }

        const swapBtn = document.getElementById('navSwap');
        if (swapBtn) {
            swapBtn.addEventListener('click', () => {
                const fromInput = document.getElementById('navFrom');
                const toInput = document.getElementById('navTo');
                
                const tempValue = fromInput.value;
                const tempNode = fromNodeId;
                
                fromInput.value = toInput.value;
                fromNodeId = toNodeId;
                toInput.value = tempValue;
                toNodeId = tempNode;
                
                updateGoButton();
                A11y.announce('Titik awal dan tujuan ditukar');

                if (fromNodeId && toNodeId) {
                    findRoute();
                }
            });
        }

        const locateFrom = document.getElementById('navLocateFrom');
        const locateTo = document.getElementById('navLocateTo');
        
        if (locateFrom) {
            locateFrom.addEventListener('click', () => {
                toggleMapPick('from');
            });
        }
        
        if (locateTo) {
            locateTo.addEventListener('click', () => {
                toggleMapPick('to');
            });
        }

        // Top-right Header Toggle Button
        const btnRouteToggle = document.getElementById('btnRouteToggle');
        if (btnRouteToggle) {
            btnRouteToggle.addEventListener('click', toggleRoutePopup);
        }

        // Popup Close Button
        const routePopupClose = document.getElementById('routePopupClose');
        if (routePopupClose) {
            routePopupClose.addEventListener('click', closeRoutePopup);
        }

        // Popup Backdrop Click
        const routePopupBackdrop = document.getElementById('routePopupBackdrop');
        if (routePopupBackdrop) {
            routePopupBackdrop.addEventListener('click', closeRoutePopup);
        }

        // Map Pick Banner Cancel
        const mapPickCancel = document.getElementById('mapPickCancel');
        if (mapPickCancel) {
            mapPickCancel.addEventListener('click', () => toggleMapPick(null));
        }

        // Escape Key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isPopupOpen()) {
                closeRoutePopup();
            }
        });
    }

    function openRoutePopup() {
        if (typeof Directory !== 'undefined' && Directory.isOpen()) {
            Directory.close();
        }

        const popup = document.getElementById('routePopup');
        const backdrop = document.getElementById('routePopupBackdrop');
        const btnToggle = document.getElementById('btnRouteToggle');

        if (popup) {
            popup.style.display = 'flex';
            popup.classList.add('open');
        }
        if (backdrop) {
            backdrop.style.display = 'block';
        }
        if (btnToggle) {
            btnToggle.classList.add('active');
            btnToggle.setAttribute('aria-expanded', 'true');
        }
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    function closeRoutePopup() {
        const popup = document.getElementById('routePopup');
        const backdrop = document.getElementById('routePopupBackdrop');
        const btnToggle = document.getElementById('btnRouteToggle');
        const suggestionsFrom = document.getElementById('navFromSuggestions');
        const suggestionsTo = document.getElementById('navToSuggestions');

        if (popup) {
            popup.style.display = 'none';
            popup.classList.remove('open');
        }
        if (backdrop) {
            backdrop.style.display = 'none';
        }
        if (btnToggle) {
            btnToggle.classList.remove('active');
            btnToggle.setAttribute('aria-expanded', 'false');
        }
        suggestionsFrom?.classList.remove('active');
        suggestionsTo?.classList.remove('active');
    }

    function toggleRoutePopup() {
        const popup = document.getElementById('routePopup');
        if (popup && (popup.style.display === 'flex' || popup.classList.contains('open'))) {
            closeRoutePopup();
        } else {
            openRoutePopup();
        }
    }

    function isPopupOpen() {
        const popup = document.getElementById('routePopup');
        return popup && popup.style.display !== 'none';
    }

    function toggleMapPick(type) {
        const locateFrom = document.getElementById('navLocateFrom');
        const locateTo = document.getElementById('navLocateTo');
        const popup = document.getElementById('routePopup');
        const backdrop = document.getElementById('routePopupBackdrop');
        const banner = document.getElementById('mapPickBanner');
        const bannerText = document.getElementById('mapPickText');

        if (!type || selectingFor === type) {
            selectingFor = null;
            locateFrom?.classList.remove('active');
            locateTo?.classList.remove('active');
            if (banner) banner.style.display = 'none';
            openRoutePopup();
            A11y.announce('Pemilihan titik di peta dibatalkan');
        } else {
            selectingFor = type;
            locateFrom?.classList.toggle('active', type === 'from');
            locateTo?.classList.toggle('active', type === 'to');
            
            // Hide popup temporarily to allow clear view & tap on map
            if (popup) popup.style.display = 'none';
            if (backdrop) backdrop.style.display = 'none';
            
            if (banner) {
                banner.style.display = 'flex';
                if (bannerText) {
                    bannerText.textContent = type === 'from' 
                        ? 'Sentuh kios pada denah untuk memilih Titik Awal (Dari)' 
                        : 'Sentuh kios pada denah untuk memilih Tujuan (Ke)';
                }
            }
            
            A11y.announce(`Klik atau sentuh kios pada peta untuk menentukan ${type === 'from' ? 'titik awal' : 'tujuan'}`);
        }
        
        if (onLocationSelectCallback) {
            onLocationSelectCallback(selectingFor);
        }
    }

    function setLocationFromMap(nodeId, name) {
        if (!selectingFor) return;

        const isFrom = selectingFor === 'from';
        const input = document.getElementById(isFrom ? 'navFrom' : 'navTo');
        if (input) {
            input.value = name;
        }
        
        if (isFrom) {
            fromNodeId = nodeId;
        } else {
            toNodeId = nodeId;
        }

        const locateFrom = document.getElementById('navLocateFrom');
        const locateTo = document.getElementById('navLocateTo');
        const banner = document.getElementById('mapPickBanner');

        locateFrom?.classList.remove('active');
        locateTo?.classList.remove('active');
        if (banner) banner.style.display = 'none';
        selectingFor = null;
        
        if (onLocationSelectCallback) {
            onLocationSelectCallback(null);
        }
        
        updateGoButton();
        openRoutePopup();
        A11y.announce(`${name} dipilih sebagai ${isFrom ? 'titik awal' : 'tujuan'}`);

        if (fromNodeId && toNodeId) {
            findRoute();
        }
    }

    function setOrigin(nodeId, name) {
        const fromInput = document.getElementById('navFrom');
        if (fromInput) {
            fromInput.value = name;
        }
        fromNodeId = nodeId;
        updateGoButton();
        openRoutePopup();

        if (toNodeId) {
            findRoute();
        } else {
            const toInput = document.getElementById('navTo');
            if (toInput) {
                toInput.focus();
            }
        }
    }

    function setDestination(nodeId, name) {
        const toInput = document.getElementById('navTo');
        if (toInput) {
            toInput.value = name;
        }
        toNodeId = nodeId;
        updateGoButton();
        openRoutePopup();

        if (fromNodeId) {
            findRoute();
        } else {
            const fromInput = document.getElementById('navFrom');
            if (fromInput) {
                fromInput.focus();
            }
        }
    }

    function updateGoButton() {
        const goBtn = document.getElementById('navGoBtn');
        if (goBtn) {
            goBtn.disabled = !fromNodeId || !toNodeId;
        }
    }

    function findRoute() {
        if (!fromNodeId || !toNodeId) {
            A11y.announce('Silakan pilih titik awal dan tujuan terlebih dahulu');
            return;
        }

        const route = Pathfinding.findPath(fromNodeId, toNodeId, currentMode);
        
        if (!route) {
            A11y.announce('Maaf, rute tidak ditemukan untuk mode yang dipilih.');
            
            const resultDiv = document.getElementById('routeResult');
            if (resultDiv) {
                resultDiv.style.display = 'block';
                resultDiv.innerHTML = `
                    <div class="a11y-warning">
                        <i data-lucide="alert-triangle" aria-hidden="true"></i>
                        <span>Rute tidak ditemukan dengan mode <strong>${currentMode === 'wheelchair' ? 'Kursi Roda' : currentMode === 'blind' ? 'Tunanetra' : 'Normal'}</strong>. ${currentMode === 'wheelchair' ? 'Tidak tersedia jalur ramp untuk menghubungkan kedua lokasi ini.' : 'Coba gunakan rute normal.'}</span>
                    </div>
                `;
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }
            return;
        }

        currentRoute = route;
        displayRoute(route);
        
        if (onRouteFoundCallback) {
            onRouteFoundCallback(route);
        }

        A11y.speakRouteSummary(route);
    }

    function displayRoute(route) {
        const resultDiv = document.getElementById('routeResult');
        const summaryDiv = document.getElementById('routeSummary');

        if (!resultDiv || !summaryDiv) return;

        resultDiv.style.display = 'flex';

        // Summary bar
        summaryDiv.innerHTML = `
            <div class="route-summary-item">
                <span class="route-summary-value">${route.totalDistance}m</span>
                <span class="route-summary-label">Jarak</span>
            </div>
            <div class="route-summary-divider"></div>
            <div class="route-summary-item">
                <span class="route-summary-value">~${route.estimatedTime} mnt</span>
                <span class="route-summary-label">Estimasi</span>
            </div>
            ${route.isMultiFloor ? `
            <div class="route-summary-divider"></div>
            <div class="route-summary-item">
                <span class="route-summary-value">Lt.${route.floors.join('→')}</span>
                <span class="route-summary-label">Lantai</span>
            </div>
            ` : ''}
        `;
    }

    function clearRoute() {
        currentRoute = null;
        fromNodeId = null;
        toNodeId = null;

        const fromInput = document.getElementById('navFrom');
        const toInput = document.getElementById('navTo');
        const resultDiv = document.getElementById('routeResult');

        if (fromInput) fromInput.value = '';
        if (toInput) toInput.value = '';
        if (resultDiv) resultDiv.style.display = 'none';

        updateGoButton();
        
        if (onRouteClearedCallback) {
            onRouteClearedCallback();
        }

        A11y.announce('Rute telah dihapus');
    }

    function getSelectingFor() {
        return selectingFor;
    }

    function getCurrentRoute() {
        return currentRoute;
    }

    function getCurrentMode() {
        return currentMode;
    }

    return {
        init,
        openRoutePopup,
        closeRoutePopup,
        toggleRoutePopup,
        isPopupOpen,
        setOrigin,
        setDestination,
        setLocationFromMap,
        findRoute,
        clearRoute,
        getSelectingFor,
        getCurrentRoute,
        getCurrentMode
    };
})();
