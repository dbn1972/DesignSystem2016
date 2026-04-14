#!/usr/bin/env node
/**
 * UX4G Package Publisher
 *
 * Builds and publishes all packages to npm in dependency order.
 *
 * Usage:
 *   node scripts/publish.mjs              # dry run (no actual publish)
 *   node scripts/publish.mjs --publish    # actually publish to npm
 *   node scripts/publish.mjs --tag next   # publish with a dist-tag
 *
 * Prerequisites:
 *   npm login  (must be logged in to npm with access to @ux4g scope)
 */

import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const DRY_RUN = !args.includes('--publish');
const TAG = args.includes('--tag') ? args[args.indexOf('--tag') + 1] : 'latest';

// Publish order matters — dependencies first
const PACKAGES = [
  {
    name: '@ux4g/tokens',
    dir: 'src/app/tokens-package',
    buildCmd: 'node scripts/build.js',
    distDir: 'dist',
  },
  {
    name: '@ux4g/styles',
    dir: 'src/app/styles-package',
    buildCmd: null, // dist already copied from src
    distDir: 'dist',
  },
  {
    name: '@ux4g/react-core',
    dir: 'src/app/react-core-package',
    buildCmd: `npx tsup --config ${path.join(ROOT, 'src/app/react-core-package/tsup.config.ts')}`,
    distDir: 'dist',
    buildCwd: ROOT,
  },
  {
    name: '@ux4g/web-components',
    dir: 'src/app/web-components-package',
    buildCmd: `npx tsup src/app/web-components-package/src/index.ts --format esm --dts --clean --outDir src/app/web-components-package/dist --tsconfig src/app/web-components-package/tsconfig.json --no-splitting`,
    distDir: 'dist',
    buildCwd: ROOT,
  },
];

function run(cmd, cwd = ROOT) {
  console.log(`  $ ${cmd}`);
  execSync(cmd, { cwd, stdio: 'inherit' });
}

function checkLoggedIn() {
  try {
    const user = execSync('npm whoami', { encoding: 'utf8' }).trim();
    console.log(`✓ Logged in as: ${user}\n`);
  } catch {
    console.error('✗ Not logged in to npm. Run: npm login');
    process.exit(1);
  }
}

async function main() {
  console.log('═══════════════════════════════════════════');
  console.log('  UX4G Package Publisher');
  console.log(`  Mode: ${DRY_RUN ? 'DRY RUN (no publish)' : 'PUBLISH'}`);
  console.log(`  Tag:  ${TAG}`);
  console.log('═══════════════════════════════════════════\n');

  if (!DRY_RUN) {
    checkLoggedIn();
  }

  for (const pkg of PACKAGES) {
    const pkgDir = path.join(ROOT, pkg.dir);
    const distDir = path.join(pkgDir, pkg.distDir);

    console.log(`\n── ${pkg.name} ──────────────────────────────`);

    // Build
    if (pkg.buildCmd) {
      console.log('  Building...');
      run(pkg.buildCmd, pkg.buildCwd || pkgDir);
    }

    // Verify dist exists
    if (!existsSync(distDir)) {
      console.error(`  ✗ dist not found at ${distDir}`);
      process.exit(1);
    }
    console.log(`  ✓ dist exists`);

    // Publish
    const publishCmd = DRY_RUN
      ? `npm publish --dry-run --access public`
      : `npm publish --access public --tag ${TAG}`;

    console.log(`  ${DRY_RUN ? 'Dry-run publishing' : 'Publishing'}...`);
    run(publishCmd, pkgDir);
    console.log(`  ✓ ${DRY_RUN ? 'Dry run complete' : 'Published!'}`);
  }

  console.log('\n═══════════════════════════════════════════');
  if (DRY_RUN) {
    console.log('  DRY RUN COMPLETE — nothing was published.');
    console.log('  To actually publish: node scripts/publish.mjs --publish');
  } else {
    console.log('  ALL PACKAGES PUBLISHED SUCCESSFULLY');
    console.log('\n  Install with:');
    PACKAGES.forEach(p => console.log(`    npm install ${p.name}`));
  }
  console.log('═══════════════════════════════════════════\n');
}

main().catch(err => {
  console.error('\n✗ Publish failed:', err.message);
  process.exit(1);
});
