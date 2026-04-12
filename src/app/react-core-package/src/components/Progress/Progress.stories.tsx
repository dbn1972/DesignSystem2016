import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Basic: Story = {
  args: {
    value: 60,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
};

export const Info: Story = {
  args: {
    value: 50,
    variant: 'info',
    showLabel: true,
  },
};

export const Success: Story = {
  args: {
    value: 100,
    variant: 'success',
    showLabel: true,
  },
};

export const Warning: Story = {
  args: {
    value: 60,
    variant: 'warning',
    showLabel: true,
  },
};

export const Error: Story = {
  args: {
    value: 25,
    variant: 'error',
    showLabel: true,
  },
};

export const Small: Story = {
  args: {
    value: 40,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    value: 80,
    size: 'lg',
    showLabel: true,
  },
};

export const AadhaarVerification: Story = {
  args: {
    value: 100,
    variant: 'success',
    showLabel: true,
    labelFormatter: (val) => val === 100 ? 'Verified' : `${val}%`,
  },
};

export const DocumentUpload: Story = {
  args: {
    value: 66,
    variant: 'info',
    showLabel: true,
    labelFormatter: (val) => `${Math.round((val / 100) * 3)} of 3 documents uploaded`,
  },
};

export const ApplicationProgress: Story = {
  args: {
    value: 40,
    variant: 'info',
    showLabel: true,
    labelFormatter: (val) => `Step ${Math.ceil((val / 100) * 5)} of 5`,
  },
};

export const FormCompletion: Story = {
  args: {
    value: 80,
    variant: 'success',
    showLabel: true,
    labelFormatter: (val) => `${val}% Complete`,
  },
};

export const Indeterminate: Story = {
  args: {
    value: 0,
    indeterminate: true,
    variant: 'info',
  },
};

export const ProcessingApplication: Story = {
  args: {
    value: 0,
    indeterminate: true,
    variant: 'info',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Progress value={50} variant="info" showLabel />
      <Progress value={75} variant="success" showLabel />
      <Progress value={60} variant="warning" showLabel />
      <Progress value={30} variant="error" showLabel />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Progress value={60} size="sm" showLabel />
      <Progress value={60} size="md" showLabel />
      <Progress value={60} size="lg" showLabel />
    </div>
  ),
};
