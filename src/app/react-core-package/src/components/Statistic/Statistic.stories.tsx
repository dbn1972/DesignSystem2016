import type { Meta, StoryObj } from '@storybook/react';
import { Statistic } from './Statistic';
const meta: Meta<typeof Statistic> = { title: 'Components/Statistic', component: Statistic, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Statistic>;
export const Default: Story = { args: { label: 'Total Applications', value: '12,456' } };
export const WithTrend: Story = { args: { label: 'Active Users', value: '8,234', trend: { value: 12, label: 'vs last month' } } };
export const WithPrefix: Story = { args: { label: 'Revenue', value: '4,50,000', prefix: '₹' } };
