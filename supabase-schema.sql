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
