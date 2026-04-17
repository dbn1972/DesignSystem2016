import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
const meta: Meta<typeof Divider> = { title: 'Components/Divider', component: Divider, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Divider>;
export const Default: Story = {};
export const WithLabel: Story = { args: { label: 'OR' } };
export const Vertical: Story = { args: { orientation: 'vertical' }, decorators: [(S) => <div style={{ height: 100, display: 'flex' }}><S /></div>] };
export const LargeSpacing: Story = { args: { spacing: 'lg' } };
