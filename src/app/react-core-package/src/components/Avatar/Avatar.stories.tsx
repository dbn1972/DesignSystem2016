import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { name: 'Rajesh Kumar' },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'User avatar',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" name="RK" />
      <Avatar size="md" name="RK" />
      <Avatar size="lg" name="RK" />
      <Avatar size="xl" name="RK" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar shape="circle" name="Rajesh Kumar" />
      <Avatar shape="square" name="Rajesh Kumar" />
    </div>
  ),
};

export const Initials: Story = {
  render: () => (
    <div className="flex gap-2">
      <Avatar name="Rajesh Kumar" />
      <Avatar name="Priya Sharma" />
      <Avatar name="Amit Patel" />
      <Avatar name="S" />
    </div>
  ),
};

export const GovernmentOfficer: Story = {
  render: () => (
    <div className="flex items-center gap-3 p-4 border rounded">
      <Avatar size="lg" name="Officer Name" />
      <div>
        <h4 className="font-medium">Rajesh Kumar</h4>
        <p className="text-sm text-gray-600">Deputy Commissioner</p>
        <p className="text-xs text-gray-500">Employee ID: EMP-2026-1234</p>
      </div>
    </div>
  ),
};
