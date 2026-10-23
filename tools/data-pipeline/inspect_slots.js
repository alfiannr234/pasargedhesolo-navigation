const fs = require('fs');

const fl1 = JSON.parse(fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\layout_9ee89e88-2140-40c9-9f99-54d7ec058959.json', 'utf8'));

console.log('Categories present:');
const categories = {};
fl1.data.slots.forEach(slot => {
    const cat = slot.store && slot.store.category ? slot.store.category.label : (slot.type || 'Lainnya');
    categories[cat] = (categories[cat] || 0) + 1;
});
console.log(categories);

console.log('\nSample 5 slots:');
fl1.data.slots.slice(0, 5).forEach(s => {
    console.log({
        label: s.label,
        type: s.type,
        x: s.location_x,
        y: s.location_y,
        cat: s.store && s.store.category ? s.store.category.label : null,
        desc: s.store ? s.store.description : null,
        entries: s.store ? s.store.entries : null
    });
});
