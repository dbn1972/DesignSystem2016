#!/usr/bin/env node
/**
 * Adds code downloads section to a pattern page.
 * Usage: node scripts/add-code-downloads.mjs <file> <config.json>
 * config.json: { prefix, display, funcName, reactDesc, angularDesc, reactFile, angularFile, htmlFile, reactCode, angularCode, htmlCode }
 */
import fs from 'fs';

const file = process.argv[2];
const configFile = process.argv[3];
const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));

let content = fs.readFileSync(file, 'utf8');

// 1. Ensure React import exists
if (!content.match(/^import React/m)) {
  // Add React import at top
  content = `import React from "react";\n${content}`;
}

// 2. Ensure Download, Copy, Check icons are imported from lucide-react
const lucideMatch = content.match(/from ["']lucide-react["'];?\s*\n/);
if (lucideMatch) {
  const lucideImportStart = content.lastIndexOf('import', content.indexOf(lucideMatch[0]));
  const lucideImportEnd = content.indexOf(lucideMatch[0]) + lucideMatch[0].length;
  let lucideBlock = content.slice(lucideImportStart, lucideImportEnd);
  
  for (const icon of ['Download', 'Copy', 'Check']) {
    // Check if icon is already imported (as word boundary)
    const re = new RegExp(`\\b${icon}\\b`);
    if (!re.test(lucideBlock)) {
      // Add before the closing } or before "from"
      lucideBlock = lucideBlock.replace(/\}\s*from/, `${icon}, } from`);
    }
  }
  content = content.slice(0, lucideImportStart) + lucideBlock + content.slice(lucideImportEnd);
}

// 3. Find insertion point for <XxxCodeDownloads /> in JSX - before </main>
// We need to find the last </main> in the main component's return
const mainCloseRegex = /<\/main>/g;
let lastMainClose = null;
let match;
while ((match = mainCloseRegex.exec(content)) !== null) {
  lastMainClose = match;
}

if (lastMainClose) {
  const insertPos = lastMainClose.index;
  const codeDownloadJSX = `
        {/* Code Downloads */}
        <${config.funcName} />
      `;
  content = content.slice(0, insertPos) + codeDownloadJSX + content.slice(insertPos);
}

// 4. Find insertion point for code constants + function - before helper components or at end
// Look for patterns like "// ==========", or "function SomeHelper" after the main export
const mainExportEnd = content.search(/^(function\s+\w+|const\s+\w+\s*=)/m);

// Find the end of the main default function by looking for helper functions/components
// Strategy: find the last closing of the default function, then insert after it
// We'll insert before any helper function definitions at the bottom

// Find all "function" declarations that are NOT the main export
const lines = content.split('\n');
let insertLineIdx = lines.length; // default to end of file

// Look for pattern: after the main component closes, before helper functions
for (let i = lines.length - 1; i >= 0; i--) {
  const line = lines[i].trim();
  if (line.startsWith('function ') && !line.includes('export')) {
    insertLineIdx = i;
  } else if (line.startsWith('// =====')) {
    insertLineIdx = i;
  }
}

// Build the code constants and function
const codeSection = `
// ==================== CODE DOWNLOADS ====================

const ${config.prefix}_REACT_CODE = ${JSON.stringify(config.reactCode)};

const ${config.prefix}_ANGULAR_CODE = ${JSON.stringify(config.angularCode)};

const ${config.prefix}_HTML_CODE = ${JSON.stringify(config.htmlCode)};

function ${config.funcName}() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: '${config.reactDesc}', code: ${config.prefix}_REACT_CODE, filename: '${config.reactFile}' },
    { key: 'angular', title: 'Angular', desc: '${config.angularDesc}', code: ${config.prefix}_ANGULAR_CODE, filename: '${config.angularFile}' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: ${config.prefix}_HTML_CODE, filename: '${config.htmlFile}' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready ${config.display} implementations.</p>
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

lines.splice(insertLineIdx, 0, codeSection);
content = lines.join('\n');

fs.writeFileSync(file, content);
console.log(`✅ Updated ${file}`);
