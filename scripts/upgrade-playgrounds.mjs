/**
 * Upgrades all playground preview areas from generic emoji placeholders
 * to actual *Preview component renderings wired to playground state.
 * 
 * Run: node scripts/upgrade-playgrounds.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

// For each component, define the playground preview JSX that uses the actual Preview component
// The JSX can reference state variables defined in the playground function
const PLAYGROUND_PREVIEWS = {
  Table: '<TablePreview />',
  Card: '<CardPreview title="Service Card"><p className="text-sm text-muted-foreground">Card content preview</p></CardPreview>',
  Tabs: '<TabsPreview variant="default" items={["Overview", "Documents", "Status"]} />',
  Accordion: '<AccordionPreview />',
  Breadcrumb: '<BreadcrumbPreview />',
  Stepper: '<StepperPreview />',
  Progress: '<ProgressPreview value={50} label="Uploading..." showPercentage />',
  Spinner: '<SpinnerPreview size={size} label="Loading..." />',
  Pagination: '<PaginationPreview totalPages={10} />',
  DatePicker: '<DatePickerPreview />',
  FileUpload: '<FileUploadPreview />',
  OTPInput: '<OTPInputPreview />',
  Autocomplete: '<AutocompletePreview />',
  Avatar: '<div className="flex gap-4"><AvatarPreview name="Rajesh Kumar" size={size} /><AvatarPreview name="Suresh M" size={size} /><AvatarPreview size={size} /></div>',
  Divider: '<div className="w-full space-y-4"><p className="text-sm text-muted-foreground">Content above</p><DividerPreview /><p className="text-sm text-muted-foreground">Content below</p></div>',
  Tooltip: '<TooltipPreview />',
  Drawer: '<DrawerPreview />',
  Menu: '<MenuPreview />',
  Switch: '<SwitchPreview />',
  Skeleton: '<SkeletonPreview />',
  Popover: '<PopoverPreview />',
  Tag: '<div className="flex flex-wrap gap-2"><TagPreview>PDF</TagPreview><TagPreview variant="success">Verified</TagPreview><TagPreview removable>Filter Tag</TagPreview></div>',
  Timeline: '<TimelinePreview />',
  Dropdown: '<DropdownPreview />',
  EmptyState: '<EmptyStatePreview />',
  List: '<div className="w-full max-w-sm border border-border rounded-lg overflow-hidden"><div className="flex items-center gap-3 px-4 py-3 border-b border-border"><span className="w-2 h-2 rounded-full bg-green-500" /><span className="text-sm text-foreground">Aadhaar Card</span><span className="ml-auto text-xs text-green-600">Verified</span></div><div className="flex items-center gap-3 px-4 py-3 border-b border-border"><span className="w-2 h-2 rounded-full bg-yellow-500" /><span className="text-sm text-foreground">Photo</span><span className="ml-auto text-xs text-yellow-600">Pending</span></div><div className="flex items-center gap-3 px-4 py-3"><span className="w-2 h-2 rounded-full bg-muted" /><span className="text-sm text-foreground">Address Proof</span><span className="ml-auto text-xs text-muted-foreground">Not uploaded</span></div></div>',
  CodeBlock: '<CodeBlockPreview />',
  DataGrid: '<DataGridPreview />',
  AadhaarInput: '<AadhaarInputPreview />',
  AddressAutocompleteIndia: '<AddressAutocompleteIndiaPreview />',
  ApplicationTracker: '<div className="w-full max-w-md"><div className="flex items-center gap-3 mb-3"><div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-xs font-bold">✓</div><div className="flex-1 h-1 bg-green-500 rounded" /><div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-xs font-bold">✓</div><div className="flex-1 h-1 bg-yellow-400 rounded" /><div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold">⏳</div><div className="flex-1 h-1 bg-muted rounded" /><div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground text-xs">4</div></div><div className="flex justify-between text-xs text-muted-foreground"><span>Submitted</span><span>Verified</span><span>Processing</span><span>Complete</span></div></div>',
  AspectRatio: '<AspectRatioPreview />',
  BackToTop: '<BackToTopPreview />',
  CalendarScheduler: '<CalendarSchedulerPreview />',
  Captcha: '<CaptchaPreview />',
  Center: '<CenterPreview />',
  ChartLibrary: '<div className="w-full max-w-md"><div className="flex items-end gap-3 h-32">{[80,55,90,40,70].map((h,i) => <div key={i} className="flex-1 bg-[#005196] rounded-t transition-all" style={{height: h+"%", opacity: 0.5 + i*0.1}} />)}</div><div className="flex justify-between text-xs text-muted-foreground mt-2 border-t border-border pt-2"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span></div></div>',
  Chatbot: '<ChatbotPreview />',
  Container: '<ContainerPreview />',
  DescriptionList: '<DescriptionListPreview />',
  DigitalSignature: '<DigitalSignaturePreview />',
  DocumentViewer: '<DocumentViewerPreview />',
  ErrorText: '<ErrorTextPreview />',
  FeedbackRatingWidget: '<FeedbackRatingWidgetPreview />',
  Field: '<FieldPreview />',
  Flex: '<FlexPreview />',
  Footer: '<FooterPreview />',
  FormBuilder: '<FormBuilderPreview />',
  Grid: '<GridPreview />',
  Header: '<HeaderPreview />',
  HintText: '<HintTextPreview />',
  Label: '<LabelPreview />',
  LanguageSelector: '<LanguageSelectorPreview />',
  MapLocationPicker: '<MapLocationPickerPreview />',
  PANCardInput: '<PANCardInputPreview />',
  PaymentGateway: '<PaymentGatewayPreview />',
  QRCode: '<QRCodePreview />',
  RichTextEditor: '<RichTextEditorPreview />',
  Section: '<SectionPreview />',
  SegmentedControl: '<SegmentedControlPreview />',
  ShowHide: '<ShowHidePreview />',
  Spacer: '<div className="w-full max-w-sm"><div className="bg-muted/50 rounded p-3 text-sm text-muted-foreground">Content above</div><SpacerPreview /><div className="bg-muted/50 rounded p-3 text-sm text-muted-foreground">Content below</div></div>',
  Stack: '<StackPreview />',
  Statistic: '<StatisticPreview />',
  Stepper: '<StepperPreview />',
  Switch: '<SwitchPreview />',
  TreeView: '<TreeViewPreview />',
  VideoPlayer: '<VideoPlayerPreview />',
};

// The generic placeholder pattern to find and replace
const EMOJI_BLOCK = /        <div className="text-center space-y-3">\n          <div className="text-4xl">🧩<\/div>\n          <p className="text-sm text-muted-foreground">Live \w[\w\s]* preview with current settings<\/p>\n          <div className="flex flex-wrap gap-2 justify-center">\n(?:.*\n)*?          <\/div>\n        <\/div>/;

let updated = 0;
let skipped = 0;

const pages = readdirSync(`${ROOT}/src/app/pages`).filter(f => f.startsWith('Component') && f.endsWith('Page.tsx'));

for (const file of pages) {
  const name = file.replace('Component', '').replace('Page.tsx', '');
  const filePath = `${ROOT}/src/app/pages/${file}`;
  let content = readFileSync(filePath, 'utf8');

  if (!content.includes('🧩')) {
    continue; // Already upgraded
  }

  const previewJsx = PLAYGROUND_PREVIEWS[name];
  if (!previewJsx) {
    console.log(`SKIP: ${name} — no playground preview defined`);
    skipped++;
    continue;
  }

  // Find the emoji block and replace with actual preview
  // The block starts with <div className="text-center space-y-3"> containing 🧩
  // and ends before </div>\n      </div>\n      <div className="space-y-4
  
  // Use a simpler approach: find the line with 🧩 and replace the surrounding block
  const lines = content.split('\n');
  let emojiLineIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('🧩')) {
      emojiLineIdx = i;
      break;
    }
  }

  if (emojiLineIdx === -1) {
    console.log(`SKIP: ${name} — no emoji found`);
    skipped++;
    continue;
  }

  // Find the start of the block (the <div className="text-center space-y-3"> line)
  let blockStart = emojiLineIdx;
  for (let i = emojiLineIdx; i >= 0; i--) {
    if (lines[i].includes('text-center space-y-3')) {
      blockStart = i;
      break;
    }
  }

  // Find the end of the block (the closing </div> that matches the text-center div)
  // Count div nesting from blockStart
  let depth = 0;
  let blockEnd = blockStart;
  for (let i = blockStart; i < lines.length; i++) {
    const opens = (lines[i].match(/<div/g) || []).length;
    const closes = (lines[i].match(/<\/div>/g) || []).length;
    depth += opens - closes;
    if (depth <= 0) {
      blockEnd = i;
      break;
    }
  }

  // Replace the block with the actual preview
  const indent = '        ';
  const newBlock = `${indent}<div className="w-full flex items-center justify-center">\n${indent}  ${previewJsx}\n${indent}</div>`;
  
  const newLines = [...lines.slice(0, blockStart), newBlock, ...lines.slice(blockEnd + 1)];
  content = newLines.join('\n');

  writeFileSync(filePath, content);
  console.log(`UPDATED: ${name}`);
  updated++;
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped`);
