import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Basic: Story = {
  args: {
    items: [
      { key: '1', title: 'Event 1', timestamp: '2024-03-15' },
      { key: '2', title: 'Event 2', timestamp: '2024-03-16' },
      { key: '3', title: 'Event 3', timestamp: '2024-03-17' },
    ],
  },
};

export const WithContent: Story = {
  args: {
    items: [
      {
        key: '1',
        title: 'Application Submitted',
        content: 'Your application has been received',
        timestamp: '2024-03-15 10:30 AM',
      },
      {
        key: '2',
        title: 'Under Review',
        content: 'Application is being reviewed by the department',
        timestamp: '2024-03-16 02:15 PM',
      },
      {
        key: '3',
        title: 'Approved',
        content: 'Your application has been approved',
        timestamp: '2024-03-20 11:00 AM',
      },
    ],
  },
};

export const PANApplicationTracking: Story = {
  args: {
    items: [
      {
        key: '1',
        title: 'Application Submitted',
        content: 'PAN application PAN2024001 submitted successfully',
        timestamp: 'March 15, 2024 at 10:30 AM',
        variant: 'success' as const,
        icon: '✓',
      },
      {
        key: '2',
        title: 'Documents Verified',
        content: 'All submitted documents have been verified',
        timestamp: 'March 16, 2024 at 02:00 PM',
        variant: 'success' as const,
        icon: '✓',
      },
      {
        key: '3',
        title: 'Under Processing',
        content: 'Your PAN card is being generated',
        timestamp: 'March 18, 2024 at 09:00 AM',
        variant: 'info' as const,
        icon: '⏳',
      },
      {
        key: '4',
        title: 'Dispatched',
        content: 'PAN card dispatched to your address',
        timestamp: 'March 20, 2024 at 11:00 AM',
        variant: 'success' as const,
        icon: '📦',
      },
    ],
  },
};

export const AadhaarUpdateHistory: Story = {
  args: {
    items: [
      {
        key: '1',
        title: 'Address Updated',
        content: 'Residential address changed to Mumbai, Maharashtra',
        timestamp: 'January 10, 2024',
        variant: 'success' as const,
      },
      {
        key: '2',
        title: 'Mobile Number Updated',
        content: 'Mobile number linked with Aadhaar',
        timestamp: 'November 5, 2023',
        variant: 'success' as const,
      },
      {
        key: '3',
        title: 'Aadhaar Generated',
        content: 'Aadhaar card generated and sent to registered address',
        timestamp: 'June 15, 2018',
        variant: 'success' as const,
      },
    ],
  },
};

export const PassportApplicationStatus: Story = {
  args: {
    items: [
      {
        key: '1',
        title: 'Application Registered',
        content: 'File Number: AB1234567890',
        timestamp: 'March 1, 2024',
        variant: 'success' as const,
      },
      {
        key: '2',
        title: 'Fee Payment Received',
        content: 'Payment of Rs. 1500 received',
        timestamp: 'March 1, 2024',
        variant: 'success' as const,
      },
      {
        key: '3',
        title: 'Appointment Scheduled',
        content: 'PSK Visit: March 10, 2024 at 10:00 AM',
        timestamp: 'March 2, 2024',
        variant: 'info' as const,
      },
      {
        key: '4',
        title: 'Documents Verified',
        content: 'All documents verified at PSK',
        timestamp: 'March 10, 2024',
        variant: 'success' as const,
      },
      {
        key: '5',
        title: 'Police Verification',
        content: 'Pending police verification',
        timestamp: 'March 12, 2024',
        variant: 'warning' as const,
      },
    ],
  },
};

export const DigiLockerActivity: Story = {
  args: {
    items: [
      {
        key: '1',
        title: 'Document Uploaded',
        content: '10th Certificate uploaded successfully',
        timestamp: '2 hours ago',
        icon: '📄',
      },
      {
        key: '2',
        title: 'Document Shared',
        content: 'Aadhaar card shared with ABC University',
        timestamp: '1 day ago',
        icon: '🔗',
      },
      {
        key: '3',
        title: 'Document Verified',
        content: 'PAN card verified by issuer',
        timestamp: '3 days ago',
        icon: '✓',
      },
      {
        key: '4',
        title: 'Account Created',
        content: 'DigiLocker account activated',
        timestamp: '30 days ago',
        icon: '🎉',
      },
    ],
  },
};

export const LicenseRenewalProgress: Story = {
  args: {
    items: [
      {
        key: '1',
        title: 'Application Submitted',
        content: 'Driving License renewal application submitted',
        timestamp: 'Today at 09:00 AM',
        variant: 'success' as const,
      },
      {
        key: '2',
        title: 'Fee Payment',
        content: 'Payment of Rs. 200 completed',
        timestamp: 'Today at 09:05 AM',
        variant: 'success' as const,
      },
      {
        key: '3',
        title: 'Under Verification',
        content: 'Documents under verification',
        timestamp: 'Today at 10:00 AM',
        variant: 'info' as const,
      },
    ],
  },
};

export const RationCardApplication: Story = {
  args: {
    items: [
      {
        key: '1',
        title: 'Form Submitted',
        content: 'Ration card application form submitted online',
        timestamp: 'February 1, 2024',
        variant: 'success' as const,
      },
      {
        key: '2',
        title: 'Documents Uploaded',
        content: 'All required documents uploaded',
        timestamp: 'February 1, 2024',
        variant: 'success' as const,
      },
      {
        key: '3',
        title: 'Field Verification',
        content: 'Officer visited for address verification',
        timestamp: 'February 10, 2024',
        variant: 'success' as const,
      },
      {
        key: '4',
        title: 'Approved',
        content: 'Ration card approved by Food & Civil Supplies Dept',
        timestamp: 'February 20, 2024',
        variant: 'success' as const,
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { key: '1', title: 'Started', icon: '🚀', timestamp: 'Day 1' },
      { key: '2', title: 'In Progress', icon: '⏳', timestamp: 'Day 2' },
      { key: '3', title: 'Completed', icon: '✓', timestamp: 'Day 3' },
    ],
  },
};

export const Reverse: Story = {
  args: {
    items: [
      { key: '1', title: 'Event 1', timestamp: '2024-03-15' },
      { key: '2', title: 'Event 2', timestamp: '2024-03-16' },
      { key: '3', title: 'Event 3', timestamp: '2024-03-17' },
    ],
    reverse: true,
  },
};
