import{j as e,L as p,C as g}from"./index-wYwTiNL-.js";import{A as h}from"./arrow-left-C9iPmAwZ.js";import{C as c}from"./circle-check-gjpTwpIc.js";import{T as l}from"./triangle-alert-qK8sra33.js";function C(){return e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsx("section",{className:"bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b-4 border-saffron-600 py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[e.jsxs(p,{to:"/resources/migration",className:"inline-flex items-center gap-2 text-saffron-700 hover:text-saffron-900 font-semibold mb-4",children:[e.jsx(h,{size:16}),e.jsx("span",{children:"Back to Migration Guides"})]}),e.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Material-UI to UX4G Migration Guide"}),e.jsx("p",{className:"text-xl text-gray-700 max-w-3xl",children:"Comprehensive guide for migrating from Material-UI (MUI) v5.x to UX4G Design System"}),e.jsxs("div",{className:"mt-6 flex items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm font-semibold text-gray-700",children:"High Compatibility"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Estimated Time:"}),e.jsx("span",{className:"text-sm font-semibold text-gray-900",children:"2-4 weeks"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Complexity:"}),e.jsx("span",{className:"text-sm font-semibold text-gray-900",children:"Medium"})]})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-12",children:[e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Migration Overview"}),e.jsxs("div",{className:"bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6",children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-3",children:"Why This Migration is Straightforward"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(c,{size:16,className:"text-green-600 flex-shrink-0 mt-0.5"}),e.jsx("span",{className:"text-gray-700",children:"Both libraries use component-based architecture with similar prop patterns"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(c,{size:16,className:"text-green-600 flex-shrink-0 mt-0.5"}),e.jsx("span",{className:"text-gray-700",children:"Strong TypeScript support in both makes refactoring safer"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(c,{size:16,className:"text-green-600 flex-shrink-0 mt-0.5"}),e.jsx("span",{className:"text-gray-700",children:"Most MUI components have direct UX4G equivalents"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(c,{size:16,className:"text-green-600 flex-shrink-0 mt-0.5"}),e.jsx("span",{className:"text-gray-700",children:"Similar theming concepts make token migration easier"})]})]})]}),e.jsxs("div",{className:"bg-orange-50 border-2 border-orange-200 rounded-lg p-6",children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-3",children:"Key Differences to Consider"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(l,{size:16,className:"text-orange-600 flex-shrink-0 mt-0.5"}),e.jsx("span",{className:"text-gray-700",children:"Styling approach: MUI uses CSS-in-JS (Emotion) while UX4G uses Tailwind CSS"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(l,{size:16,className:"text-orange-600 flex-shrink-0 mt-0.5"}),e.jsx("span",{className:"text-gray-700",children:"Theme tokens need to be remapped to UX4G design tokens"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(l,{size:16,className:"text-orange-600 flex-shrink-0 mt-0.5"}),e.jsx("span",{className:"text-gray-700",children:"Some MUI-specific components (Lab, DataGrid) require custom solutions"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(l,{size:16,className:"text-orange-600 flex-shrink-0 mt-0.5"}),e.jsx("span",{className:"text-gray-700",children:"Government-specific accessibility requirements may differ from MUI defaults"})]})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Component Mapping Reference"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Quick reference for mapping Material-UI components to their UX4G equivalents"}),e.jsx("div",{className:"border-2 border-gray-200 rounded-lg overflow-hidden",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50 border-b-2 border-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-4 font-bold text-gray-900",children:"Material-UI Component"}),e.jsx("th",{className:"text-left p-4 font-bold text-gray-900",children:"UX4G Component"}),e.jsx("th",{className:"text-left p-4 font-bold text-gray-900",children:"Migration Notes"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200",children:[e.jsx(t,{muiComponent:"Button",ux4gComponent:"Button",notes:"Direct mapping. Variant prop works similarly (contained → primary, outlined → secondary)",status:"easy"}),e.jsx(t,{muiComponent:"TextField",ux4gComponent:"Input / Field",notes:"Use Field component for labels and validation. Input for basic text input",status:"easy"}),e.jsx(t,{muiComponent:"Select",ux4gComponent:"Select",notes:"Similar API. Options structure slightly different",status:"easy"}),e.jsx(t,{muiComponent:"Checkbox",ux4gComponent:"Checkbox",notes:"Direct mapping. Controlled component pattern same",status:"easy"}),e.jsx(t,{muiComponent:"Radio / RadioGroup",ux4gComponent:"Radio",notes:"Similar grouping pattern with RadioGroup wrapper",status:"easy"}),e.jsx(t,{muiComponent:"Switch",ux4gComponent:"Switch",notes:"Direct mapping with same props",status:"easy"}),e.jsx(t,{muiComponent:"Slider",ux4gComponent:"Custom implementation",notes:"Build using HTML range input with UX4G styles",status:"medium"}),e.jsx(t,{muiComponent:"Alert",ux4gComponent:"Alert",notes:"Severity prop maps to variant. Icons handled differently",status:"easy"}),e.jsx(t,{muiComponent:"Dialog",ux4gComponent:"Dialog",notes:"Similar structure. Use DialogHeader, DialogContent pattern",status:"easy"}),e.jsx(t,{muiComponent:"Drawer",ux4gComponent:"Drawer",notes:"Anchor prop same. Temporary/permanent behavior similar",status:"easy"}),e.jsx(t,{muiComponent:"Snackbar",ux4gComponent:"Toast",notes:"Different API. Use toast notification system",status:"medium"}),e.jsx(t,{muiComponent:"Tooltip",ux4gComponent:"Tooltip",notes:"Direct mapping. Placement prop identical",status:"easy"}),e.jsx(t,{muiComponent:"Tabs",ux4gComponent:"Tabs",notes:"Similar structure. Value and onChange pattern same",status:"easy"}),e.jsx(t,{muiComponent:"Accordion",ux4gComponent:"Accordion",notes:"Direct mapping. Expanded state handling similar",status:"easy"}),e.jsx(t,{muiComponent:"Card",ux4gComponent:"Card",notes:"Direct mapping. CardHeader, CardContent, CardActions pattern similar",status:"easy"}),e.jsx(t,{muiComponent:"Table",ux4gComponent:"Table",notes:"Similar structure. Use Table, TableHeader, TableBody pattern",status:"easy"}),e.jsx(t,{muiComponent:"Menu",ux4gComponent:"Menu / Dropdown",notes:"Use Menu for navigation, Dropdown for actions",status:"easy"}),e.jsx(t,{muiComponent:"Popover",ux4gComponent:"Popover",notes:"Similar anchor positioning system",status:"easy"}),e.jsx(t,{muiComponent:"Pagination",ux4gComponent:"Pagination",notes:"Direct mapping. Page and onChange props identical",status:"easy"}),e.jsx(t,{muiComponent:"Breadcrumbs",ux4gComponent:"Breadcrumb",notes:"Similar item structure. Use items array prop",status:"easy"}),e.jsx(t,{muiComponent:"Stepper",ux4gComponent:"Stepper",notes:"Active step and orientation props same",status:"easy"}),e.jsx(t,{muiComponent:"Avatar",ux4gComponent:"Avatar",notes:"Direct mapping. Src and alt props identical",status:"easy"}),e.jsx(t,{muiComponent:"Badge",ux4gComponent:"Badge",notes:"Direct mapping. Content and color props similar",status:"easy"}),e.jsx(t,{muiComponent:"Chip",ux4gComponent:"Tag",notes:"Renamed to Tag. OnDelete becomes onRemove",status:"easy"}),e.jsx(t,{muiComponent:"Divider",ux4gComponent:"Divider",notes:"Direct mapping. Orientation prop same",status:"easy"}),e.jsx(t,{muiComponent:"LinearProgress",ux4gComponent:"Progress",notes:"Value and variant props similar",status:"easy"}),e.jsx(t,{muiComponent:"CircularProgress",ux4gComponent:"Spinner",notes:"Use Spinner for indeterminate loading states",status:"easy"}),e.jsx(t,{muiComponent:"Skeleton",ux4gComponent:"Skeleton",notes:"Direct mapping. Variant and animation props same",status:"easy"}),e.jsx(t,{muiComponent:"Autocomplete",ux4gComponent:"Autocomplete",notes:"Options structure similar. FilterOptions needs adjustment",status:"medium"}),e.jsx(t,{muiComponent:"DatePicker",ux4gComponent:"DatePicker",notes:"Similar value and onChange pattern. Different calendar UI",status:"medium"}),e.jsx(t,{muiComponent:"TimePicker",ux4gComponent:"Custom implementation",notes:"Build using native time input with UX4G styling",status:"medium"}),e.jsx(t,{muiComponent:"Rating",ux4gComponent:"Rating",notes:"Direct mapping. Value and onChange identical",status:"easy"}),e.jsx(t,{muiComponent:"DataGrid",ux4gComponent:"DataGrid",notes:"Use UX4G DataGrid. Column definitions need remapping",status:"hard"})]})]})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Before & After Code Examples"}),e.jsxs("div",{className:"space-y-8",children:[e.jsx(m,{title:"Button Migration",before:`import { Button } from '@mui/material';

function MyComponent() {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={handleClick}
    >
      Submit Application
    </Button>
  );
}`,after:`import { Button } from '@ux4g/react-core';

function MyComponent() {
  return (
    <Button
      variant="primary"
      size="lg"
      onClick={handleClick}
    >
      Submit Application
    </Button>
  );
}`,notes:"Variant 'contained' becomes 'primary'. Size uses abbreviated values."}),e.jsx(m,{title:"Form Field Migration",before:`import { TextField } from '@mui/material';

function MyForm() {
  return (
    <TextField
      label="Full Name"
      variant="outlined"
      required
      fullWidth
      error={!!errors.name}
      helperText={errors.name?.message}
      {...register('name')}
    />
  );
}`,after:`import { Field, Input } from '@ux4g/react-core';

function MyForm() {
  return (
    <Field
      label="Full Name"
      required
      error={errors.name?.message}
    >
      <Input
        {...register('name')}
        aria-invalid={!!errors.name}
      />
    </Field>
  );
}`,notes:"UX4G separates Field (wrapper with label) from Input (control). Full width is default."}),e.jsx(m,{title:"Dialog Migration",before:`import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function MyDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to proceed?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}`,after:`import { Dialog, DialogHeader, DialogContent, DialogFooter, Button } from '@ux4g/react-core';

function MyDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader title="Confirm Action" onClose={onClose} />
      <DialogContent>
        <p>Are you sure you want to proceed?</p>
      </DialogContent>
      <DialogFooter>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </DialogFooter>
    </Dialog>
  );
}`,notes:"DialogActions becomes DialogFooter. DialogHeader includes close button."}),e.jsx(m,{title:"Alert/Snackbar to Toast Migration",before:`import { Snackbar, Alert } from '@mui/material';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
    >
      <Alert severity="success" onClose={() => setOpen(false)}>
        Application submitted successfully!
      </Alert>
    </Snackbar>
  );
}`,after:`import { toast } from '@ux4g/react-core';

function MyComponent() {
  const handleSubmit = () => {
    // ... submit logic
    toast.success('Application submitted successfully!');
  };

  return (
    // Component JSX
    // No need for Snackbar wrapper
  );
}`,notes:"UX4G uses programmatic toast API instead of component-based approach."}),e.jsx(m,{title:"Table Migration",before:`import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

function MyTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}`,after:`import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from '@ux4g/react-core';

function MyTable({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`,notes:"TableHead in MUI is header section, in UX4G it's header cell. No TableContainer needed."})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Styling Migration (MUI Theme → UX4G Tokens)"}),e.jsxs("div",{className:"bg-purple-50 border-2 border-purple-200 rounded-lg p-6 mb-6",children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-3",children:"Key Difference: CSS-in-JS vs Tailwind CSS"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Material-UI uses Emotion for CSS-in-JS styling, while UX4G uses Tailwind CSS utility classes and design tokens. This requires a mindset shift in how you approach styling."})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(x,{title:"Theme Color Migration",muiCode:`const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});`,ux4gCode:`// UX4G uses government-specific color tokens
// Primary: Saffron (#FF9933)
// Secondary: Green (#138808)
// Navy: (#000080)

// Access via CSS variables or Tailwind classes
className="bg-saffron-600 text-white"
className="border-green-600"`,notes:"UX4G has predefined government color palette based on Indian tricolor"}),e.jsx(x,{title:"Component Styling",muiCode:`import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2, 4),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));`,ux4gCode:`import { Button } from '@ux4g/react-core';

// Use Tailwind classes for customization
<Button
  className="bg-saffron-600 hover:bg-saffron-700 px-8 py-4"
>
  Custom Styled Button
</Button>`,notes:"Replace styled() with Tailwind utility classes. For complex styles, use CSS modules"}),e.jsx(x,{title:"Spacing and Layout",muiCode:`import { Box, Stack } from '@mui/material';

<Box sx={{ p: 2, mb: 3 }}>
  <Stack spacing={2} direction="row">
    {/* content */}
  </Stack>
</Box>`,ux4gCode:`import { Stack } from '@ux4g/react-core';

<div className="p-4 mb-6">
  <Stack direction="row" spacing="md">
    {/* content */}
  </Stack>
</div>`,notes:"Tailwind spacing scale: 1=0.25rem, 2=0.5rem, 4=1rem, 6=1.5rem, 8=2rem"})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Step-by-Step Migration Process"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{step:1,title:"Setup UX4G Alongside MUI",description:"Install UX4G packages without removing Material-UI yet",commands:["npm install @ux4g/react-core @ux4g/tokens @ux4g/styles","npm install tailwindcss postcss autoprefixer","npx tailwindcss init -p"]}),e.jsx(i,{step:2,title:"Configure Build Tools",description:"Update your build configuration to support both libraries",commands:["// tailwind.config.js","module.exports = {",'  content: ["./src/**/*.{js,jsx,ts,tsx}"],',"  theme: { extend: {} },","  plugins: [],","}"]}),e.jsx(i,{step:3,title:"Create Component Inventory",description:"Document all MUI components currently in use",commands:["// Run this command to find all MUI imports",`grep -r "from '@mui" src/ | sort | uniq`]}),e.jsx(i,{step:4,title:"Migrate One Page at a Time",description:"Start with a low-traffic or simple page",commands:["// Example: Migrate a simple form page","// 1. Replace MUI imports with UX4G imports","// 2. Update component props","// 3. Replace sx prop with className","// 4. Test thoroughly"]}),e.jsx(i,{step:5,title:"Update Tests",description:"Ensure all tests pass after component migration",commands:["// Update test queries if needed","// MUI data-testid may change","// Accessibility queries recommended"]}),e.jsx(i,{step:6,title:"Remove MUI Dependencies",description:"Once fully migrated, remove Material-UI packages",commands:["npm uninstall @mui/material @mui/icons-material","npm uninstall @emotion/react @emotion/styled"]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Common Migration Issues & Solutions"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{issue:"Icon imports break after migration",solution:"MUI uses @mui/icons-material, UX4G uses lucide-react. Install lucide-react and update icon imports.",example:"import { Delete } from '@mui/icons-material' → import { Trash2 } from 'lucide-react'"}),e.jsx(d,{issue:"Custom theme colors don't work",solution:"UX4G uses government-mandated color palette. For custom colors, extend Tailwind config or use CSS variables.",example:"Create custom Tailwind classes in theme.css or use UX4G design tokens"}),e.jsx(d,{issue:"Forms validation logic breaks",solution:"UX4G Field component handles validation differently. Use react-hook-form or similar library for complex validation.",example:"Wrap inputs in Field component and pass error prop for validation messages"}),e.jsx(d,{issue:"Responsive breakpoints differ",solution:"MUI uses xs/sm/md/lg/xl, Tailwind uses sm/md/lg/xl/2xl with different pixel values. Update responsive utilities.",example:"MUI: <Grid xs={12} md={6}> → UX4G: <div className='col-span-12 md:col-span-6'>"}),e.jsx(d,{issue:"Date picker looks different",solution:"UX4G DatePicker has different UI. Ensure users are informed of the change and update documentation.",example:"Consider keeping MUI DatePicker temporarily if critical to UX, then migrate later"})]})]}),e.jsx("section",{className:"mb-12",children:e.jsxs("div",{className:"bg-green-50 border-2 border-green-200 rounded-lg p-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Migration Checklist"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{text:"UX4G packages installed and configured"}),e.jsx(s,{text:"Tailwind CSS setup complete"}),e.jsx(s,{text:"Component inventory created"}),e.jsx(s,{text:"Migration priority list established"}),e.jsx(s,{text:"First page/feature migrated successfully"}),e.jsx(s,{text:"Tests updated and passing"}),e.jsx(s,{text:"Accessibility verified (WCAG 2.1 AA)"}),e.jsx(s,{text:"Design review completed"}),e.jsx(s,{text:"Performance benchmarks met"}),e.jsx(s,{text:"Documentation updated"}),e.jsx(s,{text:"Team training completed"}),e.jsx(s,{text:"Material-UI dependencies removed"})]})]})}),e.jsx("section",{children:e.jsxs("div",{className:"bg-gradient-to-br from-saffron-50 to-green-50 border-2 border-saffron-200 rounded-lg p-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Need Help?"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"If you encounter issues during your migration or need guidance, we're here to support you."}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs(p,{to:"/resources/component-specs",className:"bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-saffron-500 transition-colors",children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-2",children:"Component API Reference"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Detailed prop documentation"})]}),e.jsxs(p,{to:"/pattern-library",className:"bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-saffron-500 transition-colors",children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-2",children:"Pattern Library"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Live component examples"})]}),e.jsxs(p,{to:"/contact",className:"bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-saffron-500 transition-colors",children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-2",children:"Contact Support"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Get personalized help"})]})]})]})})]})]})}function t({muiComponent:a,ux4gComponent:n,notes:o,status:r}){const u={easy:"bg-green-100 text-green-700",medium:"bg-orange-100 text-orange-700",hard:"bg-red-100 text-red-700"};return e.jsxs("tr",{children:[e.jsx("td",{className:"p-4 font-mono text-sm text-gray-900",children:a}),e.jsx("td",{className:"p-4 font-mono text-sm text-saffron-700",children:n}),e.jsx("td",{className:"p-4 text-sm text-gray-700",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-semibold uppercase ${u[r]} flex-shrink-0`,children:r}),e.jsx("span",{children:o})]})})]})}function m({title:a,before:n,after:o,notes:r}){return e.jsxs("div",{className:"border-2 border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-gray-50 p-4 border-b-2 border-gray-200",children:e.jsxs("h3",{className:"font-bold text-gray-900 flex items-center gap-2",children:[e.jsx(g,{size:18}),a]})}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-0 divide-x divide-gray-200",children:[e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"text-xs font-semibold text-gray-600 mb-2",children:"Material-UI (Before)"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-x-auto",children:e.jsx("code",{children:n})})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"text-xs font-semibold text-saffron-700 mb-2",children:"UX4G (After)"}),e.jsx("pre",{className:"bg-saffron-900 text-gray-100 p-4 rounded text-xs overflow-x-auto",children:e.jsx("code",{children:o})})]})]}),r&&e.jsx("div",{className:"bg-blue-50 border-t-2 border-blue-200 p-4",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(l,{size:16,className:"text-blue-600 flex-shrink-0 mt-0.5"}),e.jsx("p",{className:"text-sm text-gray-700",children:r})]})})]})}function x({title:a,muiCode:n,ux4gCode:o,notes:r}){return e.jsxs("div",{className:"border-2 border-gray-200 rounded-lg p-6",children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-4",children:a}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-gray-600 mb-2",children:"Material-UI Approach"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-x-auto",children:e.jsx("code",{children:n})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-saffron-700 mb-2",children:"UX4G Approach"}),e.jsx("pre",{className:"bg-saffron-900 text-gray-100 p-4 rounded text-xs overflow-x-auto",children:e.jsx("code",{children:o})})]}),e.jsx("div",{className:"bg-blue-50 border-2 border-blue-200 rounded p-3",children:e.jsx("p",{className:"text-sm text-gray-700",children:r})})]})]})}function i({step:a,title:n,description:o,commands:r}){return e.jsx("div",{className:"border-2 border-gray-200 rounded-lg p-6",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-saffron-600 text-white rounded-lg flex items-center justify-center font-bold text-lg",children:a}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-bold text-gray-900 mb-1",children:n}),e.jsx("p",{className:"text-gray-700 mb-3",children:o}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-x-auto",children:e.jsx("code",{children:r.join(`
`)})})]})]})})}function d({issue:a,solution:n,example:o}){return e.jsx("div",{className:"border-2 border-orange-200 bg-orange-50 rounded-lg p-4",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(l,{className:"text-orange-600 flex-shrink-0",size:20}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-1",children:a}),e.jsx("p",{className:"text-sm text-gray-700 mb-2",children:n}),e.jsx("div",{className:"bg-white border border-orange-200 rounded p-2",children:e.jsx("code",{className:"text-xs text-gray-900",children:o})})]})]})})}function s({text:a}){return e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(c,{className:"text-green-600 flex-shrink-0 mt-0.5",size:20}),e.jsx("span",{className:"text-gray-900",children:a})]})}export{C as default};
