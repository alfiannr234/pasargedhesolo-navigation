/**
 * Detail Panel Component
 * Shows complete info for clicked stalls/points and offers "Navigasi ke sini"
 */

const DetailPanel = (() => {
    let currentStallId = null;

    function init() {
        const closeBtn = document.getElementById('detailClose');
        const navigateFromBtn = document.getElementById('detailNavigateFrom');
        const navigateBtn = document.getElementById('detailNavigate');
        const backdrop = document.getElementById('detailBackdrop');

        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                close();
            });
        }

        if (backdrop) {
            backdrop.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                close();
            });
        }

        // Set as origin (Dari sini)
        if (navigateFromBtn) {
            navigateFromBtn.addEventListener('click', () => {
                if (currentStallId) {
                    const stall = MarketData.getStallById(currentStallId);
                    if (stall) {
                        const targetNodeId = stall.nodeId || stall.id;
                        Navigation.setOrigin(targetNodeId, stall.name);
                        close();
                        A11y.announce(`Titik awal rute disetel ke ${stall.name}. Silakan tentukan tujuan.`);
                    }
                }
            });
        }

        // Set as destination (Ke sini)
        if (navigateBtn) {
            navigateBtn.addEventListener('click', () => {
                if (currentStallId) {
                    const stall = MarketData.getStallById(currentStallId);
                    if (stall) {
                        const targetNodeId = stall.nodeId || stall.id;
                        Navigation.setDestination(targetNodeId, stall.name);
                        close();
                        A11y.announce(`Tujuan disetel ke ${stall.name}. Silakan tentukan titik awal.`);
                    }
                }
            });
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isOpen()) {
                close();
            }
        });
    }

    function show(stallId) {
        const stall = MarketData.getStallById(stallId);
        if (!stall) return;

        currentStallId = stallId;
        const categories = MarketData.getCategories();
        const category = categories[stall.category] || {
            name: stall.categoryLabel || 'Kios',
            icon: stall.icon || '📍',
            color: stall.color || '#C0392B'
        };

        const panel = document.getElementById('detailPanel');
        const backdrop = document.getElementById('detailBackdrop');
        const title = document.getElementById('detailTitle');
        const body = document.getElementById('detailBody');

        if (!panel || !title || !body) return;

        title.textContent = stall.name;

        const esc = typeof escapeHTML === 'function' ? escapeHTML : str => str;
        const escAttr = typeof sanitizeAttr === 'function' ? sanitizeAttr : esc;

        let html = '';

        // Stall photo if available
        if (stall.image) {
            html += `
                <div class="detail-img-wrapper">
                    <img src="${escAttr(stall.image)}" alt="${escAttr(stall.name)}" class="detail-img" onerror="this.parentElement.style.display='none'">
                </div>
            `;
        }

        // Category badge
        html += `
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                <span style="font-size: 1.5rem;">${esc(category.icon)}</span>
                <span style="
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    background: ${escAttr(category.color)}22;
                    color: ${escAttr(category.color)};
                ">${esc(category.name)}</span>
            </div>
        `;

        // Legendary badge
        if (stall.isLegendary) {
            html += `
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 14px;
                    background: linear-gradient(135deg, #FFF8E1, #FFF3CD);
                    border: 1px solid #FFC107;
                    border-radius: 8px;
                    margin-bottom: 14px;
                ">
                    <span style="font-size: 1.25rem;">⭐</span>
                    <span style="font-size: 0.8rem; font-weight: 700; color: #856404;">Kuliner Ikonik & Legendaris Solo</span>
                </div>
            `;
        }

        // Description
        if (stall.description) {
            html += `
                <div class="detail-info-row">
                    <span class="detail-info-label">Deskripsi</span>
                    <span class="detail-info-value">${esc(stall.description)}</span>
                </div>
            `;
        }

        // Location / Building & Floor
        const bldInfo = MarketData.getBuildingInfo(stall.buildingId);
        html += `
            <div class="detail-info-row">
                <span class="detail-info-label">Lokasi</span>
                <span class="detail-info-value">${esc(bldInfo ? bldInfo.name : 'Pasar Gedhe')} · Lantai ${stall.floor}</span>
            </div>
        `;

        // Price range
        if (stall.priceRange) {
            html += `
                <div class="detail-info-row">
                    <span class="detail-info-label">Kisaran Harga</span>
                    <span class="detail-info-value">${esc(stall.priceRange)}</span>
                </div>
            `;
        }

        // Accessibility info
        html += `
            <div class="detail-info-row">
                <span class="detail-info-label">Aksesibilitas</span>
                <span class="detail-info-value">
                    ${stall.accessible !== false ? 'Jalur landai' : 'Tangga saja'}
                    ${stall.hasRamp ? '<br>Tersedia fasilitas ramp' : ''}
                    ${stall.hasTactile ? '<br>Tersedia ubin pemandu taktil' : ''}
                </span>
            </div>
        `;

        // Ramp info if present
        if (stall.rampGrade) {
            html += `
                <div class="ramp-info" style="margin-top: 10px;">
                    Kemiringan ramp: ${esc(stall.rampGrade)} (Lebar: ${esc(stall.rampWidth || '1.8m')})
                </div>
            `;
        }

        body.innerHTML = html;

        panel.style.display = 'flex';
        requestAnimationFrame(() => {
            panel.classList.add('open');
            if (backdrop) {
                backdrop.style.display = 'block';
                backdrop.classList.add('open');
            }
        });

        A11y.announce(A11y.getFeatureDescription(stall));
    }

    function close() {
        const panel = document.getElementById('detailPanel');
        const backdrop = document.getElementById('detailBackdrop');
        if (panel) {
            panel.classList.remove('open');
            panel.style.display = 'none';
        }
        if (backdrop) {
            backdrop.classList.remove('open');
            backdrop.style.display = 'none';
        }
        currentStallId = null;

        // Clear active highlight marker from map
        if (typeof MarketMap !== 'undefined' && MarketMap.clearHighlight) {
            MarketMap.clearHighlight();
        }

        A11y.announce('Panel detail ditutup');
    }

    function isOpen() {
        return currentStallId !== null;
    }

    return {
        init,
        show,
        close,
        isOpen
    };
})();
