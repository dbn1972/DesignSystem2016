import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './Snackbar';

const meta = {
  title: 'Components/Snackbar',
  component: Snackbar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Your changes have been saved.',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-3">
      <Snackbar variant="info" message="Processing your request." />
      <Snackbar variant="success" message="Form submitted successfully." />
      <Snackbar variant="warning" message="Session expiring soon." />
      <Snackbar variant="error" message="Something went wrong." />
    </div>
  ),
};

export const WithAction: Story = {
  args: {
    message: 'Item deleted.',
    variant: 'info',
    action: { label: 'Undo', onClick: () => {} },
    onClose: () => {},
  },
};
