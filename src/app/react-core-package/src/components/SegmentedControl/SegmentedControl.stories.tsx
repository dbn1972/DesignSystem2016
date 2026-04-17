import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from './SegmentedControl';
const meta: Meta<typeof SegmentedControl> = { title: 'Components/SegmentedControl', component: SegmentedControl, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof SegmentedControl>;
export const Default: Story = { args: { options: [{ value: 'all', label: 'All' }, { value: 'active', label: 'Active' }, { value: 'closed', label: 'Closed' }], value: 'all' } };
export const Small: Story = { args: { options: [{ value: 'a', label: 'Day' }, { value: 'b', label: 'Week' }, { value: 'c', label: 'Month' }], value: 'a', size: 'sm' } };
