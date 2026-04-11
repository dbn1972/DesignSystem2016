import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeScale: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-6">Typography Scale</h1>
        <p className="text-gray-600 mb-8">
          UX4G uses a modular type scale based on rem units for consistency and accessibility.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <div className="text-sm text-gray-500 mb-2">4XL - 2.25rem (36px)</div>
          <div className="text-4xl font-normal">The quick brown fox jumps over the lazy dog</div>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <div className="text-sm text-gray-500 mb-2">3XL - 1.875rem (30px)</div>
          <div className="text-3xl font-normal">The quick brown fox jumps over the lazy dog</div>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <div className="text-sm text-gray-500 mb-2">2XL - 1.5rem (24px)</div>
          <div className="text-2xl font-normal">The quick brown fox jumps over the lazy dog</div>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <div className="text-sm text-gray-500 mb-2">XL - 1.25rem (20px)</div>
          <div className="text-xl font-normal">The quick brown fox jumps over the lazy dog</div>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <div className="text-sm text-gray-500 mb-2">LG - 1.125rem (18px)</div>
          <div className="text-lg font-normal">The quick brown fox jumps over the lazy dog</div>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <div className="text-sm text-gray-500 mb-2">BASE - 1rem (16px) - Default</div>
          <div className="text-base font-normal">The quick brown fox jumps over the lazy dog</div>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <div className="text-sm text-gray-500 mb-2">SM - 0.875rem (14px)</div>
          <div className="text-sm font-normal">The quick brown fox jumps over the lazy dog</div>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <div className="text-sm text-gray-500 mb-2">XS - 0.75rem (12px)</div>
          <div className="text-xs font-normal">The quick brown fox jumps over the lazy dog</div>
        </div>
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Font Weights</h2>
      <p className="text-gray-600 mb-8">
        UX4G uses two font weights for simplicity and consistency:
      </p>

      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-2">Normal - 400</div>
          <div className="text-2xl font-normal">
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="text-sm text-gray-600 mt-2">
            Used for: Body text, paragraphs, descriptions, input values
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-2">Medium - 500</div>
          <div className="text-2xl font-medium">
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="text-sm text-gray-600 mt-2">
            Used for: Headings, labels, buttons, navigation items, emphasized text
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-sm text-blue-900 mb-2">Design Decision</h4>
        <p className="text-sm text-blue-800">
          Using only two font weights creates visual hierarchy without overwhelming users
          or increasing page load times. This aligns with government accessibility guidelines.
        </p>
      </div>
    </div>
  ),
};

export const Headings: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Heading Hierarchy</h2>
        <p className="text-gray-600">
          Semantic HTML headings with consistent styling and spacing.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-3">H1 - Page Title</div>
          <h1>Heading Level 1</h1>
          <div className="text-xs text-gray-500 mt-2 font-mono">
            font-size: 1.5rem (24px) • font-weight: 500 • line-height: 1.5
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-3">H2 - Section Heading</div>
          <h2>Heading Level 2</h2>
          <div className="text-xs text-gray-500 mt-2 font-mono">
            font-size: 1.25rem (20px) • font-weight: 500 • line-height: 1.5
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-3">H3 - Subsection Heading</div>
          <h3>Heading Level 3</h3>
          <div className="text-xs text-gray-500 mt-2 font-mono">
            font-size: 1.125rem (18px) • font-weight: 500 • line-height: 1.5
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-3">H4 - Minor Heading</div>
          <h4>Heading Level 4</h4>
          <div className="text-xs text-gray-500 mt-2 font-mono">
            font-size: 1rem (16px) • font-weight: 500 • line-height: 1.5
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Body Text</h2>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="text-sm text-gray-500 mb-3">Paragraph - Default Size</div>
        <p className="mb-4">
          This is a paragraph of body text at the default size. It uses 1rem (16px) font size
          with normal weight (400). The line height is set to 1.5 for optimal readability,
          especially in long-form content.
        </p>
        <p>
          Multiple paragraphs create comfortable reading spacing. Government applications
          should prioritize readability and accessibility, ensuring text is easy to scan
          and comprehend for all users.
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="text-sm text-gray-500 mb-3">Large Body Text</div>
        <p className="text-lg">
          Large body text (1.125rem / 18px) can be used for emphasis or in hero sections.
          It maintains the same line height ratio for consistency.
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="text-sm text-gray-500 mb-3">Small Body Text</div>
        <p className="text-sm">
          Small text (0.875rem / 14px) is used for captions, helper text, or secondary
          information. Ensure sufficient contrast when using smaller text sizes.
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="text-sm text-gray-500 mb-3">Extra Small Text</div>
        <p className="text-xs">
          Extra small text (0.75rem / 12px) should be used sparingly, only for labels,
          timestamps, or very minor details. Never use for critical information.
        </p>
      </div>
    </div>
  ),
};

export const LineHeight: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Line Height</h2>
      <p className="text-gray-600 mb-6">
        Consistent line height improves readability and creates visual rhythm.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-3">Tight - 1.25</div>
          <p className="leading-tight text-lg">
            Tight line height is useful for headings or short text where compact spacing
            is desired. Use sparingly for body text as it reduces readability.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-3">Normal - 1.5 (Default)</div>
          <p className="leading-normal text-lg">
            Normal line height is the default for body text and most content. It provides
            comfortable reading with good spacing between lines.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-3">Relaxed - 1.625</div>
          <p className="leading-relaxed text-lg">
            Relaxed line height creates more breathing room and can improve readability
            for longer paragraphs or smaller text sizes.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-3">Loose - 2</div>
          <p className="leading-loose text-lg">
            Loose line height provides maximum spacing and is useful for emphasized
            content or when extra whitespace is desired.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Text Colors</h2>

      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-2">Primary Text</div>
          <p className="text-foreground text-lg">
            Default text color for all body content. High contrast for maximum readability.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="text-sm text-gray-500 mb-2">Muted Text</div>
          <p className="text-muted-foreground text-lg">
            Secondary text for less important information, captions, and helper text.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-primary">
          <div className="text-sm text-primary-foreground/70 mb-2">Text on Primary Background</div>
          <p className="text-primary-foreground text-lg">
            High contrast text on colored backgrounds ensures readability.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-destructive">
          <div className="text-sm text-destructive-foreground/80 mb-2">Error Text</div>
          <p className="text-destructive-foreground text-lg">
            Text color for error messages and critical warnings.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const UsageExamples: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Real-World Usage</h2>

      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-2">Government Form Section</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Personal Information
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <p className="text-base">Raj Kumar Sharma</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Aadhaar Number</label>
            <p className="text-base font-mono">1234 5678 9012</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <p className="text-base">15 August 1990</p>
            <p className="text-xs text-muted-foreground">Age: 35 years</p>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h1 className="mb-3">Application Status</h1>
        <h2 className="mb-2">Certificate of Residence - Pending</h2>
        <p className="mb-4">
          Your application for a Certificate of Residence is currently being processed.
          We will notify you once the review is complete.
        </p>
        <p className="text-sm text-muted-foreground">
          Application ID: CR-2026-001234 • Submitted: April 11, 2026
        </p>
      </div>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-medium text-sm text-blue-900 mb-2">Typography Best Practices</h4>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>Use semantic HTML headings (h1-h6) for proper document structure</li>
          <li>Maintain sufficient color contrast (4.5:1 for body text)</li>
          <li>Limit line length to 60-80 characters for optimal readability</li>
          <li>Use font-medium (500) for emphasis, not bold (700)</li>
          <li>Ensure text is resizable up to 200% without loss of functionality</li>
        </ul>
      </div>
    </div>
  ),
};
