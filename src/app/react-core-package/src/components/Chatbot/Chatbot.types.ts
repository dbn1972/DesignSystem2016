import { BaseComponentProps } from '../../types/common';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export interface ChatbotProps extends BaseComponentProps {
  /** Title displayed in the chat header */
  title?: string;

  /** Array of chat messages */
  messages?: ChatMessage[];

  /** Called when the user sends a message */
  onSend?: (text: string) => void;

  /** Whether the chat panel is open */
  open?: boolean;

  /** Called when the toggle button is clicked */
  onToggle?: () => void;

  /** Placeholder text for the message input */
  placeholder?: string;
}
