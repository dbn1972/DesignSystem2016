#!/usr/bin/env node
/**
 * Fixes common accessibility violations in pattern pages.
 * Strategy: 
 * - All h4 that appear in JSX (not in template strings) become h3
 * - All h5 become h4, h6 become h5
 * - Add aria-label to bare inputs/selects/textareas
 * - Add aria-label to icon-only buttons
 */
import fs from 'fs';
import path from 'path';

const name = process.argv[2];
if (!name) { console.error('Usage: node scripts/fix-a11y.mjs <PatternName>'); process.exit(1); }

const filePath = path.join('src/app/pages', name + '.tsx');
if (!fs.existsSync(filePath)) { console.error('Not found: ' + filePath); process.exit(1); }

let content = fs.readFileSync(filePath, 'utf-8');
let fixes = 0;

// Split content into JSX parts and template literal parts
// We only want to fix headings in JSX, not inside code string constants
const parts = [];
let inTemplateLiteral = false;
let current = '';
const templateStartRegex = /(?:const\s+\w+\s*=\s*`|= `)/;

// Simpler approach: find code constant blocks (between backtick strings) and skip them
// Template literals for code constants start with "const XXX_CODE = `" and end with "`;"
const codeBlockRegex = /const\s+\w+(?:_REACT_CODE|_ANGULAR_CODE|_HTML_CODE|_CODE)\s*=\s*`[\s\S]*?`;/g;

// Extract code blocks, replace with placeholders, fix JSX, then restore
const codeBlocks = [];
let jsxContent = content.replace(codeBlockRegex, (match) => {
  const idx = codeBlocks.length;
  codeBlocks.push(match);
  return '___CODE_BLOCK_' + idx + '___';
});

// --- Fix 1: heading-order in JSX ---
// Replace h4 -> h3, h5 -> h4, h6 -> h5 in JSX
const h4Count = (jsxContent.match(/<h4[\s>]/g) || []).length;
const h5Count = (jsxContent.match(/<h5[\s>]/g) || []).length;
const h6Count = (jsxContent.match(/<h6[\s>]/g) || []).length;

if (h4Count > 0) {
  jsxContent = jsxContent.replace(/<h4(\s)/g, '<h3$1');
  jsxContent = jsxContent.replace(/<h4>/g, '<h3>');
  jsxContent = jsxContent.replace(/<\/h4>/g, '</h3>');
  fixes += h4Count;
}
if (h5Count > 0) {
  jsxContent = jsxContent.replace(/<h5(\s)/g, '<h4$1');
  jsxContent = jsxContent.replace(/<h5>/g, '<h4>');
  jsxContent = jsxContent.replace(/<\/h5>/g, '</h4>');
  fixes += h5Count;
}
if (h6Count > 0) {
  jsxContent = jsxContent.replace(/<h6(\s)/g, '<h5$1');
  jsxContent = jsxContent.replace(/<h6>/g, '<h5>');
  jsxContent = jsxContent.replace(/<\/h6>/g, '</h5>');
  fixes += h6Count;
}

// --- Fix 2: label - add aria-label to form elements ---
// Match <input that doesn't have aria-label, aria-labelledby, or id with a matching label
jsxContent = jsxContent.replace(/<input\s+((?:(?!aria-label|aria-labelledby)[^>])*?)(\s*\/?>)/g, (match, attrs, close) => {
  if (/aria-label/.test(match)) return match;
  // Check if there's a wrapping <label> nearby (within 3 lines before)
  const placeholderMatch = attrs.match(/placeholder=["'{]([^"'}]+)["'}]/);
  const typeMatch = attrs.match(/type=["'](\w+)["']/);
  const idMatch = attrs.match(/id=["'](\w+)["']/);
  
  // Skip hidden/submit/checkbox/radio that typically don't need standalone labels
  const type = typeMatch ? typeMatch[1] : 'text';
  if (type === 'hidden' || type === 'submit') return match;
  
  let label = placeholderMatch ? placeholderMatch[1] :
              idMatch ? idMatch[1].replace(/([A-Z])/g, ' $1').trim() :
              type === 'checkbox' ? 'Checkbox' :
              type === 'radio' ? 'Radio option' :
              type + ' input';
  
  fixes++;
  return '<input aria-label="' + label + '" ' + attrs + close;
});

// Fix <select without aria-label
jsxContent = jsxContent.replace(/<select\s+((?:(?!aria-label|aria-labelledby)[^>])*?)>/g, (match, attrs) => {
  if (/aria-label/.test(match)) return match;
  const idMatch = attrs.match(/id=["'](\w+)["']/);
  let label = idMatch ? idMatch[1].replace(/([A-Z])/g, ' $1').trim() : 'Select option';
  fixes++;
  return '<select aria-label="' + label + '" ' + attrs + '>';
});

// Fix <textarea without aria-label
jsxContent = jsxContent.replace(/<textarea\s+((?:(?!aria-label|aria-labelledby)[^>])*?)>/g, (match, attrs) => {
  if (/aria-label/.test(match)) return match;
  const placeholderMatch = attrs.match(/placeholder=["'{]([^"'}]+)["'}]/);
  const idMatch = attrs.match(/id=["'](\w+)["']/);
  let label = placeholderMatch ? placeholderMatch[1] :
              idMatch ? idMatch[1].replace(/([A-Z])/g, ' $1').trim() : 'Text input';
  fixes++;
  return '<textarea aria-label="' + label + '" ' + attrs + '>';
});

// --- Fix 3: button-name ---
// Find buttons with only icon children and no aria-label
jsxContent = jsxContent.replace(/<button\s+((?:(?!aria-label)[^>])*?)>\s*(\{[^}]*\}|\<\w+[^/]*\/\>)\s*<\/button>/g, (match, attrs, inner) => {
  if (/aria-label/.test(match)) return match;
  if (/>[^<]*\w[^<]*</.test(match)) return match; // Has text content
  let label = 'Action';
  if (/close|dismiss/i.test(attrs)) label = 'Close';
  else if (/delete|remove/i.test(attrs)) label = 'Delete';
  else if (/edit/i.test(attrs)) label = 'Edit';
  else if (/search/i.test(attrs)) label = 'Search';
  else if (/filter/i.test(attrs)) label = 'Filter';
  else if (/sort/i.test(attrs)) label = 'Sort';
  else if (/expand|collapse/i.test(attrs)) label = 'Toggle';
  fixes++;
  return '<button aria-label="' + label + '" ' + attrs + '>' + inner + '</button>';
});

// Restore code blocks
let finalContent = jsxContent;
codeBlocks.forEach((block, idx) => {
  finalContent = finalContent.replace('___CODE_BLOCK_' + idx + '___', block);
});

fs.writeFileSync(filePath, finalContent, 'utf-8');
console.log(name + ': ' + fixes + ' fixes');
