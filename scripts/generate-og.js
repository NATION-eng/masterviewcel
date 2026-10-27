const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Read the logo as base64
  const logoBuf = fs.readFileSync(path.join(__dirname, '../public/images/m-cel-logo.jpg'));
  const logoBase64 = `data:image/jpeg;base64,${logoBuf.toString('base64')}`;

  // Read the hero inspection photo as base64
  const heroBuf = fs.readFileSync(path.join(__dirname, '../public/images/construction/engineers-slab-inspection.jpg'));
  // Resize hero image to 520x440 with sharp
  const resizedHero = await sharp(heroBuf)
    .resize(520, 440, { fit: 'cover', position: 'center' })
    .toBuffer();
  const heroBase64 = `data:image/jpeg;base64,${resizedHero.toString('base64')}`;

  // Read CEO photo as a small trust avatar
  const ceoBuf = fs.readFileSync(path.join(__dirname, '../public/images/engr-jonathan-david-ceo.jpg'));
  const resizedCeo = await sharp(ceoBuf)
    .resize(120, 120, { fit: 'cover', position: 'top' })
    .toBuffer();
  const ceoBase64 = `data:image/jpeg;base64,${resizedCeo.toString('base64')}`;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#140428" />
        <stop offset="45%" stop-color="#21083d" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>

      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0.04" />
      </linearGradient>

      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#fbbf24" />
        <stop offset="100%" stop-color="#f59e0b" />
      </linearGradient>

      <clipPath id="heroClip">
        <rect x="630" y="95" width="520" height="440" rx="24" />
      </clipPath>

      <clipPath id="ceoClip">
        <circle cx="45" cy="40" r="25" />
      </clipPath>

      <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.6" />
      </filter>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

    <!-- Subtle Grid Overlay -->
    <g opacity="0.06" stroke="#fbbf24" stroke-width="1">
      <line x1="0" y1="105" x2="1200" y2="105" />
      <line x1="0" y1="210" x2="1200" y2="210" />
      <line x1="0" y1="315" x2="1200" y2="315" />
      <line x1="0" y1="420" x2="1200" y2="420" />
      <line x1="0" y1="525" x2="1200" y2="525" />
      <line x1="200" y1="0" x2="200" y2="630" />
      <line x1="400" y1="0" x2="400" y2="630" />
      <line x1="600" y1="0" x2="600" y2="630" />
      <line x1="800" y1="0" x2="800" y2="630" />
      <line x1="1000" y1="0" x2="1000" y2="630" />
    </g>

    <!-- Top Left Brand Block -->
    <g transform="translate(60, 55)">
      <!-- Logo Container -->
      <rect x="0" y="0" width="70" height="70" rx="16" fill="#ffffff" filter="url(#shadow)" />
      <image href="${logoBase64}" x="5" y="5" width="60" height="60" preserveAspectRatio="xMidYMid meet" />

      <!-- Brand Typography -->
      <text x="88" y="32" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="28" font-weight="900" fill="#ffffff" letter-spacing="1.5">
        MASTERVIEW
      </text>
      <text x="88" y="54" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="13" font-weight="800" fill="#fbbf24" letter-spacing="3">
        CONSULTS ENGINEERING LIMITED
      </text>
    </g>

    <!-- Top Tagline Badge -->
    <g transform="translate(60, 160)">
      <rect x="0" y="0" width="370" height="32" rx="16" fill="#fbbf24" fill-opacity="0.18" stroke="#fbbf24" stroke-opacity="0.4" stroke-width="1.5" />
      <text x="16" y="21" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" font-weight="800" fill="#fbbf24" letter-spacing="2">
        INTEGRATED ENGINEERING &amp; ENERGY
      </text>
    </g>

    <!-- Main Headline -->
    <g transform="translate(60, 245)">
      <text x="0" y="0" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
        Engineering Solutions
      </text>
      <text x="0" y="52" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="44" font-weight="900" fill="url(#goldGrad)" letter-spacing="-0.5">
        For All Enterprises
      </text>
    </g>

    <!-- Description & 4 Pillars -->
    <g transform="translate(60, 360)">
      <text x="0" y="0" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="16" font-weight="500" fill="#cbd5e1">
        Delivering engineering precision across oil &amp; gas maintenance,
      </text>
      <text x="0" y="24" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="16" font-weight="500" fill="#cbd5e1">
        ISO/IEC 17025 calibration, turnkey civil works &amp; logistics in Nigeria.
      </text>
    </g>

    <!-- Discipline Badges -->
    <g transform="translate(60, 425)">
      <!-- Badge 1 -->
      <rect x="0" y="0" width="165" height="30" rx="8" fill="#1e293b" stroke="#334155" />
      <text x="12" y="19" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="11" font-weight="700" fill="#e2e8f0">
        • Oil &amp; Gas (API)
      </text>

      <!-- Badge 2 -->
      <rect x="175" y="0" width="170" height="30" rx="8" fill="#1e293b" stroke="#334155" />
      <text x="187" y="19" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="11" font-weight="700" fill="#e2e8f0">
        • Calibration (ISO 17025)
      </text>

      <!-- Badge 3 -->
      <rect x="355" y="0" width="160" height="30" rx="8" fill="#1e293b" stroke="#334155" />
      <text x="367" y="19" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="11" font-weight="700" fill="#e2e8f0">
        • Civil Construction
      </text>
    </g>

    <!-- Bottom Authority / Trust Strip -->
    <g transform="translate(60, 495)">
      <rect x="0" y="0" width="520" height="80" rx="18" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1.5" />
      
      <!-- CEO Avatar -->
      <image href="${ceoBase64}" x="19" y="14" width="52" height="52" clip-path="url(#ceoClip)" preserveAspectRatio="xMidYMid slice" />
      <circle cx="45" cy="40" r="26" fill="none" stroke="#fbbf24" stroke-width="2" />

      <!-- Leadership text -->
      <text x="85" y="32" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="13" font-weight="800" fill="#ffffff">
        ENGR. JONATHAN, DAVID J.
      </text>
      <text x="85" y="48" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">
        Managing Director / CEO • COREN Reg: R.79,476
      </text>
      <text x="85" y="64" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="11" font-weight="700" fill="#fbbf24">
        CAC Registered: RC 7361706 • Port Harcourt HQ
      </text>
    </g>

    <!-- RIGHT SIDE: HERO CIVIL INSPECTION PHOTO CARD -->
    <g filter="url(#shadow)">
      <!-- Card border / backing -->
      <rect x="626" y="91" width="528" height="448" rx="28" fill="none" stroke="#fbbf24" stroke-width="3" stroke-opacity="0.8" />
      <!-- Image clipped to 24px radius -->
      <image href="${heroBase64}" x="630" y="95" width="520" height="440" preserveAspectRatio="xMidYMid slice" clip-path="url(#heroClip)" />
      
      <!-- Gradient overlay on image -->
      <rect x="630" y="385" width="520" height="150" fill="black" opacity="0.75" clip-path="url(#heroClip)" />

      <!-- Card Caption -->
      <g transform="translate(655, 470)">
        <rect x="0" y="0" width="135" height="24" rx="6" fill="#fbbf24" />
        <text x="8" y="16" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="10" font-weight="900" fill="#140428" letter-spacing="1">
          ACTIVE DISCIPLINE
        </text>
        <text x="0" y="45" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="18" font-weight="800" fill="#ffffff">
          Civil &amp; General Engineering
        </text>
      </g>
    </g>

    <!-- Top-Right Live Web Pill -->
    <g transform="translate(940, 45)">
      <rect x="0" y="0" width="205" height="34" rx="17" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.25" stroke-width="1.5" />
      <circle cx="20" cy="17" r="4" fill="#10b981" />
      <text x="32" y="22" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" font-weight="700" fill="#ffffff">
        www.masterviewcel.com
      </text>
    </g>
  </svg>
  `;

  const svgBuffer = Buffer.from(svg);

  const pubDir = path.join(__dirname, '../public/images');
  const appDir = path.join(__dirname, '../app');

  // Generate PNG
  await sharp(svgBuffer)
    .png()
    .toFile(path.join(pubDir, 'og-preview.png'));

  // Generate high quality JPEG (under 300KB for WhatsApp)
  await sharp(svgBuffer)
    .jpeg({ quality: 90, progressive: true })
    .toFile(path.join(pubDir, 'og-preview.jpg'));

  // Also write to app/opengraph-image.jpg so Next.js auto-detects it
  await sharp(svgBuffer)
    .jpeg({ quality: 90, progressive: true })
    .toFile(path.join(appDir, 'opengraph-image.jpg'));

  console.log('OG images created successfully!');
  const statsJpg = fs.statSync(path.join(pubDir, 'og-preview.jpg'));
  const statsPng = fs.statSync(path.join(pubDir, 'og-preview.png'));
  console.log(`JPEG size: ${statsJpg.size} bytes`);
  console.log(`PNG size: ${statsPng.size} bytes`);
}

createOgImage().catch(console.error);
