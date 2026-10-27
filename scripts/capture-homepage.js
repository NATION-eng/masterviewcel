const puppeteer = require('puppeteer-core');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function capture() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  console.log('Launching Edge from:', edgePath);

  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
    ],
  });

  const page = await browser.newPage();
  
  // Set retina 2x viewport so typography and photos are razor-sharp
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 2,
  });

  console.log('Navigating to https://masterviewcel.vercel.app ...');
  await page.goto('https://masterviewcel.vercel.app', {
    waitUntil: 'networkidle2',
    timeout: 30000,
  });

  // Wait 2 seconds for all fonts, Framer Motion animations, and images to settle
  await new Promise(r => setTimeout(r, 2500));

  const rawScreenshotPath = path.join(__dirname, 'raw-homepage.png');
  await page.screenshot({
    path: rawScreenshotPath,
    clip: {
      x: 0,
      y: 0,
      width: 1200,
      height: 630,
    },
  });

  await browser.close();
  console.log('Raw screenshot captured successfully!');

  // Now process with sharp into exact 1200x630 high quality JPEG & PNG
  const outJpg = path.join(__dirname, '../public/images/og-preview.jpg');
  const outPng = path.join(__dirname, '../public/images/og-preview.png');
  const appOgJpg = path.join(__dirname, '../app/opengraph-image.jpg');

  await sharp(rawScreenshotPath)
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(outJpg);

  await sharp(rawScreenshotPath)
    .resize(1200, 630, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(outPng);

  // Copy to app/opengraph-image.jpg
  fs.copyFileSync(outJpg, appOgJpg);

  const jpgStats = fs.statSync(outJpg);
  console.log(`Updated og-preview.jpg: ${jpgStats.size} bytes (${(jpgStats.size / 1024).toFixed(1)} KB)`);
}

capture().catch(console.error);
