/**
 * Admin App Orchestrator
 * Full CMS for Pasar Gedhe Solo stall management, photo uploads & visual map coordinate picker
 */

document.addEventListener('DOMContentLoaded', async () => {
    // State
    let stalls = [];
    let categories = {};
    let currentPage = 1;
    const pageSize = 15;

    // Filters
    let searchQuery = '';
    let filterBuilding = 'all';
    let filterFloor = 'all';
    let filterCategory = 'all';
    let filterPhoto = 'all';
    let filterLegendary = 'all';

    // Active edit state
    let editingStallId = null;
    let pendingImageFile = null;

    // DOM Elements
    const loginOverlay = document.getElementById('loginOverlay');
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const btnLogout = document.getElementById('btnLogout');

    const statTotal = document.getElementById('statTotal');
    const statPhotos = document.getElementById('statPhotos');
    const statPasarGede = document.getElementById('statPasarGede');
    const statPasarBuah = document.getElementById('statPasarBuah');

    const tableBody = document.getElementById('stallTableBody');
    const searchInput = document.getElementById('tableSearchInput');
    const selectBuilding = document.getElementById('filterBuilding');
    const selectFloor = document.getElementById('filterFloor');
    const selectCategory = document.getElementById('filterCategory');
    const selectPhoto = document.getElementById('filterPhoto');
    const selectLegendary = document.getElementById('filterLegendary');

    const paginationInfo = document.getElementById('paginationInfo');
    const btnPrevPage = document.getElementById('btnPrevPage');
    const btnNextPage = document.getElementById('btnNextPage');

    const btnAddStall = document.getElementById('btnAddStall');
    const btnExportData = document.getElementById('btnExportData');
    const btnSeedData = document.getElementById('btnSeedData');

    // Stall Form Modal
    const stallModal = document.getElementById('stallModal');
    const stallModalTitle = document.getElementById('stallModalTitle');
    const stallForm = document.getElementById('stallForm');
    const stallModalClose = document.getElementById('stallModalClose');
    const btnCancelStall = document.getElementById('btnCancelStall');

    const fId = document.getElementById('formStallId');
    const fName = document.getElementById('formStallName');
    const fBuilding = document.getElementById('formStallBuilding');
    const fFloor = document.getElementById('formStallFloor');
    const fCategory = document.getElementById('formStallCategory');
    const fDesc = document.getElementById('formStallDesc');
    const fPhotoInput = document.getElementById('formPhotoInput');
    const fPhotoPreview = document.getElementById('formPhotoPreview');
    const fPhotoUrl = document.getElementById('formPhotoUrl');
    const fX = document.getElementById('formStallX');
    const fY = document.getElementById('formStallY');
    const fAccessible = document.getElementById('formStallAccessible');
    const fLegendary = document.getElementById('formStallLegendary');
    const btnPickCoords = document.getElementById('btnPickCoords');

    // Map Picker Modal
    const mapPickerModal = document.getElementById('mapPickerModal');
    const mapPickerClose = document.getElementById('mapPickerClose');
    const mapPickerImg = document.getElementById('mapPickerImg');
    const mapPickerPin = document.getElementById('mapPickerPin');
    const mapPickerContainer = document.getElementById('mapPickerContainer');
    const mapPickerCoordsText = document.getElementById('mapPickerCoordsText');
    const btnConfirmCoords = document.getElementById('btnConfirmCoords');
    let tempPickerX = 512;
    let tempPickerY = 512;

    // Category Management Modal Elements
    const btnManageCategories = document.getElementById('btnManageCategories');
    const categoryModal = document.getElementById('categoryModal');
    const categoryModalClose = document.getElementById('categoryModalClose');
    const categoryModalDone = document.getElementById('categoryModalDone');
    const categoryForm = document.getElementById('categoryForm');
    const catFormTitle = document.getElementById('catFormTitle');
    const catFormOriginalId = document.getElementById('catFormOriginalId');
    const catFormMode = document.getElementById('catFormMode');
    const catFormName = document.getElementById('catFormName');
    const catFormId = document.getElementById('catFormId');
    const catFormIcon = document.getElementById('catFormIcon');
    const catFormColor = document.getElementById('catFormColor');
    const catFormColorHex = document.getElementById('catFormColorHex');
    const catFormFacility = document.getElementById('catFormFacility');
    const btnSaveCategory = document.getElementById('btnSaveCategory');
    const btnResetCatForm = document.getElementById('btnResetCatForm');
    const catListCount = document.getElementById('catListCount');
    const categoryTableBody = document.getElementById('categoryTableBody');
    const categoryListWrapper = document.getElementById('categoryListWrapper');

    // Category Icon Picker & Palette Elements
    const catSelectedIconBadge = document.getElementById('catSelectedIconBadge');
    const catSelectedIconName = document.getElementById('catSelectedIconName');
    const catIconSearchInput = document.getElementById('catIconSearchInput');
    const catIconSearchClear = document.getElementById('catIconSearchClear');
    const catGroupTabs = document.getElementById('catGroupTabs');
    const catIconGrid = document.getElementById('catIconGrid');
    const catIconEmpty = document.getElementById('catIconEmpty');
    const catColorSwatches = document.getElementById('catColorSwatches');
    const catColorStatusMsg = document.getElementById('catColorStatusMsg');

    // Toast Container
    const toastContainer = document.getElementById('toastContainer');

    // 1. Initialize Database & Auth
    const initRes = await DB.init();

    // Check auth session
    const user = DB.getCurrentUser();
    if (user) {
        showDashboard();
    } else {
        showLogin();
    }

    // 2. Auth Listeners
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                await DB.login(loginEmail.value.trim(), loginPassword.value.trim());
                showToast('Login berhasil!', 'success');
                showDashboard();
            } catch (err) {
                showToast(err.message, 'error');
            }
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', async () => {
            await DB.logout();
            showToast('Anda telah keluar.', 'info');
            showLogin();
        });
    }

    function showLogin() {
        if (loginOverlay) loginOverlay.style.display = 'flex';
    }

    function showDashboard() {
        if (loginOverlay) loginOverlay.style.display = 'none';
        loadDashboardData();
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // 3. Load & Render Dashboard Data
    async function loadDashboardData() {
        stalls = await DB.getAllStalls();
        try {
            const rawCats = await DB.getAllCategories();
            categories = {};
            if (Array.isArray(rawCats) && rawCats.length > 0) {
                rawCats.forEach(c => {
                    const id = (c.id || '').toLowerCase();
                    categories[id] = c;
                });
                if (typeof MarketData !== 'undefined') {
                    MarketData.syncCategories(rawCats);
                }
            } else if (typeof MarketData !== 'undefined') {
                categories = MarketData.getCategories();
            }
        } catch (e) {
            console.warn('Could not load categories:', e);
            if (typeof MarketData !== 'undefined') {
                categories = MarketData.getCategories();
            }
        }
        populateCategoryOptions();
        populateBuildingOptions();
        updateStats();
        renderTable();
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    function updateStats() {
        const total = stalls.length;
        const withPhotos = stalls.filter(s => s.image || s.imageThumb).length;
        const pgCount = stalls.filter(s => s.buildingId === 'pasar-gede').length;
        const pbCount = stalls.filter(s => s.buildingId === 'pasar-buah').length;

        if (statTotal) statTotal.textContent = total;
        if (statPhotos) statPhotos.textContent = withPhotos;
        if (statPasarGede) statPasarGede.textContent = pgCount;
        if (statPasarBuah) statPasarBuah.textContent = pbCount;
    }

    function populateCategoryOptions() {
        const catList = Object.values(categories).sort((a, b) => {
            const soA = a.sort_order !== undefined ? a.sort_order : (a.sortOrder || 99);
            const soB = b.sort_order !== undefined ? b.sort_order : (b.sortOrder || 99);
            if (soA !== soB) return soA - soB;
            return (a.name || '').localeCompare(b.name || '');
        });

        const esc = typeof Security !== 'undefined' ? Security.escapeHTML : str => (str == null ? '' : String(str));
        const escAttr = typeof Security !== 'undefined' ? Security.sanitizeAttr : esc;

        let opts = '<option value="all">Kategori: Semua</option>';
        catList.forEach(cat => {
            const catId = (cat.id || '').toLowerCase();
            opts += `<option value="${escAttr(catId)}">${esc(cat.icon || '')} ${esc(cat.name)}</option>`;
        });
        if (selectCategory) selectCategory.innerHTML = opts;

        // In form category dropdown
        let formOpts = '';
        catList.forEach(cat => {
            const catId = (cat.id || '').toLowerCase();
            formOpts += `<option value="${escAttr(catId)}">${esc(cat.icon || '')} ${esc(cat.name)}${cat.is_facility || cat.isFacility ? ' (Fasilitas)' : ''}</option>`;
        });
        if (fCategory) fCategory.innerHTML = formOpts;
    }

    function populateBuildingOptions() {
        if (typeof MarketData === 'undefined' || typeof MarketData.getBuildings !== 'function') return;
        const blds = MarketData.getBuildings() || [];
        if (blds.length === 0) return;

        const esc = typeof Security !== 'undefined' ? Security.escapeHTML : str => (str == null ? '' : String(str));
        const escAttr = typeof Security !== 'undefined' ? Security.sanitizeAttr : esc;

        if (selectBuilding) {
            let filterHtml = '<option value="all">Gedung: Semua</option>';
            blds.forEach(b => {
                filterHtml += `<option value="${escAttr(b.id)}">${esc(b.name)}</option>`;
            });
            selectBuilding.innerHTML = filterHtml;
            selectBuilding.value = filterBuilding;
        }

        if (fBuilding) {
            let formHtml = '';
            blds.forEach(b => {
                formHtml += `<option value="${escAttr(b.id)}">${esc(b.name)}</option>`;
            });
            fBuilding.innerHTML = formHtml;
        }
    }

    // 4. Filter & Pagination
    function getFilteredStalls() {
        const q = searchQuery.toLowerCase();
        return stalls.filter(s => {
            if (q) {
                const nameMatch = (s.name || '').toLowerCase().includes(q);
                const descMatch = (s.description || '').toLowerCase().includes(q);
                if (!nameMatch && !descMatch) return false;
            }
            if (filterBuilding !== 'all' && s.buildingId !== filterBuilding) return false;
            if (filterFloor !== 'all' && String(s.floor) !== String(filterFloor)) return false;
            if (filterCategory !== 'all') {
                const sCat = (s.category || '').toLowerCase();
                if (sCat !== filterCategory.toLowerCase()) return false;
            }
            if (filterPhoto === 'has-photo' && !(s.image || s.imageThumb)) return false;
            if (filterPhoto === 'no-photo' && (s.image || s.imageThumb)) return false;
            if (filterLegendary === 'legendary' && !s.isLegendary) return false;
            if (filterLegendary === 'non-legendary' && s.isLegendary) return false;
            return true;
        });
    }

    function renderTable() {
        if (!tableBody) return;

        const filtered = getFilteredStalls();
        const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
        if (currentPage > totalPages) currentPage = totalPages;

        const startIdx = (currentPage - 1) * pageSize;
        const pageItems = filtered.slice(startIdx, startIdx + pageSize);

        const esc = typeof Security !== 'undefined' ? Security.escapeHTML : str => (str == null ? '' : String(str));
        const escAttr = typeof Security !== 'undefined' ? Security.sanitizeAttr : esc;

        if (pageItems.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 40px; color: var(--gray-400);">
                        Tidak ada kios yang cocok.
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = pageItems.map(s => {
                const img = s.imageThumb || s.image;
                const cat = (Object.hasOwn ? Object.hasOwn(categories, s.category) : categories.hasOwnProperty(s.category))
                    ? categories[s.category]
                    : { name: s.categoryLabel || 'Kios', icon: s.icon || '🏪', color: s.color || '#C0392B' };
                const bld = s.buildingId === 'pasar-buah' ? 'Pasar Buah' : 'Pasar Gedhe';
                const isStar = Boolean(s.isLegendary);

                const catId = (s.category || '').toLowerCase();
                const isFac = Boolean(s.isFacility || cat.is_facility || cat.isFacility || (typeof AppIcons !== 'undefined' && AppIcons.isFacility(catId)));
                const catColor = cat.color || '#C0392B';
                const safeCatColor = String(catColor).replace(/[^#a-zA-Z0-9(),. -]/g, '');

                let badgeIconSvg = '';
                if (typeof AppIcons !== 'undefined' && !isFac) {
                    badgeIconSvg = AppIcons.getCategorySvg(cat.icon || catId, { size: 12, stroke: '#FFFFFF', strokeWidth: 2.2 });
                }

                return `
                    <tr data-id="${escAttr(s.id)}">
                        <td>
                            ${img ? `
                                <img src="${escAttr(img)}" alt="${escAttr(s.name)}" class="stall-thumb" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                                <div class="stall-thumb-fallback" style="display:none; background:${safeCatColor}; border-radius:7px;">
                                    ${isFac ? `<span>${esc(cat.icon || '📍')}</span>` : (badgeIconSvg ? AppIcons.getCategorySvg(cat.icon || catId, { size: 20, stroke: '#FFFFFF', strokeWidth: 2 }) : `<span>${esc(cat.icon || '🏪')}</span>`)}
                                </div>
                            ` : `
                                <div class="stall-thumb-fallback" style="background:${safeCatColor}; border-radius:7px;">
                                    ${isFac ? `<span>${esc(cat.icon || '📍')}</span>` : (badgeIconSvg ? AppIcons.getCategorySvg(cat.icon || catId, { size: 20, stroke: '#FFFFFF', strokeWidth: 2 }) : `<span>${esc(cat.icon || '🏪')}</span>`)}
                                </div>
                            `}
                        </td>
                        <td>
                            <div class="stall-name-cell">
                                <span class="stall-name-title">
                                    <button type="button" class="btn-star-toggle" data-id="${escAttr(s.id)}" title="${isStar ? 'Hapus status Bintang Legendaris' : 'Jadikan Kios Bintang Legendaris'}" style="background:none; border:none; padding:0; cursor:pointer; font-size:1.1rem; line-height:1; vertical-align:middle; margin-right:4px;">
                                        ${isStar ? '⭐' : '<span style="opacity:0.25; filter:grayscale(1);">☆</span>'}
                                    </button>
                                    ${esc(s.name)}
                                </span>
                                <span class="stall-name-desc">${esc(s.description || 'Tidak ada deskripsi')}</span>
                            </div>
                        </td>
                        <td>
                            <span class="category-tag" style="background:${safeCatColor}18; color:${safeCatColor}; border:1px solid ${safeCatColor}33;">
                                <span class="category-mini-badge ${isFac ? 'facility' : ''}" style="background:${isFac ? '#FFFFFF' : safeCatColor}; ${isFac ? `border-color:${safeCatColor}; color:${safeCatColor};` : ''}">
                                    ${isFac ? `<span>${esc(cat.icon || '📍')}</span>` : (badgeIconSvg || `<span>${esc(cat.icon || '🏪')}</span>`)}
                                </span>
                                ${esc(cat.name)}
                            </span>
                        </td>
                        <td>
                            <span class="badge-location">${bld} · Lt.${s.floor}</span>
                        </td>
                        <td>
                            ${img ? `<span style="color:var(--success); font-weight:700;">✓ Ada</span>` : `<span style="color:var(--gray-400);">— Belum</span>`}
                        </td>
                        <td>
                            <code style="font-size:0.75rem; color:var(--gray-600);">${s.x || 0}, ${s.y || 0}</code>
                        </td>
                        <td>
                            <div class="action-buttons">
                                <button class="btn-icon-action btn-star-action" title="${isStar ? 'Hapus Bintang Legendaris' : 'Beri Bintang Legendaris'}" data-id="${escAttr(s.id)}">${isStar ? '⭐' : '☆'}</button>
                                <button class="btn-icon-action btn-edit" title="Edit Data Kios" data-id="${escAttr(s.id)}">
                                    <i data-lucide="pencil" aria-hidden="true"></i>
                                </button>
                                <button class="btn-icon-action btn-pick-pos" title="Atur Posisi di Denah" data-id="${escAttr(s.id)}">
                                    <i data-lucide="map-pin" aria-hidden="true"></i>
                                </button>
                                <button class="btn-icon-action delete btn-delete" title="Hapus Kios" data-id="${escAttr(s.id)}">
                                    <i data-lucide="trash-2" aria-hidden="true"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        // Pagination Info & Buttons
        if (paginationInfo) {
            const start = filtered.length === 0 ? 0 : startIdx + 1;
            const end = Math.min(startIdx + pageSize, filtered.length);
            paginationInfo.textContent = `Menampilkan ${start} - ${end} dari ${filtered.length} kios (Halaman ${currentPage} / ${totalPages})`;
        }
        if (btnPrevPage) btnPrevPage.disabled = (currentPage <= 1);
        if (btnNextPage) btnNextPage.disabled = (currentPage >= totalPages);

        // Bind table action clicks
        tableBody.querySelectorAll('.btn-star-toggle, .btn-star-action').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleLegendary(btn.dataset.id);
            });
        });
        tableBody.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', () => openEditStall(btn.dataset.id));
        });
        tableBody.querySelectorAll('.btn-pick-pos').forEach(btn => {
            btn.addEventListener('click', () => openMapPickerForStall(btn.dataset.id));
        });
        tableBody.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', () => confirmDeleteStall(btn.dataset.id));
        });

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Quick Toggle Legendary Star
    async function toggleLegendary(id) {
        const stall = stalls.find(s => s.id === id);
        if (!stall) return;
        const newState = !stall.isLegendary;
        stall.isLegendary = newState;
        showToast(newState ? `Kios "${stall.name}" kini ditandai Bintang Legendaris ⭐` : `Tanda Bintang pada "${stall.name}" dihapus.`, 'info');
        try {
            await DB.saveStall(stall);
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event('pasargedhe_data_updated'));
            }
            await loadDashboardData();
        } catch (err) {
            showToast('Gagal mengubah status bintang: ' + err.message, 'error');
        }
    }

    // Filter Listeners
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            currentPage = 1;
            renderTable();
        });
    }
    if (selectBuilding) {
        selectBuilding.addEventListener('change', (e) => {
            filterBuilding = e.target.value;
            currentPage = 1;
            renderTable();
        });
    }
    if (selectFloor) {
        selectFloor.addEventListener('change', (e) => {
            filterFloor = e.target.value;
            currentPage = 1;
            renderTable();
        });
    }
    if (selectCategory) {
        selectCategory.addEventListener('change', (e) => {
            filterCategory = e.target.value;
            currentPage = 1;
            renderTable();
        });
    }
    if (selectPhoto) {
        selectPhoto.addEventListener('change', (e) => {
            filterPhoto = e.target.value;
            currentPage = 1;
            renderTable();
        });
    }
    if (selectLegendary) {
        selectLegendary.addEventListener('change', (e) => {
            filterLegendary = e.target.value;
            currentPage = 1;
            renderTable();
        });
    }

    // Pagination Listeners
    if (btnPrevPage) {
        btnPrevPage.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderTable();
            }
        });
    }
    if (btnNextPage) {
        btnNextPage.addEventListener('click', () => {
            currentPage++;
            renderTable();
        });
    }

    // 5. Add / Edit Stall Modal
    function openAddStall() {
        editingStallId = null;
        pendingImageFile = null;
        stallModalTitle.textContent = 'Tambah Kios Baru';
        stallForm.reset();
        fId.value = '';
        fX.value = '500';
        fY.value = '500';
        if (fLegendary) fLegendary.checked = false;
        fPhotoPreview.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="%239CA3AF" stroke-width="1.5"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';
        stallModal.style.display = 'flex';
    }

    function openEditStall(id) {
        const stall = stalls.find(s => s.id === id);
        if (!stall) return;

        editingStallId = id;
        pendingImageFile = null;
        stallModalTitle.textContent = 'Edit Data Kios: ' + stall.name;

        fId.value = stall.id || '';
        fName.value = stall.name || '';
        fBuilding.value = stall.buildingId || 'pasar-gede';
        fFloor.value = stall.floor || 1;
        fCategory.value = (stall.category || 'kuliner').toLowerCase();
        fDesc.value = stall.description || '';
        fPhotoUrl.value = stall.image || '';
        fX.value = stall.x || 500;
        fY.value = stall.y || 500;
        fAccessible.checked = !!stall.accessible;
        if (fLegendary) fLegendary.checked = Boolean(stall.isLegendary);

        if (stall.image || stall.imageThumb) {
            fPhotoPreview.src = stall.imageThumb || stall.image;
        } else {
            fPhotoPreview.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="%239CA3AF" stroke-width="1.5"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';
        }

        stallModal.style.display = 'flex';
    }

    function closeStallModal() {
        stallModal.style.display = 'none';
        editingStallId = null;
        pendingImageFile = null;
    }

    if (btnAddStall) btnAddStall.addEventListener('click', openAddStall);
    if (stallModalClose) stallModalClose.addEventListener('click', closeStallModal);
    if (btnCancelStall) btnCancelStall.addEventListener('click', closeStallModal);

    // Photo input change (preview)
    if (fPhotoInput) {
        fPhotoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                pendingImageFile = file;
                const reader = new FileReader();
                reader.onload = (evt) => {
                    fPhotoPreview.src = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Save Stall Form Submit
    if (stallForm) {
        stallForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = fName.value.trim();
            if (!name) {
                showToast('Nama kios wajib diisi!', 'error');
                return;
            }

            try {
                let photoUrl = fPhotoUrl.value.trim();
                if (pendingImageFile) {
                    showToast('Mengupload foto kios...', 'info');
                    photoUrl = await DB.uploadPhoto(pendingImageFile, editingStallId || Date.now());
                }

                const rawCat = fCategory.value || 'kuliner';
                let catObj = Object.values(categories).find(c => (c.id && c.id.toLowerCase() === rawCat.toLowerCase()) || (c.name && c.name.toLowerCase() === rawCat.toLowerCase()));
                if (!catObj && categories[rawCat]) catObj = categories[rawCat];
                if (!catObj) catObj = { id: rawCat.toLowerCase(), name: rawCat, icon: '🏪', color: '#C0392B' };
                const normalizedCatId = (catObj.id || rawCat).toLowerCase();

                const posX = parseInt(fX.value, 10) || 500;
                const posY = parseInt(fY.value, 10) || 500;

                const stallData = {
                    id: editingStallId || ('kios_' + Date.now()),
                    name: name,
                    label: name,
                    buildingId: fBuilding.value,
                    floor: parseInt(fFloor.value, 10),
                    category: normalizedCatId,
                    categoryLabel: catObj.name || name,
                    icon: catObj.icon || '🏪',
                    color: catObj.color || '#C0392B',
                    description: fDesc.value.trim(),
                    image: photoUrl || null,
                    imageThumb: photoUrl || null,
                    images: photoUrl ? [photoUrl] : [],
                    x: posX,
                    y: posY,
                    lng: posX,
                    lat: fBuilding.value === 'pasar-buah' ? posY : (1024 - posY),
                    accessible: fAccessible.checked,
                    isLegendary: Boolean(fLegendary && fLegendary.checked)
                };

                await DB.saveStall(stallData);
                if (typeof window !== 'undefined') {
                    window.dispatchEvent(new Event('pasargede_data_updated'));
                }
                showToast(`Kios "${name}" berhasil disimpan!`, 'success');
                closeStallModal();
                await loadDashboardData();
            } catch (err) {
                showToast('Gagal menyimpan kios: ' + err.message, 'error');
            }
        });
    }

    // Delete Stall
    async function confirmDeleteStall(id) {
        const stall = stalls.find(s => s.id === id);
        if (!stall) return;
        if (confirm(`Yakin ingin menghapus kios "${stall.name}"?`)) {
            try {
                await DB.deleteStall(id);
                if (typeof window !== 'undefined') {
                    window.dispatchEvent(new Event('pasargede_data_updated'));
                }
                showToast(`Kios "${stall.name}" berhasil dihapus.`, 'info');
                await loadDashboardData();
            } catch (err) {
                showToast('Gagal menghapus kios: ' + err.message, 'error');
            }
        }
    }

    // 6. Visual Map Coordinate Picker with Centroid Snapping
    const floorShapesCache = {};
    let currentFloorShapes = [];

    async function loadFloorShapes(svgUrl) {
        if (floorShapesCache[svgUrl]) {
            currentFloorShapes = floorShapesCache[svgUrl];
            return;
        }
        try {
            const res = await fetch(svgUrl);
            const svg = await res.text();
            const shapes = [];

            const rectRegex = /<rect[^>]+x="([^"]+)"[^>]+y="([^"]+)"[^>]+width="([^"]+)"[^>]+height="([^"]+)"/g;
            let m;
            while ((m = rectRegex.exec(svg)) !== null) {
                const x = parseFloat(m[1]), y = parseFloat(m[2]), w = parseFloat(m[3]), h = parseFloat(m[4]);
                shapes.push({
                    cx: Math.round(x + w / 2),
                    cy: Math.round(y + h / 2),
                    w, h, area: w * h,
                    contains: (px, py) => px >= x && px <= x + w && py >= y && py <= y + h
                });
            }

            const polyRegex = /<polygon[^>]+points="([^"]+)"/g;
            while ((m = polyRegex.exec(svg)) !== null) {
                const pts = m[1].trim().split(/\s+/).map(p => {
                    const [px, py] = p.split(',').map(Number);
                    return { x: px, y: py };
                }).filter(p => !isNaN(p.x) && !isNaN(p.y));

                if (pts.length >= 3) {
                    let signedArea = 0, cx = 0, cy = 0;
                    for (let i = 0; i < pts.length; i++) {
                        const p1 = pts[i], p2 = pts[(i + 1) % pts.length];
                        const a = p1.x * p2.y - p2.x * p1.y;
                        signedArea += a;
                        cx += (p1.x + p2.x) * a;
                        cy += (p1.y + p2.y) * a;
                    }
                    signedArea *= 0.5;
                    if (Math.abs(signedArea) > 0.001) {
                        cx = cx / (6 * signedArea);
                        cy = cy / (6 * signedArea);
                    } else {
                        cx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
                        cy = pts.reduce((s, p) => s + p.y, 0) / pts.length;
                    }
                    const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
                    const minX = Math.min(...xs), maxX = Math.max(...xs);
                    const minY = Math.min(...ys), maxY = Math.max(...ys);

                    shapes.push({
                        cx: Math.round(cx),
                        cy: Math.round(cy),
                        w: maxX - minX, h: maxY - minY, area: Math.abs(signedArea),
                        contains: (px, py) => px >= minX && px <= maxX && py >= minY && py <= maxY
                    });
                }
            }

            floorShapesCache[svgUrl] = shapes.filter(s => s.area < 25000 && Math.min(s.w, s.h) >= 4);
            currentFloorShapes = floorShapesCache[svgUrl];
        } catch (e) {
            console.warn('Could not load floor shapes for snapping:', e);
            currentFloorShapes = [];
        }
    }

    function openMapPickerForStall(id) {
        openEditStall(id);
        openMapPicker();
    }

    async function openMapPicker() {
        const bld = fBuilding.value || 'pasar-gede';
        const flr = fFloor.value || 1;

        // Path to SVG floor plan
        const svgPath = bld === 'pasar-buah' ?
            `../assets/svg/pasar_buah_lt${flr}.svg` :
            `../assets/svg/pasar_gede_lt${flr}.svg`;

        mapPickerImg.src = svgPath;
        const isPb = (bld === 'pasar-buah');
        const rawY = parseInt(fY.value, 10) || 512;
        tempPickerX = parseInt(fX.value, 10) || 512;
        // In Pasar Buah, Y is Cartesian from bottom, while visual SVG picker Y is from top
        tempPickerY = isPb ? (1024 - rawY) : rawY;

        updatePickerPinPosition();
        mapPickerModal.style.display = 'flex';

        // Preload booth shapes for centroid snapping
        await loadFloorShapes(svgPath);
    }

    function updatePickerPinPosition(isSnapped = false) {
        if (!mapPickerPin || !mapPickerImg) return;
        const percentX = (tempPickerX / 1024) * 100;
        const percentY = (tempPickerY / 1024) * 100;

        mapPickerPin.style.left = `${percentX}%`;
        mapPickerPin.style.top = `${percentY}%`;

        // Update visual badge icon to match selected category
        const catId = (fCategory.value || '').toLowerCase();
        const cat = (Object.hasOwn ? Object.hasOwn(categories, catId) : categories.hasOwnProperty(catId))
            ? categories[catId]
            : { color: '#C0392B', icon: '📍' };
        const isFac = Boolean(cat.is_facility || cat.isFacility || (typeof AppIcons !== 'undefined' && AppIcons.isFacility(catId)));
        const catColor = cat.color || '#C0392B';

        if (isFac) {
            mapPickerPin.className = 'picker-pin facility';
            mapPickerPin.style.borderColor = catColor;
            mapPickerPin.innerHTML = `<span style="font-size:0.85rem;">${cat.icon || '📍'}</span>`;
        } else {
            mapPickerPin.className = 'picker-pin';
            mapPickerPin.style.backgroundColor = catColor;
            if (typeof AppIcons !== 'undefined') {
                mapPickerPin.innerHTML = AppIcons.getCategorySvg(cat.icon || catId, { size: 15, stroke: '#FFFFFF', strokeWidth: 2 });
            } else {
                mapPickerPin.innerHTML = `<span style="font-size:0.85rem;">${cat.icon || '📍'}</span>`;
            }
        }

        if (mapPickerCoordsText) {
            const isPb = (fBuilding.value === 'pasar-buah');
            const displayY = isPb ? (1024 - tempPickerY) : tempPickerY;
            const snapBadge = isSnapped ? `<span style="display:inline-block; margin-left:8px; padding:2px 8px; border-radius:10px; background:#E8F8F5; color:#1E8449; font-size:0.72rem; font-weight:700;">✓ Titik Tengah Petak (Centroid)</span>` : '';
            mapPickerCoordsText.innerHTML = `Koordinat: X = ${tempPickerX}, Y = ${displayY}${snapBadge}`;
        }
    }

    if (btnPickCoords) btnPickCoords.addEventListener('click', openMapPicker);
    if (mapPickerClose) mapPickerClose.addEventListener('click', () => mapPickerModal.style.display = 'none');

    // Click on Map image to place pin with automatic centroid snapping
    if (mapPickerContainer) {
        mapPickerContainer.addEventListener('click', (e) => {
            const rect = mapPickerImg.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            if (clickX >= 0 && clickX <= rect.width && clickY >= 0 && clickY <= rect.height) {
                let clickedX = Math.round((clickX / rect.width) * 1024);
                let clickedY = Math.round((clickY / rect.height) * 1024);
                let isSnapped = false;

                // Snap to nearest booth shape centroid if close (< 30px) and not holding Shift
                if (!e.shiftKey && currentFloorShapes && currentFloorShapes.length > 0) {
                    const inside = currentFloorShapes.filter(sh => sh.contains(clickedX, clickedY)).sort((a, b) => a.area - b.area);
                    if (inside.length > 0) {
                        clickedX = inside[0].cx;
                        clickedY = inside[0].cy;
                        isSnapped = true;
                    } else {
                        const nearest = currentFloorShapes
                            .map(sh => ({ sh, d: Math.hypot(clickedX - sh.cx, clickedY - sh.cy) }))
                            .sort((a, b) => a.d - b.d)[0];
                        if (nearest && nearest.d <= 30) {
                            clickedX = nearest.sh.cx;
                            clickedY = nearest.sh.cy;
                            isSnapped = true;
                        }
                    }
                }

                tempPickerX = clickedX;
                tempPickerY = clickedY;
                updatePickerPinPosition(isSnapped);
            }
        });
    }

    if (btnConfirmCoords) {
        btnConfirmCoords.addEventListener('click', () => {
            const isPb = (fBuilding.value === 'pasar-buah');
            fX.value = tempPickerX;
            fY.value = isPb ? (1024 - tempPickerY) : tempPickerY;
            mapPickerModal.style.display = 'none';
            showToast(`Koordinat diperbarui ke (${fX.value}, ${fY.value})`, 'success');
        });
    }

    // 7. Export Data to JSON
    if (btnExportData) {
        btnExportData.addEventListener('click', () => {
            const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(stalls, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", jsonString);
            downloadAnchor.setAttribute("download", `pasargede_stalls_${new Date().toISOString().slice(0, 10)}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            showToast('Data kios berhasil diexport ke JSON.', 'success');
        });
    }

    // 8. Seed Default Data (Reset)
    if (btnSeedData) {
        btnSeedData.addEventListener('click', async () => {
            const masterCount = (typeof MarketData !== 'undefined' && typeof MarketData.getAllStalls === 'function')
                ? MarketData.getAllStalls().length
                : (stalls.length || 0);

            if (confirm(`Import ulang ${masterCount} data kios resmi Pasar Gedhe ke database cloud / penyimpanan aktif?`)) {
                showToast(`Sedang menyinkronkan ${masterCount} kios resmi...`, 'info');
                try {
                    if (typeof DB.seedToCloudDatabase === 'function') {
                        const res = await DB.seedToCloudDatabase();
                        showToast(`Berhasil menyinkronkan ${res.count} kios ke ${res.mode === 'supabase' ? 'database Supabase' : 'penyimpanan lokal'}!`, 'success');
                    } else {
                        DB.seedLocalStorageIfNeeded(true);
                        showToast(`Data master (${masterCount} kios) berhasil disinkronkan!`, 'success');
                    }
                    await loadDashboardData();
                } catch (e) {
                    showToast('Gagal sinkronisasi data: ' + e.message, 'error');
                }
            }
        });
    }

    // ============================================
    // 9. Category Management Controller & Utilities
    // ============================================

    // 12 Accessible High-Contrast Color Swatches (> 3.8:1 contrast against pure white #FFFFFF)
    const ACCESSIBLE_PALETTES = [
        { hex: '#C0392B', name: 'Merah Cabe' },
        { hex: '#D35400', name: 'Oranye Bata' },
        { hex: '#B9770E', name: 'Kuning Kunyit Tua' },
        { hex: '#1E8449', name: 'Hijau Daun Tua' },
        { hex: '#16A085', name: 'Hijau Toska Tua' },
        { hex: '#2471A3', name: 'Biru Samudra' },
        { hex: '#1B4F72', name: 'Biru Navy Gelap' },
        { hex: '#7D3C98', name: 'Ungu Anggur' },
        { hex: '#512E5F', name: 'Plum Gelap' },
        { hex: '#AD1457', name: 'Magenta Beri' },
        { hex: '#6D4C41', name: 'Cokelat Tanah' },
        { hex: '#37474F', name: 'Abu Slate Gelap' }
    ];

    // Market Vector Icons Catalog (Lucide 0.460.0 verified) grouped by market requirements
    const MARKET_ICON_CATALOG = [
        // 1. Makanan & Minuman
        { name: 'UtensilsCrossed', label: 'Kuliner / Resto', group: 'makanan', keywords: 'makanan kuliner garpu sendok warung makan resto utensils' },
        { name: 'Utensils', label: 'Alat Makan', group: 'makanan', keywords: 'alat makan sendok garpu piring dine food' },
        { name: 'Soup', label: 'Sup & Soto', group: 'makanan', keywords: 'sup soto bakso mie kuah ramen mangkok bowl hot soup' },
        { name: 'Coffee', label: 'Kopi & Teh', group: 'makanan', keywords: 'kopi teh cafe wedang minuman hangat coffee cup' },
        { name: 'Cookie', label: 'Kue & Snack', group: 'makanan', keywords: 'kue camilan biskuit snack cookies roti jajanan pasar' },
        { name: 'Cake', label: 'Bolu & Tart', group: 'makanan', keywords: 'kue tart bolu bakery pastry manis cake' },
        { name: 'IceCream2', label: 'Es Krim & Dawet', group: 'makanan', keywords: 'es krim dawet gelato dingin segar ice cream' },
        { name: 'CupSoda', label: 'Minuman Segar', group: 'makanan', keywords: 'es teh jus boba sirup soda drink cup' },
        { name: 'Beer', label: 'Jamu Botol', group: 'makanan', keywords: 'jamu botol tradisional herbal minuman beverage beer' },
        { name: 'Drumstick', label: 'Daging Ayam', group: 'makanan', keywords: 'ayam unggas bebek paha fried chicken daging butcher drumstick' },
        { name: 'Beef', label: 'Daging Sapi', group: 'makanan', keywords: 'daging sapi kambing meat steak empal butcher beef' },
        { name: 'Fish', label: 'Ikan & Seafood', group: 'makanan', keywords: 'ikan lele nila gurame laut seafood udang cumi fish' },
        { name: 'Egg', label: 'Telur', group: 'makanan', keywords: 'telur ayam bebek asin egg breakfast' },
        { name: 'Pizza', label: 'Pizza & Roti', group: 'makanan', keywords: 'pizza roti gurih pie slice' },
        { name: 'Sandwich', label: 'Roti Lapis', group: 'makanan', keywords: 'sandwich burger roti bakar lapis sarapan' },
        { name: 'Candy', label: 'Permen Manisan', group: 'makanan', keywords: 'permen manisan coklat gula candy sweet' },

        // 2. Bahan Pokok & Hasil Bumi
        { name: 'Apple', label: 'Buah Segar', group: 'bahan_pokok', keywords: 'buah apel segar apple fruit pasar buah' },
        { name: 'Carrot', label: 'Sayur Mayur', group: 'bahan_pokok', keywords: 'sayur wortel kangkung bayam sayuran vegetable carrot' },
        { name: 'Wheat', label: 'Beras & Sembako', group: 'bahan_pokok', keywords: 'beras gandum sembako padi terigu ketan grain wheat' },
        { name: 'Citrus', label: 'Jeruk / Sitrus', group: 'bahan_pokok', keywords: 'jeruk lemon nipis purut buah citrus orange' },
        { name: 'Cherry', label: 'Ceri / Buah', group: 'bahan_pokok', keywords: 'ceri buah berry fruit cherry manis' },
        { name: 'Banana', label: 'Pisang', group: 'bahan_pokok', keywords: 'pisang raja kepok ambon buah banana' },
        { name: 'Grape', label: 'Anggur', group: 'bahan_pokok', keywords: 'anggur buah kismis grape wine segar' },
        { name: 'Leaf', label: 'Bumbu Daun', group: 'bahan_pokok', keywords: 'daun salam kemangi herbal jamu bumbu rempah leaf' },
        { name: 'Sprout', label: 'Bibit & Tunas', group: 'bahan_pokok', keywords: 'tunas bibit toge kecambah benih tanaman sprout' },
        { name: 'Milk', label: 'Susu Murni', group: 'bahan_pokok', keywords: 'susu murni dairy segar kambing milk' },
        { name: 'Salad', label: 'Lalapan Sayur', group: 'bahan_pokok', keywords: 'lalapan sayur selada segar salad sayur' },
        { name: 'Boxes', label: 'Grosir Karung', group: 'bahan_pokok', keywords: 'grosir dus kardus karung gudang boxes' },
        { name: 'Package', label: 'Paket Sembako', group: 'bahan_pokok', keywords: 'paket bingkisan sembako kardus hampers package' },

        // 3. Pakaian & Kerajinan
        { name: 'Shirt', label: 'Batik & Busana', group: 'pakaian', keywords: 'baju batik pakaian kemeja lurik daster celana shirt fashion' },
        { name: 'Scissors', label: 'Jahit / Permak', group: 'pakaian', keywords: 'jahit gunting potong tailor kain benang konveksi scissors' },
        { name: 'Palette', label: 'Kerajinan Seni', group: 'pakaian', keywords: 'kerajinan lukis souvenir batik cap seni kayu craft palette' },
        { name: 'ShoppingBag', label: 'Tas & Aksesoris', group: 'pakaian', keywords: 'tas belanja tas rajut tas kulit dompet bag tote' },
        { name: 'Tag', label: 'Obral & Diskon', group: 'pakaian', keywords: 'tag harga diskon obral promo baju price' },
        { name: 'Footprints', label: 'Sandal & Sepatu', group: 'pakaian', keywords: 'sandal selop sepatu kulit alas kaki footwear shoe' },
        { name: 'Sparkles', label: 'Perhiasan Emas', group: 'pakaian', keywords: 'perhiasan emas perak mutiara aksesoris cenderamata sparkles' },
        { name: 'Watch', label: 'Jam Tangan', group: 'pakaian', keywords: 'jam tangan arloji aksesoris waktu watch' },
        { name: 'Glasses', label: 'Kacamata', group: 'pakaian', keywords: 'kacamata frame optik lensa baca glasses' },
        { name: 'Crown', label: 'Busana Adat', group: 'pakaian', keywords: 'mahkota pengantin adat beskap blangkon kebaya crown' },
        { name: 'Gem', label: 'Batu Akik / Mulia', group: 'pakaian', keywords: 'akik batu mulia permata cincin giok gem diamond' },
        { name: 'Umbrella', label: 'Payung & Jas Hujan', group: 'pakaian', keywords: 'payung hujan jas tradisional kertas umbrella' },

        // 4. Jasa & Perkakas
        { name: 'CookingPot', label: 'Perkakas Dapur', group: 'jasa', keywords: 'panci wajan cobek dandang dapur alat masak pot cooking' },
        { name: 'Wrench', label: 'Bengkel / Servis', group: 'jasa', keywords: 'servis bengkel reparasi kunci pas teknisi perkakas wrench' },
        { name: 'Hammer', label: 'Pertukangan', group: 'jasa', keywords: 'palu paku kayu bangunan tukang perkakas hammer' },
        { name: 'Flame', label: 'Pandai Besi / Gas', group: 'jasa', keywords: 'api kompor gas elpiji pandai besi arang las flame' },
        { name: 'Scale', label: 'Timbangan', group: 'jasa', keywords: 'timbangan dacin ukur gram kiloan scale' },
        { name: 'ShieldCheck', label: 'Keamanan / Garansi', group: 'jasa', keywords: 'satpam aman garansi jaminan pos jaga shield check' },
        { name: 'Receipt', label: 'Kasir / Struk', group: 'jasa', keywords: 'nota struk kwitansi pos pembayaran bayar receipt' },
        { name: 'Store', label: 'Kios Kelontong', group: 'jasa', keywords: 'kios toko warung kelontong serba ada store' },
        { name: 'Clock', label: 'Servis Jam', group: 'jasa', keywords: 'servis jam baterai arloji reparasi clock time' },
        { name: 'Settings', label: 'Suku Cadang', group: 'jasa', keywords: 'onderdil suku cadang mesin selep gerigi gear settings' },
        { name: 'Truck', label: 'Angkutan Barang', group: 'jasa', keywords: 'ekspedisi angkut pikap gerobak antar barang delivery truck' },
        { name: 'Sparkle', label: 'Binatu / Laundry', group: 'jasa', keywords: 'laundry cuci setrika bersih sabun wangi sparkle' },

        // 5. Fasilitas & Akses
        { name: 'CircleUser', label: 'Toilet / WC', group: 'fasilitas', keywords: 'toilet wc kamar mandi rest room urinoir user circleuser' },
        { name: 'DoorOpen', label: 'Pintu Masuk / Keluar', group: 'fasilitas', keywords: 'pintu gerbang masuk keluar gapura lobby entrance exit door' },
        { name: 'Accessibility', label: 'Ramp Kursi Roda', group: 'fasilitas', keywords: 'ramp kursi roda difabel disabilitas akses lansia accessibility' },
        { name: 'Moon', label: 'Mushola', group: 'fasilitas', keywords: 'mushola sholat kiblat wudhu sajadah ibadah masjid moon' },
        { name: 'Baby', label: 'Ruang Laktasi', group: 'fasilitas', keywords: 'laktasi menyusui bayi ibu balita popok baby' },
        { name: 'HelpCircle', label: 'Pusat Informasi', group: 'fasilitas', keywords: 'informasi pos bantuan tanya panduan cs help helpcircle' },
        { name: 'Info', label: 'Papan Info', group: 'fasilitas', keywords: 'papan informasi denah direktori pengumuman info' },
        { name: 'Phone', label: 'Pos Telepon / Aduan', group: 'fasilitas', keywords: 'telepon darurat pos aduan hotline call phone' },
        { name: 'Shield', label: 'Pos Keamanan', group: 'fasilitas', keywords: 'satpam pos jaga pos polisi keamanan security shield' },
        { name: 'HeartPulse', label: 'Pos P3K Medis', group: 'fasilitas', keywords: 'p3k pos kesehatan medis darurat obat dokter klinik heartpulse' },
        { name: 'Smile', label: 'Area Anak', group: 'fasilitas', keywords: 'ramah anak arena bermain anak santai kids smile' }
    ];

    let currentIconGroup = 'all';
    let iconSearchDebounceTimer = null;

    /**
     * Updates selected icon display and form card active color
     */
    function updateLivePreview() {
        const iconName = catFormIcon ? (catFormIcon.value.trim() || 'Apple') : 'Apple';
        const color = catFormColor ? (catFormColor.value.trim() || '#C0392B') : '#C0392B';
        const safeColor = color.replace(/[^#a-zA-Z0-9(),. -]/g, '');

        // Set CSS custom property on category form card for reactive active glowing state
        const formCard = document.querySelector('.category-form-card');
        if (formCard) {
            formCard.style.setProperty('--cat-active-color', safeColor);
        }

        // Selected Icon Pill in Icon Picker Header
        if (catSelectedIconBadge && catSelectedIconName && typeof AppIcons !== 'undefined') {
            catSelectedIconBadge.style.backgroundColor = safeColor;
            catSelectedIconBadge.innerHTML = AppIcons.getCategorySvg(iconName, { size: 13, stroke: '#FFFFFF', strokeWidth: 2 });
            catSelectedIconName.textContent = iconName;
        }
    }

    /**
     * Renders the 12 accessible color swatches with duplicate detection indicators
     */
    function renderColorSwatches() {
        if (!catColorSwatches) return;
        const currentColor = (catFormColor ? catFormColor.value : '#C0392B').trim().toUpperCase();
        const currentEditingId = (catFormMode.value === 'edit' && catFormOriginalId.value)
            ? catFormOriginalId.value.toLowerCase()
            : null;

        // Build map of colors currently in use by other categories
        const usedColorMap = {};
        Object.values(categories).forEach(cat => {
            if (currentEditingId && (cat.id || '').toLowerCase() === currentEditingId) return;
            if (cat.color) {
                const hex = cat.color.trim().toUpperCase();
                usedColorMap[hex] = cat.name || cat.id;
            }
        });

        const esc = typeof Security !== 'undefined' ? Security.escapeHTML : str => (str == null ? '' : String(str));
        const escAttr = typeof Security !== 'undefined' ? Security.sanitizeAttr : esc;

        catColorSwatches.innerHTML = ACCESSIBLE_PALETTES.map(p => {
            const hex = p.hex.toUpperCase();
            const isSelected = hex === currentColor;
            const usedBy = usedColorMap[hex];
            const tooltip = usedBy
                ? `${p.name} (${hex}) — Telah digunakan oleh kategori: ${usedBy}`
                : `${p.name} (${hex}) — Rasio kontras tinggi`;

            return `
                <button type="button" 
                    class="cat-swatch-btn ${isSelected ? 'active' : ''}" 
                    data-hex="${escAttr(hex)}" 
                    style="background-color: ${escAttr(hex)};" 
                    title="${escAttr(tooltip)}" 
                    role="radio" 
                    aria-checked="${isSelected}">
                    <svg class="cat-swatch-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    ${usedBy ? `<span class="cat-swatch-used-dot" title="Digunakan oleh: ${escAttr(usedBy)}">⚠️</span>` : ''}
                </button>
            `;
        }).join('');

        // Wire swatch click listeners
        catColorSwatches.querySelectorAll('.cat-swatch-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const hex = btn.dataset.hex;
                if (!hex) return;
                if (catFormColor) catFormColor.value = hex;
                if (catFormColorHex) catFormColorHex.value = hex;
                renderColorSwatches();
                updateLivePreview();
            });
        });

        // Update status warning message
        if (catColorStatusMsg) {
            const usedBy = usedColorMap[currentColor];
            if (usedBy) {
                catColorStatusMsg.className = 'cat-color-status-msg duplicate-warn';
                catColorStatusMsg.innerHTML = `Warna dipakai oleh kategori: <strong>${esc(usedBy)}</strong>`;
            } else {
                catColorStatusMsg.className = 'cat-color-status-msg';
            }
        }
    }

    /**
     * Renders the searchable vector icon grid
     */
    function renderIconGrid(searchQuery = '', groupFilter = 'all') {
        if (!catIconGrid) return;
        const q = (searchQuery || '').toLowerCase().trim();
        const currentIcon = (catFormIcon ? catFormIcon.value : 'Apple').trim().toLowerCase();

        const filtered = MARKET_ICON_CATALOG.filter(item => {
            const matchGroup = (!groupFilter || groupFilter === 'all' || item.group === groupFilter);
            if (!matchGroup) return false;
            if (!q) return true;
            return item.name.toLowerCase().includes(q) ||
                item.label.toLowerCase().includes(q) ||
                item.keywords.toLowerCase().includes(q);
        });

        if (catIconEmpty) {
            catIconEmpty.style.display = filtered.length === 0 ? 'flex' : 'none';
        }

        const esc = typeof Security !== 'undefined' ? Security.escapeHTML : str => (str == null ? '' : String(str));
        const escAttr = typeof Security !== 'undefined' ? Security.sanitizeAttr : esc;

        catIconGrid.innerHTML = filtered.map(item => {
            const isActive = item.name.toLowerCase() === currentIcon;
            const svg = typeof AppIcons !== 'undefined'
                ? AppIcons.getCategorySvg(item.name, { size: 17, stroke: '#FFFFFF', strokeWidth: 2 })
                : '';

            return `
                <div class="cat-icon-card ${isActive ? 'active' : ''}" 
                    data-icon-name="${escAttr(item.name)}" 
                    role="radio" 
                    aria-checked="${isActive}" 
                    tabindex="0" 
                    title="${escAttr(item.label)} (${item.name})">
                    <div class="cat-icon-art">
                        ${svg}
                    </div>
                    <span class="cat-icon-label">${esc(item.label)}</span>
                </div>
            `;
        }).join('');

        // Wire click and keyboard events on icon cards
        catIconGrid.querySelectorAll('.cat-icon-card').forEach(card => {
            const selectCard = () => {
                const iconName = card.dataset.iconName;
                if (!iconName) return;
                if (catFormIcon) catFormIcon.value = iconName;
                catIconGrid.querySelectorAll('.cat-icon-card').forEach(c => {
                    c.classList.remove('active');
                    c.setAttribute('aria-checked', 'false');
                });
                card.classList.add('active');
                card.setAttribute('aria-checked', 'true');
                updateLivePreview();
            };

            card.addEventListener('click', selectCard);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectCard();
                }
            });
        });
    }

    function openCategoryModal() {
        if (!categoryModal) return;
        resetCategoryForm();
        renderCategoryTable();
        categoryModal.style.display = 'flex';
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    function closeCategoryModal() {
        if (categoryModal) {
            categoryModal.style.display = 'none';
        }
    }

    function resetCategoryForm() {
        if (!categoryForm) return;
        categoryForm.reset();
        catFormMode.value = 'create';
        catFormOriginalId.value = '';
        catFormTitle.textContent = 'Tambah Kategori Baru';
        btnSaveCategory.querySelector('span').textContent = 'Simpan Kategori';
        btnResetCatForm.style.display = 'none';
        catFormId.readOnly = false;
        catFormIcon.value = 'Apple';
        catFormColor.value = '#C0392B';
        catFormColorHex.value = '#C0392B';
        catFormFacility.checked = false;

        // Show category list in create mode
        if (categoryListWrapper) {
            categoryListWrapper.style.display = '';
        }

        if (catIconSearchInput) {
            catIconSearchInput.value = '';
        }
        if (catIconSearchClear) {
            catIconSearchClear.style.display = 'none';
        }
        currentIconGroup = 'all';
        if (catGroupTabs) {
            catGroupTabs.querySelectorAll('.cat-group-tab').forEach(t => {
                t.classList.toggle('active', t.dataset.group === 'all');
            });
        }

        renderColorSwatches();
        renderIconGrid('', 'all');
        updateLivePreview();
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    function populateEditCategory(cat) {
        catFormMode.value = 'edit';
        catFormOriginalId.value = cat.id;
        catFormTitle.textContent = `Edit Kategori: ${cat.name}`;
        catFormName.value = cat.name || '';
        catFormId.value = cat.id || '';
        catFormId.readOnly = true;

        // Hide category list in edit mode
        if (categoryListWrapper) {
            categoryListWrapper.style.display = 'none';
        }

        const catModalBody = document.querySelector('.category-modal-body');
        if (catModalBody) {
            catModalBody.scrollTop = 0;
        }

        const resolvedIcon = typeof AppIcons !== 'undefined'
            ? AppIcons.getCategoryIconName(cat.icon || cat.id)
            : (cat.icon || 'Apple');
        catFormIcon.value = resolvedIcon;

        const catColor = (cat.color || '#C0392B').trim();
        catFormColor.value = catColor;
        catFormColorHex.value = catColor.toUpperCase();
        catFormFacility.checked = Boolean(cat.is_facility || cat.isFacility);

        btnSaveCategory.querySelector('span').textContent = 'Perbarui Kategori';
        btnResetCatForm.style.display = 'inline-block';

        renderColorSwatches();
        renderIconGrid(catIconSearchInput ? catIconSearchInput.value : '', currentIconGroup);
        updateLivePreview();
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        catFormName.focus();
    }

    function renderCategoryTable() {
        if (!categoryTableBody) return;
        const catList = Object.values(categories).sort((a, b) => {
            const soA = a.sort_order !== undefined ? a.sort_order : (a.sortOrder || 99);
            const soB = b.sort_order !== undefined ? b.sort_order : (b.sortOrder || 99);
            if (soA !== soB) return soA - soB;
            return (a.name || '').localeCompare(b.name || '');
        });

        if (catListCount) catListCount.textContent = catList.length;

        if (catList.length === 0) {
            categoryTableBody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 20px; color: var(--gray-400);">
                        Belum ada kategori yang terdaftar.
                    </td>
                </tr>
            `;
            return;
        }

        const esc = typeof Security !== 'undefined' ? Security.escapeHTML : str => (str == null ? '' : String(str));
        const escAttr = typeof Security !== 'undefined' ? Security.sanitizeAttr : esc;

        categoryTableBody.innerHTML = catList.map(cat => {
            const catId = (cat.id || '').toLowerCase();
            const isFac = Boolean(cat.is_facility || cat.isFacility || (typeof AppIcons !== 'undefined' && AppIcons.isFacility(catId)));
            const catColor = cat.color || '#C0392B';
            const safeCatColor = String(catColor).replace(/[^#a-zA-Z0-9(),. -]/g, '');
            // Count how many stalls currently use this category
            const count = stalls.filter(s => (s.category || '').toLowerCase() === catId).length;

            return `
                <tr>
                    <td style="text-align: center;">
                        <span class="admin-cat-preview-badge ${isFac ? 'facility' : ''}" style="background:${isFac ? '#FFFFFF' : safeCatColor}; border-color:${safeCatColor};">
                            ${isFac ? `<span style="font-size:0.9rem;">${esc(cat.icon || '📍')}</span>` : (typeof AppIcons !== 'undefined' ? AppIcons.getCategorySvg(catId, { size: 14, stroke: '#FFFFFF', strokeWidth: 2 }) : `<span style="font-size:0.9rem;">${esc(cat.icon || '📍')}</span>`)}
                        </span>
                    </td>
                    <td><strong>${esc(cat.name)}</strong></td>
                    <td><code>${esc(cat.id)}</code></td>
                    <td>
                        <span class="cat-color-badge">
                            <span class="color-dot" style="background:${safeCatColor};"></span>
                            ${esc(catColor)}
                        </span>
                    </td>
                    <td>
                        <span class="${isFac ? 'badge-facility' : 'badge-merchant'}">
                            ${isFac ? 'Fasilitas' : 'Komoditas'}
                        </span>
                    </td>
                    <td>
                        <span style="font-weight: 700; color: ${count > 0 ? 'var(--secondary)' : 'var(--gray-400)'};">
                            ${count} Kios
                        </span>
                    </td>
                    <td>
                        <button type="button" class="btn-cat-action btn-edit-cat" data-cat-id="${escAttr(cat.id)}" title="Edit Kategori">
                            <i data-lucide="pencil" aria-hidden="true"></i>
                            <span>Edit</span>
                        </button>
                        <button type="button" class="btn-cat-action delete btn-delete-cat" data-cat-id="${escAttr(cat.id)}" title="Hapus Kategori">
                            <i data-lucide="trash-2" aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');

        // Attach edit button listeners
        categoryTableBody.querySelectorAll('.btn-edit-cat').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.catId;
                const cat = categories[id];
                if (cat) populateEditCategory(cat);
            });
        });

        // Attach delete button listeners
        categoryTableBody.querySelectorAll('.btn-delete-cat').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.catId;
                confirmDeleteCategory(id);
            });
        });

        // Initialize Lucide icons on category table rows
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    async function confirmDeleteCategory(id) {
        const cat = categories[id];
        if (!cat) return;

        const count = stalls.filter(s => (s.category || '').toLowerCase() === id.toLowerCase()).length;
        let warning = `Yakin ingin menghapus kategori "${cat.name}"?`;
        if (count > 0) {
            warning = `PERHATIAN: Ada ${count} kios yang sedang menggunakan kategori "${cat.name}"!\n\nTetap hapus kategori ini?`;
        }

        if (confirm(warning)) {
            try {
                await DB.deleteCategory(id);
                delete categories[id];
                if (typeof MarketData !== 'undefined') {
                    MarketData.syncCategories(Object.values(categories));
                }
                populateCategoryOptions();
                renderCategoryTable();
                renderTable();
                showToast(`Kategori "${cat.name}" berhasil dihapus.`, 'info');
            } catch (err) {
                showToast('Gagal menghapus kategori: ' + err.message, 'error');
            }
        }
    }

    // Category Events Wiring
    if (btnManageCategories) {
        btnManageCategories.addEventListener('click', openCategoryModal);
    }
    if (categoryModalClose) {
        categoryModalClose.addEventListener('click', closeCategoryModal);
    }
    if (categoryModalDone) {
        categoryModalDone.addEventListener('click', closeCategoryModal);
    }
    if (btnResetCatForm) {
        btnResetCatForm.addEventListener('click', resetCategoryForm);
    }

    // Live preview sync on Name and ID
    if (catFormName) {
        catFormName.addEventListener('input', () => {
            if (catFormId && catFormMode.value === 'create') {
                catFormId.value = catFormName.value
                    .toLowerCase()
                    .trim()
                    .replace(/\s+/g, '_')
                    .replace(/[^a-z0-9_-]/g, '');
            }
            updateLivePreview();
        });
    }

    if (catFormFacility) {
        catFormFacility.addEventListener('change', () => {
            updateLivePreview();
        });
    }

    // Color picker & Hex text sync + live preview updates
    if (catFormColor && catFormColorHex) {
        catFormColor.addEventListener('input', () => {
            catFormColorHex.value = catFormColor.value.toUpperCase();
            renderColorSwatches();
            updateLivePreview();
        });
        catFormColorHex.addEventListener('input', () => {
            const hex = catFormColorHex.value.trim();
            if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
                catFormColor.value = hex;
                renderColorSwatches();
                updateLivePreview();
            }
        });
    }

    // Searchable Icon Picker: Search filtering with debounce
    if (catIconSearchInput) {
        catIconSearchInput.addEventListener('input', () => {
            const val = catIconSearchInput.value;
            if (catIconSearchClear) {
                catIconSearchClear.style.display = val.trim() ? 'block' : 'none';
            }
            clearTimeout(iconSearchDebounceTimer);
            iconSearchDebounceTimer = setTimeout(() => {
                renderIconGrid(val, currentIconGroup);
            }, 120);
        });
    }

    if (catIconSearchClear) {
        catIconSearchClear.addEventListener('click', () => {
            if (catIconSearchInput) {
                catIconSearchInput.value = '';
                catIconSearchInput.focus();
            }
            catIconSearchClear.style.display = 'none';
            renderIconGrid('', currentIconGroup);
        });
    }

    // Searchable Icon Picker: Category Group Tabs
    if (catGroupTabs) {
        catGroupTabs.querySelectorAll('.cat-group-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                catGroupTabs.querySelectorAll('.cat-group-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentIconGroup = tab.dataset.group || 'all';
                const currentSearch = catIconSearchInput ? catIconSearchInput.value : '';
                renderIconGrid(currentSearch, currentIconGroup);
            });
        });
    }

    // Category Form Submit (Create / Update)
    if (categoryForm) {
        categoryForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = catFormName.value.trim();
            const id = (catFormId.value || name).toLowerCase().trim().replace(/\s+/g, '_').replace(/[^a-z0-9_-]/g, '');
            const icon = (catFormIcon.value || 'Apple').trim();
            const color = (catFormColor.value || '#C0392B').trim();
            const isFacility = catFormFacility.checked;

            if (!name || !id) {
                showToast('Nama atau ID kategori belum diisi!', 'error');
                return;
            }

            try {
                showToast('Menyimpan kategori...', 'info');
                const catData = {
                    id: id,
                    name: name,
                    icon: icon,
                    color: color,
                    is_facility: isFacility,
                    isFacility: isFacility,
                    sort_order: categories[id] ? categories[id].sort_order : 99
                };

                await DB.saveCategory(catData);
                categories[id] = catData;

                if (typeof MarketData !== 'undefined') {
                    MarketData.syncCategories(Object.values(categories));
                }

                populateCategoryOptions();
                renderCategoryTable();
                renderTable();
                resetCategoryForm();
                showToast(`Kategori "${name}" berhasil disimpan!`, 'success');
            } catch (err) {
                showToast('Gagal menyimpan kategori: ' + err.message, 'error');
            }
        });
    }

    // Listen for realtime category updates
    if (typeof DB !== 'undefined' && typeof DB.onCategoriesChange === 'function') {
        DB.onCategoriesChange((newCats) => {
            if (Array.isArray(newCats) && newCats.length > 0) {
                categories = {};
                newCats.forEach(c => {
                    const cid = (c.id || '').toLowerCase();
                    categories[cid] = c;
                });
                if (typeof MarketData !== 'undefined') {
                    MarketData.syncCategories(newCats);
                }
                populateCategoryOptions();
                renderCategoryTable();
                renderTable();
            }
        });
    }

    // Toast Notification Utility (XSS-safe text node insertion)
    function showToast(message, type = 'info') {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const iconSpan = document.createElement('span');
        iconSpan.textContent = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';

        const msgSpan = document.createElement('span');
        msgSpan.textContent = message;

        toast.appendChild(iconSpan);
        toast.appendChild(document.createTextNode(' '));
        toast.appendChild(msgSpan);
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 250);
        }, 3000);
    }
});
