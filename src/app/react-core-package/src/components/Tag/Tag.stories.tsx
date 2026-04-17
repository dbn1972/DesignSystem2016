import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['neutral', 'info', 'success', 'warning', 'error'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: { label: 'Category' } };
export const Success: Story = { args: { label: 'Active', variant: 'success' } };
export const Error: Story = { args: { label: 'Rejected', variant: 'error' } };
export const Warning: Story = { args: { label: 'Pending', variant: 'warning' } };
export const Info: Story = { args: { label: 'New', variant: 'info' } };
export const Removable: Story = { args: { label: 'React', removable: true } };
export const Small: Story = { args: { label: 'Tiny', size: 'sm' } };
export const Large: Story = { args: { label: 'Large tag', size: 'lg' } };
export const Disabled: Story = { args: { label: 'Disabled', disabled: true, removable: true } };
