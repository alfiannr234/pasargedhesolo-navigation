const fs = require('fs');

const page = fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\chunk_page-693ca74f9996899c.js', 'utf8');

// Find occurrences of b + "..." or `...${b}...`
const matches = [...page.matchAll(/([a-zA-Z0-9_]+\s*=\s*(?:await\s+)?fetch\([^)]+\))/g)].map(m => m[0]);
console.log('Fetch calls:', matches);

// Also look for `${b}/...` or `b+"/"...`
const bMatches = [...page.matchAll(/b\s*\+\s*["'][^"']+["']/g)].map(m => m[0]);
console.log('b + ... matches:', bMatches);

const templateB = [...page.matchAll(/`\$\{b\}[^`]*`/g)].map(m => m[0]);
console.log('Template b matches:', templateB);

// Also search for "/map" or "/mall" or "/floor" or "/stall" or "/tenant"
const pathMatches = [...page.matchAll(/["'](\/(?:api|map|mall|floor|stall|tenant|building|route)[^"']*)["']/g)].map(m => m[1]);
console.log('Path matches:', [...new Set(pathMatches)]);
