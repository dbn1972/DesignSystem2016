import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './Spacer';
const meta: Meta<typeof Spacer> = { title: 'Components/Spacer', component: Spacer, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Spacer>;
export const Vertical: Story = { args: { size: 32 }, decorators: [(S) => <div style={{ background: '#f0f0f0' }}><div style={{ background: '#ddd', padding: 8 }}>Above</div><S /><div style={{ background: '#ddd', padding: 8 }}>Below</div></div>] };
export const Horizontal: Story = { args: { size: 32, axis: 'horizontal' }, decorators: [(S) => <div style={{ display: 'flex', background: '#f0f0f0' }}><div style={{ background: '#ddd', padding: 8 }}>Left</div><S /><div style={{ background: '#ddd', padding: 8 }}>Right</div></div>] };
