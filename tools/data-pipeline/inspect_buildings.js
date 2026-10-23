const fs = require('fs');

const bld = JSON.parse(fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\raw_buildings.json', 'utf8'));

console.log('Success:', bld.success);
console.log('Total buildings:', bld.data.length);

bld.data.forEach((b, idx) => {
    console.log(`\n========================================`);
    console.log(`BUILDING ${idx + 1}: ${b.name} (${b.id})`);
    console.log(`Description: ${b.description}`);
    console.log(`Floors count: ${b.floor_layouts ? b.floor_layouts.length : 0}`);
    
    if (b.floor_layouts) {
        b.floor_layouts.forEach(fl => {
            console.log(`\n  Floor ID: ${fl.id}`);
            console.log(`  Floor Level: ${fl.level}`);
            console.log(`  Floor Name: ${fl.floor}`);
            console.log(`  SVG: ${fl.image_svg}`);
            console.log(`  Walkable: ${fl.image_walkable}`);
            console.log(`  Area: ${fl.image_area}`);
        });
    }
});
