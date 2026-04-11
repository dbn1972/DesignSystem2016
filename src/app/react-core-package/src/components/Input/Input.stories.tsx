import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';

/**
 * The Input component allows users to enter text data.
 * It supports various input types, validation states, and accessibility features.
 *
 * ## When to use
 * - Single-line text entry
 * - Form fields (email, password, phone, etc.)
 * - Search inputs
 * - Number inputs
 *
 * ## When NOT to use
 * - Multi-line text - use Textarea instead
 * - Selecting from predefined options - use Select instead
 * - True/false values - use Checkbox or Switch instead
 */
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number'],
      description: 'Input type attribute',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    required: {
      control: 'boolean',
      description: 'Marks field as required',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Default text input with label.
 */
export const Default: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
};

/**
 * Email input with validation type.
 */
export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'name@example.com',
    helperText: 'We will never share your email',
  },
};

/**
 * Password input with masked characters.
 */
export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Minimum 8 characters',
  },
};

/**
 * Phone number input.
 */
export const Phone: Story = {
  args: {
    type: 'tel',
    label: 'Mobile Number',
    placeholder: '+91 98765 43210',
    helperText: 'Enter 10-digit mobile number',
  },
};

/**
 * Search input for filtering content.
 */
export const Search: Story = {
  args: {
    type: 'search',
    label: 'Search',
    placeholder: 'Search applications...',
    iconBefore: '🔍',
  },
};

/**
 * Required field indicator.
 */
export const Required: Story = {
  args: {
    label: 'Aadhaar Number',
    required: true,
    placeholder: 'XXXX XXXX XXXX',
    helperText: '12-digit Aadhaar number',
  },
};

/**
 * Input with error state and message.
 */
export const WithError: Story = {
  args: {
    label: 'PAN Card',
    value: 'ABCD123',
    error: 'Please enter a valid PAN card number (e.g., ABCDE1234F)',
    placeholder: 'ABCDE1234F',
  },
};

/**
 * Disabled input prevents user interaction.
 */
export const Disabled: Story = {
  args: {
    label: 'Application ID',
    value: 'APP-2026-12345',
    disabled: true,
    helperText: 'Auto-generated ID',
  },
};

/**
 * Small size input for compact layouts.
 */
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Pin Code',
    placeholder: '110001',
  },
};

/**
 * Medium size (default) input.
 */
export const Medium: Story = {
  args: {
    size: 'md',
    label: 'City',
    placeholder: 'New Delhi',
  },
};

/**
 * Large size input for emphasis.
 */
export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Application Title',
    placeholder: 'Enter title',
  },
};

/**
 * Input with icon before text.
 */
export const WithIconBefore: Story = {
  args: {
    label: 'Search Applications',
    iconBefore: '🔍',
    placeholder: 'Search...',
  },
};

/**
 * Input with icon after text.
 */
export const WithIconAfter: Story = {
  args: {
    label: 'Password',
    type: 'password',
    iconAfter: '👁️',
    placeholder: 'Enter password',
  },
};

/**
 * Full width input spans container width.
 */
export const FullWidth: Story = {
  args: {
    label: 'Address',
    placeholder: 'Enter complete address',
    fullWidth: true,
  },
};

/**
 * Interactive example showing controlled input with state.
 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div>
        <Input
          label="Enter your name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          helperText={`Character count: ${value.length}`}
        />
        <p style={{ marginTop: '1rem', color: '#6b7280' }}>
          Current value: <strong>{value || '(empty)'}</strong>
        </p>
      </div>
    );
  },
};

/**
 * Government form example with Aadhaar input and validation.
 */
export const AadhaarInput: Story = {
  render: () => {
    const [aadhaar, setAadhaar] = useState('');
    const [error, setError] = useState('');

    const validateAadhaar = (value: string) => {
      const cleaned = value.replace(/\s/g, '');
      if (cleaned.length === 0) {
        setError('');
        return;
      }
      if (cleaned.length !== 12 || !/^\d+$/.test(cleaned)) {
        setError('Aadhaar number must be 12 digits');
      } else {
        setError('');
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setAadhaar(value);
      validateAadhaar(value);
    };

    return (
      <Input
        label="Aadhaar Number"
        value={aadhaar}
        onChange={handleChange}
        placeholder="XXXX XXXX XXXX"
        required
        error={error}
        helperText="Enter your 12-digit Aadhaar number"
        maxLength={14} // Allow spaces
      />
    );
  },
};

/**
 * Government form example with PAN card input and validation.
 */
export const PANInput: Story = {
  render: () => {
    const [pan, setPan] = useState('');
    const [error, setError] = useState('');

    const validatePAN = (value: string) => {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (value.length === 0) {
        setError('');
        return;
      }
      if (!panRegex.test(value.toUpperCase())) {
        setError('Invalid PAN format (e.g., ABCDE1234F)');
      } else {
        setError('');
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.toUpperCase();
      setPan(value);
      validatePAN(value);
    };

    return (
      <Input
        label="PAN Card Number"
        value={pan}
        onChange={handleChange}
        placeholder="ABCDE1234F"
        required
        error={error}
        helperText="Permanent Account Number (10 characters)"
        maxLength={10}
        style={{ textTransform: 'uppercase' }}
      />
    );
  },
};

/**
 * Example of a complete government application form with multiple inputs.
 */
export const GovernmentForm: Story = {
  render: () => (
    <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Input
        label="Full Name"
        placeholder="As per Aadhaar"
        required
        helperText="Enter your complete name"
      />
      <Input
        type="email"
        label="Email Address"
        placeholder="name@example.com"
        required
      />
      <Input
        type="tel"
        label="Mobile Number"
        placeholder="+91 98765 43210"
        required
        iconBefore="📱"
      />
      <Input
        label="Aadhaar Number"
        placeholder="XXXX XXXX XXXX"
        required
        helperText="12-digit Aadhaar number"
      />
      <Input
        label="PAN Card"
        placeholder="ABCDE1234F"
        helperText="Optional - for income verification"
        style={{ textTransform: 'uppercase' }}
      />
    </div>
  ),
};
