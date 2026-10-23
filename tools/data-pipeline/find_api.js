const fs = require('fs');

const files = fs.readdirSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe').filter(f => f.startsWith('chunk_'));

for (const file of files) {
    const content = fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\' + file, 'utf8');
    
    // Search for fetch, http, https, /api, or domain names
    const apiMatches = content.match(/https?:\/\/[a-zA-Z0-9.\-_:/]+\/api[a-zA-Z0-9.\-_:/]*/g) || [];
    const urlMatches = content.match(/\/api\/[a-zA-Z0-9.\-_/]+/g) || [];
    const jsonMatches = content.match(/["']https?:\/\/[^"']+\.json["']/g) || [];
    const graphqlMatches = content.match(/\/graphql[a-zA-Z0-9.\-_/]*/g) || [];

    // Search for Indonesian stall names or Pasar Gede text
    const indonesianKeywords = content.match(/(dawet|telasih|timlo|mie gajah|liwet|soto|los\s+[a-z0-9]|kios\s+[a-z0-9]|blok\s+[a-z0-9]|buah|sayur|lantai\s+[0-9])/gi) || [];

    if (apiMatches.length || urlMatches.length || jsonMatches.length || indonesianKeywords.length) {
        console.log(`\n=== In ${file} ===`);
        if (apiMatches.length) console.log('API URLs:', [...new Set(apiMatches)]);
        if (urlMatches.length) console.log('Local APIs:', [...new Set(urlMatches)]);
        if (jsonMatches.length) console.log('JSON URLs:', [...new Set(jsonMatches)]);
        if (indonesianKeywords.length) console.log('Keywords:', [...new Set(indonesianKeywords)]);
    }
}
