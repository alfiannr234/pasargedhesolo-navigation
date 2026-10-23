const fs = require('fs');

const page = fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\chunk_page-693ca74f9996899c.js', 'utf8');
const c408 = fs.readFileSync('d:\\!!! Coding\\Maps Navigation Pasar Gedhe\\chunk_408-3b2ec5ddc49e35ea.js', 'utf8');

// Check if Leaflet or Konva or Pixi or OpenLayers or custom canvas is used
for (const lib of ['leaflet', 'konva', 'pixi', 'openlayers', 'd3', 'fabric', 'panzoom']) {
    console.log(`Checking for ${lib}: in page=${page.toLowerCase().includes(lib)}, in 408=${c408.toLowerCase().includes(lib)}`);
}

// Check how SVG is rendered
const svgRenderMatches = page.match(/(?:<svg|image_svg|dangerouslySetInnerHTML)[^;]{1,100}/g) || [];
console.log('SVG render snippets in page:', svgRenderMatches.slice(0, 10));
