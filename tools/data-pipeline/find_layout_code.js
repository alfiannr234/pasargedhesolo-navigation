const fs = require('fs');

const page = fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\chunk_page-693ca74f9996899c.js', 'utf8');

for (const term of ['/floor-layouts/', '/buildings']) {
    let idx = -1;
    while ((idx = page.indexOf(term, idx + 1)) !== -1) {
        console.log(`\n=== Found "${term}" at ${idx} ===`);
        console.log(page.substring(Math.max(0, idx - 150), Math.min(page.length, idx + 250)));
    }
}
