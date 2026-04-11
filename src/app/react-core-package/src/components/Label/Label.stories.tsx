import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Input } from '../Input/Input';

/**
 * Label component for form fields with support for required indicators and disabled states.
 *
 * ## Accessibility
 * - Always use `htmlFor` prop that matches the input's `id`
 * - Provides clear association between label and input for screen readers
 * - Required indicator is visible to all users
 */
const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Label component for form fields with required indicator and disabled state support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
      description: 'Show required indicator (*)',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the label is disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    htmlFor: {
      control: 'text',
      description: 'ID of the associated form element',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email-default',
  },
  render: (args) => (
    <div>
      <Label {...args} />
      <Input id="email-default" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Required: Story = {
  args: {
    children: 'Full Name',
    htmlFor: 'name-required',
    required: true,
  },
  render: (args) => (
    <div>
      <Label {...args} />
      <Input id="name-required" placeholder="Enter your name" required />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Application ID',
    htmlFor: 'app-id',
    disabled: true,
  },
  render: (args) => (
    <div>
      <Label {...args} />
      <Input id="app-id" value="APP-2026-001234" disabled />
    </div>
  ),
};

export const LongText: Story = {
  args: {
    children: 'Permanent Residential Address as per Aadhaar Card',
    htmlFor: 'address-long',
    required: true,
  },
  render: (args) => (
    <div className="max-w-md">
      <Label {...args} />
      <Input id="address-long" placeholder="Enter your address" />
    </div>
  ),
};

export const AllStates: Story = {
  name: 'All Label States',
  render: () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="state-1">Normal Label</Label>
        <Input id="state-1" placeholder="Normal input" />
      </div>

      <div>
        <Label htmlFor="state-2" required>
          Required Label
        </Label>
        <Input id="state-2" placeholder="Required input" required />
      </div>

      <div>
        <Label htmlFor="state-3" disabled>
          Disabled Label
        </Label>
        <Input id="state-3" value="Disabled input" disabled />
      </div>

      <div>
        <Label htmlFor="state-4" required disabled>
          Required + Disabled
        </Label>
        <Input id="state-4" value="Value" disabled />
      </div>
    </div>
  ),
};

export const GovernmentForm: Story = {
  name: 'Government Form Labels',
  render: () => (
    <div className="space-y-6 max-w-md">
      <div>
        <Label htmlFor="aadhaar" required>
          Aadhaar Number
        </Label>
        <Input id="aadhaar" placeholder="1234 5678 9012" maxLength={14} required />
      </div>

      <div>
        <Label htmlFor="pan" required>
          PAN Card Number
        </Label>
        <Input id="pan" placeholder="ABCDE1234F" maxLength={10} required />
      </div>

      <div>
        <Label htmlFor="voter">Voter ID (Optional)</Label>
        <Input id="voter" placeholder="ABC1234567" />
      </div>

      <div>
        <Label htmlFor="passport">Passport Number (Optional)</Label>
        <Input id="passport" placeholder="A1234567" />
      </div>

      <div>
        <Label htmlFor="driving">Driving License Number (Optional)</Label>
        <Input id="driving" placeholder="DL-1234567890123" />
      </div>
    </div>
  ),
};

export const Multilingual: Story = {
  name: 'Multilingual Labels (Hindi)',
  render: () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="name-hi" required>
          पूरा नाम (Full Name)
        </Label>
        <Input id="name-hi" placeholder="अपना पूरा नाम दर्ज करें" required />
      </div>

      <div>
        <Label htmlFor="mobile-hi" required>
          मोबाइल नंबर (Mobile Number)
        </Label>
        <Input id="mobile-hi" type="tel" placeholder="9876543210" required />
      </div>

      <div>
        <Label htmlFor="address-hi">
          पता (Address)
        </Label>
        <Input id="address-hi" placeholder="अपना पता दर्ज करें" />
      </div>
    </div>
  ),
};
