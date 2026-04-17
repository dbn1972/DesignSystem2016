import type { Meta, StoryObj } from '@storybook/react';
import { DigitalSignature } from './DigitalSignature';

const meta: Meta<typeof DigitalSignature> = {
  title: 'Components/DigitalSignature',
  component: DigitalSignature,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DigitalSignature>;

export const Default: Story = { args: {} };
export const CustomSize: Story = { args: { width: 600, height: 300 } };
export const CustomLabel: Story = { args: { label: 'Please sign below' } };
export const Disabled: Story = { args: { disabled: true } };
