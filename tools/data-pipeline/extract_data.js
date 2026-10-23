const fs = require('fs');

const pageContent = fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\chunk_page-693ca74f9996899c.js', 'utf8');

// Look for image urls, svg urls, json urls, api endpoints, or stall names
console.log('Searching in page chunk...');

// URLs or paths (e.g. .svg, .png, .jpg, .json)
const assets = pageContent.match(/["'`]([^"'`]+\.(png|jpg|jpeg|svg|json|webp))["'`]/gi);
console.log('Found assets:', assets ? [...new Set(assets)] : 'none');

// Look for tenant or stall names or coordinates or categories
const idMatches = pageContent.match(/"id":\s*["'][^"']+["']/g);
console.log('Found IDs count:', idMatches ? idMatches.length : 0);
if (idMatches) {
    console.log('Sample IDs:', idMatches.slice(0, 20));
}

// Look for strings mentioning "name", "category", "kios", "tenant"
const nameMatches = pageContent.match(/"name":\s*["'][^"']+["']/g);
console.log('Found names count:', nameMatches ? nameMatches.length : 0);
if (nameMatches) {
    console.log('Sample names:', nameMatches.slice(0, 30));
}

// Look for floor definitions
const floorMatches = pageContent.match(/floor[^,;{}]{1,40}/gi);
console.log('Sample floor matches:', floorMatches ? floorMatches.slice(0, 15) : 'none');
