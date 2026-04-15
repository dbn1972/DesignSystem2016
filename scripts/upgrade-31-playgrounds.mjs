/**
 * Adds 2 more useState controls to 31 playgrounds that only have 1.
 * Each component gets controls appropriate to its props.
 * 
 * Strategy: Find the existing useState line, add 2 more after it.
 * Then add the corresponding control JSX after the existing controls.
 * 
 * Run: node scripts/upgrade-31-playgrounds.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

// For each component: [stateDeclaration, controlJSX] pairs to add
const ADDITIONS = {
  Accordion: {
    states: [
      "const [bordered, setBordered] = React.useState(true);",
      "const [defaultOpen, setDefaultOpen] = React.useState(true);"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={bordered} onChange={e => setBordered(e.target.checked)} className="accent-primary" /><span className="text-foreground">Bordered</span></label>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={defaultOpen} onChange={e => setDefaultOpen(e.target.checked)} className="accent-primary" /><span className="text-foreground">First item open</span></label>'
    ],
  },
  ApplicationTracker: {
    states: [
      "const [showDates, setShowDates] = React.useState(true);",
      "const [compact, setCompact] = React.useState(false);"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showDates} onChange={e => setShowDates(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show dates</span></label>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={compact} onChange={e => setCompact(e.target.checked)} className="accent-primary" /><span className="text-foreground">Compact mode</span></label>'
    ],
  },
  AspectRatio: {
    states: [
      "const [showBorder, setShowBorder] = React.useState(true);",
      "const [rounded, setRounded] = React.useState(true);"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showBorder} onChange={e => setShowBorder(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show border</span></label>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={rounded} onChange={e => setRounded(e.target.checked)} className="accent-primary" /><span className="text-foreground">Rounded corners</span></label>'
    ],
  },
  Avatar: {
    states: [
      "const [shape, setShape] = React.useState('circle');",
      "const [showStatus, setShowStatus] = React.useState(false);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Shape</label><select value={shape} onChange={e => setShape(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="circle">Circle</option><option value="square">Square</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showStatus} onChange={e => setShowStatus(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show status dot</span></label>'
    ],
  },
  Breadcrumb: {
    states: [
      "const [showHome, setShowHome] = React.useState(true);",
      "const [maxItems, setMaxItems] = React.useState('5');"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showHome} onChange={e => setShowHome(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show home link</span></label>',
      '<div><label className="block font-semibold text-foreground mb-1">Max items</label><select value={maxItems} onChange={e => setMaxItems(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>'
    ],
  },
  CalendarScheduler: {
    states: [
      "const [showWeekends, setShowWeekends] = React.useState(true);",
      "const [timeSlots, setTimeSlots] = React.useState('30');"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showWeekends} onChange={e => setShowWeekends(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show weekends</span></label>',
      '<div><label className="block font-semibold text-foreground mb-1">Time slot (min)</label><select value={timeSlots} onChange={e => setTimeSlots(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="15">15</option><option value="30">30</option><option value="60">60</option></select></div>'
    ],
  },
  Captcha: {
    states: [
      "const [difficulty, setDifficulty] = React.useState('medium');",
      "const [showRefresh, setShowRefresh] = React.useState(true);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Difficulty</label><select value={difficulty} onChange={e => setDifficulty(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showRefresh} onChange={e => setShowRefresh(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show refresh button</span></label>'
    ],
  },
  Center: {
    states: [
      "const [inline, setInline] = React.useState(false);",
      "const [padding, setPadding] = React.useState('md');"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={inline} onChange={e => setInline(e.target.checked)} className="accent-primary" /><span className="text-foreground">Inline</span></label>',
      '<div><label className="block font-semibold text-foreground mb-1">Padding</label><select value={padding} onChange={e => setPadding(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="sm">Small</option><option value="md">Medium</option><option value="lg">Large</option></select></div>'
    ],
  },
  ChartLibrary: {
    states: [
      "const [showLegend, setShowLegend] = React.useState(true);",
      "const [animated, setAnimated] = React.useState(true);"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showLegend} onChange={e => setShowLegend(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show legend</span></label>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={animated} onChange={e => setAnimated(e.target.checked)} className="accent-primary" /><span className="text-foreground">Animated</span></label>'
    ],
  },
  Chatbot: {
    states: [
      "const [minimized, setMinimized] = React.useState(false);",
      "const [showAvatar, setShowAvatar] = React.useState(true);"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={minimized} onChange={e => setMinimized(e.target.checked)} className="accent-primary" /><span className="text-foreground">Minimized</span></label>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showAvatar} onChange={e => setShowAvatar(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show avatar</span></label>'
    ],
  },
  Container: {
    states: [
      "const [centered, setCentered] = React.useState(true);",
      "const [padding, setPadding] = React.useState('md');"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={centered} onChange={e => setCentered(e.target.checked)} className="accent-primary" /><span className="text-foreground">Centered</span></label>',
      '<div><label className="block font-semibold text-foreground mb-1">Padding</label><select value={padding} onChange={e => setPadding(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="none">None</option><option value="sm">Small</option><option value="md">Medium</option><option value="lg">Large</option></select></div>'
    ],
  },
  DigitalSignature: {
    states: [
      "const [showTimestamp, setShowTimestamp] = React.useState(true);",
      "const [required, setRequired] = React.useState(false);"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showTimestamp} onChange={e => setShowTimestamp(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show timestamp</span></label>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={required} onChange={e => setRequired(e.target.checked)} className="accent-primary" /><span className="text-foreground">Required</span></label>'
    ],
  },
  Dropdown: {
    states: [
      "const [placement, setPlacement] = React.useState('bottom');",
      "const [showDividers, setShowDividers] = React.useState(false);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Placement</label><select value={placement} onChange={e => setPlacement(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="bottom">Bottom</option><option value="top">Top</option><option value="left">Left</option><option value="right">Right</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showDividers} onChange={e => setShowDividers(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show dividers</span></label>'
    ],
  },
  ErrorText: {
    states: [
      "const [icon, setIcon] = React.useState(true);",
      "const [message, setMessage] = React.useState('This field is required');"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={icon} onChange={e => setIcon(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show icon</span></label>',
      '<div><label className="block font-semibold text-foreground mb-1">Message</label><input value={message} onChange={e => setMessage(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground" /></div>'
    ],
  },
  FeedbackRatingWidget: {
    states: [
      "const [maxRating, setMaxRating] = React.useState('5');",
      "const [showLabels, setShowLabels] = React.useState(false);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Max rating</label><select value={maxRating} onChange={e => setMaxRating(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="3">3</option><option value="5">5</option><option value="10">10</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showLabels} onChange={e => setShowLabels(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show labels</span></label>'
    ],
  },
  FormBuilder: {
    states: [
      "const [layout, setLayout] = React.useState('vertical');",
      "const [showValidation, setShowValidation] = React.useState(true);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Layout</label><select value={layout} onChange={e => setLayout(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="vertical">Vertical</option><option value="horizontal">Horizontal</option><option value="inline">Inline</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showValidation} onChange={e => setShowValidation(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show validation</span></label>'
    ],
  },
  HintText: {
    states: [
      "const [icon, setIcon] = React.useState(false);",
      "const [message, setMessage] = React.useState('Enter your 12-digit Aadhaar number');"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={icon} onChange={e => setIcon(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show icon</span></label>',
      '<div><label className="block font-semibold text-foreground mb-1">Message</label><input value={message} onChange={e => setMessage(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground" /></div>'
    ],
  },
  LanguageSelector: {
    states: [
      "const [position, setPosition] = React.useState('header');",
      "const [showLabel, setShowLabel] = React.useState(true);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Position</label><select value={position} onChange={e => setPosition(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="header">Header</option><option value="footer">Footer</option><option value="sidebar">Sidebar</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showLabel} onChange={e => setShowLabel(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show label</span></label>'
    ],
  },
  List: {
    states: [
      "const [showIcons, setShowIcons] = React.useState(true);",
      "const [interactive, setInteractive] = React.useState(false);"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showIcons} onChange={e => setShowIcons(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show icons</span></label>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={interactive} onChange={e => setInteractive(e.target.checked)} className="accent-primary" /><span className="text-foreground">Interactive items</span></label>'
    ],
  },
  Menu: {
    states: [
      "const [placement, setPlacement] = React.useState('bottom');",
      "const [showIcons, setShowIcons] = React.useState(true);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Placement</label><select value={placement} onChange={e => setPlacement(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="bottom">Bottom</option><option value="top">Top</option><option value="right">Right</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showIcons} onChange={e => setShowIcons(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show icons</span></label>'
    ],
  },
  Pagination: {
    states: [
      "const [showFirstLast, setShowFirstLast] = React.useState(true);",
      "const [showTotal, setShowTotal] = React.useState(true);"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showFirstLast} onChange={e => setShowFirstLast(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show first/last</span></label>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showTotal} onChange={e => setShowTotal(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show total count</span></label>'
    ],
  },
  QRCode: {
    states: [
      "const [level, setLevel] = React.useState('M');",
      "const [showLogo, setShowLogo] = React.useState(false);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Error correction</label><select value={level} onChange={e => setLevel(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="L">Low</option><option value="M">Medium</option><option value="Q">Quartile</option><option value="H">High</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showLogo} onChange={e => setShowLogo(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show logo overlay</span></label>'
    ],
  },
  Section: {
    states: [
      "const [spacing, setSpacing] = React.useState('md');",
      "const [containerized, setContainerized] = React.useState(true);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Spacing</label><select value={spacing} onChange={e => setSpacing(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="sm">Small</option><option value="md">Medium</option><option value="lg">Large</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={containerized} onChange={e => setContainerized(e.target.checked)} className="accent-primary" /><span className="text-foreground">Containerized</span></label>'
    ],
  },
  SegmentedControl: {
    states: [
      "const [disabled, setDisabled] = React.useState(false);",
      "const [fullWidth, setFullWidth] = React.useState(false);"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} className="accent-primary" /><span className="text-foreground">Disabled</span></label>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={fullWidth} onChange={e => setFullWidth(e.target.checked)} className="accent-primary" /><span className="text-foreground">Full width</span></label>'
    ],
  },
  ShowHide: {
    states: [
      "const [animated, setAnimated] = React.useState(true);",
      "const [label, setLabel] = React.useState('Show more');"
    ],
    controls: [
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={animated} onChange={e => setAnimated(e.target.checked)} className="accent-primary" /><span className="text-foreground">Animated</span></label>',
      '<div><label className="block font-semibold text-foreground mb-1">Toggle label</label><input value={label} onChange={e => setLabel(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground" /></div>'
    ],
  },
  Spacer: {
    states: [
      "const [axis, setAxis] = React.useState('vertical');",
      "const [showGuide, setShowGuide] = React.useState(true);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Axis</label><select value={axis} onChange={e => setAxis(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="vertical">Vertical</option><option value="horizontal">Horizontal</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showGuide} onChange={e => setShowGuide(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show guide lines</span></label>'
    ],
  },
  Spinner: {
    states: [
      "const [label, setLabel] = React.useState('Loading...');",
      "const [overlay, setOverlay] = React.useState(false);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Label</label><input value={label} onChange={e => setLabel(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground" /></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={overlay} onChange={e => setOverlay(e.target.checked)} className="accent-primary" /><span className="text-foreground">Overlay mode</span></label>'
    ],
  },
  Statistic: {
    states: [
      "const [prefix, setPrefix] = React.useState('');",
      "const [loading, setLoading] = React.useState(false);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Prefix</label><input value={prefix} onChange={e => setPrefix(e.target.value)} placeholder="₹, #, etc." className="w-full border border-border rounded px-3 py-2 bg-card text-foreground" /></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={loading} onChange={e => setLoading(e.target.checked)} className="accent-primary" /><span className="text-foreground">Loading state</span></label>'
    ],
  },
  Tabs: {
    states: [
      "const [variant, setVariant] = React.useState('default');",
      "const [disabled, setDisabled] = React.useState(false);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Variant</label><select value={variant} onChange={e => setVariant(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="default">Default</option><option value="pills">Pills</option><option value="underline">Underline</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} className="accent-primary" /><span className="text-foreground">Disabled</span></label>'
    ],
  },
  Timeline: {
    states: [
      "const [variant, setVariant] = React.useState('default');",
      "const [showConnectors, setShowConnectors] = React.useState(true);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Variant</label><select value={variant} onChange={e => setVariant(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="default">Default</option><option value="alternate">Alternate</option><option value="compact">Compact</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showConnectors} onChange={e => setShowConnectors(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show connectors</span></label>'
    ],
  },
  Tooltip: {
    states: [
      "const [delay, setDelay] = React.useState('0');",
      "const [arrow, setArrow] = React.useState(true);"
    ],
    controls: [
      '<div><label className="block font-semibold text-foreground mb-1">Delay (ms)</label><select value={delay} onChange={e => setDelay(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground"><option value="0">0</option><option value="200">200</option><option value="500">500</option></select></div>',
      '<label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={arrow} onChange={e => setArrow(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show arrow</span></label>'
    ],
  },
};

let updated = 0;
for (const [name, data] of Object.entries(ADDITIONS)) {
  const filePath = `${ROOT}/src/app/pages/Component${name}Page.tsx`;
  let content = readFileSync(filePath, 'utf8');

  // Find the playground function
  const pgRegex = new RegExp(`function ${name}Playground\\(\\) \\{`);
  const pgMatch = content.match(pgRegex);
  if (!pgMatch) { console.log(`SKIP: ${name} — no playground found`); continue; }

  // Find the existing useState line
  const pgStart = content.indexOf(pgMatch[0]);
  const pgBody = content.slice(pgStart);
  const firstUseState = pgBody.indexOf('useState');
  const endOfFirstState = pgBody.indexOf('\n', firstUseState);

  // Insert new states after the first useState line
  const insertStateAt = pgStart + endOfFirstState;
  const stateLines = data.states.map(s => '  ' + s).join('\n');
  content = content.slice(0, insertStateAt) + '\n' + stateLines + content.slice(insertStateAt);

  // Find the existing controls area and add new controls
  // Look for the snippet div (p className="font-mono") and insert before it
  const snippetPattern = '        <div className="p-3 rounded-lg bg-muted/50';
  const snippetIdx = content.indexOf(snippetPattern, pgStart);
  if (snippetIdx !== -1) {
    const controlLines = data.controls.map(c => '          ' + c).join('\n');
    content = content.slice(0, snippetIdx) + controlLines + '\n' + content.slice(snippetIdx);
  }

  writeFileSync(filePath, content);
  console.log(`UPDATED: ${name} (+${data.states.length} states, +${data.controls.length} controls)`);
  updated++;
}

console.log(`\nDone: ${updated} updated`);
