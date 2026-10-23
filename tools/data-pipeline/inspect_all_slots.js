const fs = require('fs');

const files = [
    { name: 'Pasar Gede Lt 1', file: 'layout_9ee89e88-2140-40c9-9f99-54d7ec058959.json' },
    { name: 'Pasar Gede Lt 2', file: 'layout_9ee8a0e4-4edd-46c8-8091-f4009cc47355.json' },
    { name: 'Pasar Buah Lt 1', file: 'layout_9ee8a4fc-e73c-466f-bd71-b14f5f535f90.json' },
    { name: 'Pasar Buah Lt 2', file: 'layout_9ee8a526-7027-47f6-b9ea-c03b24db39c0.json' }
];

files.forEach(f => {
    const data = JSON.parse(fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\' + f.file, 'utf8'));
    console.log(`\n=== ${f.name} ===`);
    console.log(`Slots: ${data.data.slots.length}`);
    const cats = {};
    data.data.slots.forEach(s => {
        const cat = s.store && s.store.category ? s.store.category.label : (s.type || 'Lainnya');
        cats[cat] = (cats[cat] || 0) + 1;
    });
    console.log(cats);
});
