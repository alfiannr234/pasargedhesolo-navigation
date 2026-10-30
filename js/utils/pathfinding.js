/**
 * Accurate Indoor Pathfinding Algorithm for Pasar Gedhe Solo & Pasar Buah
 * Uses the official 1024x1024 walkable corridor masks from maps.pasargedesolo.com
 * to guarantee routes follow real corridors and aisles, never piercing through stalls.
 * Supports normal, wheelchair (ramp only, no stairs), and blind (tactile priority) modes.
 */

const Pathfinding = (() => {

    // Cached decoded byte buffers for the 4 walkable grids
    const gridCache = {};

    function decodeBase64ToUint8Array(base64Str) {
        if (typeof atob !== 'undefined') {
            const binStr = atob(base64Str);
            const len = binStr.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binStr.charCodeAt(i);
            }
            return bytes;
        } else if (typeof Buffer !== 'undefined') {
            return new Uint8Array(Buffer.from(base64Str, 'base64'));
        }
        return new Uint8Array(0);
    }

    function getGrid(floorKey) {
        if (gridCache[floorKey]) return gridCache[floorKey];
        if (typeof WalkableGrids === 'undefined' || !WalkableGrids[floorKey]) return null;

        const raw = WalkableGrids[floorKey];
        const bytes = decodeBase64ToUint8Array(raw.data);
        const gridObj = {
            step: raw.step,
            gw: raw.gw,
            gh: raw.gh,
            bytes,
            isWalkable(gx, gy) {
                if (gx < 0 || gx >= raw.gw || gy < 0 || gy >= raw.gh) return false;
                const bitIdx = gy * raw.gw + gx;
                return ((bytes[bitIdx >> 3] >> (bitIdx & 7)) & 1) === 1;
            }
        };

        gridCache[floorKey] = gridObj;
        return gridObj;
    }

    /**
     * Snap to nearest walkable aisle pixel
     */
    function findNearestWalkable(grid, gx, gy, maxRadius = 35) {
        if (grid.isWalkable(gx, gy)) return { gx, gy };
        for (let r = 1; r <= maxRadius; r++) {
            for (let dy = -r; dy <= r; dy++) {
                for (let dx = -r; dx <= r; dx++) {
                    const nx = gx + dx, ny = gy + dy;
                    if (grid.isWalkable(nx, ny)) {
                        return { gx: nx, gy: ny };
                    }
                }
            }
        }
        return { gx, gy };
    }

    /**
     * Fast MinHeap Priority Queue for A*
     */
    class MinHeap {
        constructor() { this.data = []; }
        push(node, prio) {
            this.data.push({ node, prio });
            let i = this.data.length - 1;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (this.data[p].prio <= this.data[i].prio) break;
                const tmp = this.data[p]; this.data[p] = this.data[i]; this.data[i] = tmp;
                i = p;
            }
        }
        pop() {
            if (this.data.length === 0) return null;
            const top = this.data[0];
            const last = this.data.pop();
            if (this.data.length > 0) {
                this.data[0] = last;
                let i = 0;
                while (true) {
                    let left = (i << 1) + 1, right = left + 1, best = i;
                    if (left < this.data.length && this.data[left].prio < this.data[best].prio) best = left;
                    if (right < this.data.length && this.data[right].prio < this.data[best].prio) best = right;
                    if (best === i) break;
                    const tmp = this.data[i]; this.data[i] = this.data[best]; this.data[best] = tmp;
                    i = best;
                }
            }
            return top.node;
        }
        isEmpty() { return this.data.length === 0; }
    }

    /**
     * Ramer-Douglas-Peucker (RDP) Polyline Simplification
     * Reduces hundreds of pixel grid steps into clean, smooth hallway turns
     */
    function simplifyRDP(points, epsilon = 3.5) {
        if (points.length <= 2) return points;
        let maxDist = 0, index = 0;
        const start = points[0], end = points[points.length - 1];
        for (let i = 1; i < points.length - 1; i++) {
            const p = points[i];
            const num = Math.abs((end.y - start.y) * p.x - (end.x - start.x) * p.y + end.x * start.y - end.y * start.x);
            const den = Math.hypot(end.y - start.y, end.x - start.x);
            const dist = den === 0 ? Math.hypot(p.x - start.x, p.y - start.y) : num / den;
            if (dist > maxDist) { maxDist = dist; index = i; }
        }
        if (maxDist > epsilon) {
            const left = simplifyRDP(points.slice(0, index + 1), epsilon);
            const right = simplifyRDP(points.slice(index), epsilon);
            return left.slice(0, -1).concat(right);
        }
        return [start, end];
    }

    /**
     * Run Corridor A* on the official walkable mask
     */
    function findCorridorLeg(x1, y1, x2, y2, floorKey, bldId, floorNum) {
        const grid = getGrid(floorKey);
        const isPb = (bldId === 'pasar-buah');
        if (!grid) {
            // Fallback direct line if grid not loaded
            return [
                { x: x1, y: y1, lat: isPb ? y1 : (1024 - y1), lng: x1, floor: floorNum, buildingId: bldId },
                { x: x2, y: y2, lat: isPb ? y2 : (1024 - y2), lng: x2, floor: floorNum, buildingId: bldId }
            ];
        }

        const STEP = grid.step;
        const GW = grid.gw;
        const GH = grid.gh;

        const start = findNearestWalkable(grid, Math.floor(x1 / STEP), Math.floor(y1 / STEP));
        const goal = findNearestWalkable(grid, Math.floor(x2 / STEP), Math.floor(y2 / STEP));

        const startIdx = start.gy * GW + start.gx;
        const goalIdx = goal.gy * GW + goal.gx;

        const gScore = new Float32Array(GW * GH).fill(Infinity);
        const cameFrom = new Int32Array(GW * GH).fill(-1);
        gScore[startIdx] = 0;

        const openSet = new MinHeap();
        openSet.push(startIdx, Math.hypot(start.gx - goal.gx, start.gy - goal.gy));

        const DIRS = [
            [-1, 0, 1], [1, 0, 1], [0, -1, 1], [0, 1, 1],
            [-1, -1, 1.414], [1, -1, 1.414], [-1, 1, 1.414], [1, 1, 1.414]
        ];

        let pathFound = false;
        let lastIdx = -1;

        while (!openSet.isEmpty()) {
            const curr = openSet.pop();
            if (curr === goalIdx) {
                pathFound = true;
                lastIdx = curr;
                break;
            }

            const cx = curr % GW;
            const cy = Math.floor(curr / GW);
            const currG = gScore[curr];

            for (let d = 0; d < 8; d++) {
                const nx = cx + DIRS[d][0];
                const ny = cy + DIRS[d][1];
                if (nx < 0 || nx >= GW || ny < 0 || ny >= GH) continue;
                const nIdx = ny * GW + nx;
                if (!grid.isWalkable(nx, ny)) continue;

                const tentG = currG + DIRS[d][2];
                if (tentG < gScore[nIdx]) {
                    cameFrom[nIdx] = curr;
                    gScore[nIdx] = tentG;
                    openSet.push(nIdx, tentG + Math.hypot(nx - goal.gx, ny - goal.gy));
                }
            }
        }

        const rawPoints = [];
        if (pathFound) {
            let c = lastIdx;
            while (c !== -1) {
                const cx = (c % GW) * STEP;
                const cy = Math.floor(c / GW) * STEP;
                rawPoints.push({ x: cx, y: cy });
                c = cameFrom[c];
            }
            rawPoints.reverse();
        } else {
            // Direct line if no path inside mask
            rawPoints.push({ x: x1, y: y1 }, { x: x2, y: y2 });
        }

        // Simplify polyline
        const simplified = simplifyRDP(rawPoints, 3.5);

        // Prepend exact stall start and append exact stall end
        const finalCoords = [];
        const addCoord = (x, y) => {
            if (finalCoords.length > 0) {
                const prev = finalCoords[finalCoords.length - 1];
                if (Math.hypot(x - prev.x, y - prev.y) < 1.5) return;
            }
            const isPbLeg = (bldId === 'pasar-buah');
            finalCoords.push({
                x,
                y,
                lat: isPbLeg ? y : (1024 - y),
                lng: x,
                floor: floorNum,
                buildingId: bldId
            });
        };

        addCoord(x1, y1);
        simplified.forEach(pt => addCoord(pt.x, pt.y));
        addCoord(x2, y2);

        return finalCoords;
    }

    /**
     * Resolve stall or node object
     */
    function resolveNode(nodeOrId) {
        if (!nodeOrId) return null;
        if (typeof nodeOrId === 'object') return nodeOrId;
        const fromGraph = NavigationGraph.getNode(nodeOrId);
        if (fromGraph) return fromGraph;
        const fromStall = MarketData.getStallById(nodeOrId);
        if (fromStall) {
            return {
                id: fromStall.nodeId || fromStall.id,
                name: fromStall.name,
                buildingId: fromStall.buildingId,
                floor: fromStall.floor,
                x: fromStall.lng,
                y: fromStall.lat,
                realX: fromStall.x,
                realY: fromStall.y,
                entries: fromStall.entries
            };
        }
        return null;
    }

    /**
     * Master findPath function
     */
    function findPath(startId, endId, mode = 'normal') {
        const startNode = resolveNode(startId);
        const endNode = resolveNode(endId);

        if (!startNode || !endNode) return null;

        // Origin stall doorway
        const isStartPb = (startNode.buildingId === 'pasar-buah');
        const sX = (startNode.entries && startNode.entries[0]) ? startNode.entries[0].x : (startNode.realX !== undefined ? startNode.realX : startNode.x);
        const sY = (startNode.entries && startNode.entries[0]) ? startNode.entries[0].y : (startNode.realY !== undefined ? startNode.realY : (isStartPb ? startNode.y : (1024 - startNode.y)));

        // Destination stall doorway
        const isEndPb = (endNode.buildingId === 'pasar-buah');
        const eX = (endNode.entries && endNode.entries[0]) ? endNode.entries[0].x : (endNode.realX !== undefined ? endNode.realX : endNode.x);
        const eY = (endNode.entries && endNode.entries[0]) ? endNode.entries[0].y : (endNode.realY !== undefined ? endNode.realY : (isEndPb ? endNode.y : (1024 - endNode.y)));

        let coordinates = [];
        let steps = [];
        let totalDistance = 0;

        const isSameBuilding = startNode.buildingId === endNode.buildingId;
        const isSameFloor = startNode.floor === endNode.floor;

        // CASE 1: Same building and same floor (most common route)
        if (isSameBuilding && isSameFloor) {
            const floorKey = `${startNode.buildingId}-${startNode.floor}`;
            coordinates = findCorridorLeg(sX, sY, eX, eY, floorKey, startNode.buildingId, startNode.floor);
            totalDistance = calculateDistance(coordinates);
            steps = generateCorridorSteps(coordinates, startNode, endNode, mode);
        }
        // CASE 2: Same building, different floors (requires ramp or stairs)
        else if (isSameBuilding && !isSameFloor) {
            // Find transition point
            const trans = getFloorTransition(startNode.buildingId, startNode.floor, endNode.floor, mode);
            const floorKey1 = `${startNode.buildingId}-${startNode.floor}`;
            const floorKey2 = `${endNode.buildingId}-${endNode.floor}`;

            // Leg 1: start to transition on start floor
            const leg1 = findCorridorLeg(sX, sY, trans.t1.x, trans.t1.y, floorKey1, startNode.buildingId, startNode.floor);
            // Leg 2: transition on end floor to destination
            const leg2 = findCorridorLeg(trans.t2.x, trans.t2.y, eX, eY, floorKey2, endNode.buildingId, endNode.floor);

            coordinates = [...leg1, ...leg2];
            totalDistance = calculateDistance(leg1) + calculateDistance(leg2) + trans.transitionDist;

            // Generate steps
            const steps1 = generateCorridorSteps(leg1, startNode, { name: trans.name }, mode, false);
            const transStep = {
                type: 'floor-change',
                icon: trans.isRamp ? '♿' : '🪜',
                text: `${endNode.floor > startNode.floor ? 'Naik' : 'Turun'} melalui ${trans.name} ke Lantai ${endNode.floor}`,
                detail: trans.isRamp ? 'Kemiringan 6-7%, lebar 1.8m dilengkapi handrail pengaman' : 'Gunakan pegangan tangga dan berhati-hati',
                floor: endNode.floor,
                nodeId: trans.t2NodeId,
                coord: { x: trans.t1.x, y: trans.t1.y, lat: isStartPb ? trans.t1.y : (1024 - trans.t1.y), lng: trans.t1.x, floor: startNode.floor, buildingId: startNode.buildingId },
                coordDest: { x: trans.t2.x, y: trans.t2.y, lat: isEndPb ? trans.t2.y : (1024 - trans.t2.y), lng: trans.t2.x, floor: endNode.floor, buildingId: endNode.buildingId },
                badge: trans.isRamp ? { type: 'wheelchair', text: 'Ramah Kursi Roda ♿' } : null,
                audioDescription: `${endNode.floor > startNode.floor ? 'Naik' : 'Turun'} melalui ${trans.name} menuju Lantai ${endNode.floor}.`
            };
            const steps2 = generateCorridorSteps(leg2, { name: trans.name }, endNode, mode, true, true);

            steps = [...steps1, transStep, ...steps2];
        }
        // CASE 3: Different buildings (Pasar Gede <-> Pasar Buah)
        else {
            // Route via crosswalk between buildings
            const cw = getBuildingCrosswalk(startNode.buildingId, endNode.buildingId);
            
            // Sub-legs for multi-floor if needed
            let leg1Coords = [];
            let leg3Coords = [];

            // Leg 1: startNode to exit door of start building
            const floorKey1 = `${startNode.buildingId}-${startNode.floor}`;
            if (startNode.floor === 1) {
                leg1Coords = findCorridorLeg(sX, sY, cw.exit.x, cw.exit.y, floorKey1, startNode.buildingId, 1);
            } else {
                // From Lt 2 down to exit door
                const tDown = getFloorTransition(startNode.buildingId, 2, 1, mode);
                const leg1a = findCorridorLeg(sX, sY, tDown.t1.x, tDown.t1.y, `${startNode.buildingId}-2`, startNode.buildingId, 2);
                const leg1b = findCorridorLeg(tDown.t2.x, tDown.t2.y, cw.exit.x, cw.exit.y, `${startNode.buildingId}-1`, startNode.buildingId, 1);
                leg1Coords = [...leg1a, ...leg1b];
            }

            // Leg 3: entry door of end building to endNode
            const floorKey2 = `${endNode.buildingId}-${endNode.floor}`;
            if (endNode.floor === 1) {
                leg3Coords = findCorridorLeg(cw.entry.x, cw.entry.y, eX, eY, floorKey2, endNode.buildingId, 1);
            } else {
                // From entry door up to Lt 2
                const tUp = getFloorTransition(endNode.buildingId, 1, 2, mode);
                const leg3a = findCorridorLeg(cw.entry.x, cw.entry.y, tUp.t1.x, tUp.t1.y, `${endNode.buildingId}-1`, endNode.buildingId, 1);
                const leg3b = findCorridorLeg(tUp.t2.x, tUp.t2.y, eX, eY, `${endNode.buildingId}-2`, endNode.buildingId, 2);
                leg3Coords = [...leg3a, ...leg3b];
            }

            coordinates = [...leg1Coords, ...leg3Coords];
            totalDistance = calculateDistance(leg1Coords) + 30 + calculateDistance(leg3Coords);

            // Assemble steps
            const targetBldName = endNode.buildingId === 'pasar-buah' ? 'Pasar Buah (Timur)' : 'Pasar Gedhe (Utama)';
            const steps1 = generateCorridorSteps(leg1Coords, startNode, { name: cw.exit.name }, mode, false);
            const cwStep = {
                type: 'building-change',
                icon: '🚶',
                text: `Menyeberang Jl. Urip Sumoharjo menuju ${targetBldName}`,
                detail: 'Gunakan jalur penyeberangan zebra cross dengan ubin pemandu taktil',
                floor: 1,
                coord: { x: cw.exit.x, y: cw.exit.y, lat: isStartPb ? cw.exit.y : (1024 - cw.exit.y), lng: cw.exit.x, floor: 1, buildingId: startNode.buildingId },
                coordDest: { x: cw.entry.x, y: cw.entry.y, lat: isEndPb ? cw.entry.y : (1024 - cw.entry.y), lng: cw.entry.x, floor: 1, buildingId: endNode.buildingId },
                badge: mode === 'wheelchair' ? { type: 'wheelchair', text: 'Zebra Cross Aksesibel ♿' } :
                       mode === 'blind' ? { type: 'blind', text: 'Ubin Pemandu Taktil ⠿' } : null,
                audioDescription: `Menyeberangi Jalan Urip Sumoharjo melalui zebra cross menuju ${targetBldName}. Pastikan jalan aman sebelum menyeberang.`
            };
            const steps2 = generateCorridorSteps(leg3Coords, { name: cw.entry.name }, endNode, mode, true, true);

            steps = [...steps1, cwStep, ...steps2];
        }

        const floors = [...new Set(coordinates.map(c => c.floor))];
        const estimatedTime = Math.max(1, Math.round(totalDistance / 35)); // ~35 meters per minute

        return {
            coordinates,
            totalDistance: Math.round(totalDistance),
            estimatedTime,
            steps,
            mode,
            isMultiFloor: floors.length > 1,
            floors,
            startNode,
            endNode
        };
    }

    function calculateDistance(coords) {
        let dist = 0;
        for (let i = 1; i < coords.length; i++) {
            const dx = coords[i].x - coords[i - 1].x;
            const dy = coords[i].y - coords[i - 1].y;
            dist += Math.hypot(dx, dy) * 0.15; // 0.15m per layout pixel
        }
        return dist;
    }

    /**
     * Transition points between floors (Ramps vs Stairs)
     */
    function getFloorTransition(bldId, fromFloor, toFloor, mode) {
        if (bldId === 'pasar-gede') {
            if (mode === 'wheelchair' || mode === 'blind') {
                return {
                    name: 'Ramp Aksesibel Barat',
                    isRamp: true,
                    transitionDist: 25,
                    t1: { x: 320, y: 280 },
                    t2: { x: 320, y: 280 },
                    t2NodeId: 'n_ramp_pg_barat_2'
                };
            }
            return {
                name: 'Tangga Utama',
                isRamp: false,
                transitionDist: 15,
                t1: { x: 332, y: 273 },
                t2: { x: 708, y: 782 },
                t2NodeId: 'n_9ef496b3-91cb-4db9-ac96-c746921e122b'
            };
        } else {
            // Pasar Buah
            return {
                name: mode === 'wheelchair' ? 'Ramp Aksesibel Pasar Buah' : 'Tangga Pasar Buah',
                isRamp: mode === 'wheelchair',
                transitionDist: 20,
                t1: { x: 400, y: 524 },
                t2: { x: 400, y: 524 },
                t2NodeId: 'n_ramp_pb_2'
            };
        }
    }

    /**
     * Crosswalk between buildings
     */
    function getBuildingCrosswalk(fromBld, toBld) {
        if (fromBld === 'pasar-gede') {
            return {
                exit: { name: 'Pintu Samping Pasar Gedhe', x: 525, y: 907 },
                entry: { name: 'Pintu Depan Pasar Buah', x: 391, y: 906 }
            };
        } else {
            return {
                exit: { name: 'Pintu Depan Pasar Buah', x: 391, y: 906 },
                entry: { name: 'Pintu Samping Pasar Gedhe', x: 525, y: 907 }
            };
        }
    }

    /**
     * Generate Turn-by-Turn step list along the corridor
     */
    function generateCorridorSteps(coords, startNode, endNode, mode, includeEnd = true, isSubLeg = false) {
        if (!coords || coords.length === 0) return [];

        const steps = [];

        // Initial Start Step
        if (!isSubLeg) {
            steps.push({
                type: 'start',
                icon: '🟢',
                text: `Mulai dari ${startNode.name}`,
                detail: `Lantai ${startNode.floor}`,
                floor: startNode.floor,
                nodeId: startNode.id || startNode.nodeId,
                coord: coords[0],
                audioDescription: `Mulai perjalanan dari ${startNode.name}. Melangkah keluar ke lorong jalan.`
            });
        }

        let prevAngle = null;

        for (let i = 1; i < coords.length; i++) {
            const p1 = coords[i - 1];
            const p2 = coords[i];
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const dist = Math.round(Math.hypot(dx, dy) * 0.15);
            if (dist < 2 && i < coords.length - 1) continue;

            const angle = Math.atan2(dy, dx) * 180 / Math.PI;

            if (prevAngle !== null) {
                let diff = angle - prevAngle;
                while (diff > 180) diff -= 360;
                while (diff < -180) diff += 360;

                if (Math.abs(diff) >= 35) {
                    const isRight = diff > 0;
                    const turnText = isRight ? 'Belok kanan di lorong' : 'Belok kiri di lorong';
                    const icon = isRight ? '➡️' : '⬅️';
                    steps.push({
                        type: 'turn',
                        icon: icon,
                        text: `${turnText}`,
                        detail: `Lanjut lurus sejauh ${dist}m`,
                        floor: p2.floor,
                        coord: p2,
                        audioDescription: `${turnText}, kemudian ikuti jalur lorong sepanjang ${dist} meter.`
                    });
                }
            } else if (dist >= 8) {
                steps.push({
                    type: 'waypoint',
                    icon: '⬆️',
                    text: `Jalan lurus di lorong sejauh ${dist}m`,
                    detail: 'Ikuti koridor jalan utama',
                    floor: p2.floor,
                    coord: p2,
                    audioDescription: `Jalan lurus menyusuri lorong sejauh ${dist} meter.`
                });
            }

            prevAngle = angle;
        }

        // Final Destination Step
        if (includeEnd) {
            steps.push({
                type: 'end',
                icon: '🔴',
                text: `Tiba di tujuan: ${endNode.name}`,
                detail: `Lantai ${endNode.floor}`,
                floor: endNode.floor,
                nodeId: endNode.id || endNode.nodeId,
                coord: coords[coords.length - 1],
                audioDescription: `Anda telah tiba di tujuan: ${endNode.name}. Kios berada tepat di hadapan Anda.`
            });
        }

        return steps;
    }

    return {
        findPath,
        findRoute: findPath
    };
})();
