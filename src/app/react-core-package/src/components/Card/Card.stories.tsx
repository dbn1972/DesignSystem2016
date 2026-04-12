import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
      description: 'Card visual style',
      table: {
        defaultValue: { summary: 'elevated' },
      },
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is interactive',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-medium mb-2">Card Title</h3>
        <p className="text-gray-600">This is a basic card with default styling.</p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 className="text-lg font-medium mb-2">Elevated Card</h3>
        <p className="text-gray-600">Card with shadow elevation.</p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <h3 className="text-lg font-medium mb-2">Outlined Card</h3>
        <p className="text-gray-600">Card with border outline.</p>
      </div>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: (
      <div>
        <h3 className="text-lg font-medium mb-2">Filled Card</h3>
        <p className="text-gray-600">Card with background fill.</p>
      </div>
    ),
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <div>
        <h3 className="text-lg font-medium mb-2">Clickable Card</h3>
        <p className="text-gray-600">Click this card to trigger an action.</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div>
        <img src="https://via.placeholder.com/400x200" alt="Placeholder" className="w-full" />
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Card with Image</h3>
          <p className="text-gray-600">No padding on card container, padding on content.</p>
        </div>
      </div>
    ),
  },
};

export const ServiceCard: Story = {
  name: 'Government Service Card',
  render: () => (
    <Card variant="outlined" className="max-w-sm">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-1">Birth Certificate</h3>
          <p className="text-sm text-gray-600 mb-3">Apply for birth certificate online</p>
          <button className="text-sm text-blue-600 font-medium">Apply Now →</button>
        </div>
      </div>
    </Card>
  ),
};

export const ApplicationStatusCard: Story = {
  name: 'Application Status Card',
  render: () => (
    <Card className="max-w-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium">Certificate of Residence</h3>
          <p className="text-sm text-gray-500">Application ID: CR-2026-001234</p>
        </div>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
          Pending
        </span>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Submitted:</span>
          <span className="font-medium">April 10, 2026</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Expected By:</span>
          <span className="font-medium">April 25, 2026</span>
        </div>
      </div>
    </Card>
  ),
};

export const DocumentCard: Story = {
  name: 'Document Card (DigiLocker)',
  render: () => (
    <Card variant="outlined" clickable className="max-w-xs">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
          <span className="text-red-600 font-bold text-xs">PDF</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm truncate">Aadhaar_Card.pdf</h4>
          <p className="text-xs text-gray-500">245 KB • Uploaded Apr 10, 2026</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </Card>
  ),
};

export const StatisticsCard: Story = {
  name: 'Statistics Card',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-600">1,234</p>
          <p className="text-sm text-gray-600 mt-1">Applications Submitted</p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <p className="text-3xl font-bold text-green-600">856</p>
          <p className="text-sm text-gray-600 mt-1">Approved</p>
        </div>
      </Card>
      <Card>
        <div className="text-center">
          <p className="text-3xl font-bold text-yellow-600">378</p>
          <p className="text-sm text-gray-600 mt-1">Pending Review</p>
        </div>
      </Card>
    </div>
  ),
};

export const NotificationCard: Story = {
  name: 'Notification Card',
  render: () => (
    <Card variant="filled" className="max-w-md border-l-4 border-blue-600">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm mb-1">Application Update</h4>
          <p className="text-sm text-gray-600">
            Your PAN card application has been approved and will be delivered within 7 days.
          </p>
          <p className="text-xs text-gray-500 mt-2">2 hours ago</p>
        </div>
      </div>
    </Card>
  ),
};
