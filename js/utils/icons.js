/**
 * App Icons Utility
 * Provides white flat vector SVG icons for market kiosk categories
 * Powered by Lucide icons with embedded fallback paths
 */

const AppIcons = (() => {
    // Map known emojis directly to Lucide icon names
    const emojiIconMap = {
        '🍎': 'Apple',
        '🍏': 'Apple',
        '🍜': 'UtensilsCrossed',
        '🍽️': 'UtensilsCrossed',
        '🍽': 'UtensilsCrossed',
        '🍴': 'Utensils',
        '🍲': 'Soup',
        '☕': 'Coffee',
        '🍵': 'Coffee',
        '🍪': 'Cookie',
        '🎁': 'Cookie',
        '🎂': 'Cake',
        '🍰': 'Cake',
        '🥬': 'Carrot',
        '🥕': 'Carrot',
        '🌾': 'Wheat',
        '🍗': 'Drumstick',
        '🥩': 'Beef',
        '🐟': 'Fish',
        '🍳': 'CookingPot',
        '🧵': 'Palette',
        '🎨': 'Palette',
        '👕': 'Shirt',
        '👗': 'Shirt',
        '🥚': 'Egg',
        '🌸': 'Flower2',
        '🌺': 'Flower2',
        '🛠️': 'Wrench',
        '🛠': 'Wrench',
        '🔧': 'Wrench',
        '👜': 'ShoppingBag',
        '🛍️': 'ShoppingBag',
        '🛍': 'ShoppingBag',
        '🏪': 'Store',
        '📸': 'Camera',
        '📷': 'Camera',
        '🕌': 'Moon',
        '🚻': 'CircleUser',
        '🚽': 'CircleUser',
        '🪜': 'Footprints',
        '🚪': 'DoorOpen',
        '♿': 'Accessibility'
    };

    // Map category IDs and names to Lucide icon names
    const categoryIconMap = {
        'buah': 'Apple',
        'buah-buahan': 'Apple',
        'buah segar': 'Apple',
        'kuliner': 'UtensilsCrossed',
        'kuliner legendaris': 'UtensilsCrossed',
        'camilan': 'Cookie',
        'oleh-oleh & camilan': 'Cookie',
        'sayur': 'Carrot',
        'sayuran': 'Carrot',
        'sayuran segar': 'Carrot',
        'sembako': 'Wheat',
        'sembako & beras': 'Wheat',
        'jamu': 'Coffee',
        'jamu & rempah': 'Coffee',
        'jamu & herbal': 'Coffee',
        'daging_unggas': 'Drumstick',
        'daging unggas': 'Drumstick',
        'daging unggas & ayam': 'Drumstick',
        'daging_sapi': 'Beef',
        'daging sapi': 'Beef',
        'daging merah': 'Beef',
        'daging sapi & kambing': 'Beef',
        'seafood': 'Fish',
        'ikan': 'Fish',
        'ikan & hasil laut': 'Fish',
        'perkakas': 'CookingPot',
        'perkakas rumah': 'CookingPot',
        'kerajinan': 'Palette',
        'batik & kerajinan': 'Palette',
        'dekorasi & kerajinan': 'Palette',
        'tekstil': 'Shirt',
        'pakaian': 'Shirt',
        'pakaian & tekstil': 'Shirt',
        'telur': 'Egg',
        'bunga': 'Flower2',
        'service': 'Wrench',
        'jasa': 'Wrench',
        'fashion': 'ShoppingBag',
        'entertainment': 'Camera',
        'hiburan': 'Camera',
        'mushola': 'Moon',
        'toilet': 'CircleUser',
        'tangga': 'Footprints',
        'pintu': 'DoorOpen',
        'ramp': 'Accessibility'
    };

    // Static SVG path fallbacks in case Lucide is blocked or unavailable
    const fallbackPaths = {
        'Apple': '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>',
        'UtensilsCrossed': '<path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/>',
        'Utensils': '<path d="M18 2v6a2 2 0 0 1-2 2v12"/><path d="M14 2v6a2 2 0 0 0 2 2"/><path d="M8 2v20"/><path d="M4 2v4a4 4 0 0 0 8 0V2"/>',
        'Cookie': '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/>',
        'Carrot': '<path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15 9l6-6M18 12l4-4M12 6l4-4"/>',
        'Wheat': '<path d="m2 22 10-10"/><path d="m16 8-1.5-1.5a3.5 3.5 0 0 0-5 0l-.5.5 6.5 6.5.5-.5a3.5 3.5 0 0 0 0-5Z"/><path d="m18 12 2.5-2.5a3.5 3.5 0 0 0-5-5L13 7l5 5Z"/><path d="m10 14-2.5 2.5a3.5 3.5 0 0 0 5 5L15 19l-5-5Z"/>',
        'Coffee': '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h2a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-2"/><path d="M6 2v2"/>',
        'Drumstick': '<path d="m15.4 15.63 3.63-3.63a6 6 0 1 0-8.49-8.49L6.91 7.14a4.5 4.5 0 0 0 0 6.36l2.13 2.13a4.5 4.5 0 0 0 6.36 0Z"/><path d="m13.28 17.75-5.66-5.66"/><path d="M2 22a2 2 0 1 1 2.83-2.83L6.5 20.83a2 2 0 1 1-2.83 2.83L2 22Z"/>',
        'Beef': '<circle cx="12.5" cy="8.5" r="2.5"/><path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.8 3.48-3.48 4.6-6.7 4.6-7.7A3.5 3.5 0 0 0 17.5 2z"/>',
        'Fish': '<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a11 11 0 0 1-4 2.07c-4 1-8.5-1-10-3 1.5-2 6-4 10-3a11 11 0 0 1 4 2.07Z"/>',
        'CookingPot': '<path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.4-.96a2 2 0 0 1 1.14-2.68l2.2-.88a2 2 0 0 1 2.68 1.14l.4.96"/>',
        'Palette': '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
        'Shirt': '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
        'Egg': '<path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"/>',
        'Flower2': '<path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"/><circle cx="12" cy="8" r="2"/><path d="M12 10v12"/>',
        'Wrench': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
        'ShoppingBag': '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
        'Camera': '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
        'Moon': '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
        'CircleUser': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>',
        'Footprints': '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.5v2"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.5v2"/><circle cx="7" cy="20" r="2"/><circle cx="17" cy="24" r="2"/>',
        'DoorOpen': '<path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h20"/><path d="M13 4v16"/><path d="M4 20V6a2 2 0 0 1 2-2h7v16H4Z"/><circle cx="9" cy="12" r="1"/>',
        'Accessibility': '<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>',
        'Store': '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"/>'
    };

    /**
     * Check if a category represents a facility (toilet, stairs, ramp, etc.)
     */
    function isFacility(categoryIdOrStall) {
        if (!categoryIdOrStall) return false;
        if (typeof categoryIdOrStall === 'object') {
            return Boolean(
                categoryIdOrStall.isFacility ||
                categoryIdOrStall.is_facility ||
                categoryIdOrStall.category === 'toilet' ||
                categoryIdOrStall.category === 'tangga' ||
                categoryIdOrStall.category === 'pintu' ||
                categoryIdOrStall.category === 'ramp' ||
                categoryIdOrStall.category === 'mushola'
            );
        }
        const key = String(categoryIdOrStall).toLowerCase();
        return ['toilet', 'tangga', 'pintu', 'ramp', 'mushola', 'fasilitas'].includes(key);
    }

    /**
     * Get Lucide icon definition name for category or direct icon name
     */
    function getCategoryIconName(categoryIdOrName) {
        if (!categoryIdOrName) return 'Store';

        // 1. If input is an object (category or stall)
        if (typeof categoryIdOrName === 'object') {
            const idKey = (categoryIdOrName.id || categoryIdOrName.category || '').toLowerCase().trim();
            if (idKey && categoryIconMap[idKey]) return categoryIconMap[idKey];

            if (categoryIdOrName.icon && typeof categoryIdOrName.icon === 'string') {
                const trimmedIcon = categoryIdOrName.icon.trim();
                if (emojiIconMap[trimmedIcon]) return emojiIconMap[trimmedIcon];
                if (!trimmedIcon.match(/^[\p{Emoji}\u2000-\u3300]/u) && trimmedIcon !== 'Store') {
                    const lowerIcon = trimmedIcon.toLowerCase();
                    const matchedIcon = Object.values(categoryIconMap).find(v => v.toLowerCase() === lowerIcon);
                    if (matchedIcon) return matchedIcon;
                    return trimmedIcon;
                }
            }

            const nameKey = (categoryIdOrName.name || categoryIdOrName.label || categoryIdOrName.categoryLabel || '').toLowerCase().trim();
            if (nameKey && categoryIconMap[nameKey]) return categoryIconMap[nameKey];
        }

        const str = String(categoryIdOrName).trim();

        // 2. Direct emoji mapping
        if (emojiIconMap[str]) {
            return emojiIconMap[str];
        }

        const lower = str.toLowerCase();

        // 3. Direct category ID / name mapping
        if (categoryIconMap[lower]) {
            return categoryIconMap[lower];
        }

        // 4. Normalized alphanumeric category check (e.g. 'daging unggas' vs 'daging_unggas')
        const cleanLower = lower.replace(/[^a-z0-9]/g, '');
        for (const [k, v] of Object.entries(categoryIconMap)) {
            if (k.replace(/[^a-z0-9]/g, '') === cleanLower) return v;
        }

        // 5. Direct lucide check
        if (typeof window !== 'undefined' && window.lucide) {
            if (window.lucide[str]) return str;
            const match = Object.keys(window.lucide).find(k => k.toLowerCase() === lower);
            if (match) return match;
        }

        // 6. Fallback path check
        if (fallbackPaths[str]) return str;
        const fallbackMatch = Object.keys(fallbackPaths).find(k => k.toLowerCase() === lower);
        if (fallbackMatch) return fallbackMatch;

        // 7. Reverse check on categoryIconMap values
        const rev = Object.values(categoryIconMap).find(v => v.toLowerCase() === lower);
        if (rev) return rev;

        // 8. If string looks like a PascalCase Lucide icon name
        if (/^[A-Z][a-zA-Z0-9]+$/.test(str)) {
            return str;
        }

        return 'Store';
    }

    /**
     * Render a Lucide icon array definition to pure SVG markup string
     */
    function renderSvgString(iconDef, options = {}) {
        const size = options.size || 16;
        const stroke = options.stroke || '#FFFFFF';
        const strokeWidth = options.strokeWidth || 2;
        const className = options.className ? ` ${options.className}` : '';

        if (Array.isArray(iconDef)) {
            const [, , children] = iconDef;
            let inner = '';
            for (const [childTag, childAttrs] of (children || [])) {
                const attrsStr = Object.entries(childAttrs)
                    .map(([k, v]) => `${k}="${v}"`)
                    .join(' ');
                inner += `<${childTag} ${attrsStr}></${childTag}>`;
            }
            return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="kiosk-vector-icon${className}">${inner}</svg>`;
        }

        return '';
    }

    /**
     * Get SVG string for a category
     */
    function getCategorySvg(categoryId, options = {}) {
        const iconName = getCategoryIconName(categoryId);
        const size = options.size || 16;
        const stroke = options.stroke || '#FFFFFF';
        const strokeWidth = options.strokeWidth || 2;
        const className = options.className ? ` ${options.className}` : '';

        // 1. Try resolving via window.lucide
        if (typeof window !== 'undefined' && window.lucide && window.lucide[iconName]) {
            return renderSvgString(window.lucide[iconName], { size, stroke, strokeWidth, className: options.className });
        }

        // 2. Try fallback path
        const fallback = fallbackPaths[iconName] || fallbackPaths['Store'];
        if (fallback) {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="kiosk-vector-icon${className}">${fallback}</svg>`;
        }

        // 3. Fallback store icon
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="kiosk-vector-icon${className}">${fallbackPaths['Store']}</svg>`;
    }

    return {
        isFacility,
        getCategoryIconName,
        getCategorySvg,
        renderSvgString
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AppIcons;
}
