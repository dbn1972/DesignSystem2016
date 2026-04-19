import { Link } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Code, Package } from "lucide-react";

export default function MigrationMaterialUI() {
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b-4 border-saffron-600 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/resources/migration-guides"
            className="inline-flex items-center gap-2 text-saffron-700 hover:text-saffron-900 font-semibold mb-4"
          >
            <ArrowLeft size={16} />
            <span>Back to Migration Guides</span>
          </Link>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Material-UI to UX4G Migration Guide</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive guide for migrating from Material-UI (MUI) v5.x to UX4G Design System
          </p>

          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-50 dark:bg-green-900/200 rounded-full"></div>
              <span className="text-sm font-semibold text-muted-foreground">High Compatibility</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Estimated Time:</span>
              <span className="text-sm font-semibold text-foreground">2-4 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Complexity:</span>
              <span className="text-sm font-semibold text-foreground">Medium</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Migration Overview</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-foreground mb-3">Why This Migration is Straightforward</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Both libraries use component-based architecture with similar prop patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Strong TypeScript support in both makes refactoring safer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Most MUI components have direct UX4G equivalents</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Similar theming concepts make token migration easier</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-3">Key Differences to Consider</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Styling approach: MUI uses CSS-in-JS (Emotion) while UX4G uses Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Theme tokens need to be remapped to UX4G design tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Some MUI-specific components (Lab, DataGrid) require custom solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Government-specific accessibility requirements may differ from MUI defaults</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Component Mapping */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Component Mapping Reference</h2>
          <p className="text-muted-foreground mb-6">
            Quick reference for mapping Material-UI components to their UX4G equivalents
          </p>

          <div className="border-2 border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-background border-b-2 border-border">
                <tr>
                  <th className="text-left p-4 font-bold text-foreground">Material-UI Component</th>
                  <th className="text-left p-4 font-bold text-foreground">UX4G Component</th>
                  <th className="text-left p-4 font-bold text-foreground">Migration Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <ComponentMappingRow
                  muiComponent="Button"
                  ux4gComponent="Button"
                  notes="Direct mapping. Variant prop works similarly (contained → primary, outlined → secondary)"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="TextField"
                  ux4gComponent="Input / Field"
                  notes="Use Field component for labels and validation. Input for basic text input"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Select"
                  ux4gComponent="Select"
                  notes="Similar API. Options structure slightly different"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Checkbox"
                  ux4gComponent="Checkbox"
                  notes="Direct mapping. Controlled component pattern same"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Radio / RadioGroup"
                  ux4gComponent="Radio"
                  notes="Similar grouping pattern with RadioGroup wrapper"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Switch"
                  ux4gComponent="Switch"
                  notes="Direct mapping with same props"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Slider"
                  ux4gComponent="Custom implementation"
                  notes="Build using HTML range input with UX4G styles"
                  status="medium"
                />
                <ComponentMappingRow
                  muiComponent="Alert"
                  ux4gComponent="Alert"
                  notes="Severity prop maps to variant. Icons handled differently"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Dialog"
                  ux4gComponent="Dialog"
                  notes="Similar structure. Use DialogHeader, DialogContent pattern"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Drawer"
                  ux4gComponent="Drawer"
                  notes="Anchor prop same. Temporary/permanent behavior similar"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Snackbar"
                  ux4gComponent="Toast"
                  notes="Different API. Use toast notification system"
                  status="medium"
                />
                <ComponentMappingRow
                  muiComponent="Tooltip"
                  ux4gComponent="Tooltip"
                  notes="Direct mapping. Placement prop identical"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Tabs"
                  ux4gComponent="Tabs"
                  notes="Similar structure. Value and onChange pattern same"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Accordion"
                  ux4gComponent="Accordion"
                  notes="Direct mapping. Expanded state handling similar"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Card"
                  ux4gComponent="Card"
                  notes="Direct mapping. CardHeader, CardContent, CardActions pattern similar"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Table"
                  ux4gComponent="Table"
                  notes="Similar structure. Use Table, TableHeader, TableBody pattern"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Menu"
                  ux4gComponent="Menu / Dropdown"
                  notes="Use Menu for navigation, Dropdown for actions"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Popover"
                  ux4gComponent="Popover"
                  notes="Similar anchor positioning system"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Pagination"
                  ux4gComponent="Pagination"
                  notes="Direct mapping. Page and onChange props identical"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Breadcrumbs"
                  ux4gComponent="Breadcrumb"
                  notes="Similar item structure. Use items array prop"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Stepper"
                  ux4gComponent="Stepper"
                  notes="Active step and orientation props same"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Avatar"
                  ux4gComponent="Avatar"
                  notes="Direct mapping. Src and alt props identical"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Badge"
                  ux4gComponent="Badge"
                  notes="Direct mapping. Content and color props similar"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Chip"
                  ux4gComponent="Tag"
                  notes="Renamed to Tag. OnDelete becomes onRemove"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Divider"
                  ux4gComponent="Divider"
                  notes="Direct mapping. Orientation prop same"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="LinearProgress"
                  ux4gComponent="Progress"
                  notes="Value and variant props similar"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="CircularProgress"
                  ux4gComponent="Spinner"
                  notes="Use Spinner for indeterminate loading states"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Skeleton"
                  ux4gComponent="Skeleton"
                  notes="Direct mapping. Variant and animation props same"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="Autocomplete"
                  ux4gComponent="Autocomplete"
                  notes="Options structure similar. FilterOptions needs adjustment"
                  status="medium"
                />
                <ComponentMappingRow
                  muiComponent="DatePicker"
                  ux4gComponent="DatePicker"
                  notes="Similar value and onChange pattern. Different calendar UI"
                  status="medium"
                />
                <ComponentMappingRow
                  muiComponent="TimePicker"
                  ux4gComponent="Custom implementation"
                  notes="Build using native time input with UX4G styling"
                  status="medium"
                />
                <ComponentMappingRow
                  muiComponent="Rating"
                  ux4gComponent="Rating"
                  notes="Direct mapping. Value and onChange identical"
                  status="easy"
                />
                <ComponentMappingRow
                  muiComponent="DataGrid"
                  ux4gComponent="DataGrid"
                  notes="Use UX4G DataGrid. Column definitions need remapping"
                  status="hard"
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Before & After Code Examples</h2>

          <div className="space-y-8">
            <CodeExample
              title="Button Migration"
              before={`import { Button } from '@mui/material';

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
}`}
              after={`import { Button } from '@ux4g/react-core';

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
}`}
              notes="Variant 'contained' becomes 'primary'. Size uses abbreviated values."
            />

            <CodeExample
              title="Form Field Migration"
              before={`import { TextField } from '@mui/material';

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
}`}
              after={`import { Field, Input } from '@ux4g/react-core';

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
}`}
              notes="UX4G separates Field (wrapper with label) from Input (control). Full width is default."
            />

            <CodeExample
              title="Dialog Migration"
              before={`import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

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
}`}
              after={`import { Dialog, DialogHeader, DialogContent, DialogFooter, Button } from '@ux4g/react-core';

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
}`}
              notes="DialogActions becomes DialogFooter. DialogHeader includes close button."
            />

            <CodeExample
              title="Alert/Snackbar to Toast Migration"
              before={`import { Snackbar, Alert } from '@mui/material';

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
}`}
              after={`import { toast } from '@ux4g/react-core';

function MyComponent() {
  const handleSubmit = () => {
    // ... submit logic
    toast.success('Application submitted successfully!');
  };

  return (
    // Component JSX
    // No need for Snackbar wrapper
  );
}`}
              notes="UX4G uses programmatic toast API instead of component-based approach."
            />

            <CodeExample
              title="Table Migration"
              before={`import {
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
}`}
              after={`import {
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
}`}
              notes="TableHead in MUI is header section, in UX4G it's header cell. No TableContainer needed."
            />
          </div>
        </section>

        {/* Styling Migration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Styling Migration (MUI Theme → UX4G Tokens)</h2>
          
          <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-foreground mb-3">Key Difference: CSS-in-JS vs Tailwind CSS</h3>
            <p className="text-muted-foreground mb-4">
              Material-UI uses Emotion for CSS-in-JS styling, while UX4G uses Tailwind CSS utility classes and design tokens. 
              This requires a mindset shift in how you approach styling.
            </p>
          </div>

          <div className="space-y-6">
            <StylingExample
              title="Theme Color Migration"
              muiCode={`const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});`}
              ux4gCode={`// UX4G uses government-specific color tokens
// Primary: Saffron (#FF9933)
// Secondary: Green (#138808)
// Navy: (#000080)

// Access via CSS variables or Tailwind classes
className="bg-saffron-600 text-white"
className="border-green-600"`}
              notes="UX4G has predefined government color palette based on Indian tricolor"
            />

            <StylingExample
              title="Component Styling"
              muiCode={`import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2, 4),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));`}
              ux4gCode={`import { Button } from '@ux4g/react-core';

// Use Tailwind classes for customization
<Button
  className="bg-saffron-600 hover:bg-saffron-700 px-8 py-4"
>
  Custom Styled Button
</Button>`}
              notes="Replace styled() with Tailwind utility classes. For complex styles, use CSS modules"
            />

            <StylingExample
              title="Spacing and Layout"
              muiCode={`import { Box, Stack } from '@mui/material';

<Box sx={{ p: 2, mb: 3 }}>
  <Stack spacing={2} direction="row">
    {/* content */}
  </Stack>
</Box>`}
              ux4gCode={`import { Stack } from '@ux4g/react-core';

<div className="p-4 mb-6">
  <Stack direction="row" spacing="md">
    {/* content */}
  </Stack>
</div>`}
              notes="Tailwind spacing scale: 1=0.25rem, 2=0.5rem, 4=1rem, 6=1.5rem, 8=2rem"
            />
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step-by-Step Migration Process</h2>

          <div className="space-y-4">
            <MigrationStep
              step={1}
              title="Setup UX4G Alongside MUI"
              description="Install UX4G packages without removing Material-UI yet"
              commands={[
                'npm install @ux4g/react-core @ux4g/tokens @ux4g/styles',
                'npm install tailwindcss postcss autoprefixer',
                'npx tailwindcss init -p'
              ]}
            />

            <MigrationStep
              step={2}
              title="Configure Build Tools"
              description="Update your build configuration to support both libraries"
              commands={[
                '// tailwind.config.js',
                'module.exports = {',
                '  content: ["./src/**/*.{js,jsx,ts,tsx}"],',
                '  theme: { extend: {} },',
                '  plugins: [],',
                '}'
              ]}
            />

            <MigrationStep
              step={3}
              title="Create Component Inventory"
              description="Document all MUI components currently in use"
              commands={[
                '// Run this command to find all MUI imports',
                'grep -r "from \'@mui" src/ | sort | uniq'
              ]}
            />

            <MigrationStep
              step={4}
              title="Migrate One Page at a Time"
              description="Start with a low-traffic or simple page"
              commands={[
                '// Example: Migrate a simple form page',
                '// 1. Replace MUI imports with UX4G imports',
                '// 2. Update component props',
                '// 3. Replace sx prop with className',
                '// 4. Test thoroughly'
              ]}
            />

            <MigrationStep
              step={5}
              title="Update Tests"
              description="Ensure all tests pass after component migration"
              commands={[
                '// Update test queries if needed',
                '// MUI data-testid may change',
                '// Accessibility queries recommended'
              ]}
            />

            <MigrationStep
              step={6}
              title="Remove MUI Dependencies"
              description="Once fully migrated, remove Material-UI packages"
              commands={[
                'npm uninstall @mui/material @mui/icons-material',
                'npm uninstall @emotion/react @emotion/styled'
              ]}
            />
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Common Migration Issues & Solutions</h2>

          <div className="space-y-4">
            <IssueCard
              issue="Icon imports break after migration"
              solution="MUI uses @mui/icons-material, UX4G uses lucide-react. Install lucide-react and update icon imports."
              example="import { Delete } from '@mui/icons-material' → import { Trash2 } from 'lucide-react'"
            />

            <IssueCard
              issue="Custom theme colors don't work"
              solution="UX4G uses government-mandated color palette. For custom colors, extend Tailwind config or use CSS variables."
              example="Create custom Tailwind classes in theme.css or use UX4G design tokens"
            />

            <IssueCard
              issue="Forms validation logic breaks"
              solution="UX4G Field component handles validation differently. Use react-hook-form or similar library for complex validation."
              example="Wrap inputs in Field component and pass error prop for validation messages"
            />

            <IssueCard
              issue="Responsive breakpoints differ"
              solution="MUI uses xs/sm/md/lg/xl, Tailwind uses sm/md/lg/xl/2xl with different pixel values. Update responsive utilities."
              example="MUI: <Grid xs={12} md={6}> → UX4G: <div className='col-span-12 md:col-span-6'>"
            />

            <IssueCard
              issue="Date picker looks different"
              solution="UX4G DatePicker has different UI. Ensure users are informed of the change and update documentation."
              example="Consider keeping MUI DatePicker temporarily if critical to UX, then migrate later"
            />
          </div>
        </section>

        {/* Checklist */}
        <section className="mb-12">
          <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Migration Checklist</h2>
            
            <div className="space-y-3">
              <ChecklistItem text="UX4G packages installed and configured" />
              <ChecklistItem text="Tailwind CSS setup complete" />
              <ChecklistItem text="Component inventory created" />
              <ChecklistItem text="Migration priority list established" />
              <ChecklistItem text="First page/feature migrated successfully" />
              <ChecklistItem text="Tests updated and passing" />
              <ChecklistItem text="Accessibility verified (WCAG 2.1 AA)" />
              <ChecklistItem text="Design review completed" />
              <ChecklistItem text="Performance benchmarks met" />
              <ChecklistItem text="Documentation updated" />
              <ChecklistItem text="Team training completed" />
              <ChecklistItem text="Material-UI dependencies removed" />
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <div className="bg-gradient-to-br from-saffron-50 to-green-50 border-2 border-saffron-200 rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              If you encounter issues during your migration or need guidance, we're here to support you.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <Link
                to="/resources/component-specs"
                className="bg-card border-2 border-border rounded-lg p-4 hover:border-saffron-500 transition-colors"
              >
                <h3 className="font-bold text-foreground mb-2">Component API Reference</h3>
                <p className="text-sm text-muted-foreground">Detailed prop documentation</p>
              </Link>

              <Link
                to="/pattern-library"
                className="bg-card border-2 border-border rounded-lg p-4 hover:border-saffron-500 transition-colors"
              >
                <h3 className="font-bold text-foreground mb-2">Pattern Library</h3>
                <p className="text-sm text-muted-foreground">Live component examples</p>
              </Link>

              <Link
                to="/contact"
                className="bg-card border-2 border-border rounded-lg p-4 hover:border-saffron-500 transition-colors"
              >
                <h3 className="font-bold text-foreground mb-2">Contact Support</h3>
                <p className="text-sm text-muted-foreground">Get personalized help</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Helper Components

interface ComponentMappingRowProps {
  muiComponent: string;
  ux4gComponent: string;
  notes: string;
  status: 'easy' | 'medium' | 'hard';
}

function ComponentMappingRow({ muiComponent, ux4gComponent, notes, status }: ComponentMappingRowProps) {
  const statusColors = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-orange-100 text-orange-700',
    hard: 'bg-red-100 text-red-700'
  };

  return (
    <tr>
      <td className="p-4 font-mono text-sm text-foreground">{muiComponent}</td>
      <td className="p-4 font-mono text-sm text-saffron-700">{ux4gComponent}</td>
      <td className="p-4 text-sm text-muted-foreground">
        <div className="flex items-start gap-2">
          <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase ${statusColors[status]} flex-shrink-0`}>
            {status}
          </span>
          <span>{notes}</span>
        </div>
      </td>
    </tr>
  );
}

interface CodeExampleProps {
  title: string;
  before: string;
  after: string;
  notes?: string;
}

function CodeExample({ title, before, after, notes }: CodeExampleProps) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background p-4 border-b-2 border-border">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <Code size={18} />
          {title}
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-0 divide-x divide-border">
        <div className="p-4">
          <div className="text-xs font-semibold text-muted-foreground mb-2">Material-UI (Before)</div>
          <pre className="bg-gray-900 text-gray-100 dark:text-gray-200 p-4 rounded text-xs overflow-x-auto">
            <code>{before}</code>
          </pre>
        </div>

        <div className="p-4">
          <div className="text-xs font-semibold text-saffron-700 mb-2">UX4G (After)</div>
          <pre className="bg-saffron-900 text-gray-100 dark:text-gray-200 p-4 rounded text-xs overflow-x-auto">
            <code>{after}</code>
          </pre>
        </div>
      </div>

      {notes && (
        <div className="bg-blue-50 dark:bg-blue-950/30 border-t-2 border-blue-200 dark:border-blue-800 p-4">
          <div className="flex items-start gap-2">
            <AlertTriangle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">{notes}</p>
          </div>
        </div>
      )}
    </div>
  );
}

interface StylingExampleProps {
  title: string;
  muiCode: string;
  ux4gCode: string;
  notes: string;
}

function StylingExample({ title, muiCode, ux4gCode, notes }: StylingExampleProps) {
  return (
    <div className="border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-4">{title}</h3>

      <div className="space-y-4">
        <div>
          <div className="text-xs font-semibold text-muted-foreground mb-2">Material-UI Approach</div>
          <pre className="bg-gray-900 text-gray-100 dark:text-gray-200 p-4 rounded text-xs overflow-x-auto">
            <code>{muiCode}</code>
          </pre>
        </div>

        <div>
          <div className="text-xs font-semibold text-saffron-700 mb-2">UX4G Approach</div>
          <pre className="bg-saffron-900 text-gray-100 dark:text-gray-200 p-4 rounded text-xs overflow-x-auto">
            <code>{ux4gCode}</code>
          </pre>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded p-3">
          <p className="text-sm text-muted-foreground">{notes}</p>
        </div>
      </div>
    </div>
  );
}

interface MigrationStepProps {
  step: number;
  title: string;
  description: string;
  commands: string[];
}

function MigrationStep({ step, title, description, commands }: MigrationStepProps) {
  return (
    <div className="border-2 border-border rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-saffron-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
          {step}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground mb-3">{description}</p>

          <pre className="bg-gray-900 text-gray-100 dark:text-gray-200 p-4 rounded text-xs overflow-x-auto">
            <code>{commands.join('\n')}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

interface IssueCardProps {
  issue: string;
  solution: string;
  example: string;
}

function IssueCard({ issue, solution, example }: IssueCardProps) {
  return (
    <div className="border-2 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="text-orange-600 flex-shrink-0" size={20} />
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-1">{issue}</h4>
          <p className="text-sm text-muted-foreground mb-2">{solution}</p>
          <div className="bg-card border border-orange-200 dark:border-orange-800 rounded p-2">
            <code className="text-xs text-foreground">{example}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
      <span className="text-foreground">{text}</span>
    </div>
  );
}
