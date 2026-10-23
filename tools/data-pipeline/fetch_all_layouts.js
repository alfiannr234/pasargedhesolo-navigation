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

const floors = [
    { id: '9ee89e88-2140-40c9-9f99-54d7ec058959', name: 'Pasar Gede Lt 1' },
    { id: '9ee8a0e4-4edd-46c8-8091-f4009cc47355', name: 'Pasar Gede Lt 2' },
    { id: '9ee8a4fc-e73c-466f-bd71-b14f5f535f90', name: 'Pasar Buah Lt 1' },
    { id: '9ee8a526-7027-47f6-b9ea-c03b24db39c0', name: 'Pasar Buah Lt 2' }
];

async function run() {
    for (const fl of floors) {
        console.log(`Fetching layout for ${fl.name} (${fl.id})...`);
        const res = await fetchApi('/floor-layouts/' + fl.id);
        fs.writeFileSync(`d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\layout_${fl.id}.json`, JSON.stringify(res, null, 2));
        
        if (res.data) {
            console.log(`  Slots count: ${res.data.slots ? res.data.slots.length : 0}`);
            console.log(`  Categories count: ${res.data.categories ? res.data.categories.length : 0}`);
            console.log(`  Dimensions: ${res.data.width}x${res.data.height}`);
            if (res.data.slots && res.data.slots.length > 0) {
                console.log('  Sample slot:', JSON.stringify(res.data.slots[0]));
            }
        }
    }
}

run().catch(console.error);
