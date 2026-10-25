/**
 * Market Data - Official Pasar Gedhe Solo & Pasar Buah
 * Contains real 469 stalls from maps.pasargedesolo.com with exact coordinates, photos, descriptions and categories
 */

const MarketData = (() => {
    const data = {
  "buildings": [
    {
      "id": "pasar-gede",
      "name": "Pasar Gedhe (Utama)",
      "description": "Bangunan utama pasar bersejarah di pusat Kota Solo. Lantai 1 untuk kebutuhan pangan harian dan oleh-oleh; Lantai 2 untuk sentra kuliner legendaris dan daging.",
      "floors": [
        {
          "level": 1,
          "name": "Lantai 1",
          "desc": "Pasar Basah, Buah, Sembako & Oleh-oleh",
          "svg": "assets/svg/pasar_gede_lt1.svg",
          "width": 1024,
          "height": 1024
        },
        {
          "level": 2,
          "name": "Lantai 2",
          "desc": "Sentra Kuliner Legendaris & Daging",
          "svg": "assets/svg/pasar_gede_lt2.svg",
          "width": 1024,
          "height": 1024
        }
      ]
    },
    {
      "id": "pasar-buah",
      "name": "Pasar Buah (Sisi Timur)",
      "description": "Terletak di sisi timur seberang jalan, khusus menjual aneka buah segar lokal dan impor. Di lantai dua terdapat area kuliner dan foodcourt.",
      "floors": [
        {
          "level": 1,
          "name": "Lantai 1",
          "desc": "Sentra Buah Segar Lokal & Impor",
          "svg": "assets/svg/pasar_buah_lt1.svg",
          "width": 1024,
          "height": 1024
        },
        {
          "level": 2,
          "name": "Lantai 2",
          "desc": "Foodcourt & Kuliner Buah",
          "svg": "assets/svg/pasar_buah_lt2.svg",
          "width": 1024,
          "height": 1024
        }
      ]
    }
  ],
  "categories": {
    "Buah": {
      "id": "buah",
      "name": "Buah-buahan",
      "icon": "🍎",
      "color": "#FF6B35"
    },
    "Kuliner": {
      "id": "kuliner",
      "name": "Kuliner Legendaris",
      "icon": "🍜",
      "color": "#E74C3C"
    },
    "Camilan": {
      "id": "camilan",
      "name": "Oleh-oleh & Camilan",
      "icon": "🎁",
      "color": "#9B59B6"
    },
    "Sayur": {
      "id": "sayur",
      "name": "Sayuran Segar",
      "icon": "🥬",
      "color": "#2ECC71"
    },
    "Sembako": {
      "id": "sembako",
      "name": "Sembako & Beras",
      "icon": "🌾",
      "color": "#F39C12"
    },
    "Jamu & Herbal": {
      "id": "jamu",
      "name": "Jamu & Rempah",
      "icon": "🍵",
      "color": "#E67E22"
    },
    "Daging Unggas": {
      "id": "daging_unggas",
      "name": "Daging Unggas & Ayam",
      "icon": "🍗",
      "color": "#D35400"
    },
    "Daging Merah": {
      "id": "daging_sapi",
      "name": "Daging Sapi & Kambing",
      "icon": "🥩",
      "color": "#C0392B"
    },
    "Seafood": {
      "id": "seafood",
      "name": "Ikan & Hasil Laut",
      "icon": "🐟",
      "color": "#3498DB"
    },
    "Perkakas Rumah": {
      "id": "perkakas",
      "name": "Perkakas Rumah",
      "icon": "🍳",
      "color": "#795548"
    },
    "Dekorasi & Kerajinan": {
      "id": "kerajinan",
      "name": "Batik & Kerajinan",
      "icon": "🧵",
      "color": "#8E44AD"
    },
    "Pakaian & Tekstil": {
      "id": "tekstil",
      "name": "Pakaian & Tekstil",
      "icon": "👕",
      "color": "#16A085"
    },
    "Telur": {
      "id": "telur",
      "name": "Telur",
      "icon": "🥚",
      "color": "#F1C40F"
    },
    "Florist": {
      "id": "bunga",
      "name": "Bunga & Tanaman",
      "icon": "🌸",
      "color": "#E91E63"
    },
    "Service & Others": {
      "id": "service",
      "name": "Jasa & Lainnya",
      "icon": "🛠️",
      "color": "#607D8B"
    },
    "Fashion & Accessories": {
      "id": "fashion",
      "name": "Aksesoris & Fashion",
      "icon": "👜",
      "color": "#E91E63"
    },
    "Entertainment": {
      "id": "entertainment",
      "name": "Hiburan",
      "icon": "☕",
      "color": "#9C27B0"
    },
    "Tempat Ibadah": {
      "id": "mushola",
      "name": "Mushola / Ibadah",
      "icon": "🕌",
      "color": "#4CAF50",
      "isFacility": true
    },
    "Fasilitas Umum": {
      "id": "toilet",
      "name": "Toilet & Fasilitas",
      "icon": "🚻",
      "color": "#009688",
      "isFacility": true
    },
    "Pintu Akses": {
      "id": "pintu",
      "name": "Pintu Masuk/Keluar",
      "icon": "🚪",
      "color": "#FF5722",
      "isFacility": true
    },
    "Tangga": {
      "id": "tangga",
      "name": "Tangga",
      "icon": "🪜",
      "color": "#9E9E9E",
      "isFacility": true
    },
    "Ramp": {
      "id": "ramp",
      "name": "Ramp Aksesibel",
      "icon": "♿",
      "color": "#2196F3",
      "isFacility": true,
      "isAccessible": true
    }
  },
  "stalls": {
    "pasar-gede-1": [
      {
        "id": "9eec2df4-d946-4a78-8ce9-8e4de247b34e",
        "nodeId": "n_9eec2df4-d946-4a78-8ce9-8e4de247b34e",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Jasa Pengggilingan Barokah",
        "name": "Jasa Pengggilingan Barokah",
        "category": "service",
        "categoryLabel": "Jasa & Lainnya",
        "icon": "🛠️",
        "color": "#607D8B",
        "x": 408,
        "y": 869,
        "lat": 155,
        "lng": 408,
        "description": "Jasa Penggilingan Barokah adalah salah satu kios yang ada di Pasar Gedhe yang menyediakan jasa penggilingan daging dan penggilingan ayam",
        "image": "https://maps.pasargedesolo.com/storage/stores/Ds3GAfWWXy9juuSecJ4paecr5MWF3L1Z.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Ds3GAfWWXy9juuSecJ4paecr5MWF3L1Z_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Ds3GAfWWXy9juuSecJ4paecr5MWF3L1Z.jpg",
          "https://maps.pasargedesolo.com/storage/locations/ZGB9NRuVTrFLjqg2RaTgtEzXizSJmsygJoWp5oFy.jpg"
        ],
        "entries": [
          {
            "x": 407,
            "y": 858
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec2f76-e610-4637-8a30-e18c0efb416d",
        "nodeId": "n_9eec2f76-e610-4637-8a30-e18c0efb416d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Nanik",
        "name": "Kios Bu Nanik",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 699,
        "y": 872,
        "lat": 152,
        "lng": 699,
        "description": "Kios Oleh Oleh Bu Nanik adalah kios yang berada di Pasar Gedhe yang menjual spesialis teh racikan, wedang rempah dan oleh-oleh khas Solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/veKZkA7s28jYUKZZopgJPBQEBxxyk96R.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/veKZkA7s28jYUKZZopgJPBQEBxxyk96R_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/veKZkA7s28jYUKZZopgJPBQEBxxyk96R.jpg",
          "https://maps.pasargedesolo.com/storage/locations/LUutY0ngcYP9meZnFmMKUF8OoshqqKolryro2KyV.jpg"
        ],
        "entries": [
          {
            "x": 693,
            "y": 858
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3009-3fa1-4082-bb09-849165d2e4ad",
        "nodeId": "n_9eec3009-3fa1-4082-bb09-849165d2e4ad",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Mbak Titik",
        "name": "Kios Mbak Titik",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 546,
        "y": 711,
        "lat": 313,
        "lng": 546,
        "description": "Kios Mbak Titik merupakan kios yang ada di Pasar Gedhe yang menyediakan spesialis oleh-oleh khas Solo seperti rambak petis, brem, intip goreng, ampyang dan rengginan",
        "image": "https://maps.pasargedesolo.com/storage/stores/aPv12ovRTdIdOG0A8jYCyYcgJQ4okI9Q.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/aPv12ovRTdIdOG0A8jYCyYcgJQ4okI9Q_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/aPv12ovRTdIdOG0A8jYCyYcgJQ4okI9Q.jpg",
          "https://maps.pasargedesolo.com/storage/locations/2eJztxNbGiTLEAQCKxlVPYnJWrRQMhd8M1Vw10M8.jpg"
        ],
        "entries": [
          {
            "x": 536,
            "y": 715
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec2b66-7a3f-43d4-8134-4bde3e2b5fc2",
        "nodeId": "n_9eec2b66-7a3f-43d4-8134-4bde3e2b5fc2",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Widadi 2",
        "name": "Kios Bu Widadi 2",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 449,
        "y": 780,
        "lat": 244,
        "lng": 449,
        "description": "Kios Bu Widadi 2 adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis bahan racikan untuk minuman herbal teh atau jamu dan bahan baku untuk minuman kesehatan lainnya",
        "image": "https://maps.pasargedesolo.com/storage/stores/YIWlhAOuCMX5e3ajHl1qXlXaSdXLWLg5.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/YIWlhAOuCMX5e3ajHl1qXlXaSdXLWLg5_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/YIWlhAOuCMX5e3ajHl1qXlXaSdXLWLg5.jpg",
          "https://maps.pasargedesolo.com/storage/locations/6pyEXMJKr5YmHzVAASSkKtq6U5NR6N44x0tWjjN9.jpg"
        ],
        "entries": [
          {
            "x": 440,
            "y": 770
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec2f0f-ae5e-4a69-88a3-2d482acb31d4",
        "nodeId": "n_9eec2f0f-ae5e-4a69-88a3-2d482acb31d4",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Ramadhani",
        "name": "Kios Ramadhani",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 574,
        "y": 870,
        "lat": 154,
        "lng": 574,
        "description": "Kios Ramadhani merupakan kios yang ada di Pasar Gedhe yang menjual spesialis rambak petis dengan pilihan rasa,  racikan teh, kerupuk ikan dan karak",
        "image": "https://maps.pasargedesolo.com/storage/stores/9vsbAn7RvjOIsyXJDPUeU0vL9eykOikG.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/9vsbAn7RvjOIsyXJDPUeU0vL9eykOikG_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/9vsbAn7RvjOIsyXJDPUeU0vL9eykOikG.jpg",
          "https://maps.pasargedesolo.com/storage/locations/XCXMoAnnhde2P3zM7IrukbwZKB3xso0dEXEWX10k.jpg"
        ],
        "entries": [
          {
            "x": 571,
            "y": 858
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
        "nodeId": "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Dawet Selasih Bu Watik",
        "name": "Dawet Selasih Bu Watik",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 632,
        "y": 727,
        "lat": 297,
        "lng": 632,
        "description": "Dawet Selasih Bu Watik merupakan los yang ada di Pasar Gedhe yang menyediakan spesial es dawet selasih",
        "image": "https://maps.pasargedesolo.com/storage/stores/OIcAoIpYblNfoVZp7vyHUk9IG7762Wb8.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/OIcAoIpYblNfoVZp7vyHUk9IG7762Wb8_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/OIcAoIpYblNfoVZp7vyHUk9IG7762Wb8.jpg",
          "https://maps.pasargedesolo.com/storage/locations/SA9PccgKvHyzVWsqeypx7eLMzmnRq5RlaNdF1Sd8.jpg"
        ],
        "entries": [
          {
            "x": 630,
            "y": 742
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec31a3-2c03-498b-ad60-4c9d0bc800b4",
        "nodeId": "n_9eec31a3-2c03-498b-ad60-4c9d0bc800b4",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Widadi 1",
        "name": "Kios Bu Widadi 1",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 442,
        "y": 743,
        "lat": 281,
        "lng": 442,
        "description": "Kios Bu Widadi 1 adalah salah satu kios yang ada di Pasar Gedhe yang menjual khusus racikan jamu dan minuman jamu kemasan untuk kesehatan",
        "image": "https://maps.pasargedesolo.com/storage/stores/ho6Px9H2MQNQK5vtQPvCYpuvf4Bou056.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ho6Px9H2MQNQK5vtQPvCYpuvf4Bou056_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ho6Px9H2MQNQK5vtQPvCYpuvf4Bou056.jpg",
          "https://maps.pasargedesolo.com/storage/locations/rL8EGODiyrlRdvsoIw0DLfv7QkUW9clQWSCKTT0U.jpg"
        ],
        "entries": [
          {
            "x": 448,
            "y": 756
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec305a-ade9-47ac-90bb-481b090dad7a",
        "nodeId": "n_9eec305a-ade9-47ac-90bb-481b090dad7a",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Sugiarti",
        "name": "Kios Bu Sugiarti",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 474,
        "y": 745,
        "lat": 279,
        "lng": 474,
        "description": "Kios Bu Sugiarti adalah salah satu kios yang ada di Pasar Gedhe yang menjual khusus rempah-rempahan untuk racikan jamu dan minuman wedang kesehatan",
        "image": "https://maps.pasargedesolo.com/storage/stores/Vzm7T7jYW2XipMTAGkzzS7H71BkW98Tr.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Vzm7T7jYW2XipMTAGkzzS7H71BkW98Tr_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Vzm7T7jYW2XipMTAGkzzS7H71BkW98Tr.jpg",
          "https://maps.pasargedesolo.com/storage/locations/gPJkQiWxKVfeVZ2vCTtm1EzwWxtHLHHr77q3B7Qi.jpg"
        ],
        "entries": [
          {
            "x": 483,
            "y": 755
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3351-ba60-4179-87d4-79c3129b5a05",
        "nodeId": "n_9eec3351-ba60-4179-87d4-79c3129b5a05",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Ibu Wartini",
        "name": "Kios Ibu Wartini",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 356,
        "y": 697,
        "lat": 327,
        "lng": 356,
        "description": "Kios Ibu Wartini adalah salah satu kios yang ada di Pasar Gedhe yang spesialis menjual kebutuhan sayuran-sayuran segar dan bumbu dapur untuk memasak",
        "image": "https://maps.pasargedesolo.com/storage/stores/Fveaieh6vOS1lzshcLPw3DJtFDbVsxFF.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Fveaieh6vOS1lzshcLPw3DJtFDbVsxFF_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Fveaieh6vOS1lzshcLPw3DJtFDbVsxFF.jpg",
          "https://maps.pasargedesolo.com/storage/locations/4JxWliNtvYC5MZ2iG0ZlmAWvwEKJdyfHxLsh1pN0.jpg"
        ],
        "entries": [
          {
            "x": 355,
            "y": 708
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3225-3109-458c-82e2-a02d3531ec27",
        "nodeId": "n_9eec3225-3109-458c-82e2-a02d3531ec27",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Ayam Goreng Pak Ali",
        "name": "Ayam Goreng Pak Ali",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 580,
        "y": 726,
        "lat": 298,
        "lng": 580,
        "description": "Ayam Goreng Pak Ali adalah kuliner legendaris Solo yang telah berjualan sejak tahun 1930 di dalam Pasar Gedhe. Menggunakan ayam pejantan yang digoreng dua kali untuk menghasilkan tekstur renyah, ayam ini dimarinasi dengan bumbu rempah khas yang membuat minyak gorengnya berwarna gelap namun kaya rasa. Dengan harga sekitar Rp70.000 per ekor, Ayam Goreng Pak Ali menjadi hidden gem favorit warga lokal dan wisatawan yang mencari cita rasa otentik Solo.",
        "image": "https://maps.pasargedesolo.com/storage/stores/RGcHwsbKqUoZl1VgdHNOA4eu6tuY6OnL.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/RGcHwsbKqUoZl1VgdHNOA4eu6tuY6OnL_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/RGcHwsbKqUoZl1VgdHNOA4eu6tuY6OnL.jpg",
          "https://maps.pasargedesolo.com/storage/locations/eRrjhZqOM0u1tOjewZAfYzlb6WQn7BmLkh6K14Tg.jpg"
        ],
        "entries": [
          {
            "x": 578,
            "y": 742
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3525-2ed5-447c-8493-8c65a8de8781",
        "nodeId": "n_9eec3525-2ed5-447c-8493-8c65a8de8781",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bang Agiu",
        "name": "Kios Bang Agiu",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 667,
        "y": 613,
        "lat": 411,
        "lng": 667,
        "description": "Kios Bang Agiu merupakan salah satu kios yang ada di Pasar Gedhe yang menyediakan beragam sembako seperti sabun, mie, bumbu dapur, dan susu",
        "image": "https://maps.pasargedesolo.com/storage/stores/q4Ee17eRL1HhFjDIBSrqrKcgVCdHOKYn.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/q4Ee17eRL1HhFjDIBSrqrKcgVCdHOKYn_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/q4Ee17eRL1HhFjDIBSrqrKcgVCdHOKYn.jpg",
          "https://maps.pasargedesolo.com/storage/locations/x7FVbnqU0bVZcHUHVYo7OyBRhD8YWwCsCesDu0wW.jpg"
        ],
        "entries": [
          {
            "x": 667,
            "y": 599
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3639-57c0-4077-b843-1389d937744e",
        "nodeId": "n_9eec3639-57c0-4077-b843-1389d937744e",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Pak Suparmi",
        "name": "Kios Pak Suparmi",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 367,
        "y": 676,
        "lat": 348,
        "lng": 367,
        "description": "Kios Pak Suparmi adalah salah satu kios yang ada di Pasar Gedhe yang menjual sayur sawi dan pakcoy",
        "image": "https://maps.pasargedesolo.com/storage/stores/sz5fDnn5T5e3hqycp6A6JQMxZXoB9ri9.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/sz5fDnn5T5e3hqycp6A6JQMxZXoB9ri9_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/sz5fDnn5T5e3hqycp6A6JQMxZXoB9ri9.jpg"
        ],
        "entries": [
          {
            "x": 367,
            "y": 669
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef420fb-6408-42d8-9f2a-f29cb883aa56",
        "nodeId": "n_9ef420fb-6408-42d8-9f2a-f29cb883aa56",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Bakso Juventus",
        "name": "Bakso Juventus",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 315,
        "y": 897,
        "lat": 127,
        "lng": 315,
        "description": "Bakso Juventus adalah salah satu kuliner legendaris yang berada di Pasar Gedhe Pintu Utara yang dikenal menyajikan bakso dan soto dengan cita rasa khas Jawa yang autentik",
        "image": "https://maps.pasargedesolo.com/storage/stores/el0DkhO1PP2oNPPU6vaIq7WKGrh6aE9N.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/el0DkhO1PP2oNPPU6vaIq7WKGrh6aE9N_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/el0DkhO1PP2oNPPU6vaIq7WKGrh6aE9N.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/wNGltoeJRI1d2QfNkDakHGgjebWRWDVdMpvQS4Re.jpg"
        ],
        "entries": [
          {
            "x": 319,
            "y": 913
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3598-f6da-42c9-9555-ae9ffaa923c3",
        "nodeId": "n_9eec3598-f6da-42c9-9555-ae9ffaa923c3",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Makbenk 2",
        "name": "Kios Makbenk 2",
        "category": "perkakas",
        "categoryLabel": "Perkakas Rumah",
        "icon": "🍳",
        "color": "#795548",
        "x": 677,
        "y": 571,
        "lat": 453,
        "lng": 677,
        "description": "Kios Makbenk 2 merupakan kios yang ada di Pasar Gedhe yang menyediakan spesialis gerabah dan alat kebersihan yang lengkap seperti sapu, tampah, camping, dan alat makan dari rotan atau kayu. Kios Makbenk memiliki 2 kios di sisi depan dan belakang bersebrangan",
        "image": "https://maps.pasargedesolo.com/storage/stores/pEWU4dzQ4MOiHQBvSg4QgEcoIevXYbTS.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/pEWU4dzQ4MOiHQBvSg4QgEcoIevXYbTS_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/pEWU4dzQ4MOiHQBvSg4QgEcoIevXYbTS.jpg",
          "https://maps.pasargedesolo.com/storage/locations/C4dpTQB4pm3S5Dizoq70qFAfCl6iNLZvtwb5yttR.jpg"
        ],
        "entries": [
          {
            "x": 683,
            "y": 583
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec359d-b3c7-4dbf-8dba-56afc6ae9e54",
        "nodeId": "n_9eec359d-b3c7-4dbf-8dba-56afc6ae9e54",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Spinarti",
        "name": "Kios Bu Spinarti",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 482,
        "y": 697,
        "lat": 327,
        "lng": 482,
        "description": "Kios Bu Spinarti adalah salah satu kios yang ada di Pasar Gedhe yang menjual racikan teh solo dan beraneka macam krupuk serta menyediakan bumbu masak",
        "image": "https://maps.pasargedesolo.com/storage/stores/w7aZnFKMhW5bLPs2BxwksyTceh3hMepe.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/w7aZnFKMhW5bLPs2BxwksyTceh3hMepe_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/w7aZnFKMhW5bLPs2BxwksyTceh3hMepe.jpg",
          "https://maps.pasargedesolo.com/storage/locations/BGEoP76dZfvYkx8ukfYrxz9dt0XetQLqUCGNUvKC.jpg"
        ],
        "entries": [
          {
            "x": 481,
            "y": 708
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec346f-adde-4314-96ed-59b4f8396dfc",
        "nodeId": "n_9eec346f-adde-4314-96ed-59b4f8396dfc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Jamu Sari Asih",
        "name": "Toko Jamu Sari Asih",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 431,
        "y": 695,
        "lat": 329,
        "lng": 431,
        "description": "Toko Jamu Sari Asih adalah salah satu toko jamu yang berada di Pasar Gedhe yang spesialis menjual berbagai minuman jamu herbal untuk kesehatan yang komplit",
        "image": "https://maps.pasargedesolo.com/storage/stores/ucvyBF8trn9CoVlKloXaalH5SlX0q9f5.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ucvyBF8trn9CoVlKloXaalH5SlX0q9f5_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ucvyBF8trn9CoVlKloXaalH5SlX0q9f5.jpg",
          "https://maps.pasargedesolo.com/storage/locations/D9kX0aVXK3hLiibg0TWLeVmOB2EUCg2CEGr8gvVI.jpg",
          "https://maps.pasargedesolo.com/storage/locations/XiDbl5xgyFS7DqkcipdbvM1cELgJrGPvSttlQAZu.jpg"
        ],
        "entries": [
          {
            "x": 431,
            "y": 708
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec33d6-d85e-4c7d-b37c-b26706285439",
        "nodeId": "n_9eec33d6-d85e-4c7d-b37c-b26706285439",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Pak Syahrudin",
        "name": "Kios Pak Syahrudin",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 394,
        "y": 695,
        "lat": 329,
        "lng": 394,
        "description": "Kios Pak Syahrudin adalah salah satu kios yang ada di Pasar Gedhe yang menjual krupuk dan karak mentah",
        "image": "https://maps.pasargedesolo.com/storage/stores/mdjNAIptMxMXZm43iTpDcGpgUbUiow9e.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/mdjNAIptMxMXZm43iTpDcGpgUbUiow9e_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/mdjNAIptMxMXZm43iTpDcGpgUbUiow9e.jpg",
          "https://maps.pasargedesolo.com/storage/locations/e6VT9SUQkyz3m3rgvDaUHtTRk4Cbvaca3QMUUFRs.jpg"
        ],
        "entries": [
          {
            "x": 393,
            "y": 708
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3db6-46d6-47ff-884d-1077b42da86f",
        "nodeId": "n_9eec3db6-46d6-47ff-884d-1077b42da86f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Sugeng Rebung",
        "name": "Sugeng Rebung",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 484,
        "y": 613,
        "lat": 411,
        "lng": 484,
        "description": "Sugeng Rebung merupakan kios yang ada di Pasar Gedhe yang menjual spesialis rebung utuh maupun rebung yang sudah diparut",
        "image": "https://maps.pasargedesolo.com/storage/stores/02RiOy9kNCIx810he5KqKQS6cnBTbLDc.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/02RiOy9kNCIx810he5KqKQS6cnBTbLDc_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/02RiOy9kNCIx810he5KqKQS6cnBTbLDc.jpg",
          "https://maps.pasargedesolo.com/storage/locations/ubNa28nnFxPh0e80kJDyK3wtn11X5rQyo32lfQPJ.jpg"
        ],
        "entries": [
          {
            "x": 493,
            "y": 613
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec374a-ed39-498a-b3dc-9c84b91a3f32",
        "nodeId": "n_9eec374a-ed39-498a-b3dc-9c84b91a3f32",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Jeruk Pak Mulyono",
        "name": "Kios Jeruk Pak Mulyono",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 612,
        "y": 552,
        "lat": 472,
        "lng": 612,
        "description": "Kios Jeruk Pak Mulyono merupakan salah satu kios yang ada di Pasar Gedhe yang menyediakan spesialis buah jeruk peras dan lemon",
        "image": "https://maps.pasargedesolo.com/storage/stores/uZLWkA11voAgNEoNP0Yp5aipPsrDF21T.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/uZLWkA11voAgNEoNP0Yp5aipPsrDF21T_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/uZLWkA11voAgNEoNP0Yp5aipPsrDF21T.jpg",
          "https://maps.pasargedesolo.com/storage/locations/DyHLVlfeAxf0CAY2e2NX9CtGHr7VsvJp0eGamprF.jpg"
        ],
        "entries": [
          {
            "x": 610,
            "y": 541
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec371f-8ba1-40d9-8756-b42a1919a19f",
        "nodeId": "n_9eec371f-8ba1-40d9-8756-b42a1919a19f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Bu Slamet 2",
        "name": "Toko Bu Slamet 2",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 455,
        "y": 677,
        "lat": 347,
        "lng": 455,
        "description": "Toko Bu Slamet 2 adalah salah satu kios yang ada di Pasar Gedhe yang menjual khusus sayur-sayuran yang variannya cukup komplit dan aneka kebutuhan bumbu dapur",
        "image": "https://maps.pasargedesolo.com/storage/stores/RTS66bH7JML8YfBWUphq4MtFAST6QTO5.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/RTS66bH7JML8YfBWUphq4MtFAST6QTO5_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/RTS66bH7JML8YfBWUphq4MtFAST6QTO5.jpg",
          "https://maps.pasargedesolo.com/storage/locations/y6lT4sj8zKqSi9kt8tNEio0d10EDrC07y30qNO5V.jpg"
        ],
        "entries": [
          {
            "x": 454,
            "y": 670
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec37fc-a1e5-45e6-aa11-288e32b3a6f4",
        "nodeId": "n_9eec37fc-a1e5-45e6-aa11-288e32b3a6f4",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Darini",
        "name": "Kios Bu Darini",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 488,
        "y": 681,
        "lat": 343,
        "lng": 488,
        "description": "Kios Bu Darini adalah salah satu kios yang ada di Pasar Gedhe menjual aneka krupuk dan karak mentah selain itu juga menjual aneka bumbu dapur",
        "image": "https://maps.pasargedesolo.com/storage/stores/DStHrddFKbpqg3MChs5Vr1xgmzAtkWGA.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/DStHrddFKbpqg3MChs5Vr1xgmzAtkWGA_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/DStHrddFKbpqg3MChs5Vr1xgmzAtkWGA.jpg",
          "https://maps.pasargedesolo.com/storage/locations/3tmb9SorhnW0BJBx4e3ytVb6Y30Tv5CxYyuIt607.jpg"
        ],
        "entries": [
          {
            "x": 493,
            "y": 682
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3886-4c16-4041-bddf-3d6f51e7058a",
        "nodeId": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Tyah Sayur",
        "name": "Kios Bu Tyah Sayur",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 358,
        "y": 638,
        "lat": 386,
        "lng": 358,
        "description": "Kios Bu Tyah Sayur adalah salah satu kios sayur yang berada di Pasar Gedhe yang menjual spesialis sayur-sayuran yang segar dan cukup lengkap",
        "image": "https://maps.pasargedesolo.com/storage/stores/NBB5jfDjsvC507Nvkta9pA9u5SJUWghC.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/NBB5jfDjsvC507Nvkta9pA9u5SJUWghC_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/NBB5jfDjsvC507Nvkta9pA9u5SJUWghC.jpg",
          "https://maps.pasargedesolo.com/storage/locations/7d44R5U5dz1B88EJIdj97gCBnCtmC3JdNgAiVtnc.jpg"
        ],
        "entries": [
          {
            "x": 356,
            "y": 655
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
        "nodeId": "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Sayur Bu Pan",
        "name": "Toko Sayur Bu Pan",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 361,
        "y": 614,
        "lat": 410,
        "lng": 361,
        "description": "Toko Sayur Bu Pan adalah salah satu kios sayur yang berada di Pasar Gedhe yang menjual spesialis bermacam-macam aneka sayuran segar",
        "image": "https://maps.pasargedesolo.com/storage/stores/PNxF76YA72cdTmFs91DBBddCUVhvBiP7.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/PNxF76YA72cdTmFs91DBBddCUVhvBiP7_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/PNxF76YA72cdTmFs91DBBddCUVhvBiP7.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Zqzp5TKXsd7cPm6Vcm4RRWiHewojMEeK43Cj7yjW.jpg"
        ],
        "entries": [
          {
            "x": 359,
            "y": 601
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
        "nodeId": "n_9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Surya Sayur",
        "name": "Kios Surya Sayur",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 410,
        "y": 612,
        "lat": 412,
        "lng": 410,
        "description": "Kios Surya Sayur adalah salah satu kios yang ada di Pasar Gedhe yang menjual sayur-sayuran seperti timun dan bunga pepaya",
        "image": "https://maps.pasargedesolo.com/storage/stores/5n644WpSatdO3AzuFQdqbDR3stMdlYTn.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/5n644WpSatdO3AzuFQdqbDR3stMdlYTn_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/5n644WpSatdO3AzuFQdqbDR3stMdlYTn.jpg",
          "https://maps.pasargedesolo.com/storage/locations/c2xhb7Ol7yPzXZAse8fJQXBbJM6JhLXp5WR9TtNy.jpg",
          "https://maps.pasargedesolo.com/storage/locations/hRbS9zUwb2C81GIHlpqs2284OkarxVJCsS9rp7lO.jpg"
        ],
        "entries": [
          {
            "x": 410,
            "y": 601
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4063-2d11-4088-83f7-f5b5b87db1c6",
        "nodeId": "n_9eec4063-2d11-4088-83f7-f5b5b87db1c6",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Budi Susato",
        "name": "Budi Susato",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 359,
        "y": 555,
        "lat": 469,
        "lng": 359,
        "description": "Budi Susato adalah pedagang kios sayur yang berada di Pasar Gedhe yang menjual khusus aneka sayur-sayuran",
        "image": "https://maps.pasargedesolo.com/storage/stores/RQjJzNETGE13CJDb3AgoFfjMpDqDkGDF.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/RQjJzNETGE13CJDb3AgoFfjMpDqDkGDF_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/RQjJzNETGE13CJDb3AgoFfjMpDqDkGDF.jpg",
          "https://maps.pasargedesolo.com/storage/locations/LM0iZMcUZ1tCEM2BZeI8oiq2gZAUxGmyratmAsXE.jpg"
        ],
        "entries": [
          {
            "x": 361,
            "y": 543
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec419f-b160-4391-a5ab-4c9eb75cbce1",
        "nodeId": "n_9eec419f-b160-4391-a5ab-4c9eb75cbce1",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "UD Bintang Buah",
        "name": "UD Bintang Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 762,
        "y": 189,
        "lat": 835,
        "lng": 762,
        "description": "UD Bintang Buah merupakan kios buah yang ada di Pasar Gedhe yang menyediakan khusus jeruk peras grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/nGDa1Di6BPmsKmxTabccjyPp1Zm3SD5i.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/nGDa1Di6BPmsKmxTabccjyPp1Zm3SD5i_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/nGDa1Di6BPmsKmxTabccjyPp1Zm3SD5i.jpeg"
        ],
        "entries": [
          {
            "x": 753,
            "y": 198
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec477d-23d4-4a7f-80a1-a04f65d1e93c",
        "nodeId": "n_9eec477d-23d4-4a7f-80a1-a04f65d1e93c",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "TWK Grosir Buah",
        "name": "TWK Grosir Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 718,
        "y": 153,
        "lat": 871,
        "lng": 718,
        "description": "TWK Grosir Buah merupakan los kios yang ada di Pasar Gedhe yang menyediakan spesialis buah jeruk grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/IvhlBHfT1PjqmfYjG0cavzXRHljsjlgE.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/IvhlBHfT1PjqmfYjG0cavzXRHljsjlgE_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/IvhlBHfT1PjqmfYjG0cavzXRHljsjlgE.jpg",
          "https://maps.pasargedesolo.com/storage/locations/rMNWXFyqQAeJXWRkyIzg6QacsAonHoVCUPnU4Gez.jpg"
        ],
        "entries": [
          {
            "x": 701,
            "y": 163
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4860-2daf-4bf9-9942-02c1d717f642",
        "nodeId": "n_9eec4860-2daf-4bf9-9942-02c1d717f642",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Berkah Ayam Bu Yati",
        "name": "Berkah Ayam Bu Yati",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 412,
        "y": 569,
        "lat": 455,
        "lng": 412,
        "description": "Berkah Ayam Bu Yati adalah salah satu kios yang berada di Pasar Gedhe yang menjual produk khusus spesialis ayam potong dan ayam utuh",
        "image": "https://maps.pasargedesolo.com/storage/stores/6lyYJ7qi9NDoIoL50g4f2jwJDgH6DlGK.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/6lyYJ7qi9NDoIoL50g4f2jwJDgH6DlGK_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/6lyYJ7qi9NDoIoL50g4f2jwJDgH6DlGK.jpg",
          "https://maps.pasargedesolo.com/storage/locations/roODPGMpFegdzZnEM7z8t5yDEcwzX9N10EvGYB4h.jpg"
        ],
        "entries": [
          {
            "x": 417,
            "y": 582
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3fee-0741-40be-b425-620016b062f5",
        "nodeId": "n_9eec3fee-0741-40be-b425-620016b062f5",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "HS Group Bu Nunik",
        "name": "HS Group Bu Nunik",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 458,
        "y": 550,
        "lat": 474,
        "lng": 458,
        "description": "HS Group Bu Nunik adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis sayur-sayuran yang lengkap dan bumbu masak dapur",
        "image": "https://maps.pasargedesolo.com/storage/stores/ulmhy9syDN2jXE1xE0DxU0DWYpPCmVMq.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ulmhy9syDN2jXE1xE0DxU0DWYpPCmVMq_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ulmhy9syDN2jXE1xE0DxU0DWYpPCmVMq.jpg",
          "https://maps.pasargedesolo.com/storage/locations/ZY7MrIAuEdjhwVkXIVyd2Rp8H1VcAvGEB9Q8I25r.jpg"
        ],
        "entries": [
          {
            "x": 456,
            "y": 543
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec46f6-66a5-492c-ab89-96664cc55389",
        "nodeId": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Es Dawet Telasih Mbak Genduk",
        "name": "Es Dawet Telasih Mbak Genduk",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 558,
        "y": 352,
        "lat": 672,
        "lng": 558,
        "description": "Es Dawet Telasih Mbak Genduk merupakan salah satu los yang ada di Pasar Gedhe yang menjual spesialis es dawet",
        "image": "https://maps.pasargedesolo.com/storage/stores/w3V7vbVAIf4V8glDB6KvQCKx0EmkWA5g.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/w3V7vbVAIf4V8glDB6KvQCKx0EmkWA5g_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/w3V7vbVAIf4V8glDB6KvQCKx0EmkWA5g.jpg"
        ],
        "entries": [
          {
            "x": 559,
            "y": 367
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
        "nodeId": "n_9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Hosana Sayur",
        "name": "Hosana Sayur",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 391,
        "y": 514,
        "lat": 510,
        "lng": 391,
        "description": "Hosana Sayur adalah salah satu kios sayur yang ada di Pasar Gedhe yang menjual spesialis sayur-sayuran yang lengkap dan juga sebagai supplier sayur-sayuran",
        "image": "https://maps.pasargedesolo.com/storage/stores/NWL0RmbJpECy8t0PDfmshPI9lnaqAALl.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/NWL0RmbJpECy8t0PDfmshPI9lnaqAALl_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/NWL0RmbJpECy8t0PDfmshPI9lnaqAALl.jpg",
          "https://maps.pasargedesolo.com/storage/locations/jQKdAiKvgu6BheQ6cmiEp5iR1nR0i7lnP0p88idM.jpg"
        ],
        "entries": [
          {
            "x": 393,
            "y": 526
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4893-7b57-4b3b-94a9-aff2e3db119d",
        "nodeId": "n_9eec4893-7b57-4b3b-94a9-aff2e3db119d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Ngatmi 2",
        "name": "Kios Bu Ngatmi 2",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 619,
        "y": 330,
        "lat": 694,
        "lng": 619,
        "description": "Kios Bu Ngatmi 2 merupakan cabang kedua yang menyediakan spesialis spesialis kerupuk rambak dengan berbagai macam pilihan rasa",
        "image": "https://maps.pasargedesolo.com/storage/stores/oOhzqNFSYNAehtklD609M5CF4Z17CUOT.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/oOhzqNFSYNAehtklD609M5CF4Z17CUOT_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/oOhzqNFSYNAehtklD609M5CF4Z17CUOT.jpg",
          "https://maps.pasargedesolo.com/storage/locations/MFOlOomSB7bzhCwNvOHuraRj5C2ktGCXhMVHkEOS.jpg"
        ],
        "entries": [
          {
            "x": 617,
            "y": 323
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4e07-119a-48b4-a2f3-bb38a8f8d1ec",
        "nodeId": "n_9eec4e07-119a-48b4-a2f3-bb38a8f8d1ec",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Mbak Ning Karak Tipis",
        "name": "Mbak Ning Karak Tipis",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 730,
        "y": 840,
        "lat": 184,
        "lng": 730,
        "description": "Mbak Ning Karak Tipis merupakan salah satu oprokan yang menjual spesialis karak yang biasanya untuk oleh-oleh khas Solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/eqrW3mUNi1yEQ6aLHH8NalIXe9GKqaqx.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/eqrW3mUNi1yEQ6aLHH8NalIXe9GKqaqx_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/eqrW3mUNi1yEQ6aLHH8NalIXe9GKqaqx.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/ssXvJ3vAik2Cv2JeZaW5TweYbi4Z8LtuQ5gTrlx7.jpg"
        ],
        "entries": [
          {
            "x": 723,
            "y": 838
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4b71-c9d3-475b-9671-6f68298ff2b1",
        "nodeId": "n_9eec4b71-c9d3-475b-9671-6f68298ff2b1",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Wiwin 2 ",
        "name": "Kios Bu Wiwin 2 ",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 678,
        "y": 446,
        "lat": 578,
        "lng": 678,
        "description": "Kios Bu Wiwin merupakan kios yang ada di Pasar Gedhe dan memiliki 2 kios yang berhadapan yang menyediakan spesialis nangka, pisang, mete, sambal pecel mete, dan sembako",
        "image": "https://maps.pasargedesolo.com/storage/stores/MqRGA1sTu0OQ1lfS0RMA5agA9ZUheEBx.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/MqRGA1sTu0OQ1lfS0RMA5agA9ZUheEBx_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/MqRGA1sTu0OQ1lfS0RMA5agA9ZUheEBx.jpg",
          "https://maps.pasargedesolo.com/storage/locations/jRlGwW378wqopkk5WYJLJGA2Fy7QUBkkfA7RoAQu.jpg"
        ],
        "entries": [
          {
            "x": 673,
            "y": 439
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4ae5-1a94-4d4f-84a9-b4de919d50c7",
        "nodeId": "n_9eec4ae5-1a94-4d4f-84a9-b4de919d50c7",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Mariyani",
        "name": "Kios Bu Mariyani",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 486,
        "y": 514,
        "lat": 510,
        "lng": 486,
        "description": "Kios Bu Mariyani adalah salah satu kios yang ada di Pasar Gedhe yang spesialis menjual beraneka ikan asin",
        "image": "https://maps.pasargedesolo.com/storage/stores/0aMWQbPugovS4apCh1al5KB2Cw0lBw2s.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/0aMWQbPugovS4apCh1al5KB2Cw0lBw2s_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/0aMWQbPugovS4apCh1al5KB2Cw0lBw2s.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Co3Cogv0mRyfOVm8fmldtK43e6Tw9UrxLmtUhXnZ.jpg"
        ],
        "entries": [
          {
            "x": 486,
            "y": 527
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4c68-a9d5-4e12-b9d0-107dcd456160",
        "nodeId": "n_9eec4c68-a9d5-4e12-b9d0-107dcd456160",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Mbak Unyil",
        "name": "Kios Mbak Unyil",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 590,
        "y": 810,
        "lat": 214,
        "lng": 590,
        "description": "Kios Mbak Unyil merupakan salah satu kios yang ada di Pasar Gedhe yang menjual beragam cemilan dan oleh-oleh khas Solo seperti racikan teh, intip, dan rambak",
        "image": "https://maps.pasargedesolo.com/storage/stores/lynhWLNNCzZVprsirNQqnfehZsK63i4y.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/lynhWLNNCzZVprsirNQqnfehZsK63i4y_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/lynhWLNNCzZVprsirNQqnfehZsK63i4y.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Gqq8RyrtHkiuSapvTGwuJ8Mmu72wfNddrpa1XnX2.jpg"
        ],
        "entries": [
          {
            "x": 583,
            "y": 823
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4a72-e65e-41e7-89bc-45680119eedd",
        "nodeId": "n_9eec4a72-e65e-41e7-89bc-45680119eedd",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Sambel Pecel Bu Warsini",
        "name": "Kios Sambel Pecel Bu Warsini",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 473,
        "y": 513,
        "lat": 511,
        "lng": 473,
        "description": "Kios Sambel Pecel Bu Warsini adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis sambal pecel",
        "image": "https://maps.pasargedesolo.com/storage/stores/KQZw0rNauulf3TkgDeR1ycVKsp2WTRpW.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/KQZw0rNauulf3TkgDeR1ycVKsp2WTRpW_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/KQZw0rNauulf3TkgDeR1ycVKsp2WTRpW.jpg",
          "https://maps.pasargedesolo.com/storage/locations/tEufUc6rp9JYD22SlKHky9gw15Aj1MvujUb6SzT1.jpg"
        ],
        "entries": [
          {
            "x": 474,
            "y": 526
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
        "nodeId": "n_9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "PS Mas Abon",
        "name": "PS Mas Abon",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 466,
        "y": 496,
        "lat": 528,
        "lng": 466,
        "description": "PS Mas Abon adalah produk khas Solo yang berada di Pasar Gedhe yang menjual spesialis abon dan oleh-oleh khas solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/V5yzZDJ9OQXeu1nRF5f4KVcIKDaPJ6oF.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/V5yzZDJ9OQXeu1nRF5f4KVcIKDaPJ6oF_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/V5yzZDJ9OQXeu1nRF5f4KVcIKDaPJ6oF.jpg",
          "https://maps.pasargedesolo.com/storage/locations/QOp233PFwnzsJKtEOMSplVy250FbcfzkkNBKTFin.jpg"
        ],
        "entries": [
          {
            "x": 463,
            "y": 488
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4d02-5bbf-4672-babc-21ef1635d0a4",
        "nodeId": "n_9eec4d02-5bbf-4672-babc-21ef1635d0a4",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Dawet Telasih Bu Dermi",
        "name": "Dawet Telasih Bu Dermi",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 543,
        "y": 783,
        "lat": 241,
        "lng": 543,
        "description": "Es Dawet Telasih Bu Dermi adalah minuman legendaris khas Solo yang telah hadir sejak tahun 1930 di Pasar Gedhe. Dengan perpaduan cendol hijau kenyal, santan gurih, gula merah cair aromatik, biji telasih segar, ketan hitam, dan jenang sumsum, minuman ini menawarkan cita rasa autentik yang menyegarkan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/9rOAOPqWurjbESoCgsQpRgn6yGsUksMS.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/9rOAOPqWurjbESoCgsQpRgn6yGsUksMS_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/9rOAOPqWurjbESoCgsQpRgn6yGsUksMS.jpg",
          "https://maps.pasargedesolo.com/storage/locations/DMyuqg9XnM75aLIZYBTM8yZcoRHqFsfJQeZRZXL6.jpg"
        ],
        "entries": [
          {
            "x": 544,
            "y": 768
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": true
      },
      {
        "id": "9eec4f1d-d004-4a4d-95a4-901ace72ec5b",
        "nodeId": "n_9eec4f1d-d004-4a4d-95a4-901ace72ec5b",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Tini",
        "name": "Kios Bu Tini",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 455,
        "y": 465,
        "lat": 559,
        "lng": 455,
        "description": "Kios Bu Tini adalah salah satu kios yang ada di Pasar Gedhe yang menjual aneka bawang dan aneka kacang serta bumbu masak dapur lainnya",
        "image": "https://maps.pasargedesolo.com/storage/stores/aNjhWury9FmrAKKLJ6ZGd6CvQ3hiLsF2.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/aNjhWury9FmrAKKLJ6ZGd6CvQ3hiLsF2_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/aNjhWury9FmrAKKLJ6ZGd6CvQ3hiLsF2.jpg",
          "https://maps.pasargedesolo.com/storage/locations/xnkaB4dux0s7UBiT856TAaHQsKRNisVi2Vy6nkVB.jpg"
        ],
        "entries": [
          {
            "x": 450,
            "y": 477
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec517e-55bd-4c97-9504-ed63c5e8efbf",
        "nodeId": "n_9eec517e-55bd-4c97-9504-ed63c5e8efbf",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Es Dawet Bu Siti",
        "name": "Es Dawet Bu Siti",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 489,
        "y": 444,
        "lat": 580,
        "lng": 489,
        "description": "Dawet Bu Siti adalah warung legendaris di Pasar Gedhe Solo yang menyajikan berbagai varian dawet khas, seperti dawet telasih, dawet durian, dan dawet gempol pleret. Setiap porsi disajikan dengan cendol kenyal, ketan hitam, tape ketan, jenang sumsum, nangka, dan gula merah cair, memberikan sensasi rasa manis dan gurih yang khas.",
        "image": "https://maps.pasargedesolo.com/storage/stores/NviLF6kZCAF2MyW7fq5wh3PEEcmVkYyC.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/NviLF6kZCAF2MyW7fq5wh3PEEcmVkYyC_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/NviLF6kZCAF2MyW7fq5wh3PEEcmVkYyC.jpg",
          "https://maps.pasargedesolo.com/storage/locations/mCni7xyzLwq201i0aOsRU2cO19ytWjNYX0uVlrHi.jpg"
        ],
        "entries": [
          {
            "x": 493,
            "y": 448
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec53f2-48e7-47e5-abf0-6bfc5402aa18",
        "nodeId": "n_9eec53f2-48e7-47e5-abf0-6bfc5402aa18",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Soto Pasar Gede Bu Harini",
        "name": "Soto Pasar Gedhe Bu Harini",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 738,
        "y": 762,
        "lat": 262,
        "lng": 738,
        "description": "Soto Pasar Gedhe Bu Harini adalah tempat makan yang menjual makanan khas Indonesia terutama soto kuah bening",
        "image": "https://maps.pasargedesolo.com/storage/stores/ETWjmqqxQOcGMLtBSNieX6z5CzksynOD.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ETWjmqqxQOcGMLtBSNieX6z5CzksynOD_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ETWjmqqxQOcGMLtBSNieX6z5CzksynOD.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/gt2xeUkV5m5saxrDMEbewTd8E8ySVuJt4KYLKQaJ.jpg"
        ],
        "entries": [
          {
            "x": 722,
            "y": 764
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5761-f0f4-46f2-9433-d90566302aba",
        "nodeId": "n_9eec5761-f0f4-46f2-9433-d90566302aba",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Omah Buah",
        "name": "Kios Omah Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 631,
        "y": 268,
        "lat": 756,
        "lng": 631,
        "description": "Kios Omah Buah merupakan kios yang ada di Pasar Gedhe yang menyediakan grosir dan ecer buah lokal dan import yang segar setiap hari dengan kualitas yang terjamin seperti buah anggur hijau atau ungu, apel, pear, dan jeruk",
        "image": "https://maps.pasargedesolo.com/storage/stores/sfujpYI3hWrYEhjqL9EAmNfhO4MqLepF.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/sfujpYI3hWrYEhjqL9EAmNfhO4MqLepF_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/sfujpYI3hWrYEhjqL9EAmNfhO4MqLepF.jpg"
        ],
        "entries": [
          {
            "x": 630,
            "y": 261
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec59d3-a3d3-4476-a1a9-fae4a0306afc",
        "nodeId": "n_9eec59d3-a3d3-4476-a1a9-fae4a0306afc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Mas Pion",
        "name": "Kios Mas Pion",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 289,
        "y": 579,
        "lat": 445,
        "lng": 289,
        "description": "Kios Mas Pion adalah salah satu kios di Pasar Gedhe yang menjual khusus kebutuhan bahan makanan sayur-sayuran dan bumbu dapur",
        "image": "https://maps.pasargedesolo.com/storage/stores/H5Mf1XqZtYwldQk96tuKSkhPN29IE3Yx.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/H5Mf1XqZtYwldQk96tuKSkhPN29IE3Yx_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/H5Mf1XqZtYwldQk96tuKSkhPN29IE3Yx.jpg",
          "https://maps.pasargedesolo.com/storage/locations/3it0gj957FO68D27S9BYqaQmg9KPKLlvbMgfkKMP.jpg"
        ],
        "entries": [
          {
            "x": 305,
            "y": 583
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5329-91fe-4f02-971c-c58d1eea5dee",
        "nodeId": "n_9eec5329-91fe-4f02-971c-c58d1eea5dee",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Endang Cholil",
        "name": "Kios Endang Cholil",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 405,
        "y": 397,
        "lat": 627,
        "lng": 405,
        "description": "Kios Endang Cholil adalah salah satu kios pasar gedhe yang menjual aneka buah grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/fq0V2rWQelLSwN7p1XhzVQxLGDwRaRzJ.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/fq0V2rWQelLSwN7p1XhzVQxLGDwRaRzJ_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/fq0V2rWQelLSwN7p1XhzVQxLGDwRaRzJ.jpg",
          "https://maps.pasargedesolo.com/storage/locations/eM8D5EuTtl7gnKm6xJdJXQP8XDmwOLMczSqgdSPm.jpg"
        ],
        "entries": [
          {
            "x": 402,
            "y": 378
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec50de-c2a7-4253-9913-7ee1a0da72df",
        "nodeId": "n_9eec50de-c2a7-4253-9913-7ee1a0da72df",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Sembako Widayanti",
        "name": "Kios Sembako Widayanti",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 489,
        "y": 464,
        "lat": 560,
        "lng": 489,
        "description": "Kios Sembako Widayanti adalah salah satu kios yang berada di Pasar Gedhe yang menjual rambak kering dan aneka kacang-kacangan serta sembako lainnya",
        "image": "https://maps.pasargedesolo.com/storage/stores/NSGHSf0feOtAqdnkjzFBfW0AJtXec0zM.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/NSGHSf0feOtAqdnkjzFBfW0AJtXec0zM_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/NSGHSf0feOtAqdnkjzFBfW0AJtXec0zM.jpg",
          "https://maps.pasargedesolo.com/storage/locations/ejW1pNPKvkt1QNf02umWECgiOh1CsnIXwxpSjM9x.jpg"
        ],
        "entries": [
          {
            "x": 491,
            "y": 476
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec54ac-dd6e-4d6b-bb45-275cbd235f0c",
        "nodeId": "n_9eec54ac-dd6e-4d6b-bb45-275cbd235f0c",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Warni",
        "name": "Kios Bu Warni",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 549,
        "y": 617,
        "lat": 407,
        "lng": 549,
        "description": "Kios Bu Warni merupakan kios yang ada di Pasar Gedhe yang menyediakan beragam cemilan khas Solo dan ikan asin",
        "image": "https://maps.pasargedesolo.com/storage/stores/rEinDT41Rw3rrlJLfWEWC412N1UX1WVc.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/rEinDT41Rw3rrlJLfWEWC412N1UX1WVc_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/rEinDT41Rw3rrlJLfWEWC412N1UX1WVc.jpg",
          "https://maps.pasargedesolo.com/storage/locations/X5nCnLH5LcGV7yUtEHfXxTs3qCPwuxjf44hkjBQG.jpg"
        ],
        "entries": [
          {
            "x": 555,
            "y": 599
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5f01-f30a-431d-98c4-38824e518cad",
        "nodeId": "n_9eec5f01-f30a-431d-98c4-38824e518cad",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Mbak Priyanti Bandeng Pasar Gedhe",
        "name": "Mbak Priyanti Bandeng Pasar Gedhe",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 418,
        "y": 233,
        "lat": 791,
        "lng": 418,
        "description": "Mbak Priyanti Bandeng Pasar Gedhe adalah salah satu kios oprokan yang ada di Pasar Gedhe Pintu Utama yang menjual khusus ikan bandeng",
        "image": "https://maps.pasargedesolo.com/storage/stores/gkOrj0Fn6tdYOecP0GjarOkkeOcntXNJ.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/gkOrj0Fn6tdYOecP0GjarOkkeOcntXNJ_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/gkOrj0Fn6tdYOecP0GjarOkkeOcntXNJ.jpg",
          "https://maps.pasargedesolo.com/storage/locations/zeDz5Qd36Hcp7twTM6tCFsXwbDMviPUkOQkF2aw2.jpg"
        ],
        "entries": [
          {
            "x": 422,
            "y": 247
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec60a0-10e3-480c-89e8-87d033c0f0db",
        "nodeId": "n_9eec60a0-10e3-480c-89e8-87d033c0f0db",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Gimin Buah",
        "name": "Kios Gimin Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 476,
        "y": 269,
        "lat": 755,
        "lng": 476,
        "description": "Kios Gimin Buah merupakan kios yang ada di Pasar Gedhe yang menyediakan buah-buahan grosir import dan lokal",
        "image": "https://maps.pasargedesolo.com/storage/stores/EnCE8AnpIbfNNAyFjkmrEtUcYf58hR0u.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/EnCE8AnpIbfNNAyFjkmrEtUcYf58hR0u_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/EnCE8AnpIbfNNAyFjkmrEtUcYf58hR0u.jpg",
          "https://maps.pasargedesolo.com/storage/locations/nJP4z1fthfbhsvN3VZ6tMXTb4dFcgR8nMwQ5qCoQ.jpg"
        ],
        "entries": [
          {
            "x": 475,
            "y": 261
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec601a-0d16-4132-b633-b75ab72930ea",
        "nodeId": "n_9eec601a-0d16-4132-b633-b75ab72930ea",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Buah Suwarpo",
        "name": "Kios Buah Suwarpo",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 459,
        "y": 224,
        "lat": 800,
        "lng": 459,
        "description": "Kios Buah Suwarpo merupakan kios yang ada di Pasar Gedhe yang menyediakan berbagai macam buah yang diecerkan",
        "image": "https://maps.pasargedesolo.com/storage/stores/gY6qLwtlGttOeMDCFF1F64SY1ZWJhEDg.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/gY6qLwtlGttOeMDCFF1F64SY1ZWJhEDg_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/gY6qLwtlGttOeMDCFF1F64SY1ZWJhEDg.jpg",
          "https://maps.pasargedesolo.com/storage/locations/X7vLGsOLH7dQ4iSJd0PDO7DJlIemJrXbZPaTfEja.jpg"
        ],
        "entries": [
          {
            "x": 451,
            "y": 235
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5af7-3539-4e2f-8a28-8c521ccea31e",
        "nodeId": "n_9eec5af7-3539-4e2f-8a28-8c521ccea31e",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Paerah",
        "name": "Kios Paerah",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 290,
        "y": 420,
        "lat": 604,
        "lng": 290,
        "description": "Kios Paerah adalah salah satu yang ada di Pasar Gedhe yang menjual spesialis aneka rambak dan peyek",
        "image": "https://maps.pasargedesolo.com/storage/stores/s0bHoTKoBPcNjOnRAOh2ecjVrpIiu9GT.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/s0bHoTKoBPcNjOnRAOh2ecjVrpIiu9GT_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/s0bHoTKoBPcNjOnRAOh2ecjVrpIiu9GT.jpg",
          "https://maps.pasargedesolo.com/storage/locations/5vgg0em9woNkHZgy1197dd1F68vtsuQB933Lo0Eq.jpg"
        ],
        "entries": [
          {
            "x": 306,
            "y": 425
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5df9-50c7-409c-99bb-b15d83062c31",
        "nodeId": "n_9eec5df9-50c7-409c-99bb-b15d83062c31",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oleh-oleh Mbak Parti",
        "name": "Oleh-oleh Mbak Parti",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 361,
        "y": 345,
        "lat": 679,
        "lng": 361,
        "description": "Oleh-oleh Mbak Parti adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis beragam produk cemilan tradisional",
        "image": "https://maps.pasargedesolo.com/storage/stores/wAsCPOOL7Gl7xwwb5GYxIf80t9TJ8jxy.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/wAsCPOOL7Gl7xwwb5GYxIf80t9TJ8jxy_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/wAsCPOOL7Gl7xwwb5GYxIf80t9TJ8jxy.jpg",
          "https://maps.pasargedesolo.com/storage/locations/FqhgUgeJKXA27Wn7TmFwAD5r1W6nVxEbj7Z0gGxi.jpg",
          "https://maps.pasargedesolo.com/storage/locations/tcYBPCjUHKjX3SyqjB2wUwAUGnbEfQqCx21zT3RR.jpg"
        ],
        "entries": [
          {
            "x": 363,
            "y": 322
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5d35-9aca-4ec5-ae9e-6ae0b41445a9",
        "nodeId": "n_9eec5d35-9aca-4ec5-ae9e-6ae0b41445a9",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Es Dawet Durian Bu Wiji",
        "name": "Es Dawet Durian Bu Wiji",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 492,
        "y": 355,
        "lat": 669,
        "lng": 492,
        "description": "Es Dawet Durian Bu Wiji adalah salah satu minuman khas tradisional Solo. Minuman ini memadukan cendol hijau kenyal, santan segar, gula merah cair, dan potongan durian yang lembut, menciptakan rasa manis dan gurih yang khas",
        "image": "https://maps.pasargedesolo.com/storage/stores/Tgyokr0hJQEchsjxmAcxIoaFPn49L0eb.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Tgyokr0hJQEchsjxmAcxIoaFPn49L0eb_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Tgyokr0hJQEchsjxmAcxIoaFPn49L0eb.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Tr21rPVU6AaK2JiU7ov6e7wA6lMuHjwNOwaZbD4Q.jpg"
        ],
        "entries": [
          {
            "x": 501,
            "y": 353
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6219-4f66-4210-a1a3-709281f688d5",
        "nodeId": "n_9eec6219-4f66-4210-a1a3-709281f688d5",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Es Dawet dan Gempol Pleret Bu Hj.Sipon 1",
        "name": "Es Dawet dan Gempol Pleret Bu Hj.Sipon 1",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 500,
        "y": 225,
        "lat": 799,
        "lng": 500,
        "description": "Dawet Bu Haji Sipon adalah minuman tradisional legendaris di Pasar Gedhe Solo, terkenal dengan cendol segar, santan, dan gula merah khasnya.",
        "image": "https://maps.pasargedesolo.com/storage/stores/Sbl0Kpc5LfJxEFgb5UGQkksqgEMIIo7M.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Sbl0Kpc5LfJxEFgb5UGQkksqgEMIIo7M_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Sbl0Kpc5LfJxEFgb5UGQkksqgEMIIo7M.jpg",
          "https://maps.pasargedesolo.com/storage/locations/bqM0G4Gjrhn5tONRyczYfciPyqxyk5CtF2uioBRC.jpg"
        ],
        "entries": [
          {
            "x": 504,
            "y": 236
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec618c-7c8b-4223-bd90-017066855a3a",
        "nodeId": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Ngatmi 1",
        "name": "Kios Bu Ngatmi 1",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 502,
        "y": 271,
        "lat": 753,
        "lng": 502,
        "description": "Kios Bu Ngatmi 1 merupakan salah satu kios yang ada di Pasar Gedhe yang menyediakan spesialis beragam cemilan dan oleh-oleh khas Solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/4Mfhjz42sKpn3j38Vv9jawu7HYccH2lB.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/4Mfhjz42sKpn3j38Vv9jawu7HYccH2lB_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/4Mfhjz42sKpn3j38Vv9jawu7HYccH2lB.jpg",
          "https://maps.pasargedesolo.com/storage/locations/nUVbxvGr8XPSzYjJpTg89yXBzCtwGaX4T23zD9hN.jpg"
        ],
        "entries": [
          {
            "x": 501,
            "y": 263
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec641e-b474-49c6-9b1b-287287af6fcc",
        "nodeId": "n_9eec641e-b474-49c6-9b1b-287287af6fcc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Endang Snack",
        "name": "Endang Snack",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 333,
        "y": 444,
        "lat": 580,
        "lng": 333,
        "description": "Endang Snack adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis aneka jajan pasar tradisional",
        "image": "https://maps.pasargedesolo.com/storage/stores/EJFTcG6umY3jWt4VkTS1L1kCB9J32XFw.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/EJFTcG6umY3jWt4VkTS1L1kCB9J32XFw_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/EJFTcG6umY3jWt4VkTS1L1kCB9J32XFw.jpg",
          "https://maps.pasargedesolo.com/storage/locations/VhiIbokBvdPYcCwUZqpA9skyy4KpmGEuNJJ6JkS8.jpg"
        ],
        "entries": [
          {
            "x": 333,
            "y": 439
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec62fb-8144-47d6-8b90-867b515c7a31",
        "nodeId": "n_9eec62fb-8144-47d6-8b90-867b515c7a31",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Bidin Los Buah Pasar Gede",
        "name": "Bidin Los Buah Pasar Gedhe",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 337,
        "y": 343,
        "lat": 681,
        "lng": 337,
        "description": "Bidin Los Buah Pasar Gedhe adalah pedagang buah yang berada di area Pasar Gedhe sisi timur yang terkenal produk buah-buahan import dan lokal yang segar serta menerima pesanan buah dalam jumlah yang besar",
        "image": "https://maps.pasargedesolo.com/storage/stores/N57eNbWDGw55R1JWyPPN4y0uO1Bkcf8I.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/N57eNbWDGw55R1JWyPPN4y0uO1Bkcf8I_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/N57eNbWDGw55R1JWyPPN4y0uO1Bkcf8I.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Pn4IWIPoPghFtZIaI75STxUfRNBXPF0Y5Mo6aSzA.jpg"
        ],
        "entries": [
          {
            "x": 338,
            "y": 320
          },
          {
            "x": 338,
            "y": 320
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6369-3772-4583-ab71-fb4c439fa258",
        "nodeId": "n_9eec6369-3772-4583-ab71-fb4c439fa258",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Dewi Astuti",
        "name": "Kios Dewi Astuti",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 333,
        "y": 392,
        "lat": 632,
        "lng": 333,
        "description": "Kios Dewi Astuti adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis buah-buahan dan menerima pesanan parsel buah",
        "image": "https://maps.pasargedesolo.com/storage/stores/7g5ROvbwSd2K8Zm1MrG74GORnuPJqqY0.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7g5ROvbwSd2K8Zm1MrG74GORnuPJqqY0_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7g5ROvbwSd2K8Zm1MrG74GORnuPJqqY0.jpg",
          "https://maps.pasargedesolo.com/storage/locations/KWpkMFc0Xz6mkPikvYTQwALtzMf66sDmrAFP8flt.jpg"
        ],
        "entries": [
          {
            "x": 338,
            "y": 384
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6146-0218-40fc-bd3c-bbaab1a09adc",
        "nodeId": "n_9eec6146-0218-40fc-bd3c-bbaab1a09adc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Pintu Utama",
        "name": "Pintu Utama",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 251,
        "y": 236,
        "lat": 788,
        "lng": 251,
        "description": "Pintu masuk dan keluar tepat di seberang jam Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/t84C99Rti4tCZI6WodA9KD4ht2N8U8qX.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/t84C99Rti4tCZI6WodA9KD4ht2N8U8qX_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/t84C99Rti4tCZI6WodA9KD4ht2N8U8qX.jpg"
        ],
        "entries": [
          {
            "x": 248,
            "y": 237
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
        "nodeId": "n_9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Desi",
        "name": "Kios Bu Desi",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 332,
        "y": 465,
        "lat": 559,
        "lng": 332,
        "description": "Kios Bu Desi adalah salah satu kios yang ada di Pasar Gedhe yang menjual sayuran",
        "image": "https://maps.pasargedesolo.com/storage/stores/D74NL97aeYWh2EqZTYnlM1buKplLCo0S.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/D74NL97aeYWh2EqZTYnlM1buKplLCo0S_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/D74NL97aeYWh2EqZTYnlM1buKplLCo0S.jpg",
          "https://maps.pasargedesolo.com/storage/locations/MMAXChixGXDyKqsJQK5Ny9i3BsPqN80kXNcNvkjI.jpg"
        ],
        "entries": [
          {
            "x": 338,
            "y": 468
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6913-95cb-4ac1-b414-ad5723ddc6fc",
        "nodeId": "n_9eec6913-95cb-4ac1-b414-ad5723ddc6fc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Pintu Samping ",
        "name": "Pintu Samping ",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 525,
        "y": 907,
        "lat": 117,
        "lng": 525,
        "description": "Pintu masuk dan keluar di seberang BCA Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/jBJvvYnNlPfTJPUGXyjaC1e85lNKndEo.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/jBJvvYnNlPfTJPUGXyjaC1e85lNKndEo_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/jBJvvYnNlPfTJPUGXyjaC1e85lNKndEo.jpg"
        ],
        "entries": [
          {
            "x": 524,
            "y": 907
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9eec6d25-228f-4a7e-9abd-d65daf71d0ae",
        "nodeId": "n_9eec6d25-228f-4a7e-9abd-d65daf71d0ae",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Pintu Belakang",
        "name": "Pintu Belakang",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 778,
        "y": 226,
        "lat": 798,
        "lng": 778,
        "description": "Pintu masuk dan keluar belakang Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/EkqIRHfdeVoMdThmEu3YkXq474gepw55.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/EkqIRHfdeVoMdThmEu3YkXq474gepw55_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/EkqIRHfdeVoMdThmEu3YkXq474gepw55.jpg"
        ],
        "entries": [
          {
            "x": 775,
            "y": 228
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
        "nodeId": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Sri",
        "name": "Oprokan Ibu Sri",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 530,
        "y": 202,
        "lat": 822,
        "lng": 530,
        "description": "Oprokan Ibu Sri merupakan oprokan yang ada di Pasar Gedhe yang menyediakan spesialis minuman rempah dan teh racikan",
        "image": "https://maps.pasargedesolo.com/storage/stores/k9fxAoIh7og256VJacmhHnvUwF1z2DWx.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/k9fxAoIh7og256VJacmhHnvUwF1z2DWx_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/k9fxAoIh7og256VJacmhHnvUwF1z2DWx.jpg",
          "https://maps.pasargedesolo.com/storage/locations/vWQeSXFac1fRWJfun3QTnXfaClVeIJCig9eA1YRn.jpg"
        ],
        "entries": [
          {
            "x": 537,
            "y": 204
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8049-a160-4ffb-b256-9366684a3f13",
        "nodeId": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Sugiyem",
        "name": "Oprokan Ibu Sugiyem",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 530,
        "y": 211,
        "lat": 813,
        "lng": 530,
        "description": "Oprokan Ibu Sugiyem adalah salah satu oprokan yang ada di Pasar Gedhe yang menjual spesialis kerupuk",
        "image": "https://maps.pasargedesolo.com/storage/stores/GaCawft6vmP1bSRuzKhDztz2UA6wfUKy.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/GaCawft6vmP1bSRuzKhDztz2UA6wfUKy_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/GaCawft6vmP1bSRuzKhDztz2UA6wfUKy.jpg",
          "https://maps.pasargedesolo.com/storage/locations/QhVXCsaG4qDBmKFlDTmkdyfkyvYitnyXsFtzvtB1.jpg"
        ],
        "entries": [
          {
            "x": 536,
            "y": 219
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8289-bc6d-4603-a47d-dce86917cb47",
        "nodeId": "n_9eec8289-bc6d-4603-a47d-dce86917cb47",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Lastri",
        "name": "Oprokan Ibu Lastri",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 531,
        "y": 234,
        "lat": 790,
        "lng": 531,
        "description": "Oprokan Ibu Lastri merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis karak atau kerupuk beras",
        "image": "https://maps.pasargedesolo.com/storage/stores/AgupV17Z42YYo4pvIrVew57Zv6RHmXM0.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/AgupV17Z42YYo4pvIrVew57Zv6RHmXM0_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/AgupV17Z42YYo4pvIrVew57Zv6RHmXM0.jpg"
        ],
        "entries": [
          {
            "x": 535,
            "y": 236
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
        "nodeId": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bu Nanik",
        "name": "Oprokan Bu Nanik",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 530,
        "y": 273,
        "lat": 751,
        "lng": 530,
        "description": "Oprokan Bu Nanik merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis aneka masakan jawa seperti pecel ndeso, brambang asem, dan cabuk rambak",
        "image": "https://maps.pasargedesolo.com/storage/stores/mwIQc6t84iyotfLWAUkKZEajB5DQqGk5.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/mwIQc6t84iyotfLWAUkKZEajB5DQqGk5_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/mwIQc6t84iyotfLWAUkKZEajB5DQqGk5.jpg"
        ],
        "entries": [
          {
            "x": 536,
            "y": 274
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8811-1439-403f-ad41-29abd386c867",
        "nodeId": "n_9eec8811-1439-403f-ad41-29abd386c867",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Sambel Pecel Sedep Bu Kareni",
        "name": "Sambel Pecel Sedep Bu Kareni",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 530,
        "y": 256,
        "lat": 768,
        "lng": 530,
        "description": "Sambel Pecel Sedep Bu Kareni adalah bumbu pecel legendaris yang dapat ditemukan di Pasar Gedhe Solo, tepatnya di kios depan Dawet Telasih Bu Sipon. Dikenal dengan cita rasa khas dan pedas yang menggugah selera, sambel pecel ini tersedia dalam beberapa varian, seperti Sambel Pecel Kota (coklat), Sambel Pecel Ndeso (hitam), dan Sambel Cabuk Rambak. Dengan ketahanan hingga satu bulan, produk ini cocok sebagai oleh-oleh khas Solo bagi pecinta kuliner pedas.",
        "image": "https://maps.pasargedesolo.com/storage/stores/UbQUumezVzysngZuQKhO37sTryajFBoz.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/UbQUumezVzysngZuQKhO37sTryajFBoz_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/UbQUumezVzysngZuQKhO37sTryajFBoz.jpg",
          "https://maps.pasargedesolo.com/storage/locations/SQDMZkyZJ1Bgl3MtbM8mvIcmhLZX5MlHGVcfy07G.jpg"
        ],
        "entries": [
          {
            "x": 535,
            "y": 256
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0824fa-0478-4422-9533-e57738855be2",
        "nodeId": "n_9f0824fa-0478-4422-9533-e57738855be2",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Karak Solo Kevani 2",
        "name": "Karak Solo Kevani 2",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 644,
        "y": 285,
        "lat": 739,
        "lng": 644,
        "description": "Karak Solo Kevani 2 merupakan kios kedua yang menjual spesialis kerupuk mentah dan teh racikan",
        "image": "https://maps.pasargedesolo.com/storage/stores/hVI63VyoWVFFZHZydhiHVseH6uHxrtEJ.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/hVI63VyoWVFFZHZydhiHVseH6uHxrtEJ_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/hVI63VyoWVFFZHZydhiHVseH6uHxrtEJ.jpg"
        ],
        "entries": [
          {
            "x": 637,
            "y": 303
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
        "nodeId": "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bapak Sarmo 1",
        "name": "Oprokan Bapak Sarmo 1",
        "category": "tekstil",
        "categoryLabel": "Pakaian & Tekstil",
        "icon": "👕",
        "color": "#16A085",
        "x": 301,
        "y": 218,
        "lat": 806,
        "lng": 301,
        "description": "Oprokan Bp Sarmo 1 adalah salah satu kios oprokan yang ada di Pasar Gedhe Pintu Utama yang menjual khusus sendal karet",
        "image": "https://maps.pasargedesolo.com/storage/stores/GIsmqYrfSG8zavvzDrPgIvKxem3Pj5Db.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/GIsmqYrfSG8zavvzDrPgIvKxem3Pj5Db_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/GIsmqYrfSG8zavvzDrPgIvKxem3Pj5Db.jpg"
        ],
        "entries": [
          {
            "x": 300,
            "y": 234
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9",
        "nodeId": "n_9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toilet Pasar Gede 2",
        "name": "Toilet Pasar Gedhe 2",
        "category": "toilet",
        "categoryLabel": "Toilet & Fasilitas",
        "icon": "🚻",
        "color": "#009688",
        "x": 293,
        "y": 202,
        "lat": 822,
        "lng": 293,
        "description": "Fasilitas toilet yang berada di Pasar Gedhe",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 293,
            "y": 202
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef1fce8-7b05-4c21-a8af-2f9c82b48bf2",
        "nodeId": "n_9ef1fce8-7b05-4c21-a8af-2f9c82b48bf2",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toilet Pasar Gede 3",
        "name": "Toilet Pasar Gedhe 3",
        "category": "toilet",
        "categoryLabel": "Toilet & Fasilitas",
        "icon": "🚻",
        "color": "#009688",
        "x": 744,
        "y": 180,
        "lat": 844,
        "lng": 744,
        "description": "Fasilitas toilet yang berada di Pasar Gedhe",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 738,
            "y": 192
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef1fd45-298d-4a38-a597-4e68ce0cbfbf",
        "nodeId": "n_9ef1fd45-298d-4a38-a597-4e68ce0cbfbf",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toilet Pasar Gede 4",
        "name": "Toilet Pasar Gedhe 4",
        "category": "toilet",
        "categoryLabel": "Toilet & Fasilitas",
        "icon": "🚻",
        "color": "#009688",
        "x": 739,
        "y": 265,
        "lat": 759,
        "lng": 739,
        "description": "Fasilitas toilet yang berada di Pasar Gedhe",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 739,
            "y": 265
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef1f9c2-66ee-4880-9c25-906d6018af72",
        "nodeId": "n_9ef1f9c2-66ee-4880-9c25-906d6018af72",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toilet Pasar Gede 1",
        "name": "Toilet Pasar Gedhe 1",
        "category": "toilet",
        "categoryLabel": "Toilet & Fasilitas",
        "icon": "🚻",
        "color": "#009688",
        "x": 293,
        "y": 266,
        "lat": 758,
        "lng": 293,
        "description": "Fasilitas toilet yang berada di Pasar Gedhe",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 293,
            "y": 266
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef20b93-9f38-4b5e-9028-637b9701b815",
        "nodeId": "n_9ef20b93-9f38-4b5e-9028-637b9701b815",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Giyarti",
        "name": "Oprokan Ibu Giyarti",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 519,
        "y": 350,
        "lat": 674,
        "lng": 519,
        "description": "Oprokan Ibu Giyarti merupakan oprokan yang ada di Pasar Gedhe yang menjual beragam sayuran dan tahu tempe",
        "image": "https://maps.pasargedesolo.com/storage/stores/1CzoMugSx36yjFRoNflH4jxMfDRwED52.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/1CzoMugSx36yjFRoNflH4jxMfDRwED52_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/1CzoMugSx36yjFRoNflH4jxMfDRwED52.jpg",
          "https://maps.pasargedesolo.com/storage/locations/61qxnAsSTYQUrlp2N0ELnz5GlHeo0uFTphhZYaGB.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 355
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef20676-216b-43ce-9d54-9a595739376e",
        "nodeId": "n_9ef20676-216b-43ce-9d54-9a595739376e",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Sriyono",
        "name": "Oprokan Ibu Sriyono",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 519,
        "y": 331,
        "lat": 693,
        "lng": 519,
        "description": "Oprokan Ibu Sriyono merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis ayam potong dan kulit ayam",
        "image": "https://maps.pasargedesolo.com/storage/stores/CISQ4BocGjalCMvFeF2ZAmPpDC8e5hxI.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/CISQ4BocGjalCMvFeF2ZAmPpDC8e5hxI_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/CISQ4BocGjalCMvFeF2ZAmPpDC8e5hxI.jpg",
          "https://maps.pasargedesolo.com/storage/locations/2VeqxBvCleOhNXY2hOamXGxmMUYjC5odT94mJ282.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 335
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
        "nodeId": "n_9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Nurhidayati",
        "name": "Oprokan Ibu Nurhidayati",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 519,
        "y": 624,
        "lat": 400,
        "lng": 519,
        "description": "Oprokan Ibu Nurhidayati merupakan salah satu oprokan yang ada di Pasar Gedhe yang menjual spesialis ayam potong dan tulang ayam",
        "image": "https://maps.pasargedesolo.com/storage/stores/PQSvvG5H1OAEh8BplEvvZBLc5zXaLdD1.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/PQSvvG5H1OAEh8BplEvvZBLc5zXaLdD1_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/PQSvvG5H1OAEh8BplEvvZBLc5zXaLdD1.jpg"
        ],
        "entries": [
          {
            "x": 526,
            "y": 625
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef208dc-305d-4213-925b-a079e3920b2f",
        "nodeId": "n_9ef208dc-305d-4213-925b-a079e3920b2f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Parinah",
        "name": "Oprokan Ibu Parinah",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 520,
        "y": 338,
        "lat": 686,
        "lng": 520,
        "description": "Oprokan Ibu Parinah merupakan salah satu oprokan yang ada di Pasar Gedhe yang menjual ayam potong dan uritan",
        "image": "https://maps.pasargedesolo.com/storage/stores/LyBs70UYpEph0c1yJMWXQ0l6vghuugun.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/LyBs70UYpEph0c1yJMWXQ0l6vghuugun_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/LyBs70UYpEph0c1yJMWXQ0l6vghuugun.jpg",
          "https://maps.pasargedesolo.com/storage/locations/3jr29aAVnE5DPuCDhID7Je41GZuwme7Z5HXhEfKP.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 344
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef20d3c-594a-406d-a451-0207d8460317",
        "nodeId": "n_9ef20d3c-594a-406d-a451-0207d8460317",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Warti Ayam Potong 3",
        "name": "Oprokan Ibu Warti Ayam Potong 3",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 518,
        "y": 636,
        "lat": 388,
        "lng": 518,
        "description": "Oprokan Ibu Warti Ayam Potong 3 merupakan oprokan yang ada di Pasar Gedhe yang menyediakan spesialis ayam potong, tulang ayam, dan kepala ayam",
        "image": "https://maps.pasargedesolo.com/storage/stores/ujHbeIa7gV9a0V0rrCqOKK1xMRoEzoOi.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ujHbeIa7gV9a0V0rrCqOKK1xMRoEzoOi_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ujHbeIa7gV9a0V0rrCqOKK1xMRoEzoOi.jpg"
        ],
        "entries": [
          {
            "x": 527,
            "y": 638
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5975-013a-4ff1-865d-3e814cca1c60",
        "nodeId": "n_9eec5975-013a-4ff1-865d-3e814cca1c60",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Mee Lian 1",
        "name": "Toko Mee Lian 1",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 292,
        "y": 671,
        "lat": 353,
        "lng": 292,
        "description": "Toko Mee Lian 1 adalah salah satu toko yang ada di Pasar Gedhe yang khusus menjual bumbu dapur masak dan keperluan sembako",
        "image": "https://maps.pasargedesolo.com/storage/stores/R94SF0KCzZxTAQvtYBm4hFDrOJmMvv57.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/R94SF0KCzZxTAQvtYBm4hFDrOJmMvv57_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/R94SF0KCzZxTAQvtYBm4hFDrOJmMvv57.jpg",
          "https://maps.pasargedesolo.com/storage/locations/8DSPlVrQeyha5WcdBafuA570878dyseb2JmTeMZF.jpg",
          "https://maps.pasargedesolo.com/storage/locations/yRJ5fEBHdx154ORvSvLndkfT0UnZrLbBQUVRa8EX.jpg"
        ],
        "entries": [
          {
            "x": 306,
            "y": 675
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef29d60-dc1d-4396-b187-3b75b81fbe9f",
        "nodeId": "n_9ef29d60-dc1d-4396-b187-3b75b81fbe9f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oleh-Oleh Mbak Lies",
        "name": "Kios Oleh-Oleh Mbak Lies",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 596,
        "y": 784,
        "lat": 240,
        "lng": 596,
        "description": "Kios Oleh-Oleh Mbak Lies merupakan salah satu kios yang ada di Pasar Gedhe yang menyediakan beragam oleh-oleh khas Solo seperti abon, intip, dan karak",
        "image": "https://maps.pasargedesolo.com/storage/stores/VqQrzGumZNW6U9JWpansEws8h2v3gROo.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/VqQrzGumZNW6U9JWpansEws8h2v3gROo_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/VqQrzGumZNW6U9JWpansEws8h2v3gROo.jpg",
          "https://maps.pasargedesolo.com/storage/locations/l2UxmimZj6S7PavWxZgMccGW07QKfT42aELdKm3v.jpg"
        ],
        "entries": [
          {
            "x": 596,
            "y": 768
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef3ee74-4033-46f8-ab06-802820b21d52",
        "nodeId": "n_9ef3ee74-4033-46f8-ab06-802820b21d52",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Samini",
        "name": "Kios Bu Samini",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 557,
        "y": 573,
        "lat": 451,
        "lng": 557,
        "description": "Kios Bu Samini merupakan salah satu kios yang ada di Pasar Gedhe yang menyediakan spesialis tanaman biji rempah seperti jahe, kunyit, dan sereh",
        "image": "https://maps.pasargedesolo.com/storage/stores/NSpETl480jVBRSTjS2F2rmtsyl3CX7uC.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/NSpETl480jVBRSTjS2F2rmtsyl3CX7uC_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/NSpETl480jVBRSTjS2F2rmtsyl3CX7uC.jpg",
          "https://maps.pasargedesolo.com/storage/locations/5wo4mp5rGEYnxahbqtgC5aVziO3lOBTOI6HPsXb3.jpg"
        ],
        "entries": [
          {
            "x": 561,
            "y": 583
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
        "nodeId": "n_9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Suniyem",
        "name": "Kios Bu Suniyem",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 654,
        "y": 572,
        "lat": 452,
        "lng": 654,
        "description": "Kios Bu Suniyem merupakan kios yang ada di Pasar Gedhe yang menyediakan spesialis minuman es teh",
        "image": "https://maps.pasargedesolo.com/storage/stores/Lric42nucY6dWUWTRhJZdQ0s4VGDxBRE.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Lric42nucY6dWUWTRhJZdQ0s4VGDxBRE_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Lric42nucY6dWUWTRhJZdQ0s4VGDxBRE.jpg",
          "https://maps.pasargedesolo.com/storage/locations/6sYH0ZOThDhQel59gasIGMzGLckCZ5QiCPLR8NY5.jpg"
        ],
        "entries": [
          {
            "x": 659,
            "y": 582
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef29a9f-ea32-45d5-a427-0811149bc4ba",
        "nodeId": "n_9ef29a9f-ea32-45d5-a427-0811149bc4ba",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "UD Hasil Buah Antok (Bagong)",
        "name": "UD Hasil Buah Antok (Bagong)",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 390,
        "y": 143,
        "lat": 881,
        "lng": 390,
        "description": "UD Hasil Buah Antok (Bagong) merupakan salah satu suplier atau grosir buah-buahan lokal dan import yang ada di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/locations/N1c2SfBHo3g5YrV0xOqFRob6YKOJ6hQIGnMz0SNT.jpg",
        "imageThumb": null,
        "images": [
          "https://maps.pasargedesolo.com/storage/locations/N1c2SfBHo3g5YrV0xOqFRob6YKOJ6hQIGnMz0SNT.jpg",
          "https://maps.pasargedesolo.com/storage/locations/kqErwXJoDky4QI1FpimY8e0coXlr1DLmrq36FXcP.jpg"
        ],
        "entries": [
          {
            "x": 387,
            "y": 162
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41814-0bb3-4cbe-be8d-5055030a41e6",
        "nodeId": "n_9ef41814-0bb3-4cbe-be8d-5055030a41e6",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios UD Uzhie 1",
        "name": "Kios UD Uzhie 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 263,
        "y": 720,
        "lat": 304,
        "lng": 263,
        "description": "Kios Uzhie adalah salah satu kios yang berada di kawaban Pasar Gedhe yang menjual aneka buah dan menerima pesanan buah secara grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/BlfUh7YhK9qtwCsnStVC6QENmD2G4Bl5.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/BlfUh7YhK9qtwCsnStVC6QENmD2G4Bl5_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/BlfUh7YhK9qtwCsnStVC6QENmD2G4Bl5.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/pxUFaBKa3lLEKDUAFPFRMstujXlUV93xLrVxRpAY.jpg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 724
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41983-8988-4838-9623-413e70cdf3bd",
        "nodeId": "n_9ef41983-8988-4838-9623-413e70cdf3bd",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Sinar",
        "name": "Toko Sinar",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 261,
        "y": 535,
        "lat": 489,
        "lng": 261,
        "description": "Toko Sinar adalah salah satu kios yang ada di Pasar Gedhe yang menjual aneka makanan, kue kering khas imlek dan kebutuhan imlek",
        "image": "https://maps.pasargedesolo.com/storage/stores/mF3iHl6A7b12Xr2pjYc4Lf4eLET1RncJ.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/mF3iHl6A7b12Xr2pjYc4Lf4eLET1RncJ_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/mF3iHl6A7b12Xr2pjYc4Lf4eLET1RncJ.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/9POyM4dwcccp70pEk2ksePhWPYRBu6n8yO1b38wM.jpg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 542
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41765-e35b-4393-a937-9e700aa3cf7c",
        "nodeId": "n_9ef41765-e35b-4393-a937-9e700aa3cf7c",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Mas Kembar",
        "name": "Toko Mas Kembar",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 259,
        "y": 779,
        "lat": 245,
        "lng": 259,
        "description": "Toko Mas Kembar adalah salah satu kios yang ada di Pasar Gedhe yang menjual aneka jamu racikan dan jamu kemasan untuk kesehatan",
        "image": "https://maps.pasargedesolo.com/storage/stores/lnZRl1tmcBga8n2WS98YsCZKPwItEDCL.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/lnZRl1tmcBga8n2WS98YsCZKPwItEDCL_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/lnZRl1tmcBga8n2WS98YsCZKPwItEDCL.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/9V1Jd3wrHOULgamqGADyXZmo8bNwpqw6dnBpZHzV.jpg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 777
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41082-d06a-4f76-9792-0135f7ce6f84",
        "nodeId": "n_9ef41082-d06a-4f76-9792-0135f7ce6f84",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Sayuran Bu Warni",
        "name": "Sayuran Bu Warni",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 675,
        "y": 269,
        "lat": 755,
        "lng": 675,
        "description": "Sayuran Bu Warni merupakan kios los yang ada di Pasar Gedhe yang menyediakan khusus sayuran dengan berbagai macam jenis sayuran",
        "image": "https://maps.pasargedesolo.com/storage/stores/3eHhqnwITfSVXP832n2hXt0dO6uHROZ8.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/3eHhqnwITfSVXP832n2hXt0dO6uHROZ8_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/3eHhqnwITfSVXP832n2hXt0dO6uHROZ8.jpg",
          "https://maps.pasargedesolo.com/storage/locations/akNcTL4DCIICRtUapycmZ4i4QJSMWFVmtXkjVlk0.jpg"
        ],
        "entries": [
          {
            "x": 673,
            "y": 262
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4000b-15f3-45a3-9fae-6e946eae2530",
        "nodeId": "n_9ef4000b-15f3-45a3-9fae-6e946eae2530",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Pak Sawali",
        "name": "Kios Pak Sawali",
        "category": "kerajinan",
        "categoryLabel": "Batik & Kerajinan",
        "icon": "🧵",
        "color": "#8E44AD",
        "x": 628,
        "y": 467,
        "lat": 557,
        "lng": 628,
        "description": "Kios Pak Sawali merupakan kios yang ada di Pasar Gedhe yang menjual spesialis plastik dengan berbagai macam dan ukuran jenis plastik",
        "image": "https://maps.pasargedesolo.com/storage/stores/eBbwFpcW54uzn6SdDeOb6Ur032WIraq2.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/eBbwFpcW54uzn6SdDeOb6Ur032WIraq2_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/eBbwFpcW54uzn6SdDeOb6Ur032WIraq2.jpg"
        ],
        "entries": [
          {
            "x": 632,
            "y": 476
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef3f9b5-150f-4d29-a425-503ee193c8ed",
        "nodeId": "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Wadinah",
        "name": "Kios Bu Wadinah",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 571,
        "y": 496,
        "lat": 528,
        "lng": 571,
        "description": "Kios Bu Wadinah merupakan salah satu kios yang ada di Pasar Gedhe yang menjual beragam sembako lengkap seperti bawang bombai, bawang putih dan bawang merah",
        "image": "https://maps.pasargedesolo.com/storage/stores/JGAuNdwZu7zM10dmmikLkcPEfe8ZUDtb.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/JGAuNdwZu7zM10dmmikLkcPEfe8ZUDtb_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/JGAuNdwZu7zM10dmmikLkcPEfe8ZUDtb.jpg"
        ],
        "entries": [
          {
            "x": 569,
            "y": 488
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef416b9-1f72-4103-8491-010ff40720d6",
        "nodeId": "n_9ef416b9-1f72-4103-8491-010ff40720d6",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Tatik",
        "name": "Kios Bu Tatik",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 554,
        "y": 331,
        "lat": 693,
        "lng": 554,
        "description": "Kios Bu Tatik adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis kebutuhan dapur dan cemilan",
        "image": "https://maps.pasargedesolo.com/storage/stores/EYoeKuDhZm2iMQhbUOswZtU4wLZC01Xg.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/EYoeKuDhZm2iMQhbUOswZtU4wLZC01Xg_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/EYoeKuDhZm2iMQhbUOswZtU4wLZC01Xg.jpg",
          "https://maps.pasargedesolo.com/storage/locations/iFWjM7wyFaH1YhVEYQUDAX0JHAgCmYr9aBAfspKa.jpg"
        ],
        "entries": [
          {
            "x": 554,
            "y": 320
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef418ad-89b7-42ae-9ded-64b0120c6add",
        "nodeId": "n_9ef418ad-89b7-42ae-9ded-64b0120c6add",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Darso",
        "name": "Kios Bu Darso",
        "category": "perkakas",
        "categoryLabel": "Perkakas Rumah",
        "icon": "🍳",
        "color": "#795548",
        "x": 734,
        "y": 559,
        "lat": 465,
        "lng": 734,
        "description": "Kios Bu Darso merupakan salah satu kios yang ada di Pasar Gedhe yang menjual beragam gerabah seperti kendi dan piring rotan",
        "image": "https://maps.pasargedesolo.com/storage/stores/kgnTvQjk6FSYEc2yz7BRWyjtwOYYc30K.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/kgnTvQjk6FSYEc2yz7BRWyjtwOYYc30K_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/kgnTvQjk6FSYEc2yz7BRWyjtwOYYc30K.jpg",
          "https://maps.pasargedesolo.com/storage/locations/zoz4QnMMVQUuI9dxJI7SacQ3cZC6YCdQF7VHvP9L.jpg",
          "https://maps.pasargedesolo.com/storage/locations/fXXtvOIKapsHGiPPvHp5MeTDTG4uOU60ZcwfO3Ji.jpg"
        ],
        "entries": [
          {
            "x": 721,
            "y": 560
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef3fd9d-f088-41b6-815d-0ee7382429ef",
        "nodeId": "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Ratih 2",
        "name": "Kios Bu Ratih 2",
        "category": "perkakas",
        "categoryLabel": "Perkakas Rumah",
        "icon": "🍳",
        "color": "#795548",
        "x": 672,
        "y": 497,
        "lat": 527,
        "lng": 672,
        "description": "Kios Bu Ratih 2 merupakan kios yang ada di Pasar Gedhe yang menyediakan beragam gerabah alat rumah tangga dan dapur yang lengkap seperti sapu hingga alat dapur yang terbuat dari kayu dan rotan",
        "image": "https://maps.pasargedesolo.com/storage/stores/WW847LMRiHH2w7zuMYeuQp19QEglRpPx.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/WW847LMRiHH2w7zuMYeuQp19QEglRpPx_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/WW847LMRiHH2w7zuMYeuQp19QEglRpPx.jpg",
          "https://maps.pasargedesolo.com/storage/locations/rG1A8baYaXvyl6ekgFpAAjcOqKB2IinvJiGiGUAK.jpg",
          "https://maps.pasargedesolo.com/storage/locations/jXltOQb8aqagztZtg2QtY4hn1fZ9CB89NXZO6jyR.jpg"
        ],
        "entries": [
          {
            "x": 671,
            "y": 488
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
        "nodeId": "n_9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Ratih 1",
        "name": "Kios Bu Ratih 1",
        "category": "perkakas",
        "categoryLabel": "Perkakas Rumah",
        "icon": "🍳",
        "color": "#795548",
        "x": 661,
        "y": 466,
        "lat": 558,
        "lng": 661,
        "description": "Kios Bu Ratih 1 merupakan kios yang ada di Pasar Gedhe yang menyediakan beragam gerabah alat rumah tangga dan dapur yang lengkap seperti sapu hingga alat dapur yang terbuat dari kayu dan rotan",
        "image": "https://maps.pasargedesolo.com/storage/stores/HTYhQlB9NPXTEGNGfU3yNWdd8g2teECX.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/HTYhQlB9NPXTEGNGfU3yNWdd8g2teECX_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/HTYhQlB9NPXTEGNGfU3yNWdd8g2teECX.jpg",
          "https://maps.pasargedesolo.com/storage/locations/gWLIZNls2GEht9wEYZueN66E21qNXRXdydLrthmk.jpg",
          "https://maps.pasargedesolo.com/storage/locations/4u13fzHfTbfIlD9lPeNkaXewLi3m0GOSrIbv1uQ1.jpg"
        ],
        "entries": [
          {
            "x": 667,
            "y": 476
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef42be5-3274-41ef-907e-f9447f142465",
        "nodeId": "n_9ef42be5-3274-41ef-907e-f9447f142465",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Solo Buah Segar",
        "name": "Solo Buah Segar",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 583,
        "y": 122,
        "lat": 902,
        "lng": 583,
        "description": "Solo Buah Segar merupakan kios suplier buah grosir di Pasar Gedhe yang menyediakan beraneka macam buah",
        "image": "https://maps.pasargedesolo.com/storage/stores/1ZAPhOxjEJ8mDWYkfQfezpnVZ4S8HROo.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/1ZAPhOxjEJ8mDWYkfQfezpnVZ4S8HROo_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/1ZAPhOxjEJ8mDWYkfQfezpnVZ4S8HROo.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/7F3L4wP8EwJdGvpSb7ZFzGScFNsuIsbkcpzst2RS.jpg"
        ],
        "entries": [
          {
            "x": 583,
            "y": 111
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41b0f-aae3-47e5-9dba-f0b689e14a8a",
        "nodeId": "n_9ef41b0f-aae3-47e5-9dba-f0b689e14a8a",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "UD Uzhie Kios Buah",
        "name": "UD Uzhie Kios Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 263,
        "y": 349,
        "lat": 675,
        "lng": 263,
        "description": "Kios UD Uzhie 2 adalah salah satu kios  buah yang berada di kawasan Pasar Gedhe yang menjual aneka buah-buahan yang menerima pesanan buah secara grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/0RpwULhBg8oKCMHp9SmoEAp8pHB0CPMp.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/0RpwULhBg8oKCMHp9SmoEAp8pHB0CPMp_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/0RpwULhBg8oKCMHp9SmoEAp8pHB0CPMp.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/ufhW0U0TiIViu1rI4Bia8fHtmgCWkwFHZ0CqvoO4.jpg"
        ],
        "entries": [
          {
            "x": 248,
            "y": 354
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4201c-8253-403d-a60b-ad792fd235cd",
        "nodeId": "n_9ef4201c-8253-403d-a60b-ad792fd235cd",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Genduk Buah 1",
        "name": "Genduk Buah 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 281,
        "y": 143,
        "lat": 881,
        "lng": 281,
        "description": "Genduk Buah merupakan kios di Pasar Gedhe yang menyediakan beragam buah untuk suplier",
        "image": "https://maps.pasargedesolo.com/storage/stores/1XgwIhSDgptsr4PgVIGpbV4nA9uXqOCi.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/1XgwIhSDgptsr4PgVIGpbV4nA9uXqOCi_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/1XgwIhSDgptsr4PgVIGpbV4nA9uXqOCi.jpg",
          "https://maps.pasargedesolo.com/storage/locations/7DdNozhW4kmVKw0qF4cbbMjGfV81gQ87vNgJQ4p1.jpg"
        ],
        "entries": [
          {
            "x": 282,
            "y": 130
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41ac9-8e90-40dc-ac33-ce82e633b42a",
        "nodeId": "n_9ef41ac9-8e90-40dc-ac33-ce82e633b42a",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Surya",
        "name": "Toko Surya",
        "category": "tekstil",
        "categoryLabel": "Pakaian & Tekstil",
        "icon": "👕",
        "color": "#16A085",
        "x": 259,
        "y": 378,
        "lat": 646,
        "lng": 259,
        "description": "Toko Surya adalah salah satu toko yang berada di kawasan Pasar Gedhe yang dikenal menjual berbagai jenis pakaian termasuk pakaian harian, seragam sekolah dan khususnya baju tradisional imlek seperti cheongsam",
        "image": "https://maps.pasargedesolo.com/storage/stores/hEiercFi6WttHzCbKZQRg6t8mtpmrqYb.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/hEiercFi6WttHzCbKZQRg6t8mtpmrqYb_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/hEiercFi6WttHzCbKZQRg6t8mtpmrqYb.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/nroqvkjxsg7gQOTnPSn00fpitpbHuFgLZa5w99Xe.jpg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 380
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41ef1-9e5f-4df8-9a41-7395803fc4fd",
        "nodeId": "n_9ef41ef1-9e5f-4df8-9a41-7395803fc4fd",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Mulia Baru",
        "name": "Toko Mulia Baru",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 261,
        "y": 595,
        "lat": 429,
        "lng": 261,
        "description": "Toko Mulia Baru adalah salah satu kios yang berada di Pasar Gedhe yang menjual aneka snack yang bisa dijadikan oleh-oleh",
        "image": "https://maps.pasargedesolo.com/storage/stores/oYRv4hQ4m0aPQP8N3jxE0HEyul3bRTmz.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/oYRv4hQ4m0aPQP8N3jxE0HEyul3bRTmz_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/oYRv4hQ4m0aPQP8N3jxE0HEyul3bRTmz.jpeg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 597
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4245d-17e0-44e5-956c-c2c6d10b451a",
        "nodeId": "n_9ef4245d-17e0-44e5-956c-c2c6d10b451a",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Iin Koentjoro",
        "name": "Iin Koentjoro",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 381,
        "y": 123,
        "lat": 901,
        "lng": 381,
        "description": "Iin Koentjoro adalah kios supplier buah di Pasar Gedhe yang menyediakan buah melon dan buah jeruk",
        "image": "https://maps.pasargedesolo.com/storage/stores/d0cDbY8vdGEir6iYG8oGJMRwWxd6dAn9.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/d0cDbY8vdGEir6iYG8oGJMRwWxd6dAn9_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/d0cDbY8vdGEir6iYG8oGJMRwWxd6dAn9.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/WgdmJkYf2ME6cqkLbLLwR8mm4Qg1T3b1tckLOCds.jpg"
        ],
        "entries": [
          {
            "x": 383,
            "y": 111
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41c48-ee26-4113-a029-2c663251b452",
        "nodeId": "n_9ef41c48-ee26-4113-a029-2c663251b452",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oprokan Pak Cahyo",
        "name": "Kios Oprokan Pak Cahyo",
        "category": "telur",
        "categoryLabel": "Telur",
        "icon": "🥚",
        "color": "#F1C40F",
        "x": 372,
        "y": 289,
        "lat": 735,
        "lng": 372,
        "description": "Kios Oprokan Pak Cahyo adalah salah satu kios oprokan yang ada di Pasar Gedhe Pintu Utama yang menjual khusus makanan telur asin dan telur kampung",
        "image": "https://maps.pasargedesolo.com/storage/stores/XPXxaArygXmy4PuMtcuNnwvkAH1oNzTK.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/XPXxaArygXmy4PuMtcuNnwvkAH1oNzTK_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/XPXxaArygXmy4PuMtcuNnwvkAH1oNzTK.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Yqkw60Tzs41ROfNE9MO8K2OE0CYIZVvlo1nFABR7.jpg"
        ],
        "entries": [
          {
            "x": 380,
            "y": 290
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41cd8-08b3-487d-8009-8ddfd43fc159",
        "nodeId": "n_9ef41cd8-08b3-487d-8009-8ddfd43fc159",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oprokan Pak Joko",
        "name": "Kios Oprokan Pak Joko",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 376,
        "y": 296,
        "lat": 728,
        "lng": 376,
        "description": "Kios Oprokan Pak Joko adalah salah satu kios oprokan yang ada di Pasar Gedhe Pintu Utama yang menjual buah-buahan",
        "image": "https://maps.pasargedesolo.com/storage/stores/WiyRnCSYn8UfmYYhTiTN2x92CMqAUFXi.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/WiyRnCSYn8UfmYYhTiTN2x92CMqAUFXi_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/WiyRnCSYn8UfmYYhTiTN2x92CMqAUFXi.jpg",
          "https://maps.pasargedesolo.com/storage/locations/kb9eKXBRDwmSSWn1Ohd7CdStFMXuoMRRzvhgslLi.jpg"
        ],
        "entries": [
          {
            "x": 380,
            "y": 300
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef42332-d100-414f-91d1-11cc96081ffc",
        "nodeId": "n_9ef42332-d100-414f-91d1-11cc96081ffc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Lenjongan Jumiati",
        "name": "Kios Lenjongan Jumiati",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 500,
        "y": 289,
        "lat": 735,
        "lng": 500,
        "description": "Kios Lenjongan Jumiati adalah salah satu kios yang berada di Pasar Gedhe yang menjual spesialis aneka oleh-oleh khas Solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/2D4n8szzWHjGLDXrHciJFigvcbuQi85h.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/2D4n8szzWHjGLDXrHciJFigvcbuQi85h_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/2D4n8szzWHjGLDXrHciJFigvcbuQi85h.jpg",
          "https://maps.pasargedesolo.com/storage/locations/7DDlkZ0qwyrgCoB7cjE5jUmxsoIvVNaLGxMR1cOI.jpg"
        ],
        "entries": [
          {
            "x": 504,
            "y": 301
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41b3b-7e17-4273-927f-2b1f0ab90316",
        "nodeId": "n_9ef41b3b-7e17-4273-927f-2b1f0ab90316",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Buah Bu Warni",
        "name": "Oprokan Buah Bu Warni",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 427,
        "y": 269,
        "lat": 755,
        "lng": 427,
        "description": "Oprokan Buah Bu Warni merupakan kios yang ada di Pasar Gedhe yang menyediakan berbagai macam buah yang diecerkan seperti jambu air dan manggis",
        "image": "https://maps.pasargedesolo.com/storage/stores/cbmjlF2Fmqjjti3NyRsP9A8bTNk9M7Dg.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/cbmjlF2Fmqjjti3NyRsP9A8bTNk9M7Dg_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/cbmjlF2Fmqjjti3NyRsP9A8bTNk9M7Dg.jpg",
          "https://maps.pasargedesolo.com/storage/locations/6pguaqyQeiqcxX00XIXnU3nIB9FmG47bYWkr5YH0.jpg"
        ],
        "entries": [
          {
            "x": 427,
            "y": 269
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef42f24-cb63-4482-89b4-61db2f234cb6",
        "nodeId": "n_9ef42f24-cb63-4482-89b4-61db2f234cb6",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Manggala Putri",
        "name": "Manggala Putri",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 362,
        "y": 898,
        "lat": 126,
        "lng": 362,
        "description": "Manggala Putri adalah salah satu kios yang ada di Pasar Gedhe Pintu Utara yang menjual aneka makanan snack yang menerima pesanan secara eceran dan grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/hjxBZ4DeDCDP8XgdPDjEyvMj8gdgE6cg.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/hjxBZ4DeDCDP8XgdPDjEyvMj8gdgE6cg_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/hjxBZ4DeDCDP8XgdPDjEyvMj8gdgE6cg.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/fi5fFlNiWhiNAoL1YAr6rW7x4A4wnC8cGf0J5RLR.jpg"
        ],
        "entries": [
          {
            "x": 365,
            "y": 914
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef427fc-873d-4224-b1cd-7020741182df",
        "nodeId": "n_9ef427fc-873d-4224-b1cd-7020741182df",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Marti Sayuran",
        "name": "Kios Bu Marti Sayuran",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 669,
        "y": 285,
        "lat": 739,
        "lng": 669,
        "description": "Kios Bu Marti Sayuran merupakan salah satu kios yang ada di Pasar Gedhe yang menyediakan spesialis sayuran yang lengkap seperti Tomat, Terong, Sawi Putih, Cabai, Kentang, Kecambah, Wortel, Brokoli, Timun, Tahu, Tempe, Kangkung",
        "image": "https://maps.pasargedesolo.com/storage/stores/3I28M03yV8E3JcQazEoYHo6cuaJrYLiL.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/3I28M03yV8E3JcQazEoYHo6cuaJrYLiL_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/3I28M03yV8E3JcQazEoYHo6cuaJrYLiL.jpg",
          "https://maps.pasargedesolo.com/storage/locations/g3UIysHGItQ6c0As3T06aSYZNk72Geu69zvje1Ai.jpg"
        ],
        "entries": [
          {
            "x": 666,
            "y": 300
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4262b-7e23-4de9-a258-6db15bd6594a",
        "nodeId": "n_9ef4262b-7e23-4de9-a258-6db15bd6594a",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "UD Tanti 2",
        "name": "UD Tanti 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 482,
        "y": 121,
        "lat": 903,
        "lng": 482,
        "description": "UD Tanti 2 merupakan salah satu kios yang ada di Pasar Gedhe yang menjual buah-buahan grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/qy17teZjck69ScjHlMsXffM6AkaA48gs.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/qy17teZjck69ScjHlMsXffM6AkaA48gs_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/qy17teZjck69ScjHlMsXffM6AkaA48gs.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/OXy1ftRMaho53xKHZfztObsLRZJV2uCOleJN98IP.jpg"
        ],
        "entries": [
          {
            "x": 481,
            "y": 111
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4912-7411-4938-939a-ee5ee6759fc5",
        "nodeId": "n_9eec4912-7411-4938-939a-ee5ee6759fc5",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oleh Oleh Bu Saji 1",
        "name": "Kios Oleh Oleh Bu Saji 1",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 624,
        "y": 353,
        "lat": 671,
        "lng": 624,
        "description": "Oleh-Oleh Khas Solo Bu Saji adalah kios yang terletak di dalam Pasar Gedhe Solo, dikenal sebagai salah satu tempat terbaik untuk mencari oleh-oleh khas Solo. Kios ini menawarkan beragam produk tradisional seperti intip madu, karak bawang, bakpia kering, mete goreng, abon halus, lanting, bagelan, roti jadul, serta berbagai camilan khas lainnya.",
        "image": "https://maps.pasargedesolo.com/storage/stores/mELiWDTFPwqhk2eUg1fa9eKs6npQexRu.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/mELiWDTFPwqhk2eUg1fa9eKs6npQexRu_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/mELiWDTFPwqhk2eUg1fa9eKs6npQexRu.jpg"
        ],
        "entries": [
          {
            "x": 611,
            "y": 367
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef43b2e-c860-4412-9ebc-3eac05690019",
        "nodeId": "n_9ef43b2e-c860-4412-9ebc-3eac05690019",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Sinar Jaya",
        "name": "Sinar Jaya",
        "category": "kerajinan",
        "categoryLabel": "Batik & Kerajinan",
        "icon": "🧵",
        "color": "#8E44AD",
        "x": 747,
        "y": 873,
        "lat": 151,
        "lng": 747,
        "description": "Sinar Jaya merupakan kios yang ada di Pasar Gedhe yang menyediakan perlengkapan kemasan",
        "image": "https://maps.pasargedesolo.com/storage/stores/x9WE7bcbw1HmHaEI7zFRMfRXfbvrOoSK.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/x9WE7bcbw1HmHaEI7zFRMfRXfbvrOoSK_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/x9WE7bcbw1HmHaEI7zFRMfRXfbvrOoSK.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/Jp0YzY0nAnB6tieWSGbuHdpeE2LN85En97i682Sz.jpg"
        ],
        "entries": [
          {
            "x": 758,
            "y": 889
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef43465-0f14-498e-a0f4-2bda10296750",
        "nodeId": "n_9ef43465-0f14-498e-a0f4-2bda10296750",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Sunarti",
        "name": "Oprokan Ibu Sunarti",
        "category": "telur",
        "categoryLabel": "Telur",
        "icon": "🥚",
        "color": "#F1C40F",
        "x": 520,
        "y": 572,
        "lat": 452,
        "lng": 520,
        "description": "Oprokan Ibu Sunarti merupakan salah satu oprokan yang ada di Pasar Gedhe yang menjual spesialis tahu tempe dan telur puyuh matang, tersedia juga telur puyuh yang sudah di kupas kulitnya",
        "image": "https://maps.pasargedesolo.com/storage/stores/ZY9H3q52ux2ckvm1KASBu0dYysw0pKLo.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ZY9H3q52ux2ckvm1KASBu0dYysw0pKLo_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ZY9H3q52ux2ckvm1KASBu0dYysw0pKLo.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Z7uWRU9sxoccno517TQDVsLGeY4CcgmjDNjlH8Jj.jpg",
          "https://maps.pasargedesolo.com/storage/locations/x2HOO4mD6wF99yyEdo1oIhmfETdHe9IOvnKCoYik.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 572
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef438d8-7f2d-43e8-8e6d-4d77adac4ce8",
        "nodeId": "n_9ef438d8-7f2d-43e8-8e6d-4d77adac4ce8",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Indah Jaya",
        "name": "Toko Indah Jaya",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 632,
        "y": 896,
        "lat": 128,
        "lng": 632,
        "description": "Toko Indah Jaya adalah salah satu toko yang berada di Pasar Gedhe Pintu Utara yang menjual kebutuhan sehari-hari atau sembako",
        "image": "https://maps.pasargedesolo.com/storage/stores/SMOXlPr7fRprb8vRcCpBDl8vYQZeqTvA.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/SMOXlPr7fRprb8vRcCpBDl8vYQZeqTvA_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/SMOXlPr7fRprb8vRcCpBDl8vYQZeqTvA.jpeg"
        ],
        "entries": [
          {
            "x": 633,
            "y": 913
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4300f-fcb9-4e6d-a3cb-91f8d55bd945",
        "nodeId": "n_9ef4300f-fcb9-4e6d-a3cb-91f8d55bd945",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Dewa Dewi",
        "name": "Dewa Dewi",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 735,
        "y": 134,
        "lat": 890,
        "lng": 735,
        "description": "Dewa Dewi merupakan kios yang ada di Pasar Gedhe yang menyediakan berbagai macam cemilan dan teh",
        "image": "https://maps.pasargedesolo.com/storage/stores/dZis9ktcdexyy549UVnVzKhqDtPH0f42.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/dZis9ktcdexyy549UVnVzKhqDtPH0f42_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/dZis9ktcdexyy549UVnVzKhqDtPH0f42.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/xWh3HWxR3wWmiZLAaaFzi2x6tjNxI8AS309xBOIt.jpg"
        ],
        "entries": [
          {
            "x": 748,
            "y": 129
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4320d-7c57-4a6c-85c2-3342ad96ed1b",
        "nodeId": "n_9ef4320d-7c57-4a6c-85c2-3342ad96ed1b",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Mie Dimsum Story",
        "name": "Mie Dimsum Story",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 408,
        "y": 898,
        "lat": 126,
        "lng": 408,
        "description": "Mie Dimsum Story adalah salah satu kuliner populer yang berada di Pasar Gedhe Pintu Utara yang menjual aneka dimsum dan mie yang buka setiap hari mulai dari jam 08.30 pagi sampai jam 5.30 sore",
        "image": "https://maps.pasargedesolo.com/storage/stores/ftQm7dGVEHBqq73SkXFmePgtIs7jD1zn.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ftQm7dGVEHBqq73SkXFmePgtIs7jD1zn_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ftQm7dGVEHBqq73SkXFmePgtIs7jD1zn.jpeg"
        ],
        "entries": [
          {
            "x": 413,
            "y": 914
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef43873-772a-44fc-9200-1268038676fc",
        "nodeId": "n_9ef43873-772a-44fc-9200-1268038676fc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Dua Sembilan",
        "name": "Toko Dua Sembilan",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 608,
        "y": 896,
        "lat": 128,
        "lng": 608,
        "description": "Toko Dua Sembilan adalah salah satu toko yang ada di Pasar Gedhe Pintu Utara yang menjual kebutuhan sehari-hari atau sembako",
        "image": "https://maps.pasargedesolo.com/storage/stores/ZKPAPd6Tv884jsRKbKuObVrVDzkcIQVW.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ZKPAPd6Tv884jsRKbKuObVrVDzkcIQVW_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ZKPAPd6Tv884jsRKbKuObVrVDzkcIQVW.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/SVD55OlYuQXDSAxtXpT0RJYWaxlhnRX54QMiuB4U.jpg"
        ],
        "entries": [
          {
            "x": 603,
            "y": 913
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
        "nodeId": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Rokayah",
        "name": "Oprokan Ibu Rokayah",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 519,
        "y": 551,
        "lat": 473,
        "lng": 519,
        "description": "Oprokan Ibu Rokayah merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis racikan teh, kremesan dan intip dengan taburan gula jawa",
        "image": "https://maps.pasargedesolo.com/storage/stores/AMbLAlKOWOLem3iAU6znJcsZ1scJITrv.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/AMbLAlKOWOLem3iAU6znJcsZ1scJITrv_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/AMbLAlKOWOLem3iAU6znJcsZ1scJITrv.jpg",
          "https://maps.pasargedesolo.com/storage/locations/isvXrfrEhCG5ztoMhA3am4icNAXrH73kdaBZVGmR.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 549
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef434c0-ffea-4f46-9881-31f48f7c1d23",
        "nodeId": "n_9ef434c0-ffea-4f46-9881-31f48f7c1d23",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Bu Yanti",
        "name": "Bu Yanti",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 453,
        "y": 897,
        "lat": 127,
        "lng": 453,
        "description": "Bu Yanti adalah salah satu toko yang berada di Pasar Gedhe Pintu Utara yang menjual beraneka macam snack dan krupuk yang bisa dipesan dalam jumlah banyak atau eceran",
        "image": "https://maps.pasargedesolo.com/storage/stores/hZxYck8TrN5NGLTSLPeTZ1LZMO1bahhH.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/hZxYck8TrN5NGLTSLPeTZ1LZMO1bahhH_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/hZxYck8TrN5NGLTSLPeTZ1LZMO1bahhH.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/H7TBB9XoTk1H4Te7v5pgUrcf6QZ4lWzGYgd8hNI0.jpg"
        ],
        "entries": [
          {
            "x": 452,
            "y": 913
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef43f2e-9267-40be-9e80-bf82ee08cc74",
        "nodeId": "n_9ef43f2e-9267-40be-9e80-bf82ee08cc74",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Menyan Mororejo",
        "name": "Toko Menyan Mororejo",
        "category": "lainnya",
        "categoryLabel": "Perlengkapan Ibadah",
        "icon": "📍",
        "color": "#7f8c8d",
        "x": 761,
        "y": 570,
        "lat": 454,
        "lng": 761,
        "description": "Toko Menyan Mororejo merupakan kios yang ada di Pasar Gedhe yang menyediakan berbagai perlengkapan yang berhubungan dengan keperluan ritual, spiritual, tradisional dan keagamaan",
        "image": "https://maps.pasargedesolo.com/storage/stores/YM9CAFzVEtEiNo4LnGnnWBW4H7IkHknw.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/YM9CAFzVEtEiNo4LnGnnWBW4H7IkHknw_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/YM9CAFzVEtEiNo4LnGnnWBW4H7IkHknw.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/kcFVPTdw1UzzLz1yiQr9c4PO3BEDCibPYfTzFAn2.jpg"
        ],
        "entries": [
          {
            "x": 777,
            "y": 580
          },
          {
            "x": 777,
            "y": 580
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef43097-29d0-41c7-9ec7-4518477cc4ca",
        "nodeId": "n_9ef43097-29d0-41c7-9ec7-4518477cc4ca",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Buah Sunarto",
        "name": "Kios Buah Sunarto",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 760,
        "y": 416,
        "lat": 608,
        "lng": 760,
        "description": "Kios Buah Sunarto merupakan kios yang ada di Pasar Gedhe yang menyediakan khusus jeruk peras grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/cGo6RN4cIU6BeaVihjmJIAMYRcoARKDL.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/cGo6RN4cIU6BeaVihjmJIAMYRcoARKDL_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/cGo6RN4cIU6BeaVihjmJIAMYRcoARKDL.jpeg"
        ],
        "entries": [
          {
            "x": 776,
            "y": 423
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
        "nodeId": "n_9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bu Irma",
        "name": "Oprokan Bu Irma",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 508,
        "y": 792,
        "lat": 232,
        "lng": 508,
        "description": "Oprokan Bu Irma merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis bawang lanang dan lemon",
        "image": "https://maps.pasargedesolo.com/storage/stores/hXshq6bZ5Q9ZtqcP4HatXG91EfVZDj4W.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/hXshq6bZ5Q9ZtqcP4HatXG91EfVZDj4W_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/hXshq6bZ5Q9ZtqcP4HatXG91EfVZDj4W.jpg",
          "https://maps.pasargedesolo.com/storage/locations/GxRHG6r0c88iP1QcDUYMKdbhv3hECkI2JlX7Xdro.jpg"
        ],
        "entries": [
          {
            "x": 503,
            "y": 792
          },
          {
            "x": 503,
            "y": 792
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef43582-ca29-4230-864c-64c6dcddaeab",
        "nodeId": "n_9ef43582-ca29-4230-864c-64c6dcddaeab",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Dwi Hartini",
        "name": "Oprokan Ibu Dwi Hartini",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 521,
        "y": 557,
        "lat": 467,
        "lng": 521,
        "description": "Oprokan Ibu Dwi Hartini merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis tahu dan bakso dalam kemasan",
        "image": "https://maps.pasargedesolo.com/storage/stores/ZE9O6BOqwbkr1789u0Ti1aB9wUVaT0sx.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ZE9O6BOqwbkr1789u0Ti1aB9wUVaT0sx_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ZE9O6BOqwbkr1789u0Ti1aB9wUVaT0sx.jpg",
          "https://maps.pasargedesolo.com/storage/locations/ZHgEiA4uadcMdRN9NWITD4Z6gOXNBrPzkd2BohVw.jpg",
          "https://maps.pasargedesolo.com/storage/locations/BYVU8PbHLo1IZkmhniy6khCcqC2TIpSXZAnjAB0j.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 557
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef43511-01c3-4fbc-9b5e-a1225d124919",
        "nodeId": "n_9ef43511-01c3-4fbc-9b5e-a1225d124919",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Sularni",
        "name": "Oprokan Ibu Sularni",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 521,
        "y": 566,
        "lat": 458,
        "lng": 521,
        "description": "Oprokan Ibu Sularni merupakan salah satu oprokan yang ada di Pasar Gedhe yang menjual spesialis daging ayam, paha ayam, dan ceker ayam",
        "image": "https://maps.pasargedesolo.com/storage/stores/WfYvKCChsTb71RtbFDdzGgloCh9GIxAf.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/WfYvKCChsTb71RtbFDdzGgloCh9GIxAf_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/WfYvKCChsTb71RtbFDdzGgloCh9GIxAf.jpg",
          "https://maps.pasargedesolo.com/storage/locations/CLpW9JgOLVEXQKQ6xGi1l5KcZLi3JQT4Bmm4sfYx.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 565
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
        "nodeId": "n_9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Saifudin",
        "name": "Oprokan Ibu Saifudin",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 520,
        "y": 586,
        "lat": 438,
        "lng": 520,
        "description": "Oprokan Ibu Saifudin merupakan salah satu oprokan yang ada di Pasar Gedhe yang menyediakan spesialis tahu tempe dan sayuran, selain itu juga tersedia pare dalam bentuk sudah terpotong",
        "image": "https://maps.pasargedesolo.com/storage/stores/NVm0OR7D5KEzUET8Y5WT6xPHwY5lVpC9.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/NVm0OR7D5KEzUET8Y5WT6xPHwY5lVpC9_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/NVm0OR7D5KEzUET8Y5WT6xPHwY5lVpC9.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Tw0HNf67C78q82UaKdxVbaIknhQuX1UmG6T48SQz.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 585
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef44d92-3068-4faa-bb72-1a289e6cb64b",
        "nodeId": "n_9ef44d92-3068-4faa-bb72-1a289e6cb64b",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Ayam Potong Bu Tien",
        "name": "Ayam Potong Bu Tien",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 549,
        "y": 513,
        "lat": 511,
        "lng": 549,
        "description": "Ayam Potong Bu Tien merupakan salah satu kios los yang ada di Pasar Gedhe yang menyediakan spesialis ayam potong, hati ayam, ceker ayam, dan paha ayam",
        "image": "https://maps.pasargedesolo.com/storage/stores/7X9nTUOeiUgAKsYjts7R404WS7zxQZW6.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7X9nTUOeiUgAKsYjts7R404WS7zxQZW6_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7X9nTUOeiUgAKsYjts7R404WS7zxQZW6.jpg",
          "https://maps.pasargedesolo.com/storage/locations/abYadOQzSwX71A0uVqkZUbyusayhsrV1iiJmhyqO.jpg"
        ],
        "entries": [
          {
            "x": 549,
            "y": 526
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef450f3-ce3e-4c22-8642-65ad20c319a7",
        "nodeId": "n_9ef450f3-ce3e-4c22-8642-65ad20c319a7",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Tami",
        "name": "Oprokan Ibu Tami",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 519,
        "y": 397,
        "lat": 627,
        "lng": 519,
        "description": "Oprokan Ibu Tami merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis gendar pecel dan semar mendem",
        "image": "https://maps.pasargedesolo.com/storage/stores/WM9M8V25rkGJngKNrJi9X1L8Jd15XjjZ.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/WM9M8V25rkGJngKNrJi9X1L8Jd15XjjZ_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/WM9M8V25rkGJngKNrJi9X1L8Jd15XjjZ.jpg",
          "https://maps.pasargedesolo.com/storage/locations/vyaraQjOBk9SuNBP976GAjUkVhmncWLawVHvaUFl.jpg"
        ],
        "entries": [
          {
            "x": 524,
            "y": 395
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef44646-37b5-419e-a0f5-09f87e972e4b",
        "nodeId": "n_9ef44646-37b5-419e-a0f5-09f87e972e4b",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Warti Kelapa",
        "name": "Oprokan Ibu Warti Kelapa",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 520,
        "y": 360,
        "lat": 664,
        "lng": 520,
        "description": "Oprokan Ibu Warti Kelapa merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis kelapa utuh dan kelapa parut",
        "image": "https://maps.pasargedesolo.com/storage/stores/WJ8bOXKQlcvUAiaUWucJfbfPWGdFHd3b.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/WJ8bOXKQlcvUAiaUWucJfbfPWGdFHd3b_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/WJ8bOXKQlcvUAiaUWucJfbfPWGdFHd3b.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 362
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef44eea-56b1-4cb9-b731-6952972dcd07",
        "nodeId": "n_9ef44eea-56b1-4cb9-b731-6952972dcd07",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Lenjongan Bu Sum 2",
        "name": "Lenjongan Bu Sum 2",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 519,
        "y": 380,
        "lat": 644,
        "lng": 519,
        "description": "Lenjongan Bu Sum 2 merupakan cabang kedua jajanan pasar legendaris yang ada di Pasar Gedhe yang menjual spesialis aneka kue tradisional",
        "image": "https://maps.pasargedesolo.com/storage/stores/wAOWGkf4ucVn16D2aCpFUy1PsifJmmV5.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/wAOWGkf4ucVn16D2aCpFUy1PsifJmmV5_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/wAOWGkf4ucVn16D2aCpFUy1PsifJmmV5.jpg",
          "https://maps.pasargedesolo.com/storage/locations/b94V7sBJgusAXRkjPyJ37qZ30i9AULFddVmGX28p.jpg"
        ],
        "entries": [
          {
            "x": 524,
            "y": 380
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
        "nodeId": "n_9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Rubinem Lumpia",
        "name": "Oprokan Ibu Rubinem Lumpia",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 518,
        "y": 387,
        "lat": 637,
        "lng": 518,
        "description": "Oprokan Ibu Rubinem Lumpia merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis lumpia manteb",
        "image": "https://maps.pasargedesolo.com/storage/stores/wgd25YmxHU2H6qDvKHRCgkcLFppg2O8g.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/wgd25YmxHU2H6qDvKHRCgkcLFppg2O8g_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/wgd25YmxHU2H6qDvKHRCgkcLFppg2O8g.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 389
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef44def-47b7-447b-af18-ef27b5a462b1",
        "nodeId": "n_9ef44def-47b7-447b-af18-ef27b5a462b1",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Lina",
        "name": "Oprokan Ibu Lina",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 519,
        "y": 526,
        "lat": 498,
        "lng": 519,
        "description": "Oprokan Ibu Lina merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis karak dan bawang lanang",
        "image": "https://maps.pasargedesolo.com/storage/stores/Lj0pxNUC6B5tgSOphtSJSxLkFbDNwSYa.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Lj0pxNUC6B5tgSOphtSJSxLkFbDNwSYa_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Lj0pxNUC6B5tgSOphtSJSxLkFbDNwSYa.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 524
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef45303-39bf-42e7-b9bf-17e2e74ea89f",
        "nodeId": "n_9ef45303-39bf-42e7-b9bf-17e2e74ea89f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko 37",
        "name": "Toko 37",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 763,
        "y": 750,
        "lat": 274,
        "lng": 763,
        "description": "Toko 37 merupakan kios yang ada di Pasar Gedhe yang menyediakan beragam cemilan grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/haCgThAacONqWS2dHsQDO04y798olrEJ.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/haCgThAacONqWS2dHsQDO04y798olrEJ_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/haCgThAacONqWS2dHsQDO04y798olrEJ.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/M539ZsJPDzTc1XvdOjEhbBMxVxaBSJOoBSqChDzf.jpg"
        ],
        "entries": [
          {
            "x": 777,
            "y": 753
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
        "nodeId": "n_9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oleh Oleh Bu Saji 3",
        "name": "Kios Oleh Oleh Bu Saji 3",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 481,
        "y": 386,
        "lat": 638,
        "lng": 481,
        "description": "Oleh-Oleh Khas Solo Bu Saji 3 adalah kios yang terletak di dalam Pasar Gedhe Solo, dikenal sebagai salah satu tempat terbaik untuk mencari oleh-oleh khas Solo. Kios ini menawarkan beragam produk tradisional seperti intip madu, karak bawang, bakpia kering, mete goreng, abon halus, lanting, bagelan, roti jadul, serta berbagai camilan khas lainnya.",
        "image": "https://maps.pasargedesolo.com/storage/stores/jzEjU2d4Yq15LxLeFFy44bc9UG4wIzrQ.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/jzEjU2d4Yq15LxLeFFy44bc9UG4wIzrQ_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/jzEjU2d4Yq15LxLeFFy44bc9UG4wIzrQ.jpg",
          "https://maps.pasargedesolo.com/storage/locations/isTs8w1xCoijIGDTrmwzZGxaBr7x2xUBPbv8F2uJ.jpg"
        ],
        "entries": [
          {
            "x": 493,
            "y": 390
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4616e-3d65-4194-905f-35e2387dd1aa",
        "nodeId": "n_9ef4616e-3d65-4194-905f-35e2387dd1aa",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Ayam Potong Bu Tipuk",
        "name": "Ayam Potong Bu Tipuk",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 521,
        "y": 463,
        "lat": 561,
        "lng": 521,
        "description": "Ayam Potong Bu Tipuk merupakan oprokan yang ada di Pasar Gedhe yang menyediakan berbagai jenis ayam seperti ayam merah, ayam jantan dan ayam karkas. Tersedia beragam pilihan bagian tubuh ayam serta layanan fillet untuk bagian dada atau paha sesuai permintaan",
        "image": "https://maps.pasargedesolo.com/storage/stores/f8DtzphuoupDgM1mgAAgx4IUexce0sWa.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/f8DtzphuoupDgM1mgAAgx4IUexce0sWa_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/f8DtzphuoupDgM1mgAAgx4IUexce0sWa.jpg",
          "https://maps.pasargedesolo.com/storage/locations/5qDvfAVJ4CbDFlID7HtIvpfgSHH3sw6J0Jkie2C8.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 466
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef45d8e-608d-422e-9950-1a6919cd762b",
        "nodeId": "n_9ef45d8e-608d-422e-9950-1a6919cd762b",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Puji",
        "name": "Oprokan Ibu Puji",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 520,
        "y": 444,
        "lat": 580,
        "lng": 520,
        "description": "Oprokan Ibu Puji merupakan salah satu oprokan yang ada di Pasar Gedhe yang menjual spesialis ikan bandeng segar dan ikan bandeng presto",
        "image": "https://maps.pasargedesolo.com/storage/stores/U26lcPNfS7iQl9hLZBILQiuKZf2FQmD8.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/U26lcPNfS7iQl9hLZBILQiuKZf2FQmD8_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/U26lcPNfS7iQl9hLZBILQiuKZf2FQmD8.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Pwh248dMEqfpOvEWCnxIosuW8RAx16rZM8hEpZwF.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 443
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef45662-4634-4dd1-a62d-8639afdfa1c8",
        "nodeId": "n_9ef45662-4634-4dd1-a62d-8639afdfa1c8",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Warti Ayam Potong 1",
        "name": "Oprokan Ibu Warti Ayam Potong 1",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 521,
        "y": 404,
        "lat": 620,
        "lng": 521,
        "description": "Oprokan Ibu Warti Ayam Potong 1 merupakan oprokan yang ada di Pasar Gedhe yang menyediakan spesialis ayam potong dan ayam utuh",
        "image": "https://maps.pasargedesolo.com/storage/stores/WZmxYCrJUaWi8cyChUD7clMigANkGu7G.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/WZmxYCrJUaWi8cyChUD7clMigANkGu7G_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/WZmxYCrJUaWi8cyChUD7clMigANkGu7G.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 404
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef459f1-df1c-44a5-ac1b-7a294009467a",
        "nodeId": "n_9ef459f1-df1c-44a5-ac1b-7a294009467a",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Harini",
        "name": "Oprokan Ibu Harini",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 520,
        "y": 417,
        "lat": 607,
        "lng": 520,
        "description": "Oprokan Ibu Harini merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis sambal pecal, kering tempa dan kering kentang",
        "image": "https://maps.pasargedesolo.com/storage/stores/ViBDFuIirVJTSGYhodGYjklhIUr0LX4E.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ViBDFuIirVJTSGYhodGYjklhIUr0LX4E_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ViBDFuIirVJTSGYhodGYjklhIUr0LX4E.jpg",
          "https://maps.pasargedesolo.com/storage/locations/BFjgL2ynTKSeksdsusPpOpVUbLSuTK1EQuLfxpnP.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 417
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef466e9-6958-46f7-9990-acb2e02f98e9",
        "nodeId": "n_9ef466e9-6958-46f7-9990-acb2e02f98e9",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Tinah",
        "name": "Oprokan Ibu Tinah",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 519,
        "y": 499,
        "lat": 525,
        "lng": 519,
        "description": "Oprokan Ibu Tinah merupakan oprokan yang ada di Pasar Gedhe yang menyediakan spesialis tahu putih, ikan bandeng segar dan ikan bandeng presto",
        "image": "https://maps.pasargedesolo.com/storage/stores/bpm1zdQSbiLwOhRgI24G5YXq0KXiM8lk.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/bpm1zdQSbiLwOhRgI24G5YXq0KXiM8lk_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/bpm1zdQSbiLwOhRgI24G5YXq0KXiM8lk.jpg",
          "https://maps.pasargedesolo.com/storage/locations/w60EkJwabJ6ywcsOfL6triJgtaXlbQ1unZleA65k.jpg"
        ],
        "entries": [
          {
            "x": 526,
            "y": 503
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef499de-48da-431c-9353-4aeb47b50a15",
        "nodeId": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oleh-Oleh Haryanto",
        "name": "Kios Oleh-Oleh Haryanto",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 320,
        "y": 253,
        "lat": 771,
        "lng": 320,
        "description": "Kios Oleh-Oleh Haryanto adalah toko oleh-oleh yang berada di Pasar Gedhe Pintu Utama yang menjual spesialis beragam camilan dan makanan khas Solo yang bisa dijadikan buah tangan",
        "image": "https://maps.pasargedesolo.com/storage/stores/4SOysnKnmL6y8n8ZcK4pFawV5tPllaUv.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/4SOysnKnmL6y8n8ZcK4pFawV5tPllaUv_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/4SOysnKnmL6y8n8ZcK4pFawV5tPllaUv.jpg",
          "https://maps.pasargedesolo.com/storage/locations/xhPsqaZZQmUI0HrmKMZiB0jQe5QpH6qQ5x1YJddM.jpg",
          "https://maps.pasargedesolo.com/storage/locations/l8ZnHPYPV0011wyP7JNcgXnNJcaYK5rrazY2xOlC.jpg"
        ],
        "entries": [
          {
            "x": 319,
            "y": 250
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef496b8-20fc-4b8c-a8d0-497f94d9212b",
        "nodeId": "n_9ef496b8-20fc-4b8c-a8d0-497f94d9212b",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Tangga lt 1.1",
        "name": "Tangga lt 1.1",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 332,
        "y": 273,
        "lat": 751,
        "lng": 332,
        "description": "Kios Tangga lt 1.1 di Pasar Gedhe Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 332,
            "y": 273
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
        "nodeId": "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Tangga lt 1.3",
        "name": "Tangga lt 1.3",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 320,
        "y": 870,
        "lat": 154,
        "lng": 320,
        "description": "Kios Tangga lt 1.3 di Pasar Gedhe Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 320,
            "y": 870
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef49a6b-7eea-4afa-b6db-8f3155843e27",
        "nodeId": "n_9ef49a6b-7eea-4afa-b6db-8f3155843e27",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Tangga lt 1.4",
        "name": "Tangga lt 1.4",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 488,
        "y": 163,
        "lat": 861,
        "lng": 488,
        "description": "Kios Tangga lt 1.4 di Pasar Gedhe Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 488,
            "y": 163
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9f0e1ea7-663f-4256-8fae-b551329c34d5",
        "nodeId": "n_9f0e1ea7-663f-4256-8fae-b551329c34d5",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bu Narti",
        "name": "Oprokan Bu Narti",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 520,
        "y": 790,
        "lat": 234,
        "lng": 520,
        "description": "Oprokan Bu Narti merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis kolang kaling, cendol, cincau dan nata de coco",
        "image": "https://maps.pasargedesolo.com/storage/stores/t8GGxnLB6PbWzkathvQ5ie7t2hqCKgvh.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/t8GGxnLB6PbWzkathvQ5ie7t2hqCKgvh_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/t8GGxnLB6PbWzkathvQ5ie7t2hqCKgvh.jpg",
          "https://maps.pasargedesolo.com/storage/locations/cisWfSDLyJT6XY0KGOvC6ULmvZ3QzKvBOcirDa28.jpg"
        ],
        "entries": [
          {
            "x": 527,
            "y": 798
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef49b56-c410-4339-a1e8-92fe2228b6e1",
        "nodeId": "n_9ef49b56-c410-4339-a1e8-92fe2228b6e1",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Tangga lt 1.5",
        "name": "Tangga lt 1.5",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 307,
        "y": 513,
        "lat": 511,
        "lng": 307,
        "description": "Kios Tangga lt 1.5 di Pasar Gedhe Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 307,
            "y": 513
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef49846-fc66-442b-b42a-2c15f7eb65dc",
        "nodeId": "n_9ef49846-fc66-442b-b42a-2c15f7eb65dc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Tangga lt 1.2",
        "name": "Tangga lt 1.2",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 352,
        "y": 212,
        "lat": 812,
        "lng": 352,
        "description": "Kios Tangga lt 1.2 di Pasar Gedhe Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 352,
            "y": 212
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef4a191-73b1-4fc3-88ed-f3648ab9aaee",
        "nodeId": "n_9ef4a191-73b1-4fc3-88ed-f3648ab9aaee",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Buah Mulia",
        "name": "Toko Buah Mulia",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 404,
        "y": 126,
        "lat": 898,
        "lng": 404,
        "description": "Toko Buah Mulia merupakan kios buah suplier di Pasar Gedhe yang menyediakan khusus jeruk peras",
        "image": "https://maps.pasargedesolo.com/storage/stores/9ODr82t0zWcW9cnS32cVIwSPvF6HJsaY.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/9ODr82t0zWcW9cnS32cVIwSPvF6HJsaY_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/9ODr82t0zWcW9cnS32cVIwSPvF6HJsaY.jpeg"
        ],
        "entries": [
          {
            "x": 401,
            "y": 112
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4a452-957a-4337-a0aa-d820c3ca2585",
        "nodeId": "n_9ef4a452-957a-4337-a0aa-d820c3ca2585",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Dawet Telasih & Gempol Pleret Mbak Nanik",
        "name": "Dawet Telasih & Gempol Pleret Mbak Nanik",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 316,
        "y": 229,
        "lat": 795,
        "lng": 316,
        "description": "Dawet Telasih & Gempol Pleret Mbak Nanik Pasar Gedhe adalah kuliner legendaris yang berada di Pintu Utama Pasar Gedhe yang terkenal dengan menu spesialnya es dawet telasih dan gempol pleret yang memiliki cita rasa yang segar dan autentik",
        "image": "https://maps.pasargedesolo.com/storage/stores/VSj6rghFP2BZiKCO9gABhIGEl0FVauL1.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/VSj6rghFP2BZiKCO9gABhIGEl0FVauL1_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/VSj6rghFP2BZiKCO9gABhIGEl0FVauL1.jpg",
          "https://maps.pasargedesolo.com/storage/locations/X9Cyo1knxUM0oxH7w76CAiuMDBiolPgDwxQnAOpb.jpg"
        ],
        "entries": [
          {
            "x": 315,
            "y": 231
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4aac7-a86f-4b4f-b18f-1959a5fe97c6",
        "nodeId": "n_9ef4aac7-a86f-4b4f-b18f-1959a5fe97c6",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bapak Wahyudi",
        "name": "Oprokan Bapak Wahyudi",
        "category": "perkakas",
        "categoryLabel": "Perkakas Rumah",
        "icon": "🍳",
        "color": "#795548",
        "x": 288,
        "y": 232,
        "lat": 792,
        "lng": 288,
        "description": "Oprokan Bapak Wahyudi adalah oprokan yang ada di pintu utama Pasar Gedhe yang menyediakan spesialis pisau dengan berbagai macam ukuran",
        "image": "https://maps.pasargedesolo.com/storage/stores/5okMhaNIcPGsk1cmeqNKGrvnAbDqD4PB.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/5okMhaNIcPGsk1cmeqNKGrvnAbDqD4PB_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/5okMhaNIcPGsk1cmeqNKGrvnAbDqD4PB.jpg",
          "https://maps.pasargedesolo.com/storage/locations/7gT9eKY9v2CunbdEFHEgbw5eWnKVzM8ZtC23OKhb.jpg"
        ],
        "entries": [
          {
            "x": 285,
            "y": 230
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef49cc2-bd5a-4385-829b-aff6d038a441",
        "nodeId": "n_9ef49cc2-bd5a-4385-829b-aff6d038a441",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Gethuk Lenjongan Bu Rubi",
        "name": "Gethuk Lenjongan Bu Rubi",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 324,
        "y": 218,
        "lat": 806,
        "lng": 324,
        "description": "Gethuk Lenjongan Bu Rubi adalah salah satu jajanan tradisional yang populer di Pasar Gedhe Pintu Utama yang menjual aneka jenis jajanan pasar yang disajikan bersama parutan kepala dengan siraman gula cair merah menciptakan rasa yang manis, gurih dan kenyal.",
        "image": "https://maps.pasargedesolo.com/storage/stores/kvcDlLn0l1pM0T9mdGG4s8OKPRcgXCvz.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/kvcDlLn0l1pM0T9mdGG4s8OKPRcgXCvz_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/kvcDlLn0l1pM0T9mdGG4s8OKPRcgXCvz.jpg"
        ],
        "entries": [
          {
            "x": 323,
            "y": 230
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef42166-1220-46d8-a6fd-de5f668212fa",
        "nodeId": "n_9ef42166-1220-46d8-a6fd-de5f668212fa",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Fanny Snack",
        "name": "Fanny Snack",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 341,
        "y": 897,
        "lat": 127,
        "lng": 341,
        "description": "Fanny Snack adalah salah satu kios yang ada di Pasar Gedhe Pintu Utara yang menjual aneka makanan ringan dan aneka kripik",
        "image": "https://maps.pasargedesolo.com/storage/stores/fL4XKCxr3h14msGdupT8WmaE08BCNBAs.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/fL4XKCxr3h14msGdupT8WmaE08BCNBAs_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/fL4XKCxr3h14msGdupT8WmaE08BCNBAs.jpg",
          "https://maps.pasargedesolo.com/storage/locations/swbv0hBYiBCIVnBxuWPg8NwJRFT0n56X7DDF6DUj.jpg"
        ],
        "entries": [
          {
            "x": 345,
            "y": 913
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef5fb86-0e86-4a92-a670-4468621808a2",
        "nodeId": "n_9ef5fb86-0e86-4a92-a670-4468621808a2",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Mbak Yayuk",
        "name": "Kios Mbak Yayuk",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 627,
        "y": 570,
        "lat": 454,
        "lng": 627,
        "description": "Kios Mbak Yayuk merupakan salah satu kios yang ada di Pasar Gedhe yang menyediakan spesialis rebung dan minyak goreng",
        "image": "https://maps.pasargedesolo.com/storage/stores/zsO6yTr3mTqxBzpZUw6MfPdTbK8SiIMY.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/zsO6yTr3mTqxBzpZUw6MfPdTbK8SiIMY_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/zsO6yTr3mTqxBzpZUw6MfPdTbK8SiIMY.jpg",
          "https://maps.pasargedesolo.com/storage/locations/F5A1j5SK4ibj8pY4JJw0evlclxvQZI7w9qGQqleS.jpg"
        ],
        "entries": [
          {
            "x": 631,
            "y": 583
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
        "nodeId": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Tangga lt 1.6",
        "name": "Tangga lt 1.6",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 479,
        "y": 859,
        "lat": 165,
        "lng": 479,
        "description": "Kios Tangga lt 1.6 di Pasar Gedhe Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 479,
            "y": 859
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9f0e8d43-d4ad-4c21-88ae-573266307668",
        "nodeId": "n_9f0e8d43-d4ad-4c21-88ae-573266307668",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Jadah Bakar Tasik Pasar Gede",
        "name": "Jadah Bakar Tasik Pasar Gedhe",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 254,
        "y": 253,
        "lat": 771,
        "lng": 254,
        "description": "Jadah Bakar Tasik Pasar Gedhe merupakan jajanan tradisional yang terletak di depan pintu utama Pasar Gedhe yang menjual spesialis Jadah Bakar",
        "image": "https://maps.pasargedesolo.com/storage/stores/IMvsKkBDDgK3A7EEWfjePhMu2AFC9REv.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/IMvsKkBDDgK3A7EEWfjePhMu2AFC9REv_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/IMvsKkBDDgK3A7EEWfjePhMu2AFC9REv.jpg"
        ],
        "entries": [
          {
            "x": 245,
            "y": 261
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0e9fd6-0856-4523-b0a5-61a2af95607b",
        "nodeId": "n_9f0e9fd6-0856-4523-b0a5-61a2af95607b",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Semar Mendem Bu Yuyun",
        "name": "Semar Mendem Bu Yuyun",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 726,
        "y": 326,
        "lat": 698,
        "lng": 726,
        "description": "Semar Mendem Bu Yuyun merupakan oprokan yang ada di Pasar Gedhe yang menjual kuliner khas Solo yaitu spesialis semar mendem",
        "image": "https://maps.pasargedesolo.com/storage/stores/Ju7ExgctWMRKkxBG9IcvDZgGI0dGy33v.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Ju7ExgctWMRKkxBG9IcvDZgGI0dGy33v_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Ju7ExgctWMRKkxBG9IcvDZgGI0dGy33v.jpg",
          "https://maps.pasargedesolo.com/storage/locations/nDmdBhRjZmh9Qu1V1NhyXTwf8UXXdaUM2ELmcF2r.jpg"
        ],
        "entries": [
          {
            "x": 722,
            "y": 322
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3283-3138-4515-ad44-0248a14e28ca",
        "nodeId": "n_9eec3283-3138-4515-ad44-0248a14e28ca",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Jadah Blondo Mbak Siska",
        "name": "Jadah Blondo Mbak Siska",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 561,
        "y": 725,
        "lat": 299,
        "lng": 561,
        "description": "Jadah Blondo Mbak Siska adalah jajanan tradisional khas Solo yang dapat ditemukan di Pasar Gedhe, tepatnya di samping Dawet Telasih Bu Dermi . Jadah Blondo merupakan olahan ketan yang dipadukan dengan blondo, yaitu ampas kelapa dari proses pembuatan minyak kelapa yang memiliki rasa gurih dan manis . Kombinasi rasa dan tekstur ini menjadikan Jadah Blondo Mbak Siska sebagai camilan favorit bagi pengunjung pasar yang ingin menikmati cita rasa khas Solo.",
        "image": "https://maps.pasargedesolo.com/storage/stores/zwYERLG3iQIQGbsUxhTHHSJtFmF64Ktw.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/zwYERLG3iQIQGbsUxhTHHSJtFmF64Ktw_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/zwYERLG3iQIQGbsUxhTHHSJtFmF64Ktw.jpg",
          "https://maps.pasargedesolo.com/storage/locations/KjwH3AkCRkRhGlhO1BCHnbClixyAYQnzt5BZGdkU.png"
        ],
        "entries": [
          {
            "x": 559,
            "y": 741
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0e814a-1ae9-4faa-8e37-4f4abff56408",
        "nodeId": "n_9f0e814a-1ae9-4faa-8e37-4f4abff56408",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Ayam Panggang Bu Kas",
        "name": "Ayam Panggang Bu Kas",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 257,
        "y": 852,
        "lat": 172,
        "lng": 257,
        "description": "Ayam Panggang Bu Kas adalah salah satu kuliner di Pasar Gedhe yang menjual spesialis ayam panggang khas klaten",
        "image": "https://maps.pasargedesolo.com/storage/stores/lfUmbxZjPABRHd61zsYGis6Vxdbmw3Rm.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/lfUmbxZjPABRHd61zsYGis6Vxdbmw3Rm_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/lfUmbxZjPABRHd61zsYGis6Vxdbmw3Rm.jpg",
          "https://maps.pasargedesolo.com/storage/locations/iuIxWFxDbn1IGKRxAU0vruLHJqMazxuqFyh5gUvz.jpg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 856
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef436d9-2b98-4722-b3a0-9a655b7b1439",
        "nodeId": "n_9ef436d9-2b98-4722-b3a0-9a655b7b1439",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Intip Boniyem",
        "name": "Intip Boniyem",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 475,
        "y": 896,
        "lat": 128,
        "lng": 475,
        "description": "Intip Boniyem adalah camilan tradisional yang telah menjadi ikon kuliner sejak tahun 1945 yang berada di Pasar Gedhe Pintu Utara yang dikenal dengan sajian spesialis intip goreng yang terbuat dari kerak nasi yang dikeringkan lalu digoreng hingga renyah dan dilapisi lelehan gula jawa",
        "image": "https://maps.pasargedesolo.com/storage/stores/pwSjQMFv6srjJvywxCgThdbHRSN6XcSm.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/pwSjQMFv6srjJvywxCgThdbHRSN6XcSm_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/pwSjQMFv6srjJvywxCgThdbHRSN6XcSm.jpg",
          "https://maps.pasargedesolo.com/storage/locations/FtG7cft8rFSZQVro2m8LbyN2GrVCcu0ONrogQ1Jd.jpg"
        ],
        "entries": [
          {
            "x": 474,
            "y": 914
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0e78a2-57d8-4b14-8bb9-12fb32d71c20",
        "nodeId": "n_9f0e78a2-57d8-4b14-8bb9-12fb32d71c20",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Babi Pikul Bu Sirat",
        "name": "Babi Pikul Bu Sirat",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 256,
        "y": 861,
        "lat": 163,
        "lng": 256,
        "description": "Babi Pikul Bu Sirat adalah salah satu kuliner legendaris di Solo yang terkenal dengan sajian babi kuah khasnya. Hidangan ini biasanya terdiri dari potongan daging babi yang disajikan dengan kuah gurih, lengkap dengan sambal",
        "image": "https://maps.pasargedesolo.com/storage/stores/RX3el1bml2DU2Wry84u1jrV876z2ZGBF.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/RX3el1bml2DU2Wry84u1jrV876z2ZGBF_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/RX3el1bml2DU2Wry84u1jrV876z2ZGBF.jpg"
        ],
        "entries": [
          {
            "x": 248,
            "y": 863
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8b11-abd1-451f-a001-9366d9525f8c",
        "nodeId": "n_9eec8b11-abd1-451f-a001-9366d9525f8c",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bu Rubinem",
        "name": "Oprokan Bu Rubinem",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 529,
        "y": 284,
        "lat": 740,
        "lng": 529,
        "description": "Oprokan Bu Rubinem merupkan oprokan yang ada di Pasar Gedhe yang menjual spesialis sayuran untuk lauk, gula batu dan wedang rempah",
        "image": "https://maps.pasargedesolo.com/storage/stores/1cWyvoGXVEORiV1Lk7Epng5581pOFimg.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/1cWyvoGXVEORiV1Lk7Epng5581pOFimg_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/1cWyvoGXVEORiV1Lk7Epng5581pOFimg.jpg",
          "https://maps.pasargedesolo.com/storage/locations/wV2B4Jdu4MoFhXMbQQj024y52w3xkhhX4rSsB70s.jpg"
        ],
        "entries": [
          {
            "x": 536,
            "y": 283
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
        "nodeId": "n_9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Wiwik",
        "name": "Kios Bu Wiwik",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 587,
        "y": 334,
        "lat": 690,
        "lng": 587,
        "description": "Kios Bu Wiwik merupakan salah satu kios yang ada di Pasar Gedhe yang menyediakan spesialis kerupuk rambak dan racikan teh",
        "image": "https://maps.pasargedesolo.com/storage/stores/CtAmIyrcxShoxtJUyYAVZEKHccH2vjsR.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/CtAmIyrcxShoxtJUyYAVZEKHccH2vjsR_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/CtAmIyrcxShoxtJUyYAVZEKHccH2vjsR.jpg"
        ],
        "entries": [
          {
            "x": 587,
            "y": 322
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4209c-ee9c-4f29-87d8-7b5565dcc79b",
        "nodeId": "n_9ef4209c-ee9c-4f29-87d8-7b5565dcc79b",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kopi Podjok",
        "name": "Kopi Podjok",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 267,
        "y": 869,
        "lat": 155,
        "lng": 267,
        "description": "Kopi Podjok adalah toko kopi legendaris di Pasar Gedhe Solo yang telah berdiri sejak 1947, menawarkan berbagai jenis biji kopi lokal dan impor, serta minuman kopi seduh langsung di tempat.",
        "image": "https://maps.pasargedesolo.com/storage/stores/qeY8i3F512AhUGf8z0b7svrafRUPgDKA.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/qeY8i3F512AhUGf8z0b7svrafRUPgDKA_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/qeY8i3F512AhUGf8z0b7svrafRUPgDKA.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/PWprPT5L6B6Rnw5MhUe6Mo8ZITxOjYQGuW3M9nQo.jpg"
        ],
        "entries": [
          {
            "x": 261,
            "y": 879
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef437a5-4b9b-4353-b1c5-6774c04a308f",
        "nodeId": "n_9ef437a5-4b9b-4353-b1c5-6774c04a308f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Hasil Baru",
        "name": "Toko Hasil Baru",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 576,
        "y": 896,
        "lat": 128,
        "lng": 576,
        "description": "Toko Hasil Baru adalah salah satu toko yang ada di Pasar Gedhe Pintu Utara yang menjual keperluan sehari-hari atau sembako",
        "image": "https://maps.pasargedesolo.com/storage/stores/RnZsbdfG52pT3rUrH9hOL1BY8bIhAJDP.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/RnZsbdfG52pT3rUrH9hOL1BY8bIhAJDP_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/RnZsbdfG52pT3rUrH9hOL1BY8bIhAJDP.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/OyO8xiVSCW9rqS1jdgAVzjwO4URKUZVgehKwmt5F.jpg"
        ],
        "entries": [
          {
            "x": 583,
            "y": 914
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef65160-ea83-4730-b212-f74ab78979dc",
        "nodeId": "n_9ef65160-ea83-4730-b212-f74ab78979dc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Bu Slamet 1",
        "name": "Toko Bu Slamet 1",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 461,
        "y": 641,
        "lat": 383,
        "lng": 461,
        "description": "Toko Bu Slamet 1 adalah salah satu kios yang ada di Pasar Gedhe yang menjual khusus sayur-sayuran yang variannya cukup komplit dan aneka kebutuhan bumbu dapur",
        "image": "https://maps.pasargedesolo.com/storage/stores/meeXLxjvkGN7XuEONCA9NT8guIcph651.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/meeXLxjvkGN7XuEONCA9NT8guIcph651_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/meeXLxjvkGN7XuEONCA9NT8guIcph651.jpg",
          "https://maps.pasargedesolo.com/storage/locations/8JV27suqYDRxGuY96fvyiotK0lMKlnyU3aRLu1TL.jpg"
        ],
        "entries": [
          {
            "x": 465,
            "y": 657
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0e2e1c-5615-407f-855b-5d19ec21fb83",
        "nodeId": "n_9f0e2e1c-5615-407f-855b-5d19ec21fb83",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Pak Widodo",
        "name": "Oprokan Pak Widodo",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 511,
        "y": 777,
        "lat": 247,
        "lng": 511,
        "description": "Oprokan Pak Widodo merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis oleh-oleh khas Solo seperti racikan teh, karak solo mentah, dan rengginan",
        "image": "https://maps.pasargedesolo.com/storage/stores/32QTvCR57zGfgIPjDGnKwZL7iUYv9Tna.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/32QTvCR57zGfgIPjDGnKwZL7iUYv9Tna_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/32QTvCR57zGfgIPjDGnKwZL7iUYv9Tna.jpg",
          "https://maps.pasargedesolo.com/storage/locations/YMm0E5Jap89YMtpw5a85ZR2rtLnNTC2IpRmfqPqr.jpg"
        ],
        "entries": [
          {
            "x": 503,
            "y": 780
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef658a0-3763-425d-a6ff-d1c872f18c07",
        "nodeId": "n_9ef658a0-3763-425d-a6ff-d1c872f18c07",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Los Bu Warti Kelapa",
        "name": "Los Bu Warti Kelapa",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 570,
        "y": 450,
        "lat": 574,
        "lng": 570,
        "description": "Los Bu Warti Kelapa merupakan los yang ada di Pasar Gedhe yang menyediakan spesialis kelapa dan parutan kelapa",
        "image": "https://maps.pasargedesolo.com/storage/stores/TazswmOc3ItxmyoYuxYWZlhl018b7Voj.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/TazswmOc3ItxmyoYuxYWZlhl018b7Voj_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/TazswmOc3ItxmyoYuxYWZlhl018b7Voj.jpg"
        ],
        "entries": [
          {
            "x": 571,
            "y": 439
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
        "nodeId": "n_9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Endah",
        "name": "Oprokan Ibu Endah",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 309,
        "y": 217,
        "lat": 807,
        "lng": 309,
        "description": "Oprokan Ibu Endah merupakan oprokan yang ada di pintu utama Pasar Gedhe yang menyediakan beragam jenis cemilan kering khas Solo seperti intip, peyek teri dan racikan teh Solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/5OFUFgvuKq1gerG70xh62xqZ8I5wMTFh.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/5OFUFgvuKq1gerG70xh62xqZ8I5wMTFh_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/5OFUFgvuKq1gerG70xh62xqZ8I5wMTFh.jpg"
        ],
        "entries": [
          {
            "x": 308,
            "y": 230
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
        "nodeId": "n_9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Ni",
        "name": "Kios Bu Ni",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 652,
        "y": 269,
        "lat": 755,
        "lng": 652,
        "description": "Kios Bu Ni merupakan salah satu kios yang ada di Pasar Gedhe yang menjual spesialis buah kesemek dan cemilan oleh-oleh khas Solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/nYVYGajeHXKxSuygDSSVA97eYo6Vw8gD.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/nYVYGajeHXKxSuygDSSVA97eYo6Vw8gD_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/nYVYGajeHXKxSuygDSSVA97eYo6Vw8gD.jpg",
          "https://maps.pasargedesolo.com/storage/locations/D6GPIyLCooDlejGLoSip9XBk4DqgHD0RxVXfDFoz.jpg"
        ],
        "entries": [
          {
            "x": 651,
            "y": 263
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f002543-5421-486d-a871-3acf00a391c4",
        "nodeId": "n_9f002543-5421-486d-a871-3acf00a391c4",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Sahabat",
        "name": "Toko Sahabat",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 704,
        "y": 898,
        "lat": 126,
        "lng": 704,
        "description": "Toko Sahabat adalah toko yang menjual buah musiman seperti jeruk secara grosir atau kiloan dan kelapa atau degan siap minum",
        "image": "https://maps.pasargedesolo.com/storage/stores/4Y6KqyuH4RCpZz2ZcgGYoFRvoC5HUYxB.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/4Y6KqyuH4RCpZz2ZcgGYoFRvoC5HUYxB_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/4Y6KqyuH4RCpZz2ZcgGYoFRvoC5HUYxB.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/5CXUhY6neXgnUiKOvdX05lJZVNo4STFX8FcwmU3r.jpg"
        ],
        "entries": [
          {
            "x": 702,
            "y": 913
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef683e2-3e61-4603-abc8-a04cd07c95aa",
        "nodeId": "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Bu Nanik Pakaian",
        "name": "Bu Nanik Pakaian",
        "category": "tekstil",
        "categoryLabel": "Pakaian & Tekstil",
        "icon": "👕",
        "color": "#16A085",
        "x": 487,
        "y": 223,
        "lat": 801,
        "lng": 487,
        "description": "Bu Nanik Pakaian merupakan kios yang ada di Pasar Gedhe yang menyediakan pakaian",
        "image": "https://maps.pasargedesolo.com/storage/stores/JhDabGMeJ2beRiVHL63Otdns2hFtUIqI.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/JhDabGMeJ2beRiVHL63Otdns2hFtUIqI_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/JhDabGMeJ2beRiVHL63Otdns2hFtUIqI.jpg",
          "https://maps.pasargedesolo.com/storage/locations/1mkOyqwgrM5NcW4b8Mx7qa7lueyEDRLJg0XzYoxH.jpg"
        ],
        "entries": [
          {
            "x": 483,
            "y": 235
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5eab-2e3d-4bbe-8c13-8e8a838b3440",
        "nodeId": "n_9eec5eab-2e3d-4bbe-8c13-8e8a838b3440",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oprokan Agus Sriyanto",
        "name": "Kios Oprokan Agus Sriyanto",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 389,
        "y": 225,
        "lat": 799,
        "lng": 389,
        "description": "Kios Oprokan Agus Sriyanto adalah salah satu kios oprokan yang ada di Pasar Gedhe Pintu Utama yang menjual khusus buah mangga harum manis dan aneka buah lainnya",
        "image": "https://maps.pasargedesolo.com/storage/stores/aPTdQhQNNoovYELBa33QV9uZANjlivRy.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/aPTdQhQNNoovYELBa33QV9uZANjlivRy_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/aPTdQhQNNoovYELBa33QV9uZANjlivRy.jpg",
          "https://maps.pasargedesolo.com/storage/locations/LPcifXEDDwvOOYHAoPGrknxKNDv2VVw5goFbZPtx.jpg"
        ],
        "entries": [
          {
            "x": 368,
            "y": 223
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec40d9-de2f-49c4-931d-cf7743d23fcf",
        "nodeId": "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Es Dawet Telasih Nganeni",
        "name": "Es Dawet Telasih Nganeni",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 671,
        "y": 221,
        "lat": 803,
        "lng": 671,
        "description": "Es Dawet Telasih Ngangeni adalah warung legendaris di Pasar Gedhe Solo yang menyajikan dawet telasih khas dengan cendol kenyal, biji selasih, ketan hitam, tape ketan, bubur sumsum, nangka, dan siraman gula merah cair.",
        "image": "https://maps.pasargedesolo.com/storage/stores/eg5oNoDGv0TKQzWBjIHDlt03xwd6hERQ.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/eg5oNoDGv0TKQzWBjIHDlt03xwd6hERQ_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/eg5oNoDGv0TKQzWBjIHDlt03xwd6hERQ.jpg",
          "https://maps.pasargedesolo.com/storage/locations/BEDWXCP3SE7sZKnsx0coHKsKnimQNdQbiCUumbF4.jpg"
        ],
        "entries": [
          {
            "x": 678,
            "y": 222
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef68859-dde3-4be0-8584-b6cfb0d547cf",
        "nodeId": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios UD Hasil Buah Sutrisno BG",
        "name": "Kios UD Hasil Buah Sutrisno BG",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 465,
        "y": 270,
        "lat": 754,
        "lng": 465,
        "description": "Kios UD Hasil Buah Sutrisno BG merupakan kios yang ada di Pasar Gedhe yang menjual khusus buah jeruk grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/37B7nYi3eplNtbLUetUg6tYQQstQGR6L.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/37B7nYi3eplNtbLUetUg6tYQQstQGR6L_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/37B7nYi3eplNtbLUetUg6tYQQstQGR6L.jpg",
          "https://maps.pasargedesolo.com/storage/locations/4hev0AKsD0yQQWwBPOz5lLMz2B74smcZteQKE4Mz.jpg"
        ],
        "entries": [
          {
            "x": 463,
            "y": 263
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef65e28-b53c-4832-8d7f-577191b66c7d",
        "nodeId": "n_9ef65e28-b53c-4832-8d7f-577191b66c7d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oleh Oleh Bu Siti",
        "name": "Kios Oleh Oleh Bu Siti",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 559,
        "y": 219,
        "lat": 805,
        "lng": 559,
        "description": "Kios Oleh Oleh Bu Siti adalah kios yang berada di Pasar Gedhe yang menjual spesialis oleh-oleh khas Solo seperti intip, rambak, dan racikan teh selain oleh-oleh khas Solo juga tersedia beragam jenis gerabah",
        "image": "https://maps.pasargedesolo.com/storage/stores/NQgGiZ0iAeNSE6Nph7gBUnZ6dbxizR8t.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/NQgGiZ0iAeNSE6Nph7gBUnZ6dbxizR8t_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/NQgGiZ0iAeNSE6Nph7gBUnZ6dbxizR8t.jpeg"
        ],
        "entries": [
          {
            "x": 549,
            "y": 224
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4ab02-c883-4250-836f-6045b967b4a7",
        "nodeId": "n_9ef4ab02-c883-4250-836f-6045b967b4a7",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bapak Suharno",
        "name": "Oprokan Bapak Suharno",
        "category": "perkakas",
        "categoryLabel": "Perkakas Rumah",
        "icon": "🍳",
        "color": "#795548",
        "x": 295,
        "y": 216,
        "lat": 808,
        "lng": 295,
        "description": "Oprokan Bapak Suharno merupakan oprokan yang ada di pintu utama Pasar Gedhe yang menyediakan spesialis penyaring gorengan, alat makan, dan pisau besi atau pisau kayu",
        "image": "https://maps.pasargedesolo.com/storage/stores/kLqIS0BfEYZ02eRDGBD2pHT0LY4ILvwx.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/kLqIS0BfEYZ02eRDGBD2pHT0LY4ILvwx_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/kLqIS0BfEYZ02eRDGBD2pHT0LY4ILvwx.jpg",
          "https://maps.pasargedesolo.com/storage/locations/0Gv6ew3alU2SlgDHbiev9ShCS5Nuixlapugr0UIP.jpg"
        ],
        "entries": [
          {
            "x": 292,
            "y": 231
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5f77-652b-4098-b4d1-ba4a37c4f70d",
        "nodeId": "n_9eec5f77-652b-4098-b4d1-ba4a37c4f70d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Buah Tante Bella",
        "name": "Oprokan Buah Tante Bella",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 428,
        "y": 289,
        "lat": 735,
        "lng": 428,
        "description": "Oprokan Buah Tante Bella adalah salah satu kios oprokan yang ada di Pasar Gedhe Pintu Utama yang menjual buah-buahan",
        "image": "https://maps.pasargedesolo.com/storage/stores/5xkF3zi5iZjinLxfS4j53exc4SRxnSMG.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/5xkF3zi5iZjinLxfS4j53exc4SRxnSMG_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/5xkF3zi5iZjinLxfS4j53exc4SRxnSMG.jpg",
          "https://maps.pasargedesolo.com/storage/locations/9NiTjUCbroMqngy5XRj8mziDyJ4g6dUWVlHKCBaW.jpg"
        ],
        "entries": [
          {
            "x": 433,
            "y": 291
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
        "nodeId": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bp Sarmo 2",
        "name": "Oprokan Bp Sarmo 2",
        "category": "tekstil",
        "categoryLabel": "Pakaian & Tekstil",
        "icon": "👕",
        "color": "#16A085",
        "x": 303,
        "y": 254,
        "lat": 770,
        "lng": 303,
        "description": "Oprokan Bp Sarmo 2 adalah salah satu kios oprokan yang ada di Pasar Gedhe Pintu Utama yang menjual khusus aneka sandal karet",
        "image": "https://maps.pasargedesolo.com/storage/stores/m1X5LIjs0TFmMozjCQluNXt9YmX5jfwJ.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/m1X5LIjs0TFmMozjCQluNXt9YmX5jfwJ_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/m1X5LIjs0TFmMozjCQluNXt9YmX5jfwJ.jpg",
          "https://maps.pasargedesolo.com/storage/locations/LbrG2uYO9Bbo7Xync3coMboULrM7OzDRlXruYXgP.jpg"
        ],
        "entries": [
          {
            "x": 305,
            "y": 249
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef600f4-e452-42c5-9c2b-2d1746b471b3",
        "nodeId": "n_9ef600f4-e452-42c5-9c2b-2d1746b471b3",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Gempol Pleret & Dawet Telasih Bu Yami",
        "name": "Gempol Pleret & Dawet Telasih Bu Yami",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 271,
        "y": 251,
        "lat": 773,
        "lng": 271,
        "description": "Gempol Pleret & Dawet Telasih Bu Yami adalah minuman tradisional yang ada di Pasar Gedhe Pintu Utama yang menjual menu spesialnya gempol pleret dan dawet telasih",
        "image": "https://maps.pasargedesolo.com/storage/stores/WivxsTMJD4esITDMrIOTb3UBDSKx1UP8.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/WivxsTMJD4esITDMrIOTb3UBDSKx1UP8_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/WivxsTMJD4esITDMrIOTb3UBDSKx1UP8.jpg",
          "https://maps.pasargedesolo.com/storage/locations/iIw9trzlDmIfXg09SZyd18LLPY3mgTdOLyQXPxr2.jpg"
        ],
        "entries": [
          {
            "x": 270,
            "y": 250
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
        "nodeId": "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bu Sutinah",
        "name": "Oprokan Bu Sutinah",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 311,
        "y": 258,
        "lat": 766,
        "lng": 311,
        "description": "Oprokan Bu Sutinah adalah salah satu oprokan yang berada di Pasar Gedhe Pintu Utama yang menjual aneka rambak dan intip goreng yang cocok dijadikan oleh-oleh",
        "image": "https://maps.pasargedesolo.com/storage/stores/jzTh7Iw7go7TCCJmEoBCtxhLli6CNiUb.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/jzTh7Iw7go7TCCJmEoBCtxhLli6CNiUb_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/jzTh7Iw7go7TCCJmEoBCtxhLli6CNiUb.jpg",
          "https://maps.pasargedesolo.com/storage/locations/lP2iBQSr0tz2oObHw0WZmeptF1AymVlVyiTukKbN.jpg"
        ],
        "entries": [
          {
            "x": 312,
            "y": 250
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f025096-89fd-4467-a0c9-b532f98011c6",
        "nodeId": "n_9f025096-89fd-4467-a0c9-b532f98011c6",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bu Suharni",
        "name": "Oprokan Bu Suharni",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 412,
        "y": 233,
        "lat": 791,
        "lng": 412,
        "description": "Oprokan Bu Suharni adalah salah satu oprokan yang berada di Pasar Gedhe yang menjual buah-buahan seperti pisang dan strawberry",
        "image": "https://maps.pasargedesolo.com/storage/stores/EBWE5MLD6nX1P2ga6Xzx5E5mOOGT95ap.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/EBWE5MLD6nX1P2ga6Xzx5E5mOOGT95ap_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/EBWE5MLD6nX1P2ga6Xzx5E5mOOGT95ap.jpg",
          "https://maps.pasargedesolo.com/storage/locations/FKM9R978lM38wsZRvtg62aZUkm3PQJ5EhKWZAofW.jpg"
        ],
        "entries": [
          {
            "x": 413,
            "y": 248
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5dc3-3fc7-419d-a89a-288ae0836f24",
        "nodeId": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oprokan Bu Ninuk Darmayanti",
        "name": "Kios Oprokan Bu Ninuk Darmayanti",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 373,
        "y": 271,
        "lat": 753,
        "lng": 373,
        "description": "Kios Oprokan Bu Ninuk Darmayanti adalah salah satu kios oprokan yang ada di Pasar Gedhe Pintu Utama yang menjual spesialis buah-buahan",
        "image": "https://maps.pasargedesolo.com/storage/stores/TOKklxS3lykJ97yzehdi5CMZ6iS1lCja.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/TOKklxS3lykJ97yzehdi5CMZ6iS1lCja_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/TOKklxS3lykJ97yzehdi5CMZ6iS1lCja.jpg",
          "https://maps.pasargedesolo.com/storage/locations/zn1jpg7fnLh47z8z9k9eA8Cr6dqiBM9I6503Q0mn.jpg"
        ],
        "entries": [
          {
            "x": 372,
            "y": 259
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41408-904d-4848-9bc5-f286b4716233",
        "nodeId": "n_9ef41408-904d-4848-9bc5-f286b4716233",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oprokan Bu Parto",
        "name": "Kios Oprokan Bu Parto",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 408,
        "y": 291,
        "lat": 733,
        "lng": 408,
        "description": "Kios Oprokan Bu Parto adalah salah satu kios oprokan yang ada di Pintu Utama Pasar Gedhe yang menjual buah-buahan",
        "image": "https://maps.pasargedesolo.com/storage/stores/CgyUvCRBBiQLxuTlFdNoBS6ZWQl5d6dY.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/CgyUvCRBBiQLxuTlFdNoBS6ZWQl5d6dY_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/CgyUvCRBBiQLxuTlFdNoBS6ZWQl5d6dY.jpg",
          "https://maps.pasargedesolo.com/storage/locations/GxaXESR7WEeZw7Lu0un5QczRMuKwPCXPZvgh9s4I.jpg"
        ],
        "entries": [
          {
            "x": 400,
            "y": 292
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0235ec-d630-40e3-97cd-ed161e21d640",
        "nodeId": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bu Marsi",
        "name": "Oprokan Bu Marsi",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 410,
        "y": 271,
        "lat": 753,
        "lng": 410,
        "description": "Oprokan Bu Marsi adalah salah satu kios oprokan yang berada di Pasar Gedhe Pintu Utama yang menjual aneka oleh-oleh khas solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/1GzQSw6etXYCOStNaTuji5zCZK2Ihm43.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/1GzQSw6etXYCOStNaTuji5zCZK2Ihm43_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/1GzQSw6etXYCOStNaTuji5zCZK2Ihm43.jpg",
          "https://maps.pasargedesolo.com/storage/locations/TL27rOOC0k7RFc3TeFUyKWcdxc0N1PYThA7yuBw4.jpg"
        ],
        "entries": [
          {
            "x": 401,
            "y": 272
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f023d25-a930-4e11-9d2a-30c7da403dc4",
        "nodeId": "n_9f023d25-a930-4e11-9d2a-30c7da403dc4",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bu Suparti",
        "name": "Oprokan Bu Suparti",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 341,
        "y": 144,
        "lat": 880,
        "lng": 341,
        "description": "Oprokan Bu Suparti merupakan oprokan yang ada di Pasar Gedhe yang menjual beragam makanan ringan dan minuman dingin",
        "image": "https://maps.pasargedesolo.com/storage/stores/i856D71MAkDRZN56V0VGfqhaJ0PHUERN.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/i856D71MAkDRZN56V0VGfqhaJ0PHUERN_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/i856D71MAkDRZN56V0VGfqhaJ0PHUERN.jpg"
        ],
        "entries": [
          {
            "x": 344,
            "y": 164
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec47d1-2f39-495f-8738-0f70866c325f",
        "nodeId": "n_9eec47d1-2f39-495f-8738-0f70866c325f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "UD Grosir Buah",
        "name": "UD Grosir Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 731,
        "y": 170,
        "lat": 854,
        "lng": 731,
        "description": "UD Grosir Buah merupakan salah satu los yang ada di Pasar Gedhe yang menyediakan spesialis buah jeruk grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/QisQ17beOnaVw2NBHjxUGkEzHD38f61M.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/QisQ17beOnaVw2NBHjxUGkEzHD38f61M_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/QisQ17beOnaVw2NBHjxUGkEzHD38f61M.jpg",
          "https://maps.pasargedesolo.com/storage/locations/uyfWoZN5qUJgElNgYEH9RXhkTtkv7OEJ1q7ruei6.jpg"
        ],
        "entries": [
          {
            "x": 713,
            "y": 172
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec46a2-56c9-4caa-a762-7c07686f9651",
        "nodeId": "n_9eec46a2-56c9-4caa-a762-7c07686f9651",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Spesial Usor-Usor Ratno Group",
        "name": "Spesial Usor-Usor Ratno Group",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 556,
        "y": 201,
        "lat": 823,
        "lng": 556,
        "description": "Spesial Usor-Usor Ratno Group merupakan salah satu los yang ada di Pasar Gedhe yang menyediakan spesialis buah jeruk grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/3Pq6UK2X4sFaEiDO7AwsXTJNtexZSDcm.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/3Pq6UK2X4sFaEiDO7AwsXTJNtexZSDcm_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/3Pq6UK2X4sFaEiDO7AwsXTJNtexZSDcm.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/7ZbTozZqYrNeddLiV3oGGMTzbCvX1BLVncCtUQgA.jpg"
        ],
        "entries": [
          {
            "x": 557,
            "y": 191
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f022b9a-08d9-4d89-bbfb-45854faec907",
        "nodeId": "n_9f022b9a-08d9-4d89-bbfb-45854faec907",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Kus",
        "name": "Kios Bu Kus",
        "category": "tekstil",
        "categoryLabel": "Pakaian & Tekstil",
        "icon": "👕",
        "color": "#16A085",
        "x": 614,
        "y": 266,
        "lat": 758,
        "lng": 614,
        "description": "Kios Bu Kus merupakan salah satu kios yang ada di Pasar Gedhe yang menyediakan berbagai macam pakaian dan kain batik dari anak-anak hingga dewasa",
        "image": "https://maps.pasargedesolo.com/storage/stores/XAcHnfjyhJqxfzMYu0AGwp5eZHMfi1ZL.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/XAcHnfjyhJqxfzMYu0AGwp5eZHMfi1ZL_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/XAcHnfjyhJqxfzMYu0AGwp5eZHMfi1ZL.jpg"
        ],
        "entries": [
          {
            "x": 615,
            "y": 262
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef458d2-4832-4b1a-8a33-6257c714b266",
        "nodeId": "n_9ef458d2-4832-4b1a-8a33-6257c714b266",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Winarti",
        "name": "Oprokan Ibu Winarti",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 525,
        "y": 413,
        "lat": 611,
        "lng": 525,
        "description": "Oprokan Ibu Winarti merupakan salah satu oprokan yang ada di Pasar Gedhe yang menyediakan spesialis Ikan Bandeng dengan ukuran besar dan kecil",
        "image": "https://maps.pasargedesolo.com/storage/stores/48ncmuatvKY9sm1Y6ZajD2m7QzMthJEA.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/48ncmuatvKY9sm1Y6ZajD2m7QzMthJEA_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/48ncmuatvKY9sm1Y6ZajD2m7QzMthJEA.jpg",
          "https://maps.pasargedesolo.com/storage/locations/da9oPmqyD1hy8dHysidliXcOhK3iLqmiHHOLudgj.jpg"
        ],
        "entries": [
          {
            "x": 524,
            "y": 410
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec81e5-f94f-4a9f-afb0-f27274419417",
        "nodeId": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Lenjongan Bu Sum 1",
        "name": "Lenjongan Bu Sum 1",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 530,
        "y": 221,
        "lat": 803,
        "lng": 530,
        "description": "Lenjongan Bu Sum 1 adalah jajanan pasar legendaris di sisi timur Pasar Gedhe Solo yang telah eksis sejak 1980-an, menjual aneka kue tradisional seperti ketan putih, ketan hitam, cenil, tiwul, klepon, getuk, dan gathot, disajikan dengan taburan kelapa parut serta siraman gula merah cair. Camilan manis dan empuk ini menjadi favorit warga lokal dan wisatawan yang ingin mencicipi cita rasa khas Solo.",
        "image": "https://maps.pasargedesolo.com/storage/stores/WEtr9Ex9JmwjYvFvOqCeI6W7LCbWjmVv.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/WEtr9Ex9JmwjYvFvOqCeI6W7LCbWjmVv_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/WEtr9Ex9JmwjYvFvOqCeI6W7LCbWjmVv.jpg",
          "https://maps.pasargedesolo.com/storage/locations/IPiyLLhxfnQ2RmIvCvnmrdWFEnZCEdStGHbmK14R.jpg"
        ],
        "entries": [
          {
            "x": 536,
            "y": 228
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
        "nodeId": "n_9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Rani Snack",
        "name": "Rani Snack",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 389,
        "y": 464,
        "lat": 560,
        "lng": 389,
        "description": "Rani Snack adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis snack jajanan pasar khas solo dan aneka kue tradisional lainnya",
        "image": "https://maps.pasargedesolo.com/storage/stores/OLTD8Q6y8lBR05fsuVVitBo54rSqJncC.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/OLTD8Q6y8lBR05fsuVVitBo54rSqJncC_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/OLTD8Q6y8lBR05fsuVVitBo54rSqJncC.jpg",
          "https://maps.pasargedesolo.com/storage/locations/3WuX87ICUoRlY6amxbroGy6iYGhKVB84dFa8GB77.jpg"
        ],
        "entries": [
          {
            "x": 386,
            "y": 477
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5a3b-c76b-446a-93ed-c3ffc3942461",
        "nodeId": "n_9eec5a3b-c76b-446a-93ed-c3ffc3942461",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Guritno Chandra",
        "name": "Kios Guritno Chandra",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 291,
        "y": 477,
        "lat": 547,
        "lng": 291,
        "description": "Kios Guritno Chandra adalah salah satu kios yang berada di Pasar Gedhe menjual khusus emping atau karak yang belum matang dan aneka kacang-kacangan",
        "image": "https://maps.pasargedesolo.com/storage/stores/Cv1ISuFUJJ3QLTogXdUAe0i0NgrYvs8l.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Cv1ISuFUJJ3QLTogXdUAe0i0NgrYvs8l_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Cv1ISuFUJJ3QLTogXdUAe0i0NgrYvs8l.jpg",
          "https://maps.pasargedesolo.com/storage/locations/aZQJdC0PeWsHq9O6Qe2xM7f29IJiP0sjqQtmaizE.jpg",
          "https://maps.pasargedesolo.com/storage/locations/6WgR3AJQyVJ71Dys60CyTpdT4SeUiqth6glZQSWF.jpg"
        ],
        "entries": [
          {
            "x": 306,
            "y": 480
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5273-27e9-4d33-a4ba-d701064346d2",
        "nodeId": "n_9eec5273-27e9-4d33-a4ba-d701064346d2",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Dawet Mbah Harso",
        "name": "Dawet Mbah Harso",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 488,
        "y": 405,
        "lat": 619,
        "lng": 488,
        "description": "Dawet Mbah Harso adalah minuman tradisional legendaris yang ada di Pasar Gedhe yang terkenal dengan minuman dawet menggunakan santan dan gula asli yang menawarkan cita rasa autentik dan menyegarkan dengan harga mulai 10 ribu hingga 17 ribu saja",
        "image": "https://maps.pasargedesolo.com/storage/stores/MbqZDCzezeejB1QSf0RuBR39dtGcCkFb.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/MbqZDCzezeejB1QSf0RuBR39dtGcCkFb_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/MbqZDCzezeejB1QSf0RuBR39dtGcCkFb.jpg",
          "https://maps.pasargedesolo.com/storage/locations/kKbph4ST1qAq8CWXSQYb0vIYGV6oakVhCuJM2z24.jpg"
        ],
        "entries": [
          {
            "x": 493,
            "y": 407
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5da1-1dcf-4479-ba95-ac1cd8bf58aa",
        "nodeId": "n_9eec5da1-1dcf-4479-ba95-ac1cd8bf58aa",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Es Dawet Bu Yatik",
        "name": "Es Dawet Bu Yatik",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 491,
        "y": 335,
        "lat": 689,
        "lng": 491,
        "description": "Es Dawet Bu Yatik adalah minuman tradisional yang ada di Pasar Gedhe yang terkenal dengan es dawet telasih dan gempol pleret karena rasanya yang legit dan autentik",
        "image": "https://maps.pasargedesolo.com/storage/stores/pZo5m3gF2eK0AUi89jsWHaAFtdPc58V8.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/pZo5m3gF2eK0AUi89jsWHaAFtdPc58V8_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/pZo5m3gF2eK0AUi89jsWHaAFtdPc58V8.jpg",
          "https://maps.pasargedesolo.com/storage/locations/tR5yZuDfT1HEch3BPehKQZyL9F1kWjy25Q7qbR7M.jpg"
        ],
        "entries": [
          {
            "x": 502,
            "y": 333
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4da4-f111-434b-bbd0-9d4b8bf45a7d",
        "nodeId": "n_9eec4da4-f111-434b-bbd0-9d4b8bf45a7d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Sabar Menanti",
        "name": "Kios Sabar Menanti",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 551,
        "y": 810,
        "lat": 214,
        "lng": 551,
        "description": "Kios Sabar Menanti merupakan salah satu kios di Pasar Gedhe yang menyediakan spesialis buah pepaya, pisang, rambak, dan intip",
        "image": "https://maps.pasargedesolo.com/storage/stores/QBKQ9gqrm4UcrEgMXVh0aT5Im8GLqOEb.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/QBKQ9gqrm4UcrEgMXVh0aT5Im8GLqOEb_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/QBKQ9gqrm4UcrEgMXVh0aT5Im8GLqOEb.jpg",
          "https://maps.pasargedesolo.com/storage/locations/iwfCWvvQMWLwZjwtZ3YsLvT0Jx99ejYeMGlEYml8.jpg"
        ],
        "entries": [
          {
            "x": 542,
            "y": 823
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
        "nodeId": "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Karsi",
        "name": "Oprokan Ibu Karsi",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 517,
        "y": 649,
        "lat": 375,
        "lng": 517,
        "description": "Oprokan Ibu Karsi merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis ayam kremes, bawang goreng dan emping mentah",
        "image": "https://maps.pasargedesolo.com/storage/stores/mTFi0CLJYqoftwhFFQh3cqDSIlMhlxOj.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/mTFi0CLJYqoftwhFFQh3cqDSIlMhlxOj_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/mTFi0CLJYqoftwhFFQh3cqDSIlMhlxOj.jpg",
          "https://maps.pasargedesolo.com/storage/locations/JGrw8PKUSwH6kiNBt2yGQIDVYr8vLBiG8rdPvKfm.jpg"
        ],
        "entries": [
          {
            "x": 526,
            "y": 649
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8be9-d219-4d39-b529-2fa1b20f676e",
        "nodeId": "n_9eec8be9-d219-4d39-b529-2fa1b20f676e",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Nurnaini",
        "name": "Oprokan Ibu Nurnaini",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 530,
        "y": 295,
        "lat": 729,
        "lng": 530,
        "description": "Oprokan Ibu Nurnaini merupakan oprokan yang ada di Pasar Gedhe yang spesialis menjual tahu dan tempe",
        "image": "https://maps.pasargedesolo.com/storage/stores/mNPxp5XCppAeFpnioh38S7RKpDAtOKMW.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/mNPxp5XCppAeFpnioh38S7RKpDAtOKMW_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/mNPxp5XCppAeFpnioh38S7RKpDAtOKMW.jpg",
          "https://maps.pasargedesolo.com/storage/locations/nJ92lYucTcYlOiBVxDISWuEtH2L8EuZQR2a2gqN6.jpg"
        ],
        "entries": [
          {
            "x": 537,
            "y": 293
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef46778-f72e-48d9-8638-d52495270de4",
        "nodeId": "n_9ef46778-f72e-48d9-8638-d52495270de4",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Warsini Ayam",
        "name": "Oprokan Ibu Warsini Ayam",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 519,
        "y": 492,
        "lat": 532,
        "lng": 519,
        "description": "Oprokan Ibu Warsini Ayam Potong merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis ayam potong atau ayam utuh, usus dan ceker ayam",
        "image": "https://maps.pasargedesolo.com/storage/stores/OqSCWC9heQaagkbh0nkpsE2mSIuOlR5j.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/OqSCWC9heQaagkbh0nkpsE2mSIuOlR5j_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/OqSCWC9heQaagkbh0nkpsE2mSIuOlR5j.jpg",
          "https://maps.pasargedesolo.com/storage/locations/C23rvXGk1VmCBhua2WwusXBKPBvK7yCVbCaDC9pW.jpg"
        ],
        "entries": [
          {
            "x": 526,
            "y": 492
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
        "nodeId": "n_9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu ngadiyem",
        "name": "Oprokan Ibu ngadiyem",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 519,
        "y": 606,
        "lat": 418,
        "lng": 519,
        "description": "Oprokan Ibu Ngadiyem merupakan salah satu oprokan yang ada di Pasar Gedhe yang menyediakan beragam sayuran, tahu tempe dan santan kelapa",
        "image": "https://maps.pasargedesolo.com/storage/stores/fan30TCc0pe3JKJQ3X3GOWD4aKDhGJXX.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/fan30TCc0pe3JKJQ3X3GOWD4aKDhGJXX_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/fan30TCc0pe3JKJQ3X3GOWD4aKDhGJXX.jpg",
          "https://maps.pasargedesolo.com/storage/locations/7NiYxmaklzUAzSK5jqqQY0nT9gPtSgvc6wZkHF3L.jpg"
        ],
        "entries": [
          {
            "x": 527,
            "y": 606
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef46046-3cb9-4eb9-ac80-316d5ede1524",
        "nodeId": "n_9ef46046-3cb9-4eb9-ac80-316d5ede1524",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Warti Ayam Potong 2",
        "name": "Oprokan Ibu Warti Ayam Potong 2",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 521,
        "y": 455,
        "lat": 569,
        "lng": 521,
        "description": "Oprokan Ibu Warti Ayam Potong 2 merupakan oprokan yang ada di Pasar Gedhe yang menyediakan spesialis kepala ayam, tulang ayam, dan ceker ayam",
        "image": "https://maps.pasargedesolo.com/storage/stores/Zb10AkDL7AYD0d39pYYt0SxMPlY55CJb.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Zb10AkDL7AYD0d39pYYt0SxMPlY55CJb_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Zb10AkDL7AYD0d39pYYt0SxMPlY55CJb.jpg",
          "https://maps.pasargedesolo.com/storage/locations/HJQPMLk2gflqnq3sMPWMdzKfFLRPxIoAJmqMglRe.jpg"
        ],
        "entries": [
          {
            "x": 526,
            "y": 456
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef20631-101c-4286-9207-fd69cbea56ca",
        "nodeId": "n_9ef20631-101c-4286-9207-fd69cbea56ca",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Tatik",
        "name": "Oprokan Ibu Tatik",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 520,
        "y": 325,
        "lat": 699,
        "lng": 520,
        "description": "Oprokan Ibu Tatik merupakan oprokan yang ada di Pasar Gedhe yang menyediakan spesialis ayam potong, usus ayam dan hati ayam",
        "image": "https://maps.pasargedesolo.com/storage/stores/KCRGKeby0BRK3zE4An7n0VcvbUttgwBB.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/KCRGKeby0BRK3zE4An7n0VcvbUttgwBB_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/KCRGKeby0BRK3zE4An7n0VcvbUttgwBB.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Ak0pOie898vKoiJQhkRWrOX45VLaA9yTBF3SpofN.jpg"
        ],
        "entries": [
          {
            "x": 526,
            "y": 327
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec493f-2521-41c2-825f-01dcea8ca9e9",
        "nodeId": "n_9eec493f-2521-41c2-825f-01dcea8ca9e9",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Koh Po",
        "name": "Kios Koh Po",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 415,
        "y": 514,
        "lat": 510,
        "lng": 415,
        "description": "Kios Koh Po adalah salah satu kios yang terletak di Pasar Gedhe yang dikenal menjual spesialis aneka sayur mayur segar yang lengkap serta kebutuhan bahan masak dapur dengan harga terjangkau",
        "image": "https://maps.pasargedesolo.com/storage/stores/ntubeeTsH4Z1UqJSBTdj33RFYrCUG8nu.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ntubeeTsH4Z1UqJSBTdj33RFYrCUG8nu_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ntubeeTsH4Z1UqJSBTdj33RFYrCUG8nu.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Oxj7oGIkihIzfa1w8fuo9tapw1nfvNUtjcMvObmv.jpg",
          "https://maps.pasargedesolo.com/storage/locations/YhOaVl2SygtRHnxhLcPsJjrpTbpeADNVPwvm1b4C.jpg"
        ],
        "entries": [
          {
            "x": 410,
            "y": 526
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3f9a-197f-45b4-bd44-47e2aadc8720",
        "nodeId": "n_9eec3f9a-197f-45b4-bd44-47e2aadc8720",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Bu Narti",
        "name": "Toko Bu Narti",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 483,
        "y": 551,
        "lat": 473,
        "lng": 483,
        "description": "Toko Bu Narti adalah salah satu kios yang ada di Pasar Gedhe menjual spesialis cemilan seperti aneka krupuk dan ampiang serta menjual minuman wedang kesehatan",
        "image": "https://maps.pasargedesolo.com/storage/stores/Mx2MeL0H5A2uh8bk1hVielonnDeveurN.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Mx2MeL0H5A2uh8bk1hVielonnDeveurN_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Mx2MeL0H5A2uh8bk1hVielonnDeveurN.jpg",
          "https://maps.pasargedesolo.com/storage/locations/fRxhRj5yu8miv1P5NFRmQMLzECaBMESn9E3SEYNM.jpg",
          "https://maps.pasargedesolo.com/storage/locations/1Wm7q02qGvbL89uP4oEfWBT0njXJaxJWgkAEF4TS.jpg"
        ],
        "entries": [
          {
            "x": 492,
            "y": 553
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f028647-8a91-4784-b238-3f6a5df45948",
        "nodeId": "n_9f028647-8a91-4784-b238-3f6a5df45948",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Warung Makan Mbak Dewi",
        "name": "Warung Makan Mbak Dewi",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 664,
        "y": 807,
        "lat": 217,
        "lng": 664,
        "description": "Warung Makan Mbak Dewi merupakan warung makan yang ada di dalam Pasar Gedhe dengan menyediakan masakan jawa dan beragam gorengan",
        "image": "https://maps.pasargedesolo.com/storage/stores/7Y2uExKCosunV2zKC25wfdevvgZPwoXC.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7Y2uExKCosunV2zKC25wfdevvgZPwoXC_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7Y2uExKCosunV2zKC25wfdevvgZPwoXC.jpg",
          "https://maps.pasargedesolo.com/storage/locations/46ix89QuKGM9hkZQzg0Zzy0Y5XELrETFK9DoIDCo.jpg"
        ],
        "entries": [
          {
            "x": 658,
            "y": 825
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
        "nodeId": "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Los Sayur Bu Sayekti",
        "name": "Los Sayur Bu Sayekti",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 663,
        "y": 787,
        "lat": 237,
        "lng": 663,
        "description": "Los Sayur Bu Sayekti merupakan salah satu los yang menyediakan khusus sayuran, telur asin dan telur jawa",
        "image": "https://maps.pasargedesolo.com/storage/stores/7N0LchucP032LShp1fJ9mCNF5uvZdOND.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7N0LchucP032LShp1fJ9mCNF5uvZdOND_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7N0LchucP032LShp1fJ9mCNF5uvZdOND.jpg",
          "https://maps.pasargedesolo.com/storage/locations/2SZxRYuyBHbVsTS4s98B0X4cSzwyCYRqi8HiFlaC.jpg"
        ],
        "entries": [
          {
            "x": 666,
            "y": 769
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef29ce8-d70e-482e-b888-008b68cc8102",
        "nodeId": "n_9ef29ce8-d70e-482e-b888-008b68cc8102",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Ayam Goreng Bu Mukini",
        "name": "Ayam Goreng Bu Mukini",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 578,
        "y": 781,
        "lat": 243,
        "lng": 578,
        "description": "Ayam Goreng Bu Mukini merupakan salah satu kios di Pasar Gedhe yang menyediakan spesialis ayam goreng",
        "image": "https://maps.pasargedesolo.com/storage/stores/itapj2wR84M2JrWnlXx4DGRwcXQEXdiX.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/itapj2wR84M2JrWnlXx4DGRwcXQEXdiX_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/itapj2wR84M2JrWnlXx4DGRwcXQEXdiX.jpg",
          "https://maps.pasargedesolo.com/storage/locations/L47ykUepmtvPZGeNWVkwVUNTO5D8bBuxWL9olSmy.jpg"
        ],
        "entries": [
          {
            "x": 577,
            "y": 768
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec46bc-9f36-49ad-952f-991f14056920",
        "nodeId": "n_9eec46bc-9f36-49ad-952f-991f14056920",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Pak Mul Sayur",
        "name": "Kios Pak Mul Sayur",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 384,
        "y": 569,
        "lat": 455,
        "lng": 384,
        "description": "Kios Pak Mul Sayur adalah salah satu kios sayur yang berada di Pasar Gedhe yang menjual spesialis aneka sayur segar seperti paprikan merah dan paprika hijau selain itu juga menjual aneka bumbu dapur",
        "image": "https://maps.pasargedesolo.com/storage/stores/5JboONmOo8hRUAGvZtkhp0SghO2jGylm.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/5JboONmOo8hRUAGvZtkhp0SghO2jGylm_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/5JboONmOo8hRUAGvZtkhp0SghO2jGylm.jpg",
          "https://maps.pasargedesolo.com/storage/locations/kTfhMK2VA2PAOxBoZYP4SnGgYjW15LOxMpJ9yefy.jpg"
        ],
        "entries": [
          {
            "x": 389,
            "y": 582
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef43435-8fd9-45cd-8998-6ab71d531e51",
        "nodeId": "n_9ef43435-8fd9-45cd-8998-6ab71d531e51",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Cak We Hoo",
        "name": "Cak We Hoo",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 432,
        "y": 899,
        "lat": 125,
        "lng": 432,
        "description": "Cak We Hoo adalah salah salah satu jajajnan legendaris yang berada di Pasar Gedhe Pintu Utara yang sudah ada sejak tahun 1980 terkenal dengan cakwe yang berukuran jumbo dan rasa yang gurih serta cita rasa yang konsisten sehingga menjadi favorit banyak orang",
        "image": "https://maps.pasargedesolo.com/storage/stores/Y3CGwFU9x76BCJCaiNhQiSuyZLox8zok.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Y3CGwFU9x76BCJCaiNhQiSuyZLox8zok_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Y3CGwFU9x76BCJCaiNhQiSuyZLox8zok.jpeg"
        ],
        "entries": [
          {
            "x": 431,
            "y": 915
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4e2c-2553-4216-b367-a001f647573b",
        "nodeId": "n_9eec4e2c-2553-4216-b367-a001f647573b",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Eni",
        "name": "Kios Bu Eni",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 486,
        "y": 498,
        "lat": 526,
        "lng": 486,
        "description": "Kios Bu Eni adalah salah satu kios yang ada di Pasar Gedhe yang menjual aneka sayur-sayuran dan bumbu dapur lainnya",
        "image": "https://maps.pasargedesolo.com/storage/stores/owacO2kL56fnKvMDe0iuwj8jpaSFr02r.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/owacO2kL56fnKvMDe0iuwj8jpaSFr02r_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/owacO2kL56fnKvMDe0iuwj8jpaSFr02r.jpg",
          "https://maps.pasargedesolo.com/storage/locations/9FLeNJ3xFhsLXhyidll89AVfvBFhWShuBxjPVLBp.jpg",
          "https://maps.pasargedesolo.com/storage/locations/kARImW8qChTHq82z7AE50VMKbEOh6Sy2qt77BzR3.jpg"
        ],
        "entries": [
          {
            "x": 493,
            "y": 501
          },
          {
            "x": 493,
            "y": 501
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5921-981f-4764-b519-cdd8d3c8f4d5",
        "nodeId": "n_9eec5921-981f-4764-b519-cdd8d3c8f4d5",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Widji Snack",
        "name": "Kios Widji Snack",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 289,
        "y": 750,
        "lat": 274,
        "lng": 289,
        "description": "Kios Widji Snack adalah salah satu kios yang ada di Pasar Gedhe yang menjual khusus rengginang dan kue dollar",
        "image": "https://maps.pasargedesolo.com/storage/stores/n9XjX1ZAymEfRbqJLVvbt0AekkYZ7yya.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/n9XjX1ZAymEfRbqJLVvbt0AekkYZ7yya_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/n9XjX1ZAymEfRbqJLVvbt0AekkYZ7yya.jpg",
          "https://maps.pasargedesolo.com/storage/locations/2ihDFmvBSkJWx5ZyTapljwHwhUMCbN5dIuqBiDOI.jpg"
        ],
        "entries": [
          {
            "x": 307,
            "y": 755
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4ba7-f054-46ba-8480-80392ae053cb",
        "nodeId": "n_9eec4ba7-f054-46ba-8480-80392ae053cb",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Pusat Jajan Bursa Rasa",
        "name": "Pusat Jajan Bursa Rasa",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 365,
        "y": 496,
        "lat": 528,
        "lng": 365,
        "description": "Pusat Jajan Bursa Rasa adalah salah satu kios yang ada di Pasar Gedhe yang dikenal spesialis menjual aneka jajan pasar kue tradisional dan aneka makanan ringan khas solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/5g5CfbbyAGt9dn0PQcG5HPDjdiJPvAr2.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/5g5CfbbyAGt9dn0PQcG5HPDjdiJPvAr2_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/5g5CfbbyAGt9dn0PQcG5HPDjdiJPvAr2.jpg",
          "https://maps.pasargedesolo.com/storage/locations/AtpdgVpNHOVAeHbTU5f9Thmi1SPPdrW82oiszpKH.jpg"
        ],
        "entries": [
          {
            "x": 365,
            "y": 489
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef43c55-ea07-4036-ad75-bd47d82123cc",
        "nodeId": "n_9ef43c55-ea07-4036-ad75-bd47d82123cc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oleh-oleh Bu Mukini",
        "name": "Kios Oleh-oleh Bu Mukini",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 559,
        "y": 784,
        "lat": 240,
        "lng": 559,
        "description": "Kios oleh-oleh Bu Mukini adalah kios yang menjual aneka oleh-oleh atau camilan ringan di Pasar Gedhe seperti keripik ceker, abon sapi dan racikan teh",
        "image": "https://maps.pasargedesolo.com/storage/stores/igwp6MB6QbD0ElfeWC4NDLmLq001mBEI.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/igwp6MB6QbD0ElfeWC4NDLmLq001mBEI_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/igwp6MB6QbD0ElfeWC4NDLmLq001mBEI.jpg",
          "https://maps.pasargedesolo.com/storage/locations/XS3qf8ghGIRrNWUsnFi3uvbUqaQ8DWCVkOs6xEHp.jpg"
        ],
        "entries": [
          {
            "x": 559,
            "y": 768
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0284a3-d404-4556-b098-336f9ab8e66c",
        "nodeId": "n_9f0284a3-d404-4556-b098-336f9ab8e66c",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Ayam Kampung Bu Sri",
        "name": "Ayam Kampung Bu Sri",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 631,
        "y": 808,
        "lat": 216,
        "lng": 631,
        "description": "Ayam Kampung Bu Sri merupakan los yang ada di Pasar Gedhe yang menyediakan spesial ayam kampung dan ayam jantan",
        "image": "https://maps.pasargedesolo.com/storage/stores/9Gez5fNW1nCNWU1ZGKVFc8YbKn5GL6n0.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/9Gez5fNW1nCNWU1ZGKVFc8YbKn5GL6n0_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/9Gez5fNW1nCNWU1ZGKVFc8YbKn5GL6n0.jpg",
          "https://maps.pasargedesolo.com/storage/locations/7VejbtjmUGPNpMRZmxRE87vX7yEi2Jl28oN5aXU0.jpg"
        ],
        "entries": [
          {
            "x": 634,
            "y": 825
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef42f70-e661-425d-8c50-d58b4d3cafb0",
        "nodeId": "n_9ef42f70-e661-425d-8c50-d58b4d3cafb0",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios UD Uzhie 2",
        "name": "Kios UD Uzhie 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 525,
        "y": 124,
        "lat": 900,
        "lng": 525,
        "description": "Kios UD Uzhie 2 adalah salah satu kios  buah yang berada di kawasan Pasar Gedhe yang menjual aneka buah-buahan yang menerima pesanan buah secara grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/0RpwULhBg8oKCMHp9SmoEAp8pHB0CPMp.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/0RpwULhBg8oKCMHp9SmoEAp8pHB0CPMp_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/0RpwULhBg8oKCMHp9SmoEAp8pHB0CPMp.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/0q4ZW8oQ1KM72aEGSfJzWoOOnjM8BtsApr5iMo7O.jpg"
        ],
        "entries": [
          {
            "x": 527,
            "y": 112
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec378f-3ff2-44ac-b695-059ecb43a7f5",
        "nodeId": "n_9eec378f-3ff2-44ac-b695-059ecb43a7f5",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Bu Sri Sugiarti",
        "name": "Toko Bu Sri Sugiarti",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 474,
        "y": 679,
        "lat": 345,
        "lng": 474,
        "description": "Toko Bu Sri Sugiarti adalah salah satu kios yang ada di pasar gedhe menjual beraneka macam sayur-sayuran dan bumbu dapur",
        "image": "https://maps.pasargedesolo.com/storage/stores/oL5TAmWekUxOcXVIo7iddiM36XwZlVdO.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/oL5TAmWekUxOcXVIo7iddiM36XwZlVdO_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/oL5TAmWekUxOcXVIo7iddiM36XwZlVdO.jpg",
          "https://maps.pasargedesolo.com/storage/locations/04GAONxsS6NBYcRS0gAsT4sVYUFOf8mknnbiYmUQ.jpg",
          "https://maps.pasargedesolo.com/storage/locations/7b8hhqKJ2jvgVFjG0glejU3K7kjW2HMDwpEVJNZE.jpg"
        ],
        "entries": [
          {
            "x": 474,
            "y": 669
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3525-a85d-4b5b-9c53-f43f3735b77d",
        "nodeId": "n_9eec3525-a85d-4b5b-9c53-f43f3735b77d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Dua Putri Solo",
        "name": "Dua Putri Solo",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 462,
        "y": 695,
        "lat": 329,
        "lng": 462,
        "description": "Dua Putri Solo adalah salah satu kios yang berada di Pasar Gedhe yang dikenal menjual aneka jamu untuk kesehatan dan racikan teh solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/LdT0jxzMB87N7wrVoavTE3OwhHliS37a.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/LdT0jxzMB87N7wrVoavTE3OwhHliS37a_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/LdT0jxzMB87N7wrVoavTE3OwhHliS37a.jpg",
          "https://maps.pasargedesolo.com/storage/locations/yND8OdCEXhnjaLjuQuAwMigvUhrFFTDpWBKSXnw8.jpg"
        ],
        "entries": [
          {
            "x": 461,
            "y": 708
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec308f-113a-45aa-9abe-4a5c18ac0ed9",
        "nodeId": "n_9eec308f-113a-45aa-9abe-4a5c18ac0ed9",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Daryanti 2",
        "name": "Kios Bu Daryanti 2",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 571,
        "y": 700,
        "lat": 324,
        "lng": 571,
        "description": "Kios Bu Daryanti memiliki dua kios yang berhadapan yang ada di Pasar Gedhe yang menyediakan berbagai macam sembako, cemilan dan minuman sachet yang lengkap",
        "image": "https://maps.pasargedesolo.com/storage/stores/33V4gidepoGHVznUya8oHELHmjJH7ojT.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/33V4gidepoGHVznUya8oHELHmjJH7ojT_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/33V4gidepoGHVznUya8oHELHmjJH7ojT.jpg",
          "https://maps.pasargedesolo.com/storage/locations/JhRcwLMhZMlqyZacIbJNko0qwNaefcyveCPIeDwO.jpg"
        ],
        "entries": [
          {
            "x": 568,
            "y": 688
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec2db5-90f3-4401-99b1-64949e2d0957",
        "nodeId": "n_9eec2db5-90f3-4401-99b1-64949e2d0957",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Ibu Mulyani",
        "name": "Kios Ibu Mulyani",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 477,
        "y": 782,
        "lat": 242,
        "lng": 477,
        "description": "Kios Ibu Mulyani adalah salah satu toko yang ada di Pasar Gedhe yang menjual rempah-rempahan untuk minuman jamu kesehatan",
        "image": "https://maps.pasargedesolo.com/storage/stores/mFGbcZUVv7NAyn0mrta8wmD8962daAtv.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/mFGbcZUVv7NAyn0mrta8wmD8962daAtv_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/mFGbcZUVv7NAyn0mrta8wmD8962daAtv.jpg",
          "https://maps.pasargedesolo.com/storage/locations/cAEgdihEx9HhKHkVQWSxv6OSmCTTtERDOIRaahld.jpg"
        ],
        "entries": [
          {
            "x": 477,
            "y": 769
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef42bb0-a4c8-43ba-85dd-13f7c4de9cd5",
        "nodeId": "n_9ef42bb0-a4c8-43ba-85dd-13f7c4de9cd5",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Rizkiana Buah",
        "name": "Rizkiana Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 647,
        "y": 121,
        "lat": 903,
        "lng": 647,
        "description": "Rizkiana Buah merupakan kios buah grosir yang ada di Pasar Gedhe yang menyediakan khusus buah salak dan jeruk peras",
        "image": "https://maps.pasargedesolo.com/storage/stores/bBh3MrAPNOr5ZwlKOy1gF8ngogSO3KIa.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/bBh3MrAPNOr5ZwlKOy1gF8ngogSO3KIa_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/bBh3MrAPNOr5ZwlKOy1gF8ngogSO3KIa.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/4SUVKyFPBXrBf15As3uX0W90s60eblbwXBTYAzyx.jpg"
        ],
        "entries": [
          {
            "x": 647,
            "y": 112
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f028c63-a19b-4dfa-866a-ec6d88af881e",
        "nodeId": "n_9f028c63-a19b-4dfa-866a-ec6d88af881e",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Bandeng & Daun Pisang Bu Surayem",
        "name": "Bandeng & Daun Pisang Bu Surayem",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 463,
        "y": 856,
        "lat": 168,
        "lng": 463,
        "description": "Bandeng & Daun Pisang Bu Surayem merupakan salah satu oprokan yang ada di Pasar Gedhe yang menjual spesialis ikan bandeng dan daun pisang",
        "image": "https://maps.pasargedesolo.com/storage/stores/UWVs5WsNxCHASzy34hamsNjhNMdrLvGq.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/UWVs5WsNxCHASzy34hamsNjhNMdrLvGq_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/UWVs5WsNxCHASzy34hamsNjhNMdrLvGq.jpg",
          "https://maps.pasargedesolo.com/storage/locations/ZqmKPq8JL3SmruDAsS0Ana7XbIPamqf8ixHxyzYj.jpg"
        ],
        "entries": [
          {
            "x": 463,
            "y": 857
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3ca1-7cf8-4742-b23f-504d2a910ed9",
        "nodeId": "n_9eec3ca1-7cf8-4742-b23f-504d2a910ed9",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Pak Man",
        "name": "Kios Pak Man",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 485,
        "y": 638,
        "lat": 386,
        "lng": 485,
        "description": "Kios Pak Man adalah salah satu kios yang ada di Pasar Gedhe yang menjual khusus ikan teri asin dan ebi kering",
        "image": "https://maps.pasargedesolo.com/storage/stores/SCDvtRLDgO5AMESf7xD45bn89gKhKfzc.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/SCDvtRLDgO5AMESf7xD45bn89gKhKfzc_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/SCDvtRLDgO5AMESf7xD45bn89gKhKfzc.jpg",
          "https://maps.pasargedesolo.com/storage/locations/rjb69YGk5Mws0WjLKJ0ienv3WWwlADsVRLaTHrYK.jpg"
        ],
        "entries": [
          {
            "x": 493,
            "y": 642
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef425dc-26ef-44b7-a265-5899feef30b7",
        "nodeId": "n_9ef425dc-26ef-44b7-a265-5899feef30b7",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Dhira",
        "name": "Toko Dhira",
        "category": "fashion",
        "categoryLabel": "Aksesoris & Fashion",
        "icon": "👜",
        "color": "#E91E63",
        "x": 435,
        "y": 122,
        "lat": 902,
        "lng": 435,
        "description": "Toko Dhira merupakan toko perlengkapan dan aksesoris yang ada di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/FFZfXLyEB4YoWE7PDrAvhbJraZiq5uln.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/FFZfXLyEB4YoWE7PDrAvhbJraZiq5uln_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/FFZfXLyEB4YoWE7PDrAvhbJraZiq5uln.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/VYvZqLzyEC3eyWA2Yo8KVlx96Jk8JMfg9ZnTfoKv.jpg"
        ],
        "entries": [
          {
            "x": 433,
            "y": 111
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41fd9-f7c3-4b41-8f79-d40040194a5c",
        "nodeId": "n_9ef41fd9-f7c3-4b41-8f79-d40040194a5c",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "UD Eka Sari",
        "name": "UD Eka Sari",
        "category": "service",
        "categoryLabel": "Jasa & Lainnya",
        "icon": "🛠️",
        "color": "#607D8B",
        "x": 261,
        "y": 209,
        "lat": 815,
        "lng": 261,
        "description": "UD Eka Sari merupakan kios kelontong di Pasar Gedhe Solo yang menyediakan layanan kursus jahitan dan menerima jahitan serta menjual minuman dan rokok",
        "image": "https://maps.pasargedesolo.com/storage/stores/5hiryQpTZ2PXHRjBej73p4iWKepRBjoB.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/5hiryQpTZ2PXHRjBej73p4iWKepRBjoB_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/5hiryQpTZ2PXHRjBej73p4iWKepRBjoB.jpg",
          "https://maps.pasargedesolo.com/storage/locations/AN3x3Uqbgdv1uTpS6hbtjXkyC0sszxxBpA0XHTeu.jpg"
        ],
        "entries": [
          {
            "x": 247,
            "y": 204
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3e98-c6c5-47a0-8a0f-70576cf08665",
        "nodeId": "n_9eec3e98-c6c5-47a0-8a0f-70576cf08665",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Ponirah",
        "name": "Kios Bu Ponirah",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 390,
        "y": 613,
        "lat": 411,
        "lng": 390,
        "description": "Kios Bu nPonirah adalah salah satu kios sayur yang berada di Pasar Gedhe yang menjual spesialis bermacam-macam aneka sayuran segar",
        "image": "https://maps.pasargedesolo.com/storage/stores/evT4oAGHMlmY5Qp08IeSFU3iLwKsb6A2.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/evT4oAGHMlmY5Qp08IeSFU3iLwKsb6A2_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/evT4oAGHMlmY5Qp08IeSFU3iLwKsb6A2.jpg",
          "https://maps.pasargedesolo.com/storage/locations/HXnWhBiS0JQPBBzGL7eLDxQs9ChN4XFcgylRYa7d.jpg"
        ],
        "entries": [
          {
            "x": 387,
            "y": 601
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef29eb0-2314-43d9-b495-5dba98d84e95",
        "nodeId": "n_9ef29eb0-2314-43d9-b495-5dba98d84e95",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Ayam Goreng Mbak Siti",
        "name": "Ayam Goreng Mbak Siti",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 595,
        "y": 726,
        "lat": 298,
        "lng": 595,
        "description": "Ayam Goreng Mbak Siti merupakan salah satu kios yang ada di Pasar Gedhe yang menyediakan spesialis ayam goreng dan peyek",
        "image": "https://maps.pasargedesolo.com/storage/stores/EEzQ1vs0mcy3JBQ2GzgKrhDiK4lZeBMV.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/EEzQ1vs0mcy3JBQ2GzgKrhDiK4lZeBMV_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/EEzQ1vs0mcy3JBQ2GzgKrhDiK4lZeBMV.jpg",
          "https://maps.pasargedesolo.com/storage/locations/wp0GhMnVtGfYYInLt28kYMrqZ1P1vbUK6dfGA7nC.jpg"
        ],
        "entries": [
          {
            "x": 593,
            "y": 742
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3107-c317-452c-82f6-29cc2dd82115",
        "nodeId": "n_9eec3107-c317-452c-82f6-29cc2dd82115",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Berkat Sesami 1",
        "name": "Kios Berkat Sesami 1",
        "category": "perkakas",
        "categoryLabel": "Perkakas Rumah",
        "icon": "🍳",
        "color": "#795548",
        "x": 674,
        "y": 701,
        "lat": 323,
        "lng": 674,
        "description": "Kios Berkat Sesami 1 adalah salah satu kios yang ada di Pasar Gedhe yang menjual aneka gerabah seperti kendi, ulekan dan tampah",
        "image": "https://maps.pasargedesolo.com/storage/stores/G1VeqUbXpO8nFbwzDYW6BW1Bdk1OxL3m.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/G1VeqUbXpO8nFbwzDYW6BW1Bdk1OxL3m_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/G1VeqUbXpO8nFbwzDYW6BW1Bdk1OxL3m.jpg"
        ],
        "entries": [
          {
            "x": 671,
            "y": 688
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec34d8-ee57-4d57-ae93-a1828257cb45",
        "nodeId": "n_9eec34d8-ee57-4d57-ae93-a1828257cb45",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Daryanti 1",
        "name": "Kios Bu Daryanti 1",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 594,
        "y": 641,
        "lat": 383,
        "lng": 594,
        "description": "Kios Bu Daryanti memiliki dua kios yang berhadapan yang ada di Pasar Gedhe yang menyediakan berbagai macam sembako, cemilan dan minuman sachet yang lengkap",
        "image": "https://maps.pasargedesolo.com/storage/stores/W3nScx8hZHWJIah2o0vrFoQDHGRDtAt7.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/W3nScx8hZHWJIah2o0vrFoQDHGRDtAt7_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/W3nScx8hZHWJIah2o0vrFoQDHGRDtAt7.jpg",
          "https://maps.pasargedesolo.com/storage/locations/9Fe4uqgZH1GGSZTokzttrKr8TebayIYmaRY6ghzF.jpg"
        ],
        "entries": [
          {
            "x": 600,
            "y": 656
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5b63-618d-47af-949e-1bf25c595cdc",
        "nodeId": "n_9eec5b63-618d-47af-949e-1bf25c595cdc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Gerabatan",
        "name": "Kios Gerabatan",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 290,
        "y": 362,
        "lat": 662,
        "lng": 290,
        "description": "Kios Gerabatan adalah salah satu kios yang ada di Pasar Gedhe yang menjual aneka sayur dan jajanan pasar",
        "image": "https://maps.pasargedesolo.com/storage/stores/cPaT1YyGQyISTjH6X60232VavGcaiQ5h.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/cPaT1YyGQyISTjH6X60232VavGcaiQ5h_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/cPaT1YyGQyISTjH6X60232VavGcaiQ5h.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Xy9AZ2b9buPyxhpW5qXoo3W7ZtZ49tonGNPCeOmp.jpg"
        ],
        "entries": [
          {
            "x": 306,
            "y": 362
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
        "nodeId": "n_9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bu Wahyuni",
        "name": "Oprokan Bu Wahyuni",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 509,
        "y": 806,
        "lat": 218,
        "lng": 509,
        "description": "Oprokan Bu Wahyuni adalah salah satu oprokan yang ada di Pasar Gedhe yang menjual spesialis rempah-rempah jamu racikan dan teh solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/S5Y5EhBZ80WWFjlhko2IWteOasVHRW6R.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/S5Y5EhBZ80WWFjlhko2IWteOasVHRW6R_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/S5Y5EhBZ80WWFjlhko2IWteOasVHRW6R.jpg",
          "https://maps.pasargedesolo.com/storage/locations/E58M7jJWnyxgezuojQ8mlbCGdCj8L83OVKG1U5tt.jpg"
        ],
        "entries": [
          {
            "x": 503,
            "y": 810
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef29dea-c489-4e46-81d9-93fbacb6aedc",
        "nodeId": "n_9ef29dea-c489-4e46-81d9-93fbacb6aedc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oleh-Oleh Mbak Ririn",
        "name": "Kios Oleh-Oleh Mbak Ririn",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 649,
        "y": 728,
        "lat": 296,
        "lng": 649,
        "description": "Kios Oleh-Oleh Mbak Ririn merupakan salah satu kios yang menjual beragam cemilan oleh-oleh khas Solo seperti intip, karak, dan racikan teh",
        "image": "https://maps.pasargedesolo.com/storage/stores/8gwtTNn4UxKO0EeTTYPq72ZcEUiDZWbI.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/8gwtTNn4UxKO0EeTTYPq72ZcEUiDZWbI_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/8gwtTNn4UxKO0EeTTYPq72ZcEUiDZWbI.jpg",
          "https://maps.pasargedesolo.com/storage/locations/x3FZLrJOmQZqfUeWnhHnrY4qIr1nGGVGCmxQPb52.jpg"
        ],
        "entries": [
          {
            "x": 654,
            "y": 743
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f02c559-6a1c-4dce-9930-267b455913ef",
        "nodeId": "n_9f02c559-6a1c-4dce-9930-267b455913ef",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Veve 1",
        "name": "Kios Bu Veve 1",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 421,
        "y": 498,
        "lat": 526,
        "lng": 421,
        "description": "Kios Bu Veve adalah salah satu toko yang ada di Pasar Gedhe yang spesialis menjual aneka kecap dan aneka saus",
        "image": "https://maps.pasargedesolo.com/storage/stores/kVOvRhG7zZ3BmhNTSu5uUgluouG9koXw.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/kVOvRhG7zZ3BmhNTSu5uUgluouG9koXw_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/kVOvRhG7zZ3BmhNTSu5uUgluouG9koXw.jpg",
          "https://maps.pasargedesolo.com/storage/locations/pAHBp2i9mPJgaRR3eRE1mnMgOlp4hoeVSHdGP95x.jpg",
          "https://maps.pasargedesolo.com/storage/locations/TbE3LdVi7pUCtJcef9OXB1WqPzIaeyjPrwLSMWrE.jpg"
        ],
        "entries": [
          {
            "x": 415,
            "y": 489
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41a7b-728f-41b1-835f-157d68a046c2",
        "nodeId": "n_9ef41a7b-728f-41b1-835f-157d68a046c2",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "MD Buah",
        "name": "MD Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 259,
        "y": 324,
        "lat": 700,
        "lng": 259,
        "description": "MD Buah adalah salah satu toko di Pasar Gedhe yang menjual aneka buah import dan lokal yang menerima pesanan buah secara eceran dan grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/BGNTvp5NHMRmC5osdN62q3H7yXJ6pxFW.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/BGNTvp5NHMRmC5osdN62q3H7yXJ6pxFW_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/BGNTvp5NHMRmC5osdN62q3H7yXJ6pxFW.jpeg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 324
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef43c82-5745-43da-9a3f-1df23a31f580",
        "nodeId": "n_9ef43c82-5745-43da-9a3f-1df23a31f580",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Pak Slamet",
        "name": "Toko Pak Slamet",
        "category": "kerajinan",
        "categoryLabel": "Batik & Kerajinan",
        "icon": "🧵",
        "color": "#8E44AD",
        "x": 762,
        "y": 640,
        "lat": 384,
        "lng": 762,
        "description": "Toko Pak Slamet merupakan kios yang ada di Pasar Gedhe yang menyediakan perlengkapan kemasan",
        "image": "https://maps.pasargedesolo.com/storage/stores/xvvRxmEjfOYdyKJDksCF4t2UYzTWNWjP.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/xvvRxmEjfOYdyKJDksCF4t2UYzTWNWjP_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/xvvRxmEjfOYdyKJDksCF4t2UYzTWNWjP.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/5cPvrgg0qw2KjhwWse44bECZ9NGgCsIebR6oAHDg.jpg"
        ],
        "entries": [
          {
            "x": 776,
            "y": 651
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec35f7-3089-4c32-abaf-364d5ca702ca",
        "nodeId": "n_9eec35f7-3089-4c32-abaf-364d5ca702ca",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Makbenk 1",
        "name": "Kios Makbenk 1",
        "category": "perkakas",
        "categoryLabel": "Perkakas Rumah",
        "icon": "🍳",
        "color": "#795548",
        "x": 735,
        "y": 639,
        "lat": 385,
        "lng": 735,
        "description": "Kios Makbenk 1 merupakan kios yang ada di Pasar Gedhe yang menyediakan spesialis gerabah dan alat kebersihan yang lengkap seperti sapu, tampah, camping, dan alat makan dari rotan atau kayu. Kios Makbenk memiliki 2 kios di sisi depan dan belakang bersebrangan",
        "image": "https://maps.pasargedesolo.com/storage/stores/KNoOSwi62mAPKbuSKLqWtKNxfMNl259K.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/KNoOSwi62mAPKbuSKLqWtKNxfMNl259K_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/KNoOSwi62mAPKbuSKLqWtKNxfMNl259K.jpg",
          "https://maps.pasargedesolo.com/storage/locations/khhvBQWfYaodPtHXsTybpozI62n9XCahavDRznjE.jpg"
        ],
        "entries": [
          {
            "x": 723,
            "y": 638
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a",
        "nodeId": "n_9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Jamu Bu Wahyuni",
        "name": "Kios Jamu Bu Wahyuni",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 409,
        "y": 779,
        "lat": 245,
        "lng": 409,
        "description": "Kios Jamu Bu Wahyuni  adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis rempah-rempahan untuk jamu racikan dan minuman jamu untuk berbagai masalah kesehatan",
        "image": "https://maps.pasargedesolo.com/storage/stores/1lYzhcDDmgPBmVbHFhwQP5nkVS5EobB1.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/1lYzhcDDmgPBmVbHFhwQP5nkVS5EobB1_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/1lYzhcDDmgPBmVbHFhwQP5nkVS5EobB1.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Mr9PjVdb986UP9MWSUmiL7wSlBZ24Zo3OYnhxotX.jpg"
        ],
        "entries": [
          {
            "x": 409,
            "y": 769
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec310c-70f4-4bd0-990d-3faaf7921fa6",
        "nodeId": "n_9eec310c-70f4-4bd0-990d-3faaf7921fa6",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Jamu Bu Widarsih",
        "name": "Kios Jamu Bu Widarsih",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 408,
        "y": 745,
        "lat": 279,
        "lng": 408,
        "description": "Kios Jamu Bu Widarsih adalah salah satu kios jamu tradisioanl yang berada di Pasar Gedhe yang khusus menjual berbagai jenis bahan untuk jamu racikan dan minuman untuk berbagai masalah kesehatan",
        "image": "https://maps.pasargedesolo.com/storage/stores/hoelEjskcdqovhE4KnUKumGG4VFVVzuP.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/hoelEjskcdqovhE4KnUKumGG4VFVVzuP_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/hoelEjskcdqovhE4KnUKumGG4VFVVzuP.jpg",
          "https://maps.pasargedesolo.com/storage/locations/4aN7Yb6mCggYvsRT0jAZ1udvCA1ENkIVlwg74jfQ.jpg"
        ],
        "entries": [
          {
            "x": 399,
            "y": 756
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5835-ae8a-444d-8e2e-30ad85e21688",
        "nodeId": "n_9eec5835-ae8a-444d-8e2e-30ad85e21688",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Tahu Bandung Afif",
        "name": "Tahu Bandung Afif",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 550,
        "y": 496,
        "lat": 528,
        "lng": 550,
        "description": "Tahu Bandung Afif merupakan kios yang ada di Pasar Gedhe yang menyediakan spesialis tahu",
        "image": "https://maps.pasargedesolo.com/storage/stores/pFoKfEhSGyvlGff3l7HKD63jjbNFax5g.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/pFoKfEhSGyvlGff3l7HKD63jjbNFax5g_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/pFoKfEhSGyvlGff3l7HKD63jjbNFax5g.jpg"
        ],
        "entries": [
          {
            "x": 547,
            "y": 487
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f041129-173e-44e5-8da6-2be7c21d0bea",
        "nodeId": "n_9f041129-173e-44e5-8da6-2be7c21d0bea",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Ayam Goreng Bu Poppy",
        "name": "Ayam Goreng Bu Poppy",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 613,
        "y": 726,
        "lat": 298,
        "lng": 613,
        "description": "Ayam Goreng Bu Poppy merupakan salah satu kios los yang ada di Pasar Gedhe yang menjual spesialis Ayam Goreng dan Kremesan",
        "image": "https://maps.pasargedesolo.com/storage/stores/sLvlnJQqcOxuONetTGcenfXKB06Efb7K.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/sLvlnJQqcOxuONetTGcenfXKB06Efb7K_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/sLvlnJQqcOxuONetTGcenfXKB06Efb7K.jpg",
          "https://maps.pasargedesolo.com/storage/locations/DgBIJ72YencRxOlW2ECCWEHgsDpDWNA2FtxjF7R3.jpg"
        ],
        "entries": [
          {
            "x": 610,
            "y": 743
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef3f5c6-9924-44b8-975c-3f59c93577ba",
        "nodeId": "n_9ef3f5c6-9924-44b8-975c-3f59c93577ba",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Catur",
        "name": "Kios Bu Catur",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 595,
        "y": 571,
        "lat": 453,
        "lng": 595,
        "description": "Kios Bu Catur merupakan salah satu kios yang ada di Pasar Gedhe yang menjual spesialis bumbu dapur seperti bawang merah, bawang putih, bawang bombai, cabai merah dan cabai hijau",
        "image": "https://maps.pasargedesolo.com/storage/stores/kayU6qAP4xm5iZ6zBHuEOaW42SqPuKM2.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/kayU6qAP4xm5iZ6zBHuEOaW42SqPuKM2_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/kayU6qAP4xm5iZ6zBHuEOaW42SqPuKM2.jpg",
          "https://maps.pasargedesolo.com/storage/locations/K622hg0hHNRGY7POwlOoK5U7Ru6PhDaEj1zaHTR8.jpg"
        ],
        "entries": [
          {
            "x": 599,
            "y": 582
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f02a372-defa-4ac0-891c-f00311bf5192",
        "nodeId": "n_9f02a372-defa-4ac0-891c-f00311bf5192",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Jum Telur",
        "name": "Kios Bu Jum Telur",
        "category": "telur",
        "categoryLabel": "Telur",
        "icon": "🥚",
        "color": "#F1C40F",
        "x": 664,
        "y": 640,
        "lat": 384,
        "lng": 664,
        "description": "Kios Bu Jum Telur merupakan salah satu kios yang ada di Pasar Gedhe yang menjual spesialis telur asin dan telur jawa",
        "image": "https://maps.pasargedesolo.com/storage/stores/MX5yKrRNNfCpzQaZmb6VcVbJygcGiW4s.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/MX5yKrRNNfCpzQaZmb6VcVbJygcGiW4s_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/MX5yKrRNNfCpzQaZmb6VcVbJygcGiW4s.jpg",
          "https://maps.pasargedesolo.com/storage/locations/A7NqloqXcJGjXeKtdQiLdEwrXN7qMq96wwKD9dUU.jpg"
        ],
        "entries": [
          {
            "x": 670,
            "y": 658
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec38ed-4c60-42b3-9db6-f92840261624",
        "nodeId": "n_9eec38ed-4c60-42b3-9db6-f92840261624",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Yayuk 2",
        "name": "Kios Bu Yayuk 2",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 382,
        "y": 639,
        "lat": 385,
        "lng": 382,
        "description": "Kios Bu Yayuk 2 adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis sayur-sayuran seperti sayur selada dan sawi putih dan menyediakan aneka bumbu masa",
        "image": "https://maps.pasargedesolo.com/storage/stores/6PLDjPhRyF0GyMuVJRaPpma3cKj9zleI.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/6PLDjPhRyF0GyMuVJRaPpma3cKj9zleI_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/6PLDjPhRyF0GyMuVJRaPpma3cKj9zleI.jpg"
        ],
        "entries": [
          {
            "x": 383,
            "y": 656
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
        "nodeId": "n_9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Ibu Dal",
        "name": "Kios Ibu Dal",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 577,
        "y": 552,
        "lat": 472,
        "lng": 577,
        "description": "Kios Ibu Dal merupakan salah satu kios yang ada di Pasar Gedhe yang menjual spesialis sambal pecel",
        "image": "https://maps.pasargedesolo.com/storage/stores/XCwTPg1YOd8yyNgzPfWkQqILGLnY13nH.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/XCwTPg1YOd8yyNgzPfWkQqILGLnY13nH_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/XCwTPg1YOd8yyNgzPfWkQqILGLnY13nH.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Vw1FvmzXMgIm4mf3a1FES5BnuJXSUayRAa4y1BLN.jpg"
        ],
        "entries": [
          {
            "x": 576,
            "y": 542
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04457e-9e1a-416d-a0e3-d7a83426bf57",
        "nodeId": "n_9f04457e-9e1a-416d-a0e3-d7a83426bf57",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Partini 2",
        "name": "Kios Bu Partini 2",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 597,
        "y": 451,
        "lat": 573,
        "lng": 597,
        "description": "Kios Bu Partini 2 merupakan cabang dari Kios Bu Partini 1 yang menyediakan buah jeruk dan bahan-bahan dapur",
        "image": "https://maps.pasargedesolo.com/storage/stores/mBmsvdySfDkkMrFig5ayX4NowJMrA0FT.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/mBmsvdySfDkkMrFig5ayX4NowJMrA0FT_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/mBmsvdySfDkkMrFig5ayX4NowJMrA0FT.jpg"
        ],
        "entries": [
          {
            "x": 594,
            "y": 438
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef402e4-4f80-4eee-bd9d-9bfcbec874fd",
        "nodeId": "n_9ef402e4-4f80-4eee-bd9d-9bfcbec874fd",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Wiwin 1",
        "name": "Kios Bu Wiwin 1",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 665,
        "y": 408,
        "lat": 616,
        "lng": 665,
        "description": "Kios Bu Wiwin merupakan kios yang ada di Pasar Gedhe dan memiliki 2 kios yang berhadapan yang menyediakan spesialis nangka, pisang, mete, sambal pecel mete, dan sembako",
        "image": "https://maps.pasargedesolo.com/storage/stores/t4iH7a4VFtrdEJMXY60yCMZ9WkG8qV2t.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/t4iH7a4VFtrdEJMXY60yCMZ9WkG8qV2t_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/t4iH7a4VFtrdEJMXY60yCMZ9WkG8qV2t.jpg"
        ],
        "entries": [
          {
            "x": 673,
            "y": 420
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0424ff-2689-4922-a15d-e0b2c4ad6f39",
        "nodeId": "n_9f0424ff-2689-4922-a15d-e0b2c4ad6f39",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Los Bu Sarni",
        "name": "Los Bu Sarni",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 619,
        "y": 514,
        "lat": 510,
        "lng": 619,
        "description": "Los Bu Sarni merupakan salah satu kios yang ada di Pasar Gedhe yang menjual beragam tanaman biji rempah seperti sereh, jahe, dan kunyit",
        "image": "https://maps.pasargedesolo.com/storage/stores/eLrLr2LqMDipJASDYVSuGrp9Cja1rp4c.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/eLrLr2LqMDipJASDYVSuGrp9Cja1rp4c_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/eLrLr2LqMDipJASDYVSuGrp9Cja1rp4c.jpg",
          "https://maps.pasargedesolo.com/storage/locations/AGdA8vNcEqW7TfMIOJLh6Ts0XGr4lm45hOKGM1x6.jpg"
        ],
        "entries": [
          {
            "x": 607,
            "y": 527
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41a00-bddb-4d7b-ba21-c09d9600a459",
        "nodeId": "n_9ef41a00-bddb-4d7b-ba21-c09d9600a459",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Sabar Subur",
        "name": "Toko Sabar Subur",
        "category": "kerajinan",
        "categoryLabel": "Batik & Kerajinan",
        "icon": "🧵",
        "color": "#8E44AD",
        "x": 261,
        "y": 418,
        "lat": 606,
        "lng": 261,
        "description": "Toko Sabar Subur adalah salah satu toko legendaris yang ada di kawasan Pasar Gedhe yang dikenal sebagai pusat penjualan berbagai produk roti, kue kering dan perlengkapan memasak serta perlengkapan ulang tahun yang cukup komplit",
        "image": "https://maps.pasargedesolo.com/storage/stores/jmUcFM4ihssZd6BX8TE1WLBn2WkrQl54.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/jmUcFM4ihssZd6BX8TE1WLBn2WkrQl54_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/jmUcFM4ihssZd6BX8TE1WLBn2WkrQl54.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/HyDoop2cHLT1NeB9iF7i87U6lnAcWOMb93OrX7TF.jpg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 419
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4131c-f2ad-4d23-b754-98c0712cebd1",
        "nodeId": "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "UD Tanti 1",
        "name": "UD Tanti 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 260,
        "y": 296,
        "lat": 728,
        "lng": 260,
        "description": "UD Tanti 1 adalah salah satu kios buah yang berada di kawasan Pasar Gedhe yang menjual aneka buah-buahan dan menerima pesanan secara grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/Qf8hrpV9mF8kQKRWo9JoNQqPRL6brNx4.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Qf8hrpV9mF8kQKRWo9JoNQqPRL6brNx4_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Qf8hrpV9mF8kQKRWo9JoNQqPRL6brNx4.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/sdueY7eMcvwe7AGZ4lcQ0wUHwt4M0Weg0UgHx4A8.jpg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 297
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef41903-2f5c-4eab-b8d4-bdb0846b37db",
        "nodeId": "n_9ef41903-2f5c-4eab-b8d4-bdb0846b37db",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Rukun Baru",
        "name": "Toko Rukun Baru",
        "category": "kerajinan",
        "categoryLabel": "Batik & Kerajinan",
        "icon": "🧵",
        "color": "#8E44AD",
        "x": 262,
        "y": 637,
        "lat": 387,
        "lng": 262,
        "description": "Toko Rukun Baru adalah toko yang berada di Pasar Gedhe yang menjual berbagai kebutuhan packacing yang cukup komplit dan bervariasi",
        "image": "https://maps.pasargedesolo.com/storage/stores/2sA61wnpsp2ZfL3T38ZmCOVMvOK8af9M.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/2sA61wnpsp2ZfL3T38ZmCOVMvOK8af9M_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/2sA61wnpsp2ZfL3T38ZmCOVMvOK8af9M.jpg",
          "https://maps.pasargedesolo.com/storage/locations/bkK5aN6NWykxtUttPkwuTtoxE1uNLlHdTt7K6VFk.jpg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 638
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04167c-11e9-43c8-b3df-e10c93aed77f",
        "nodeId": "n_9f04167c-11e9-43c8-b3df-e10c93aed77f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Buah Bu Nanit",
        "name": "Oprokan Buah Bu Nanit",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 431,
        "y": 232,
        "lat": 792,
        "lng": 431,
        "description": "Oprokan Buah Bu Nanit adalah salah satu oprokan yang berada di Pasar Gedhe Pintu Utama yang menjual buah seperti pisang dan jambu",
        "image": "https://maps.pasargedesolo.com/storage/stores/ZlOmW3GmHJEsQneMZTW2jCQbVUL6DtS9.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ZlOmW3GmHJEsQneMZTW2jCQbVUL6DtS9_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ZlOmW3GmHJEsQneMZTW2jCQbVUL6DtS9.jpg",
          "https://maps.pasargedesolo.com/storage/locations/CgHHLjQKTqXuc1Eud5zNtrIwrjVsMK9C6Bx1phub.jpg"
        ],
        "entries": [
          {
            "x": 432,
            "y": 248
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3892-7cee-4816-af43-dd4b1000e78c",
        "nodeId": "n_9eec3892-7cee-4816-af43-dd4b1000e78c",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Jenang Dodol Bu Murni",
        "name": "Jenang Dodol Bu Murni",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 646,
        "y": 552,
        "lat": 472,
        "lng": 646,
        "description": "Jenang Dodol Bu Murni merupakan kios yang ada di Pasar Gedhe yang menyediakan spesialis jenang dodol dan wajik",
        "image": "https://maps.pasargedesolo.com/storage/stores/pw7IAHz4dSR1bQtKTv8rRqgeGOpXv5MW.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/pw7IAHz4dSR1bQtKTv8rRqgeGOpXv5MW_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/pw7IAHz4dSR1bQtKTv8rRqgeGOpXv5MW.jpg",
          "https://maps.pasargedesolo.com/storage/locations/LENUSV45X2i4OMHSbFMJf4TGhFx2yDU83t39CVty.jpg"
        ],
        "entries": [
          {
            "x": 645,
            "y": 542
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f044dd6-50c4-4a00-8d41-f7236a1510f2",
        "nodeId": "n_9f044dd6-50c4-4a00-8d41-f7236a1510f2",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Mbak Rani Sembako",
        "name": "Kios Mbak Rani Sembako",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 736,
        "y": 424,
        "lat": 600,
        "lng": 736,
        "description": "Kios Mbak Rani Sembako merupakan kios yang ada di Pasar Gedhe yang menjual beragam bahan sembako yang lengkap",
        "image": "https://maps.pasargedesolo.com/storage/stores/bW6LjXPnhUqWuhvQvZWjeEKzLZ6Fhgp4.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/bW6LjXPnhUqWuhvQvZWjeEKzLZ6Fhgp4_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/bW6LjXPnhUqWuhvQvZWjeEKzLZ6Fhgp4.jpg",
          "https://maps.pasargedesolo.com/storage/locations/ehEqRZuYNfRDkuuVSUiidpUzHfOKVApWrVt3mEjX.jpg"
        ],
        "entries": [
          {
            "x": 723,
            "y": 428
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec381f-5274-4161-80f7-4e699eac0e46",
        "nodeId": "n_9eec381f-5274-4161-80f7-4e699eac0e46",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Ibu Sartini",
        "name": "Kios Ibu Sartini",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 549,
        "y": 552,
        "lat": 472,
        "lng": 549,
        "description": "Kios Ibu Sartini merupakan kios yang berada di Pasar Gedhe yang menyediakan spesialis jahe, kunyit, serai, daun pandan dan juga racikan teh",
        "image": "https://maps.pasargedesolo.com/storage/stores/bhpc5hRIYfS8Gvbn8qdQ2aRuLdk0mjKt.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/bhpc5hRIYfS8Gvbn8qdQ2aRuLdk0mjKt_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/bhpc5hRIYfS8Gvbn8qdQ2aRuLdk0mjKt.jpg",
          "https://maps.pasargedesolo.com/storage/locations/oSBFCZi9H49trIIpR7nslvVDEyKt0PDlI1x00QdL.jpg"
        ],
        "entries": [
          {
            "x": 548,
            "y": 542
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef657c0-df64-4788-8c53-46c926b8ba6d",
        "nodeId": "n_9ef657c0-df64-4788-8c53-46c926b8ba6d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Los Bu Tritunggal",
        "name": "Los Bu Tritunggal",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 546,
        "y": 450,
        "lat": 574,
        "lng": 546,
        "description": "Los Bu Tritunggal merupakan los yang ada di Pasar Gedhe yang menyediakan khusus buah pepaya dan telur jawa",
        "image": "https://maps.pasargedesolo.com/storage/stores/reAc9n7h537A8r4g2dOtlMM5Negj8NNW.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/reAc9n7h537A8r4g2dOtlMM5Negj8NNW_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/reAc9n7h537A8r4g2dOtlMM5Negj8NNW.jpg"
        ],
        "entries": [
          {
            "x": 547,
            "y": 439
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4985-1d89-4358-b5ba-2b7ceb84dacb",
        "nodeId": "n_9eec4985-1d89-4358-b5ba-2b7ceb84dacb",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oleh Oleh Bu Saji 2",
        "name": "Kios Oleh Oleh Bu Saji 2",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 618,
        "y": 388,
        "lat": 636,
        "lng": 618,
        "description": "Oleh-Oleh Khas Solo Bu Saji adalah kios yang terletak di dalam Pasar Gedhe Solo, dikenal sebagai salah satu tempat terbaik untuk mencari oleh-oleh khas Solo. Kios ini menawarkan beragam produk tradisional seperti intip madu, karak bawang, bakpia kering, mete goreng, abon halus, lanting, bagelan, roti jadul, serta berbagai camilan khas lainnya.",
        "image": "https://maps.pasargedesolo.com/storage/stores/iXsNygOGNpqbiXAiwtIa5TKyH2NDO2WK.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/iXsNygOGNpqbiXAiwtIa5TKyH2NDO2WK_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/iXsNygOGNpqbiXAiwtIa5TKyH2NDO2WK.jpg",
          "https://maps.pasargedesolo.com/storage/locations/UNzcpqDx4Dg9oya3OlpjdEd49IohFyzP78T5Ys2U.jpg"
        ],
        "entries": [
          {
            "x": 597,
            "y": 379
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
        "nodeId": "n_9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Jamu Bu Fitri",
        "name": "Jamu Bu Fitri",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 558,
        "y": 468,
        "lat": 556,
        "lng": 558,
        "description": "Jamu Bu Fitri merupakan kios yang ada di Pasar Gedhe yang menyediakan spesialis wedang rempah, bahan wedang rempah, dan lulur",
        "image": "https://maps.pasargedesolo.com/storage/stores/8PewKSFdA0wtSjUvm7wUWvrO6sfEnkfP.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/8PewKSFdA0wtSjUvm7wUWvrO6sfEnkfP_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/8PewKSFdA0wtSjUvm7wUWvrO6sfEnkfP.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Qnkq0NZioDJwMnNT5gt4uBiaDiK3jjAgBL9eknHx.jpg"
        ],
        "entries": [
          {
            "x": 544,
            "y": 476
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f042a6b-39f8-4337-a1f1-bd728ff89b72",
        "nodeId": "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Los Bu Sugianti",
        "name": "Los Bu Sugianti",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 677,
        "y": 514,
        "lat": 510,
        "lng": 677,
        "description": "Los Bu Sugianti merupakan los yang ada di Pasar Gedhe yang menyediakan spesialis menjual labu dan bligo",
        "image": "https://maps.pasargedesolo.com/storage/stores/m9FkfXWgXH03I7s1VxjhhMOSVyZRixKd.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/m9FkfXWgXH03I7s1VxjhhMOSVyZRixKd_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/m9FkfXWgXH03I7s1VxjhhMOSVyZRixKd.jpg"
        ],
        "entries": [
          {
            "x": 666,
            "y": 527
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0429c7-ef47-4b3b-afcc-3ab832af596f",
        "nodeId": "n_9f0429c7-ef47-4b3b-afcc-3ab832af596f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Los Bu Tumini",
        "name": "Los Bu Tumini",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 648,
        "y": 512,
        "lat": 512,
        "lng": 648,
        "description": "Los Bu Tumini merupakan salah satu los yang ada di Pasar Gedhe yang menyediakan berbagai macam tanaman biji rempah dan bumbu dapur bubuk seperti merica, pala, dan kunyit",
        "image": "https://maps.pasargedesolo.com/storage/stores/zwWh559QeOaBOnU9jkcSAAnRXtiYhNJX.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/zwWh559QeOaBOnU9jkcSAAnRXtiYhNJX_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/zwWh559QeOaBOnU9jkcSAAnRXtiYhNJX.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Shpdu2ZmzRDOcdPyH9F6MAl63ivAcJTZmw3X0pKp.jpg"
        ],
        "entries": [
          {
            "x": 654,
            "y": 527
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
        "nodeId": "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Karak Solo Kevani 1",
        "name": "Karak Solo Kevani 1",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 616,
        "y": 285,
        "lat": 739,
        "lng": 616,
        "description": "Karak Solo Kevani 1 merupakan salah satu kios yang ada di pasar Gede yang menjual spesialis karak",
        "image": "https://maps.pasargedesolo.com/storage/stores/BvRutXNeRGeliSnzxjwN3QLpl5QRZJ0C.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/BvRutXNeRGeliSnzxjwN3QLpl5QRZJ0C_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/BvRutXNeRGeliSnzxjwN3QLpl5QRZJ0C.jpg"
        ],
        "entries": [
          {
            "x": 609,
            "y": 301
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec51e3-a665-453d-b51e-141c21e8affb",
        "nodeId": "n_9eec51e3-a665-453d-b51e-141c21e8affb",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Partini 1",
        "name": "Kios Bu Partini 1",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 473,
        "y": 444,
        "lat": 580,
        "lng": 473,
        "description": "Kios Bu Partini adalah salah satu kios yang ada di Pasar gede yang menjual spesialis aneka rambak dan krupuk",
        "image": "https://maps.pasargedesolo.com/storage/stores/0wItJ0R7PZMfYtkufvqNyoSHZoK30jdI.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/0wItJ0R7PZMfYtkufvqNyoSHZoK30jdI_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/0wItJ0R7PZMfYtkufvqNyoSHZoK30jdI.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Z2V6P6DbtyNLyiEwivabhptxmBgeGjXuurxb3I5h.jpg"
        ],
        "entries": [
          {
            "x": 467,
            "y": 439
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef42de0-2728-4d95-9266-ededfeb06d8f",
        "nodeId": "n_9ef42de0-2728-4d95-9266-ededfeb06d8f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Bu Nita",
        "name": "Toko Bu Nita",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 385,
        "y": 898,
        "lat": 126,
        "lng": 385,
        "description": "Toko Bu Nita adalah salah satu toko oleh-oleh yang terletak di Pasar Gedhe Pintu Utara yang menjual berbagai macam oleh-oleh khas solo seperti rambak dan camilan tradisional lainnya",
        "image": "https://maps.pasargedesolo.com/storage/stores/uCOlIusb7BoXPbFCVkJbZG8LzSgKKFvh.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/uCOlIusb7BoXPbFCVkJbZG8LzSgKKFvh_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/uCOlIusb7BoXPbFCVkJbZG8LzSgKKFvh.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/kOAgyvfUW79jsU8bvAPu4uu8mkb3RWYQJeZ3b2Ge.jpg"
        ],
        "entries": [
          {
            "x": 386,
            "y": 914
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f047a55-3030-4668-a3fe-c99dc724bda2",
        "nodeId": "n_9f047a55-3030-4668-a3fe-c99dc724bda2",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Veve 2",
        "name": "Kios Bu Veve 2",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 421,
        "y": 465,
        "lat": 559,
        "lng": 421,
        "description": "Kios Bu Veve adalah salah satu toko yang ada di Pasar Gedhe yang spesialis menjual aneka kecap dan aneka saus",
        "image": "https://maps.pasargedesolo.com/storage/stores/g369c6P6Ny49rUekh6ZLNpUGj6l0yMVw.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/g369c6P6Ny49rUekh6ZLNpUGj6l0yMVw_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/g369c6P6Ny49rUekh6ZLNpUGj6l0yMVw.jpg"
        ],
        "entries": [
          {
            "x": 428,
            "y": 477
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec42bc-b3b4-476d-8fae-f7860e927c9d",
        "nodeId": "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Dawet Telasih Bu Nur",
        "name": "Dawet Telasih Bu Nur",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 575,
        "y": 218,
        "lat": 806,
        "lng": 575,
        "description": "Dawet Telasih Bu Nur adalah tenant yang menjual minuman tradisional khas Solo yaitu dawet, selain es dawet juga menyediakan berbagai macam cemilan khas Solo seperti rambak, enting-enting dan sambal pecel",
        "image": "https://maps.pasargedesolo.com/storage/stores/mv3UVNbr4rXB780vTExACrUdIkIIFEBo.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/mv3UVNbr4rXB780vTExACrUdIkIIFEBo_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/mv3UVNbr4rXB780vTExACrUdIkIIFEBo.jpeg"
        ],
        "entries": [
          {
            "x": 579,
            "y": 233
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef40a61-6906-441e-ae49-124f2ecae71f",
        "nodeId": "n_9ef40a61-6906-441e-ae49-124f2ecae71f",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Telur Mbak Etik",
        "name": "Kios Telur Mbak Etik",
        "category": "telur",
        "categoryLabel": "Telur",
        "icon": "🥚",
        "color": "#F1C40F",
        "x": 557,
        "y": 287,
        "lat": 737,
        "lng": 557,
        "description": "Kios Telur Mbak Etik adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis telur asin dan telur ayam, selain menyediakan telur asin dan telur ayam juga menyediakan berbagai macam cemilan khas Solo.",
        "image": "https://maps.pasargedesolo.com/storage/stores/kKOKmZviPzbFCs0ZgJopVO109zjFX9HI.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/kKOKmZviPzbFCs0ZgJopVO109zjFX9HI_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/kKOKmZviPzbFCs0ZgJopVO109zjFX9HI.jpg",
          "https://maps.pasargedesolo.com/storage/locations/2mlJzF57bc4DaNbPTE9UiDkQff6jCClcPkCELqaQ.jpg"
        ],
        "entries": [
          {
            "x": 549,
            "y": 288
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f045211-e8ff-4de9-9af7-a331e4ef8fbf",
        "nodeId": "n_9f045211-e8ff-4de9-9af7-a331e4ef8fbf",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Lestari",
        "name": "Kios Bu Lestari",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 580,
        "y": 286,
        "lat": 738,
        "lng": 580,
        "description": "Kios Bu Lestari merupakan kios yang ada di Pasar Gedhe yang menyediakan spesialis bumbu dapur",
        "image": "https://maps.pasargedesolo.com/storage/stores/XX4kQhdo2Icf0tlhjWLnQ5vZQ1QkqFzv.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/XX4kQhdo2Icf0tlhjWLnQ5vZQ1QkqFzv_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/XX4kQhdo2Icf0tlhjWLnQ5vZQ1QkqFzv.jpg",
          "https://maps.pasargedesolo.com/storage/locations/lmCkcLKCBkuJd9SkhjeotZGZ2XF9OXVgRW7qkQEb.jpg"
        ],
        "entries": [
          {
            "x": 572,
            "y": 301
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f047b2d-89fe-499e-9e0b-4171a7a22adf",
        "nodeId": "n_9f047b2d-89fe-499e-9e0b-4171a7a22adf",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Susi",
        "name": "Kios Bu Susi",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 475,
        "y": 465,
        "lat": 559,
        "lng": 475,
        "description": "Kios Bu Susi adalah salah satu kios yang ada di Pasar Gedhe yang menjual khusus makanan ringan seperti arem-arem dan lemper",
        "image": "https://maps.pasargedesolo.com/storage/stores/uTvYFje8vdH2RLAJvC6l8CsAURPHOq4G.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/uTvYFje8vdH2RLAJvC6l8CsAURPHOq4G_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/uTvYFje8vdH2RLAJvC6l8CsAURPHOq4G.jpg"
        ],
        "entries": [
          {
            "x": 479,
            "y": 478
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef856f6-4aaa-4051-9efc-df3b620afb8e",
        "nodeId": "n_9ef856f6-4aaa-4051-9efc-df3b620afb8e",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Bu Warni",
        "name": "Oprokan Bu Warni",
        "category": "perkakas",
        "categoryLabel": "Perkakas Rumah",
        "icon": "🍳",
        "color": "#795548",
        "x": 279,
        "y": 221,
        "lat": 803,
        "lng": 279,
        "description": "Oprokan Bu Warni merupakan oprokan yang ada di pintu masuk utama Pasar Gedhe yang menjual spesialis keperluan dapur seperti lesung dan muntu, pisau dengan beragam ukuran dan peniris gorengan",
        "image": "https://maps.pasargedesolo.com/storage/stores/hJOypItRkYX4f1mTVbrW4sLPNYFX2VO3.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/hJOypItRkYX4f1mTVbrW4sLPNYFX2VO3_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/hJOypItRkYX4f1mTVbrW4sLPNYFX2VO3.jpg",
          "https://maps.pasargedesolo.com/storage/locations/cubWlMgpQMawfQKSLeV4XKuEpSZ8Q37qyzULBtRw.jpg"
        ],
        "entries": [
          {
            "x": 277,
            "y": 230
          },
          {
            "x": 425,
            "y": 262
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebf269-1d48-4b6c-8c47-4c639e9776d9",
        "nodeId": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Warung Babi Mini",
        "name": "Warung Babi Mini",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 265,
        "y": 267,
        "lat": 757,
        "lng": 265,
        "description": "Warung Babi Mini adalah salah satu destinasi kuliner non halal yang populer di kawasan Pasar Gedhe yang dikenal dengan sajian olahan masakan babi yang menggugah selera",
        "image": "https://maps.pasargedesolo.com/storage/stores/kj16DnadkhkPMMPcTwvwMtSwynAEabNM.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/kj16DnadkhkPMMPcTwvwMtSwynAEabNM_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/kj16DnadkhkPMMPcTwvwMtSwynAEabNM.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/tPt0yOHn2QP8gwLil3egBBJ1eZ0pPOVu3RFaz74y.jpg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 276
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef419bb-3a9f-4824-bd0f-aab317663654",
        "nodeId": "n_9ef419bb-3a9f-4824-bd0f-aab317663654",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko KGH",
        "name": "Toko KGH",
        "category": "kerajinan",
        "categoryLabel": "Batik & Kerajinan",
        "icon": "🧵",
        "color": "#8E44AD",
        "x": 259,
        "y": 477,
        "lat": 547,
        "lng": 259,
        "description": "Toko KGH adalah salah satu toko yang terkenal di kawasan Pasar Gedhe sebagai penyedia perlengkapan dan spesialis pernak pernik untuk perayaan imlek dan kebutuhan ritual Thionghoa",
        "image": "https://maps.pasargedesolo.com/storage/stores/S8IkDxJdnR9SuyECqZwfdIkUdFJixBmP.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/S8IkDxJdnR9SuyECqZwfdIkUdFJixBmP_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/S8IkDxJdnR9SuyECqZwfdIkUdFJixBmP.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/vt4EKbmvPjLJ8UfTcOxIigj5nNMLTWg59XcNm7LT.jpg"
        ],
        "entries": [
          {
            "x": 249,
            "y": 479
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec5e21-534d-4f67-af99-cb0bc85b5203",
        "nodeId": "n_9eec5e21-534d-4f67-af99-cb0bc85b5203",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oprokan TM Buah",
        "name": "Kios Oprokan TM Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 359,
        "y": 273,
        "lat": 751,
        "lng": 359,
        "description": "Kios Oprokan TM Buah adalah salah satu kios oprokan yang ada di Pasar Gedhe Pintu Utama yang menjual spesialis buah-buahan",
        "image": "https://maps.pasargedesolo.com/storage/stores/9YSLdjSOtLpjwsDpAUbodusJa2ixbtkX.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/9YSLdjSOtLpjwsDpAUbodusJa2ixbtkX_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/9YSLdjSOtLpjwsDpAUbodusJa2ixbtkX.jpg",
          "https://maps.pasargedesolo.com/storage/locations/M2edw9YXqs2ZV81Kp8IGqypVnJ531SlYRBXGdnk9.jpg"
        ],
        "entries": [
          {
            "x": 360,
            "y": 260
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef299f5-c381-44d8-8aea-de1e241f4122",
        "nodeId": "n_9ef299f5-c381-44d8-8aea-de1e241f4122",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Hj Yatik JTK/YS Buah",
        "name": "Hj Yatik JTK/YS Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 443,
        "y": 146,
        "lat": 878,
        "lng": 443,
        "description": "Hj Yatik JTK/YS Buah adalah salsah satu tenant yang menjual spesialis buah jeruk grosir yang berada di lantai 2 Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/2y0rPE1RILqPVcNuGuoDwJ9G2gEt2FRg.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/2y0rPE1RILqPVcNuGuoDwJ9G2gEt2FRg_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/2y0rPE1RILqPVcNuGuoDwJ9G2gEt2FRg.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/jx1AdjgumZaHdTxBpD1TXvDIfzTEKw7peJRdWusk.jpg"
        ],
        "entries": [
          {
            "x": 442,
            "y": 162
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4429f-b4c4-48da-a29e-2ca7bf6f6ea0",
        "nodeId": "n_9ef4429f-b4c4-48da-a29e-2ca7bf6f6ea0",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Genduk Buah 2",
        "name": "Genduk Buah 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 663,
        "y": 895,
        "lat": 129,
        "lng": 663,
        "description": "Genduk Buah merupakan kios di Pasar Gedhe yang menyediakan beragam buah untuk suplier",
        "image": "https://maps.pasargedesolo.com/storage/stores/uQkstW1gUorAfjJklaqL6i5Sipcd1PZS.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/uQkstW1gUorAfjJklaqL6i5Sipcd1PZS_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/uQkstW1gUorAfjJklaqL6i5Sipcd1PZS.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/v8eW1mLyJ0FOWRLdsfd3EW4ZutofHzp65L6P78ZE.jpg"
        ],
        "entries": [
          {
            "x": 666,
            "y": 913
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec53a4-e754-4833-a3d3-c655d67f3ead",
        "nodeId": "n_9eec53a4-e754-4833-a3d3-c655d67f3ead",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Roso Mulyo",
        "name": "Roso Mulyo",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 361,
        "y": 391,
        "lat": 633,
        "lng": 361,
        "description": "Roso Mulyo adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis aneka buah-buahan dan menerima pesanan dalam jumlah yang besar",
        "image": "https://maps.pasargedesolo.com/storage/stores/edTl4kLDHBJVsKq4GiAvNlcBBB3rLrTX.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/edTl4kLDHBJVsKq4GiAvNlcBBB3rLrTX_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/edTl4kLDHBJVsKq4GiAvNlcBBB3rLrTX.jpg",
          "https://maps.pasargedesolo.com/storage/locations/ovVpiMhjcRXv92jRFu9c6wYc4N6EQJMaSPOckx8c.jpg"
        ],
        "entries": [
          {
            "x": 357,
            "y": 378
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec4442-2ba6-471f-baf7-daf6334ae39e",
        "nodeId": "n_9eec4442-2ba6-471f-baf7-daf6334ae39e",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Edi Buah",
        "name": "Edi Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 637,
        "y": 148,
        "lat": 876,
        "lng": 637,
        "description": "Edi Buah merupakan salah satu kios los yang ada di Pasar Gedhe yang menyediakan spesialis buah jeruk",
        "image": "https://maps.pasargedesolo.com/storage/stores/tSdc0cLAyYXNUBjTG91hxmSJTBNmWTKL.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/tSdc0cLAyYXNUBjTG91hxmSJTBNmWTKL_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/tSdc0cLAyYXNUBjTG91hxmSJTBNmWTKL.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/pHoZsO9iUvYrtExfxWl6mA7ASHmtiwwUyU5LU3Tc.jpg"
        ],
        "entries": [
          {
            "x": 627,
            "y": 161
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec2a0c-67c6-45dd-b734-a727becf1428",
        "nodeId": "n_9eec2a0c-67c6-45dd-b734-a727becf1428",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Jamu Widodo",
        "name": "Toko Jamu Widodo",
        "category": "jamu",
        "categoryLabel": "Jamu & Rempah",
        "icon": "🍵",
        "color": "#E67E22",
        "x": 360,
        "y": 790,
        "lat": 234,
        "lng": 360,
        "description": "Toko Jamu Widodo adalah salah satu kios jamu tradisional yang berada di Pasar Gedhe yang dikenal menjual spesialis berbagai jenis jamu racikan dan bahan baku untuk membuat jamu",
        "image": "https://maps.pasargedesolo.com/storage/stores/7yCFUIgQxoxM47sdg2Eej31oGHG2vUgI.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7yCFUIgQxoxM47sdg2Eej31oGHG2vUgI_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7yCFUIgQxoxM47sdg2Eej31oGHG2vUgI.jpg",
          "https://maps.pasargedesolo.com/storage/locations/h6mAR2sZai2XYcpSuYBwoYezs7GLPTK0PIhE3FVR.jpg"
        ],
        "entries": [
          {
            "x": 360,
            "y": 768
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec3409-ab10-4942-ace9-64a81c099954",
        "nodeId": "n_9eec3409-ab10-4942-ace9-64a81c099954",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Berkat Sesami 2",
        "name": "Kios Berkat Sesami 2",
        "category": "perkakas",
        "categoryLabel": "Perkakas Rumah",
        "icon": "🍳",
        "color": "#795548",
        "x": 733,
        "y": 697,
        "lat": 327,
        "lng": 733,
        "description": "Kios Berkat Sesami 2 adalah salah satu kios yang ada di Pasar Gedhe yang menjual aneka gerabah seperti sapu. tampah, keranjang rotan, dan piring rotan",
        "image": "https://maps.pasargedesolo.com/storage/stores/zePJ0H3eKg8sdz7yR0aXArCvcrIqefUA.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/zePJ0H3eKg8sdz7yR0aXArCvcrIqefUA_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/zePJ0H3eKg8sdz7yR0aXArCvcrIqefUA.jpg",
          "https://maps.pasargedesolo.com/storage/locations/2Tehd0zMLxoERTXNmilTzuerh4RUpoUjiwMN0W45.jpg"
        ],
        "entries": [
          {
            "x": 723,
            "y": 701
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec32cd-04eb-4fc3-a65e-fdce9f197285",
        "nodeId": "n_9eec32cd-04eb-4fc3-a65e-fdce9f197285",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Toko Mee Lian 2",
        "name": "Toko Mee Lian 2",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 374,
        "y": 728,
        "lat": 296,
        "lng": 374,
        "description": "Toko Mee Lian 2 adalah salah satu toko yang berada di Pasar Gedhe yang menjual spesialis aneka kecap dan saus dengan pilihan yang banyak dan lengkap",
        "image": "https://maps.pasargedesolo.com/storage/stores/7OcJT5MVf9LnvDoKE1qvDLADVlBlF28f.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7OcJT5MVf9LnvDoKE1qvDLADVlBlF28f_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7OcJT5MVf9LnvDoKE1qvDLADVlBlF28f.jpg",
          "https://maps.pasargedesolo.com/storage/locations/XSSqizN3Mnx0qegRHPG9Y2JCMvL1esNgSRMs8sck.jpg"
        ],
        "entries": [
          {
            "x": 367,
            "y": 723
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec49e8-09d4-4d20-986d-a2aaf6f6fb9d",
        "nodeId": "n_9eec49e8-09d4-4d20-986d-a2aaf6f6fb9d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Laminen",
        "name": "Kios Bu Laminen",
        "category": "sembako",
        "categoryLabel": "Sembako & Beras",
        "icon": "🌾",
        "color": "#F39C12",
        "x": 476,
        "y": 728,
        "lat": 296,
        "lng": 476,
        "description": "Kios Bu Laminen adalah salah satu kios yang ada di Pasar Gedhe yang khusus menjual bumbu masak dan bumbu rempah-rempah",
        "image": "https://maps.pasargedesolo.com/storage/stores/7OD3nWgdHnSuXWHi9E7wpdaQtW0X1Man.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7OD3nWgdHnSuXWHi9E7wpdaQtW0X1Man_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7OD3nWgdHnSuXWHi9E7wpdaQtW0X1Man.jpg",
          "https://maps.pasargedesolo.com/storage/locations/GmaBoCwMzp2M3xNaLpFZPDUJbCWexdYg490ekQRO.jpg"
        ],
        "entries": [
          {
            "x": 493,
            "y": 731
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec36ca-247f-46e9-af16-2d11dcd45061",
        "nodeId": "n_9eec36ca-247f-46e9-af16-2d11dcd45061",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Bu Yayuk 1",
        "name": "Kios Bu Yayuk 1",
        "category": "sayur",
        "categoryLabel": "Sayuran Segar",
        "icon": "🥬",
        "color": "#2ECC71",
        "x": 414,
        "y": 678,
        "lat": 346,
        "lng": 414,
        "description": "Kios Bu Yayuk 1 adalah salah satu kios yang ada di Pasar Gedhe yang menjual spesialis sayur-sayuran seperti sayur selada dan sawi dan menyediakan aneka bumbu masak",
        "image": "https://maps.pasargedesolo.com/storage/stores/lbbhKvyOecyM3451UyVI8be6M7lunREE.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/lbbhKvyOecyM3451UyVI8be6M7lunREE_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/lbbhKvyOecyM3451UyVI8be6M7lunREE.jpg",
          "https://maps.pasargedesolo.com/storage/locations/1Ihof9Dk6pfWUWVNA62QlLAgANdooNwQq6f3HDnz.jpg"
        ],
        "entries": [
          {
            "x": 413,
            "y": 670
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f08b73c-8e45-4b48-bb0f-84e7414d40aa",
        "nodeId": "n_9f08b73c-8e45-4b48-bb0f-84e7414d40aa",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Mike Fruit",
        "name": "Mike Fruit",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 357,
        "y": 124,
        "lat": 900,
        "lng": 357,
        "description": "Mike Fruit adalah bagian dari Toko Iin Koentjoro yang merupakan kios supplier buah grosir di Pasar Gedhe yang menjual buah jeruk dan pepaya",
        "image": "https://maps.pasargedesolo.com/storage/stores/SbZLGblhrNS2jEQrPB66UiNB6sHJ3ASM.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/SbZLGblhrNS2jEQrPB66UiNB6sHJ3ASM_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/SbZLGblhrNS2jEQrPB66UiNB6sHJ3ASM.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/PxY6RYMJ3AOBpQQO5WamzU3Jsu6hYKgpN4ei38PE.jpg"
        ],
        "entries": [
          {
            "x": 355,
            "y": 111
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
        "nodeId": "n_9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Warsini",
        "name": "Oprokan Ibu Warsini",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 518,
        "y": 511,
        "lat": 513,
        "lng": 518,
        "description": "Oprokan Ibu Warsini Sambal Pecel merupakan oprokan yang ada di Pasar Gedhe yang menjual spesialis sambal pecel, kering tempe dan intip",
        "image": "https://maps.pasargedesolo.com/storage/stores/PiQfGTknhAuUPkIjxOAubGHvAhyALl0w.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/PiQfGTknhAuUPkIjxOAubGHvAhyALl0w_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/PiQfGTknhAuUPkIjxOAubGHvAhyALl0w.jpg",
          "https://maps.pasargedesolo.com/storage/locations/DMqRhK5NsbXa2WwGNdsxS7GEncDIbvr0UPU8Twdc.jpg"
        ],
        "entries": [
          {
            "x": 518,
            "y": 511
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4a7c0-4227-4678-bdad-f6299cb8040d",
        "nodeId": "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Kios Oprokan Ibu Yani Icha Snack",
        "name": "Kios Oprokan Ibu Yani Icha Snack",
        "category": "camilan",
        "categoryLabel": "Oleh-oleh & Camilan",
        "icon": "🎁",
        "color": "#9B59B6",
        "x": 283,
        "y": 252,
        "lat": 772,
        "lng": 283,
        "description": "Kios Oprokan Ibu Yani Icha Snack adalah salah satu kios oprokan yang ada di Pasar Gedhe Pintu Utama yang menjual snack khas Solo",
        "image": "https://maps.pasargedesolo.com/storage/stores/1lBDyBhnQMyz6eWzlkhXMGeTj1smXdcI.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/1lBDyBhnQMyz6eWzlkhXMGeTj1smXdcI_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/1lBDyBhnQMyz6eWzlkhXMGeTj1smXdcI.jpg",
          "https://maps.pasargedesolo.com/storage/locations/4tzpY2WMeHlWNPs9nhQNCb5XiiXFWmYAfxUVTLEW.jpg"
        ],
        "entries": [
          {
            "x": 285,
            "y": 251
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f103382-4086-4fb0-a264-fc6f6b99075e",
        "nodeId": "n_9f103382-4086-4fb0-a264-fc6f6b99075e",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Es Dawet dan Gempol Pleret Bu Hj.Sipon 2",
        "name": "Es Dawet dan Gempol Pleret Bu Hj.Sipon 2",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 492,
        "y": 903,
        "lat": 121,
        "lng": 492,
        "description": "Es Dawet dan Gempol Pleret Bu Hj.Sipon adalah tenant yang menjual spesialis minuman tradisional khas Solo yaitu dawet dan gempol pleret",
        "image": "https://maps.pasargedesolo.com/storage/stores/S8eIdGJFWXkOrP3lvjulyZXsnAqOeVkb.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/S8eIdGJFWXkOrP3lvjulyZXsnAqOeVkb_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/S8eIdGJFWXkOrP3lvjulyZXsnAqOeVkb.jpg"
        ],
        "entries": [
          {
            "x": 503,
            "y": 904
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4a67c-641d-49e9-bab0-ac1fe15197bc",
        "nodeId": "n_9ef4a67c-641d-49e9-bab0-ac1fe15197bc",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Oprokan Ibu Tri Suyami",
        "name": "Oprokan Ibu Tri Suyami",
        "category": "telur",
        "categoryLabel": "Telur",
        "icon": "🥚",
        "color": "#F1C40F",
        "x": 295,
        "y": 258,
        "lat": 766,
        "lng": 295,
        "description": "Oprokan Ibu Tri Suyami adalah salah satu kios oprokan yang ada di Pasar Gedhe Pintu Utama yang khusus menjual produk khusus telor asin",
        "image": "https://maps.pasargedesolo.com/storage/stores/QENxZQhq62mG3cTw0KbpMA1LCEuE8FZy.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/QENxZQhq62mG3cTw0KbpMA1LCEuE8FZy_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/QENxZQhq62mG3cTw0KbpMA1LCEuE8FZy.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Y6s9Ox3DJizTOBcTFbPV18MjRmrCBjBfjtQgqUVS.jpg"
        ],
        "entries": [
          {
            "x": 295,
            "y": 250
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "ramp_pg_barat_1",
        "nodeId": "n_ramp_pg_barat_1",
        "buildingId": "pasar-gede",
        "floor": 1,
        "label": "Ramp Aksesibel Barat",
        "name": "Ramp Aksesibel Barat (Ramah Kursi Roda)",
        "category": "ramp",
        "categoryLabel": "Ramp Aksesibel",
        "icon": "♿",
        "color": "#2196F3",
        "x": 320,
        "y": 280,
        "lat": 744,
        "lng": 320,
        "description": "Jalur ramp landai untuk kursi roda menghubungkan Lantai 1 dan Lantai 2. Kemiringan 7% dilengkapi handrail ganda dan ubin pemandu taktil.",
        "accessible": true,
        "hasRamp": true,
        "hasTactile": true,
        "rampGrade": "7%",
        "rampWidth": "1.8m",
        "isFacility": true
      }
    ],
    "pasar-gede-2": [
      {
        "id": "9eec6afb-a7a3-4e69-98b7-20ea6ed1e149",
        "nodeId": "n_9eec6afb-a7a3-4e69-98b7-20ea6ed1e149",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Warung Makan Mbak Tariza 2",
        "name": "Warung Makan Mbak Tariza 2",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 534,
        "y": 216,
        "lat": 808,
        "lng": 534,
        "description": "Warung Makan Mbak Tariza adalah warung makan spesialisasi masakan rumahan yang berada di Lantai 2 Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/N0XSPBxI8pCg3mGSfvrF5N2qPdC5sn0u.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/N0XSPBxI8pCg3mGSfvrF5N2qPdC5sn0u_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/N0XSPBxI8pCg3mGSfvrF5N2qPdC5sn0u.jpeg"
        ],
        "entries": [
          {
            "x": 549,
            "y": 211
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04975a-0937-4a20-8abc-3963d05c9e6a",
        "nodeId": "n_9f04975a-0937-4a20-8abc-3963d05c9e6a",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Slamet Ayam",
        "name": "Los Slamet Ayam",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 288,
        "y": 152,
        "lat": 872,
        "lng": 288,
        "description": "Los Slamet Ayam merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menjual spesialis ayam kampun dan ayam potong",
        "image": "https://maps.pasargedesolo.com/storage/stores/RNB0sosShePHPioAfCoNWbozNys1LuKW.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/RNB0sosShePHPioAfCoNWbozNys1LuKW_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/RNB0sosShePHPioAfCoNWbozNys1LuKW.jpg"
        ],
        "entries": [
          {
            "x": 293,
            "y": 167
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec0edd-49dd-438d-82f8-e25c57d5403e",
        "nodeId": "n_9eec0edd-49dd-438d-82f8-e25c57d5403e",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Kios Mbak Rani",
        "name": "Kios Mbak Rani",
        "category": "bunga",
        "categoryLabel": "Bunga & Tanaman",
        "icon": "🌸",
        "color": "#E91E63",
        "x": 566,
        "y": 897,
        "lat": 127,
        "lng": 566,
        "description": "Kios Mbak Rani merupakan kios supplier bunga dekorasi yang ada di Pasar Gedhe dengan menyediakan beragam bunga krisan dengan berbagai macam warna",
        "image": "https://maps.pasargedesolo.com/storage/stores/LdxSMIFZNX0CI3DthBIPvQ5vqEfBDLG8.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/LdxSMIFZNX0CI3DthBIPvQ5vqEfBDLG8_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/LdxSMIFZNX0CI3DthBIPvQ5vqEfBDLG8.jpg",
          "https://maps.pasargedesolo.com/storage/locations/nC06USgOeVvaZ58n3vYS2WFOjOLwy618YFqkMztb.jpg"
        ],
        "entries": [
          {
            "x": 567,
            "y": 888
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
        "nodeId": "n_9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Ayam Kampung Mbak Niken",
        "name": "Los Ayam Kampung Mbak Niken",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 365,
        "y": 235,
        "lat": 789,
        "lng": 365,
        "description": "Ayam Kampung Mbak Niken adalah tenant yang menjual ayam kampung dan ayam boiler utuh maupun potong yang berada di lantai 2 Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/6Vyow41xUqGe63dXgJ8rLBQ1fhn5U5AG.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/6Vyow41xUqGe63dXgJ8rLBQ1fhn5U5AG_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/6Vyow41xUqGe63dXgJ8rLBQ1fhn5U5AG.jpg",
          "https://maps.pasargedesolo.com/storage/locations/l8uopAim8Z6OrA23GWzXB9SHSeWMSsGds6O7Ltnx.jpg"
        ],
        "entries": [
          {
            "x": 331,
            "y": 240
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04a0a9-a037-4496-8fd1-a603db23a05e",
        "nodeId": "n_9f04a0a9-a037-4496-8fd1-a603db23a05e",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Babi Pak Tomy",
        "name": "Los Daging Babi Pak Tomy",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 264,
        "y": 353,
        "lat": 671,
        "lng": 264,
        "description": "Los Daging Babi Pak Tomy merupakan salah satu los yang ada di Pasar Gedhe yang menjual spesialis daging babi dan usus babi",
        "image": "https://maps.pasargedesolo.com/storage/stores/9Vm8xavYQCywq663FQU3Gq6Zt04STSI6.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/9Vm8xavYQCywq663FQU3Gq6Zt04STSI6_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/9Vm8xavYQCywq663FQU3Gq6Zt04STSI6.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Poy7fc5Dilj5OO01yXApfpTL5LXe6AaCjnfuSoKH.jpg"
        ],
        "entries": [
          {
            "x": 302,
            "y": 356
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6a19-c635-4bee-a825-27fabcfa9a2b",
        "nodeId": "n_9eec6a19-c635-4bee-a825-27fabcfa9a2b",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Mie Ayam Lumayan 1",
        "name": "Mie Ayam Lumayan 1",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 684,
        "y": 241,
        "lat": 783,
        "lng": 684,
        "description": "Mie Ayam Lumayan adalah warung makan spesialisasi mie ayam yang berada di Lantai 2 Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/GeXEXoRIUwdO0MaUDQe2OwSNfPtsRucc.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/GeXEXoRIUwdO0MaUDQe2OwSNfPtsRucc_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/GeXEXoRIUwdO0MaUDQe2OwSNfPtsRucc.jpeg"
        ],
        "entries": [
          {
            "x": 669,
            "y": 246
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6bb5-98a6-42af-aa54-1336290fbd58",
        "nodeId": "n_9eec6bb5-98a6-42af-aa54-1336290fbd58",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Ayam Kampung Hidup Bu Welas",
        "name": "Ayam Kampung Hidup Bu Welas",
        "category": "daging_unggas",
        "categoryLabel": "Daging Unggas & Ayam",
        "icon": "🍗",
        "color": "#D35400",
        "x": 273,
        "y": 164,
        "lat": 860,
        "lng": 273,
        "description": "Ayam Kampung Hidup Bu Welas adalah tenant yang menerima pesanan dan potong ayam dan ayam kampung di lantai 2 Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/z0btOWSbHPcZ8jLMWVaoMDeBh0m04lYR.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/z0btOWSbHPcZ8jLMWVaoMDeBh0m04lYR_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/z0btOWSbHPcZ8jLMWVaoMDeBh0m04lYR.jpg"
        ],
        "entries": [
          {
            "x": 274,
            "y": 182
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6b58-fb41-4d20-9c7f-66bb58e3fb41",
        "nodeId": "n_9eec6b58-fb41-4d20-9c7f-66bb58e3fb41",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Warung Makan Bu Sri",
        "name": "Warung Makan Bu Sri",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 647,
        "y": 714,
        "lat": 310,
        "lng": 647,
        "description": "Warung Makan Bu Sri adalah warung makan yang menjual spesialis aneka masakan jawa yang berada di Lantai 2 Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/euWt937fIOJwdk72xAvZzzyZNiYzp8X3.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/euWt937fIOJwdk72xAvZzzyZNiYzp8X3_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/euWt937fIOJwdk72xAvZzzyZNiYzp8X3.jpeg"
        ],
        "entries": [
          {
            "x": 657,
            "y": 705
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec69c7-f1d2-4a7a-b017-4b24037319a8",
        "nodeId": "n_9eec69c7-f1d2-4a7a-b017-4b24037319a8",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Bakso Daging Sapi Asli Pak Wahyu Juventus",
        "name": "Bakso Daging Sapi Asli Pak Wahyu Juventus",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 682,
        "y": 288,
        "lat": 736,
        "lng": 682,
        "description": "Bakso Daging Sapi Asli Pak Wahyu Juventus adalah warung makan spesialisasi bakso daging sapi asli yang berada di Lantai 2 Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/gTeAhR3ECidAwvnptFnrEXYzrLa9acka.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/gTeAhR3ECidAwvnptFnrEXYzrLa9acka_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/gTeAhR3ECidAwvnptFnrEXYzrLa9acka.jpeg"
        ],
        "entries": [
          {
            "x": 668,
            "y": 300
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6a4f-2f2a-4373-a021-f57f540a9f68",
        "nodeId": "n_9eec6a4f-2f2a-4373-a021-f57f540a9f68",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Mie Ayam Lumayan 2",
        "name": "Mie Ayam Lumayan 2",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 645,
        "y": 275,
        "lat": 749,
        "lng": 645,
        "description": "Mie Ayam Lumayan adalah warung makan spesialisasi mie ayam yang berada di Lantai 2 Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/JTwysqn4eri01orEivSBQ0JuryHmjTQJ.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/JTwysqn4eri01orEivSBQ0JuryHmjTQJ_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/JTwysqn4eri01orEivSBQ0JuryHmjTQJ.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/HBjVBuLfX4d1sapgCKssPXhJX9dHGgKKong6rzbi.jpg"
        ],
        "entries": [
          {
            "x": 651,
            "y": 300
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
        "nodeId": "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Warung Makan Mbak Tariza 1",
        "name": "Warung Makan Mbak Tariza 1",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 607,
        "y": 216,
        "lat": 808,
        "lng": 607,
        "description": "Warung Makan Mbak Tariza adalah warung makan spesialisasi masakan rumahan yang berada di Lantai 2 Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/HDNOImzczXMBK0ysJfDSYM7sllxebLid.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/HDNOImzczXMBK0ysJfDSYM7sllxebLid_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/HDNOImzczXMBK0ysJfDSYM7sllxebLid.jpeg"
        ],
        "entries": [
          {
            "x": 623,
            "y": 211
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6cd2-5803-4835-b361-d22831c4c613",
        "nodeId": "n_9eec6cd2-5803-4835-b361-d22831c4c613",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Bakso dan Soto Pasar Gede",
        "name": "Bakso dan Soto Pasar Gedhe",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 521,
        "y": 184,
        "lat": 840,
        "lng": 521,
        "description": "Bakso dan Soto Pasar Gedhe adalah warung makan yang menjual bakso dan Soto yang berada di Lantai 2 Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/9PGJRzsdVIMqqwIoUNxqhmYDMK5tT8YD.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/9PGJRzsdVIMqqwIoUNxqhmYDMK5tT8YD_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/9PGJRzsdVIMqqwIoUNxqhmYDMK5tT8YD.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/urCOvifRZ5uikZtTamvVqyRlZqPa8CSrtzRStv3X.jpg"
        ],
        "entries": [
          {
            "x": 502,
            "y": 192
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f049976-ebfc-4646-91a4-881ca68f8fb5",
        "nodeId": "n_9f049976-ebfc-4646-91a4-881ca68f8fb5",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los 1 Cik Ing",
        "name": "Los 1 Cik Ing",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 363,
        "y": 274,
        "lat": 750,
        "lng": 363,
        "description": "Los 1 Cik Ing merupakan salah satu los yang berada di Pasar Gedhe yang menjual aneka ikan laut dan ikan air tawar",
        "image": "https://maps.pasargedesolo.com/storage/stores/7tHzRaodfMPauyAO5u1q4ZiiaSazyqkM.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7tHzRaodfMPauyAO5u1q4ZiiaSazyqkM_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7tHzRaodfMPauyAO5u1q4ZiiaSazyqkM.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Q81HlDtXj32SLN6rwBf967Lm2yNmoc9IoqfEP2d7.jpg"
        ],
        "entries": [
          {
            "x": 330,
            "y": 278
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04a113-f905-4fac-8ecf-46f7ded9f0b7",
        "nodeId": "n_9f04a113-f905-4fac-8ecf-46f7ded9f0b7",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Babi Pak Wawan",
        "name": "Los Daging Babi Pak Wawan",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 364,
        "y": 354,
        "lat": 670,
        "lng": 364,
        "description": "Los Daging Babi Pak Wawan merupakan los yang ada di lantai 2 Pasar Gedhe yang menjual spesialis daging babi",
        "image": "https://maps.pasargedesolo.com/storage/stores/MoExmCOLcnYTRIkwlkApKQ7AfMrThSWe.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/MoExmCOLcnYTRIkwlkApKQ7AfMrThSWe_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/MoExmCOLcnYTRIkwlkApKQ7AfMrThSWe.jpg",
          "https://maps.pasargedesolo.com/storage/locations/H9YDU4x4xvXWiJVvFMlk1J8VeJv1bnNGn3Tu8zHw.jpg"
        ],
        "entries": [
          {
            "x": 330,
            "y": 357
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef1f61d-e4f4-448b-b61a-f4136ee22f9c",
        "nodeId": "n_9ef1f61d-e4f4-448b-b61a-f4136ee22f9c",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Warung Makan Bu Ndari",
        "name": "Warung Makan Bu Ndari",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 609,
        "y": 817,
        "lat": 207,
        "lng": 609,
        "description": "Warung Makan Bu Ndari merupakan salah satu warung makan yang ada di dalam Pasar Gedhe yang menyediakan spesialis masakan babi dan masakan jawa yang setiap hari menunya berbeda",
        "image": "https://maps.pasargedesolo.com/storage/stores/tYcUJzQLcZ7LC7drDFBGR6w7Dmw42HwJ.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/tYcUJzQLcZ7LC7drDFBGR6w7Dmw42HwJ_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/tYcUJzQLcZ7LC7drDFBGR6w7Dmw42HwJ.jpg",
          "https://maps.pasargedesolo.com/storage/locations/R3i6rnJmIlGVoF2zSlNfhpWpDvt29nxte6CEscNJ.jpg"
        ],
        "entries": [
          {
            "x": 605,
            "y": 831
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
        "nodeId": "n_9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Elly Ikan Laut 1",
        "name": "Los Elly Ikan Laut 1",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 263,
        "y": 276,
        "lat": 748,
        "lng": 263,
        "description": "Los Elly Ikan Laut adalah supplier udang, cumi, kepiting dan ikan laut selain melayani pembelian grosir juga melayani pembelian kiloan yang berada di lantai 2 Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/OYMkpdx1HI5zaYB63ql7mXjNBtXtL7aj.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/OYMkpdx1HI5zaYB63ql7mXjNBtXtL7aj_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/OYMkpdx1HI5zaYB63ql7mXjNBtXtL7aj.jpg",
          "https://maps.pasargedesolo.com/storage/locations/QxN6BPtw2jMoHmOMEL44tKdsJ3XB7jsmsAlx2euJ.jpg"
        ],
        "entries": [
          {
            "x": 302,
            "y": 279
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0498b6-2816-499e-9ed8-5a2a16c2c660",
        "nodeId": "n_9f0498b6-2816-499e-9ed8-5a2a16c2c660",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los 2 Cik Ing",
        "name": "Los 2 Cik Ing",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 262,
        "y": 254,
        "lat": 770,
        "lng": 262,
        "description": "Los 2 Cik Ing merupakan salah satu los yang berada di Pasar Gedhe yang menjual aneka ikan laut dan ikan air tawar",
        "image": "https://maps.pasargedesolo.com/storage/stores/QK3gV68BGGBhL2EElkOL9wR61q0nUdV6.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/QK3gV68BGGBhL2EElkOL9wR61q0nUdV6_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/QK3gV68BGGBhL2EElkOL9wR61q0nUdV6.jpg",
          "https://maps.pasargedesolo.com/storage/locations/CIkWW77XcGQQQv2bSqG7pGteWwENab7XGagmT8Xj.jpg"
        ],
        "entries": [
          {
            "x": 302,
            "y": 259
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04a177-700b-49fa-afbd-4b63f143984c",
        "nodeId": "n_9f04a177-700b-49fa-afbd-4b63f143984c",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Babi Pak Caidi",
        "name": "Los Daging Babi Pak Caidi",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 267,
        "y": 398,
        "lat": 626,
        "lng": 267,
        "description": "Los Daging Babi Pak Caidi merupakan salah satu los yang ada di Pasar Gedhe yang menjual spesialis daging babi dan tulang babi",
        "image": "https://maps.pasargedesolo.com/storage/stores/LgaDHYb65w2TsN5nUHrUmklLNuTWutvo.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/LgaDHYb65w2TsN5nUHrUmklLNuTWutvo_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/LgaDHYb65w2TsN5nUHrUmklLNuTWutvo.jpg",
          "https://maps.pasargedesolo.com/storage/locations/NWiU1PiQJZ5Ih9HQxCEL9Jn11NICB9zm4K4earVc.jpg"
        ],
        "entries": [
          {
            "x": 303,
            "y": 402
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
        "nodeId": "n_9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Babi Pak Sarjono",
        "name": "Los Daging Babi Pak Sarjono",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 265,
        "y": 482,
        "lat": 542,
        "lng": 265,
        "description": "Los Daging Babi Pak Sarjono merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menjual spesialis sosis babi, samcan dan daging babi",
        "image": "https://maps.pasargedesolo.com/storage/stores/t1XpXcP7oUrswE50zKPnhE0gfuhuxBfh.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/t1XpXcP7oUrswE50zKPnhE0gfuhuxBfh_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/t1XpXcP7oUrswE50zKPnhE0gfuhuxBfh.jpg",
          "https://maps.pasargedesolo.com/storage/locations/hbJqS4Jrl4J7feFoNDAVTbtpskPnYoFY0eVKpv3r.jpg"
        ],
        "entries": [
          {
            "x": 302,
            "y": 492
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f049ce2-7c93-4730-888c-195a747d22e9",
        "nodeId": "n_9f049ce2-7c93-4730-888c-195a747d22e9",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los 1 Mbak Yatmini Ikan Laut",
        "name": "Los 1 Mbak Yatmini Ikan Laut",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 362,
        "y": 293,
        "lat": 731,
        "lng": 362,
        "description": "Los Mbak Yatmini Ikan Laut merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menjual berbagai macam ikan laut dan ikan air tawar",
        "image": "https://maps.pasargedesolo.com/storage/stores/lAgwF1aCFqp1SUD9kh8M969JwiWKmp5g.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/lAgwF1aCFqp1SUD9kh8M969JwiWKmp5g_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/lAgwF1aCFqp1SUD9kh8M969JwiWKmp5g.jpg"
        ],
        "entries": [
          {
            "x": 330,
            "y": 299
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04a95a-ee6f-43da-bbe1-7ea4f9caafe6",
        "nodeId": "n_9f04a95a-ee6f-43da-bbe1-7ea4f9caafe6",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Sapi Bu Sumarni",
        "name": "Los Daging Sapi Bu Sumarni",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 359,
        "y": 576,
        "lat": 448,
        "lng": 359,
        "description": "Los Daging Sapi Bu Sumarni merupakan salah satu los yang berada di lantai 2 Pasar Gedhe yang menjual spesialis dendeng sapi dan tulang sekengkel",
        "image": "https://maps.pasargedesolo.com/storage/stores/SzHreIggV1URThyBKnfVsD9UcMrJjBKG.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/SzHreIggV1URThyBKnfVsD9UcMrJjBKG_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/SzHreIggV1URThyBKnfVsD9UcMrJjBKG.jpg",
          "https://maps.pasargedesolo.com/storage/locations/zqXB8teOtF2OUwpjIHTsdeONhhyo73wKJl52eNDk.jpg"
        ],
        "entries": [
          {
            "x": 331,
            "y": 583
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04a1f7-f165-4c82-9fc1-fce8471add60",
        "nodeId": "n_9f04a1f7-f165-4c82-9fc1-fce8471add60",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Babi Pak Paino",
        "name": "Los Daging Babi Pak Paino",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 360,
        "y": 390,
        "lat": 634,
        "lng": 360,
        "description": "Los Daging Babi Pak Paino merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menjual spesialis kaki babi, iga babi, dan daging babi",
        "image": "https://maps.pasargedesolo.com/storage/stores/ZwdD6DQyUq4gcP0ATFY463WVG10fUFzX.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ZwdD6DQyUq4gcP0ATFY463WVG10fUFzX_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ZwdD6DQyUq4gcP0ATFY463WVG10fUFzX.jpg",
          "https://maps.pasargedesolo.com/storage/locations/utm4tpbpaEurjqlMV2nb21zqgsZH7aglbqyi4KcB.jpg"
        ],
        "entries": [
          {
            "x": 331,
            "y": 403
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef48d41-2b49-47e3-bf0f-dbf0358dd45e",
        "nodeId": "n_9ef48d41-2b49-47e3-bf0f-dbf0358dd45e",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Toilet",
        "name": "Toilet",
        "category": "toilet",
        "categoryLabel": "Toilet & Fasilitas",
        "icon": "🚻",
        "color": "#009688",
        "x": 720,
        "y": 169,
        "lat": 855,
        "lng": 720,
        "description": "Fasilitas toilet yang berada di Pasar Gedhe",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 710,
            "y": 172
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9f049e0c-f04a-48cd-abaf-0cbc639fd2cc",
        "nodeId": "n_9f049e0c-f04a-48cd-abaf-0cbc639fd2cc",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los 2 Mbak Yatmini Ikan Laut",
        "name": "Los 2 Mbak Yatmini Ikan Laut",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 362,
        "y": 311,
        "lat": 713,
        "lng": 362,
        "description": "Los Mbak Yatmini Ikan Laut merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menjual berbagai macam ikan laut dan ikan air tawar",
        "image": "https://maps.pasargedesolo.com/storage/stores/KX5JnSYICSCUOzrkKrKZlItMJ7Lj6cWm.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/KX5JnSYICSCUOzrkKrKZlItMJ7Lj6cWm_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/KX5JnSYICSCUOzrkKrKZlItMJ7Lj6cWm.jpg"
        ],
        "entries": [
          {
            "x": 331,
            "y": 316
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04a31f-5b94-4c0b-b600-df6046cccbaa",
        "nodeId": "n_9f04a31f-5b94-4c0b-b600-df6046cccbaa",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Babi Pak Prapto",
        "name": "Los Daging Babi Pak Prapto",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 265,
        "y": 433,
        "lat": 591,
        "lng": 265,
        "description": "Los Daging Babi Pak Prapto merupakan salah satu los yang ada di Pasar Gedhe yang menjual spesialis kaki babi, hati babi dan daging babi",
        "image": "https://maps.pasargedesolo.com/storage/stores/SYzQTu4eHeXIic4WLc767lqfS583s9mn.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/SYzQTu4eHeXIic4WLc767lqfS583s9mn_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/SYzQTu4eHeXIic4WLc767lqfS583s9mn.jpg",
          "https://maps.pasargedesolo.com/storage/locations/RwvQvStX4HqTvAHJmiXr6Qzh0CW5dfegTX2H1ckf.jpg"
        ],
        "entries": [
          {
            "x": 303,
            "y": 439
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef496b3-91cb-4db9-ac96-c746921e122b",
        "nodeId": "n_9ef496b3-91cb-4db9-ac96-c746921e122b",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Tangga lt 2.1",
        "name": "Tangga lt 2.1",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 708,
        "y": 782,
        "lat": 242,
        "lng": 708,
        "description": "Kios Tangga lt 2.1 di Pasar Gedhe Lantai 2",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 708,
            "y": 782
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
        "nodeId": "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Babi Pak Belong",
        "name": "Los Daging Babi Pak Belong",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 361,
        "y": 485,
        "lat": 539,
        "lng": 361,
        "description": "Los Daging Babi Pak Belong merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menjual spesialis kaki babi dan daging babi",
        "image": "https://maps.pasargedesolo.com/storage/stores/0VNJgwGZDuTxsxuaap6YuEKDgfOeqw2H.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/0VNJgwGZDuTxsxuaap6YuEKDgfOeqw2H_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/0VNJgwGZDuTxsxuaap6YuEKDgfOeqw2H.jpg",
          "https://maps.pasargedesolo.com/storage/locations/dnOuFWVmgPp8ErJDjBteBhdsfnazgHzxR8zZY3tc.jpg"
        ],
        "entries": [
          {
            "x": 331,
            "y": 494
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef49889-df5e-4811-9a3d-bb117f07a279",
        "nodeId": "n_9ef49889-df5e-4811-9a3d-bb117f07a279",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Tangga lt 2.2",
        "name": "Tangga lt 2.2",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 644,
        "y": 851,
        "lat": 173,
        "lng": 644,
        "description": "Kios Tangga lt 2.2 di Pasar Gedhe Lantai 2",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 644,
            "y": 851
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
        "nodeId": "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Tangga lt 2.3",
        "name": "Tangga lt 2.3",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 641,
        "y": 232,
        "lat": 792,
        "lng": 641,
        "description": "Kios Tangga lt 2.3 di Pasar Gedhe Lantai 2",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 641,
            "y": 232
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef49ab9-5872-4559-9335-918f1400e167",
        "nodeId": "n_9ef49ab9-5872-4559-9335-918f1400e167",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Tangga lt 2.4",
        "name": "Tangga lt 2.4",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 511,
        "y": 816,
        "lat": 208,
        "lng": 511,
        "description": "Kios Tangga lt 2.4 di Pasar Gedhe Lantai 2",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 511,
            "y": 816
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9f04ab45-cc90-4838-93ec-420fca235d3b",
        "nodeId": "n_9f04ab45-cc90-4838-93ec-420fca235d3b",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Sapi Bu Yayuk",
        "name": "Los Daging Sapi Bu Yayuk",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 263,
        "y": 578,
        "lat": 446,
        "lng": 263,
        "description": "Los Daging Sapi Bu Yayuk merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menjual spesialis jerohan sapi dan tulang sumsum",
        "image": "https://maps.pasargedesolo.com/storage/stores/hCHQrPWcR9lQ7ik7hCRBLqUFYZbN00cs.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/hCHQrPWcR9lQ7ik7hCRBLqUFYZbN00cs_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/hCHQrPWcR9lQ7ik7hCRBLqUFYZbN00cs.jpg",
          "https://maps.pasargedesolo.com/storage/locations/q0NW3bTnZNQCV8f7d9FQKx44lMMo2cgw9NFYrdpC.jpg"
        ],
        "entries": [
          {
            "x": 303,
            "y": 580
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef49b98-0d91-484a-9874-4517d444aaba",
        "nodeId": "n_9ef49b98-0d91-484a-9874-4517d444aaba",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Tangga lt 2.5",
        "name": "Tangga lt 2.5",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 642,
        "y": 390,
        "lat": 634,
        "lng": 642,
        "description": "Kios Tangga lt 2.5 di Pasar Gedhe Lantai 2",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 642,
            "y": 390
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef5fae9-7343-42a9-9c58-cb3b356f509c",
        "nodeId": "n_9ef5fae9-7343-42a9-9c58-cb3b356f509c",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Mushola",
        "name": "Mushola",
        "category": "mushola",
        "categoryLabel": "Mushola / Ibadah",
        "icon": "🕌",
        "color": "#4CAF50",
        "x": 260,
        "y": 870,
        "lat": 154,
        "lng": 260,
        "description": "Mushola adalah tempat ibadah umat Islam yang berukuran lebih kecil dari masjid. Mushola biasanya digunakan untuk salat fardu berjamaah dalam lingkup yang lebih terbatas seperti di rumah, kantor, sekolah, atau fasilitas umum.",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 267,
            "y": 866
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9f049e71-96a9-4ddb-a40c-d1e461c7fb4f",
        "nodeId": "n_9f049e71-96a9-4ddb-a40c-d1e461c7fb4f",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los 3 Mbak Yatmini Ikan Laut",
        "name": "Los 3 Mbak Yatmini Ikan Laut",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 363,
        "y": 331,
        "lat": 693,
        "lng": 363,
        "description": "Los Mbak Yatmini Ikan Laut merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menjual berbagai macam ikan laut dan ikan air tawar",
        "image": "https://maps.pasargedesolo.com/storage/stores/o9jYWlzQsqw9OYZgdfAeCEGXP6AuNY8Y.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/o9jYWlzQsqw9OYZgdfAeCEGXP6AuNY8Y_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/o9jYWlzQsqw9OYZgdfAeCEGXP6AuNY8Y.jpg"
        ],
        "entries": [
          {
            "x": 330,
            "y": 334
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04a47c-2dd6-4d11-9299-fe4f0b5c6690",
        "nodeId": "n_9f04a47c-2dd6-4d11-9299-fe4f0b5c6690",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Babi Pak Topo",
        "name": "Los Daging Babi Pak Topo",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 360,
        "y": 435,
        "lat": 589,
        "lng": 360,
        "description": "Daging Babi Pak Topo merupakan salah satu los yang ada di Pasar Gedhe yang menjual spesialis Daging Babi dan Lemak Babi",
        "image": "https://maps.pasargedesolo.com/storage/stores/Hueslo4OA6ORqSGV5zouWKvNPdYv5Cef.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Hueslo4OA6ORqSGV5zouWKvNPdYv5Cef_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Hueslo4OA6ORqSGV5zouWKvNPdYv5Cef.jpg",
          "https://maps.pasargedesolo.com/storage/locations/KZnHsebxE7Q6SwAazWfh3n7pF71FlbriMAnYnXhr.jpg"
        ],
        "entries": [
          {
            "x": 331,
            "y": 441
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef5fa31-15d1-4210-8086-0e5d61329213",
        "nodeId": "n_9ef5fa31-15d1-4210-8086-0e5d61329213",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Tangga lt 2.6",
        "name": "Tangga lt 2.6",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 497,
        "y": 220,
        "lat": 804,
        "lng": 497,
        "description": "Kios Tangga lt 2.6 di Pasar Gedhe Lantai 2",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 497,
            "y": 220
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9f04a834-bee5-4a41-a0af-cc24df403140",
        "nodeId": "n_9f04a834-bee5-4a41-a0af-cc24df403140",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Babi Bu Yensen",
        "name": "Los Daging Babi Bu Yensen",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 360,
        "y": 508,
        "lat": 516,
        "lng": 360,
        "description": "Los Daging Babi Bu Yensen merupakan salah satu los yang ada di Pasar Gedhe yang menjual spesialis Daging Babi, Kaki Babi, Sawi Asin",
        "image": "https://maps.pasargedesolo.com/storage/stores/7XiCD5o4PGUAi4onhwnHYYOEdy8W7MAY.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7XiCD5o4PGUAi4onhwnHYYOEdy8W7MAY_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7XiCD5o4PGUAi4onhwnHYYOEdy8W7MAY.jpg",
          "https://maps.pasargedesolo.com/storage/locations/EYeiykhE0kz2vqf2m0r3ILeubJ05NgWMEKEj93pX.jpg"
        ],
        "entries": [
          {
            "x": 331,
            "y": 514
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef5fde3-dc44-44eb-a7a4-91b92a0703d0",
        "nodeId": "n_9ef5fde3-dc44-44eb-a7a4-91b92a0703d0",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "TWK Tedjo Fruit",
        "name": "TWK Tedjo Fruit",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 274,
        "y": 609,
        "lat": 415,
        "lng": 274,
        "description": "TWK Tedjo Fruit merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menjual spesialis buah jeruk grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/xmv854N1GH3H6i89b3eH55isZNXCPxye.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/xmv854N1GH3H6i89b3eH55isZNXCPxye_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/xmv854N1GH3H6i89b3eH55isZNXCPxye.jpg",
          "https://maps.pasargedesolo.com/storage/locations/FQ3wcKl7nBwcXS2dJU7V2evi8IUK6vFyup6i74yD.jpg"
        ],
        "entries": [
          {
            "x": 302,
            "y": 612
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef64093-3490-4df0-9689-2c0545c9dd24",
        "nodeId": "n_9ef64093-3490-4df0-9689-2c0545c9dd24",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Pia-Pia dan Kompia Liling/Yohanes",
        "name": "Pia-Pia dan Kompia Liling/Yohanes",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 358,
        "y": 603,
        "lat": 421,
        "lng": 358,
        "description": "Pia-Pia dan Kompia Liling/Yohanes merupakan salah satu makanan legend di Solo yang berada di Pasar Gedhe yang menjual spesialis kompia dan pia-pia dengan beragam isian",
        "image": "https://maps.pasargedesolo.com/storage/stores/Oe512LIa47etjWBpsCdYmLskN1WV2A2A.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Oe512LIa47etjWBpsCdYmLskN1WV2A2A_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Oe512LIa47etjWBpsCdYmLskN1WV2A2A.jpg",
          "https://maps.pasargedesolo.com/storage/locations/w7X2bTB0bh70Rt1mCnFii8vOHMqRhG8rIF05Erdm.jpg"
        ],
        "entries": [
          {
            "x": 331,
            "y": 609
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef64e4b-ca66-49a1-a98d-25a2c424592b",
        "nodeId": "n_9ef64e4b-ca66-49a1-a98d-25a2c424592b",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Kios Gilingan Daging",
        "name": "Kios Gilingan Daging",
        "category": "service",
        "categoryLabel": "Jasa & Lainnya",
        "icon": "🛠️",
        "color": "#607D8B",
        "x": 518,
        "y": 120,
        "lat": 904,
        "lng": 518,
        "description": "Kios Gilingan Daging adalah kios yang melayani jasa gilingan daging kasar dan halus yang berada di Lantai 2 Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/jaGtKCKr5oE34TGjOZgAaS9yaktbsNJk.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/jaGtKCKr5oE34TGjOZgAaS9yaktbsNJk_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/jaGtKCKr5oE34TGjOZgAaS9yaktbsNJk.jpg"
        ],
        "entries": [
          {
            "x": 505,
            "y": 137
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f049c6f-8c21-491b-98c0-b55ff962e861",
        "nodeId": "n_9f049c6f-8c21-491b-98c0-b55ff962e861",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Elly Ikan Laut 2",
        "name": "Los Elly Ikan Laut 2",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 264,
        "y": 293,
        "lat": 731,
        "lng": 264,
        "description": "Los Elly Ikan Laut adalah supplier udang, cumi, kepiting dan ikan laut selain melayani pembelian grosir juga melayani pembelian kiloan yang berada di lantai 2 Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/D4DlYLNitgecwXwfO2o1L52erLUXa48s.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/D4DlYLNitgecwXwfO2o1L52erLUXa48s_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/D4DlYLNitgecwXwfO2o1L52erLUXa48s.jpg",
          "https://maps.pasargedesolo.com/storage/locations/lGaJG77Rcsvw1Jik9KyZ7wv9B2ZTTkCbY3U22REP.jpg"
        ],
        "entries": [
          {
            "x": 302,
            "y": 297
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04a508-0822-409b-b172-37e426d1e2ef",
        "nodeId": "n_9f04a508-0822-409b-b172-37e426d1e2ef",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Babi Bu Tatik",
        "name": "Los Daging Babi Bu Tatik",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 265,
        "y": 458,
        "lat": 566,
        "lng": 265,
        "description": "Los Daging Babi Bu Tatik merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menyediakan spesialis Daging Babi dan Iga Babi",
        "image": "https://maps.pasargedesolo.com/storage/stores/F5CEtkjsh3bZkHAq1LtOoNjvwDSJY467.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/F5CEtkjsh3bZkHAq1LtOoNjvwDSJY467_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/F5CEtkjsh3bZkHAq1LtOoNjvwDSJY467.jpg"
        ],
        "entries": [
          {
            "x": 302,
            "y": 462
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6979-b1b4-456f-b2f0-c744ea3553db",
        "nodeId": "n_9eec6979-b1b4-456f-b2f0-c744ea3553db",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Soto Senggol Bu Tutik",
        "name": "Soto Senggol Bu Tutik",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 684,
        "y": 341,
        "lat": 683,
        "lng": 684,
        "description": "Soto Senggol Bu Tutik adalah warung makan spesialisasi soto yang berada di Lantai 2 Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/vBdCJXSk34m0JlJMLuFZSHKB1Aetl5Xm.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/vBdCJXSk34m0JlJMLuFZSHKB1Aetl5Xm_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/vBdCJXSk34m0JlJMLuFZSHKB1Aetl5Xm.jpg",
          "https://maps.pasargedesolo.com/storage/locations/WeQxttfUNDcnmOD2JSnlOtrU2GNQfCCLZD1ilKc0.jpg"
        ],
        "entries": [
          {
            "x": 667,
            "y": 352
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f049f25-f553-4ab6-9306-533bbdfb1824",
        "nodeId": "n_9f049f25-f553-4ab6-9306-533bbdfb1824",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Andreas 1",
        "name": "Los Andreas 1",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 264,
        "y": 311,
        "lat": 713,
        "lng": 264,
        "description": "Los Andreas adalah tenant menjual aneka ikan laut, ikan air tawar dan udang yang berada di lantai 2 Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/FlqUvmlpuTSmbDxTiaMMCy2fRPs7jbmP.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/FlqUvmlpuTSmbDxTiaMMCy2fRPs7jbmP_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/FlqUvmlpuTSmbDxTiaMMCy2fRPs7jbmP.jpg"
        ],
        "entries": [
          {
            "x": 302,
            "y": 315
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f049fb1-0f51-4bf5-be07-1211adf43fb7",
        "nodeId": "n_9f049fb1-0f51-4bf5-be07-1211adf43fb7",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Andreas 2",
        "name": "Los Andreas 2",
        "category": "seafood",
        "categoryLabel": "Ikan & Hasil Laut",
        "icon": "🐟",
        "color": "#3498DB",
        "x": 264,
        "y": 329,
        "lat": 695,
        "lng": 264,
        "description": "Los Andreas adalah tenant menjual aneka ikan laut, ikan air tawar dan udang yang berada di lantai 2 Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/umeavEAXLmV6vRe6go4fgc0ZXyBNkHy3.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/umeavEAXLmV6vRe6go4fgc0ZXyBNkHy3_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/umeavEAXLmV6vRe6go4fgc0ZXyBNkHy3.jpg"
        ],
        "entries": [
          {
            "x": 302,
            "y": 333
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04a64c-2859-44eb-9f40-4b30ed5a6387",
        "nodeId": "n_9f04a64c-2859-44eb-9f40-4b30ed5a6387",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Babi Pak Agus",
        "name": "Los Daging Babi Pak Agus",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 360,
        "y": 461,
        "lat": 563,
        "lng": 360,
        "description": "Los Daging Babi Pak Agus merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menjual spesialis Daging Babi",
        "image": "https://maps.pasargedesolo.com/storage/stores/cSWMxUelcfVov4yDxdlxSTCCZleQWuMX.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/cSWMxUelcfVov4yDxdlxSTCCZleQWuMX_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/cSWMxUelcfVov4yDxdlxSTCCZleQWuMX.jpg"
        ],
        "entries": [
          {
            "x": 330,
            "y": 465
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec0e6e-21e8-426e-8d2a-2ae350959afa",
        "nodeId": "n_9eec0e6e-21e8-426e-8d2a-2ae350959afa",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Kios Tari Bunga",
        "name": "Kios Tari Bunga",
        "category": "bunga",
        "categoryLabel": "Bunga & Tanaman",
        "icon": "🌸",
        "color": "#E91E63",
        "x": 478,
        "y": 897,
        "lat": 127,
        "lng": 478,
        "description": "Kios Tari Bunga merupakan kios yang ada di Pasar Gedhe yang menyediakan beragam bunga dengan berbagai macam jenis rangkaian dan jenis bunga",
        "image": "https://maps.pasargedesolo.com/storage/stores/5g0PxK6AT2FyK66WHR6uTR8JFMo6aTnL.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/5g0PxK6AT2FyK66WHR6uTR8JFMo6aTnL_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/5g0PxK6AT2FyK66WHR6uTR8JFMo6aTnL.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Zud3H6oouzEcCtQRVxfh6KO23Q4niz69HUkaI0Zr.jpg"
        ],
        "entries": [
          {
            "x": 475,
            "y": 888
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef47632-a296-4da6-a001-937c7e7211ea",
        "nodeId": "n_9ef47632-a296-4da6-a001-937c7e7211ea",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Kios JR Fresh Fruits",
        "name": "Kios JR Fresh Fruits",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 672,
        "y": 899,
        "lat": 125,
        "lng": 672,
        "description": "Kios JR Fresh Fruits merupakan salah satu kios yang ada di lantai 2 Pasar Gedhe yang menyediakan grosir buah dengan berbagai macam jenis buah dan spesialis buah kesemek",
        "image": "https://maps.pasargedesolo.com/storage/stores/a1Z5x2n6n7IoF6Gv2sFpt9UoB00jYeKp.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/a1Z5x2n6n7IoF6Gv2sFpt9UoB00jYeKp_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/a1Z5x2n6n7IoF6Gv2sFpt9UoB00jYeKp.jpg",
          "https://maps.pasargedesolo.com/storage/locations/BCmN17mQ6LY9pey6UP437cCy6RwBNUPUyULWtrbT.jpg"
        ],
        "entries": [
          {
            "x": 672,
            "y": 888
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a",
        "nodeId": "n_9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Los Daging Sapi Bu Tatik",
        "name": "Los Daging Sapi Bu Tatik",
        "category": "daging_sapi",
        "categoryLabel": "Daging Sapi & Kambing",
        "icon": "🥩",
        "color": "#C0392B",
        "x": 359,
        "y": 551,
        "lat": 473,
        "lng": 359,
        "description": "Los Daging Sapi Bu Tatik merupakan salah satu los yang ada di lantai 2 Pasar Gedhe yang menjual spesialis daging sapi dan iga sapi yang setiap pembelian dibungkus menggunakan daun jati",
        "image": "https://maps.pasargedesolo.com/storage/stores/woPEMN9GNooOIjIoxRVMi37xCEXDF2Mv.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/woPEMN9GNooOIjIoxRVMi37xCEXDF2Mv_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/woPEMN9GNooOIjIoxRVMi37xCEXDF2Mv.jpg",
          "https://maps.pasargedesolo.com/storage/locations/aC33paOzo6VdhLmiewsuZStECcEB6AaTERVGJSu3.jpg"
        ],
        "entries": [
          {
            "x": 331,
            "y": 556
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "ramp_pg_barat_2",
        "nodeId": "n_ramp_pg_barat_2",
        "buildingId": "pasar-gede",
        "floor": 2,
        "label": "Ramp Aksesibel Barat Lt.2",
        "name": "Ramp Aksesibel Barat Lt.2 (Turun ke Lt.1)",
        "category": "ramp",
        "categoryLabel": "Ramp Aksesibel",
        "icon": "♿",
        "color": "#2196F3",
        "x": 320,
        "y": 280,
        "lat": 744,
        "lng": 320,
        "description": "Jalur ramp landai turun ke Lantai 1 untuk pengguna kursi roda dan lansia.",
        "accessible": true,
        "hasRamp": true,
        "hasTactile": true,
        "rampGrade": "7%",
        "rampWidth": "1.8m",
        "isFacility": true
      }
    ],
    "pasar-buah-1": [
      {
        "id": "9eec724e-484e-4623-a440-885d0a47aa1b",
        "nodeId": "n_9eec724e-484e-4623-a440-885d0a47aa1b",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Phe-Te 1",
        "name": "Phe-Te 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 588,
        "y": 157,
        "lat": 867,
        "lng": 588,
        "description": "Phe-Te adalah kios penjual buah yang menerima layanan pembuatan hampers buah atau parcel buah di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/abqsQGfUhTh8KryiPHDEYJRrJ3Fdcl6p.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/abqsQGfUhTh8KryiPHDEYJRrJ3Fdcl6p_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/abqsQGfUhTh8KryiPHDEYJRrJ3Fdcl6p.jpg",
          "https://maps.pasargedesolo.com/storage/locations/XguiGsVjlNlWz4xJ4KD77Lo9SVu5lIgmCsBc9qWB.jpg",
          "https://maps.pasargedesolo.com/storage/locations/mJAJD2jAAOzof3HLH9pzexVEAvcvV2dJOZdVSEBL.jpg"
        ],
        "entries": [
          {
            "x": 601,
            "y": 159
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6fc9-7571-48ed-820a-788abbe99bde",
        "nodeId": "n_9eec6fc9-7571-48ed-820a-788abbe99bde",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Bu Poniyem",
        "name": "Bu Poniyem",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 343,
        "y": 184,
        "lat": 840,
        "lng": 343,
        "description": "Bu Poniyem adalah kios penjual buah di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/zjGn0woO5dX3d6n0HxBbi0FGLMOm6UlK.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/zjGn0woO5dX3d6n0HxBbi0FGLMOm6UlK_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/zjGn0woO5dX3d6n0HxBbi0FGLMOm6UlK.jpg",
          "https://maps.pasargedesolo.com/storage/locations/CjDZOCFVyskHktMdSRSKE7wi80iRRPseFTyBVHhA.jpg"
        ],
        "entries": [
          {
            "x": 362,
            "y": 188
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7166-b510-4352-942b-3607561bbe34",
        "nodeId": "n_9eec7166-b510-4352-942b-3607561bbe34",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mas Wandi 1",
        "name": "Mas Wandi 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 177,
        "y": 289,
        "lat": 735,
        "lng": 177,
        "description": "Mas Wandi adalah kios buah gosir yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe yang menjual buah musiman seperti jeruk dan mangga",
        "image": "https://maps.pasargedesolo.com/storage/stores/4QybhqPHaStCe144kf4DEmgMm6GRf2hi.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/4QybhqPHaStCe144kf4DEmgMm6GRf2hi_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/4QybhqPHaStCe144kf4DEmgMm6GRf2hi.png",
          "https://maps.pasargedesolo.com/storage/locations/wm6RCTqft8tPL9dnDpD8qoDuI5pMyM9yPHcZR9tb.jpg",
          "https://maps.pasargedesolo.com/storage/locations/9JERWv4qgZxOBAXSLSsp9yN4PySxYJ2hxgzm88z9.jpg"
        ],
        "entries": [
          {
            "x": 413,
            "y": 182
          },
          {
            "x": 171,
            "y": 277
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6f54-9608-417f-b2f5-9e1823ce7e9e",
        "nodeId": "n_9eec6f54-9608-417f-b2f5-9e1823ce7e9e",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Paino",
        "name": "Paino",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 345,
        "y": 156,
        "lat": 868,
        "lng": 345,
        "description": "Paino adalah kios buah di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/mu43IF44TnrnYL8HuCA5x9T0TpnShf3a.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/mu43IF44TnrnYL8HuCA5x9T0TpnShf3a_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/mu43IF44TnrnYL8HuCA5x9T0TpnShf3a.png"
        ],
        "entries": [
          {
            "x": 363,
            "y": 159
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec71d2-9f98-4e7b-8c78-b195370e92d9",
        "nodeId": "n_9eec71d2-9f98-4e7b-8c78-b195370e92d9",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mas Wandi",
        "name": "Mas Wandi",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 427,
        "y": 179,
        "lat": 845,
        "lng": 427,
        "description": "Mas Wandi adalah kios buah gosir yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe yang menjual buah musiman seperti jeruk dan mangga",
        "image": "https://maps.pasargedesolo.com/storage/stores/4QybhqPHaStCe144kf4DEmgMm6GRf2hi.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/4QybhqPHaStCe144kf4DEmgMm6GRf2hi_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/4QybhqPHaStCe144kf4DEmgMm6GRf2hi.png",
          "https://maps.pasargedesolo.com/storage/locations/ktfzQJX3uMCeWxGlhnfeJefTLaGOfEdrOGHqbd4L.jpg",
          "https://maps.pasargedesolo.com/storage/locations/F0XWjJWykf77u0ckyx14eULtIJK14jna0Yte7uyt.jpg"
        ],
        "entries": [
          {
            "x": 427,
            "y": 179
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7312-a674-4ef8-88d3-ec2ee6d39cc9",
        "nodeId": "n_9eec7312-a674-4ef8-88d3-ec2ee6d39cc9",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "WD",
        "name": "WD",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 336,
        "y": 425,
        "lat": 599,
        "lng": 336,
        "description": "WD adalah kios buah grosir di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe yang menjual berbagai buah musiman seperti Jeruk Bali",
        "image": "https://maps.pasargedesolo.com/storage/stores/ceq5oroaEn5dG5Suw3xiQEcQAU5YAx26.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ceq5oroaEn5dG5Suw3xiQEcQAU5YAx26_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ceq5oroaEn5dG5Suw3xiQEcQAU5YAx26.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/JHTRzpHsnFMAGmfAXsiPW5p27XaZ6RkZF0Q3upJU.jpg"
        ],
        "entries": [
          {
            "x": 335,
            "y": 413
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec79bf-8e02-432f-b1e2-30b29fe42dcc",
        "nodeId": "n_9eec79bf-8e02-432f-b1e2-30b29fe42dcc",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mangga Segar Pak Gepeng 4",
        "name": "Mangga Segar Pak Gepeng 4",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 290,
        "y": 524,
        "lat": 500,
        "lng": 290,
        "description": "Mangga Segar Pak Gepeng adalah kios buah yang spesialisasi menjual mangga grosir dan ecer di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/QWzqTO0TZcKjjQDw9q2Sjd7AVlrTS0aQ.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/QWzqTO0TZcKjjQDw9q2Sjd7AVlrTS0aQ_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/QWzqTO0TZcKjjQDw9q2Sjd7AVlrTS0aQ.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/xsKzUSEHGimr7FcB0I8l6FmEKwZkVSlz0aWUh2vb.jpg"
        ],
        "entries": [
          {
            "x": 294,
            "y": 538
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec779b-099f-4958-95e9-f07f89487c6d",
        "nodeId": "n_9eec779b-099f-4958-95e9-f07f89487c6d",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mangga Segar Pak Gepeng 1",
        "name": "Mangga Segar Pak Gepeng 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 227,
        "y": 499,
        "lat": 525,
        "lng": 227,
        "description": "Mangga Segar Pak Gepeng adalah kios buah yang spesialisasi menjual mangga grosir dan ecer di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/EkzgmsZ2yPcJLSi5m7c8JbEuBAdh0gBo.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/EkzgmsZ2yPcJLSi5m7c8JbEuBAdh0gBo_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/EkzgmsZ2yPcJLSi5m7c8JbEuBAdh0gBo.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/7209mgIjDqZmKSwpD9XF8wDQWOIe3fJc7rjsj2qQ.jpg"
        ],
        "entries": [
          {
            "x": 219,
            "y": 487
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec781c-53e5-41ff-84b7-3a72efb17a06",
        "nodeId": "n_9eec781c-53e5-41ff-84b7-3a72efb17a06",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Sumber Buah",
        "name": "Sumber Buah",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 341,
        "y": 499,
        "lat": 525,
        "lng": 341,
        "description": "Sumber Buah adalah kios penjual buah grosir dan ecer lokal yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/hV2E3RbT4fphXfUEyjt1hkafrQKQPNz1.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/hV2E3RbT4fphXfUEyjt1hkafrQKQPNz1_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/hV2E3RbT4fphXfUEyjt1hkafrQKQPNz1.png"
        ],
        "entries": [
          {
            "x": 342,
            "y": 486
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7c35-df71-4ab2-b35b-2af55185009a",
        "nodeId": "n_9eec7c35-df71-4ab2-b35b-2af55185009a",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mahkota Buah 4",
        "name": "Mahkota Buah 4",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 320,
        "y": 648,
        "lat": 376,
        "lng": 320,
        "description": "Mahkota Buah adalah kios penjual buah grosir lokal yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/5LVayrEvMFO8oV15ync7EEytccrOMHuv.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/5LVayrEvMFO8oV15ync7EEytccrOMHuv_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/5LVayrEvMFO8oV15ync7EEytccrOMHuv.png",
          "https://maps.pasargedesolo.com/storage/locations/V5USK34SOvWt3odaElds1X0sE9bbTBf3fb4xnLVr.jpg"
        ],
        "entries": [
          {
            "x": 316,
            "y": 636
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7b93-e713-4e6d-853c-d4ece2b56690",
        "nodeId": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mahkota Buah 6",
        "name": "Mahkota Buah 6",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 364,
        "y": 599,
        "lat": 425,
        "lng": 364,
        "description": "Mahkota Buah adalah kios penjual buah grosir lokal yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/oMYlRg5dxAYTD3sKTjPVPsLMwPIPX9TT.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/oMYlRg5dxAYTD3sKTjPVPsLMwPIPX9TT_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/oMYlRg5dxAYTD3sKTjPVPsLMwPIPX9TT.png",
          "https://maps.pasargedesolo.com/storage/locations/KzIIPKzwvZwW6D4Y1yG41CuHOX3GZiLJQ4z4h1qi.jpg"
        ],
        "entries": [
          {
            "x": 371,
            "y": 610
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7a6e-6209-4dac-995f-2a331361fbdf",
        "nodeId": "n_9eec7a6e-6209-4dac-995f-2a331361fbdf",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mahkota Buah 7",
        "name": "Mahkota Buah 7",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 316,
        "y": 573,
        "lat": 451,
        "lng": 316,
        "description": "Mahkota Buah adalah kios penjual buah grosir lokal yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/HgdxFhW2SjTwHkNGq1X4GZ44h3kOqHds.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/HgdxFhW2SjTwHkNGq1X4GZ44h3kOqHds_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/HgdxFhW2SjTwHkNGq1X4GZ44h3kOqHds.png",
          "https://maps.pasargedesolo.com/storage/locations/aJ5dSEGVJQ4fhQNw1olx91UQptN6jZjJZ3EFDhQ2.jpg"
        ],
        "entries": [
          {
            "x": 311,
            "y": 560
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7b13-fda4-44c5-953a-dd36c58efcc8",
        "nodeId": "n_9eec7b13-fda4-44c5-953a-dd36c58efcc8",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mahkota Buah 9",
        "name": "Mahkota Buah 9",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 399,
        "y": 570,
        "lat": 454,
        "lng": 399,
        "description": "Mahkota Buah adalah kios penjual buah grosir lokal yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/locations/apiyg9bRVEmNFrvuqeGOSTi3HmrcI5hG5zxkXkug.jpg",
        "imageThumb": null,
        "images": [
          "https://maps.pasargedesolo.com/storage/locations/apiyg9bRVEmNFrvuqeGOSTi3HmrcI5hG5zxkXkug.jpg"
        ],
        "entries": [
          {
            "x": 411,
            "y": 572
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec772d-17a6-4cde-a235-77763ff5bcf4",
        "nodeId": "n_9eec772d-17a6-4cde-a235-77763ff5bcf4",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mangga Segar Pak Gepeng 2",
        "name": "Mangga Segar Pak Gepeng 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 292,
        "y": 497,
        "lat": 527,
        "lng": 292,
        "description": "Mangga Segar Pak Gepeng adalah kios buah yang spesialisasi menjual mangga grosir dan ecer di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/0XblStulMZlGLmV06tUaebUExuIPFcZX.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/0XblStulMZlGLmV06tUaebUExuIPFcZX_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/0XblStulMZlGLmV06tUaebUExuIPFcZX.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/MpbeyXvKeVWdWNGBn89aNRUUBH7r7qtm5NkMlYT5.jpg"
        ],
        "entries": [
          {
            "x": 288,
            "y": 488
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec79e5-16b7-46f3-8d81-b05bb78ab888",
        "nodeId": "n_9eec79e5-16b7-46f3-8d81-b05bb78ab888",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mangga Segar Pak Gepeng 3",
        "name": "Mangga Segar Pak Gepeng 3",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 342,
        "y": 522,
        "lat": 502,
        "lng": 342,
        "description": "Mangga Segar Pak Gepeng adalah kios buah yang spesialisasi menjual mangga grosir dan ecer di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/0pXVQAsJDA4SzAoP45sEZmqHsu71Lk5e.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/0pXVQAsJDA4SzAoP45sEZmqHsu71Lk5e_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/0pXVQAsJDA4SzAoP45sEZmqHsu71Lk5e.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/2Nban0KDmeybU5xkrcrGIGT2JefJws1Vs6KwNP33.jpg"
        ],
        "entries": [
          {
            "x": 332,
            "y": 537
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7c8a-42c1-43a2-840a-a17f4a1538cf",
        "nodeId": "n_9eec7c8a-42c1-43a2-840a-a17f4a1538cf",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mahkota Buah 2",
        "name": "Mahkota Buah 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 368,
        "y": 671,
        "lat": 353,
        "lng": 368,
        "description": "Mahkota Buah adalah kios penjual buah grosir lokal yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/UThtuD1yC5KVKxHJ7cFtu7RH2IytwVpU.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/UThtuD1yC5KVKxHJ7cFtu7RH2IytwVpU_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/UThtuD1yC5KVKxHJ7cFtu7RH2IytwVpU.png",
          "https://maps.pasargedesolo.com/storage/locations/VQIHjfjt2xcLzOjLJd4vcbEttmdWgOdxnw0EYHGo.jpg"
        ],
        "entries": [
          {
            "x": 370,
            "y": 686
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
        "nodeId": "n_9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pak Ratno",
        "name": "Pak Ratno",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 360,
        "y": 371,
        "lat": 653,
        "lng": 360,
        "description": "Pak Ratno adalah kios buah yang menawarkan berbagai macam buah segar lokal dan impor dan melayani pembuatan parsel dengan harga terjangkau di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/QZVsWAZhQ7BYQx98KYJsKpEguTJuMk6F.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/QZVsWAZhQ7BYQx98KYJsKpEguTJuMk6F_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/QZVsWAZhQ7BYQx98KYJsKpEguTJuMk6F.png",
          "https://maps.pasargedesolo.com/storage/locations/invU992ezXU0FaGkewP3Sk5NOEPZ6xzaLpYSxpkn.jpg",
          "https://maps.pasargedesolo.com/storage/locations/FNU95nVRNkXOiysBplzN3uztwBO4RbTzbEFMH83m.jpg"
        ],
        "entries": [
          {
            "x": 379,
            "y": 369
          },
          {
            "x": 379,
            "y": 369
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
        "nodeId": "n_9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Sumadi Buah Murni 4",
        "name": "Sumadi Buah Murni 4",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 209,
        "y": 314,
        "lat": 710,
        "lng": 209,
        "description": "Sumadi Buah Murni adalah kios buah grosir di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/3uLfa7nBroiY6OdLg16E1MIohE6FSba3.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/3uLfa7nBroiY6OdLg16E1MIohE6FSba3_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/3uLfa7nBroiY6OdLg16E1MIohE6FSba3.png",
          "https://maps.pasargedesolo.com/storage/locations/PddiYZ48BoOIQvswrZSmhh9v8sMh4QxzQrJ17hYX.jpg",
          "https://maps.pasargedesolo.com/storage/locations/aeuehsbja5JmyyF6ZTyt6BMie6D8XhpdzM4fXLLm.jpg"
        ],
        "entries": [
          {
            "x": 216,
            "y": 327
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec830c-6b6c-4bef-8ce4-7e0061f0987e",
        "nodeId": "n_9eec830c-6b6c-4bef-8ce4-7e0061f0987e",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Sumadi Buah Murni 2",
        "name": "Sumadi Buah Murni 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 252,
        "y": 359,
        "lat": 665,
        "lng": 252,
        "description": "Sumadi Buah Murni adalah kios buah grosir di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/XbuXyAuiCqgNn8vGbOfmuxWQyD4Z6joq.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/XbuXyAuiCqgNn8vGbOfmuxWQyD4Z6joq_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/XbuXyAuiCqgNn8vGbOfmuxWQyD4Z6joq.png",
          "https://maps.pasargedesolo.com/storage/locations/d88wXA29fbTfzW3EkpTutr84B28jz5X1EuMBTjzZ.jpg",
          "https://maps.pasargedesolo.com/storage/locations/O0IqlBt2mG4KAnKW7f6CryJ9LQqcc0MVyjdYNc07.jpg"
        ],
        "entries": [
          {
            "x": 247,
            "y": 347
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec82e5-4201-47d4-869a-ec3ed752c271",
        "nodeId": "n_9eec82e5-4201-47d4-869a-ec3ed752c271",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Sumadi Buah Murni 3",
        "name": "Sumadi Buah Murni 3",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 312,
        "y": 357,
        "lat": 667,
        "lng": 312,
        "description": "Sumadi Buah Murni adalah kios buah grosir di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/IVUr6GyHHQvqepqFY4MDHzbIjotujyl9.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/IVUr6GyHHQvqepqFY4MDHzbIjotujyl9_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/IVUr6GyHHQvqepqFY4MDHzbIjotujyl9.png",
          "https://maps.pasargedesolo.com/storage/locations/2vBZZlpWzQhndUBFcLq6cTkMSKgjqvqTlcEI0xlq.jpg",
          "https://maps.pasargedesolo.com/storage/locations/HOycA1kfM1cLmYB0JbAWbQP97hzS7XiWwYI8hYQj.jpg"
        ],
        "entries": [
          {
            "x": 310,
            "y": 347
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7e0e-89eb-4c13-8eb0-21b58e2fa968",
        "nodeId": "n_9eec7e0e-89eb-4c13-8eb0-21b58e2fa968",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mbak Marthi",
        "name": "Mbak Marthi",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 512,
        "y": 269,
        "lat": 755,
        "lng": 512,
        "description": "Mbak Marthi atau Kios Buah Iik Mbak Marthi adalah kios buah lokal dan import yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe yang menerima layanan pembuatan hampers atau parcel buah",
        "image": "https://maps.pasargedesolo.com/storage/stores/hOEGI9ZMZylnenp5SAZnxrYzwKf2CGpv.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/hOEGI9ZMZylnenp5SAZnxrYzwKf2CGpv_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/hOEGI9ZMZylnenp5SAZnxrYzwKf2CGpv.jpg",
          "https://maps.pasargedesolo.com/storage/locations/YBrFzP0vWCXrK9bofxDSwTbBAL6kovEcQLnwWJwl.jpg",
          "https://maps.pasargedesolo.com/storage/locations/C7meZFj9xYvd53aN0Fqn85b97qhhq8XfwebuyX4U.jpg"
        ],
        "entries": [
          {
            "x": 512,
            "y": 291
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
        "nodeId": "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mahkota Buah 1",
        "name": "Mahkota Buah 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 386,
        "y": 717,
        "lat": 307,
        "lng": 386,
        "description": "Mahkota Buah adalah kios penjual buah grosir lokal yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/MuEf1tY7aX5rGejZxFsGvGzIWpftWxCt.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/MuEf1tY7aX5rGejZxFsGvGzIWpftWxCt_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/MuEf1tY7aX5rGejZxFsGvGzIWpftWxCt.png",
          "https://maps.pasargedesolo.com/storage/locations/VnmS1dbQfJ5OApRY4pxXwpF7AaXRUzv3FNEevPxE.jpg"
        ],
        "entries": [
          {
            "x": 381,
            "y": 704
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8ea0-a78f-4419-8d74-ee523e0d906e",
        "nodeId": "n_9eec8ea0-a78f-4419-8d74-ee523e0d906e",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Buah Bu Wahyem atau Mas Bono",
        "name": "Kios Buah Bu Wahyem atau Mas Bono",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 522,
        "y": 573,
        "lat": 451,
        "lng": 522,
        "description": "Kios Buah Bu Wahyem atau Mas Bono adalah kios yang menjual buah segar spesialisasi buah pisang",
        "image": "https://maps.pasargedesolo.com/storage/stores/FUI18aojBx6XVen6qkowckH4ACLGYKqs.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/FUI18aojBx6XVen6qkowckH4ACLGYKqs_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/FUI18aojBx6XVen6qkowckH4ACLGYKqs.jpg"
        ],
        "entries": [
          {
            "x": 525,
            "y": 559
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8776-f642-49cd-80f2-04db0504d9ee",
        "nodeId": "n_9eec8776-f642-49cd-80f2-04db0504d9ee",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Buah Bu Parman 2",
        "name": "Kios Buah Bu Parman 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 634,
        "y": 716,
        "lat": 308,
        "lng": 634,
        "description": "Kios Buah Bu Parman adalah kios penjual buah grosir dan eceran yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/syBljiZnzzkUGPgL8AFPbrEEuXWpFT0M.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/syBljiZnzzkUGPgL8AFPbrEEuXWpFT0M_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/syBljiZnzzkUGPgL8AFPbrEEuXWpFT0M.png"
        ],
        "entries": [
          {
            "x": 631,
            "y": 703
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6e73-bb14-4acd-854d-ee2b0e528107",
        "nodeId": "n_9eec6e73-bb14-4acd-854d-ee2b0e528107",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Berkah Buah 1",
        "name": "Berkah Buah 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 234,
        "y": 187,
        "lat": 837,
        "lng": 234,
        "description": "Berkah Buah adalah kios penjual buah yang menerima pembelian secara grosir dan ecer di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/nMIuqN7MNDoZ9bIjEJiHJhUbFRMMRKja.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/nMIuqN7MNDoZ9bIjEJiHJhUbFRMMRKja_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/nMIuqN7MNDoZ9bIjEJiHJhUbFRMMRKja.png"
        ],
        "entries": [
          {
            "x": 259,
            "y": 187
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec851e-4632-4e43-aa60-fc29301bd33a",
        "nodeId": "n_9eec851e-4632-4e43-aa60-fc29301bd33a",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Restu Buah 1",
        "name": "Restu Buah 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 725,
        "y": 160,
        "lat": 864,
        "lng": 725,
        "description": "Restu Buah adalah kios buah yang menerima layanan pembuatan hampers buah atau parcel buah di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/KELxKj2a995isZeiE1Wz9XKPFqHETrtb.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/KELxKj2a995isZeiE1Wz9XKPFqHETrtb_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/KELxKj2a995isZeiE1Wz9XKPFqHETrtb.jpg"
        ],
        "entries": [
          {
            "x": 750,
            "y": 163
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8553-fd7d-45f2-acba-b0eb3ead2475",
        "nodeId": "n_9eec8553-fd7d-45f2-acba-b0eb3ead2475",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Restu Buah 2",
        "name": "Restu Buah 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 812,
        "y": 236,
        "lat": 788,
        "lng": 812,
        "description": "Restu Buah adalah kios buah yang menerima layanan pembuatan hampers buah atau parcel buah di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/LLOzQ4CDPHpGMKgvmvOGMEiTrKMcTxxm.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/LLOzQ4CDPHpGMKgvmvOGMEiTrKMcTxxm_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/LLOzQ4CDPHpGMKgvmvOGMEiTrKMcTxxm.jpg"
        ],
        "entries": [
          {
            "x": 790,
            "y": 242
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec9476-8c85-490e-85b9-71b1e19c9a90",
        "nodeId": "n_9eec9476-8c85-490e-85b9-71b1e19c9a90",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Buah Lestari",
        "name": "Kios Buah Lestari",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 789,
        "y": 501,
        "lat": 523,
        "lng": 789,
        "description": "Kios Buah Lestari adalah toko yang menjual berbagai macam buah lokal yang dapat dibeli dalam jumlah eceran maupun grosir",
        "image": "https://maps.pasargedesolo.com/storage/stores/6iCxT1Eo7g7dL9N9dVhMtZQu4bVSD6a8.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/6iCxT1Eo7g7dL9N9dVhMtZQu4bVSD6a8_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/6iCxT1Eo7g7dL9N9dVhMtZQu4bVSD6a8.png"
        ],
        "entries": [
          {
            "x": 789,
            "y": 486
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8fcb-024f-4d9c-abe5-5abf959c75c6",
        "nodeId": "n_9eec8fcb-024f-4d9c-abe5-5abf959c75c6",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Sari Buah 2",
        "name": "Kios Sari Buah 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 745,
        "y": 313,
        "lat": 711,
        "lng": 745,
        "description": "Kios Sari Buah adalah toko buah segar menawarkan berbagai macam buah lokal dan impor dengan kualitas unggul, serta menyediakan layanan parcel buah yang dapat disesuaikan dengan kebutuhan pelanggan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/zziajYvoPOHjChx0SnXYtF8YCGKJCMkX.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/zziajYvoPOHjChx0SnXYtF8YCGKJCMkX_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/zziajYvoPOHjChx0SnXYtF8YCGKJCMkX.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/nRTS3aQICDtq2jEifc5iWyZ5jxtiGoq1SSlsyzAF.jpg"
        ],
        "entries": [
          {
            "x": 733,
            "y": 327
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec90e5-1bca-4126-a080-d6e513a0c54a",
        "nodeId": "n_9eec90e5-1bca-4126-a080-d6e513a0c54a",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Sari Buah 5",
        "name": "Kios Sari Buah 5",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 721,
        "y": 426,
        "lat": 598,
        "lng": 721,
        "description": "Kios Sari Buah adalah toko buah segar menawarkan berbagai macam buah lokal dan impor dengan kualitas unggul, serta menyediakan layanan parcel buah yang dapat disesuaikan dengan kebutuhan pelanggan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/hyTvVMIWZv3me8XAOp75UlvaUZMSUZFC.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/hyTvVMIWZv3me8XAOp75UlvaUZMSUZFC_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/hyTvVMIWZv3me8XAOp75UlvaUZMSUZFC.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/tCdgSfdayEpX44Sz3mKi7mbsXiUeQSw9ikHWvgKU.jpg"
        ],
        "entries": [
          {
            "x": 715,
            "y": 415
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec9315-957f-4996-974a-3e8eaf80fd78",
        "nodeId": "n_9eec9315-957f-4996-974a-3e8eaf80fd78",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Pisang Mbak Pur 2",
        "name": "Kios Pisang Mbak Pur 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 666,
        "y": 289,
        "lat": 735,
        "lng": 666,
        "description": "Kios Pisang Mbak Pur adalah kios buah spesialisasi pisang yang berada di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/BtEP8WQ7SybgBEUvWL5fQwV2zoQhzCoM.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/BtEP8WQ7SybgBEUvWL5fQwV2zoQhzCoM_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/BtEP8WQ7SybgBEUvWL5fQwV2zoQhzCoM.png",
          "https://maps.pasargedesolo.com/storage/locations/sBjKv6SnqLuc5BS1o5DvlbBJOLBOI2MXMmzxVwHM.jpg"
        ],
        "entries": [
          {
            "x": 662,
            "y": 276
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec9052-76c2-45a4-aa02-fc70ad17a2f5",
        "nodeId": "n_9eec9052-76c2-45a4-aa02-fc70ad17a2f5",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Sari Buah 4",
        "name": "Kios Sari Buah 4",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 723,
        "y": 359,
        "lat": 665,
        "lng": 723,
        "description": "Kios Sari Buah adalah toko buah segar menawarkan berbagai macam buah lokal dan impor dengan kualitas unggul, serta menyediakan layanan parcel buah yang dapat disesuaikan dengan kebutuhan pelanggan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/tGLb4q8lsU7TYd3qbTw7H2wTGMLhBg6d.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/tGLb4q8lsU7TYd3qbTw7H2wTGMLhBg6d_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/tGLb4q8lsU7TYd3qbTw7H2wTGMLhBg6d.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/BsgK9D6PALedVHNFpv6M67aw3UANgJAaiZbAxQQ4.jpg"
        ],
        "entries": [
          {
            "x": 720,
            "y": 346
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec9145-d147-4605-8b74-b61ed00c1c80",
        "nodeId": "n_9eec9145-d147-4605-8b74-b61ed00c1c80",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Buah Bu Djurwasih 1",
        "name": "Kios Buah Bu Djurwasih 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 796,
        "y": 429,
        "lat": 595,
        "lng": 796,
        "description": "Kios Buah Bu Djurwasih adalah kios yang terletak di Pasar Gedhe Barat, menjual berbagai macam buah segar lokal",
        "image": "https://maps.pasargedesolo.com/storage/stores/QZYU5mkU5WPU65O6d2flNIQOWVCzoNVb.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/QZYU5mkU5WPU65O6d2flNIQOWVCzoNVb_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/QZYU5mkU5WPU65O6d2flNIQOWVCzoNVb.png",
          "https://maps.pasargedesolo.com/storage/locations/rFd4qpMgBms6DXHU78SQphiCrmGVEI5tAkZeW5HA.png"
        ],
        "entries": [
          {
            "x": 797,
            "y": 414
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec922b-e398-42ff-9e6f-b749914d7ea5",
        "nodeId": "n_9eec922b-e398-42ff-9e6f-b749914d7ea5",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Buah Bu Parman 3",
        "name": "Kios Buah Bu Parman 3",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 718,
        "y": 595,
        "lat": 429,
        "lng": 718,
        "description": "Kios Buah Bu Parman adalah kios penjual buah grosir dan eceran yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/IRW5k2jHngtqfbsWV9lcfcFG7iNIvRlu.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/IRW5k2jHngtqfbsWV9lcfcFG7iNIvRlu_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/IRW5k2jHngtqfbsWV9lcfcFG7iNIvRlu.png"
        ],
        "entries": [
          {
            "x": 721,
            "y": 610
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec9258-7571-427a-a72c-8d608c95a042",
        "nodeId": "n_9eec9258-7571-427a-a72c-8d608c95a042",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Buah Bu Parman 4",
        "name": "Kios Buah Bu Parman 4",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 698,
        "y": 572,
        "lat": 452,
        "lng": 698,
        "description": "Kios Buah Bu Parman adalah kios penjual buah grosir dan eceran yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/gImPYrEOzmeRxBeZYwVy2qt9czigERGu.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/gImPYrEOzmeRxBeZYwVy2qt9czigERGu_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/gImPYrEOzmeRxBeZYwVy2qt9czigERGu.png"
        ],
        "entries": [
          {
            "x": 695,
            "y": 560
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec9177-1334-4d68-a062-00018ba4812d",
        "nodeId": "n_9eec9177-1334-4d68-a062-00018ba4812d",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Buah Bu Djurwasih 2",
        "name": "Kios Buah Bu Djurwasih 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 815,
        "y": 455,
        "lat": 569,
        "lng": 815,
        "description": "Kios Buah Bu Djurwasih adalah kios yang terletak di Pasar Gedhe Barat, menjual berbagai macam buah segar lokal",
        "image": "https://maps.pasargedesolo.com/storage/stores/Xjh13VIkwC7nRKSb3dBQEXafFNTg17bU.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Xjh13VIkwC7nRKSb3dBQEXafFNTg17bU_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Xjh13VIkwC7nRKSb3dBQEXafFNTg17bU.png",
          "https://maps.pasargedesolo.com/storage/locations/VV7uSIyA1Mb5QWeq5IMSn1nmyBwWLS5INbtVQXSn.png"
        ],
        "entries": [
          {
            "x": 797,
            "y": 467
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec99e0-c558-46d6-b667-99a4bd5a8bf2",
        "nodeId": "n_9eec99e0-c558-46d6-b667-99a4bd5a8bf2",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Dien Buah 2",
        "name": "Kios Dien Buah 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 614,
        "y": 440,
        "lat": 584,
        "lng": 614,
        "description": "Kios Dien Buah adalah toko yang menawarkan berbagai macam buah lokal dan impor dengan kualitas unggul, serta melayani pembelian buah secara langsung maupun dalam bentuk parcel untuk berbagai keperluan.",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 606,
            "y": 440
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec9a20-92f9-485b-8071-f32ad10bab10",
        "nodeId": "n_9eec9a20-92f9-485b-8071-f32ad10bab10",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Dien Buah 1",
        "name": "Kios Dien Buah 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 532,
        "y": 506,
        "lat": 518,
        "lng": 532,
        "description": "Kios Dien Buah  adalah toko yang menawarkan berbagai macam buah lokal dan impor dengan kualitas unggul, serta melayani pembelian buah secara langsung maupun dalam bentuk parcel untuk berbagai keperluan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/NOzg0zjLPRKleOTiG2l3P0FjX64OK45Y.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/NOzg0zjLPRKleOTiG2l3P0FjX64OK45Y_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/NOzg0zjLPRKleOTiG2l3P0FjX64OK45Y.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/HZkzp0uk5zCvVtrRGJElWhWrKHLOI2g19tQvamId.jpg"
        ],
        "entries": [
          {
            "x": 565,
            "y": 512
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef20d4a-df34-4fdb-bd3a-ee040ac75d27",
        "nodeId": "n_9ef20d4a-df34-4fdb-bd3a-ee040ac75d27",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Berkah Buah 2",
        "name": "Berkah Buah 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 234,
        "y": 136,
        "lat": 888,
        "lng": 234,
        "description": "Berkah Buah adalah kios penjual buah yang menerima pembelian secara grosir dan ecer di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/vMrwytjdwzCKqpVcuBB8yFNWptnsTAJQ.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/vMrwytjdwzCKqpVcuBB8yFNWptnsTAJQ_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/vMrwytjdwzCKqpVcuBB8yFNWptnsTAJQ.png"
        ],
        "entries": [
          {
            "x": 260,
            "y": 138
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef20e8d-63fb-49e2-b422-6fc379ed7230",
        "nodeId": "n_9ef20e8d-63fb-49e2-b422-6fc379ed7230",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Berkah Buah 3",
        "name": "Berkah Buah 3",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 311,
        "y": 150,
        "lat": 874,
        "lng": 311,
        "description": "Berkah Buah adalah kios penjual buah yang menerima pembelian secara grosir dan ecer di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/QiSci1cIjVYN9tgo8gCW0CiGVeF5gp0O.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/QiSci1cIjVYN9tgo8gCW0CiGVeF5gp0O_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/QiSci1cIjVYN9tgo8gCW0CiGVeF5gp0O.png"
        ],
        "entries": [
          {
            "x": 293,
            "y": 153
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef24f24-43ee-47f9-bb32-518366849ad1",
        "nodeId": "n_9ef24f24-43ee-47f9-bb32-518366849ad1",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Toilet Pasar Buah",
        "name": "Toilet Pasar Buah",
        "category": "toilet",
        "categoryLabel": "Toilet & Fasilitas",
        "icon": "🚻",
        "color": "#009688",
        "x": 154,
        "y": 213,
        "lat": 811,
        "lng": 154,
        "description": "Fasilitas toilet yang berada di Pasar Gedhe",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 200,
            "y": 220
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9eec91cc-165d-4468-a191-721e5ae47b6b",
        "nodeId": "n_9eec91cc-165d-4468-a191-721e5ae47b6b",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Sari Buah 6",
        "name": "Kios Sari Buah 6",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 640,
        "y": 524,
        "lat": 500,
        "lng": 640,
        "description": "Kios Sari Buah adalah toko buah segar menawarkan berbagai macam buah lokal dan impor dengan kualitas unggul, serta menyediakan layanan parcel buah yang dapat disesuaikan dengan kebutuhan pelanggan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/NkRnVCB76f7lGnu2bRVbbVeLL8xhM40i.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/NkRnVCB76f7lGnu2bRVbbVeLL8xhM40i_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/NkRnVCB76f7lGnu2bRVbbVeLL8xhM40i.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/sjhDusqVNIrXdeW1fBNznNEIELVLzJCI2kHJxdue.jpg"
        ],
        "entries": [
          {
            "x": 649,
            "y": 537
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef4519a-b909-447a-9625-3c054c0d1d3f",
        "nodeId": "n_9ef4519a-b909-447a-9625-3c054c0d1d3f",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mbak Parmi",
        "name": "Mbak Parmi",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 816,
        "y": 358,
        "lat": 666,
        "lng": 816,
        "description": "Mbak Parmi adalah kios buah yang menerima layanan pembuatan hampers buah atau parcel buah dan berada di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/pGEkgwNnsVQgMvh954DZCWHf4NKBoFwL.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/pGEkgwNnsVQgMvh954DZCWHf4NKBoFwL_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/pGEkgwNnsVQgMvh954DZCWHf4NKBoFwL.jpg"
        ],
        "entries": [
          {
            "x": 817,
            "y": 345
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef44f96-1daa-4da8-9f38-9d92ae22bf16",
        "nodeId": "n_9ef44f96-1daa-4da8-9f38-9d92ae22bf16",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Mbak Sri-Tami",
        "name": "Kios Mbak Sri-Tami",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 684,
        "y": 188,
        "lat": 836,
        "lng": 684,
        "description": "Kios Mbak Sri-Tami adalah kios penjual buah di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/NDNuAe4WtDluTqITGAhvCH6JsURNZoDr.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/NDNuAe4WtDluTqITGAhvCH6JsURNZoDr_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/NDNuAe4WtDluTqITGAhvCH6JsURNZoDr.jpg",
          "https://maps.pasargedesolo.com/storage/locations/TrG013FqLxuvV7R6IcZiYMFV2ibpQqbZItBmCYEH.jpg",
          "https://maps.pasargedesolo.com/storage/locations/Z6lkSRCeHLa8cD9MyjyhL88HpvT4hgL5fEliXojI.jpg"
        ],
        "entries": [
          {
            "x": 660,
            "y": 190
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef450f5-fca0-4a8f-b2e2-8add6ec21215",
        "nodeId": "n_9ef450f5-fca0-4a8f-b2e2-8add6ec21215",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Sari Buah 8",
        "name": "Kios Sari Buah 8",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 684,
        "y": 134,
        "lat": 890,
        "lng": 684,
        "description": "Kios Sari Buah adalah toko buah segar menawarkan berbagai macam buah lokal dan impor dengan kualitas unggul, serta menyediakan layanan parcel buah yang dapat disesuaikan dengan kebutuhan pelanggan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/lVEpy6w0vNM4xOcG2gDymZZhOLpAQH57.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/lVEpy6w0vNM4xOcG2gDymZZhOLpAQH57_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/lVEpy6w0vNM4xOcG2gDymZZhOLpAQH57.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/3RTC7z61akIfUHQDsStBFQGWhzIS8LedSSF1WXqc.jpg",
          "https://maps.pasargedesolo.com/storage/locations/eGgB8cW4NcBSvnzMPXLLqtur5uWwKbl0TFL4CRr4.jpg"
        ],
        "entries": [
          {
            "x": 660,
            "y": 136
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d",
        "nodeId": "n_9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kiri 1",
        "name": "Pintu Pasar Buah Kiri 1",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 287,
        "y": 866,
        "lat": 158,
        "lng": 287,
        "description": "Pintu Pasar Buah Sisi Kiri Depan",
        "image": "https://maps.pasargedesolo.com/storage/stores/D9938RcS7s9rlKdxio5HIvZM24vgLcij.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/D9938RcS7s9rlKdxio5HIvZM24vgLcij_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/D9938RcS7s9rlKdxio5HIvZM24vgLcij.jpeg"
        ],
        "entries": [
          {
            "x": 289,
            "y": 865
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef46466-5f04-40c1-93e3-1ad0db0e47a6",
        "nodeId": "n_9ef46466-5f04-40c1-93e3-1ad0db0e47a6",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pinitu Pasar Buah Kanan 2",
        "name": "Pinitu Pasar Buah Kanan 2",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 740,
        "y": 827,
        "lat": 197,
        "lng": 740,
        "description": "Kios Pinitu Pasar Buah Kanan 2 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 739,
            "y": 825
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef46029-4126-4fbd-aeda-d61fdcf8164c",
        "nodeId": "n_9ef46029-4126-4fbd-aeda-d61fdcf8164c",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kiri 2",
        "name": "Pintu Pasar Buah Kiri 2",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 277,
        "y": 830,
        "lat": 194,
        "lng": 277,
        "description": "Pintu Pasar Buah Sisi Kiri Depan",
        "image": "https://maps.pasargedesolo.com/storage/stores/xwuOzgL2CAEpmqjx004O0IrwusiGm90t.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/xwuOzgL2CAEpmqjx004O0IrwusiGm90t_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/xwuOzgL2CAEpmqjx004O0IrwusiGm90t.jpeg"
        ],
        "entries": [
          {
            "x": 278,
            "y": 828
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef4633d-97c8-4b8b-9370-1098123268b1",
        "nodeId": "n_9ef4633d-97c8-4b8b-9370-1098123268b1",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pinitu Pasar Buah Kanan 1",
        "name": "Pinitu Pasar Buah Kanan 1",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 729,
        "y": 869,
        "lat": 155,
        "lng": 729,
        "description": "Kios Pinitu Pasar Buah Kanan 1 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 727,
            "y": 865
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef46411-a1a7-476f-b09f-a8dacb525674",
        "nodeId": "n_9ef46411-a1a7-476f-b09f-a8dacb525674",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kiri 3",
        "name": "Pintu Pasar Buah Kiri 3",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 267,
        "y": 794,
        "lat": 230,
        "lng": 267,
        "description": "Pintu Pasar Buah Sisi Kiri Depan",
        "image": "https://maps.pasargedesolo.com/storage/stores/SEhlNdQmaqYVOto8O3WzFGnyM0ILG65m.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/SEhlNdQmaqYVOto8O3WzFGnyM0ILG65m_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/SEhlNdQmaqYVOto8O3WzFGnyM0ILG65m.jpeg"
        ],
        "entries": [
          {
            "x": 270,
            "y": 792
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef464b9-ff7a-4def-af77-19496ce8fa45",
        "nodeId": "n_9ef464b9-ff7a-4def-af77-19496ce8fa45",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kiri 4",
        "name": "Pintu Pasar Buah Kiri 4",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 259,
        "y": 750,
        "lat": 274,
        "lng": 259,
        "description": "Pintu Pasar Buah Sisi Kiri",
        "image": "https://maps.pasargedesolo.com/storage/stores/Jm2dfdqwMlMuenqfMtBQJNqQx28dVwh1.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Jm2dfdqwMlMuenqfMtBQJNqQx28dVwh1_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Jm2dfdqwMlMuenqfMtBQJNqQx28dVwh1.jpeg"
        ],
        "entries": [
          {
            "x": 260,
            "y": 750
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
        "nodeId": "n_9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kiri 5",
        "name": "Pintu Pasar Buah Kiri 5",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 241,
        "y": 694,
        "lat": 330,
        "lng": 241,
        "description": "Pintu Pasar Buah Sisi Kiri",
        "image": "https://maps.pasargedesolo.com/storage/stores/Jbovs2HSUD3SZZ6DroWNBAT0XOJoPHZf.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Jbovs2HSUD3SZZ6DroWNBAT0XOJoPHZf_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Jbovs2HSUD3SZZ6DroWNBAT0XOJoPHZf.jpeg"
        ],
        "entries": [
          {
            "x": 240,
            "y": 694
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef4652d-a825-4415-a362-8bdddf3ad3fb",
        "nodeId": "n_9ef4652d-a825-4415-a362-8bdddf3ad3fb",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kiri 6",
        "name": "Pintu Pasar Buah Kiri 6",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 221,
        "y": 622,
        "lat": 402,
        "lng": 221,
        "description": "Pintu Pasar Buah Sisi Kiri",
        "image": "https://maps.pasargedesolo.com/storage/stores/oNVDcpNFXnrbT7zusTsf9vjpi6YdMYzr.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/oNVDcpNFXnrbT7zusTsf9vjpi6YdMYzr_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/oNVDcpNFXnrbT7zusTsf9vjpi6YdMYzr.jpeg"
        ],
        "entries": [
          {
            "x": 222,
            "y": 620
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef46579-870a-4bc7-81eb-9f0294177938",
        "nodeId": "n_9ef46579-870a-4bc7-81eb-9f0294177938",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kiri 7",
        "name": "Pintu Pasar Buah Kiri 7",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 200,
        "y": 547,
        "lat": 477,
        "lng": 200,
        "description": "Pintu Pasar Buah Sisi Kiri",
        "image": "https://maps.pasargedesolo.com/storage/stores/vd4noo3f6PCD7NVlBNbgyTbjuNggGfdY.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/vd4noo3f6PCD7NVlBNbgyTbjuNggGfdY_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/vd4noo3f6PCD7NVlBNbgyTbjuNggGfdY.jpeg"
        ],
        "entries": [
          {
            "x": 202,
            "y": 546
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef465c6-2726-4e9e-83b9-cd3fbd9edb45",
        "nodeId": "n_9ef465c6-2726-4e9e-83b9-cd3fbd9edb45",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kiri 8",
        "name": "Pintu Pasar Buah Kiri 8",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 182,
        "y": 476,
        "lat": 548,
        "lng": 182,
        "description": "Pintu Pasar Buah Sisi Kiri",
        "image": "https://maps.pasargedesolo.com/storage/stores/e8nqYDXAlwAItwAMEL3VA7UYPfDT0LkH.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/e8nqYDXAlwAItwAMEL3VA7UYPfDT0LkH_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/e8nqYDXAlwAItwAMEL3VA7UYPfDT0LkH.jpeg"
        ],
        "entries": [
          {
            "x": 183,
            "y": 475
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef46603-bd57-4a00-bdf6-3b79b3175376",
        "nodeId": "n_9ef46603-bd57-4a00-bdf6-3b79b3175376",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kiri 9",
        "name": "Pintu Pasar Buah Kiri 9",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 161,
        "y": 406,
        "lat": 618,
        "lng": 161,
        "description": "Pintu Pasar Buah Sisi Kiri",
        "image": "https://maps.pasargedesolo.com/storage/stores/5lGi6XKcixKmyOybkRqUOEE4cHsELWFf.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/5lGi6XKcixKmyOybkRqUOEE4cHsELWFf_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/5lGi6XKcixKmyOybkRqUOEE4cHsELWFf.jpeg"
        ],
        "entries": [
          {
            "x": 162,
            "y": 405
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef46649-62eb-4a47-aa8a-40fc1ab5d311",
        "nodeId": "n_9ef46649-62eb-4a47-aa8a-40fc1ab5d311",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kiri 10",
        "name": "Pintu Pasar Buah Kiri 10",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 144,
        "y": 336,
        "lat": 688,
        "lng": 144,
        "description": "Pintu Pasar Buah Sisi Kiri",
        "image": "https://maps.pasargedesolo.com/storage/stores/CaYiOuDeamaPHoQIUEqC6UL2gcb9c7za.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/CaYiOuDeamaPHoQIUEqC6UL2gcb9c7za_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/CaYiOuDeamaPHoQIUEqC6UL2gcb9c7za.jpeg"
        ],
        "entries": [
          {
            "x": 144,
            "y": 335
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef4667a-e72b-49e9-8985-3c1085a67866",
        "nodeId": "n_9ef4667a-e72b-49e9-8985-3c1085a67866",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kiri 11",
        "name": "Pintu Pasar Buah Kiri 11",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 124,
        "y": 263,
        "lat": 761,
        "lng": 124,
        "description": "Pintu Pasar Buah Sisi Kiri",
        "image": "https://maps.pasargedesolo.com/storage/stores/Hz06DKR1rVUDqnQ6uyEndJrKt9bfBPOJ.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Hz06DKR1rVUDqnQ6uyEndJrKt9bfBPOJ_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Hz06DKR1rVUDqnQ6uyEndJrKt9bfBPOJ.jpeg"
        ],
        "entries": [
          {
            "x": 125,
            "y": 262
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef46728-1456-470e-b273-8f2f32de3921",
        "nodeId": "n_9ef46728-1456-470e-b273-8f2f32de3921",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Depan 1",
        "name": "Pintu Pasar Buah Depan 1",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 391,
        "y": 906,
        "lat": 118,
        "lng": 391,
        "description": "Pintu Pasar Buah Sisi Depan",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 391,
            "y": 903
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef46756-84f4-461e-af73-74b9fd4fce4f",
        "nodeId": "n_9ef46756-84f4-461e-af73-74b9fd4fce4f",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Depan 2",
        "name": "Pintu Pasar Buah Depan 2",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 512,
        "y": 904,
        "lat": 120,
        "lng": 512,
        "description": "Pintu Pasar Buah Sisi Depan",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 513,
            "y": 903
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef46780-9dba-4bac-b681-f69e3f8e0f85",
        "nodeId": "n_9ef46780-9dba-4bac-b681-f69e3f8e0f85",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Depan 3",
        "name": "Pintu Pasar Buah Depan 3",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 634,
        "y": 905,
        "lat": 119,
        "lng": 634,
        "description": "Pintu Pasar Buah Sisi Depan",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 635,
            "y": 903
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef4686a-fa45-4528-b91f-f7905f17e2f2",
        "nodeId": "n_9ef4686a-fa45-4528-b91f-f7905f17e2f2",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Belakang 1",
        "name": "Pintu Pasar Buah Belakang 1",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 277,
        "y": 117,
        "lat": 907,
        "lng": 277,
        "description": "Pintu Pasar Buah Sisi Belakang",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 277,
            "y": 116
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef468a0-8404-4c7b-8162-aebdada0e880",
        "nodeId": "n_9ef468a0-8404-4c7b-8162-aebdada0e880",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Belakang 2",
        "name": "Pintu Pasar Buah Belakang 2",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 389,
        "y": 117,
        "lat": 907,
        "lng": 389,
        "description": "Pintu Pasar Buah Sisi Belakang",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 390,
            "y": 117
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
        "nodeId": "n_9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Belakang 3",
        "name": "Pintu Pasar Buah Belakang 3",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 632,
        "y": 117,
        "lat": 907,
        "lng": 632,
        "description": "Pintu Pasar Buah Sisi Belakang",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 633,
            "y": 117
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef468ff-6dda-4df2-890f-485bd7fc727a",
        "nodeId": "n_9ef468ff-6dda-4df2-890f-485bd7fc727a",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Belakang 4",
        "name": "Pintu Pasar Buah Belakang 4",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 771,
        "y": 117,
        "lat": 907,
        "lng": 771,
        "description": "Pintu Pasar Buah Sisi Belakang",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 772,
            "y": 118
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef48bb8-a5d1-4588-8cdd-59100c003935",
        "nodeId": "n_9ef48bb8-a5d1-4588-8cdd-59100c003935",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kanan 3",
        "name": "Pintu Pasar Buah Kanan 3",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 758,
        "y": 745,
        "lat": 279,
        "lng": 758,
        "description": "Kios Pintu Pasar Buah Kanan 3 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 759,
            "y": 743
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9eec8335-a3d8-4734-a3a0-6f00bd388072",
        "nodeId": "n_9eec8335-a3d8-4734-a3a0-6f00bd388072",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Sumadi Buah Murni 1",
        "name": "Sumadi Buah Murni 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 186,
        "y": 359,
        "lat": 665,
        "lng": 186,
        "description": "Sumadi Buah Murni adalah kios buah grosir di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/U5WXFrw1Jlf5HPaqsKyLDDB7Dl9Kvbph.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/U5WXFrw1Jlf5HPaqsKyLDDB7Dl9Kvbph_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/U5WXFrw1Jlf5HPaqsKyLDDB7Dl9Kvbph.png",
          "https://maps.pasargedesolo.com/storage/locations/ndIZvsUuYi1EsOmEZHmxmdKJUNstRK64CIEajeAL.jpg",
          "https://maps.pasargedesolo.com/storage/locations/EUHIaxJ7WrYxZiyqAouVKLMj7QcvV2EgjVhpjoLn.jpg"
        ],
        "entries": [
          {
            "x": 180,
            "y": 347
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f02834e-c66b-43b8-afdd-997eed7ee5ee",
        "nodeId": "n_9f02834e-c66b-43b8-afdd-997eed7ee5ee",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mbak Ni",
        "name": "Mbak Ni",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 492,
        "y": 439,
        "lat": 585,
        "lng": 492,
        "description": "Mbak Ni adalah kios penjual buah grosir dan ecer di Pasar Buah yang menerima layanan pembuatan hampers buah atau parcel buah untuk jenguk orang sakit, hadiah, oleh-oleh, dan lain-lain.",
        "image": "https://maps.pasargedesolo.com/storage/stores/qQQLm91MLkFubK3UVOW9pSPvpReNxwKr.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/qQQLm91MLkFubK3UVOW9pSPvpReNxwKr_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/qQQLm91MLkFubK3UVOW9pSPvpReNxwKr.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/dkWfjbWvQ9m6Ryl9Z56f8vFaDGnqCV2vdfBqukmt.jpg"
        ],
        "entries": [
          {
            "x": 474,
            "y": 454
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef48c07-67a3-423b-8c93-5f7e7649cc61",
        "nodeId": "n_9ef48c07-67a3-423b-8c93-5f7e7649cc61",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kanan 4",
        "name": "Pintu Pasar Buah Kanan 4",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 773,
        "y": 696,
        "lat": 328,
        "lng": 773,
        "description": "Kios Pintu Pasar Buah Kanan 4 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 773,
            "y": 696
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef48cb7-97da-41b1-a4a2-a1bceecca23b",
        "nodeId": "n_9ef48cb7-97da-41b1-a4a2-a1bceecca23b",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kanan 5",
        "name": "Pintu Pasar Buah Kanan 5",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 793,
        "y": 626,
        "lat": 398,
        "lng": 793,
        "description": "Kios Pintu Pasar Buah Kanan 5 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 793,
            "y": 621
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef48d14-4523-4894-8703-594c0f0916ae",
        "nodeId": "n_9ef48d14-4523-4894-8703-594c0f0916ae",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kanan 6",
        "name": "Pintu Pasar Buah Kanan 6",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 812,
        "y": 553,
        "lat": 471,
        "lng": 812,
        "description": "Kios Pintu Pasar Buah Kanan 6 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 814,
            "y": 549
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef48d69-aba6-41da-8822-9d0e84986e23",
        "nodeId": "n_9ef48d69-aba6-41da-8822-9d0e84986e23",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kanan 7",
        "name": "Pintu Pasar Buah Kanan 7",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 830,
        "y": 483,
        "lat": 541,
        "lng": 830,
        "description": "Kios Pintu Pasar Buah Kanan 7 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 832,
            "y": 477
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef48dd5-1f7b-418c-9d90-1c314a2d1981",
        "nodeId": "n_9ef48dd5-1f7b-418c-9d90-1c314a2d1981",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kanan 8",
        "name": "Pintu Pasar Buah Kanan 8",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 851,
        "y": 407,
        "lat": 617,
        "lng": 851,
        "description": "Kios Pintu Pasar Buah Kanan 8 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 852,
            "y": 405
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef48e98-f3b8-4658-a55d-480e77997455",
        "nodeId": "n_9ef48e98-f3b8-4658-a55d-480e77997455",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kanan 9",
        "name": "Pintu Pasar Buah Kanan 9",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 872,
        "y": 341,
        "lat": 683,
        "lng": 872,
        "description": "Kios Pintu Pasar Buah Kanan 9 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 871,
            "y": 336
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef48f75-d517-4e36-9331-6128a84825a7",
        "nodeId": "n_9ef48f75-d517-4e36-9331-6128a84825a7",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pintu Pasar Buah Kanan 10",
        "name": "Pintu Pasar Buah Kanan 10",
        "category": "pintu",
        "categoryLabel": "Pintu Masuk/Keluar",
        "icon": "🚪",
        "color": "#FF5722",
        "x": 890,
        "y": 273,
        "lat": 751,
        "lng": 890,
        "description": "Kios Pintu Pasar Buah Kanan 10 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 885,
            "y": 266
          }
        ],
        "accessible": true,
        "hasTactile": true,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9eec70e9-2b54-4e3d-a5cb-0f79726c890c",
        "nodeId": "n_9eec70e9-2b54-4e3d-a5cb-0f79726c890c",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Buah Wandi",
        "name": "Kios Buah Wandi",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 253,
        "y": 289,
        "lat": 735,
        "lng": 253,
        "description": "Kios Buah Wandi adalah kios buah grosir di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe yang menjual jeruk, mangga, dan jeruk bali",
        "image": "https://maps.pasargedesolo.com/storage/stores/u5LMR2MqeXq6beU4wSmyWNoLZyOErgsJ.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/u5LMR2MqeXq6beU4wSmyWNoLZyOErgsJ_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/u5LMR2MqeXq6beU4wSmyWNoLZyOErgsJ.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/W4AfkgSJ5WN9UNbrvOfQ5dChadcjhirRPmB6P4Am.jpg",
          "https://maps.pasargedesolo.com/storage/locations/vNQRkb2Yi0iYJIaw21iZICgXQrAP7XMAAaCQE3sk.jpg"
        ],
        "entries": [
          {
            "x": 254,
            "y": 276
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7599-eb9d-49bb-9f51-6ef347cade9d",
        "nodeId": "n_9eec7599-eb9d-49bb-9f51-6ef347cade9d",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pak Daliman",
        "name": "Pak Daliman",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 273,
        "y": 452,
        "lat": 572,
        "lng": 273,
        "description": "Pak Daliman adalah Kios penjual buah eceran dan grosir di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/8YAZS4wzOaVSGue8ROQZz4YVznnhdYPh.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/8YAZS4wzOaVSGue8ROQZz4YVznnhdYPh_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/8YAZS4wzOaVSGue8ROQZz4YVznnhdYPh.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/1cdZJSSvQL73rFRHozXc6uLFO4lDVli5DlnDmIcc.jpg"
        ],
        "entries": [
          {
            "x": 277,
            "y": 466
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef49e93-f78c-4e70-8caf-3c0f52386f87",
        "nodeId": "n_9ef49e93-f78c-4e70-8caf-3c0f52386f87",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Tangga lt 1.3",
        "name": "Tangga lt 1.3",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 876,
        "y": 185,
        "lat": 839,
        "lng": 876,
        "description": "Kios Tangga lt 1.3 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 876,
            "y": 185
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef49ed1-cd82-4787-a3c2-cee71937dd17",
        "nodeId": "n_9ef49ed1-cd82-4787-a3c2-cee71937dd17",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Tangga lt 1.4",
        "name": "Tangga lt 1.4",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 215,
        "y": 200,
        "lat": 824,
        "lng": 215,
        "description": "Kios Tangga lt 1.4 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 215,
            "y": 200
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336",
        "nodeId": "n_9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Tangga lt 1.1",
        "name": "Tangga lt 1.1",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 502,
        "y": 673,
        "lat": 351,
        "lng": 502,
        "description": "Kios Tangga lt 1.1 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 502,
            "y": 673
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef49dee-e4b2-4e01-9963-0c6f4be6f493",
        "nodeId": "n_9ef49dee-e4b2-4e01-9963-0c6f4be6f493",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Tangga lt 1.2",
        "name": "Tangga lt 1.2",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 540,
        "y": 766,
        "lat": 258,
        "lng": 540,
        "description": "Kios Tangga lt 1.2 di Pasar Buah Lantai 1",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 540,
            "y": 766
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9f0847a3-a536-412b-aa0f-5c9f0b92b373",
        "nodeId": "n_9f0847a3-a536-412b-aa0f-5c9f0b92b373",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Buah Wandi 2",
        "name": "Kios Buah Wandi 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 324,
        "y": 290,
        "lat": 734,
        "lng": 324,
        "description": "Kios Buah Wandi adalah kios buah grosir di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe yang menjual jeruk, mangga, dan jeruk bali",
        "image": "https://maps.pasargedesolo.com/storage/stores/3Ky40lNb0lbVsCIdF4Lw4s5lPhVpEX8P.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/3Ky40lNb0lbVsCIdF4Lw4s5lPhVpEX8P_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/3Ky40lNb0lbVsCIdF4Lw4s5lPhVpEX8P.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/ooYQfdyqDBs95hPZsqTuU3WTdAIK30XHdRo7sXay.jpg"
        ],
        "entries": [
          {
            "x": 320,
            "y": 277
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7b70-7128-48d1-b3b4-53d44866b07e",
        "nodeId": "n_9eec7b70-7128-48d1-b3b4-53d44866b07e",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mahkota Buah 5",
        "name": "Mahkota Buah 5",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 315,
        "y": 596,
        "lat": 428,
        "lng": 315,
        "description": "Mahkota Buah adalah kios penjual buah grosir lokal yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/bD1mvKJLTO32VAJ64DIBzGuq6MSscJp8.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/bD1mvKJLTO32VAJ64DIBzGuq6MSscJp8_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/bD1mvKJLTO32VAJ64DIBzGuq6MSscJp8.png",
          "https://maps.pasargedesolo.com/storage/locations/oWduKUKxnssfONCPnR1P775p141FdaO4jaYnWnAs.jpg"
        ],
        "entries": [
          {
            "x": 319,
            "y": 610
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef456a5-7fd1-497d-a063-f864a78359bc",
        "nodeId": "n_9ef456a5-7fd1-497d-a063-f864a78359bc",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Buah Bu Parman 5",
        "name": "Kios Buah Bu Parman 5",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 685,
        "y": 888,
        "lat": 136,
        "lng": 685,
        "description": "Kios Buah Bu Parman adalah kios penjual buah grosir dan eceran yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/I8d8sm8iKDCFhbZsn0au9O5H6dcjQkCR.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/I8d8sm8iKDCFhbZsn0au9O5H6dcjQkCR_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/I8d8sm8iKDCFhbZsn0au9O5H6dcjQkCR.png",
          "https://maps.pasargedesolo.com/storage/locations/qx6pIgPBmarvwbatV1Xeaoy652KJmVa9uQhzxnK0.jpg",
          "https://maps.pasargedesolo.com/storage/locations/E61Ou2Th2ejjvlv9MksZyAeCCZUZd7ac3DNIkVWo.jpg"
        ],
        "entries": [
          {
            "x": 648,
            "y": 891
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec92b6-c184-459b-b63f-1d1ac451a95e",
        "nodeId": "n_9eec92b6-c184-459b-b63f-1d1ac451a95e",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Pisang Mbak Pur 1",
        "name": "Kios Pisang Mbak Pur 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 553,
        "y": 242,
        "lat": 782,
        "lng": 553,
        "description": "Kios Pisang Mbak Pur adalah kios buah spesialisasi pisang yang berada di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/srOJvbiSqpBhDa14rVOINpqaV3AR42XB.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/srOJvbiSqpBhDa14rVOINpqaV3AR42XB_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/srOJvbiSqpBhDa14rVOINpqaV3AR42XB.jpg"
        ],
        "entries": [
          {
            "x": 547,
            "y": 229
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a",
        "nodeId": "n_9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mushola Pasar Gede Barat",
        "name": "Mushola Pasar Gedhe Barat",
        "category": "mushola",
        "categoryLabel": "Mushola / Ibadah",
        "icon": "🕌",
        "color": "#4CAF50",
        "x": 507,
        "y": 166,
        "lat": 858,
        "lng": 507,
        "description": "Mushola adalah tempat ibadah umat Islam yang berukuran lebih kecil dari masjid. Mushola biasanya digunakan untuk salat fardu berjamaah dalam lingkup yang lebih terbatas seperti di rumah, kantor, sekolah, atau fasilitas umum.",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 543,
            "y": 200
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9eec8174-f3c5-4e80-ae9e-f7286bd54a42",
        "nodeId": "n_9eec8174-f3c5-4e80-ae9e-f7286bd54a42",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Sumadi Buah Murni 5",
        "name": "Sumadi Buah Murni 5",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 270,
        "y": 312,
        "lat": 712,
        "lng": 270,
        "description": "Sumadi Buah Murni adalah kios buah grosir di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/W6dbDhdbCXuL0m6POOlYZbbz6skYyKdt.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/W6dbDhdbCXuL0m6POOlYZbbz6skYyKdt_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/W6dbDhdbCXuL0m6POOlYZbbz6skYyKdt.png",
          "https://maps.pasargedesolo.com/storage/locations/koLdPE1iqP3opRyteSaJ7QDK3m0CrEDrrrhiRhDc.jpg",
          "https://maps.pasargedesolo.com/storage/locations/mDZcjKbaSRnTHiDmSVYvsE5uI9IsXqlT0ISVfLPj.jpg"
        ],
        "entries": [
          {
            "x": 275,
            "y": 328
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7ac6-d026-4157-a076-998b718a7658",
        "nodeId": "n_9eec7ac6-d026-4157-a076-998b718a7658",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mahkota Buah 8",
        "name": "Mahkota Buah 8",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 365,
        "y": 572,
        "lat": 452,
        "lng": 365,
        "description": "Mahkota Buah adalah kios penjual buah grosir lokal yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/5OYXINDkoizAvBIb5HReYjuJj6NEPOS0.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/5OYXINDkoizAvBIb5HReYjuJj6NEPOS0_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/5OYXINDkoizAvBIb5HReYjuJj6NEPOS0.png",
          "https://maps.pasargedesolo.com/storage/locations/Xh4WTi8ObPGTGuONveVWO05mvcrCqyJUmdzeORMU.jpg"
        ],
        "entries": [
          {
            "x": 360,
            "y": 560
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
        "nodeId": "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mahkota Buah 3",
        "name": "Mahkota Buah 3",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 322,
        "y": 674,
        "lat": 350,
        "lng": 322,
        "description": "Mahkota Buah adalah kios penjual buah grosir lokal yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/dYjVj3F3veVHhexmxdAxshMiUKPObUwx.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/dYjVj3F3veVHhexmxdAxshMiUKPObUwx_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/dYjVj3F3veVHhexmxdAxshMiUKPObUwx.png",
          "https://maps.pasargedesolo.com/storage/locations/zPofZj5qpQXANMIMk9SnT9JRtHsyp2XhirkQjp68.jpg"
        ],
        "entries": [
          {
            "x": 327,
            "y": 687
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec9380-623e-44a0-a9e2-6eb5aa776221",
        "nodeId": "n_9eec9380-623e-44a0-a9e2-6eb5aa776221",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Sari Buah 7",
        "name": "Kios Sari Buah 7",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 562,
        "y": 439,
        "lat": 585,
        "lng": 562,
        "description": "Kios Sari Buah adalah toko buah segar menawarkan berbagai macam buah lokal dan impor dengan kualitas unggul, serta menyediakan layanan parcel buah yang dapat disesuaikan dengan kebutuhan pelanggan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/v5EHmtXtWzqpaxYlBIJEIVHdA2mx2TRc.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/v5EHmtXtWzqpaxYlBIJEIVHdA2mx2TRc_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/v5EHmtXtWzqpaxYlBIJEIVHdA2mx2TRc.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/pX8rIPiBtImBwAmWF4VfwaiT7hhEly07yNX2wNFK.jpg"
        ],
        "entries": [
          {
            "x": 574,
            "y": 438
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec7ec5-272e-47de-b295-2b37fe0500ad",
        "nodeId": "n_9eec7ec5-272e-47de-b295-2b37fe0500ad",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Sari Buah 1",
        "name": "Kios Sari Buah 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 210,
        "y": 453,
        "lat": 571,
        "lng": 210,
        "description": "Kios Sari Buah adalah toko buah segar menawarkan berbagai macam buah lokal dan impor dengan kualitas unggul, serta menyediakan layanan parcel buah yang dapat disesuaikan dengan kebutuhan pelanggan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/7QGRp3iUvmBeDLMl52EhWxgnB6xuy2D2.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7QGRp3iUvmBeDLMl52EhWxgnB6xuy2D2_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7QGRp3iUvmBeDLMl52EhWxgnB6xuy2D2.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/CFoSkzbynGBeB9lFRCzUW3W57EInQSwuKHprEfuG.jpg"
        ],
        "entries": [
          {
            "x": 216,
            "y": 466
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec154b-d1bc-467c-b96c-33156ea1b448",
        "nodeId": "n_9eec154b-d1bc-467c-b96c-33156ea1b448",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Phe-Te 2",
        "name": "Phe-Te 2",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 682,
        "y": 163,
        "lat": 861,
        "lng": 682,
        "description": "Phe-Te adalah kios penjual buah yang menerima layanan pembuatan hampers buah atau parcel buah di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/0PX2QFGZfwkQ9PLfy9G9faVLQaQUzBrd.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/0PX2QFGZfwkQ9PLfy9G9faVLQaQUzBrd_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/0PX2QFGZfwkQ9PLfy9G9faVLQaQUzBrd.jpg",
          "https://maps.pasargedesolo.com/storage/locations/RPdiJVJhpxOgIeOZzOxeJdHbaTq2D3cHe5cupYG0.jpg"
        ],
        "entries": [
          {
            "x": 661,
            "y": 169
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec78e9-ce63-4b04-8fd6-3da85b833c71",
        "nodeId": "n_9eec78e9-ce63-4b04-8fd6-3da85b833c71",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Buah Bu Parman 1",
        "name": "Kios Buah Bu Parman 1",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 230,
        "y": 524,
        "lat": 500,
        "lng": 230,
        "description": "Kios Buah Bu Parman adalah kios penjual buah grosir dan eceran yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/kz7FgcyqO4IoW1yCR9uAi14mPBDrK96Z.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/kz7FgcyqO4IoW1yCR9uAi14mPBDrK96Z_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/kz7FgcyqO4IoW1yCR9uAi14mPBDrK96Z.png",
          "https://maps.pasargedesolo.com/storage/locations/P5cywtoACRzRD0FZkPtNk9nSBzGvVH1YHQQJP4Od.jpg"
        ],
        "entries": [
          {
            "x": 235,
            "y": 537
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f0284fa-c5b9-46c2-9328-35629efcc80b",
        "nodeId": "n_9f0284fa-c5b9-46c2-9328-35629efcc80b",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Dien Buah 3",
        "name": "Kios Dien Buah 3",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 434,
        "y": 271,
        "lat": 753,
        "lng": 434,
        "description": "Dien Buah adalah kios yang menawarkan berbagai macam buah lokal dan impor dengan kualitas unggul, serta melayani pembelian buah secara langsung maupun dalam bentuk parcel untuk berbagai keperluan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/jeYdAX0hhf8FaM4eVm1duPe9dbaDUU9G.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/jeYdAX0hhf8FaM4eVm1duPe9dbaDUU9G_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/jeYdAX0hhf8FaM4eVm1duPe9dbaDUU9G.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/WuxOjvw3dKtLspNIbogOoKWQR4Yro2yNr8buqU22.jpg"
        ],
        "entries": [
          {
            "x": 434,
            "y": 291
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8e26-ec53-453f-a413-3aea21a9ba95",
        "nodeId": "n_9eec8e26-ec53-453f-a413-3aea21a9ba95",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mahkota Buah 10",
        "name": "Mahkota Buah 10",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 475,
        "y": 572,
        "lat": 452,
        "lng": 475,
        "description": "Mahkota Buah adalah kios penjual buah grosir lokal yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/7QV9YJQfyZMjdHRh6tItX4diid9Ct9St.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7QV9YJQfyZMjdHRh6tItX4diid9Ct9St_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7QV9YJQfyZMjdHRh6tItX4diid9Ct9St.png",
          "https://maps.pasargedesolo.com/storage/locations/EGblR4dGzn72wFXnzdSazF9uIJeOdziWI2HmlRtR.jpg"
        ],
        "entries": [
          {
            "x": 468,
            "y": 561
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f028861-5207-4748-98ca-2d2a9a7bdb89",
        "nodeId": "n_9f028861-5207-4748-98ca-2d2a9a7bdb89",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mbak Dinda",
        "name": "Mbak Dinda",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 470,
        "y": 506,
        "lat": 518,
        "lng": 470,
        "description": "Mbak Dinda adalah kios buah import dan lokal secara ecer maupun grosir yang menerima layanan pembuatan hampers buah atau parcel buah untuk jenguk orang sakit, hadiah, oleh-oleh, dan lain-lain",
        "image": "https://maps.pasargedesolo.com/storage/stores/AwL7NSrbeA3ykNeUXAz9xKD8fQLCOXcE.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/AwL7NSrbeA3ykNeUXAz9xKD8fQLCOXcE_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/AwL7NSrbeA3ykNeUXAz9xKD8fQLCOXcE.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/NX4cFtuYYvGOmQhZIyJalzdnYXLWJWRbRJlLUb6N.jpg"
        ],
        "entries": [
          {
            "x": 437,
            "y": 510
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9f028447-3ba9-4ccf-8b4b-05daa93f76b0",
        "nodeId": "n_9f028447-3ba9-4ccf-8b4b-05daa93f76b0",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mbak Karti",
        "name": "Mbak Karti",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 497,
        "y": 412,
        "lat": 612,
        "lng": 497,
        "description": "Mbak Karti adalah Kios Buah yang menerima layanan pembuatan hampers buah atau parcel buah dan berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/X8wKHoRwuBU22NzsbeH8mrzeQQHO4LZr.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/X8wKHoRwuBU22NzsbeH8mrzeQQHO4LZr_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/X8wKHoRwuBU22NzsbeH8mrzeQQHO4LZr.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/JnMH5GM7Fh8pcJPOyUTmYOvNgG9d0MRyAafKpWVs.jpg"
        ],
        "entries": [
          {
            "x": 498,
            "y": 390
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec94c8-a304-46c1-8ffe-06c5bb3408f1",
        "nodeId": "n_9eec94c8-a304-46c1-8ffe-06c5bb3408f1",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Min Pisang",
        "name": "Min Pisang",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 832,
        "y": 312,
        "lat": 712,
        "lng": 832,
        "description": "Min Pisang adalah kios penjual buah spesialisasi pisang yang berada di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/uohXBxKPWmq6Gx2u6a6Cozid11wAfpq8.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/uohXBxKPWmq6Gx2u6a6Cozid11wAfpq8_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/uohXBxKPWmq6Gx2u6a6Cozid11wAfpq8.jpg"
        ],
        "entries": [
          {
            "x": 817,
            "y": 328
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec810c-3e3c-4aa2-a703-19085935167d",
        "nodeId": "n_9eec810c-3e3c-4aa2-a703-19085935167d",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Mas Wandi 3",
        "name": "Mas Wandi 3",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 160,
        "y": 315,
        "lat": 709,
        "lng": 160,
        "description": "Mas Wandi adalah kios buah gosir yang berada di Pasar Gedhe Barat atau Pasar Buah Pasar Gedhe yang menjual buah musiman seperti jeruk dan mangga8j",
        "image": "https://maps.pasargedesolo.com/storage/stores/iwGZGe7JoOqomOm2pU7JaPsM2fJdqVjY.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/iwGZGe7JoOqomOm2pU7JaPsM2fJdqVjY_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/iwGZGe7JoOqomOm2pU7JaPsM2fJdqVjY.png",
          "https://maps.pasargedesolo.com/storage/locations/JkRd9hIzr4YC8bjLK4L3Q1N2I0VrZJ7CxpQ0Wv6h.jpg",
          "https://maps.pasargedesolo.com/storage/locations/eqMZAe3B0VkucgMYIVzh9j2NVD9rddGmzqcs33Q9.jpg"
        ],
        "entries": [
          {
            "x": 166,
            "y": 327
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec6e28-1824-434a-b4f9-78b9294d8850",
        "nodeId": "n_9eec6e28-1824-434a-b4f9-78b9294d8850",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Pur Sastro",
        "name": "Pur Sastro",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 234,
        "y": 164,
        "lat": 860,
        "lng": 234,
        "description": "Pur Sastro adalah kios buah grosir yang berada di Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe yang menjual buah musiman seperti jeruk dan jeruk bali",
        "image": "https://maps.pasargedesolo.com/storage/stores/gbD3drP3CrMGjuX7T64dUB1WYZ0s62Ri.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/gbD3drP3CrMGjuX7T64dUB1WYZ0s62Ri_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/gbD3drP3CrMGjuX7T64dUB1WYZ0s62Ri.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/2bHWfVaXVGGUyPPljumwZhehLnAaAGTakTrDQzVr.jpg"
        ],
        "entries": [
          {
            "x": 260,
            "y": 164
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec9019-b87e-46fd-93ea-3a7601c17c03",
        "nodeId": "n_9eec9019-b87e-46fd-93ea-3a7601c17c03",
        "buildingId": "pasar-buah",
        "floor": 1,
        "label": "Kios Sari Buah 3",
        "name": "Kios Sari Buah 3",
        "category": "buah",
        "categoryLabel": "Buah-buahan",
        "icon": "🍎",
        "color": "#FF6B35",
        "x": 660,
        "y": 359,
        "lat": 665,
        "lng": 660,
        "description": "Kios Sari Buah adalah toko buah segar menawarkan berbagai macam buah lokal dan impor dengan kualitas unggul, serta menyediakan layanan parcel buah yang dapat disesuaikan dengan kebutuhan pelanggan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/VtfvkSIX6VnCzqDc5cRKn7mKvLW4xDUp.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/VtfvkSIX6VnCzqDc5cRKn7mKvLW4xDUp_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/VtfvkSIX6VnCzqDc5cRKn7mKvLW4xDUp.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/DU7JvzTC015jmvW4nkeDv8X5OylhPLPD6I7sD7ql.jpg"
        ],
        "entries": [
          {
            "x": 655,
            "y": 346
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      }
    ],
    "pasar-buah-2": [
      {
        "id": "9eebfe34-9390-40d9-8427-aff64657b9fe",
        "nodeId": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Brawijaya Steak",
        "name": "Brawijaya Steak",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 318,
        "y": 554,
        "lat": 470,
        "lng": 318,
        "description": "Brawijaya Steak adalah kedai makanan spesialisasi steak yang berada di Lantai 2 Pasar Gedhe Barat atau Gedung Pasar Buah di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/x722wXQGmK0rHpQ28C0pe5Mae4hxIvrw.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/x722wXQGmK0rHpQ28C0pe5Mae4hxIvrw_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/x722wXQGmK0rHpQ28C0pe5Mae4hxIvrw.jpeg"
        ],
        "entries": [
          {
            "x": 340,
            "y": 551
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebf7ec-248c-4342-a220-188730c7ed83",
        "nodeId": "n_9eebf7ec-248c-4342-a220-188730c7ed83",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Mentai Mania",
        "name": "Mentai Mania",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 701,
        "y": 593,
        "lat": 431,
        "lng": 701,
        "description": "Mentai Mania adalah kedai modern di lantai 2 Gedung Barat Pasar Gedhe Solo yang menyajikan berbagai hidangan bergaya Jepang dan Korea, seperti salmon mentai don, tuna mentai rice, dan mozzarella corndog.",
        "image": "https://maps.pasargedesolo.com/storage/stores/cU1lZMe3vyi7QCdfrNkbiWi1K8C5MnHt.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/cU1lZMe3vyi7QCdfrNkbiWi1K8C5MnHt_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/cU1lZMe3vyi7QCdfrNkbiWi1K8C5MnHt.jpg"
        ],
        "entries": [
          {
            "x": 698,
            "y": 606
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebf94b-8244-4019-a32e-606e4ee6ce7c",
        "nodeId": "n_9eebf94b-8244-4019-a32e-606e4ee6ce7c",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Uma Yumcha",
        "name": "Uma Yumcha",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 765,
        "y": 145,
        "lat": 879,
        "lng": 765,
        "description": "Uma Yumcha adalah kedai dimsum di Pasar Gedhe Solo yang terkenal dengan dimsum jumbo berisi ayam asli dan harga terjangkau.",
        "image": "https://maps.pasargedesolo.com/storage/stores/PoxE8JodQyMlsUYnNQ9MpygcqhgsyoVV.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/PoxE8JodQyMlsUYnNQ9MpygcqhgsyoVV_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/PoxE8JodQyMlsUYnNQ9MpygcqhgsyoVV.png"
        ],
        "entries": [
          {
            "x": 773,
            "y": 135
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebfd8b-29bb-4086-a31a-a601f34f78b0",
        "nodeId": "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Kedailicious",
        "name": "Kedailicious",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 250,
        "y": 273,
        "lat": 751,
        "lng": 250,
        "description": "Kedailicious adalah kedai makanan spesial gongso san penyet yang berada di Lantai 2 Pasar Gedhe Barat atau Gedung Pasar Buah di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/WBLXIk8TxgPv7TJKQS3c482tRbQiYny7.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/WBLXIk8TxgPv7TJKQS3c482tRbQiYny7_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/WBLXIk8TxgPv7TJKQS3c482tRbQiYny7.jpeg"
        ],
        "entries": [
          {
            "x": 274,
            "y": 261
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebfc56-12ec-482f-994b-bfea7ae2d314",
        "nodeId": "n_9eebfc56-12ec-482f-994b-bfea7ae2d314",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Ayam Geprek Kulit Crispy LESTARI",
        "name": "Ayam Geprek Kulit Crispy LESTARI",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 219,
        "y": 286,
        "lat": 738,
        "lng": 219,
        "description": "Ayam Geprek Kulit Crispy LESTARI adalah warung makanan spesialisasi ayam geprek yang berada di Lantai 2 Pasar Gedhe Barat atau Gedung Pasar Buah di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/UCqSGyPHoYyZxpxSdt1iJ0IS2l1Pt3hm.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/UCqSGyPHoYyZxpxSdt1iJ0IS2l1Pt3hm_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/UCqSGyPHoYyZxpxSdt1iJ0IS2l1Pt3hm.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/2sxPzVLRdGNWTgRKBwYjjSeZXcxbuR9I8QY1C4J7.jpg"
        ],
        "entries": [
          {
            "x": 202,
            "y": 297
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebfca5-d79a-463f-8797-8104c200b844",
        "nodeId": "n_9eebfca5-d79a-463f-8797-8104c200b844",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Kedai Kopi Pak Agus",
        "name": "Kedai Kopi Pak Agus",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 250,
        "y": 426,
        "lat": 598,
        "lng": 250,
        "description": "Kedai Kopi Pak Agus di Pasar Gedhe Solo adalah tempat ngopi yang menawarkan suasana klasik di lantai dua sisi barat pasar . Dikenal dengan menu andalannya seperti cappuccino, kopi susu gula aren, dan caramel macchiato,",
        "image": "https://maps.pasargedesolo.com/storage/stores/wE6qJUAz08ImViWeGszs1hhTxUAYdWjf.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/wE6qJUAz08ImViWeGszs1hhTxUAYdWjf_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/wE6qJUAz08ImViWeGszs1hhTxUAYdWjf.jpeg"
        ],
        "entries": [
          {
            "x": 233,
            "y": 435
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebfc01-ec1a-41fe-9411-c0bae168de9b",
        "nodeId": "n_9eebfc01-ec1a-41fe-9411-c0bae168de9b",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "WM Suprenasi",
        "name": "WM Suprenasi",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 231,
        "y": 179,
        "lat": 845,
        "lng": 231,
        "description": "WM Supernasi adalah tempat makan baru di lantai 2 Pasar Gedhe Solo yang menawarkan menu nasi ayam komplit dengan harga terjangkau, sekitar Rp20.000 sudah termasuk es teh. Dengan porsi yang mengenyangkan dan rasa yang lezat, WM Supernasi menjadi pilihan favorit bagi pengunjung pasar yang mencari makan siang praktis dan nikmat",
        "image": "https://maps.pasargedesolo.com/storage/stores/THMaHlzZlkioO2Qa2adNnklgGVVPrf2Q.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/THMaHlzZlkioO2Qa2adNnklgGVVPrf2Q_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/THMaHlzZlkioO2Qa2adNnklgGVVPrf2Q.jpeg"
        ],
        "entries": [
          {
            "x": 223,
            "y": 171
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebf67e-eb5a-4194-bbfc-996c7c051849",
        "nodeId": "n_9eebf67e-eb5a-4194-bbfc-996c7c051849",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Cuma Jus",
        "name": "Cuma Jus",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 710,
        "y": 939,
        "lat": 85,
        "lng": 710,
        "description": "Cuma Jus adalah kedai minuman segar yang berlokasi di lantai 2 Gedung Barat Pasar Gedhe Solo, menawarkan berbagai jus buah segar dengan konsep modern dan harga terjangkau. Dengan slogan \"100% Fresh Juice\"",
        "image": "https://maps.pasargedesolo.com/storage/stores/xIt3yIRc4yrBXjqMeGi5eC733iU2ypFk.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/xIt3yIRc4yrBXjqMeGi5eC733iU2ypFk_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/xIt3yIRc4yrBXjqMeGi5eC733iU2ypFk.jpg"
        ],
        "entries": [
          {
            "x": 689,
            "y": 943
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebf836-45f6-4343-8213-d4a75c62476b",
        "nodeId": "n_9eebf836-45f6-4343-8213-d4a75c62476b",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Big Size Juice",
        "name": "Big Size Juice",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 729,
        "y": 599,
        "lat": 425,
        "lng": 729,
        "description": "Big Size Juice adalah kedai minuman segar yang terletak di lantai 2 Pasar Gedhe Solo, menawarkan berbagai jus buah murni dalam porsi jumbo yang mengenyangkan. Dengan konsep \"jus sehat dan mengenyangkan,\" mereka menyajikan jus tanpa tambahan gula, air, atau es, memastikan rasa alami dari buah-buahan segar . Beberapa varian populer meliputi Pure Orange (jeruk murni), Immune Booster, dan Manggo Juice, dengan ukuran 600 ml yang cocok untuk dinikmati saat berkeliling pasar",
        "image": "https://maps.pasargedesolo.com/storage/stores/kQjuVHnGieldSEWPvnGo2MDbl19o59qg.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/kQjuVHnGieldSEWPvnGo2MDbl19o59qg_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/kQjuVHnGieldSEWPvnGo2MDbl19o59qg.jpg"
        ],
        "entries": [
          {
            "x": 726,
            "y": 613
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebff95-4008-474e-b4fd-0f5c8aeadd7b",
        "nodeId": "n_9eebff95-4008-474e-b4fd-0f5c8aeadd7b",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Nasi Liwet Bu Sri",
        "name": "Nasi Liwet Bu Sri",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 531,
        "y": 164,
        "lat": 860,
        "lng": 531,
        "description": "Nasi Liwet Bu Sri Pasar Gedhe adalah kuliner legendaris Solo berada di Pasar Gedhe Barat yang menyajikan nasi gurih dengan ayam suwir, sayur labu, telur, areh, dan sambal, terkenal karena cita rasanya yang autentik dan harganya yang terjangkau.",
        "image": "https://maps.pasargedesolo.com/storage/stores/kbD3l4jvCzgm1d7UCDLTJTlR5pXL2KIq.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/kbD3l4jvCzgm1d7UCDLTJTlR5pXL2KIq_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/kbD3l4jvCzgm1d7UCDLTJTlR5pXL2KIq.jpeg"
        ],
        "entries": [
          {
            "x": 529,
            "y": 193
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": true
      },
      {
        "id": "9eebffe6-fa71-4d78-a5b7-69c9b4342d57",
        "nodeId": "n_9eebffe6-fa71-4d78-a5b7-69c9b4342d57",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Kedai Mini 2",
        "name": "Kedai Mini 2",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 450,
        "y": 162,
        "lat": 862,
        "lng": 450,
        "description": "Kedai Mini 2 adalah kedai makanan non-halal spesialisasi babi yang berada di Lantai 2 Pasar Gedhe Barat atau Gedung Pasar Buah di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/jlWklvfGR3FAcxAQtFrxgkypogk0GLke.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/jlWklvfGR3FAcxAQtFrxgkypogk0GLke_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/jlWklvfGR3FAcxAQtFrxgkypogk0GLke.jpg",
          "https://maps.pasargedesolo.com/storage/locations/bMUL6mz6UROP6o2NHVzvPxt31WwdF4H8EI3uHfej.jpg"
        ],
        "entries": [
          {
            "x": 448,
            "y": 192
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec00ae-4173-4717-9399-bd7eb174f0e6",
        "nodeId": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Teh Tarik 3 Raja",
        "name": "Teh Tarik 3 Raja",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 293,
        "y": 163,
        "lat": 861,
        "lng": 293,
        "description": "Teh Tarik 3 Raja adalah kedai minuman spesialisasi teh tarik yang berada di Lantai 2 Pasar Gedhe Barat atau Gedung Pasar Buah di Pasar Gedhe yang tempatnya jadi satu dengan Dee Pastelin.",
        "image": "https://maps.pasargedesolo.com/storage/stores/3jVxasZlYTJcC24gOiRvcVbC2DVYsL78.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/3jVxasZlYTJcC24gOiRvcVbC2DVYsL78_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/3jVxasZlYTJcC24gOiRvcVbC2DVYsL78.jpeg"
        ],
        "entries": [
          {
            "x": 295,
            "y": 187
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec0bd3-c8dc-4026-a5bb-8467e4e820a1",
        "nodeId": "n_9eec0bd3-c8dc-4026-a5bb-8467e4e820a1",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Tangga Naik Turun Pasar Buah 3",
        "name": "Tangga Naik Turun Pasar Buah 3",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 805,
        "y": 238,
        "lat": 786,
        "lng": 805,
        "description": "Kios Tangga Naik Turun Pasar Buah 3 di Pasar Buah Lantai 2",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 805,
            "y": 238
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
        "nodeId": "n_9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Tangga Naik Turun Pasar Buah 1",
        "name": "Tangga Naik Turun Pasar Buah 1",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 470,
        "y": 624,
        "lat": 400,
        "lng": 470,
        "description": "Kios Tangga Naik Turun Pasar Buah 1 di Pasar Buah Lantai 2",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 470,
            "y": 624
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9eec190a-b777-4fb1-bb47-6ff30a39b519",
        "nodeId": "n_9eec190a-b777-4fb1-bb47-6ff30a39b519",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Warung Makan Seafood Sido Laras",
        "name": "Warung Makan Seafood Sido Laras",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 679,
        "y": 586,
        "lat": 438,
        "lng": 679,
        "description": "Warung Makan Seafood Sido Laras merupakan salah satu warung makan yang ada di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/CZQVcU1wP3BteP4r9DBU8ZalEWWLd17S.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/CZQVcU1wP3BteP4r9DBU8ZalEWWLd17S_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/CZQVcU1wP3BteP4r9DBU8ZalEWWLd17S.jpg"
        ],
        "entries": [
          {
            "x": 675,
            "y": 601
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec0b8a-15f9-4358-85c5-46133cf330b5",
        "nodeId": "n_9eec0b8a-15f9-4358-85c5-46133cf330b5",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Tangga Naik Turun Pasar Buah 2",
        "name": "Tangga Naik Turun Pasar Buah 2",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 459,
        "y": 831,
        "lat": 193,
        "lng": 459,
        "description": "Kios Tangga Naik Turun Pasar Buah 2 di Pasar Buah Lantai 2",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 459,
            "y": 831
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9eec0c15-0184-41b5-9bba-f0581b28174c",
        "nodeId": "n_9eec0c15-0184-41b5-9bba-f0581b28174c",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Tangga Naik Turun Pasar Buah 4",
        "name": "Tangga Naik Turun Pasar Buah 4",
        "category": "tangga",
        "categoryLabel": "Tangga",
        "icon": "🪜",
        "color": "#9E9E9E",
        "x": 179,
        "y": 159,
        "lat": 865,
        "lng": 179,
        "description": "Kios Tangga Naik Turun Pasar Buah 4 di Pasar Buah Lantai 2",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 179,
            "y": 159
          }
        ],
        "accessible": false,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9eebff2d-d940-4772-9b0f-6a683701cd02",
        "nodeId": "n_9eebff2d-d940-4772-9b0f-6a683701cd02",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Tama Kitchen",
        "name": "Tama Kitchen",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 306,
        "y": 668,
        "lat": 356,
        "lng": 306,
        "description": "Tama Kitchen adalah kedai makanan yang berada di Lantai 2 Pasar Gedhe Barat atau Gedung Pasar Buah di Pasar Gedhe.",
        "image": "https://maps.pasargedesolo.com/storage/stores/ID4mL5tSeAhKBVyr973E6kBnleCU82fR.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/ID4mL5tSeAhKBVyr973E6kBnleCU82fR_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/ID4mL5tSeAhKBVyr973E6kBnleCU82fR.png",
          "https://maps.pasargedesolo.com/storage/locations/FTCyN9bEbBsmFp6QmHXAhiehQnZdM3zn1YQdph3F.jpg"
        ],
        "entries": [
          {
            "x": 289,
            "y": 677
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec19e0-123d-4978-a3f4-4a10f1252c15",
        "nodeId": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Dee Pastelin",
        "name": "Dee Pastelin",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 307,
        "y": 163,
        "lat": 861,
        "lng": 307,
        "description": "Dee Pastelin adalah kedai makanan oleh-oleh spesial Solo yaitu home made pastel premium yang berada di Lantai 2 Pasar Gedhe Barat atau Gedung Pasar Buah di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/I9IDLJ5driqqLQVoYAfx1S9WiGk4GeUJ.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/I9IDLJ5driqqLQVoYAfx1S9WiGk4GeUJ_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/I9IDLJ5driqqLQVoYAfx1S9WiGk4GeUJ.jpeg"
        ],
        "entries": [
          {
            "x": 312,
            "y": 191
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "a1018e0d-acb7-474f-8e2d-9ef389f237bb",
        "nodeId": "n_a1018e0d-acb7-474f-8e2d-9ef389f237bb",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Atedoz",
        "name": "Atedoz",
        "category": "entertainment",
        "categoryLabel": "Hiburan",
        "icon": "☕",
        "color": "#9C27B0",
        "x": 308,
        "y": 116,
        "lat": 908,
        "lng": 308,
        "description": "Atedoz adalah photobox estetik yang menghadirkan tiga pilihan konsep foto dalam satu tempat, mulai dari Spotlight, Vintage, dan Red Theme. Mulai dari Rp 35.000, pengunjung sudah mendapatkan softfile gratis dan bebas mengekspresikan berbagai mood foto bersama.",
        "image": "https://maps.pasargedesolo.com/storage/stores/mtSNxOxMGjbTPcaB7fUON51g3fHSG84v.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/mtSNxOxMGjbTPcaB7fUON51g3fHSG84v_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/mtSNxOxMGjbTPcaB7fUON51g3fHSG84v.png",
          "https://maps.pasargedesolo.com/storage/locations/MM94pNiweKEjrPlAG3nv0fN0SROjg9QxS9O3jZ4G.png"
        ],
        "entries": [
          {
            "x": 306,
            "y": 93
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "a1018efd-0d08-4fcb-89b0-c4c0560fe3a5",
        "nodeId": "n_a1018efd-0d08-4fcb-89b0-c4c0560fe3a5",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Soto Gobyos Ais",
        "name": "Soto Gobyos Ais",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 285,
        "y": 418,
        "lat": 606,
        "lng": 285,
        "description": "Soto Gobyos Ais merupakan tenant kuliner spesialis soto yang mengutamakan kualitas bahan dan racikan rempah pilihan. Dengan perpaduan rasa yang autentik dan konsisten, Soto Gobyos Ais menghadirkan pengalaman kuliner yang hangat, lezat, dan berkarakter di setiap sajiannya.",
        "image": "https://maps.pasargedesolo.com/storage/stores/QI1m3qyC7L2tgvgXYkCizc6z81d2AJMw.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/QI1m3qyC7L2tgvgXYkCizc6z81d2AJMw_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/QI1m3qyC7L2tgvgXYkCizc6z81d2AJMw.png"
        ],
        "entries": [
          {
            "x": 309,
            "y": 409
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec196a-6c0b-4204-8225-52d3308a3858",
        "nodeId": "n_9eec196a-6c0b-4204-8225-52d3308a3858",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Selat Steak PXD",
        "name": "Selat Steak PXD",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 680,
        "y": 633,
        "lat": 391,
        "lng": 680,
        "description": "Selat Steak PXD merupakan salah satu tempat makan spesial selat steak yang ada di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/F9ZcCqwAgATDV8OPjyY6qTMyxprJ2Xnw.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/F9ZcCqwAgATDV8OPjyY6qTMyxprJ2Xnw_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/F9ZcCqwAgATDV8OPjyY6qTMyxprJ2Xnw.jpg"
        ],
        "entries": [
          {
            "x": 682,
            "y": 627
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8a0a-fc34-41da-9271-270faef1d505",
        "nodeId": "n_9eec8a0a-fc34-41da-9271-270faef1d505",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "The French Press",
        "name": "The French Press",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 777,
        "y": 376,
        "lat": 648,
        "lng": 777,
        "description": "The French Press (TFP) adalah warung kopi unik di lantai 2 Pasar Gedhe Solo yang menyajikan hidangan ala Barat seperti buttermilk fried chicken, mac & cheese, dan Mexican beef casserole dalam suasana pasar tradisional. Dengan konsep \"Menu of the Day\", TFP menawarkan variasi menu harian yang membuat pengunjung selalu memiliki alasan untuk kembali.",
        "image": "https://maps.pasargedesolo.com/storage/stores/JKf7MGkTYVF6Nf7tng7F6fL1R0rPUZoH.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/JKf7MGkTYVF6Nf7tng7F6fL1R0rPUZoH_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/JKf7MGkTYVF6Nf7tng7F6fL1R0rPUZoH.jpg"
        ],
        "entries": [
          {
            "x": 794,
            "y": 382
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec8a91-c6e3-4aec-a28b-1bac434d66e7",
        "nodeId": "n_9eec8a91-c6e3-4aec-a28b-1bac434d66e7",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Kopi Labuhan Hati",
        "name": "Kopi Labuhan Hati",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 682,
        "y": 113,
        "lat": 911,
        "lng": 682,
        "description": "Kopi Labuan Hati adalah kedai kopi modern yang terletak di lantai 2 Pasar Gedhe Solo, menawarkan berbagai minuman kopi, non-kopi, serta menu makanan seperti rice bowl dan camilan ringan. Dengan pilihan menu seperti Es Kopi Suren, Kopsu Mangga, Soda Gembira Spesial, dan Cumi Jlitheng, tempat ini menjadi favorit bagi pengunjung pasar yang mencari suasana santai dengan harga terjangkau.",
        "image": "https://maps.pasargedesolo.com/storage/stores/eOaZ4hBYTgaa2nvVAeJO8xF94oClp64U.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/eOaZ4hBYTgaa2nvVAeJO8xF94oClp64U_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/eOaZ4hBYTgaa2nvVAeJO8xF94oClp64U.jpg"
        ],
        "entries": [
          {
            "x": 681,
            "y": 91
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec89c4-edac-4e3b-a427-a53b4f62c2cf",
        "nodeId": "n_9eec89c4-edac-4e3b-a427-a53b4f62c2cf",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Lembah manah",
        "name": "Lembah manah",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 539,
        "y": 641,
        "lat": 383,
        "lng": 539,
        "description": "Lembah manah adalah kedai makanan spesialisasi geprek dan penyetan yang berada di Lantai 2 Pasar Gedhe Barat  atau Gedung Pasar Buah di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/niw3g0qKeVT0VP9HaSx8ZmQ75hyQe7sf.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/niw3g0qKeVT0VP9HaSx8ZmQ75hyQe7sf_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/niw3g0qKeVT0VP9HaSx8ZmQ75hyQe7sf.jpeg"
        ],
        "entries": [
          {
            "x": 540,
            "y": 625
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef1f725-ee73-4b91-9baa-4c1149cbde00",
        "nodeId": "n_9ef1f725-ee73-4b91-9baa-4c1149cbde00",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Minoom Ahh",
        "name": "Minoom Ahh",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 704,
        "y": 178,
        "lat": 846,
        "lng": 704,
        "description": "Minoom Ahh adalah kedai minuman kekinian yang terletak di lantai 2 Pasar Gedhe Solo, Blok B12, tepat di belakang Dimsum Uma Yumcha. Kedai ini menawarkan berbagai pilihan minuman segar seperti milk tea, yakult jelly, brown sugar boba, dan kopi, dengan harga terjangkau",
        "image": "https://maps.pasargedesolo.com/storage/stores/7WnaN8qs5EWZ6k7Yz7yl3psjTmAiuKXs.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/7WnaN8qs5EWZ6k7Yz7yl3psjTmAiuKXs_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/7WnaN8qs5EWZ6k7Yz7yl3psjTmAiuKXs.jpg"
        ],
        "entries": [
          {
            "x": 704,
            "y": 165
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef1f57c-69fb-411d-9f4a-36c12b4dd723",
        "nodeId": "n_9ef1f57c-69fb-411d-9f4a-36c12b4dd723",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Mie Pinangsia",
        "name": "Mie Pinangsia",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 238,
        "y": 125,
        "lat": 899,
        "lng": 238,
        "description": "Mie Pinangsia Pasar Gedhe adalah warung bakmi legendaris yang terletak di lantai 2 Pasar Gedhe Solo, terkenal dengan sajian mie tipis kenyal dan pangsit rebus yang gurih. Menu andalannya meliputi mie kuah, mie pangsit, dan kwetiau dengan topping daging cincang, bakso, serta pangsit isi babi, menjadikannya favorit bagi pecinta kuliner non-halal.",
        "image": "https://maps.pasargedesolo.com/storage/stores/eTvpmgim9Q7IaRTI3rp6JOhIEWChuWoP.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/eTvpmgim9Q7IaRTI3rp6JOhIEWChuWoP_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/eTvpmgim9Q7IaRTI3rp6JOhIEWChuWoP.jpg"
        ],
        "entries": [
          {
            "x": 222,
            "y": 126
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef1f6c5-d0fd-40a5-acf3-0c9cce8f81d8",
        "nodeId": "n_9ef1f6c5-d0fd-40a5-acf3-0c9cce8f81d8",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Warung Makan Bu Marti",
        "name": "Warung Makan Bu Marti",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 749,
        "y": 185,
        "lat": 839,
        "lng": 749,
        "description": "Warung Makan Bu Marti adalah warteg yang menjual berbagai masakan Khas Jawa dengan harga terjangkau",
        "image": "https://maps.pasargedesolo.com/storage/stores/3raywnew4rDjiN3CjVCfzuKegyKMkmSv.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/3raywnew4rDjiN3CjVCfzuKegyKMkmSv_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/3raywnew4rDjiN3CjVCfzuKegyKMkmSv.jpg"
        ],
        "entries": [
          {
            "x": 755,
            "y": 173
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef1f800-6c29-497a-8697-0bd1532fdd3d",
        "nodeId": "n_9ef1f800-6c29-497a-8697-0bd1532fdd3d",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Rujak Mood",
        "name": "Rujak Mood",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 720,
        "y": 644,
        "lat": 380,
        "lng": 720,
        "description": "Rujak Mood adalah kedai kuliner di lantai 2 Pasar Gedhe Solo yang menyajikan berbagai hidangan segar dan unik, seperti somtam (salad pepaya ala Thailand), asinan, rujak Bangkok, dan minuman seperti Thai tea.",
        "image": "https://maps.pasargedesolo.com/storage/stores/eHRLmxjMNXSE7yEfVGcgPeICEM9NfRUY.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/eHRLmxjMNXSE7yEfVGcgPeICEM9NfRUY_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/eHRLmxjMNXSE7yEfVGcgPeICEM9NfRUY.jpg",
          "https://maps.pasargedesolo.com/storage/locations/vgvmWlPggaRVLNEzkelLSuLmP1AM9pDloBvSX7iw.jpg",
          "https://maps.pasargedesolo.com/storage/locations/9RXGqAZMislEw1PBYVPTzN7wpuq2fAy4eM51XHWX.jpg"
        ],
        "entries": [
          {
            "x": 723,
            "y": 635
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef20721-91df-4a4a-9019-c8322f75f9c9",
        "nodeId": "n_9ef20721-91df-4a4a-9019-c8322f75f9c9",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Gongso 92",
        "name": "Gongso 92",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 315,
        "y": 641,
        "lat": 383,
        "lng": 315,
        "description": "Gongso 92 adalah kedai makanan spesialisasi gongso yang berada di lantai 2 Pasar Gedhe Barat atau Pasar Buah di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/FBk8gYkIMq0SbtDMdDNS8yW1MOua1aMS.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/FBk8gYkIMq0SbtDMdDNS8yW1MOua1aMS_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/FBk8gYkIMq0SbtDMdDNS8yW1MOua1aMS.jpeg"
        ],
        "entries": [
          {
            "x": 310,
            "y": 630
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef20a06-9d6f-487e-8f20-f4834fbf8d4c",
        "nodeId": "n_9ef20a06-9d6f-487e-8f20-f4834fbf8d4c",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Meurdue Chocolate & Coffee",
        "name": "Meurdue Chocolate & Coffee",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 404,
        "y": 118,
        "lat": 906,
        "lng": 404,
        "description": "Meurdue Chocolate & Coffee adalah kafe modern yang terletak di ujung Pasar Gedhe Barat Solo. Kafe ini menyajikan berbagai minuman cokelat dan kopi, serta aneka makanan ringan dalam suasana yang nyaman dan estetik.",
        "image": "https://maps.pasargedesolo.com/storage/stores/9bal7Tljg4rY63UzVu6GqxDaWXLG6Y8Y.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/9bal7Tljg4rY63UzVu6GqxDaWXLG6Y8Y_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/9bal7Tljg4rY63UzVu6GqxDaWXLG6Y8Y.jpg",
          "https://maps.pasargedesolo.com/storage/locations/7cA9T9GAnapAxXhbIa5F22Vyv7P7GUnR9z2rthDS.jpg"
        ],
        "entries": [
          {
            "x": 403,
            "y": 93
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef24fb8-a00e-4405-aa12-a42c322083e2",
        "nodeId": "n_9ef24fb8-a00e-4405-aa12-a42c322083e2",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Toilet lt. 2",
        "name": "Toilet lt. 2",
        "category": "toilet",
        "categoryLabel": "Toilet & Fasilitas",
        "icon": "🚻",
        "color": "#009688",
        "x": 671,
        "y": 802,
        "lat": 222,
        "lng": 671,
        "description": "Fasilitas toilet yang berada di Pasar Gedhe",
        "image": null,
        "imageThumb": null,
        "images": [],
        "entries": [
          {
            "x": 675,
            "y": 806
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": true,
        "isLegendary": false
      },
      {
        "id": "9ef20284-a758-4a52-8ffa-760e2ea92da3",
        "nodeId": "n_9ef20284-a758-4a52-8ffa-760e2ea92da3",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Lele Melet dan Nasi Bakar Le JM",
        "name": "Lele Melet dan Nasi Bakar Le JM",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 351,
        "y": 632,
        "lat": 392,
        "lng": 351,
        "description": "Lele Melet dan Nasi Bakar Le JM adalah warung makan di lantai 2 Pasar Gedhe Solo yang terkenal dengan sajian lele goreng pedas dan sambal khas. Menu andalannya mencakup lele melet, kulit crispy, dan sambal bawang, yang disajikan bersama nasi dan minuman seperti es lemon tea",
        "image": "https://maps.pasargedesolo.com/storage/stores/LoBtJtxKl6EIwX8AbPfUmD7pfwmxyocP.png",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/LoBtJtxKl6EIwX8AbPfUmD7pfwmxyocP_xs.png",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/LoBtJtxKl6EIwX8AbPfUmD7pfwmxyocP.png"
        ],
        "entries": [
          {
            "x": 347,
            "y": 624
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebf885-f1b5-474d-a43b-4c44df2578ad",
        "nodeId": "n_9eebf885-f1b5-474d-a43b-4c44df2578ad",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Dimsum Jhian Cook",
        "name": "Dimsum Jhian Cook",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 737,
        "y": 561,
        "lat": 463,
        "lng": 737,
        "description": "Dimsum Jhian Cook adalah kedai dimsum halal yang terletak di lantai 2 sisi selatan Pasar Gedhe Solo, dekat dengan Cendono Wanggi. Kedai ini menawarkan berbagai pilihan dimsum yang lezat dan terjangkau, menjadikannya favorit di kalangan pengunjung pasar.",
        "image": "https://maps.pasargedesolo.com/storage/stores/YoYOzIBqgSY8l9vlLSX7BkD5Pe9zGVvG.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/YoYOzIBqgSY8l9vlLSX7BkD5Pe9zGVvG_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/YoYOzIBqgSY8l9vlLSX7BkD5Pe9zGVvG.jpg"
        ],
        "entries": [
          {
            "x": 753,
            "y": 571
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef1f535-7132-41fd-a82b-64fc48bc0701",
        "nodeId": "n_9ef1f535-7132-41fd-a82b-64fc48bc0701",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Geprek Lovers by Tama Kitchen",
        "name": "Geprek Lovers by Tama Kitchen",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 310,
        "y": 663,
        "lat": 361,
        "lng": 310,
        "description": "Geprek Lovers by Tama Kitchen kedai makanan spesialisasi olahan ayam geprek yang berada di Lantai 2 Pasar Gedhe Barat atau Gedung Pasar Buah di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/M4pXtjaBl63lvke2iC6hHGescvDn9V3L.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/M4pXtjaBl63lvke2iC6hHGescvDn9V3L_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/M4pXtjaBl63lvke2iC6hHGescvDn9V3L.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/sC7BWAoTreswMJuGx6ishl84EvFdKK1o43wvxCXO.jpg"
        ],
        "entries": [
          {
            "x": 288,
            "y": 667
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebfdd5-a761-47be-b239-6fdf72f3bc7f",
        "nodeId": "n_9eebfdd5-a761-47be-b239-6fdf72f3bc7f",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Box 2 Box",
        "name": "Box 2 Box",
        "category": "entertainment",
        "categoryLabel": "Hiburan",
        "icon": "☕",
        "color": "#9C27B0",
        "x": 293,
        "y": 465,
        "lat": 559,
        "lng": 293,
        "description": "Box2Box Photo Box adalah layanan photobooth kreatif yang hadir di berbagai lokasi strategis di Solo, seperti di Pasar Gedhe. Mereka menawarkan pengalaman berfoto dengan konsep unik dan estetik, termasuk photobox bertema retro, kereta api, dan bahkan bus . Dengan harga terjangkau, mulai dari Rp10.000, Box2Box menjadi pilihan populer bagi warga Solo dan wisatawan untuk mengabadikan momen spesial",
        "image": "https://maps.pasargedesolo.com/storage/stores/Gi6PeWBBjn4wUBrL1zVcUwDorrR0ZupY.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Gi6PeWBBjn4wUBrL1zVcUwDorrR0ZupY_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Gi6PeWBBjn4wUBrL1zVcUwDorrR0ZupY.jpeg",
          "https://maps.pasargedesolo.com/storage/locations/hdtujsbNuptO0IXIyUwVhcOUROg1WTWVhDCY0BkC.jpg"
        ],
        "entries": [
          {
            "x": 296,
            "y": 480
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec0166-4d0a-4009-a5ca-facf64aeace2",
        "nodeId": "n_9eec0166-4d0a-4009-a5ca-facf64aeace2",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Warung Makan Bu Tapruk",
        "name": "Warung Makan Bu Tapruk",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 243,
        "y": 199,
        "lat": 825,
        "lng": 243,
        "description": "Warung Makan Bu Tapruk adalah warung legendaris di Pasar Gedhe Solo yang terkenal dengan nasi tumpang khas Jawa, sajian nasi dengan sambal tempe bosok dan sayur daun singkong, yang tetap digemari karena rasa autentik dan harga terjangkau.",
        "image": "https://maps.pasargedesolo.com/storage/stores/38O8fR3JFUbHoN7XIh44wgM7vJb0WTJg.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/38O8fR3JFUbHoN7XIh44wgM7vJb0WTJg_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/38O8fR3JFUbHoN7XIh44wgM7vJb0WTJg.jpeg"
        ],
        "entries": [
          {
            "x": 253,
            "y": 201
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec0058-6839-4405-9735-d22dbcadc6d1",
        "nodeId": "n_9eec0058-6839-4405-9735-d22dbcadc6d1",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Kedai Nyah T3ll On",
        "name": "Kedai Nyah T3ll On",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 372,
        "y": 162,
        "lat": 862,
        "lng": 372,
        "description": "Kedai Nyah T3ll On adalah kedai makanan yang berada di Lantai 2 Pasar Gedhe Barat atau Gedung Pasar Buah di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/Mdfp9Aeban3N790hr2ZWeGN6jEoBv96q.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Mdfp9Aeban3N790hr2ZWeGN6jEoBv96q_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Mdfp9Aeban3N790hr2ZWeGN6jEoBv96q.jpeg"
        ],
        "entries": [
          {
            "x": 369,
            "y": 194
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
        "nodeId": "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Pentol Monster",
        "name": "Pentol Monster",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 712,
        "y": 692,
        "lat": 332,
        "lng": 712,
        "description": "Pentol Monter adalah tenant yang menjual pentol dengan tekstur kenyal, rasa gurih, dan pilihan bumbu pedas yang menggugah selera. Cocok untuk pencinta camilan ekstrem dengan porsi mengenyangkan.",
        "image": "https://maps.pasargedesolo.com/storage/stores/sA1G7dCyaxkFkD6ic5M0w7HPyaBQQrfe.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/sA1G7dCyaxkFkD6ic5M0w7HPyaBQQrfe_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/sA1G7dCyaxkFkD6ic5M0w7HPyaBQQrfe.jpg"
        ],
        "entries": [
          {
            "x": 727,
            "y": 701
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef1f5f0-5a61-49c5-a77f-4b10d84b8129",
        "nodeId": "n_9ef1f5f0-5a61-49c5-a77f-4b10d84b8129",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Kedai Mini 2 ",
        "name": "Kedai Mini 2 ",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 563,
        "y": 115,
        "lat": 909,
        "lng": 563,
        "description": "Kedai Mini 2 adalah kedai makanan non-halal spesialisasi babi yang berada di Lantai 2 Pasar Gedhe Barat atau Gedung Pasar Buah di Pasar Gedhe",
        "image": "https://maps.pasargedesolo.com/storage/stores/jlWklvfGR3FAcxAQtFrxgkypogk0GLke.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/jlWklvfGR3FAcxAQtFrxgkypogk0GLke_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/jlWklvfGR3FAcxAQtFrxgkypogk0GLke.jpg",
          "https://maps.pasargedesolo.com/storage/locations/yIe3o1CDhh3dfnxXUKZknb1liMuvlVt4j7ZT8k4N.jpg"
        ],
        "entries": [
          {
            "x": 565,
            "y": 91
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9ef1fda9-a454-450f-99d5-93117e703bac",
        "nodeId": "n_9ef1fda9-a454-450f-99d5-93117e703bac",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Pastel Goreng Solo by Cinrol",
        "name": "Pastel Goreng Solo by Cinrol",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 291,
        "y": 607,
        "lat": 417,
        "lng": 291,
        "description": "Pastel Goreng Solo by Cinrol adalah kedai makanan spesialisasi menjual pastel goreng khas solo dan jajanan pasar yang menerima pemesanan untuk acara-acara spesial anda",
        "image": "https://maps.pasargedesolo.com/storage/stores/Pc5rpR4JCvue0O1GwaR63CdaeGmSMONQ.jpeg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Pc5rpR4JCvue0O1GwaR63CdaeGmSMONQ_xs.jpeg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Pc5rpR4JCvue0O1GwaR63CdaeGmSMONQ.jpeg"
        ],
        "entries": [
          {
            "x": 297,
            "y": 614
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      },
      {
        "id": "9eebf74f-6286-4b7b-9f05-21558012a6b9",
        "nodeId": "n_9eebf74f-6286-4b7b-9f05-21558012a6b9",
        "buildingId": "pasar-buah",
        "floor": 2,
        "label": "Kedai Njonja",
        "name": "Kedai Njonja",
        "category": "kuliner",
        "categoryLabel": "Kuliner Legendaris",
        "icon": "🍜",
        "color": "#E74C3C",
        "x": 711,
        "y": 852,
        "lat": 172,
        "lng": 711,
        "description": "Kedai Njonja adalah kedai yang menjual aneka menu seperti toast, rice box, dan Mie Bangladesh, serta menjadi tempat nongkrong dengan nuansa santai di lantai 2 Pasar Gedhe Solo.",
        "image": "https://maps.pasargedesolo.com/storage/stores/Iyp5yqGuaB4lvoiREdmOq4RoxBtRghCZ.jpg",
        "imageThumb": "https://maps.pasargedesolo.com/storage/stores/Iyp5yqGuaB4lvoiREdmOq4RoxBtRghCZ_xs.jpg",
        "images": [
          "https://maps.pasargedesolo.com/storage/stores/Iyp5yqGuaB4lvoiREdmOq4RoxBtRghCZ.jpg",
          "https://maps.pasargedesolo.com/storage/locations/uQUOmrhcjJdT0TeHBK6ekdmNDV0oNMaoFyEvVtqa.jpg"
        ],
        "entries": [
          {
            "x": 676,
            "y": 857
          }
        ],
        "accessible": true,
        "hasTactile": false,
        "isFacility": false,
        "isLegendary": false
      }
    ]
  }
};

    let currentBuilding = 'pasar-gede';

    function setBuilding(buildingId) {
        currentBuilding = buildingId;
    }

    function getBuilding() {
        return currentBuilding;
    }

    function getBuildings() {
        return data.buildings;
    }

    function getBuildingInfo(bldId) {
        return data.buildings.find(b => b.id === (bldId || currentBuilding));
    }

    function getCategories() {
        return data.categories;
    }

    function getCategory(catIdOrName) {
        if (!catIdOrName) return null;
        const target = String(catIdOrName).toLowerCase().trim();
        for (const [key, cat] of Object.entries(data.categories)) {
            if ((cat.id && cat.id.toLowerCase() === target) || 
                key.toLowerCase() === target || 
                (cat.name && cat.name.toLowerCase() === target)) {
                return cat;
            }
        }
        return null;
    }

    function getCategoriesForFloor(floor, bldId) {
        const bld = bldId || currentBuilding;
        const key = bld + '-' + floor;
        const stalls = data.stalls[key] || [];
        
        const activeCatIds = new Set(stalls.map(s => (s.category || '').toLowerCase()));
        const res = {};
        for (const [key, cat] of Object.entries(data.categories)) {
            const catId = (cat.id || key).toLowerCase();
            if (activeCatIds.has(catId) || activeCatIds.has(key.toLowerCase())) {
                res[catId] = cat;
            }
        }
        return res;
    }

    function getFloorStalls(floor, bldId) {
        const bld = bldId || currentBuilding;
        const key = bld + '-' + floor;
        return data.stalls[key] || [];
    }

    function getAllStalls(bldId) {
        if (bldId) {
            return [...(data.stalls[bldId + '-1'] || []), ...(data.stalls[bldId + '-2'] || [])];
        }
        const all = [];
        for (const key in data.stalls) {
            all.push(...data.stalls[key]);
        }
        return all;
    }

    function getStallById(id) {
        const all = getAllStalls();
        return all.find(s => s.id === id || s.nodeId === id) || null;
    }

    function searchStalls(query, bldId) {
        const q = query.toLowerCase().trim();
        if (!q) return [];
        const stalls = bldId ? getAllStalls(bldId) : getAllStalls();
        return stalls.filter(s => {
            return (
                (s.name && s.name.toLowerCase().includes(q)) ||
                (s.description && s.description.toLowerCase().includes(q)) ||
                (s.categoryLabel && s.categoryLabel.toLowerCase().includes(q))
            );
        }).slice(0, 15);
    }

    function getCategoryCount(catId, floor, bldId) {
        const stalls = getFloorStalls(floor, bldId);
        const target = (catId || '').toLowerCase();
        return stalls.filter(s => (s.category || '').toLowerCase() === target).length;
    }

    function syncCategories(categoryList) {
        if (!categoryList) return false;
        try {
            const list = Array.isArray(categoryList) ? categoryList : Object.values(categoryList);
            if (list.length > 0) {
                const newCategories = { ...data.categories };
                list.forEach(c => {
                    if (!c || !c.id) return;
                    const id = String(c.id).toLowerCase();
                    newCategories[id] = {
                        id: id,
                        name: c.name || id,
                        icon: c.icon || '📍',
                        color: c.color || '#C0392B',
                        isFacility: Boolean(c.is_facility || c.isFacility),
                        sortOrder: c.sort_order || c.sortOrder || 99
                    };
                });
                data.categories = newCategories;
                return true;
            }
        } catch (e) {
            console.warn('Error syncing categories in MarketData:', e);
        }
        return false;
    }

    function syncWithDynamicStorage() {
        try {
            // 1. Sync dynamic categories
            if (typeof localStorage !== 'undefined') {
                const rawCats = localStorage.getItem('pasargede_dynamic_categories');
                if (rawCats) {
                    try {
                        const parsedCats = JSON.parse(rawCats);
                        syncCategories(parsedCats);
                    } catch (e) {}
                }
            }

            // 2. Sync dynamic stalls
            const raw = typeof localStorage !== 'undefined' ? localStorage.getItem('pasargede_dynamic_stalls') : null;
            if (raw) {
                const dynamicList = JSON.parse(raw);
                if (Array.isArray(dynamicList) && dynamicList.length > 0) {
                    const newStalls = {
                        'pasar-gede-1': [],
                        'pasar-gede-2': [],
                        'pasar-buah-1': [],
                        'pasar-buah-2': []
                    };
                    dynamicList.forEach(s => {
                        const key = (s.buildingId || 'pasar-gede') + '-' + (s.floor || 1);
                        if (!newStalls[key]) newStalls[key] = [];

                        // Normalize coordinates and category
                        if (s.lat === undefined && s.y !== undefined) {
                            s.lat = 1024 - s.y;
                        }
                        if (s.lng === undefined && s.x !== undefined) {
                            s.lng = s.x;
                        }
                        if (s.category) {
                            s.category = s.category.toLowerCase();
                        }

                        newStalls[key].push(s);

                        // Register into NavigationGraph if available
                        if (typeof NavigationGraph !== 'undefined' && NavigationGraph.nodes) {
                            const nId = s.nodeId || ('n_' + s.id);
                            if (!NavigationGraph.nodes[nId]) {
                                NavigationGraph.nodes[nId] = {
                                    id: nId,
                                    stallId: s.id,
                                    name: s.name,
                                    buildingId: s.buildingId || 'pasar-gede',
                                    floor: s.floor || 1,
                                    x: s.lng !== undefined ? s.lng : (s.x || 500),
                                    y: s.lat !== undefined ? s.lat : (1024 - (s.y || 500)),
                                    realX: s.x || 500,
                                    realY: s.y || 500,
                                    type: 'stall',
                                    category: s.category || 'kuliner',
                                    accessible: s.accessible !== false,
                                    hasTactile: false
                                };
                            }
                        }
                    });
                    data.stalls = newStalls;
                    return true;
                }
            }
        } catch (e) {
            console.warn('Could not sync dynamic stalls:', e);
        }
        return false;
    }

    // Auto-sync if dynamic data is found
    syncWithDynamicStorage();

    return {
        data,
        setBuilding,
        getBuilding,
        getBuildings,
        getBuildingInfo,
        getCategories,
        getCategory,
        getCategoriesForFloor,
        getFloorStalls,
        getAllStalls,
        getStallById,
        searchStalls,
        getCategoryCount,
        syncCategories,
        syncWithDynamicStorage
    };
})();
