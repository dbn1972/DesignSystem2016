import type { Meta, StoryObj } from '@storybook/react';
import { PANCardInput } from './PANCardInput';

const meta: Meta<typeof PANCardInput> = { title: 'Components/PANCardInput', component: PANCardInput, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof PANCardInput>;

export const Default: Story = { args: { id: 'pan' } };
export const WithValue: Story = { args: { id: 'pan', value: 'ABCDE1234F' } };
export const WithError: Story = { args: { id: 'pan', value: 'ABC', errorText: 'Enter valid PAN (ABCDE1234F)', error: true } };
export const Required: Story = { args: { id: 'pan', required: true } };
export const Disabled: Story = { args: { id: 'pan', value: 'ABCDE1234F', disabled: true } };
