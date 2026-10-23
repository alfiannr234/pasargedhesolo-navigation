const fs = require('fs');
const https = require('https');

const html = fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\scratch_site.html', 'utf8');

const scriptRegex = /<script[^>]+src="([^">]+)"/g;
let match;
const scripts = [];
while ((match = scriptRegex.exec(html)) !== null) {
    scripts.push(match[1]);
}
console.log('Scripts found:', scripts);

// Let's download the main page chunks to find the map data, SVGs, or GeoJSON
async function downloadScripts() {
    for (const src of scripts) {
        const url = 'https://maps.pasargedesolo.com' + src;
        console.log('Fetching', url);
        try {
            const content = await fetchUrl(url);
            console.log(`Downloaded ${src} (${content.length} bytes)`);
            
            // Check for keywords
            const keywords = ['svg', 'geojson', 'kios', 'stall', 'floor', 'lantai', 'pasar', 'gedhe', 'path', 'map', 'canvas'];
            for (const kw of keywords) {
                const count = (content.toLowerCase().match(new RegExp(kw, 'g')) || []).length;
                if (count > 0) {
                    console.log(`  - contains "${kw}": ${count} times`);
                }
            }
            
            // Save chunk for analysis
            const filename = src.split('/').pop();
            fs.writeFileSync(`d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\chunk_${filename}`, content);
        } catch (e) {
            console.error('Error fetching', url, e.message);
        }
    }
}

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 }, (res) => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

downloadScripts();
