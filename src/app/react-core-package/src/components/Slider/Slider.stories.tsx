import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Volume',
    defaultValue: 50,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Slider label="Small" size="sm" defaultValue={30} />
      <Slider label="Medium" size="md" defaultValue={50} />
      <Slider label="Large" size="lg" defaultValue={70} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Slider',
    defaultValue: 40,
    disabled: true,
  },
};
