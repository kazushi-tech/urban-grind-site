const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../images');
const files = [
  'hero-cafe-interior.png',
  'gallery-cafe-exterior.png',
  'concept-cafe-window.png',
  'menu-lumen-latte.png'
];

const widths = [1920, 1280, 768];

files.forEach(file => {
  const inputPath = path.join(imagesDir, file);
  if (fs.existsSync(inputPath)) {
    const baseName = path.basename(file, path.extname(file));
    
    widths.forEach(width => {
      const outputPath = path.join(imagesDir, `${baseName}-${width}.webp`);
      sharp(inputPath)
        .resize({ width: width })
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`Generated ${baseName}-${width}.webp`))
        .catch(err => console.error(`Error generating ${baseName}-${width}.webp:`, err));
    });
  } else {
    console.warn(`File not found: ${file}`);
  }
});
