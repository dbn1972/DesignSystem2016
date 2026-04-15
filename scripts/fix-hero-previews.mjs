/**
 * Fixes all preview= hero calls that pass Preview without props.
 * Replaces with properly-propped Preview calls showing 2-3 states.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

// Map: component name → replacement preview JSX
const HERO_PREVIEWS = {
  Accordion: '<AccordionPreview />',  // manages own state, OK as-is
  AadhaarInput: '<AadhaarInputPreview />',  // manages own state
  AddressAutocompleteIndia: '<AddressAutocompleteIndiaPreview />',  // manages own state
  AspectRatio: '<div className="flex gap-4"><AspectRatioPreview ratio={16/9} maxWidth="200px"><div className="bg-[#005196]/10 w-full h-full flex items-center justify-center text-sm text-[#005196]">16:9</div></AspectRatioPreview><AspectRatioPreview ratio={1} maxWidth="120px"><div className="bg-[#005196]/10 w-full h-full flex items-center justify-center text-sm text-[#005196]">1:1</div></AspectRatioPreview></div>',
  Autocomplete: '<AutocompletePreview options={["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]} placeholder="Search city..." />',
  Avatar: '<div className="flex items-center gap-4"><AvatarPreview name="Rajesh Kumar" size="lg" /><AvatarPreview name="Suresh M" size="md" /><AvatarPreview size="sm" /></div>',
  BackToTop: '<BackToTopPreview />',  // renders a button, OK
  Breadcrumb: '<BreadcrumbPreview />',  // manages own state
  CalendarScheduler: '<CalendarSchedulerPreview view="month" />',
  Card: '<div className="flex gap-4"><CardPreview title="Birth Certificate"><p className="text-sm text-muted-foreground">Apply online</p></CardPreview><CardPreview title="Income Certificate"><p className="text-sm text-muted-foreground">Verify income</p></CardPreview></div>',
  Center: '<CenterPreview minHeight="120px"><p className="text-sm text-muted-foreground">Centered content</p></CenterPreview>',
  Chatbot: '<ChatbotPreview position="bottom-right" botName="UX4G Assistant" greeting="How can I help you today?" />',
  CodeBlock: '<CodeBlockPreview language="tsx" code={\'import { Button } from "@ux4g/react-core";\\n\\n<Button variant="primary">Submit</Button>\'} showLineNumbers />',
  Container: '<ContainerPreview maxWidth="md"><div className="bg-muted/30 rounded p-4 text-sm text-muted-foreground text-center">Content within max-width container</div></ContainerPreview>',
  DataGrid: '<DataGridPreview />',  // manages own state
  DatePicker: '<DatePickerPreview />',  // manages own state
  DescriptionList: '<DescriptionListPreview items={[{term:"Name",detail:"Rajesh Kumar"},{term:"Application",detail:"CERT-2026-001"},{term:"Status",detail:"Under Review"}]} />',
  DigitalSignature: '<DigitalSignaturePreview type="dsc" />',
  Divider: '<div className="w-full max-w-sm space-y-3"><p className="text-sm text-muted-foreground">Section A content</p><DividerPreview /><p className="text-sm text-muted-foreground">Section B content</p></div>',
  DocumentViewer: '<DocumentViewerPreview fileType="pdf" showToolbar />',
  Drawer: '<DrawerPreview position="right" size="md" />',
  Dropdown: '<DropdownPreview items={["View","Edit","Download","Delete"]} label="Actions" />',
  EmptyState: '<EmptyStatePreview title="No applications yet" description="Start your first application to see it here." actionLabel="Start Application" />',
  ErrorText: '<ErrorTextPreview icon><span>This field is required</span></ErrorTextPreview>',
  FeedbackRatingWidget: '<FeedbackRatingWidgetPreview type="stars" maxRating={5} />',
  Field: '<FieldPreview error={false}><input className="w-full px-3 py-2 border border-border rounded" placeholder="Full Name" /></FieldPreview>',
  FileUpload: '<FileUploadPreview />',  // manages own state
  Flex: '<FlexPreview direction="row" gap="4"><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 1</div><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 2</div><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 3</div></FlexPreview>',
  Footer: '<FooterPreview variant="default" showSocial />',
  FormBuilder: '<FormBuilderPreview layout="vertical" />',
  Grid: '<GridPreview cols={3}><div className="p-4 bg-[#005196]/10 rounded text-sm text-center">1</div><div className="p-4 bg-[#005196]/10 rounded text-sm text-center">2</div><div className="p-4 bg-[#005196]/10 rounded text-sm text-center">3</div></GridPreview>',
  Header: '<HeaderPreview variant="default" withSearch showProfile />',
  HintText: '<HintTextPreview>Enter your 12-digit Aadhaar number without spaces</HintTextPreview>',
  LanguageSelector: '<LanguageSelectorPreview languages={[{code:"en",label:"English"},{code:"hi",label:"हिन्दी"},{code:"ta",label:"தமிழ்"}]} currentLanguage="en" showFlags />',
  MapLocationPicker: '<MapLocationPickerPreview editable showSearch />',
  Menu: '<MenuPreview items={[{label:"Profile"},{label:"Settings"},{label:"Logout"}]} trigger="User Menu" />',
  OTPInput: '<OTPInputPreview />',  // manages own state
  Pagination: '<PaginationPreview totalPages={10} />',
  PANCardInput: '<PANCardInputPreview />',  // manages own state
  PaymentGateway: '<PaymentGatewayPreview amount={500} serviceName="Certificate Application Fee" />',
  Popover: '<PopoverPreview content="This is additional help text with a link." placement="top" />',
  Progress: '<div className="w-full max-w-md space-y-4"><ProgressPreview value={75} label="Uploading Aadhaar..." showPercentage /><ProgressPreview value={30} label="Processing..." variant="default" /></div>',
  QRCode: '<QRCodePreview value="https://ux4g.gov.in/verify/CERT-2026-001" size={180} />',
  RichTextEditor: '<RichTextEditorPreview toolbar={["bold","italic","underline","list","link"]} />',
  Section: '<SectionPreview variant="default" containerized><p className="text-sm text-muted-foreground">Section content with proper semantic markup</p></SectionPreview>',
  ShowHide: '<ShowHidePreview above={200}><p className="text-sm text-muted-foreground">This content can be toggled</p></ShowHidePreview>',
  Skeleton: '<div className="w-full max-w-sm space-y-3"><SkeletonPreview variant="text" width="75%" /><SkeletonPreview variant="text" width="100%" /><SkeletonPreview variant="text" width="50%" /></div>',
  Spacer: '<div className="w-full max-w-sm"><div className="bg-muted/30 rounded p-3 text-sm text-muted-foreground">Content above</div><SpacerPreview size="lg" /><div className="bg-muted/30 rounded p-3 text-sm text-muted-foreground">Content below</div></div>',
  Spinner: '<div className="flex items-center gap-6"><SpinnerPreview size="sm" label="Loading..." /><SpinnerPreview size="md" label="Loading..." /><SpinnerPreview size="lg" label="Loading..." /></div>',
  Stack: '<StackPreview direction="vertical" spacing="md"><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 1</div><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 2</div><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 3</div></StackPreview>',
  Statistic: '<div className="flex gap-6"><StatisticPreview label="Pending Cases" value={42} trend="+12%" /><StatisticPreview label="Approved Today" value={156} /></div>',
  Stepper: '<StepperPreview />',  // manages own state
  Switch: '<SwitchPreview label="Dark mode" />',
  Table: '<TablePreview />',  // manages own state
  Tabs: '<TabsPreview variant="default" items={["Overview","Documents","Status"]} />',
  Tag: '<div className="flex gap-2"><TagPreview variant="default">PDF</TagPreview><TagPreview variant="success">Verified</TagPreview><TagPreview variant="warning">Pending</TagPreview><TagPreview closeable>Filter</TagPreview></div>',
  Timeline: '<TimelinePreview items={[{title:"Submitted",date:"12 Apr 2026",status:"complete"},{title:"Under Review",date:"14 Apr 2026",status:"active"},{title:"Approved",date:"",status:"pending"}]} />',
  Tooltip: '<TooltipPreview content="Delete this application" placement="top"><button className="px-3 py-2 border border-border rounded text-sm hover:bg-muted">Hover me</button></TooltipPreview>',
  TreeView: '<TreeViewPreview data={[{label:"Ministry of IT",children:[{label:"Digital India"},{label:"MeitY"}]},{label:"Ministry of Finance",children:[{label:"Tax Department"}]}]} expandable />',
  VideoPlayer: '<VideoPlayerPreview controls />',
};

const pages = readdirSync(`${ROOT}/src/app/pages`).filter(f => f.startsWith('Component') && f.endsWith('Page.tsx'));
let updated = 0;

for (const file of pages) {
  const name = file.replace('Component', '').replace('Page.tsx', '');
  if (!HERO_PREVIEWS[name]) continue;
  
  const filePath = `${ROOT}/src/app/pages/${file}`;
  let content = readFileSync(filePath, 'utf8');
  
  // Find the preview= block with empty Preview call
  const oldPattern = `<${name}Preview />`;
  
  // Only replace in the preview= prop area (not in playground or examples)
  const previewStart = content.indexOf('preview={');
  if (previewStart === -1) continue;
  const previewEnd = content.indexOf('}', content.indexOf('</div>', previewStart) + 6);
  const previewBlock = content.slice(previewStart, previewEnd + 1);
  
  if (!previewBlock.includes(oldPattern)) continue;
  
  const newPreviewBlock = previewBlock.replace(
    /        <div className="w-full max-w-2xl">\n          <\w+Preview \/>\n        <\/div>/,
    `        <div className="w-full max-w-2xl">\n          ${HERO_PREVIEWS[name]}\n        </div>`
  );
  
  if (newPreviewBlock === previewBlock) continue;
  
  content = content.replace(previewBlock, newPreviewBlock);
  writeFileSync(filePath, content);
  console.log(`UPDATED: ${name}`);
  updated++;
}

console.log(`\nDone: ${updated} hero previews fixed`);
