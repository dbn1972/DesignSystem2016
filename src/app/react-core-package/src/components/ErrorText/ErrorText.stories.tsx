import type { Meta, StoryObj } from '@storybook/react';
import { ErrorText } from './ErrorText';
import { Field } from '../Field/Field';
import { Label } from '../Label/Label';
import { Input } from '../Input/Input';

/**
 * ErrorText displays validation error messages below form fields.
 *
 * ## Accessibility
 * - Includes `role="alert"` for screen readers
 * - Red color with sufficient contrast
 * - Clear, actionable error messages
 */
const meta = {
  title: 'Components/ErrorText',
  component: ErrorText,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Error message component for displaying validation errors in forms. Includes accessibility attributes for screen readers.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Error message text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} satisfies Meta<typeof ErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This field is required',
  },
};

export const LongMessage: Story = {
  args: {
    children:
      'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character',
  },
};

export const ShortMessage: Story = {
  args: {
    children: 'Invalid format',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="max-w-md">
      <Field error>
        <Label htmlFor="email-error">Email Address</Label>
        <Input id="email-error" type="email" value="invalid-email" error />
        <ErrorText>Please enter a valid email address</ErrorText>
      </Field>
    </div>
  ),
};

export const ValidationErrors: Story = {
  name: 'Common Validation Errors',
  render: () => (
    <div className="space-y-6 max-w-md">
      <Field error>
        <Label htmlFor="required-field">Full Name</Label>
        <Input id="required-field" error />
        <ErrorText>This field is required</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="email-field">Email</Label>
        <Input id="email-field" value="notanemail" error />
        <ErrorText>Please enter a valid email address</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="phone-field">Phone Number</Label>
        <Input id="phone-field" type="tel" value="123" error />
        <ErrorText>Phone number must be exactly 10 digits</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="password-field">Password</Label>
        <Input id="password-field" type="password" value="weak" error />
        <ErrorText>Password must be at least 8 characters</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="number-field">Age</Label>
        <Input id="number-field" type="number" value="150" error />
        <ErrorText>Age must be between 1 and 120</ErrorText>
      </Field>
    </div>
  ),
};

export const GovernmentIDErrors: Story = {
  name: 'Government ID Validation Errors',
  render: () => (
    <div className="space-y-6 max-w-md">
      <Field error>
        <Label htmlFor="aadhaar-error" required>
          Aadhaar Number
        </Label>
        <Input id="aadhaar-error" value="1234" error />
        <ErrorText>Aadhaar number must be exactly 12 digits</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="pan-error" required>
          PAN Card Number
        </Label>
        <Input id="pan-error" value="ABC123" error />
        <ErrorText>PAN must be in format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="voter-error">Voter ID</Label>
        <Input id="voter-error" value="ABC" error />
        <ErrorText>Voter ID must be 10 characters (3 letters + 7 digits)</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="passport-error">Passport Number</Label>
        <Input id="passport-error" value="123" error />
        <ErrorText>Passport number must start with a letter followed by 7 digits</ErrorText>
      </Field>
    </div>
  ),
};

export const ServerErrors: Story = {
  name: 'Server-Side Errors',
  render: () => (
    <div className="space-y-6 max-w-md">
      <Field error>
        <Label htmlFor="email-taken">Email Address</Label>
        <Input id="email-taken" value="existing@example.com" error />
        <ErrorText>This email address is already registered</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="username-taken">Username</Label>
        <Input id="username-taken" value="admin" error />
        <ErrorText>This username is not available</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="network-error">Application Number</Label>
        <Input id="network-error" error />
        <ErrorText>Unable to verify application number. Please try again.</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="rate-limit">OTP</Label>
        <Input id="rate-limit" type="text" maxLength={6} error />
        <ErrorText>Too many attempts. Please wait 5 minutes before trying again.</ErrorText>
      </Field>
    </div>
  ),
};

export const MultipleErrors: Story = {
  name: 'Multiple Errors on One Field',
  render: () => (
    <div className="max-w-md">
      <Field error>
        <Label htmlFor="multi-error" required>
          Password
        </Label>
        <Input id="multi-error" type="password" value="abc" error />
        <div className="space-y-1">
          <ErrorText>Password is too short (minimum 8 characters)</ErrorText>
          <ErrorText>Password must include at least one number</ErrorText>
          <ErrorText>Password must include at least one uppercase letter</ErrorText>
        </div>
      </Field>
    </div>
  ),
};

export const ErrorsInHindi: Story = {
  name: 'Multilingual Errors (Hindi)',
  render: () => (
    <div className="space-y-6 max-w-md">
      <Field error>
        <Label htmlFor="name-hi" required>
          पूरा नाम (Full Name)
        </Label>
        <Input id="name-hi" error />
        <ErrorText>यह फ़ील्ड आवश्यक है (This field is required)</ErrorText>
      </Field>

      <Field error>
        <Label htmlFor="mobile-hi" required>
          मोबाइल नंबर (Mobile Number)
        </Label>
        <Input id="mobile-hi" value="123" error />
        <ErrorText>मोबाइल नंबर 10 अंकों का होना चाहिए (Mobile number must be 10 digits)</ErrorText>
      </Field>
    </div>
  ),
};
