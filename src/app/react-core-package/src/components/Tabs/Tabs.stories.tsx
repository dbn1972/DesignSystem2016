import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './Tabs';

/**
 * The Tabs component organizes content into separate views where only one view
 * is visible at a time. It includes keyboard navigation support for accessibility.
 *
 * ## When to use
 * - Organizing related content into logical sections
 * - Reducing vertical scrolling on long pages
 * - Allowing users to switch between different views
 * - Multi-step forms or wizards
 *
 * ## When NOT to use
 * - For site navigation - use navigation menus
 * - For filtering data - use filter controls
 * - When users need to see multiple sections simultaneously
 */
const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline'],
      description: 'Visual style variant',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Tab orientation',
    },
    centered: {
      control: 'boolean',
      description: 'Center align tabs',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make tabs span full width',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/**
 * Basic tabs with default styling
 */
export const Basic: Story = {
  args: {
    items: [
      {
        value: 'personal',
        label: 'Personal Details',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Personal Information</h3>
            <p>Enter your personal details including name, date of birth, and address.</p>
          </div>
        ),
      },
      {
        value: 'documents',
        label: 'Documents',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Upload Documents</h3>
            <p>Upload required documents like Aadhaar, PAN card, and photographs.</p>
          </div>
        ),
      },
      {
        value: 'review',
        label: 'Review',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Review & Submit</h3>
            <p>Review all information before final submission.</p>
          </div>
        ),
      },
    ],
    defaultValue: 'personal',
  },
};

/**
 * Pills variant with rounded tab buttons
 */
export const Pills: Story = {
  args: {
    variant: 'pills',
    items: [
      {
        value: 'overview',
        label: 'Overview',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Application Overview</h3>
            <p>Total applications: 1,234</p>
            <p>Pending: 456</p>
            <p>Approved: 778</p>
          </div>
        ),
      },
      {
        value: 'pending',
        label: 'Pending',
        badge: <span className="ux4g-badge ux4g-badge-warning">456</span>,
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Pending Applications</h3>
            <p>Applications awaiting review and approval.</p>
          </div>
        ),
      },
      {
        value: 'approved',
        label: 'Approved',
        badge: <span className="ux4g-badge ux4g-badge-success">778</span>,
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Approved Applications</h3>
            <p>Successfully processed and approved applications.</p>
          </div>
        ),
      },
    ],
  },
};

/**
 * Underline variant with subtle bottom border
 */
export const Underline: Story = {
  args: {
    variant: 'underline',
    items: [
      {
        value: 'aadhaar',
        label: 'Aadhaar',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Aadhaar Services</h3>
            <p>Update Aadhaar details, download e-Aadhaar, and verify authenticity.</p>
          </div>
        ),
      },
      {
        value: 'pan',
        label: 'PAN Card',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">PAN Card Services</h3>
            <p>Apply for new PAN, make corrections, or track application status.</p>
          </div>
        ),
      },
      {
        value: 'passport',
        label: 'Passport',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Passport Services</h3>
            <p>New passport application, renewal, and appointment booking.</p>
          </div>
        ),
      },
    ],
  },
};

/**
 * Vertical tabs layout
 */
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    items: [
      {
        value: 'profile',
        label: 'Profile Settings',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Profile Settings</h3>
            <p>Manage your profile information and preferences.</p>
          </div>
        ),
      },
      {
        value: 'security',
        label: 'Security',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Security Settings</h3>
            <p>Update password, enable two-factor authentication.</p>
          </div>
        ),
      },
      {
        value: 'notifications',
        label: 'Notifications',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Notification Preferences</h3>
            <p>Configure email and SMS notification settings.</p>
          </div>
        ),
      },
      {
        value: 'privacy',
        label: 'Privacy',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Privacy Settings</h3>
            <p>Manage data sharing and privacy preferences.</p>
          </div>
        ),
      },
    ],
  },
};

/**
 * Centered tabs
 */
export const Centered: Story = {
  args: {
    centered: true,
    items: [
      {
        value: 'about',
        label: 'About',
        content: <div className="ux4g-p-4">About this service</div>,
      },
      {
        value: 'features',
        label: 'Features',
        content: <div className="ux4g-p-4">Key features and benefits</div>,
      },
      {
        value: 'faq',
        label: 'FAQ',
        content: <div className="ux4g-p-4">Frequently asked questions</div>,
      },
    ],
  },
};

/**
 * Full width tabs
 */
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    items: [
      {
        value: 'step1',
        label: 'Step 1',
        content: <div className="ux4g-p-4">Complete step 1</div>,
      },
      {
        value: 'step2',
        label: 'Step 2',
        content: <div className="ux4g-p-4">Complete step 2</div>,
      },
      {
        value: 'step3',
        label: 'Step 3',
        content: <div className="ux4g-p-4">Complete step 3</div>,
      },
    ],
  },
};

/**
 * Tabs with icons
 */
export const WithIcons: Story = {
  args: {
    variant: 'pills',
    items: [
      {
        value: 'dashboard',
        label: 'Dashboard',
        icon: '📊',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Dashboard</h3>
            <p>View your application statistics and recent activity.</p>
          </div>
        ),
      },
      {
        value: 'applications',
        label: 'Applications',
        icon: '📝',
        badge: <span className="ux4g-badge ux4g-badge-info">12</span>,
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">My Applications</h3>
            <p>Track and manage your government service applications.</p>
          </div>
        ),
      },
      {
        value: 'documents',
        label: 'Documents',
        icon: '📄',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">My Documents</h3>
            <p>Access and download your DigiLocker documents.</p>
          </div>
        ),
      },
      {
        value: 'settings',
        label: 'Settings',
        icon: '⚙️',
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Settings</h3>
            <p>Configure your account preferences and privacy settings.</p>
          </div>
        ),
      },
    ],
  },
};

/**
 * DigiLocker document categories
 */
export const DigiLockerCategories: Story = {
  args: {
    variant: 'underline',
    items: [
      {
        value: 'identity',
        label: 'Identity Proofs',
        badge: <span className="ux4g-badge ux4g-badge-ghost">3</span>,
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Identity Proof Documents</h3>
            <ul className="ux4g-list">
              <li>Aadhaar Card</li>
              <li>PAN Card</li>
              <li>Voter ID Card</li>
            </ul>
          </div>
        ),
      },
      {
        value: 'educational',
        label: 'Educational',
        badge: <span className="ux4g-badge ux4g-badge-ghost">5</span>,
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Educational Documents</h3>
            <ul className="ux4g-list">
              <li>10th Certificate</li>
              <li>12th Certificate</li>
              <li>Graduation Certificate</li>
              <li>Post Graduation Certificate</li>
              <li>Professional Degrees</li>
            </ul>
          </div>
        ),
      },
      {
        value: 'address',
        label: 'Address Proofs',
        badge: <span className="ux4g-badge ux4g-badge-ghost">2</span>,
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Address Proof Documents</h3>
            <ul className="ux4g-list">
              <li>Electricity Bill</li>
              <li>Gas Connection Bill</li>
            </ul>
          </div>
        ),
      },
      {
        value: 'others',
        label: 'Other Documents',
        badge: <span className="ux4g-badge ux4g-badge-ghost">4</span>,
        content: (
          <div className="ux4g-p-4">
            <h3 className="ux4g-mb-2">Other Documents</h3>
            <ul className="ux4g-list">
              <li>Driving License</li>
              <li>Vehicle Registration</li>
              <li>Insurance Documents</li>
              <li>Tax Returns</li>
            </ul>
          </div>
        ),
      },
    ],
  },
};

/**
 * Tabs with disabled state
 */
export const WithDisabledTab: Story = {
  args: {
    items: [
      {
        value: 'completed',
        label: 'Completed',
        content: <div className="ux4g-p-4">This section is complete</div>,
      },
      {
        value: 'in-progress',
        label: 'In Progress',
        content: <div className="ux4g-p-4">Currently working on this section</div>,
      },
      {
        value: 'locked',
        label: 'Locked',
        disabled: true,
        content: <div className="ux4g-p-4">Complete previous steps to unlock</div>,
      },
    ],
    defaultValue: 'completed',
  },
};

/**
 * Controlled tabs with external state
 */
export const Controlled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('form');

    return (
      <div>
        <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '14px' }}>
            <strong>Active Tab:</strong> {activeTab}
          </p>
          <div style={{ marginTop: '0.5rem' }}>
            <button
              className="ux4g-button ux4g-button-sm ux4g-button-outline"
              onClick={() => setActiveTab('form')}
              style={{ marginRight: '0.5rem' }}
            >
              Go to Form
            </button>
            <button
              className="ux4g-button ux4g-button-sm ux4g-button-outline"
              onClick={() => setActiveTab('preview')}
            >
              Go to Preview
            </button>
          </div>
        </div>
        <Tabs
          value={activeTab}
          onChange={setActiveTab}
          items={[
            {
              value: 'form',
              label: 'Application Form',
              content: (
                <div className="ux4g-p-4">
                  <h3 className="ux4g-mb-2">Fill Application Form</h3>
                  <p>Enter required information in the application form.</p>
                </div>
              ),
            },
            {
              value: 'preview',
              label: 'Preview',
              content: (
                <div className="ux4g-p-4">
                  <h3 className="ux4g-mb-2">Preview Application</h3>
                  <p>Review your application before submission.</p>
                </div>
              ),
            },
            {
              value: 'submit',
              label: 'Submit',
              content: (
                <div className="ux4g-p-4">
                  <h3 className="ux4g-mb-2">Submit Application</h3>
                  <p>Final submission of your application.</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    );
  },
};

/**
 * Lazy loading tabs (content only renders when tab is active)
 */
export const LazyLoading: Story = {
  args: {
    lazy: true,
    items: [
      {
        value: 'tab1',
        label: 'Tab 1',
        content: (
          <div className="ux4g-p-4">
            <p>Content 1 - Rendered only when active (lazy mode)</p>
          </div>
        ),
      },
      {
        value: 'tab2',
        label: 'Tab 2',
        content: (
          <div className="ux4g-p-4">
            <p>Content 2 - Rendered only when active (lazy mode)</p>
          </div>
        ),
      },
      {
        value: 'tab3',
        label: 'Tab 3',
        content: (
          <div className="ux4g-p-4">
            <p>Content 3 - Rendered only when active (lazy mode)</p>
          </div>
        ),
      },
    ],
  },
};
