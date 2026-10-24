/**
 * Directory Component (Tenant List)
 * Displays tenant list grid with search, alphabet filter, and category/floor filters.
 * Matches the official Pasar Gede Tenant List interface.
 */

const Directory = (() => {
    let onSelectTenantCallback = null;
    let allStalls = [];
    
    // Filter states
    let searchQuery = '';
    let selectedCategory = 'all';
    let selectedFloor = 'all';
    let selectedBuilding = 'all';
    let selectedLetter = 'all';

    // DOM Elements
    let modalEl = null;
    let searchInputEl = null;
    let searchClearEl = null;
    let categorySelectEl = null;
    let floorSelectEl = null;
    let buildingSelectEl = null;
    let alphabetContainerEl = null;
    let gridContainerEl = null;
    let countBadgeEl = null;
    let emptyStateEl = null;

    const alphabetList = [
        'All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    function init(onSelectCallback) {
        onSelectTenantCallback = onSelectCallback;

        modalEl = document.getElementById('directoryModal');
        const backBtn = document.getElementById('directoryBackBtn');
        const closeBtn = document.getElementById('directoryCloseBtn');
        const resetFilterBtn = document.getElementById('directoryResetFilterBtn');

        searchInputEl = document.getElementById('directorySearchInput');
        searchClearEl = document.getElementById('directorySearchClear');
        categorySelectEl = document.getElementById('directoryCategorySelect');
        floorSelectEl = document.getElementById('directoryFloorSelect');
        buildingSelectEl = document.getElementById('directoryBuildingSelect');
        alphabetContainerEl = document.getElementById('directoryAlphabetGrid');
        gridContainerEl = document.getElementById('directoryGrid');
        countBadgeEl = document.getElementById('directoryCount');
        emptyStateEl = document.getElementById('directoryEmpty');

        if (!modalEl) return;

        // Fetch and sort stalls
        allStalls = MarketData.getAllStalls().slice().sort((a, b) => {
            return (a.name || '').localeCompare(b.name || '');
        });

        // Setup Alphabet Bar
        renderAlphabetBar();

        // Populate Category Dropdown
        populateCategories();

        // Event listeners
        if (backBtn) backBtn.addEventListener('click', close);
        if (closeBtn) closeBtn.addEventListener('click', close);
        if (resetFilterBtn) resetFilterBtn.addEventListener('click', resetFilters);

        // Click on modal backdrop to close (desktop)
        modalEl.addEventListener('click', (e) => {
            if (e.target === modalEl) {
                close();
            }
        });

        // Search input
        if (searchInputEl) {
            searchInputEl.addEventListener('input', (e) => {
                searchQuery = e.target.value.trim();
                if (searchClearEl) {
                    searchClearEl.style.display = searchQuery ? 'flex' : 'none';
                }
                renderGrid();
            });
        }

        if (searchClearEl) {
            searchClearEl.addEventListener('click', () => {
                if (searchInputEl) searchInputEl.value = '';
                searchQuery = '';
                searchClearEl.style.display = 'none';
                renderGrid();
            });
        }

        // Dropdown filters
        if (categorySelectEl) {
            categorySelectEl.addEventListener('change', (e) => {
                selectedCategory = e.target.value;
                renderGrid();
            });
        }

        if (floorSelectEl) {
            floorSelectEl.addEventListener('change', (e) => {
                selectedFloor = e.target.value;
                renderGrid();
            });
        }

        if (buildingSelectEl) {
            buildingSelectEl.addEventListener('change', (e) => {
                selectedBuilding = e.target.value;
                renderGrid();
            });
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isOpen()) {
                close();
            }
        });
    }

    function renderAlphabetBar() {
        if (!alphabetContainerEl) return;

        alphabetContainerEl.innerHTML = alphabetList.map(letter => {
            const isAll = letter === 'All';
            const isActive = isAll ? (selectedLetter === 'all') : (selectedLetter === letter);
            const classes = [
                'directory-alphabet-btn',
                isAll ? 'btn-all' : '',
                isActive ? 'active' : ''
            ].filter(Boolean).join(' ');

            return `
                <button type="button" class="${classes}" data-letter="${letter}">
                    ${letter}
                </button>
            `;
        }).join('');

        alphabetContainerEl.querySelectorAll('.directory-alphabet-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const letter = btn.dataset.letter;
                selectedLetter = (letter === 'All') ? 'all' : letter;
                renderAlphabetBar();
                renderGrid();
            });
        });
    }

    function populateCategories() {
        if (!categorySelectEl) return;

        const categories = MarketData.getCategories();
        const usedCategories = new Set(allStalls.map(s => s.category).filter(Boolean));

        let optionsHtml = '<option value="all">Kategori: Semua</option>';
        for (const [id, cat] of Object.entries(categories)) {
            if (usedCategories.has(id)) {
                optionsHtml += `<option value="${id}">${cat.name}</option>`;
            }
        }

        categorySelectEl.innerHTML = optionsHtml;
    }

    function getFilteredStalls() {
        const q = searchQuery.toLowerCase();

        return allStalls.filter(stall => {
            // Search text
            if (q) {
                const name = (stall.name || '').toLowerCase();
                const desc = (stall.description || '').toLowerCase();
                const cat = (stall.categoryLabel || '').toLowerCase();
                if (!name.includes(q) && !desc.includes(q) && !cat.includes(q)) {
                    return false;
                }
            }

            // Category
            if (selectedCategory !== 'all' && stall.category !== selectedCategory) {
                return false;
            }

            // Floor
            if (selectedFloor !== 'all' && String(stall.floor) !== String(selectedFloor)) {
                return false;
            }

            // Building
            if (selectedBuilding !== 'all' && stall.buildingId !== selectedBuilding) {
                return false;
            }

            // Alphabet starting letter
            if (selectedLetter !== 'all') {
                const cleanName = (stall.name || '').trim().toUpperCase();
                if (!cleanName.startsWith(selectedLetter)) {
                    return false;
                }
            }

            return true;
        });
    }

    function renderGrid() {
        if (!gridContainerEl) return;

        const filtered = getFilteredStalls();

        if (countBadgeEl) {
            countBadgeEl.textContent = `${filtered.length} Kios`;
        }

        if (filtered.length === 0) {
            gridContainerEl.style.display = 'none';
            if (emptyStateEl) emptyStateEl.style.display = 'flex';
            return;
        }

        gridContainerEl.style.display = 'grid';
        if (emptyStateEl) emptyStateEl.style.display = 'none';

        gridContainerEl.innerHTML = filtered.map(stall => {
            const imageSrc = stall.imageThumb || stall.image;
            const bldShort = stall.buildingId === 'pasar-buah' ? 'P. Buah' : 'P. Gede';
            const initialColor = stall.color || '#C0392B';
            const icon = stall.icon || '🏪';

            return `
                <div class="directory-card" data-stall-id="${stall.id}" tabindex="0" role="button" aria-label="${stall.name}, ${bldShort} Lantai ${stall.floor}">
                    <div class="directory-thumb-wrap">
                        ${imageSrc ? `
                            <img src="${imageSrc}" alt="${stall.name}" loading="lazy" class="directory-thumb-img" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
                            <div class="directory-thumb-fallback" style="display:none; background:${initialColor};">
                                <span>${icon}</span>
                            </div>
                        ` : `
                            <div class="directory-thumb-fallback" style="background:${initialColor};">
                                <span>${icon}</span>
                            </div>
                        `}
                        <span class="directory-floor-badge">${stall.floor}</span>
                    </div>
                    <div class="directory-info">
                        <span class="directory-stall-name" title="${stall.name}">${stall.name}</span>
                        <span class="directory-stall-sub">${bldShort}</span>
                    </div>
                </div>
            `;
        }).join('');

        // Card click events
        gridContainerEl.querySelectorAll('.directory-card').forEach(card => {
            const stallId = card.dataset.stallId;
            const clickHandler = () => {
                const stall = MarketData.getStallById(stallId);
                if (stall) {
                    close();
                    if (onSelectTenantCallback) {
                        onSelectTenantCallback(stall);
                    }
                    A11y.announce(`Membuka detail ${stall.name}`);
                }
            };

            card.addEventListener('click', clickHandler);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    clickHandler();
                }
            });
        });
    }

    function resetFilters() {
        searchQuery = '';
        selectedCategory = 'all';
        selectedFloor = 'all';
        selectedBuilding = 'all';
        selectedLetter = 'all';

        if (searchInputEl) searchInputEl.value = '';
        if (searchClearEl) searchClearEl.style.display = 'none';
        if (categorySelectEl) categorySelectEl.value = 'all';
        if (floorSelectEl) floorSelectEl.value = 'all';
        if (buildingSelectEl) buildingSelectEl.value = 'all';

        renderAlphabetBar();
        renderGrid();
    }

    function open() {
        if (!modalEl) return;
        modalEl.style.display = 'flex';
        renderGrid();

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        const btnDir = document.getElementById('btnDirectory');
        if (btnDir) btnDir.classList.add('active');

        A11y.announce('Direktori kios dibuka');
    }

    function close() {
        if (!modalEl) return;
        modalEl.style.display = 'none';

        const btnDir = document.getElementById('btnDirectory');
        if (btnDir) btnDir.classList.remove('active');

        A11y.announce('Direktori kios ditutup');
    }

    function isOpen() {
        return modalEl && modalEl.style.display !== 'none';
    }

    return {
        init,
        open,
        close,
        isOpen,
        resetFilters
    };
})();
