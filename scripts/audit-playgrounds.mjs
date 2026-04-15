/**
 * Audits all 77 component playgrounds for quality.
 * Checks: renders actual component, has 3+ controls, has JSX snippet, controls wired to preview.
 */
import { readFileSync, readdirSync } from 'fs';
const dir = '/Users/debabratanayak_1/Documents/DesignSystem_211/src/app/pages';
const files = readdirSync(dir).filter(f => f.startsWith('Component') && f.endsWith('Page.tsx')).sort();

const results = { perfect: [], good: [], broken: [] };

for (const file of files) {
  const name = file.replace('Component', '').replace('Page.tsx', '');
  const content = readFileSync(`${dir}/${file}`, 'utf8');

  // Extract playground function
  const pgMatch = content.match(new RegExp(`function ${name}Playground\\(\\)[\\s\\S]*?^}`, 'gm'));
  if (!pgMatch) { results.broken.push(`${name}: NO playground function`); continue; }
  const pg = pgMatch[0];

  const issues = [];

  // 1. Count useState hooks
  const stateCount = (pg.match(/useState/g) || []).length;
  if (stateCount < 2) issues.push(`states=${stateCount}(<2)`);

  // 2. Check if preview area renders actual component or just text/emoji
  const hasPreviewComponent = pg.includes(`${name}Preview`) || pg.includes('className=');
  const hasEmoji = pg.includes('🧩');
  if (hasEmoji) issues.push('has emoji placeholder');
  
  // 3. Check if controls exist (select, checkbox, input)
  const hasSelect = pg.includes('<select');
  const hasCheckbox = pg.includes('type="checkbox"');
  const hasInput = pg.includes('<input') && !pg.includes('type="checkbox"');
  const controlCount = (hasSelect ? 1 : 0) + (hasCheckbox ? (pg.match(/type="checkbox"/g) || []).length : 0) + (hasInput ? 1 : 0);
  if (controlCount < 2) issues.push(`controls=${controlCount}(<2)`);

  // 4. Check JSX snippet
  const hasSnippet = pg.includes('{`<');
  if (!hasSnippet) issues.push('no JSX snippet');

  // 5. Check if state variables are used in the preview area (wired to component)
  // Extract state variable names
  const stateVars = [...pg.matchAll(/\[(\w+),\s*set\w+\]/g)].map(m => m[1]);
  const previewArea = pg.slice(0, pg.indexOf('space-y-4 text-sm') || pg.length);
  const wiredCount = stateVars.filter(v => previewArea.includes(`{${v}}`) || previewArea.includes(`=${v}`) || previewArea.includes(`={${v}}`)).length;
  if (stateVars.length > 0 && wiredCount === 0) issues.push('controls NOT wired to preview');

  if (issues.length === 0) {
    results.perfect.push(name);
  } else if (issues.some(i => i.includes('emoji') || i.includes('NOT wired') || i.includes('NO playground'))) {
    results.broken.push(`${name}: ${issues.join(', ')}`);
  } else {
    results.good.push(`${name}: ${issues.join(', ')}`);
  }
}

console.log(`=== PLAYGROUND AUDIT ===`);
console.log(`Perfect: ${results.perfect.length}/77`);
console.log(`Good (minor): ${results.good.length}/77`);
console.log(`Broken: ${results.broken.length}/77`);
console.log('');
if (results.broken.length > 0) {
  console.log('BROKEN (need fix):');
  results.broken.forEach(b => console.log(`  ❌ ${b}`));
}
if (results.good.length > 0) {
  console.log('\nGOOD (minor issues):');
  results.good.forEach(g => console.log(`  🟡 ${g}`));
}
console.log(`\nPERFECT: ${results.perfect.join(', ')}`);
