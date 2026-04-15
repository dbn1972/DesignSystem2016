/**
 * Fixes playground Preview calls that are missing required props.
 * Replaces <FooPreview /> with <FooPreview prop1={val} prop2={val} />
 */
import { readFileSync, writeFileSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

const FIXES = {
  AddressAutocompleteIndia: '<AddressAutocompleteIndiaPreview />',
  Autocomplete: '<AutocompletePreview />',
  BackToTop: '<BackToTopPreview />',
  Chatbot: '<ChatbotPreview />',
  CodeBlock: '<CodeBlockPreview />',
  DescriptionList: '<DescriptionListPreview />',
  DigitalSignature: '<DigitalSignaturePreview />',
  DocumentViewer: '<DocumentViewerPreview />',
  Drawer: '<DrawerPreview />',
  Dropdown: '<DropdownPreview />',
  EmptyState: '<EmptyStatePreview />',
  ErrorText: '<ErrorTextPreview />',
  FormBuilder: '<FormBuilderPreview />',
  HintText: '<HintTextPreview />',
  LanguageSelector: '<LanguageSelectorPreview />',
  MapLocationPicker: '<MapLocationPickerPreview />',
  Menu: '<MenuPreview />',
  PANCardInput: '<PANCardInputPreview />',
  PaymentGateway: '<PaymentGatewayPreview />',
  Popover: '<PopoverPreview />',
  RichTextEditor: '<RichTextEditorPreview />',
  Section: '<SectionPreview />',
  ShowHide: '<ShowHidePreview />',
  Statistic: '<StatisticPreview />',
  Timeline: '<TimelinePreview />',
  Tooltip: '<TooltipPreview />',
  TreeView: '<TreeViewPreview />',
  VideoPlayer: '<VideoPlayerPreview />',
};

// For each, determine what props to add based on the Preview component signature
const REPLACEMENTS = {
  AddressAutocompleteIndia: '<AddressAutocompleteIndiaPreview onSelect={() => {}} />',
  Autocomplete: '<AutocompletePreview options={["Delhi", "Mumbai", "Bangalore", "Chennai"]} placeholder="Search city..." />',
  BackToTop: '<BackToTopPreview threshold={100} />',
  Chatbot: '<ChatbotPreview position={position} minimized={minimized} botName="UX4G Assistant" greeting="How can I help?" />',
  CodeBlock: '<CodeBlockPreview language="tsx" code={\'<Button variant="primary">Submit</Button>\'} showLineNumbers />',
  DescriptionList: '<DescriptionListPreview items={[{term: "Name", detail: "Rajesh Kumar"}, {term: "Status", detail: "Active"}, {term: "ID", detail: "CERT-001"}]} />',
  DigitalSignature: '<DigitalSignaturePreview type={type} />',
  DocumentViewer: '<DocumentViewerPreview fileType="pdf" showToolbar />',
  Drawer: '<DrawerPreview position="right" size="md" />',
  Dropdown: '<DropdownPreview items={["View", "Edit", "Delete"]} label="Actions" placement={placement} />',
  EmptyState: '<EmptyStatePreview title="No applications yet" description="Start your first application" actionLabel="Get Started" />',
  ErrorText: '<ErrorTextPreview icon={icon}>{message}</ErrorTextPreview>',
  FormBuilder: '<FormBuilderPreview layout={layout} />',
  HintText: '<HintTextPreview icon={icon}>{message}</HintTextPreview>',
  LanguageSelector: '<LanguageSelectorPreview languages={[{code:"en",label:"English"},{code:"hi",label:"हिन्दी"},{code:"ta",label:"தமிழ்"}]} currentLanguage="en" showFlags={showFlag} />',
  MapLocationPicker: '<MapLocationPickerPreview editable showSearch />',
  Menu: '<MenuPreview items={[{label:"View"},{label:"Edit"},{label:"Delete"}]} trigger="Actions" placement={placement} />',
  PANCardInput: '<PANCardInputPreview />',
  PaymentGateway: '<PaymentGatewayPreview amount={500} serviceName="Certificate Fee" />',
  Popover: '<PopoverPreview content="Help text content" placement="top" />',
  RichTextEditor: '<RichTextEditorPreview toolbar={["bold","italic","list","link"]} />',
  Section: '<SectionPreview variant="default" spacing={spacing} containerized={containerized}><p className="text-sm text-muted-foreground">Section content</p></SectionPreview>',
  ShowHide: '<ShowHidePreview above={400}><p className="text-sm text-muted-foreground">Hidden content revealed</p></ShowHidePreview>',
  Statistic: '<StatisticPreview label="Pending Cases" value={42} trend={showTrend ? "+12%" : undefined} prefix={prefix || undefined} />',
  Timeline: '<TimelinePreview items={[{title:"Submitted",date:"12 Apr",status:"complete"},{title:"Under Review",date:"14 Apr",status:"active"},{title:"Approved",date:"",status:"pending"}]} />',
  Tooltip: '<TooltipPreview content="Delete this item" placement={position} arrow={arrow}><button className="p-2 border border-border rounded text-sm">🗑 Delete</button></TooltipPreview>',
  TreeView: '<TreeViewPreview data={[{label:"Department A",children:[{label:"Division 1"},{label:"Division 2"}]},{label:"Department B"}]} expandable />',
  VideoPlayer: '<VideoPlayerPreview controls poster="/placeholder.jpg" />',
};

let updated = 0;
for (const [name, oldCall] of Object.entries(FIXES)) {
  const filePath = `${ROOT}/src/app/pages/Component${name}Page.tsx`;
  let content = readFileSync(filePath, 'utf8');
  
  const newCall = REPLACEMENTS[name];
  if (!newCall) continue;

  // Only replace inside the playground function
  const pgRegex = new RegExp(`function ${name}Playground[\\s\\S]*?^}`, 'gm');
  const pgMatch = content.match(pgRegex);
  if (!pgMatch) continue;

  const oldPg = pgMatch[0];
  if (!oldPg.includes(oldCall)) continue;

  const newPg = oldPg.replace(oldCall, newCall);
  content = content.replace(oldPg, newPg);
  writeFileSync(filePath, content);
  console.log(`FIXED: ${name}`);
  updated++;
}

console.log(`\nDone: ${updated} fixed`);
