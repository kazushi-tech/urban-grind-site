const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../images');
const inputFile = 'owner-kazushi-portrait.webp';
const inputPath = path.join(imagesDir, inputFile);

if (!fs.existsSync(inputPath)) {
  console.error(`Error: ${inputFile} not found in ${imagesDir}`);
  process.exit(1);
}

const widths = [768, 1280];
const baseName = 'kazushi-portrait';

// First convert to WebP at original size
sharp(inputPath)
  .webp({ quality: 80 })
  .toFile(path.join(imagesDir, `${baseName}.webp`))
  .then(() => console.log(`Generated ${baseName}.webp`))
  .catch(err => console.error(`Error generating ${baseName}.webp:`, err));

// Then generate responsive sizes
widths.forEach(width => {
  const outputPath = path.join(imagesDir, `${baseName}-${width}.webp`);
  sharp(inputPath)
    .resize({ width: width })
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => console.log(`Generated ${baseName}-${width}.webp`))
    .catch(err => console.error(`Error generating ${baseName}-${width}.webp:`, err));
});
