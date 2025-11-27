const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../images');

// Files to recompress with target sizes
const compressionTargets = [
  // Hero images - need more aggressive compression
  { 
    input: 'hero-cafe-interior.png',
    outputs: [
      { name: 'hero-cafe-interior-1920.webp', width: 1920, quality: 65, targetKB: 250 },
      { name: 'hero-cafe-interior-1280.webp', width: 1280, quality: 60, targetKB: 150 },
      { name: 'hero-cafe-interior-768.webp', width: 768, quality: 55, targetKB: 120 }
    ]
  },
  // Portrait images - moderate compression
  {
    input: 'owner-kazushi-portrait.webp',
    outputs: [
      { name: 'kazushi-portrait-1280.webp', width: 1280, quality: 62, targetKB: 200 },
      { name: 'kazushi-portrait-768.webp', width: 768, quality: 58, targetKB: 100 },
      { name: 'kazushi-portrait.webp', width: null, quality: 65, targetKB: 250 }
    ]
  }
];

async function compressImage(inputPath, output) {
  const outputPath = path.join(imagesDir, output.name);
  
  try {
    let pipeline = sharp(inputPath);
    
    if (output.width) {
      pipeline = pipeline.resize({ width: output.width });
    }
    
    await pipeline
      .webp({ quality: output.quality, effort: 6 })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    const sizeKB = Math.round(stats.size / 1024);
    const status = sizeKB <= output.targetKB ? '✓' : '⚠';
    
    console.log(`${status} ${output.name}: ${sizeKB} KB (target: ${output.targetKB} KB, quality: ${output.quality})`);
  } catch (err) {
    console.error(`Error compressing ${output.name}:`, err.message);
  }
}

async function main() {
  console.log('Starting image compression...\n');
  
  for (const target of compressionTargets) {
    const inputPath = path.join(imagesDir, target.input);
    
    if (!fs.existsSync(inputPath)) {
      console.error(`❌ Input file not found: ${target.input}`);
      continue;
    }
    
    console.log(`Processing ${target.input}:`);
    
    for (const output of target.outputs) {
      await compressImage(inputPath, output);
    }
    
    console.log('');
  }
  
  console.log('Compression complete!');
}

main();
