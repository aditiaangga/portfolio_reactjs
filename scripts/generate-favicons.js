const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [192, 512];
const svgPath = path.join(__dirname, '..', 'public', 'logo.svg');

async function generate() {
  const svgBuffer = fs.readFileSync(svgPath);

  for (const size of sizes) {
    const outputPath = path.join(__dirname, '..', 'public', `logo${size}.png`);
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    console.log(`Generated: logo${size}.png (${size}x${size})`);
  }
}

generate().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});