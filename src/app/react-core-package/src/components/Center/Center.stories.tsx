import type { Meta, StoryObj } from '@storybook/react';
import { Center } from './Center';
const meta: Meta<typeof Center> = { title: 'Components/Center', component: Center, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Center>;
export const Default: Story = { args: { children: 'Centered content', minHeight: 200, style: { border: '1px dashed #ccc' } } };
export const Inline: Story = { args: { children: '🎯', inline: true, style: { width: 48, height: 48, border: '1px solid #ccc', borderRadius: '50%' } } };
