const fs = require('fs');

const fl1 = JSON.parse(fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\layout_9ee89e88-2140-40c9-9f99-54d7ec058959.json', 'utf8'));

const pintu = fl1.data.slots.filter(s => s.type === 'Entrance' || (s.store && s.store.category && s.store.category.label === 'Pintu Akses') || s.label.toLowerCase().includes('pintu'));
console.log('Pintu in Lt 1:');
pintu.forEach(p => console.log(p.label, 'x:', p.location_x, 'y:', p.location_y));

const tangga = fl1.data.slots.filter(s => s.label.toLowerCase().includes('tangga'));
console.log('\nTangga in Lt 1:');
tangga.forEach(t => console.log(t.label, 'x:', t.location_x, 'y:', t.location_y));
