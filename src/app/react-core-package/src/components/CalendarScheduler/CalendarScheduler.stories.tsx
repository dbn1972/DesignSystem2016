import type { Meta, StoryObj } from '@storybook/react';
import { CalendarScheduler } from './CalendarScheduler';

const meta: Meta<typeof CalendarScheduler> = {
  title: 'Components/CalendarScheduler',
  component: CalendarScheduler,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CalendarScheduler>;

export const Default: Story = { args: { selectedDate: '2025-01-15' } };
export const WithAvailableDates: Story = { args: { selectedDate: '2025-01-15', availableDates: ['2025-01-10', '2025-01-15', '2025-01-20'] } };
export const WithMinMax: Story = { args: { selectedDate: '2025-01-15', minDate: '2025-01-05', maxDate: '2025-01-25' } };
export const Disabled: Story = { args: { selectedDate: '2025-01-15', disabled: true } };
export const CustomLabel: Story = { args: { selectedDate: '2025-01-15', label: 'Book an appointment' } };
