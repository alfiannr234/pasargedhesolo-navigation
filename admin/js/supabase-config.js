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
    const CATEGORIES_KEY = 'pasargede_dynamic_categories';
    const AUTH_KEY = 'pasargede_admin_session';

    // 19 Default Master Categories of Pasar Gedhe Solo (+ facilities)
    const DEFAULT_CATEGORIES = [
        { id: 'buah', name: 'Buah-buahan', icon: '🍎', color: '#FF6B35', is_facility: false, sort_order: 1 },
        { id: 'kuliner', name: 'Kuliner Legendaris', icon: '🍜', color: '#E74C3C', is_facility: false, sort_order: 2 },
        { id: 'camilan', name: 'Oleh-oleh & Camilan', icon: '🎁', color: '#9B59B6', is_facility: false, sort_order: 3 },
        { id: 'sayur', name: 'Sayuran Segar', icon: '🥬', color: '#2ECC71', is_facility: false, sort_order: 4 },
        { id: 'sembako', name: 'Sembako & Beras', icon: '🌾', color: '#F39C12', is_facility: false, sort_order: 5 },
        { id: 'jamu', name: 'Jamu & Rempah', icon: '🍵', color: '#E67E22', is_facility: false, sort_order: 6 },
        { id: 'daging_unggas', name: 'Daging Unggas & Ayam', icon: '🍗', color: '#D35400', is_facility: false, sort_order: 7 },
        { id: 'daging_sapi', name: 'Daging Sapi & Kambing', icon: '🥩', color: '#C0392B', is_facility: false, sort_order: 8 },
        { id: 'seafood', name: 'Ikan & Hasil Laut', icon: '🐟', color: '#3498DB', is_facility: false, sort_order: 9 },
        { id: 'perkakas', name: 'Perkakas Rumah', icon: '🍳', color: '#795548', is_facility: false, sort_order: 10 },
        { id: 'kerajinan', name: 'Batik & Kerajinan', icon: '🧵', color: '#8E44AD', is_facility: false, sort_order: 11 },
        { id: 'tekstil', name: 'Pakaian & Tekstil', icon: '👕', color: '#16A085', is_facility: false, sort_order: 12 },
        { id: 'telur', name: 'Telur', icon: '🥚', color: '#F1C40F', is_facility: false, sort_order: 13 },
        { id: 'bunga', name: 'Bunga & Tanaman', icon: '🌸', color: '#E91E63', is_facility: false, sort_order: 14 },
        { id: 'service', name: 'Jasa & Lainnya', icon: '🛠️', color: '#607D8B', is_facility: false, sort_order: 15 },
        { id: 'fashion', name: 'Aksesoris & Fashion', icon: '👜', color: '#E91E63', is_facility: false, sort_order: 16 },
        { id: 'entertainment', name: 'Hiburan', icon: '☕', color: '#9C27B0', is_facility: false, sort_order: 17 },
        { id: 'mushola', name: 'Mushola / Ibadah', icon: '🕌', color: '#4CAF50', is_facility: true, sort_order: 18 },
        { id: 'toilet', name: 'Toilet & Fasilitas', icon: '🚻', color: '#009688', is_facility: true, sort_order: 19 },
        { id: 'pintu', name: 'Pintu Masuk/Keluar', icon: '🚪', color: '#FF5722', is_facility: true, sort_order: 20 },
        { id: 'tangga', name: 'Tangga', icon: '🪜', color: '#9E9E9E', is_facility: true, sort_order: 21 },
        { id: 'ramp', name: 'Ramp Aksesibel', icon: '♿', color: '#2196F3', is_facility: true, sort_order: 22 }
    ];

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
     * Seed initial 471 stalls and 22 master categories into LocalStorage if empty
     */
    function seedLocalStorageIfNeeded(force = false) {
        seedCategoriesLocalStorageIfNeeded(force);

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
     * Seed initial 22 categories into LocalStorage
     */
    function seedCategoriesLocalStorageIfNeeded(force = false) {
        const existing = localStorage.getItem(CATEGORIES_KEY);
        if (!existing || force) {
            localStorage.setItem(CATEGORIES_KEY, JSON.stringify(DEFAULT_CATEGORIES));
            console.log(`✅ Seeded ${DEFAULT_CATEGORIES.length} default categories to local storage.`);
        }
    }

    /**
     * Seed master stalls and categories directly to Supabase cloud
     */
    async function seedToCloudDatabase() {
        let all = [];
        if (typeof MarketData !== 'undefined') {
            all = MarketData.getAllStalls();
        }

        if (!isSupabaseReady || !client) {
            seedLocalStorageIfNeeded(true);
            return { count: all.length, mode: 'local' };
        }

        // 1. Seed Categories first
        try {
            await seedCategoriesToCloud();
        } catch (catErr) {
            console.warn('Could not seed categories to cloud (ensure table public.categories is created):', catErr);
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
     * Seed default categories to Supabase cloud
     */
    async function seedCategoriesToCloud() {
        if (!isSupabaseReady || !client) {
            seedCategoriesLocalStorageIfNeeded(true);
            return { count: DEFAULT_CATEGORIES.length, mode: 'local' };
        }

        const rows = DEFAULT_CATEGORIES.map(c => ({
            id: c.id,
            name: c.name,
            icon: c.icon,
            color: c.color,
            is_facility: Boolean(c.is_facility),
            sort_order: c.sort_order
        }));

        const { error } = await client.from('categories').upsert(rows);
        if (error) {
            console.error('Categories seed error:', error);
            throw error;
        }

        localStorage.setItem(CATEGORIES_KEY, JSON.stringify(DEFAULT_CATEGORIES));
        return { count: DEFAULT_CATEGORIES.length, mode: 'supabase' };
    }

    /**
     * Get all categories (Supabase or LocalStorage)
     */
    async function getAllCategories() {
        if (isSupabaseReady && client) {
            try {
                const { data, error } = await client
                    .from('categories')
                    .select('*')
                    .order('sort_order', { ascending: true });

                if (!error && Array.isArray(data) && data.length > 0) {
                    const categories = data.map(row => ({
                        id: row.id,
                        name: row.name,
                        icon: row.icon || '📍',
                        color: row.color || '#C0392B',
                        is_facility: Boolean(row.is_facility),
                        isFacility: Boolean(row.is_facility),
                        sort_order: row.sort_order || 0
                    }));
                    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
                    return categories;
                }
            } catch (err) {
                console.warn('Error fetching Supabase categories, fallback to local storage:', err);
            }
        }

        // LocalStorage fallback
        const local = localStorage.getItem(CATEGORIES_KEY);
        if (local) {
            try {
                const parsed = JSON.parse(local);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed.map(c => ({
                        ...c,
                        isFacility: Boolean(c.is_facility || c.isFacility)
                    }));
                }
            } catch (e) {
                console.warn(e);
            }
        }

        seedCategoriesLocalStorageIfNeeded();
        return DEFAULT_CATEGORIES.map(c => ({
            ...c,
            isFacility: Boolean(c.is_facility || c.isFacility)
        }));
    }

    /**
     * Save / Update a category
     */
    async function saveCategory(categoryData) {
        const rawId = (categoryData.id || categoryData.name || 'kategori_' + Date.now())
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '_')
            .replace(/[^a-z0-9_-]/g, '');

        const category = {
            id: rawId,
            name: (categoryData.name || 'Kategori Baru').trim(),
            icon: (categoryData.icon || '📍').trim(),
            color: (categoryData.color || '#C0392B').trim(),
            is_facility: Boolean(categoryData.is_facility || categoryData.isFacility),
            isFacility: Boolean(categoryData.is_facility || categoryData.isFacility),
            sort_order: parseInt(categoryData.sort_order || categoryData.sortOrder || 99, 10),
            created_at: new Date().toISOString()
        };

        if (isSupabaseReady && client) {
            try {
                const payload = {
                    id: category.id,
                    name: category.name,
                    icon: category.icon,
                    color: category.color,
                    is_facility: category.is_facility,
                    sort_order: category.sort_order
                };

                const { error } = await client.from('categories').upsert(payload);
                if (error) {
                    console.warn('Supabase saveCategory warning:', error);
                    // If error is table not found, continue saving to local storage
                }
            } catch (err) {
                console.warn('Error saving category to Supabase:', err);
            }
        }

        // Update LocalStorage cache
        const all = await getAllCategories();
        const idx = all.findIndex(c => c.id === category.id);
        if (idx >= 0) {
            all[idx] = { ...all[idx], ...category };
        } else {
            all.push(category);
        }
        all.sort((a, b) => (a.sort_order || 99) - (b.sort_order || 99));
        localStorage.setItem(CATEGORIES_KEY, JSON.stringify(all));

        // Fire custom window event for same-window updates
        if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') {
            window.dispatchEvent(new CustomEvent('pasargede_categories_updated', { detail: all }));
        }

        return { success: true, category };
    }

    /**
     * Delete a category
     */
    async function deleteCategory(id) {
        const safeId = String(id).toLowerCase();

        if (isSupabaseReady && client) {
            try {
                const { error } = await client.from('categories').delete().eq('id', safeId);
                if (error) {
                    console.warn('Supabase deleteCategory warning:', error);
                }
            } catch (err) {
                console.warn('Error deleting category from Supabase:', err);
            }
        }

        const all = await getAllCategories();
        const filtered = all.filter(c => c.id !== safeId);
        localStorage.setItem(CATEGORIES_KEY, JSON.stringify(filtered));

        // Fire custom window event
        if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') {
            window.dispatchEvent(new CustomEvent('pasargede_categories_updated', { detail: filtered }));
        }

        return { success: true };
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
     * Real-time categories subscription
     */
    function onCategoriesChange(callback) {
        if (isSupabaseReady && client) {
            try {
                const channel = client
                    .channel('public:categories')
                    .on('postgres_changes', { event: '*', schema: 'public', table: 'categories' }, async (payload) => {
                        console.log('⚡ Realtime category update from Supabase:', payload);
                        const categories = await getAllCategories();
                        if (typeof callback === 'function') {
                            callback(categories);
                        }
                    })
                    .subscribe();

                return channel;
            } catch (err) {
                console.warn('Could not attach Supabase Realtime category channel:', err);
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

        // Offline development fallback (only active when Supabase cloud is unavailable)
        if (!isSupabaseReady) {
            if (email === 'admin@pasargedesolo.com' && password === 'admin123') {
                currentUser = {
                    email: email,
                    id: 'demo-admin-id',
                    role: 'admin'
                };
                localStorage.setItem(AUTH_KEY, JSON.stringify(currentUser));
                return currentUser;
            }
            throw new Error('Mode Offline: Gunakan akun demo lokal admin@pasargedesolo.com / admin123');
        }

        throw new Error('Email atau password salah.');
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
        getAllCategories,
        saveCategory,
        deleteCategory,
        getDefaultCategories: () => [...DEFAULT_CATEGORIES],
        seedCategoriesToCloud,
        uploadPhoto,
        seedLocalStorageIfNeeded,
        seedCategoriesLocalStorageIfNeeded,
        seedToCloudDatabase,
        login,
        logout,
        getCurrentUser,
        isSupabaseActive,
        onStallsChange,
        onCategoriesChange
    };
})();
