/**
 * Search Component
 * Handles instant search, autocomplete suggestions, and stall lookup
 */

const Search = (() => {
    let onSelectCallback = null;
    let debounceTimer = null;

    function init(onSelect) {
        onSelectCallback = onSelect;
        
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        const clearBtn = document.getElementById('searchClearBtn');

        if (!searchInput || !searchResults) return;

        searchInput.addEventListener('input', (e) => {
            const val = e.target.value;
            if (clearBtn) clearBtn.style.display = val.length > 0 ? 'flex' : 'none';

            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                handleSearch(val, searchResults);
            }, 180);
        });

        if (clearBtn) {
            clearBtn.addEventListener('click', (e) => {
                e.preventDefault();
                searchInput.value = '';
                clearBtn.style.display = 'none';
                searchResults.classList.remove('active');
                searchInput.focus();
            });
        }

        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim().length >= 1) {
                if (clearBtn) clearBtn.style.display = 'flex';
                handleSearch(searchInput.value, searchResults);
            }
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.classList.remove('active');
            }
        });

        // Keyboard navigation
        searchInput.addEventListener('keydown', (e) => {
            const items = searchResults.querySelectorAll('.search-result-item');
            const activeItem = searchResults.querySelector('.search-result-item:focus');
            let currentIndex = Array.from(items).indexOf(activeItem);

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    if (currentIndex < items.length - 1) {
                        items[currentIndex + 1].focus();
                    } else if (items.length > 0) {
                        items[0].focus();
                    }
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    if (currentIndex > 0) {
                        items[currentIndex - 1].focus();
                    } else {
                        searchInput.focus();
                    }
                    break;
                case 'Escape':
                    searchResults.classList.remove('active');
                    searchInput.blur();
                    break;
            }
        });
    }

    function handleSearch(query, resultsContainer) {
        const cleanQuery = query.trim().slice(0, 100);
        if (cleanQuery.length < 1) {
            resultsContainer.classList.remove('active');
            return;
        }

        const results = MarketData.searchStalls(cleanQuery);
        
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="search-result-item" style="cursor: default; opacity: 0.7;">
                    <span class="search-result-icon">🔍</span>
                    <div class="search-result-info">
                        <span class="search-result-name">Tidak ditemukan</span>
                        <span class="search-result-category">Coba kata kunci lain (contoh: Dawet, Buah, Soto, Jamu)</span>
                    </div>
                </div>
            `;
            resultsContainer.classList.add('active');
            return;
        }

        const categories = MarketData.getCategories();
        const esc = typeof escapeHTML === 'function' ? escapeHTML : str => str;
        const escAttr = typeof sanitizeAttr === 'function' ? sanitizeAttr : esc;

        resultsContainer.innerHTML = results.map(stall => {
            const category = (Object.hasOwn ? Object.hasOwn(categories, stall.category) : categories.hasOwnProperty(stall.category))
                ? categories[stall.category]
                : {
                    name: stall.categoryLabel || 'Kios',
                    icon: stall.icon || '📍',
                    color: stall.color || '#C0392B'
                };
            const bldName = stall.buildingId === 'pasar-buah' ? 'Pasar Buah' : 'Pasar Gedhe';

            return `
                <div class="search-result-item" 
                     data-id="${escAttr(stall.id)}" 
                     tabindex="0" 
                     role="option"
                     aria-label="${escAttr(stall.name)}, ${escAttr(category.name)}, ${bldName} Lantai ${stall.floor}">
                    <div class="search-result-icon" style="background: ${escAttr(category.color)}22; color: ${escAttr(category.color)};">
                        <span>${esc(category.icon)}</span>
                    </div>
                    <div class="search-result-info">
                        <span class="search-result-name">${highlightMatch(stall.name, cleanQuery)}</span>
                        <span class="search-result-category">${esc(category.name)} · ${bldName} Lt.${stall.floor}</span>
                    </div>
                </div>
            `;
        }).join('');

        resultsContainer.classList.add('active');

        resultsContainer.querySelectorAll('.search-result-item[data-id]').forEach(item => {
            item.addEventListener('click', () => selectResult(item.dataset.id));
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') selectResult(item.dataset.id);
            });
        });
    }

    function highlightMatch(text, query) {
        const esc = typeof escapeHTML === 'function' ? escapeHTML : str => str;
        const safeText = esc(text);
        if (!query) return safeText;
        const escaped = query.slice(0, 100).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const safeEscaped = esc(escaped);
        try {
            const regex = new RegExp(`(${safeEscaped})`, 'gi');
            return safeText.replace(regex, '<strong>$1</strong>');
        } catch (e) {
            return safeText;
        }
    }

    function selectResult(id) {
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        
        const stall = MarketData.getStallById(id);
        if (stall) {
            searchInput.value = stall.name;
            searchResults.classList.remove('active');
            
            if (onSelectCallback) {
                onSelectCallback(stall);
            }

            const bldName = stall.buildingId === 'pasar-buah' ? 'Pasar Buah' : 'Pasar Gedhe';
            A11y.announce(`${stall.name} dipilih di ${bldName} Lantai ${stall.floor}`);
        }
    }

    function clear() {
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        if (searchInput) searchInput.value = '';
        if (searchResults) searchResults.classList.remove('active');
    }

    return {
        init,
        clear
    };
})();
