# Peta Navigasi Interaktif & Aksesibel Pasar Gedhe Solo

Aplikasi web pemetaan indoor dan navigasi interaktif untuk **Pasar Gedhe Hardjonagoro & Pasar Buah Solo**, terinspirasi dari antarmuka modern ala Google Maps. Dilengkapi fitur legenda interaktif, pencarian cerdas, perutean multi-lantai dan multi-gedung, serta sistem navigasi ramah disabilitas (kursi roda dan tunanetra).

---

## 🌟 Fitur Utama

### 1. Peta Denah Detail & Vektor Realistis (2 Gedung & 4 Lantai)
- **Gedung Pasar Gede (Utama):**
  - **Lantai 1:** Sentra pasar basah, sayuran segar, bumbu/rempah, sembako, bunga tabur, dan oleh-oleh.
  - **Lantai 2:** Sentra kuliner legendaris Solo, daging sapi/unggas, dan area makan.
- **Gedung Pasar Buah (Timur):**
  - **Lantai 1:** Sentra aneka buah segar lokal dan impor.
  - **Lantai 2:** Foodcourt kuliner dan aneka jajanan pasar.
- Menggunakan denah SVG resmi dengan koordinat polygon presisi untuk setiap slot/kios, dilengkapi foto kios dan deskripsi pedagang.

### 2. Fitur Legenda Interaktif (Interactive Legend Filter)
- **Kategori Berkelompok:** Membedakan antara zona komoditas (buah, sayur, kuliner, jamu/rempah, daging, ikan, sembako, pakaian, kerajinan) dan fasilitas umum (toilet, mushola, pintu masuk, tangga, ramp).
- **Filter Multi-Kategori:** Klik label legenda untuk menampilkan atau menyembunyikan kategori di denah secara real-time.
- **Aksi Cepat:** Tombol *Pilih Semua* dan *Sembunyikan Semua* untuk mempermudah pencarian fasilitas tertentu.
- **Indikator Jumlah:** Setiap label legenda menampilkan jumlah kios atau fasilitas yang aktif di lantai dan gedung yang dipilih.

### 3. Menu Direktori Kios (Tenant List ala Situs Resmi)
- **Katalog Lengkap 470+ Kios:** Menampilkan grid kartu kios dengan foto autentik kios pedagang, nama toko, dan lokasi lantai.
- **Filter Cepat Multi-Kriteria:**
  - **Pencarian Teks Langsung:** Filter instan berdasarkan nama toko atau produk.
  - **Filter Kategori & Lantai:** Dropdown pemilihan kategori dan lantai (Lantai 1 / Lantai 2).
  - **Bilah Abjad A-Z (10 Kolom):** Memilih kios berdasarkan huruf awal nama (tombol `All` dan `A` s/d `Z`) persis seperti pada aplikasi resmi Pasar Gede.
- **Integrasi Peta & Detail:** Mengetuk kartu kios akan langsung mengarahkan tampilan denah ke posisi kios tersebut dengan penanda berkedip (*pulsing highlight*), serta membuka panel detail kios lengkap dengan tombol *"Navigasi dari sini"* dan *"Navigasi ke sini"*.

### 4. Navigasi Rute Pop-up (Top-Center Floating Modal)
- **Akses Cepat & Bersih:** Dibuka melalui tombol navigasi rute di header kanan atau tombol pintas di detail kios.
- **Pilihan Titik Awal & Tujuan Fleksibel:**
  - Ketik nama kios atau kategori dengan fitur *autocomplete* pencarian cerdas.
  - Pilih langsung titik lokasi di denah menggunakan tombol crosshair (*Pick on map*).
  - Tombol tukar arah (*swap direction*) sekali klik.
  - Tombol *"Navigasi dari sini"* dan *"Navigasi ke sini"* langsung dari panel detail kios.
- **Ringkasan Rute Informatif:** Menampilkan total jarak tempuh (meter), estimasi waktu jalan kaki (menit), dan indikator transisi lantai jika berpindah tingkat.
- **Animasi Jalur Denah:** Garis rute bergerak (*animated dash flow*) yang secara akurat mengikuti koridor lorong pejalan kaki tanpa menembus dinding atau kios pedagang.

### 4. Sistem Navigasi Ramah Disabilitas
- **♿ Mode Kursi Roda (Wheelchair Accessible):**
  - Algoritma A* secara ketat memblokir akses tangga antar lantai.
  - Rute dialihkan secara eksklusif melalui ramp landai yang memiliki kemiringan ramah kursi roda (6% – 8%) dan handrail pemandu.
  - Menghindari lorong sempit dan merekomendasikan koridor utama yang lapang.
- **👁️ Mode Tunanetra (Visually Impaired Navigation):**
  - **Panduan Suara (Text-to-Speech Web Speech API):** Narasi otomatis berbahasa Indonesia yang mendeskripsikan ringkasan rute dan petunjuk arah.
  - **Prioritas Jalur Taktil:** Mengutamakan rute yang memiliki jalur ubin pemandu (*guiding blocks*) dan ubin peringatan (*warning blocks*).
  - **Aksesibilitas Penuh:** Standar semantik WAI-ARIA, pembaca layar (*screen reader live region*), dan kontras visual tinggi.

### 5. Panel Pengelola & CMS Terpisah (/admin)
- **Web Admin Terpisah:** Disediakan halaman login & dashboard admin mandiri di `/admin` untuk dinas / pengelola pasar.
- **Manajemen Kios & Foto (CRUD):** Tambah, edit, dan hapus pedagang, upload foto asli kios dari kamera/laptop, serta update deskripsi.
- **Tanda Bintang Ikonik (⭐):** Admin dapat menandai kios legendaris dengan bintang ⭐ sekali klik langsung dari tabel atau form modal.
- **Penentu Posisi Denah Visual (Map Picker):** Admin dapat mengklik langsung denah SVG untuk menempatkan pin koordinat kios secara presisi.
- **Dukungan Supabase Cloud & Offline Demo:** Terhubung dengan PostgreSQL Supabase, Supabase Auth, Supabase Storage (100% gratis), dan Realtime WebSocket. Dilengkapi mode demo otomatis sehingga dapat dicoba langsung tanpa setup awal.

---

## 🏗️ Struktur Proyek

```
Maps Navigation Pasar Gedhe/
├── index.html                      # Web 1: Peta Navigasi Publik Pengunjung
├── README.md                       # Dokumentasi arsitektur dan panduan proyek
├── .gitignore                      # Konfigurasi pengabaian berkas Git
├── supabase-schema.sql             # Skrip SQL tabel, izin RLS, realtime & storage Supabase
│
├── admin/                          # Web 2: Dashboard Admin / CMS Pengelola Pasar
│   ├── index.html                  # Halaman Login & Dashboard Admin
│   ├── css/
│   │   └── admin.css               # Desain antarmuka panel admin, tabel, dan modal
│   └── js/
│       ├── supabase-config.js      # Konfigurasi Supabase Client & unified database
│       └── admin-app.js            # Controller dashboard admin, form CRUD & map picker
│
├── assets/                         # Aset statis aplikasi
│   ├── svg/                        # Berkas denah lantai format SVG
│   │   ├── pasar_gede_lt1.svg      # Denah Pasar Gede Lantai 1
│   │   ├── pasar_gede_lt2.svg      # Denah Pasar Gede Lantai 2
│   │   ├── pasar_buah_lt1.svg      # Denah Pasar Buah Lantai 1
│   │   └── pasar_buah_lt2.svg      # Denah Pasar Buah Lantai 2
│   └── walkable/                   # Mask raster koridor jalan kaki untuk navigasi presisi
│       ├── pasar_gede_lt1.png
│       ├── pasar_gede_lt2.png
│       ├── pasar_buah_lt1.png
│       └── pasar_buah_lt2.png
│
├── css/                            # Lembar gaya modular
│   ├── styles.css                  # Variabel tema, header, modal, dan animasi global
│   ├── sidebar.css                 # Sidebar pemilihan gedung dan lantai
│   ├── legend.css                  # Desain kartu legenda, checkbox, dan toggle filter
│   ├── navigation.css              # Tampilan popup navigasi mengambang dan hasil rute
│   ├── directory.css               # Gaya modal Tenant List / Direktori kios
│   ├── accessibility.css           # Gaya khusus mode kursi roda, tunanetra, dan status bar
│   └── responsive.css              # Responsivitas layar mobile, tablet, dan desktop
│
├── js/                             # Logika pemrograman frontend (ES6 Vanilla)
│   ├── app.js                      # Entry point, inisialisasi modul, dan pintasan keyboard
│   ├── map.js                      # Pengelolaan denah Leaflet.js, CRS.Simple, dan layer SVG
│   ├── components/                 # Komponen antarmuka pengguna
│   │   ├── detail-panel.js         # Drawer panel informasi kios dan aksi rute
│   │   ├── legend.js               # Pengendali filter legenda interaktif
│   │   ├── directory.js            # Pengendali Tenant List / Direktori Kios & filter A-Z
│   │   ├── navigation.js           # Pengendali input rute, pemilihan titik peta, dan modal pop-up
│   │   └── search.js               # Pencarian instan kios dengan autocomplete
│   ├── data/                       # Data master pasar dan grafik jaringan
│   │   ├── market-data.js          # Direktori 470+ kios resmi, kategori, dan foto
│   │   ├── navigation-graph.js     # Node waypoint persimpangan jalan dan relasi edge
│   │   └── walkable-grids.js       # Data matriks grid lorong jalan kaki
│   └── utils/                      # Pustaka utilitas
│       ├── accessibility.js        # Controller Text-to-Speech Web Speech API dan ARIA
│       └── pathfinding.js          # Algoritma pencarian rute A* berbobot multi-kriteria
│
└── tools/                          # Alat pengolah data dan otomasi internal
    └── data-pipeline/              # Skrip pembuat data dan grafik navigasi
        ├── build_real_data.js      # Generator pembentuk js/data/market-data.js
        ├── build_real_graph.js     # Generator pembentuk js/data/navigation-graph.js
        └── raw/                    # Data mentah hasil ekstraksi resmi (JSON layout)
```

---

## 🚀 Cara Menjalankan Secara Lokal

Aplikasi ini berbasis frontend murni tanpa *build step* yang rumit:

1. **Jalankan local web server**, misalnya menggunakan Node.js atau Python:
   ```bash
   # Opsi 1: Menggunakan Node.js npx serve
   npx serve .

   # Opsi 2: Menggunakan Python 3
   python -m http.server 8000
   ```
2. Buka browser di `http://localhost:3000` atau `http://localhost:8000`.

### Pintasan Keyboard (Keyboard Shortcuts)
- `1` : Beralih ke **Lantai 1**
- `2` : Beralih ke **Lantai 2**
- `S` : Fokus ke **Kotak Pencarian**
- `N` : Membuka / Menutup **Modal Navigasi Rute**
- `L` : Fokus ke **Panel Legenda Kategori**
- `Esc` : Menutup modal yang sedang terbuka

---

## 🌐 Panduan Deployment

### Rekomendasi 1: Cloudflare Pages (Tercepat & Gratis)
1. Push proyek ini ke repository GitHub Anda.
2. Buka [Cloudflare Dashboard](https://dash.cloudflare.com/) &rarr; pilih menu **Workers & Pages**.
3. Klik **Create application** &rarr; tab **Pages** &rarr; **Connect to Git**.
4. Pilih repository Anda:
   - **Framework preset**: `None`
   - **Build command**: *(kosongkan)*
   - **Build output directory**: `.` *(atau biarkan root)*
5. Klik **Save and Deploy**. Web akan aktif seketika di `https://<nama-proyek>.pages.dev`.

### Rekomendasi 2: GitHub Pages
1. Di repository GitHub Anda, buka tab **Settings** &rarr; menu **Pages**.
2. Pada bagian *Build and deployment*, pilih:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`, folder: `/(root)`
3. Klik **Save**. Web akan aktif di `https://<username>.github.io/<repo-name>/`.
