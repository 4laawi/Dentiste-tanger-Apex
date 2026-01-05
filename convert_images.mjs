import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(process.cwd(), 'public');

async function convert() {
    if (!fs.existsSync(directory)) {
        console.error('Public directory not found');
        return;
    }
    const files = fs.readdirSync(directory);

    for (const file of files) {
        if (file.match(/\.(png|jpe?g)$/i)) {
            const name = path.parse(file).name;
            const inputPath = path.join(directory, file);
            const outputPath = path.join(directory, `${name}.webp`);

            // Skip if webp already exists (optional, but good for idempotency)
            if (fs.existsSync(outputPath)) {
                console.log(`Skipping ${file}, ${name}.webp already exists`);
                continue;
            }

            console.log(`Converting ${file} to ${name}.webp`);
            try {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }
}

convert();
