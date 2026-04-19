import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta = {
  title: 'Components/Notification',
  component: Notification,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Information',
    description: 'Your application has been received.',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-3">
      <Notification variant="info" title="Info" description="Your request is being processed." />
      <Notification variant="success" title="Success" description="Your form has been submitted." />
      <Notification variant="warning" title="Warning" description="Your session will expire soon." />
      <Notification variant="error" title="Error" description="Unable to process your request." />
    </div>
  ),
};

export const Dismissible: Story = {
  args: {
    title: 'Update Available',
    description: 'A new version of the portal is available.',
    variant: 'info',
    onDismiss: () => {},
  },
};
