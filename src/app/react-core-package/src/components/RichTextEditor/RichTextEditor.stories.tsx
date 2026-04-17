import type { Meta, StoryObj } from '@storybook/react';
import { RichTextEditor } from './RichTextEditor';

const meta: Meta<typeof RichTextEditor> = {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = { args: { placeholder: 'Write something...' } };
export const WithToolbar: Story = { args: { toolbar: ['bold', 'italic', 'underline', 'link', 'list'] } };
export const Disabled: Story = { args: { value: '<p>Read-only content</p>', disabled: true } };
