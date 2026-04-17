import type { Meta, StoryObj } from '@storybook/react';
import { Captcha } from './Captcha';
const meta: Meta<typeof Captcha> = { title: 'Components/Captcha', component: Captcha, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Captcha>;
export const Default: Story = { args: { onVerify: (v) => alert(v ? 'Verified!' : 'Wrong code') } };
export const WithError: Story = { args: { onVerify: () => {}, errorText: 'Incorrect code. Please try again.' } };
