import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    variant: 'info',
    message: 'This is an informational message',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Application submitted successfully',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    message: 'Please review your information before submitting',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    message: 'Failed to submit application. Please try again.',
  },
};

export const WithTitle: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your PAN application has been submitted',
  },
};

export const AadhaarVerified: Story = {
  args: {
    variant: 'success',
    title: 'Aadhaar Verified',
    message: 'Your Aadhaar has been successfully verified',
  },
};

export const DocumentUploaded: Story = {
  args: {
    variant: 'success',
    message: 'Document uploaded to DigiLocker successfully',
  },
};

export const PANApplicationSubmitted: Story = {
  args: {
    variant: 'success',
    title: 'Application Submitted',
    message: 'Your PAN application (ID: PAN2024001) has been submitted for processing',
  },
};

export const OTPSent: Story = {
  args: {
    variant: 'info',
    title: 'OTP Sent',
    message: 'A one-time password has been sent to your registered mobile number',
  },
};

export const SessionExpiring: Story = {
  args: {
    variant: 'warning',
    title: 'Session Expiring',
    message: 'Your session will expire in 5 minutes. Please save your work.',
  },
};

export const VerificationFailed: Story = {
  args: {
    variant: 'error',
    title: 'Verification Failed',
    message: 'Unable to verify Aadhaar. Please check the number and try again.',
  },
};

export const WithAction: Story = {
  args: {
    variant: 'info',
    message: 'New update available for your application',
    action: {
      label: 'View',
      onClick: () => alert('View clicked'),
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <div>
        <button
          className="ux4g-button ux4g-button-primary"
          onClick={() => setShow(true)}
        >
          Show Toast
        </button>
        {show && (
          <div style={{ marginTop: '1rem' }}>
            <Toast
              variant="success"
              message="This is a toast notification"
              onClose={() => setShow(false)}
            />
          </div>
        )}
      </div>
    );
  },
};
