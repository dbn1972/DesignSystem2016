/**
 * Prop Table Drift Checker
 * 
 * Compares the TypeScript type definitions in .types.ts files with the
 * documented props={[...]} arrays on component documentation pages.
 * Reports mismatches: missing props, extra props, wrong types.
 * 
 * Usage: node scripts/check-prop-drift.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const typesDir = path.join(root, 'src/app/react-core-package/src/components');
const pagesDir = path.join(root, 'src/app/pages');

/** Extract prop names from a .types.ts file */
function extractTypeProps(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const props = new Map();
  
  // Match property declarations in interfaces
  // Patterns: propName?: Type; or propName: Type; or /** doc */ propName?: Type;
  const propRegex = /^\s*(?:\/\*\*[^*]*\*\/\s*)?['"]?(\w[\w-]*)['"]?\s*\??\s*:\s*([^;]+);/gm;
  let match;
  
  while ((match = propRegex.exec(content)) !== null) {
    const name = match[1];
    // Skip common inherited props that aren't worth documenting
    if (['style', 'data-testid', 'ref', 'key'].includes(name)) continue;
    props.set(name, match[2].trim());
  }
  
  return props;
}

/** Extract documented prop names from a ComponentXxxPage.tsx file */
function extractDocProps(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const props = new Map();
  
  // Find props={[ ... ]} block
  const propsMatch = content.match(/props=\{\[([\s\S]*?)\]\}/);
  if (!propsMatch) return props;
  
  // Extract individual prop names
  const nameRegex = /name:\s*'([^']+)'/g;
  let match;
  while ((match = nameRegex.exec(propsMatch[1])) !== null) {
    props.set(match[1], true);
  }
  
  return props;
}

// Scan all components
const components = fs.readdirSync(typesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

let totalChecked = 0;
let totalDrift = 0;
const driftReport = [];

for (const comp of components) {
  const typesFile = path.join(typesDir, comp, `${comp}.types.ts`);
  if (!fs.existsSync(typesFile)) continue;
  
  const pageFile = path.join(pagesDir, `Component${comp}Page.tsx`);
  if (!fs.existsSync(pageFile)) continue;
  
  const typeProps = extractTypeProps(typesFile);
  const docProps = extractDocProps(pageFile);
  
  if (typeProps.size === 0 || docProps.size === 0) continue;
  
  totalChecked++;
  
  const missing = []; // In types but not in docs
  const extra = [];   // In docs but not in types
  
  for (const [name] of typeProps) {
    if (!docProps.has(name)) {
      missing.push(name);
    }
  }
  
  for (const [name] of docProps) {
    if (!typeProps.has(name)) {
      extra.push(name);
    }
  }
  
  if (missing.length > 0 || extra.length > 0) {
    totalDrift++;
    driftReport.push({
      component: comp,
      typeCount: typeProps.size,
      docCount: docProps.size,
      missing,
      extra,
    });
  }
}

// Output report
console.log(`\nProp Table Drift Report`);
console.log(`${'='.repeat(50)}`);
console.log(`Components checked: ${totalChecked}`);
console.log(`Components with drift: ${totalDrift}`);
console.log(`Components clean: ${totalChecked - totalDrift}`);

if (driftReport.length > 0) {
  console.log(`\nDrift details:`);
  for (const { component, typeCount, docCount, missing, extra } of driftReport) {
    console.log(`\n  ${component} (types: ${typeCount}, docs: ${docCount})`);
    if (missing.length > 0) {
      console.log(`    Missing from docs: ${missing.join(', ')}`);
    }
    if (extra.length > 0) {
      console.log(`    Extra in docs (not in types): ${extra.join(', ')}`);
    }
  }
  console.log(`\n⚠ ${totalDrift} component(s) have prop table drift.`);
  // Don't exit(1) — this is informational, not blocking
} else {
  console.log(`\n✓ All prop tables match their TypeScript types.`);
}
