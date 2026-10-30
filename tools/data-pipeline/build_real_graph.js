const fs = require('fs');
const path = require('path');

const MARKET_DATA_FILE = path.join(__dirname, '..', '..', 'js', 'data', 'market-data.js');
const OUTPUT_GRAPH_FILE = path.join(__dirname, '..', '..', 'js', 'data', 'navigation-graph.js');

// Load market data
const marketContent = fs.readFileSync(MARKET_DATA_FILE, 'utf8');
const vm = require('vm');
vm.runInThisContext(marketContent);

const nodes = {};
const edges = [];

// Create nodes from all stalls
const allStalls = MarketData.getAllStalls();

allStalls.forEach(s => {
    nodes[s.nodeId] = {
        id: s.nodeId,
        stallId: s.id,
        name: s.name,
        buildingId: s.buildingId,
        floor: s.floor,
        x: s.lng,
        y: s.lat,
        realX: s.x,
        realY: s.y,
        type: s.isFacility ? (s.category === 'tangga' ? 'stairs' : s.category === 'ramp' ? 'ramp' : s.category === 'pintu' ? 'entrance' : 'facility') : 'stall',
        category: s.category,
        accessible: s.accessible,
        hasTactile: s.hasTactile || false
    };
});

// Central bridge node on Pasar Gede Floor 2 connecting west and east wings
nodes['n_bridge_pg_lt2'] = {
    id: 'n_bridge_pg_lt2',
    stallId: 'bridge_pg_lt2',
    name: 'Jembatan Penghubung Lt.2 (Aksesibel)',
    buildingId: 'pasar-gede',
    floor: 2,
    x: 430,
    y: 795,
    realX: 430,
    realY: 229,
    type: 'junction',
    category: 'ramp',
    accessible: true,
    hasTactile: true
};

// Connect nodes on the same building & floor
const buildingFloors = ['pasar-gede-1', 'pasar-gede-2', 'pasar-buah-1', 'pasar-buah-2'];

buildingFloors.forEach(bfKey => {
    const lastDash = bfKey.lastIndexOf('-');
    const bld = bfKey.substring(0, lastDash);
    const fl = parseInt(bfKey.substring(lastDash + 1), 10);
    const flNodes = Object.values(nodes).filter(n => n.buildingId === bld && n.floor === fl);

    console.log(`Connecting ${flNodes.length} nodes for ${bld} floor ${fl}...`);

    flNodes.forEach((nodeA, i) => {
        const distances = [];
        flNodes.forEach((nodeB, j) => {
            if (i !== j) {
                const dx = nodeA.x - nodeB.x;
                const dy = nodeA.y - nodeB.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                distances.push({ node: nodeB, dist });
            }
        });

        distances.sort((a, b) => a.dist - b.dist);

        // Connect to up to 6 closest neighbors within max distance of 200px
        const neighbors = distances.slice(0, 6);
        neighbors.forEach(n => {
            if (n.dist <= 200) {
                const exists = edges.some(e => 
                    (e.from === nodeA.id && e.to === n.node.id) || 
                    (e.from === n.node.id && e.to === nodeA.id)
                );
                if (!exists) {
                    const isAccessible = (nodeA.type !== 'stairs' && n.node.type !== 'stairs');
                    const hasTactile = nodeA.hasTactile || n.node.hasTactile;
                    edges.push({
                        from: nodeA.id,
                        to: n.node.id,
                        distance: Math.max(2, Math.round(n.dist * 0.15)),
                        accessible: isAccessible,
                        hasTactile: hasTactile,
                        width: isAccessible ? 2.0 : 1.2
                    });
                }
            }
        });
    });

    // Ensure full connectivity using component bridging
    ensureComponentConnectivity(flNodes, edges);
});

function ensureComponentConnectivity(flNodes, edgeList) {
    // Check connected components for accessible nodes
    const accessibleNodes = flNodes.filter(n => n.accessible);
    if (accessibleNodes.length === 0) return;

    function getComponents() {
        const visited = new Set();
        const components = [];
        for (const start of accessibleNodes) {
            if (!visited.has(start.id)) {
                const comp = [];
                const queue = [start.id];
                visited.add(start.id);
                while (queue.length > 0) {
                    const curr = queue.shift();
                    comp.push(curr);
                    edgeList.forEach(e => {
                        if (e.accessible) {
                            let next = null;
                            if (e.from === curr) next = e.to;
                            if (e.to === curr) next = e.from;
                            if (next && !visited.has(next) && accessibleNodes.some(an => an.id === next)) {
                                visited.add(next);
                                queue.push(next);
                            }
                        }
                    });
                }
                components.push(comp);
            }
        }
        return components;
    }

    let components = getComponents();
    while (components.length > 1) {
        // Connect the two closest components
        let bestEdge = null;
        let minDist = Infinity;

        for (let i = 0; i < components.length; i++) {
            for (let j = i + 1; j < components.length; j++) {
                for (const idA of components[i]) {
                    const nodeA = nodes[idA];
                    for (const idB of components[j]) {
                        const nodeB = nodes[idB];
                        const dx = nodeA.x - nodeB.x;
                        const dy = nodeA.y - nodeB.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < minDist) {
                            minDist = dist;
                            bestEdge = { from: idA, to: idB, dist };
                        }
                    }
                }
            }
        }

        if (bestEdge) {
            edgeList.push({
                from: bestEdge.from,
                to: bestEdge.to,
                distance: Math.max(3, Math.round(bestEdge.dist * 0.15)),
                accessible: true,
                hasTactile: true,
                width: 2.2
            });
            components = getComponents();
        } else {
            break;
        }
    }
}

// Connect stairs and ramps between Floor 1 and Floor 2
const pgStairs1 = Object.values(nodes).filter(n => n.buildingId === 'pasar-gede' && n.floor === 1 && n.type === 'stairs');
const pgStairs2 = Object.values(nodes).filter(n => n.buildingId === 'pasar-gede' && n.floor === 2 && n.type === 'stairs');

if (pgStairs1.length > 0 && pgStairs2.length > 0) {
    pgStairs1.forEach((s1, idx) => {
        const s2 = pgStairs2[idx % pgStairs2.length];
        edges.push({
            from: s1.id,
            to: s2.id,
            distance: 25,
            accessible: false,
            isFloorTransition: true,
            transitionType: 'stairs',
            width: 1.5
        });
    });
}

// Connect Ramp between Floor 1 and Floor 2
const pgRamp1 = nodes['n_ramp_pg_barat_1'];
const pgRamp2 = nodes['n_ramp_pg_barat_2'];
if (pgRamp1 && pgRamp2) {
    edges.push({
        from: pgRamp1.id,
        to: pgRamp2.id,
        distance: 35,
        accessible: true,
        isFloorTransition: true,
        transitionType: 'ramp',
        hasTactile: true,
        width: 1.8,
        rampGrade: '7%'
    });
}

// For Pasar Buah stairs & ramp
const pbStairs1 = Object.values(nodes).filter(n => n.buildingId === 'pasar-buah' && n.floor === 1 && n.type === 'stairs');
const pbStairs2 = Object.values(nodes).filter(n => n.buildingId === 'pasar-buah' && n.floor === 2 && n.type === 'stairs');

if (pbStairs1.length > 0 && pbStairs2.length > 0) {
    pbStairs1.forEach(s1 => {
        let bestS2 = null;
        let minDist = Infinity;
        pbStairs2.forEach(s2 => {
            const dx = s1.x - s2.x;
            const dy = s1.y - s2.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < minDist) {
                minDist = d;
                bestS2 = s2;
            }
        });
        if (bestS2) {
            edges.push({
                from: s1.id,
                to: bestS2.id,
                distance: 25,
                accessible: false,
                isFloorTransition: true,
                transitionType: 'stairs',
                width: 1.5
            });
        }
    });
}

// Add an accessible ramp for Pasar Buah as well
nodes['n_ramp_pb_1'] = {
    id: 'n_ramp_pb_1',
    stallId: 'ramp_pb_1',
    name: 'Ramp Pasar Buah Lt.1',
    buildingId: 'pasar-buah',
    floor: 1,
    x: 400,
    y: 500,
    type: 'ramp',
    category: 'ramp',
    accessible: true,
    hasTactile: true
};

nodes['n_ramp_pb_2'] = {
    id: 'n_ramp_pb_2',
    stallId: 'ramp_pb_2',
    name: 'Ramp Pasar Buah Lt.2',
    buildingId: 'pasar-buah',
    floor: 2,
    x: 400,
    y: 500,
    type: 'ramp',
    category: 'ramp',
    accessible: true,
    hasTactile: true
};

edges.push({
    from: 'n_ramp_pb_1',
    to: 'n_ramp_pb_2',
    distance: 30,
    accessible: true,
    isFloorTransition: true,
    transitionType: 'ramp',
    hasTactile: true,
    width: 1.8,
    rampGrade: '6%'
});

// Connect n_ramp_pb_1 to nearest nodes on PB Lt 1
const pb1Nodes = Object.values(nodes).filter(n => n.buildingId === 'pasar-buah' && n.floor === 1 && n.id !== 'n_ramp_pb_1');
pb1Nodes.slice(0, 4).forEach(n => {
    edges.push({
        from: 'n_ramp_pb_1',
        to: n.id,
        distance: 15,
        accessible: true,
        hasTactile: true,
        width: 2.0
    });
});

// Connect n_ramp_pb_2 to nearest nodes on PB Lt 2
const pb2Nodes = Object.values(nodes).filter(n => n.buildingId === 'pasar-buah' && n.floor === 2 && n.id !== 'n_ramp_pb_2');
pb2Nodes.slice(0, 4).forEach(n => {
    edges.push({
        from: 'n_ramp_pb_2',
        to: n.id,
        distance: 15,
        accessible: true,
        hasTactile: true,
        width: 2.0
    });
});

// Inter-building connections across Jl. Urip Sumoharjo (between Pasar Gede & Pasar Buah)
edges.push({
    from: 'n_9eec6913-95cb-4ac1-b414-ad5723ddc6fc', // Pintu Samping Pasar Gede
    to: 'n_9ef46756-84f4-461e-af73-74b9fd4fce4f',   // Pintu Pasar Buah Depan 2
    distance: 30,
    accessible: true,
    hasTactile: true,
    isBuildingTransition: true,
    transitionType: 'crosswalk',
    width: 2.5
});

edges.push({
    from: 'n_9eec6146-0218-40fc-bd3c-bbaab1a09adc', // Pintu Utama Pasar Gede
    to: 'n_9ef45e9b-e880-4a71-9cf6-ae8a97c9e47d',   // Pintu Pasar Buah Kiri 1
    distance: 40,
    accessible: true,
    hasTactile: true,
    isBuildingTransition: true,
    transitionType: 'crosswalk',
    width: 2.5
});

console.log(`Generated ${Object.keys(nodes).length} nodes and ${edges.length} edges!`);

const outGraph = `/**
 * Navigation Graph - Real Stall Topology for Pasar Gedhe Solo & Pasar Buah
 */

const NavigationGraph = (() => {
    const nodes = ${JSON.stringify(nodes, null, 2)};
    const edges = ${JSON.stringify(edges, null, 2)};

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
`;

fs.writeFileSync(OUTPUT_GRAPH_FILE, outGraph);
console.log('Successfully written connected navigation graph!');
