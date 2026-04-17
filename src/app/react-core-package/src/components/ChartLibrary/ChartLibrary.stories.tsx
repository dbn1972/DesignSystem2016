import type { Meta, StoryObj } from '@storybook/react';
import { ChartLibrary } from './ChartLibrary';

const meta: Meta<typeof ChartLibrary> = {
  title: 'Components/ChartLibrary',
  component: ChartLibrary,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ChartLibrary>;

const sampleData = [
  { label: 'Jan', value: 30 },
  { label: 'Feb', value: 50 },
  { label: 'Mar', value: 20 },
  { label: 'Apr', value: 45 },
];

export const BarChart: Story = { args: { type: 'bar', data: sampleData, title: 'Monthly Revenue' } };
export const LineChart: Story = { args: { type: 'line', data: sampleData, title: 'Trend Line' } };
export const CustomColors: Story = { args: { type: 'bar', data: sampleData, title: 'Custom Colors', colors: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'] } };
