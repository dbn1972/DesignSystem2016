/**
 * Adds preview prop, Do/Don't, and Playground to all remaining component pages.
 * Run: node scripts/add-playground-all.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

// Each component: { preview, doDont, playground }
// preview = JSX for the preview prop
// doDont = JSX for Do/Don't section
// playground = { name, controls, snippet } for the playground function
const COMPONENTS = {
  Table: {
    preview: `<div className="w-full max-w-lg overflow-hidden rounded-lg border border-border"><table className="w-full text-sm"><thead className="bg-muted"><tr><th className="px-4 py-2 text-left font-semibold">Application ID</th><th className="px-4 py-2 text-left font-semibold">Status</th><th className="px-4 py-2 text-left font-semibold">Date</th></tr></thead><tbody><tr className="border-t border-border"><td className="px-4 py-2">CERT-001</td><td className="px-4 py-2"><span className="px-2 py-0.5 rounded-full text-xs bg-yellow-100 text-yellow-800">Pending</span></td><td className="px-4 py-2">12 Apr 2026</td></tr><tr className="border-t border-border"><td className="px-4 py-2">CERT-002</td><td className="px-4 py-2"><span className="px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-800">Approved</span></td><td className="px-4 py-2">10 Apr 2026</td></tr></tbody></table></div>`,
    doGood: `<div className="overflow-hidden rounded border border-border"><table className="w-full text-sm"><thead className="bg-muted"><tr><th className="px-3 py-2 text-left">Name</th><th className="px-3 py-2 text-left">Status</th></tr></thead><tbody><tr className="border-t"><td className="px-3 py-2">Rajesh Kumar</td><td className="px-3 py-2">Approved</td></tr></tbody></table></div>`,
    doGoodText: 'Use zebra striping or borders for tables with many rows. Include sortable column headers for data tables.',
    doBad: `<div className="text-sm space-y-1"><p>Rajesh Kumar - Approved - 12 Apr</p><p>Suresh Mehta - Pending - 10 Apr</p></div>`,
    doBadText: "Don't display tabular data as plain text — use a proper Table for structured data with columns.",
    playgroundControls: `<div><label className="block font-semibold text-foreground mb-1">Rows</label><select value={rows} onChange={e => setRows(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="3">3 rows</option><option value="5">5 rows</option><option value="10">10 rows</option></select></div><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={striped} onChange={e => setStriped(e.target.checked)} className="accent-primary" /><span className="text-foreground">Striped rows</span></label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={sortable} onChange={e => setSortable(e.target.checked)} className="accent-primary" /><span className="text-foreground">Sortable</span></label>`,
    playgroundState: `const [rows, setRows] = React.useState('3');\n  const [striped, setStriped] = React.useState(true);\n  const [sortable, setSortable] = React.useState(false);`,
    playgroundPreview: `<div className="w-full overflow-hidden rounded-lg border border-border"><table className="w-full text-sm"><thead className="bg-muted"><tr><th className="px-4 py-2 text-left font-semibold">ID</th><th className="px-4 py-2 text-left font-semibold">Name</th><th className="px-4 py-2 text-left font-semibold">Status</th></tr></thead><tbody>{Array.from({length: Number(rows)}).map((_,i) => <tr key={i} className={\`border-t border-border \${striped && i % 2 === 1 ? 'bg-muted/50' : ''}\`}><td className="px-4 py-2">CERT-{String(i+1).padStart(3,'0')}</td><td className="px-4 py-2">Applicant {i+1}</td><td className="px-4 py-2">Pending</td></tr>)}</tbody></table></div>`,
    playgroundSnippet: '`<Table rows={${rows}}${striped ? " striped" : ""}${sortable ? " sortable" : ""} columns={columns} data={data} />`',
  },
};

