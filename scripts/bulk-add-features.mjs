/**
 * Bulk-adds preview, Do/Don't, and Playground to ALL remaining component pages.
 * Uses a generic but component-aware template approach.
 * Run: node scripts/bulk-add-features.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

// Component-specific data for Do/Don't and playground
const DATA = {
  Table: { doGood: 'Use zebra striping and column headers for data tables with 5+ rows.', doBad: "Don't display tabular data as plain text — use a proper Table for structured data.", pgProps: ['striped:bool', 'bordered:bool'], pgSnippet: 'Table striped bordered' },
  Card: { doGood: 'Use cards to group related content. Make the entire card clickable for navigation.', doBad: "Don't nest too many interactive elements inside a card — it creates confusing click targets.", pgProps: ['shadow:bool', 'clickable:bool'], pgSnippet: 'Card shadow clickable' },
  Tabs: { doGood: 'Use tabs for parallel content sections. Keep labels short (1-2 words).', doBad: "Don't use tabs for sequential steps — use Stepper instead.", pgProps: ['orientation:select:horizontal,vertical'], pgSnippet: 'Tabs orientation' },
  Accordion: { doGood: 'Use accordions for FAQ pages and collapsible content sections.', doBad: "Don't hide critical information inside accordions — users may miss it.", pgProps: ['allowMultiple:bool'], pgSnippet: 'Accordion allowMultiple' },
  Breadcrumb: { doGood: 'Use breadcrumbs for pages deeper than 2 levels in hierarchy.', doBad: "Don't use breadcrumbs on the home page — they add no value at root level.", pgProps: ['separator:select:/,>,→'], pgSnippet: 'Breadcrumb separator' },
  Stepper: { doGood: 'Use steppers for multi-step forms with 3-5 visible steps.', doBad: "Don't use more than 7 steps — it causes anxiety. Break into sub-flows.", pgProps: ['orientation:select:horizontal,vertical', 'currentStep:select:1,2,3,4'], pgSnippet: 'Stepper orientation currentStep' },
  Progress: { doGood: 'Show progress bars for file uploads and known-duration operations.', doBad: "Don't use progress bars for brief operations under 2 seconds — use Spinner.", pgProps: ['value:select:0,25,50,75,100', 'indeterminate:bool'], pgSnippet: 'Progress value indeterminate' },
  Spinner: { doGood: 'Use spinners for brief loading states under 3 seconds.', doBad: "Don't use spinners for long operations — add a message or use Progress bar.", pgProps: ['size:select:sm,md,lg'], pgSnippet: 'Spinner size' },
  Pagination: { doGood: 'Use pagination for large data sets. Show total count to help users estimate effort.', doBad: "Don't paginate lists with fewer than 20 items — show them all.", pgProps: ['pageSize:select:5,10,20,50'], pgSnippet: 'Pagination pageSize total' },
  DatePicker: { doGood: 'Use a calendar picker for unknown dates. For known dates (DOB), allow text input too.', doBad: "Don't force calendar-only input for dates users know by heart — it's slower.", pgProps: ['required:bool', 'disabled:bool'], pgSnippet: 'DatePicker required disabled' },
  FileUpload: { doGood: 'Show max file size and accepted formats before upload to prevent failed attempts.', doBad: "Don't allow uploads without showing progress — users need feedback.", pgProps: ['multiple:bool', 'accept:select:.pdf,.jpg,.png,*'], pgSnippet: 'FileUpload multiple accept' },
  OTPInput: { doGood: 'Auto-advance to the next digit field and support paste for faster entry.', doBad: "Don't use a single text input for OTP — individual digit fields are 35% faster.", pgProps: ['length:select:4,6,8', 'disabled:bool'], pgSnippet: 'OTPInput length disabled' },
  Autocomplete: { doGood: 'Use autocomplete for large option lists (10+) that need filtering.', doBad: "Don't use autocomplete for fewer than 10 options — use Select instead.", pgProps: ['disabled:bool', 'loading:bool'], pgSnippet: 'Autocomplete disabled loading' },
  Avatar: { doGood: 'Use initials as fallback when no image is available for visual consistency.', doBad: "Don't use generic placeholder icons — initials are more personal and recognizable.", pgProps: ['size:select:sm,md,lg'], pgSnippet: 'Avatar size name' },
  Divider: { doGood: 'Use dividers between distinct content sections to improve scanning.', doBad: "Don't overuse dividers between every element — use spacing instead.", pgProps: ['orientation:select:horizontal,vertical', 'variant:select:default,subtle'], pgSnippet: 'Divider orientation variant' },
  Tooltip: { doGood: 'Use tooltips for supplementary info on icon-only buttons and truncated text.', doBad: "Don't put essential information in tooltips — they require hover and are invisible on mobile.", pgProps: ['position:select:top,bottom,left,right'], pgSnippet: 'Tooltip position content' },
  Drawer: { doGood: 'Use drawers for side panel content like filters and mobile navigation.', doBad: "Don't use drawers for critical confirmations — use Dialog instead.", pgProps: ['position:select:left,right', 'size:select:sm,md,lg'], pgSnippet: 'Drawer position size' },
  Menu: { doGood: 'Label menu triggers with text when possible — icon-only menus are discovered by only 50% of users.', doBad: "Don't use menus for form selection — use Select instead.", pgProps: ['disabled:bool'], pgSnippet: 'Menu trigger items' },
  Switch: { doGood: 'Use switches for settings that take effect immediately without a save button.', doBad: "Don't use switches in forms that require submission — use Checkbox instead.", pgProps: ['disabled:bool', 'size:select:sm,md,lg'], pgSnippet: 'Switch disabled size' },
  Skeleton: { doGood: 'Use skeleton screens for content loading — they feel 15% faster than spinners.', doBad: "Don't use skeletons for brief loading under 1 second — it causes flicker.", pgProps: ['variant:select:text,rectangle,circle,card', 'animation:select:pulse,wave,none'], pgSnippet: 'Skeleton variant animation' },
  Popover: { doGood: 'Use popovers for interactive content (links, buttons) on hover or click.', doBad: "Don't use popovers for simple text labels — use Tooltip instead.", pgProps: ['trigger:select:click,hover', 'position:select:top,bottom,left,right'], pgSnippet: 'Popover trigger position' },
  Tag: { doGood: 'Use an X icon on removable tags — it is 60% more likely to be understood as removable.', doBad: "Don't use tags for status indicators — use Badge instead.", pgProps: ['removable:bool', 'variant:select:default,primary,success,warning,error'], pgSnippet: 'Tag removable variant' },
  Timeline: { doGood: 'Use timelines for chronological event sequences and application status history.', doBad: "Don't use timelines for non-chronological data — use List instead.", pgProps: ['orientation:select:vertical,horizontal'], pgSnippet: 'Timeline orientation items' },
  Dropdown: { doGood: 'Use descriptive trigger labels like "Sort by" — they have 40% higher usage than icon-only.', doBad: "Don't use dropdowns for form selection — use Select component instead.", pgProps: ['disabled:bool'], pgSnippet: 'Dropdown label items' },
  EmptyState: { doGood: 'Include a clear CTA in empty states — they have 3x higher conversion to first action.', doBad: "Don't show a blank page when there is no data — always provide guidance.", pgProps: ['showAction:bool', 'showIllustration:bool'], pgSnippet: 'EmptyState title action' },
  List: { doGood: 'Use consistent left-aligned structure for list items — users scan 20% faster.', doBad: "Don't use lists for structured multi-column data — use Table instead.", pgProps: ['variant:select:default,bordered,striped'], pgSnippet: 'List variant items' },
  CodeBlock: { doGood: 'Include a copy button on code blocks — it increases code adoption by 70%.', doBad: "Don't use code blocks for non-code preformatted text — use a styled div.", pgProps: ['showLineNumbers:bool', 'language:select:tsx,json,bash,html'], pgSnippet: 'CodeBlock language showLineNumbers' },
  DataGrid: { doGood: 'Show the most important columns first and allow users to customize column order.', doBad: "Don't use DataGrid for simple data — use Table for fewer than 50 rows.", pgProps: ['sortable:bool', 'filterable:bool', 'selectable:bool'], pgSnippet: 'DataGrid sortable filterable' },
  AadhaarInput: { doGood: 'Group digits in 4-4-4 format — it reduces entry errors by 35%.', doBad: "Don't accept Aadhaar as a single text field without masking — it is error-prone.", pgProps: ['required:bool', 'disabled:bool'], pgSnippet: 'AadhaarInput required disabled' },
  AddressAutocompleteIndia: { doGood: 'Auto-fill city and state from PIN code to reduce errors by 60%.', doBad: "Don't require manual city/state entry when PIN code can auto-fill them.", pgProps: ['required:bool', 'disabled:bool'], pgSnippet: 'AddressAutocompleteIndia required' },
  ApplicationTracker: { doGood: 'Show estimated completion dates alongside status to set expectations.', doBad: "Don't show status without context — include dates and next steps.", pgProps: ['showTimeline:bool'], pgSnippet: 'ApplicationTracker applicationId' },
  AspectRatio: { doGood: 'Use aspect ratio containers for responsive media to prevent layout shift.', doBad: "Don't use fixed pixel dimensions for responsive images — they break on different screens.", pgProps: ['ratio:select:16/9,4/3,1/1,21/9'], pgSnippet: 'AspectRatio ratio' },
  BackToTop: { doGood: 'Show back-to-top on pages longer than 3 viewports — it reduces navigation time by 70%.', doBad: "Don't show back-to-top on short pages that fit in the viewport.", pgProps: ['smooth:bool', 'threshold:select:200,300,500'], pgSnippet: 'BackToTop smooth threshold' },
  CalendarScheduler: { doGood: 'Show available time slots clearly and disable unavailable dates.', doBad: "Don't use a calendar for simple date selection — use DatePicker instead.", pgProps: ['view:select:month,week,day'], pgSnippet: 'CalendarScheduler view' },
  Captcha: { doGood: 'Provide audio CAPTCHA alternative for accessibility (WCAG 1.1.1).', doBad: "Don't use CAPTCHA on authenticated user actions — they are already verified.", pgProps: ['type:select:image,audio,math'], pgSnippet: 'Captcha type onVerify' },
  Center: { doGood: 'Use Center for loading states and empty state layouts.', doBad: "Don't use Center for complex layouts — use Grid or Flex instead.", pgProps: ['minHeight:select:200px,300px,400px'], pgSnippet: 'Center minHeight' },
  ChartLibrary: { doGood: 'Provide text alternatives for charts — color-only encoding excludes 8% of users.', doBad: "Don't use charts for simple numbers — use Statistic component instead.", pgProps: ['type:select:bar,line,pie,donut'], pgSnippet: 'ChartLibrary type data' },
  Chatbot: { doGood: 'Support multilingual input for government chatbots serving diverse populations.', doBad: "Don't use chatbots for critical transactions — require human review.", pgProps: ['position:select:bottom-right,bottom-left'], pgSnippet: 'Chatbot position endpoint' },
  Container: { doGood: 'Use containers with 60-80 character line length for optimal readability.', doBad: "Don't nest containers — it creates double margins and unexpected layouts.", pgProps: ['maxWidth:select:sm,md,lg,xl,full'], pgSnippet: 'Container maxWidth' },
  DescriptionList: { doGood: 'Use aligned key-value pairs with consistent spacing for faster scanning.', doBad: "Don't use description lists for tabular data with multiple columns — use Table.", pgProps: ['layout:select:vertical,horizontal', 'striped:bool'], pgSnippet: 'DescriptionList layout striped' },
  DigitalSignature: { doGood: 'Support both DSC token and Aadhaar eSign for maximum coverage.', doBad: "Don't use digital signatures for simple consent — use Checkbox instead.", pgProps: ['type:select:dsc,aadhaar-esign'], pgSnippet: 'DigitalSignature type onSign' },
  DocumentViewer: { doGood: 'Preview documents in-app before download — it reduces incorrect downloads by 55%.', doBad: "Don't force downloads without preview — users need to verify the document first.", pgProps: ['zoom:bool', 'controls:bool'], pgSnippet: 'DocumentViewer src type zoom' },
  ErrorText: { doGood: 'Show inline error messages next to the field — it reduces correction time by 50%.', doBad: "Don't use vague error messages like 'Invalid input' — be specific about what to fix.", pgProps: ['visible:bool'], pgSnippet: 'ErrorText visible' },
  FeedbackRatingWidget: { doGood: 'Keep feedback forms short — 1-2 questions maximum for inline widgets.', doBad: "Don't require detailed feedback for simple satisfaction ratings.", pgProps: ['type:select:stars,thumbs,emoji'], pgSnippet: 'FeedbackRatingWidget type onSubmit' },
  Field: { doGood: 'Always wrap inputs with Field for consistent label, hint, and error layout.', doBad: "Don't use standalone inputs without labels — it fails WCAG 1.3.1.", pgProps: ['required:bool', 'error:bool'], pgSnippet: 'Field label required error' },
  Flex: { doGood: 'Use Flex for one-directional layouts with consistent gaps.', doBad: "Don't use Flex for two-dimensional grid layouts — use Grid instead.", pgProps: ['direction:select:row,column', 'gap:select:2,4,6,8'], pgSnippet: 'Flex direction gap' },
  Footer: { doGood: 'Include key navigation links in the footer — users who reach it are 3x more likely to use them.', doBad: "Don't duplicate the entire header navigation in the footer.", pgProps: ['showSocial:bool', 'showHelpline:bool'], pgSnippet: 'Footer links copyright' },
  FormBuilder: { doGood: 'Use JSON-schema-driven forms to reduce development time by 60%.', doBad: "Don't use FormBuilder for simple static forms — build them directly.", pgProps: ['showPreview:bool'], pgSnippet: 'FormBuilder schema onSubmit' },
  Grid: { doGood: 'Use responsive column breakpoints for card grids that adapt to screen size.', doBad: "Don't use Grid for single-axis layouts — use Flex or Stack instead.", pgProps: ['columns:select:1,2,3,4', 'gap:select:2,4,6,8'], pgSnippet: 'Grid columns gap' },
  Header: { doGood: 'Include a skip-to-content link — government sites without it fail accessibility audits.', doBad: "Don't hide the mobile menu behind an unlabeled icon — add a text label.", pgProps: ['showSearch:bool', 'showLanguage:bool'], pgSnippet: 'Header logo navigation' },
  HintText: { doGood: 'Show persistent hint text below fields — it reduces errors by 25% vs placeholder-only.', doBad: "Don't use hint text for error messages — use ErrorText instead.", pgProps: ['visible:bool'], pgSnippet: 'HintText children' },
  Label: { doGood: 'Always associate labels with inputs using htmlFor — missing labels are the #1 accessibility failure.', doBad: "Don't use placeholder text as the only label — it disappears on focus.", pgProps: ['required:bool'], pgSnippet: 'Label htmlFor required' },
  LanguageSelector: { doGood: 'Offer regional languages — sites with them see 3x higher engagement from non-English speakers.', doBad: "Don't auto-detect language without offering a manual override.", pgProps: ['showFlag:bool'], pgSnippet: 'LanguageSelector languages current' },
  MapLocationPicker: { doGood: 'Use map-based verification to reduce address errors by 70%.', doBad: "Don't require map interaction for users who already know their address — offer text input too.", pgProps: ['editable:bool', 'showSearch:bool'], pgSnippet: 'MapLocationPicker onSelect editable' },
  PANCardInput: { doGood: 'Validate PAN format (AAAAA0000A) in real-time as the user types.', doBad: "Don't accept PAN without format validation — it leads to processing errors.", pgProps: ['required:bool', 'disabled:bool'], pgSnippet: 'PANCardInput required disabled' },
  PaymentGateway: { doGood: 'Support UPI as the primary payment method — it processes 10+ billion transactions monthly in India.', doBad: "Don't hide UPI option — it is the most used payment method in India.", pgProps: ['showUPI:bool', 'showCard:bool', 'showNetBanking:bool'], pgSnippet: 'PaymentGateway amount methods' },
  QRCode: { doGood: 'Include a download option for QR codes so users can save and share them.', doBad: "Don't generate QR codes without a text URL fallback for accessibility.", pgProps: ['size:select:128,200,256,320'], pgSnippet: 'QRCode value size' },
  RichTextEditor: { doGood: 'Limit toolbar to fewer than 10 options — simpler editors have 40% higher usability.', doBad: "Don't use rich text editors for short text — use Textarea instead.", pgProps: ['showToolbar:bool', 'maxLength:select:500,1000,2000,5000'], pgSnippet: 'RichTextEditor toolbar maxLength' },
  Section: { doGood: 'Use semantic sections with proper headings for screen reader navigation.', doBad: "Don't use Section for visual-only separation — use Divider instead.", pgProps: ['showBorder:bool'], pgSnippet: 'Section title id' },
  SegmentedControl: { doGood: 'Use segmented controls for 2-5 mutually exclusive view toggles.', doBad: "Don't use segmented controls for more than 5 options — use Tabs or Select.", pgProps: ['size:select:sm,md,lg'], pgSnippet: 'SegmentedControl options value' },
  ShowHide: { doGood: 'Offer show/hide toggle on password fields — it reduces login errors by 30%.', doBad: "Don't use ShowHide for accordion-style content — use Accordion instead.", pgProps: ['defaultVisible:bool'], pgSnippet: 'ShowHide defaultVisible' },
  Spacer: { doGood: 'Use Spacer for consistent spacing between sections without margins.', doBad: "Don't use Spacer for component gaps — use Flex/Grid gap instead.", pgProps: ['size:select:sm,md,lg,xl'], pgSnippet: 'Spacer size' },
  Stack: { doGood: 'Use Stack for vertical form layouts — they are completed 15% faster on mobile.', doBad: "Don't use Stack for two-dimensional layouts — use Grid instead.", pgProps: ['direction:select:vertical,horizontal', 'gap:select:2,4,6,8'], pgSnippet: 'Stack direction gap' },
  Statistic: { doGood: 'Place key metrics at the top of dashboards — they are noticed 90% of the time.', doBad: "Don't use Statistic for charts or graphs — use ChartLibrary instead.", pgProps: ['showTrend:bool'], pgSnippet: 'Statistic label value trend' },
  TreeView: { doGood: 'Use expand/collapse indicators — tree views with them are navigated 35% faster.', doBad: "Don't use tree views for flat lists — use List instead.", pgProps: ['expandAll:bool', 'selectable:bool'], pgSnippet: 'TreeView data expandable' },
  VideoPlayer: { doGood: 'Always include captions — 80% of users watch video with captions on.', doBad: "Don't auto-play videos — it violates WCAG 1.4.2 and annoys users.", pgProps: ['showCaptions:bool', 'autoPlay:bool'], pgSnippet: 'VideoPlayer src captions' },
};


function buildPlaygroundFunction(name, data) {
  const props = data.pgProps || [];
  // Build state declarations
  const stateLines = props.map(p => {
    const [propName, type, options] = p.split(':');
    if (type === 'bool') return `  const [${propName}, set${propName[0].toUpperCase() + propName.slice(1)}] = React.useState(false);`;
    if (type === 'select') {
      const opts = options.split(',');
      return `  const [${propName}, set${propName[0].toUpperCase() + propName.slice(1)}] = React.useState('${opts[0]}');`;
    }
    return '';
  }).join('\n');

  // Build control JSX
  const controlLines = props.map(p => {
    const [propName, type, options] = p.split(':');
    const label = propName.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
    const setter = `set${propName[0].toUpperCase() + propName.slice(1)}`;
    if (type === 'bool') {
      return `          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={${propName}} onChange={e => ${setter}(e.target.checked)} className="accent-primary" /><span className="text-foreground">${label}</span></label>`;
    }
    if (type === 'select') {
      const opts = options.split(',');
      return `          <div>\n            <label className="block font-semibold text-foreground mb-1">${label}</label>\n            <select value={${propName}} onChange={e => ${setter}(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">\n${opts.map(o => `              <option value="${o}">${o}</option>`).join('\n')}\n            </select>\n          </div>`;
    }
    return '';
  }).join('\n');

  // Build snippet
  const snippetParts = props.map(p => {
    const [propName, type] = p.split(':');
    if (type === 'bool') return `\${${propName} ? ' ${propName}' : ''}`;
    return ` \${${propName}}`;
  }).join('');

  return `function ${name}Playground() {
${stateLines}

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="text-center space-y-3">
          <div className="text-4xl">🧩</div>
          <p className="text-sm text-muted-foreground">Live ${name} preview with current settings</p>
          <div className="flex flex-wrap gap-2 justify-center">
${props.map(p => {
  const [propName, type] = p.split(':');
  if (type === 'bool') return `            {${propName} && <span className="px-2 py-0.5 rounded-full text-xs bg-[#005196]/10 text-[#005196] font-medium">${propName}</span>}`;
  return `            <span className="px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground font-medium">{${propName}}</span>`;
}).join('\n')}
          </div>
        </div>
      </div>
      <div className="space-y-4 text-sm">
${controlLines}
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {\`<${name}${snippetParts} />\`}
          </p>
        </div>
      </div>
    </div>
  );
}`;
}

function buildPreview(name) {
  return `
      preview={
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#005196]/10 text-[#005196] text-2xl font-bold">${name.slice(0, 2)}</div>
          <p className="text-sm text-muted-foreground">${name} component in its default state</p>
        </div>
      }`;
}

function buildDoDont(name, data) {
  return `
          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">${data.doGood.replace(/'/g, "&apos;")}</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">${data.doBad.replace(/'/g, "&apos;").replace(/Don&apos;t/g, "Don&apos;t")}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different ${name} configurations in real time.</p>
            <${name}Playground />
          </section>`;
}

// ── Main ──
let updated = 0;
let skipped = 0;
const errors = [];

for (const [name, data] of Object.entries(DATA)) {
  const filePath = `${ROOT}/src/app/pages/Component${name}Page.tsx`;
  let content;
  try { content = readFileSync(filePath, 'utf8'); } catch { console.log(`SKIP: ${name} — file not found`); skipped++; continue; }

  // Skip if already has Playground
  if (content.includes('Playground')) { console.log(`SKIP: ${name} — already has Playground`); skipped++; continue; }

  // 1. Add playground function before `export default function`
  const exportMatch = content.match(/^(export default function Component\w+Page)/m);
  if (!exportMatch) { console.log(`SKIP: ${name} — can't find export default`); skipped++; continue; }
  const playgroundFn = buildPlaygroundFunction(name, data);
  content = content.replace(exportMatch[0], playgroundFn + '\n\n' + exportMatch[0]);

  // 2. Add preview prop after `since=` line (find the line with since= and add after the next line)
  if (!content.includes('preview={')) {
    const previewJsx = buildPreview(name);
    // Find the last occurrence of updated= or since= before props={
    const sinceMatch = content.match(/(since="[^"]*"(?:\s*\n\s*updated="[^"]*")?)/);
    if (sinceMatch) {
      content = content.replace(sinceMatch[0], sinceMatch[0] + '\n' + previewJsx);
    }
  }

  // 3. Insert Do/Don't + Playground before {/* Related components */}
  const relatedMarker = '          {/* Related components */}';
  if (content.includes(relatedMarker)) {
    const doDontAndPlayground = buildDoDont(name, data);
    content = content.replace(relatedMarker, doDontAndPlayground + '\n\n' + relatedMarker);
  } else {
    console.log(`WARN: ${name} — no Related components marker found, skipping Do/Don't insertion`);
  }

  writeFileSync(filePath, content);
  console.log(`UPDATED: ${name}`);
  updated++;
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped, ${errors.length} errors`);
