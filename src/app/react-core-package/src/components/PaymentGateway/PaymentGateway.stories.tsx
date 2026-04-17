import type { Meta, StoryObj } from '@storybook/react';
import { PaymentGateway } from './PaymentGateway';

const meta: Meta<typeof PaymentGateway> = {
  title: 'Components/PaymentGateway',
  component: PaymentGateway,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PaymentGateway>;

export const Default: Story = { args: { amount: 500, merchantName: 'Government Services', upiId: 'gov@upi' } };
export const LargeAmount: Story = { args: { amount: 25000, merchantName: 'Tax Department', upiId: 'tax@gov.upi' } };
export const CustomCurrency: Story = { args: { amount: 100, merchantName: 'Embassy Services', upiId: 'embassy@upi', currency: 'USD' } };
