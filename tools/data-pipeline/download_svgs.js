const https = require('https');
const fs = require('fs');

const svgs = [
    { url: 'https://maps.pasargedesolo.com/storage/maps/y96aq0hmUoS4lrPc4WEs5cSHP9DZBmeu.svg', file: 'assets/svg/pasar_gede_lt1.svg' },
    { url: 'https://maps.pasargedesolo.com/storage/maps/8h58BXWoYDgZYnx3eV4Ssjp4gdShg2xh.svg', file: 'assets/svg/pasar_gede_lt2.svg' },
    { url: 'https://maps.pasargedesolo.com/storage/maps/bW6N19BVvgxn1bPNLCf33w4qp0NHl0V6.svg', file: 'assets/svg/pasar_buah_lt1.svg' },
    { url: 'https://maps.pasargedesolo.com/storage/maps/B0q9M4szcOz0kA7ULNnlyfPCXS7nIs3h.svg', file: 'assets/svg/pasar_buah_lt2.svg' }
];

if (!fs.existsSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\assets\\svg')) {
    fs.mkdirSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\assets\\svg', { recursive: true });
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\' + dest);
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                return reject(new Error('Status: ' + res.statusCode));
            }
            res.pipe(file);
            file.on('finish', () => file.close(resolve));
        }).on('error', (err) => {
            fs.unlinkSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\' + dest);
            reject(err);
        });
    });
}

async function run() {
    for (const item of svgs) {
        console.log('Downloading', item.url);
        await downloadFile(item.url, item.file);
        console.log('Saved to', item.file);
    }
    console.log('All SVGs downloaded!');
}

run().catch(console.error);
