/**
 * App Icons Utility
 * Provides white flat vector SVG icons for market kiosk categories
 * Powered by Lucide icons with embedded fallback paths
 */

const AppIcons = (() => {
    // Map category IDs to Lucide icon names
    const categoryIconMap = {
        'buah': 'Apple',
        'kuliner': 'UtensilsCrossed',
        'camilan': 'Cookie',
        'sayur': 'Carrot',
        'sembako': 'Wheat',
        'jamu': 'Coffee',
        'daging_unggas': 'Drumstick',
        'daging_sapi': 'Beef',
        'seafood': 'Fish',
        'perkakas': 'CookingPot',
        'kerajinan': 'Palette',
        'tekstil': 'Shirt',
        'telur': 'Egg',
        'bunga': 'Flower2',
        'service': 'Wrench',
        'fashion': 'ShoppingBag',
        'entertainment': 'Coffee',
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
        'Cookie': '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/>',
        'Carrot': '<path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15 9l6-6M18 12l4-4M12 6l4-4"/>',
        'Wheat': '<path d="m2 22 10-10"/><path d="m16 8-1.5-1.5a3.5 3.5 0 0 0-5 0l-.5.5 6.5 6.5.5-.5a3.5 3.5 0 0 0 0-5Z"/><path d="m18 12 2.5-2.5a3.5 3.5 0 0 0-5-5L13 7l5 5Z"/><path d="m10 14-2.5 2.5a3.5 3.5 0 0 0 5 5L15 19l-5-5Z"/>',
        'Coffee': '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h2a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-2"/><path d="M6 2v2"/>',
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
        if (typeof categoryIdOrName === 'object') {
            if (categoryIdOrName.icon && typeof categoryIdOrName.icon === 'string' && !categoryIdOrName.icon.match(/^[\p{Emoji}\u2000-\u3300]/u)) {
                categoryIdOrName = categoryIdOrName.icon;
            } else if (categoryIdOrName.id || categoryIdOrName.category) {
                categoryIdOrName = categoryIdOrName.id || categoryIdOrName.category;
            }
        }
        const str = String(categoryIdOrName).trim();
        const lower = str.toLowerCase();

        // 1. Direct category ID mapping
        if (categoryIconMap[lower]) {
            return categoryIconMap[lower];
        }

        // 2. Direct lucide check
        if (typeof window !== 'undefined' && window.lucide) {
            if (window.lucide[str]) return str;
            const match = Object.keys(window.lucide).find(k => k.toLowerCase() === lower);
            if (match) return match;
        }

        // 3. Fallback path check
        if (fallbackPaths[str]) return str;
        const fallbackMatch = Object.keys(fallbackPaths).find(k => k.toLowerCase() === lower);
        if (fallbackMatch) return fallbackMatch;

        // 4. Reverse check on categoryIconMap values
        const rev = Object.values(categoryIconMap).find(v => v.toLowerCase() === lower);
        if (rev) return rev;

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
