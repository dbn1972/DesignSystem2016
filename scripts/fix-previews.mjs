/**
 * Replaces generic placeholder previews with actual component Preview renderings.
 * Run: node scripts/fix-previews.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

// For pages without a Preview component, use inline JSX
const INLINE_PREVIEWS = {
  ApplicationTracker: '<div className="w-full max-w-md"><div className="flex items-center gap-4 mb-4"><div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 text-sm font-bold">✓</div><div className="flex-1 h-1 bg-green-500 rounded" /><div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 text-sm font-bold">✓</div><div className="flex-1 h-1 bg-yellow-400 rounded" /><div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold">⏳</div><div className="flex-1 h-1 bg-muted rounded" /><div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground text-sm font-bold">4</div></div><div className="flex justify-between text-xs text-muted-foreground"><span>Submitted</span><span>Verified</span><span>Processing</span><span>Complete</span></div></div>',
  ChartLibrary: '<div className="w-full max-w-md"><div className="flex items-end gap-2 h-32"><div className="flex-1 bg-[#005196] rounded-t" style={{height:"80%"}} /><div className="flex-1 bg-[#005196]/80 rounded-t" style={{height:"60%"}} /><div className="flex-1 bg-[#005196]/60 rounded-t" style={{height:"90%"}} /><div className="flex-1 bg-[#005196]/40 rounded-t" style={{height:"45%"}} /><div className="flex-1 bg-[#005196]/70 rounded-t" style={{height:"70%"}} /></div><div className="flex justify-between text-xs text-muted-foreground mt-2"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span></div></div>',
  List: '<div className="w-full max-w-sm border border-border rounded-lg overflow-hidden"><div className="flex items-center gap-3 px-4 py-3 border-b border-border"><span className="w-2 h-2 rounded-full bg-green-500" /><span className="text-sm text-foreground">Aadhaar Card</span><span className="ml-auto text-xs text-green-600">Verified</span></div><div className="flex items-center gap-3 px-4 py-3 border-b border-border"><span className="w-2 h-2 rounded-full bg-green-500" /><span className="text-sm text-foreground">Address Proof</span><span className="ml-auto text-xs text-green-600">Verified</span></div><div className="flex items-center gap-3 px-4 py-3"><span className="w-2 h-2 rounded-full bg-yellow-500" /><span className="text-sm text-foreground">Photo</span><span className="ml-auto text-xs text-yellow-600">Pending</span></div></div>',
};

const GENERIC_PATTERN = /      preview=\{\n        <div className="text-center space-y-3">\n          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-\[#005196\]\/10 text-\[#005196\] text-2xl font-bold">\w{2}<\/div>\n          <p className="text-sm text-muted-foreground">\w+ component in its default state<\/p>\n        <\/div>\n      \}/;

let updated = 0;
let skipped = 0;

const files = readFileSync('/dev/stdin', 'utf8').trim().split('\n').filter(Boolean);

// Process all component pages
import { readdirSync } from 'fs';
const pages = readdirSync(`${ROOT}/src/app/pages`).filter(f => f.startsWith('Component') && f.endsWith('Page.tsx'));

for (const file of pages) {
  const name = file.replace('Component', '').replace('Page.tsx', '');
  const filePath = `${ROOT}/src/app/pages/${file}`;
  let content = readFileSync(filePath, 'utf8');

  // Check if it has the generic placeholder
  if (!content.includes('inline-flex items-center justify-center w-16 h-16 rounded-2xl')) {
    continue;
  }

  // Determine the replacement
  let replacement;
  if (INLINE_PREVIEWS[name]) {
    replacement = `      preview={\n        ${INLINE_PREVIEWS[name]}\n      }`;
  } else if (content.includes(`${name}Preview`)) {
    // Use the existing Preview component
    replacement = `      preview={\n        <div className="w-full max-w-2xl">\n          <${name}Preview />\n        </div>\n      }`;
  } else {
    console.log(`SKIP: ${name} — no Preview component and no inline preview defined`);
    skipped++;
    continue;
  }

  // Find and replace the generic placeholder
  // The pattern is multi-line, so we need to match it carefully
  const genericStart = '      preview={\n        <div className="text-center space-y-3">';
  const genericEnd = '      }';
  
  const startIdx = content.indexOf(genericStart);
  if (startIdx === -1) {
    // Try single-line variant
    const altStart = content.indexOf('preview={\n        <div className="text-center space-y-3">');
    if (altStart === -1) {
      console.log(`SKIP: ${name} — can't find generic preview pattern`);
      skipped++;
      continue;
    }
  }

  // Use a regex to match the full preview block
  const regex = /preview=\{\s*<div className="text-center space-y-3">\s*<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-\[#005196\]\/10 text-\[#005196\] text-2xl font-bold">\w{2}<\/div>\s*<p className="text-sm text-muted-foreground">\w[\w\s]* component in its default state<\/p>\s*<\/div>\s*\}/;
  
  if (regex.test(content)) {
    content = content.replace(regex, replacement.trim());
    writeFileSync(filePath, content);
    console.log(`UPDATED: ${name}`);
    updated++;
  } else {
    console.log(`SKIP: ${name} — regex didn't match`);
    skipped++;
  }
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped`);
