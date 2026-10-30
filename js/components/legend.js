/**
 * Legend Component
 * Interactive legend that toggles category visibility and marker pins on the map
 */

const Legend = (() => {
    let activeCategories = new Set([
        'buah', 'kuliner', 'camilan', 'sayur', 'sembako', 'jamu',
        'daging_unggas', 'daging_sapi', 'seafood', 'perkakas',
        'kerajinan', 'tekstil', 'telur', 'service', 'fashion',
        'entertainment', 'bunga', 'toilet', 'pintu', 'tangga', 'ramp'
    ]);
    let onToggleCallback = null;
    let currentFloor = 1;
    let currentBuilding = 'pasar-gede';

    /**
     * Initialize the legend
     */
    function init(container, floor, onToggle, buildingId) {
        currentFloor = floor || 1;
        currentBuilding = buildingId || 'pasar-gede';
        onToggleCallback = onToggle;
        resetForFloor(currentFloor, currentBuilding);
        render(container, currentFloor, currentBuilding);
    }

    /**
     * Render legend items for a specific floor and building
     */
    function render(container, floor, buildingId) {
        if (!container) return;

        currentFloor = floor || currentFloor;
        currentBuilding = buildingId || currentBuilding;

        container.innerHTML = '';

        // Actions (Select all / Deselect all)
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'legend-actions';

        const selectAllBtn = document.createElement('button');
        selectAllBtn.className = 'legend-action-btn';
        selectAllBtn.textContent = 'Pilih Semua';
        selectAllBtn.setAttribute('aria-label', 'Tampilkan semua kategori pada peta');
        selectAllBtn.addEventListener('click', () => toggleAll(true, currentFloor, currentBuilding));

        const deselectAllBtn = document.createElement('button');
        deselectAllBtn.className = 'legend-action-btn';
        deselectAllBtn.textContent = 'Sembunyikan Semua';
        deselectAllBtn.setAttribute('aria-label', 'Sembunyikan semua kategori pada peta');
        deselectAllBtn.addEventListener('click', () => toggleAll(false, currentFloor, currentBuilding));

        actionsDiv.appendChild(selectAllBtn);
        actionsDiv.appendChild(deselectAllBtn);
        container.appendChild(actionsDiv);

        const floorCategories = MarketData.getCategoriesForFloor(currentFloor, currentBuilding);

        const stallCats = [];
        const facilityCats = [];

        for (const [key, cat] of Object.entries(floorCategories)) {
            if (cat.isFacility) {
                facilityCats.push({ key, cat });
            } else {
                stallCats.push({ key, cat });
            }
        }

        // Group 1: Kios & Pedagang (Non-facility)
        if (stallCats.length > 0) {
            const groupTitle = currentFloor === 1 ? 'Zona Pasar & Kios' : 'Sentra Kuliner & Jajanan';
            addGroupTitle(container, groupTitle);
            stallCats.forEach(({ key, cat }) => {
                addLegendItem(container, key, cat, currentFloor, currentBuilding);
            });
        }

        // Group 2: Fasilitas & Akses
        if (facilityCats.length > 0) {
            addGroupTitle(container, 'Fasilitas & Aksesibilitas');
            facilityCats.forEach(({ key, cat }) => {
                addLegendItem(container, key, cat, currentFloor, currentBuilding);
            });
        }

        updateVisuals();
    }

    function addGroupTitle(container, title) {
        const titleEl = document.createElement('div');
        titleEl.className = 'legend-group-title';
        titleEl.textContent = title;
        titleEl.setAttribute('role', 'heading');
        titleEl.setAttribute('aria-level', '3');
        container.appendChild(titleEl);
    }

    function addLegendItem(container, key, category, floor, buildingId) {
        const isActive = activeCategories.has(key);
        const item = document.createElement('div');
        item.className = `legend-item ${isActive ? 'active' : 'dimmed'}`;
        item.dataset.category = key;
        item.setAttribute('role', 'checkbox');
        item.setAttribute('aria-checked', isActive ? 'true' : 'false');
        item.setAttribute('aria-label', `${category.name}: tampilkan atau sembunyikan di denah`);
        item.setAttribute('tabindex', '0');

        // Checkbox visual
        const toggle = document.createElement('div');
        toggle.className = 'legend-toggle';
        item.appendChild(toggle);

        // Badge icon (matching map marker style)
        const isFacility = Boolean(category.isFacility || (typeof AppIcons !== 'undefined' && AppIcons.isFacility(key)));
        const badge = document.createElement('div');
        const safeColor = String(category.color || '#C0392B').replace(/[^#a-zA-Z0-9(),. -]/g, '');

        if (isFacility) {
            badge.className = 'legend-badge facility-badge';
            badge.style.borderColor = safeColor;
            badge.innerHTML = `<span aria-hidden="true">${category.icon || '📍'}</span>`;
        } else {
            badge.className = 'legend-badge';
            badge.style.backgroundColor = safeColor;
            if (typeof AppIcons !== 'undefined') {
                badge.innerHTML = AppIcons.getCategorySvg(category.icon || key, { size: 14, stroke: '#FFFFFF', strokeWidth: 2 });
            } else {
                badge.innerHTML = `<span aria-hidden="true">${category.icon || '📍'}</span>`;
            }
        }
        item.appendChild(badge);

        // Label
        const label = document.createElement('span');
        label.className = 'legend-label';
        label.textContent = category.name;
        item.appendChild(label);

        // Count of stalls/facilities
        const count = MarketData.getCategoryCount(key, floor, buildingId);
        if (count > 0) {
            const countEl = document.createElement('span');
            countEl.className = 'legend-count';
            countEl.textContent = count;
            countEl.setAttribute('aria-label', `${count} titik`);
            item.appendChild(countEl);
        }

        // Click & keyboard interactions
        item.addEventListener('click', () => toggleCategory(key));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCategory(key);
            }
        });

        container.appendChild(item);
    }

    /**
     * Toggle a category's visibility
     */
    function toggleCategory(key) {
        if (activeCategories.has(key)) {
            activeCategories.delete(key);
        } else {
            activeCategories.add(key);
        }

        updateVisuals();

        const isNowActive = activeCategories.has(key);
        if (onToggleCallback) {
            onToggleCallback(key, isNowActive, activeCategories);
        }

        const cat = MarketData.getCategories()[key];
        const catName = cat ? cat.name : key;
        const state = isNowActive ? 'ditampilkan di denah' : 'disembunyikan dari denah';
        A11y.announce(`${catName} ${state}`);
    }

    /**
     * Toggle all categories
     */
    function toggleAll(state, floor, buildingId) {
        const fl = floor || currentFloor;
        const bld = buildingId || currentBuilding;
        const floorCategories = MarketData.getCategoriesForFloor(fl, bld);

        if (state) {
            Object.keys(floorCategories).forEach(key => activeCategories.add(key));
        } else {
            activeCategories.clear();
        }

        updateVisuals();

        if (onToggleCallback) {
            onToggleCallback(null, state, activeCategories);
        }

        A11y.announce(state ? 'Semua kategori ditampilkan' : 'Semua kategori disembunyikan');
    }

    /**
     * Update visual active states
     */
    function updateVisuals() {
        document.querySelectorAll('.legend-item').forEach(item => {
            const key = item.dataset.category;
            const isActive = activeCategories.has(key);
            item.classList.toggle('active', isActive);
            item.classList.toggle('dimmed', !isActive);
            item.setAttribute('aria-checked', isActive ? 'true' : 'false');
        });
    }

    function getActiveCategories() {
        return activeCategories;
    }

    function isCategoryActive(key) {
        if (!key) return true;
        const normalized = String(key).toLowerCase();
        return activeCategories.has(key) || activeCategories.has(normalized);
    }

    function resetForFloor(floor, buildingId) {
        const fl = floor || currentFloor;
        const bld = buildingId || currentBuilding;
        activeCategories.clear();
        const floorCategories = MarketData.getCategoriesForFloor(fl, bld);
        Object.keys(floorCategories).forEach(key => {
            activeCategories.add(key);
            activeCategories.add(key.toLowerCase());
        });
    }

    function refresh(floor, buildingId) {
        const container = document.getElementById('legendContainer');
        if (container) {
            render(container, floor || currentFloor, buildingId || currentBuilding);
        }
    }

    return {
        init,
        render,
        refresh,
        toggleCategory,
        toggleAll,
        getActiveCategories,
        isCategoryActive,
        resetForFloor
    };
})();
