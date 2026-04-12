/**
 * Simple bundler for UX4G Web Components
 * Creates a single bundle file for CDN usage
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, '../dist');

// Read all the built files
const files = [
  'base/UX4GElement.js',
  'utils/helpers.js',
  'components/button/ux4g-button.js',
  'components/input/ux4g-input.js',
  'components/checkbox/ux4g-checkbox.js',
  'components/alert/ux4g-alert.js',
  'components/select/ux4g-select.js',
  'index.js',
];

let bundleContent = `/**
 * UX4G Web Components Bundle
 * Framework-agnostic Web Components for Government of India Design System
 * 
 * @package @ux4g/web-components
 * @version 1.0.0
 * @license MIT
 */

`;

files.forEach((file) => {
  try {
    const content = readFileSync(join(distDir, file), 'utf-8');
    bundleContent += `\n/* === ${file} === */\n`;
    bundleContent += content;
  } catch (e) {
    console.error(`Error reading ${file}:`, e.message);
  }
});

// Write the bundle
writeFileSync(join(distDir, 'ux4g-web-components.bundle.js'), bundleContent);

console.log('✅ Bundle created: ux4g-web-components.bundle.js');
