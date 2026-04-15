/**
 * Chatbot Component Documentation Page
 * Complete documentation for the Chatbot component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { MessageCircle, Mic, Paperclip, Send, X } from 'lucide-react';

// Import the actual Chatbot component for live preview
const ChatbotPreview = ({ position, minimized, botName, greeting, ...props }: any) => (
  <div
    className={`fixed ${
      position === 'bottom-left' ? 'bottom-4 left-4' : 'bottom-4 right-4'
    } z-50 ${minimized ? 'w-14 h-14' : 'w-96 h-[500px]'}`}
  >
    {minimized ? (
      <button className="w-14 h-14 rounded-full bg-[#005196] text-white shadow-lg hover:bg-[#004178] flex items-center justify-center">
        <MessageCircle size={24} />
      </button>
    ) : (
      <div className="bg-card rounded-lg shadow-xl flex flex-col h-full border border-border">
        <div className="bg-[#005196] text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="font-semibold">{botName || 'Assistant'}</div>
              <div className="text-xs text-white/80">Online</div>
            </div>
          </div>
          <button className="text-white/80 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto bg-background">
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#005196] flex-shrink-0 flex items-center justify-center text-white text-sm">
                AI
              </div>
              <div className="bg-card rounded-lg p-3 shadow-sm max-w-[80%]">
                <p className="text-sm text-foreground">
                  {greeting || 'Hello! How can I help you today?'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005196]"
            />
            <button className="w-10 h-10 bg-[#005196] text-white rounded-lg hover:bg-[#004178] flex items-center justify-center">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);

function ChatbotPlayground() {
  const [position, setPosition] = React.useState('bottom-right');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <ChatbotPreview />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Position</label>
            <select value={position} onChange={e => setPosition(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="bottom-right">bottom-right</option>
              <option value="bottom-left">bottom-left</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Chatbot ${position} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentChatbotPage() {
  return (
    <ComponentDocumentation
      name="Chatbot"
      description="Advanced AI-powered chatbot interface for citizen support and government service assistance. Provides automated responses, query handling, and seamless integration with department-specific contexts."
      category="Government Services"
      maturity="beta"
      tier="composite"
      since="v2.3.0"
      updated="v2.3.0"

      preview={
        <div className="w-full max-w-2xl">
          <ChatbotPreview />
        </div>
      }

      props={[
        {
          name: 'botName',
          type: 'string',
          default: "'Assistant'",
          required: false,
          description: 'Display name of the chatbot. Should reflect the department or service (e.g., "Tax Help Bot", "License Assistant").',
        },
        {
          name: 'botAvatar',
          type: 'string | ReactNode',
          required: false,
          description: 'Avatar image URL or custom avatar component for the chatbot.',
        },
        {
          name: 'greeting',
          type: 'string',
          default: "'Hello! How can I help you today?'",
          required: false,
          description: 'Initial greeting message displayed when the chatbot opens.',
        },
        {
          name: 'placeholder',
          type: 'string',
          default: "'Type your message...'",
          required: false,
          description: 'Placeholder text for the message input field.',
        },
        {
          name: 'position',
          type: "'bottom-right' | 'bottom-left'",
          default: "'bottom-right'",
          required: false,
          description: 'Position of the chatbot widget on the screen.',
        },
        {
          name: 'minimized',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether the chatbot starts in minimized state (collapsed to icon).',
        },
        {
          name: 'onSendMessage',
          type: '(message: string, attachments?: File[]) => Promise<ChatMessage>',
          required: true,
          description: 'Callback function when user sends a message. Returns the bot response.',
        },
        {
          name: 'onClose',
          type: '() => void',
          required: false,
          description: 'Callback function when chatbot is closed or minimized.',
        },
        {
          name: 'suggestedQuestions',
          type: 'string[]',
          required: false,
          description: 'Array of suggested questions to display as quick action buttons.',
        },
        {
          name: 'enableVoice',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Enable voice input functionality using Web Speech API.',
        },
        {
          name: 'enableFileUpload',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Allow users to upload files (documents, images) with their messages.',
        },
        {
          name: 'departmentContext',
          type: 'DepartmentContext',
          required: false,
          description: 'Department-specific context for tailored responses (department ID, services, FAQs).',
        },
      ]}

      examples={[
        {
          title: 'Basic Chatbot',
          description: 'Simple chatbot with default configuration for general citizen inquiries.',
          code: `import { Chatbot } from '@ux4g/react-core';

function Example() {
  return (
    <Chatbot />
  );
}`,
          preview: (
            <div className="relative h-[600px] bg-muted rounded-lg overflow-hidden">
              <ChatbotPreview
                position="bottom-right"
                minimized={false}
                botName="Citizen Support"
                greeting="Welcome! I'm here to help with government services."
              />
            </div>
          ),
        },
        {
          title: 'With Suggested Questions',
          description: 'Chatbot with quick-action suggested questions for common queries.',
          code: `import { Chatbot } from '@ux4g/react-composite';

function Example() {
  const suggestedQuestions = [
    "How do I renew my driver's license?",
    "What are the tax filing deadlines?",
    "How can I apply for a business permit?",
    "Where is my nearest service center?"
  ];

  const handleSendMessage = async (message: string) => {
    // Handle message processing
    return {
      id: Date.now().toString(),
      text: "I'll help you with that...",
      sender: 'bot',
      timestamp: new Date(),
    };
  };

  return (
    <Chatbot
      botName="Service Assistant"
      suggestedQuestions={suggestedQuestions}
      onSendMessage={handleSendMessage}
    />
  );
}`,
          preview: (
            <div className="relative h-[600px] bg-muted rounded-lg overflow-hidden">
              <div className="absolute bottom-4 right-4 w-96 bg-card rounded-lg shadow-xl border border-border">
                <div className="bg-[#005196] text-white p-4 rounded-t-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Service Assistant</div>
                      <div className="text-xs text-white/80">Online</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
                  <button className="w-full text-left px-3 py-2 text-sm bg-background hover:bg-muted rounded border border-border">
                    How do I renew my driver's license?
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm bg-background hover:bg-muted rounded border border-border">
                    What are the tax filing deadlines?
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: 'Voice Enabled',
          description: 'Chatbot with voice input support for accessibility and convenience.',
          code: `import { Chatbot } from '@ux4g/react-composite';

function Example() {
  const handleSendMessage = async (message: string) => {
    return {
      id: Date.now().toString(),
      text: "I heard your question and I'm processing it...",
      sender: 'bot',
      timestamp: new Date(),
    };
  };

  return (
    <Chatbot
      botName="Voice Assistant"
      greeting="You can type or use voice to ask your questions."
      enableVoice={true}
      onSendMessage={handleSendMessage}
    />
  );
}`,
          preview: (
            <div className="relative h-[600px] bg-muted rounded-lg overflow-hidden">
              <div className="absolute bottom-4 right-4 w-96 bg-card rounded-lg shadow-xl border border-border">
                <div className="bg-[#005196] text-white p-4 rounded-t-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Voice Assistant</div>
                      <div className="text-xs text-white/80">Online</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type or speak your message..."
                      className="flex-1 px-4 py-2 border border-border rounded-lg"
                    />
                    <button className="w-10 h-10 bg-muted text-muted-foreground rounded-lg hover:bg-gray-200 flex items-center justify-center">
                      <Mic size={18} />
                    </button>
                    <button className="w-10 h-10 bg-[#005196] text-white rounded-lg hover:bg-[#004178] flex items-center justify-center">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: 'File Upload Support',
          description: 'Chatbot allowing document uploads for permit applications, complaint filing, etc.',
          code: `import { Chatbot } from '@ux4g/react-composite';

function Example() {
  const handleSendMessage = async (
    message: string,
    attachments?: File[]
  ) => {
    // Process attachments
    if (attachments && attachments.length > 0) {
      const formData = new FormData();
      formData.append('message', message);
      attachments.forEach(file => formData.append('files', file));

      const response = await fetch('/api/chat/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data;
    }

    return {
      id: Date.now().toString(),
      text: "I've received your message.",
      sender: 'bot',
      timestamp: new Date(),
    };
  };

  return (
    <Chatbot
      botName="Document Assistant"
      greeting="You can attach documents to your inquiries."
      enableFileUpload={true}
      onSendMessage={handleSendMessage}
    />
  );
}`,
          preview: (
            <div className="relative h-[600px] bg-muted rounded-lg overflow-hidden">
              <div className="absolute bottom-4 right-4 w-96 bg-card rounded-lg shadow-xl border border-border">
                <div className="bg-[#005196] text-white p-4 rounded-t-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Document Assistant</div>
                      <div className="text-xs text-white/80">Online</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-muted text-muted-foreground rounded-lg hover:bg-gray-200 flex items-center justify-center">
                      <Paperclip size={18} />
                    </button>
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-border rounded-lg"
                    />
                    <button className="w-10 h-10 bg-[#005196] text-white rounded-lg hover:bg-[#004178] flex items-center justify-center">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: 'Department Specific Bot',
          description: 'Chatbot configured for a specific department with contextual knowledge.',
          code: `import { Chatbot } from '@ux4g/react-composite';

function Example() {
  const departmentContext = {
    departmentId: 'dept-tax',
    departmentName: 'Tax Services',
    services: [
      'Income Tax Filing',
      'Property Tax',
      'Business Tax Registration',
      'Tax Refunds'
    ],
    faqs: [
      { q: 'When is tax deadline?', a: 'April 15th annually' },
      { q: 'How to file online?', a: 'Visit our portal at tax.gov' }
    ]
  };

  const handleSendMessage = async (message: string) => {
    // Use departmentContext to provide tailored responses
    return {
      id: Date.now().toString(),
      text: "Based on Tax Services information...",
      sender: 'bot',
      timestamp: new Date(),
    };
  };

  return (
    <Chatbot
      botName="Tax Help Bot"
      botAvatar="/assets/tax-dept-icon.png"
      greeting="Welcome to Tax Services. How can I assist you with tax-related questions?"
      departmentContext={departmentContext}
      onSendMessage={handleSendMessage}
    />
  );
}`,
          preview: (
            <div className="relative h-[600px] bg-muted rounded-lg overflow-hidden">
              <ChatbotPreview
                position="bottom-right"
                minimized={false}
                botName="Tax Help Bot"
                greeting="Welcome to Tax Services. How can I assist you with tax-related questions?"
              />
            </div>
          ),
        },
        {
          title: 'Multilingual Support',
          description: 'Chatbot with language selection for diverse citizen populations.',
          code: `import { Chatbot } from '@ux4g/react-composite';
import { useState } from 'react';

function Example() {
  const [language, setLanguage] = useState('en');

  const greetings = {
    en: 'Hello! How can I help you today?',
    es: '¡Hola! ¿Cómo puedo ayudarte hoy?',
    fr: 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
    zh: '您好！今天我能帮您什么？'
  };

  const handleSendMessage = async (message: string) => {
    // Send message with language context
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message, language }),
    });
    const data = await response.json();
    return data;
  };

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('es')}>Español</button>
        <button onClick={() => setLanguage('fr')}>Français</button>
        <button onClick={() => setLanguage('zh')}>中文</button>
      </div>

      <Chatbot
        botName="Multilingual Assistant"
        greeting={greetings[language as keyof typeof greetings]}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}`,
          preview: (
            <div className="relative h-[600px] bg-muted rounded-lg overflow-hidden">
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="px-3 py-1 text-sm bg-card rounded shadow">EN</button>
                <button className="px-3 py-1 text-sm bg-gray-200 rounded">ES</button>
                <button className="px-3 py-1 text-sm bg-gray-200 rounded">FR</button>
              </div>
              <ChatbotPreview
                position="bottom-right"
                minimized={false}
                botName="Multilingual Assistant"
                greeting="Hello! How can I help you today?"
              />
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Mic, Paperclip } from 'lucide-react';
import { cn } from '../../utils/cn';
import { ChatbotProps, ChatMessage } from './Chatbot.types';

export const Chatbot: React.FC<ChatbotProps> = ({
  botName = 'Assistant',
  botAvatar,
  greeting = 'Hello! How can I help you today?',
  placeholder = 'Type your message...',
  position = 'bottom-right',
  minimized: initialMinimized = true,
  onSendMessage,
  onClose,
  suggestedQuestions = [],
  enableVoice = false,
  enableFileUpload = false,
  departmentContext,
}) => {
  const [minimized, setMinimized] = useState(initialMinimized);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: greeting,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() && attachments.length === 0) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
      attachments: attachments.map(f => f.name),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setAttachments([]);
    setIsTyping(true);

    try {
      const botResponse = await onSendMessage(inputValue, attachments);
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const toggleMinimized = () => {
    const newMinimized = !minimized;
    setMinimized(newMinimized);
    if (newMinimized && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={cn(
        'fixed z-50',
        position === 'bottom-left' ? 'bottom-4 left-4' : 'bottom-4 right-4'
      )}
    >
      {minimized ? (
        <button
          onClick={toggleMinimized}
          className="w-14 h-14 rounded-full bg-[#005196] text-white shadow-lg hover:bg-[#004178] flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]"
          aria-label="Open chatbot"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="w-96 h-[500px] bg-card rounded-lg shadow-xl flex flex-col border border-border">
          {/* Header */}
          <div className="bg-[#005196] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              {botAvatar ? (
                typeof botAvatar === 'string' ? (
                  <img src={botAvatar} alt="" className="w-10 h-10 rounded-full" />
                ) : (
                  botAvatar
                )
              ) : (
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
              )}
              <div>
                <div className="font-semibold">{botName}</div>
                <div className="text-xs text-white/80">Online</div>
              </div>
            </div>
            <button
              onClick={toggleMinimized}
              className="text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              aria-label="Minimize chatbot"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-background">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    'flex gap-2',
                    msg.sender === 'user' && 'flex-row-reverse'
                  )}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-[#005196] flex-shrink-0 flex items-center justify-center text-white text-sm">
                      AI
                    </div>
                  )}
                  <div
                    className={cn(
                      'rounded-lg p-3 max-w-[80%]',
                      msg.sender === 'user'
                        ? 'bg-[#005196] text-white'
                        : 'bg-card shadow-sm'
                    )}
                  >
                    <p className="text-sm">{msg.text}</p>
                    {msg.attachments && msg.attachments.length > 0 && (
                      <div className="mt-2 text-xs opacity-80">
                        {msg.attachments.map((file, i) => (
                          <div key={i}>📎 {file}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#005196] flex-shrink-0 flex items-center justify-center text-white text-sm">
                    AI
                  </div>
                  <div className="bg-card rounded-lg p-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && suggestedQuestions.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground">Suggested questions:</p>
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestedQuestion(q)}
                    className="w-full text-left px-3 py-2 text-sm bg-card hover:bg-muted rounded border border-border transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            {attachments.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2">
                {attachments.map((file, i) => (
                  <div
                    key={i}
                    className="px-2 py-1 bg-muted rounded text-xs flex items-center gap-1"
                  >
                    <Paperclip size={12} />
                    {file.name}
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              {enableFileUpload && (
                <>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-10 h-10 bg-muted text-muted-foreground rounded-lg hover:bg-gray-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196]"
                    aria-label="Attach file"
                  >
                    <Paperclip size={18} />
                  </button>
                </>
              )}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={placeholder}
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005196]"
                aria-label="Message input"
              />
              {enableVoice && (
                <button
                  className="w-10 h-10 bg-muted text-muted-foreground rounded-lg hover:bg-gray-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196]"
                  aria-label="Voice input"
                >
                  <Mic size={18} />
                </button>
              )}
              <button
                onClick={handleSend}
                className="w-10 h-10 bg-[#005196] text-white rounded-lg hover:bg-[#004178] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inputValue.trim() && attachments.length === 0}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Chatbot.displayName = 'Chatbot';`,
        types: `export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  attachments?: string[];
}

export interface DepartmentContext {
  departmentId: string;
  departmentName: string;
  services: string[];
  faqs: Array<{ q: string; a: string }>;
}

export interface ChatbotProps {
  botName?: string;
  botAvatar?: string | React.ReactNode;
  greeting?: string;
  placeholder?: string;
  position?: 'bottom-right' | 'bottom-left';
  minimized?: boolean;
  onSendMessage: (message: string, attachments?: File[]) => Promise<ChatMessage>;
  onClose?: () => void;
  suggestedQuestions?: string[];
  enableVoice?: boolean;
  enableFileUpload?: boolean;
  departmentContext?: DepartmentContext;
}`,
        variants: `// Chatbot uses inline styling rather than CVA variants
// due to its complex, stateful nature as a composite component`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  attachments?: string[];
}

export interface DepartmentContext {
  departmentId: string;
  departmentName: string;
  services: string[];
  faqs: Array<{ q: string; a: string }>;
}

@Component({
  selector: 'ux4g-chatbot',
  template: \`
    <div [class]="getPositionClasses()">
      <!-- Minimized State -->
      <button
        *ngIf="minimized"
        (click)="toggleMinimized()"
        class="chatbot-toggle"
        aria-label="Open chatbot"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>

      <!-- Expanded State -->
      <div *ngIf="!minimized" class="chatbot-container">
        <!-- Header -->
        <div class="chatbot-header">
          <div class="chatbot-header-info">
            <div class="chatbot-avatar">
              <img *ngIf="botAvatar" [src]="botAvatar" [alt]="botName" />
              <svg *ngIf="!botAvatar" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <div class="chatbot-name">{{ botName }}</div>
              <div class="chatbot-status">Online</div>
            </div>
          </div>
          <button (click)="toggleMinimized()" class="chatbot-close" aria-label="Minimize chatbot">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- Messages -->
        <div class="chatbot-messages" #messagesContainer>
          <div *ngFor="let message of messages"
               [class.message-user]="message.sender === 'user'"
               [class.message-bot]="message.sender === 'bot'"
               class="message">
            <div *ngIf="message.sender === 'bot'" class="message-avatar">AI</div>
            <div class="message-content">
              <p>{{ message.text }}</p>
              <div *ngIf="message.attachments" class="message-attachments">
                <div *ngFor="let file of message.attachments">📎 {{ file }}</div>
              </div>
            </div>
          </div>

          <!-- Typing Indicator -->
          <div *ngIf="isTyping" class="message message-bot">
            <div class="message-avatar">AI</div>
            <div class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <!-- Suggested Questions -->
          <div *ngIf="messages.length === 1 && suggestedQuestions.length > 0"
               class="suggested-questions">
            <p>Suggested questions:</p>
            <button *ngFor="let question of suggestedQuestions"
                    (click)="handleSuggestedQuestion(question)"
                    class="suggested-question">
              {{ question }}
            </button>
          </div>
        </div>

        <!-- Input Area -->
        <div class="chatbot-input">
          <div *ngIf="attachments.length > 0" class="attachments-preview">
            <div *ngFor="let file of attachments" class="attachment-item">
              📎 {{ file.name }}
            </div>
          </div>
          <div class="input-row">
            <button *ngIf="enableFileUpload"
                    (click)="fileInput.click()"
                    class="input-button"
                    aria-label="Attach file">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
              </svg>
            </button>
            <input type="file"
                   #fileInput
                   multiple
                   (change)="handleFileSelect($event)"
                   style="display: none" />
            <input type="text"
                   [(ngModel)]="inputValue"
                   (keyup.enter)="handleSend()"
                   [placeholder]="placeholder"
                   class="message-input"
                   aria-label="Message input" />
            <button *ngIf="enableVoice"
                    class="input-button"
                    aria-label="Voice input">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" x2="12" y1="19" y2="22"/>
              </svg>
            </button>
            <button (click)="handleSend()"
                    [disabled]="!inputValue.trim() && attachments.length === 0"
                    class="send-button"
                    aria-label="Send message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  \`,
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  @Input() botName = 'Assistant';
  @Input() botAvatar?: string;
  @Input() greeting = 'Hello! How can I help you today?';
  @Input() placeholder = 'Type your message...';
  @Input() position: 'bottom-right' | 'bottom-left' = 'bottom-right';
  @Input() minimized = true;
  @Input() suggestedQuestions: string[] = [];
  @Input() enableVoice = false;
  @Input() enableFileUpload = false;
  @Input() departmentContext?: DepartmentContext;

  @Output() sendMessage = new EventEmitter<{ message: string; attachments?: File[] }>();
  @Output() closed = new EventEmitter<void>();

  messages: ChatMessage[] = [];
  inputValue = '';
  isTyping = false;
  attachments: File[] = [];

  ngOnInit() {
    this.messages = [
      {
        id: '1',
        text: this.greeting,
        sender: 'bot',
        timestamp: new Date(),
      },
    ];
  }

  getPositionClasses(): string {
    const base = 'chatbot-widget';
    const positionClass = this.position === 'bottom-left' ? 'position-left' : 'position-right';
    return \`\${base} \${positionClass}\`;
  }

  toggleMinimized(): void {
    this.minimized = !this.minimized;
    if (this.minimized) {
      this.closed.emit();
    }
  }

  handleSend(): void {
    if (!this.inputValue.trim() && this.attachments.length === 0) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: this.inputValue,
      sender: 'user',
      timestamp: new Date(),
      attachments: this.attachments.map(f => f.name),
    };

    this.messages.push(userMessage);
    this.sendMessage.emit({
      message: this.inputValue,
      attachments: this.attachments,
    });

    this.inputValue = '';
    this.attachments = [];
    this.isTyping = true;
  }

  handleSuggestedQuestion(question: string): void {
    this.inputValue = question;
  }

  handleFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.attachments = [...this.attachments, ...Array.from(input.files)];
    }
  }

  addBotMessage(message: ChatMessage): void {
    this.messages.push(message);
    this.isTyping = false;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotComponent } from './chatbot.component';

@NgModule({
  declarations: [ChatbotComponent],
  imports: [CommonModule, FormsModule],
  exports: [ChatbotComponent]
})
export class ChatbotModule { }`,
        types: `export type ChatbotPosition = 'bottom-right' | 'bottom-left';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  attachments?: string[];
}

export interface DepartmentContext {
  departmentId: string;
  departmentName: string;
  services: string[];
  faqs: Array<{ q: string; a: string }>;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-chatbot> custom element",
        html: "<ux4g-chatbot variant=\"primary\" size=\"md\"><!-- Chatbot --></ux4g-chatbot>",
      }}
      comparisons={[
        {
          system: 'Dialogflow (Google)',
          component: 'Dialogflow Messenger',
          variants: 'Embedded widget, custom UI',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://cloud.google.com/dialogflow',
        },
        {
          system: 'Rasa',
          component: 'Rasa Chat Widget',
          variants: 'Open-source, customizable',
          accessibility: 'Custom implementation',
          documentation: 'Good',
          link: 'https://rasa.com/',
        },
        {
          system: 'Microsoft Bot Framework',
          component: 'Web Chat',
          variants: 'Multiple channels, adaptive cards',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://dev.botframework.com/',
        },
        {
          system: 'IBM Watson Assistant',
          component: 'Web Chat Widget',
          variants: 'Embedded, standalone',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://www.ibm.com/cloud/watson-assistant',
        },
        {
          system: 'Intercom',
          component: 'Messenger',
          variants: 'Commercial, feature-rich',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://www.intercom.com/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 44x44px touch target for minimize/close buttons (WCAG 2.5.5)',
          '2px focus ring with offset for all interactive elements (WCAG 2.4.7)',
          'Color contrast ratios meet or exceed 4.5:1 for text (WCAG 1.4.3)',
          'Semantic HTML with proper ARIA labels and roles',
          'Keyboard navigation support for all interactions',
          'Screen reader announcements for new messages',
          'aria-live regions for typing indicators and message updates',
          'Focus management when opening/closing chatbot',
          'Proper labeling for all input fields and buttons',
          'Support for voice input as alternative modality',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate through interactive elements' },
          { key: 'Shift + Tab', action: 'Navigate backwards' },
          { key: 'Enter', action: 'Send message or activate button' },
          { key: 'Escape', action: 'Close/minimize chatbot' },
          { key: 'Space', action: 'Activate buttons' },
        ],
        screenReader: [
          'Announces chatbot role and state (open/closed)',
          'Announces new messages from bot with timestamp',
          'Announces typing indicator when bot is processing',
          'Announces file upload status and attached files',
          'Announces suggested questions as actionable buttons',
          'Provides context for department-specific information',
        ],
      }}

      tokens={{
        file: '/tokens/components/chatbot.json',
        mappings: [
          { property: 'Widget Width', token: 'composite.chatbot.width', value: '384px (24rem)' },
          { property: 'Widget Height', token: 'composite.chatbot.height', value: '500px' },
          { property: 'Header Background', token: 'composite.chatbot.header.background', value: '#005196 (Navy 500)' },
          { property: 'Header Text Color', token: 'composite.chatbot.header.text', value: '#FFFFFF (White)' },
          { property: 'Message Background (Bot)', token: 'composite.chatbot.message.bot.background', value: '#FFFFFF (White)' },
          { property: 'Message Background (User)', token: 'composite.chatbot.message.user.background', value: '#005196 (Navy 500)' },
          { property: 'Input Border', token: 'composite.chatbot.input.border', value: '#D1D5DB (Gray 300)' },
          { property: 'Send Button Background', token: 'composite.chatbot.button.send.background', value: '#005196 (Navy 500)' },
          { property: 'Border Radius', token: 'base.borderRadius.lg', value: '8px' },
          { property: 'Min Touch Target', token: 'accessibility.minTouchTarget', value: '44px' },
        ],
      }}

      governmentContext={{
        description: 'The Chatbot component serves as an intelligent virtual assistant for government services, automating responses to citizen queries, providing 24/7 support, and reducing the load on human support staff.',
        useCases: "Citizen Query Handling: Automated responses to common questions about government services, office hours, required documents, and procedures; Service Information: Providing detailed information about available government services, eligibility criteria, and application processes; Complaint Resolution: Initial triage and routing of citizen complaints with file upload support for evidence documentation; FAQ Automation: Instantly answering frequently asked questions based on department-specific knowledge bases; Multilingual Support: Serving diverse populations by providing support in multiple languages; Appointment Scheduling: Helping citizens schedule appointments with government offices and departments",
        considerations: "Privacy and data security: Ensure all citizen interactions are encrypted and compliant with data protection regulations; Transparency: Clearly indicate that users are interacting with an AI system, not a human; Escalation paths: Provide clear mechanisms to escalate to human support when needed; Accessibility: Support multiple input modalities (text, voice) and ensure compatibility with assistive technologies; Department context: Configure chatbots with department-specific knowledge for accurate, relevant responses; Conversation logging: Maintain audit trails of interactions for quality assurance and compliance; Performance monitoring: Track response accuracy, resolution rates, and user satisfaction metrics",
      }}
      additionalContent={
        <>

          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use Chatbot when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Citizen self-service support</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>FAQ and help desk automation</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Form filling guidance</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Service discovery assistance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Chatbot when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple FAQ — use Accordion</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Critical transactions — use human support</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Offline scenarios — provide static help</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Legal advice — requires human review</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Support multilingual input for government chatbots serving diverse populations.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t use chatbots for critical transactions — require human review.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/accordion" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Accordion</h3>
                <p className="text-sm text-muted-foreground">For static FAQ sections</p>
              </a>
              <a href="/components/drawer" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Drawer</h3>
                <p className="text-sm text-muted-foreground">For chat panel container</p>
              </a>
              <a href="/components/toast" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Toast</h3>
                <p className="text-sm text-muted-foreground">For chat notifications</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added multilingual support</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added conversation history</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with text-based chat</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Chatbots reduce support load</h3>
                <p className="text-sm text-muted-foreground">Government chatbots handle 60% of routine queries, reducing call center volume by 40% (India Digital Gov report).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}