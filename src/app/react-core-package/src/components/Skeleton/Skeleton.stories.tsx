import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'circular', 'rectangular', 'rounded'] },
    animate: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  args: { variant: 'text', width: '60%' },
};

export const MultiLine: Story = {
  args: { variant: 'text', lines: 3 },
};

export const Circular: Story = {
  args: { variant: 'circular', width: 48, height: 48 },
};

export const Rectangular: Story = {
  args: { variant: 'rectangular', height: 200 },
};

export const Rounded: Story = {
  args: { variant: 'rounded', height: 120, width: '100%' },
};

export const NoAnimation: Story = {
  args: { variant: 'rectangular', height: 100, animate: false },
};

export const CardSkeleton: Story = {
  render: () => (
    <div style={{ width: 300, padding: 16, border: '1px solid #e5e7eb', borderRadius: 12 }}>
      <Skeleton variant="rectangular" height={160} />
      <div style={{ marginTop: 12 }}>
        <Skeleton variant="text" width="80%" />
      </div>
      <div style={{ marginTop: 8 }}>
        <Skeleton variant="text" lines={2} />
      </div>
      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
        <Skeleton variant="circular" width={32} height={32} />
        <Skeleton variant="text" width={100} />
      </div>
    </div>
  ),
};
