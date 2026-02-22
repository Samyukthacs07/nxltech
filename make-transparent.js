import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Jimp from 'jimp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputDir = path.join(__dirname, 'public', 'client-logos');

async function processImages() {
    const files = fs.readdirSync(inputDir);
    for (const file of files) {
        if (!file.match(/\.(png|jpg|jpeg)$/i)) continue;
        const filePath = path.join(inputDir, file);
        try {
            const image = await Jimp.read(filePath);

            image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
                const r = this.bitmap.data[idx];
                const g = this.bitmap.data[idx + 1];
                const b = this.bitmap.data[idx + 2];

                // Remove whites and near-whites
                if (r > 235 && g > 235 && b > 235) {
                    this.bitmap.data[idx + 3] = 0; // Alpha to 0
                }
            });

            const outName = path.basename(file, path.extname(file)) + '.png';
            const outPath = path.join(inputDir, outName);
            await image.writeAsync(outPath);
            console.log(`Processed: ${file} -> ${outName}`);

            if (file !== outName) {
                fs.unlinkSync(filePath);
            }
        } catch (err) {
            console.error(`Failed: ${file}`, err);
        }
    }
}
processImages();
