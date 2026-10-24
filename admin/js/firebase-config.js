/**
 * Firebase Configuration & Unified Database Layer
 * Supports Live Firebase (Firestore + Auth + Storage) OR Offline Demo Mode (LocalStorage)
 */

// =========================================================================
// 1. FIREBASE CONFIGURATION
// Tempelkan konfigurasi proyek Firebase Anda dari Firebase Console di bawah ini:
// (Project Settings -> General -> Your apps -> Web app -> SDK setup and configuration)
// =========================================================================
const firebaseConfig = {
    apiKey: "PASTE_YOUR_API_KEY_HERE",
    authDomain: "pasargede-maps.firebaseapp.com",
    projectId: "pasargede-maps",
    storageBucket: "pasargede-maps.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
};

// =========================================================================
// 2. UNIFIED DATA & AUTH SERVICE (DB)
// =========================================================================
const DB = (() => {
    let isFirebaseReady = false;
    let auth = null;
    let firestore = null;
    let storage = null;
    let currentUser = null;

    const STORAGE_KEY = 'pasargede_dynamic_stalls';
    const AUTH_KEY = 'pasargede_admin_session';

    /**
     * Check if user has pasted real Firebase API key
     */
    function hasRealFirebaseConfig() {
        return firebaseConfig &&
            firebaseConfig.apiKey &&
            firebaseConfig.apiKey !== "PASTE_YOUR_API_KEY_HERE" &&
            firebaseConfig.apiKey.length > 10;
    }

    /**
     * Initialize connection
     */
    async function init() {
        if (hasRealFirebaseConfig() && typeof firebase !== 'undefined') {
            try {
                if (!firebase.apps.length) {
                    firebase.initializeApp(firebaseConfig);
                }
                if (firebase.auth) auth = firebase.auth();
                if (firebase.firestore) firestore = firebase.firestore();
                if (firebase.storage) storage = firebase.storage();
                isFirebaseReady = true;

                // Listen to auth state if auth is available
                if (auth) {
                    auth.onAuthStateChanged((user) => {
                        currentUser = user;
                    });
                }

                console.log('🔥 Firebase initialized successfully!');
                return { mode: 'firebase', success: true };
            } catch (err) {
                console.warn('Firebase init error, fallback to LocalStorage:', err);
            }
        }

        // Fallback to LocalStorage / Demo Mode
        isFirebaseReady = false;
        currentUser = JSON.parse(localStorage.getItem(AUTH_KEY) || 'null');
        seedLocalStorageIfNeeded();

        console.log('💾 Running in LocalStorage / Demo Mode');
        return { mode: 'local', success: true };
    }

    /**
     * Seed initial 471 stalls from market-data.js into LocalStorage if empty
     */
    function seedLocalStorageIfNeeded(force = false) {
        const existing = localStorage.getItem(STORAGE_KEY);
        if (!existing || force) {
            let initialData = [];
            if (typeof MarketData !== 'undefined') {
                initialData = MarketData.getAllStalls();
            }
            if (initialData.length > 0) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
                console.log(`✅ Seeded ${initialData.length} initial stalls to local storage.`);
            }
        }
    }

    /**
     * Get all stalls
     */
    async function getAllStalls() {
        if (isFirebaseReady && firestore) {
            try {
                const snapshot = await firestore.collection('stalls').get();
                const stalls = [];
                snapshot.forEach(doc => stalls.push({ id: doc.id, ...doc.data() }));
                if (stalls.length > 0) return stalls;
            } catch (err) {
                console.error('Error fetching Firestore stalls:', err);
            }
        }

        // LocalStorage fallback
        const local = localStorage.getItem(STORAGE_KEY);
        if (local) {
            return JSON.parse(local);
        }
        if (typeof MarketData !== 'undefined') {
            return MarketData.getAllStalls();
        }
        return [];
    }

    /**
     * Save / Update a stall
     */
    async function saveStall(stallData) {
        const id = stallData.id || ('kios_' + Date.now());
        const stall = {
            ...stallData,
            id: id,
            nodeId: stallData.nodeId || ('n_' + id),
            updatedAt: new Date().toISOString()
        };

        if (isFirebaseReady && firestore) {
            try {
                await firestore.collection('stalls').doc(id).set(stall, { merge: true });
                // Also update local storage cache for instant offline & visitor sync
                const localStalls = await getAllStalls();
                const idx = localStalls.findIndex(s => s.id === id);
                if (idx >= 0) {
                    localStalls[idx] = { ...localStalls[idx], ...stall };
                } else {
                    localStalls.unshift(stall);
                }
                localStorage.setItem(STORAGE_KEY, JSON.stringify(localStalls));
                return { success: true, stall, mode: 'firebase' };
            } catch (err) {
                console.error('Error saving to Firestore:', err);
                throw err;
            }
        }

        // Save to LocalStorage
        const stalls = await getAllStalls();
        const index = stalls.findIndex(s => s.id === id);
        if (index >= 0) {
            stalls[index] = { ...stalls[index], ...stall };
        } else {
            stalls.unshift(stall);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stalls));
        return { success: true, stall, mode: 'local' };
    }

    /**
     * Delete a stall
     */
    async function deleteStall(id) {
        if (isFirebaseReady && firestore) {
            try {
                await firestore.collection('stalls').doc(id).delete();
                const localStalls = await getAllStalls();
                const filtered = localStalls.filter(s => s.id !== id);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
                return { success: true, mode: 'firebase' };
            } catch (err) {
                console.error('Error deleting from Firestore:', err);
                throw err;
            }
        }

        const stalls = await getAllStalls();
        const filtered = stalls.filter(s => s.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
        return { success: true, mode: 'local' };
    }

    /**
     * Subscribe to real-time changes (Firestore onSnapshot)
     */
    function onStallsChange(callback) {
        if (isFirebaseReady && firestore) {
            try {
                return firestore.collection('stalls').onSnapshot((snapshot) => {
                    const stalls = [];
                    snapshot.forEach(doc => stalls.push({ id: doc.id, ...doc.data() }));
                    if (stalls.length > 0) {
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(stalls));
                        if (typeof callback === 'function') {
                            callback(stalls);
                        }
                    }
                }, (err) => {
                    console.warn('Firestore snapshot listener error:', err);
                });
            } catch (err) {
                console.warn('Could not attach Firestore listener:', err);
            }
        }
        return null;
    }

    /**
     * Upload photo (to Firebase Storage or Base64 in LocalStorage)
     */
    async function uploadPhoto(file, stallId) {
        if (isFirebaseReady && storage) {
            try {
                const ext = file.name.split('.').pop() || 'jpg';
                const filename = `stores/${stallId || Date.now()}_${Date.now()}.${ext}`;
                const storageRef = storage.ref().child(filename);
                const snapshot = await storageRef.put(file);
                const downloadURL = await snapshot.ref.getDownloadURL();
                return downloadURL;
            } catch (err) {
                console.error('Error uploading to Firebase Storage:', err);
                throw err;
            }
        }

        // Local Data URL (Base64) fallback
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    /**
     * Authentication: Login
     */
    async function login(email, password) {
        if (isFirebaseReady && auth) {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            currentUser = userCredential.user;
            return currentUser;
        }

        // Demo login (allow test credentials)
        if (email === 'admin@pasargedesolo.com' && password === 'admin123') {
            currentUser = {
                uid: 'demo_admin_123',
                email: 'admin@pasargedesolo.com',
                displayName: 'Pengelola Pasar Gedhe (Demo)'
            };
            localStorage.setItem(AUTH_KEY, JSON.stringify(currentUser));
            return currentUser;
        }

        throw new Error('Email atau password salah!');
    }

    /**
     * Authentication: Logout
     */
    async function logout() {
        if (isFirebaseReady && auth) {
            await auth.signOut();
        }
        currentUser = null;
        localStorage.removeItem(AUTH_KEY);
    }

    /**
     * Get Current User
     */
    function getCurrentUser() {
        return currentUser;
    }

    /**
     * Check active backend mode
     */
    function isFirebaseActive() {
        return isFirebaseReady;
    }

    return {
        init,
        getAllStalls,
        saveStall,
        deleteStall,
        uploadPhoto,
        seedLocalStorageIfNeeded,
        login,
        logout,
        getCurrentUser,
        isFirebaseActive,
        onStallsChange
    };
})();
