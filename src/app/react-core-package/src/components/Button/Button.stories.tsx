import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * The Button component is the primary interactive element for user actions.
 * It comes with multiple variants, sizes, and states to suit different use cases.
 *
 * ## When to use
 * - Triggering form submission
 * - Opening modals or dialogs
 * - Confirming or canceling actions
 * - Primary calls-to-action
 *
 * ## When NOT to use
 * - For navigation between pages - use Link instead
 * - For toggling states - use Switch or Checkbox
 * - For selecting from options - use Radio or Select
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Visual style variant',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Button spans full width of container',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * The primary button should be used for the main action on a page or form.
 * Only use one primary button per section.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

/**
 * Secondary buttons are for less prominent actions that support the primary action.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

/**
 * Outline buttons are for tertiary actions or when multiple buttons are placed together.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

/**
 * Ghost buttons are the least prominent and used for subtle actions.
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

/**
 * Small buttons are used when space is limited or for less important actions.
 */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

/**
 * Medium is the default size, suitable for most use cases.
 */
export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

/**
 * Large buttons are used for primary actions on landing pages or empty states.
 */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

/**
 * Disabled buttons prevent user interaction and indicate an action is unavailable.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

/**
 * Loading state shows async operations in progress. The button is disabled during loading.
 */
export const Loading: Story = {
  args: {
    loading: true,
    loadingText: 'Processing...',
    children: 'Submit Application',
  },
};

/**
 * Full width buttons span the entire width of their container.
 * Useful in mobile layouts or narrow containers.
 */
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
};

/**
 * Buttons with icons before the text help clarify the action.
 */
export const WithIconBefore: Story = {
  args: {
    iconBefore: '✓',
    children: 'Save Changes',
  },
};

/**
 * Buttons with icons after the text can indicate direction or state.
 */
export const WithIconAfter: Story = {
  args: {
    iconAfter: '→',
    children: 'Continue',
  },
};

/**
 * Example of all button variants displayed together for comparison.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

/**
 * Example of all button sizes displayed together for comparison.
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

/**
 * Example usage in a form context with submit and cancel buttons.
 */
export const FormActions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary" type="submit">
        Submit Application
      </Button>
    </div>
  ),
};

/**
 * Example of button group with different states for government application workflow.
 */
export const GovernmentWorkflow: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <Button variant="primary" fullWidth>
        ✓ Aadhaar Verified
      </Button>
      <Button variant="primary" loading loadingText="Verifying PAN..." fullWidth>
        Verify PAN Card
      </Button>
      <Button variant="outline" disabled fullWidth>
        Upload Documents (2/5 required)
      </Button>
      <Button variant="secondary" fullWidth>
        Save as Draft
      </Button>
    </div>
  ),
};
