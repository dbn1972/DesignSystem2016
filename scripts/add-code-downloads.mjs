#!/usr/bin/env node
/**
 * Script to add Code Downloads sections to pattern pages.
 * Usage: node scripts/add-code-downloads.mjs <PatternName>
 */

import fs from 'fs';
import path from 'path';

const patternName = process.argv[2];
if (!patternName) {
  console.error('Usage: node scripts/add-code-downloads.mjs <PatternName>');
  process.exit(1);
}

const filePath = path.join('src/app/pages', `${patternName}.tsx`);
if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf-8');

if (content.includes('code-downloads')) {
  console.log(`${patternName} already has code downloads. Skipping.`);
  process.exit(0);
}

// --- Detect React import style ---
const hasReactDefault = /import\s+React[\s,]/.test(content);
const hasUseStateImport = /import\s*\{[^}]*useState[^}]*\}\s*from\s*["']react["']/.test(content);
const useStateCall = hasReactDefault ? 'React.useState' : 'useState';

// If neither React nor useState is imported, add useState import
if (!hasReactDefault && !hasUseStateImport) {
  const firstImport = content.indexOf('import ');
  if (firstImport >= 0) {
    content = content.slice(0, firstImport) + 'import { useState } from "react";\n' + content.slice(firstImport);
  }
}

// --- Add lucide imports ---
const importLineRegex = /import\s*\{([^}]+)\}\s*from\s*["']lucide-react["'];/;
const importMatch = content.match(importLineRegex);
if (importMatch) {
  const existing = importMatch[1];
  const needed = [];
  if (!/\bDownload\b/.test(existing)) needed.push('Download');
  if (!/\bCopy\b/.test(existing)) needed.push('Copy');
  if (!/\bCheck\b/.test(existing)) needed.push('Check');
  if (needed.length > 0) {
    const newImports = existing.trimEnd() + ', ' + needed.join(', ');
    content = content.replace(importMatch[0], `import { ${newImports} } from "lucide-react";`);
  }
} else {
  // No lucide import, add one after first import
  const firstNewline = content.indexOf('\n');
  content = content.slice(0, firstNewline + 1) +
    'import { Download, Copy, Check } from "lucide-react";\n' +
    content.slice(firstNewline + 1);
}

// --- Derive names ---
const baseName = patternName.replace(/Patterns?$/, '');
const funcName = `${baseName}CodeDownloads`;
const kebab = baseName.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
const title = baseName.replace(/([A-Z])/g, ' $1').trim();
const REACT = `${baseName.toUpperCase()}_REACT_CODE`;
const ANGULAR = `${baseName.toUpperCase()}_ANGULAR_CODE`;
const HTML = `${baseName.toUpperCase()}_HTML_CODE`;

// --- Add nav link ---
// Find the last nav item before ].map
const navPatterns = [
  /(\{\s*id:\s*["']governance["'][^}]*\})\s*\]\s*\.map/,
  /(\{\s*id:\s*["']implementation["'][^}]*\})\s*\]\s*\.map/,
  /(\{\s*id:\s*["']accessibility["'][^}]*\})\s*\]\s*\.map/,
];
for (const navRegex of navPatterns) {
  const navMatch = content.match(navRegex);
  if (navMatch) {
    const idx = content.indexOf(navMatch[0]) + navMatch[1].length;
    content = content.slice(0, idx) +
      `,\n              { id: "code-downloads", label: "Code Downloads" }` +
      content.slice(idx);
    break;
  }
}

// --- Insert component call ---
let inserted = false;

// Pattern A: Before </aside> sibling (col-span layout)
const asideIdx = content.indexOf('<aside');
if (asideIdx > 0) {
  // Find the </div> just before <aside
  let i = asideIdx - 1;
  while (i > 0 && content.slice(i, i + 6) !== '</div>') i--;
  if (i > 0) {
    content = content.slice(0, i) + `            <${funcName} />\n          ` + content.slice(i);
    inserted = true;
  }
}

// Pattern B: Before </main>
if (!inserted) {
  const mainClose = content.lastIndexOf('</main>');
  if (mainClose > 0) {
    content = content.slice(0, mainClose) + `\n        <${funcName} />\n\n      ` + content.slice(mainClose);
    inserted = true;
  }
}

// Pattern C: Before footer
if (!inserted) {
  const footerIdx = content.lastIndexOf('{/* Footer */}');
  if (footerIdx > 0) {
    content = content.slice(0, footerIdx) + `<${funcName} />\n\n      ` + content.slice(footerIdx);
    inserted = true;
  }
}

if (!inserted) {
  console.error(`Could not find insertion point in ${patternName}`);
  process.exit(1);
}

// --- Append code section ---
const codeSection = `

// ==================== CODE DOWNLOADS ====================

const ${REACT} = \`import React, { useState } from 'react';

export default function ${baseName}Page() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/${kebab}', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: Date.now() }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch { setError('Something went wrong. Please try again.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">${title}</h1>
        <p className="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-xl font-bold">Success</h2>
            <p className="text-muted-foreground mt-2">Your request has been processed.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <button type="submit" disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">
              {loading ? 'Processing...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}\`;

const ${ANGULAR} = \`import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-${kebab}',
  standalone: true,
  imports: [CommonModule],
  template: \\\`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">${title}</h1>
        <p class="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
        <div *ngIf="submitted" class="text-center py-6">
          <h2 class="text-xl font-bold">Success</h2>
          <p class="text-muted-foreground mt-2">Your request has been processed.</p>
        </div>
        <form *ngIf="!submitted" (ngSubmit)="onSubmit()">
          <button type="submit" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">
            {{ loading ? 'Processing...' : 'Submit' }}
          </button>
        </form>
      </div>
    </div>
  \\\`
})
export class ${baseName}Component {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/${kebab}', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: Date.now() }),
      });
      if (!res.ok) throw new Error('Failed');
      this.submitted = true;
    } catch { this.error = 'Something went wrong.'; }
    finally { this.loading = false; }
  }
}\`;

const ${HTML} = \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    h1 { font-size: 1.5rem; font-weight: 700; color: #111; margin-bottom: 0.5rem; }
    .subtitle { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:hover { background: #004178; }
    .btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .success { text-align: center; padding: 2rem 0; display: none; }
    .success h2 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; }
    .success p { color: #6b7280; }
  </style>
</head>
<body>
  <div class="card">
    <h1>${title}</h1>
    <p class="subtitle">Government digital service pattern</p>
    <div id="error" class="error" role="alert"></div>
    <form id="mainForm" novalidate>
      <button type="submit" class="btn" id="submitBtn">Submit</button>
    </form>
    <div id="success" class="success">
      <h2>Success</h2>
      <p>Your request has been processed.</p>
    </div>
  </div>
  <script>
    document.getElementById('mainForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const err = document.getElementById('error');
      const btn = document.getElementById('submitBtn');
      err.style.display = 'none';
      btn.disabled = true; btn.textContent = 'Processing...';
      try {
        const res = await fetch('/api/${kebab}', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ timestamp: Date.now() }),
        });
        if (!res.ok) throw new Error('Failed');
        document.getElementById('mainForm').style.display = 'none';
        document.getElementById('success').style.display = 'block';
      } catch { err.textContent = 'Something went wrong.'; err.style.display = 'block'; }
      finally { btn.disabled = false; btn.textContent = 'Submit'; }
    });
  </script>
</body>
</html>\`;

function ${funcName}() {
  const [copiedId, setCopiedId] = ${useStateCall}<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: ${REACT}, filename: '${baseName}Page.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: ${ANGULAR}, filename: '${kebab}.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: ${HTML}, filename: '${kebab}.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready ${title} implementations.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <div key={lane.key} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-1 bg-[#005196]" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="inline-flex rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Framework lane</span>
                  <h3 className="text-lg font-bold text-foreground mt-2">{lane.title}</h3>
                  <p className="text-sm text-muted-foreground">{lane.desc}</p>
                </div>
                <button onClick={() => downloadCode(lane.code, lane.filename)} aria-label={\`Download \${lane.title} code\`} className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-[#005196] hover:bg-[#005196] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]">
                  <Download size={16} />
                </button>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">{lane.filename}</span>
                  <button onClick={() => copyToClipboard(lane.code, lane.key)} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
                    {copiedId === lane.key ? <Check size={12} /> : <Copy size={12} />}
                    {copiedId === lane.key ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
                  <pre className="font-mono leading-5 whitespace-pre-wrap"><code>{lane.code.slice(0, 800)}...</code></pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
`;

content = content.trimEnd() + codeSection;

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`✅ Added code downloads to ${patternName}`);
