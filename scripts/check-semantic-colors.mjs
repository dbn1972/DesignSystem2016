#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const BASELINE_PATH = path.join(ROOT, 'qa', 'semantic-color-baseline.json');

const UPDATE_BASELINE = process.argv.includes('--update-baseline');

const SCAN_DIRS = [
  'src/app/components',
  'src/app/pages',
  'src/styles',
];

const IGNORE_SEGMENTS = [
  `${path.sep}node_modules${path.sep}`,
  `${path.sep}dist${path.sep}`,
  `${path.sep}angular-core-package${path.sep}`,
  `${path.sep}react-patterns-package${path.sep}`,
  `${path.sep}styles-package${path.sep}`,
  `${path.sep}web-components-package${path.sep}`,
  `${path.sep}tokens-package${path.sep}`,
  `${path.sep}__tests__${path.sep}`,
];

const EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.css']);

const COLOR_SCALE = '(?:50|100|200|300|400|500|600|700|800|900|950)';
const PALETTES = '(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)';

const RULES = [
  {
    name: 'tailwind-palette-utility',
    regex: new RegExp(String.raw`\b(?:bg|text|border|ring|from|to|via|stroke|fill)-${PALETTES}-${COLOR_SCALE}\b`, 'g'),
    hint: 'Use semantic token classes (e.g. bg-background, text-foreground, border-border) instead of palette classes.',
  },
  {
    name: 'hardcoded-hex-class',
    regex: /\[[#](?:[0-9a-fA-F]{3,8})\]/g,
    hint: 'Use token variables or semantic classes instead of hardcoded hex classes.',
  },
  {
    name: 'inline-hex-style',
    regex: /\b(?:color|background|backgroundColor|borderColor)\s*:\s*['"]#(?:[0-9a-fA-F]{3,8})['"]/g,
    hint: 'Use CSS variables/tokens in inline styles instead of hex literals.',
  },
  {
    name: 'literal-white-black',
    regex: /\b(?:text|bg|border)-(?:white|black)\b/g,
    hint: 'Use semantic classes (foreground/background/border tokens) instead of white/black literals.',
  },
];

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (IGNORE_SEGMENTS.some((seg) => full.includes(seg))) continue;
    if (entry.isDirectory()) {
      walk(full, acc);
      continue;
    }
    if (EXTENSIONS.has(path.extname(entry.name))) {
      acc.push(full);
    }
  }
  return acc;
}

function lineNumberAt(content, index) {
  let line = 1;
  for (let i = 0; i < index; i += 1) {
    if (content.charCodeAt(i) === 10) line += 1;
  }
  return line;
}

function collectViolations() {
  const files = SCAN_DIRS.flatMap((d) => walk(path.join(ROOT, d)));
  const violations = [];

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const rel = path.relative(ROOT, file);

    for (const rule of RULES) {
      rule.regex.lastIndex = 0;
      for (const match of raw.matchAll(rule.regex)) {
        const value = match[0];
        const index = match.index ?? 0;
        const line = lineNumberAt(raw, index);
        violations.push({
          file: rel,
          line,
          rule: rule.name,
          value,
          hint: rule.hint,
        });
      }
    }
  }

  violations.sort((a, b) =>
    a.file.localeCompare(b.file) || a.line - b.line || a.rule.localeCompare(b.rule) || a.value.localeCompare(b.value)
  );

  return violations;
}

function bucketKey(v) {
  return `${v.file}::${v.rule}::${v.value}`;
}

function toCountMap(items) {
  const map = new Map();
  for (const item of items) {
    const key = bucketKey(item);
    map.set(key, (map.get(key) || 0) + 1);
  }
  return map;
}

const current = collectViolations();

if (UPDATE_BASELINE) {
  fs.mkdirSync(path.dirname(BASELINE_PATH), { recursive: true });
  fs.writeFileSync(BASELINE_PATH, JSON.stringify({ generatedAt: new Date().toISOString(), violations: current }, null, 2) + '\n');
  console.log(`Updated baseline with ${current.length} violations at ${path.relative(ROOT, BASELINE_PATH)}`);
  process.exit(0);
}

if (!fs.existsSync(BASELINE_PATH)) {
  console.error('No semantic color baseline found. Run: npm run check:semantic-colors:update');
  process.exit(1);
}

const baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8'));
const baselineMap = toCountMap(baseline.violations || []);
const currentMap = toCountMap(current);

const regressions = [];
for (const [k, count] of currentMap.entries()) {
  const baselineCount = baselineMap.get(k) || 0;
  if (count > baselineCount) {
    const [file, rule, value] = k.split('::');
    regressions.push({ file, rule, value, count, baselineCount });
  }
}

if (regressions.length > 0) {
  const totalNew = regressions.reduce((sum, r) => sum + (r.count - r.baselineCount), 0);
  console.error(`Semantic color check failed: ${totalNew} new hardcoded-color violations found across ${regressions.length} buckets.`);
  for (const v of regressions.slice(0, 120)) {
    console.error(`- ${v.file} [${v.rule}] ${v.value} (+${v.count - v.baselineCount})`);
  }
  if (regressions.length > 120) {
    console.error(`...and ${regressions.length - 120} more`);
  }
  console.error('\nUse semantic token classes/variables, then rerun.');
  process.exit(1);
}

const reduced = (baseline.violations?.length || 0) - current.length;
console.log(`Semantic color check passed. Baseline: ${baseline.violations?.length || 0}, Current: ${current.length}, Reduced: ${reduced}`);
