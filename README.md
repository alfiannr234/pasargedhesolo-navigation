# Interactive & Accessible Indoor Navigation Map - Pasar Gedhe Solo

A comprehensive indoor mapping and web navigation system for Pasar Gedhe Hardjonagoro and Pasar Buah Solo. Built with modern web standards, this platform offers architectural floor plan exploration, interactive category filtering, smart search, merchant directory, multi-building and multi-floor pathfinding, and dedicated accessibility navigation modes for wheelchair users and visually impaired visitors.

---

## Key Features

### 1. Detailed Vector Floor Plans (2 Buildings, 4 Floors)
- **Pasar Gedhe (Main Building):**
  - **Floor 1:** Fresh produce, vegetables, traditional herbs and spices, dry groceries, ceremonial flowers, and local souvenirs.
  - **Floor 2:** Heritage culinary center, meat stalls (poultry and beef), and dining spaces.
- **Pasar Buah (East Building):**
  - **Floor 1:** Fresh local and imported fruits.
  - **Floor 2:** Food court and traditional snacks.
- High-precision architectural SVG blueprints mapped onto a Cartesian coordinate system (CRS.Simple), featuring stall photos, merchant biographies, and exact entrance coordinates.

### 2. Interactive Legend and Category Filtering
- **Grouped Taxonomies:** Clear separation between commodity zones (fruits, vegetables, culinary, herbs and spices, meat, seafood, groceries, textiles, crafts) and public facilities (restrooms, prayer rooms, entrance gates, stairs, ramps).
- **Real-Time Layer Filtering:** Toggle category visibility directly on the map canvas with instant marker updates.
- **Batch Actions:** Quick-select controls to show all or hide all categories with a single click.
- **Dynamic Counters:** Active badge indicators reflecting the exact number of stalls currently visible on the selected building and floor.

### 3. Merchant Directory (Tenant List)
- **Comprehensive Catalog (470+ Stalls):** Card grid display showcasing authentic merchant photography, official stall names, and floor placements.
- **Multi-Criteria Filtering:**
  - **Instant Keyword Search:** Real-time text search filtering across stall names, products, and descriptions.
  - **Dropdown Selectors:** Filter by commodity category and floor level.
  - **Alphabetical A-Z Bar:** Direct filtering by initial letter across 10 structured columns.
- **Map Synchronization:** Clicking any tenant card centers the map on the booth with a pulsing highlight and opens the merchant detail panel with one-click routing options.

### 4. Turn-by-Turn Route Navigation and Step HUD
- **Flexible Origin and Destination Selection:**
  - Autocomplete search inputs for quick point-of-interest selection.
  - Interactive crosshair tool to select coordinates directly from the map canvas.
  - One-click origin and destination assignment from any merchant detail drawer.
  - Instant direction swap button.
- **Top-Center Floating Step HUD:**
  - Turn-by-turn directional instructions with progress tracking.
  - Forward and backward step navigation controls.
  - Total walking distance in meters and estimated walking duration in minutes.
- **Pedestrian Corridor Pathfinding:**
  - Animated dashed path rendering strictly aligned to walkable corridors.
  - Multi-building and multi-floor pathfinding with automated floor switching indicators.

### 5. Dedicated Accessibility Navigation Systems
- **Wheelchair Accessible Mode:**
  - Pathfinding algorithm strictly excludes vertical stairs and escalators.
  - Exclusively routes through gentle ramps (6% - 8% slope) equipped with guiding handrails.
  - Bypasses narrow alleys, prioritizing wide main thoroughfares.
- **Visually Impaired Navigation Mode:**
  - **Step-by-Step Audio Speech:** Synchronized speech narration (Web Speech API) announcing turn instructions, distances, and landmarks for each step.
  - **Tactile Paving Priority:** Routing algorithm weights corridors containing tactile paving (guiding blocks and warning studs).
  - **Semantic Accessibility:** Fully compliant with WAI-ARIA standards, live announcement regions for screen readers, high-contrast visual styling, and comprehensive keyboard shortcuts.

### 6. Management CMS and Admin Portal (/admin)
- **Independent Admin Dashboard:** Dedicated portal for market managers, municipal staff, and operational teams.
- **Merchant Management (CRUD):** Add, update, and remove stalls, upload authentic storefront photography, and edit descriptions.
- **Visual Map Coordinate Picker:** Interactive SVG blueprint clicker to position stall pins and entrance vectors with pixel precision.
- **Dynamic Master Categories:** Create, modify, and delete product categories, assign vector icons, and select marker color schemes.
- **Unified Database Architecture:** Integration with Supabase (PostgreSQL, Supabase Auth, Supabase Storage, and Realtime WebSockets) with automatic fallback to local demo storage.

---

## Project Structure

```
Maps Navigation Pasar Gedhe/
├── index.html                      # Public visitor map and navigation web application
├── README.md                       # Project architecture and technical documentation
├── .gitignore                      # Git ignore patterns
├── supabase-schema.sql             # PostgreSQL schema, RLS policies, storage buckets, and realtime setup
│
├── admin/                          # Administrative CMS and management dashboard
│   ├── index.html                  # Admin login and management portal
│   ├── css/
│   │   └── admin.css               # Admin layout, data table, and modal styling
│   └── js/
│       ├── supabase-config.js      # Supabase client configuration and unified database service
│       └── admin-app.js            # Admin dashboard controller, CRUD logic, and map coordinate picker
│
├── assets/                         # Static application assets
│   ├── svg/                        # Architectural floor plans in SVG format
│   │   ├── pasar_gede_lt1.svg      # Pasar Gedhe Floor 1 blueprint
│   │   ├── pasar_gede_lt2.svg      # Pasar Gedhe Floor 2 blueprint
│   │   ├── pasar_buah_lt1.svg      # Pasar Buah Floor 1 blueprint
│   │   └── pasar_buah_lt2.svg      # Pasar Buah Floor 2 blueprint
│   └── walkable/                   # Walkable corridor raster masks
│       ├── pasar_gede_lt1.png
│       ├── pasar_gede_lt2.png
│       ├── pasar_buah_lt1.png
│       └── pasar_buah_lt2.png
│
├── css/                            # Modular application stylesheets
│   ├── styles.css                  # Design tokens, color system, modals, and global animations
│   ├── sidebar.css                 # Building and floor selector sidebar
│   ├── legend.css                  # Category legend badges and filter switches
│   ├── navigation.css              # Route planning modal, floating HUD, and step cards
│   ├── directory.css               # Tenant directory grid and alphabetical filter
│   ├── accessibility.css           # Accessibility status bar, high contrast, and focus outlines
│   └── responsive.css              # Responsive layouts for mobile, tablet, and desktop viewports
│
├── js/                             # Frontend client architecture (Vanilla ES6)
│   ├── app.js                      # Application orchestrator, module initialization, and keyboard handler
│   ├── map.js                      # Leaflet.js layer controller, coordinate math, and marker management
│   ├── components/                 # UI components
│   │   ├── detail-panel.js         # Merchant detail drawer and routing action handler
│   │   ├── legend.js               # Interactive legend component
│   │   ├── directory.js            # Tenant list directory and alphabetical filter logic
│   │   ├── navigation.js           # Route calculator, step HUD, audio narration, and modal controller
│   │   └── search.js               # Live search engine with autocomplete dropdown
│   ├── data/                       # Market data models and routing graphs
│   │   ├── market-data.js          # Master directory of 470+ stalls, categories, and media
│   │   ├── navigation-graph.js     # Waypoint nodes, corridor edges, and intersection vertices
│   │   └── walkable-grids.js       # Walkable path matrix for fine-grained collision avoidance
│   └── utils/                      # Utilities
│       ├── accessibility.js        # Web Speech API speech controller and WAI-ARIA live announcer
│       ├── icons.js                # Dynamic vector icon mapper and renderer
│       ├── pathfinding.js          # Weighted multi-criteria A* pathfinding algorithm
│       └── security.js             # HTML escaping and XSS sanitization helpers
│
└── tools/                          # Data processing and pipeline tooling
    └── data-pipeline/              # Data parsing scripts and graph generators
        ├── build_real_data.js      # Generator script for js/data/market-data.js
        ├── build_real_graph.js     # Generator script for js/data/navigation-graph.js
        └── raw/                    # Raw floor layout definitions (JSON)
```

---

## Local Development Setup

This project is built using modern vanilla web technologies and does not require complex build steps, bundlers, or compilation.

### Prerequisites
A static web server (such as Node.js, Python, or VS Code Live Server).

### Running Locally

1. **Start a local HTTP server from the project root:**

   ```bash
   # Option 1: Using Node.js (npx serve)
   npx serve .

   # Option 2: Using Python 3
   python -m http.server 8000
   ```

2. **Open in browser:**
   - Public Navigation Map: `http://localhost:3000` (or `http://localhost:8000`)
   - Admin Management CMS: `http://localhost:3000/admin` (or `http://localhost:8000/admin`)

---

## Keyboard Shortcuts

- `1`: Switch to **Floor 1**
- `2`: Switch to **Floor 2**
- `S`: Focus **Search Bar**
- `N`: Open / Close **Route Navigation Modal**
- `L`: Focus **Category Legend Panel**
- `Esc`: Close any active modal, dialog, or drawer

---

## Technical Specifications

- **Mapping Core:** Leaflet.js with Cartesian Simple Coordinate System (`L.CRS.Simple`).
- **Pathfinding Engine:** Custom multi-floor A* (A-Star) search algorithm with accessible edge weight penalties and obstacle avoidance.
- **Speech Synthesis:** Web Speech API (`window.speechSynthesis`) with voice pitch, rate, and Indonesian localization adjustments.
- **Backend & Persistence:** Supabase PostgreSQL with Row Level Security (RLS), Supabase Storage for merchant photos, and Realtime WebSocket subscriptions.
- **Offline Reliability:** Automatic local fallback enabling demo operation without active cloud credentials.
- **Icons:** Lucide Icons vector system rendered dynamically via SVG.
