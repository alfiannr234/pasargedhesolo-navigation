/**
 * Accessibility Utilities
 * Screen reader support, text-to-speech audio wayfinding, and keyboard navigation
 */

const A11y = (() => {
    let currentMode = 'normal'; // 'normal', 'wheelchair', 'blind'
    let speechSynthesis = window.speechSynthesis || null;

    // Audio guidance setting: default enabled (true)
    let audioEnabled = (() => {
        try {
            return localStorage.getItem('pasargede_audio_enabled') !== 'false';
        } catch (e) {
            return true;
        }
    })();

    let cachedVoice = null;
    let currentUtterance = null;
    let isPlayingSequence = false;

    /**
     * Locate the most natural, human-sounding Indonesian voice available
     * Prioritizes Neural/Natural voices (Edge/Windows 11) and Google voices
     */
    function getBestIndonesianVoice() {
        if (!speechSynthesis) return null;
        const voices = speechSynthesis.getVoices();
        if (!voices || voices.length === 0) return null;

        const idVoices = voices.filter(v => {
            const lang = (v.lang || '').toLowerCase().replace('_', '-');
            return lang.startsWith('id') || lang.startsWith('in');
        });

        if (idVoices.length === 0) {
            const namedVoice = voices.find(v => (v.name || '').toLowerCase().includes('indonesia'));
            if (namedVoice) return namedVoice;
            return null;
        }

        // 1. Natural / Neural Indonesian voices (Edge & Windows 11)
        const naturalVoice = idVoices.find(v => {
            const name = (v.name || '').toLowerCase();
            return name.includes('natural') || name.includes('online') || name.includes('gadis') || name.includes('ardi');
        });
        if (naturalVoice) return naturalVoice;

        // 2. Google Indonesian voices (Chrome / Android)
        const googleVoice = idVoices.find(v => (v.name || '').toLowerCase().includes('google'));
        if (googleVoice) return googleVoice;

        // 3. Fallback to any detected Indonesian voice
        return idVoices[0];
    }

    /**
     * Initialize voice cache with event listener for asynchronous voice loading
     */
    function initVoices() {
        if (!speechSynthesis) return;
        cachedVoice = getBestIndonesianVoice();

        if (typeof speechSynthesis.addEventListener === 'function') {
            speechSynthesis.addEventListener('voiceschanged', () => {
                cachedVoice = getBestIndonesianVoice();
            });
        } else if ('onvoiceschanged' in speechSynthesis) {
            speechSynthesis.onvoiceschanged = () => {
                cachedVoice = getBestIndonesianVoice();
            };
        }
    }

    // Call voice initialization
    initVoices();

    /**
     * Clean and format Indonesian spoken text for maximum phonetic clarity
     * Expands shorthand notations (Lt.1, ~2 mnt, 50m, P. Gede) into clear conversational phrases
     */
    function cleanIndonesianSpokenText(text) {
        if (!text) return '';
        let spoken = String(text);

        // Floor expansions
        spoken = spoken.replace(/Lt\.?\s*1\b/gi, 'Lantai satu');
        spoken = spoken.replace(/Lt\.?\s*2\b/gi, 'Lantai dua');
        spoken = spoken.replace(/Lt\.?\s*([0-9]+)/gi, 'Lantai $1');

        // Distance & time expansions
        spoken = spoken.replace(/~?\s*([0-9]+)\s*mnt\b/gi, 'sekitar $1 menit');
        spoken = spoken.replace(/([0-9]+)\s*m\b/gi, '$1 meter');
        spoken = spoken.replace(/([0-9]+)m\b/gi, '$1 meter');

        // Proper noun expansions
        spoken = spoken.replace(/\bToilet\s*\/\s*WC\b/gi, 'Toilet');
        spoken = spoken.replace(/\bWC\s*\/\s*Toilet\b/gi, 'Toilet');
        spoken = spoken.replace(/\bP\.\s*Gedhe\b/gi, 'Pasar Gedhe');
        spoken = spoken.replace(/\bP\.\s*Gede\b/gi, 'Pasar Gedhe');
        spoken = spoken.replace(/\bPasar Gede\b/gi, 'Pasar Gedhe');
        spoken = spoken.replace(/\bP\.\s*Buah\b/gi, 'Pasar Buah');
        spoken = spoken.replace(/\bWC\b/gi, 'Toilet');
        spoken = spoken.replace(/\bJln\b/gi, 'Jalan');
        spoken = spoken.replace(/\bJl\.\b/gi, 'Jalan');
        spoken = spoken.replace(/\bKios\s*No\.?\s*/gi, 'Kios nomor ');

        // Directional transitions
        spoken = spoken.replace(/->|→/g, ' menuju ke ');
        spoken = spoken.replace(/[()]/g, ', ');
        spoken = spoken.replace(/\//g, ' atau ');

        // Clean up punctuation pauses
        spoken = spoken.replace(/,\s*,+/g, ',');
        spoken = spoken.replace(/,\s*\./g, '.');
        spoken = spoken.replace(/\.\s*,/g, '.');
        spoken = spoken.replace(/\s+/g, ' ').trim();

        return spoken;
    }

    /**
     * Check if audio navigation guidance is enabled
     */
    function isAudioEnabled() {
        return audioEnabled;
    }

    /**
     * Enable or disable audio navigation guidance
     */
    function setAudioEnabled(enabled) {
        audioEnabled = !!enabled;
        try {
            localStorage.setItem('pasargede_audio_enabled', audioEnabled ? 'true' : 'false');
        } catch (e) {
            // LocalStorage error fallback
        }
        if (!audioEnabled) {
            stopSpeaking();
        }
    }

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
     * Speak text aloud using Web Speech API with natural Indonesian phrasing
     */
    function speak(text, options = {}) {
        if (!speechSynthesis) return;
        
        // Respect audio toggle unless forced
        if (!audioEnabled && options.force !== true) return;

        try {
            speechSynthesis.cancel();
            
            const cleanText = cleanIndonesianSpokenText(text);
            if (!cleanText) return;

            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = 'id-ID';
            utterance.rate = options.rate || 0.92; // Slightly measured rate for maximum intelligibility
            utterance.pitch = options.pitch || 1.0;
            utterance.volume = options.volume !== undefined ? options.volume : 1.0;
            
            if (!cachedVoice) {
                cachedVoice = getBestIndonesianVoice();
            }
            if (cachedVoice) {
                utterance.voice = cachedVoice;
            }

            utterance.onstart = () => {
                if (typeof options.onStart === 'function') options.onStart();
            };

            utterance.onend = () => {
                currentUtterance = null;
                if (typeof options.onEnd === 'function') options.onEnd();
            };

            utterance.onerror = (e) => {
                currentUtterance = null;
                if (typeof options.onError === 'function') options.onError(e);
                if (typeof options.onEnd === 'function') options.onEnd();
            };

            // Store active reference to avoid Chrome GC bug
            currentUtterance = utterance;
            speechSynthesis.speak(utterance);
        } catch (err) {
            console.warn('SpeechSynthesis error:', err);
            if (typeof options.onEnd === 'function') options.onEnd();
        }
    }

    /**
     * Stop ongoing speech and cancel sequential guidance
     */
    function stopSpeaking() {
        isPlayingSequence = false;
        if (speechSynthesis) {
            try {
                speechSynthesis.cancel();
            } catch (err) {}
        }
        currentUtterance = null;
    }

    /**
     * Check if speech synthesis is currently active
     */
    function isSpeaking() {
        return !!(speechSynthesis && (speechSynthesis.speaking || currentUtterance || isPlayingSequence));
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
            speak('Mode tunanetra diaktifkan. Anda akan dipandu dengan instruksi suara dan ubin taktil.', { force: true });
        } else if (mode === 'wheelchair') {
            document.body.classList.add('wheelchair-mode');
            if (statusBar && statusText) {
                statusBar.style.display = 'flex';
                statusText.textContent = 'Mode Kursi Roda Aktif (Rute Bebas Tangga Lewat Ramp Landai)';
            }
            announce('Mode kursi roda diaktifkan. Rute bebas tangga melalui ramp landai.');
            speak('Mode kursi roda diaktifkan. Rute hanya akan melewati jalur landai dan ramp.', { force: true });
        } else {
            if (statusBar) statusBar.style.display = 'none';
            announce('Mode navigasi standar pejalan kaki.');
        }
    }

    function getMode() {
        return currentMode;
    }

    /**
     * Speak navigation step with rich context
     */
    function speakStep(step, options = {}) {
        if (!step) return;
        if (!audioEnabled && options.force !== true) return;
        
        let text = step.audioDescription || step.text;
        if (step.detail) {
            text += `. ${step.detail}`;
        }
        if (step.badge && step.badge.text) {
            text += `. ${step.badge.text}`;
        }
        speak(text, options);
    }

    /**
     * Speak route summary overview
     */
    function speakRouteSummary(route, options = {}) {
        if (!route) return;
        if (!audioEnabled && options.force !== true) return;
        
        const floorText = route.isMultiFloor 
            ? `Rute berpindah lantai dari Lantai ${route.floors[0]} ke Lantai ${route.floors[route.floors.length - 1]}.` 
            : `Rute berada di Lantai ${route.floors[0]}.`;
            
        const text = `Rute ditemukan. Jarak tempuh sekitar ${route.totalDistance} meter, estimasi waktu ${route.estimatedTime} menit. ${floorText}`;
        speak(text, options);
    }

    /**
     * Play full sequential turn-by-turn route guidance
     */
    function playFullRouteGuidance(route, callbacks = {}) {
        if (!speechSynthesis || !route) return;

        stopSpeaking();
        isPlayingSequence = true;

        if (typeof callbacks.onStart === 'function') callbacks.onStart();

        const floorText = route.isMultiFloor 
            ? `Rute berpindah lantai dari Lantai ${route.floors[0]} ke Lantai ${route.floors[route.floors.length - 1]}.` 
            : `Rute berada di Lantai ${route.floors[0]}.`;

        const introText = `Rute navigasi Pasar Gedhe ditemukan. Total jarak tempuh sekitar ${route.totalDistance} meter, estimasi waktu ${route.estimatedTime} menit. ${floorText}`;

        const steps = (route.steps && route.steps.length > 0) ? route.steps : [];

        // Build list of sequential phrases
        const sequenceList = [{
            text: introText,
            stepIndex: -1
        }];

        steps.forEach((step, idx) => {
            let stepText = `Langkah ${idx + 1}: ${step.text}`;
            if (step.detail) {
                stepText += `. ${step.detail}`;
            }
            if (step.badge && step.badge.text) {
                stepText += `. Perhatian, ${step.badge.text}`;
            }
            sequenceList.push({
                text: stepText,
                stepIndex: idx
            });
        });

        let currentIdx = 0;

        function playNext() {
            if (!isPlayingSequence || currentIdx >= sequenceList.length) {
                isPlayingSequence = false;
                if (typeof callbacks.onEnd === 'function') callbacks.onEnd();
                return;
            }

            const item = sequenceList[currentIdx];
            if (typeof callbacks.onStepChange === 'function') {
                callbacks.onStepChange(item.stepIndex);
            }

            speak(item.text, {
                force: true, // User triggered action
                rate: 0.92,
                pitch: 1.0,
                onEnd: () => {
                    if (!isPlayingSequence) return;
                    currentIdx++;
                    setTimeout(() => {
                        if (isPlayingSequence) {
                            playNext();
                        }
                    }, 400); // 400ms natural breathing pause
                },
                onError: () => {
                    isPlayingSequence = false;
                    if (typeof callbacks.onEnd === 'function') callbacks.onEnd();
                }
            });
        }

        playNext();
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
        isSpeaking,
        isAudioEnabled,
        setAudioEnabled,
        setMode,
        getMode,
        speakStep,
        speakRouteSummary,
        playFullRouteGuidance,
        cleanIndonesianSpokenText,
        initKeyboardShortcuts,
        getFeatureDescription
    };
})();
