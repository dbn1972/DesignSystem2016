/**
 * Full content quality audit of all 77 component pages.
 * Checks every section's content depth against Button baseline.
 * Run: node scripts/full-quality-audit.mjs
 */
import { readFileSync, readdirSync } from 'fs';
const DIR = '/Users/debabratanayak_1/Documents/DesignSystem_211/src/app/pages';

function count(s, re) { return (s.match(re) || []).length; }

function audit(name, c) {
  const pg = (c.match(new RegExp(`function ${name}Playground[\\s\\S]*?^}`, 'gm')) || [''])[0];
  return {
    // Structure
    hasPreview: c.includes('preview={'),
    hasProps: c.includes('props={[') || c.includes('props={\n'),
    hasExamples: c.includes('examples={[') || c.includes('examples={\n'),
    hasReactCode: c.includes('reactCode={'),
    hasAngularCode: c.includes('angularCode={'),
    hasWebCode: c.includes('webComponentsCode={'),
    hasComparisons: c.includes('comparisons={[') || c.includes('comparisons={\n'),
    hasAccessibility: c.includes('accessibility={'),
    hasTokens: c.includes('tokens={'),
    hasUseCases: c.includes('useCases={[') || c.includes('useCases={\n'),
    hasAdditionalContent: c.includes('additionalContent={'),
    // Content depth
    whenToUseDo: count(c, /text-green-600/g),
    whenToUseDont: count(c, /text-red-600/g),
    doDontDoCards: count(c, /border-2 border-green/g),
    doDontDontCards: count(c, /border-2 border-red/g),
    relatedLinks: count(c, /href="\/components\//g),
    changelogVersions: count(c, /version: 'v\d/g) + count(c, />v\d+\.\d+\.\d+</g),
    researchCards: count(c, /bg-blue-50 dark:bg-blue-900/g),
    playgroundStates: count(pg, /useState/g),
    // Quality flags
    hasEmojiPlaceholder: c.includes('🧩'),
    hasGenericPreview: c.includes('component in its default state'),
    hasGenericIcon: c.includes('inline-flex items-center justify-center w-16 h-16 rounded-2xl'),
    // Section headings (strict)
    hasWhenToUseHeading: c.includes('When to use this component'),
    hasDoDontHeading: c.includes('✓ Do'),
    hasRelatedHeading: />\s*Related Components\s*</.test(c),
    hasChangelogHeading: />\s*Changelog\s*</.test(c),
    hasResearchHeading: c.includes('Research on this component'),
  };
}

const files = readdirSync(DIR).filter(f => f.startsWith('Component') && f.endsWith('Page.tsx')).sort();

// Button baseline
const bContent = readFileSync(`${DIR}/ComponentButtonPage.tsx`, 'utf8');
const baseline = audit('Button', bContent);

console.log('╔══════════════════════════════════════════════════════════════════╗');
console.log('║           COMPONENT PAGE CONTENT QUALITY AUDIT                  ║');
console.log('║           Baseline: Button component page                       ║');
console.log('╚══════════════════════════════════════════════════════════════════╝');
console.log('');
console.log('BUTTON BASELINE:');
console.log(`  Structure: preview=${baseline.hasPreview} props=${baseline.hasProps} examples=${baseline.hasExamples}`);
console.log(`  Code: react=${baseline.hasReactCode} angular=${baseline.hasAngularCode} web=${baseline.hasWebCode}`);
console.log(`  Sections: comparisons=${baseline.hasComparisons} a11y=${baseline.hasAccessibility} tokens=${baseline.hasTokens}`);
console.log(`  Content: useCases=${baseline.hasUseCases} additionalContent=${baseline.hasAdditionalContent}`);
console.log(`  Depth: wtu=${baseline.whenToUseDo}/${baseline.whenToUseDont} dd=${baseline.doDontDoCards}/${baseline.doDontDontCards} rel=${baseline.relatedLinks} cl=${baseline.changelogVersions} res=${baseline.researchCards} pg=${baseline.playgroundStates}`);
console.log('');

// Categorize all pages
const perfect = [];
const good = [];
const needsWork = [];
const allIssues = {};

for (const file of files) {
  const name = file.replace('Component', '').replace('Page.tsx', '');
  const c = readFileSync(`${DIR}/${file}`, 'utf8');
  const a = audit(name, c);
  
  const issues = [];
  
  // Structure checks
  if (!a.hasPreview) issues.push('NO preview');
  if (!a.hasReactCode) issues.push('NO reactCode');
  if (!a.hasAngularCode) issues.push('NO angularCode');
  if (!a.hasWebCode) issues.push('NO webCode');
  if (!a.hasAccessibility) issues.push('NO accessibility');
  
  // Section heading checks
  if (!a.hasWhenToUseHeading) issues.push('NO when-to-use');
  if (!a.hasDoDontHeading) issues.push('NO do-dont');
  if (!a.hasRelatedHeading) issues.push('NO related');
  if (!a.hasChangelogHeading) issues.push('NO changelog');
  if (!a.hasResearchHeading) issues.push('NO research');
  
  // Quality flags
  if (a.hasEmojiPlaceholder) issues.push('HAS emoji 🧩');
  if (a.hasGenericPreview) issues.push('HAS generic preview text');
  if (a.hasGenericIcon) issues.push('HAS generic icon placeholder');
  
  // Content depth
  if (a.whenToUseDo < 3) issues.push(`wtu-do=${a.whenToUseDo}`);
  if (a.whenToUseDont < 3) issues.push(`wtu-dont=${a.whenToUseDont}`);
  if (a.doDontDoCards < 1) issues.push('dd-do=0');
  if (a.doDontDontCards < 1) issues.push('dd-dont=0');
  if (a.relatedLinks < 2) issues.push(`rel=${a.relatedLinks}`);
  if (a.changelogVersions < 2) issues.push(`cl=${a.changelogVersions}`);
  if (a.researchCards < 1) issues.push(`res=${a.researchCards}`);
  if (a.playgroundStates < 2) issues.push(`pg=${a.playgroundStates}`);
  
  if (issues.length === 0) {
    perfect.push(name);
  } else if (issues.every(i => i.startsWith('cl=') || i.startsWith('pg='))) {
    good.push({ name, issues });
  } else {
    needsWork.push({ name, issues });
  }
  
  for (const i of issues) {
    const key = i.split('=')[0];
    if (!allIssues[key]) allIssues[key] = [];
    allIssues[key].push(name);
  }
}

console.log(`\n${'═'.repeat(66)}`);
console.log(`PERFECT (matches Button on all checks): ${perfect.length} pages`);
console.log(`${'═'.repeat(66)}`);
for (const n of perfect) console.log(`  ✅ ${n}`);

console.log(`\n${'═'.repeat(66)}`);
console.log(`GOOD (only minor depth gaps — changelog or playground): ${good.length} pages`);
console.log(`${'═'.repeat(66)}`);
for (const { name, issues } of good) console.log(`  🟡 ${name}: ${issues.join(', ')}`);

console.log(`\n${'═'.repeat(66)}`);
console.log(`NEEDS WORK (missing sections or content): ${needsWork.length} pages`);
console.log(`${'═'.repeat(66)}`);
for (const { name, issues } of needsWork) console.log(`  ❌ ${name}: ${issues.join(', ')}`);

console.log(`\n${'═'.repeat(66)}`);
console.log('ISSUE SUMMARY');
console.log(`${'═'.repeat(66)}`);
for (const [issue, names] of Object.entries(allIssues).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`  ${issue}: ${names.length} pages`);
}

console.log(`\n${'═'.repeat(66)}`);
console.log('TOTALS');
console.log(`${'═'.repeat(66)}`);
console.log(`  Perfect: ${perfect.length}/77`);
console.log(`  Good: ${good.length}/77`);
console.log(`  Needs work: ${needsWork.length}/77`);
