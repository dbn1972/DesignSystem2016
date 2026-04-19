import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="primary">Option A</Button>
      <Button variant="secondary">Option B</Button>
      <Button variant="secondary">Option C</Button>
    </ButtonGroup>
  ),
};

export const ConnectedButtons: Story = {
  render: () => (
    <ButtonGroup gap="none">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Center</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
  ),
};
