/**
 * Security & Sanitization Utilities
 * Protects against DOM-based XSS and Prototype Pollution
 */
const Security = (() => {
    /**
     * Escape HTML entities to prevent DOM-based XSS when interpolating into innerHTML
     */
    function escapeHTML(str) {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    /**
     * Sanitize string for safe usage inside HTML attributes
     */
    function sanitizeAttr(str) {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    /**
     * Prevent Prototype Pollution: check if an object key is dangerous
     */
    function isDangerousKey(key) {
        return key === '__proto__' || key === 'constructor' || key === 'prototype';
    }

    return {
        escapeHTML,
        sanitizeAttr,
        isDangerousKey
    };
})();

if (typeof window !== 'undefined') {
    window.Security = Security;
    window.escapeHTML = Security.escapeHTML;
    window.sanitizeAttr = Security.sanitizeAttr;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Security;
}
