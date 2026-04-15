/**
 * Wires playground state variables to Preview component props for all broken playgrounds.
 * For each component, replaces the preview area with one that passes state vars.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

// For each broken component, define how to wire state to the preview
// Map: component name -> replacement preview JSX (uses state variables from the playground)
const WIRING = {
  AadhaarInput: '<AadhaarInputPreview />',  // manages own state, but add disabled control
  Accordion: '<AccordionPreview />',  // manages own state
  AddressAutocompleteIndia: '<AddressAutocompleteIndiaPreview />',  // manages own state
  ApplicationTracker: '<div className="w-full max-w-md"><div className="flex items-center gap-3 mb-3"><div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-xs font-bold">✓</div><div className="flex-1 h-1 bg-green-500 rounded" /><div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold">⏳</div><div className="flex-1 h-1 bg-muted rounded" /><div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground text-xs">3</div></div>{showTimeline && <div className="flex justify-between text-xs text-muted-foreground"><span>Submitted</span><span>Processing</span><span>Complete</span></div>}{showDates && <p className="text-xs text-muted-foreground mt-2">Last updated: 14 Apr 2026</p>}</div>',
  Autocomplete: '<AutocompletePreview />',  // manages own state
  BackToTop: '<BackToTopPreview />',  // manages own state
  Breadcrumb: '<BreadcrumbPreview />',  // manages own state
  Card: '<CardPreview title="Service Card"><p className="text-sm text-muted-foreground">Card content preview</p></CardPreview>',
  ChartLibrary: '<div className="w-full max-w-md"><div className="flex items-end gap-3 h-32">{[80,55,90,40,70].map((h,i) => <div key={i} className="flex-1 bg-[#005196] rounded-t transition-all" style={{height: h+"%", opacity: showLegend ? 1 : 0.7}} />)}</div>{showLegend && <div className="flex justify-between text-xs text-muted-foreground mt-2"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span></div>}</div>',
  CodeBlock: '<CodeBlockPreview language="tsx" code={\'<Button variant="primary">Submit</Button>\'} showLineNumbers />',
  DataGrid: '<DataGridPreview />',  // manages own state
  DatePicker: '<DatePickerPreview />',  // manages own state
  DescriptionList: '<DescriptionListPreview items={[{term:"Name",detail:"Rajesh Kumar"},{term:"Status",detail:"Active"},{term:"ID",detail:"CERT-001"}]} layout={layout} />',
  DocumentViewer: '<DocumentViewerPreview fileType="pdf" showToolbar zoom={zoom} />',
  EmptyState: '<EmptyStatePreview title="No applications yet" description="Start your first application" actionLabel={showAction ? "Get Started" : undefined} />',
  FileUpload: '<FileUploadPreview />',  // manages own state
  Grid: '<GridPreview cols={Number(columns)}><div className="p-3 bg-[#005196]/10 rounded text-xs text-center">1</div><div className="p-3 bg-[#005196]/10 rounded text-xs text-center">2</div><div className="p-3 bg-[#005196]/10 rounded text-xs text-center">3</div><div className="p-3 bg-[#005196]/10 rounded text-xs text-center">4</div><div className="p-3 bg-[#005196]/10 rounded text-xs text-center">5</div><div className="p-3 bg-[#005196]/10 rounded text-xs text-center">6</div></GridPreview>',
  List: '<div className="w-full max-w-sm border border-border rounded-lg overflow-hidden">{["Aadhaar Card","Address Proof","Photo","Income Certificate"].map((item,i) => <div key={i} className={`flex items-center gap-2 px-3 py-2 text-xs ${variant === "striped" && i%2===1 ? "bg-muted/30" : ""} ${variant === "bordered" ? "border-b border-border" : ""}`}>{showIcons && <span className="w-1.5 h-1.5 rounded-full bg-green-500" />}<span className="text-foreground">{item}</span>{interactive && <span className="ml-auto text-muted-foreground">→</span>}</div>)}</div>',
  MapLocationPicker: '<MapLocationPickerPreview editable={editable} showSearch={showSearch} />',
  Modal: '<div className="w-full max-w-sm bg-card border border-border rounded-xl shadow-lg"><div className="flex items-center justify-between p-4 border-b border-border"><h3 className="font-semibold text-foreground text-sm">{size === "lg" ? "Document Preview" : "Confirm Action"}</h3>{showClose && <span className="text-muted-foreground cursor-pointer">✕</span>}</div><div className="p-4"><p className="text-sm text-muted-foreground">Modal content goes here.</p></div><div className="flex justify-end gap-2 p-4 border-t border-border"><button className="px-3 py-1.5 text-xs border border-border rounded">Cancel</button><button className="px-3 py-1.5 text-xs bg-[#005196] text-white rounded">Confirm</button></div></div>',
  OTPInput: '<OTPInputPreview />',  // manages own state
  PANCardInput: '<PANCardInputPreview />',  // manages own state
  Pagination: '<PaginationPreview totalPages={10} showFirstLast={showFirstLast} />',
  PaymentGateway: '<PaymentGatewayPreview amount={500} serviceName="Certificate Fee" />',
  Popover: '<div className="relative inline-flex flex-col items-start"><div className="w-56 bg-card border border-border rounded-lg shadow-lg p-3 mb-2"><p className="text-xs font-semibold text-foreground mb-1">Help</p><p className="text-xs text-muted-foreground">Enter your 12-digit Aadhaar number.</p></div><button className="px-3 py-1.5 text-xs border border-border rounded">ⓘ Help ({position})</button></div>',
  Progress: '<ProgressPreview value={50} label="Uploading..." showPercentage />',
  QRCode: '<QRCodePreview value="https://ux4g.gov.in/verify" size={Number(size)} level={level} />',
  RichTextEditor: '<RichTextEditorPreview toolbar={showToolbar ? ["bold","italic","list","link"] : []} />',
  ShowHide: '<div className="w-full max-w-sm space-y-2"><p className="text-sm text-foreground">Visible content above</p>{defaultVisible && <div className={`p-3 bg-muted/30 rounded text-sm text-muted-foreground ${animated ? "transition-all duration-300" : ""}`}>This content is toggled by ShowHide. It can contain any elements.</div>}{!defaultVisible && <button className="text-xs text-[#005196]">{label}</button>}</div>',
  Statistic: '<div className="flex gap-6"><div className="space-y-1"><p className="text-xs text-muted-foreground">{prefix}Pending Cases</p><p className="text-2xl font-bold text-foreground">{prefix}42</p>{showTrend && <span className="text-xs text-green-600">↑ +12%</span>}{loading && <div className="h-6 w-16 bg-muted rounded animate-pulse" />}</div></div>',
  Stepper: '<div className="flex items-center gap-2 w-full">{[1,2,3,4].map(s => <React.Fragment key={s}><div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${s < Number(currentStep) ? "bg-green-100 text-green-700" : s === Number(currentStep) ? "bg-[#005196] text-white" : "bg-muted text-muted-foreground"}`}>{s < Number(currentStep) ? "✓" : s}</div>{s < 4 && <div className={`flex-1 h-1 rounded ${s < Number(currentStep) ? "bg-green-500" : "bg-muted"}`} />}</React.Fragment>)}</div>',
  Table: '<div className={`w-full overflow-hidden rounded-lg ${bordered ? "border border-border" : ""}`}><table className="w-full text-sm"><thead className="bg-muted"><tr><th className="px-4 py-2 text-left font-semibold">Application</th><th className="px-4 py-2 text-left font-semibold">Status</th><th className="px-4 py-2 text-left font-semibold">Date</th></tr></thead><tbody>{[["CERT-001","Pending","12 Apr"],["CERT-002","Approved","10 Apr"],["CERT-003","Rejected","8 Apr"]].map(([id,status,date], i) => <tr key={i} className={`border-t border-border ${striped && i % 2 === 1 ? "bg-muted/30" : ""}`}><td className="px-4 py-2">{id}</td><td className="px-4 py-2">{status}</td><td className="px-4 py-2">{date}</td></tr>)}</tbody></table></div>',
  Tabs: '<TabsPreview variant={variant} items={["Overview","Documents","Status"]} />',
  Tag: '<div className="flex flex-wrap gap-2"><TagPreview variant={variant} closeable={removable}>PDF</TagPreview><TagPreview variant="success">Verified</TagPreview><TagPreview variant="warning">Pending</TagPreview></div>',
  Timeline: '<TimelinePreview items={[{title:"Submitted",date:"12 Apr",status:"complete"},{title:"Under Review",date:"14 Apr",status:"active"},{title:"Approved",date:"",status:"pending"}]} variant={variant} />',
  TreeView: '<TreeViewPreview data={[{label:"Ministry of IT",children:[{label:"Digital India"},{label:"MeitY"}]},{label:"Ministry of Finance",children:[{label:"Tax Dept"}]}]} expandable={expandAll} />',
  VideoPlayer: '<VideoPlayerPreview controls={showCaptions} />',
};

let updated = 0;
const pages = readdirSync(`${ROOT}/src/app/pages`).filter(f => f.startsWith('Component') && f.endsWith('Page.tsx'));

for (const file of pages) {
  const name = file.replace('Component', '').replace('Page.tsx', '');
  if (!WIRING[name]) continue;

  const filePath = `${ROOT}/src/app/pages/${file}`;
  let content = readFileSync(filePath, 'utf8');

  // Find the playground function
  const pgRegex = new RegExp(`function ${name}Playground\\(\\)[\\s\\S]*?^}`, 'gm');
  const pgMatch = content.match(pgRegex);
  if (!pgMatch) continue;

  const oldPg = pgMatch[0];

  // Find the preview area: between the first border-dashed div and the controls div
  // Pattern: <div className="...border-dashed...">...<PREVIEW>...</div>
  const previewStart = oldPg.indexOf('border-dashed');
  const controlsStart = oldPg.indexOf('space-y-4 text-sm');
  if (previewStart === -1 || controlsStart === -1) continue;

  // Find the content between border-dashed opening and its closing
  // Look for the inner content div
  const innerStart = oldPg.indexOf('>', oldPg.indexOf('border-dashed')) + 1;
  const innerContentStart = oldPg.indexOf('\n', innerStart);

  // Find where the preview content ends (before the closing </div> of the dashed border)
  // Count div depth from the dashed border div
  let depth = 1;
  let innerEnd = -1;
  for (let i = innerStart + 1; i < controlsStart; i++) {
    const slice = oldPg.slice(i, i + 6);
    if (slice.startsWith('<div')) depth++;
    if (slice.startsWith('</div')) {
      depth--;
      if (depth === 0) { innerEnd = i; break; }
    }
  }

  if (innerEnd === -1) continue;

  // Replace the inner content with the wired preview
  const beforePreview = oldPg.slice(0, innerContentStart + 1);
  const afterPreview = oldPg.slice(innerEnd);
  const newPreview = `        <div className="w-full flex items-center justify-center">\n          ${WIRING[name]}\n        </div>\n      `;
  const newPg = beforePreview + newPreview + afterPreview;

  if (newPg !== oldPg) {
    content = content.replace(oldPg, newPg);
    writeFileSync(filePath, content);
    console.log(`WIRED: ${name}`);
    updated++;
  }
}

console.log(`\nDone: ${updated} playgrounds wired`);
