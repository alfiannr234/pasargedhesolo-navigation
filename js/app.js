/**
 * Main Application Orchestrator - Pasar Gedhe Solo
 * Initializes all modules, wires event listeners, and provides keyboard navigation
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Initialize Detail Panel
    DetailPanel.init();

    // 3. Initialize Legend first so active categories are populated
    const legendContainer = document.getElementById('legendContainer');
    Legend.init(legendContainer, 1, (categoryKey, isVisible, activeSet) => {
        if (categoryKey) {
            MarketMap.setCategoryVisibility(categoryKey, isVisible);
        } else {
            MarketMap.refreshCategoryVisibility();
        }
    }, 'pasar-gede');

    // 4. Initialize Map (will display all active floor 1 stall icons)
    MarketMap.init();

    // 5. Initialize Search
    Search.init((selectedStall) => {
        MarketMap.highlightStall(selectedStall);
        DetailPanel.show(selectedStall.id);
    });

    // 5b. Initialize Directory (Tenant List)
    Directory.init((selectedStall) => {
        MarketMap.highlightStall(selectedStall);
        DetailPanel.show(selectedStall.id);
    });

    // 6. Initialize Navigation
    Navigation.init(
        // On route found
        (route) => {
            MarketMap.drawRoute(route);
        },
        // On route cleared
        () => {
            MarketMap.clearRoute();
        },
        // On location select mode change
        (selectingFor) => {
            if (selectingFor) {
                // Collapse sidebar on small screens so user can tap the map
                if (window.innerWidth <= 768) {
                    toggleSidebar(false);
                }
            }
        }
    );

    // 7. Setup Building Selector Buttons (Pasar Gede Utama vs Pasar Buah Timur)
    document.querySelectorAll('.building-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const bldId = btn.dataset.building;
            MarketMap.switchBuilding(bldId);
        });
    });

    // 8. Setup Floor Selector Buttons
    document.querySelectorAll('.floor-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const floor = parseInt(btn.dataset.floor, 10);
            MarketMap.switchFloor(floor);
        });
    });

    // 9. Setup Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            const isCollapsed = sidebar.classList.contains('collapsed');
            const isOpen = sidebar.classList.contains('open');

            if (window.innerWidth <= 768) {
                toggleSidebar(!isOpen);
            } else {
                toggleSidebar(isCollapsed);
            }
        });
    }

    function toggleSidebar(show) {
        if (!sidebar) return;

        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('open', show);
            sidebar.classList.remove('collapsed');
        } else {
            sidebar.classList.toggle('collapsed', !show);
            sidebar.classList.remove('open');
        }

        if (sidebarToggle) {
            sidebarToggle.setAttribute('aria-expanded', show ? 'true' : 'false');
        }

        // Adjust Leaflet map size smoothly after sidebar animation
        if (typeof MarketMap !== 'undefined' && MarketMap.getMap) {
            setTimeout(() => {
                const map = MarketMap.getMap();
                if (map) map.invalidateSize();
            }, 300);
        }
    }

    // 10. Directory Button
    const btnDirectory = document.getElementById('btnDirectory');
    if (btnDirectory) {
        btnDirectory.addEventListener('click', (e) => {
            e.preventDefault();
            if (Directory.isOpen()) {
                Directory.close();
            } else {
                Navigation.closeRoutePopup();
                Directory.open();
            }
        });
    }

    // 11. Info Modal Dialog
    const btnInfo = document.getElementById('btnInfo');
    const infoModal = document.getElementById('infoModal');
    const infoModalClose = document.getElementById('infoModalClose');

    if (btnInfo && infoModal) {
        btnInfo.addEventListener('click', () => {
            infoModal.style.display = 'flex';
            infoModal.focus();
            A11y.announce('Modal informasi Pasar Gedhe Solo dibuka');
        });
    }

    if (infoModalClose && infoModal) {
        infoModalClose.addEventListener('click', () => {
            infoModal.style.display = 'none';
        });

        infoModal.addEventListener('click', (e) => {
            if (e.target === infoModal) {
                infoModal.style.display = 'none';
            }
        });
    }

    // 12. Accessibility Status Bar Close
    const a11yStatusClose = document.getElementById('a11yStatusClose');
    const a11yStatus = document.getElementById('a11yStatus');
    if (a11yStatusClose && a11yStatus) {
        a11yStatusClose.addEventListener('click', () => {
            a11yStatus.style.display = 'none';
        });
    }

    // 13. Keyboard Shortcuts Setup
    A11y.initKeyboardShortcuts({
        switchFloor: (floor) => MarketMap.switchFloor(floor),
        toggleLegend: () => {
            if (!sidebar) return;
            const isMobile = window.innerWidth <= 768;
            const willOpen = isMobile ? !sidebar.classList.contains('open') : sidebar.classList.contains('collapsed');
            toggleSidebar(willOpen);

            if (willOpen) {
                A11y.announce('Bilah sisi legenda dibuka');
                const container = document.getElementById('legendContainer');
                if (container) {
                    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    const firstItem = container.querySelector('.legend-item');
                    if (firstItem) firstItem.focus();
                }
            } else {
                A11y.announce('Bilah sisi legenda ditutup');
            }
        },
        focusNavigation: () => {
            if (Navigation.isPopupOpen()) {
                Navigation.closeRoutePopup();
                A11y.announce('Navigasi rute ditutup');
            } else {
                Navigation.openRoutePopup();
                A11y.announce('Navigasi rute dibuka');
                requestAnimationFrame(() => {
                    const navFrom = document.getElementById('navFrom');
                    if (navFrom) navFrom.focus();
                });
            }
        },
        toggleRoute: () => {
            if (Navigation.isPopupOpen()) {
                Navigation.closeRoutePopup();
                A11y.announce('Navigasi rute ditutup');
            } else {
                Navigation.openRoutePopup();
                A11y.announce('Navigasi rute dibuka');
                requestAnimationFrame(() => {
                    const navFrom = document.getElementById('navFrom');
                    if (navFrom) navFrom.focus();
                });
            }
        },
        toggleDirectory: () => {
            if (Directory.isOpen()) {
                Directory.close();
            } else {
                Navigation.closeRoutePopup();
                Directory.open();
            }
        },
        focusSearch: () => {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.focus();
        },
        closeModals: () => {
            if (infoModal) infoModal.style.display = 'none';
            if (Directory.isOpen()) Directory.close();
            Navigation.closeRoutePopup();
            DetailPanel.close();
        }
    });

    // 15. Responsive window resize handling
    window.addEventListener('resize', () => {
        if (MarketMap.getMap()) {
            MarketMap.getMap().invalidateSize();
        }
    });

    // 16. Real-time Dynamic Data Synchronization (LocalStorage & Firestore)
    function syncAndRefreshMap() {
        if (MarketData.syncWithDynamicStorage()) {
            MarketMap.reloadFloor();
            Legend.refresh();
            if (typeof Directory !== 'undefined' && Directory.refreshData) {
                Directory.refreshData();
            }
        }
    }

    // Storage event: fires when stall or category is added/edited/deleted in Admin in another tab
    window.addEventListener('storage', (e) => {
        if (e.key === 'pasargede_dynamic_stalls' || e.key === 'pasargede_dynamic_categories') {
            console.log('🔄 Data diperbarui dari admin, merefresh peta...');
            syncAndRefreshMap();
        }
    });

    // Focus & Visibility: refresh if user was in another tab/app
    window.addEventListener('focus', () => {
        syncAndRefreshMap();
    });

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            syncAndRefreshMap();
        }
    });

    // Custom local event for same-tab updates
    window.addEventListener('pasargede_data_updated', () => {
        syncAndRefreshMap();
    });

    window.addEventListener('pasargede_categories_updated', (e) => {
        if (e.detail) {
            MarketData.syncCategories(e.detail);
            MarketMap.reloadFloor();
            Legend.refresh();
        }
    });

    // Supabase real-time listener if DB is available
    if (typeof DB !== 'undefined') {
        DB.init().then(async () => {
            // 1. Fetch dynamic categories & stalls in parallel from Supabase / LocalStorage
            try {
                const [cats, stalls] = await Promise.all([
                    DB.getAllCategories(),
                    DB.getAllStalls()
                ]);

                let changed = false;
                if (cats && cats.length > 0) {
                    MarketData.syncCategories(cats);
                    changed = true;
                }
                if (stalls && stalls.length > 0) {
                    MarketData.syncStalls(stalls);
                    changed = true;
                }

                if (changed) {
                    MarketMap.reloadFloor();
                    Legend.refresh();
                    if (typeof Directory !== 'undefined' && Directory.refreshData) {
                        Directory.refreshData();
                    }
                }
            } catch (err) {
                console.warn('Could not load initial dynamic data from DB:', err);
            }

            // 2. Real-time stall updates
            if (typeof DB.onStallsChange === 'function') {
                DB.onStallsChange((newStalls) => {
                    console.log('⚡ Realtime stalls update from server');
                    if (newStalls && newStalls.length > 0) {
                        MarketData.syncStalls(newStalls);
                    }
                    syncAndRefreshMap();
                });
            }

            // 3. Real-time category updates
            if (typeof DB.onCategoriesChange === 'function') {
                DB.onCategoriesChange((cats) => {
                    console.log('🔄 Kategori dinamis diperbarui dari server:', cats);
                    if (cats && cats.length > 0) {
                        MarketData.syncCategories(cats);
                        MarketMap.reloadFloor();
                        Legend.refresh();
                        if (typeof Directory !== 'undefined' && Directory.refreshData) {
                            Directory.refreshData();
                        }
                    }
                });
            }
        });
    }

    console.log('✅ Peta Navigasi Pasar Gedhe Solo siap digunakan.');
});
