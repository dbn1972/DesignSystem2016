import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Basic: Story = {
  args: {
    defaultValue: 3,
  },
};

export const WithLabel: Story = {
  args: {
    defaultValue: 4,
    showLabel: true,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4.5,
    readOnly: true,
    allowHalf: true,
    showLabel: true,
  },
};

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
  },
};

export const ServiceRating: Story = {
  args: {
    defaultValue: 0,
    showLabel: true,
    labelFormatter: (val) => {
      const labels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
      return val > 0 ? labels[Math.ceil(val) - 1] : 'Not rated';
    },
  },
};

export const AadhaarCenterRating: Story = {
  args: {
    defaultValue: 4,
    showLabel: true,
    labelFormatter: (val) => `${val} out of 5 stars`,
  },
};

export const DigiLockerExperience: Story = {
  args: {
    defaultValue: 0,
    showLabel: true,
    labelFormatter: (val) => `Rate your DigiLocker experience: ${val}/5`,
  },
};

export const ApplicationProcessRating: Story = {
  args: {
    value: 4,
    readOnly: true,
    showLabel: true,
    labelFormatter: (val) => `Application process rated ${val}/5`,
  },
};

export const SmallSize: Story = {
  args: {
    defaultValue: 3,
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    defaultValue: 4,
    size: 'lg',
    showLabel: true,
  },
};

export const Max10: Story = {
  args: {
    defaultValue: 7,
    max: 10,
    showLabel: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    return (
      <div>
        <Rating value={rating} onChange={setRating} showLabel />
        <p style={{ marginTop: '1rem' }}>Selected rating: {rating}</p>
      </div>
    );
  },
};
