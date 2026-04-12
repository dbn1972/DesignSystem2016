import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Loading...',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Loading data...',
  },
};

export const Centered: Story = {
  args: {
    centered: true,
    label: 'Loading...',
  },
};

export const VerifyingAadhaar: Story = {
  args: {
    label: 'Verifying Aadhaar...',
    variant: 'info',
  },
};

export const ProcessingApplication: Story = {
  args: {
    label: 'Processing your application...',
    size: 'lg',
    centered: true,
  },
};

export const UploadingDocument: Story = {
  args: {
    label: 'Uploading document to DigiLocker...',
    variant: 'info',
  },
};

export const FetchingRecords: Story = {
  args: {
    label: 'Fetching citizen records...',
  },
};

export const GeneratingPAN: Story = {
  args: {
    label: 'Generating PAN card...',
    size: 'lg',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Spinner size="sm" label="Small" />
      <Spinner size="md" label="Medium" />
      <Spinner size="lg" label="Large" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Spinner variant="primary" label="Primary" />
      <Spinner variant="info" label="Info" />
      <Spinner variant="success" label="Success" />
      <Spinner variant="warning" label="Warning" />
      <Spinner variant="error" label="Error" />
    </div>
  ),
};
