/**
 * Navigation Graph - Real Stall Topology for Pasar Gedhe Solo & Pasar Buah
 */

const NavigationGraph = (() => {
    const nodes = {
  "n_9eec2df4-d946-4a78-8ce9-8e4de247b34e": {
    "id": "n_9eec2df4-d946-4a78-8ce9-8e4de247b34e",
    "stallId": "9eec2df4-d946-4a78-8ce9-8e4de247b34e",
    "name": "Jasa Pengggilingan Barokah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 389,
    "y": 149,
    "realX": 389,
    "realY": 875,
    "type": "stall",
    "category": "service",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec2f76-e610-4637-8a30-e18c0efb416d": {
    "id": "n_9eec2f76-e610-4637-8a30-e18c0efb416d",
    "stallId": "9eec2f76-e610-4637-8a30-e18c0efb416d",
    "name": "Kios Bu Nanik",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 641,
    "y": 149,
    "realX": 641,
    "realY": 875,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3009-3fa1-4082-bb09-849165d2e4ad": {
    "id": "n_9eec3009-3fa1-4082-bb09-849165d2e4ad",
    "stallId": "9eec3009-3fa1-4082-bb09-849165d2e4ad",
    "name": "Kios Mbak Titik",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 531,
    "y": 293,
    "realX": 531,
    "realY": 731,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec2b66-7a3f-43d4-8134-4bde3e2b5fc2": {
    "id": "n_9eec2b66-7a3f-43d4-8134-4bde3e2b5fc2",
    "stallId": "9eec2b66-7a3f-43d4-8134-4bde3e2b5fc2",
    "name": "Kios Bu Widadi 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 458,
    "y": 224,
    "realX": 458,
    "realY": 800,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec2f0f-ae5e-4a69-88a3-2d482acb31d4": {
    "id": "n_9eec2f0f-ae5e-4a69-88a3-2d482acb31d4",
    "stallId": "9eec2f0f-ae5e-4a69-88a3-2d482acb31d4",
    "name": "Kios Ramadhani",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 545,
    "y": 149,
    "realX": 545,
    "realY": 875,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571": {
    "id": "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
    "stallId": "9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
    "name": "Dawet Selasih Bu Watik",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 631,
    "y": 270,
    "realX": 631,
    "realY": 754,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec31a3-2c03-498b-ad60-4c9d0bc800b4": {
    "id": "n_9eec31a3-2c03-498b-ad60-4c9d0bc800b4",
    "stallId": "9eec31a3-2c03-498b-ad60-4c9d0bc800b4",
    "name": "Kios Bu Widadi 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 453,
    "y": 290,
    "realX": 453,
    "realY": 734,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec305a-ade9-47ac-90bb-481b090dad7a": {
    "id": "n_9eec305a-ade9-47ac-90bb-481b090dad7a",
    "stallId": "9eec305a-ade9-47ac-90bb-481b090dad7a",
    "name": "Kios Bu Sugiarti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 475,
    "y": 271,
    "realX": 475,
    "realY": 753,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3351-ba60-4179-87d4-79c3129b5a05": {
    "id": "n_9eec3351-ba60-4179-87d4-79c3129b5a05",
    "stallId": "9eec3351-ba60-4179-87d4-79c3129b5a05",
    "name": "Kios Ibu Wartini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 336,
    "y": 344,
    "realX": 336,
    "realY": 680,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3225-3109-458c-82e2-a02d3531ec27": {
    "id": "n_9eec3225-3109-458c-82e2-a02d3531ec27",
    "stallId": "9eec3225-3109-458c-82e2-a02d3531ec27",
    "name": "Ayam Goreng Pak Ali",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 577,
    "y": 289,
    "realX": 577,
    "realY": 735,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec3525-2ed5-447c-8493-8c65a8de8781": {
    "id": "n_9eec3525-2ed5-447c-8493-8c65a8de8781",
    "stallId": "9eec3525-2ed5-447c-8493-8c65a8de8781",
    "name": "Kios Bang Agiu",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 666,
    "y": 409,
    "realX": 666,
    "realY": 615,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3639-57c0-4077-b843-1389d937744e": {
    "id": "n_9eec3639-57c0-4077-b843-1389d937744e",
    "stallId": "9eec3639-57c0-4077-b843-1389d937744e",
    "name": "Kios Pak Suparmi",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 360,
    "y": 345,
    "realX": 360,
    "realY": 679,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef420fb-6408-42d8-9f2a-f29cb883aa56": {
    "id": "n_9ef420fb-6408-42d8-9f2a-f29cb883aa56",
    "stallId": "9ef420fb-6408-42d8-9f2a-f29cb883aa56",
    "name": "Bakso Juventus",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 309,
    "y": 170,
    "realX": 309,
    "realY": 854,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec3598-f6da-42c9-9555-ae9ffaa923c3": {
    "id": "n_9eec3598-f6da-42c9-9555-ae9ffaa923c3",
    "stallId": "9eec3598-f6da-42c9-9555-ae9ffaa923c3",
    "name": "Kios Makbenk 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 677,
    "y": 449,
    "realX": 677,
    "realY": 575,
    "type": "stall",
    "category": "perkakas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec359d-b3c7-4dbf-8dba-56afc6ae9e54": {
    "id": "n_9eec359d-b3c7-4dbf-8dba-56afc6ae9e54",
    "stallId": "9eec359d-b3c7-4dbf-8dba-56afc6ae9e54",
    "name": "Kios Bu Spinarti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 329,
    "realX": 519,
    "realY": 695,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec346f-adde-4314-96ed-59b4f8396dfc": {
    "id": "n_9eec346f-adde-4314-96ed-59b4f8396dfc",
    "stallId": "9eec346f-adde-4314-96ed-59b4f8396dfc",
    "name": "Toko Jamu Sari Asih",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 441,
    "y": 333,
    "realX": 441,
    "realY": 691,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec33d6-d85e-4c7d-b37c-b26706285439": {
    "id": "n_9eec33d6-d85e-4c7d-b37c-b26706285439",
    "stallId": "9eec33d6-d85e-4c7d-b37c-b26706285439",
    "name": "Kios Pak Syahrudin",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 384,
    "y": 333,
    "realX": 384,
    "realY": 691,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3db6-46d6-47ff-884d-1077b42da86f": {
    "id": "n_9eec3db6-46d6-47ff-884d-1077b42da86f",
    "stallId": "9eec3db6-46d6-47ff-884d-1077b42da86f",
    "name": "Sugeng Rebung",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 485,
    "y": 408,
    "realX": 485,
    "realY": 616,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec374a-ed39-498a-b3dc-9c84b91a3f32": {
    "id": "n_9eec374a-ed39-498a-b3dc-9c84b91a3f32",
    "stallId": "9eec374a-ed39-498a-b3dc-9c84b91a3f32",
    "name": "Kios Jeruk Pak Mulyono",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 602,
    "y": 468,
    "realX": 602,
    "realY": 556,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec371f-8ba1-40d9-8756-b42a1919a19f": {
    "id": "n_9eec371f-8ba1-40d9-8756-b42a1919a19f",
    "stallId": "9eec371f-8ba1-40d9-8756-b42a1919a19f",
    "name": "Toko Bu Slamet 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 441,
    "y": 333,
    "realX": 441,
    "realY": 691,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec37fc-a1e5-45e6-aa11-288e32b3a6f4": {
    "id": "n_9eec37fc-a1e5-45e6-aa11-288e32b3a6f4",
    "stallId": "9eec37fc-a1e5-45e6-aa11-288e32b3a6f4",
    "name": "Kios Bu Darini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 493,
    "y": 333,
    "realX": 493,
    "realY": 691,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3886-4c16-4041-bddf-3d6f51e7058a": {
    "id": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "stallId": "9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "name": "Kios Bu Tyah Sayur",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 359,
    "y": 389,
    "realX": 359,
    "realY": 635,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d": {
    "id": "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
    "stallId": "9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
    "name": "Toko Sayur Bu Pan",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 359,
    "y": 408,
    "realX": 359,
    "realY": 616,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3e1f-c93c-44a7-bd91-d98e11fc213b": {
    "id": "n_9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
    "stallId": "9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
    "name": "Kios Surya Sayur",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 403,
    "y": 399,
    "realX": 403,
    "realY": 625,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4063-2d11-4088-83f7-f5b5b87db1c6": {
    "id": "n_9eec4063-2d11-4088-83f7-f5b5b87db1c6",
    "stallId": "9eec4063-2d11-4088-83f7-f5b5b87db1c6",
    "name": "Budi Susato",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 358,
    "y": 467,
    "realX": 358,
    "realY": 557,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec419f-b160-4391-a5ab-4c9eb75cbce1": {
    "id": "n_9eec419f-b160-4391-a5ab-4c9eb75cbce1",
    "stallId": "9eec419f-b160-4391-a5ab-4c9eb75cbce1",
    "name": "UD Bintang Buah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 762,
    "y": 829,
    "realX": 762,
    "realY": 195,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec477d-23d4-4a7f-80a1-a04f65d1e93c": {
    "id": "n_9eec477d-23d4-4a7f-80a1-a04f65d1e93c",
    "stallId": "9eec477d-23d4-4a7f-80a1-a04f65d1e93c",
    "name": "TWK Grosir Buah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 697,
    "y": 873,
    "realX": 697,
    "realY": 151,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4860-2daf-4bf9-9942-02c1d717f642": {
    "id": "n_9eec4860-2daf-4bf9-9942-02c1d717f642",
    "stallId": "9eec4860-2daf-4bf9-9942-02c1d717f642",
    "name": "Berkah Ayam Bu Yati",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 421,
    "y": 448,
    "realX": 421,
    "realY": 576,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3fee-0741-40be-b425-620016b062f5": {
    "id": "n_9eec3fee-0741-40be-b425-620016b062f5",
    "stallId": "9eec3fee-0741-40be-b425-620016b062f5",
    "name": "HS Group Bu Nunik",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 457,
    "y": 467,
    "realX": 457,
    "realY": 557,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec46f6-66a5-492c-ab89-96664cc55389": {
    "id": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "stallId": "9eec46f6-66a5-492c-ab89-96664cc55389",
    "name": "Es Dawet Telasih Mbak Genduk",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 572,
    "y": 702,
    "realX": 572,
    "realY": 322,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824": {
    "id": "n_9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
    "stallId": "9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
    "name": "Hosana Sayur",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 391,
    "y": 517,
    "realX": 391,
    "realY": 507,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4893-7b57-4b3b-94a9-aff2e3db119d": {
    "id": "n_9eec4893-7b57-4b3b-94a9-aff2e3db119d",
    "stallId": "9eec4893-7b57-4b3b-94a9-aff2e3db119d",
    "name": "Kios Bu Ngatmi 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 609,
    "y": 702,
    "realX": 609,
    "realY": 322,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4e07-119a-48b4-a2f3-bb38a8f8d1ec": {
    "id": "n_9eec4e07-119a-48b4-a2f3-bb38a8f8d1ec",
    "stallId": "9eec4e07-119a-48b4-a2f3-bb38a8f8d1ec",
    "name": "Mbak Ning Karak Tipis",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 740,
    "y": 185,
    "realX": 740,
    "realY": 839,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4b71-c9d3-475b-9671-6f68298ff2b1": {
    "id": "n_9eec4b71-c9d3-475b-9671-6f68298ff2b1",
    "stallId": "9eec4b71-c9d3-475b-9671-6f68298ff2b1",
    "name": "Kios Bu Wiwin 2 ",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 679,
    "y": 573,
    "realX": 679,
    "realY": 451,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4ae5-1a94-4d4f-84a9-b4de919d50c7": {
    "id": "n_9eec4ae5-1a94-4d4f-84a9-b4de919d50c7",
    "stallId": "9eec4ae5-1a94-4d4f-84a9-b4de919d50c7",
    "name": "Kios Bu Mariyani",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 487,
    "y": 517,
    "realX": 487,
    "realY": 507,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4c68-a9d5-4e12-b9d0-107dcd456160": {
    "id": "n_9eec4c68-a9d5-4e12-b9d0-107dcd456160",
    "stallId": "9eec4c68-a9d5-4e12-b9d0-107dcd456160",
    "name": "Kios Mbak Unyil",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 592,
    "y": 223,
    "realX": 592,
    "realY": 801,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4a72-e65e-41e7-89bc-45680119eedd": {
    "id": "n_9eec4a72-e65e-41e7-89bc-45680119eedd",
    "stallId": "9eec4a72-e65e-41e7-89bc-45680119eedd",
    "name": "Kios Sambel Pecel Bu Warsini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 472,
    "y": 517,
    "realX": 472,
    "realY": 507,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4c21-5c4f-4515-90d4-e45b17b6dea9": {
    "id": "n_9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
    "stallId": "9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
    "name": "PS Mas Abon",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 452,
    "y": 517,
    "realX": 452,
    "realY": 507,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4d02-5bbf-4672-babc-21ef1635d0a4": {
    "id": "n_9eec4d02-5bbf-4672-babc-21ef1635d0a4",
    "stallId": "9eec4d02-5bbf-4672-babc-21ef1635d0a4",
    "name": "Dawet Telasih Bu Dermi",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 530,
    "y": 227,
    "realX": 530,
    "realY": 797,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec4f1d-d004-4a4d-95a4-901ace72ec5b": {
    "id": "n_9eec4f1d-d004-4a4d-95a4-901ace72ec5b",
    "stallId": "9eec4f1d-d004-4a4d-95a4-901ace72ec5b",
    "name": "Kios Bu Tini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 456,
    "y": 553,
    "realX": 456,
    "realY": 471,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec517e-55bd-4c97-9504-ed63c5e8efbf": {
    "id": "n_9eec517e-55bd-4c97-9504-ed63c5e8efbf",
    "stallId": "9eec517e-55bd-4c97-9504-ed63c5e8efbf",
    "name": "Es Dawet Bu Siti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 484,
    "y": 573,
    "realX": 484,
    "realY": 451,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec53f2-48e7-47e5-abf0-6bfc5402aa18": {
    "id": "n_9eec53f2-48e7-47e5-abf0-6bfc5402aa18",
    "stallId": "9eec53f2-48e7-47e5-abf0-6bfc5402aa18",
    "name": "Soto Pasar Gedhe Bu Harini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 740,
    "y": 265,
    "realX": 740,
    "realY": 759,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec5761-f0f4-46f2-9433-d90566302aba": {
    "id": "n_9eec5761-f0f4-46f2-9433-d90566302aba",
    "stallId": "9eec5761-f0f4-46f2-9433-d90566302aba",
    "name": "Kios Omah Buah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 641,
    "y": 784,
    "realX": 641,
    "realY": 240,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec59d3-a3d3-4476-a1a9-fae4a0306afc": {
    "id": "n_9eec59d3-a3d3-4476-a1a9-fae4a0306afc",
    "stallId": "9eec59d3-a3d3-4476-a1a9-fae4a0306afc",
    "name": "Kios Mas Pion",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 423,
    "realX": 291,
    "realY": 601,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5329-91fe-4f02-971c-c58d1eea5dee": {
    "id": "n_9eec5329-91fe-4f02-971c-c58d1eea5dee",
    "stallId": "9eec5329-91fe-4f02-971c-c58d1eea5dee",
    "name": "Kios Endang Cholil",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 411,
    "y": 614,
    "realX": 411,
    "realY": 410,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec50de-c2a7-4253-9913-7ee1a0da72df": {
    "id": "n_9eec50de-c2a7-4253-9913-7ee1a0da72df",
    "stallId": "9eec50de-c2a7-4253-9913-7ee1a0da72df",
    "name": "Kios Sembako Widayanti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 550,
    "realX": 519,
    "realY": 474,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec54ac-dd6e-4d6b-bb45-275cbd235f0c": {
    "id": "n_9eec54ac-dd6e-4d6b-bb45-275cbd235f0c",
    "stallId": "9eec54ac-dd6e-4d6b-bb45-275cbd235f0c",
    "name": "Kios Bu Warni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 543,
    "y": 399,
    "realX": 543,
    "realY": 625,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5f01-f30a-431d-98c4-38824e518cad": {
    "id": "n_9eec5f01-f30a-431d-98c4-38824e518cad",
    "stallId": "9eec5f01-f30a-431d-98c4-38824e518cad",
    "name": "Mbak Priyanti Bandeng Pasar Gedhe",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 431,
    "y": 810,
    "realX": 431,
    "realY": 214,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec60a0-10e3-480c-89e8-87d033c0f0db": {
    "id": "n_9eec60a0-10e3-480c-89e8-87d033c0f0db",
    "stallId": "9eec60a0-10e3-480c-89e8-87d033c0f0db",
    "name": "Kios Gimin Buah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 476,
    "y": 747,
    "realX": 476,
    "realY": 277,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec601a-0d16-4132-b633-b75ab72930ea": {
    "id": "n_9eec601a-0d16-4132-b633-b75ab72930ea",
    "stallId": "9eec601a-0d16-4132-b633-b75ab72930ea",
    "name": "Kios Buah Suwarpo",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 460,
    "y": 810,
    "realX": 460,
    "realY": 214,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5af7-3539-4e2f-8a28-8c521ccea31e": {
    "id": "n_9eec5af7-3539-4e2f-8a28-8c521ccea31e",
    "stallId": "9eec5af7-3539-4e2f-8a28-8c521ccea31e",
    "name": "Kios Paerah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 578,
    "realX": 291,
    "realY": 446,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5df9-50c7-409c-99bb-b15d83062c31": {
    "id": "n_9eec5df9-50c7-409c-99bb-b15d83062c31",
    "stallId": "9eec5df9-50c7-409c-99bb-b15d83062c31",
    "name": "Oleh-oleh Mbak Parti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 365,
    "y": 679,
    "realX": 365,
    "realY": 345,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5d35-9aca-4ec5-ae9e-6ae0b41445a9": {
    "id": "n_9eec5d35-9aca-4ec5-ae9e-6ae0b41445a9",
    "stallId": "9eec5d35-9aca-4ec5-ae9e-6ae0b41445a9",
    "name": "Es Dawet Durian Bu Wiji",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 480,
    "y": 679,
    "realX": 480,
    "realY": 345,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec6219-4f66-4210-a1a3-709281f688d5": {
    "id": "n_9eec6219-4f66-4210-a1a3-709281f688d5",
    "stallId": "9eec6219-4f66-4210-a1a3-709281f688d5",
    "name": "Es Dawet dan Gempol Pleret Bu Hj.Sipon 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 509,
    "y": 793,
    "realX": 509,
    "realY": 231,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec618c-7c8b-4223-bd90-017066855a3a": {
    "id": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
    "stallId": "9eec618c-7c8b-4223-bd90-017066855a3a",
    "name": "Kios Bu Ngatmi 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 509,
    "y": 778,
    "realX": 509,
    "realY": 246,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec641e-b474-49c6-9b1b-287287af6fcc": {
    "id": "n_9eec641e-b474-49c6-9b1b-287287af6fcc",
    "stallId": "9eec641e-b474-49c6-9b1b-287287af6fcc",
    "name": "Endang Snack",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 356,
    "y": 573,
    "realX": 356,
    "realY": 451,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec62fb-8144-47d6-8b90-867b515c7a31": {
    "id": "n_9eec62fb-8144-47d6-8b90-867b515c7a31",
    "stallId": "9eec62fb-8144-47d6-8b90-867b515c7a31",
    "name": "Bidin Los Buah Pasar Gedhe",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 354,
    "y": 698,
    "realX": 354,
    "realY": 326,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6369-3772-4583-ab71-fb4c439fa258": {
    "id": "n_9eec6369-3772-4583-ab71-fb4c439fa258",
    "stallId": "9eec6369-3772-4583-ab71-fb4c439fa258",
    "name": "Kios Dewi Astuti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 359,
    "y": 614,
    "realX": 359,
    "realY": 410,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6146-0218-40fc-bd3c-bbaab1a09adc": {
    "id": "n_9eec6146-0218-40fc-bd3c-bbaab1a09adc",
    "stallId": "9eec6146-0218-40fc-bd3c-bbaab1a09adc",
    "name": "Pintu Utama",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 251,
    "y": 788,
    "realX": 251,
    "realY": 236,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec64a5-b2f8-4cf2-a7da-c8328889ad1d": {
    "id": "n_9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
    "stallId": "9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
    "name": "Kios Bu Desi",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 361,
    "y": 553,
    "realX": 361,
    "realY": 471,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6913-95cb-4ac1-b414-ad5723ddc6fc": {
    "id": "n_9eec6913-95cb-4ac1-b414-ad5723ddc6fc",
    "stallId": "9eec6913-95cb-4ac1-b414-ad5723ddc6fc",
    "name": "Pintu Samping ",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 525,
    "y": 117,
    "realX": 525,
    "realY": 907,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec6d25-228f-4a7e-9abd-d65daf71d0ae": {
    "id": "n_9eec6d25-228f-4a7e-9abd-d65daf71d0ae",
    "stallId": "9eec6d25-228f-4a7e-9abd-d65daf71d0ae",
    "name": "Pintu Belakang",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 778,
    "y": 798,
    "realX": 778,
    "realY": 226,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d": {
    "id": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "stallId": "9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "name": "Oprokan Ibu Sri",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 509,
    "y": 811,
    "realX": 509,
    "realY": 213,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec8049-a160-4ffb-b256-9366684a3f13": {
    "id": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
    "stallId": "9eec8049-a160-4ffb-b256-9366684a3f13",
    "name": "Oprokan Ibu Sugiyem",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 509,
    "y": 811,
    "realX": 509,
    "realY": 213,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec8289-bc6d-4603-a47d-dce86917cb47": {
    "id": "n_9eec8289-bc6d-4603-a47d-dce86917cb47",
    "stallId": "9eec8289-bc6d-4603-a47d-dce86917cb47",
    "name": "Oprokan Ibu Lastri",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 544,
    "y": 784,
    "realX": 544,
    "realY": 240,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398": {
    "id": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "stallId": "9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "name": "Oprokan Bu Nanik",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 509,
    "y": 778,
    "realX": 509,
    "realY": 246,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec8811-1439-403f-ad41-29abd386c867": {
    "id": "n_9eec8811-1439-403f-ad41-29abd386c867",
    "stallId": "9eec8811-1439-403f-ad41-29abd386c867",
    "name": "Sambel Pecel Sedep Bu Kareni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 509,
    "y": 778,
    "realX": 509,
    "realY": 246,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9f0824fa-0478-4422-9533-e57738855be2": {
    "id": "n_9f0824fa-0478-4422-9533-e57738855be2",
    "stallId": "9f0824fa-0478-4422-9533-e57738855be2",
    "name": "Karak Solo Kevani 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 628,
    "y": 729,
    "realX": 628,
    "realY": 295,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3": {
    "id": "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
    "stallId": "9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
    "name": "Oprokan Bapak Sarmo 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 829,
    "realX": 291,
    "realY": 195,
    "type": "stall",
    "category": "tekstil",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9": {
    "id": "n_9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9",
    "stallId": "9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9",
    "name": "Toilet Pasar Gedhe 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 293,
    "y": 822,
    "realX": 293,
    "realY": 202,
    "type": "facility",
    "category": "toilet",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef1fce8-7b05-4c21-a8af-2f9c82b48bf2": {
    "id": "n_9ef1fce8-7b05-4c21-a8af-2f9c82b48bf2",
    "stallId": "9ef1fce8-7b05-4c21-a8af-2f9c82b48bf2",
    "name": "Toilet Pasar Gedhe 3",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 744,
    "y": 844,
    "realX": 744,
    "realY": 180,
    "type": "facility",
    "category": "toilet",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef1fd45-298d-4a38-a597-4e68ce0cbfbf": {
    "id": "n_9ef1fd45-298d-4a38-a597-4e68ce0cbfbf",
    "stallId": "9ef1fd45-298d-4a38-a597-4e68ce0cbfbf",
    "name": "Toilet Pasar Gedhe 4",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 739,
    "y": 759,
    "realX": 739,
    "realY": 265,
    "type": "facility",
    "category": "toilet",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef1f9c2-66ee-4880-9c25-906d6018af72": {
    "id": "n_9ef1f9c2-66ee-4880-9c25-906d6018af72",
    "stallId": "9ef1f9c2-66ee-4880-9c25-906d6018af72",
    "name": "Toilet Pasar Gedhe 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 293,
    "y": 758,
    "realX": 293,
    "realY": 266,
    "type": "facility",
    "category": "toilet",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef20b93-9f38-4b5e-9028-637b9701b815": {
    "id": "n_9ef20b93-9f38-4b5e-9028-637b9701b815",
    "stallId": "9ef20b93-9f38-4b5e-9028-637b9701b815",
    "name": "Oprokan Ibu Giyarti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 518,
    "y": 648,
    "realX": 518,
    "realY": 376,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef20676-216b-43ce-9d54-9a595739376e": {
    "id": "n_9ef20676-216b-43ce-9d54-9a595739376e",
    "stallId": "9ef20676-216b-43ce-9d54-9a595739376e",
    "name": "Oprokan Ibu Sriyono",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 544,
    "y": 714,
    "realX": 544,
    "realY": 310,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb": {
    "id": "n_9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
    "stallId": "9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
    "name": "Oprokan Ibu Nurhidayati",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 396,
    "realX": 519,
    "realY": 628,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef208dc-305d-4213-925b-a079e3920b2f": {
    "id": "n_9ef208dc-305d-4213-925b-a079e3920b2f",
    "stallId": "9ef208dc-305d-4213-925b-a079e3920b2f",
    "name": "Oprokan Ibu Parinah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 544,
    "y": 714,
    "realX": 544,
    "realY": 310,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef20d3c-594a-406d-a451-0207d8460317": {
    "id": "n_9ef20d3c-594a-406d-a451-0207d8460317",
    "stallId": "9ef20d3c-594a-406d-a451-0207d8460317",
    "name": "Oprokan Ibu Warti Ayam Potong 3",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 388,
    "realX": 519,
    "realY": 636,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5975-013a-4ff1-865d-3e814cca1c60": {
    "id": "n_9eec5975-013a-4ff1-865d-3e814cca1c60",
    "stallId": "9eec5975-013a-4ff1-865d-3e814cca1c60",
    "name": "Toko Mee Lian 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 364,
    "realX": 291,
    "realY": 660,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef29d60-dc1d-4396-b187-3b75b81fbe9f": {
    "id": "n_9ef29d60-dc1d-4396-b187-3b75b81fbe9f",
    "stallId": "9ef29d60-dc1d-4396-b187-3b75b81fbe9f",
    "name": "Kios Oleh-Oleh Mbak Lies",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 609,
    "y": 223,
    "realX": 609,
    "realY": 801,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef3ee74-4033-46f8-ab06-802820b21d52": {
    "id": "n_9ef3ee74-4033-46f8-ab06-802820b21d52",
    "stallId": "9ef3ee74-4033-46f8-ab06-802820b21d52",
    "name": "Kios Bu Samini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 548,
    "y": 449,
    "realX": 548,
    "realY": 575,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2": {
    "id": "n_9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
    "stallId": "9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
    "name": "Kios Bu Suniyem",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 652,
    "y": 449,
    "realX": 652,
    "realY": 575,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef29a9f-ea32-45d5-a427-0811149bc4ba": {
    "id": "n_9ef29a9f-ea32-45d5-a427-0811149bc4ba",
    "stallId": "9ef29a9f-ea32-45d5-a427-0811149bc4ba",
    "name": "UD Hasil Buah Antok (Bagong)",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 409,
    "y": 873,
    "realX": 409,
    "realY": 151,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41814-0bb3-4cbe-be8d-5055030a41e6": {
    "id": "n_9ef41814-0bb3-4cbe-be8d-5055030a41e6",
    "stallId": "9ef41814-0bb3-4cbe-be8d-5055030a41e6",
    "name": "Kios UD Uzhie 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 296,
    "realX": 262,
    "realY": 728,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41983-8988-4838-9623-413e70cdf3bd": {
    "id": "n_9ef41983-8988-4838-9623-413e70cdf3bd",
    "stallId": "9ef41983-8988-4838-9623-413e70cdf3bd",
    "name": "Toko Sinar",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 480,
    "realX": 262,
    "realY": 544,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41765-e35b-4393-a937-9e700aa3cf7c": {
    "id": "n_9ef41765-e35b-4393-a937-9e700aa3cf7c",
    "stallId": "9ef41765-e35b-4393-a937-9e700aa3cf7c",
    "name": "Toko Mas Kembar",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 265,
    "realX": 262,
    "realY": 759,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41082-d06a-4f76-9792-0135f7ce6f84": {
    "id": "n_9ef41082-d06a-4f76-9792-0135f7ce6f84",
    "stallId": "9ef41082-d06a-4f76-9792-0135f7ce6f84",
    "name": "Sayuran Bu Warni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 669,
    "y": 784,
    "realX": 669,
    "realY": 240,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4000b-15f3-45a3-9fae-6e946eae2530": {
    "id": "n_9ef4000b-15f3-45a3-9fae-6e946eae2530",
    "stallId": "9ef4000b-15f3-45a3-9fae-6e946eae2530",
    "name": "Kios Pak Sawali",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 613,
    "y": 553,
    "realX": 613,
    "realY": 471,
    "type": "stall",
    "category": "kerajinan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed": {
    "id": "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed",
    "stallId": "9ef3f9b5-150f-4d29-a425-503ee193c8ed",
    "name": "Kios Bu Wadinah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 564,
    "y": 517,
    "realX": 564,
    "realY": 507,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef416b9-1f72-4103-8491-010ff40720d6": {
    "id": "n_9ef416b9-1f72-4103-8491-010ff40720d6",
    "stallId": "9ef416b9-1f72-4103-8491-010ff40720d6",
    "name": "Kios Bu Tatik",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 572,
    "y": 702,
    "realX": 572,
    "realY": 322,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef418ad-89b7-42ae-9ded-64b0120c6add": {
    "id": "n_9ef418ad-89b7-42ae-9ded-64b0120c6add",
    "stallId": "9ef418ad-89b7-42ae-9ded-64b0120c6add",
    "name": "Kios Bu Darso",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 736,
    "y": 489,
    "realX": 736,
    "realY": 535,
    "type": "stall",
    "category": "perkakas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef": {
    "id": "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef",
    "stallId": "9ef3fd9d-f088-41b6-815d-0ee7382429ef",
    "name": "Kios Bu Ratih 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 673,
    "y": 499,
    "realX": 673,
    "realY": 525,
    "type": "stall",
    "category": "perkakas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff": {
    "id": "n_9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
    "stallId": "9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
    "name": "Kios Bu Ratih 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 675,
    "y": 553,
    "realX": 675,
    "realY": 471,
    "type": "stall",
    "category": "perkakas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef42be5-3274-41ef-907e-f9447f142465": {
    "id": "n_9ef42be5-3274-41ef-907e-f9447f142465",
    "stallId": "9ef42be5-3274-41ef-907e-f9447f142465",
    "name": "Solo Buah Segar",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 576,
    "y": 900,
    "realX": 576,
    "realY": 124,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41b0f-aae3-47e5-9dba-f0b689e14a8a": {
    "id": "n_9ef41b0f-aae3-47e5-9dba-f0b689e14a8a",
    "stallId": "9ef41b0f-aae3-47e5-9dba-f0b689e14a8a",
    "name": "UD Uzhie Kios Buah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 665,
    "realX": 262,
    "realY": 359,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4201c-8253-403d-a60b-ad792fd235cd": {
    "id": "n_9ef4201c-8253-403d-a60b-ad792fd235cd",
    "stallId": "9ef4201c-8253-403d-a60b-ad792fd235cd",
    "name": "Genduk Buah 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 271,
    "y": 854,
    "realX": 271,
    "realY": 170,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41ac9-8e90-40dc-ac33-ce82e633b42a": {
    "id": "n_9ef41ac9-8e90-40dc-ac33-ce82e633b42a",
    "stallId": "9ef41ac9-8e90-40dc-ac33-ce82e633b42a",
    "name": "Toko Surya",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 637,
    "realX": 262,
    "realY": 387,
    "type": "stall",
    "category": "tekstil",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41ef1-9e5f-4df8-9a41-7395803fc4fd": {
    "id": "n_9ef41ef1-9e5f-4df8-9a41-7395803fc4fd",
    "stallId": "9ef41ef1-9e5f-4df8-9a41-7395803fc4fd",
    "name": "Toko Mulia Baru",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 423,
    "realX": 262,
    "realY": 601,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4245d-17e0-44e5-956c-c2c6d10b451a": {
    "id": "n_9ef4245d-17e0-44e5-956c-c2c6d10b451a",
    "stallId": "9ef4245d-17e0-44e5-956c-c2c6d10b451a",
    "name": "Iin Koentjoro",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 387,
    "y": 900,
    "realX": 387,
    "realY": 124,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41c48-ee26-4113-a029-2c663251b452": {
    "id": "n_9ef41c48-ee26-4113-a029-2c663251b452",
    "stallId": "9ef41c48-ee26-4113-a029-2c663251b452",
    "name": "Kios Oprokan Pak Cahyo",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 372,
    "y": 698,
    "realX": 372,
    "realY": 326,
    "type": "stall",
    "category": "telur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41cd8-08b3-487d-8009-8ddfd43fc159": {
    "id": "n_9ef41cd8-08b3-487d-8009-8ddfd43fc159",
    "stallId": "9ef41cd8-08b3-487d-8009-8ddfd43fc159",
    "name": "Kios Oprokan Pak Joko",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 373,
    "y": 731,
    "realX": 373,
    "realY": 293,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef42332-d100-414f-91d1-11cc96081ffc": {
    "id": "n_9ef42332-d100-414f-91d1-11cc96081ffc",
    "stallId": "9ef42332-d100-414f-91d1-11cc96081ffc",
    "name": "Kios Lenjongan Jumiati",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 476,
    "y": 731,
    "realX": 476,
    "realY": 293,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41b3b-7e17-4273-927f-2b1f0ab90316": {
    "id": "n_9ef41b3b-7e17-4273-927f-2b1f0ab90316",
    "stallId": "9ef41b3b-7e17-4273-927f-2b1f0ab90316",
    "name": "Oprokan Buah Bu Warni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 441,
    "y": 747,
    "realX": 441,
    "realY": 277,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef42f24-cb63-4482-89b4-61db2f234cb6": {
    "id": "n_9ef42f24-cb63-4482-89b4-61db2f234cb6",
    "stallId": "9ef42f24-cb63-4482-89b4-61db2f234cb6",
    "name": "Manggala Putri",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 355,
    "y": 124,
    "realX": 355,
    "realY": 900,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef427fc-873d-4224-b1cd-7020741182df": {
    "id": "n_9ef427fc-873d-4224-b1cd-7020741182df",
    "stallId": "9ef427fc-873d-4224-b1cd-7020741182df",
    "name": "Kios Bu Marti Sayuran",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 663,
    "y": 729,
    "realX": 663,
    "realY": 295,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4262b-7e23-4de9-a258-6db15bd6594a": {
    "id": "n_9ef4262b-7e23-4de9-a258-6db15bd6594a",
    "stallId": "9ef4262b-7e23-4de9-a258-6db15bd6594a",
    "name": "UD Tanti 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 476,
    "y": 900,
    "realX": 476,
    "realY": 124,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4912-7411-4938-939a-ee5ee6759fc5": {
    "id": "n_9eec4912-7411-4938-939a-ee5ee6759fc5",
    "stallId": "9eec4912-7411-4938-939a-ee5ee6759fc5",
    "name": "Kios Oleh Oleh Bu Saji 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 640,
    "y": 702,
    "realX": 640,
    "realY": 322,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef43b2e-c860-4412-9ebc-3eac05690019": {
    "id": "n_9ef43b2e-c860-4412-9ebc-3eac05690019",
    "stallId": "9ef43b2e-c860-4412-9ebc-3eac05690019",
    "name": "Sinar Jaya",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 731,
    "y": 171,
    "realX": 731,
    "realY": 853,
    "type": "stall",
    "category": "kerajinan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef43465-0f14-498e-a0f4-2bda10296750": {
    "id": "n_9ef43465-0f14-498e-a0f4-2bda10296750",
    "stallId": "9ef43465-0f14-498e-a0f4-2bda10296750",
    "name": "Oprokan Ibu Sunarti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 520,
    "y": 454,
    "realX": 520,
    "realY": 570,
    "type": "stall",
    "category": "telur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef438d8-7f2d-43e8-8e6d-4d77adac4ce8": {
    "id": "n_9ef438d8-7f2d-43e8-8e6d-4d77adac4ce8",
    "stallId": "9ef438d8-7f2d-43e8-8e6d-4d77adac4ce8",
    "name": "Toko Indah Jaya",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 652,
    "y": 124,
    "realX": 652,
    "realY": 900,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4300f-fcb9-4e6d-a3cb-91f8d55bd945": {
    "id": "n_9ef4300f-fcb9-4e6d-a3cb-91f8d55bd945",
    "stallId": "9ef4300f-fcb9-4e6d-a3cb-91f8d55bd945",
    "name": "Dewa Dewi",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 749,
    "y": 876,
    "realX": 749,
    "realY": 148,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4320d-7c57-4a6c-85c2-3342ad96ed1b": {
    "id": "n_9ef4320d-7c57-4a6c-85c2-3342ad96ed1b",
    "stallId": "9ef4320d-7c57-4a6c-85c2-3342ad96ed1b",
    "name": "Mie Dimsum Story",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 403,
    "y": 124,
    "realX": 403,
    "realY": 900,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef43873-772a-44fc-9200-1268038676fc": {
    "id": "n_9ef43873-772a-44fc-9200-1268038676fc",
    "stallId": "9ef43873-772a-44fc-9200-1268038676fc",
    "name": "Toko Dua Sembilan",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 587,
    "y": 124,
    "realX": 587,
    "realY": 900,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4": {
    "id": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "stallId": "9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "name": "Oprokan Ibu Rokayah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 491,
    "realX": 519,
    "realY": 533,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef434c0-ffea-4f46-9881-31f48f7c1d23": {
    "id": "n_9ef434c0-ffea-4f46-9881-31f48f7c1d23",
    "stallId": "9ef434c0-ffea-4f46-9881-31f48f7c1d23",
    "name": "Bu Yanti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 445,
    "y": 149,
    "realX": 445,
    "realY": 875,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef43f2e-9267-40be-9e80-bf82ee08cc74": {
    "id": "n_9ef43f2e-9267-40be-9e80-bf82ee08cc74",
    "stallId": "9ef43f2e-9267-40be-9e80-bf82ee08cc74",
    "name": "Toko Menyan Mororejo",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 762,
    "y": 459,
    "realX": 762,
    "realY": 565,
    "type": "stall",
    "category": "lainnya",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef43097-29d0-41c7-9ec7-4518477cc4ca": {
    "id": "n_9ef43097-29d0-41c7-9ec7-4518477cc4ca",
    "stallId": "9ef43097-29d0-41c7-9ec7-4518477cc4ca",
    "name": "Kios Buah Sunarto",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 762,
    "y": 584,
    "realX": 762,
    "realY": 440,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef440d5-5239-43fc-89dd-aa1a492ad5ae": {
    "id": "n_9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
    "stallId": "9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
    "name": "Oprokan Bu Irma",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 500,
    "y": 224,
    "realX": 500,
    "realY": 800,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef43582-ca29-4230-864c-64c6dcddaeab": {
    "id": "n_9ef43582-ca29-4230-864c-64c6dcddaeab",
    "stallId": "9ef43582-ca29-4230-864c-64c6dcddaeab",
    "name": "Oprokan Ibu Dwi Hartini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 520,
    "y": 465,
    "realX": 520,
    "realY": 559,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef43511-01c3-4fbc-9b5e-a1225d124919": {
    "id": "n_9ef43511-01c3-4fbc-9b5e-a1225d124919",
    "stallId": "9ef43511-01c3-4fbc-9b5e-a1225d124919",
    "name": "Oprokan Ibu Sularni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 490,
    "y": 467,
    "realX": 490,
    "realY": 557,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef42fe2-8d4b-4bf9-b70d-420e6872eb35": {
    "id": "n_9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
    "stallId": "9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
    "name": "Oprokan Ibu Saifudin",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 520,
    "y": 443,
    "realX": 520,
    "realY": 581,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef44d92-3068-4faa-bb72-1a289e6cb64b": {
    "id": "n_9ef44d92-3068-4faa-bb72-1a289e6cb64b",
    "stallId": "9ef44d92-3068-4faa-bb72-1a289e6cb64b",
    "name": "Ayam Potong Bu Tien",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 548,
    "y": 517,
    "realX": 548,
    "realY": 507,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef450f3-ce3e-4c22-8642-65ad20c319a7": {
    "id": "n_9ef450f3-ce3e-4c22-8642-65ad20c319a7",
    "stallId": "9ef450f3-ce3e-4c22-8642-65ad20c319a7",
    "name": "Oprokan Ibu Tami",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 518,
    "y": 625,
    "realX": 518,
    "realY": 399,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef44646-37b5-419e-a0f5-09f87e972e4b": {
    "id": "n_9ef44646-37b5-419e-a0f5-09f87e972e4b",
    "stallId": "9ef44646-37b5-419e-a0f5-09f87e972e4b",
    "name": "Oprokan Ibu Warti Kelapa",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 518,
    "y": 648,
    "realX": 518,
    "realY": 376,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef44eea-56b1-4cb9-b731-6952972dcd07": {
    "id": "n_9ef44eea-56b1-4cb9-b731-6952972dcd07",
    "stallId": "9ef44eea-56b1-4cb9-b731-6952972dcd07",
    "name": "Lenjongan Bu Sum 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 518,
    "y": 648,
    "realX": 518,
    "realY": 376,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9": {
    "id": "n_9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
    "stallId": "9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
    "name": "Oprokan Ibu Rubinem Lumpia",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 518,
    "y": 636,
    "realX": 518,
    "realY": 388,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef44def-47b7-447b-af18-ef27b5a462b1": {
    "id": "n_9ef44def-47b7-447b-af18-ef27b5a462b1",
    "stallId": "9ef44def-47b7-447b-af18-ef27b5a462b1",
    "name": "Oprokan Ibu Lina",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 500,
    "realX": 519,
    "realY": 524,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef45303-39bf-42e7-b9bf-17e2e74ea89f": {
    "id": "n_9ef45303-39bf-42e7-b9bf-17e2e74ea89f",
    "stallId": "9ef45303-39bf-42e7-b9bf-17e2e74ea89f",
    "name": "Toko 37",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 762,
    "y": 268,
    "realX": 762,
    "realY": 756,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef443b5-fe38-4621-8e9f-5f1e1f868cf5": {
    "id": "n_9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
    "stallId": "9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
    "name": "Kios Oleh Oleh Bu Saji 3",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 486,
    "y": 641,
    "realX": 486,
    "realY": 383,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4616e-3d65-4194-905f-35e2387dd1aa": {
    "id": "n_9ef4616e-3d65-4194-905f-35e2387dd1aa",
    "stallId": "9ef4616e-3d65-4194-905f-35e2387dd1aa",
    "name": "Ayam Potong Bu Tipuk",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 558,
    "realX": 519,
    "realY": 466,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef45d8e-608d-422e-9950-1a6919cd762b": {
    "id": "n_9ef45d8e-608d-422e-9950-1a6919cd762b",
    "stallId": "9ef45d8e-608d-422e-9950-1a6919cd762b",
    "name": "Oprokan Ibu Puji",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 579,
    "realX": 519,
    "realY": 445,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef45662-4634-4dd1-a62d-8639afdfa1c8": {
    "id": "n_9ef45662-4634-4dd1-a62d-8639afdfa1c8",
    "stallId": "9ef45662-4634-4dd1-a62d-8639afdfa1c8",
    "name": "Oprokan Ibu Warti Ayam Potong 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 585,
    "realX": 519,
    "realY": 439,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef459f1-df1c-44a5-ac1b-7a294009467a": {
    "id": "n_9ef459f1-df1c-44a5-ac1b-7a294009467a",
    "stallId": "9ef459f1-df1c-44a5-ac1b-7a294009467a",
    "name": "Oprokan Ibu Harini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 518,
    "y": 605,
    "realX": 518,
    "realY": 419,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef466e9-6958-46f7-9990-acb2e02f98e9": {
    "id": "n_9ef466e9-6958-46f7-9990-acb2e02f98e9",
    "stallId": "9ef466e9-6958-46f7-9990-acb2e02f98e9",
    "name": "Oprokan Ibu Tinah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 525,
    "realX": 519,
    "realY": 499,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef499de-48da-431c-9353-4aeb47b50a15": {
    "id": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "stallId": "9ef499de-48da-431c-9353-4aeb47b50a15",
    "name": "Kios Oleh-Oleh Haryanto",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 756,
    "realX": 291,
    "realY": 268,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef496b8-20fc-4b8c-a8d0-497f94d9212b": {
    "id": "n_9ef496b8-20fc-4b8c-a8d0-497f94d9212b",
    "stallId": "9ef496b8-20fc-4b8c-a8d0-497f94d9212b",
    "name": "Tangga lt 1.1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 332,
    "y": 751,
    "realX": 332,
    "realY": 273,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed": {
    "id": "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
    "stallId": "9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
    "name": "Tangga lt 1.3",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 320,
    "y": 154,
    "realX": 320,
    "realY": 870,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9ef49a6b-7eea-4afa-b6db-8f3155843e27": {
    "id": "n_9ef49a6b-7eea-4afa-b6db-8f3155843e27",
    "stallId": "9ef49a6b-7eea-4afa-b6db-8f3155843e27",
    "name": "Tangga lt 1.4",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 488,
    "y": 861,
    "realX": 488,
    "realY": 163,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9f0e1ea7-663f-4256-8fae-b551329c34d5": {
    "id": "n_9f0e1ea7-663f-4256-8fae-b551329c34d5",
    "stallId": "9f0e1ea7-663f-4256-8fae-b551329c34d5",
    "name": "Oprokan Bu Narti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 530,
    "y": 236,
    "realX": 530,
    "realY": 788,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef49b56-c410-4339-a1e8-92fe2228b6e1": {
    "id": "n_9ef49b56-c410-4339-a1e8-92fe2228b6e1",
    "stallId": "9ef49b56-c410-4339-a1e8-92fe2228b6e1",
    "name": "Tangga lt 1.5",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 307,
    "y": 511,
    "realX": 307,
    "realY": 513,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9ef49846-fc66-442b-b42a-2c15f7eb65dc": {
    "id": "n_9ef49846-fc66-442b-b42a-2c15f7eb65dc",
    "stallId": "9ef49846-fc66-442b-b42a-2c15f7eb65dc",
    "name": "Tangga lt 1.2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 352,
    "y": 812,
    "realX": 352,
    "realY": 212,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9ef4a191-73b1-4fc3-88ed-f3648ab9aaee": {
    "id": "n_9ef4a191-73b1-4fc3-88ed-f3648ab9aaee",
    "stallId": "9ef4a191-73b1-4fc3-88ed-f3648ab9aaee",
    "name": "Toko Buah Mulia",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 409,
    "y": 900,
    "realX": 409,
    "realY": 124,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4a452-957a-4337-a0aa-d820c3ca2585": {
    "id": "n_9ef4a452-957a-4337-a0aa-d820c3ca2585",
    "stallId": "9ef4a452-957a-4337-a0aa-d820c3ca2585",
    "name": "Dawet Telasih & Gempol Pleret Mbak Nanik",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 829,
    "realX": 291,
    "realY": 195,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef4aac7-a86f-4b4f-b18f-1959a5fe97c6": {
    "id": "n_9ef4aac7-a86f-4b4f-b18f-1959a5fe97c6",
    "stallId": "9ef4aac7-a86f-4b4f-b18f-1959a5fe97c6",
    "name": "Oprokan Bapak Wahyudi",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 780,
    "realX": 262,
    "realY": 244,
    "type": "stall",
    "category": "perkakas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef49cc2-bd5a-4385-829b-aff6d038a441": {
    "id": "n_9ef49cc2-bd5a-4385-829b-aff6d038a441",
    "stallId": "9ef49cc2-bd5a-4385-829b-aff6d038a441",
    "name": "Gethuk Lenjongan Bu Rubi",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 362,
    "y": 792,
    "realX": 362,
    "realY": 232,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef42166-1220-46d8-a6fd-de5f668212fa": {
    "id": "n_9ef42166-1220-46d8-a6fd-de5f668212fa",
    "stallId": "9ef42166-1220-46d8-a6fd-de5f668212fa",
    "name": "Fanny Snack",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 355,
    "y": 124,
    "realX": 355,
    "realY": 900,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef5fb86-0e86-4a92-a670-4468621808a2": {
    "id": "n_9ef5fb86-0e86-4a92-a670-4468621808a2",
    "stallId": "9ef5fb86-0e86-4a92-a670-4468621808a2",
    "name": "Kios Mbak Yayuk",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 625,
    "y": 449,
    "realX": 625,
    "realY": 575,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8": {
    "id": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "stallId": "9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "name": "Tangga lt 1.6",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 479,
    "y": 165,
    "realX": 479,
    "realY": 859,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9f0e8d43-d4ad-4c21-88ae-573266307668": {
    "id": "n_9f0e8d43-d4ad-4c21-88ae-573266307668",
    "stallId": "9f0e8d43-d4ad-4c21-88ae-573266307668",
    "name": "Jadah Bakar Tasik Pasar Gedhe",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 780,
    "realX": 262,
    "realY": 244,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9f0e9fd6-0856-4523-b0a5-61a2af95607b": {
    "id": "n_9f0e9fd6-0856-4523-b0a5-61a2af95607b",
    "stallId": "9f0e9fd6-0856-4523-b0a5-61a2af95607b",
    "name": "Semar Mendem Bu Yuyun",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 736,
    "y": 700,
    "realX": 736,
    "realY": 324,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec3283-3138-4515-ad44-0248a14e28ca": {
    "id": "n_9eec3283-3138-4515-ad44-0248a14e28ca",
    "stallId": "9eec3283-3138-4515-ad44-0248a14e28ca",
    "name": "Jadah Blondo Mbak Siska",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 558,
    "y": 289,
    "realX": 558,
    "realY": 735,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9f0e814a-1ae9-4faa-8e37-4f4abff56408": {
    "id": "n_9f0e814a-1ae9-4faa-8e37-4f4abff56408",
    "stallId": "9f0e814a-1ae9-4faa-8e37-4f4abff56408",
    "name": "Ayam Panggang Bu Kas",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 210,
    "realX": 262,
    "realY": 814,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef436d9-2b98-4722-b3a0-9a655b7b1439": {
    "id": "n_9ef436d9-2b98-4722-b3a0-9a655b7b1439",
    "stallId": "9ef436d9-2b98-4722-b3a0-9a655b7b1439",
    "name": "Intip Boniyem",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 482,
    "y": 124,
    "realX": 482,
    "realY": 900,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f0e78a2-57d8-4b14-8bb9-12fb32d71c20": {
    "id": "n_9f0e78a2-57d8-4b14-8bb9-12fb32d71c20",
    "stallId": "9f0e78a2-57d8-4b14-8bb9-12fb32d71c20",
    "name": "Babi Pikul Bu Sirat",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 259,
    "y": 126,
    "realX": 259,
    "realY": 898,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec8b11-abd1-451f-a001-9366d9525f8c": {
    "id": "n_9eec8b11-abd1-451f-a001-9366d9525f8c",
    "stallId": "9eec8b11-abd1-451f-a001-9366d9525f8c",
    "name": "Oprokan Bu Rubinem",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 544,
    "y": 714,
    "realX": 544,
    "realY": 310,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef64e90-01d9-4e9d-97f3-c3318ba208c8": {
    "id": "n_9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
    "stallId": "9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
    "name": "Kios Bu Wiwik",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 572,
    "y": 702,
    "realX": 572,
    "realY": 322,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4209c-ee9c-4f29-87d8-7b5565dcc79b": {
    "id": "n_9ef4209c-ee9c-4f29-87d8-7b5565dcc79b",
    "stallId": "9ef4209c-ee9c-4f29-87d8-7b5565dcc79b",
    "name": "Kopi Podjok",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 290,
    "y": 145,
    "realX": 290,
    "realY": 879,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef437a5-4b9b-4353-b1c5-6774c04a308f": {
    "id": "n_9ef437a5-4b9b-4353-b1c5-6774c04a308f",
    "stallId": "9ef437a5-4b9b-4353-b1c5-6774c04a308f",
    "name": "Toko Hasil Baru",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 587,
    "y": 124,
    "realX": 587,
    "realY": 900,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef65160-ea83-4730-b212-f74ab78979dc": {
    "id": "n_9ef65160-ea83-4730-b212-f74ab78979dc",
    "stallId": "9ef65160-ea83-4730-b212-f74ab78979dc",
    "name": "Toko Bu Slamet 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 447,
    "y": 389,
    "realX": 447,
    "realY": 635,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f0e2e1c-5615-407f-855b-5d19ec21fb83": {
    "id": "n_9f0e2e1c-5615-407f-855b-5d19ec21fb83",
    "stallId": "9f0e2e1c-5615-407f-855b-5d19ec21fb83",
    "name": "Oprokan Pak Widodo",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 527,
    "y": 255,
    "realX": 527,
    "realY": 769,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef658a0-3763-425d-a6ff-d1c872f18c07": {
    "id": "n_9ef658a0-3763-425d-a6ff-d1c872f18c07",
    "stallId": "9ef658a0-3763-425d-a6ff-d1c872f18c07",
    "name": "Los Bu Warti Kelapa",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 558,
    "y": 573,
    "realX": 558,
    "realY": 451,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f": {
    "id": "n_9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
    "stallId": "9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
    "name": "Oprokan Ibu Endah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 829,
    "realX": 291,
    "realY": 195,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f021f9e-ed2f-43ac-98ce-0a017f3a61ee": {
    "id": "n_9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
    "stallId": "9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
    "name": "Kios Bu Ni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 663,
    "y": 729,
    "realX": 663,
    "realY": 295,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f002543-5421-486d-a871-3acf00a391c4": {
    "id": "n_9f002543-5421-486d-a871-3acf00a391c4",
    "stallId": "9f002543-5421-486d-a871-3acf00a391c4",
    "name": "Toko Sahabat",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 726,
    "y": 135,
    "realX": 726,
    "realY": 889,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa": {
    "id": "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa",
    "stallId": "9ef683e2-3e61-4603-abc8-a04cd07c95aa",
    "name": "Bu Nanik Pakaian",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 484,
    "y": 810,
    "realX": 484,
    "realY": 214,
    "type": "stall",
    "category": "tekstil",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5eab-2e3d-4bbe-8c13-8e8a838b3440": {
    "id": "n_9eec5eab-2e3d-4bbe-8c13-8e8a838b3440",
    "stallId": "9eec5eab-2e3d-4bbe-8c13-8e8a838b3440",
    "name": "Kios Oprokan Agus Sriyanto",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 379,
    "y": 810,
    "realX": 379,
    "realY": 214,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf": {
    "id": "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf",
    "stallId": "9eec40d9-de2f-49c4-931d-cf7743d23fcf",
    "name": "Es Dawet Telasih Nganeni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 669,
    "y": 812,
    "realX": 669,
    "realY": 212,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf": {
    "id": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "stallId": "9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "name": "Kios UD Hasil Buah Sutrisno BG",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 477,
    "y": 783,
    "realX": 477,
    "realY": 241,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef65e28-b53c-4832-8d7f-577191b66c7d": {
    "id": "n_9ef65e28-b53c-4832-8d7f-577191b66c7d",
    "stallId": "9ef65e28-b53c-4832-8d7f-577191b66c7d",
    "name": "Kios Oleh Oleh Bu Siti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 553,
    "y": 812,
    "realX": 553,
    "realY": 212,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4ab02-c883-4250-836f-6045b967b4a7": {
    "id": "n_9ef4ab02-c883-4250-836f-6045b967b4a7",
    "stallId": "9ef4ab02-c883-4250-836f-6045b967b4a7",
    "name": "Oprokan Bapak Suharno",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 829,
    "realX": 291,
    "realY": 195,
    "type": "stall",
    "category": "perkakas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5f77-652b-4098-b4d1-ba4a37c4f70d": {
    "id": "n_9eec5f77-652b-4098-b4d1-ba4a37c4f70d",
    "stallId": "9eec5f77-652b-4098-b4d1-ba4a37c4f70d",
    "name": "Oprokan Buah Tante Bella",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 432,
    "y": 731,
    "realX": 432,
    "realY": 293,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5": {
    "id": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "stallId": "9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "name": "Oprokan Bp Sarmo 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 756,
    "realX": 291,
    "realY": 268,
    "type": "stall",
    "category": "tekstil",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef600f4-e452-42c5-9c2b-2d1746b471b3": {
    "id": "n_9ef600f4-e452-42c5-9c2b-2d1746b471b3",
    "stallId": "9ef600f4-e452-42c5-9c2b-2d1746b471b3",
    "name": "Gempol Pleret & Dawet Telasih Bu Yami",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 780,
    "realX": 262,
    "realY": 244,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723": {
    "id": "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
    "stallId": "9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
    "name": "Oprokan Bu Sutinah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 756,
    "realX": 291,
    "realY": 268,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f025096-89fd-4467-a0c9-b532f98011c6": {
    "id": "n_9f025096-89fd-4467-a0c9-b532f98011c6",
    "stallId": "9f025096-89fd-4467-a0c9-b532f98011c6",
    "name": "Oprokan Bu Suharni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 411,
    "y": 783,
    "realX": 411,
    "realY": 241,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24": {
    "id": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "stallId": "9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "name": "Kios Oprokan Bu Ninuk Darmayanti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 382,
    "y": 747,
    "realX": 382,
    "realY": 277,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41408-904d-4848-9bc5-f286b4716233": {
    "id": "n_9ef41408-904d-4848-9bc5-f286b4716233",
    "stallId": "9ef41408-904d-4848-9bc5-f286b4716233",
    "name": "Kios Oprokan Bu Parto",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 393,
    "y": 698,
    "realX": 393,
    "realY": 326,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f0235ec-d630-40e3-97cd-ed161e21d640": {
    "id": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
    "stallId": "9f0235ec-d630-40e3-97cd-ed161e21d640",
    "name": "Oprokan Bu Marsi",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 382,
    "y": 747,
    "realX": 382,
    "realY": 277,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f023d25-a930-4e11-9d2a-30c7da403dc4": {
    "id": "n_9f023d25-a930-4e11-9d2a-30c7da403dc4",
    "stallId": "9f023d25-a930-4e11-9d2a-30c7da403dc4",
    "name": "Oprokan Bu Suparti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 336,
    "y": 873,
    "realX": 336,
    "realY": 151,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec47d1-2f39-495f-8738-0f70866c325f": {
    "id": "n_9eec47d1-2f39-495f-8738-0f70866c325f",
    "stallId": "9eec47d1-2f39-495f-8738-0f70866c325f",
    "name": "UD Grosir Buah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 730,
    "y": 842,
    "realX": 730,
    "realY": 182,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec46a2-56c9-4caa-a762-7c07686f9651": {
    "id": "n_9eec46a2-56c9-4caa-a762-7c07686f9651",
    "stallId": "9eec46a2-56c9-4caa-a762-7c07686f9651",
    "name": "Spesial Usor-Usor Ratno Group",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 560,
    "y": 784,
    "realX": 560,
    "realY": 240,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f022b9a-08d9-4d89-bbfb-45854faec907": {
    "id": "n_9f022b9a-08d9-4d89-bbfb-45854faec907",
    "stallId": "9f022b9a-08d9-4d89-bbfb-45854faec907",
    "name": "Kios Bu Kus",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 620,
    "y": 784,
    "realX": 620,
    "realY": 240,
    "type": "stall",
    "category": "tekstil",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef458d2-4832-4b1a-8a33-6257c714b266": {
    "id": "n_9ef458d2-4832-4b1a-8a33-6257c714b266",
    "stallId": "9ef458d2-4832-4b1a-8a33-6257c714b266",
    "name": "Oprokan Ibu Winarti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 518,
    "y": 615,
    "realX": 518,
    "realY": 409,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec81e5-f94f-4a9f-afb0-f27274419417": {
    "id": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "stallId": "9eec81e5-f94f-4a9f-afb0-f27274419417",
    "name": "Lenjongan Bu Sum 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 521,
    "y": 796,
    "realX": 521,
    "realY": 228,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d": {
    "id": "n_9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
    "stallId": "9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
    "name": "Rani Snack",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 397,
    "y": 553,
    "realX": 397,
    "realY": 471,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5a3b-c76b-446a-93ed-c3ffc3942461": {
    "id": "n_9eec5a3b-c76b-446a-93ed-c3ffc3942461",
    "stallId": "9eec5a3b-c76b-446a-93ed-c3ffc3942461",
    "name": "Kios Guritno Chandra",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 513,
    "realX": 291,
    "realY": 511,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5273-27e9-4d33-a4ba-d701064346d2": {
    "id": "n_9eec5273-27e9-4d33-a4ba-d701064346d2",
    "stallId": "9eec5273-27e9-4d33-a4ba-d701064346d2",
    "name": "Dawet Mbah Harso",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 484,
    "y": 614,
    "realX": 484,
    "realY": 410,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec5da1-1dcf-4479-ba95-ac1cd8bf58aa": {
    "id": "n_9eec5da1-1dcf-4479-ba95-ac1cd8bf58aa",
    "stallId": "9eec5da1-1dcf-4479-ba95-ac1cd8bf58aa",
    "name": "Es Dawet Bu Yatik",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 479,
    "y": 698,
    "realX": 479,
    "realY": 326,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec4da4-f111-434b-bbd0-9d4b8bf45a7d": {
    "id": "n_9eec4da4-f111-434b-bbd0-9d4b8bf45a7d",
    "stallId": "9eec4da4-f111-434b-bbd0-9d4b8bf45a7d",
    "name": "Kios Sabar Menanti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 557,
    "y": 223,
    "realX": 557,
    "realY": 801,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d": {
    "id": "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
    "stallId": "9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
    "name": "Oprokan Ibu Karsi",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 381,
    "realX": 519,
    "realY": 643,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec8be9-d219-4d39-b529-2fa1b20f676e": {
    "id": "n_9eec8be9-d219-4d39-b529-2fa1b20f676e",
    "stallId": "9eec8be9-d219-4d39-b529-2fa1b20f676e",
    "name": "Oprokan Ibu Nurnaini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 544,
    "y": 714,
    "realX": 544,
    "realY": 310,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef46778-f72e-48d9-8638-d52495270de4": {
    "id": "n_9ef46778-f72e-48d9-8638-d52495270de4",
    "stallId": "9ef46778-f72e-48d9-8638-d52495270de4",
    "name": "Oprokan Ibu Warsini Ayam",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 517,
    "realX": 519,
    "realY": 507,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5": {
    "id": "n_9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
    "stallId": "9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
    "name": "Oprokan Ibu ngadiyem",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 417,
    "realX": 519,
    "realY": 607,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef46046-3cb9-4eb9-ac80-316d5ede1524": {
    "id": "n_9ef46046-3cb9-4eb9-ac80-316d5ede1524",
    "stallId": "9ef46046-3cb9-4eb9-ac80-316d5ede1524",
    "name": "Oprokan Ibu Warti Ayam Potong 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 566,
    "realX": 519,
    "realY": 458,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef20631-101c-4286-9207-fd69cbea56ca": {
    "id": "n_9ef20631-101c-4286-9207-fd69cbea56ca",
    "stallId": "9ef20631-101c-4286-9207-fd69cbea56ca",
    "name": "Oprokan Ibu Tatik",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 544,
    "y": 714,
    "realX": 544,
    "realY": 310,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec493f-2521-41c2-825f-01dcea8ca9e9": {
    "id": "n_9eec493f-2521-41c2-825f-01dcea8ca9e9",
    "stallId": "9eec493f-2521-41c2-825f-01dcea8ca9e9",
    "name": "Kios Koh Po",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 411,
    "y": 517,
    "realX": 411,
    "realY": 507,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3f9a-197f-45b4-bd44-47e2aadc8720": {
    "id": "n_9eec3f9a-197f-45b4-bd44-47e2aadc8720",
    "stallId": "9eec3f9a-197f-45b4-bd44-47e2aadc8720",
    "name": "Toko Bu Narti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 477,
    "y": 467,
    "realX": 477,
    "realY": 557,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f028647-8a91-4784-b238-3f6a5df45948": {
    "id": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "stallId": "9f028647-8a91-4784-b238-3f6a5df45948",
    "name": "Warung Makan Mbak Dewi",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 670,
    "y": 223,
    "realX": 670,
    "realY": 801,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5": {
    "id": "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
    "stallId": "9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
    "name": "Los Sayur Bu Sayekti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 655,
    "y": 223,
    "realX": 655,
    "realY": 801,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef29ce8-d70e-482e-b888-008b68cc8102": {
    "id": "n_9ef29ce8-d70e-482e-b888-008b68cc8102",
    "stallId": "9ef29ce8-d70e-482e-b888-008b68cc8102",
    "name": "Ayam Goreng Bu Mukini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 574,
    "y": 223,
    "realX": 574,
    "realY": 801,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec46bc-9f36-49ad-952f-991f14056920": {
    "id": "n_9eec46bc-9f36-49ad-952f-991f14056920",
    "stallId": "9eec46bc-9f36-49ad-952f-991f14056920",
    "name": "Kios Pak Mul Sayur",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 374,
    "y": 448,
    "realX": 374,
    "realY": 576,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef43435-8fd9-45cd-8998-6ab71d531e51": {
    "id": "n_9ef43435-8fd9-45cd-8998-6ab71d531e51",
    "stallId": "9ef43435-8fd9-45cd-8998-6ab71d531e51",
    "name": "Cak We Hoo",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 436,
    "y": 124,
    "realX": 436,
    "realY": 900,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec4e2c-2553-4216-b367-a001f647573b": {
    "id": "n_9eec4e2c-2553-4216-b367-a001f647573b",
    "stallId": "9eec4e2c-2553-4216-b367-a001f647573b",
    "name": "Kios Bu Eni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 484,
    "y": 499,
    "realX": 484,
    "realY": 525,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5921-981f-4764-b519-cdd8d3c8f4d5": {
    "id": "n_9eec5921-981f-4764-b519-cdd8d3c8f4d5",
    "stallId": "9eec5921-981f-4764-b519-cdd8d3c8f4d5",
    "name": "Kios Widji Snack",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 268,
    "realX": 291,
    "realY": 756,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4ba7-f054-46ba-8480-80392ae053cb": {
    "id": "n_9eec4ba7-f054-46ba-8480-80392ae053cb",
    "stallId": "9eec4ba7-f054-46ba-8480-80392ae053cb",
    "name": "Pusat Jajan Bursa Rasa",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 370,
    "y": 517,
    "realX": 370,
    "realY": 507,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef43c55-ea07-4036-ad75-bd47d82123cc": {
    "id": "n_9ef43c55-ea07-4036-ad75-bd47d82123cc",
    "stallId": "9ef43c55-ea07-4036-ad75-bd47d82123cc",
    "name": "Kios Oleh-oleh Bu Mukini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 558,
    "y": 270,
    "realX": 558,
    "realY": 754,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f0284a3-d404-4556-b098-336f9ab8e66c": {
    "id": "n_9f0284a3-d404-4556-b098-336f9ab8e66c",
    "stallId": "9f0284a3-d404-4556-b098-336f9ab8e66c",
    "name": "Ayam Kampung Bu Sri",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 624,
    "y": 223,
    "realX": 624,
    "realY": 801,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef42f70-e661-425d-8c50-d58b4d3cafb0": {
    "id": "n_9ef42f70-e661-425d-8c50-d58b4d3cafb0",
    "stallId": "9ef42f70-e661-425d-8c50-d58b4d3cafb0",
    "name": "Kios UD Uzhie 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 523,
    "y": 874,
    "realX": 523,
    "realY": 150,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec378f-3ff2-44ac-b695-059ecb43a7f5": {
    "id": "n_9eec378f-3ff2-44ac-b695-059ecb43a7f5",
    "stallId": "9eec378f-3ff2-44ac-b695-059ecb43a7f5",
    "name": "Toko Bu Sri Sugiarti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 493,
    "y": 355,
    "realX": 493,
    "realY": 669,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3525-a85d-4b5b-9c53-f43f3735b77d": {
    "id": "n_9eec3525-a85d-4b5b-9c53-f43f3735b77d",
    "stallId": "9eec3525-a85d-4b5b-9c53-f43f3735b77d",
    "name": "Dua Putri Solo",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 463,
    "y": 290,
    "realX": 463,
    "realY": 734,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec308f-113a-45aa-9abe-4a5c18ac0ed9": {
    "id": "n_9eec308f-113a-45aa-9abe-4a5c18ac0ed9",
    "stallId": "9eec308f-113a-45aa-9abe-4a5c18ac0ed9",
    "name": "Kios Bu Daryanti 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 555,
    "y": 333,
    "realX": 555,
    "realY": 691,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec2db5-90f3-4401-99b1-64949e2d0957": {
    "id": "n_9eec2db5-90f3-4401-99b1-64949e2d0957",
    "stallId": "9eec2db5-90f3-4401-99b1-64949e2d0957",
    "name": "Kios Ibu Mulyani",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 473,
    "y": 224,
    "realX": 473,
    "realY": 800,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef42bb0-a4c8-43ba-85dd-13f7c4de9cd5": {
    "id": "n_9ef42bb0-a4c8-43ba-85dd-13f7c4de9cd5",
    "stallId": "9ef42bb0-a4c8-43ba-85dd-13f7c4de9cd5",
    "name": "Rizkiana Buah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 634,
    "y": 900,
    "realX": 634,
    "realY": 124,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f028c63-a19b-4dfa-866a-ec6d88af881e": {
    "id": "n_9f028c63-a19b-4dfa-866a-ec6d88af881e",
    "stallId": "9f028c63-a19b-4dfa-866a-ec6d88af881e",
    "name": "Bandeng & Daun Pisang Bu Surayem",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 477,
    "y": 205,
    "realX": 477,
    "realY": 819,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3ca1-7cf8-4742-b23f-504d2a910ed9": {
    "id": "n_9eec3ca1-7cf8-4742-b23f-504d2a910ed9",
    "stallId": "9eec3ca1-7cf8-4742-b23f-504d2a910ed9",
    "name": "Kios Pak Man",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 480,
    "y": 389,
    "realX": 480,
    "realY": 635,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef425dc-26ef-44b7-a265-5899feef30b7": {
    "id": "n_9ef425dc-26ef-44b7-a265-5899feef30b7",
    "stallId": "9ef425dc-26ef-44b7-a265-5899feef30b7",
    "name": "Toko Dhira",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 432,
    "y": 900,
    "realX": 432,
    "realY": 124,
    "type": "stall",
    "category": "fashion",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41fd9-f7c3-4b41-8f79-d40040194a5c": {
    "id": "n_9ef41fd9-f7c3-4b41-8f79-d40040194a5c",
    "stallId": "9ef41fd9-f7c3-4b41-8f79-d40040194a5c",
    "name": "UD Eka Sari",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 829,
    "realX": 291,
    "realY": 195,
    "type": "stall",
    "category": "service",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3e98-c6c5-47a0-8a0f-70576cf08665": {
    "id": "n_9eec3e98-c6c5-47a0-8a0f-70576cf08665",
    "stallId": "9eec3e98-c6c5-47a0-8a0f-70576cf08665",
    "name": "Kios Bu Ponirah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 403,
    "y": 399,
    "realX": 403,
    "realY": 625,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef29eb0-2314-43d9-b495-5dba98d84e95": {
    "id": "n_9ef29eb0-2314-43d9-b495-5dba98d84e95",
    "stallId": "9ef29eb0-2314-43d9-b495-5dba98d84e95",
    "name": "Ayam Goreng Mbak Siti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 595,
    "y": 289,
    "realX": 595,
    "realY": 735,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec3107-c317-452c-82f6-29cc2dd82115": {
    "id": "n_9eec3107-c317-452c-82f6-29cc2dd82115",
    "stallId": "9eec3107-c317-452c-82f6-29cc2dd82115",
    "name": "Kios Berkat Sesami 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 680,
    "y": 333,
    "realX": 680,
    "realY": 691,
    "type": "stall",
    "category": "perkakas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec34d8-ee57-4d57-ae93-a1828257cb45": {
    "id": "n_9eec34d8-ee57-4d57-ae93-a1828257cb45",
    "stallId": "9eec34d8-ee57-4d57-ae93-a1828257cb45",
    "name": "Kios Bu Daryanti 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 614,
    "y": 391,
    "realX": 614,
    "realY": 633,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5b63-618d-47af-949e-1bf25c595cdc": {
    "id": "n_9eec5b63-618d-47af-949e-1bf25c595cdc",
    "stallId": "9eec5b63-618d-47af-949e-1bf25c595cdc",
    "name": "Kios Gerabatan",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 672,
    "realX": 291,
    "realY": 352,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef43fcd-61cc-445e-bf44-9be2feefb8f8": {
    "id": "n_9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
    "stallId": "9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
    "name": "Oprokan Bu Wahyuni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 530,
    "y": 219,
    "realX": 530,
    "realY": 805,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef29dea-c489-4e46-81d9-93fbacb6aedc": {
    "id": "n_9ef29dea-c489-4e46-81d9-93fbacb6aedc",
    "stallId": "9ef29dea-c489-4e46-81d9-93fbacb6aedc",
    "name": "Kios Oleh-Oleh Mbak Ririn",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 641,
    "y": 289,
    "realX": 641,
    "realY": 735,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f02c559-6a1c-4dce-9930-267b455913ef": {
    "id": "n_9f02c559-6a1c-4dce-9930-267b455913ef",
    "stallId": "9f02c559-6a1c-4dce-9930-267b455913ef",
    "name": "Kios Bu Veve 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 431,
    "y": 517,
    "realX": 431,
    "realY": 507,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41a7b-728f-41b1-835f-157d68a046c2": {
    "id": "n_9ef41a7b-728f-41b1-835f-157d68a046c2",
    "stallId": "9ef41a7b-728f-41b1-835f-157d68a046c2",
    "name": "MD Buah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 693,
    "realX": 262,
    "realY": 331,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef43c82-5745-43da-9a3f-1df23a31f580": {
    "id": "n_9ef43c82-5745-43da-9a3f-1df23a31f580",
    "stallId": "9ef43c82-5745-43da-9a3f-1df23a31f580",
    "name": "Toko Pak Slamet",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 762,
    "y": 375,
    "realX": 762,
    "realY": 649,
    "type": "stall",
    "category": "kerajinan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec35f7-3089-4c32-abaf-364d5ca702ca": {
    "id": "n_9eec35f7-3089-4c32-abaf-364d5ca702ca",
    "stallId": "9eec35f7-3089-4c32-abaf-364d5ca702ca",
    "name": "Kios Makbenk 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 736,
    "y": 423,
    "realX": 736,
    "realY": 601,
    "type": "stall",
    "category": "perkakas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a": {
    "id": "n_9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a",
    "stallId": "9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a",
    "name": "Kios Jamu Bu Wahyuni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 415,
    "y": 225,
    "realX": 415,
    "realY": 799,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec310c-70f4-4bd0-990d-3faaf7921fa6": {
    "id": "n_9eec310c-70f4-4bd0-990d-3faaf7921fa6",
    "stallId": "9eec310c-70f4-4bd0-990d-3faaf7921fa6",
    "name": "Kios Jamu Bu Widarsih",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 409,
    "y": 271,
    "realX": 409,
    "realY": 753,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5835-ae8a-444d-8e2e-30ad85e21688": {
    "id": "n_9eec5835-ae8a-444d-8e2e-30ad85e21688",
    "stallId": "9eec5835-ae8a-444d-8e2e-30ad85e21688",
    "name": "Tahu Bandung Afif",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 548,
    "y": 499,
    "realX": 548,
    "realY": 525,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f041129-173e-44e5-8da6-2be7c21d0bea": {
    "id": "n_9f041129-173e-44e5-8da6-2be7c21d0bea",
    "stallId": "9f041129-173e-44e5-8da6-2be7c21d0bea",
    "name": "Ayam Goreng Bu Poppy",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 613,
    "y": 289,
    "realX": 613,
    "realY": 735,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef3f5c6-9924-44b8-975c-3f59c93577ba": {
    "id": "n_9ef3f5c6-9924-44b8-975c-3f59c93577ba",
    "stallId": "9ef3f5c6-9924-44b8-975c-3f59c93577ba",
    "name": "Kios Bu Catur",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 597,
    "y": 449,
    "realX": 597,
    "realY": 575,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f02a372-defa-4ac0-891c-f00311bf5192": {
    "id": "n_9f02a372-defa-4ac0-891c-f00311bf5192",
    "stallId": "9f02a372-defa-4ac0-891c-f00311bf5192",
    "name": "Kios Bu Jum Telur",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 680,
    "y": 355,
    "realX": 680,
    "realY": 669,
    "type": "stall",
    "category": "telur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec38ed-4c60-42b3-9db6-f92840261624": {
    "id": "n_9eec38ed-4c60-42b3-9db6-f92840261624",
    "stallId": "9eec38ed-4c60-42b3-9db6-f92840261624",
    "name": "Kios Bu Yayuk 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 359,
    "y": 389,
    "realX": 359,
    "realY": 635,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef3f81f-8371-4804-bd1a-7a4b2a92a09d": {
    "id": "n_9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
    "stallId": "9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
    "name": "Kios Ibu Dal",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 570,
    "y": 449,
    "realX": 570,
    "realY": 575,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04457e-9e1a-416d-a0e3-d7a83426bf57": {
    "id": "n_9f04457e-9e1a-416d-a0e3-d7a83426bf57",
    "stallId": "9f04457e-9e1a-416d-a0e3-d7a83426bf57",
    "name": "Kios Bu Partini 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 596,
    "y": 573,
    "realX": 596,
    "realY": 451,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef402e4-4f80-4eee-bd9d-9bfcbec874fd": {
    "id": "n_9ef402e4-4f80-4eee-bd9d-9bfcbec874fd",
    "stallId": "9ef402e4-4f80-4eee-bd9d-9bfcbec874fd",
    "name": "Kios Bu Wiwin 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 668,
    "y": 615,
    "realX": 668,
    "realY": 409,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f0424ff-2689-4922-a15d-e0b2c4ad6f39": {
    "id": "n_9f0424ff-2689-4922-a15d-e0b2c4ad6f39",
    "stallId": "9f0424ff-2689-4922-a15d-e0b2c4ad6f39",
    "name": "Los Bu Sarni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 617,
    "y": 517,
    "realX": 617,
    "realY": 507,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41a00-bddb-4d7b-ba21-c09d9600a459": {
    "id": "n_9ef41a00-bddb-4d7b-ba21-c09d9600a459",
    "stallId": "9ef41a00-bddb-4d7b-ba21-c09d9600a459",
    "name": "Toko Sabar Subur",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 596,
    "realX": 262,
    "realY": 428,
    "type": "stall",
    "category": "kerajinan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1": {
    "id": "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1",
    "stallId": "9ef4131c-f2ad-4d23-b754-98c0712cebd1",
    "name": "UD Tanti 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 722,
    "realX": 262,
    "realY": 302,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef41903-2f5c-4eab-b8d4-bdb0846b37db": {
    "id": "n_9ef41903-2f5c-4eab-b8d4-bdb0846b37db",
    "stallId": "9ef41903-2f5c-4eab-b8d4-bdb0846b37db",
    "name": "Toko Rukun Baru",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 381,
    "realX": 262,
    "realY": 643,
    "type": "stall",
    "category": "kerajinan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04167c-11e9-43c8-b3df-e10c93aed77f": {
    "id": "n_9f04167c-11e9-43c8-b3df-e10c93aed77f",
    "stallId": "9f04167c-11e9-43c8-b3df-e10c93aed77f",
    "name": "Oprokan Buah Bu Nanit",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 446,
    "y": 783,
    "realX": 446,
    "realY": 241,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3892-7cee-4816-af43-dd4b1000e78c": {
    "id": "n_9eec3892-7cee-4816-af43-dd4b1000e78c",
    "stallId": "9eec3892-7cee-4816-af43-dd4b1000e78c",
    "name": "Jenang Dodol Bu Murni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 662,
    "y": 468,
    "realX": 662,
    "realY": 556,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9f044dd6-50c4-4a00-8d41-f7236a1510f2": {
    "id": "n_9f044dd6-50c4-4a00-8d41-f7236a1510f2",
    "stallId": "9f044dd6-50c4-4a00-8d41-f7236a1510f2",
    "name": "Kios Mbak Rani Sembako",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 736,
    "y": 563,
    "realX": 736,
    "realY": 461,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec381f-5274-4161-80f7-4e699eac0e46": {
    "id": "n_9eec381f-5274-4161-80f7-4e699eac0e46",
    "stallId": "9eec381f-5274-4161-80f7-4e699eac0e46",
    "name": "Kios Ibu Sartini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 561,
    "y": 468,
    "realX": 561,
    "realY": 556,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef657c0-df64-4788-8c53-46c926b8ba6d": {
    "id": "n_9ef657c0-df64-4788-8c53-46c926b8ba6d",
    "stallId": "9ef657c0-df64-4788-8c53-46c926b8ba6d",
    "name": "Los Bu Tritunggal",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 573,
    "realX": 519,
    "realY": 451,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4985-1d89-4358-b5ba-2b7ceb84dacb": {
    "id": "n_9eec4985-1d89-4358-b5ba-2b7ceb84dacb",
    "stallId": "9eec4985-1d89-4358-b5ba-2b7ceb84dacb",
    "name": "Kios Oleh Oleh Bu Saji 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 598,
    "y": 642,
    "realX": 598,
    "realY": 382,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4a9a-9433-4f7b-bcbe-17db83ae8b54": {
    "id": "n_9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
    "stallId": "9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
    "name": "Jamu Bu Fitri",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 551,
    "y": 553,
    "realX": 551,
    "realY": 471,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72": {
    "id": "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72",
    "stallId": "9f042a6b-39f8-4337-a1f1-bd728ff89b72",
    "name": "Los Bu Sugianti",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 675,
    "y": 517,
    "realX": 675,
    "realY": 507,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f0429c7-ef47-4b3b-afcc-3ab832af596f": {
    "id": "n_9f0429c7-ef47-4b3b-afcc-3ab832af596f",
    "stallId": "9f0429c7-ef47-4b3b-afcc-3ab832af596f",
    "name": "Los Bu Tumini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 647,
    "y": 517,
    "realX": 647,
    "realY": 507,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491": {
    "id": "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
    "stallId": "9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
    "name": "Karak Solo Kevani 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 611,
    "y": 729,
    "realX": 611,
    "realY": 295,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec51e3-a665-453d-b51e-141c21e8affb": {
    "id": "n_9eec51e3-a665-453d-b51e-141c21e8affb",
    "stallId": "9eec51e3-a665-453d-b51e-141c21e8affb",
    "name": "Kios Bu Partini 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 462,
    "y": 573,
    "realX": 462,
    "realY": 451,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef42de0-2728-4d95-9266-ededfeb06d8f": {
    "id": "n_9ef42de0-2728-4d95-9266-ededfeb06d8f",
    "stallId": "9ef42de0-2728-4d95-9266-ededfeb06d8f",
    "name": "Toko Bu Nita",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 381,
    "y": 124,
    "realX": 381,
    "realY": 900,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f047a55-3030-4668-a3fe-c99dc724bda2": {
    "id": "n_9f047a55-3030-4668-a3fe-c99dc724bda2",
    "stallId": "9f047a55-3030-4668-a3fe-c99dc724bda2",
    "name": "Kios Bu Veve 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 427,
    "y": 553,
    "realX": 427,
    "realY": 471,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d": {
    "id": "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d",
    "stallId": "9eec42bc-b3b4-476d-8fae-f7860e927c9d",
    "name": "Dawet Telasih Bu Nur",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 588,
    "y": 812,
    "realX": 588,
    "realY": 212,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef40a61-6906-441e-ae49-124f2ecae71f": {
    "id": "n_9ef40a61-6906-441e-ae49-124f2ecae71f",
    "stallId": "9ef40a61-6906-441e-ae49-124f2ecae71f",
    "name": "Kios Telur Mbak Etik",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 560,
    "y": 729,
    "realX": 560,
    "realY": 295,
    "type": "stall",
    "category": "telur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f045211-e8ff-4de9-9af7-a331e4ef8fbf": {
    "id": "n_9f045211-e8ff-4de9-9af7-a331e4ef8fbf",
    "stallId": "9f045211-e8ff-4de9-9af7-a331e4ef8fbf",
    "name": "Kios Bu Lestari",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 577,
    "y": 729,
    "realX": 577,
    "realY": 295,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f047b2d-89fe-499e-9e0b-4171a7a22adf": {
    "id": "n_9f047b2d-89fe-499e-9e0b-4171a7a22adf",
    "stallId": "9f047b2d-89fe-499e-9e0b-4171a7a22adf",
    "name": "Kios Bu Susi",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 481,
    "y": 553,
    "realX": 481,
    "realY": 471,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef856f6-4aaa-4051-9efc-df3b620afb8e": {
    "id": "n_9ef856f6-4aaa-4051-9efc-df3b620afb8e",
    "stallId": "9ef856f6-4aaa-4051-9efc-df3b620afb8e",
    "name": "Oprokan Bu Warni",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 829,
    "realX": 291,
    "realY": 195,
    "type": "stall",
    "category": "perkakas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9": {
    "id": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "stallId": "9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "name": "Warung Babi Mini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 751,
    "realX": 262,
    "realY": 273,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef419bb-3a9f-4824-bd0f-aab317663654": {
    "id": "n_9ef419bb-3a9f-4824-bd0f-aab317663654",
    "stallId": "9ef419bb-3a9f-4824-bd0f-aab317663654",
    "name": "Toko KGH",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 262,
    "y": 539,
    "realX": 262,
    "realY": 485,
    "type": "stall",
    "category": "kerajinan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec5e21-534d-4f67-af99-cb0bc85b5203": {
    "id": "n_9eec5e21-534d-4f67-af99-cb0bc85b5203",
    "stallId": "9eec5e21-534d-4f67-af99-cb0bc85b5203",
    "name": "Kios Oprokan TM Buah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 382,
    "y": 747,
    "realX": 382,
    "realY": 277,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef299f5-c381-44d8-8aea-de1e241f4122": {
    "id": "n_9ef299f5-c381-44d8-8aea-de1e241f4122",
    "stallId": "9ef299f5-c381-44d8-8aea-de1e241f4122",
    "name": "Hj Yatik JTK/YS Buah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 455,
    "y": 873,
    "realX": 455,
    "realY": 151,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4429f-b4c4-48da-a29e-2ca7bf6f6ea0": {
    "id": "n_9ef4429f-b4c4-48da-a29e-2ca7bf6f6ea0",
    "stallId": "9ef4429f-b4c4-48da-a29e-2ca7bf6f6ea0",
    "name": "Genduk Buah 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 652,
    "y": 124,
    "realX": 652,
    "realY": 900,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec53a4-e754-4833-a3d3-c655d67f3ead": {
    "id": "n_9eec53a4-e754-4833-a3d3-c655d67f3ead",
    "stallId": "9eec53a4-e754-4833-a3d3-c655d67f3ead",
    "name": "Roso Mulyo",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 356,
    "y": 641,
    "realX": 356,
    "realY": 383,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec4442-2ba6-471f-baf7-daf6334ae39e": {
    "id": "n_9eec4442-2ba6-471f-baf7-daf6334ae39e",
    "stallId": "9eec4442-2ba6-471f-baf7-daf6334ae39e",
    "name": "Edi Buah",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 629,
    "y": 873,
    "realX": 629,
    "realY": 151,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec2a0c-67c6-45dd-b734-a727becf1428": {
    "id": "n_9eec2a0c-67c6-45dd-b734-a727becf1428",
    "stallId": "9eec2a0c-67c6-45dd-b734-a727becf1428",
    "name": "Toko Jamu Widodo",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 349,
    "y": 213,
    "realX": 349,
    "realY": 811,
    "type": "stall",
    "category": "jamu",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec3409-ab10-4942-ace9-64a81c099954": {
    "id": "n_9eec3409-ab10-4942-ace9-64a81c099954",
    "stallId": "9eec3409-ab10-4942-ace9-64a81c099954",
    "name": "Kios Berkat Sesami 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 736,
    "y": 353,
    "realX": 736,
    "realY": 671,
    "type": "stall",
    "category": "perkakas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec32cd-04eb-4fc3-a65e-fdce9f197285": {
    "id": "n_9eec32cd-04eb-4fc3-a65e-fdce9f197285",
    "stallId": "9eec32cd-04eb-4fc3-a65e-fdce9f197285",
    "name": "Toko Mee Lian 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 373,
    "y": 291,
    "realX": 373,
    "realY": 733,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec49e8-09d4-4d20-986d-a2aaf6f6fb9d": {
    "id": "n_9eec49e8-09d4-4d20-986d-a2aaf6f6fb9d",
    "stallId": "9eec49e8-09d4-4d20-986d-a2aaf6f6fb9d",
    "name": "Kios Bu Laminen",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 475,
    "y": 290,
    "realX": 475,
    "realY": 734,
    "type": "stall",
    "category": "sembako",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec36ca-247f-46e9-af16-2d11dcd45061": {
    "id": "n_9eec36ca-247f-46e9-af16-2d11dcd45061",
    "stallId": "9eec36ca-247f-46e9-af16-2d11dcd45061",
    "name": "Kios Bu Yayuk 1",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 427,
    "y": 355,
    "realX": 427,
    "realY": 669,
    "type": "stall",
    "category": "sayur",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f08b73c-8e45-4b48-bb0f-84e7414d40aa": {
    "id": "n_9f08b73c-8e45-4b48-bb0f-84e7414d40aa",
    "stallId": "9f08b73c-8e45-4b48-bb0f-84e7414d40aa",
    "name": "Mike Fruit",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 364,
    "y": 900,
    "realX": 364,
    "realY": 124,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef46666-dc6a-421a-9bd5-62bb53fdffd6": {
    "id": "n_9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
    "stallId": "9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
    "name": "Oprokan Ibu Warsini",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 519,
    "y": 509,
    "realX": 519,
    "realY": 515,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d": {
    "id": "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d",
    "stallId": "9ef4a7c0-4227-4678-bdad-f6299cb8040d",
    "name": "Kios Oprokan Ibu Yani Icha Snack",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 756,
    "realX": 291,
    "realY": 268,
    "type": "stall",
    "category": "camilan",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f103382-4086-4fb0-a264-fc6f6b99075e": {
    "id": "n_9f103382-4086-4fb0-a264-fc6f6b99075e",
    "stallId": "9f103382-4086-4fb0-a264-fc6f6b99075e",
    "name": "Es Dawet dan Gempol Pleret Bu Hj.Sipon 2",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 486,
    "y": 149,
    "realX": 486,
    "realY": 875,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef4a67c-641d-49e9-bab0-ac1fe15197bc": {
    "id": "n_9ef4a67c-641d-49e9-bab0-ac1fe15197bc",
    "stallId": "9ef4a67c-641d-49e9-bab0-ac1fe15197bc",
    "name": "Oprokan Ibu Tri Suyami",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 291,
    "y": 756,
    "realX": 291,
    "realY": 268,
    "type": "stall",
    "category": "telur",
    "accessible": true,
    "hasTactile": false
  },
  "n_ramp_pg_barat_1": {
    "id": "n_ramp_pg_barat_1",
    "stallId": "ramp_pg_barat_1",
    "name": "Ramp Aksesibel Barat (Ramah Kursi Roda)",
    "buildingId": "pasar-gede",
    "floor": 1,
    "x": 320,
    "y": 744,
    "realX": 320,
    "realY": 280,
    "type": "ramp",
    "category": "ramp",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec6afb-a7a3-4e69-98b7-20ea6ed1e149": {
    "id": "n_9eec6afb-a7a3-4e69-98b7-20ea6ed1e149",
    "stallId": "9eec6afb-a7a3-4e69-98b7-20ea6ed1e149",
    "name": "Warung Makan Mbak Tariza 2",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 511,
    "y": 791,
    "realX": 511,
    "realY": 233,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04975a-0937-4a20-8abc-3963d05c9e6a": {
    "id": "n_9f04975a-0937-4a20-8abc-3963d05c9e6a",
    "stallId": "9f04975a-0937-4a20-8abc-3963d05c9e6a",
    "name": "Los Slamet Ayam",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 314,
    "y": 899,
    "realX": 314,
    "realY": 125,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec0edd-49dd-438d-82f8-e25c57d5403e": {
    "id": "n_9eec0edd-49dd-438d-82f8-e25c57d5403e",
    "stallId": "9eec0edd-49dd-438d-82f8-e25c57d5403e",
    "name": "Kios Mbak Rani",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 584,
    "y": 124,
    "realX": 584,
    "realY": 900,
    "type": "stall",
    "category": "bunga",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04980d-5b62-4cc9-a09c-2acc0910f0cb": {
    "id": "n_9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
    "stallId": "9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
    "name": "Los Ayam Kampung Mbak Niken",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 365,
    "y": 789,
    "realX": 365,
    "realY": 235,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04a0a9-a037-4496-8fd1-a603db23a05e": {
    "id": "n_9f04a0a9-a037-4496-8fd1-a603db23a05e",
    "stallId": "9f04a0a9-a037-4496-8fd1-a603db23a05e",
    "name": "Los Daging Babi Pak Tomy",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 275,
    "y": 704,
    "realX": 275,
    "realY": 320,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6a19-c635-4bee-a825-27fabcfa9a2b": {
    "id": "n_9eec6a19-c635-4bee-a825-27fabcfa9a2b",
    "stallId": "9eec6a19-c635-4bee-a825-27fabcfa9a2b",
    "name": "Mie Ayam Lumayan 1",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 714,
    "y": 788,
    "realX": 714,
    "realY": 236,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6bb5-98a6-42af-aa54-1336290fbd58": {
    "id": "n_9eec6bb5-98a6-42af-aa54-1336290fbd58",
    "stallId": "9eec6bb5-98a6-42af-aa54-1336290fbd58",
    "name": "Ayam Kampung Hidup Bu Welas",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 262,
    "y": 871,
    "realX": 262,
    "realY": 153,
    "type": "stall",
    "category": "daging_unggas",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6b58-fb41-4d20-9c7f-66bb58e3fb41": {
    "id": "n_9eec6b58-fb41-4d20-9c7f-66bb58e3fb41",
    "stallId": "9eec6b58-fb41-4d20-9c7f-66bb58e3fb41",
    "name": "Warung Makan Bu Sri",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 644,
    "y": 279,
    "realX": 644,
    "realY": 745,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec69c7-f1d2-4a7a-b017-4b24037319a8": {
    "id": "n_9eec69c7-f1d2-4a7a-b017-4b24037319a8",
    "stallId": "9eec69c7-f1d2-4a7a-b017-4b24037319a8",
    "name": "Bakso Daging Sapi Asli Pak Wahyu Juventus",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 717,
    "y": 720,
    "realX": 717,
    "realY": 304,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6a4f-2f2a-4373-a021-f57f540a9f68": {
    "id": "n_9eec6a4f-2f2a-4373-a021-f57f540a9f68",
    "stallId": "9eec6a4f-2f2a-4373-a021-f57f540a9f68",
    "name": "Mie Ayam Lumayan 2",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 647,
    "y": 718,
    "realX": 647,
    "realY": 306,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f": {
    "id": "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
    "stallId": "9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
    "name": "Warung Makan Mbak Tariza 1",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 606,
    "y": 821,
    "realX": 606,
    "realY": 203,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6cd2-5803-4835-b361-d22831c4c613": {
    "id": "n_9eec6cd2-5803-4835-b361-d22831c4c613",
    "stallId": "9eec6cd2-5803-4835-b361-d22831c4c613",
    "name": "Bakso dan Soto Pasar Gedhe",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 534,
    "y": 843,
    "realX": 534,
    "realY": 181,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f049976-ebfc-4646-91a4-881ca68f8fb5": {
    "id": "n_9f049976-ebfc-4646-91a4-881ca68f8fb5",
    "stallId": "9f049976-ebfc-4646-91a4-881ca68f8fb5",
    "name": "Los 1 Cik Ing",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 406,
    "y": 736,
    "realX": 406,
    "realY": 288,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04a113-f905-4fac-8ecf-46f7ded9f0b7": {
    "id": "n_9f04a113-f905-4fac-8ecf-46f7ded9f0b7",
    "stallId": "9f04a113-f905-4fac-8ecf-46f7ded9f0b7",
    "name": "Los Daging Babi Pak Wawan",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 356,
    "y": 704,
    "realX": 356,
    "realY": 320,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef1f61d-e4f4-448b-b61a-f4136ee22f9c": {
    "id": "n_9ef1f61d-e4f4-448b-b61a-f4136ee22f9c",
    "stallId": "9ef1f61d-e4f4-448b-b61a-f4136ee22f9c",
    "name": "Warung Makan Bu Ndari",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 607,
    "y": 216,
    "realX": 607,
    "realY": 808,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f049a3d-d617-4f83-ac7f-7f81eec72a1b": {
    "id": "n_9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
    "stallId": "9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
    "name": "Los Elly Ikan Laut 1",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 263,
    "y": 748,
    "realX": 263,
    "realY": 276,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f0498b6-2816-499e-9ed8-5a2a16c2c660": {
    "id": "n_9f0498b6-2816-499e-9ed8-5a2a16c2c660",
    "stallId": "9f0498b6-2816-499e-9ed8-5a2a16c2c660",
    "name": "Los 2 Cik Ing",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 262,
    "y": 770,
    "realX": 262,
    "realY": 254,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04a177-700b-49fa-afbd-4b63f143984c": {
    "id": "n_9f04a177-700b-49fa-afbd-4b63f143984c",
    "stallId": "9f04a177-700b-49fa-afbd-4b63f143984c",
    "name": "Los Daging Babi Pak Caidi",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 267,
    "y": 626,
    "realX": 267,
    "realY": 398,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95": {
    "id": "n_9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
    "stallId": "9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
    "name": "Los Daging Babi Pak Sarjono",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 275,
    "y": 533,
    "realX": 275,
    "realY": 491,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f049ce2-7c93-4730-888c-195a747d22e9": {
    "id": "n_9f049ce2-7c93-4730-888c-195a747d22e9",
    "stallId": "9f049ce2-7c93-4730-888c-195a747d22e9",
    "name": "Los 1 Mbak Yatmini Ikan Laut",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 406,
    "y": 736,
    "realX": 406,
    "realY": 288,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04a95a-ee6f-43da-bbe1-7ea4f9caafe6": {
    "id": "n_9f04a95a-ee6f-43da-bbe1-7ea4f9caafe6",
    "stallId": "9f04a95a-ee6f-43da-bbe1-7ea4f9caafe6",
    "name": "Los Daging Sapi Bu Sumarni",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 356,
    "y": 438,
    "realX": 356,
    "realY": 586,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04a1f7-f165-4c82-9fc1-fce8471add60": {
    "id": "n_9f04a1f7-f165-4c82-9fc1-fce8471add60",
    "stallId": "9f04a1f7-f165-4c82-9fc1-fce8471add60",
    "name": "Los Daging Babi Pak Paino",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 360,
    "y": 634,
    "realX": 360,
    "realY": 390,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef48d41-2b49-47e3-bf0f-dbf0358dd45e": {
    "id": "n_9ef48d41-2b49-47e3-bf0f-dbf0358dd45e",
    "stallId": "9ef48d41-2b49-47e3-bf0f-dbf0358dd45e",
    "name": "Toilet",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 720,
    "y": 855,
    "realX": 720,
    "realY": 169,
    "type": "facility",
    "category": "toilet",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f049e0c-f04a-48cd-abaf-0cbc639fd2cc": {
    "id": "n_9f049e0c-f04a-48cd-abaf-0cbc639fd2cc",
    "stallId": "9f049e0c-f04a-48cd-abaf-0cbc639fd2cc",
    "name": "Los 2 Mbak Yatmini Ikan Laut",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 356,
    "y": 704,
    "realX": 356,
    "realY": 320,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04a31f-5b94-4c0b-b600-df6046cccbaa": {
    "id": "n_9f04a31f-5b94-4c0b-b600-df6046cccbaa",
    "stallId": "9f04a31f-5b94-4c0b-b600-df6046cccbaa",
    "name": "Los Daging Babi Pak Prapto",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 275,
    "y": 580,
    "realX": 275,
    "realY": 444,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef496b3-91cb-4db9-ac96-c746921e122b": {
    "id": "n_9ef496b3-91cb-4db9-ac96-c746921e122b",
    "stallId": "9ef496b3-91cb-4db9-ac96-c746921e122b",
    "name": "Tangga lt 2.1",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 708,
    "y": 242,
    "realX": 708,
    "realY": 782,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d": {
    "id": "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
    "stallId": "9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
    "name": "Los Daging Babi Pak Belong",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 356,
    "y": 533,
    "realX": 356,
    "realY": 491,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef49889-df5e-4811-9a3d-bb117f07a279": {
    "id": "n_9ef49889-df5e-4811-9a3d-bb117f07a279",
    "stallId": "9ef49889-df5e-4811-9a3d-bb117f07a279",
    "name": "Tangga lt 2.2",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 644,
    "y": 173,
    "realX": 644,
    "realY": 851,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec": {
    "id": "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
    "stallId": "9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
    "name": "Tangga lt 2.3",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 641,
    "y": 792,
    "realX": 641,
    "realY": 232,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9ef49ab9-5872-4559-9335-918f1400e167": {
    "id": "n_9ef49ab9-5872-4559-9335-918f1400e167",
    "stallId": "9ef49ab9-5872-4559-9335-918f1400e167",
    "name": "Tangga lt 2.4",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 511,
    "y": 208,
    "realX": 511,
    "realY": 816,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9f04ab45-cc90-4838-93ec-420fca235d3b": {
    "id": "n_9f04ab45-cc90-4838-93ec-420fca235d3b",
    "stallId": "9f04ab45-cc90-4838-93ec-420fca235d3b",
    "name": "Los Daging Sapi Bu Yayuk",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 275,
    "y": 438,
    "realX": 275,
    "realY": 586,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef49b98-0d91-484a-9874-4517d444aaba": {
    "id": "n_9ef49b98-0d91-484a-9874-4517d444aaba",
    "stallId": "9ef49b98-0d91-484a-9874-4517d444aaba",
    "name": "Tangga lt 2.5",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 642,
    "y": 634,
    "realX": 642,
    "realY": 390,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9ef5fae9-7343-42a9-9c58-cb3b356f509c": {
    "id": "n_9ef5fae9-7343-42a9-9c58-cb3b356f509c",
    "stallId": "9ef5fae9-7343-42a9-9c58-cb3b356f509c",
    "name": "Mushola",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 260,
    "y": 154,
    "realX": 260,
    "realY": 870,
    "type": "facility",
    "category": "mushola",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f049e71-96a9-4ddb-a40c-d1e461c7fb4f": {
    "id": "n_9f049e71-96a9-4ddb-a40c-d1e461c7fb4f",
    "stallId": "9f049e71-96a9-4ddb-a40c-d1e461c7fb4f",
    "name": "Los 3 Mbak Yatmini Ikan Laut",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 356,
    "y": 704,
    "realX": 356,
    "realY": 320,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04a47c-2dd6-4d11-9299-fe4f0b5c6690": {
    "id": "n_9f04a47c-2dd6-4d11-9299-fe4f0b5c6690",
    "stallId": "9f04a47c-2dd6-4d11-9299-fe4f0b5c6690",
    "name": "Los Daging Babi Pak Topo",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 356,
    "y": 580,
    "realX": 356,
    "realY": 444,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef5fa31-15d1-4210-8086-0e5d61329213": {
    "id": "n_9ef5fa31-15d1-4210-8086-0e5d61329213",
    "stallId": "9ef5fa31-15d1-4210-8086-0e5d61329213",
    "name": "Tangga lt 2.6",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 497,
    "y": 804,
    "realX": 497,
    "realY": 220,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9f04a834-bee5-4a41-a0af-cc24df403140": {
    "id": "n_9f04a834-bee5-4a41-a0af-cc24df403140",
    "stallId": "9f04a834-bee5-4a41-a0af-cc24df403140",
    "name": "Los Daging Babi Bu Yensen",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 356,
    "y": 512,
    "realX": 356,
    "realY": 512,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef5fde3-dc44-44eb-a7a4-91b92a0703d0": {
    "id": "n_9ef5fde3-dc44-44eb-a7a4-91b92a0703d0",
    "stallId": "9ef5fde3-dc44-44eb-a7a4-91b92a0703d0",
    "name": "TWK Tedjo Fruit",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 275,
    "y": 396,
    "realX": 275,
    "realY": 628,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef64093-3490-4df0-9689-2c0545c9dd24": {
    "id": "n_9ef64093-3490-4df0-9689-2c0545c9dd24",
    "stallId": "9ef64093-3490-4df0-9689-2c0545c9dd24",
    "name": "Pia-Pia dan Kompia Liling/Yohanes",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 356,
    "y": 396,
    "realX": 356,
    "realY": 628,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef64e4b-ca66-49a1-a98d-25a2c424592b": {
    "id": "n_9ef64e4b-ca66-49a1-a98d-25a2c424592b",
    "stallId": "9ef64e4b-ca66-49a1-a98d-25a2c424592b",
    "name": "Kios Gilingan Daging",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 563,
    "y": 900,
    "realX": 563,
    "realY": 124,
    "type": "stall",
    "category": "service",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f049c6f-8c21-491b-98c0-b55ff962e861": {
    "id": "n_9f049c6f-8c21-491b-98c0-b55ff962e861",
    "stallId": "9f049c6f-8c21-491b-98c0-b55ff962e861",
    "name": "Los Elly Ikan Laut 2",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 275,
    "y": 704,
    "realX": 275,
    "realY": 320,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04a508-0822-409b-b172-37e426d1e2ef": {
    "id": "n_9f04a508-0822-409b-b172-37e426d1e2ef",
    "stallId": "9f04a508-0822-409b-b172-37e426d1e2ef",
    "name": "Los Daging Babi Bu Tatik",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 275,
    "y": 555,
    "realX": 275,
    "realY": 469,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6979-b1b4-456f-b2f0-c744ea3553db": {
    "id": "n_9eec6979-b1b4-456f-b2f0-c744ea3553db",
    "stallId": "9eec6979-b1b4-456f-b2f0-c744ea3553db",
    "name": "Soto Senggol Bu Tutik",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 701,
    "y": 575,
    "realX": 701,
    "realY": 449,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f049f25-f553-4ab6-9306-533bbdfb1824": {
    "id": "n_9f049f25-f553-4ab6-9306-533bbdfb1824",
    "stallId": "9f049f25-f553-4ab6-9306-533bbdfb1824",
    "name": "Los Andreas 1",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 275,
    "y": 704,
    "realX": 275,
    "realY": 320,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f049fb1-0f51-4bf5-be07-1211adf43fb7": {
    "id": "n_9f049fb1-0f51-4bf5-be07-1211adf43fb7",
    "stallId": "9f049fb1-0f51-4bf5-be07-1211adf43fb7",
    "name": "Los Andreas 2",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 275,
    "y": 704,
    "realX": 275,
    "realY": 320,
    "type": "stall",
    "category": "seafood",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04a64c-2859-44eb-9f40-4b30ed5a6387": {
    "id": "n_9f04a64c-2859-44eb-9f40-4b30ed5a6387",
    "stallId": "9f04a64c-2859-44eb-9f40-4b30ed5a6387",
    "name": "Los Daging Babi Pak Agus",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 356,
    "y": 555,
    "realX": 356,
    "realY": 469,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec0e6e-21e8-426e-8d2a-2ae350959afa": {
    "id": "n_9eec0e6e-21e8-426e-8d2a-2ae350959afa",
    "stallId": "9eec0e6e-21e8-426e-8d2a-2ae350959afa",
    "name": "Kios Tari Bunga",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 480,
    "y": 124,
    "realX": 480,
    "realY": 900,
    "type": "stall",
    "category": "bunga",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef47632-a296-4da6-a001-937c7e7211ea": {
    "id": "n_9ef47632-a296-4da6-a001-937c7e7211ea",
    "stallId": "9ef47632-a296-4da6-a001-937c7e7211ea",
    "name": "Kios JR Fresh Fruits",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 668,
    "y": 124,
    "realX": 668,
    "realY": 900,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a": {
    "id": "n_9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a",
    "stallId": "9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a",
    "name": "Los Daging Sapi Bu Tatik",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 356,
    "y": 462,
    "realX": 356,
    "realY": 562,
    "type": "stall",
    "category": "daging_sapi",
    "accessible": true,
    "hasTactile": false
  },
  "n_ramp_pg_barat_2": {
    "id": "n_ramp_pg_barat_2",
    "stallId": "ramp_pg_barat_2",
    "name": "Ramp Aksesibel Barat Lt.2 (Turun ke Lt.1)",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 320,
    "y": 744,
    "realX": 320,
    "realY": 280,
    "type": "ramp",
    "category": "ramp",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec724e-484e-4623-a440-885d0a47aa1b": {
    "id": "n_9eec724e-484e-4623-a440-885d0a47aa1b",
    "stallId": "9eec724e-484e-4623-a440-885d0a47aa1b",
    "name": "Phe-Te 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 573,
    "y": 132,
    "realX": 573,
    "realY": 132,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6fc9-7571-48ed-820a-788abbe99bde": {
    "id": "n_9eec6fc9-7571-48ed-820a-788abbe99bde",
    "stallId": "9eec6fc9-7571-48ed-820a-788abbe99bde",
    "name": "Bu Poniyem",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 329,
    "y": 178,
    "realX": 329,
    "realY": 178,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7166-b510-4352-942b-3607561bbe34": {
    "id": "n_9eec7166-b510-4352-942b-3607561bbe34",
    "stallId": "9eec7166-b510-4352-942b-3607561bbe34",
    "name": "Mas Wandi 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 177,
    "y": 289,
    "realX": 177,
    "realY": 289,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6f54-9608-417f-b2f5-9e1823ce7e9e": {
    "id": "n_9eec6f54-9608-417f-b2f5-9e1823ce7e9e",
    "stallId": "9eec6f54-9608-417f-b2f5-9e1823ce7e9e",
    "name": "Paino",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 336,
    "y": 132,
    "realX": 336,
    "realY": 132,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec71d2-9f98-4e7b-8c78-b195370e92d9": {
    "id": "n_9eec71d2-9f98-4e7b-8c78-b195370e92d9",
    "stallId": "9eec71d2-9f98-4e7b-8c78-b195370e92d9",
    "name": "Mas Wandi",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 427,
    "y": 179,
    "realX": 427,
    "realY": 179,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7312-a674-4ef8-88d3-ec2ee6d39cc9": {
    "id": "n_9eec7312-a674-4ef8-88d3-ec2ee6d39cc9",
    "stallId": "9eec7312-a674-4ef8-88d3-ec2ee6d39cc9",
    "name": "WD",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 318,
    "y": 428,
    "realX": 318,
    "realY": 428,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec79bf-8e02-432f-b1e2-30b29fe42dcc": {
    "id": "n_9eec79bf-8e02-432f-b1e2-30b29fe42dcc",
    "stallId": "9eec79bf-8e02-432f-b1e2-30b29fe42dcc",
    "name": "Mangga Segar Pak Gepeng 4",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 291,
    "y": 524,
    "realX": 291,
    "realY": 524,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec779b-099f-4958-95e9-f07f89487c6d": {
    "id": "n_9eec779b-099f-4958-95e9-f07f89487c6d",
    "stallId": "9eec779b-099f-4958-95e9-f07f89487c6d",
    "name": "Mangga Segar Pak Gepeng 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 228,
    "y": 500,
    "realX": 228,
    "realY": 500,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec781c-53e5-41ff-84b7-3a72efb17a06": {
    "id": "n_9eec781c-53e5-41ff-84b7-3a72efb17a06",
    "stallId": "9eec781c-53e5-41ff-84b7-3a72efb17a06",
    "name": "Sumber Buah",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 343,
    "y": 500,
    "realX": 343,
    "realY": 500,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7c35-df71-4ab2-b35b-2af55185009a": {
    "id": "n_9eec7c35-df71-4ab2-b35b-2af55185009a",
    "stallId": "9eec7c35-df71-4ab2-b35b-2af55185009a",
    "name": "Mahkota Buah 4",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 315,
    "y": 641,
    "realX": 315,
    "realY": 641,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7b93-e713-4e6d-853c-d4ece2b56690": {
    "id": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "stallId": "9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "name": "Mahkota Buah 6",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 335,
    "y": 596,
    "realX": 335,
    "realY": 596,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7a6e-6209-4dac-995f-2a331361fbdf": {
    "id": "n_9eec7a6e-6209-4dac-995f-2a331361fbdf",
    "stallId": "9eec7a6e-6209-4dac-995f-2a331361fbdf",
    "name": "Mahkota Buah 7",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 335,
    "y": 572,
    "realX": 335,
    "realY": 572,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7b13-fda4-44c5-953a-dd36c58efcc8": {
    "id": "n_9eec7b13-fda4-44c5-953a-dd36c58efcc8",
    "stallId": "9eec7b13-fda4-44c5-953a-dd36c58efcc8",
    "name": "Mahkota Buah 9",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 399,
    "y": 570,
    "realX": 399,
    "realY": 570,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec772d-17a6-4cde-a235-77763ff5bcf4": {
    "id": "n_9eec772d-17a6-4cde-a235-77763ff5bcf4",
    "stallId": "9eec772d-17a6-4cde-a235-77763ff5bcf4",
    "name": "Mangga Segar Pak Gepeng 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 291,
    "y": 500,
    "realX": 291,
    "realY": 500,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec79e5-16b7-46f3-8d81-b05bb78ab888": {
    "id": "n_9eec79e5-16b7-46f3-8d81-b05bb78ab888",
    "stallId": "9eec79e5-16b7-46f3-8d81-b05bb78ab888",
    "name": "Mangga Segar Pak Gepeng 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 343,
    "y": 524,
    "realX": 343,
    "realY": 524,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7c8a-42c1-43a2-840a-a17f4a1538cf": {
    "id": "n_9eec7c8a-42c1-43a2-840a-a17f4a1538cf",
    "stallId": "9eec7c8a-42c1-43a2-840a-a17f4a1538cf",
    "name": "Mahkota Buah 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 361,
    "y": 652,
    "realX": 361,
    "realY": 652,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec82ba-42d5-4c46-a9b6-b678bbf2f825": {
    "id": "n_9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
    "stallId": "9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
    "name": "Pak Ratno",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 367,
    "y": 375,
    "realX": 367,
    "realY": 375,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec8142-bb2b-45d6-9d4d-07b7f4ae937b": {
    "id": "n_9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
    "stallId": "9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
    "name": "Sumadi Buah Murni 4",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 209,
    "y": 314,
    "realX": 209,
    "realY": 314,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec830c-6b6c-4bef-8ce4-7e0061f0987e": {
    "id": "n_9eec830c-6b6c-4bef-8ce4-7e0061f0987e",
    "stallId": "9eec830c-6b6c-4bef-8ce4-7e0061f0987e",
    "name": "Sumadi Buah Murni 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 264,
    "y": 351,
    "realX": 264,
    "realY": 351,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec82e5-4201-47d4-869a-ec3ed752c271": {
    "id": "n_9eec82e5-4201-47d4-869a-ec3ed752c271",
    "stallId": "9eec82e5-4201-47d4-869a-ec3ed752c271",
    "name": "Sumadi Buah Murni 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 322,
    "y": 351,
    "realX": 322,
    "realY": 351,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7e0e-89eb-4c13-8eb0-21b58e2fa968": {
    "id": "n_9eec7e0e-89eb-4c13-8eb0-21b58e2fa968",
    "stallId": "9eec7e0e-89eb-4c13-8eb0-21b58e2fa968",
    "name": "Mbak Marthi",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 540,
    "y": 240,
    "realX": 540,
    "realY": 240,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f": {
    "id": "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
    "stallId": "9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
    "name": "Mahkota Buah 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 346,
    "y": 709,
    "realX": 346,
    "realY": 709,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec8ea0-a78f-4419-8d74-ee523e0d906e": {
    "id": "n_9eec8ea0-a78f-4419-8d74-ee523e0d906e",
    "stallId": "9eec8ea0-a78f-4419-8d74-ee523e0d906e",
    "name": "Kios Buah Bu Wahyem atau Mas Bono",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 558,
    "y": 585,
    "realX": 558,
    "realY": 585,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec8776-f642-49cd-80f2-04db0504d9ee": {
    "id": "n_9eec8776-f642-49cd-80f2-04db0504d9ee",
    "stallId": "9eec8776-f642-49cd-80f2-04db0504d9ee",
    "name": "Kios Buah Bu Parman 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 666,
    "y": 710,
    "realX": 666,
    "realY": 710,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6e73-bb14-4acd-854d-ee2b0e528107": {
    "id": "n_9eec6e73-bb14-4acd-854d-ee2b0e528107",
    "stallId": "9eec6e73-bb14-4acd-854d-ee2b0e528107",
    "name": "Berkah Buah 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 234,
    "y": 187,
    "realX": 234,
    "realY": 187,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec851e-4632-4e43-aa60-fc29301bd33a": {
    "id": "n_9eec851e-4632-4e43-aa60-fc29301bd33a",
    "stallId": "9eec851e-4632-4e43-aa60-fc29301bd33a",
    "name": "Restu Buah 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 691,
    "y": 178,
    "realX": 691,
    "realY": 178,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec8553-fd7d-45f2-acba-b0eb3ead2475": {
    "id": "n_9eec8553-fd7d-45f2-acba-b0eb3ead2475",
    "stallId": "9eec8553-fd7d-45f2-acba-b0eb3ead2475",
    "name": "Restu Buah 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 812,
    "y": 236,
    "realX": 812,
    "realY": 236,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec9476-8c85-490e-85b9-71b1e19c9a90": {
    "id": "n_9eec9476-8c85-490e-85b9-71b1e19c9a90",
    "stallId": "9eec9476-8c85-490e-85b9-71b1e19c9a90",
    "name": "Kios Buah Lestari",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 784,
    "y": 500,
    "realX": 784,
    "realY": 500,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec8fcb-024f-4d9c-abe5-5abf959c75c6": {
    "id": "n_9eec8fcb-024f-4d9c-abe5-5abf959c75c6",
    "stallId": "9eec8fcb-024f-4d9c-abe5-5abf959c75c6",
    "name": "Kios Sari Buah 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 740,
    "y": 306,
    "realX": 740,
    "realY": 306,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec90e5-1bca-4126-a080-d6e513a0c54a": {
    "id": "n_9eec90e5-1bca-4126-a080-d6e513a0c54a",
    "stallId": "9eec90e5-1bca-4126-a080-d6e513a0c54a",
    "name": "Kios Sari Buah 5",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 719,
    "y": 428,
    "realX": 719,
    "realY": 428,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec9315-957f-4996-974a-3e8eaf80fd78": {
    "id": "n_9eec9315-957f-4996-974a-3e8eaf80fd78",
    "stallId": "9eec9315-957f-4996-974a-3e8eaf80fd78",
    "name": "Kios Pisang Mbak Pur 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 685,
    "y": 306,
    "realX": 685,
    "realY": 306,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec9052-76c2-45a4-aa02-fc70ad17a2f5": {
    "id": "n_9eec9052-76c2-45a4-aa02-fc70ad17a2f5",
    "stallId": "9eec9052-76c2-45a4-aa02-fc70ad17a2f5",
    "name": "Kios Sari Buah 4",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 718,
    "y": 351,
    "realX": 718,
    "realY": 351,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec9145-d147-4605-8b74-b61ed00c1c80": {
    "id": "n_9eec9145-d147-4605-8b74-b61ed00c1c80",
    "stallId": "9eec9145-d147-4605-8b74-b61ed00c1c80",
    "name": "Kios Buah Bu Djurwasih 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 772,
    "y": 428,
    "realX": 772,
    "realY": 428,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec922b-e398-42ff-9e6f-b749914d7ea5": {
    "id": "n_9eec922b-e398-42ff-9e6f-b749914d7ea5",
    "stallId": "9eec922b-e398-42ff-9e6f-b749914d7ea5",
    "name": "Kios Buah Bu Parman 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 723,
    "y": 596,
    "realX": 723,
    "realY": 596,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec9258-7571-427a-a72c-8d608c95a042": {
    "id": "n_9eec9258-7571-427a-a72c-8d608c95a042",
    "stallId": "9eec9258-7571-427a-a72c-8d608c95a042",
    "name": "Kios Buah Bu Parman 4",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 699,
    "y": 572,
    "realX": 699,
    "realY": 572,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec9177-1334-4d68-a062-00018ba4812d": {
    "id": "n_9eec9177-1334-4d68-a062-00018ba4812d",
    "stallId": "9eec9177-1334-4d68-a062-00018ba4812d",
    "name": "Kios Buah Bu Djurwasih 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 772,
    "y": 453,
    "realX": 772,
    "realY": 453,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec99e0-c558-46d6-b667-99a4bd5a8bf2": {
    "id": "n_9eec99e0-c558-46d6-b667-99a4bd5a8bf2",
    "stallId": "9eec99e0-c558-46d6-b667-99a4bd5a8bf2",
    "name": "Kios Dien Buah 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 637,
    "y": 452,
    "realX": 637,
    "realY": 452,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec9a20-92f9-485b-8071-f32ad10bab10": {
    "id": "n_9eec9a20-92f9-485b-8071-f32ad10bab10",
    "stallId": "9eec9a20-92f9-485b-8071-f32ad10bab10",
    "name": "Kios Dien Buah 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 533,
    "y": 519,
    "realX": 533,
    "realY": 519,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef20d4a-df34-4fdb-bd3a-ee040ac75d27": {
    "id": "n_9ef20d4a-df34-4fdb-bd3a-ee040ac75d27",
    "stallId": "9ef20d4a-df34-4fdb-bd3a-ee040ac75d27",
    "name": "Berkah Buah 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 234,
    "y": 136,
    "realX": 234,
    "realY": 136,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef20e8d-63fb-49e2-b422-6fc379ed7230": {
    "id": "n_9ef20e8d-63fb-49e2-b422-6fc379ed7230",
    "stallId": "9ef20e8d-63fb-49e2-b422-6fc379ed7230",
    "name": "Berkah Buah 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 336,
    "y": 132,
    "realX": 336,
    "realY": 132,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef24f24-43ee-47f9-bb32-518366849ad1": {
    "id": "n_9ef24f24-43ee-47f9-bb32-518366849ad1",
    "stallId": "9ef24f24-43ee-47f9-bb32-518366849ad1",
    "name": "Toilet Pasar Buah",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 154,
    "y": 213,
    "realX": 154,
    "realY": 213,
    "type": "facility",
    "category": "toilet",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec91cc-165d-4468-a191-721e5ae47b6b": {
    "id": "n_9eec91cc-165d-4468-a191-721e5ae47b6b",
    "stallId": "9eec91cc-165d-4468-a191-721e5ae47b6b",
    "name": "Kios Sari Buah 6",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 641,
    "y": 524,
    "realX": 641,
    "realY": 524,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef4519a-b909-447a-9625-3c054c0d1d3f": {
    "id": "n_9ef4519a-b909-447a-9625-3c054c0d1d3f",
    "stallId": "9ef4519a-b909-447a-9625-3c054c0d1d3f",
    "name": "Mbak Parmi",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 816,
    "y": 358,
    "realX": 816,
    "realY": 358,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef44f96-1daa-4da8-9f38-9d92ae22bf16": {
    "id": "n_9ef44f96-1daa-4da8-9f38-9d92ae22bf16",
    "stallId": "9ef44f96-1daa-4da8-9f38-9d92ae22bf16",
    "name": "Kios Mbak Sri-Tami",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 691,
    "y": 178,
    "realX": 691,
    "realY": 178,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef450f5-fca0-4a8f-b2e2-8add6ec21215": {
    "id": "n_9ef450f5-fca0-4a8f-b2e2-8add6ec21215",
    "stallId": "9ef450f5-fca0-4a8f-b2e2-8add6ec21215",
    "name": "Kios Sari Buah 8",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 684,
    "y": 132,
    "realX": 684,
    "realY": 132,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d": {
    "id": "n_9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d",
    "stallId": "9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d",
    "name": "Pintu Pasar Buah Kiri 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 287,
    "y": 866,
    "realX": 287,
    "realY": 866,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef46466-5f04-40c1-93e3-1ad0db0e47a6": {
    "id": "n_9ef46466-5f04-40c1-93e3-1ad0db0e47a6",
    "stallId": "9ef46466-5f04-40c1-93e3-1ad0db0e47a6",
    "name": "Pinitu Pasar Buah Kanan 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 740,
    "y": 827,
    "realX": 740,
    "realY": 827,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef46029-4126-4fbd-aeda-d61fdcf8164c": {
    "id": "n_9ef46029-4126-4fbd-aeda-d61fdcf8164c",
    "stallId": "9ef46029-4126-4fbd-aeda-d61fdcf8164c",
    "name": "Pintu Pasar Buah Kiri 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 277,
    "y": 830,
    "realX": 277,
    "realY": 830,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef4633d-97c8-4b8b-9370-1098123268b1": {
    "id": "n_9ef4633d-97c8-4b8b-9370-1098123268b1",
    "stallId": "9ef4633d-97c8-4b8b-9370-1098123268b1",
    "name": "Pinitu Pasar Buah Kanan 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 729,
    "y": 869,
    "realX": 729,
    "realY": 869,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef46411-a1a7-476f-b09f-a8dacb525674": {
    "id": "n_9ef46411-a1a7-476f-b09f-a8dacb525674",
    "stallId": "9ef46411-a1a7-476f-b09f-a8dacb525674",
    "name": "Pintu Pasar Buah Kiri 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 267,
    "y": 794,
    "realX": 267,
    "realY": 794,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef464b9-ff7a-4def-af77-19496ce8fa45": {
    "id": "n_9ef464b9-ff7a-4def-af77-19496ce8fa45",
    "stallId": "9ef464b9-ff7a-4def-af77-19496ce8fa45",
    "name": "Pintu Pasar Buah Kiri 4",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 259,
    "y": 750,
    "realX": 259,
    "realY": 750,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef464f9-f61d-4f26-b8d2-62a92d57eb9d": {
    "id": "n_9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
    "stallId": "9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
    "name": "Pintu Pasar Buah Kiri 5",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 241,
    "y": 694,
    "realX": 241,
    "realY": 694,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef4652d-a825-4415-a362-8bdddf3ad3fb": {
    "id": "n_9ef4652d-a825-4415-a362-8bdddf3ad3fb",
    "stallId": "9ef4652d-a825-4415-a362-8bdddf3ad3fb",
    "name": "Pintu Pasar Buah Kiri 6",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 221,
    "y": 622,
    "realX": 221,
    "realY": 622,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef46579-870a-4bc7-81eb-9f0294177938": {
    "id": "n_9ef46579-870a-4bc7-81eb-9f0294177938",
    "stallId": "9ef46579-870a-4bc7-81eb-9f0294177938",
    "name": "Pintu Pasar Buah Kiri 7",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 200,
    "y": 547,
    "realX": 200,
    "realY": 547,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef465c6-2726-4e9e-83b9-cd3fbd9edb45": {
    "id": "n_9ef465c6-2726-4e9e-83b9-cd3fbd9edb45",
    "stallId": "9ef465c6-2726-4e9e-83b9-cd3fbd9edb45",
    "name": "Pintu Pasar Buah Kiri 8",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 182,
    "y": 476,
    "realX": 182,
    "realY": 476,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef46603-bd57-4a00-bdf6-3b79b3175376": {
    "id": "n_9ef46603-bd57-4a00-bdf6-3b79b3175376",
    "stallId": "9ef46603-bd57-4a00-bdf6-3b79b3175376",
    "name": "Pintu Pasar Buah Kiri 9",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 161,
    "y": 406,
    "realX": 161,
    "realY": 406,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef46649-62eb-4a47-aa8a-40fc1ab5d311": {
    "id": "n_9ef46649-62eb-4a47-aa8a-40fc1ab5d311",
    "stallId": "9ef46649-62eb-4a47-aa8a-40fc1ab5d311",
    "name": "Pintu Pasar Buah Kiri 10",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 144,
    "y": 336,
    "realX": 144,
    "realY": 336,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef4667a-e72b-49e9-8985-3c1085a67866": {
    "id": "n_9ef4667a-e72b-49e9-8985-3c1085a67866",
    "stallId": "9ef4667a-e72b-49e9-8985-3c1085a67866",
    "name": "Pintu Pasar Buah Kiri 11",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 124,
    "y": 263,
    "realX": 124,
    "realY": 263,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef46728-1456-470e-b273-8f2f32de3921": {
    "id": "n_9ef46728-1456-470e-b273-8f2f32de3921",
    "stallId": "9ef46728-1456-470e-b273-8f2f32de3921",
    "name": "Pintu Pasar Buah Depan 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 391,
    "y": 906,
    "realX": 391,
    "realY": 906,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef46756-84f4-461e-af73-74b9fd4fce4f": {
    "id": "n_9ef46756-84f4-461e-af73-74b9fd4fce4f",
    "stallId": "9ef46756-84f4-461e-af73-74b9fd4fce4f",
    "name": "Pintu Pasar Buah Depan 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 512,
    "y": 904,
    "realX": 512,
    "realY": 904,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef46780-9dba-4bac-b681-f69e3f8e0f85": {
    "id": "n_9ef46780-9dba-4bac-b681-f69e3f8e0f85",
    "stallId": "9ef46780-9dba-4bac-b681-f69e3f8e0f85",
    "name": "Pintu Pasar Buah Depan 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 634,
    "y": 905,
    "realX": 634,
    "realY": 905,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef4686a-fa45-4528-b91f-f7905f17e2f2": {
    "id": "n_9ef4686a-fa45-4528-b91f-f7905f17e2f2",
    "stallId": "9ef4686a-fa45-4528-b91f-f7905f17e2f2",
    "name": "Pintu Pasar Buah Belakang 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 277,
    "y": 117,
    "realX": 277,
    "realY": 117,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef468a0-8404-4c7b-8162-aebdada0e880": {
    "id": "n_9ef468a0-8404-4c7b-8162-aebdada0e880",
    "stallId": "9ef468a0-8404-4c7b-8162-aebdada0e880",
    "name": "Pintu Pasar Buah Belakang 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 389,
    "y": 117,
    "realX": 389,
    "realY": 117,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef468d0-cd97-47bc-8ab7-8383dbdea4f6": {
    "id": "n_9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
    "stallId": "9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
    "name": "Pintu Pasar Buah Belakang 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 632,
    "y": 117,
    "realX": 632,
    "realY": 117,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef468ff-6dda-4df2-890f-485bd7fc727a": {
    "id": "n_9ef468ff-6dda-4df2-890f-485bd7fc727a",
    "stallId": "9ef468ff-6dda-4df2-890f-485bd7fc727a",
    "name": "Pintu Pasar Buah Belakang 4",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 771,
    "y": 117,
    "realX": 771,
    "realY": 117,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef48bb8-a5d1-4588-8cdd-59100c003935": {
    "id": "n_9ef48bb8-a5d1-4588-8cdd-59100c003935",
    "stallId": "9ef48bb8-a5d1-4588-8cdd-59100c003935",
    "name": "Pintu Pasar Buah Kanan 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 758,
    "y": 745,
    "realX": 758,
    "realY": 745,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec8335-a3d8-4734-a3a0-6f00bd388072": {
    "id": "n_9eec8335-a3d8-4734-a3a0-6f00bd388072",
    "stallId": "9eec8335-a3d8-4734-a3a0-6f00bd388072",
    "name": "Sumadi Buah Murni 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 186,
    "y": 359,
    "realX": 186,
    "realY": 359,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f02834e-c66b-43b8-afdd-997eed7ee5ee": {
    "id": "n_9f02834e-c66b-43b8-afdd-997eed7ee5ee",
    "stallId": "9f02834e-c66b-43b8-afdd-997eed7ee5ee",
    "name": "Mbak Ni",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 478,
    "y": 428,
    "realX": 478,
    "realY": 428,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef48c07-67a3-423b-8c93-5f7e7649cc61": {
    "id": "n_9ef48c07-67a3-423b-8c93-5f7e7649cc61",
    "stallId": "9ef48c07-67a3-423b-8c93-5f7e7649cc61",
    "name": "Pintu Pasar Buah Kanan 4",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 773,
    "y": 696,
    "realX": 773,
    "realY": 696,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef48cb7-97da-41b1-a4a2-a1bceecca23b": {
    "id": "n_9ef48cb7-97da-41b1-a4a2-a1bceecca23b",
    "stallId": "9ef48cb7-97da-41b1-a4a2-a1bceecca23b",
    "name": "Pintu Pasar Buah Kanan 5",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 793,
    "y": 626,
    "realX": 793,
    "realY": 626,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef48d14-4523-4894-8703-594c0f0916ae": {
    "id": "n_9ef48d14-4523-4894-8703-594c0f0916ae",
    "stallId": "9ef48d14-4523-4894-8703-594c0f0916ae",
    "name": "Pintu Pasar Buah Kanan 6",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 812,
    "y": 553,
    "realX": 812,
    "realY": 553,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef48d69-aba6-41da-8822-9d0e84986e23": {
    "id": "n_9ef48d69-aba6-41da-8822-9d0e84986e23",
    "stallId": "9ef48d69-aba6-41da-8822-9d0e84986e23",
    "name": "Pintu Pasar Buah Kanan 7",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 830,
    "y": 483,
    "realX": 830,
    "realY": 483,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef48dd5-1f7b-418c-9d90-1c314a2d1981": {
    "id": "n_9ef48dd5-1f7b-418c-9d90-1c314a2d1981",
    "stallId": "9ef48dd5-1f7b-418c-9d90-1c314a2d1981",
    "name": "Pintu Pasar Buah Kanan 8",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 851,
    "y": 407,
    "realX": 851,
    "realY": 407,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef48e98-f3b8-4658-a55d-480e77997455": {
    "id": "n_9ef48e98-f3b8-4658-a55d-480e77997455",
    "stallId": "9ef48e98-f3b8-4658-a55d-480e77997455",
    "name": "Pintu Pasar Buah Kanan 9",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 872,
    "y": 341,
    "realX": 872,
    "realY": 341,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9ef48f75-d517-4e36-9331-6128a84825a7": {
    "id": "n_9ef48f75-d517-4e36-9331-6128a84825a7",
    "stallId": "9ef48f75-d517-4e36-9331-6128a84825a7",
    "name": "Pintu Pasar Buah Kanan 10",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 890,
    "y": 273,
    "realX": 890,
    "realY": 273,
    "type": "entrance",
    "category": "pintu",
    "accessible": true,
    "hasTactile": true
  },
  "n_9eec70e9-2b54-4e3d-a5cb-0f79726c890c": {
    "id": "n_9eec70e9-2b54-4e3d-a5cb-0f79726c890c",
    "stallId": "9eec70e9-2b54-4e3d-a5cb-0f79726c890c",
    "name": "Kios Buah Wandi",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 272,
    "y": 306,
    "realX": 272,
    "realY": 306,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7599-eb9d-49bb-9f51-6ef347cade9d": {
    "id": "n_9eec7599-eb9d-49bb-9f51-6ef347cade9d",
    "stallId": "9eec7599-eb9d-49bb-9f51-6ef347cade9d",
    "name": "Pak Daliman",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 248,
    "y": 453,
    "realX": 248,
    "realY": 453,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef49e93-f78c-4e70-8caf-3c0f52386f87": {
    "id": "n_9ef49e93-f78c-4e70-8caf-3c0f52386f87",
    "stallId": "9ef49e93-f78c-4e70-8caf-3c0f52386f87",
    "name": "Tangga lt 1.3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 876,
    "y": 185,
    "realX": 876,
    "realY": 185,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9ef49ed1-cd82-4787-a3c2-cee71937dd17": {
    "id": "n_9ef49ed1-cd82-4787-a3c2-cee71937dd17",
    "stallId": "9ef49ed1-cd82-4787-a3c2-cee71937dd17",
    "name": "Tangga lt 1.4",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 215,
    "y": 200,
    "realX": 215,
    "realY": 200,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336": {
    "id": "n_9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336",
    "stallId": "9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336",
    "name": "Tangga lt 1.1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 502,
    "y": 673,
    "realX": 502,
    "realY": 673,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9ef49dee-e4b2-4e01-9963-0c6f4be6f493": {
    "id": "n_9ef49dee-e4b2-4e01-9963-0c6f4be6f493",
    "stallId": "9ef49dee-e4b2-4e01-9963-0c6f4be6f493",
    "name": "Tangga lt 1.2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 540,
    "y": 766,
    "realX": 540,
    "realY": 766,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9f0847a3-a536-412b-aa0f-5c9f0b92b373": {
    "id": "n_9f0847a3-a536-412b-aa0f-5c9f0b92b373",
    "stallId": "9f0847a3-a536-412b-aa0f-5c9f0b92b373",
    "name": "Kios Buah Wandi 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 331,
    "y": 306,
    "realX": 331,
    "realY": 306,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7b70-7128-48d1-b3b4-53d44866b07e": {
    "id": "n_9eec7b70-7128-48d1-b3b4-53d44866b07e",
    "stallId": "9eec7b70-7128-48d1-b3b4-53d44866b07e",
    "name": "Mahkota Buah 5",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 335,
    "y": 596,
    "realX": 335,
    "realY": 596,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef456a5-7fd1-497d-a063-f864a78359bc": {
    "id": "n_9ef456a5-7fd1-497d-a063-f864a78359bc",
    "stallId": "9ef456a5-7fd1-497d-a063-f864a78359bc",
    "name": "Kios Buah Bu Parman 5",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 683,
    "y": 889,
    "realX": 683,
    "realY": 889,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec92b6-c184-459b-b63f-1d1ac451a95e": {
    "id": "n_9eec92b6-c184-459b-b63f-1d1ac451a95e",
    "stallId": "9eec92b6-c184-459b-b63f-1d1ac451a95e",
    "name": "Kios Pisang Mbak Pur 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 540,
    "y": 240,
    "realX": 540,
    "realY": 240,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a": {
    "id": "n_9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a",
    "stallId": "9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a",
    "name": "Mushola Pasar Gedhe Barat",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 507,
    "y": 166,
    "realX": 507,
    "realY": 166,
    "type": "facility",
    "category": "mushola",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec8174-f3c5-4e80-ae9e-f7286bd54a42": {
    "id": "n_9eec8174-f3c5-4e80-ae9e-f7286bd54a42",
    "stallId": "9eec8174-f3c5-4e80-ae9e-f7286bd54a42",
    "name": "Sumadi Buah Murni 5",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 272,
    "y": 306,
    "realX": 272,
    "realY": 306,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7ac6-d026-4157-a076-998b718a7658": {
    "id": "n_9eec7ac6-d026-4157-a076-998b718a7658",
    "stallId": "9eec7ac6-d026-4157-a076-998b718a7658",
    "name": "Mahkota Buah 8",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 335,
    "y": 572,
    "realX": 335,
    "realY": 572,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7": {
    "id": "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
    "stallId": "9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
    "name": "Mahkota Buah 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 315,
    "y": 666,
    "realX": 315,
    "realY": 666,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec9380-623e-44a0-a9e2-6eb5aa776221": {
    "id": "n_9eec9380-623e-44a0-a9e2-6eb5aa776221",
    "stallId": "9eec9380-623e-44a0-a9e2-6eb5aa776221",
    "name": "Kios Sari Buah 7",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 526,
    "y": 452,
    "realX": 526,
    "realY": 452,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec7ec5-272e-47de-b295-2b37fe0500ad": {
    "id": "n_9eec7ec5-272e-47de-b295-2b37fe0500ad",
    "stallId": "9eec7ec5-272e-47de-b295-2b37fe0500ad",
    "name": "Kios Sari Buah 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 248,
    "y": 453,
    "realX": 248,
    "realY": 453,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec154b-d1bc-467c-b96c-33156ea1b448": {
    "id": "n_9eec154b-d1bc-467c-b96c-33156ea1b448",
    "stallId": "9eec154b-d1bc-467c-b96c-33156ea1b448",
    "name": "Phe-Te 2",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 691,
    "y": 178,
    "realX": 691,
    "realY": 178,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec78e9-ce63-4b04-8fd6-3da85b833c71": {
    "id": "n_9eec78e9-ce63-4b04-8fd6-3da85b833c71",
    "stallId": "9eec78e9-ce63-4b04-8fd6-3da85b833c71",
    "name": "Kios Buah Bu Parman 1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 225,
    "y": 524,
    "realX": 225,
    "realY": 524,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f0284fa-c5b9-46c2-9328-35629efcc80b": {
    "id": "n_9f0284fa-c5b9-46c2-9328-35629efcc80b",
    "stallId": "9f0284fa-c5b9-46c2-9328-35629efcc80b",
    "name": "Kios Dien Buah 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 434,
    "y": 271,
    "realX": 434,
    "realY": 271,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec8e26-ec53-453f-a413-3aea21a9ba95": {
    "id": "n_9eec8e26-ec53-453f-a413-3aea21a9ba95",
    "stallId": "9eec8e26-ec53-453f-a413-3aea21a9ba95",
    "name": "Mahkota Buah 10",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 487,
    "y": 584,
    "realX": 487,
    "realY": 584,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f028861-5207-4748-98ca-2d2a9a7bdb89": {
    "id": "n_9f028861-5207-4748-98ca-2d2a9a7bdb89",
    "stallId": "9f028861-5207-4748-98ca-2d2a9a7bdb89",
    "name": "Mbak Dinda",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 469,
    "y": 519,
    "realX": 469,
    "realY": 519,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9f028447-3ba9-4ccf-8b4b-05daa93f76b0": {
    "id": "n_9f028447-3ba9-4ccf-8b4b-05daa93f76b0",
    "stallId": "9f028447-3ba9-4ccf-8b4b-05daa93f76b0",
    "name": "Mbak Karti",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 524,
    "y": 428,
    "realX": 524,
    "realY": 428,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec94c8-a304-46c1-8ffe-06c5bb3408f1": {
    "id": "n_9eec94c8-a304-46c1-8ffe-06c5bb3408f1",
    "stallId": "9eec94c8-a304-46c1-8ffe-06c5bb3408f1",
    "name": "Min Pisang",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 832,
    "y": 312,
    "realX": 832,
    "realY": 312,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec810c-3e3c-4aa2-a703-19085935167d": {
    "id": "n_9eec810c-3e3c-4aa2-a703-19085935167d",
    "stallId": "9eec810c-3e3c-4aa2-a703-19085935167d",
    "name": "Mas Wandi 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 160,
    "y": 315,
    "realX": 160,
    "realY": 315,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec6e28-1824-434a-b4f9-78b9294d8850": {
    "id": "n_9eec6e28-1824-434a-b4f9-78b9294d8850",
    "stallId": "9eec6e28-1824-434a-b4f9-78b9294d8850",
    "name": "Pur Sastro",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 234,
    "y": 164,
    "realX": 234,
    "realY": 164,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec9019-b87e-46fd-93ea-3a7601c17c03": {
    "id": "n_9eec9019-b87e-46fd-93ea-3a7601c17c03",
    "stallId": "9eec9019-b87e-46fd-93ea-3a7601c17c03",
    "name": "Kios Sari Buah 3",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 671,
    "y": 351,
    "realX": 671,
    "realY": 351,
    "type": "stall",
    "category": "buah",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebfe34-9390-40d9-8427-aff64657b9fe": {
    "id": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
    "stallId": "9eebfe34-9390-40d9-8427-aff64657b9fe",
    "name": "Brawijaya Steak",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 311,
    "y": 560,
    "realX": 311,
    "realY": 560,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebf7ec-248c-4342-a220-188730c7ed83": {
    "id": "n_9eebf7ec-248c-4342-a220-188730c7ed83",
    "stallId": "9eebf7ec-248c-4342-a220-188730c7ed83",
    "name": "Mentai Mania",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 710,
    "y": 596,
    "realX": 710,
    "realY": 596,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebf94b-8244-4019-a32e-606e4ee6ce7c": {
    "id": "n_9eebf94b-8244-4019-a32e-606e4ee6ce7c",
    "stallId": "9eebf94b-8244-4019-a32e-606e4ee6ce7c",
    "name": "Uma Yumcha",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 765,
    "y": 145,
    "realX": 765,
    "realY": 145,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0": {
    "id": "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0",
    "stallId": "9eebfd8b-29bb-4086-a31a-a601f34f78b0",
    "name": "Kedailicious",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 250,
    "y": 273,
    "realX": 250,
    "realY": 273,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebfc56-12ec-482f-994b-bfea7ae2d314": {
    "id": "n_9eebfc56-12ec-482f-994b-bfea7ae2d314",
    "stallId": "9eebfc56-12ec-482f-994b-bfea7ae2d314",
    "name": "Ayam Geprek Kulit Crispy LESTARI",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 219,
    "y": 286,
    "realX": 219,
    "realY": 286,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebfca5-d79a-463f-8797-8104c200b844": {
    "id": "n_9eebfca5-d79a-463f-8797-8104c200b844",
    "stallId": "9eebfca5-d79a-463f-8797-8104c200b844",
    "name": "Kedai Kopi Pak Agus",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 250,
    "y": 426,
    "realX": 250,
    "realY": 426,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebfc01-ec1a-41fe-9411-c0bae168de9b": {
    "id": "n_9eebfc01-ec1a-41fe-9411-c0bae168de9b",
    "stallId": "9eebfc01-ec1a-41fe-9411-c0bae168de9b",
    "name": "WM Suprenasi",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 231,
    "y": 179,
    "realX": 231,
    "realY": 179,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebf67e-eb5a-4194-bbfc-996c7c051849": {
    "id": "n_9eebf67e-eb5a-4194-bbfc-996c7c051849",
    "stallId": "9eebf67e-eb5a-4194-bbfc-996c7c051849",
    "name": "Cuma Jus",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 684,
    "y": 908,
    "realX": 684,
    "realY": 908,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebf836-45f6-4343-8213-d4a75c62476b": {
    "id": "n_9eebf836-45f6-4343-8213-d4a75c62476b",
    "stallId": "9eebf836-45f6-4343-8213-d4a75c62476b",
    "name": "Big Size Juice",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 734,
    "y": 590,
    "realX": 734,
    "realY": 590,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebff95-4008-474e-b4fd-0f5c8aeadd7b": {
    "id": "n_9eebff95-4008-474e-b4fd-0f5c8aeadd7b",
    "stallId": "9eebff95-4008-474e-b4fd-0f5c8aeadd7b",
    "name": "Nasi Liwet Bu Sri",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 512,
    "y": 171,
    "realX": 512,
    "realY": 171,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebffe6-fa71-4d78-a5b7-69c9b4342d57": {
    "id": "n_9eebffe6-fa71-4d78-a5b7-69c9b4342d57",
    "stallId": "9eebffe6-fa71-4d78-a5b7-69c9b4342d57",
    "name": "Kedai Mini 2",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 456,
    "y": 182,
    "realX": 456,
    "realY": 182,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec00ae-4173-4717-9399-bd7eb174f0e6": {
    "id": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "stallId": "9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "name": "Teh Tarik 3 Raja",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 309,
    "y": 148,
    "realX": 309,
    "realY": 148,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec0bd3-c8dc-4026-a5bb-8467e4e820a1": {
    "id": "n_9eec0bd3-c8dc-4026-a5bb-8467e4e820a1",
    "stallId": "9eec0bd3-c8dc-4026-a5bb-8467e4e820a1",
    "name": "Tangga Naik Turun Pasar Buah 3",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 805,
    "y": 238,
    "realX": 805,
    "realY": 238,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9eec0b55-2fc3-4dcd-a7c9-54989062dad0": {
    "id": "n_9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
    "stallId": "9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
    "name": "Tangga Naik Turun Pasar Buah 1",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 470,
    "y": 624,
    "realX": 470,
    "realY": 624,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9eec190a-b777-4fb1-bb47-6ff30a39b519": {
    "id": "n_9eec190a-b777-4fb1-bb47-6ff30a39b519",
    "stallId": "9eec190a-b777-4fb1-bb47-6ff30a39b519",
    "name": "Warung Makan Seafood Sido Laras",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 701,
    "y": 552,
    "realX": 701,
    "realY": 552,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec0b8a-15f9-4358-85c5-46133cf330b5": {
    "id": "n_9eec0b8a-15f9-4358-85c5-46133cf330b5",
    "stallId": "9eec0b8a-15f9-4358-85c5-46133cf330b5",
    "name": "Tangga Naik Turun Pasar Buah 2",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 459,
    "y": 831,
    "realX": 459,
    "realY": 831,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9eec0c15-0184-41b5-9bba-f0581b28174c": {
    "id": "n_9eec0c15-0184-41b5-9bba-f0581b28174c",
    "stallId": "9eec0c15-0184-41b5-9bba-f0581b28174c",
    "name": "Tangga Naik Turun Pasar Buah 4",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 179,
    "y": 159,
    "realX": 179,
    "realY": 159,
    "type": "stairs",
    "category": "tangga",
    "accessible": false,
    "hasTactile": false
  },
  "n_9eebff2d-d940-4772-9b0f-6a683701cd02": {
    "id": "n_9eebff2d-d940-4772-9b0f-6a683701cd02",
    "stallId": "9eebff2d-d940-4772-9b0f-6a683701cd02",
    "name": "Tama Kitchen",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 288,
    "y": 662,
    "realX": 288,
    "realY": 662,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec19e0-123d-4978-a3f4-4a10f1252c15": {
    "id": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "stallId": "9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "name": "Dee Pastelin",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 309,
    "y": 148,
    "realX": 309,
    "realY": 148,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_a1018e0d-acb7-474f-8e2d-9ef389f237bb": {
    "id": "n_a1018e0d-acb7-474f-8e2d-9ef389f237bb",
    "stallId": "a1018e0d-acb7-474f-8e2d-9ef389f237bb",
    "name": "Atedoz",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 309,
    "y": 148,
    "realX": 309,
    "realY": 148,
    "type": "stall",
    "category": "entertainment",
    "accessible": true,
    "hasTactile": false
  },
  "n_a1018efd-0d08-4fcb-89b0-c4c0560fe3a5": {
    "id": "n_a1018efd-0d08-4fcb-89b0-c4c0560fe3a5",
    "stallId": "a1018efd-0d08-4fcb-89b0-c4c0560fe3a5",
    "name": "Soto Gobyos Ais",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 320,
    "y": 427,
    "realX": 320,
    "realY": 427,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec196a-6c0b-4204-8225-52d3308a3858": {
    "id": "n_9eec196a-6c0b-4204-8225-52d3308a3858",
    "stallId": "9eec196a-6c0b-4204-8225-52d3308a3858",
    "name": "Selat Steak PXD",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 680,
    "y": 633,
    "realX": 680,
    "realY": 633,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec8a0a-fc34-41da-9271-270faef1d505": {
    "id": "n_9eec8a0a-fc34-41da-9271-270faef1d505",
    "stallId": "9eec8a0a-fc34-41da-9271-270faef1d505",
    "name": "The French Press",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 777,
    "y": 376,
    "realX": 777,
    "realY": 376,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec8a91-c6e3-4aec-a28b-1bac434d66e7": {
    "id": "n_9eec8a91-c6e3-4aec-a28b-1bac434d66e7",
    "stallId": "9eec8a91-c6e3-4aec-a28b-1bac434d66e7",
    "name": "Kopi Labuhan Hati",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 708,
    "y": 84,
    "realX": 708,
    "realY": 84,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec89c4-edac-4e3b-a427-a53b4f62c2cf": {
    "id": "n_9eec89c4-edac-4e3b-a427-a53b4f62c2cf",
    "stallId": "9eec89c4-edac-4e3b-a427-a53b4f62c2cf",
    "name": "Lembah manah",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 539,
    "y": 641,
    "realX": 539,
    "realY": 641,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef1f725-ee73-4b91-9baa-4c1149cbde00": {
    "id": "n_9ef1f725-ee73-4b91-9baa-4c1149cbde00",
    "stallId": "9ef1f725-ee73-4b91-9baa-4c1149cbde00",
    "name": "Minoom Ahh",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 712,
    "y": 170,
    "realX": 712,
    "realY": 170,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef1f57c-69fb-411d-9f4a-36c12b4dd723": {
    "id": "n_9ef1f57c-69fb-411d-9f4a-36c12b4dd723",
    "stallId": "9ef1f57c-69fb-411d-9f4a-36c12b4dd723",
    "name": "Mie Pinangsia",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 238,
    "y": 125,
    "realX": 238,
    "realY": 125,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef1f6c5-d0fd-40a5-acf3-0c9cce8f81d8": {
    "id": "n_9ef1f6c5-d0fd-40a5-acf3-0c9cce8f81d8",
    "stallId": "9ef1f6c5-d0fd-40a5-acf3-0c9cce8f81d8",
    "name": "Warung Makan Bu Marti",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 712,
    "y": 170,
    "realX": 712,
    "realY": 170,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef1f800-6c29-497a-8697-0bd1532fdd3d": {
    "id": "n_9ef1f800-6c29-497a-8697-0bd1532fdd3d",
    "stallId": "9ef1f800-6c29-497a-8697-0bd1532fdd3d",
    "name": "Rujak Mood",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 720,
    "y": 644,
    "realX": 720,
    "realY": 644,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef20721-91df-4a4a-9019-c8322f75f9c9": {
    "id": "n_9ef20721-91df-4a4a-9019-c8322f75f9c9",
    "stallId": "9ef20721-91df-4a4a-9019-c8322f75f9c9",
    "name": "Gongso 92",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 288,
    "y": 662,
    "realX": 288,
    "realY": 662,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef20a06-9d6f-487e-8f20-f4834fbf8d4c": {
    "id": "n_9ef20a06-9d6f-487e-8f20-f4834fbf8d4c",
    "stallId": "9ef20a06-9d6f-487e-8f20-f4834fbf8d4c",
    "name": "Meurdue Chocolate & Coffee",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 404,
    "y": 118,
    "realX": 404,
    "realY": 118,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef24fb8-a00e-4405-aa12-a42c322083e2": {
    "id": "n_9ef24fb8-a00e-4405-aa12-a42c322083e2",
    "stallId": "9ef24fb8-a00e-4405-aa12-a42c322083e2",
    "name": "Toilet lt. 2",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 671,
    "y": 802,
    "realX": 671,
    "realY": 802,
    "type": "facility",
    "category": "toilet",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef20284-a758-4a52-8ffa-760e2ea92da3": {
    "id": "n_9ef20284-a758-4a52-8ffa-760e2ea92da3",
    "stallId": "9ef20284-a758-4a52-8ffa-760e2ea92da3",
    "name": "Lele Melet dan Nasi Bakar Le JM",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 351,
    "y": 632,
    "realX": 351,
    "realY": 632,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebf885-f1b5-474d-a43b-4c44df2578ad": {
    "id": "n_9eebf885-f1b5-474d-a43b-4c44df2578ad",
    "stallId": "9eebf885-f1b5-474d-a43b-4c44df2578ad",
    "name": "Dimsum Jhian Cook",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 725,
    "y": 546,
    "realX": 725,
    "realY": 546,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef1f535-7132-41fd-a82b-64fc48bc0701": {
    "id": "n_9ef1f535-7132-41fd-a82b-64fc48bc0701",
    "stallId": "9ef1f535-7132-41fd-a82b-64fc48bc0701",
    "name": "Geprek Lovers by Tama Kitchen",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 288,
    "y": 662,
    "realX": 288,
    "realY": 662,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebfdd5-a761-47be-b239-6fdf72f3bc7f": {
    "id": "n_9eebfdd5-a761-47be-b239-6fdf72f3bc7f",
    "stallId": "9eebfdd5-a761-47be-b239-6fdf72f3bc7f",
    "name": "Box 2 Box",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 280,
    "y": 461,
    "realX": 280,
    "realY": 461,
    "type": "stall",
    "category": "entertainment",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec0166-4d0a-4009-a5ca-facf64aeace2": {
    "id": "n_9eec0166-4d0a-4009-a5ca-facf64aeace2",
    "stallId": "9eec0166-4d0a-4009-a5ca-facf64aeace2",
    "name": "Warung Makan Bu Tapruk",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 243,
    "y": 199,
    "realX": 243,
    "realY": 199,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec0058-6839-4405-9735-d22dbcadc6d1": {
    "id": "n_9eec0058-6839-4405-9735-d22dbcadc6d1",
    "stallId": "9eec0058-6839-4405-9735-d22dbcadc6d1",
    "name": "Kedai Nyah T3ll On",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 372,
    "y": 162,
    "realX": 372,
    "realY": 162,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5": {
    "id": "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
    "stallId": "9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
    "name": "Pentol Monster",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 712,
    "y": 692,
    "realX": 712,
    "realY": 692,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef1f5f0-5a61-49c5-a77f-4b10d84b8129": {
    "id": "n_9ef1f5f0-5a61-49c5-a77f-4b10d84b8129",
    "stallId": "9ef1f5f0-5a61-49c5-a77f-4b10d84b8129",
    "name": "Kedai Mini 2 ",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 563,
    "y": 115,
    "realX": 563,
    "realY": 115,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9ef1fda9-a454-450f-99d5-93117e703bac": {
    "id": "n_9ef1fda9-a454-450f-99d5-93117e703bac",
    "stallId": "9ef1fda9-a454-450f-99d5-93117e703bac",
    "name": "Pastel Goreng Solo by Cinrol",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 285,
    "y": 608,
    "realX": 285,
    "realY": 608,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_9eebf74f-6286-4b7b-9f05-21558012a6b9": {
    "id": "n_9eebf74f-6286-4b7b-9f05-21558012a6b9",
    "stallId": "9eebf74f-6286-4b7b-9f05-21558012a6b9",
    "name": "Kedai Njonja",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 704,
    "y": 847,
    "realX": 704,
    "realY": 847,
    "type": "stall",
    "category": "kuliner",
    "accessible": true,
    "hasTactile": false
  },
  "n_bridge_pg_lt2": {
    "id": "n_bridge_pg_lt2",
    "stallId": "bridge_pg_lt2",
    "name": "Jembatan Penghubung Lt.2 (Aksesibel)",
    "buildingId": "pasar-gede",
    "floor": 2,
    "x": 430,
    "y": 795,
    "realX": 430,
    "realY": 229,
    "type": "junction",
    "category": "ramp",
    "accessible": true,
    "hasTactile": true
  },
  "n_ramp_pb_1": {
    "id": "n_ramp_pb_1",
    "stallId": "ramp_pb_1",
    "name": "Ramp Pasar Buah Lt.1",
    "buildingId": "pasar-buah",
    "floor": 1,
    "x": 400,
    "y": 500,
    "type": "ramp",
    "category": "ramp",
    "accessible": true,
    "hasTactile": true
  },
  "n_ramp_pb_2": {
    "id": "n_ramp_pb_2",
    "stallId": "ramp_pb_2",
    "name": "Ramp Pasar Buah Lt.2",
    "buildingId": "pasar-buah",
    "floor": 2,
    "x": 400,
    "y": 500,
    "type": "ramp",
    "category": "ramp",
    "accessible": true,
    "hasTactile": true
  }
};
    const edges = [
  {
    "from": "n_9eec2df4-d946-4a78-8ce9-8e4de247b34e",
    "to": "n_9ef42de0-2728-4d95-9266-ededfeb06d8f",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2df4-d946-4a78-8ce9-8e4de247b34e",
    "to": "n_9ef4320d-7c57-4a6c-85c2-3342ad96ed1b",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec2df4-d946-4a78-8ce9-8e4de247b34e",
    "to": "n_9ef42f24-cb63-4482-89b4-61db2f234cb6",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2df4-d946-4a78-8ce9-8e4de247b34e",
    "to": "n_9ef42166-1220-46d8-a6fd-de5f668212fa",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2df4-d946-4a78-8ce9-8e4de247b34e",
    "to": "n_9ef43435-8fd9-45cd-8998-6ab71d531e51",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec2df4-d946-4a78-8ce9-8e4de247b34e",
    "to": "n_9ef434c0-ffea-4f46-9881-31f48f7c1d23",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2f76-e610-4637-8a30-e18c0efb416d",
    "to": "n_9ef438d8-7f2d-43e8-8e6d-4d77adac4ce8",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2f76-e610-4637-8a30-e18c0efb416d",
    "to": "n_9ef4429f-b4c4-48da-a29e-2ca7bf6f6ea0",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2f76-e610-4637-8a30-e18c0efb416d",
    "to": "n_9ef43873-772a-44fc-9200-1268038676fc",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2f76-e610-4637-8a30-e18c0efb416d",
    "to": "n_9ef437a5-4b9b-4353-b1c5-6774c04a308f",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2f76-e610-4637-8a30-e18c0efb416d",
    "to": "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2f76-e610-4637-8a30-e18c0efb416d",
    "to": "n_9f0284a3-d404-4556-b098-336f9ab8e66c",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3009-3fa1-4082-bb09-849165d2e4ad",
    "to": "n_9eec3283-3138-4515-ad44-0248a14e28ca",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3009-3fa1-4082-bb09-849165d2e4ad",
    "to": "n_9ef43c55-ea07-4036-ad75-bd47d82123cc",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3009-3fa1-4082-bb09-849165d2e4ad",
    "to": "n_9eec359d-b3c7-4dbf-8dba-56afc6ae9e54",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3009-3fa1-4082-bb09-849165d2e4ad",
    "to": "n_9f0e2e1c-5615-407f-855b-5d19ec21fb83",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3009-3fa1-4082-bb09-849165d2e4ad",
    "to": "n_9eec3225-3109-458c-82e2-a02d3531ec27",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3009-3fa1-4082-bb09-849165d2e4ad",
    "to": "n_9eec308f-113a-45aa-9abe-4a5c18ac0ed9",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2b66-7a3f-43d4-8134-4bde3e2b5fc2",
    "to": "n_9eec2db5-90f3-4401-99b1-64949e2d0957",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2b66-7a3f-43d4-8134-4bde3e2b5fc2",
    "to": "n_9f028c63-a19b-4dfa-866a-ec6d88af881e",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2b66-7a3f-43d4-8134-4bde3e2b5fc2",
    "to": "n_9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2b66-7a3f-43d4-8134-4bde3e2b5fc2",
    "to": "n_9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2b66-7a3f-43d4-8134-4bde3e2b5fc2",
    "to": "n_9eec305a-ade9-47ac-90bb-481b090dad7a",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2b66-7a3f-43d4-8134-4bde3e2b5fc2",
    "to": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "distance": 9,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec2f0f-ae5e-4a69-88a3-2d482acb31d4",
    "to": "n_9eec6913-95cb-4ac1-b414-ad5723ddc6fc",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec2f0f-ae5e-4a69-88a3-2d482acb31d4",
    "to": "n_9ef43873-772a-44fc-9200-1268038676fc",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2f0f-ae5e-4a69-88a3-2d482acb31d4",
    "to": "n_9ef437a5-4b9b-4353-b1c5-6774c04a308f",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2f0f-ae5e-4a69-88a3-2d482acb31d4",
    "to": "n_9f103382-4086-4fb0-a264-fc6f6b99075e",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec2f0f-ae5e-4a69-88a3-2d482acb31d4",
    "to": "n_9ef436d9-2b98-4722-b3a0-9a655b7b1439",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2f0f-ae5e-4a69-88a3-2d482acb31d4",
    "to": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "distance": 10,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
    "to": "n_9ef29dea-c489-4e46-81d9-93fbacb6aedc",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
    "to": "n_9f041129-173e-44e5-8da6-2be7c21d0bea",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
    "to": "n_9ef29eb0-2314-43d9-b495-5dba98d84e95",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
    "to": "n_9f0284a3-d404-4556-b098-336f9ab8e66c",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
    "to": "n_9ef29d60-dc1d-4396-b187-3b75b81fbe9f",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
    "to": "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec31a3-2c03-498b-ad60-4c9d0bc800b4",
    "to": "n_9eec3525-a85d-4b5b-9c53-f43f3735b77d",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec31a3-2c03-498b-ad60-4c9d0bc800b4",
    "to": "n_9eec49e8-09d4-4d20-986d-a2aaf6f6fb9d",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec31a3-2c03-498b-ad60-4c9d0bc800b4",
    "to": "n_9eec305a-ade9-47ac-90bb-481b090dad7a",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec31a3-2c03-498b-ad60-4c9d0bc800b4",
    "to": "n_9eec346f-adde-4314-96ed-59b4f8396dfc",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec31a3-2c03-498b-ad60-4c9d0bc800b4",
    "to": "n_9eec371f-8ba1-40d9-8756-b42a1919a19f",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec31a3-2c03-498b-ad60-4c9d0bc800b4",
    "to": "n_9eec310c-70f4-4bd0-990d-3faaf7921fa6",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec305a-ade9-47ac-90bb-481b090dad7a",
    "to": "n_9eec49e8-09d4-4d20-986d-a2aaf6f6fb9d",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec305a-ade9-47ac-90bb-481b090dad7a",
    "to": "n_9eec3525-a85d-4b5b-9c53-f43f3735b77d",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec305a-ade9-47ac-90bb-481b090dad7a",
    "to": "n_9eec2db5-90f3-4401-99b1-64949e2d0957",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec305a-ade9-47ac-90bb-481b090dad7a",
    "to": "n_9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3351-ba60-4179-87d4-79c3129b5a05",
    "to": "n_9eec3639-57c0-4077-b843-1389d937744e",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3351-ba60-4179-87d4-79c3129b5a05",
    "to": "n_9eec33d6-d85e-4c7d-b37c-b26706285439",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3351-ba60-4179-87d4-79c3129b5a05",
    "to": "n_9eec5975-013a-4ff1-865d-3e814cca1c60",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3351-ba60-4179-87d4-79c3129b5a05",
    "to": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3351-ba60-4179-87d4-79c3129b5a05",
    "to": "n_9eec38ed-4c60-42b3-9db6-f92840261624",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3351-ba60-4179-87d4-79c3129b5a05",
    "to": "n_9eec32cd-04eb-4fc3-a65e-fdce9f197285",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3225-3109-458c-82e2-a02d3531ec27",
    "to": "n_9ef29eb0-2314-43d9-b495-5dba98d84e95",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3225-3109-458c-82e2-a02d3531ec27",
    "to": "n_9eec3283-3138-4515-ad44-0248a14e28ca",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3225-3109-458c-82e2-a02d3531ec27",
    "to": "n_9ef43c55-ea07-4036-ad75-bd47d82123cc",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3225-3109-458c-82e2-a02d3531ec27",
    "to": "n_9f041129-173e-44e5-8da6-2be7c21d0bea",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3225-3109-458c-82e2-a02d3531ec27",
    "to": "n_9eec308f-113a-45aa-9abe-4a5c18ac0ed9",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3525-2ed5-447c-8493-8c65a8de8781",
    "to": "n_9eec3598-f6da-42c9-9555-ae9ffaa923c3",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3525-2ed5-447c-8493-8c65a8de8781",
    "to": "n_9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3525-2ed5-447c-8493-8c65a8de8781",
    "to": "n_9eec34d8-ee57-4d57-ae93-a1828257cb45",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3525-2ed5-447c-8493-8c65a8de8781",
    "to": "n_9f02a372-defa-4ac0-891c-f00311bf5192",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3525-2ed5-447c-8493-8c65a8de8781",
    "to": "n_9ef5fb86-0e86-4a92-a670-4468621808a2",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3525-2ed5-447c-8493-8c65a8de8781",
    "to": "n_9eec3892-7cee-4816-af43-dd4b1000e78c",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3639-57c0-4077-b843-1389d937744e",
    "to": "n_9eec33d6-d85e-4c7d-b37c-b26706285439",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3639-57c0-4077-b843-1389d937744e",
    "to": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3639-57c0-4077-b843-1389d937744e",
    "to": "n_9eec38ed-4c60-42b3-9db6-f92840261624",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3639-57c0-4077-b843-1389d937744e",
    "to": "n_9eec32cd-04eb-4fc3-a65e-fdce9f197285",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3639-57c0-4077-b843-1389d937744e",
    "to": "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef420fb-6408-42d8-9f2a-f29cb883aa56",
    "to": "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
    "distance": 3,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef420fb-6408-42d8-9f2a-f29cb883aa56",
    "to": "n_9ef4209c-ee9c-4f29-87d8-7b5565dcc79b",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef420fb-6408-42d8-9f2a-f29cb883aa56",
    "to": "n_9eec2a0c-67c6-45dd-b734-a727becf1428",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef420fb-6408-42d8-9f2a-f29cb883aa56",
    "to": "n_9f0e814a-1ae9-4faa-8e37-4f4abff56408",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef420fb-6408-42d8-9f2a-f29cb883aa56",
    "to": "n_9ef42f24-cb63-4482-89b4-61db2f234cb6",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef420fb-6408-42d8-9f2a-f29cb883aa56",
    "to": "n_9ef42166-1220-46d8-a6fd-de5f668212fa",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3598-f6da-42c9-9555-ae9ffaa923c3",
    "to": "n_9eec3892-7cee-4816-af43-dd4b1000e78c",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3598-f6da-42c9-9555-ae9ffaa923c3",
    "to": "n_9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3598-f6da-42c9-9555-ae9ffaa923c3",
    "to": "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3598-f6da-42c9-9555-ae9ffaa923c3",
    "to": "n_9ef5fb86-0e86-4a92-a670-4468621808a2",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3598-f6da-42c9-9555-ae9ffaa923c3",
    "to": "n_9eec35f7-3089-4c32-abaf-364d5ca702ca",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec359d-b3c7-4dbf-8dba-56afc6ae9e54",
    "to": "n_9eec37fc-a1e5-45e6-aa11-288e32b3a6f4",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec359d-b3c7-4dbf-8dba-56afc6ae9e54",
    "to": "n_9eec308f-113a-45aa-9abe-4a5c18ac0ed9",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec359d-b3c7-4dbf-8dba-56afc6ae9e54",
    "to": "n_9eec378f-3ff2-44ac-b695-059ecb43a7f5",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec359d-b3c7-4dbf-8dba-56afc6ae9e54",
    "to": "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec359d-b3c7-4dbf-8dba-56afc6ae9e54",
    "to": "n_9eec3283-3138-4515-ad44-0248a14e28ca",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec346f-adde-4314-96ed-59b4f8396dfc",
    "to": "n_9eec371f-8ba1-40d9-8756-b42a1919a19f",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec346f-adde-4314-96ed-59b4f8396dfc",
    "to": "n_9eec36ca-247f-46e9-af16-2d11dcd45061",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec346f-adde-4314-96ed-59b4f8396dfc",
    "to": "n_9eec3525-a85d-4b5b-9c53-f43f3735b77d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec346f-adde-4314-96ed-59b4f8396dfc",
    "to": "n_9eec37fc-a1e5-45e6-aa11-288e32b3a6f4",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec346f-adde-4314-96ed-59b4f8396dfc",
    "to": "n_9eec49e8-09d4-4d20-986d-a2aaf6f6fb9d",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec33d6-d85e-4c7d-b37c-b26706285439",
    "to": "n_9eec32cd-04eb-4fc3-a65e-fdce9f197285",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec33d6-d85e-4c7d-b37c-b26706285439",
    "to": "n_9eec36ca-247f-46e9-af16-2d11dcd45061",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec33d6-d85e-4c7d-b37c-b26706285439",
    "to": "n_9eec346f-adde-4314-96ed-59b4f8396dfc",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec33d6-d85e-4c7d-b37c-b26706285439",
    "to": "n_9eec371f-8ba1-40d9-8756-b42a1919a19f",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3db6-46d6-47ff-884d-1077b42da86f",
    "to": "n_9eec3ca1-7cf8-4742-b23f-504d2a910ed9",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3db6-46d6-47ff-884d-1077b42da86f",
    "to": "n_9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3db6-46d6-47ff-884d-1077b42da86f",
    "to": "n_9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3db6-46d6-47ff-884d-1077b42da86f",
    "to": "n_9ef20d3c-594a-406d-a451-0207d8460317",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3db6-46d6-47ff-884d-1077b42da86f",
    "to": "n_9ef65160-ea83-4730-b212-f74ab78979dc",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3db6-46d6-47ff-884d-1077b42da86f",
    "to": "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec374a-ed39-498a-b3dc-9c84b91a3f32",
    "to": "n_9ef3f5c6-9924-44b8-975c-3f59c93577ba",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec374a-ed39-498a-b3dc-9c84b91a3f32",
    "to": "n_9ef5fb86-0e86-4a92-a670-4468621808a2",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec374a-ed39-498a-b3dc-9c84b91a3f32",
    "to": "n_9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec374a-ed39-498a-b3dc-9c84b91a3f32",
    "to": "n_9eec381f-5274-4161-80f7-4e699eac0e46",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec374a-ed39-498a-b3dc-9c84b91a3f32",
    "to": "n_9f0424ff-2689-4922-a15d-e0b2c4ad6f39",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec374a-ed39-498a-b3dc-9c84b91a3f32",
    "to": "n_9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec371f-8ba1-40d9-8756-b42a1919a19f",
    "to": "n_9eec36ca-247f-46e9-af16-2d11dcd45061",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec371f-8ba1-40d9-8756-b42a1919a19f",
    "to": "n_9eec3525-a85d-4b5b-9c53-f43f3735b77d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec371f-8ba1-40d9-8756-b42a1919a19f",
    "to": "n_9eec37fc-a1e5-45e6-aa11-288e32b3a6f4",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec371f-8ba1-40d9-8756-b42a1919a19f",
    "to": "n_9eec49e8-09d4-4d20-986d-a2aaf6f6fb9d",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec37fc-a1e5-45e6-aa11-288e32b3a6f4",
    "to": "n_9eec378f-3ff2-44ac-b695-059ecb43a7f5",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec37fc-a1e5-45e6-aa11-288e32b3a6f4",
    "to": "n_9eec49e8-09d4-4d20-986d-a2aaf6f6fb9d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec37fc-a1e5-45e6-aa11-288e32b3a6f4",
    "to": "n_9eec3525-a85d-4b5b-9c53-f43f3735b77d",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "to": "n_9eec38ed-4c60-42b3-9db6-f92840261624",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "to": "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "to": "n_9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "to": "n_9eec3e98-c6c5-47a0-8a0f-70576cf08665",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
    "to": "n_9eec38ed-4c60-42b3-9db6-f92840261624",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
    "to": "n_9eec46bc-9f36-49ad-952f-991f14056920",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
    "to": "n_9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
    "to": "n_9eec3e98-c6c5-47a0-8a0f-70576cf08665",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
    "to": "n_9eec4063-2d11-4088-83f7-f5b5b87db1c6",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
    "to": "n_9eec3e98-c6c5-47a0-8a0f-70576cf08665",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
    "to": "n_9ef65160-ea83-4730-b212-f74ab78979dc",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
    "to": "n_9eec38ed-4c60-42b3-9db6-f92840261624",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
    "to": "n_9eec36ca-247f-46e9-af16-2d11dcd45061",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4063-2d11-4088-83f7-f5b5b87db1c6",
    "to": "n_9eec46bc-9f36-49ad-952f-991f14056920",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4063-2d11-4088-83f7-f5b5b87db1c6",
    "to": "n_9eec4ba7-f054-46ba-8480-80392ae053cb",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4063-2d11-4088-83f7-f5b5b87db1c6",
    "to": "n_9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4063-2d11-4088-83f7-f5b5b87db1c6",
    "to": "n_9eec4860-2daf-4bf9-9942-02c1d717f642",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4063-2d11-4088-83f7-f5b5b87db1c6",
    "to": "n_9ef49b56-c410-4339-a1e8-92fe2228b6e1",
    "distance": 10,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec419f-b160-4391-a5ab-4c9eb75cbce1",
    "to": "n_9ef1fce8-7b05-4c21-a8af-2f9c82b48bf2",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec419f-b160-4391-a5ab-4c9eb75cbce1",
    "to": "n_9eec47d1-2f39-495f-8738-0f70866c325f",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec419f-b160-4391-a5ab-4c9eb75cbce1",
    "to": "n_9eec6d25-228f-4a7e-9abd-d65daf71d0ae",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec419f-b160-4391-a5ab-4c9eb75cbce1",
    "to": "n_9ef4300f-fcb9-4e6d-a3cb-91f8d55bd945",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec419f-b160-4391-a5ab-4c9eb75cbce1",
    "to": "n_9ef1fd45-298d-4a38-a597-4e68ce0cbfbf",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec419f-b160-4391-a5ab-4c9eb75cbce1",
    "to": "n_9eec477d-23d4-4a7f-80a1-a04f65d1e93c",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec477d-23d4-4a7f-80a1-a04f65d1e93c",
    "to": "n_9eec47d1-2f39-495f-8738-0f70866c325f",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec477d-23d4-4a7f-80a1-a04f65d1e93c",
    "to": "n_9ef4300f-fcb9-4e6d-a3cb-91f8d55bd945",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec477d-23d4-4a7f-80a1-a04f65d1e93c",
    "to": "n_9ef1fce8-7b05-4c21-a8af-2f9c82b48bf2",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec477d-23d4-4a7f-80a1-a04f65d1e93c",
    "to": "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec477d-23d4-4a7f-80a1-a04f65d1e93c",
    "to": "n_9eec4442-2ba6-471f-baf7-daf6334ae39e",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec477d-23d4-4a7f-80a1-a04f65d1e93c",
    "to": "n_9ef42bb0-a4c8-43ba-85dd-13f7c4de9cd5",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4860-2daf-4bf9-9942-02c1d717f642",
    "to": "n_9eec3fee-0741-40be-b425-620016b062f5",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4860-2daf-4bf9-9942-02c1d717f642",
    "to": "n_9eec46bc-9f36-49ad-952f-991f14056920",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4860-2daf-4bf9-9942-02c1d717f642",
    "to": "n_9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4860-2daf-4bf9-9942-02c1d717f642",
    "to": "n_9eec3e98-c6c5-47a0-8a0f-70576cf08665",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4860-2daf-4bf9-9942-02c1d717f642",
    "to": "n_9eec3f9a-197f-45b4-bd44-47e2aadc8720",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4860-2daf-4bf9-9942-02c1d717f642",
    "to": "n_9ef65160-ea83-4730-b212-f74ab78979dc",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3fee-0741-40be-b425-620016b062f5",
    "to": "n_9eec3f9a-197f-45b4-bd44-47e2aadc8720",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3fee-0741-40be-b425-620016b062f5",
    "to": "n_9ef43511-01c3-4fbc-9b5e-a1225d124919",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3fee-0741-40be-b425-620016b062f5",
    "to": "n_9eec4e2c-2553-4216-b367-a001f647573b",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3fee-0741-40be-b425-620016b062f5",
    "to": "n_9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3fee-0741-40be-b425-620016b062f5",
    "to": "n_9eec4a72-e65e-41e7-89bc-45680119eedd",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "to": "n_9ef416b9-1f72-4103-8491-010ff40720d6",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "to": "n_9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "to": "n_9f045211-e8ff-4de9-9af7-a331e4ef8fbf",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "to": "n_9ef40a61-6906-441e-ae49-124f2ecae71f",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "to": "n_9ef20676-216b-43ce-9d54-9a595739376e",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "to": "n_9ef208dc-305d-4213-925b-a079e3920b2f",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
    "to": "n_9eec493f-2521-41c2-825f-01dcea8ca9e9",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
    "to": "n_9eec4ba7-f054-46ba-8480-80392ae053cb",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
    "to": "n_9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
    "to": "n_9f02c559-6a1c-4dce-9930-267b455913ef",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
    "to": "n_9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
    "to": "n_9f047a55-3030-4668-a3fe-c99dc724bda2",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4893-7b57-4b3b-94a9-aff2e3db119d",
    "to": "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4893-7b57-4b3b-94a9-aff2e3db119d",
    "to": "n_9eec4912-7411-4938-939a-ee5ee6759fc5",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4893-7b57-4b3b-94a9-aff2e3db119d",
    "to": "n_9f0824fa-0478-4422-9533-e57738855be2",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4893-7b57-4b3b-94a9-aff2e3db119d",
    "to": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4893-7b57-4b3b-94a9-aff2e3db119d",
    "to": "n_9ef416b9-1f72-4103-8491-010ff40720d6",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4893-7b57-4b3b-94a9-aff2e3db119d",
    "to": "n_9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4e07-119a-48b4-a2f3-bb38a8f8d1ec",
    "to": "n_9ef43b2e-c860-4412-9ebc-3eac05690019",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4e07-119a-48b4-a2f3-bb38a8f8d1ec",
    "to": "n_9f002543-5421-486d-a871-3acf00a391c4",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4e07-119a-48b4-a2f3-bb38a8f8d1ec",
    "to": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4e07-119a-48b4-a2f3-bb38a8f8d1ec",
    "to": "n_9eec53f2-48e7-47e5-abf0-6bfc5402aa18",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4e07-119a-48b4-a2f3-bb38a8f8d1ec",
    "to": "n_9ef45303-39bf-42e7-b9bf-17e2e74ea89f",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4e07-119a-48b4-a2f3-bb38a8f8d1ec",
    "to": "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4b71-c9d3-475b-9671-6f68298ff2b1",
    "to": "n_9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4b71-c9d3-475b-9671-6f68298ff2b1",
    "to": "n_9ef402e4-4f80-4eee-bd9d-9bfcbec874fd",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4b71-c9d3-475b-9671-6f68298ff2b1",
    "to": "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4b71-c9d3-475b-9671-6f68298ff2b1",
    "to": "n_9f044dd6-50c4-4a00-8d41-f7236a1510f2",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4b71-c9d3-475b-9671-6f68298ff2b1",
    "to": "n_9f0429c7-ef47-4b3b-afcc-3ab832af596f",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4b71-c9d3-475b-9671-6f68298ff2b1",
    "to": "n_9ef4000b-15f3-45a3-9fae-6e946eae2530",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4ae5-1a94-4d4f-84a9-b4de919d50c7",
    "to": "n_9eec4a72-e65e-41e7-89bc-45680119eedd",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4ae5-1a94-4d4f-84a9-b4de919d50c7",
    "to": "n_9eec4e2c-2553-4216-b367-a001f647573b",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4ae5-1a94-4d4f-84a9-b4de919d50c7",
    "to": "n_9ef46778-f72e-48d9-8638-d52495270de4",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4ae5-1a94-4d4f-84a9-b4de919d50c7",
    "to": "n_9ef466e9-6958-46f7-9990-acb2e02f98e9",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4ae5-1a94-4d4f-84a9-b4de919d50c7",
    "to": "n_9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4ae5-1a94-4d4f-84a9-b4de919d50c7",
    "to": "n_9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4c68-a9d5-4e12-b9d0-107dcd456160",
    "to": "n_9ef29d60-dc1d-4396-b187-3b75b81fbe9f",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4c68-a9d5-4e12-b9d0-107dcd456160",
    "to": "n_9ef29ce8-d70e-482e-b888-008b68cc8102",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4c68-a9d5-4e12-b9d0-107dcd456160",
    "to": "n_9f0284a3-d404-4556-b098-336f9ab8e66c",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4c68-a9d5-4e12-b9d0-107dcd456160",
    "to": "n_9eec4da4-f111-434b-bbd0-9d4b8bf45a7d",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4c68-a9d5-4e12-b9d0-107dcd456160",
    "to": "n_9ef43c55-ea07-4036-ad75-bd47d82123cc",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4c68-a9d5-4e12-b9d0-107dcd456160",
    "to": "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4a72-e65e-41e7-89bc-45680119eedd",
    "to": "n_9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4a72-e65e-41e7-89bc-45680119eedd",
    "to": "n_9eec4e2c-2553-4216-b367-a001f647573b",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4a72-e65e-41e7-89bc-45680119eedd",
    "to": "n_9f047b2d-89fe-499e-9e0b-4171a7a22adf",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4a72-e65e-41e7-89bc-45680119eedd",
    "to": "n_9eec4f1d-d004-4a4d-95a4-901ace72ec5b",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4a72-e65e-41e7-89bc-45680119eedd",
    "to": "n_9f02c559-6a1c-4dce-9930-267b455913ef",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
    "to": "n_9f02c559-6a1c-4dce-9930-267b455913ef",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
    "to": "n_9eec4f1d-d004-4a4d-95a4-901ace72ec5b",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
    "to": "n_9eec4e2c-2553-4216-b367-a001f647573b",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
    "to": "n_9eec493f-2521-41c2-825f-01dcea8ca9e9",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4d02-5bbf-4672-babc-21ef1635d0a4",
    "to": "n_9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4d02-5bbf-4672-babc-21ef1635d0a4",
    "to": "n_9f0e1ea7-663f-4256-8fae-b551329c34d5",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4d02-5bbf-4672-babc-21ef1635d0a4",
    "to": "n_9eec4da4-f111-434b-bbd0-9d4b8bf45a7d",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4d02-5bbf-4672-babc-21ef1635d0a4",
    "to": "n_9f0e2e1c-5615-407f-855b-5d19ec21fb83",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4d02-5bbf-4672-babc-21ef1635d0a4",
    "to": "n_9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4d02-5bbf-4672-babc-21ef1635d0a4",
    "to": "n_9ef29ce8-d70e-482e-b888-008b68cc8102",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4f1d-d004-4a4d-95a4-901ace72ec5b",
    "to": "n_9eec51e3-a665-453d-b51e-141c21e8affb",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4f1d-d004-4a4d-95a4-901ace72ec5b",
    "to": "n_9f047b2d-89fe-499e-9e0b-4171a7a22adf",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4f1d-d004-4a4d-95a4-901ace72ec5b",
    "to": "n_9f047a55-3030-4668-a3fe-c99dc724bda2",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4f1d-d004-4a4d-95a4-901ace72ec5b",
    "to": "n_9eec517e-55bd-4c97-9504-ed63c5e8efbf",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec517e-55bd-4c97-9504-ed63c5e8efbf",
    "to": "n_9f047b2d-89fe-499e-9e0b-4171a7a22adf",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec517e-55bd-4c97-9504-ed63c5e8efbf",
    "to": "n_9eec51e3-a665-453d-b51e-141c21e8affb",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec517e-55bd-4c97-9504-ed63c5e8efbf",
    "to": "n_9ef657c0-df64-4788-8c53-46c926b8ba6d",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec517e-55bd-4c97-9504-ed63c5e8efbf",
    "to": "n_9ef45d8e-608d-422e-9950-1a6919cd762b",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec517e-55bd-4c97-9504-ed63c5e8efbf",
    "to": "n_9ef46046-3cb9-4eb9-ac80-316d5ede1524",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec53f2-48e7-47e5-abf0-6bfc5402aa18",
    "to": "n_9ef45303-39bf-42e7-b9bf-17e2e74ea89f",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec53f2-48e7-47e5-abf0-6bfc5402aa18",
    "to": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec53f2-48e7-47e5-abf0-6bfc5402aa18",
    "to": "n_9eec3409-ab10-4942-ace9-64a81c099954",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec53f2-48e7-47e5-abf0-6bfc5402aa18",
    "to": "n_9eec3107-c317-452c-82f6-29cc2dd82115",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec53f2-48e7-47e5-abf0-6bfc5402aa18",
    "to": "n_9ef43b2e-c860-4412-9ebc-3eac05690019",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5761-f0f4-46f2-9433-d90566302aba",
    "to": "n_9f022b9a-08d9-4d89-bbfb-45854faec907",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5761-f0f4-46f2-9433-d90566302aba",
    "to": "n_9ef41082-d06a-4f76-9792-0135f7ce6f84",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5761-f0f4-46f2-9433-d90566302aba",
    "to": "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5761-f0f4-46f2-9433-d90566302aba",
    "to": "n_9f0824fa-0478-4422-9533-e57738855be2",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5761-f0f4-46f2-9433-d90566302aba",
    "to": "n_9ef427fc-873d-4224-b1cd-7020741182df",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5761-f0f4-46f2-9433-d90566302aba",
    "to": "n_9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec59d3-a3d3-4476-a1a9-fae4a0306afc",
    "to": "n_9ef41ef1-9e5f-4df8-9a41-7395803fc4fd",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec59d3-a3d3-4476-a1a9-fae4a0306afc",
    "to": "n_9ef41903-2f5c-4eab-b8d4-bdb0846b37db",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec59d3-a3d3-4476-a1a9-fae4a0306afc",
    "to": "n_9eec5975-013a-4ff1-865d-3e814cca1c60",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec59d3-a3d3-4476-a1a9-fae4a0306afc",
    "to": "n_9ef41983-8988-4838-9623-413e70cdf3bd",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec59d3-a3d3-4476-a1a9-fae4a0306afc",
    "to": "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec59d3-a3d3-4476-a1a9-fae4a0306afc",
    "to": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5329-91fe-4f02-971c-c58d1eea5dee",
    "to": "n_9eec6369-3772-4583-ab71-fb4c439fa258",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5329-91fe-4f02-971c-c58d1eea5dee",
    "to": "n_9eec53a4-e754-4833-a3d3-c655d67f3ead",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5329-91fe-4f02-971c-c58d1eea5dee",
    "to": "n_9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5329-91fe-4f02-971c-c58d1eea5dee",
    "to": "n_9f047a55-3030-4668-a3fe-c99dc724bda2",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5329-91fe-4f02-971c-c58d1eea5dee",
    "to": "n_9eec51e3-a665-453d-b51e-141c21e8affb",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5329-91fe-4f02-971c-c58d1eea5dee",
    "to": "n_9eec641e-b474-49c6-9b1b-287287af6fcc",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec50de-c2a7-4253-9913-7ee1a0da72df",
    "to": "n_9ef4616e-3d65-4194-905f-35e2387dd1aa",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec50de-c2a7-4253-9913-7ee1a0da72df",
    "to": "n_9ef46046-3cb9-4eb9-ac80-316d5ede1524",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec50de-c2a7-4253-9913-7ee1a0da72df",
    "to": "n_9ef657c0-df64-4788-8c53-46c926b8ba6d",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec50de-c2a7-4253-9913-7ee1a0da72df",
    "to": "n_9ef466e9-6958-46f7-9990-acb2e02f98e9",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec50de-c2a7-4253-9913-7ee1a0da72df",
    "to": "n_9ef45d8e-608d-422e-9950-1a6919cd762b",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec50de-c2a7-4253-9913-7ee1a0da72df",
    "to": "n_9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec54ac-dd6e-4d6b-bb45-275cbd235f0c",
    "to": "n_9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec54ac-dd6e-4d6b-bb45-275cbd235f0c",
    "to": "n_9ef20d3c-594a-406d-a451-0207d8460317",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec54ac-dd6e-4d6b-bb45-275cbd235f0c",
    "to": "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec54ac-dd6e-4d6b-bb45-275cbd235f0c",
    "to": "n_9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec54ac-dd6e-4d6b-bb45-275cbd235f0c",
    "to": "n_9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec54ac-dd6e-4d6b-bb45-275cbd235f0c",
    "to": "n_9ef3ee74-4033-46f8-ab06-802820b21d52",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5f01-f30a-431d-98c4-38824e518cad",
    "to": "n_9eec601a-0d16-4132-b633-b75ab72930ea",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5f01-f30a-431d-98c4-38824e518cad",
    "to": "n_9f04167c-11e9-43c8-b3df-e10c93aed77f",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5f01-f30a-431d-98c4-38824e518cad",
    "to": "n_9f025096-89fd-4467-a0c9-b532f98011c6",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5f01-f30a-431d-98c4-38824e518cad",
    "to": "n_9eec5eab-2e3d-4bbe-8c13-8e8a838b3440",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5f01-f30a-431d-98c4-38824e518cad",
    "to": "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5f01-f30a-431d-98c4-38824e518cad",
    "to": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec60a0-10e3-480c-89e8-87d033c0f0db",
    "to": "n_9ef42332-d100-414f-91d1-11cc96081ffc",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec60a0-10e3-480c-89e8-87d033c0f0db",
    "to": "n_9ef41b3b-7e17-4273-927f-2b1f0ab90316",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec60a0-10e3-480c-89e8-87d033c0f0db",
    "to": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec60a0-10e3-480c-89e8-87d033c0f0db",
    "to": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec60a0-10e3-480c-89e8-87d033c0f0db",
    "to": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec60a0-10e3-480c-89e8-87d033c0f0db",
    "to": "n_9eec8811-1439-403f-ad41-29abd386c867",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec601a-0d16-4132-b633-b75ab72930ea",
    "to": "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec601a-0d16-4132-b633-b75ab72930ea",
    "to": "n_9f04167c-11e9-43c8-b3df-e10c93aed77f",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec601a-0d16-4132-b633-b75ab72930ea",
    "to": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec601a-0d16-4132-b633-b75ab72930ea",
    "to": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec601a-0d16-4132-b633-b75ab72930ea",
    "to": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5af7-3539-4e2f-8a28-8c521ccea31e",
    "to": "n_9ef41a00-bddb-4d7b-ba21-c09d9600a459",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5af7-3539-4e2f-8a28-8c521ccea31e",
    "to": "n_9ef419bb-3a9f-4824-bd0f-aab317663654",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5af7-3539-4e2f-8a28-8c521ccea31e",
    "to": "n_9eec5a3b-c76b-446a-93ed-c3ffc3942461",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5af7-3539-4e2f-8a28-8c521ccea31e",
    "to": "n_9eec641e-b474-49c6-9b1b-287287af6fcc",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5af7-3539-4e2f-8a28-8c521ccea31e",
    "to": "n_9ef41ac9-8e90-40dc-ac33-ce82e633b42a",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5af7-3539-4e2f-8a28-8c521ccea31e",
    "to": "n_9ef49b56-c410-4339-a1e8-92fe2228b6e1",
    "distance": 10,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec5df9-50c7-409c-99bb-b15d83062c31",
    "to": "n_9ef41c48-ee26-4113-a029-2c663251b452",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5df9-50c7-409c-99bb-b15d83062c31",
    "to": "n_9eec62fb-8144-47d6-8b90-867b515c7a31",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5df9-50c7-409c-99bb-b15d83062c31",
    "to": "n_9ef41408-904d-4848-9bc5-f286b4716233",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5df9-50c7-409c-99bb-b15d83062c31",
    "to": "n_9eec53a4-e754-4833-a3d3-c655d67f3ead",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5df9-50c7-409c-99bb-b15d83062c31",
    "to": "n_9ef41cd8-08b3-487d-8009-8ddfd43fc159",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5df9-50c7-409c-99bb-b15d83062c31",
    "to": "n_9eec6369-3772-4583-ab71-fb4c439fa258",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5d35-9aca-4ec5-ae9e-6ae0b41445a9",
    "to": "n_9eec5da1-1dcf-4479-ba95-ac1cd8bf58aa",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5d35-9aca-4ec5-ae9e-6ae0b41445a9",
    "to": "n_9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5d35-9aca-4ec5-ae9e-6ae0b41445a9",
    "to": "n_9ef20b93-9f38-4b5e-9028-637b9701b815",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5d35-9aca-4ec5-ae9e-6ae0b41445a9",
    "to": "n_9ef44646-37b5-419e-a0f5-09f87e972e4b",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5d35-9aca-4ec5-ae9e-6ae0b41445a9",
    "to": "n_9ef44eea-56b1-4cb9-b731-6952972dcd07",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5d35-9aca-4ec5-ae9e-6ae0b41445a9",
    "to": "n_9ef42332-d100-414f-91d1-11cc96081ffc",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6219-4f66-4210-a1a3-709281f688d5",
    "to": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6219-4f66-4210-a1a3-709281f688d5",
    "to": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6219-4f66-4210-a1a3-709281f688d5",
    "to": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6219-4f66-4210-a1a3-709281f688d5",
    "to": "n_9eec8811-1439-403f-ad41-29abd386c867",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6219-4f66-4210-a1a3-709281f688d5",
    "to": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6219-4f66-4210-a1a3-709281f688d5",
    "to": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
    "to": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
    "to": "n_9eec8811-1439-403f-ad41-29abd386c867",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
    "to": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
    "to": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
    "to": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec641e-b474-49c6-9b1b-287287af6fcc",
    "to": "n_9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec641e-b474-49c6-9b1b-287287af6fcc",
    "to": "n_9eec6369-3772-4583-ab71-fb4c439fa258",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec641e-b474-49c6-9b1b-287287af6fcc",
    "to": "n_9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec641e-b474-49c6-9b1b-287287af6fcc",
    "to": "n_9eec4ba7-f054-46ba-8480-80392ae053cb",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec641e-b474-49c6-9b1b-287287af6fcc",
    "to": "n_9eec48e5-c32e-4b56-8a6a-c4fbcc5d2824",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec62fb-8144-47d6-8b90-867b515c7a31",
    "to": "n_9ef41c48-ee26-4113-a029-2c663251b452",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec62fb-8144-47d6-8b90-867b515c7a31",
    "to": "n_9ef41cd8-08b3-487d-8009-8ddfd43fc159",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec62fb-8144-47d6-8b90-867b515c7a31",
    "to": "n_9ef41408-904d-4848-9bc5-f286b4716233",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec62fb-8144-47d6-8b90-867b515c7a31",
    "to": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec62fb-8144-47d6-8b90-867b515c7a31",
    "to": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6369-3772-4583-ab71-fb4c439fa258",
    "to": "n_9eec53a4-e754-4833-a3d3-c655d67f3ead",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6369-3772-4583-ab71-fb4c439fa258",
    "to": "n_9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6369-3772-4583-ab71-fb4c439fa258",
    "to": "n_9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6146-0218-40fc-bd3c-bbaab1a09adc",
    "to": "n_9ef4aac7-a86f-4b4f-b18f-1959a5fe97c6",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6146-0218-40fc-bd3c-bbaab1a09adc",
    "to": "n_9f0e8d43-d4ad-4c21-88ae-573266307668",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6146-0218-40fc-bd3c-bbaab1a09adc",
    "to": "n_9ef600f4-e452-42c5-9c2b-2d1746b471b3",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6146-0218-40fc-bd3c-bbaab1a09adc",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6146-0218-40fc-bd3c-bbaab1a09adc",
    "to": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6146-0218-40fc-bd3c-bbaab1a09adc",
    "to": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
    "to": "n_9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
    "to": "n_9eec4ba7-f054-46ba-8480-80392ae053cb",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
    "to": "n_9eec493f-2521-41c2-825f-01dcea8ca9e9",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6913-95cb-4ac1-b414-ad5723ddc6fc",
    "to": "n_9ef436d9-2b98-4722-b3a0-9a655b7b1439",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6913-95cb-4ac1-b414-ad5723ddc6fc",
    "to": "n_9f103382-4086-4fb0-a264-fc6f6b99075e",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6913-95cb-4ac1-b414-ad5723ddc6fc",
    "to": "n_9ef43873-772a-44fc-9200-1268038676fc",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6913-95cb-4ac1-b414-ad5723ddc6fc",
    "to": "n_9ef437a5-4b9b-4353-b1c5-6774c04a308f",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6913-95cb-4ac1-b414-ad5723ddc6fc",
    "to": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "distance": 10,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9eec6d25-228f-4a7e-9abd-d65daf71d0ae",
    "to": "n_9ef1fd45-298d-4a38-a597-4e68ce0cbfbf",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6d25-228f-4a7e-9abd-d65daf71d0ae",
    "to": "n_9ef1fce8-7b05-4c21-a8af-2f9c82b48bf2",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6d25-228f-4a7e-9abd-d65daf71d0ae",
    "to": "n_9eec47d1-2f39-495f-8738-0f70866c325f",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6d25-228f-4a7e-9abd-d65daf71d0ae",
    "to": "n_9ef4300f-fcb9-4e6d-a3cb-91f8d55bd945",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6d25-228f-4a7e-9abd-d65daf71d0ae",
    "to": "n_9f0e9fd6-0856-4523-b0a5-61a2af95607b",
    "distance": 16,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "to": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "to": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "to": "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "to": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
    "to": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
    "to": "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
    "to": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
    "to": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8289-bc6d-4603-a47d-dce86917cb47",
    "to": "n_9eec46a2-56c9-4caa-a762-7c07686f9651",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8289-bc6d-4603-a47d-dce86917cb47",
    "to": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8289-bc6d-4603-a47d-dce86917cb47",
    "to": "n_9ef65e28-b53c-4832-8d7f-577191b66c7d",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8289-bc6d-4603-a47d-dce86917cb47",
    "to": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8289-bc6d-4603-a47d-dce86917cb47",
    "to": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8289-bc6d-4603-a47d-dce86917cb47",
    "to": "n_9eec8811-1439-403f-ad41-29abd386c867",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "to": "n_9eec8811-1439-403f-ad41-29abd386c867",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "to": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "to": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8811-1439-403f-ad41-29abd386c867",
    "to": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8811-1439-403f-ad41-29abd386c867",
    "to": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8811-1439-403f-ad41-29abd386c867",
    "to": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0824fa-0478-4422-9533-e57738855be2",
    "to": "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0824fa-0478-4422-9533-e57738855be2",
    "to": "n_9eec4912-7411-4938-939a-ee5ee6759fc5",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0824fa-0478-4422-9533-e57738855be2",
    "to": "n_9ef427fc-873d-4224-b1cd-7020741182df",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0824fa-0478-4422-9533-e57738855be2",
    "to": "n_9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0824fa-0478-4422-9533-e57738855be2",
    "to": "n_9f045211-e8ff-4de9-9af7-a331e4ef8fbf",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
    "to": "n_9ef4a452-957a-4337-a0aa-d820c3ca2585",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
    "to": "n_9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
    "to": "n_9ef4ab02-c883-4250-836f-6045b967b4a7",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
    "to": "n_9ef41fd9-f7c3-4b41-8f79-d40040194a5c",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
    "to": "n_9ef856f6-4aaa-4051-9efc-df3b620afb8e",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
    "to": "n_9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9",
    "to": "n_9ef4a452-957a-4337-a0aa-d820c3ca2585",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9",
    "to": "n_9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9",
    "to": "n_9ef4ab02-c883-4250-836f-6045b967b4a7",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9",
    "to": "n_9ef41fd9-f7c3-4b41-8f79-d40040194a5c",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9",
    "to": "n_9ef856f6-4aaa-4051-9efc-df3b620afb8e",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fce8-7b05-4c21-a8af-2f9c82b48bf2",
    "to": "n_9eec47d1-2f39-495f-8738-0f70866c325f",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fce8-7b05-4c21-a8af-2f9c82b48bf2",
    "to": "n_9ef4300f-fcb9-4e6d-a3cb-91f8d55bd945",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fce8-7b05-4c21-a8af-2f9c82b48bf2",
    "to": "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fd45-298d-4a38-a597-4e68ce0cbfbf",
    "to": "n_9f0e9fd6-0856-4523-b0a5-61a2af95607b",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fd45-298d-4a38-a597-4e68ce0cbfbf",
    "to": "n_9ef41082-d06a-4f76-9792-0135f7ce6f84",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fd45-298d-4a38-a597-4e68ce0cbfbf",
    "to": "n_9ef427fc-873d-4224-b1cd-7020741182df",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1fd45-298d-4a38-a597-4e68ce0cbfbf",
    "to": "n_9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1f9c2-66ee-4880-9c25-906d6018af72",
    "to": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1f9c2-66ee-4880-9c25-906d6018af72",
    "to": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1f9c2-66ee-4880-9c25-906d6018af72",
    "to": "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1f9c2-66ee-4880-9c25-906d6018af72",
    "to": "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1f9c2-66ee-4880-9c25-906d6018af72",
    "to": "n_9ef4a67c-641d-49e9-bab0-ac1fe15197bc",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef1f9c2-66ee-4880-9c25-906d6018af72",
    "to": "n_ramp_pg_barat_1",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef20b93-9f38-4b5e-9028-637b9701b815",
    "to": "n_9ef44646-37b5-419e-a0f5-09f87e972e4b",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20b93-9f38-4b5e-9028-637b9701b815",
    "to": "n_9ef44eea-56b1-4cb9-b731-6952972dcd07",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef20b93-9f38-4b5e-9028-637b9701b815",
    "to": "n_9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef20b93-9f38-4b5e-9028-637b9701b815",
    "to": "n_9ef450f3-ce3e-4c22-8642-65ad20c319a7",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef20b93-9f38-4b5e-9028-637b9701b815",
    "to": "n_9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20b93-9f38-4b5e-9028-637b9701b815",
    "to": "n_9ef458d2-4832-4b1a-8a33-6257c714b266",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20676-216b-43ce-9d54-9a595739376e",
    "to": "n_9ef208dc-305d-4213-925b-a079e3920b2f",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20676-216b-43ce-9d54-9a595739376e",
    "to": "n_9eec8b11-abd1-451f-a001-9366d9525f8c",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef20676-216b-43ce-9d54-9a595739376e",
    "to": "n_9eec8be9-d219-4d39-b529-2fa1b20f676e",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20676-216b-43ce-9d54-9a595739376e",
    "to": "n_9ef20631-101c-4286-9207-fd69cbea56ca",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20676-216b-43ce-9d54-9a595739376e",
    "to": "n_9ef40a61-6906-441e-ae49-124f2ecae71f",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
    "to": "n_9ef20d3c-594a-406d-a451-0207d8460317",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
    "to": "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
    "to": "n_9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
    "to": "n_9eec3ca1-7cf8-4742-b23f-504d2a910ed9",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef208dc-305d-4213-925b-a079e3920b2f",
    "to": "n_9eec8b11-abd1-451f-a001-9366d9525f8c",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef208dc-305d-4213-925b-a079e3920b2f",
    "to": "n_9eec8be9-d219-4d39-b529-2fa1b20f676e",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef208dc-305d-4213-925b-a079e3920b2f",
    "to": "n_9ef20631-101c-4286-9207-fd69cbea56ca",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef208dc-305d-4213-925b-a079e3920b2f",
    "to": "n_9ef40a61-6906-441e-ae49-124f2ecae71f",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20d3c-594a-406d-a451-0207d8460317",
    "to": "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef20d3c-594a-406d-a451-0207d8460317",
    "to": "n_9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20d3c-594a-406d-a451-0207d8460317",
    "to": "n_9eec3ca1-7cf8-4742-b23f-504d2a910ed9",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5975-013a-4ff1-865d-3e814cca1c60",
    "to": "n_9ef41903-2f5c-4eab-b8d4-bdb0846b37db",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5975-013a-4ff1-865d-3e814cca1c60",
    "to": "n_9ef41ef1-9e5f-4df8-9a41-7395803fc4fd",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5975-013a-4ff1-865d-3e814cca1c60",
    "to": "n_9eec3639-57c0-4077-b843-1389d937744e",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5975-013a-4ff1-865d-3e814cca1c60",
    "to": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef29d60-dc1d-4396-b187-3b75b81fbe9f",
    "to": "n_9f0284a3-d404-4556-b098-336f9ab8e66c",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef29d60-dc1d-4396-b187-3b75b81fbe9f",
    "to": "n_9ef29ce8-d70e-482e-b888-008b68cc8102",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef29d60-dc1d-4396-b187-3b75b81fbe9f",
    "to": "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef29d60-dc1d-4396-b187-3b75b81fbe9f",
    "to": "n_9eec4da4-f111-434b-bbd0-9d4b8bf45a7d",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3ee74-4033-46f8-ab06-802820b21d52",
    "to": "n_9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3ee74-4033-46f8-ab06-802820b21d52",
    "to": "n_9eec381f-5274-4161-80f7-4e699eac0e46",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3ee74-4033-46f8-ab06-802820b21d52",
    "to": "n_9ef43465-0f14-498e-a0f4-2bda10296750",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3ee74-4033-46f8-ab06-802820b21d52",
    "to": "n_9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3ee74-4033-46f8-ab06-802820b21d52",
    "to": "n_9ef43582-ca29-4230-864c-64c6dcddaeab",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3ee74-4033-46f8-ab06-802820b21d52",
    "to": "n_9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
    "to": "n_9eec3892-7cee-4816-af43-dd4b1000e78c",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
    "to": "n_9ef5fb86-0e86-4a92-a670-4468621808a2",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
    "to": "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef29a9f-ea32-45d5-a427-0811149bc4ba",
    "to": "n_9ef4a191-73b1-4fc3-88ed-f3648ab9aaee",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef29a9f-ea32-45d5-a427-0811149bc4ba",
    "to": "n_9ef4245d-17e0-44e5-956c-c2c6d10b451a",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef29a9f-ea32-45d5-a427-0811149bc4ba",
    "to": "n_9ef425dc-26ef-44b7-a265-5899feef30b7",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef29a9f-ea32-45d5-a427-0811149bc4ba",
    "to": "n_9ef299f5-c381-44d8-8aea-de1e241f4122",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef29a9f-ea32-45d5-a427-0811149bc4ba",
    "to": "n_9f08b73c-8e45-4b48-bb0f-84e7414d40aa",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef29a9f-ea32-45d5-a427-0811149bc4ba",
    "to": "n_9eec5f01-f30a-431d-98c4-38824e518cad",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41814-0bb3-4cbe-be8d-5055030a41e6",
    "to": "n_9ef41765-e35b-4393-a937-9e700aa3cf7c",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41814-0bb3-4cbe-be8d-5055030a41e6",
    "to": "n_9eec5921-981f-4764-b519-cdd8d3c8f4d5",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41814-0bb3-4cbe-be8d-5055030a41e6",
    "to": "n_9eec5975-013a-4ff1-865d-3e814cca1c60",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41814-0bb3-4cbe-be8d-5055030a41e6",
    "to": "n_9ef41903-2f5c-4eab-b8d4-bdb0846b37db",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41814-0bb3-4cbe-be8d-5055030a41e6",
    "to": "n_9f0e814a-1ae9-4faa-8e37-4f4abff56408",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef41814-0bb3-4cbe-be8d-5055030a41e6",
    "to": "n_9eec3351-ba60-4179-87d4-79c3129b5a05",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41983-8988-4838-9623-413e70cdf3bd",
    "to": "n_9eec5a3b-c76b-446a-93ed-c3ffc3942461",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41983-8988-4838-9623-413e70cdf3bd",
    "to": "n_9ef49b56-c410-4339-a1e8-92fe2228b6e1",
    "distance": 8,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef41983-8988-4838-9623-413e70cdf3bd",
    "to": "n_9ef41ef1-9e5f-4df8-9a41-7395803fc4fd",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41983-8988-4838-9623-413e70cdf3bd",
    "to": "n_9ef419bb-3a9f-4824-bd0f-aab317663654",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41983-8988-4838-9623-413e70cdf3bd",
    "to": "n_9eec4063-2d11-4088-83f7-f5b5b87db1c6",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41765-e35b-4393-a937-9e700aa3cf7c",
    "to": "n_9eec5921-981f-4764-b519-cdd8d3c8f4d5",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41765-e35b-4393-a937-9e700aa3cf7c",
    "to": "n_9f0e814a-1ae9-4faa-8e37-4f4abff56408",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef41765-e35b-4393-a937-9e700aa3cf7c",
    "to": "n_9eec2a0c-67c6-45dd-b734-a727becf1428",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41765-e35b-4393-a937-9e700aa3cf7c",
    "to": "n_9eec5975-013a-4ff1-865d-3e814cca1c60",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41765-e35b-4393-a937-9e700aa3cf7c",
    "to": "n_9ef420fb-6408-42d8-9f2a-f29cb883aa56",
    "distance": 16,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef41082-d06a-4f76-9792-0135f7ce6f84",
    "to": "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef41082-d06a-4f76-9792-0135f7ce6f84",
    "to": "n_9f022b9a-08d9-4d89-bbfb-45854faec907",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41082-d06a-4f76-9792-0135f7ce6f84",
    "to": "n_9ef427fc-873d-4224-b1cd-7020741182df",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41082-d06a-4f76-9792-0135f7ce6f84",
    "to": "n_9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41082-d06a-4f76-9792-0135f7ce6f84",
    "to": "n_9f0824fa-0478-4422-9533-e57738855be2",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4000b-15f3-45a3-9fae-6e946eae2530",
    "to": "n_9f04457e-9e1a-416d-a0e3-d7a83426bf57",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4000b-15f3-45a3-9fae-6e946eae2530",
    "to": "n_9f0424ff-2689-4922-a15d-e0b2c4ad6f39",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4000b-15f3-45a3-9fae-6e946eae2530",
    "to": "n_9f0429c7-ef47-4b3b-afcc-3ab832af596f",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4000b-15f3-45a3-9fae-6e946eae2530",
    "to": "n_9ef658a0-3763-425d-a6ff-d1c872f18c07",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4000b-15f3-45a3-9fae-6e946eae2530",
    "to": "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4000b-15f3-45a3-9fae-6e946eae2530",
    "to": "n_9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed",
    "to": "n_9ef44d92-3068-4faa-bb72-1a289e6cb64b",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed",
    "to": "n_9eec5835-ae8a-444d-8e2e-30ad85e21688",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed",
    "to": "n_9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed",
    "to": "n_9ef46778-f72e-48d9-8638-d52495270de4",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed",
    "to": "n_9ef466e9-6958-46f7-9990-acb2e02f98e9",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed",
    "to": "n_9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef416b9-1f72-4103-8491-010ff40720d6",
    "to": "n_9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef416b9-1f72-4103-8491-010ff40720d6",
    "to": "n_9f045211-e8ff-4de9-9af7-a331e4ef8fbf",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef416b9-1f72-4103-8491-010ff40720d6",
    "to": "n_9ef40a61-6906-441e-ae49-124f2ecae71f",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef416b9-1f72-4103-8491-010ff40720d6",
    "to": "n_9ef20676-216b-43ce-9d54-9a595739376e",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef416b9-1f72-4103-8491-010ff40720d6",
    "to": "n_9ef208dc-305d-4213-925b-a079e3920b2f",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef418ad-89b7-42ae-9ded-64b0120c6add",
    "to": "n_9ef43f2e-9267-40be-9e80-bf82ee08cc74",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef418ad-89b7-42ae-9ded-64b0120c6add",
    "to": "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef418ad-89b7-42ae-9ded-64b0120c6add",
    "to": "n_9eec35f7-3089-4c32-abaf-364d5ca702ca",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef418ad-89b7-42ae-9ded-64b0120c6add",
    "to": "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef418ad-89b7-42ae-9ded-64b0120c6add",
    "to": "n_9eec3598-f6da-42c9-9555-ae9ffaa923c3",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef418ad-89b7-42ae-9ded-64b0120c6add",
    "to": "n_9f044dd6-50c4-4a00-8d41-f7236a1510f2",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef",
    "to": "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef",
    "to": "n_9f0429c7-ef47-4b3b-afcc-3ab832af596f",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef",
    "to": "n_9eec3892-7cee-4816-af43-dd4b1000e78c",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef",
    "to": "n_9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
    "to": "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
    "to": "n_9f0429c7-ef47-4b3b-afcc-3ab832af596f",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
    "to": "n_9f044dd6-50c4-4a00-8d41-f7236a1510f2",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42be5-3274-41ef-907e-f9447f142465",
    "to": "n_9ef42bb0-a4c8-43ba-85dd-13f7c4de9cd5",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42be5-3274-41ef-907e-f9447f142465",
    "to": "n_9ef42f70-e661-425d-8c50-d58b4d3cafb0",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42be5-3274-41ef-907e-f9447f142465",
    "to": "n_9eec4442-2ba6-471f-baf7-daf6334ae39e",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42be5-3274-41ef-907e-f9447f142465",
    "to": "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef42be5-3274-41ef-907e-f9447f142465",
    "to": "n_9ef65e28-b53c-4832-8d7f-577191b66c7d",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42be5-3274-41ef-907e-f9447f142465",
    "to": "n_9ef49a6b-7eea-4afa-b6db-8f3155843e27",
    "distance": 14,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef41b0f-aae3-47e5-9dba-f0b689e14a8a",
    "to": "n_9ef41ac9-8e90-40dc-ac33-ce82e633b42a",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41b0f-aae3-47e5-9dba-f0b689e14a8a",
    "to": "n_9ef41a7b-728f-41b1-835f-157d68a046c2",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41b0f-aae3-47e5-9dba-f0b689e14a8a",
    "to": "n_9eec5b63-618d-47af-949e-1bf25c595cdc",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41b0f-aae3-47e5-9dba-f0b689e14a8a",
    "to": "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41b0f-aae3-47e5-9dba-f0b689e14a8a",
    "to": "n_9ef41a00-bddb-4d7b-ba21-c09d9600a459",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41b0f-aae3-47e5-9dba-f0b689e14a8a",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4201c-8253-403d-a60b-ad792fd235cd",
    "to": "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4201c-8253-403d-a60b-ad792fd235cd",
    "to": "n_9ef4a452-957a-4337-a0aa-d820c3ca2585",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4201c-8253-403d-a60b-ad792fd235cd",
    "to": "n_9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4201c-8253-403d-a60b-ad792fd235cd",
    "to": "n_9ef4ab02-c883-4250-836f-6045b967b4a7",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4201c-8253-403d-a60b-ad792fd235cd",
    "to": "n_9ef41fd9-f7c3-4b41-8f79-d40040194a5c",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4201c-8253-403d-a60b-ad792fd235cd",
    "to": "n_9ef856f6-4aaa-4051-9efc-df3b620afb8e",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41ac9-8e90-40dc-ac33-ce82e633b42a",
    "to": "n_9ef41a00-bddb-4d7b-ba21-c09d9600a459",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41ac9-8e90-40dc-ac33-ce82e633b42a",
    "to": "n_9eec5b63-618d-47af-949e-1bf25c595cdc",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41ac9-8e90-40dc-ac33-ce82e633b42a",
    "to": "n_9ef41a7b-728f-41b1-835f-157d68a046c2",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41ac9-8e90-40dc-ac33-ce82e633b42a",
    "to": "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41ef1-9e5f-4df8-9a41-7395803fc4fd",
    "to": "n_9ef41903-2f5c-4eab-b8d4-bdb0846b37db",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41ef1-9e5f-4df8-9a41-7395803fc4fd",
    "to": "n_9eec5a3b-c76b-446a-93ed-c3ffc3942461",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41ef1-9e5f-4df8-9a41-7395803fc4fd",
    "to": "n_9eec3ef1-6ffd-49c2-bf9c-bdfb0b6a069d",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4245d-17e0-44e5-956c-c2c6d10b451a",
    "to": "n_9ef4a191-73b1-4fc3-88ed-f3648ab9aaee",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4245d-17e0-44e5-956c-c2c6d10b451a",
    "to": "n_9f08b73c-8e45-4b48-bb0f-84e7414d40aa",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4245d-17e0-44e5-956c-c2c6d10b451a",
    "to": "n_9ef425dc-26ef-44b7-a265-5899feef30b7",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4245d-17e0-44e5-956c-c2c6d10b451a",
    "to": "n_9f023d25-a930-4e11-9d2a-30c7da403dc4",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4245d-17e0-44e5-956c-c2c6d10b451a",
    "to": "n_9ef299f5-c381-44d8-8aea-de1e241f4122",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41c48-ee26-4113-a029-2c663251b452",
    "to": "n_9ef41408-904d-4848-9bc5-f286b4716233",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41c48-ee26-4113-a029-2c663251b452",
    "to": "n_9ef41cd8-08b3-487d-8009-8ddfd43fc159",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41c48-ee26-4113-a029-2c663251b452",
    "to": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41c48-ee26-4113-a029-2c663251b452",
    "to": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41cd8-08b3-487d-8009-8ddfd43fc159",
    "to": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41cd8-08b3-487d-8009-8ddfd43fc159",
    "to": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41cd8-08b3-487d-8009-8ddfd43fc159",
    "to": "n_9eec5e21-534d-4f67-af99-cb0bc85b5203",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41cd8-08b3-487d-8009-8ddfd43fc159",
    "to": "n_9ef41408-904d-4848-9bc5-f286b4716233",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42332-d100-414f-91d1-11cc96081ffc",
    "to": "n_9eec5da1-1dcf-4479-ba95-ac1cd8bf58aa",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef42332-d100-414f-91d1-11cc96081ffc",
    "to": "n_9ef41b3b-7e17-4273-927f-2b1f0ab90316",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42332-d100-414f-91d1-11cc96081ffc",
    "to": "n_9eec5f77-652b-4098-b4d1-ba4a37c4f70d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42332-d100-414f-91d1-11cc96081ffc",
    "to": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41b3b-7e17-4273-927f-2b1f0ab90316",
    "to": "n_9eec5f77-652b-4098-b4d1-ba4a37c4f70d",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41b3b-7e17-4273-927f-2b1f0ab90316",
    "to": "n_9f04167c-11e9-43c8-b3df-e10c93aed77f",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41b3b-7e17-4273-927f-2b1f0ab90316",
    "to": "n_9f025096-89fd-4467-a0c9-b532f98011c6",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41b3b-7e17-4273-927f-2b1f0ab90316",
    "to": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42f24-cb63-4482-89b4-61db2f234cb6",
    "to": "n_9ef42166-1220-46d8-a6fd-de5f668212fa",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42f24-cb63-4482-89b4-61db2f234cb6",
    "to": "n_9ef42de0-2728-4d95-9266-ededfeb06d8f",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42f24-cb63-4482-89b4-61db2f234cb6",
    "to": "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
    "distance": 7,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef42f24-cb63-4482-89b4-61db2f234cb6",
    "to": "n_9ef4320d-7c57-4a6c-85c2-3342ad96ed1b",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef427fc-873d-4224-b1cd-7020741182df",
    "to": "n_9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef427fc-873d-4224-b1cd-7020741182df",
    "to": "n_9eec4912-7411-4938-939a-ee5ee6759fc5",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef427fc-873d-4224-b1cd-7020741182df",
    "to": "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4262b-7e23-4de9-a258-6db15bd6594a",
    "to": "n_9ef299f5-c381-44d8-8aea-de1e241f4122",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4262b-7e23-4de9-a258-6db15bd6594a",
    "to": "n_9ef49a6b-7eea-4afa-b6db-8f3155843e27",
    "distance": 6,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef4262b-7e23-4de9-a258-6db15bd6594a",
    "to": "n_9ef425dc-26ef-44b7-a265-5899feef30b7",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4262b-7e23-4de9-a258-6db15bd6594a",
    "to": "n_9ef42f70-e661-425d-8c50-d58b4d3cafb0",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4262b-7e23-4de9-a258-6db15bd6594a",
    "to": "n_9ef4a191-73b1-4fc3-88ed-f3648ab9aaee",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4262b-7e23-4de9-a258-6db15bd6594a",
    "to": "n_9ef29a9f-ea32-45d5-a427-0811149bc4ba",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4912-7411-4938-939a-ee5ee6759fc5",
    "to": "n_9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4912-7411-4938-939a-ee5ee6759fc5",
    "to": "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4912-7411-4938-939a-ee5ee6759fc5",
    "to": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef43b2e-c860-4412-9ebc-3eac05690019",
    "to": "n_9f002543-5421-486d-a871-3acf00a391c4",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43b2e-c860-4412-9ebc-3eac05690019",
    "to": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef43b2e-c860-4412-9ebc-3eac05690019",
    "to": "n_9ef438d8-7f2d-43e8-8e6d-4d77adac4ce8",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43b2e-c860-4412-9ebc-3eac05690019",
    "to": "n_9ef4429f-b4c4-48da-a29e-2ca7bf6f6ea0",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43b2e-c860-4412-9ebc-3eac05690019",
    "to": "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43465-0f14-498e-a0f4-2bda10296750",
    "to": "n_9ef43582-ca29-4230-864c-64c6dcddaeab",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43465-0f14-498e-a0f4-2bda10296750",
    "to": "n_9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43465-0f14-498e-a0f4-2bda10296750",
    "to": "n_9ef43511-01c3-4fbc-9b5e-a1225d124919",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43465-0f14-498e-a0f4-2bda10296750",
    "to": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43465-0f14-498e-a0f4-2bda10296750",
    "to": "n_9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef438d8-7f2d-43e8-8e6d-4d77adac4ce8",
    "to": "n_9ef4429f-b4c4-48da-a29e-2ca7bf6f6ea0",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef438d8-7f2d-43e8-8e6d-4d77adac4ce8",
    "to": "n_9ef43873-772a-44fc-9200-1268038676fc",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef438d8-7f2d-43e8-8e6d-4d77adac4ce8",
    "to": "n_9ef437a5-4b9b-4353-b1c5-6774c04a308f",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef438d8-7f2d-43e8-8e6d-4d77adac4ce8",
    "to": "n_9f002543-5421-486d-a871-3acf00a391c4",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4300f-fcb9-4e6d-a3cb-91f8d55bd945",
    "to": "n_9eec47d1-2f39-495f-8738-0f70866c325f",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4300f-fcb9-4e6d-a3cb-91f8d55bd945",
    "to": "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4320d-7c57-4a6c-85c2-3342ad96ed1b",
    "to": "n_9ef42de0-2728-4d95-9266-ededfeb06d8f",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4320d-7c57-4a6c-85c2-3342ad96ed1b",
    "to": "n_9ef43435-8fd9-45cd-8998-6ab71d531e51",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4320d-7c57-4a6c-85c2-3342ad96ed1b",
    "to": "n_9ef42166-1220-46d8-a6fd-de5f668212fa",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4320d-7c57-4a6c-85c2-3342ad96ed1b",
    "to": "n_9ef434c0-ffea-4f46-9881-31f48f7c1d23",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef43873-772a-44fc-9200-1268038676fc",
    "to": "n_9ef437a5-4b9b-4353-b1c5-6774c04a308f",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43873-772a-44fc-9200-1268038676fc",
    "to": "n_9ef4429f-b4c4-48da-a29e-2ca7bf6f6ea0",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "to": "n_9ef44def-47b7-447b-af18-ef27b5a462b1",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "to": "n_9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "to": "n_9ef46778-f72e-48d9-8638-d52495270de4",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "to": "n_9ef43582-ca29-4230-864c-64c6dcddaeab",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "to": "n_9eec5835-ae8a-444d-8e2e-30ad85e21688",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "to": "n_9ef466e9-6958-46f7-9990-acb2e02f98e9",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef434c0-ffea-4f46-9881-31f48f7c1d23",
    "to": "n_9ef43435-8fd9-45cd-8998-6ab71d531e51",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef434c0-ffea-4f46-9881-31f48f7c1d23",
    "to": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "distance": 6,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef434c0-ffea-4f46-9881-31f48f7c1d23",
    "to": "n_9f103382-4086-4fb0-a264-fc6f6b99075e",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef434c0-ffea-4f46-9881-31f48f7c1d23",
    "to": "n_9ef436d9-2b98-4722-b3a0-9a655b7b1439",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43f2e-9267-40be-9e80-bf82ee08cc74",
    "to": "n_9eec35f7-3089-4c32-abaf-364d5ca702ca",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43f2e-9267-40be-9e80-bf82ee08cc74",
    "to": "n_9ef43c82-5745-43da-9a3f-1df23a31f580",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43f2e-9267-40be-9e80-bf82ee08cc74",
    "to": "n_9eec3598-f6da-42c9-9555-ae9ffaa923c3",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43f2e-9267-40be-9e80-bf82ee08cc74",
    "to": "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43f2e-9267-40be-9e80-bf82ee08cc74",
    "to": "n_9eec3892-7cee-4816-af43-dd4b1000e78c",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef43097-29d0-41c7-9ec7-4518477cc4ca",
    "to": "n_9f044dd6-50c4-4a00-8d41-f7236a1510f2",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43097-29d0-41c7-9ec7-4518477cc4ca",
    "to": "n_9eec4b71-c9d3-475b-9671-6f68298ff2b1",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43097-29d0-41c7-9ec7-4518477cc4ca",
    "to": "n_9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43097-29d0-41c7-9ec7-4518477cc4ca",
    "to": "n_9ef418ad-89b7-42ae-9ded-64b0120c6add",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43097-29d0-41c7-9ec7-4518477cc4ca",
    "to": "n_9ef402e4-4f80-4eee-bd9d-9bfcbec874fd",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43097-29d0-41c7-9ec7-4518477cc4ca",
    "to": "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
    "to": "n_9eec2db5-90f3-4401-99b1-64949e2d0957",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
    "to": "n_9f028c63-a19b-4dfa-866a-ec6d88af881e",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
    "to": "n_9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
    "to": "n_9f0e1ea7-663f-4256-8fae-b551329c34d5",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef440d5-5239-43fc-89dd-aa1a492ad5ae",
    "to": "n_9f0e2e1c-5615-407f-855b-5d19ec21fb83",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43582-ca29-4230-864c-64c6dcddaeab",
    "to": "n_9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43582-ca29-4230-864c-64c6dcddaeab",
    "to": "n_9ef43511-01c3-4fbc-9b5e-a1225d124919",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43582-ca29-4230-864c-64c6dcddaeab",
    "to": "n_9ef44def-47b7-447b-af18-ef27b5a462b1",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43511-01c3-4fbc-9b5e-a1225d124919",
    "to": "n_9eec3f9a-197f-45b4-bd44-47e2aadc8720",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43511-01c3-4fbc-9b5e-a1225d124919",
    "to": "n_9eec4e2c-2553-4216-b367-a001f647573b",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43511-01c3-4fbc-9b5e-a1225d124919",
    "to": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
    "to": "n_9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
    "to": "n_9ef43511-01c3-4fbc-9b5e-a1225d124919",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
    "to": "n_9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44d92-3068-4faa-bb72-1a289e6cb64b",
    "to": "n_9eec5835-ae8a-444d-8e2e-30ad85e21688",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44d92-3068-4faa-bb72-1a289e6cb64b",
    "to": "n_9ef46778-f72e-48d9-8638-d52495270de4",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44d92-3068-4faa-bb72-1a289e6cb64b",
    "to": "n_9ef466e9-6958-46f7-9990-acb2e02f98e9",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44d92-3068-4faa-bb72-1a289e6cb64b",
    "to": "n_9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44d92-3068-4faa-bb72-1a289e6cb64b",
    "to": "n_9ef44def-47b7-447b-af18-ef27b5a462b1",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef450f3-ce3e-4c22-8642-65ad20c319a7",
    "to": "n_9ef458d2-4832-4b1a-8a33-6257c714b266",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef450f3-ce3e-4c22-8642-65ad20c319a7",
    "to": "n_9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef450f3-ce3e-4c22-8642-65ad20c319a7",
    "to": "n_9ef459f1-df1c-44a5-ac1b-7a294009467a",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef450f3-ce3e-4c22-8642-65ad20c319a7",
    "to": "n_9ef44646-37b5-419e-a0f5-09f87e972e4b",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef450f3-ce3e-4c22-8642-65ad20c319a7",
    "to": "n_9ef44eea-56b1-4cb9-b731-6952972dcd07",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef44646-37b5-419e-a0f5-09f87e972e4b",
    "to": "n_9ef44eea-56b1-4cb9-b731-6952972dcd07",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef44646-37b5-419e-a0f5-09f87e972e4b",
    "to": "n_9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef44646-37b5-419e-a0f5-09f87e972e4b",
    "to": "n_9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44646-37b5-419e-a0f5-09f87e972e4b",
    "to": "n_9ef458d2-4832-4b1a-8a33-6257c714b266",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44eea-56b1-4cb9-b731-6952972dcd07",
    "to": "n_9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef44eea-56b1-4cb9-b731-6952972dcd07",
    "to": "n_9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef44eea-56b1-4cb9-b731-6952972dcd07",
    "to": "n_9ef458d2-4832-4b1a-8a33-6257c714b266",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
    "to": "n_9ef458d2-4832-4b1a-8a33-6257c714b266",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
    "to": "n_9ef459f1-df1c-44a5-ac1b-7a294009467a",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef44def-47b7-447b-af18-ef27b5a462b1",
    "to": "n_9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44def-47b7-447b-af18-ef27b5a462b1",
    "to": "n_9ef46778-f72e-48d9-8638-d52495270de4",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44def-47b7-447b-af18-ef27b5a462b1",
    "to": "n_9ef466e9-6958-46f7-9990-acb2e02f98e9",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44def-47b7-447b-af18-ef27b5a462b1",
    "to": "n_9eec5835-ae8a-444d-8e2e-30ad85e21688",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef45303-39bf-42e7-b9bf-17e2e74ea89f",
    "to": "n_9eec3409-ab10-4942-ace9-64a81c099954",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef45303-39bf-42e7-b9bf-17e2e74ea89f",
    "to": "n_9ef43b2e-c860-4412-9ebc-3eac05690019",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef45303-39bf-42e7-b9bf-17e2e74ea89f",
    "to": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef45303-39bf-42e7-b9bf-17e2e74ea89f",
    "to": "n_9eec3107-c317-452c-82f6-29cc2dd82115",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
    "to": "n_9eec5273-27e9-4d33-a4ba-d701064346d2",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
    "to": "n_9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
    "to": "n_9ef450f3-ce3e-4c22-8642-65ad20c319a7",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4616e-3d65-4194-905f-35e2387dd1aa",
    "to": "n_9ef46046-3cb9-4eb9-ac80-316d5ede1524",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4616e-3d65-4194-905f-35e2387dd1aa",
    "to": "n_9ef657c0-df64-4788-8c53-46c926b8ba6d",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4616e-3d65-4194-905f-35e2387dd1aa",
    "to": "n_9ef45d8e-608d-422e-9950-1a6919cd762b",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4616e-3d65-4194-905f-35e2387dd1aa",
    "to": "n_9ef45662-4634-4dd1-a62d-8639afdfa1c8",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4616e-3d65-4194-905f-35e2387dd1aa",
    "to": "n_9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef45d8e-608d-422e-9950-1a6919cd762b",
    "to": "n_9ef45662-4634-4dd1-a62d-8639afdfa1c8",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef45d8e-608d-422e-9950-1a6919cd762b",
    "to": "n_9ef657c0-df64-4788-8c53-46c926b8ba6d",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef45d8e-608d-422e-9950-1a6919cd762b",
    "to": "n_9ef46046-3cb9-4eb9-ac80-316d5ede1524",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef45d8e-608d-422e-9950-1a6919cd762b",
    "to": "n_9ef459f1-df1c-44a5-ac1b-7a294009467a",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef45662-4634-4dd1-a62d-8639afdfa1c8",
    "to": "n_9ef657c0-df64-4788-8c53-46c926b8ba6d",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef45662-4634-4dd1-a62d-8639afdfa1c8",
    "to": "n_9ef46046-3cb9-4eb9-ac80-316d5ede1524",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef45662-4634-4dd1-a62d-8639afdfa1c8",
    "to": "n_9ef459f1-df1c-44a5-ac1b-7a294009467a",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef45662-4634-4dd1-a62d-8639afdfa1c8",
    "to": "n_9ef458d2-4832-4b1a-8a33-6257c714b266",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef459f1-df1c-44a5-ac1b-7a294009467a",
    "to": "n_9ef458d2-4832-4b1a-8a33-6257c714b266",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef459f1-df1c-44a5-ac1b-7a294009467a",
    "to": "n_9ef657c0-df64-4788-8c53-46c926b8ba6d",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef466e9-6958-46f7-9990-acb2e02f98e9",
    "to": "n_9ef46778-f72e-48d9-8638-d52495270de4",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef466e9-6958-46f7-9990-acb2e02f98e9",
    "to": "n_9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "to": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "to": "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "to": "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "to": "n_9ef4a67c-641d-49e9-bab0-ac1fe15197bc",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef496b8-20fc-4b8c-a8d0-497f94d9212b",
    "to": "n_ramp_pg_barat_1",
    "distance": 2,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef496b8-20fc-4b8c-a8d0-497f94d9212b",
    "to": "n_9ef1f9c2-66ee-4880-9c25-906d6018af72",
    "distance": 6,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef496b8-20fc-4b8c-a8d0-497f94d9212b",
    "to": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "distance": 6,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef496b8-20fc-4b8c-a8d0-497f94d9212b",
    "to": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "distance": 6,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef496b8-20fc-4b8c-a8d0-497f94d9212b",
    "to": "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
    "distance": 6,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef496b8-20fc-4b8c-a8d0-497f94d9212b",
    "to": "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d",
    "distance": 6,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
    "to": "n_9ef4209c-ee9c-4f29-87d8-7b5565dcc79b",
    "distance": 5,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
    "to": "n_9ef42166-1220-46d8-a6fd-de5f668212fa",
    "distance": 7,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
    "to": "n_9eec2a0c-67c6-45dd-b734-a727becf1428",
    "distance": 10,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
    "to": "n_9f0e78a2-57d8-4b14-8bb9-12fb32d71c20",
    "distance": 10,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef49a6b-7eea-4afa-b6db-8f3155843e27",
    "to": "n_9ef299f5-c381-44d8-8aea-de1e241f4122",
    "distance": 5,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49a6b-7eea-4afa-b6db-8f3155843e27",
    "to": "n_9ef42f70-e661-425d-8c50-d58b4d3cafb0",
    "distance": 6,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49a6b-7eea-4afa-b6db-8f3155843e27",
    "to": "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa",
    "distance": 8,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49a6b-7eea-4afa-b6db-8f3155843e27",
    "to": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "distance": 8,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49a6b-7eea-4afa-b6db-8f3155843e27",
    "to": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
    "distance": 8,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9f0e1ea7-663f-4256-8fae-b551329c34d5",
    "to": "n_9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0e1ea7-663f-4256-8fae-b551329c34d5",
    "to": "n_9f0e2e1c-5615-407f-855b-5d19ec21fb83",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0e1ea7-663f-4256-8fae-b551329c34d5",
    "to": "n_9eec4da4-f111-434b-bbd0-9d4b8bf45a7d",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0e1ea7-663f-4256-8fae-b551329c34d5",
    "to": "n_9ef43c55-ea07-4036-ad75-bd47d82123cc",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef49b56-c410-4339-a1e8-92fe2228b6e1",
    "to": "n_9eec5a3b-c76b-446a-93ed-c3ffc3942461",
    "distance": 2,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49b56-c410-4339-a1e8-92fe2228b6e1",
    "to": "n_9ef419bb-3a9f-4824-bd0f-aab317663654",
    "distance": 8,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49b56-c410-4339-a1e8-92fe2228b6e1",
    "to": "n_9eec4ba7-f054-46ba-8480-80392ae053cb",
    "distance": 9,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49b56-c410-4339-a1e8-92fe2228b6e1",
    "to": "n_9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
    "distance": 10,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49846-fc66-442b-b42a-2c15f7eb65dc",
    "to": "n_9ef49cc2-bd5a-4385-829b-aff6d038a441",
    "distance": 3,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef49846-fc66-442b-b42a-2c15f7eb65dc",
    "to": "n_9eec5eab-2e3d-4bbe-8c13-8e8a838b3440",
    "distance": 4,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49846-fc66-442b-b42a-2c15f7eb65dc",
    "to": "n_9ef1fa2f-d41d-4b16-a2bd-9e66dedeffc9",
    "distance": 9,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef49846-fc66-442b-b42a-2c15f7eb65dc",
    "to": "n_9f023d25-a930-4e11-9d2a-30c7da403dc4",
    "distance": 9,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef49846-fc66-442b-b42a-2c15f7eb65dc",
    "to": "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
    "distance": 9,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49846-fc66-442b-b42a-2c15f7eb65dc",
    "to": "n_9ef4a452-957a-4337-a0aa-d820c3ca2585",
    "distance": 9,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef4a191-73b1-4fc3-88ed-f3648ab9aaee",
    "to": "n_9ef425dc-26ef-44b7-a265-5899feef30b7",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4a191-73b1-4fc3-88ed-f3648ab9aaee",
    "to": "n_9f08b73c-8e45-4b48-bb0f-84e7414d40aa",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4a191-73b1-4fc3-88ed-f3648ab9aaee",
    "to": "n_9ef299f5-c381-44d8-8aea-de1e241f4122",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4a452-957a-4337-a0aa-d820c3ca2585",
    "to": "n_9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4a452-957a-4337-a0aa-d820c3ca2585",
    "to": "n_9ef4ab02-c883-4250-836f-6045b967b4a7",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4a452-957a-4337-a0aa-d820c3ca2585",
    "to": "n_9ef41fd9-f7c3-4b41-8f79-d40040194a5c",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4a452-957a-4337-a0aa-d820c3ca2585",
    "to": "n_9ef856f6-4aaa-4051-9efc-df3b620afb8e",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4aac7-a86f-4b4f-b18f-1959a5fe97c6",
    "to": "n_9f0e8d43-d4ad-4c21-88ae-573266307668",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4aac7-a86f-4b4f-b18f-1959a5fe97c6",
    "to": "n_9ef600f4-e452-42c5-9c2b-2d1746b471b3",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4aac7-a86f-4b4f-b18f-1959a5fe97c6",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4aac7-a86f-4b4f-b18f-1959a5fe97c6",
    "to": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4aac7-a86f-4b4f-b18f-1959a5fe97c6",
    "to": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef49cc2-bd5a-4385-829b-aff6d038a441",
    "to": "n_9eec5eab-2e3d-4bbe-8c13-8e8a838b3440",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef49cc2-bd5a-4385-829b-aff6d038a441",
    "to": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef49cc2-bd5a-4385-829b-aff6d038a441",
    "to": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef49cc2-bd5a-4385-829b-aff6d038a441",
    "to": "n_9eec5e21-534d-4f67-af99-cb0bc85b5203",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef49cc2-bd5a-4385-829b-aff6d038a441",
    "to": "n_9f025096-89fd-4467-a0c9-b532f98011c6",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef42166-1220-46d8-a6fd-de5f668212fa",
    "to": "n_9ef42de0-2728-4d95-9266-ededfeb06d8f",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef5fb86-0e86-4a92-a670-4468621808a2",
    "to": "n_9ef3f5c6-9924-44b8-975c-3f59c93577ba",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef5fb86-0e86-4a92-a670-4468621808a2",
    "to": "n_9eec3892-7cee-4816-af43-dd4b1000e78c",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef5fb86-0e86-4a92-a670-4468621808a2",
    "to": "n_9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "to": "n_9f103382-4086-4fb0-a264-fc6f6b99075e",
    "distance": 3,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "to": "n_9f028c63-a19b-4dfa-866a-ec6d88af881e",
    "distance": 6,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "to": "n_9ef436d9-2b98-4722-b3a0-9a655b7b1439",
    "distance": 6,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "to": "n_9eec2db5-90f3-4401-99b1-64949e2d0957",
    "distance": 9,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "to": "n_9ef43435-8fd9-45cd-8998-6ab71d531e51",
    "distance": 9,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9f0e8d43-d4ad-4c21-88ae-573266307668",
    "to": "n_9ef600f4-e452-42c5-9c2b-2d1746b471b3",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e8d43-d4ad-4c21-88ae-573266307668",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e8d43-d4ad-4c21-88ae-573266307668",
    "to": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e8d43-d4ad-4c21-88ae-573266307668",
    "to": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e9fd6-0856-4523-b0a5-61a2af95607b",
    "to": "n_9ef427fc-873d-4224-b1cd-7020741182df",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e9fd6-0856-4523-b0a5-61a2af95607b",
    "to": "n_9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e9fd6-0856-4523-b0a5-61a2af95607b",
    "to": "n_9eec4912-7411-4938-939a-ee5ee6759fc5",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e9fd6-0856-4523-b0a5-61a2af95607b",
    "to": "n_9ef41082-d06a-4f76-9792-0135f7ce6f84",
    "distance": 16,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3283-3138-4515-ad44-0248a14e28ca",
    "to": "n_9ef43c55-ea07-4036-ad75-bd47d82123cc",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3283-3138-4515-ad44-0248a14e28ca",
    "to": "n_9ef29eb0-2314-43d9-b495-5dba98d84e95",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3283-3138-4515-ad44-0248a14e28ca",
    "to": "n_9eec308f-113a-45aa-9abe-4a5c18ac0ed9",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3283-3138-4515-ad44-0248a14e28ca",
    "to": "n_9f0e2e1c-5615-407f-855b-5d19ec21fb83",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e814a-1ae9-4faa-8e37-4f4abff56408",
    "to": "n_9eec5921-981f-4764-b519-cdd8d3c8f4d5",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e814a-1ae9-4faa-8e37-4f4abff56408",
    "to": "n_9ef4209c-ee9c-4f29-87d8-7b5565dcc79b",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e814a-1ae9-4faa-8e37-4f4abff56408",
    "to": "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
    "distance": 12,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9f0e814a-1ae9-4faa-8e37-4f4abff56408",
    "to": "n_9f0e78a2-57d8-4b14-8bb9-12fb32d71c20",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef436d9-2b98-4722-b3a0-9a655b7b1439",
    "to": "n_9f103382-4086-4fb0-a264-fc6f6b99075e",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef436d9-2b98-4722-b3a0-9a655b7b1439",
    "to": "n_9ef43435-8fd9-45cd-8998-6ab71d531e51",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e78a2-57d8-4b14-8bb9-12fb32d71c20",
    "to": "n_9ef4209c-ee9c-4f29-87d8-7b5565dcc79b",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e78a2-57d8-4b14-8bb9-12fb32d71c20",
    "to": "n_9ef420fb-6408-42d8-9f2a-f29cb883aa56",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e78a2-57d8-4b14-8bb9-12fb32d71c20",
    "to": "n_9ef42f24-cb63-4482-89b4-61db2f234cb6",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0e78a2-57d8-4b14-8bb9-12fb32d71c20",
    "to": "n_9ef42166-1220-46d8-a6fd-de5f668212fa",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8b11-abd1-451f-a001-9366d9525f8c",
    "to": "n_9eec8be9-d219-4d39-b529-2fa1b20f676e",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8b11-abd1-451f-a001-9366d9525f8c",
    "to": "n_9ef20631-101c-4286-9207-fd69cbea56ca",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8b11-abd1-451f-a001-9366d9525f8c",
    "to": "n_9ef40a61-6906-441e-ae49-124f2ecae71f",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8b11-abd1-451f-a001-9366d9525f8c",
    "to": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
    "to": "n_9f045211-e8ff-4de9-9af7-a331e4ef8fbf",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
    "to": "n_9ef40a61-6906-441e-ae49-124f2ecae71f",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
    "to": "n_9ef20676-216b-43ce-9d54-9a595739376e",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
    "to": "n_9ef208dc-305d-4213-925b-a079e3920b2f",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4209c-ee9c-4f29-87d8-7b5565dcc79b",
    "to": "n_9ef42f24-cb63-4482-89b4-61db2f234cb6",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4209c-ee9c-4f29-87d8-7b5565dcc79b",
    "to": "n_9ef42166-1220-46d8-a6fd-de5f668212fa",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef437a5-4b9b-4353-b1c5-6774c04a308f",
    "to": "n_9ef4429f-b4c4-48da-a29e-2ca7bf6f6ea0",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef65160-ea83-4730-b212-f74ab78979dc",
    "to": "n_9eec3ca1-7cf8-4742-b23f-504d2a910ed9",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef65160-ea83-4730-b212-f74ab78979dc",
    "to": "n_9eec36ca-247f-46e9-af16-2d11dcd45061",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef65160-ea83-4730-b212-f74ab78979dc",
    "to": "n_9eec3e98-c6c5-47a0-8a0f-70576cf08665",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef65160-ea83-4730-b212-f74ab78979dc",
    "to": "n_9eec346f-adde-4314-96ed-59b4f8396dfc",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0e2e1c-5615-407f-855b-5d19ec21fb83",
    "to": "n_9ef43c55-ea07-4036-ad75-bd47d82123cc",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0e2e1c-5615-407f-855b-5d19ec21fb83",
    "to": "n_9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef658a0-3763-425d-a6ff-d1c872f18c07",
    "to": "n_9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef658a0-3763-425d-a6ff-d1c872f18c07",
    "to": "n_9f04457e-9e1a-416d-a0e3-d7a83426bf57",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef658a0-3763-425d-a6ff-d1c872f18c07",
    "to": "n_9ef657c0-df64-4788-8c53-46c926b8ba6d",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef658a0-3763-425d-a6ff-d1c872f18c07",
    "to": "n_9ef45d8e-608d-422e-9950-1a6919cd762b",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef658a0-3763-425d-a6ff-d1c872f18c07",
    "to": "n_9ef46046-3cb9-4eb9-ac80-316d5ede1524",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef658a0-3763-425d-a6ff-d1c872f18c07",
    "to": "n_9ef45662-4634-4dd1-a62d-8639afdfa1c8",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
    "to": "n_9ef4ab02-c883-4250-836f-6045b967b4a7",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
    "to": "n_9ef41fd9-f7c3-4b41-8f79-d40040194a5c",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
    "to": "n_9ef856f6-4aaa-4051-9efc-df3b620afb8e",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f021f9e-ed2f-43ac-98ce-0a017f3a61ee",
    "to": "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f002543-5421-486d-a871-3acf00a391c4",
    "to": "n_9ef4429f-b4c4-48da-a29e-2ca7bf6f6ea0",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f002543-5421-486d-a871-3acf00a391c4",
    "to": "n_9eec2f76-e610-4637-8a30-e18c0efb416d",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f002543-5421-486d-a871-3acf00a391c4",
    "to": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "distance": 16,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa",
    "to": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa",
    "to": "n_9eec6219-4f66-4210-a1a3-709281f688d5",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa",
    "to": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5eab-2e3d-4bbe-8c13-8e8a838b3440",
    "to": "n_9f025096-89fd-4467-a0c9-b532f98011c6",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5eab-2e3d-4bbe-8c13-8e8a838b3440",
    "to": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5eab-2e3d-4bbe-8c13-8e8a838b3440",
    "to": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf",
    "to": "n_9f022b9a-08d9-4d89-bbfb-45854faec907",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf",
    "to": "n_9eec47d1-2f39-495f-8738-0f70866c325f",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf",
    "to": "n_9eec4442-2ba6-471f-baf7-daf6334ae39e",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef68859-dde3-4be0-8584-b6cfb0d547cf",
    "to": "n_9f04167c-11e9-43c8-b3df-e10c93aed77f",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef65e28-b53c-4832-8d7f-577191b66c7d",
    "to": "n_9eec46a2-56c9-4caa-a762-7c07686f9651",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef65e28-b53c-4832-8d7f-577191b66c7d",
    "to": "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef65e28-b53c-4832-8d7f-577191b66c7d",
    "to": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef65e28-b53c-4832-8d7f-577191b66c7d",
    "to": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef65e28-b53c-4832-8d7f-577191b66c7d",
    "to": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4ab02-c883-4250-836f-6045b967b4a7",
    "to": "n_9ef41fd9-f7c3-4b41-8f79-d40040194a5c",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4ab02-c883-4250-836f-6045b967b4a7",
    "to": "n_9ef856f6-4aaa-4051-9efc-df3b620afb8e",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5f77-652b-4098-b4d1-ba4a37c4f70d",
    "to": "n_9eec60a0-10e3-480c-89e8-87d033c0f0db",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5f77-652b-4098-b4d1-ba4a37c4f70d",
    "to": "n_9ef41408-904d-4848-9bc5-f286b4716233",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5f77-652b-4098-b4d1-ba4a37c4f70d",
    "to": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5f77-652b-4098-b4d1-ba4a37c4f70d",
    "to": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "to": "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "to": "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "to": "n_9ef4a67c-641d-49e9-bab0-ac1fe15197bc",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef600f4-e452-42c5-9c2b-2d1746b471b3",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef600f4-e452-42c5-9c2b-2d1746b471b3",
    "to": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef600f4-e452-42c5-9c2b-2d1746b471b3",
    "to": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
    "to": "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
    "to": "n_9ef4a67c-641d-49e9-bab0-ac1fe15197bc",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f025096-89fd-4467-a0c9-b532f98011c6",
    "to": "n_9f04167c-11e9-43c8-b3df-e10c93aed77f",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f025096-89fd-4467-a0c9-b532f98011c6",
    "to": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f025096-89fd-4467-a0c9-b532f98011c6",
    "to": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f025096-89fd-4467-a0c9-b532f98011c6",
    "to": "n_9eec5e21-534d-4f67-af99-cb0bc85b5203",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "to": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "to": "n_9eec5e21-534d-4f67-af99-cb0bc85b5203",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41408-904d-4848-9bc5-f286b4716233",
    "to": "n_9eec5dc3-3fc7-419d-a89a-288ae0836f24",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41408-904d-4848-9bc5-f286b4716233",
    "to": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0235ec-d630-40e3-97cd-ed161e21d640",
    "to": "n_9eec5e21-534d-4f67-af99-cb0bc85b5203",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f023d25-a930-4e11-9d2a-30c7da403dc4",
    "to": "n_9f08b73c-8e45-4b48-bb0f-84e7414d40aa",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f023d25-a930-4e11-9d2a-30c7da403dc4",
    "to": "n_9ef4a89d-55c0-4abd-8fce-422c2dfa06c3",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f023d25-a930-4e11-9d2a-30c7da403dc4",
    "to": "n_9ef4a452-957a-4337-a0aa-d820c3ca2585",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f023d25-a930-4e11-9d2a-30c7da403dc4",
    "to": "n_9ef85af4-2b46-4fde-bdb0-f2c3b8fd6f4f",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f023d25-a930-4e11-9d2a-30c7da403dc4",
    "to": "n_9ef4ab02-c883-4250-836f-6045b967b4a7",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec46a2-56c9-4caa-a762-7c07686f9651",
    "to": "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec46a2-56c9-4caa-a762-7c07686f9651",
    "to": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec46a2-56c9-4caa-a762-7c07686f9651",
    "to": "n_9eec618c-7c8b-4223-bd90-017066855a3a",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec46a2-56c9-4caa-a762-7c07686f9651",
    "to": "n_9eec89dd-5a61-4241-8d9c-73f0d0ce6398",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f022b9a-08d9-4d89-bbfb-45854faec907",
    "to": "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f022b9a-08d9-4d89-bbfb-45854faec907",
    "to": "n_9f0824fa-0478-4422-9533-e57738855be2",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f022b9a-08d9-4d89-bbfb-45854faec907",
    "to": "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
    "to": "n_9f047a55-3030-4668-a3fe-c99dc724bda2",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
    "to": "n_9eec493f-2521-41c2-825f-01dcea8ca9e9",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4eb5-ea9e-4815-bfa9-3468ae4eba3d",
    "to": "n_9eec4ba7-f054-46ba-8480-80392ae053cb",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5a3b-c76b-446a-93ed-c3ffc3942461",
    "to": "n_9ef419bb-3a9f-4824-bd0f-aab317663654",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5a3b-c76b-446a-93ed-c3ffc3942461",
    "to": "n_9eec4ba7-f054-46ba-8480-80392ae053cb",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5a3b-c76b-446a-93ed-c3ffc3942461",
    "to": "n_9eec64a5-b2f8-4cf2-a7da-c8328889ad1d",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5273-27e9-4d33-a4ba-d701064346d2",
    "to": "n_9ef458d2-4832-4b1a-8a33-6257c714b266",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5273-27e9-4d33-a4ba-d701064346d2",
    "to": "n_9ef459f1-df1c-44a5-ac1b-7a294009467a",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5273-27e9-4d33-a4ba-d701064346d2",
    "to": "n_9ef450f3-ce3e-4c22-8642-65ad20c319a7",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5273-27e9-4d33-a4ba-d701064346d2",
    "to": "n_9ef44f9d-5aad-43ee-a93f-dd7a6348a1a9",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5273-27e9-4d33-a4ba-d701064346d2",
    "to": "n_9eec517e-55bd-4c97-9504-ed63c5e8efbf",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5da1-1dcf-4479-ba95-ac1cd8bf58aa",
    "to": "n_9eec60a0-10e3-480c-89e8-87d033c0f0db",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5da1-1dcf-4479-ba95-ac1cd8bf58aa",
    "to": "n_9ef443b5-fe38-4621-8e9f-5f1e1f868cf5",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5da1-1dcf-4479-ba95-ac1cd8bf58aa",
    "to": "n_9eec5f77-652b-4098-b4d1-ba4a37c4f70d",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec5da1-1dcf-4479-ba95-ac1cd8bf58aa",
    "to": "n_9ef41b3b-7e17-4273-927f-2b1f0ab90316",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4da4-f111-434b-bbd0-9d4b8bf45a7d",
    "to": "n_9ef29ce8-d70e-482e-b888-008b68cc8102",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4da4-f111-434b-bbd0-9d4b8bf45a7d",
    "to": "n_9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4da4-f111-434b-bbd0-9d4b8bf45a7d",
    "to": "n_9f0e2e1c-5615-407f-855b-5d19ec21fb83",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
    "to": "n_9ef20eca-4ad9-4854-a6ca-6c0fd2b366a5",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
    "to": "n_9eec378f-3ff2-44ac-b695-059ecb43a7f5",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
    "to": "n_9eec3ca1-7cf8-4742-b23f-504d2a910ed9",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8be9-d219-4d39-b529-2fa1b20f676e",
    "to": "n_9ef20631-101c-4286-9207-fd69cbea56ca",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8be9-d219-4d39-b529-2fa1b20f676e",
    "to": "n_9ef40a61-6906-441e-ae49-124f2ecae71f",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8be9-d219-4d39-b529-2fa1b20f676e",
    "to": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46778-f72e-48d9-8638-d52495270de4",
    "to": "n_9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef46046-3cb9-4eb9-ac80-316d5ede1524",
    "to": "n_9ef657c0-df64-4788-8c53-46c926b8ba6d",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef46046-3cb9-4eb9-ac80-316d5ede1524",
    "to": "n_9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20631-101c-4286-9207-fd69cbea56ca",
    "to": "n_9ef40a61-6906-441e-ae49-124f2ecae71f",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20631-101c-4286-9207-fd69cbea56ca",
    "to": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec493f-2521-41c2-825f-01dcea8ca9e9",
    "to": "n_9f02c559-6a1c-4dce-9930-267b455913ef",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec493f-2521-41c2-825f-01dcea8ca9e9",
    "to": "n_9f047a55-3030-4668-a3fe-c99dc724bda2",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec493f-2521-41c2-825f-01dcea8ca9e9",
    "to": "n_9eec4ba7-f054-46ba-8480-80392ae053cb",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3f9a-197f-45b4-bd44-47e2aadc8720",
    "to": "n_9eec4e2c-2553-4216-b367-a001f647573b",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3f9a-197f-45b4-bd44-47e2aadc8720",
    "to": "n_9ef43582-ca29-4230-864c-64c6dcddaeab",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3f9a-197f-45b4-bd44-47e2aadc8720",
    "to": "n_9ef43465-0f14-498e-a0f4-2bda10296750",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3f9a-197f-45b4-bd44-47e2aadc8720",
    "to": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "to": "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
    "distance": 2,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "to": "n_9f0284a3-d404-4556-b098-336f9ab8e66c",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "to": "n_9ef29d60-dc1d-4396-b187-3b75b81fbe9f",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "to": "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "to": "n_9ef29dea-c489-4e46-81d9-93fbacb6aedc",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f028647-8a91-4784-b238-3f6a5df45948",
    "to": "n_9eec4c68-a9d5-4e12-b9d0-107dcd456160",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
    "to": "n_9f0284a3-d404-4556-b098-336f9ab8e66c",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
    "to": "n_9eec4c68-a9d5-4e12-b9d0-107dcd456160",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0287c4-48e5-4b6c-b95c-41b4b99856c5",
    "to": "n_9ef29dea-c489-4e46-81d9-93fbacb6aedc",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef29ce8-d70e-482e-b888-008b68cc8102",
    "to": "n_9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef29ce8-d70e-482e-b888-008b68cc8102",
    "to": "n_9f0e1ea7-663f-4256-8fae-b551329c34d5",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec46bc-9f36-49ad-952f-991f14056920",
    "to": "n_9eec3e1f-c93c-44a7-bd91-d98e11fc213b",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec46bc-9f36-49ad-952f-991f14056920",
    "to": "n_9eec3e98-c6c5-47a0-8a0f-70576cf08665",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec46bc-9f36-49ad-952f-991f14056920",
    "to": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43435-8fd9-45cd-8998-6ab71d531e51",
    "to": "n_9ef42de0-2728-4d95-9266-ededfeb06d8f",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef43435-8fd9-45cd-8998-6ab71d531e51",
    "to": "n_9f103382-4086-4fb0-a264-fc6f6b99075e",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4e2c-2553-4216-b367-a001f647573b",
    "to": "n_9ef44def-47b7-447b-af18-ef27b5a462b1",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4e2c-2553-4216-b367-a001f647573b",
    "to": "n_9ef437a6-0beb-499f-a9b4-24f83d1bfdd4",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5921-981f-4764-b519-cdd8d3c8f4d5",
    "to": "n_9eec2a0c-67c6-45dd-b734-a727becf1428",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5921-981f-4764-b519-cdd8d3c8f4d5",
    "to": "n_9eec32cd-04eb-4fc3-a65e-fdce9f197285",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5921-981f-4764-b519-cdd8d3c8f4d5",
    "to": "n_9eec3351-ba60-4179-87d4-79c3129b5a05",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43c55-ea07-4036-ad75-bd47d82123cc",
    "to": "n_9ef29eb0-2314-43d9-b495-5dba98d84e95",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0284a3-d404-4556-b098-336f9ab8e66c",
    "to": "n_9ef29ce8-d70e-482e-b888-008b68cc8102",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef42f70-e661-425d-8c50-d58b4d3cafb0",
    "to": "n_9eec7fd8-cc6a-483a-8a6f-b86c4b527f5d",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42f70-e661-425d-8c50-d58b4d3cafb0",
    "to": "n_9eec8049-a160-4ffb-b256-9366684a3f13",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42f70-e661-425d-8c50-d58b4d3cafb0",
    "to": "n_9ef299f5-c381-44d8-8aea-de1e241f4122",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec378f-3ff2-44ac-b695-059ecb43a7f5",
    "to": "n_9eec3ca1-7cf8-4742-b23f-504d2a910ed9",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec378f-3ff2-44ac-b695-059ecb43a7f5",
    "to": "n_9ef20d3c-594a-406d-a451-0207d8460317",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec378f-3ff2-44ac-b695-059ecb43a7f5",
    "to": "n_9ef20d90-761c-4b11-9d9a-8c1b7b1bd4eb",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3525-a85d-4b5b-9c53-f43f3735b77d",
    "to": "n_9eec49e8-09d4-4d20-986d-a2aaf6f6fb9d",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec308f-113a-45aa-9abe-4a5c18ac0ed9",
    "to": "n_9ef29eb0-2314-43d9-b495-5dba98d84e95",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec308f-113a-45aa-9abe-4a5c18ac0ed9",
    "to": "n_9ef20c8c-8cd4-4940-abb4-ef3783b7271d",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec2db5-90f3-4401-99b1-64949e2d0957",
    "to": "n_9f028c63-a19b-4dfa-866a-ec6d88af881e",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2db5-90f3-4401-99b1-64949e2d0957",
    "to": "n_9eec4d02-5bbf-4672-babc-21ef1635d0a4",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec2db5-90f3-4401-99b1-64949e2d0957",
    "to": "n_9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42bb0-a4c8-43ba-85dd-13f7c4de9cd5",
    "to": "n_9eec4442-2ba6-471f-baf7-daf6334ae39e",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42bb0-a4c8-43ba-85dd-13f7c4de9cd5",
    "to": "n_9eec40d9-de2f-49c4-931d-cf7743d23fcf",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef42bb0-a4c8-43ba-85dd-13f7c4de9cd5",
    "to": "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef42bb0-a4c8-43ba-85dd-13f7c4de9cd5",
    "to": "n_9eec47d1-2f39-495f-8738-0f70866c325f",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f028c63-a19b-4dfa-866a-ec6d88af881e",
    "to": "n_9ef43fcd-61cc-445e-bf44-9be2feefb8f8",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f028c63-a19b-4dfa-866a-ec6d88af881e",
    "to": "n_9f103382-4086-4fb0-a264-fc6f6b99075e",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef425dc-26ef-44b7-a265-5899feef30b7",
    "to": "n_9ef299f5-c381-44d8-8aea-de1e241f4122",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef425dc-26ef-44b7-a265-5899feef30b7",
    "to": "n_9f08b73c-8e45-4b48-bb0f-84e7414d40aa",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41fd9-f7c3-4b41-8f79-d40040194a5c",
    "to": "n_9ef856f6-4aaa-4051-9efc-df3b620afb8e",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3e98-c6c5-47a0-8a0f-70576cf08665",
    "to": "n_9eec38ed-4c60-42b3-9db6-f92840261624",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3e98-c6c5-47a0-8a0f-70576cf08665",
    "to": "n_9eec36ca-247f-46e9-af16-2d11dcd45061",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef29eb0-2314-43d9-b495-5dba98d84e95",
    "to": "n_9f041129-173e-44e5-8da6-2be7c21d0bea",
    "distance": 3,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef29eb0-2314-43d9-b495-5dba98d84e95",
    "to": "n_9ef29dea-c489-4e46-81d9-93fbacb6aedc",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3107-c317-452c-82f6-29cc2dd82115",
    "to": "n_9f02a372-defa-4ac0-891c-f00311bf5192",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3107-c317-452c-82f6-29cc2dd82115",
    "to": "n_9ef29dea-c489-4e46-81d9-93fbacb6aedc",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3107-c317-452c-82f6-29cc2dd82115",
    "to": "n_9eec3409-ab10-4942-ace9-64a81c099954",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3107-c317-452c-82f6-29cc2dd82115",
    "to": "n_9eec3525-2ed5-447c-8493-8c65a8de8781",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3107-c317-452c-82f6-29cc2dd82115",
    "to": "n_9eec3197-f5f3-4958-b3b8-ba0e4a2e8571",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3107-c317-452c-82f6-29cc2dd82115",
    "to": "n_9f041129-173e-44e5-8da6-2be7c21d0bea",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec34d8-ee57-4d57-ae93-a1828257cb45",
    "to": "n_9ef5fb86-0e86-4a92-a670-4468621808a2",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec34d8-ee57-4d57-ae93-a1828257cb45",
    "to": "n_9ef3f5c6-9924-44b8-975c-3f59c93577ba",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec34d8-ee57-4d57-ae93-a1828257cb45",
    "to": "n_9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec34d8-ee57-4d57-ae93-a1828257cb45",
    "to": "n_9eec54ac-dd6e-4d6b-bb45-275cbd235f0c",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec34d8-ee57-4d57-ae93-a1828257cb45",
    "to": "n_9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5b63-618d-47af-949e-1bf25c595cdc",
    "to": "n_9ef41a7b-728f-41b1-835f-157d68a046c2",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5b63-618d-47af-949e-1bf25c595cdc",
    "to": "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5b63-618d-47af-949e-1bf25c595cdc",
    "to": "n_9eec62fb-8144-47d6-8b90-867b515c7a31",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5b63-618d-47af-949e-1bf25c595cdc",
    "to": "n_9eec53a4-e754-4833-a3d3-c655d67f3ead",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef29dea-c489-4e46-81d9-93fbacb6aedc",
    "to": "n_9f041129-173e-44e5-8da6-2be7c21d0bea",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef29dea-c489-4e46-81d9-93fbacb6aedc",
    "to": "n_9eec3225-3109-458c-82e2-a02d3531ec27",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f02c559-6a1c-4dce-9930-267b455913ef",
    "to": "n_9f047a55-3030-4668-a3fe-c99dc724bda2",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f02c559-6a1c-4dce-9930-267b455913ef",
    "to": "n_9eec4f1d-d004-4a4d-95a4-901ace72ec5b",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41a7b-728f-41b1-835f-157d68a046c2",
    "to": "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41a7b-728f-41b1-835f-157d68a046c2",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef41a7b-728f-41b1-835f-157d68a046c2",
    "to": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43c82-5745-43da-9a3f-1df23a31f580",
    "to": "n_9eec3409-ab10-4942-ace9-64a81c099954",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43c82-5745-43da-9a3f-1df23a31f580",
    "to": "n_9eec35f7-3089-4c32-abaf-364d5ca702ca",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43c82-5745-43da-9a3f-1df23a31f580",
    "to": "n_9f02a372-defa-4ac0-891c-f00311bf5192",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43c82-5745-43da-9a3f-1df23a31f580",
    "to": "n_9eec3107-c317-452c-82f6-29cc2dd82115",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef43c82-5745-43da-9a3f-1df23a31f580",
    "to": "n_9eec3525-2ed5-447c-8493-8c65a8de8781",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec35f7-3089-4c32-abaf-364d5ca702ca",
    "to": "n_9eec3409-ab10-4942-ace9-64a81c099954",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec35f7-3089-4c32-abaf-364d5ca702ca",
    "to": "n_9eec3525-2ed5-447c-8493-8c65a8de8781",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a",
    "to": "n_9eec310c-70f4-4bd0-990d-3faaf7921fa6",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a",
    "to": "n_9eec2db5-90f3-4401-99b1-64949e2d0957",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a",
    "to": "n_9f028c63-a19b-4dfa-866a-ec6d88af881e",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a",
    "to": "n_9eec2a0c-67c6-45dd-b734-a727becf1428",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a",
    "to": "n_9eec31a3-2c03-498b-ad60-4c9d0bc800b4",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec310c-70f4-4bd0-990d-3faaf7921fa6",
    "to": "n_9eec32cd-04eb-4fc3-a65e-fdce9f197285",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec310c-70f4-4bd0-990d-3faaf7921fa6",
    "to": "n_9eec3525-a85d-4b5b-9c53-f43f3735b77d",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec310c-70f4-4bd0-990d-3faaf7921fa6",
    "to": "n_9eec305a-ade9-47ac-90bb-481b090dad7a",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec310c-70f4-4bd0-990d-3faaf7921fa6",
    "to": "n_9eec33d6-d85e-4c7d-b37c-b26706285439",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5835-ae8a-444d-8e2e-30ad85e21688",
    "to": "n_9ef46666-dc6a-421a-9bd5-62bb53fdffd6",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5835-ae8a-444d-8e2e-30ad85e21688",
    "to": "n_9eec381f-5274-4161-80f7-4e699eac0e46",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f041129-173e-44e5-8da6-2be7c21d0bea",
    "to": "n_9eec3283-3138-4515-ad44-0248a14e28ca",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f041129-173e-44e5-8da6-2be7c21d0bea",
    "to": "n_9ef43c55-ea07-4036-ad75-bd47d82123cc",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef3f5c6-9924-44b8-975c-3f59c93577ba",
    "to": "n_9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f5c6-9924-44b8-975c-3f59c93577ba",
    "to": "n_9eec381f-5274-4161-80f7-4e699eac0e46",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f5c6-9924-44b8-975c-3f59c93577ba",
    "to": "n_9ef3ee74-4033-46f8-ab06-802820b21d52",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f5c6-9924-44b8-975c-3f59c93577ba",
    "to": "n_9ef3f6c8-c1c5-4349-8fcf-bc4857a63aa2",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f02a372-defa-4ac0-891c-f00311bf5192",
    "to": "n_9eec3409-ab10-4942-ace9-64a81c099954",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f02a372-defa-4ac0-891c-f00311bf5192",
    "to": "n_9eec34d8-ee57-4d57-ae93-a1828257cb45",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f02a372-defa-4ac0-891c-f00311bf5192",
    "to": "n_9ef29dea-c489-4e46-81d9-93fbacb6aedc",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
    "to": "n_9eec381f-5274-4161-80f7-4e699eac0e46",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
    "to": "n_9ef43465-0f14-498e-a0f4-2bda10296750",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef3f81f-8371-4804-bd1a-7a4b2a92a09d",
    "to": "n_9ef42fe2-8d4b-4bf9-b70d-420e6872eb35",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04457e-9e1a-416d-a0e3-d7a83426bf57",
    "to": "n_9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04457e-9e1a-416d-a0e3-d7a83426bf57",
    "to": "n_9f0424ff-2689-4922-a15d-e0b2c4ad6f39",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04457e-9e1a-416d-a0e3-d7a83426bf57",
    "to": "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04457e-9e1a-416d-a0e3-d7a83426bf57",
    "to": "n_9eec4985-1d89-4358-b5ba-2b7ceb84dacb",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef402e4-4f80-4eee-bd9d-9bfcbec874fd",
    "to": "n_9ef3fe41-7931-4ecc-8c21-ae3bee2e8dff",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef402e4-4f80-4eee-bd9d-9bfcbec874fd",
    "to": "n_9eec4985-1d89-4358-b5ba-2b7ceb84dacb",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef402e4-4f80-4eee-bd9d-9bfcbec874fd",
    "to": "n_9ef4000b-15f3-45a3-9fae-6e946eae2530",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef402e4-4f80-4eee-bd9d-9bfcbec874fd",
    "to": "n_9f04457e-9e1a-416d-a0e3-d7a83426bf57",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef402e4-4f80-4eee-bd9d-9bfcbec874fd",
    "to": "n_9f044dd6-50c4-4a00-8d41-f7236a1510f2",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0424ff-2689-4922-a15d-e0b2c4ad6f39",
    "to": "n_9f0429c7-ef47-4b3b-afcc-3ab832af596f",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0424ff-2689-4922-a15d-e0b2c4ad6f39",
    "to": "n_9ef3f9b5-150f-4d29-a425-503ee193c8ed",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0424ff-2689-4922-a15d-e0b2c4ad6f39",
    "to": "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0424ff-2689-4922-a15d-e0b2c4ad6f39",
    "to": "n_9ef3fd9d-f088-41b6-815d-0ee7382429ef",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41a00-bddb-4d7b-ba21-c09d9600a459",
    "to": "n_9ef419bb-3a9f-4824-bd0f-aab317663654",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41a00-bddb-4d7b-ba21-c09d9600a459",
    "to": "n_9eec5b63-618d-47af-949e-1bf25c595cdc",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41a00-bddb-4d7b-ba21-c09d9600a459",
    "to": "n_9eec5a3b-c76b-446a-93ed-c3ffc3942461",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1",
    "to": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1",
    "to": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1",
    "to": "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4131c-f2ad-4d23-b754-98c0712cebd1",
    "to": "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41903-2f5c-4eab-b8d4-bdb0846b37db",
    "to": "n_9eec3351-ba60-4179-87d4-79c3129b5a05",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef41903-2f5c-4eab-b8d4-bdb0846b37db",
    "to": "n_9eec3886-4c16-4041-bddf-3d6f51e7058a",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04167c-11e9-43c8-b3df-e10c93aed77f",
    "to": "n_9ef683e2-3e61-4603-abc8-a04cd07c95aa",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec3892-7cee-4816-af43-dd4b1000e78c",
    "to": "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec3892-7cee-4816-af43-dd4b1000e78c",
    "to": "n_9f0429c7-ef47-4b3b-afcc-3ab832af596f",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f044dd6-50c4-4a00-8d41-f7236a1510f2",
    "to": "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec381f-5274-4161-80f7-4e699eac0e46",
    "to": "n_9ef43582-ca29-4230-864c-64c6dcddaeab",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4985-1d89-4358-b5ba-2b7ceb84dacb",
    "to": "n_9eec4893-7b57-4b3b-94a9-aff2e3db119d",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4985-1d89-4358-b5ba-2b7ceb84dacb",
    "to": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4985-1d89-4358-b5ba-2b7ceb84dacb",
    "to": "n_9ef416b9-1f72-4103-8491-010ff40720d6",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4985-1d89-4358-b5ba-2b7ceb84dacb",
    "to": "n_9ef64e90-01d9-4e9d-97f3-c3318ba208c8",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4985-1d89-4358-b5ba-2b7ceb84dacb",
    "to": "n_9eec4912-7411-4938-939a-ee5ee6759fc5",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
    "to": "n_9ef44d92-3068-4faa-bb72-1a289e6cb64b",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4a9a-9433-4f7b-bcbe-17db83ae8b54",
    "to": "n_9ef657c0-df64-4788-8c53-46c926b8ba6d",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f042a6b-39f8-4337-a1f1-bd728ff89b72",
    "to": "n_9f0429c7-ef47-4b3b-afcc-3ab832af596f",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
    "to": "n_9f045211-e8ff-4de9-9af7-a331e4ef8fbf",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
    "to": "n_9eec46f6-66a5-492c-ab89-96664cc55389",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef412ab-a6d2-48f5-9967-5f0a6b82e491",
    "to": "n_9ef416b9-1f72-4103-8491-010ff40720d6",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec51e3-a665-453d-b51e-141c21e8affb",
    "to": "n_9f047b2d-89fe-499e-9e0b-4171a7a22adf",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec51e3-a665-453d-b51e-141c21e8affb",
    "to": "n_9f047a55-3030-4668-a3fe-c99dc724bda2",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec51e3-a665-453d-b51e-141c21e8affb",
    "to": "n_9eec5273-27e9-4d33-a4ba-d701064346d2",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec51e3-a665-453d-b51e-141c21e8affb",
    "to": "n_9eec4a72-e65e-41e7-89bc-45680119eedd",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef42de0-2728-4d95-9266-ededfeb06d8f",
    "to": "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
    "distance": 10,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9f047a55-3030-4668-a3fe-c99dc724bda2",
    "to": "n_9eec4c21-5c4f-4515-90d4-e45b17b6dea9",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d",
    "to": "n_9eec8289-bc6d-4603-a47d-dce86917cb47",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d",
    "to": "n_9eec5761-f0f4-46f2-9433-d90566302aba",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d",
    "to": "n_9eec81e5-f94f-4a9f-afb0-f27274419417",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef40a61-6906-441e-ae49-124f2ecae71f",
    "to": "n_9f045211-e8ff-4de9-9af7-a331e4ef8fbf",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f045211-e8ff-4de9-9af7-a331e4ef8fbf",
    "to": "n_9ef20676-216b-43ce-9d54-9a595739376e",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f047b2d-89fe-499e-9e0b-4171a7a22adf",
    "to": "n_9eec4ae5-1a94-4d4f-84a9-b4de919d50c7",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f047b2d-89fe-499e-9e0b-4171a7a22adf",
    "to": "n_9eec50de-c2a7-4253-9913-7ee1a0da72df",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef419bb-3a9f-4824-bd0f-aab317663654",
    "to": "n_9ef41ac9-8e90-40dc-ac33-ce82e633b42a",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec5e21-534d-4f67-af99-cb0bc85b5203",
    "to": "n_9ef41c48-ee26-4113-a029-2c663251b452",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef299f5-c381-44d8-8aea-de1e241f4122",
    "to": "n_9eec601a-0d16-4132-b633-b75ab72930ea",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec53a4-e754-4833-a3d3-c655d67f3ead",
    "to": "n_9eec62fb-8144-47d6-8b90-867b515c7a31",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec53a4-e754-4833-a3d3-c655d67f3ead",
    "to": "n_9ef41c48-ee26-4113-a029-2c663251b452",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec53a4-e754-4833-a3d3-c655d67f3ead",
    "to": "n_9ef41408-904d-4848-9bc5-f286b4716233",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec4442-2ba6-471f-baf7-daf6334ae39e",
    "to": "n_9eec42bc-b3b4-476d-8fae-f7860e927c9d",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec4442-2ba6-471f-baf7-daf6334ae39e",
    "to": "n_9f022b9a-08d9-4d89-bbfb-45854faec907",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2a0c-67c6-45dd-b734-a727becf1428",
    "to": "n_9eec2df4-d946-4a78-8ce9-8e4de247b34e",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec2a0c-67c6-45dd-b734-a727becf1428",
    "to": "n_9eec32cd-04eb-4fc3-a65e-fdce9f197285",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec32cd-04eb-4fc3-a65e-fdce9f197285",
    "to": "n_9eec2ac2-8803-40c3-b3ec-3ee6c3577b2a",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec32cd-04eb-4fc3-a65e-fdce9f197285",
    "to": "n_9eec346f-adde-4314-96ed-59b4f8396dfc",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f08b73c-8e45-4b48-bb0f-84e7414d40aa",
    "to": "n_9ef49846-fc66-442b-b42a-2c15f7eb65dc",
    "distance": 13,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d",
    "to": "n_9ef4a67c-641d-49e9-bab0-ac1fe15197bc",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4a67c-641d-49e9-bab0-ac1fe15197bc",
    "to": "n_9eebf269-1d48-4b6c-8c47-4c639e9776d9",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_ramp_pg_barat_1",
    "to": "n_9ef499de-48da-431c-9353-4aeb47b50a15",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_ramp_pg_barat_1",
    "to": "n_9f021d5a-ebf1-4d9c-95cb-51df29ce1db5",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_ramp_pg_barat_1",
    "to": "n_9f023b98-8c6f-4f9f-9b3f-ab99cbc3e723",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_ramp_pg_barat_1",
    "to": "n_9ef4a7c0-4227-4678-bdad-f6299cb8040d",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6afb-a7a3-4e69-98b7-20ea6ed1e149",
    "to": "n_9ef5fa31-15d1-4210-8086-0e5d61329213",
    "distance": 3,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6afb-a7a3-4e69-98b7-20ea6ed1e149",
    "to": "n_9eec6cd2-5803-4835-b361-d22831c4c613",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6afb-a7a3-4e69-98b7-20ea6ed1e149",
    "to": "n_bridge_pg_lt2",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6afb-a7a3-4e69-98b7-20ea6ed1e149",
    "to": "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6afb-a7a3-4e69-98b7-20ea6ed1e149",
    "to": "n_9f049976-ebfc-4646-91a4-881ca68f8fb5",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6afb-a7a3-4e69-98b7-20ea6ed1e149",
    "to": "n_9f049ce2-7c93-4730-888c-195a747d22e9",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04975a-0937-4a20-8abc-3963d05c9e6a",
    "to": "n_9eec6bb5-98a6-42af-aa54-1336290fbd58",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04975a-0937-4a20-8abc-3963d05c9e6a",
    "to": "n_9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04975a-0937-4a20-8abc-3963d05c9e6a",
    "to": "n_9f0498b6-2816-499e-9ed8-5a2a16c2c660",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04975a-0937-4a20-8abc-3963d05c9e6a",
    "to": "n_ramp_pg_barat_2",
    "distance": 23,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f04975a-0937-4a20-8abc-3963d05c9e6a",
    "to": "n_bridge_pg_lt2",
    "distance": 23,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f04975a-0937-4a20-8abc-3963d05c9e6a",
    "to": "n_9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
    "distance": 24,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec0edd-49dd-438d-82f8-e25c57d5403e",
    "to": "n_9ef49889-df5e-4811-9a3d-bb117f07a279",
    "distance": 12,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0edd-49dd-438d-82f8-e25c57d5403e",
    "to": "n_9ef47632-a296-4da6-a001-937c7e7211ea",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec0edd-49dd-438d-82f8-e25c57d5403e",
    "to": "n_9ef1f61d-e4f4-448b-b61a-f4136ee22f9c",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec0edd-49dd-438d-82f8-e25c57d5403e",
    "to": "n_9eec0e6e-21e8-426e-8d2a-2ae350959afa",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec0edd-49dd-438d-82f8-e25c57d5403e",
    "to": "n_9ef49ab9-5872-4559-9335-918f1400e167",
    "distance": 17,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0edd-49dd-438d-82f8-e25c57d5403e",
    "to": "n_9eec6b58-fb41-4d20-9c7f-66bb58e3fb41",
    "distance": 25,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
    "to": "n_ramp_pg_barat_2",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
    "to": "n_bridge_pg_lt2",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
    "to": "n_9f049976-ebfc-4646-91a4-881ca68f8fb5",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
    "to": "n_9f049ce2-7c93-4730-888c-195a747d22e9",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
    "to": "n_9f04a113-f905-4fac-8ecf-46f7ded9f0b7",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
    "to": "n_9f049e0c-f04a-48cd-abaf-0cbc639fd2cc",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a0a9-a037-4496-8fd1-a603db23a05e",
    "to": "n_9f049c6f-8c21-491b-98c0-b55ff962e861",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a0a9-a037-4496-8fd1-a603db23a05e",
    "to": "n_9f049f25-f553-4ab6-9306-533bbdfb1824",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a0a9-a037-4496-8fd1-a603db23a05e",
    "to": "n_9f049fb1-0f51-4bf5-be07-1211adf43fb7",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a0a9-a037-4496-8fd1-a603db23a05e",
    "to": "n_9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a0a9-a037-4496-8fd1-a603db23a05e",
    "to": "n_ramp_pg_barat_2",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f04a0a9-a037-4496-8fd1-a603db23a05e",
    "to": "n_9f0498b6-2816-499e-9ed8-5a2a16c2c660",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6a19-c635-4bee-a825-27fabcfa9a2b",
    "to": "n_9ef48d41-2b49-47e3-bf0f-dbf0358dd45e",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6a19-c635-4bee-a825-27fabcfa9a2b",
    "to": "n_9eec69c7-f1d2-4a7a-b017-4b24037319a8",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6a19-c635-4bee-a825-27fabcfa9a2b",
    "to": "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
    "distance": 11,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6a19-c635-4bee-a825-27fabcfa9a2b",
    "to": "n_9eec6a4f-2f2a-4373-a021-f57f540a9f68",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6a19-c635-4bee-a825-27fabcfa9a2b",
    "to": "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6a19-c635-4bee-a825-27fabcfa9a2b",
    "to": "n_9ef49b98-0d91-484a-9874-4517d444aaba",
    "distance": 26,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6bb5-98a6-42af-aa54-1336290fbd58",
    "to": "n_9f0498b6-2816-499e-9ed8-5a2a16c2c660",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6bb5-98a6-42af-aa54-1336290fbd58",
    "to": "n_9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6bb5-98a6-42af-aa54-1336290fbd58",
    "to": "n_9f04980d-5b62-4cc9-a09c-2acc0910f0cb",
    "distance": 20,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6bb5-98a6-42af-aa54-1336290fbd58",
    "to": "n_ramp_pg_barat_2",
    "distance": 21,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6bb5-98a6-42af-aa54-1336290fbd58",
    "to": "n_9f04a0a9-a037-4496-8fd1-a603db23a05e",
    "distance": 25,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6b58-fb41-4d20-9c7f-66bb58e3fb41",
    "to": "n_9ef1f61d-e4f4-448b-b61a-f4136ee22f9c",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6b58-fb41-4d20-9c7f-66bb58e3fb41",
    "to": "n_9ef496b3-91cb-4db9-ac96-c746921e122b",
    "distance": 11,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6b58-fb41-4d20-9c7f-66bb58e3fb41",
    "to": "n_9ef49889-df5e-4811-9a3d-bb117f07a279",
    "distance": 16,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6b58-fb41-4d20-9c7f-66bb58e3fb41",
    "to": "n_9ef49ab9-5872-4559-9335-918f1400e167",
    "distance": 23,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6b58-fb41-4d20-9c7f-66bb58e3fb41",
    "to": "n_9ef47632-a296-4da6-a001-937c7e7211ea",
    "distance": 24,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec69c7-f1d2-4a7a-b017-4b24037319a8",
    "to": "n_9eec6a4f-2f2a-4373-a021-f57f540a9f68",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec69c7-f1d2-4a7a-b017-4b24037319a8",
    "to": "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
    "distance": 16,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec69c7-f1d2-4a7a-b017-4b24037319a8",
    "to": "n_9ef49b98-0d91-484a-9874-4517d444aaba",
    "distance": 17,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec69c7-f1d2-4a7a-b017-4b24037319a8",
    "to": "n_9ef48d41-2b49-47e3-bf0f-dbf0358dd45e",
    "distance": 20,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec69c7-f1d2-4a7a-b017-4b24037319a8",
    "to": "n_9eec6979-b1b4-456f-b2f0-c744ea3553db",
    "distance": 22,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6a4f-2f2a-4373-a021-f57f540a9f68",
    "to": "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
    "distance": 11,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6a4f-2f2a-4373-a021-f57f540a9f68",
    "to": "n_9ef49b98-0d91-484a-9874-4517d444aaba",
    "distance": 13,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6a4f-2f2a-4373-a021-f57f540a9f68",
    "to": "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6a4f-2f2a-4373-a021-f57f540a9f68",
    "to": "n_9eec6979-b1b4-456f-b2f0-c744ea3553db",
    "distance": 23,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
    "to": "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
    "distance": 7,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
    "to": "n_9eec6cd2-5803-4835-b361-d22831c4c613",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
    "to": "n_9ef64e4b-ca66-49a1-a98d-25a2c424592b",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
    "to": "n_9ef5fa31-15d1-4210-8086-0e5d61329213",
    "distance": 17,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6cd2-5803-4835-b361-d22831c4c613",
    "to": "n_9ef5fa31-15d1-4210-8086-0e5d61329213",
    "distance": 8,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6cd2-5803-4835-b361-d22831c4c613",
    "to": "n_9ef64e4b-ca66-49a1-a98d-25a2c424592b",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6cd2-5803-4835-b361-d22831c4c613",
    "to": "n_bridge_pg_lt2",
    "distance": 17,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6cd2-5803-4835-b361-d22831c4c613",
    "to": "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
    "distance": 18,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9f049976-ebfc-4646-91a4-881ca68f8fb5",
    "to": "n_9f049ce2-7c93-4730-888c-195a747d22e9",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049976-ebfc-4646-91a4-881ca68f8fb5",
    "to": "n_9f04a113-f905-4fac-8ecf-46f7ded9f0b7",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049976-ebfc-4646-91a4-881ca68f8fb5",
    "to": "n_9f049e0c-f04a-48cd-abaf-0cbc639fd2cc",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049976-ebfc-4646-91a4-881ca68f8fb5",
    "to": "n_9f049e71-96a9-4ddb-a40c-d1e461c7fb4f",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049976-ebfc-4646-91a4-881ca68f8fb5",
    "to": "n_bridge_pg_lt2",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f04a113-f905-4fac-8ecf-46f7ded9f0b7",
    "to": "n_9f049e0c-f04a-48cd-abaf-0cbc639fd2cc",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a113-f905-4fac-8ecf-46f7ded9f0b7",
    "to": "n_9f049e71-96a9-4ddb-a40c-d1e461c7fb4f",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a113-f905-4fac-8ecf-46f7ded9f0b7",
    "to": "n_ramp_pg_barat_2",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f04a113-f905-4fac-8ecf-46f7ded9f0b7",
    "to": "n_9f049ce2-7c93-4730-888c-195a747d22e9",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a113-f905-4fac-8ecf-46f7ded9f0b7",
    "to": "n_9f04a1f7-f165-4c82-9fc1-fce8471add60",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef1f61d-e4f4-448b-b61a-f4136ee22f9c",
    "to": "n_9ef49889-df5e-4811-9a3d-bb117f07a279",
    "distance": 9,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef1f61d-e4f4-448b-b61a-f4136ee22f9c",
    "to": "n_9ef49ab9-5872-4559-9335-918f1400e167",
    "distance": 14,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef1f61d-e4f4-448b-b61a-f4136ee22f9c",
    "to": "n_9ef496b3-91cb-4db9-ac96-c746921e122b",
    "distance": 16,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef1f61d-e4f4-448b-b61a-f4136ee22f9c",
    "to": "n_9ef47632-a296-4da6-a001-937c7e7211ea",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
    "to": "n_9f0498b6-2816-499e-9ed8-5a2a16c2c660",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
    "to": "n_9f049c6f-8c21-491b-98c0-b55ff962e861",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
    "to": "n_9f049f25-f553-4ab6-9306-533bbdfb1824",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
    "to": "n_9f049fb1-0f51-4bf5-be07-1211adf43fb7",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049a3d-d617-4f83-ac7f-7f81eec72a1b",
    "to": "n_ramp_pg_barat_2",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0498b6-2816-499e-9ed8-5a2a16c2c660",
    "to": "n_ramp_pg_barat_2",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f0498b6-2816-499e-9ed8-5a2a16c2c660",
    "to": "n_9f049c6f-8c21-491b-98c0-b55ff962e861",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0498b6-2816-499e-9ed8-5a2a16c2c660",
    "to": "n_9f049f25-f553-4ab6-9306-533bbdfb1824",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0498b6-2816-499e-9ed8-5a2a16c2c660",
    "to": "n_9f049fb1-0f51-4bf5-be07-1211adf43fb7",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a177-700b-49fa-afbd-4b63f143984c",
    "to": "n_9f04a31f-5b94-4c0b-b600-df6046cccbaa",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a177-700b-49fa-afbd-4b63f143984c",
    "to": "n_9f04a508-0822-409b-b172-37e426d1e2ef",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a177-700b-49fa-afbd-4b63f143984c",
    "to": "n_9f04a0a9-a037-4496-8fd1-a603db23a05e",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a177-700b-49fa-afbd-4b63f143984c",
    "to": "n_9f049c6f-8c21-491b-98c0-b55ff962e861",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a177-700b-49fa-afbd-4b63f143984c",
    "to": "n_9f049f25-f553-4ab6-9306-533bbdfb1824",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a177-700b-49fa-afbd-4b63f143984c",
    "to": "n_9f049fb1-0f51-4bf5-be07-1211adf43fb7",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
    "to": "n_9f04a508-0822-409b-b172-37e426d1e2ef",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
    "to": "n_9f04a31f-5b94-4c0b-b600-df6046cccbaa",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
    "to": "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
    "to": "n_9f04a834-bee5-4a41-a0af-cc24df403140",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
    "to": "n_9f04a64c-2859-44eb-9f40-4b30ed5a6387",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
    "to": "n_9f04a177-700b-49fa-afbd-4b63f143984c",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049ce2-7c93-4730-888c-195a747d22e9",
    "to": "n_9f049e0c-f04a-48cd-abaf-0cbc639fd2cc",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049ce2-7c93-4730-888c-195a747d22e9",
    "to": "n_9f049e71-96a9-4ddb-a40c-d1e461c7fb4f",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049ce2-7c93-4730-888c-195a747d22e9",
    "to": "n_bridge_pg_lt2",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f04a95a-ee6f-43da-bbe1-7ea4f9caafe6",
    "to": "n_9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a95a-ee6f-43da-bbe1-7ea4f9caafe6",
    "to": "n_9ef64093-3490-4df0-9689-2c0545c9dd24",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a95a-ee6f-43da-bbe1-7ea4f9caafe6",
    "to": "n_9f04a834-bee5-4a41-a0af-cc24df403140",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a95a-ee6f-43da-bbe1-7ea4f9caafe6",
    "to": "n_9f04ab45-cc90-4838-93ec-420fca235d3b",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a95a-ee6f-43da-bbe1-7ea4f9caafe6",
    "to": "n_9ef5fde3-dc44-44eb-a7a4-91b92a0703d0",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a95a-ee6f-43da-bbe1-7ea4f9caafe6",
    "to": "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a1f7-f165-4c82-9fc1-fce8471add60",
    "to": "n_9f04a47c-2dd6-4d11-9299-fe4f0b5c6690",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a1f7-f165-4c82-9fc1-fce8471add60",
    "to": "n_9f049e0c-f04a-48cd-abaf-0cbc639fd2cc",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a1f7-f165-4c82-9fc1-fce8471add60",
    "to": "n_9f049e71-96a9-4ddb-a40c-d1e461c7fb4f",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a1f7-f165-4c82-9fc1-fce8471add60",
    "to": "n_9f04a64c-2859-44eb-9f40-4b30ed5a6387",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a1f7-f165-4c82-9fc1-fce8471add60",
    "to": "n_9f04a177-700b-49fa-afbd-4b63f143984c",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef48d41-2b49-47e3-bf0f-dbf0358dd45e",
    "to": "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
    "distance": 15,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef48d41-2b49-47e3-bf0f-dbf0358dd45e",
    "to": "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef48d41-2b49-47e3-bf0f-dbf0358dd45e",
    "to": "n_9eec6a4f-2f2a-4373-a021-f57f540a9f68",
    "distance": 23,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef48d41-2b49-47e3-bf0f-dbf0358dd45e",
    "to": "n_9ef64e4b-ca66-49a1-a98d-25a2c424592b",
    "distance": 24,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049e0c-f04a-48cd-abaf-0cbc639fd2cc",
    "to": "n_9f049e71-96a9-4ddb-a40c-d1e461c7fb4f",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049e0c-f04a-48cd-abaf-0cbc639fd2cc",
    "to": "n_ramp_pg_barat_2",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f04a31f-5b94-4c0b-b600-df6046cccbaa",
    "to": "n_9f04a508-0822-409b-b172-37e426d1e2ef",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a31f-5b94-4c0b-b600-df6046cccbaa",
    "to": "n_9f04a47c-2dd6-4d11-9299-fe4f0b5c6690",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a31f-5b94-4c0b-b600-df6046cccbaa",
    "to": "n_9f04a64c-2859-44eb-9f40-4b30ed5a6387",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a31f-5b94-4c0b-b600-df6046cccbaa",
    "to": "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef496b3-91cb-4db9-ac96-c746921e122b",
    "to": "n_9ef49889-df5e-4811-9a3d-bb117f07a279",
    "distance": 14,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef496b3-91cb-4db9-ac96-c746921e122b",
    "to": "n_9ef47632-a296-4da6-a001-937c7e7211ea",
    "distance": 19,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef496b3-91cb-4db9-ac96-c746921e122b",
    "to": "n_9eec0edd-49dd-438d-82f8-e25c57d5403e",
    "distance": 26,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef496b3-91cb-4db9-ac96-c746921e122b",
    "to": "n_9ef49ab9-5872-4559-9335-918f1400e167",
    "distance": 30,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
    "to": "n_9f04a834-bee5-4a41-a0af-cc24df403140",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
    "to": "n_9f04a64c-2859-44eb-9f40-4b30ed5a6387",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
    "to": "n_9f04a47c-2dd6-4d11-9299-fe4f0b5c6690",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
    "to": "n_9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
    "to": "n_9f04a508-0822-409b-b172-37e426d1e2ef",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef49889-df5e-4811-9a3d-bb117f07a279",
    "to": "n_9ef47632-a296-4da6-a001-937c7e7211ea",
    "distance": 8,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49889-df5e-4811-9a3d-bb117f07a279",
    "to": "n_9ef49ab9-5872-4559-9335-918f1400e167",
    "distance": 21,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49ab9-5872-4559-9335-918f1400e167",
    "to": "n_9eec0e6e-21e8-426e-8d2a-2ae350959afa",
    "distance": 13,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49ab9-5872-4559-9335-918f1400e167",
    "to": "n_9ef47632-a296-4da6-a001-937c7e7211ea",
    "distance": 27,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9f04ab45-cc90-4838-93ec-420fca235d3b",
    "to": "n_9ef5fde3-dc44-44eb-a7a4-91b92a0703d0",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04ab45-cc90-4838-93ec-420fca235d3b",
    "to": "n_9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04ab45-cc90-4838-93ec-420fca235d3b",
    "to": "n_9ef64093-3490-4df0-9689-2c0545c9dd24",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04ab45-cc90-4838-93ec-420fca235d3b",
    "to": "n_9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04ab45-cc90-4838-93ec-420fca235d3b",
    "to": "n_9f04a834-bee5-4a41-a0af-cc24df403140",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef49b98-0d91-484a-9874-4517d444aaba",
    "to": "n_9eec6979-b1b4-456f-b2f0-c744ea3553db",
    "distance": 13,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49b98-0d91-484a-9874-4517d444aaba",
    "to": "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
    "distance": 24,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49b98-0d91-484a-9874-4517d444aaba",
    "to": "n_9eec6ac6-6003-44fa-bdff-e01dfe82fe6f",
    "distance": 29,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9f049e71-96a9-4ddb-a40c-d1e461c7fb4f",
    "to": "n_ramp_pg_barat_2",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f04a47c-2dd6-4d11-9299-fe4f0b5c6690",
    "to": "n_9f04a64c-2859-44eb-9f40-4b30ed5a6387",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a47c-2dd6-4d11-9299-fe4f0b5c6690",
    "to": "n_9f04a834-bee5-4a41-a0af-cc24df403140",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a47c-2dd6-4d11-9299-fe4f0b5c6690",
    "to": "n_9f04a508-0822-409b-b172-37e426d1e2ef",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef5fa31-15d1-4210-8086-0e5d61329213",
    "to": "n_bridge_pg_lt2",
    "distance": 10,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef5fa31-15d1-4210-8086-0e5d61329213",
    "to": "n_9f049976-ebfc-4646-91a4-881ca68f8fb5",
    "distance": 17,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef5fa31-15d1-4210-8086-0e5d61329213",
    "to": "n_9f049ce2-7c93-4730-888c-195a747d22e9",
    "distance": 17,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9f04a834-bee5-4a41-a0af-cc24df403140",
    "to": "n_9f04a64c-2859-44eb-9f40-4b30ed5a6387",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a834-bee5-4a41-a0af-cc24df403140",
    "to": "n_9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef5fde3-dc44-44eb-a7a4-91b92a0703d0",
    "to": "n_9ef64093-3490-4df0-9689-2c0545c9dd24",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef5fde3-dc44-44eb-a7a4-91b92a0703d0",
    "to": "n_9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef5fde3-dc44-44eb-a7a4-91b92a0703d0",
    "to": "n_9f04a6ca-1c7a-49ed-ad91-f76b7aa5cc95",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef5fde3-dc44-44eb-a7a4-91b92a0703d0",
    "to": "n_9f04a834-bee5-4a41-a0af-cc24df403140",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef64093-3490-4df0-9689-2c0545c9dd24",
    "to": "n_9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef64093-3490-4df0-9689-2c0545c9dd24",
    "to": "n_9f04a834-bee5-4a41-a0af-cc24df403140",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef64093-3490-4df0-9689-2c0545c9dd24",
    "to": "n_9f04a7c9-29f6-4c68-85f9-b6347f03c70d",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef64e4b-ca66-49a1-a98d-25a2c424592b",
    "to": "n_9ef5fa31-15d1-4210-8086-0e5d61329213",
    "distance": 17,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef64e4b-ca66-49a1-a98d-25a2c424592b",
    "to": "n_9eec6afb-a7a3-4e69-98b7-20ea6ed1e149",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef64e4b-ca66-49a1-a98d-25a2c424592b",
    "to": "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
    "distance": 20,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9f049c6f-8c21-491b-98c0-b55ff962e861",
    "to": "n_9f049f25-f553-4ab6-9306-533bbdfb1824",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049c6f-8c21-491b-98c0-b55ff962e861",
    "to": "n_9f049fb1-0f51-4bf5-be07-1211adf43fb7",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049c6f-8c21-491b-98c0-b55ff962e861",
    "to": "n_ramp_pg_barat_2",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f04a508-0822-409b-b172-37e426d1e2ef",
    "to": "n_9f04a64c-2859-44eb-9f40-4b30ed5a6387",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049f25-f553-4ab6-9306-533bbdfb1824",
    "to": "n_9f049fb1-0f51-4bf5-be07-1211adf43fb7",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f049f25-f553-4ab6-9306-533bbdfb1824",
    "to": "n_ramp_pg_barat_2",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9f049fb1-0f51-4bf5-be07-1211adf43fb7",
    "to": "n_ramp_pg_barat_2",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec0e6e-21e8-426e-8d2a-2ae350959afa",
    "to": "n_9ef1f61d-e4f4-448b-b61a-f4136ee22f9c",
    "distance": 24,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec0e6e-21e8-426e-8d2a-2ae350959afa",
    "to": "n_9ef49889-df5e-4811-9a3d-bb117f07a279",
    "distance": 26,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0e6e-21e8-426e-8d2a-2ae350959afa",
    "to": "n_9ef47632-a296-4da6-a001-937c7e7211ea",
    "distance": 28,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f04a8ec-d01a-440c-9c2b-ff3aa192ea7a",
    "to": "n_9f04a64c-2859-44eb-9f40-4b30ed5a6387",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec0e6e-21e8-426e-8d2a-2ae350959afa",
    "to": "n_9ef5fae9-7343-42a9-9c58-cb3b356f509c",
    "distance": 33,
    "accessible": true,
    "hasTactile": true,
    "width": 2.2
  },
  {
    "from": "n_9ef5fde3-dc44-44eb-a7a4-91b92a0703d0",
    "to": "n_9ef5fae9-7343-42a9-9c58-cb3b356f509c",
    "distance": 36,
    "accessible": true,
    "hasTactile": true,
    "width": 2.2
  },
  {
    "from": "n_9eec724e-484e-4623-a440-885d0a47aa1b",
    "to": "n_9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec724e-484e-4623-a440-885d0a47aa1b",
    "to": "n_9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec724e-484e-4623-a440-885d0a47aa1b",
    "to": "n_9ef450f5-fca0-4a8f-b2e2-8add6ec21215",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec724e-484e-4623-a440-885d0a47aa1b",
    "to": "n_9eec7e0e-89eb-4c13-8eb0-21b58e2fa968",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec724e-484e-4623-a440-885d0a47aa1b",
    "to": "n_9eec92b6-c184-459b-b63f-1d1ac451a95e",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec724e-484e-4623-a440-885d0a47aa1b",
    "to": "n_9eec851e-4632-4e43-aa60-fc29301bd33a",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6fc9-7571-48ed-820a-788abbe99bde",
    "to": "n_9eec6f54-9608-417f-b2f5-9e1823ce7e9e",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6fc9-7571-48ed-820a-788abbe99bde",
    "to": "n_9ef20e8d-63fb-49e2-b422-6fc379ed7230",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6fc9-7571-48ed-820a-788abbe99bde",
    "to": "n_9ef4686a-fa45-4528-b91f-f7905f17e2f2",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6fc9-7571-48ed-820a-788abbe99bde",
    "to": "n_9ef468a0-8404-4c7b-8162-aebdada0e880",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6fc9-7571-48ed-820a-788abbe99bde",
    "to": "n_9eec6e73-bb14-4acd-854d-ee2b0e528107",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6fc9-7571-48ed-820a-788abbe99bde",
    "to": "n_9eec6e28-1824-434a-b4f9-78b9294d8850",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7166-b510-4352-942b-3607561bbe34",
    "to": "n_9eec810c-3e3c-4aa2-a703-19085935167d",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7166-b510-4352-942b-3607561bbe34",
    "to": "n_9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7166-b510-4352-942b-3607561bbe34",
    "to": "n_9ef46649-62eb-4a47-aa8a-40fc1ab5d311",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec7166-b510-4352-942b-3607561bbe34",
    "to": "n_9ef4667a-e72b-49e9-8985-3c1085a67866",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec7166-b510-4352-942b-3607561bbe34",
    "to": "n_9eec8335-a3d8-4734-a3a0-6f00bd388072",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7166-b510-4352-942b-3607561bbe34",
    "to": "n_9ef24f24-43ee-47f9-bb32-518366849ad1",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6f54-9608-417f-b2f5-9e1823ce7e9e",
    "to": "n_9ef20e8d-63fb-49e2-b422-6fc379ed7230",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6f54-9608-417f-b2f5-9e1823ce7e9e",
    "to": "n_9ef468a0-8404-4c7b-8162-aebdada0e880",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6f54-9608-417f-b2f5-9e1823ce7e9e",
    "to": "n_9ef4686a-fa45-4528-b91f-f7905f17e2f2",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6f54-9608-417f-b2f5-9e1823ce7e9e",
    "to": "n_9ef20d4a-df34-4fdb-bd3a-ee040ac75d27",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6f54-9608-417f-b2f5-9e1823ce7e9e",
    "to": "n_9eec71d2-9f98-4e7b-8c78-b195370e92d9",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec71d2-9f98-4e7b-8c78-b195370e92d9",
    "to": "n_9ef468a0-8404-4c7b-8162-aebdada0e880",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec71d2-9f98-4e7b-8c78-b195370e92d9",
    "to": "n_9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec71d2-9f98-4e7b-8c78-b195370e92d9",
    "to": "n_9f0284fa-c5b9-46c2-9328-35629efcc80b",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec71d2-9f98-4e7b-8c78-b195370e92d9",
    "to": "n_9eec6fc9-7571-48ed-820a-788abbe99bde",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec71d2-9f98-4e7b-8c78-b195370e92d9",
    "to": "n_9ef20e8d-63fb-49e2-b422-6fc379ed7230",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7312-a674-4ef8-88d3-ec2ee6d39cc9",
    "to": "n_9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7312-a674-4ef8-88d3-ec2ee6d39cc9",
    "to": "n_9eec7599-eb9d-49bb-9f51-6ef347cade9d",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7312-a674-4ef8-88d3-ec2ee6d39cc9",
    "to": "n_9eec7ec5-272e-47de-b295-2b37fe0500ad",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7312-a674-4ef8-88d3-ec2ee6d39cc9",
    "to": "n_9eec781c-53e5-41ff-84b7-3a72efb17a06",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7312-a674-4ef8-88d3-ec2ee6d39cc9",
    "to": "n_9eec772d-17a6-4cde-a235-77763ff5bcf4",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7312-a674-4ef8-88d3-ec2ee6d39cc9",
    "to": "n_9eec82e5-4201-47d4-869a-ec3ed752c271",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec79bf-8e02-432f-b1e2-30b29fe42dcc",
    "to": "n_9eec772d-17a6-4cde-a235-77763ff5bcf4",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec79bf-8e02-432f-b1e2-30b29fe42dcc",
    "to": "n_9eec79e5-16b7-46f3-8d81-b05bb78ab888",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec79bf-8e02-432f-b1e2-30b29fe42dcc",
    "to": "n_9eec781c-53e5-41ff-84b7-3a72efb17a06",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec79bf-8e02-432f-b1e2-30b29fe42dcc",
    "to": "n_9eec7a6e-6209-4dac-995f-2a331361fbdf",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec79bf-8e02-432f-b1e2-30b29fe42dcc",
    "to": "n_9eec7ac6-d026-4157-a076-998b718a7658",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec79bf-8e02-432f-b1e2-30b29fe42dcc",
    "to": "n_9eec78e9-ce63-4b04-8fd6-3da85b833c71",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec779b-099f-4958-95e9-f07f89487c6d",
    "to": "n_9eec78e9-ce63-4b04-8fd6-3da85b833c71",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec779b-099f-4958-95e9-f07f89487c6d",
    "to": "n_9eec7599-eb9d-49bb-9f51-6ef347cade9d",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec779b-099f-4958-95e9-f07f89487c6d",
    "to": "n_9eec7ec5-272e-47de-b295-2b37fe0500ad",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec779b-099f-4958-95e9-f07f89487c6d",
    "to": "n_9ef465c6-2726-4e9e-83b9-cd3fbd9edb45",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec779b-099f-4958-95e9-f07f89487c6d",
    "to": "n_9ef46579-870a-4bc7-81eb-9f0294177938",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec779b-099f-4958-95e9-f07f89487c6d",
    "to": "n_9eec772d-17a6-4cde-a235-77763ff5bcf4",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec781c-53e5-41ff-84b7-3a72efb17a06",
    "to": "n_9eec79e5-16b7-46f3-8d81-b05bb78ab888",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec781c-53e5-41ff-84b7-3a72efb17a06",
    "to": "n_9eec772d-17a6-4cde-a235-77763ff5bcf4",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec781c-53e5-41ff-84b7-3a72efb17a06",
    "to": "n_9eec7a6e-6209-4dac-995f-2a331361fbdf",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec781c-53e5-41ff-84b7-3a72efb17a06",
    "to": "n_9eec7ac6-d026-4157-a076-998b718a7658",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c35-df71-4ab2-b35b-2af55185009a",
    "to": "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c35-df71-4ab2-b35b-2af55185009a",
    "to": "n_9eec7c8a-42c1-43a2-840a-a17f4a1538cf",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c35-df71-4ab2-b35b-2af55185009a",
    "to": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c35-df71-4ab2-b35b-2af55185009a",
    "to": "n_9eec7b70-7128-48d1-b3b4-53d44866b07e",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c35-df71-4ab2-b35b-2af55185009a",
    "to": "n_9eec7a6e-6209-4dac-995f-2a331361fbdf",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c35-df71-4ab2-b35b-2af55185009a",
    "to": "n_9eec7ac6-d026-4157-a076-998b718a7658",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "to": "n_9eec7b70-7128-48d1-b3b4-53d44866b07e",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "to": "n_9eec7a6e-6209-4dac-995f-2a331361fbdf",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "to": "n_9eec7ac6-d026-4157-a076-998b718a7658",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "to": "n_9eec7c8a-42c1-43a2-840a-a17f4a1538cf",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "to": "n_9eec7b13-fda4-44c5-953a-dd36c58efcc8",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7a6e-6209-4dac-995f-2a331361fbdf",
    "to": "n_9eec7ac6-d026-4157-a076-998b718a7658",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7a6e-6209-4dac-995f-2a331361fbdf",
    "to": "n_9eec7b70-7128-48d1-b3b4-53d44866b07e",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7a6e-6209-4dac-995f-2a331361fbdf",
    "to": "n_9eec79e5-16b7-46f3-8d81-b05bb78ab888",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7a6e-6209-4dac-995f-2a331361fbdf",
    "to": "n_9eec7b13-fda4-44c5-953a-dd36c58efcc8",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7b13-fda4-44c5-953a-dd36c58efcc8",
    "to": "n_9eec7ac6-d026-4157-a076-998b718a7658",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7b13-fda4-44c5-953a-dd36c58efcc8",
    "to": "n_9eec7b70-7128-48d1-b3b4-53d44866b07e",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7b13-fda4-44c5-953a-dd36c58efcc8",
    "to": "n_9eec79e5-16b7-46f3-8d81-b05bb78ab888",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7b13-fda4-44c5-953a-dd36c58efcc8",
    "to": "n_9f028861-5207-4748-98ca-2d2a9a7bdb89",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec772d-17a6-4cde-a235-77763ff5bcf4",
    "to": "n_9eec79e5-16b7-46f3-8d81-b05bb78ab888",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec772d-17a6-4cde-a235-77763ff5bcf4",
    "to": "n_9eec7599-eb9d-49bb-9f51-6ef347cade9d",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec772d-17a6-4cde-a235-77763ff5bcf4",
    "to": "n_9eec7ec5-272e-47de-b295-2b37fe0500ad",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec79e5-16b7-46f3-8d81-b05bb78ab888",
    "to": "n_9eec7ac6-d026-4157-a076-998b718a7658",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec79e5-16b7-46f3-8d81-b05bb78ab888",
    "to": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c8a-42c1-43a2-840a-a17f4a1538cf",
    "to": "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c8a-42c1-43a2-840a-a17f4a1538cf",
    "to": "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c8a-42c1-43a2-840a-a17f4a1538cf",
    "to": "n_9eec7b70-7128-48d1-b3b4-53d44866b07e",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c8a-42c1-43a2-840a-a17f4a1538cf",
    "to": "n_9eec7a6e-6209-4dac-995f-2a331361fbdf",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
    "to": "n_9eec82e5-4201-47d4-869a-ec3ed752c271",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
    "to": "n_9f0847a3-a536-412b-aa0f-5c9f0b92b373",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
    "to": "n_9eec830c-6b6c-4bef-8ce4-7e0061f0987e",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
    "to": "n_9eec70e9-2b54-4e3d-a5cb-0f79726c890c",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
    "to": "n_9eec8174-f3c5-4e80-ae9e-f7286bd54a42",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
    "to": "n_9eec810c-3e3c-4aa2-a703-19085935167d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
    "to": "n_9eec8335-a3d8-4734-a3a0-6f00bd388072",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
    "to": "n_9eec70e9-2b54-4e3d-a5cb-0f79726c890c",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
    "to": "n_9eec8174-f3c5-4e80-ae9e-f7286bd54a42",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
    "to": "n_9eec830c-6b6c-4bef-8ce4-7e0061f0987e",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec830c-6b6c-4bef-8ce4-7e0061f0987e",
    "to": "n_9eec70e9-2b54-4e3d-a5cb-0f79726c890c",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec830c-6b6c-4bef-8ce4-7e0061f0987e",
    "to": "n_9eec8174-f3c5-4e80-ae9e-f7286bd54a42",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec830c-6b6c-4bef-8ce4-7e0061f0987e",
    "to": "n_9eec82e5-4201-47d4-869a-ec3ed752c271",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec830c-6b6c-4bef-8ce4-7e0061f0987e",
    "to": "n_9eec8335-a3d8-4734-a3a0-6f00bd388072",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec830c-6b6c-4bef-8ce4-7e0061f0987e",
    "to": "n_9f0847a3-a536-412b-aa0f-5c9f0b92b373",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec82e5-4201-47d4-869a-ec3ed752c271",
    "to": "n_9f0847a3-a536-412b-aa0f-5c9f0b92b373",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec82e5-4201-47d4-869a-ec3ed752c271",
    "to": "n_9eec70e9-2b54-4e3d-a5cb-0f79726c890c",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec82e5-4201-47d4-869a-ec3ed752c271",
    "to": "n_9eec8174-f3c5-4e80-ae9e-f7286bd54a42",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7e0e-89eb-4c13-8eb0-21b58e2fa968",
    "to": "n_9eec92b6-c184-459b-b63f-1d1ac451a95e",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7e0e-89eb-4c13-8eb0-21b58e2fa968",
    "to": "n_9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7e0e-89eb-4c13-8eb0-21b58e2fa968",
    "to": "n_9f0284fa-c5b9-46c2-9328-35629efcc80b",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7e0e-89eb-4c13-8eb0-21b58e2fa968",
    "to": "n_9eec71d2-9f98-4e7b-8c78-b195370e92d9",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7e0e-89eb-4c13-8eb0-21b58e2fa968",
    "to": "n_9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
    "distance": 23,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
    "to": "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
    "to": "n_9eec7c35-df71-4ab2-b35b-2af55185009a",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
    "to": "n_9ef464b9-ff7a-4def-af77-19496ce8fa45",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
    "to": "n_9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
    "distance": 16,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
    "to": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8ea0-a78f-4419-8d74-ee523e0d906e",
    "to": "n_9eec9a20-92f9-485b-8071-f32ad10bab10",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8ea0-a78f-4419-8d74-ee523e0d906e",
    "to": "n_9eec8e26-ec53-453f-a413-3aea21a9ba95",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8ea0-a78f-4419-8d74-ee523e0d906e",
    "to": "n_9eec91cc-165d-4468-a191-721e5ae47b6b",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8ea0-a78f-4419-8d74-ee523e0d906e",
    "to": "n_9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336",
    "distance": 16,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec8ea0-a78f-4419-8d74-ee523e0d906e",
    "to": "n_9f028861-5207-4748-98ca-2d2a9a7bdb89",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8ea0-a78f-4419-8d74-ee523e0d906e",
    "to": "n_9eec9380-623e-44a0-a9e2-6eb5aa776221",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8776-f642-49cd-80f2-04db0504d9ee",
    "to": "n_9ef48bb8-a5d1-4588-8cdd-59100c003935",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8776-f642-49cd-80f2-04db0504d9ee",
    "to": "n_9ef48c07-67a3-423b-8c93-5f7e7649cc61",
    "distance": 16,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8776-f642-49cd-80f2-04db0504d9ee",
    "to": "n_9eec922b-e398-42ff-9e6f-b749914d7ea5",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8776-f642-49cd-80f2-04db0504d9ee",
    "to": "n_9ef49dee-e4b2-4e01-9963-0c6f4be6f493",
    "distance": 21,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec8776-f642-49cd-80f2-04db0504d9ee",
    "to": "n_9ef46466-5f04-40c1-93e3-1ad0db0e47a6",
    "distance": 21,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8776-f642-49cd-80f2-04db0504d9ee",
    "to": "n_9eec9258-7571-427a-a72c-8d608c95a042",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6e73-bb14-4acd-854d-ee2b0e528107",
    "to": "n_9eec6e28-1824-434a-b4f9-78b9294d8850",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6e73-bb14-4acd-854d-ee2b0e528107",
    "to": "n_9ef49ed1-cd82-4787-a3c2-cee71937dd17",
    "distance": 3,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec6e73-bb14-4acd-854d-ee2b0e528107",
    "to": "n_9ef20d4a-df34-4fdb-bd3a-ee040ac75d27",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec6e73-bb14-4acd-854d-ee2b0e528107",
    "to": "n_9ef4686a-fa45-4528-b91f-f7905f17e2f2",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6e73-bb14-4acd-854d-ee2b0e528107",
    "to": "n_9ef24f24-43ee-47f9-bb32-518366849ad1",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec851e-4632-4e43-aa60-fc29301bd33a",
    "to": "n_9ef44f96-1daa-4da8-9f38-9d92ae22bf16",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec851e-4632-4e43-aa60-fc29301bd33a",
    "to": "n_9eec154b-d1bc-467c-b96c-33156ea1b448",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec851e-4632-4e43-aa60-fc29301bd33a",
    "to": "n_9ef450f5-fca0-4a8f-b2e2-8add6ec21215",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec851e-4632-4e43-aa60-fc29301bd33a",
    "to": "n_9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec851e-4632-4e43-aa60-fc29301bd33a",
    "to": "n_9ef468ff-6dda-4df2-890f-485bd7fc727a",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8553-fd7d-45f2-acba-b0eb3ead2475",
    "to": "n_9eec94c8-a304-46c1-8ffe-06c5bb3408f1",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8553-fd7d-45f2-acba-b0eb3ead2475",
    "to": "n_9ef49e93-f78c-4e70-8caf-3c0f52386f87",
    "distance": 12,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec8553-fd7d-45f2-acba-b0eb3ead2475",
    "to": "n_9ef48f75-d517-4e36-9331-6128a84825a7",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8553-fd7d-45f2-acba-b0eb3ead2475",
    "to": "n_9eec8fcb-024f-4d9c-abe5-5abf959c75c6",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8553-fd7d-45f2-acba-b0eb3ead2475",
    "to": "n_9ef48e98-f3b8-4658-a55d-480e77997455",
    "distance": 18,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8553-fd7d-45f2-acba-b0eb3ead2475",
    "to": "n_9ef4519a-b909-447a-9625-3c054c0d1d3f",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9476-8c85-490e-85b9-71b1e19c9a90",
    "to": "n_9eec9177-1334-4d68-a062-00018ba4812d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9476-8c85-490e-85b9-71b1e19c9a90",
    "to": "n_9ef48d69-aba6-41da-8822-9d0e84986e23",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec9476-8c85-490e-85b9-71b1e19c9a90",
    "to": "n_9ef48d14-4523-4894-8703-594c0f0916ae",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec9476-8c85-490e-85b9-71b1e19c9a90",
    "to": "n_9eec9145-d147-4605-8b74-b61ed00c1c80",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9476-8c85-490e-85b9-71b1e19c9a90",
    "to": "n_9eec90e5-1bca-4126-a080-d6e513a0c54a",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9476-8c85-490e-85b9-71b1e19c9a90",
    "to": "n_9eec9258-7571-427a-a72c-8d608c95a042",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8fcb-024f-4d9c-abe5-5abf959c75c6",
    "to": "n_9eec9052-76c2-45a4-aa02-fc70ad17a2f5",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8fcb-024f-4d9c-abe5-5abf959c75c6",
    "to": "n_9eec9315-957f-4996-974a-3e8eaf80fd78",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8fcb-024f-4d9c-abe5-5abf959c75c6",
    "to": "n_9eec9019-b87e-46fd-93ea-3a7601c17c03",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8fcb-024f-4d9c-abe5-5abf959c75c6",
    "to": "n_9ef4519a-b909-447a-9625-3c054c0d1d3f",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8fcb-024f-4d9c-abe5-5abf959c75c6",
    "to": "n_9eec94c8-a304-46c1-8ffe-06c5bb3408f1",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec90e5-1bca-4126-a080-d6e513a0c54a",
    "to": "n_9eec9145-d147-4605-8b74-b61ed00c1c80",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec90e5-1bca-4126-a080-d6e513a0c54a",
    "to": "n_9eec9177-1334-4d68-a062-00018ba4812d",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec90e5-1bca-4126-a080-d6e513a0c54a",
    "to": "n_9eec9052-76c2-45a4-aa02-fc70ad17a2f5",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec90e5-1bca-4126-a080-d6e513a0c54a",
    "to": "n_9eec99e0-c558-46d6-b667-99a4bd5a8bf2",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec90e5-1bca-4126-a080-d6e513a0c54a",
    "to": "n_9eec9019-b87e-46fd-93ea-3a7601c17c03",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9315-957f-4996-974a-3e8eaf80fd78",
    "to": "n_9eec9019-b87e-46fd-93ea-3a7601c17c03",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9315-957f-4996-974a-3e8eaf80fd78",
    "to": "n_9eec9052-76c2-45a4-aa02-fc70ad17a2f5",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9315-957f-4996-974a-3e8eaf80fd78",
    "to": "n_9eec90e5-1bca-4126-a080-d6e513a0c54a",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9315-957f-4996-974a-3e8eaf80fd78",
    "to": "n_9eec851e-4632-4e43-aa60-fc29301bd33a",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9315-957f-4996-974a-3e8eaf80fd78",
    "to": "n_9ef44f96-1daa-4da8-9f38-9d92ae22bf16",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9052-76c2-45a4-aa02-fc70ad17a2f5",
    "to": "n_9eec9019-b87e-46fd-93ea-3a7601c17c03",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9052-76c2-45a4-aa02-fc70ad17a2f5",
    "to": "n_9eec9145-d147-4605-8b74-b61ed00c1c80",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9052-76c2-45a4-aa02-fc70ad17a2f5",
    "to": "n_9ef4519a-b909-447a-9625-3c054c0d1d3f",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9145-d147-4605-8b74-b61ed00c1c80",
    "to": "n_9eec9177-1334-4d68-a062-00018ba4812d",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9145-d147-4605-8b74-b61ed00c1c80",
    "to": "n_9ef48d69-aba6-41da-8822-9d0e84986e23",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec9145-d147-4605-8b74-b61ed00c1c80",
    "to": "n_9ef48dd5-1f7b-418c-9d90-1c314a2d1981",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec9145-d147-4605-8b74-b61ed00c1c80",
    "to": "n_9ef4519a-b909-447a-9625-3c054c0d1d3f",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec922b-e398-42ff-9e6f-b749914d7ea5",
    "to": "n_9eec9258-7571-427a-a72c-8d608c95a042",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec922b-e398-42ff-9e6f-b749914d7ea5",
    "to": "n_9ef48cb7-97da-41b1-a4a2-a1bceecca23b",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec922b-e398-42ff-9e6f-b749914d7ea5",
    "to": "n_9ef48d14-4523-4894-8703-594c0f0916ae",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec922b-e398-42ff-9e6f-b749914d7ea5",
    "to": "n_9eec91cc-165d-4468-a191-721e5ae47b6b",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec922b-e398-42ff-9e6f-b749914d7ea5",
    "to": "n_9ef48c07-67a3-423b-8c93-5f7e7649cc61",
    "distance": 17,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec922b-e398-42ff-9e6f-b749914d7ea5",
    "to": "n_9eec9476-8c85-490e-85b9-71b1e19c9a90",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9258-7571-427a-a72c-8d608c95a042",
    "to": "n_9eec91cc-165d-4468-a191-721e5ae47b6b",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9258-7571-427a-a72c-8d608c95a042",
    "to": "n_9ef48cb7-97da-41b1-a4a2-a1bceecca23b",
    "distance": 16,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec9258-7571-427a-a72c-8d608c95a042",
    "to": "n_9ef48d14-4523-4894-8703-594c0f0916ae",
    "distance": 17,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec9258-7571-427a-a72c-8d608c95a042",
    "to": "n_9eec99e0-c558-46d6-b667-99a4bd5a8bf2",
    "distance": 20,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9177-1334-4d68-a062-00018ba4812d",
    "to": "n_9ef48d69-aba6-41da-8822-9d0e84986e23",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec9177-1334-4d68-a062-00018ba4812d",
    "to": "n_9ef48dd5-1f7b-418c-9d90-1c314a2d1981",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec9177-1334-4d68-a062-00018ba4812d",
    "to": "n_9ef4519a-b909-447a-9625-3c054c0d1d3f",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec99e0-c558-46d6-b667-99a4bd5a8bf2",
    "to": "n_9eec91cc-165d-4468-a191-721e5ae47b6b",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec99e0-c558-46d6-b667-99a4bd5a8bf2",
    "to": "n_9eec9019-b87e-46fd-93ea-3a7601c17c03",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec99e0-c558-46d6-b667-99a4bd5a8bf2",
    "to": "n_9eec9380-623e-44a0-a9e2-6eb5aa776221",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec99e0-c558-46d6-b667-99a4bd5a8bf2",
    "to": "n_9f028447-3ba9-4ccf-8b4b-05daa93f76b0",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec99e0-c558-46d6-b667-99a4bd5a8bf2",
    "to": "n_9eec9a20-92f9-485b-8071-f32ad10bab10",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9a20-92f9-485b-8071-f32ad10bab10",
    "to": "n_9f028861-5207-4748-98ca-2d2a9a7bdb89",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9a20-92f9-485b-8071-f32ad10bab10",
    "to": "n_9eec9380-623e-44a0-a9e2-6eb5aa776221",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9a20-92f9-485b-8071-f32ad10bab10",
    "to": "n_9eec8e26-ec53-453f-a413-3aea21a9ba95",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9a20-92f9-485b-8071-f32ad10bab10",
    "to": "n_9f028447-3ba9-4ccf-8b4b-05daa93f76b0",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9a20-92f9-485b-8071-f32ad10bab10",
    "to": "n_9f02834e-c66b-43b8-afdd-997eed7ee5ee",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20d4a-df34-4fdb-bd3a-ee040ac75d27",
    "to": "n_9eec6e28-1824-434a-b4f9-78b9294d8850",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20d4a-df34-4fdb-bd3a-ee040ac75d27",
    "to": "n_9ef4686a-fa45-4528-b91f-f7905f17e2f2",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef20d4a-df34-4fdb-bd3a-ee040ac75d27",
    "to": "n_9ef49ed1-cd82-4787-a3c2-cee71937dd17",
    "distance": 10,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef20d4a-df34-4fdb-bd3a-ee040ac75d27",
    "to": "n_9ef20e8d-63fb-49e2-b422-6fc379ed7230",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20e8d-63fb-49e2-b422-6fc379ed7230",
    "to": "n_9ef468a0-8404-4c7b-8162-aebdada0e880",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef20e8d-63fb-49e2-b422-6fc379ed7230",
    "to": "n_9ef4686a-fa45-4528-b91f-f7905f17e2f2",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef24f24-43ee-47f9-bb32-518366849ad1",
    "to": "n_9ef4667a-e72b-49e9-8985-3c1085a67866",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef24f24-43ee-47f9-bb32-518366849ad1",
    "to": "n_9ef49ed1-cd82-4787-a3c2-cee71937dd17",
    "distance": 9,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef24f24-43ee-47f9-bb32-518366849ad1",
    "to": "n_9eec6e28-1824-434a-b4f9-78b9294d8850",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef24f24-43ee-47f9-bb32-518366849ad1",
    "to": "n_9eec810c-3e3c-4aa2-a703-19085935167d",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec91cc-165d-4468-a191-721e5ae47b6b",
    "to": "n_9eec9a20-92f9-485b-8071-f32ad10bab10",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec91cc-165d-4468-a191-721e5ae47b6b",
    "to": "n_9eec90e5-1bca-4126-a080-d6e513a0c54a",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4519a-b909-447a-9625-3c054c0d1d3f",
    "to": "n_9eec94c8-a304-46c1-8ffe-06c5bb3408f1",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef4519a-b909-447a-9625-3c054c0d1d3f",
    "to": "n_9ef48e98-f3b8-4658-a55d-480e77997455",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4519a-b909-447a-9625-3c054c0d1d3f",
    "to": "n_9ef48dd5-1f7b-418c-9d90-1c314a2d1981",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef44f96-1daa-4da8-9f38-9d92ae22bf16",
    "to": "n_9eec154b-d1bc-467c-b96c-33156ea1b448",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44f96-1daa-4da8-9f38-9d92ae22bf16",
    "to": "n_9ef450f5-fca0-4a8f-b2e2-8add6ec21215",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef44f96-1daa-4da8-9f38-9d92ae22bf16",
    "to": "n_9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef44f96-1daa-4da8-9f38-9d92ae22bf16",
    "to": "n_9ef468ff-6dda-4df2-890f-485bd7fc727a",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef44f96-1daa-4da8-9f38-9d92ae22bf16",
    "to": "n_9eec724e-484e-4623-a440-885d0a47aa1b",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef450f5-fca0-4a8f-b2e2-8add6ec21215",
    "to": "n_9eec154b-d1bc-467c-b96c-33156ea1b448",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef450f5-fca0-4a8f-b2e2-8add6ec21215",
    "to": "n_9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef450f5-fca0-4a8f-b2e2-8add6ec21215",
    "to": "n_9ef468ff-6dda-4df2-890f-485bd7fc727a",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d",
    "to": "n_9ef46029-4126-4fbd-aeda-d61fdcf8164c",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d",
    "to": "n_9ef46411-a1a7-476f-b09f-a8dacb525674",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d",
    "to": "n_9ef46728-1456-470e-b273-8f2f32de3921",
    "distance": 17,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d",
    "to": "n_9ef464b9-ff7a-4def-af77-19496ce8fa45",
    "distance": 18,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d",
    "to": "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
    "distance": 25,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d",
    "to": "n_9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
    "distance": 27,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46466-5f04-40c1-93e3-1ad0db0e47a6",
    "to": "n_9ef4633d-97c8-4b8b-9370-1098123268b1",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46466-5f04-40c1-93e3-1ad0db0e47a6",
    "to": "n_9ef48bb8-a5d1-4588-8cdd-59100c003935",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46466-5f04-40c1-93e3-1ad0db0e47a6",
    "to": "n_9ef456a5-7fd1-497d-a063-f864a78359bc",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46466-5f04-40c1-93e3-1ad0db0e47a6",
    "to": "n_9ef46780-9dba-4bac-b681-f69e3f8e0f85",
    "distance": 20,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46466-5f04-40c1-93e3-1ad0db0e47a6",
    "to": "n_9ef48c07-67a3-423b-8c93-5f7e7649cc61",
    "distance": 20,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46029-4126-4fbd-aeda-d61fdcf8164c",
    "to": "n_9ef46411-a1a7-476f-b09f-a8dacb525674",
    "distance": 6,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46029-4126-4fbd-aeda-d61fdcf8164c",
    "to": "n_9ef464b9-ff7a-4def-af77-19496ce8fa45",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46029-4126-4fbd-aeda-d61fdcf8164c",
    "to": "n_9ef46728-1456-470e-b273-8f2f32de3921",
    "distance": 21,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46029-4126-4fbd-aeda-d61fdcf8164c",
    "to": "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
    "distance": 21,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46029-4126-4fbd-aeda-d61fdcf8164c",
    "to": "n_9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
    "distance": 21,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4633d-97c8-4b8b-9370-1098123268b1",
    "to": "n_9ef456a5-7fd1-497d-a063-f864a78359bc",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4633d-97c8-4b8b-9370-1098123268b1",
    "to": "n_9ef46780-9dba-4bac-b681-f69e3f8e0f85",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4633d-97c8-4b8b-9370-1098123268b1",
    "to": "n_9ef48bb8-a5d1-4588-8cdd-59100c003935",
    "distance": 19,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4633d-97c8-4b8b-9370-1098123268b1",
    "to": "n_9eec8776-f642-49cd-80f2-04db0504d9ee",
    "distance": 26,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4633d-97c8-4b8b-9370-1098123268b1",
    "to": "n_9ef48c07-67a3-423b-8c93-5f7e7649cc61",
    "distance": 27,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46411-a1a7-476f-b09f-a8dacb525674",
    "to": "n_9ef464b9-ff7a-4def-af77-19496ce8fa45",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46411-a1a7-476f-b09f-a8dacb525674",
    "to": "n_9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46411-a1a7-476f-b09f-a8dacb525674",
    "to": "n_9eec7cb0-919d-4bec-8125-94a3cc9dbc6f",
    "distance": 17,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46411-a1a7-476f-b09f-a8dacb525674",
    "to": "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
    "distance": 21,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef464b9-ff7a-4def-af77-19496ce8fa45",
    "to": "n_9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef464b9-ff7a-4def-af77-19496ce8fa45",
    "to": "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
    "to": "n_9ef4652d-a825-4415-a362-8bdddf3ad3fb",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
    "to": "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef464f9-f61d-4f26-b8d2-62a92d57eb9d",
    "to": "n_9eec7c35-df71-4ab2-b35b-2af55185009a",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4652d-a825-4415-a362-8bdddf3ad3fb",
    "to": "n_9ef46579-870a-4bc7-81eb-9f0294177938",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4652d-a825-4415-a362-8bdddf3ad3fb",
    "to": "n_9eec7c35-df71-4ab2-b35b-2af55185009a",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4652d-a825-4415-a362-8bdddf3ad3fb",
    "to": "n_9eec78e9-ce63-4b04-8fd6-3da85b833c71",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4652d-a825-4415-a362-8bdddf3ad3fb",
    "to": "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
    "distance": 16,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4652d-a825-4415-a362-8bdddf3ad3fb",
    "to": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "distance": 18,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46579-870a-4bc7-81eb-9f0294177938",
    "to": "n_9eec78e9-ce63-4b04-8fd6-3da85b833c71",
    "distance": 5,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46579-870a-4bc7-81eb-9f0294177938",
    "to": "n_9ef465c6-2726-4e9e-83b9-cd3fbd9edb45",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46579-870a-4bc7-81eb-9f0294177938",
    "to": "n_9eec79bf-8e02-432f-b1e2-30b29fe42dcc",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46579-870a-4bc7-81eb-9f0294177938",
    "to": "n_9eec772d-17a6-4cde-a235-77763ff5bcf4",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef465c6-2726-4e9e-83b9-cd3fbd9edb45",
    "to": "n_9eec78e9-ce63-4b04-8fd6-3da85b833c71",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef465c6-2726-4e9e-83b9-cd3fbd9edb45",
    "to": "n_9eec7599-eb9d-49bb-9f51-6ef347cade9d",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef465c6-2726-4e9e-83b9-cd3fbd9edb45",
    "to": "n_9eec7ec5-272e-47de-b295-2b37fe0500ad",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef465c6-2726-4e9e-83b9-cd3fbd9edb45",
    "to": "n_9ef46603-bd57-4a00-bdf6-3b79b3175376",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46603-bd57-4a00-bdf6-3b79b3175376",
    "to": "n_9eec8335-a3d8-4734-a3a0-6f00bd388072",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46603-bd57-4a00-bdf6-3b79b3175376",
    "to": "n_9ef46649-62eb-4a47-aa8a-40fc1ab5d311",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46603-bd57-4a00-bdf6-3b79b3175376",
    "to": "n_9eec810c-3e3c-4aa2-a703-19085935167d",
    "distance": 14,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46603-bd57-4a00-bdf6-3b79b3175376",
    "to": "n_9eec7599-eb9d-49bb-9f51-6ef347cade9d",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46603-bd57-4a00-bdf6-3b79b3175376",
    "to": "n_9eec7ec5-272e-47de-b295-2b37fe0500ad",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46649-62eb-4a47-aa8a-40fc1ab5d311",
    "to": "n_9eec810c-3e3c-4aa2-a703-19085935167d",
    "distance": 4,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46649-62eb-4a47-aa8a-40fc1ab5d311",
    "to": "n_9eec8335-a3d8-4734-a3a0-6f00bd388072",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46649-62eb-4a47-aa8a-40fc1ab5d311",
    "to": "n_9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46649-62eb-4a47-aa8a-40fc1ab5d311",
    "to": "n_9ef4667a-e72b-49e9-8985-3c1085a67866",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4667a-e72b-49e9-8985-3c1085a67866",
    "to": "n_9eec810c-3e3c-4aa2-a703-19085935167d",
    "distance": 9,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4667a-e72b-49e9-8985-3c1085a67866",
    "to": "n_9eec8142-bb2b-45d6-9d4d-07b7f4ae937b",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4667a-e72b-49e9-8985-3c1085a67866",
    "to": "n_9ef49ed1-cd82-4787-a3c2-cee71937dd17",
    "distance": 17,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef46728-1456-470e-b273-8f2f32de3921",
    "to": "n_9ef46756-84f4-461e-af73-74b9fd4fce4f",
    "distance": 18,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46728-1456-470e-b273-8f2f32de3921",
    "to": "n_9ef46411-a1a7-476f-b09f-a8dacb525674",
    "distance": 25,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46756-84f4-461e-af73-74b9fd4fce4f",
    "to": "n_9ef46780-9dba-4bac-b681-f69e3f8e0f85",
    "distance": 18,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46756-84f4-461e-af73-74b9fd4fce4f",
    "to": "n_9ef49dee-e4b2-4e01-9963-0c6f4be6f493",
    "distance": 21,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef46756-84f4-461e-af73-74b9fd4fce4f",
    "to": "n_9ef456a5-7fd1-497d-a063-f864a78359bc",
    "distance": 26,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46780-9dba-4bac-b681-f69e3f8e0f85",
    "to": "n_9ef456a5-7fd1-497d-a063-f864a78359bc",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef46780-9dba-4bac-b681-f69e3f8e0f85",
    "to": "n_9ef49dee-e4b2-4e01-9963-0c6f4be6f493",
    "distance": 25,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef46780-9dba-4bac-b681-f69e3f8e0f85",
    "to": "n_9eec8776-f642-49cd-80f2-04db0504d9ee",
    "distance": 30,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef4686a-fa45-4528-b91f-f7905f17e2f2",
    "to": "n_9eec6e28-1824-434a-b4f9-78b9294d8850",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef468a0-8404-4c7b-8162-aebdada0e880",
    "to": "n_9ef4686a-fa45-4528-b91f-f7905f17e2f2",
    "distance": 17,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef468a0-8404-4c7b-8162-aebdada0e880",
    "to": "n_9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a",
    "distance": 19,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
    "to": "n_9eec154b-d1bc-467c-b96c-33156ea1b448",
    "distance": 13,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
    "to": "n_9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a",
    "distance": 20,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef468ff-6dda-4df2-890f-485bd7fc727a",
    "to": "n_9eec154b-d1bc-467c-b96c-33156ea1b448",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef468ff-6dda-4df2-890f-485bd7fc727a",
    "to": "n_9ef49e93-f78c-4e70-8caf-3c0f52386f87",
    "distance": 19,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef468ff-6dda-4df2-890f-485bd7fc727a",
    "to": "n_9eec8553-fd7d-45f2-acba-b0eb3ead2475",
    "distance": 19,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48bb8-a5d1-4588-8cdd-59100c003935",
    "to": "n_9ef48c07-67a3-423b-8c93-5f7e7649cc61",
    "distance": 8,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48bb8-a5d1-4588-8cdd-59100c003935",
    "to": "n_9ef48cb7-97da-41b1-a4a2-a1bceecca23b",
    "distance": 19,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48bb8-a5d1-4588-8cdd-59100c003935",
    "to": "n_9eec922b-e398-42ff-9e6f-b749914d7ea5",
    "distance": 23,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec8335-a3d8-4734-a3a0-6f00bd388072",
    "to": "n_9eec810c-3e3c-4aa2-a703-19085935167d",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f02834e-c66b-43b8-afdd-997eed7ee5ee",
    "to": "n_9f028447-3ba9-4ccf-8b4b-05daa93f76b0",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f02834e-c66b-43b8-afdd-997eed7ee5ee",
    "to": "n_9eec9380-623e-44a0-a9e2-6eb5aa776221",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f02834e-c66b-43b8-afdd-997eed7ee5ee",
    "to": "n_9f028861-5207-4748-98ca-2d2a9a7bdb89",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f02834e-c66b-43b8-afdd-997eed7ee5ee",
    "to": "n_9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f02834e-c66b-43b8-afdd-997eed7ee5ee",
    "to": "n_9eec781c-53e5-41ff-84b7-3a72efb17a06",
    "distance": 23,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef48c07-67a3-423b-8c93-5f7e7649cc61",
    "to": "n_9ef48cb7-97da-41b1-a4a2-a1bceecca23b",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48c07-67a3-423b-8c93-5f7e7649cc61",
    "to": "n_9eec9258-7571-427a-a72c-8d608c95a042",
    "distance": 22,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48cb7-97da-41b1-a4a2-a1bceecca23b",
    "to": "n_9ef48d14-4523-4894-8703-594c0f0916ae",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48cb7-97da-41b1-a4a2-a1bceecca23b",
    "to": "n_9eec9476-8c85-490e-85b9-71b1e19c9a90",
    "distance": 19,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48d14-4523-4894-8703-594c0f0916ae",
    "to": "n_9ef48d69-aba6-41da-8822-9d0e84986e23",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48d14-4523-4894-8703-594c0f0916ae",
    "to": "n_9eec9177-1334-4d68-a062-00018ba4812d",
    "distance": 16,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48d69-aba6-41da-8822-9d0e84986e23",
    "to": "n_9ef48dd5-1f7b-418c-9d90-1c314a2d1981",
    "distance": 12,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48d69-aba6-41da-8822-9d0e84986e23",
    "to": "n_9eec90e5-1bca-4126-a080-d6e513a0c54a",
    "distance": 19,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48dd5-1f7b-418c-9d90-1c314a2d1981",
    "to": "n_9ef48e98-f3b8-4658-a55d-480e77997455",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48dd5-1f7b-418c-9d90-1c314a2d1981",
    "to": "n_9eec94c8-a304-46c1-8ffe-06c5bb3408f1",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48e98-f3b8-4658-a55d-480e77997455",
    "to": "n_9eec94c8-a304-46c1-8ffe-06c5bb3408f1",
    "distance": 7,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48e98-f3b8-4658-a55d-480e77997455",
    "to": "n_9ef48f75-d517-4e36-9331-6128a84825a7",
    "distance": 11,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48e98-f3b8-4658-a55d-480e77997455",
    "to": "n_9eec9145-d147-4605-8b74-b61ed00c1c80",
    "distance": 20,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48f75-d517-4e36-9331-6128a84825a7",
    "to": "n_9eec94c8-a304-46c1-8ffe-06c5bb3408f1",
    "distance": 10,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48f75-d517-4e36-9331-6128a84825a7",
    "to": "n_9ef49e93-f78c-4e70-8caf-3c0f52386f87",
    "distance": 13,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef48f75-d517-4e36-9331-6128a84825a7",
    "to": "n_9ef4519a-b909-447a-9625-3c054c0d1d3f",
    "distance": 17,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef48f75-d517-4e36-9331-6128a84825a7",
    "to": "n_9ef48dd5-1f7b-418c-9d90-1c314a2d1981",
    "distance": 21,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec70e9-2b54-4e3d-a5cb-0f79726c890c",
    "to": "n_9eec8174-f3c5-4e80-ae9e-f7286bd54a42",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec70e9-2b54-4e3d-a5cb-0f79726c890c",
    "to": "n_9f0847a3-a536-412b-aa0f-5c9f0b92b373",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec70e9-2b54-4e3d-a5cb-0f79726c890c",
    "to": "n_9eec7166-b510-4352-942b-3607561bbe34",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7599-eb9d-49bb-9f51-6ef347cade9d",
    "to": "n_9eec7ec5-272e-47de-b295-2b37fe0500ad",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7599-eb9d-49bb-9f51-6ef347cade9d",
    "to": "n_9eec78e9-ce63-4b04-8fd6-3da85b833c71",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef49e93-f78c-4e70-8caf-3c0f52386f87",
    "to": "n_9eec94c8-a304-46c1-8ffe-06c5bb3408f1",
    "distance": 20,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49e93-f78c-4e70-8caf-3c0f52386f87",
    "to": "n_9ef48e98-f3b8-4658-a55d-480e77997455",
    "distance": 23,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef49e93-f78c-4e70-8caf-3c0f52386f87",
    "to": "n_9eec8fcb-024f-4d9c-abe5-5abf959c75c6",
    "distance": 27,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49ed1-cd82-4787-a3c2-cee71937dd17",
    "to": "n_9eec6e28-1824-434a-b4f9-78b9294d8850",
    "distance": 6,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49ed1-cd82-4787-a3c2-cee71937dd17",
    "to": "n_9eec7166-b510-4352-942b-3607561bbe34",
    "distance": 15,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49ed1-cd82-4787-a3c2-cee71937dd17",
    "to": "n_9ef4686a-fa45-4528-b91f-f7905f17e2f2",
    "distance": 16,
    "accessible": false,
    "hasTactile": true,
    "width": 1.2
  },
  {
    "from": "n_9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336",
    "to": "n_9eec8e26-ec53-453f-a413-3aea21a9ba95",
    "distance": 14,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336",
    "to": "n_9ef49dee-e4b2-4e01-9963-0c6f4be6f493",
    "distance": 15,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336",
    "to": "n_9eec7c8a-42c1-43a2-840a-a17f4a1538cf",
    "distance": 21,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336",
    "to": "n_9eec7b13-fda4-44c5-953a-dd36c58efcc8",
    "distance": 22,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336",
    "to": "n_9eec9a20-92f9-485b-8071-f32ad10bab10",
    "distance": 24,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49dee-e4b2-4e01-9963-0c6f4be6f493",
    "to": "n_9eec8ea0-a78f-4419-8d74-ee523e0d906e",
    "distance": 27,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9ef49dee-e4b2-4e01-9963-0c6f4be6f493",
    "to": "n_9ef456a5-7fd1-497d-a063-f864a78359bc",
    "distance": 28,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9f0847a3-a536-412b-aa0f-5c9f0b92b373",
    "to": "n_9eec8174-f3c5-4e80-ae9e-f7286bd54a42",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0847a3-a536-412b-aa0f-5c9f0b92b373",
    "to": "n_9f0284fa-c5b9-46c2-9328-35629efcc80b",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7b70-7128-48d1-b3b4-53d44866b07e",
    "to": "n_9eec7ac6-d026-4157-a076-998b718a7658",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef456a5-7fd1-497d-a063-f864a78359bc",
    "to": "n_9ef48bb8-a5d1-4588-8cdd-59100c003935",
    "distance": 24,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef456a5-7fd1-497d-a063-f864a78359bc",
    "to": "n_9eec8776-f642-49cd-80f2-04db0504d9ee",
    "distance": 27,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec92b6-c184-459b-b63f-1d1ac451a95e",
    "to": "n_9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec92b6-c184-459b-b63f-1d1ac451a95e",
    "to": "n_9f0284fa-c5b9-46c2-9328-35629efcc80b",
    "distance": 17,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec92b6-c184-459b-b63f-1d1ac451a95e",
    "to": "n_9eec71d2-9f98-4e7b-8c78-b195370e92d9",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec92b6-c184-459b-b63f-1d1ac451a95e",
    "to": "n_9ef468d0-cd97-47bc-8ab7-8383dbdea4f6",
    "distance": 23,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9ef60cc7-3a6f-4da3-8d7d-860ae546bf6a",
    "to": "n_9f0284fa-c5b9-46c2-9328-35629efcc80b",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8174-f3c5-4e80-ae9e-f7286bd54a42",
    "to": "n_9eec7166-b510-4352-942b-3607561bbe34",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
    "to": "n_9eec7b93-e713-4e6d-853c-d4ece2b56690",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7c5b-a7c4-40e6-9b3a-fecc8b6fe4b7",
    "to": "n_9eec7b70-7128-48d1-b3b4-53d44866b07e",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9380-623e-44a0-a9e2-6eb5aa776221",
    "to": "n_9f028447-3ba9-4ccf-8b4b-05daa93f76b0",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9380-623e-44a0-a9e2-6eb5aa776221",
    "to": "n_9f028861-5207-4748-98ca-2d2a9a7bdb89",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9380-623e-44a0-a9e2-6eb5aa776221",
    "to": "n_9eec91cc-165d-4468-a191-721e5ae47b6b",
    "distance": 20,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec7ec5-272e-47de-b295-2b37fe0500ad",
    "to": "n_9eec78e9-ce63-4b04-8fd6-3da85b833c71",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec154b-d1bc-467c-b96c-33156ea1b448",
    "to": "n_9eec724e-484e-4623-a440-885d0a47aa1b",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec78e9-ce63-4b04-8fd6-3da85b833c71",
    "to": "n_9eec772d-17a6-4cde-a235-77763ff5bcf4",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f0284fa-c5b9-46c2-9328-35629efcc80b",
    "to": "n_9eec82ba-42d5-4c46-a9b6-b678bbf2f825",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8e26-ec53-453f-a413-3aea21a9ba95",
    "to": "n_9f028861-5207-4748-98ca-2d2a9a7bdb89",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8e26-ec53-453f-a413-3aea21a9ba95",
    "to": "n_9eec7b13-fda4-44c5-953a-dd36c58efcc8",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8e26-ec53-453f-a413-3aea21a9ba95",
    "to": "n_9eec9380-623e-44a0-a9e2-6eb5aa776221",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f028861-5207-4748-98ca-2d2a9a7bdb89",
    "to": "n_9f028447-3ba9-4ccf-8b4b-05daa93f76b0",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9f028447-3ba9-4ccf-8b4b-05daa93f76b0",
    "to": "n_9eec91cc-165d-4468-a191-721e5ae47b6b",
    "distance": 23,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec9019-b87e-46fd-93ea-3a7601c17c03",
    "to": "n_9eec9145-d147-4605-8b74-b61ed00c1c80",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
    "to": "n_9ef1fda9-a454-450f-99d5-93117e703bac",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
    "to": "n_9ef20284-a758-4a52-8ffa-760e2ea92da3",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
    "to": "n_9eebfdd5-a761-47be-b239-6fdf72f3bc7f",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
    "to": "n_9eebff2d-d940-4772-9b0f-6a683701cd02",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
    "to": "n_9ef20721-91df-4a4a-9019-c8322f75f9c9",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
    "to": "n_9ef1f535-7132-41fd-a82b-64fc48bc0701",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf7ec-248c-4342-a220-188730c7ed83",
    "to": "n_9eebf836-45f6-4343-8213-d4a75c62476b",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf7ec-248c-4342-a220-188730c7ed83",
    "to": "n_9eec190a-b777-4fb1-bb47-6ff30a39b519",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf7ec-248c-4342-a220-188730c7ed83",
    "to": "n_9eec196a-6c0b-4204-8225-52d3308a3858",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf7ec-248c-4342-a220-188730c7ed83",
    "to": "n_9ef1f800-6c29-497a-8697-0bd1532fdd3d",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf7ec-248c-4342-a220-188730c7ed83",
    "to": "n_9eebf885-f1b5-474d-a43b-4c44df2578ad",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf7ec-248c-4342-a220-188730c7ed83",
    "to": "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf94b-8244-4019-a32e-606e4ee6ce7c",
    "to": "n_9ef1f725-ee73-4b91-9baa-4c1149cbde00",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf94b-8244-4019-a32e-606e4ee6ce7c",
    "to": "n_9ef1f6c5-d0fd-40a5-acf3-0c9cce8f81d8",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf94b-8244-4019-a32e-606e4ee6ce7c",
    "to": "n_9eec8a91-c6e3-4aec-a28b-1bac434d66e7",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf94b-8244-4019-a32e-606e4ee6ce7c",
    "to": "n_9eec0bd3-c8dc-4026-a5bb-8467e4e820a1",
    "distance": 15,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0",
    "to": "n_9eebfc56-12ec-482f-994b-bfea7ae2d314",
    "distance": 5,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0",
    "to": "n_9eec0166-4d0a-4009-a5ca-facf64aeace2",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0",
    "to": "n_9eebfc01-ec1a-41fe-9411-c0bae168de9b",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0",
    "to": "n_9eec0c15-0184-41b5-9bba-f0581b28174c",
    "distance": 20,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0",
    "to": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0",
    "to": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfc56-12ec-482f-994b-bfea7ae2d314",
    "to": "n_9eec0166-4d0a-4009-a5ca-facf64aeace2",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfc56-12ec-482f-994b-bfea7ae2d314",
    "to": "n_9eebfc01-ec1a-41fe-9411-c0bae168de9b",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfc56-12ec-482f-994b-bfea7ae2d314",
    "to": "n_9eec0c15-0184-41b5-9bba-f0581b28174c",
    "distance": 20,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eebfc56-12ec-482f-994b-bfea7ae2d314",
    "to": "n_9eebfca5-d79a-463f-8797-8104c200b844",
    "distance": 22,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfc56-12ec-482f-994b-bfea7ae2d314",
    "to": "n_9ef1f57c-69fb-411d-9f4a-36c12b4dd723",
    "distance": 24,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfca5-d79a-463f-8797-8104c200b844",
    "to": "n_9eebfdd5-a761-47be-b239-6fdf72f3bc7f",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfca5-d79a-463f-8797-8104c200b844",
    "to": "n_a1018efd-0d08-4fcb-89b0-c4c0560fe3a5",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfca5-d79a-463f-8797-8104c200b844",
    "to": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
    "distance": 22,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfca5-d79a-463f-8797-8104c200b844",
    "to": "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0",
    "distance": 23,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfca5-d79a-463f-8797-8104c200b844",
    "to": "n_9ef1fda9-a454-450f-99d5-93117e703bac",
    "distance": 28,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfc01-ec1a-41fe-9411-c0bae168de9b",
    "to": "n_9eec0166-4d0a-4009-a5ca-facf64aeace2",
    "distance": 3,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfc01-ec1a-41fe-9411-c0bae168de9b",
    "to": "n_9ef1f57c-69fb-411d-9f4a-36c12b4dd723",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfc01-ec1a-41fe-9411-c0bae168de9b",
    "to": "n_9eec0c15-0184-41b5-9bba-f0581b28174c",
    "distance": 8,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eebfc01-ec1a-41fe-9411-c0bae168de9b",
    "to": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfc01-ec1a-41fe-9411-c0bae168de9b",
    "to": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfc01-ec1a-41fe-9411-c0bae168de9b",
    "to": "n_a1018e0d-acb7-474f-8e2d-9ef389f237bb",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf67e-eb5a-4194-bbfc-996c7c051849",
    "to": "n_9eebf74f-6286-4b7b-9f05-21558012a6b9",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf67e-eb5a-4194-bbfc-996c7c051849",
    "to": "n_9ef24fb8-a00e-4405-aa12-a42c322083e2",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf836-45f6-4343-8213-d4a75c62476b",
    "to": "n_9eebf885-f1b5-474d-a43b-4c44df2578ad",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf836-45f6-4343-8213-d4a75c62476b",
    "to": "n_9eec190a-b777-4fb1-bb47-6ff30a39b519",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf836-45f6-4343-8213-d4a75c62476b",
    "to": "n_9ef1f800-6c29-497a-8697-0bd1532fdd3d",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf836-45f6-4343-8213-d4a75c62476b",
    "to": "n_9eec196a-6c0b-4204-8225-52d3308a3858",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf836-45f6-4343-8213-d4a75c62476b",
    "to": "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
    "distance": 16,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebff95-4008-474e-b4fd-0f5c8aeadd7b",
    "to": "n_9eebffe6-fa71-4d78-a5b7-69c9b4342d57",
    "distance": 9,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebff95-4008-474e-b4fd-0f5c8aeadd7b",
    "to": "n_9ef1f5f0-5a61-49c5-a77f-4b10d84b8129",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebff95-4008-474e-b4fd-0f5c8aeadd7b",
    "to": "n_9ef20a06-9d6f-487e-8f20-f4834fbf8d4c",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebff95-4008-474e-b4fd-0f5c8aeadd7b",
    "to": "n_9eec0058-6839-4405-9735-d22dbcadc6d1",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebffe6-fa71-4d78-a5b7-69c9b4342d57",
    "to": "n_9ef20a06-9d6f-487e-8f20-f4834fbf8d4c",
    "distance": 12,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebffe6-fa71-4d78-a5b7-69c9b4342d57",
    "to": "n_9eec0058-6839-4405-9735-d22dbcadc6d1",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebffe6-fa71-4d78-a5b7-69c9b4342d57",
    "to": "n_9ef1f5f0-5a61-49c5-a77f-4b10d84b8129",
    "distance": 19,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebffe6-fa71-4d78-a5b7-69c9b4342d57",
    "to": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "distance": 23,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebffe6-fa71-4d78-a5b7-69c9b4342d57",
    "to": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "distance": 23,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "to": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "to": "n_a1018e0d-acb7-474f-8e2d-9ef389f237bb",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "to": "n_9eec0058-6839-4405-9735-d22dbcadc6d1",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "to": "n_9ef1f57c-69fb-411d-9f4a-36c12b4dd723",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "to": "n_9eec0166-4d0a-4009-a5ca-facf64aeace2",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec0bd3-c8dc-4026-a5bb-8467e4e820a1",
    "to": "n_9ef1f725-ee73-4b91-9baa-4c1149cbde00",
    "distance": 17,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0bd3-c8dc-4026-a5bb-8467e4e820a1",
    "to": "n_9ef1f6c5-d0fd-40a5-acf3-0c9cce8f81d8",
    "distance": 17,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0bd3-c8dc-4026-a5bb-8467e4e820a1",
    "to": "n_9eec8a0a-fc34-41da-9271-270faef1d505",
    "distance": 21,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0bd3-c8dc-4026-a5bb-8467e4e820a1",
    "to": "n_9eec8a91-c6e3-4aec-a28b-1bac434d66e7",
    "distance": 27,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
    "to": "n_9eec89c4-edac-4e3b-a427-a53b4f62c2cf",
    "distance": 11,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
    "to": "n_9ef20284-a758-4a52-8ffa-760e2ea92da3",
    "distance": 18,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
    "to": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
    "distance": 26,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
    "to": "n_9ef1fda9-a454-450f-99d5-93117e703bac",
    "distance": 28,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
    "to": "n_9eebff2d-d940-4772-9b0f-6a683701cd02",
    "distance": 28,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
    "to": "n_9ef20721-91df-4a4a-9019-c8322f75f9c9",
    "distance": 28,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec190a-b777-4fb1-bb47-6ff30a39b519",
    "to": "n_9eebf885-f1b5-474d-a43b-4c44df2578ad",
    "distance": 4,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec190a-b777-4fb1-bb47-6ff30a39b519",
    "to": "n_9eec196a-6c0b-4204-8225-52d3308a3858",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec190a-b777-4fb1-bb47-6ff30a39b519",
    "to": "n_9ef1f800-6c29-497a-8697-0bd1532fdd3d",
    "distance": 14,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec190a-b777-4fb1-bb47-6ff30a39b519",
    "to": "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec0c15-0184-41b5-9bba-f0581b28174c",
    "to": "n_9ef1f57c-69fb-411d-9f4a-36c12b4dd723",
    "distance": 10,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0c15-0184-41b5-9bba-f0581b28174c",
    "to": "n_9eec0166-4d0a-4009-a5ca-facf64aeace2",
    "distance": 11,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0c15-0184-41b5-9bba-f0581b28174c",
    "to": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "distance": 20,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0c15-0184-41b5-9bba-f0581b28174c",
    "to": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "distance": 20,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eec0c15-0184-41b5-9bba-f0581b28174c",
    "to": "n_a1018e0d-acb7-474f-8e2d-9ef389f237bb",
    "distance": 20,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eebff2d-d940-4772-9b0f-6a683701cd02",
    "to": "n_9ef20721-91df-4a4a-9019-c8322f75f9c9",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebff2d-d940-4772-9b0f-6a683701cd02",
    "to": "n_9ef1f535-7132-41fd-a82b-64fc48bc0701",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebff2d-d940-4772-9b0f-6a683701cd02",
    "to": "n_9ef1fda9-a454-450f-99d5-93117e703bac",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebff2d-d940-4772-9b0f-6a683701cd02",
    "to": "n_9ef20284-a758-4a52-8ffa-760e2ea92da3",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "to": "n_a1018e0d-acb7-474f-8e2d-9ef389f237bb",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "to": "n_9eec0058-6839-4405-9735-d22dbcadc6d1",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "to": "n_9ef1f57c-69fb-411d-9f4a-36c12b4dd723",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "to": "n_9eec0166-4d0a-4009-a5ca-facf64aeace2",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_a1018e0d-acb7-474f-8e2d-9ef389f237bb",
    "to": "n_9eec0058-6839-4405-9735-d22dbcadc6d1",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_a1018e0d-acb7-474f-8e2d-9ef389f237bb",
    "to": "n_9ef1f57c-69fb-411d-9f4a-36c12b4dd723",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_a1018e0d-acb7-474f-8e2d-9ef389f237bb",
    "to": "n_9eec0166-4d0a-4009-a5ca-facf64aeace2",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_a1018efd-0d08-4fcb-89b0-c4c0560fe3a5",
    "to": "n_9eebfdd5-a761-47be-b239-6fdf72f3bc7f",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_a1018efd-0d08-4fcb-89b0-c4c0560fe3a5",
    "to": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
    "distance": 20,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_a1018efd-0d08-4fcb-89b0-c4c0560fe3a5",
    "to": "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0",
    "distance": 25,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_a1018efd-0d08-4fcb-89b0-c4c0560fe3a5",
    "to": "n_9eebfc56-12ec-482f-994b-bfea7ae2d314",
    "distance": 26,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_a1018efd-0d08-4fcb-89b0-c4c0560fe3a5",
    "to": "n_9ef1fda9-a454-450f-99d5-93117e703bac",
    "distance": 28,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec196a-6c0b-4204-8225-52d3308a3858",
    "to": "n_9ef1f800-6c29-497a-8697-0bd1532fdd3d",
    "distance": 6,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec196a-6c0b-4204-8225-52d3308a3858",
    "to": "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec196a-6c0b-4204-8225-52d3308a3858",
    "to": "n_9eebf885-f1b5-474d-a43b-4c44df2578ad",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8a0a-fc34-41da-9271-270faef1d505",
    "to": "n_9eebf885-f1b5-474d-a43b-4c44df2578ad",
    "distance": 27,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8a0a-fc34-41da-9271-270faef1d505",
    "to": "n_9eec190a-b777-4fb1-bb47-6ff30a39b519",
    "distance": 29,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8a91-c6e3-4aec-a28b-1bac434d66e7",
    "to": "n_9ef1f725-ee73-4b91-9baa-4c1149cbde00",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8a91-c6e3-4aec-a28b-1bac434d66e7",
    "to": "n_9ef1f6c5-d0fd-40a5-acf3-0c9cce8f81d8",
    "distance": 13,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec8a91-c6e3-4aec-a28b-1bac434d66e7",
    "to": "n_9ef1f5f0-5a61-49c5-a77f-4b10d84b8129",
    "distance": 22,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec89c4-edac-4e3b-a427-a53b4f62c2cf",
    "to": "n_9eec196a-6c0b-4204-8225-52d3308a3858",
    "distance": 21,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec89c4-edac-4e3b-a427-a53b4f62c2cf",
    "to": "n_9eebf7ec-248c-4342-a220-188730c7ed83",
    "distance": 27,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec89c4-edac-4e3b-a427-a53b4f62c2cf",
    "to": "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
    "distance": 27,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec89c4-edac-4e3b-a427-a53b4f62c2cf",
    "to": "n_9ef1f800-6c29-497a-8697-0bd1532fdd3d",
    "distance": 27,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec89c4-edac-4e3b-a427-a53b4f62c2cf",
    "to": "n_9eec190a-b777-4fb1-bb47-6ff30a39b519",
    "distance": 28,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef1f725-ee73-4b91-9baa-4c1149cbde00",
    "to": "n_9ef1f6c5-d0fd-40a5-acf3-0c9cce8f81d8",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef1f725-ee73-4b91-9baa-4c1149cbde00",
    "to": "n_9ef1f5f0-5a61-49c5-a77f-4b10d84b8129",
    "distance": 24,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef1f57c-69fb-411d-9f4a-36c12b4dd723",
    "to": "n_9eec0166-4d0a-4009-a5ca-facf64aeace2",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef1f6c5-d0fd-40a5-acf3-0c9cce8f81d8",
    "to": "n_9ef1f5f0-5a61-49c5-a77f-4b10d84b8129",
    "distance": 24,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef1f800-6c29-497a-8697-0bd1532fdd3d",
    "to": "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
    "distance": 7,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef1f800-6c29-497a-8697-0bd1532fdd3d",
    "to": "n_9eebf885-f1b5-474d-a43b-4c44df2578ad",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20721-91df-4a4a-9019-c8322f75f9c9",
    "to": "n_9ef1f535-7132-41fd-a82b-64fc48bc0701",
    "distance": 2,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20721-91df-4a4a-9019-c8322f75f9c9",
    "to": "n_9ef1fda9-a454-450f-99d5-93117e703bac",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20721-91df-4a4a-9019-c8322f75f9c9",
    "to": "n_9ef20284-a758-4a52-8ffa-760e2ea92da3",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20a06-9d6f-487e-8f20-f4834fbf8d4c",
    "to": "n_9eec0058-6839-4405-9735-d22dbcadc6d1",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20a06-9d6f-487e-8f20-f4834fbf8d4c",
    "to": "n_9eec00ae-4173-4717-9399-bd7eb174f0e6",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20a06-9d6f-487e-8f20-f4834fbf8d4c",
    "to": "n_9eec19e0-123d-4978-a3f4-4a10f1252c15",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20a06-9d6f-487e-8f20-f4834fbf8d4c",
    "to": "n_a1018e0d-acb7-474f-8e2d-9ef389f237bb",
    "distance": 15,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef24fb8-a00e-4405-aa12-a42c322083e2",
    "to": "n_9eebf74f-6286-4b7b-9f05-21558012a6b9",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef24fb8-a00e-4405-aa12-a42c322083e2",
    "to": "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
    "distance": 18,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef24fb8-a00e-4405-aa12-a42c322083e2",
    "to": "n_9ef1f800-6c29-497a-8697-0bd1532fdd3d",
    "distance": 25,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef24fb8-a00e-4405-aa12-a42c322083e2",
    "to": "n_9eec196a-6c0b-4204-8225-52d3308a3858",
    "distance": 25,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20284-a758-4a52-8ffa-760e2ea92da3",
    "to": "n_9ef1f535-7132-41fd-a82b-64fc48bc0701",
    "distance": 10,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20284-a758-4a52-8ffa-760e2ea92da3",
    "to": "n_9ef1fda9-a454-450f-99d5-93117e703bac",
    "distance": 11,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf885-f1b5-474d-a43b-4c44df2578ad",
    "to": "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
    "distance": 22,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef1f535-7132-41fd-a82b-64fc48bc0701",
    "to": "n_9ef1fda9-a454-450f-99d5-93117e703bac",
    "distance": 8,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef1f535-7132-41fd-a82b-64fc48bc0701",
    "to": "n_9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
    "distance": 28,
    "accessible": false,
    "hasTactile": false,
    "width": 1.2
  },
  {
    "from": "n_9eebfdd5-a761-47be-b239-6fdf72f3bc7f",
    "to": "n_9ef1fda9-a454-450f-99d5-93117e703bac",
    "distance": 22,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfdd5-a761-47be-b239-6fdf72f3bc7f",
    "to": "n_9ef20284-a758-4a52-8ffa-760e2ea92da3",
    "distance": 28,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebfdd5-a761-47be-b239-6fdf72f3bc7f",
    "to": "n_9eebfc56-12ec-482f-994b-bfea7ae2d314",
    "distance": 28,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eec0058-6839-4405-9735-d22dbcadc6d1",
    "to": "n_9eec0166-4d0a-4009-a5ca-facf64aeace2",
    "distance": 20,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef1f5f0-5a61-49c5-a77f-4b10d84b8129",
    "to": "n_9ef20a06-9d6f-487e-8f20-f4834fbf8d4c",
    "distance": 24,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9eebf74f-6286-4b7b-9f05-21558012a6b9",
    "to": "n_9eec17ce-36e9-410f-b65e-7bc7fdf435e5",
    "distance": 23,
    "accessible": true,
    "hasTactile": false,
    "width": 2
  },
  {
    "from": "n_9ef20284-a758-4a52-8ffa-760e2ea92da3",
    "to": "n_9eec89c4-edac-4e3b-a427-a53b4f62c2cf",
    "distance": 28,
    "accessible": true,
    "hasTactile": true,
    "width": 2.2
  },
  {
    "from": "n_9ef496b8-20fc-4b8c-a8d0-497f94d9212b",
    "to": "n_9ef496b3-91cb-4db9-ac96-c746921e122b",
    "distance": 25,
    "accessible": false,
    "isFloorTransition": true,
    "transitionType": "stairs",
    "width": 1.5
  },
  {
    "from": "n_9ef49989-6e58-4ac9-893d-11a5de7fa4ed",
    "to": "n_9ef49889-df5e-4811-9a3d-bb117f07a279",
    "distance": 25,
    "accessible": false,
    "isFloorTransition": true,
    "transitionType": "stairs",
    "width": 1.5
  },
  {
    "from": "n_9ef49a6b-7eea-4afa-b6db-8f3155843e27",
    "to": "n_9ef499cd-6dc9-4c9a-93a4-a83c40338eec",
    "distance": 25,
    "accessible": false,
    "isFloorTransition": true,
    "transitionType": "stairs",
    "width": 1.5
  },
  {
    "from": "n_9ef49b56-c410-4339-a1e8-92fe2228b6e1",
    "to": "n_9ef49ab9-5872-4559-9335-918f1400e167",
    "distance": 25,
    "accessible": false,
    "isFloorTransition": true,
    "transitionType": "stairs",
    "width": 1.5
  },
  {
    "from": "n_9ef49846-fc66-442b-b42a-2c15f7eb65dc",
    "to": "n_9ef49b98-0d91-484a-9874-4517d444aaba",
    "distance": 25,
    "accessible": false,
    "isFloorTransition": true,
    "transitionType": "stairs",
    "width": 1.5
  },
  {
    "from": "n_9ef5f9fd-67e0-409c-b039-c84fc8c030c8",
    "to": "n_9ef5fa31-15d1-4210-8086-0e5d61329213",
    "distance": 25,
    "accessible": false,
    "isFloorTransition": true,
    "transitionType": "stairs",
    "width": 1.5
  },
  {
    "from": "n_ramp_pg_barat_1",
    "to": "n_ramp_pg_barat_2",
    "distance": 35,
    "accessible": true,
    "isFloorTransition": true,
    "transitionType": "ramp",
    "hasTactile": true,
    "width": 1.8,
    "rampGrade": "7%"
  },
  {
    "from": "n_9ef49e93-f78c-4e70-8caf-3c0f52386f87",
    "to": "n_9eec0bd3-c8dc-4026-a5bb-8467e4e820a1",
    "distance": 25,
    "accessible": false,
    "isFloorTransition": true,
    "transitionType": "stairs",
    "width": 1.5
  },
  {
    "from": "n_9ef49ed1-cd82-4787-a3c2-cee71937dd17",
    "to": "n_9eec0c15-0184-41b5-9bba-f0581b28174c",
    "distance": 25,
    "accessible": false,
    "isFloorTransition": true,
    "transitionType": "stairs",
    "width": 1.5
  },
  {
    "from": "n_9ef49e10-b3f4-4fb1-9afa-cd2ac7bae336",
    "to": "n_9eec0b55-2fc3-4dcd-a7c9-54989062dad0",
    "distance": 25,
    "accessible": false,
    "isFloorTransition": true,
    "transitionType": "stairs",
    "width": 1.5
  },
  {
    "from": "n_9ef49dee-e4b2-4e01-9963-0c6f4be6f493",
    "to": "n_9eec0b8a-15f9-4358-85c5-46133cf330b5",
    "distance": 25,
    "accessible": false,
    "isFloorTransition": true,
    "transitionType": "stairs",
    "width": 1.5
  },
  {
    "from": "n_ramp_pb_1",
    "to": "n_ramp_pb_2",
    "distance": 30,
    "accessible": true,
    "isFloorTransition": true,
    "transitionType": "ramp",
    "hasTactile": true,
    "width": 1.8,
    "rampGrade": "6%"
  },
  {
    "from": "n_ramp_pb_1",
    "to": "n_9eec724e-484e-4623-a440-885d0a47aa1b",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_ramp_pb_1",
    "to": "n_9eec6fc9-7571-48ed-820a-788abbe99bde",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_ramp_pb_1",
    "to": "n_9eec7166-b510-4352-942b-3607561bbe34",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_ramp_pb_1",
    "to": "n_9eec6f54-9608-417f-b2f5-9e1823ce7e9e",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_ramp_pb_2",
    "to": "n_9eebfe34-9390-40d9-8427-aff64657b9fe",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_ramp_pb_2",
    "to": "n_9eebf7ec-248c-4342-a220-188730c7ed83",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_ramp_pb_2",
    "to": "n_9eebf94b-8244-4019-a32e-606e4ee6ce7c",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_ramp_pb_2",
    "to": "n_9eebfd8b-29bb-4086-a31a-a601f34f78b0",
    "distance": 15,
    "accessible": true,
    "hasTactile": true,
    "width": 2
  },
  {
    "from": "n_9eec6913-95cb-4ac1-b414-ad5723ddc6fc",
    "to": "n_9ef46756-84f4-461e-af73-74b9fd4fce4f",
    "distance": 30,
    "accessible": true,
    "hasTactile": true,
    "isBuildingTransition": true,
    "transitionType": "crosswalk",
    "width": 2.5
  },
  {
    "from": "n_9eec6146-0218-40fc-bd3c-bbaab1a09adc",
    "to": "n_9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d",
    "distance": 40,
    "accessible": true,
    "hasTactile": true,
    "isBuildingTransition": true,
    "transitionType": "crosswalk",
    "width": 2.5
  }
];

    function getNodes() {
        return nodes;
    }

    function getNode(id) {
        return nodes[id] || null;
    }

    function getEdges() {
        return edges;
    }

    function getNodesForFloor(floor, bldId) {
        const result = {};
        for (const [id, node] of Object.entries(nodes)) {
            if (node.floor === floor && (!bldId || node.buildingId === bldId)) {
                result[id] = node;
            }
        }
        return result;
    }

    function getEdgesForFloor(floor, bldId) {
        return edges.filter(e => {
            const fromNode = nodes[e.from];
            const toNode = nodes[e.to];
            const matchBld = !bldId || (fromNode && fromNode.buildingId === bldId);
            return matchBld && ((fromNode && fromNode.floor === floor) || (toNode && toNode.floor === floor));
        });
    }

    function getNeighbors(nodeId, mode = 'normal') {
        const neighbors = [];
        edges.forEach(edge => {
            let neighborId = null;
            if (edge.from === nodeId) neighborId = edge.to;
            if (edge.to === nodeId) neighborId = edge.from;
            
            if (neighborId) {
                if (mode === 'wheelchair' && !edge.accessible) return;
                
                neighbors.push({
                    nodeId: neighborId,
                    node: nodes[neighborId],
                    edge: edge
                });
            }
        });
        return neighbors;
    }

    function getEdgeBetween(fromId, toId) {
        return edges.find(e => 
            (e.from === fromId && e.to === toId) || 
            (e.to === fromId && e.from === toId)
        );
    }

    function getAllNavigableLocations(bldId) {
        const locations = [];
        for (const [id, node] of Object.entries(nodes)) {
            if (!bldId || node.buildingId === bldId) {
                locations.push({
                    nodeId: id,
                    name: node.name,
                    floor: node.floor,
                    buildingId: node.buildingId,
                    type: node.type,
                    accessible: node.accessible
                });
            }
        }
        return locations.sort((a, b) => a.name.localeCompare(b.name));
    }

    return {
        nodes,
        edges,
        getNodes,
        getNode,
        getEdges,
        getNodesForFloor,
        getEdgesForFloor,
        getNeighbors,
        getEdgeBetween,
        getAllNavigableLocations
    };
})();
