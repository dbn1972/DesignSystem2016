import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const states = [
  { value: 'DL', label: 'Delhi' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'UP', label: 'Uttar Pradesh' },
];

const meta: Meta<typeof Dropdown> = { title: 'Components/Dropdown', component: Dropdown, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = { args: { id: 'state', label: 'State', options: states } };
export const WithValue: Story = { args: { id: 'state', label: 'State', options: states, value: 'MH' } };
export const WithError: Story = { args: { id: 'state', label: 'State', options: states, errorText: 'Please select a state', error: true } };
export const Required: Story = { args: { id: 'state', label: 'State', options: states, required: true } };
export const Disabled: Story = { args: { id: 'state', label: 'State', options: states, disabled: true } };
export const Small: Story = { args: { id: 'state', label: 'State', options: states, size: 'sm' } };
