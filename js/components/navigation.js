/**
 * Navigation Component
 * Handles origin/destination inputs, mode toggling, route finding, and turn-by-turn list
 */

const Navigation = (() => {
    let currentRoute = null;
    let currentMode = 'normal';
    let currentStepIndex = 0;
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
        setupAudioControls();
        setupRouteHudControls();
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

                const esc = typeof escapeHTML === 'function' ? escapeHTML : str => str;
                const escAttr = typeof sanitizeAttr === 'function' ? sanitizeAttr : esc;

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
                        <div class="nav-suggestion-item" data-node-id="${escAttr(loc.nodeId)}" role="option">
                            <span class="nav-suggestion-emoji">${emoji}</span>
                            <span>${esc(loc.name)} (Lt.${loc.floor})</span>
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

        if (typeof A11y !== 'undefined' && A11y.isSpeaking()) {
            A11y.stopSpeaking();
            resetAudioButton();
        }
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
        if (typeof MarketMap !== 'undefined' && MarketMap.setSelectedStall) {
            MarketMap.setSelectedStall(nodeId);
        }
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
        if (typeof MarketMap !== 'undefined' && MarketMap.setSelectedStall) {
            MarketMap.setSelectedStall(nodeId);
        }
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

        // Return to map view by closing the route modal
        closeRoutePopup();

        // Launch Top-Center Turn-by-Turn HUD Card on the map (speaks Step 1 directly, skips distance/time summary)
        showStepHud(route, 0);
    }

    function setupAudioControls() {
        const audioToggle = document.getElementById('routeAudioToggle');
        const audioIcon = document.getElementById('routeAudioIcon');
        const btnPlayAudio = document.getElementById('btnPlayAudio');

        // Set initial toggle state from A11y (default is true / checked)
        if (audioToggle) {
            audioToggle.checked = A11y.isAudioEnabled();
        }
        if (audioIcon) {
            audioIcon.textContent = A11y.isAudioEnabled() ? '🔊' : '🔇';
        }

        // Handle Audio Toggle change
        if (audioToggle) {
            audioToggle.addEventListener('change', (e) => {
                const enabled = e.target.checked;
                A11y.setAudioEnabled(enabled);
                if (audioIcon) {
                    audioIcon.textContent = enabled ? '🔊' : '🔇';
                }
                if (enabled) {
                    A11y.announce('Panduan suara rute diaktifkan');
                } else {
                    A11y.announce('Panduan suara rute dimatikan');
                    resetAudioButton();
                }
            });
        }

        // Handle Play/Stop Audio Guidance Button
        if (btnPlayAudio) {
            btnPlayAudio.addEventListener('click', () => {
                if (A11y.isSpeaking()) {
                    A11y.stopSpeaking();
                    resetAudioButton();
                    A11y.announce('Panduan suara dihentikan');
                } else {
                    if (!currentRoute) return;
                    startAudioGuidance();
                }
            });
        }
    }

    function startAudioGuidance() {
        if (!currentRoute) return;
        const btnPlayAudio = document.getElementById('btnPlayAudio');
        const btnAudioIcon = document.getElementById('btnAudioIcon');
        const btnAudioText = document.getElementById('btnAudioText');

        if (btnPlayAudio) {
            btnPlayAudio.classList.add('playing');
        }
        if (btnAudioIcon) btnAudioIcon.textContent = '⏹️';
        if (btnAudioText) btnAudioText.textContent = 'Hentikan Suara';

        A11y.playFullRouteGuidance(currentRoute, {
            onStart: () => {},
            onStepChange: (stepIndex) => {
                highlightStepItem(stepIndex);
            },
            onEnd: () => {
                resetAudioButton();
            }
        });
    }

    function resetAudioButton() {
        const btnPlayAudio = document.getElementById('btnPlayAudio');
        const btnAudioIcon = document.getElementById('btnAudioIcon');
        const btnAudioText = document.getElementById('btnAudioText');

        if (btnPlayAudio) {
            btnPlayAudio.classList.remove('playing');
        }
        if (btnAudioIcon) btnAudioIcon.textContent = '🔊';
        if (btnAudioText) btnAudioText.textContent = 'Putar Panduan Suara';

        document.querySelectorAll('.route-step-item.active-speaking').forEach(el => {
            el.classList.remove('active-speaking');
        });
    }

    function highlightStepItem(stepIndex) {
        document.querySelectorAll('.route-step-item').forEach((el) => {
            const idx = parseInt(el.dataset.stepIndex, 10);
            if (idx === stepIndex) {
                el.classList.add('active-speaking');
                el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                el.classList.remove('active-speaking');
            }
        });
    }

    function displayRoute(route) {
        const resultDiv = document.getElementById('routeResult');
        const summaryDiv = document.getElementById('routeSummary');
        const stepsContainer = document.getElementById('routeStepsContainer');
        const stepsList = document.getElementById('routeStepsList');
        const stepsCount = document.getElementById('routeStepsCount');

        if (!resultDiv || !summaryDiv) return;

        resultDiv.style.display = 'flex';
        resetAudioButton();

        // 1. Render Summary Bar
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

        // 2. Render Step-by-Step Directions
        if (stepsContainer && stepsList) {
            const steps = route.steps || [];
            if (stepsCount) {
                stepsCount.textContent = `${steps.length} Langkah`;
            }

            if (steps.length > 0) {
                const esc = typeof escapeHTML === 'function' ? escapeHTML : str => str;
                const escAttr = typeof sanitizeAttr === 'function' ? sanitizeAttr : esc;

                stepsList.innerHTML = steps.map((step, idx) => {
                    const badgeHtml = step.badge 
                        ? `<span class="step-badge ${escAttr(step.badge.class || '')}">${esc(step.badge.text)}</span>` 
                        : '';
                    return `
                        <div class="route-step-item" data-step-index="${idx}" tabindex="0" role="listitem">
                            <span class="step-icon" aria-hidden="true">${esc(step.icon || '📍')}</span>
                            <div class="step-content">
                                <span class="step-text">${esc(step.text)} ${badgeHtml}</span>
                                ${step.detail ? `<span class="step-detail">${esc(step.detail)}</span>` : ''}
                            </div>
                            <button type="button" class="btn-step-speak" data-step-index="${idx}" title="Dengarkan langkah ini" aria-label="Dengarkan: ${escAttr(step.text)}">
                                🔊
                            </button>
                        </div>
                    `;
                }).join('');

                // Bind click to listen to individual step
                stepsList.querySelectorAll('.btn-step-speak').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const idx = parseInt(btn.dataset.stepIndex, 10);
                        const step = steps[idx];
                        if (step) {
                            highlightStepItem(idx);
                            A11y.speakStep(step, {
                                force: true,
                                stepNumber: idx + 1,
                                onEnd: () => {
                                    highlightStepItem(-1);
                                }
                            });
                        }
                    });
                });

                // Pan to step coordinate when clicked
                stepsList.querySelectorAll('.route-step-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const idx = parseInt(item.dataset.stepIndex, 10);
                        const step = steps[idx];
                        if (step && step.coord && typeof MarketMap !== 'undefined' && MarketMap.getMap) {
                            const map = MarketMap.getMap();
                            if (map) {
                                map.panTo([step.coord.lat, step.coord.lng], { animate: true });
                            }
                        }
                    });
                });
            } else {
                stepsList.innerHTML = `<div style="padding:10px 14px; color:var(--gray-500); font-size:0.75rem;">Ikuti garis rute berwarna pada peta.</div>`;
            }
        }
    }

    function clearRoute() {
        currentRoute = null;
        fromNodeId = null;
        toNodeId = null;

        closeStepHud();

        if (typeof A11y !== 'undefined' && A11y.isSpeaking()) {
            A11y.stopSpeaking();
            resetAudioButton();
        }

        const fromInput = document.getElementById('navFrom');
        const toInput = document.getElementById('navTo');
        const resultDiv = document.getElementById('routeResult');
        const stepsList = document.getElementById('routeStepsList');
        const stepsCount = document.getElementById('routeStepsCount');

        if (fromInput) fromInput.value = '';
        if (toInput) toInput.value = '';
        if (resultDiv) resultDiv.style.display = 'none';
        if (stepsList) stepsList.innerHTML = '';
        if (stepsCount) stepsCount.textContent = '0 Langkah';

        updateGoButton();
        
        if (onRouteClearedCallback) {
            onRouteClearedCallback();
        }

        A11y.announce('Rute telah dihapus');
    }

    // ============================================
    // TOP-CENTER TURN-BY-TURN HUD CONTROLLER
    // ============================================

    function setupRouteHudControls() {
        const btnPrev = document.getElementById('btnRouteHudPrev');
        const btnNext = document.getElementById('btnRouteHudNext');
        const btnClose = document.getElementById('btnRouteHudClose');
        const btnAudio = document.getElementById('btnRouteHudAudio');

        if (btnPrev) {
            btnPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!currentRoute || !currentRoute.steps) return;
                if (currentStepIndex > 0) {
                    updateStepHud(currentStepIndex - 1, true);
                }
            });
        }

        if (btnNext) {
            btnNext.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!currentRoute || !currentRoute.steps) return;
                if (currentStepIndex < currentRoute.steps.length - 1) {
                    updateStepHud(currentStepIndex + 1, true);
                } else {
                    // Last step finished -> close HUD and clear route
                    closeStepHud();
                    clearRoute();
                    if (typeof A11y !== 'undefined') {
                        A11y.announce('Anda telah tiba di tujuan. Rute navigasi selesai.');
                    }
                }
            });
        }

        if (btnClose) {
            btnClose.addEventListener('click', (e) => {
                e.stopPropagation();
                closeStepHud();
                clearRoute();
            });
        }

        if (btnAudio) {
            btnAudio.addEventListener('click', (e) => {
                e.stopPropagation();
                if (typeof A11y === 'undefined') return;
                if (A11y.isSpeaking()) {
                    A11y.stopSpeaking();
                    btnAudio.classList.remove('speaking');
                } else if (currentRoute && currentRoute.steps && currentRoute.steps[currentStepIndex]) {
                    btnAudio.classList.add('speaking');
                    A11y.speakStep(currentRoute.steps[currentStepIndex], {
                        force: true,
                        stepNumber: currentStepIndex + 1,
                        onStart: () => btnAudio.classList.add('speaking'),
                        onEnd: () => btnAudio.classList.remove('speaking')
                    });
                }
            });
        }

        // Keyboard arrow navigation when HUD is open
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            const hud = document.getElementById('routeStepHud');
            if (!hud || hud.style.display === 'none' || !currentRoute || !currentRoute.steps) return;

            if (e.key === 'ArrowLeft') {
                if (currentStepIndex > 0) {
                    e.preventDefault();
                    updateStepHud(currentStepIndex - 1, true);
                }
            } else if (e.key === 'ArrowRight') {
                if (currentStepIndex < currentRoute.steps.length - 1) {
                    e.preventDefault();
                    updateStepHud(currentStepIndex + 1, true);
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                closeStepHud();
                clearRoute();
            }
        });
    }

    function showStepHud(route, stepIdx = 0) {
        if (!route || !route.steps || route.steps.length === 0) return;
        currentRoute = route;
        currentStepIndex = stepIdx;

        const hud = document.getElementById('routeStepHud');
        if (hud) {
            hud.style.display = 'flex';
        }
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        updateStepHud(currentStepIndex, true);
    }

    function closeStepHud() {
        const hud = document.getElementById('routeStepHud');
        if (hud) {
            hud.style.display = 'none';
        }
        const btnAudio = document.getElementById('btnRouteHudAudio');
        if (btnAudio) {
            btnAudio.classList.remove('speaking');
        }
        if (typeof A11y !== 'undefined') {
            A11y.stopSpeaking();
        }
        if (typeof MarketMap !== 'undefined' && MarketMap.clearStepHighlight) {
            MarketMap.clearStepHighlight();
        }
    }

    function isStepHudOpen() {
        const hud = document.getElementById('routeStepHud');
        return hud && hud.style.display !== 'none';
    }

    function updateStepHud(stepIdx, shouldSpeak = true) {
        if (!currentRoute || !currentRoute.steps || currentRoute.steps.length === 0) return;

        const steps = currentRoute.steps;
        currentStepIndex = Math.max(0, Math.min(stepIdx, steps.length - 1));
        const step = steps[currentStepIndex];

        const badgeEl = document.getElementById('routeHudStepBadge');
        const floorEl = document.getElementById('routeHudFloorBadge');
        const iconEl = document.getElementById('routeHudIcon');
        const mainTextEl = document.getElementById('routeHudMainText');
        const subTextEl = document.getElementById('routeHudSubText');
        const btnPrev = document.getElementById('btnRouteHudPrev');
        const btnNext = document.getElementById('btnRouteHudNext');
        const btnAudio = document.getElementById('btnRouteHudAudio');
        const dotsEl = document.getElementById('routeHudDots');

        if (badgeEl) badgeEl.textContent = `Langkah ${currentStepIndex + 1} dari ${steps.length}`;
        if (floorEl) floorEl.textContent = `Lantai ${step.floor || 1}`;
        if (iconEl) iconEl.textContent = step.icon || '📍';
        if (mainTextEl) mainTextEl.textContent = step.text || '';
        
        let subText = step.detail || '';
        if (step.badge && step.badge.text) {
            subText = subText ? `${subText} · ${step.badge.text}` : step.badge.text;
        }
        if (subTextEl) subTextEl.textContent = subText;

        if (btnPrev) {
            btnPrev.disabled = (currentStepIndex === 0);
        }

        if (btnNext) {
            if (currentStepIndex === steps.length - 1) {
                btnNext.innerHTML = '<span>Selesai</span> <i data-lucide="check" aria-hidden="true"></i>';
                btnNext.classList.add('finish-btn');
                btnNext.setAttribute('title', 'Selesaikan rute navigasi');
            } else {
                btnNext.innerHTML = '<span>Selanjutnya</span> <i data-lucide="chevron-right" aria-hidden="true"></i>';
                btnNext.classList.remove('finish-btn');
                btnNext.setAttribute('title', 'Langkah selanjutnya');
            }
        }

        // Render progress dots
        if (dotsEl) {
            dotsEl.innerHTML = steps.map((s, idx) => `
                <span class="route-hud-dot ${idx === currentStepIndex ? 'active' : ''}" 
                    data-step-index="${idx}" 
                    title="Lompat ke langkah ${idx + 1}: ${s.text}"></span>
            `).join('');

            dotsEl.querySelectorAll('.route-hud-dot').forEach(dot => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const idx = parseInt(dot.dataset.stepIndex, 10);
                    if (!isNaN(idx)) {
                        updateStepHud(idx, true);
                    }
                });
            });
        }

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Sync with Map camera and highlight beacon
        if (typeof MarketMap !== 'undefined' && MarketMap.highlightRouteStep) {
            MarketMap.highlightRouteStep(step);
        }

        // Play audio if enabled
        if (shouldSpeak && typeof A11y !== 'undefined') {
            A11y.stopSpeaking();
            if (btnAudio) btnAudio.classList.add('speaking');
            A11y.speakStep(step, {
                force: true,
                stepNumber: currentStepIndex + 1,
                onStart: () => {
                    if (btnAudio) btnAudio.classList.add('speaking');
                },
                onEnd: () => {
                    if (btnAudio) btnAudio.classList.remove('speaking');
                }
            });
        }
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
        showStepHud,
        closeStepHud,
        isStepHudOpen,
        updateStepHud,
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
