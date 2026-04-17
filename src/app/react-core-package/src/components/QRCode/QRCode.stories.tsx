import type { Meta, StoryObj } from '@storybook/react';
import { QRCode } from './QRCode';
const meta: Meta<typeof QRCode> = { title: 'Components/QRCode', component: QRCode, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof QRCode>;
export const Default: Story = { args: { value: 'https://designsystem.dl6.in' } };
export const UPI: Story = { args: { value: 'upi://pay?pa=gov@sbi&pn=Government&am=500', label: 'Scan to pay ₹500', size: 200 } };
