// Batch code downloads inserter for pattern pages
import { readFileSync, writeFileSync } from 'fs';

const PAGES_DIR = 'src/app/pages';

function makeCodeDownloadsSection(constPrefix, reactFilename, angularFilename, htmlFilename, descText) {
  return `// ==================== CODE DOWNLOADS SECTION ====================

function CodeDownloadsSection() {
  const [copiedId, setCopiedId] = React.useState(null);
  const copyToClipboard = (code, id) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code, filename) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: ${constPrefix}_REACT_CODE, filename: '${reactFilename}' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: ${constPrefix}_ANGULAR_CODE, filename: '${angularFilename}' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: ${constPrefix}_HTML_CODE, filename: '${htmlFilename}' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">${descText}</p>
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
}

function insertCodeDownloads(filename, codeConstants, sectionFn) {
  const filepath = `${PAGES_DIR}/${filename}`;
  let content = readFileSync(filepath, 'utf-8');
  
  // Check if already has code downloads
  if (content.includes('code-downloads')) {
    console.log(`SKIP: ${filename} already has code downloads`);
    return;
  }
  
  // Add React import if missing
  if (!content.includes('import React')) {
    content = content.replace(
      /^(import .* from "react-router";)/m,
      'import React from "react";\n$1'
    );
  }
  
  // Add Download, Copy to lucide imports if missing
  if (!content.includes('Download')) {
    content = content.replace(
      /} from "lucide-react";/,
      ', Download, Copy } from "lucide-react";'
    );
  }
  
  // Add Code Downloads to nav
  content = content.replace(
    /\{ id: "implementation", label: "Implementation" \},\n(\s*)\{ id: "governance", label: "Governance" \}/,
    '{ id: "implementation", label: "Implementation" },\n$1{ id: "code-downloads", label: "Code Downloads" },\n$1{ id: "governance", label: "Governance" }'
  );
  
  // Add <CodeDownloadsSection /> to render
  content = content.replace(
    /<ImplementationSection \/>\n(\s*)<GovernanceSection \/>/,
    '<ImplementationSection />\n$1<CodeDownloadsSection />\n$1<GovernanceSection />'
  );
  
  // Insert code constants + section function before governance
  const govMarker = '// ==================== GOVERNANCE SECTION ====================';
  const insertContent = codeConstants + '\n' + sectionFn + govMarker;
  content = content.replace(govMarker, insertContent);
  
  writeFileSync(filepath, content, 'utf-8');
  console.log(`DONE: ${filename}`);
}

// Process a single page
const page = process.argv[2];
const codeFile = process.argv[3];

if (page && codeFile) {
  const codes = readFileSync(codeFile, 'utf-8');
  // codes file format: REACT_CODE, ANGULAR_CODE, HTML_CODE constants + section function
  const filepath = `${PAGES_DIR}/${page}`;
  let content = readFileSync(filepath, 'utf-8');
  
  if (content.includes('code-downloads')) {
    console.log(`SKIP: ${page} already has code downloads`);
    process.exit(0);
  }
  
  // Add React import
  if (!content.includes('import React')) {
    content = content.replace(
      /^(import .* from "react-router";)/m,
      'import React from "react";\n$1'
    );
  }
  
  // Add Download, Copy
  if (!content.includes('Download')) {
    content = content.replace(
      /\} from "lucide-react";/,
      ', Download, Copy } from "lucide-react";'
    );
  } else if (!content.includes('Copy')) {
    content = content.replace(
      /\} from "lucide-react";/,
      ', Copy } from "lucide-react";'
    );
  }
  
  // Add nav item
  content = content.replace(
    /(\{ id: "implementation", label: "Implementation" \},)\n(\s*)(\{ id: "governance", label: "Governance" \})/,
    '$1\n$2{ id: "code-downloads", label: "Code Downloads" },\n$2$3'
  );
  
  // Add component call
  content = content.replace(
    /(<ImplementationSection \/>)\n(\s*)(<GovernanceSection \/>)/,
    '$1\n$2<CodeDownloadsSection />\n$2$3'
  );
  
  // Insert before governance marker
  const govMarker = '// ==================== GOVERNANCE SECTION ====================';
  content = content.replace(govMarker, codes + '\n' + govMarker);
  
  writeFileSync(filepath, content, 'utf-8');
  console.log(`DONE: ${page}`);
} else {
  console.log('Usage: node scripts/batch-code-downloads.mjs <PageFile.tsx> <code-constants-file.txt>');
}
