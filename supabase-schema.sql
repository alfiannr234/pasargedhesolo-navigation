-- =========================================================================
-- SUPABASE SCHEMA UNTUK PETA NAVIGASI PASAR GEDHE SOLO
-- Jalankan skrip ini sekali di menu: Supabase Dashboard -> SQL Editor -> Run
-- =========================================================================

-- 1. Buat Tabel Kios (Stalls)
CREATE TABLE IF NOT EXISTS public.stalls (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    building_id TEXT DEFAULT 'pasar-gede',
    floor INT DEFAULT 1,
    category TEXT DEFAULT 'kuliner',
    data JSONB,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Aktifkan Row Level Security (RLS)
ALTER TABLE public.stalls ENABLE ROW LEVEL SECURITY;

-- Izinkan publik (pengunjung) membaca data kios
DROP POLICY IF EXISTS "Akses baca kios untuk publik" ON public.stalls;
CREATE POLICY "Akses baca kios untuk publik" ON public.stalls 
    FOR SELECT USING (true);

-- Izinkan admin menyimpan, memperbarui, atau menghapus kios
DROP POLICY IF EXISTS "Akses kelola kios untuk admin" ON public.stalls;
CREATE POLICY "Akses kelola kios untuk admin" ON public.stalls 
    FOR ALL USING (true) WITH CHECK (true);

-- 3. Aktifkan Realtime agar peta pengunjung terupdate otomatis saat kios ditambah
ALTER PUBLICATION supabase_realtime ADD TABLE public.stalls;

-- 4. Buat Storage Bucket Publik untuk Foto Kios Pedagang
INSERT INTO storage.buckets (id, name, public) 
VALUES ('stall-photos', 'stall-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Kebijakan Akses Storage
DROP POLICY IF EXISTS "Akses lihat foto untuk publik" ON storage.objects;
CREATE POLICY "Akses lihat foto untuk publik" ON storage.objects 
    FOR SELECT USING (bucket_id = 'stall-photos');

DROP POLICY IF EXISTS "Akses upload foto kios" ON storage.objects;
CREATE POLICY "Akses upload foto kios" ON storage.objects 
    FOR INSERT WITH CHECK (bucket_id = 'stall-photos');

DROP POLICY IF EXISTS "Akses update foto kios" ON storage.objects;
CREATE POLICY "Akses update foto kios" ON storage.objects 
    FOR UPDATE USING (bucket_id = 'stall-photos');

DROP POLICY IF EXISTS "Akses hapus foto kios" ON storage.objects;
CREATE POLICY "Akses hapus foto kios" ON storage.objects 
    FOR DELETE USING (bucket_id = 'stall-photos');

-- =========================================================================
-- 5. Buat Tabel Kategori Komoditas (Categories) Dinamis
-- =========================================================================
CREATE TABLE IF NOT EXISTS public.categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    icon TEXT DEFAULT '📍',
    color TEXT DEFAULT '#C0392B',
    is_facility BOOLEAN DEFAULT false,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Aktifkan Row Level Security (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Izinkan publik (pengunjung) membaca kategori
DROP POLICY IF EXISTS "Akses baca kategori untuk publik" ON public.categories;
CREATE POLICY "Akses baca kategori untuk publik" ON public.categories 
    FOR SELECT USING (true);

-- Izinkan admin menyimpan, memperbarui, atau menghapus kategori
DROP POLICY IF EXISTS "Akses kelola kategori untuk admin" ON public.categories;
CREATE POLICY "Akses kelola kategori untuk admin" ON public.categories 
    FOR ALL USING (true) WITH CHECK (true);

-- Aktifkan Realtime untuk tabel categories
ALTER PUBLICATION supabase_realtime ADD TABLE public.categories;

-- =========================================================================
-- 6. Masukkan 19 Kategori Bawaan Pasar Gedhe Solo (+ Fasilitas)
-- =========================================================================
INSERT INTO public.categories (id, name, icon, color, is_facility, sort_order)
VALUES
    ('buah', 'Buah-buahan', '🍎', '#FF6B35', false, 1),
    ('kuliner', 'Kuliner Legendaris', '🍜', '#E74C3C', false, 2),
    ('camilan', 'Oleh-oleh & Camilan', '🎁', '#9B59B6', false, 3),
    ('sayur', 'Sayuran Segar', '🥬', '#2ECC71', false, 4),
    ('sembako', 'Sembako & Beras', '🌾', '#F39C12', false, 5),
    ('jamu', 'Jamu & Rempah', '🍵', '#E67E22', false, 6),
    ('daging_unggas', 'Daging Unggas & Ayam', '🍗', '#D35400', false, 7),
    ('daging_sapi', 'Daging Sapi & Kambing', '🥩', '#C0392B', false, 8),
    ('seafood', 'Ikan & Hasil Laut', '🐟', '#3498DB', false, 9),
    ('perkakas', 'Perkakas Rumah', '🍳', '#795548', false, 10),
    ('kerajinan', 'Batik & Kerajinan', '🧵', '#8E44AD', false, 11),
    ('tekstil', 'Pakaian & Tekstil', '👕', '#16A085', false, 12),
    ('telur', 'Telur', '🥚', '#F1C40F', false, 13),
    ('bunga', 'Bunga & Tanaman', '🌸', '#E91E63', false, 14),
    ('service', 'Jasa & Lainnya', '🛠️', '#607D8B', false, 15),
    ('fashion', 'Aksesoris & Fashion', '👜', '#E91E63', false, 16),
    ('entertainment', 'Hiburan', '☕', '#9C27B0', false, 17),
    ('mushola', 'Mushola / Ibadah', '🕌', '#4CAF50', true, 18),
    ('toilet', 'Toilet & Fasilitas', '🚻', '#009688', true, 19),
    ('pintu', 'Pintu Masuk/Keluar', '🚪', '#FF5722', true, 20),
    ('tangga', 'Tangga', '🪜', '#9E9E9E', true, 21),
    ('ramp', 'Ramp Aksesibel', '♿', '#2196F3', true, 22)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    icon = EXCLUDED.icon,
    color = EXCLUDED.color,
    is_facility = EXCLUDED.is_facility,
    sort_order = EXCLUDED.sort_order;
