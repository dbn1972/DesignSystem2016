#!/usr/bin/env node
/**
 * UX4G Logo Sync Script
 *
 * Downloads logo preview images from ux4g.gov.in using known URL patterns,
 * saves originals, and generates size variants using macOS `sips`.
 *
 * Usage: node scripts/sync-logos.mjs
 */

import { writeFileSync, mkdirSync, existsSync, statSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'assets', 'logos');
const SIZES = [32, 64, 128, 256];
const DELAY_MS = 300;

// Known image URL mappings (discovered from rendered pages)
// Pattern: the detail page shows an image from /assets/img/uxdt-logo/ or /assets/img/logos-page/
const BASE = 'https://www.ux4g.gov.in/assets/img';

// Map of logo id → known image filename (discovered by inspecting rendered pages)
const KNOWN_IMAGES = {
  'aadhaar': `${BASE}/uxdt-logo/Aadhaar_Preview.png`,
  'digital-india': `${BASE}/logos-page/Digital-india.jpg`,
  'national-emblem': `${BASE}/uxdt-logo/national-emblem_Preview.png`,
  'nic': `${BASE}/uxdt-logo/NIC_Preview.png`,
  'swachh-bharat': `${BASE}/uxdt-logo/Swachh-Bharat_Preview.png`,
  'my-gov': `${BASE}/uxdt-logo/MyGov_Preview.png`,
  'bhim': `${BASE}/uxdt-logo/BHIM_Preview.png`,
  'upi': `${BASE}/uxdt-logo/UPI_Preview.png`,
  'digilocker': `${BASE}/uxdt-logo/DigiLocker_Preview.png`,
  'startup-india': `${BASE}/uxdt-logo/Startup-India_Preview.png`,
  'skill-india': `${BASE}/uxdt-logo/Skill-India_Preview.png`,
  'khelo-india': `${BASE}/uxdt-logo/Khelo-India_Preview.png`,
  'fit-india': `${BASE}/uxdt-logo/FIT-India_Preview.png`,
  'doordarshan': `${BASE}/uxdt-logo/Doordarshan_Preview.png`,
  'isro': `${BASE}/uxdt-logo/ISRO_Preview.png`,
  'gem': `${BASE}/uxdt-logo/GeM_Preview.png`,
  'umang': `${BASE}/uxdt-logo/UMANG_Preview.png`,
  'irctc': `${BASE}/uxdt-logo/IRCTC_Preview.png`,
  'bsnl': `${BASE}/uxdt-logo/BSNL_Preview.png`,
  'air-india': `${BASE}/uxdt-logo/Air-India_Preview.png`,
  'indianoil': `${BASE}/uxdt-logo/IndianOil_Preview.png`,
  'ongc': `${BASE}/uxdt-logo/ONGC_Preview.png`,
  'coal-india': `${BASE}/uxdt-logo/Coal-India_Preview.png`,
  'sail': `${BASE}/uxdt-logo/SAIL_Preview.png`,
  'bhel': `${BASE}/uxdt-logo/BHEL_Preview.png`,
  'ntpc': `${BASE}/uxdt-logo/NTPC_Preview.png`,
  'lic': `${BASE}/uxdt-logo/LIC_Preview.png`,
  'india-post': `${BASE}/uxdt-logo/India-Post_Preview.png`,
  'election-commission': `${BASE}/uxdt-logo/ECI_Preview.png`,
  'cbi': `${BASE}/uxdt-logo/CBI_Preview.png`,
  'nabard': `${BASE}/uxdt-logo/NABARD_Preview.png`,
  'smart-city': `${BASE}/uxdt-logo/Smart-City_Preview.png`,
};

// For logos not in the known map, try common URL patterns
function guessImageUrls(id, name) {
  const cleanName = name.replace(/[()]/g, '').replace(/\s+/g, '-').replace(/&/g, 'and');
  const shortName = id.replace(/-/g, '-');
  return [
    `${BASE}/uxdt-logo/${cleanName}_Preview.png`,
    `${BASE}/uxdt-logo/${shortName}_Preview.png`,
    `${BASE}/logos-page/${cleanName}.png`,
    `${BASE}/logos-page/${cleanName}.jpg`,
    `${BASE}/uxdt-logo/${id}_Preview.png`,
  ];
}

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'UX4G-LogoSync/1.0' },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return false;
    const ct = res.headers.get('content-type') || '';
    if (!ct.includes('image')) return false;
    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length < 500) return false;
    writeFileSync(destPath, buffer);
    return true;
  } catch {
    return false;
  }
}

function generateSizes(originalPath, outDir) {
  const generated = [];
  for (const size of SIZES) {
    const outPath = join(outDir, `${size}.png`);
    try {
      execSync(`cp "${originalPath}" "${outPath}"`, { stdio: 'pipe' });
      execSync(`sips -Z ${size} "${outPath}" --out "${outPath}" 2>/dev/null`, { stdio: 'pipe' });
      const stat = statSync(outPath);
      if (stat.size > 100) generated.push(size);
    } catch { /* skip */ }
  }
  return generated;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Read logo IDs from the registry
import { readFileSync } from 'fs';
const registrySource = readFileSync(join(ROOT, 'src', 'app', 'content', 'logo-data.ts'), 'utf-8');
const logoPattern = /\{\s*id:\s*'([^']+)',\s*name:\s*'([^']*)',\s*slug:\s*'([^']+)'/g;
const logos = [];
let m;
while ((m = logoPattern.exec(registrySource)) !== null) {
  logos.push({ id: m[1], name: m[2], slug: m[3] });
}

console.log(`Found ${logos.length} logos. Downloading...\n`);

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  let success = 0, failed = 0;
  const results = [];

  for (let i = 0; i < logos.length; i++) {
    const logo = logos[i];
    const logoDir = join(OUT_DIR, logo.id);
    const originalPath = join(logoDir, 'original.png');

    process.stdout.write(`[${i + 1}/${logos.length}] ${logo.name}... `);

    if (existsSync(originalPath) && statSync(originalPath).size > 500) {
      const sizes = generateSizes(originalPath, logoDir);
      console.log(`exists (${sizes.length} sizes)`);
      results.push({ id: logo.id, ok: true, sizes });
      success++;
      continue;
    }

    mkdirSync(logoDir, { recursive: true });

    // Try known URL first
    let downloaded = false;
    if (KNOWN_IMAGES[logo.id]) {
      downloaded = await downloadImage(KNOWN_IMAGES[logo.id], originalPath);
    }

    // Try guessed URLs
    if (!downloaded) {
      const guesses = guessImageUrls(logo.id, logo.name);
      for (const url of guesses) {
        downloaded = await downloadImage(url, originalPath);
        if (downloaded) break;
      }
    }

    if (downloaded) {
      const sizes = generateSizes(originalPath, logoDir);
      console.log(`✓ (${sizes.length} sizes)`);
      results.push({ id: logo.id, ok: true, sizes });
      success++;
    } else {
      console.log('✗ not found');
      results.push({ id: logo.id, ok: false, sizes: [] });
      failed++;
    }

    await sleep(DELAY_MS);
  }

  // Write manifest
  const manifest = results.map((r) => ({
    id: r.id,
    downloaded: r.ok,
    original: r.ok ? `/assets/logos/${r.id}/original.png` : null,
    sizes: r.sizes.map((s) => ({ size: s, path: `/assets/logos/${r.id}/${s}.png` })),
  }));
  writeFileSync(join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

  console.log(`\n${'='.repeat(50)}`);
  console.log(`Done: ${success} downloaded, ${failed} failed, ${logos.length} total`);
  console.log(`Output: public/assets/logos/`);
  console.log(`Manifest: public/assets/logos/manifest.json`);
}

main().catch(console.error);
