import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chatbot } from './Chatbot';

describe('Chatbot', () => {
  it('renders the toggle button', () => {
    render(<Chatbot />);
    expect(screen.getByRole('button', { name: /Open Help/ })).toBeInTheDocument();
  });

  it('opens the chat panel when toggle is clicked', async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();
    const { rerender } = render(<Chatbot open={false} onToggle={onToggle} />);
    await user.click(screen.getByRole('button', { name: /Open Help/ }));
    expect(onToggle).toHaveBeenCalled();
    rerender(<Chatbot open={true} onToggle={onToggle} />);
    expect(screen.getByRole('log')).toBeInTheDocument();
  });

  it('renders messages when open', () => {
    const messages = [
      { id: '1', text: 'Hello!', sender: 'bot' as const },
      { id: '2', text: 'Hi there', sender: 'user' as const },
    ];
    render(<Chatbot open messages={messages} />);
    expect(screen.getByText('Hello!')).toBeInTheDocument();
    expect(screen.getByText('Hi there')).toBeInTheDocument();
  });

  it('calls onSend when the send button is clicked', async () => {
    const user = userEvent.setup();
    const onSend = vi.fn();
    render(<Chatbot open onSend={onSend} />);
    const input = screen.getByLabelText('Message input');
    await user.type(input, 'Test message');
    await user.click(screen.getByRole('button', { name: 'Send' }));
    expect(onSend).toHaveBeenCalledWith('Test message');
  });

  it('calls onSend on Enter key', async () => {
    const user = userEvent.setup();
    const onSend = vi.fn();
    render(<Chatbot open onSend={onSend} />);
    const input = screen.getByLabelText('Message input');
    await user.type(input, 'Enter test{Enter}');
    expect(onSend).toHaveBeenCalledWith('Enter test');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Chatbot ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
