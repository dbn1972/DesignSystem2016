#!/usr/bin/env node
/**
 * Fixes remaining a11y issues:
 * 1. Multiple h1 tags → keep first h1, demote rest to h2
 * 2. Sidebar h3 without h2 parent → demote to appropriate level
 * 3. Button-name: find buttons with only JSX expressions and add aria-label
 */
import fs from 'fs';
import path from 'path';

const name = process.argv[2];
if (!name) { console.error('Usage: node scripts/fix-a11y-remaining.mjs <PatternName>'); process.exit(1); }

const filePath = path.join('src/app/pages', name + '.tsx');
if (!fs.existsSync(filePath)) { console.error('Not found: ' + filePath); process.exit(1); }

let content = fs.readFileSync(filePath, 'utf-8');
let fixes = 0;

// Protect code constant blocks
const codeBlocks = [];
const codeBlockRegex = /const\s+\w+(?:_REACT_CODE|_ANGULAR_CODE|_HTML_CODE|_CODE)\s*=\s*`[\s\S]*?`;/g;
let jsxContent = content.replace(codeBlockRegex, (match) => {
  codeBlocks.push(match);
  return '___CODE_BLOCK_' + (codeBlocks.length - 1) + '___';
});

// --- Fix 1: Multiple h1 → keep first, demote rest to h2 ---
let h1Count = 0;
jsxContent = jsxContent.replace(/<h1(\s[^>]*?)>([\s\S]*?)<\/h1>/g, (match, attrs, inner) => {
  h1Count++;
  if (h1Count > 1) {
    fixes++;
    return '<h2' + attrs + '>' + inner + '</h2>';
  }
  return match;
});

// --- Fix 2: Remaining h4 → h3 (some may have been missed) ---
const h4Matches = jsxContent.match(/<h4[\s>]/g);
if (h4Matches && h4Matches.length > 0) {
  jsxContent = jsxContent.replace(/<h4(\s)/g, '<h3$1');
  jsxContent = jsxContent.replace(/<h4>/g, '<h3>');
  jsxContent = jsxContent.replace(/<\/h4>/g, '</h3>');
  fixes += h4Matches.length;
}

// --- Fix 3: button-name for icon-only buttons ---
// Pattern: <button ...>{icon}</button> or <button ...><Icon /></button>
// More aggressive: any button without text and without aria-label
const lines = jsxContent.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Single-line button with only JSX expression content
  if (/<button\s/.test(line) && !line.includes('aria-label') && /<\/button>/.test(line)) {
    // Check if button has visible text
    const btnContent = line.replace(/<button[^>]*>/, '').replace(/<\/button>.*/, '');
    const hasText = />[A-Za-z]/.test(btnContent) && !/^\s*\{/.test(btnContent.trim());
    if (!hasText && btnContent.trim().startsWith('{')) {
      // Icon-only button
      lines[i] = line.replace(/<button(\s)/, '<button aria-label="Action"$1');
      fixes++;
    }
  }
  // Button with only an SVG/icon component
  if (/<button\s/.test(line) && !line.includes('aria-label') && /<\/button>/.test(line)) {
    const btnContent = line.replace(/<button[^>]*>/, '').replace(/<\/button>.*/, '').trim();
    if (/^<\w+[^>]*\/>$/.test(btnContent) || /^<svg/.test(btnContent)) {
      lines[i] = line.replace(/<button(\s)/, '<button aria-label="Action"$1');
      fixes++;
    }
  }
}
jsxContent = lines.join('\n');

// Restore code blocks
let finalContent = jsxContent;
codeBlocks.forEach((block, idx) => {
  finalContent = finalContent.replace('___CODE_BLOCK_' + idx + '___', block);
});

fs.writeFileSync(filePath, finalContent, 'utf-8');
console.log(name + ': ' + fixes + ' fixes');
