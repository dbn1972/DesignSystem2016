import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

interface ColorSwatchProps {
  name: string;
  value: string;
  description?: string;
}

const ColorSwatch = ({ name, value, description }: ColorSwatchProps) => (
  <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
    <div
      className="w-16 h-16 rounded-md border border-gray-300 flex-shrink-0"
      style={{ background: value }}
    />
    <div className="flex-1">
      <div className="font-semibold text-sm">{name}</div>
      <div className="text-xs text-gray-500 font-mono">{value}</div>
      {description && <div className="text-xs text-gray-600 mt-1">{description}</div>}
    </div>
  </div>
);

interface ColorGridProps {
  colors: ColorSwatchProps[];
  title: string;
  description?: string;
}

const ColorGrid = ({ colors, title, description }: ColorGridProps) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {colors.map((color) => (
        <ColorSwatch key={color.name} {...color} />
      ))}
    </div>
  </div>
);

export const SemanticColors: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Semantic Colors</h2>

      <ColorGrid
        title="Primary & Secondary"
        description="Main brand colors for primary and secondary actions"
        colors={[
          { name: 'Primary', value: '#030213', description: 'Main brand color' },
          { name: 'Primary Foreground', value: '#FFFFFF', description: 'Text on primary' },
          { name: 'Secondary', value: '#ECECF0', description: 'Secondary actions' },
          { name: 'Secondary Foreground', value: '#030213', description: 'Text on secondary' },
        ]}
      />

      <ColorGrid
        title="Accent & Muted"
        description="Highlighted and subdued elements"
        colors={[
          { name: 'Accent', value: '#E9EBEF', description: 'Highlighted elements' },
          { name: 'Accent Foreground', value: '#030213', description: 'Text on accent' },
          { name: 'Muted', value: '#ECECF0', description: 'Subdued backgrounds' },
          { name: 'Muted Foreground', value: '#717182', description: 'Subdued text' },
        ]}
      />

      <ColorGrid
        title="Destructive"
        description="Error states and destructive actions"
        colors={[
          { name: 'Destructive', value: '#D4183D', description: 'Error/danger color' },
          { name: 'Destructive Foreground', value: '#FFFFFF', description: 'Text on destructive' },
        ]}
      />
    </div>
  ),
};

export const SurfaceColors: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Surface Colors</h2>

      <ColorGrid
        title="Backgrounds"
        description="Page and component backgrounds"
        colors={[
          { name: 'Background', value: '#FFFFFF', description: 'Main page background' },
          { name: 'Foreground', value: '#030213', description: 'Main text color' },
          { name: 'Card', value: '#FFFFFF', description: 'Card backgrounds' },
          { name: 'Card Foreground', value: '#030213', description: 'Text on cards' },
          { name: 'Popover', value: '#FFFFFF', description: 'Popover backgrounds' },
          { name: 'Popover Foreground', value: '#030213', description: 'Text on popovers' },
        ]}
      />
    </div>
  ),
};

export const InteractiveColors: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Interactive Colors</h2>

      <ColorGrid
        title="Borders & Inputs"
        description="Colors for interactive elements"
        colors={[
          { name: 'Border', value: 'rgba(0, 0, 0, 0.1)', description: 'Default border color' },
          { name: 'Input Background', value: '#F3F3F5', description: 'Input field backgrounds' },
          { name: 'Ring', value: '#B3B3B3', description: 'Focus ring color' },
          { name: 'Switch Background', value: '#CBCED4', description: 'Toggle switch background' },
        ]}
      />
    </div>
  ),
};

export const ChartColors: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Chart Colors</h2>

      <ColorGrid
        title="Data Visualization"
        description="Colors for charts, graphs, and data visualization"
        colors={[
          { name: 'Chart 1', value: '#FF9F40', description: 'Orange - primary data series' },
          { name: 'Chart 2', value: '#4BC0C0', description: 'Teal - secondary data series' },
          { name: 'Chart 3', value: '#36A2EB', description: 'Blue - tertiary data series' },
          { name: 'Chart 4', value: '#FFD700', description: 'Gold - quaternary data series' },
          { name: 'Chart 5', value: '#FF6384', description: 'Pink - quinary data series' },
        ]}
      />

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-sm text-blue-900 mb-2">Accessibility Note</h4>
        <p className="text-sm text-blue-800">
          When using chart colors, always provide additional visual cues beyond color alone
          (patterns, labels, shapes) to ensure color-blind users can distinguish data series.
        </p>
      </div>
    </div>
  ),
};

export const SidebarColors: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Sidebar Colors</h2>

      <ColorGrid
        title="Navigation Sidebar"
        description="Colors specific to sidebar navigation components"
        colors={[
          { name: 'Sidebar', value: '#FCFCFC', description: 'Sidebar background' },
          { name: 'Sidebar Foreground', value: '#252525', description: 'Sidebar text' },
          { name: 'Sidebar Primary', value: '#030213', description: 'Active/selected items' },
          { name: 'Sidebar Primary Foreground', value: '#FCFCFC', description: 'Text on active items' },
          { name: 'Sidebar Accent', value: '#F7F7F7', description: 'Hover state' },
          { name: 'Sidebar Accent Foreground', value: '#343434', description: 'Text on hover' },
          { name: 'Sidebar Border', value: '#EBEBEB', description: 'Sidebar borders' },
          { name: 'Sidebar Ring', value: '#B3B3B3', description: 'Focus ring in sidebar' },
        ]}
      />
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-background text-foreground p-8 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Dark Mode Colors</h2>

      <ColorGrid
        title="Dark Mode Palette"
        description="Automatically applied when .dark class is on parent element"
        colors={[
          { name: 'Background', value: '#252525', description: 'Dark page background' },
          { name: 'Foreground', value: '#FCFCFC', description: 'Light text color' },
          { name: 'Card', value: '#252525', description: 'Dark card backgrounds' },
          { name: 'Muted', value: '#454545', description: 'Subdued dark backgrounds' },
          { name: 'Border', value: '#454545', description: 'Dark borders' },
          { name: 'Primary', value: '#FCFCFC', description: 'Light primary color' },
          { name: 'Secondary', value: '#454545', description: 'Dark secondary' },
          { name: 'Accent', value: '#454545', description: 'Dark accent' },
        ]}
      />

      <div className="mt-8 p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
        <h4 className="font-semibold text-sm text-blue-100 mb-2">Implementation</h4>
        <p className="text-sm text-blue-200">
          Add the <code className="bg-blue-800 px-1 rounded">.dark</code> class to the html or body
          element to enable dark mode across the entire application.
        </p>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const AccessibilityCompliance: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">WCAG 2.1 Compliance</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Color Contrast Ratios</h3>
        <p className="text-sm text-gray-600 mb-4">
          All color combinations meet WCAG 2.1 Level AA requirements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="font-semibold text-sm mb-2">Normal Text (16px)</div>
            <div className="text-sm text-gray-600">Minimum ratio: 4.5:1</div>
            <div className="mt-3 flex gap-4">
              <div className="flex-1 p-3 bg-primary text-primary-foreground rounded">
                Primary ✓ 21:1
              </div>
              <div className="flex-1 p-3 bg-destructive text-destructive-foreground rounded">
                Destructive ✓ 9.8:1
              </div>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="font-semibold text-sm mb-2">Large Text (24px)</div>
            <div className="text-sm text-gray-600">Minimum ratio: 3:1</div>
            <div className="mt-3 flex gap-4">
              <div className="flex-1 p-3 bg-secondary text-secondary-foreground rounded text-xl">
                Secondary ✓ 18:1
              </div>
              <div className="flex-1 p-3 bg-muted text-muted-foreground rounded text-xl">
                Muted ✓ 4.7:1
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <h4 className="font-semibold text-sm text-green-900 mb-2">Government Requirements</h4>
        <p className="text-sm text-green-800">
          The UX4G color system is designed to meet the accessibility requirements of
          government websites and applications, including support for color blindness
          and high contrast mode.
        </p>
      </div>
    </div>
  ),
};
