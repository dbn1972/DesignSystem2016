/**
 * Wires playground state variables to Preview component props.
 * Replaces `<FooPreview />` with `<FooPreview prop1={prop1} prop2={prop2} />`
 * in the playground preview area.
 *
 * Run: node scripts/wire-playgrounds.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

// Map: component name → how to wire state to Preview props
// Each entry: the JSX to replace the unwired Preview call with
const WIRING = {
  Table: { noProps: true, replacement: '<div className={`w-full overflow-hidden rounded-lg ${bordered ? "border border-border" : ""}`}><table className="w-full text-sm"><thead className="bg-muted"><tr><th className="px-4 py-2 text-left font-semibold">Application</th><th className="px-4 py-2 text-left font-semibold">Status</th><th className="px-4 py-2 text-left font-semibold">Date</th></tr></thead><tbody>{[["CERT-001","Pending","12 Apr"],["CERT-002","Approved","10 Apr"],["CERT-003","Rejected","8 Apr"]].map(([id,status,date], i) => <tr key={i} className={`border-t border-border ${striped && i % 2 === 1 ? "bg-muted/30" : ""}`}><td className="px-4 py-2">{id}</td><td className="px-4 py-2">{status}</td><td className="px-4 py-2">{date}</td></tr>)}</tbody></table></div>' },
  Card: { props: 'title="Service Card"' },
  Tabs: { props: 'variant="default" items={["Overview", "Documents", "Status"]}' },
  Accordion: { noProps: true, replacement: null }, // AccordionPreview manages its own state
  Breadcrumb: { noProps: true, replacement: null },
  Stepper: { noProps: true, replacement: null },
  Progress: { props: 'value={50} label="Uploading document..." showPercentage' },
  Spinner: { props: 'size={size} label="Loading..."' },
  Pagination: { props: 'totalPages={10}' },
  DatePicker: { noProps: true, replacement: null },
  FileUpload: { noProps: true, replacement: null },
  OTPInput: { noProps: true, replacement: null },
  Autocomplete: { noProps: true, replacement: null },
  Avatar: { props: 'name="Rajesh Kumar" size={size}' },
  Divider: { props: 'orientation={orientation} variant={variant}' },
  Tooltip: { noProps: true, replacement: null },
  Drawer: { noProps: true, replacement: null },
  Menu: { noProps: true, replacement: null },
  Switch: { props: 'label="Dark mode" disabled={disabled}' },
  Skeleton: { props: 'variant={variant} animated={animation !== "none"}' },
  Popover: { noProps: true, replacement: null },
  Tag: { props: 'variant={variant} closeable={removable}' },
  Timeline: { noProps: true, replacement: null },
  Dropdown: { noProps: true, replacement: null },
  EmptyState: { noProps: true, replacement: null },
  CodeBlock: { noProps: true, replacement: null },
  DataGrid: { noProps: true, replacement: null },
  AadhaarInput: { noProps: true, replacement: null },
  AddressAutocompleteIndia: { noProps: true, replacement: null },
  ApplicationTracker: { noProps: true, replacement: null },
  AspectRatio: { props: 'ratio={ratio}' },
  BackToTop: { noProps: true, replacement: null },
  CalendarScheduler: { props: 'view={view}' },
  Captcha: { props: 'type={type}' },
  Center: { props: 'minHeight={minHeight}' },
  ChartLibrary: { noProps: true, replacement: null },
  Chatbot: { noProps: true, replacement: null },
  Container: { props: 'maxWidth={maxWidth}' },
  DescriptionList: { noProps: true, replacement: null },
  DigitalSignature: { noProps: true, replacement: null },
  DocumentViewer: { noProps: true, replacement: null },
  ErrorText: { noProps: true, replacement: null },
  FeedbackRatingWidget: { props: 'type={type}' },
  Field: { props: 'error={error} disabled={false}' },
  Flex: { props: 'direction={direction} gap={gap}' },
  Footer: { props: 'showSocial={showSocial}' },
  FormBuilder: { noProps: true, replacement: null },
  Grid: { props: 'cols={Number(columns)}' },
  Header: { props: 'withSearch={showSearch} showProfile' },
  HintText: { noProps: true, replacement: null },
  LanguageSelector: { noProps: true, replacement: null },
  MapLocationPicker: { noProps: true, replacement: null },
  PANCardInput: { noProps: true, replacement: null },
  PaymentGateway: { noProps: true, replacement: null },
  QRCode: { props: 'size={Number(size)}' },
  RichTextEditor: { noProps: true, replacement: null },
  Section: { noProps: true, replacement: null },
  SegmentedControl: { noProps: true, replacement: null },
  ShowHide: { noProps: true, replacement: null },
  Spacer: { props: 'size={size}' },
  Stack: { props: 'direction={direction} spacing={gap}' },
  Statistic: { noProps: true, replacement: null },
  TreeView: { noProps: true, replacement: null },
  VideoPlayer: { noProps: true, replacement: null },
};

let updated = 0;
let skipped = 0;

const pages = readdirSync(`${ROOT}/src/app/pages`).filter(f => f.startsWith('Component') && f.endsWith('Page.tsx'));

for (const file of pages) {
  const name = file.replace('Component', '').replace('Page.tsx', '');
  const filePath = `${ROOT}/src/app/pages/${file}`;
  let content = readFileSync(filePath, 'utf8');

  const wiring = WIRING[name];
  if (!wiring) continue;

  // Find the unwired Preview call in the playground: <FooPreview />
  const unwiredPattern = new RegExp(`<${name}Preview\\s*/>`, 'g');
  
  if (wiring.noProps && wiring.replacement) {
    // Replace with custom JSX
    const playgroundSection = content.match(new RegExp(`function ${name}Playground[\\s\\S]*?^}`, 'gm'));
    if (playgroundSection) {
      const oldPg = playgroundSection[0];
      const newPg = oldPg.replace(unwiredPattern, wiring.replacement);
      if (newPg !== oldPg) {
        content = content.replace(oldPg, newPg);
        writeFileSync(filePath, content);
        console.log(`UPDATED: ${name} (custom replacement)`);
        updated++;
      } else {
        skipped++;
      }
    }
  } else if (wiring.props) {
    // Add props to the existing Preview call
    const withProps = `<${name}Preview ${wiring.props} />`;
    const playgroundSection = content.match(new RegExp(`function ${name}Playground[\\s\\S]*?^}`, 'gm'));
    if (playgroundSection) {
      const oldPg = playgroundSection[0];
      if (unwiredPattern.test(oldPg)) {
        const newPg = oldPg.replace(unwiredPattern, withProps);
        content = content.replace(oldPg, newPg);
        writeFileSync(filePath, content);
        console.log(`UPDATED: ${name} (wired props: ${wiring.props})`);
        updated++;
      } else {
        console.log(`SKIP: ${name} — Preview already has props or pattern not found`);
        skipped++;
      }
    }
  } else {
    // noProps and no replacement — Preview manages its own state, skip
    skipped++;
  }
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped`);
