/**
 * Accessibility Utilities
 * Screen reader support, text-to-speech audio wayfinding, and keyboard navigation
 */

const A11y = (() => {
    let currentMode = 'normal'; // 'normal', 'wheelchair', 'blind'
    let speechSynthesis = window.speechSynthesis || null;

    /**
     * Announce message to assistive tech via live region
     */
    function announce(message, priority = 'polite') {
        const el = document.getElementById('srAnnounce');
        if (el) {
            el.setAttribute('aria-live', priority);
            el.textContent = '';
            requestAnimationFrame(() => {
                el.textContent = message;
            });
        }
    }

    /**
     * Speak text aloud using Web Speech API (for blind wayfinding)
     */
    function speak(text) {
        if (!speechSynthesis) return;
        
        try {
            speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'id-ID';
            utterance.rate = 0.95;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
            
            // Choose Indonesian voice if available
            const voices = speechSynthesis.getVoices();
            const idVoice = voices.find(v => v.lang && (v.lang.startsWith('id') || v.lang.startsWith('in')));
            if (idVoice) utterance.voice = idVoice;
            
            speechSynthesis.speak(utterance);
        } catch (err) {
            console.warn('SpeechSynthesis error:', err);
        }
    }

    /**
     * Stop ongoing speech
     */
    function stopSpeaking() {
        if (speechSynthesis) {
            speechSynthesis.cancel();
        }
    }

    /**
     * Set accessibility mode
     */
    function setMode(mode) {
        currentMode = mode;
        document.body.classList.remove('blind-mode', 'wheelchair-mode');
        
        const statusBar = document.getElementById('a11yStatus');
        const statusText = document.getElementById('a11yStatusText');

        if (mode === 'blind') {
            document.body.classList.add('blind-mode');
            if (statusBar && statusText) {
                statusBar.style.display = 'flex';
                statusText.textContent = 'Mode Tunanetra Aktif (Panduan Suara & Taktil)';
            }
            announce('Mode tunanetra diaktifkan. Navigasi suara audio diaktifkan.');
            speak('Mode tunanetra diaktifkan. Anda akan dipandu dengan instruksi suara dan jalur taktil.');
        } else if (mode === 'wheelchair') {
            document.body.classList.add('wheelchair-mode');
            if (statusBar && statusText) {
                statusBar.style.display = 'flex';
                statusText.textContent = 'Mode Kursi Roda Aktif (Rute Tanpa Tangga & Lewat Ramp)';
            }
            announce('Mode kursi roda diaktifkan. Rute bebas tangga melalui ramp landai.');
            speak('Mode kursi roda diaktifkan. Rute hanya akan melewati jalur landai dan ramp.');
        } else {
            if (statusBar) statusBar.style.display = 'none';
            announce('Mode navigasi standar pejalan kaki.');
        }
    }

    function getMode() {
        return currentMode;
    }

    /**
     * Speak navigation step
     */
    function speakStep(step) {
        if (currentMode !== 'blind' || !step) return;
        
        let text = step.audioDescription || step.text;
        if (step.badge && step.badge.text) {
            text += '. ' + step.badge.text;
        }
        speak(text);
    }

    /**
     * Speak route summary
     */
    function speakRouteSummary(route) {
        if (currentMode !== 'blind' || !route) return;
        
        const floorText = route.isMultiFloor 
            ? `Rute berpindah lantai dari Lantai ${route.floors[0]} ke Lantai ${route.floors[route.floors.length - 1]}.` 
            : `Rute berada di Lantai ${route.floors[0]}.`;
            
        const text = `Rute ditemukan. Jarak tempuh sekitar ${route.totalDistance} meter, estimasi waktu ${route.estimatedTime} menit. ${floorText}`;
        speak(text);
    }

    /**
     * Initialize keyboard shortcuts
     */
    function initKeyboardShortcuts(callbacks) {
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            switch (e.key) {
                case '1':
                    if (callbacks.switchFloor) callbacks.switchFloor(1);
                    break;
                case '2':
                    if (callbacks.switchFloor) callbacks.switchFloor(2);
                    break;
                case 'l':
                case 'L':
                    if (callbacks.toggleLegend) callbacks.toggleLegend();
                    break;
                case 'n':
                case 'N':
                    if (callbacks.focusNavigation) callbacks.focusNavigation();
                    break;
                case 'r':
                case 'R':
                    if (callbacks.toggleRoute) callbacks.toggleRoute();
                    break;
                case 'd':
                case 'D':
                    if (callbacks.toggleDirectory) callbacks.toggleDirectory();
                    break;
                case 's':
                case 'S':
                    if (callbacks.focusSearch) callbacks.focusSearch();
                    e.preventDefault();
                    break;
                case 'Escape':
                    if (callbacks.closeModals) callbacks.closeModals();
                    break;
            }
        });
    }

    /**
     * Feature description generator for screen reader announcements
     */
    function getFeatureDescription(properties) {
        const category = MarketData.categories[properties.category];
        let desc = `${properties.name}`;
        
        if (category) {
            desc += `, kategori ${category.name}`;
        }
        
        if (properties.description) {
            desc += `. ${properties.description}`;
        }
        
        if (properties.priceRange) {
            desc += `. Kisaran harga: ${properties.priceRange}`;
        }
        
        if (properties.accessible === false) {
            desc += '. Catatan akses: tidak ramah kursi roda karena terdapat undakan tangga.';
        }
        
        if (properties.hasRamp) {
            desc += '. Dilengkapi ramp aksesibel landai.';
        }
        
        if (properties.hasTactile) {
            desc += '. Dilengkapi ubin pemandu taktil.';
        }
        
        desc += `. Berada di Lantai ${properties.floor}.`;
        return desc;
    }

    return {
        announce,
        speak,
        stopSpeaking,
        setMode,
        getMode,
        speakStep,
        speakRouteSummary,
        initKeyboardShortcuts,
        getFeatureDescription
    };
})();
