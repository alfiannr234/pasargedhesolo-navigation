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
    }

    // 10. Info Modal Dialog
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
            const container = document.getElementById('legendContainer');
            if (container) {
                const firstItem = container.querySelector('.legend-item');
                if (firstItem) firstItem.focus();
            }
        },
        focusNavigation: () => {
            Navigation.openRoutePopup();
            const navFrom = document.getElementById('navFrom');
            if (navFrom) navFrom.focus();
        },
        toggleRoute: () => {
            Navigation.toggleRoutePopup();
        },
        focusSearch: () => {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.focus();
        },
        closeModals: () => {
            if (infoModal) infoModal.style.display = 'none';
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

    console.log('✅ Peta Navigasi Pasar Gedhe Solo siap digunakan.');
});
