const https = require('https');
const fs = require('fs');

const headers = {
    'Content-Type': 'application/json',
    'X-Key': 'HtsjJQ9xf6yldl40AD2P7UogaNBWbszt9TxfGlVEZB7M3DHPzWKsGUS0LSHb4KyVAMHpLECyHnb8h3wQbdcFMPJkkx9CjFnRwHb0Xnnd2lz9UjGFb0uj2Xs0RclsBkuR',
    'X-Build': '19',
    'User-Agent': 'Mozilla/5.0'
};

function fetchApi(path) {
    return new Promise((resolve, reject) => {
        https.get('https://input.pasargedesolo.com/api' + path, { headers }, (res) => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    resolve(data);
                }
            });
        }).on('error', reject);
    });
}

async function main() {
    console.log('Fetching /buildings...');
    const buildings = await fetchApi('/buildings');
    console.log('Buildings result:', JSON.stringify(buildings, null, 2).substring(0, 1000));
    fs.writeFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\raw_buildings.json', JSON.stringify(buildings, null, 2));

    if (buildings.data && buildings.data.length > 0) {
        for (const bld of buildings.data) {
            console.log('\nBuilding:', bld.name || bld.id || bld);
            if (bld.floors) {
                for (const fl of bld.floors) {
                    console.log('  Floor:', fl.id, fl.name, fl.floorLevel);
                    console.log('  Fetching layout for floor id:', fl.id);
                    const layout = await fetchApi('/floor-layouts/' + fl.id);
                    console.log('  Layout keys:', Object.keys(layout.data || layout));
                    fs.writeFileSync(`d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\raw_layout_${fl.id}.json`, JSON.stringify(layout, null, 2));
                }
            }
        }
    }
}

main().catch(console.error);
