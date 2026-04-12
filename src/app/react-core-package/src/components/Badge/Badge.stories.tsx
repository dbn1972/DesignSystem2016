import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Badge' },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge dot variant="success">Active</Badge>
      <Badge dot variant="error">Offline</Badge>
      <Badge dot variant="warning">Pending</Badge>
    </div>
  ),
};

export const ApplicationStatus: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between p-4 border rounded">
        <span>Aadhaar Verification</span>
        <Badge variant="success">Verified</Badge>
      </div>
      <div className="flex items-center justify-between p-4 border rounded">
        <span>PAN Card Application</span>
        <Badge variant="warning">Pending</Badge>
      </div>
      <div className="flex items-center justify-between p-4 border rounded">
        <span>Passport Renewal</span>
        <Badge variant="info">In Review</Badge>
      </div>
      <div className="flex items-center justify-between p-4 border rounded">
        <span>Driving License</span>
        <Badge variant="error">Rejected</Badge>
      </div>
    </div>
  ),
};

export const NotificationBadge: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="relative">
        <button className="p-2 border rounded">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <Badge size="sm" variant="error" className="absolute -top-1 -right-1">3</Badge>
      </div>
      <div className="relative">
        <button className="p-2 border rounded">Messages</button>
        <Badge size="sm" variant="info" className="absolute -top-2 -right-2">12</Badge>
      </div>
    </div>
  ),
};
