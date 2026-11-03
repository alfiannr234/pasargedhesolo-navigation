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
    let currentAudio = null;
    let isPlayingSequence = false;

    // Number word mapper for natural conversational Indonesian
    const INDONESIAN_NUMBERS = [
        'nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh',
        'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas', 'dua puluh'
    ];

    function numberToIndonesian(num) {
        const n = parseInt(num, 10);
        if (!isNaN(n) && n >= 0 && n < INDONESIAN_NUMBERS.length) {
            return INDONESIAN_NUMBERS[n];
        }
        return String(num);
    }

    /**
     * Locate the most natural, human-sounding Indonesian voice available
     * Prioritizes Neural/Natural voices (Edge/Windows 11), Google voices, and Malay fallback
     */
    function getBestIndonesianVoice() {
        if (!speechSynthesis) return null;
        const voices = speechSynthesis.getVoices();
        if (!voices || voices.length === 0) return null;

        // 1. Direct Indonesian language tag match (id-ID, id, in-ID, in)
        const idVoices = voices.filter(v => {
            const lang = (v.lang || '').toLowerCase().replace(/_/g, '-');
            return lang === 'id-id' || lang === 'id' || lang.startsWith('id-') || lang.startsWith('in-');
        });

        // 2. Name contains 'indonesia' or 'bahasa'
        const namedVoices = voices.filter(v => {
            const name = (v.name || '').toLowerCase();
            return name.includes('indonesia') || name.includes('bahasa indonesia');
        });

        // 3. Fallback to Malay (Bahasa Melayu / ms-MY), phonetically almost identical
        const malayVoices = voices.filter(v => {
            const lang = (v.lang || '').toLowerCase().replace(/_/g, '-');
            const name = (v.name || '').toLowerCase();
            return lang.startsWith('ms') || name.includes('melayu') || name.includes('malay');
        });

        const candidates = [...idVoices, ...namedVoices, ...malayVoices];
        if (candidates.length === 0) return null;

        // Priority 1: Natural / Neural Indonesian voices (Edge & Windows 11)
        const naturalVoice = candidates.find(v => {
            const name = (v.name || '').toLowerCase();
            return name.includes('natural') || name.includes('online') || name.includes('gadis') || name.includes('ardi');
        });
        if (naturalVoice) return naturalVoice;

        // Priority 2: Google Indonesian voices (Chrome / Android)
        const googleVoice = candidates.find(v => (v.name || '').toLowerCase().includes('google'));
        if (googleVoice) return googleVoice;

        return candidates[0];
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
     * Strips emojis, expands shorthand notations into conversational phrasing,
     * and translates English technical terms into natural Indonesian.
     */
    function cleanIndonesianSpokenText(text) {
        if (!text) return '';
        let spoken = String(text);

        // 1. Strip all emoji characters and unicode symbols that TTS engines read aloud as English phrases
        spoken = spoken.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F100}-\u{1F1FF}\u{1F200}-\u{1F2FF}\u{2B50}\u{2800}-\u{28FF}\u{200D}\u{FE0F}]/gu, '');

        // 2. Floor expansions
        spoken = spoken.replace(/\bLt\.?\s*1\b/gi, 'Lantai satu');
        spoken = spoken.replace(/\bLt\.?\s*2\b/gi, 'Lantai dua');
        spoken = spoken.replace(/\bLt\.?\s*([0-9]+)\b/gi, 'Lantai $1');
        spoken = spoken.replace(/\bLantai\s*1\b/gi, 'Lantai satu');
        spoken = spoken.replace(/\bLantai\s*2\b/gi, 'Lantai dua');
        spoken = spoken.replace(/\bLantai\s*3\b/gi, 'Lantai tiga');

        // 3. Numbers & numbering
        spoken = spoken.replace(/\bNo\.?\s*([0-9]+)\b/gi, 'Nomor $1');

        // 4. Distance & time expansions
        spoken = spoken.replace(/~?\s*1\s*mnt\b/gi, 'sekitar satu menit');
        spoken = spoken.replace(/~?\s*2\s*mnt\b/gi, 'sekitar dua menit');
        spoken = spoken.replace(/~?\s*([0-9]+)\s*mnt\b/gi, 'sekitar $1 menit');
        spoken = spoken.replace(/([0-9]+)\s*m\b/gi, '$1 meter');
        spoken = spoken.replace(/([0-9]+)m\b/gi, '$1 meter');

        // 5. English technical terms & foreign words to natural Indonesian
        spoken = spoken.replace(/\bhandrail\b/gi, 'pegangan tangan');
        spoken = spoken.replace(/\bzebra cross\b/gi, 'penyeberangan jalan');
        spoken = spoken.replace(/\bramp\b/gi, 'jalur landai');
        spoken = spoken.replace(/\baccessibility\b/gi, 'akses ramah difabel');
        spoken = spoken.replace(/\baccessible\b/gi, 'ramah difabel');
        spoken = spoken.replace(/\bwaypoint\b/gi, 'titik lintasan');

        // 6. Proper nouns and market terms
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

        // 7. Directional transitions, symbols, punctuation
        spoken = spoken.replace(/->|→|—/g, ' menuju ke ');
        spoken = spoken.replace(/[()]/g, ', ');
        spoken = spoken.replace(/\//g, ' atau ');
        spoken = spoken.replace(/%/g, ' persen');

        // 8. Natural breathing pauses & clean up
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
     * Play online native Indonesian audio via Google TTS (crystal-clear native Indonesian speaker)
     */
    function playOnlineTts(cleanText, options = {}) {
        if (typeof Audio === 'undefined') return false;
        if (!cleanText || cleanText.length > 200) return false;

        try {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.src = '';
                currentAudio = null;
            }

            const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=id&client=tw-ob&q=${encodeURIComponent(cleanText)}`;
            const audio = new Audio(url);
            audio.playbackRate = options.playbackRate || 0.95; // Calm, clear, natural pace

            currentAudio = audio;

            audio.onplay = () => {
                if (typeof options.onStart === 'function') options.onStart();
            };

            audio.onended = () => {
                if (currentAudio === audio) currentAudio = null;
                if (typeof options.onEnd === 'function') options.onEnd();
            };

            audio.onerror = () => {
                if (currentAudio === audio) currentAudio = null;
                // Seamlessly fallback to Web Speech API
                speakWithWebSpeech(cleanText, options);
            };

            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    if (currentAudio === audio) currentAudio = null;
                    speakWithWebSpeech(cleanText, options);
                });
            }

            return true;
        } catch (e) {
            return false;
        }
    }

    /**
     * Fallback speech using local Web Speech API with tuned rate and pitch
     */
    function speakWithWebSpeech(cleanText, options = {}) {
        if (!speechSynthesis) {
            if (typeof options.onEnd === 'function') options.onEnd();
            return;
        }

        try {
            speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = 'id-ID';
            // Pacing: 0.82 (calm, measured tempo for crystal clear Indonesian articulation)
            utterance.rate = options.rate || 0.82;
            utterance.pitch = options.pitch || 1.0;
            utterance.volume = options.volume !== undefined ? options.volume : 1.0;

            const voice = getBestIndonesianVoice();
            if (voice) {
                utterance.voice = voice;
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

            currentUtterance = utterance;
            speechSynthesis.speak(utterance);
        } catch (err) {
            console.warn('SpeechSynthesis error:', err);
            if (typeof options.onEnd === 'function') options.onEnd();
        }
    }

    /**
     * Primary speak function: selects optimal audio engine
     */
    function speak(text, options = {}) {
        // Respect audio toggle unless forced
        if (!audioEnabled && options.force !== true) return;

        const cleanText = cleanIndonesianSpokenText(text);
        if (!cleanText) {
            if (typeof options.onEnd === 'function') options.onEnd();
            return;
        }

        stopSpeaking();

        // 1. Try online high-definition native Indonesian audio first
        if (typeof navigator === 'undefined' || navigator.onLine !== false) {
            const started = playOnlineTts(cleanText, options);
            if (started) return;
        }

        // 2. Fallback to local Web Speech API
        speakWithWebSpeech(cleanText, options);
    }

    /**
     * Stop ongoing speech and cancel sequential guidance
     */
    function stopSpeaking() {
        isPlayingSequence = false;
        if (currentAudio) {
            try {
                currentAudio.pause();
                currentAudio.src = '';
            } catch (err) {}
            currentAudio = null;
        }
        if (speechSynthesis) {
            try {
                speechSynthesis.cancel();
            } catch (err) {}
        }
        currentUtterance = null;
    }

    /**
     * Check if speech synthesis or audio is currently active
     */
    function isSpeaking() {
        return !!(isPlayingSequence || currentAudio || (speechSynthesis && (speechSynthesis.speaking || currentUtterance)));
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
     * Speak navigation step with rich Indonesian context (prefers audioDescription, strips emojis)
     */
    function speakStep(step, options = {}) {
        if (!step) return;
        if (!audioEnabled && options.force !== true) return;
        
        let text = step.audioDescription || step.text;
        if (!step.audioDescription && step.detail) {
            text += `. ${step.detail}`;
        }
        speak(text, options);
    }

    /**
     * Speak route summary overview with natural conversational phrasing
     */
    function speakRouteSummary(route, options = {}) {
        if (!route) return;
        if (!audioEnabled && options.force !== true) return;
        
        const floorText = route.isMultiFloor 
            ? `Rute berpindah dari Lantai ${numberToIndonesian(route.floors[0])} menuju Lantai ${numberToIndonesian(route.floors[route.floors.length - 1])}.` 
            : `Rute berada di Lantai ${numberToIndonesian(route.floors[0])}.`;
            
        const text = `Rute navigasi ditemukan. Jarak tempuh sekitar ${route.totalDistance} meter, estimasi waktu ${route.estimatedTime} menit. ${floorText}`;
        speak(text, options);
    }

    /**
     * Play full sequential turn-by-turn route guidance with natural pacing and Indonesian intonation
     */
    function playFullRouteGuidance(route, callbacks = {}) {
        if (!route) return;

        stopSpeaking();
        isPlayingSequence = true;

        if (typeof callbacks.onStart === 'function') callbacks.onStart();

        const floorText = route.isMultiFloor 
            ? `Rute berpindah dari Lantai ${numberToIndonesian(route.floors[0])} menuju Lantai ${numberToIndonesian(route.floors[route.floors.length - 1])}.` 
            : `Rute berada di Lantai ${numberToIndonesian(route.floors[0])}.`;

        const introText = `Rute navigasi Pasar Gedhe ditemukan. Total jarak tempuh sekitar ${route.totalDistance} meter, estimasi waktu ${route.estimatedTime} menit. ${floorText}`;

        const steps = (route.steps && route.steps.length > 0) ? route.steps : [];

        // Build list of sequential phrases
        const sequenceList = [{
            text: introText,
            stepIndex: -1
        }];

        steps.forEach((step, idx) => {
            const stepNum = numberToIndonesian(idx + 1);
            const stepBody = step.audioDescription || step.text;
            sequenceList.push({
                text: `Langkah ${stepNum}. ${stepBody}`,
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
                rate: 0.82,  // Measured, articulate tempo
                playbackRate: 0.95,
                pitch: 1.0,
                onEnd: () => {
                    if (!isPlayingSequence) return;
                    currentIdx++;
                    setTimeout(() => {
                        if (isPlayingSequence) {
                            playNext();
                        }
                    }, 850); // 850ms natural breathing pause between steps
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
                    if (callbacks.switchFloor) {
                        e.preventDefault();
                        callbacks.switchFloor(1);
                    }
                    break;
                case '2':
                    if (callbacks.switchFloor) {
                        e.preventDefault();
                        callbacks.switchFloor(2);
                    }
                    break;
                case 'l':
                case 'L':
                    if (callbacks.toggleLegend) {
                        e.preventDefault();
                        callbacks.toggleLegend();
                    }
                    break;
                case 'n':
                case 'N':
                    e.preventDefault();
                    if (callbacks.toggleRoute) {
                        callbacks.toggleRoute();
                    } else if (callbacks.focusNavigation) {
                        callbacks.focusNavigation();
                    }
                    break;
                case 'r':
                case 'R':
                    if (callbacks.toggleRoute) {
                        e.preventDefault();
                        callbacks.toggleRoute();
                    }
                    break;
                case 'd':
                case 'D':
                    if (callbacks.toggleDirectory) {
                        e.preventDefault();
                        callbacks.toggleDirectory();
                    }
                    break;
                case 's':
                case 'S':
                    if (callbacks.focusSearch) {
                        e.preventDefault();
                        callbacks.focusSearch();
                    }
                    break;
                case 'Escape':
                    if (callbacks.closeModals) {
                        e.preventDefault();
                        callbacks.closeModals();
                    }
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
