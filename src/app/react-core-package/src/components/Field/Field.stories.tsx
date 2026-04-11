import type { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';
import { Label } from '../Label/Label';
import { Input } from '../Input/Input';
import { ErrorText } from '../ErrorText/ErrorText';
import { HintText } from '../HintText/HintText';

/**
 * Field is a container component that groups form elements together (Label + Input + HintText/ErrorText).
 * It provides consistent spacing and styling for form fields.
 *
 * ## Features
 * - Automatic spacing between form elements
 * - Error state styling propagation
 * - Required field indication
 * - Disabled state support
 */
const meta = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Field component for composing form fields with labels, inputs, and helper/error text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
      description: 'Whether the field is in an error state',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field>
      <Label htmlFor="name">Full Name</Label>
      <Input id="name" placeholder="Enter your full name" />
      <HintText>As it appears on your official documents</HintText>
    </Field>
  ),
};

export const Required: Story = {
  render: () => (
    <Field required>
      <Label htmlFor="email" required>
        Email Address
      </Label>
      <Input id="email" type="email" placeholder="you@example.com" required />
      <HintText>We'll never share your email with third parties</HintText>
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field error>
      <Label htmlFor="phone">Phone Number</Label>
      <Input id="phone" type="tel" value="123" error />
      <ErrorText>Phone number must be 10 digits</ErrorText>
    </Field>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Field disabled>
      <Label htmlFor="id" disabled>
        Application ID
      </Label>
      <Input id="id" value="APP-2026-001234" disabled />
      <HintText>Auto-generated and cannot be changed</HintText>
    </Field>
  ),
};

export const AadhaarField: Story = {
  name: 'Aadhaar Number Field',
  render: () => (
    <Field required>
      <Label htmlFor="aadhaar" required>
        Aadhaar Number
      </Label>
      <Input
        id="aadhaar"
        type="text"
        placeholder="1234 5678 9012"
        maxLength={14}
        required
      />
      <HintText>Enter your 12-digit Aadhaar number</HintText>
    </Field>
  ),
};

export const PANField: Story = {
  name: 'PAN Card Field',
  render: () => (
    <Field required>
      <Label htmlFor="pan" required>
        PAN Card Number
      </Label>
      <Input
        id="pan"
        type="text"
        placeholder="ABCDE1234F"
        maxLength={10}
        style={{ textTransform: 'uppercase' }}
        required
      />
      <HintText>Format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)</HintText>
    </Field>
  ),
};

export const FormExample: Story = {
  name: 'Complete Form',
  render: () => (
    <div className="space-y-6 max-w-md">
      <h3 className="text-lg font-medium">Citizen Registration Form</h3>

      <Field required>
        <Label htmlFor="fullname" required>
          Full Name
        </Label>
        <Input id="fullname" placeholder="Enter your full name" required />
        <HintText>As per Aadhaar card</HintText>
      </Field>

      <Field required>
        <Label htmlFor="email-form" required>
          Email Address
        </Label>
        <Input id="email-form" type="email" placeholder="you@example.com" required />
        <HintText>For official communications</HintText>
      </Field>

      <Field required>
        <Label htmlFor="phone-form" required>
          Mobile Number
        </Label>
        <Input id="phone-form" type="tel" placeholder="9876543210" maxLength={10} required />
        <HintText>10-digit mobile number</HintText>
      </Field>

      <Field>
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="Enter your address" />
        <HintText>Optional</HintText>
      </Field>
    </div>
  ),
};

export const ValidationStates: Story = {
  name: 'All Validation States',
  render: () => (
    <div className="space-y-6">
      <Field>
        <Label htmlFor="valid">Valid Field</Label>
        <Input id="valid" value="Valid input" />
        <HintText>This field is filled correctly</HintText>
      </Field>

      <Field error>
        <Label htmlFor="error-field">Field with Error</Label>
        <Input id="error-field" value="Invalid" error />
        <ErrorText>This value is not acceptable</ErrorText>
      </Field>

      <Field required>
        <Label htmlFor="required-field" required>
          Required Field
        </Label>
        <Input id="required-field" placeholder="This field is required" required />
        <HintText>Please provide a value</HintText>
      </Field>

      <Field disabled>
        <Label htmlFor="disabled-field" disabled>
          Disabled Field
        </Label>
        <Input id="disabled-field" value="Cannot edit" disabled />
        <HintText>This field cannot be modified</HintText>
      </Field>
    </div>
  ),
};
