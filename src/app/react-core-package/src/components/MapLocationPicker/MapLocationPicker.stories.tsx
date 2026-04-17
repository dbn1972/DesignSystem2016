import type { Meta, StoryObj } from '@storybook/react';
import { MapLocationPicker } from './MapLocationPicker';

const meta: Meta<typeof MapLocationPicker> = {
  title: 'Components/MapLocationPicker',
  component: MapLocationPicker,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof MapLocationPicker>;

export const Default: Story = { args: { latitude: 28.6139, longitude: 77.209, label: 'Select Location' } };
export const Mumbai: Story = { args: { latitude: 19.076, longitude: 72.8777, label: 'Mumbai Office', zoom: 12 } };
export const CustomHeight: Story = { args: { latitude: 12.9716, longitude: 77.5946, label: 'Bengaluru', height: 400 } };
