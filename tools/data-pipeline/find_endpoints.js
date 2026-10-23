const fs = require('fs');

const page = fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\chunk_page-693ca74f9996899c.js', 'utf8');

const regex = /https:\/\/input\.pasargedesolo\.com\/api[^"'\`\s\)]*/g;
const matches = page.match(regex);
console.log('Matches for input.pasargedesolo.com/api:', matches ? [...new Set(matches)] : 'none');

// Also look for template strings with base url
const templateRegex = /`[^`]*input\.pasargedesolo\.com[^`]*`/g;
const templateMatches = page.match(templateRegex);
console.log('Template matches:', templateMatches ? [...new Set(templateMatches)] : 'none');

// Find all occurrences of "input.pasargedesolo.com" with 100 characters before and after
let idx = -1;
while ((idx = page.indexOf('input.pasargedesolo.com', idx + 1)) !== -1) {
    console.log('--- Context ---');
    console.log(page.substring(Math.max(0, idx - 100), Math.min(page.length, idx + 200)));
}
