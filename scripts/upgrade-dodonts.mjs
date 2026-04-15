/**
 * Upgrades Do/Don't sections from text-only to include live rendered previews.
 * Adds a visual preview div above the explanation text in each Do/Don't card.
 * 
 * Run: node scripts/upgrade-dodonts.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

// For each component, define the Do and Don't preview JSX
const DODONT_PREVIEWS = {
  Table: {
    doPreview: '<div className="overflow-hidden rounded border border-border text-sm mb-3"><table className="w-full"><thead className="bg-muted"><tr><th className="px-3 py-2 text-left text-xs font-semibold">Name</th><th className="px-3 py-2 text-left text-xs font-semibold">Status</th></tr></thead><tbody><tr className="border-t"><td className="px-3 py-2">Rajesh Kumar</td><td className="px-3 py-2"><span className="px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-800">Approved</span></td></tr><tr className="border-t bg-muted/30"><td className="px-3 py-2">Suresh Mehta</td><td className="px-3 py-2"><span className="px-2 py-0.5 rounded-full text-xs bg-yellow-100 text-yellow-800">Pending</span></td></tr></tbody></table></div>',
    dontPreview: '<div className="text-sm space-y-1 mb-3"><p className="text-muted-foreground">Rajesh Kumar - Approved - 12 Apr</p><p className="text-muted-foreground">Suresh Mehta - Pending - 10 Apr</p></div>',
  },
  Card: {
    doPreview: '<div className="w-full max-w-[200px] bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer mb-3"><h4 className="font-semibold text-foreground text-sm mb-1">Birth Certificate</h4><p className="text-xs text-muted-foreground">Apply online</p></div>',
    dontPreview: '<div className="w-full max-w-[200px] bg-card border border-border rounded-xl p-4 shadow-sm mb-3"><h4 className="font-semibold text-foreground text-sm mb-1">Certificate</h4><div className="flex gap-1 mt-2"><button className="px-1.5 py-0.5 text-[10px] bg-[#005196] text-white rounded">Apply</button><button className="px-1.5 py-0.5 text-[10px] border border-border rounded">Details</button><button className="px-1.5 py-0.5 text-[10px] border border-border rounded">Share</button><button className="px-1.5 py-0.5 text-[10px] border border-border rounded">Save</button></div></div>',
  },
  Tabs: {
    doPreview: '<div className="flex border-b border-border mb-3"><button className="px-3 py-1.5 text-xs font-medium border-b-2 border-[#005196] text-[#005196]">Personal</button><button className="px-3 py-1.5 text-xs text-muted-foreground">Address</button><button className="px-3 py-1.5 text-xs text-muted-foreground">Documents</button></div>',
    dontPreview: '<div className="flex border-b border-border mb-3"><button className="px-3 py-1.5 text-xs font-medium border-b-2 border-[#005196] text-[#005196]">Step 1: Personal Info</button><button className="px-3 py-1.5 text-xs text-muted-foreground">Step 2: Address Details</button><button className="px-3 py-1.5 text-xs text-muted-foreground">Step 3: Review</button></div>',
  },
  Accordion: {
    doPreview: '<div className="w-full border border-border rounded-lg overflow-hidden mb-3"><button className="w-full flex justify-between px-3 py-2 text-xs font-medium text-foreground bg-muted/30"><span>Processing time?</span><span>▼</span></button><div className="px-3 py-2 text-xs text-muted-foreground border-t border-border">7-10 business days.</div></div>',
    dontPreview: '<div className="w-full border border-red-200 rounded-lg overflow-hidden mb-3"><button className="w-full flex justify-between px-3 py-2 text-xs font-medium text-red-700"><span>⚠ Important: Application Deadline</span><span>▶</span></button></div>',
  },
  Breadcrumb: {
    doPreview: '<nav className="flex items-center gap-1.5 text-xs mb-3"><a href="#" className="text-[#005196]">Home</a><span className="text-muted-foreground">/</span><a href="#" className="text-[#005196]">Services</a><span className="text-muted-foreground">/</span><span className="font-medium text-foreground">Certificate</span></nav>',
    dontPreview: '<nav className="flex items-center gap-1.5 text-xs mb-3"><span className="font-medium text-foreground">Home</span></nav>',
  },
  Stepper: {
    doPreview: '<div className="flex items-center gap-2 mb-3"><div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs">✓</div><div className="flex-1 h-0.5 bg-green-500" /><div className="w-6 h-6 rounded-full bg-[#005196] text-white flex items-center justify-center text-xs">2</div><div className="flex-1 h-0.5 bg-muted" /><div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs">3</div></div>',
    dontPreview: '<div className="flex items-center gap-1 mb-3">{Array.from({length:8}).map((_,i) => <div key={i} className="w-5 h-5 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-[10px]">{i+1}</div>)}</div>',
  },
  Progress: {
    doPreview: '<div className="w-full mb-3"><div className="flex justify-between text-xs mb-1"><span className="text-muted-foreground">Uploading Aadhaar...</span><span className="text-muted-foreground">65%</span></div><div className="w-full h-2 bg-muted rounded-full overflow-hidden"><div className="h-full bg-[#005196] rounded-full" style={{width:"65%"}} /></div></div>',
    dontPreview: '<div className="w-full mb-3"><div className="w-full h-2 bg-muted rounded-full overflow-hidden"><div className="h-full bg-[#005196] rounded-full" style={{width:"65%"}} /></div></div>',
  },
  Spinner: {
    doPreview: '<div className="flex items-center gap-3 mb-3"><div className="w-5 h-5 border-2 border-[#005196]/30 border-t-[#005196] rounded-full animate-spin" /><span className="text-xs text-muted-foreground">Loading status...</span></div>',
    dontPreview: '<div className="flex items-center justify-center mb-3"><div className="w-12 h-12 border-4 border-[#005196]/30 border-t-[#005196] rounded-full animate-spin" /></div>',
  },
  Pagination: {
    doPreview: '<div className="flex items-center gap-1 mb-3"><button className="px-2 py-1 text-xs border border-border rounded">←</button><button className="px-2 py-1 text-xs bg-[#005196] text-white rounded">1</button><button className="px-2 py-1 text-xs border border-border rounded">2</button><button className="px-2 py-1 text-xs border border-border rounded">3</button><span className="text-xs text-muted-foreground">of 12</span><button className="px-2 py-1 text-xs border border-border rounded">→</button></div>',
    dontPreview: '<div className="flex items-center gap-1 mb-3"><button className="px-2 py-1 text-xs border border-border rounded">Previous</button><button className="px-2 py-1 text-xs border border-border rounded">Next</button></div>',
  },
  DatePicker: {
    doPreview: '<div className="w-48 mb-3"><label className="block text-xs font-medium text-foreground mb-1">Date of Birth</label><div className="flex items-center border border-border rounded px-3 py-1.5 text-xs"><span className="text-muted-foreground">DD/MM/YYYY</span><span className="ml-auto text-muted-foreground">📅</span></div></div>',
    dontPreview: '<div className="w-48 mb-3"><div className="border border-border rounded px-3 py-1.5 text-xs text-muted-foreground">Select date</div></div>',
  },
  FileUpload: {
    doPreview: '<div className="w-full border-2 border-dashed border-border rounded-lg p-4 text-center mb-3"><p className="text-xs text-muted-foreground">Drag & drop or click to upload</p><p className="text-[10px] text-muted-foreground mt-1">PDF, JPG, PNG • Max 2MB</p></div>',
    dontPreview: '<div className="w-full border border-border rounded p-2 mb-3"><input type="file" className="text-xs" disabled /></div>',
  },
  OTPInput: {
    doPreview: '<div className="flex gap-2 mb-3">{[1,2,3,4,5,6].map(i => <div key={i} className="w-8 h-10 border-2 border-border rounded flex items-center justify-center text-sm font-mono text-foreground">{i <= 3 ? "•" : ""}</div>)}</div>',
    dontPreview: '<div className="mb-3"><input className="w-full border border-border rounded px-3 py-1.5 text-xs" placeholder="Enter 6-digit OTP" readOnly /></div>',
  },
  Autocomplete: {
    doPreview: '<div className="w-48 mb-3"><div className="border border-border rounded px-3 py-1.5 text-xs">Del<span className="text-[#005196]">hi</span></div><div className="border border-border border-t-0 rounded-b shadow-sm"><div className="px-3 py-1.5 text-xs hover:bg-muted cursor-pointer">Delhi</div><div className="px-3 py-1.5 text-xs hover:bg-muted cursor-pointer">Dehradun</div></div></div>',
    dontPreview: '<div className="w-48 mb-3"><select className="w-full border border-border rounded px-3 py-1.5 text-xs bg-card"><option>Search 600+ cities...</option></select></div>',
  },
  Avatar: {
    doPreview: '<div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-full bg-[#005196] text-white flex items-center justify-center text-sm font-bold">RK</div><div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">SM</div></div>',
    dontPreview: '<div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-lg">👤</div><div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-lg">👤</div></div>',
  },
  Divider: {
    doPreview: '<div className="space-y-2 mb-3"><p className="text-xs text-muted-foreground">Personal Details</p><hr className="border-border" /><p className="text-xs text-muted-foreground">Address Details</p></div>',
    dontPreview: '<div className="space-y-0.5 mb-3"><hr className="border-border" /><hr className="border-border" /><hr className="border-border" /></div>',
  },
  Tooltip: {
    doPreview: '<div className="inline-flex flex-col items-center mb-3"><div className="px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg mb-1">Delete application</div><button className="p-2 border border-border rounded text-muted-foreground text-xs">🗑</button></div>',
    dontPreview: '<div className="mb-3"><button className="p-2 border border-border rounded text-muted-foreground text-xs">🗑</button></div>',
  },
  Drawer: {
    doPreview: '<div className="flex gap-2 mb-3"><div className="w-16 bg-muted/50 rounded p-2 text-[10px] text-muted-foreground border border-border">Filters</div><div className="flex-1 bg-muted/20 rounded p-2 text-[10px] text-muted-foreground">Main content</div></div>',
    dontPreview: '<div className="w-full bg-muted/50 rounded p-2 text-[10px] text-center text-muted-foreground border border-border mb-3">Full-page overlay for filters</div>',
  },
  Menu: {
    doPreview: '<div className="inline-block mb-3"><button className="px-3 py-1.5 text-xs border border-border rounded flex items-center gap-1">Actions ▾</button><div className="mt-1 border border-border rounded shadow-sm bg-card"><div className="px-3 py-1.5 text-xs hover:bg-muted cursor-pointer">View</div><div className="px-3 py-1.5 text-xs hover:bg-muted cursor-pointer">Edit</div><div className="px-3 py-1.5 text-xs text-red-600 hover:bg-muted cursor-pointer">Delete</div></div></div>',
    dontPreview: '<div className="inline-block mb-3"><button className="p-1.5 text-xs border border-border rounded">⋮</button></div>',
  },
  Switch: {
    doPreview: '<div className="flex items-center gap-3 mb-3"><div className="w-10 h-5 bg-[#005196] rounded-full relative"><div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow" /></div><span className="text-xs text-foreground">Dark mode</span></div>',
    dontPreview: '<div className="flex items-center gap-3 mb-3"><input type="checkbox" className="accent-[#005196]" /><span className="text-xs text-foreground">Enable notifications</span><button className="ml-2 px-2 py-0.5 text-[10px] bg-[#005196] text-white rounded">Save</button></div>',
  },
  Skeleton: {
    doPreview: '<div className="space-y-2 mb-3"><div className="h-4 bg-muted rounded animate-pulse w-3/4" /><div className="h-4 bg-muted rounded animate-pulse w-full" /><div className="h-4 bg-muted rounded animate-pulse w-1/2" /></div>',
    dontPreview: '<div className="flex items-center justify-center h-16 mb-3"><div className="w-6 h-6 border-2 border-muted border-t-muted-foreground rounded-full animate-spin" /></div>',
  },
  Popover: {
    doPreview: '<div className="inline-flex flex-col items-start mb-3"><div className="px-3 py-2 bg-card border border-border rounded-lg shadow-lg text-xs mb-1"><p className="font-semibold">Help</p><p className="text-muted-foreground">Enter your 12-digit Aadhaar number.</p><a href="#" className="text-[#005196] underline">Learn more</a></div><button className="text-xs text-[#005196]">ⓘ</button></div>',
    dontPreview: '<div className="inline-flex flex-col items-start mb-3"><div className="px-2 py-1 bg-gray-900 text-white text-xs rounded">Enter your 12-digit Aadhaar number without spaces or dashes. <a href="#" className="underline">Learn more</a></div></div>',
  },
  Tag: {
    doPreview: '<div className="flex gap-2 mb-3"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-muted text-foreground">PDF <button className="text-muted-foreground hover:text-foreground">×</button></span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-800">Verified</span></div>',
    dontPreview: '<div className="flex gap-2 mb-3"><span className="px-2 py-0.5 rounded-full text-xs bg-muted text-foreground">Income Certificate</span></div>',
  },
  Timeline: {
    doPreview: '<div className="space-y-3 mb-3"><div className="flex gap-3"><div className="w-3 h-3 rounded-full bg-green-500 mt-0.5 shrink-0" /><div><p className="text-xs font-medium text-foreground">Application Submitted</p><p className="text-[10px] text-muted-foreground">12 Apr 2026</p></div></div><div className="flex gap-3"><div className="w-3 h-3 rounded-full bg-yellow-500 mt-0.5 shrink-0" /><div><p className="text-xs font-medium text-foreground">Under Review</p><p className="text-[10px] text-muted-foreground">14 Apr 2026</p></div></div></div>',
    dontPreview: '<div className="text-xs space-y-1 mb-3"><p className="text-muted-foreground">12 Apr - Submitted</p><p className="text-muted-foreground">14 Apr - Under Review</p></div>',
  },
  Dropdown: {
    doPreview: '<div className="inline-block mb-3"><button className="px-3 py-1.5 text-xs border border-border rounded flex items-center gap-1">Sort by ▾</button></div>',
    dontPreview: '<div className="inline-block mb-3"><button className="p-1.5 text-xs border border-border rounded">⋮</button></div>',
  },
  EmptyState: {
    doPreview: '<div className="text-center py-4 mb-3"><p className="text-sm font-medium text-foreground mb-1">No applications yet</p><p className="text-xs text-muted-foreground mb-2">Start your first application to see it here.</p><button className="px-3 py-1 text-xs bg-[#005196] text-white rounded">Start Application</button></div>',
    dontPreview: '<div className="text-center py-4 mb-3 text-muted-foreground text-xs">No data</div>',
  },
  List: {
    doPreview: '<div className="border border-border rounded overflow-hidden mb-3"><div className="flex items-center gap-2 px-3 py-2 border-b border-border text-xs"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /><span>Aadhaar Card</span><span className="ml-auto text-green-600">✓</span></div><div className="flex items-center gap-2 px-3 py-2 text-xs"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500" /><span>Photo</span><span className="ml-auto text-yellow-600">Pending</span></div></div>',
    dontPreview: '<div className="text-xs space-y-0.5 mb-3"><p>• Aadhaar Card - Verified</p><p>• Photo - Pending</p></div>',
  },
  CodeBlock: {
    doPreview: '<div className="relative rounded bg-gray-900 p-3 mb-3"><button className="absolute top-2 right-2 px-2 py-0.5 text-[10px] bg-gray-700 text-gray-300 rounded">Copy</button><pre className="text-xs text-green-400 font-mono">{"<Button variant=\\"primary\\">\\n  Submit\\n</Button>"}</pre></div>',
    dontPreview: '<div className="rounded bg-gray-900 p-3 mb-3"><pre className="text-xs text-gray-400 font-mono overflow-x-auto">{"<Button variant=\\"primary\\">Submit</Button>"}</pre></div>',
  },
  DataGrid: {
    doPreview: '<div className="overflow-hidden rounded border border-border text-xs mb-3"><div className="flex bg-muted px-2 py-1.5 gap-2 font-semibold"><span className="flex-1">ID ↕</span><span className="flex-1">Name</span><span className="flex-1">Status</span></div><div className="flex px-2 py-1.5 border-t gap-2"><span className="flex-1">001</span><span className="flex-1">Rajesh</span><span className="flex-1">Active</span></div></div>',
    dontPreview: '<div className="overflow-hidden rounded border border-border text-xs mb-3"><div className="flex bg-muted px-2 py-1.5 gap-2 font-semibold"><span className="flex-1">ID</span><span className="flex-1">Name</span></div><div className="flex px-2 py-1.5 border-t gap-2"><span className="flex-1">001</span><span className="flex-1">Rajesh</span></div></div>',
  },
};

// For components not in the map, use a simple generic upgrade
const GENERIC_DO = '<div className="p-3 bg-green-50/50 rounded border border-green-200 mb-3 text-xs text-green-800">✓ Correct implementation shown</div>';
const GENERIC_DONT = '<div className="p-3 bg-red-50/50 rounded border border-red-200 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>';

let updated = 0;
const pages = readdirSync(`${ROOT}/src/app/pages`).filter(f => f.startsWith('Component') && f.endsWith('Page.tsx'));

for (const file of pages) {
  const name = file.replace('Component', '').replace('Page.tsx', '');
  const filePath = `${ROOT}/src/app/pages/${file}`;
  let content = readFileSync(filePath, 'utf8');

  // Skip pages that already have rich Do/Don't (manual batches)
  const skipList = ['Button','Input','Select','Checkbox','Radio','Textarea','Alert','Badge','Modal','Dialog','Toast'];
  if (skipList.includes(name)) continue;

  // Check if Do/Don't section exists
  if (!content.includes('Do / Don')) continue;

  const previews = DODONT_PREVIEWS[name];
  
  // Find the Do card's <div className="p-4"> and add preview before the <p> text
  // Pattern: <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>\n                <div className="p-4">\n                  <p
  const doPattern = /(✓ Do<\/div>\n\s*<div className="p-4">\n)(\s*<p)/;
  const dontPattern = /(✗ Don&apos;t<\/div>\n\s*<div className="p-4">\n)(\s*<p)/;

  if (doPattern.test(content)) {
    const doPreview = previews?.doPreview || GENERIC_DO;
    const dontPreview = previews?.dontPreview || GENERIC_DONT;
    
    content = content.replace(doPattern, `$1                  ${doPreview}\n$2`);
    content = content.replace(dontPattern, `$1                  ${dontPreview}\n$2`);
    
    writeFileSync(filePath, content);
    console.log(`UPDATED: ${name}`);
    updated++;
  } else {
    console.log(`SKIP: ${name} — pattern not found`);
  }
}

console.log(`\nDone: ${updated} updated`);
