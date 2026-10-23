const fs = require('fs');

const page = fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\chunk_page-693ca74f9996899c.js', 'utf8');

const target = 'let b="https://input.pasargedesolo.com/api"';
const pos = page.indexOf(target);
console.log('Context around API definition:\n');
console.log(page.substring(pos, pos + 2500));
