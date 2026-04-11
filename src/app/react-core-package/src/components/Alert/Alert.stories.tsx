import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

/**
 * The Alert component displays important messages to users.
 * It supports different status variants and can be dismissible.
 *
 * ## When to use
 * - System-wide messages
 * - Form validation feedback
 * - Success/error confirmations
 * - Important warnings
 * - Informational notices
 *
 * ## When NOT to use
 * - Inline form field errors - use Input error prop instead
 * - Transient notifications - use Toast instead
 * - Blocking confirmations - use Dialog instead
 */
const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Alert status variant',
      table: {
        defaultValue: { summary: 'info' },
      },
    },
    title: {
      control: 'text',
      description: 'Alert title',
    },
    description: {
      control: 'text',
      description: 'Alert description/message',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show status icon',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    onClose: {
      action: 'close clicked',
      description: 'Close button handler (shows close button if provided)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

/**
 * Info alerts provide general information to users.
 */
export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    description: 'Your application has been received and is being processed.',
  },
};

/**
 * Success alerts confirm successful actions.
 */
export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    description: 'Your document has been uploaded successfully.',
  },
};

/**
 * Warning alerts indicate potential issues.
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'Your session will expire in 5 minutes. Please save your work.',
  },
};

/**
 * Error alerts indicate problems that need attention.
 */
export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    description: 'Unable to verify Aadhaar. Please check the number and try again.',
  },
};

/**
 * Alert with only description (no title).
 */
export const DescriptionOnly: Story = {
  args: {
    variant: 'info',
    description: 'This is a simple alert message without a title.',
  },
};

/**
 * Alert with only title (no description).
 */
export const TitleOnly: Story = {
  args: {
    variant: 'success',
    title: 'Document uploaded successfully',
  },
};

/**
 * Alert without icon.
 */
export const NoIcon: Story = {
  args: {
    variant: 'info',
    title: 'Simple Message',
    description: 'This alert does not display an icon.',
    showIcon: false,
  },
};

/**
 * Dismissible alert with close button.
 */
export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    description: 'Click the close button to dismiss this alert.',
    onClose: () => console.log('Alert dismissed'),
  },
};

/**
 * Alert with custom icon.
 */
export const CustomIcon: Story = {
  args: {
    variant: 'info',
    title: 'Custom Icon',
    description: 'This alert uses a custom icon instead of the default.',
    icon: '📢',
  },
};

/**
 * Alert using children instead of description prop.
 */
export const WithChildren: Story = {
  args: {
    variant: 'warning',
    title: 'Complex Content',
    children: (
      <div>
        <p>This alert contains custom content:</p>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li>Custom HTML elements</li>
          <li>Lists and formatting</li>
          <li>Links and buttons</li>
        </ul>
      </div>
    ),
  },
};

/**
 * All alert variants displayed together for comparison.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert
        variant="info"
        title="Information"
        description="General information message"
      />
      <Alert
        variant="success"
        title="Success"
        description="Successful operation message"
      />
      <Alert
        variant="warning"
        title="Warning"
        description="Warning message requiring attention"
      />
      <Alert
        variant="error"
        title="Error"
        description="Error message indicating a problem"
      />
    </div>
  ),
};

/**
 * Government application examples showing different alert scenarios.
 */
export const GovernmentScenarios: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert
        variant="success"
        title="Aadhaar Verified"
        description="Your Aadhaar has been successfully verified. You can proceed with the application."
      />

      <Alert
        variant="info"
        title="DigiLocker Access Required"
        description="Connect your DigiLocker account to auto-fill document details."
      />

      <Alert
        variant="warning"
        title="Incomplete Application"
        description="Please upload all required documents before submitting your application."
        onClose={() => console.log('Alert dismissed')}
      />

      <Alert
        variant="error"
        title="PAN Verification Failed"
        description="The PAN card number does not match our records. Please verify and try again."
      />

      <Alert
        variant="success"
        title="Application Submitted"
        description="Your application (ID: APP-2026-12345) has been submitted. You will receive updates via SMS and email."
      />
    </div>
  ),
};

/**
 * Example showing alerts with action buttons.
 */
export const WithActions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert
        variant="info"
        title="Update Available"
      >
        <p>A new version of the application is available.</p>
        <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
          <button
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer',
            }}
          >
            Update Now
          </button>
          <button
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'transparent',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              cursor: 'pointer',
            }}
          >
            Later
          </button>
        </div>
      </Alert>

      <Alert
        variant="warning"
        title="Session Expiring"
      >
        <p>Your session will expire in 5 minutes due to inactivity.</p>
        <button
          style={{
            marginTop: '0.75rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#f59e0b',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
          }}
        >
          Extend Session
        </button>
      </Alert>
    </div>
  ),
};

/**
 * Example of a form validation summary using alerts.
 */
export const FormValidation: Story = {
  render: () => (
    <Alert variant="error" title="Form Validation Errors">
      <p>Please correct the following errors:</p>
      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li>Email address is required</li>
        <li>Mobile number must be 10 digits</li>
        <li>Aadhaar number format is invalid</li>
        <li>PAN card is required for this application</li>
      </ul>
    </Alert>
  ),
};
