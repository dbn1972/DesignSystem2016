import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Actions</button>,
    items: [
      { key: 'edit', label: 'Edit', onClick: () => console.log('Edit') },
      { key: 'duplicate', label: 'Duplicate', onClick: () => console.log('Duplicate') },
      { key: 'delete', label: 'Delete', onClick: () => console.log('Delete') },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    trigger: <button className="ux4g-button ux4g-button-primary">Menu</button>,
    items: [
      { key: 'view', label: 'View', icon: '👁️', onClick: () => console.log('View') },
      { key: 'edit', label: 'Edit', icon: '✏️', onClick: () => console.log('Edit') },
      { key: 'share', label: 'Share', icon: '🔗', onClick: () => console.log('Share') },
      { key: 'download', label: 'Download', icon: '⬇️', onClick: () => console.log('Download') },
    ],
  },
};

export const ApplicationActions: Story = {
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Application Actions</button>,
    items: [
      {
        key: 'view',
        label: 'View Details',
        icon: '👁️',
        onClick: () => console.log('View'),
      },
      {
        key: 'edit',
        label: 'Edit Application',
        icon: '✏️',
        onClick: () => console.log('Edit'),
      },
      {
        key: 'download',
        label: 'Download PDF',
        icon: '📄',
        onClick: () => console.log('Download'),
        divider: true,
      },
      {
        key: 'cancel',
        label: 'Cancel Application',
        icon: '✕',
        danger: true,
        onClick: () => console.log('Cancel'),
      },
    ],
  },
};

export const DocumentActions: Story = {
  args: {
    trigger: <button className="ux4g-button ux4g-button-ghost">⋮</button>,
    items: [
      {
        key: 'view',
        label: 'View Document',
        onClick: () => console.log('View'),
      },
      {
        key: 'share',
        label: 'Share',
        onClick: () => console.log('Share'),
      },
      {
        key: 'download',
        label: 'Download',
        onClick: () => console.log('Download'),
        divider: true,
      },
      {
        key: 'delete',
        label: 'Delete',
        danger: true,
        onClick: () => console.log('Delete'),
      },
    ],
  },
};

export const UserMenu: Story = {
  args: {
    trigger: (
      <button className="ux4g-button ux4g-button-ghost">
        👤 Profile
      </button>
    ),
    items: [
      {
        key: 'profile',
        label: 'My Profile',
        icon: '👤',
        onClick: () => console.log('Profile'),
      },
      {
        key: 'applications',
        label: 'My Applications',
        icon: '📝',
        onClick: () => console.log('Applications'),
      },
      {
        key: 'documents',
        label: 'My Documents',
        icon: '📄',
        onClick: () => console.log('Documents'),
      },
      {
        key: 'settings',
        label: 'Settings',
        icon: '⚙️',
        onClick: () => console.log('Settings'),
        divider: true,
      },
      {
        key: 'logout',
        label: 'Logout',
        icon: '🚪',
        danger: true,
        onClick: () => console.log('Logout'),
      },
    ],
  },
};

export const DigiLockerMenu: Story = {
  args: {
    trigger: <button className="ux4g-button ux4g-button-primary">Document Options</button>,
    items: [
      {
        key: 'upload',
        label: 'Upload New Document',
        icon: '⬆️',
        onClick: () => console.log('Upload'),
      },
      {
        key: 'fetch',
        label: 'Fetch from Issuer',
        icon: '🔄',
        onClick: () => console.log('Fetch'),
      },
      {
        key: 'share',
        label: 'Share Document',
        icon: '🔗',
        onClick: () => console.log('Share'),
      },
      {
        key: 'verify',
        label: 'Verify Authenticity',
        icon: '✓',
        onClick: () => console.log('Verify'),
      },
    ],
  },
};

export const PANCardMenu: Story = {
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">PAN Services</button>,
    items: [
      {
        key: 'new',
        label: 'Apply for New PAN',
        onClick: () => console.log('New PAN'),
      },
      {
        key: 'correction',
        label: 'Request Correction',
        onClick: () => console.log('Correction'),
      },
      {
        key: 'reprint',
        label: 'Request Reprint',
        onClick: () => console.log('Reprint'),
      },
      {
        key: 'status',
        label: 'Track Application Status',
        onClick: () => console.log('Status'),
      },
    ],
  },
};

export const AadhaarMenu: Story = {
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Aadhaar Services</button>,
    items: [
      {
        key: 'download',
        label: 'Download e-Aadhaar',
        icon: '⬇️',
        onClick: () => console.log('Download'),
      },
      {
        key: 'update',
        label: 'Update Details',
        icon: '✏️',
        onClick: () => console.log('Update'),
      },
      {
        key: 'verify',
        label: 'Verify Aadhaar',
        icon: '✓',
        onClick: () => console.log('Verify'),
      },
      {
        key: 'lock',
        label: 'Lock/Unlock Biometrics',
        icon: '🔒',
        onClick: () => console.log('Lock'),
      },
    ],
  },
};

export const WithDisabled: Story = {
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Options</button>,
    items: [
      { key: 'option1', label: 'Enabled Option', onClick: () => console.log('Option 1') },
      { key: 'option2', label: 'Disabled Option', disabled: true, onClick: () => console.log('Option 2') },
      { key: 'option3', label: 'Another Enabled', onClick: () => console.log('Option 3') },
    ],
  },
};

export const WithDividers: Story = {
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Actions</button>,
    items: [
      { key: 'action1', label: 'Action 1', onClick: () => console.log('Action 1'), divider: true },
      { key: 'action2', label: 'Action 2', onClick: () => console.log('Action 2'), divider: true },
      { key: 'danger', label: 'Danger Action', danger: true, onClick: () => console.log('Danger') },
    ],
  },
};

export const PlacementBottomEnd: Story = {
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Menu</button>,
    placement: 'bottom-end',
    items: [
      { key: 'option1', label: 'Option 1', onClick: () => console.log('Option 1') },
      { key: 'option2', label: 'Option 2', onClick: () => console.log('Option 2') },
      { key: 'option3', label: 'Option 3', onClick: () => console.log('Option 3') },
    ],
  },
};

export const Disabled: Story = {
  args: {
    trigger: <button className="ux4g-button ux4g-button-outline">Disabled Menu</button>,
    disabled: true,
    items: [
      { key: 'option1', label: 'Option 1', onClick: () => console.log('Option 1') },
      { key: 'option2', label: 'Option 2', onClick: () => console.log('Option 2') },
    ],
  },
};
