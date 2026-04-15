/**
 * Content quality audit — compares each page's section richness against Button baseline.
 * Run: node scripts/content-quality-audit.mjs
 */
import { readFileSync, readdirSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';
const DIR = `${ROOT}/src/app/pages`;

function countMatches(content, pattern) {
  return (content.match(pattern) || []).length;
}

function audit(name, content) {
  const pgMatch = content.match(new RegExp(`function ${name}Playground[\\s\\S]*?^}`, 'gm'));
  const pg = pgMatch ? pgMatch[0] : '';
  
  return {
    name,
    whenToUseDo: countMatches(content, /text-green-600/g),
    whenToUseDont: countMatches(content, /text-red-600/g),
    doDontDoCards: countMatches(content, /border-2 border-green/g),
    doDontDontCards: countMatches(content, /border-2 border-red/g),
    relatedLinks: countMatches(content, /href="\/components\//g),
    changelogVersions: countMatches(content, /font-mono font-bold text-primary/g),
    researchCards: countMatches(content, /bg-blue-50 dark:bg-blue-900/g),
    playgroundStates: countMatches(pg, /useState/g),
    // Check if Do/Don't has live rendered previews (not just text)
    doDontHasPreview: content.includes('border-2 border-green') && 
      (countMatches(content.slice(content.indexOf('✓ Do'), content.indexOf('✗ Don') || content.length), /Preview|<input|<table|<label|<nav|<button|<select|<fieldset|<textarea|rounded-lg overflow/g) > 0),
  };
}

const files = readdirSync(DIR).filter(f => f.startsWith('Component') && f.endsWith('Page.tsx')).sort();

// Button baseline
const buttonContent = readFileSync(`${DIR}/ComponentButtonPage.tsx`, 'utf8');
const baseline = audit('Button', buttonContent);
console.log('=== BUTTON BASELINE ===');
console.log(`  When-to-use: ${baseline.whenToUseDo} Do / ${baseline.whenToUseDont} Dont`);
console.log(`  Do/Dont cards: ${baseline.doDontDoCards} Do / ${baseline.doDontDontCards} Dont`);
console.log(`  Related links: ${baseline.relatedLinks}`);
console.log(`  Changelog versions: ${baseline.changelogVersions}`);
console.log(`  Research cards: ${baseline.researchCards}`);
console.log(`  Playground states: ${baseline.playgroundStates}`);
console.log(`  Do/Dont has preview: ${baseline.doDontHasPreview}`);
console.log('');

// Audit all pages
const issues = [];
for (const file of files) {
  const name = file.replace('Component', '').replace('Page.tsx', '');
  if (name === 'Button') continue;
  const content = readFileSync(`${DIR}/${file}`, 'utf8');
  const a = audit(name, content);
  
  const problems = [];
  if (a.whenToUseDo < 3) problems.push(`wtu-do=${a.whenToUseDo}(<3)`);
  if (a.whenToUseDont < 3) problems.push(`wtu-dont=${a.whenToUseDont}(<3)`);
  if (a.doDontDoCards < 1) problems.push('no-do-card');
  if (a.doDontDontCards < 1) problems.push('no-dont-card');
  if (a.relatedLinks < 2) problems.push(`rel=${a.relatedLinks}(<2)`);
  if (a.changelogVersions < 2) problems.push(`cl=${a.changelogVersions}(<2)`);
  if (a.researchCards < 1) problems.push('no-research-card');
  if (a.playgroundStates < 2) problems.push(`pg=${a.playgroundStates}(<2)`);
  
  if (problems.length > 0) {
    issues.push({ name, problems });
  }
}

console.log(`=== CONTENT QUALITY ISSUES (${issues.length} pages below Button quality) ===`);
console.log('');

// Group by issue type
const byIssue = {};
for (const { name, problems } of issues) {
  for (const p of problems) {
    const key = p.split('=')[0].split('(')[0];
    if (!byIssue[key]) byIssue[key] = [];
    byIssue[key].push(name);
  }
  console.log(`  ${name}: ${problems.join(', ')}`);
}

console.log('');
console.log('=== SUMMARY BY ISSUE TYPE ===');
for (const [issue, names] of Object.entries(byIssue)) {
  console.log(`  ${issue}: ${names.length} pages`);
}
console.log('');
console.log(`Total pages with issues: ${issues.length}/76`);
console.log(`Pages at Button quality: ${76 - issues.length}/76`);
