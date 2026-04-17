import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { label: 'Enable notifications' },
};

export const Checked: Story = {
  args: { label: 'Dark mode', defaultChecked: true },
};

export const Small: Story = {
  args: { label: 'Compact toggle', size: 'sm' },
};

export const Large: Story = {
  args: { label: 'Large toggle', size: 'lg' },
};

export const Disabled: Story = {
  args: { label: 'Disabled switch', disabled: true },
};

export const DisabledChecked: Story = {
  args: { label: 'Disabled on', disabled: true, defaultChecked: true },
};

export const WithError: Story = {
  args: { label: 'Accept terms', error: true, required: true },
};

export const WithoutLabel: Story = {
  args: { 'aria-label': 'Toggle feature' },
};
