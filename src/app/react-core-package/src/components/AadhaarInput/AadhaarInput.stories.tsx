import type { Meta, StoryObj } from '@storybook/react';
import { AadhaarInput } from './AadhaarInput';

const meta: Meta<typeof AadhaarInput> = {
  title: 'Components/AadhaarInput',
  component: AadhaarInput,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof AadhaarInput>;

export const Default: Story = { args: { id: 'aadhaar', label: 'Aadhaar Number' } };
export const WithValue: Story = { args: { id: 'aadhaar', value: '234567890123' } };
export const WithHint: Story = { args: { id: 'aadhaar', hint: 'Enter your 12-digit Aadhaar number' } };
export const WithError: Story = { args: { id: 'aadhaar', value: '1234', errorText: 'Please enter a valid 12-digit Aadhaar number', error: true } };
export const Required: Story = { args: { id: 'aadhaar', required: true } };
export const Disabled: Story = { args: { id: 'aadhaar', value: '234567890123', disabled: true } };
