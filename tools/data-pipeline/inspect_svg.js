const fs = require('fs');

const svg1 = fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\assets\\svg\\pasar_gede_lt1.svg', 'utf8');
console.log('SVG length:', svg1.length);
console.log('SVG first 500 chars:\n', svg1.substring(0, 500));

// Check viewBox
const viewBoxMatch = svg1.match(/viewBox="([^"]+)"/);
console.log('ViewBox:', viewBoxMatch ? viewBoxMatch[1] : 'none');

// Check width/height
const widthMatch = svg1.match(/width="([^"]+)"/);
const heightMatch = svg1.match(/height="([^"]+)"/);
console.log('Width / Height:', widthMatch ? widthMatch[1] : '', heightMatch ? heightMatch[1] : '');

// Look for groups or IDs in the SVG (e.g. slot IDs, room numbers)
const ids = [...svg1.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
console.log('Total IDs in SVG:', ids.length);
console.log('Sample IDs:', ids.slice(0, 20));
