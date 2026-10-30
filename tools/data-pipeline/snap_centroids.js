const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.join(__dirname, '..', '..');
const MARKET_DATA_PATH = path.join(ROOT_DIR, 'js', 'data', 'market-data.js');

function extractShapes(svgPath) {
    const svg = fs.readFileSync(svgPath, 'utf8');
    const shapes = [];
    let id = 0;

    // 1. Rectangles
    const rectRegex = /<rect[^>]+x="([^"]+)"[^>]+y="([^"]+)"[^>]+width="([^"]+)"[^>]+height="([^"]+)"/g;
    let m;
    while ((m = rectRegex.exec(svg)) !== null) {
        const x = parseFloat(m[1]), y = parseFloat(m[2]), w = parseFloat(m[3]), h = parseFloat(m[4]);
        shapes.push({
            id: `rect_${id++}`,
            type: 'rect',
            x, y, w, h,
            cx: Number((x + w / 2).toFixed(2)),
            cy: Number((y + h / 2).toFixed(2)),
            area: w * h,
            minDimension: Math.min(w, h),
            contains: (px, py) => px >= x && px <= x + w && py >= y && py <= y + h
        });
    }

    // 2. Polygons
    const polyRegex = /<polygon[^>]+points="([^"]+)"/g;
    while ((m = polyRegex.exec(svg)) !== null) {
        const pts = m[1].trim().split(/\s+/).map(p => {
            const [px, py] = p.split(',').map(Number);
            return { x: px, y: py };
        }).filter(p => !isNaN(p.x) && !isNaN(p.y));

        if (pts.length >= 3) {
            let signedArea = 0, cx = 0, cy = 0;
            for (let i = 0; i < pts.length; i++) {
                const p1 = pts[i], p2 = pts[(i + 1) % pts.length];
                const a = p1.x * p2.y - p2.x * p1.y;
                signedArea += a;
                cx += (p1.x + p2.x) * a;
                cy += (p1.y + p2.y) * a;
            }
            signedArea *= 0.5;
            if (Math.abs(signedArea) > 0.001) {
                cx = cx / (6 * signedArea);
                cy = cy / (6 * signedArea);
            } else {
                cx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
                cy = pts.reduce((s, p) => s + p.y, 0) / pts.length;
            }

            const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
            const minX = Math.min(...xs), maxX = Math.max(...xs);
            const minY = Math.min(...ys), maxY = Math.max(...ys);

            const contains = (px, py) => {
                if (px < minX || px > maxX || py < minY || py > maxY) return false;
                let inside = false;
                for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
                    const xi = pts[i].x, yi = pts[i].y;
                    const xj = pts[j].x, yj = pts[j].y;
                    const intersect = ((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi);
                    if (intersect) inside = !inside;
                }
                return inside;
            };

            shapes.push({
                id: `poly_${id++}`,
                type: 'polygon',
                cx: Number(cx.toFixed(2)),
                cy: Number(cy.toFixed(2)),
                w: maxX - minX,
                h: maxY - minY,
                area: Math.abs(signedArea),
                minDimension: Math.min(maxX - minX, maxY - minY),
                contains
            });
        }
    }

    // Filter out huge background/boundary shapes and zero-width artifacts
    return shapes.filter(s => s.area < 25000 && s.minDimension >= 4);
}

function matchStallsToShapes(stalls, shapes) {
    const pairs = [];
    stalls.forEach(s => {
        shapes.forEach(sh => {
            const d = Math.hypot(s.x - sh.cx, s.y - sh.cy);
            const inside = sh.contains(s.x, s.y);
            // Allow matching if inside or within 45px
            if (inside || d <= 45) {
                const score = inside ? (d * 0.75 + sh.area / 3000) : (d * 1.5 + 20);
                pairs.push({ s, sh, score, d, inside });
            }
        });
    });

    pairs.sort((a, b) => a.score - b.score);

    const assignedStall = new Set();
    const assignedShape = new Set();
    const result = new Map();

    for (const p of pairs) {
        if (!assignedStall.has(p.s.id) && !assignedShape.has(p.sh.id)) {
            assignedStall.add(p.s.id);
            assignedShape.add(p.sh.id);
            result.set(p.s.id, {
                shape: p.sh,
                cx: p.sh.cx,
                cy: p.sh.cy,
                minDimension: p.sh.minDimension,
                area: p.sh.area,
                snapped: true
            });
        }
    }

    // Secondary pass for remaining stalls
    stalls.forEach(s => {
        if (!result.has(s.id)) {
            const nearest = shapes
                .map(sh => ({ sh, d: Math.hypot(s.x - sh.cx, s.y - sh.cy) }))
                .sort((a, b) => a.d - b.d)[0];

            if (nearest && nearest.d <= 45) {
                result.set(s.id, {
                    shape: nearest.sh,
                    cx: nearest.sh.cx,
                    cy: nearest.sh.cy,
                    minDimension: nearest.sh.minDimension,
                    area: nearest.sh.area,
                    snapped: true
                });
            } else {
                result.set(s.id, {
                    shape: null,
                    cx: s.x,
                    cy: s.y,
                    minDimension: 30,
                    area: 900,
                    snapped: false
                });
            }
        }
    });

    return result;
}

function run() {
    console.log('Loading market-data.js...');
    const marketCode = fs.readFileSync(MARKET_DATA_PATH, 'utf8');
    vm.runInThisContext(marketCode);

    const floorConfigs = [
        { key: 'pasar-gede-1', floor: 1, bld: 'pasar-gede', svg: path.join(ROOT_DIR, 'assets', 'svg', 'pasar_gede_lt1.svg') },
        { key: 'pasar-gede-2', floor: 2, bld: 'pasar-gede', svg: path.join(ROOT_DIR, 'assets', 'svg', 'pasar_gede_lt2.svg') },
        { key: 'pasar-buah-1', floor: 1, bld: 'pasar-buah', svg: path.join(ROOT_DIR, 'assets', 'svg', 'pasar_buah_lt1.svg') },
        { key: 'pasar-buah-2', floor: 2, bld: 'pasar-buah', svg: path.join(ROOT_DIR, 'assets', 'svg', 'pasar_buah_lt2.svg') }
    ];

    let totalSnapped = 0;
    let totalCompact = 0;
    let totalKiosks = 0;

    floorConfigs.forEach(cfg => {
        const shapes = extractShapes(cfg.svg);
        const allStalls = MarketData.getFloorStalls(cfg.floor, cfg.bld);
        const kioskStalls = allStalls.filter(s => !s.isFacility);
        const matches = matchStallsToShapes(kioskStalls, shapes);

        totalKiosks += kioskStalls.length;

        allStalls.forEach(s => {
            if (s.isFacility) {
                // Keep facilities at their exact placed coordinates
                s.isCompact = false;
                return;
            }

            const m = matches.get(s.id);
            if (m && m.snapped) {
                s.x = Math.round(m.cx);
                s.y = Math.round(m.cy);
                s.lat = (s.buildingId === 'pasar-buah') ? s.y : (1024 - s.y);
                s.lng = s.x;
                s.isCompact = Boolean(m.minDimension < 24 || m.area < 550);
                totalSnapped++;
                if (s.isCompact) totalCompact++;
            } else {
                s.isCompact = false;
            }
        });

        console.log(`[${cfg.key}] Snapped ${kioskStalls.length} kiosks -> ${shapes.length} booth shapes`);
    });

    console.log(`\nSummary: Snapped ${totalSnapped}/${totalKiosks} kiosks to exact booth centers. Compact booths: ${totalCompact}`);

    // Update market-data.js content
    // We rewrite market.stalls in market-data.js while preserving all other logic
    const allFloorStalls = {};
    floorConfigs.forEach(cfg => {
        allFloorStalls[cfg.key] = MarketData.getFloorStalls(cfg.floor, cfg.bld);
    });

    // Replace "stalls": { ... } in marketCode
    const updatedStallsJson = JSON.stringify(allFloorStalls, null, 4);
    const newMarketCode = marketCode.replace(/"stalls":\s*\{[\s\S]*?\n\s*\}\s*\n\s*\};/m, `"stalls": ${updatedStallsJson}\n};`);

    fs.writeFileSync(MARKET_DATA_PATH, newMarketCode, 'utf8');
    console.log(`Saved updated market-data.js successfully!`);
}

run();
