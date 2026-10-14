import { mkdir, readdir, stat } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const sourceDirectory = join(process.cwd(), "public", "images");
const outputDirectory = join(sourceDirectory, "optimized");
const sources = (await readdir(sourceDirectory)).filter((file) =>
  /\.(?:jpe?g|png)$/i.test(file),
);
await mkdir(outputDirectory, { recursive: true });

let originalBytes = 0;
let optimizedBytes = 0;

for (const file of sources) {
  const source = join(sourceDirectory, file);
  const { name } = parse(file);
  const isIcon = name.startsWith("icon-");
  const { width: sourceWidth } = await sharp(source).metadata();
  const widths = isIcon ? [96] : sourceWidth <= 640 ? [640] : [640, 1200];
  const { size } = await stat(source);
  originalBytes += size;

  for (const width of widths) {
    const destination = join(outputDirectory, `${name}-${width}.webp`);
    await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp(isIcon ? { lossless: true, effort: 6 } : { quality: 84, effort: 5 })
      .toFile(destination);
    optimizedBytes += (await stat(destination)).size;
  }
}

console.log(
  `Optimized ${sources.length} images: ${(originalBytes / 1e6).toFixed(1)} MB of sources, ${(optimizedBytes / 1e6).toFixed(1)} MB of responsive WebP variants.`,
);
