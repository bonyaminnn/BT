// Rasterise one SVG to PNG at a given pixel size using the bundled Chromium.
// Usage: node scripts/rasterize.cjs <in.svg> <out.png> <size> [<in.svg> <out.png> <size> ...]
const { chromium } = require('playwright');
const { readFileSync } = require('node:fs');

(async () => {
  const args = process.argv.slice(2);
  const browser = await chromium.launch();
  for (let i = 0; i < args.length; i += 3) {
    const [src, out, size] = [args[i], args[i + 1], Number(args[i + 2])];
    const svg = readFileSync(src, 'utf8').replace(/width="\d+" height="\d+"/, `width="${size}" height="${size}"`);
    const page = await browser.newPage({ viewport: { width: size, height: size } });
    await page.setContent(`<style>html,body{margin:0;background:transparent}svg{display:block}</style>${svg}`);
    await page.screenshot({ path: out, omitBackground: true });
    await page.close();
  }
  await browser.close();
})();
