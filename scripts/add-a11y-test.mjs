#!/usr/bin/env node
/**
 * Adds an axe-core accessibility test to an existing pattern test file.
 * Usage: node scripts/add-a11y-test.mjs <PatternName>
 */
import fs from 'fs';
import path from 'path';

const name = process.argv[2];
if (!name) { console.error('Usage: node scripts/add-a11y-test.mjs <PatternName>'); process.exit(1); }

const testFile = path.join('src/app/pages/__tests__', name + '.test.tsx');
if (!fs.existsSync(testFile)) { console.error('Test file not found: ' + testFile); process.exit(1); }

let content = fs.readFileSync(testFile, 'utf-8');

// Already has axe test?
if (content.includes('toHaveNoViolations') || content.includes('vitest-axe')) {
  console.log(name + ' already has a11y test. Skipping.');
  process.exit(0);
}

// Add axe import after the existing imports
content = content.replace(
  "import { renderWithRouter } from './test-utils';",
  "import { renderWithRouter } from './test-utils';\nimport { axe } from 'vitest-axe';"
);

// Add the a11y test before the closing of the describe block
const lastClosing = content.lastIndexOf('});');
if (lastClosing === -1) {
  console.error('Could not find describe closing in ' + name);
  process.exit(1);
}

const a11yTest = `
  // ── Accessibility ─────────────────────────────────────────────────
  it('has no axe accessibility violations', async () => {
    const { container } = renderWithRouter(<${getComponentName(content)} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  }, 15000);
`;

content = content.slice(0, lastClosing) + a11yTest + content.slice(lastClosing);

fs.writeFileSync(testFile, content, 'utf-8');
console.log('✅ ' + name);

function getComponentName(src) {
  const match = src.match(/import\s+(\w+)\s+from\s+'\.\.\//);
  return match ? match[1] : name;
}
