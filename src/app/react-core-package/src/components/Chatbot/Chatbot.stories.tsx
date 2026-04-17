import type { Meta, StoryObj } from '@storybook/react';
import { Chatbot } from './Chatbot';

const meta: Meta<typeof Chatbot> = {
  title: 'Components/Chatbot',
  component: Chatbot,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Chatbot>;

export const Closed: Story = { args: { open: false } };
export const Open: Story = { args: { open: true, title: 'Support' } };
export const WithMessages: Story = { args: { open: true, messages: [{ id: '1', text: 'How can I help?', sender: 'bot' }, { id: '2', text: 'I need assistance', sender: 'user' }] } };
export const CustomPlaceholder: Story = { args: { open: true, placeholder: 'Ask a question…' } };
export const CustomTitle: Story = { args: { open: true, title: 'Live Chat' } };
