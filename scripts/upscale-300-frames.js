import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('public/images');
const files = fs.readdirSync(imagesDir).filter(file => file.startsWith('ezgif-frame-') && file.endsWith('.jpg'));

console.log(`Processing ${files.length} frame images for 1080p Full HD sharpening...`);

async function processImages() {
  let count = 0;
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const tempPath = path.join(imagesDir, `hd_${file}`);

    try {
      const meta = await sharp(filePath).metadata();
      if (meta.width < 1920) {
        await sharp(filePath)
          .resize(1920, 1080, {
            fit: 'cover',
            kernel: sharp.kernel.lanczos3
          })
          .sharpen({
            sigma: 1.2,
            m1: 1.0,
            m2: 2.0
          })
          .jpeg({
            quality: 92,
            progressive: true,
            chromaSubsampling: '4:4:4'
          })
          .toFile(tempPath);

        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
      }
    } catch (e) {
      console.error(`Error processing ${file}:`, e);
    }

    count++;
    if (count % 30 === 0 || count === files.length) {
      console.log(`Processed ${count}/${files.length} frames (${Math.round((count / files.length) * 100)}%)`);
    }
  }
  console.log('All 300 frame images upgraded to 1080p Full HD crisp resolution!');
}

processImages().catch(err => {
  console.error('Error enhancing images:', err);
  process.exit(1);
});
