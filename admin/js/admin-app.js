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
                showToast('Login berhasil! Selamat datang di Admin Portal.', 'success');
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
    }

    // 3. Load & Render Dashboard Data
    async function loadDashboardData() {
        stalls = await DB.getAllStalls();
        if (typeof MarketData !== 'undefined') {
            categories = MarketData.getCategories();
        }
        populateCategoryOptions();
        updateStats();
        renderTable();
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
        let opts = '<option value="all">Kategori: Semua</option>';
        for (const [key, cat] of Object.entries(categories)) {
            const catId = (cat.id || key).toLowerCase();
            opts += `<option value="${catId}">${cat.icon || ''} ${cat.name}</option>`;
        }
        if (selectCategory) selectCategory.innerHTML = opts;

        // In form category dropdown
        let formOpts = '';
        for (const [key, cat] of Object.entries(categories)) {
            const catId = (cat.id || key).toLowerCase();
            formOpts += `<option value="${catId}">${cat.icon || ''} ${cat.name}</option>`;
        }
        if (fCategory) fCategory.innerHTML = formOpts;
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

        if (pageItems.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 40px; color: var(--gray-400);">
                        Tidak ada kios yang cocok dengan filter pencarian.
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = pageItems.map(s => {
                const img = s.imageThumb || s.image;
                const cat = categories[s.category] || { name: s.categoryLabel || 'Kios', icon: s.icon || '🏪', color: s.color || '#C0392B' };
                const bld = s.buildingId === 'pasar-buah' ? 'Pasar Buah' : 'Pasar Gede';
                const isStar = Boolean(s.isLegendary);

                return `
                    <tr data-id="${s.id}">
                        <td>
                            ${img ? `
                                <img src="${img}" alt="${s.name}" class="stall-thumb" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                                <div class="stall-thumb-fallback" style="display:none; background:${cat.color};">
                                    <span>${cat.icon}</span>
                                </div>
                            ` : `
                                <div class="stall-thumb-fallback" style="background:${cat.color};">
                                    <span>${cat.icon}</span>
                                </div>
                            `}
                        </td>
                        <td>
                            <div class="stall-name-cell">
                                <span class="stall-name-title">
                                    <button type="button" class="btn-star-toggle" data-id="${s.id}" title="${isStar ? 'Hapus status Bintang Legendaris' : 'Jadikan Kios Bintang Legendaris'}" style="background:none; border:none; padding:0; cursor:pointer; font-size:1.1rem; line-height:1; vertical-align:middle; margin-right:4px;">
                                        ${isStar ? '⭐' : '<span style="opacity:0.25; filter:grayscale(1);">☆</span>'}
                                    </button>
                                    ${s.name}
                                </span>
                                <span class="stall-name-desc">${s.description || 'Tidak ada deskripsi'}</span>
                            </div>
                        </td>
                        <td>
                            <span class="category-tag" style="background:${cat.color}20; color:${cat.color};">
                                ${cat.icon} ${cat.name}
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
                                <button class="btn-icon-action btn-star-action" title="${isStar ? 'Hapus Bintang Legendaris' : 'Beri Bintang Legendaris'}" data-id="${s.id}">${isStar ? '⭐' : '☆'}</button>
                                <button class="btn-icon-action btn-edit" title="Edit Data Kios" data-id="${s.id}">✏️</button>
                                <button class="btn-icon-action btn-pick-pos" title="Atur Posisi di Denah" data-id="${s.id}">📍</button>
                                <button class="btn-icon-action delete btn-delete" title="Hapus Kios" data-id="${s.id}">🗑️</button>
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
                window.dispatchEvent(new Event('pasargede_data_updated'));
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
                    lat: 1024 - posY,
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

    // 6. Visual Map Coordinate Picker
    function openMapPickerForStall(id) {
        openEditStall(id);
        openMapPicker();
    }

    function openMapPicker() {
        const bld = fBuilding.value || 'pasar-gede';
        const flr = fFloor.value || 1;

        // Path to SVG floor plan
        const svgPath = bld === 'pasar-buah' ? 
            `../assets/svg/pasar_buah_lt${flr}.svg` : 
            `../assets/svg/pasar_gede_lt${flr}.svg`;

        mapPickerImg.src = svgPath;
        tempPickerX = parseInt(fX.value, 10) || 512;
        tempPickerY = parseInt(fY.value, 10) || 512;

        updatePickerPinPosition();
        mapPickerModal.style.display = 'flex';
    }

    function updatePickerPinPosition() {
        if (!mapPickerPin || !mapPickerImg) return;
        const percentX = (tempPickerX / 1024) * 100;
        const percentY = (tempPickerY / 1024) * 100;

        mapPickerPin.style.left = `${percentX}%`;
        mapPickerPin.style.top = `${percentY}%`;

        if (mapPickerCoordsText) {
            mapPickerCoordsText.textContent = `Koordinat: X = ${tempPickerX}, Y = ${tempPickerY}`;
        }
    }

    if (btnPickCoords) btnPickCoords.addEventListener('click', openMapPicker);
    if (mapPickerClose) mapPickerClose.addEventListener('click', () => mapPickerModal.style.display = 'none');

    // Click on Map image to place pin
    if (mapPickerContainer) {
        mapPickerContainer.addEventListener('click', (e) => {
            const rect = mapPickerImg.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            if (clickX >= 0 && clickX <= rect.width && clickY >= 0 && clickY <= rect.height) {
                tempPickerX = Math.round((clickX / rect.width) * 1024);
                tempPickerY = Math.round((clickY / rect.height) * 1024);
                updatePickerPinPosition();
            }
        });
    }

    if (btnConfirmCoords) {
        btnConfirmCoords.addEventListener('click', () => {
            fX.value = tempPickerX;
            fY.value = tempPickerY;
            mapPickerModal.style.display = 'none';
            showToast(`Koordinat diperbarui ke (${tempPickerX}, ${tempPickerY})`, 'success');
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
            if (confirm('Import ulang 471 data kios resmi Pasar Gedhe ke database cloud / penyimpanan aktif?')) {
                showToast('Sedang menyinkronkan 471 kios resmi...', 'info');
                try {
                    if (typeof DB.seedToCloudDatabase === 'function') {
                        const res = await DB.seedToCloudDatabase();
                        showToast(`Berhasil menyinkronkan ${res.count} kios ke ${res.mode === 'supabase' ? 'database Supabase' : 'penyimpanan lokal'}!`, 'success');
                    } else {
                        DB.seedLocalStorageIfNeeded(true);
                        showToast('Data master kios berhasil disinkronkan!', 'success');
                    }
                    await loadDashboardData();
                } catch (e) {
                    showToast('Gagal sinkronisasi data: ' + e.message, 'error');
                }
            }
        });
    }

    // Toast Notification Utility
    function showToast(message, type = 'info') {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span> <span>${message}</span>`;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 250);
        }, 3000);
    }
});
