import type { Meta, StoryObj } from '@storybook/react';
import { ShowHide } from './ShowHide';
const meta: Meta<typeof ShowHide> = { title: 'Components/ShowHide', component: ShowHide, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof ShowHide>;
export const Default: Story = { args: { label: 'additional details', children: 'This is the hidden content that appears when expanded.' } };
export const DefaultOpen: Story = { args: { label: 'instructions', defaultOpen: true, children: 'These instructions are visible by default.' } };
