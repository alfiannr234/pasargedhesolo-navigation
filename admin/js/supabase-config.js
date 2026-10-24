/**
 * Supabase Configuration & Unified Database Layer
 * Supports Live Supabase (PostgreSQL + Auth + Free Storage + Realtime) OR Offline Demo Mode (LocalStorage)
 */

// =========================================================================
// 1. SUPABASE CREDENTIALS
// Tempelkan URL dan anon public key proyek Supabase Anda dari dashboard:
// (Project Settings -> API -> Project URL & Project API keys anon/public)
// =========================================================================
const SUPABASE_URL = "https://gftecalizlkxlgbercls.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qZsaisny3m2IPkWH1z_4Og_-cNHn7Ye";

// =========================================================================
// 2. UNIFIED DATA & AUTH SERVICE (DB)
// =========================================================================
const DB = (() => {
    let client = null;
    let isSupabaseReady = false;
    let currentUser = null;

    const STORAGE_KEY = 'pasargede_dynamic_stalls';
    const AUTH_KEY = 'pasargede_admin_session';

    /**
     * Check if user has pasted real Supabase credentials
     */
    function hasRealSupabaseConfig() {
        return Boolean(
            SUPABASE_URL &&
            SUPABASE_ANON_KEY &&
            SUPABASE_URL !== "PASTE_YOUR_SUPABASE_URL_HERE" &&
            SUPABASE_ANON_KEY !== "PASTE_YOUR_SUPABASE_ANON_KEY_HERE" &&
            SUPABASE_URL.startsWith("https://")
        );
    }

    /**
     * Initialize connection
     */
    async function init() {
        if (hasRealSupabaseConfig() && typeof window.supabase !== 'undefined') {
            try {
                if (!client) {
                    client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                }

                // Check active auth session
                const { data: { session } } = await client.auth.getSession();
                currentUser = session?.user || null;

                // Listen to auth changes
                client.auth.onAuthStateChange((_event, session) => {
                    currentUser = session?.user || null;
                });

                isSupabaseReady = true;
                console.log('⚡ Supabase initialized successfully!');
                return { mode: 'supabase', success: true };
            } catch (err) {
                console.warn('Supabase init error, fallback to LocalStorage:', err);
            }
        }

        // Fallback to LocalStorage / Demo Mode
        isSupabaseReady = false;
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
     * Seed master stalls directly to Supabase cloud
     */
    async function seedToCloudDatabase() {
        if (!isSupabaseReady || !client) {
            seedLocalStorageIfNeeded(true);
            return { count: 471, mode: 'local' };
        }

        let all = [];
        if (typeof MarketData !== 'undefined') {
            all = MarketData.getAllStalls();
        }

        const rows = all.map(s => ({
            id: s.id,
            name: s.name,
            building_id: s.buildingId || 'pasar-gede',
            floor: s.floor || 1,
            category: (s.category || 'kuliner').toLowerCase(),
            data: s,
            updated_at: new Date().toISOString()
        }));

        // Batch upload in chunks of 80 to prevent payload limit
        const chunkSize = 80;
        for (let i = 0; i < rows.length; i += chunkSize) {
            const chunk = rows.slice(i, i + chunkSize);
            const { error } = await client.from('stalls').upsert(chunk);
            if (error) {
                console.error('Batch upload error:', error);
                throw error;
            }
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
        return { count: all.length, mode: 'supabase' };
    }

    /**
     * Get all stalls (Supabase or LocalStorage)
     */
    async function getAllStalls() {
        if (isSupabaseReady && client) {
            try {
                const { data, error } = await client
                    .from('stalls')
                    .select('*')
                    .order('name', { ascending: true });

                if (!error && Array.isArray(data) && data.length > 0) {
                    const stalls = data.map(row => ({
                        ...(row.data || {}),
                        id: row.id,
                        name: row.name,
                        buildingId: row.building_id || (row.data && row.data.buildingId) || 'pasar-gede',
                        floor: row.floor !== undefined ? row.floor : (row.data && row.data.floor) || 1,
                        category: (row.category || (row.data && row.data.category) || 'kuliner').toLowerCase(),
                        isLegendary: Boolean(row.data && row.data.isLegendary)
                    }));
                    // Keep local storage warm for offline cache
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(stalls));
                    return stalls;
                }
            } catch (err) {
                console.error('Error fetching Supabase stalls:', err);
            }
        }

        // LocalStorage fallback
        const local = localStorage.getItem(STORAGE_KEY);
        if (local) {
            try {
                const parsed = JSON.parse(local);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            } catch (e) {
                console.warn(e);
            }
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
            category: (stallData.category || 'kuliner').toLowerCase(),
            isLegendary: Boolean(stallData.isLegendary),
            updatedAt: new Date().toISOString()
        };

        if (isSupabaseReady && client) {
            try {
                const payload = {
                    id: id,
                    name: stall.name,
                    building_id: stall.buildingId || 'pasar-gede',
                    floor: stall.floor || 1,
                    category: stall.category,
                    data: stall,
                    updated_at: new Date().toISOString()
                };

                const { error } = await client.from('stalls').upsert(payload);
                if (error) throw error;

                // Sync local storage cache
                const localStalls = await getAllStalls();
                const idx = localStalls.findIndex(s => s.id === id);
                if (idx >= 0) {
                    localStalls[idx] = { ...localStalls[idx], ...stall };
                } else {
                    localStalls.unshift(stall);
                }
                localStorage.setItem(STORAGE_KEY, JSON.stringify(localStalls));

                return { success: true, stall, mode: 'supabase' };
            } catch (err) {
                console.error('Error saving to Supabase:', err);
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
        if (isSupabaseReady && client) {
            try {
                const { error } = await client.from('stalls').delete().eq('id', id);
                if (error) throw error;

                const localStalls = await getAllStalls();
                const filtered = localStalls.filter(s => s.id !== id);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
                return { success: true, mode: 'supabase' };
            } catch (err) {
                console.error('Error deleting from Supabase:', err);
                throw err;
            }
        }

        const stalls = await getAllStalls();
        const filtered = stalls.filter(s => s.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
        return { success: true, mode: 'local' };
    }

    /**
     * Upload photo to 100% Free Supabase Storage (or Base64 in LocalStorage)
     */
    async function uploadPhoto(file, stallId) {
        if (isSupabaseReady && client) {
            try {
                const ext = file.name ? file.name.split('.').pop() : 'jpg';
                const safeName = String(stallId).replace(/[^a-zA-Z0-9_-]/g, '_');
                const fileName = `${safeName}_${Date.now()}.${ext}`;

                const { data, error } = await client.storage
                    .from('stall-photos')
                    .upload(fileName, file, {
                        cacheControl: '3600',
                        upsert: true
                    });

                if (error) throw error;

                const { data: urlData } = client.storage
                    .from('stall-photos')
                    .getPublicUrl(fileName);

                return urlData.publicUrl;
            } catch (err) {
                console.error('Error uploading photo to Supabase Storage:', err);
                throw err;
            }
        }

        // Offline / Local fallback: convert to base64 DataURL
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(e);
            reader.readAsDataURL(file);
        });
    }

    /**
     * Real-time changes subscription (Postgres Realtime changes)
     */
    function onStallsChange(callback) {
        if (isSupabaseReady && client) {
            try {
                const channel = client
                    .channel('public:stalls')
                    .on('postgres_changes', { event: '*', schema: 'public', table: 'stalls' }, async (payload) => {
                        console.log('⚡ Realtime update from Supabase:', payload);
                        const stalls = await getAllStalls();
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(stalls));
                        if (typeof callback === 'function') {
                            callback(stalls);
                        }
                    })
                    .subscribe();

                return channel;
            } catch (err) {
                console.warn('Could not attach Supabase Realtime channel:', err);
            }
        }
        return null;
    }

    /**
     * Authentication: Login
     */
    async function login(email, password) {
        if (isSupabaseReady && client) {
            const { data, error } = await client.auth.signInWithPassword({
                email,
                password
            });
            if (error) throw error;
            currentUser = data.user;
            return currentUser;
        }

        // Demo login fallback
        if (email === 'admin@pasargedesolo.com' && password === 'admin123') {
            currentUser = {
                email: email,
                id: 'demo-admin-id',
                role: 'admin'
            };
            localStorage.setItem(AUTH_KEY, JSON.stringify(currentUser));
            return currentUser;
        }

        throw new Error('Email atau password salah! Gunakan akun demo: admin@pasargedesolo.com / admin123');
    }

    /**
     * Authentication: Logout
     */
    async function logout() {
        if (isSupabaseReady && client) {
            await client.auth.signOut();
        }
        currentUser = null;
        localStorage.removeItem(AUTH_KEY);
    }

    function getCurrentUser() {
        return currentUser;
    }

    function isSupabaseActive() {
        return isSupabaseReady;
    }

    return {
        init,
        getAllStalls,
        saveStall,
        deleteStall,
        uploadPhoto,
        seedLocalStorageIfNeeded,
        seedToCloudDatabase,
        login,
        logout,
        getCurrentUser,
        isSupabaseActive,
        onStallsChange
    };
})();
