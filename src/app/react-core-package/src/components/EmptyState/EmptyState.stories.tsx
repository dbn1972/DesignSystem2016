import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No results found',
    description: 'Try adjusting your search or filters to find what you are looking for.',
    icon: <span style={{ fontSize: 48 }}>🔍</span>,
  },
};

export const WithAction: Story = {
  args: {
    title: 'No applications yet',
    description: 'Start a new application to get started.',
    icon: <span style={{ fontSize: 48 }}>📋</span>,
    action: <button style={{ padding: '8px 16px', background: '#005196', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}>New Application</button>,
  },
};

export const WithBothActions: Story = {
  args: {
    title: 'Something went wrong',
    description: 'We could not load your data. Please try again.',
    icon: <span style={{ fontSize: 48 }}>⚠️</span>,
    action: <button style={{ padding: '8px 16px', background: '#005196', color: 'white', border: 'none', borderRadius: 8 }}>Retry</button>,
    secondaryAction: <button style={{ padding: '8px 16px', background: 'transparent', border: '1px solid #d1d5db', borderRadius: 8 }}>Go back</button>,
  },
};

export const Small: Story = {
  args: { title: 'No items', size: 'sm' },
};

export const Large: Story = {
  args: {
    title: 'Your inbox is empty',
    description: 'You have no notifications at this time.',
    size: 'lg',
    icon: <span style={{ fontSize: 64 }}>📭</span>,
  },
};
