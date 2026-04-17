import type { Meta, StoryObj } from '@storybook/react';
import { AddressAutocompleteIndia } from './AddressAutocompleteIndia';

const meta: Meta<typeof AddressAutocompleteIndia> = {
  title: 'Components/AddressAutocompleteIndia',
  component: AddressAutocompleteIndia,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof AddressAutocompleteIndia>;

export const Default: Story = { args: { label: 'Address' } };
export const WithValue: Story = {
  args: {
    label: 'Address',
    value: { pincode: '110001', state: 'Delhi', district: 'Central Delhi', city: 'New Delhi', address: '123 Main Street' },
  },
};
export const WithError: Story = { args: { label: 'Address', errorText: 'Please enter a valid address', error: true } };
