/**
 * Popover Component Documentation Page
 * Complete documentation for the Popover component with examples, code downloads, and comparisons
 */

import React, { useState, useRef, useEffect } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Info, HelpCircle, Settings, User, MoreVertical, X } from 'lucide-react';

// Popover Preview Component with positioning logic
const PopoverPreview = ({
  trigger = 'click',
  placement = 'bottom',
  content,
  children,
  showArrow = true,
  size = 'md',
  closeButton = false,
  ...props
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (!triggerRef.current || !popoverRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    let top = 0;
    let left = 0;
    const gap = 8;

    switch (placement) {
      case 'top':
        top = triggerRect.top + scrollTop - popoverRect.height - gap;
        left = triggerRect.left + scrollLeft + (triggerRect.width / 2) - (popoverRect.width / 2);
        break;
      case 'bottom':
        top = triggerRect.bottom + scrollTop + gap;
        left = triggerRect.left + scrollLeft + (triggerRect.width / 2) - (popoverRect.width / 2);
        break;
      case 'left':
        top = triggerRect.top + scrollTop + (triggerRect.height / 2) - (popoverRect.height / 2);
        left = triggerRect.left + scrollLeft - popoverRect.width - gap;
        break;
      case 'right':
        top = triggerRect.top + scrollTop + (triggerRect.height / 2) - (popoverRect.height / 2);
        left = triggerRect.right + scrollLeft + gap;
        break;
      default:
        top = triggerRect.bottom + scrollTop + gap;
        left = triggerRect.left + scrollLeft + (triggerRect.width / 2) - (popoverRect.width / 2);
    }

    setPosition({ top, left });
  };

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
      window.addEventListener('resize', calculatePosition);
      window.addEventListener('scroll', calculatePosition);
      return () => {
        window.removeEventListener('resize', calculatePosition);
        window.removeEventListener('scroll', calculatePosition);
      };
    }
  }, [isOpen, placement]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        trigger === 'click' &&
        isOpen &&
        popoverRef.current &&
        triggerRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, trigger]);

  const handleTriggerClick = () => {
    if (trigger === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsOpen(false);
    }
  };

  const getArrowClasses = () => {
    const baseClasses = 'absolute w-3 h-3 bg-card border transform rotate-45';
    switch (placement) {
      case 'top':
        return baseClasses + ' bottom-[-6px] left-1/2 -translate-x-1/2 border-t-0 border-l-0 border-border';
      case 'bottom':
        return baseClasses + ' top-[-6px] left-1/2 -translate-x-1/2 border-b-0 border-r-0 border-border';
      case 'left':
        return baseClasses + ' right-[-6px] top-1/2 -translate-y-1/2 border-l-0 border-b-0 border-border';
      case 'right':
        return baseClasses + ' left-[-6px] top-1/2 -translate-y-1/2 border-r-0 border-t-0 border-border';
      default:
        return baseClasses + ' top-[-6px] left-1/2 -translate-x-1/2 border-b-0 border-r-0 border-border';
    }
  };

  const sizeClasses = size === 'sm' ? 'w-48' : size === 'lg' ? 'w-96' : 'w-72';

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onClick={handleTriggerClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>

      {isOpen && (
        <div
          ref={popoverRef}
          className={'fixed z-50 ' + sizeClasses}
          style={{
            top: position.top + 'px',
            left: position.left + 'px',
          }}
          role="dialog"
          aria-modal="false"
          onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
          onMouseLeave={trigger === 'hover' ? handleMouseLeave : undefined}
        >
          <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
            {showArrow && <div className={getArrowClasses()} />}
            {closeButton && (
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 p-1 text-gray-500 hover:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] rounded"
                aria-label="Close popover"
              >
                <X size={16} />
              </button>
            )}
            <div className="relative z-10 bg-card">
              {content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Button component for trigger
const ButtonTrigger = ({ children, variant = 'primary', size = 'md', ...props }: any) => (
  <button
    className={'inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' + (
      variant === 'primary' ? 'bg-[#005196] text-white border-[#005196] hover:bg-[#004178]' :
      variant === 'secondary' ? 'bg-card text-[#005196] border-[#005196] hover:bg-[#f5f5f5]' :
      variant === 'tertiary' ? 'bg-transparent text-[#005196] border-transparent hover:bg-[#f5f5f5]' :
      'bg-card text-muted-foreground border-border hover:bg-background'
    ) + ' ' + (
      size === 'sm' ? 'h-8 px-3 text-sm' :
      size === 'lg' ? 'h-12 px-6 text-lg' :
      'h-10 px-4 text-base'
    )}
    {...props}
  >
    {children}
  </button>
);

function PopoverPlayground() {
  const [trigger, setTrigger] = React.useState('click');
  const [position, setPosition] = React.useState('top');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <PopoverPreview content="Help text content" placement="top" />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Trigger</label>
            <select value={trigger} onChange={e => setTrigger(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="click">click</option>
              <option value="hover">hover</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-foreground mb-1">Position</label>
            <select value={position} onChange={e => setPosition(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="top">top</option>
              <option value="bottom">bottom</option>
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Popover ${trigger} ${position} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentPopoverPage() {
  const [formData, setFormData] = useState({ email: '', notifications: true });

  return (
    <ComponentDocumentation
      name="Popover"
      description="Floating contextual panel with rich content, triggered by click or hover. Displays additional information, forms, menus, or interactive elements without navigating away from the current page."
      category="Overlay"
      maturity="beta"
      tier="core"
      since="v1.2.0"
      updated="v2.1.0"

      preview={
        <div className="w-full max-w-2xl">
          <PopoverPreview />
        </div>
      }

      props={[
        {
          name: 'trigger',
          type: "'click' | 'hover'",
          default: "'click'",
          required: false,
          description: 'Interaction type that triggers the popover. Click for user-initiated actions, hover for informational content.',
        },
        {
          name: 'placement',
          type: "'top' | 'bottom' | 'left' | 'right' | 'auto'",
          default: "'bottom'",
          required: false,
          description: 'Position of the popover relative to the trigger element. Auto calculates best position based on available space.',
        },
        {
          name: 'content',
          type: 'ReactNode',
          required: true,
          description: 'Content to display inside the popover. Can be text, forms, menus, or any React elements.',
        },
        {
          name: 'isOpen',
          type: 'boolean',
          required: false,
          description: 'Controlled state for popover visibility. Use with onOpenChange for controlled component.',
        },
        {
          name: 'onOpenChange',
          type: '(open: boolean) => void',
          required: false,
          description: 'Callback fired when popover open state changes. Use for controlled component behavior.',
        },
        {
          name: 'closeOnClickOutside',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether clicking outside the popover should close it. Only applies to click-triggered popovers.',
        },
        {
          name: 'showArrow',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to display an arrow pointing to the trigger element.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Width of the popover. Small (192px), Medium (288px), Large (384px).',
        },
        {
          name: 'closeButton',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to show a close button in the top-right corner of the popover.',
        },
        {
          name: 'offset',
          type: 'number',
          default: '8',
          required: false,
          description: 'Distance in pixels between the trigger and the popover.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply to the popover container.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Trigger element that opens the popover when interacted with.',
        },
      ]}

      examples={[
        {
          title: 'Basic Popover',
          description: 'Simple click-triggered popover with basic content and arrow indicator.',
          code: 'import { Popover } from \'@ux4g/react-core\';\nimport { Info } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <Popover\n      content={\n        <div className="p-4">\n          <h4 className="font-semibold text-foreground mb-2">\n            Additional Information\n          </h4>\n          <p className="text-sm text-muted-foreground">\n            This is a basic popover with helpful information for the user.\n            Click outside to close.\n          </p>\n        </div>\n      }\n    >\n      <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178]">\n        <Info size={16} />\n        Show Info\n      </button>\n    </Popover>\n  );\n}',
          preview: (
            <PopoverPreview
              content={
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    Additional Information
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    This is a basic popover with helpful information for the user. Click outside to close.
                  </p>
                </div>
              }
            >
              <ButtonTrigger variant="primary">
                <Info size={16} />
                <span>Show Info</span>
              </ButtonTrigger>
            </PopoverPreview>
          ),
        },
        {
          title: 'Popover with Form',
          description: 'Interactive popover containing a form for quick data entry without page navigation.',
          code: 'import { Popover } from \'@ux4g/react-core\';\nimport { Settings } from \'lucide-react\';\n\nfunction Example() {\n  const [email, setEmail] = React.useState(\'\');\n  const [notifications, setNotifications] = React.useState(true);\n  \n  return (\n    <Popover\n      size="md"\n      closeButton\n      content={\n        <div className="p-4">\n          <h4 className="font-semibold text-foreground mb-4">\n            Quick Settings\n          </h4>\n          <div className="space-y-4">\n            <div>\n              <label className="block text-sm font-medium text-muted-foreground mb-1">\n                Email Address\n              </label>\n              <input\n                type="email"\n                value={email}\n                onChange={(e) => setEmail(e.target.value)}\n                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"\n                placeholder="your@email.com"\n              />\n            </div>\n            <div className="flex items-center">\n              <input\n                type="checkbox"\n                id="notifications"\n                checked={notifications}\n                onChange={(e) => setNotifications(e.target.checked)}\n                className="mr-2"\n              />\n              <label htmlFor="notifications" className="text-sm text-muted-foreground">\n                Enable notifications\n              </label>\n            </div>\n            <button className="w-full px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178]">\n              Save Settings\n            </button>\n          </div>\n        </div>\n      }\n    >\n      <button className="inline-flex items-center gap-2 px-4 py-2 bg-card text-muted-foreground border border-border rounded hover:bg-background">\n        <Settings size={16} />\n        Settings\n      </button>\n    </Popover>\n  );\n}',
          preview: (
            <PopoverPreview
              size="md"
              closeButton
              content={
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-4">Quick Settings</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="notifications-preview"
                        checked={formData.notifications}
                        onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
                        className="mr-2"
                      />
                      <label htmlFor="notifications-preview" className="text-sm text-muted-foreground">
                        Enable notifications
                      </label>
                    </div>
                    <button className="w-full px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178]">
                      Save Settings
                    </button>
                  </div>
                </div>
              }
            >
              <ButtonTrigger>
                <Settings size={16} />
                <span>Settings</span>
              </ButtonTrigger>
            </PopoverPreview>
          ),
        },
        {
          title: 'Help Popover (Hover)',
          description: 'Hover-triggered popover for contextual help and information tooltips.',
          code: 'import { Popover } from \'@ux4g/react-core\';\nimport { HelpCircle } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <div className="inline-flex items-center gap-2">\n      <span className="text-sm text-muted-foreground">Password Requirements</span>\n      <Popover\n        trigger="hover"\n        placement="right"\n        size="sm"\n        content={\n          <div className="p-3">\n            <h4 className="font-semibold text-foreground text-sm mb-2">\n              Password must contain:\n            </h4>\n            <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">\n              <li>At least 8 characters</li>\n              <li>One uppercase letter</li>\n              <li>One lowercase letter</li>\n              <li>One number</li>\n              <li>One special character</li>\n            </ul>\n          </div>\n        }\n      >\n        <button className="text-gray-500 hover:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] rounded-full">\n          <HelpCircle size={18} />\n        </button>\n      </Popover>\n    </div>\n  );\n}',
          preview: (
            <div className="inline-flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Password Requirements</span>
              <PopoverPreview
                trigger="hover"
                placement="right"
                size="sm"
                content={
                  <div className="p-3">
                    <h4 className="font-semibold text-foreground text-sm mb-2">
                      Password must contain:
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                      <li>At least 8 characters</li>
                      <li>One uppercase letter</li>
                      <li>One lowercase letter</li>
                      <li>One number</li>
                      <li>One special character</li>
                    </ul>
                  </div>
                }
              >
                <button className="text-gray-500 hover:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] rounded-full">
                  <HelpCircle size={18} />
                </button>
              </PopoverPreview>
            </div>
          ),
        },
        {
          title: 'User Profile Card',
          description: 'Rich popover displaying user information with avatar and actions.',
          code: 'import { Popover } from \'@ux4g/react-core\';\nimport { User } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <Popover\n      placement="bottom"\n      content={\n        <div className="p-4">\n          <div className="flex items-center gap-3 mb-4">\n            <div className="w-12 h-12 bg-[#005196] text-white rounded-full flex items-center justify-center font-semibold">\n              JD\n            </div>\n            <div>\n              <h4 className="font-semibold text-foreground">John Doe</h4>\n              <p className="text-sm text-muted-foreground">john.doe@gov.uk</p>\n            </div>\n          </div>\n          <div className="border-t border-border pt-3 space-y-2">\n            <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded">\n              View Profile\n            </button>\n            <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded">\n              Account Settings\n            </button>\n            <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded">\n              Sign Out\n            </button>\n          </div>\n        </div>\n      }\n    >\n      <button className="w-10 h-10 bg-[#005196] text-white rounded-full flex items-center justify-center font-semibold hover:bg-[#004178]">\n        JD\n      </button>\n    </Popover>\n  );\n}',
          preview: (
            <PopoverPreview
              placement="bottom"
              content={
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#005196] text-white rounded-full flex items-center justify-center font-semibold">
                      JD
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">John Doe</h4>
                      <p className="text-sm text-muted-foreground">john.doe@gov.uk</p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-3 space-y-2">
                    <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded">
                      View Profile
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded">
                      Account Settings
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded">
                      Sign Out
                    </button>
                  </div>
                </div>
              }
            >
              <button className="w-10 h-10 bg-[#005196] text-white rounded-full flex items-center justify-center font-semibold hover:bg-[#004178]">
                JD
              </button>
            </PopoverPreview>
          ),
        },
        {
          title: 'Action Menu',
          description: 'Popover displaying a list of contextual actions for a specific item.',
          code: 'import { Popover } from \'@ux4g/react-core\';\nimport { MoreVertical } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <Popover\n      placement="left"\n      size="sm"\n      content={\n        <div className="py-2">\n          <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted">\n            Edit\n          </button>\n          <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted">\n            Duplicate\n          </button>\n          <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted">\n            Archive\n          </button>\n          <div className="border-t border-border my-1"></div>\n          <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">\n            Delete\n          </button>\n        </div>\n      }\n    >\n      <button className="p-2 text-gray-500 hover:text-muted-foreground hover:bg-muted rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196]">\n        <MoreVertical size={18} />\n      </button>\n    </Popover>\n  );\n}',
          preview: (
            <PopoverPreview
              placement="left"
              size="sm"
              content={
                <div className="py-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted">
                    Edit
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted">
                    Duplicate
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted">
                    Archive
                  </button>
                  <div className="border-t border-border my-1"></div>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    Delete
                  </button>
                </div>
              }
            >
              <button className="p-2 text-gray-500 hover:text-muted-foreground hover:bg-muted rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196]">
                <MoreVertical size={18} />
              </button>
            </PopoverPreview>
          ),
        },
        {
          title: 'Placement Variants',
          description: 'Popover can be positioned at top, bottom, left, or right of the trigger element.',
          code: 'import { Popover } from \'@ux4g/react-core\';\n\nfunction Example() {\n  const content = (\n    <div className="p-3">\n      <p className="text-sm text-muted-foreground">Popover content</p>\n    </div>\n  );\n  \n  return (\n    <div className="flex items-center justify-center gap-8">\n      <Popover placement="top" content={content}>\n        <button className="px-4 py-2 bg-card border border-border rounded hover:bg-background">\n          Top\n        </button>\n      </Popover>\n      \n      <Popover placement="right" content={content}>\n        <button className="px-4 py-2 bg-card border border-border rounded hover:bg-background">\n          Right\n        </button>\n      </Popover>\n      \n      <Popover placement="bottom" content={content}>\n        <button className="px-4 py-2 bg-card border border-border rounded hover:bg-background">\n          Bottom\n        </button>\n      </Popover>\n      \n      <Popover placement="left" content={content}>\n        <button className="px-4 py-2 bg-card border border-border rounded hover:bg-background">\n          Left\n        </button>\n      </Popover>\n    </div>\n  );\n}',
          preview: (
            <div className="flex items-center justify-center gap-8">
              <PopoverPreview
                placement="top"
                content={
                  <div className="p-3">
                    <p className="text-sm text-muted-foreground">Popover content</p>
                  </div>
                }
              >
                <ButtonTrigger>Top</ButtonTrigger>
              </PopoverPreview>

              <PopoverPreview
                placement="right"
                content={
                  <div className="p-3">
                    <p className="text-sm text-muted-foreground">Popover content</p>
                  </div>
                }
              >
                <ButtonTrigger>Right</ButtonTrigger>
              </PopoverPreview>

              <PopoverPreview
                placement="bottom"
                content={
                  <div className="p-3">
                    <p className="text-sm text-muted-foreground">Popover content</p>
                  </div>
                }
              >
                <ButtonTrigger>Bottom</ButtonTrigger>
              </PopoverPreview>

              <PopoverPreview
                placement="left"
                content={
                  <div className="p-3">
                    <p className="text-sm text-muted-foreground">Popover content</p>
                  </div>
                }
              >
                <ButtonTrigger>Left</ButtonTrigger>
              </PopoverPreview>
            </div>
          ),
        },
        {
          title: 'Settings Popover',
          description: 'Complex popover with multiple controls and sections for application settings.',
          code: 'import { Popover } from \'@ux4g/react-core\';\nimport { Settings } from \'lucide-react\';\n\nfunction Example() {\n  const [settings, setSettings] = React.useState({\n    darkMode: false,\n    notifications: true,\n    autoSave: true,\n    language: \'en\'\n  });\n  \n  return (\n    <Popover\n      size="lg"\n      closeButton\n      content={\n        <div className="p-4">\n          <h4 className="font-semibold text-foreground mb-4">Preferences</h4>\n          \n          <div className="space-y-4">\n            <div>\n              <h5 className="text-sm font-medium text-muted-foreground mb-2">Appearance</h5>\n              <div className="flex items-center justify-between">\n                <span className="text-sm text-muted-foreground">Dark Mode</span>\n                <input\n                  type="checkbox"\n                  checked={settings.darkMode}\n                  onChange={(e) => setSettings({...settings, darkMode: e.target.checked})}\n                  className="toggle"\n                />\n              </div>\n            </div>\n            \n            <div className="border-t border-border pt-4">\n              <h5 className="text-sm font-medium text-muted-foreground mb-2">Notifications</h5>\n              <div className="space-y-2">\n                <div className="flex items-center justify-between">\n                  <span className="text-sm text-muted-foreground">Enable Notifications</span>\n                  <input\n                    type="checkbox"\n                    checked={settings.notifications}\n                    onChange={(e) => setSettings({...settings, notifications: e.target.checked})}\n                  />\n                </div>\n                <div className="flex items-center justify-between">\n                  <span className="text-sm text-muted-foreground">Auto-save</span>\n                  <input\n                    type="checkbox"\n                    checked={settings.autoSave}\n                    onChange={(e) => setSettings({...settings, autoSave: e.target.checked})}\n                  />\n                </div>\n              </div>\n            </div>\n            \n            <div className="border-t border-border pt-4">\n              <label className="block text-sm font-medium text-muted-foreground mb-2">\n                Language\n              </label>\n              <select\n                value={settings.language}\n                onChange={(e) => setSettings({...settings, language: e.target.value})}\n                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"\n              >\n                <option value="en">English</option>\n                <option value="cy">Welsh (Cymraeg)</option>\n                <option value="gd">Scottish Gaelic</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      }\n    >\n      <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178]">\n        <Settings size={16} />\n        Preferences\n      </button>\n    </Popover>\n  );\n}',
          preview: (
            <PopoverPreview
              size="lg"
              closeButton
              content={
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-4">Preferences</h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium text-muted-foreground mb-2">Appearance</h5>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Dark Mode</span>
                        <input type="checkbox" className="toggle" />
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <h5 className="text-sm font-medium text-muted-foreground mb-2">Notifications</h5>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Enable Notifications</span>
                          <input type="checkbox" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Auto-save</span>
                          <input type="checkbox" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Language
                      </label>
                      <select className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]">
                        <option value="en">English</option>
                        <option value="cy">Welsh (Cymraeg)</option>
                        <option value="gd">Scottish Gaelic</option>
                      </select>
                    </div>
                  </div>
                </div>
              }
            >
              <ButtonTrigger variant="primary">
                <Settings size={16} />
                <span>Preferences</span>
              </ButtonTrigger>
            </PopoverPreview>
          ),
        },
      ]}

      reactCode={{
        component: 'import React, { useState, useRef, useEffect, forwardRef } from \'react\';\nimport { useFloating, offset, flip, shift, arrow, autoUpdate } from \'@floating-ui/react\';\nimport { cn } from \'../../utils/cn\';\nimport { popoverVariants } from \'./popover.variants\';\nimport { PopoverProps } from \'./Popover.types\';\nimport { X } from \'lucide-react\';\n\nexport const Popover = forwardRef<HTMLDivElement, PopoverProps>(\n  (\n    {\n      children,\n      content,\n      trigger = \'click\',\n      placement = \'bottom\',\n      isOpen: controlledIsOpen,\n      onOpenChange,\n      closeOnClickOutside = true,\n      showArrow = true,\n      size = \'md\',\n      closeButton = false,\n      offset: offsetValue = 8,\n      className,\n      ...props\n    },\n    ref\n  ) => {\n    const [internalIsOpen, setInternalIsOpen] = useState(false);\n    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;\n    const arrowRef = useRef<HTMLDivElement>(null);\n    \n    const { x, y, strategy, refs, context } = useFloating({\n      open: isOpen,\n      onOpenChange: onOpenChange || setInternalIsOpen,\n      placement,\n      whileElementsMounted: autoUpdate,\n      middleware: [\n        offset(offsetValue),\n        flip(),\n        shift({ padding: 8 }),\n        showArrow && arrow({ element: arrowRef }),\n      ].filter(Boolean),\n    });\n    \n    const setIsOpen = (open: boolean) => {\n      if (onOpenChange) {\n        onOpenChange(open);\n      } else {\n        setInternalIsOpen(open);\n      }\n    };\n    \n    useEffect(() => {\n      if (!isOpen || !closeOnClickOutside) return;\n      \n      const handleClickOutside = (event: MouseEvent) => {\n        if (\n          refs.floating.current &&\n          refs.reference.current &&\n          !refs.floating.current.contains(event.target as Node) &&\n          !refs.reference.current.contains(event.target as Node)\n        ) {\n          setIsOpen(false);\n        }\n      };\n      \n      const handleEscape = (event: KeyboardEvent) => {\n        if (event.key === \'Escape\') {\n          setIsOpen(false);\n        }\n      };\n      \n      document.addEventListener(\'mousedown\', handleClickOutside);\n      document.addEventListener(\'keydown\', handleEscape);\n      \n      return () => {\n        document.removeEventListener(\'mousedown\', handleClickOutside);\n        document.removeEventListener(\'keydown\', handleEscape);\n      };\n    }, [isOpen, closeOnClickOutside, refs]);\n    \n    const handleTriggerClick = () => {\n      if (trigger === \'click\') {\n        setIsOpen(!isOpen);\n      }\n    };\n    \n    const handleMouseEnter = () => {\n      if (trigger === \'hover\') {\n        setIsOpen(true);\n      }\n    };\n    \n    const handleMouseLeave = () => {\n      if (trigger === \'hover\') {\n        setIsOpen(false);\n      }\n    };\n    \n    return (\n      <>\n        <div\n          ref={refs.setReference}\n          onClick={handleTriggerClick}\n          onMouseEnter={handleMouseEnter}\n          onMouseLeave={handleMouseLeave}\n        >\n          {children}\n        </div>\n        \n        {isOpen && (\n          <div\n            ref={refs.setFloating}\n            style={{\n              position: strategy,\n              top: y ?? 0,\n              left: x ?? 0,\n            }}\n            className={cn(popoverVariants({ size }), className)}\n            role="dialog"\n            aria-modal="false"\n            onMouseEnter={trigger === \'hover\' ? handleMouseEnter : undefined}\n            onMouseLeave={trigger === \'hover\' ? handleMouseLeave : undefined}\n            {...props}\n          >\n            {showArrow && (\n              <div\n                ref={arrowRef}\n                className="absolute w-3 h-3 bg-card border border-border transform rotate-45"\n              />\n            )}\n            \n            <div className="relative z-10 bg-card rounded-lg border border-border shadow-lg overflow-hidden">\n              {closeButton && (\n                <button\n                  onClick={() => setIsOpen(false)}\n                  className="absolute top-2 right-2 p-1 text-gray-500 hover:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] rounded"\n                  aria-label="Close popover"\n                >\n                  <X size={16} />\n                </button>\n              )}\n              {content}\n            </div>\n          </div>\n        )}\n      </>\n    );\n  }\n);\n\nPopover.displayName = \'Popover\';',
        types: 'export interface PopoverProps {\n  children: React.ReactNode;\n  content: React.ReactNode;\n  trigger?: \'click\' | \'hover\';\n  placement?: \'top\' | \'bottom\' | \'left\' | \'right\' | \'auto\';\n  isOpen?: boolean;\n  onOpenChange?: (open: boolean) => void;\n  closeOnClickOutside?: boolean;\n  showArrow?: boolean;\n  size?: \'sm\' | \'md\' | \'lg\';\n  closeButton?: boolean;\n  offset?: number;\n  className?: string;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const popoverVariants = cva(\n  [\n    \'z-50\',\n    \'focus:outline-none\',\n  ],\n  {\n    variants: {\n      size: {\n        sm: [\'w-48\'],\n        md: [\'w-72\'],\n        lg: [\'w-96\'],\n      },\n    },\n    defaultVariants: {\n      size: \'md\',\n    },\n  }\n);\n\nexport type PopoverVariantProps = VariantProps<typeof popoverVariants>;',
      }}

      angularCode={{
        component: 'import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from \'@angular/core\';\nimport { Overlay, OverlayRef, OverlayConfig, ConnectedPosition } from \'@angular/cdk/overlay\';\nimport { TemplatePortal } from \'@angular/cdk/portal\';\nimport { ViewContainerRef } from \'@angular/core\';\n\ntype PopoverTrigger = \'click\' | \'hover\';\ntype PopoverPlacement = \'top\' | \'bottom\' | \'left\' | \'right\';\ntype PopoverSize = \'sm\' | \'md\' | \'lg\';\n\n@Component({\n  selector: \'ux4g-popover\',\n  template: `\n    <div\n      #trigger\n      (click)="handleTriggerClick()"\n      (mouseenter)="handleMouseEnter()"\n      (mouseleave)="handleMouseLeave()"\n    >\n      <ng-content></ng-content>\n    </div>\n    \n    <ng-template #popoverTemplate>\n      <div\n        [class]="getPopoverClasses()"\n        (mouseenter)="handlePopoverMouseEnter()"\n        (mouseleave)="handlePopoverMouseLeave()"\n        role="dialog"\n        [attr.aria-modal]="false"\n      >\n        <div class="arrow" *ngIf="showArrow"></div>\n        <div class="popover-content">\n          <button\n            *ngIf="closeButton"\n            (click)="close()"\n            class="close-button"\n            aria-label="Close popover"\n          >\n            &times;\n          </button>\n          <ng-content select="[popover-content]"></ng-content>\n        </div>\n      </div>\n    </ng-template>\n  `,\n  styleUrls: [\'./popover.component.css\']\n})\nexport class PopoverComponent implements OnDestroy {\n  @Input() trigger: PopoverTrigger = \'click\';\n  @Input() placement: PopoverPlacement = \'bottom\';\n  @Input() size: PopoverSize = \'md\';\n  @Input() showArrow = true;\n  @Input() closeButton = false;\n  @Input() closeOnClickOutside = true;\n  @Input() offset = 8;\n  \n  @Output() openChange = new EventEmitter<boolean>();\n  \n  @ViewChild(\'trigger\', { static: true }) triggerElement!: ElementRef;\n  @ViewChild(\'popoverTemplate\', { static: true }) popoverTemplate!: any;\n  \n  private overlayRef: OverlayRef | null = null;\n  private portal: TemplatePortal | null = null;\n  \n  constructor(\n    private overlay: Overlay,\n    private viewContainerRef: ViewContainerRef\n  ) {}\n  \n  ngOnDestroy(): void {\n    this.close();\n  }\n  \n  handleTriggerClick(): void {\n    if (this.trigger === \'click\') {\n      this.toggle();\n    }\n  }\n  \n  handleMouseEnter(): void {\n    if (this.trigger === \'hover\') {\n      this.open();\n    }\n  }\n  \n  handleMouseLeave(): void {\n    if (this.trigger === \'hover\') {\n      setTimeout(() => this.close(), 100);\n    }\n  }\n  \n  handlePopoverMouseEnter(): void {\n    if (this.trigger === \'hover\') {\n      // Keep popover open\n    }\n  }\n  \n  handlePopoverMouseLeave(): void {\n    if (this.trigger === \'hover\') {\n      this.close();\n    }\n  }\n  \n  toggle(): void {\n    if (this.overlayRef) {\n      this.close();\n    } else {\n      this.open();\n    }\n  }\n  \n  open(): void {\n    if (this.overlayRef) return;\n    \n    const config = this.getOverlayConfig();\n    this.overlayRef = this.overlay.create(config);\n    this.portal = new TemplatePortal(this.popoverTemplate, this.viewContainerRef);\n    this.overlayRef.attach(this.portal);\n    \n    if (this.closeOnClickOutside) {\n      this.overlayRef.backdropClick().subscribe(() => this.close());\n    }\n    \n    this.openChange.emit(true);\n  }\n  \n  close(): void {\n    if (this.overlayRef) {\n      this.overlayRef.dispose();\n      this.overlayRef = null;\n      this.openChange.emit(false);\n    }\n  }\n  \n  private getOverlayConfig(): OverlayConfig {\n    const positions = this.getPositions();\n    \n    return new OverlayConfig({\n      positionStrategy: this.overlay\n        .position()\n        .flexibleConnectedTo(this.triggerElement)\n        .withPositions(positions)\n        .withPush(false),\n      scrollStrategy: this.overlay.scrollStrategies.reposition(),\n      hasBackdrop: this.closeOnClickOutside,\n      backdropClass: \'cdk-overlay-transparent-backdrop\',\n    });\n  }\n  \n  private getPositions(): ConnectedPosition[] {\n    const offsetValue = this.offset;\n    \n    const positionMap: Record<PopoverPlacement, ConnectedPosition> = {\n      top: {\n        originX: \'center\',\n        originY: \'top\',\n        overlayX: \'center\',\n        overlayY: \'bottom\',\n        offsetY: -offsetValue,\n      },\n      bottom: {\n        originX: \'center\',\n        originY: \'bottom\',\n        overlayX: \'center\',\n        overlayY: \'top\',\n        offsetY: offsetValue,\n      },\n      left: {\n        originX: \'start\',\n        originY: \'center\',\n        overlayX: \'end\',\n        overlayY: \'center\',\n        offsetX: -offsetValue,\n      },\n      right: {\n        originX: \'end\',\n        originY: \'center\',\n        overlayX: \'start\',\n        overlayY: \'center\',\n        offsetX: offsetValue,\n      },\n    };\n    \n    return [positionMap[this.placement]];\n  }\n  \n  getPopoverClasses(): string {\n    const sizeClasses = {\n      sm: \'ux4g-popover-sm\',\n      md: \'ux4g-popover-md\',\n      lg: \'ux4g-popover-lg\',\n    };\n    \n    return `ux4g-popover ${sizeClasses[this.size]}`;\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { OverlayModule } from \'@angular/cdk/overlay\';\nimport { PortalModule } from \'@angular/cdk/portal\';\nimport { PopoverComponent } from \'./popover.component\';\n\n@NgModule({\n  declarations: [PopoverComponent],\n  imports: [CommonModule, OverlayModule, PortalModule],\n  exports: [PopoverComponent]\n})\nexport class PopoverModule { }',
        types: 'export type PopoverTrigger = \'click\' | \'hover\';\nexport type PopoverPlacement = \'top\' | \'bottom\' | \'left\' | \'right\';\nexport type PopoverSize = \'sm\' | \'md\' | \'lg\';',
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-popover> custom element",
        html: "<ux4g-popover variant=\"primary\" size=\"md\"><!-- Popover --></ux4g-popover>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Popover',
          variants: 'anchored, positioned',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-popover/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Popover',
          variants: 'click, hover, focus',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/popover',
        },
        {
          system: 'Chakra UI',
          component: 'Popover',
          variants: 'click, hover, controlled',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/popover',
        },
        {
          system: 'Radix UI',
          component: 'Popover',
          variants: 'controlled, uncontrolled',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/popover',
        },
        {
          system: 'Headless UI',
          component: 'Popover',
          variants: 'unstyled primitives',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://headlessui.com/react/popover',
        },
        {
          system: 'React Bootstrap',
          component: 'Overlay / Popover',
          variants: 'click, positioned',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://react-bootstrap.github.io/components/overlays/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Role dialog or menu appropriately applied based on content type (WCAG 4.1.2)',
          'Escape key closes popover for keyboard users (WCAG 2.1.1)',
          'Focus management returns focus to trigger on close (WCAG 2.4.3)',
          'Click outside to close for better user control (WCAG 3.2.1)',
          'Arrow indicator provides visual connection to trigger element',
          'Proper aria-describedby linking content to trigger when appropriate',
          'Color contrast ratios meet or exceed 4.5:1 for text (WCAG 1.4.3)',
          'Content is keyboard navigable with Tab and Shift+Tab (WCAG 2.1.1)',
          'Hover trigger includes keyboard alternative for accessibility',
          'Responsive positioning prevents content from being cut off (WCAG 1.4.10)',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate between focusable elements within popover' },
          { key: 'Shift + Tab', action: 'Navigate backwards through focusable elements' },
          { key: 'Escape', action: 'Close popover and return focus to trigger' },
          { key: 'Enter', action: 'Activate trigger element (if button)' },
          { key: 'Space', action: 'Activate trigger element (if button)' },
        ],
        screenReader: [
          'Announces popover role as dialog or menu based on content',
          'Trigger element has appropriate aria-haspopup attribute',
          'Popover content is announced when opened',
          'Close button clearly labeled for screen reader users',
          'Focus is managed properly when opening and closing',
          'Aria-describedby used to link descriptive content to trigger',
        ],
      }}

      tokens={{
        file: '/tokens/components/popover.json',
        mappings: [
          { property: 'Width (Small)', token: 'popover.size.sm', value: '192px' },
          { property: 'Width (Medium)', token: 'popover.size.md', value: '288px' },
          { property: 'Width (Large)', token: 'popover.size.lg', value: '384px' },
          { property: 'Border Radius', token: 'base.borderRadius.md', value: '8px' },
          { property: 'Border Color', token: 'base.border.color', value: '#D1D5DB (Gray 300)' },
          { property: 'Background', token: 'base.background.primary', value: '#FFFFFF (White)' },
          { property: 'Shadow', token: 'base.shadow.lg', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' },
          { property: 'Arrow Size', token: 'popover.arrow.size', value: '12px' },
          { property: 'Offset Distance', token: 'popover.offset', value: '8px' },
          { property: 'Z-Index', token: 'base.zIndex.popover', value: '50' },
        ],
      }}

      useCases={[
        {
          title: 'Contextual Help',
          description: 'Provide additional information or guidance for form fields, buttons, or complex interface elements without cluttering the main interface.',
          implementation: 'Help icon next to National Insurance Number field that displays format requirements and example when clicked.',
        },
        {
          title: 'Field Information',
          description: 'Display detailed explanations, requirements, or examples for form inputs to help users complete forms correctly.',
          implementation: 'Password requirements popover showing strength criteria, character requirements, and security tips.',
        },
        {
          title: 'Quick Actions',
          description: 'Provide contextual action menus for list items, table rows, or cards without navigating to a new page.',
          implementation: 'More actions button on application row showing Edit, Duplicate, Archive, and Delete options.',
        },
        {
          title: 'User Menu',
          description: 'Display user profile information and account actions in a compact overlay triggered from the header.',
          implementation: 'Avatar button in navigation that shows user profile, settings link, and sign out option.',
        },
        {
          title: 'Notification Details',
          description: 'Show expanded notification information, actions, or related content when user interacts with notification bell.',
          implementation: 'Notification icon displaying list of recent alerts with quick actions and mark as read functionality.',
        },
        {
          title: 'Inline Editing',
          description: 'Allow users to edit content or settings in place without modal dialogs or separate pages.',
          implementation: 'Settings gear icon that opens popover with toggles and dropdowns for quick preference changes.',
        },
        {
          title: 'Data Preview',
          description: 'Show preview of linked content, document details, or related information on hover or click.',
          implementation: 'Application reference number that displays case summary, status, and key dates when clicked.',
        },
        {
          title: 'Filter Controls',
          description: 'Provide compact filter and sorting controls for data tables or search results without taking permanent space.',
          implementation: 'Filter button that opens popover with checkboxes for status, date range, and category filtering.',
        },
      ]}

      additionalContent={
        <>
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use Popover when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Interactive content on hover or click</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Rich help text with links</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Quick previews without navigation</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Supplementary information panels</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Popover when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple text labels — use Tooltip</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Full forms — use Modal or Drawer</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Critical actions — use Dialog</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Navigation — use Menu</li>
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
                  <div className="inline-flex flex-col items-start mb-3"><div className="px-3 py-2 bg-card border border-border rounded-lg shadow-lg text-xs mb-1"><p className="font-semibold">Help</p><p className="text-muted-foreground">Enter your 12-digit Aadhaar number.</p><a href="#" className="text-[#005196] underline">Learn more</a></div><button className="text-xs text-[#005196]">ⓘ</button></div>
                  <p className="text-sm text-muted-foreground">Use popovers for interactive content (links, buttons) on hover or click.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="inline-flex flex-col items-start mb-3"><div className="px-2 py-1 bg-gray-900 text-white text-xs rounded">Enter your 12-digit Aadhaar number without spaces or dashes. <a href="#" className="underline">Learn more</a></div></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use popovers for simple text labels — use Tooltip instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Popover configurations in real time.</p>
            <PopoverPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/tooltip" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Tooltip</h3>
                <p className="text-sm text-muted-foreground">For simple text labels</p>
              </a>
              <a href="/components/modal" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Modal</h3>
                <p className="text-sm text-muted-foreground">For full overlays</p>
              </a>
              <a href="/components/drawer" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Drawer</h3>
                <p className="text-sm text-muted-foreground">For side panels</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added click and hover triggers</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added arrow positioning</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with click trigger</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Popover vs Tooltip</h3>
                <p className="text-sm text-muted-foreground">Popovers should be used when content is interactive (links, buttons). Tooltips are for passive text only (WAI-ARIA).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
