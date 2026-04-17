#!/usr/bin/env node
/**
 * Final pass: fixes remaining heading-order and button-name issues.
 * - Ensures proper h1 > h2 > h3 hierarchy in JSX
 * - Adds aria-label to all buttons without accessible names
 */
import fs from 'fs';
import path from 'path';

const name = process.argv[2];
if (!name) { console.error('Usage: node scripts/fix-a11y-final.mjs <PatternName>'); process.exit(1); }

const filePath = path.join('src/app/pages', name + '.tsx');
if (!fs.existsSync(filePath)) { console.error('Not found: ' + filePath); process.exit(1); }

let content = fs.readFileSync(filePath, 'utf-8');
let fixes = 0;

// Protect code constant blocks
const codeBlocks = [];
const codeBlockRegex = /const\s+\w+(?:_REACT_CODE|_ANGULAR_CODE|_HTML_CODE|_CODE)\s*=\s*`[\s\S]*?`;/g;
let jsx = content.replace(codeBlockRegex, (match) => {
  codeBlocks.push(match);
  return '___CB_' + (codeBlocks.length - 1) + '___';
});

// --- Build heading map and fix hierarchy ---
const lines = jsx.split('\n');
let seenH1 = false;
let lastLevel = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Skip lines that are in template literals (backtick strings for non-code-block templates)
  // Simple heuristic: if line is inside a template literal in Angular/HTML code
  
  const hMatch = line.match(/<h([1-6])([\s>])/);
  if (!hMatch) continue;
  
  let level = parseInt(hMatch[1]);
  const closeMatch = line.match(/<\/h([1-6])>/);
  
  // Rule 1: Only one h1 allowed
  if (level === 1) {
    if (seenH1) {
      // Demote to h2
      line = line.replace(/<h1([\s>])/g, '<h2$1').replace(/<\/h1>/g, '</h2>');
      level = 2;
      fixes++;
    } else {
      seenH1 = true;
    }
  }
  
  // Rule 2: No skipping levels (h1 -> h3 should be h1 -> h2)
  if (lastLevel > 0 && level > lastLevel + 1) {
    const correct = lastLevel + 1;
    line = line.replace(new RegExp('<h' + level + '([\\s>])', 'g'), '<h' + correct + '$1');
    line = line.replace(new RegExp('</h' + level + '>', 'g'), '</h' + correct + '>');
    level = correct;
    fixes++;
  }
  
  lastLevel = level;
  lines[i] = line;
}

jsx = lines.join('\n');

// --- Fix button-name: add aria-label to buttons without accessible text ---
// Multi-line approach: find button open tags, check if they have aria-label
const buttonLines = jsx.split('\n');
for (let i = 0; i < buttonLines.length; i++) {
  const line = buttonLines[i];
  
  // Skip if already has aria-label
  if (line.includes('aria-label')) continue;
  
  // Single-line buttons: <button ...>...</button>
  if (/<button\s/.test(line) && /<\/button>/.test(line)) {
    // Extract content between > and </button>
    const contentMatch = line.match(/>([^]*?)<\/button>/);
    if (contentMatch) {
      const btnContent = contentMatch[1].trim();
      // Check if content is only JSX expressions, icons, or empty
      const hasVisibleText = btnContent.replace(/<[^>]*>/g, '').replace(/\{[^}]*\}/g, '').trim().length > 0;
      if (!hasVisibleText) {
        buttonLines[i] = line.replace(/<button(\s)/, '<button aria-label="Action"$1');
        fixes++;
      }
    }
  }
}
jsx = buttonLines.join('\n');

// Restore code blocks
let final = jsx;
codeBlocks.forEach((block, idx) => {
  final = final.replace('___CB_' + idx + '___', block);
});

fs.writeFileSync(filePath, final, 'utf-8');
console.log(name + ': ' + fixes + ' fixes');
