/**
 * Audits all 77 component page live previews for rendering issues.
 */
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';

const dir = '/Users/debabratanayak_1/Documents/DesignSystem_211/src/app/pages';
const files = readdirSync(dir).filter(f => f.startsWith('Component') && f.endsWith('Page.tsx')).sort();

const issues = [];
const good = [];

for (const file of files) {
  const name = file.replace('Component', '').replace('Page.tsx', '');
  const content = readFileSync(resolve(dir, file), 'utf8');

  const previewStart = content.indexOf('preview={');
  if (previewStart === -1) { issues.push(`${name}: NO preview prop`); continue; }

  const previewArea = content.slice(previewStart, previewStart + 2000);
  const problems = [];

  // Get Preview component definition
  const defMatch = content.match(new RegExp(`const ${name}Preview\\s*=`, 'm'));
  let def = '';
  if (defMatch) {
    const defStart = defMatch.index;
    def = content.slice(defStart, defStart + 1500);
  }

  // Check: Preview returns null without isOpen
  if (def.includes('if (!isOpen)') || def.includes('!isOpen')) {
    if (!previewArea.includes('isOpen')) {
      problems.push('needs isOpen (returns null)');
    }
  }

  // Check: Preview uses fixed positioning
  if (def.includes('fixed inset-0') || def.includes("className={`fixed") || def.includes('className="fixed')) {
    if (previewArea.includes(`${name}Preview`)) {
      problems.push('uses fixed positioning (renders off-screen)');
    }
  }

  // Check: Preview uses portal
  if (def.includes('createPortal') || def.includes('Portal')) {
    if (previewArea.includes(`${name}Preview`)) {
      // Only flag if it's the actual component, not text content
      const portalInDef = def.slice(0, 500).includes('Portal');
      if (portalInDef) problems.push('uses portal');
    }
  }

  // Check: Preview needs children but none passed
  if (previewArea.includes(`${name}Preview />`)) {
    if (def.includes('{children}') && !def.includes('children ||') && !def.includes('children &&')) {
      problems.push('no children passed (may render empty)');
    }
  }

  // Check: Preview needs items/options/data array but none passed
  if (previewArea.includes(`${name}Preview />`)) {
    if (def.includes('.map(') || def.includes('.filter(') || def.includes('.length')) {
      problems.push('needs array prop (may crash)');
    }
  }

  if (problems.length > 0) {
    issues.push(`${name}: ${problems.join(', ')}`);
  } else {
    good.push(name);
  }
}

console.log(`=== PREVIEW AUDIT ===`);
console.log(`Good: ${good.length}/77`);
console.log(`Issues: ${issues.length}/77`);
console.log('');
if (issues.length > 0) {
  console.log('ISSUES:');
  issues.forEach(i => console.log(`  ❌ ${i}`));
} else {
  console.log('ALL 77 PREVIEWS LOOK GOOD ✅');
}
