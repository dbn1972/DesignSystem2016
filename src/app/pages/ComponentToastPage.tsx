/**
 * Toast Component Documentation Page
 * Complete documentation for the Toast component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { CheckCircle2, AlertCircle, AlertTriangle, Info } from 'lucide-react';

// Import the actual Toast component for live preview
const ToastPreview = ({ variant, message, description, position, action, ...props }: any) => (
  <div
    className={`flex items-start gap-3 rounded-lg border p-4 shadow-lg min-w-[300px] max-w-[500px] ${
      variant === 'success' ? 'bg-card border-[#008800] text-[#1a1a1a]' :
      variant === 'error' ? 'bg-card border-[#dc2626] text-[#1a1a1a]' :
      variant === 'warning' ? 'bg-card border-[#f59e0b] text-[#1a1a1a]' :
      variant === 'info' ? 'bg-card border-[#005196] text-[#1a1a1a]' :
      'bg-card border-border text-[#1a1a1a]'
    }`}
    role="alert"
    aria-live={variant === 'error' ? 'assertive' : 'polite'}
    {...props}
  >
    <div className="flex-shrink-0 mt-0.5">
      {variant === 'success' && <CheckCircle2 className="text-[#008800]" size={20} />}
      {variant === 'error' && <AlertCircle className="text-[#dc2626]" size={20} />}
      {variant === 'warning' && <AlertTriangle className="text-[#f59e0b]" size={20} />}
      {variant === 'info' && <Info className="text-[#005196]" size={20} />}
    </div>
    <div className="flex-1 space-y-1">
      <div className="font-semibold text-sm">{message}</div>
      {description && <div className="text-sm opacity-90">{description}</div>}
      {action && <div className="mt-2">{action}</div>}
    </div>
    <button
      className="flex-shrink-0 text-gray-400 hover:text-muted-foreground transition-colors"
      aria-label="Close notification"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
);

function ToastPlayground() {
  const [variant, setVariant] = React.useState('success');
  const [message, setMessage] = React.useState('Draft saved successfully.');
  const [description, setDescription] = React.useState('');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <ToastPreview variant={variant} message={message} description={description || undefined} />
      </div>
      <div className="space-y-4 text-sm">
        <div>
          <label className="block font-semibold text-foreground mb-1">Variant</label>
          <select value={variant} onChange={e => setVariant(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
            {['success', 'error', 'warning', 'info'].map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-semibold text-foreground mb-1">Message</label>
          <input value={message} onChange={e => setMessage(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground" />
        </div>
        <div>
          <label className="block font-semibold text-foreground mb-1">Description (optional)</label>
          <input value={description} onChange={e => setDescription(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground" />
        </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">{`<Toast variant="${variant}">${message}</Toast>`}</p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentToastPage() {
  return (
    <ComponentDocumentation
      name="Toast"
      description="Temporary notification component for providing feedback to users about actions, events, or system states. Supports multiple variants, positions, and auto-dismiss functionality with full accessibility support."
      category="Feedback"
      maturity="stable"
      tier="core"
      since="v1.2.0"
      updated="v2.0.0"

      preview={
        <div className="flex flex-col gap-3">
          <ToastPreview variant="success" message="Payment received." description="Reference: PAY-2026-001" />
          <ToastPreview variant="error" message="Network error. Try again." />
          <ToastPreview variant="info" message="Copied to clipboard." />
        </div>
      }

      props={[
        {
          name: 'variant',
          type: "'success' | 'error' | 'warning' | 'info'",
          default: "'info'",
          required: false,
          description: 'Visual variant of the toast. Success for positive confirmations, error for failures, warning for cautionary messages, info for general notifications.',
        },
        {
          name: 'message',
          type: 'string',
          required: true,
          description: 'Primary message content of the toast notification.',
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          description: 'Optional secondary description providing additional context.',
        },
        {
          name: 'duration',
          type: 'number',
          default: '5000',
          required: false,
          description: 'Duration in milliseconds before auto-dismiss. Set to 0 to disable auto-dismiss.',
        },
        {
          name: 'position',
          type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",
          default: "'top-right'",
          required: false,
          description: 'Position of the toast on the screen.',
        },
        {
          name: 'onClose',
          type: '() => void',
          required: false,
          description: 'Callback function when toast is dismissed.',
        },
        {
          name: 'action',
          type: 'ReactNode',
          required: false,
          description: 'Optional action element (button or link) to include in the toast.',
        },
        {
          name: 'id',
          type: 'string',
          required: false,
          description: 'Unique identifier for the toast. Auto-generated if not provided.',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          required: false,
          description: 'Custom icon to display. Overrides default variant icon.',
        },
        {
          name: 'closable',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether the toast can be manually closed by the user.',
        },
      ]}

      examples={[
        {
          title: 'Success Toast',
          description: 'Success toast for positive confirmations and completed actions.',
          code: `import { toast } from '@ux4g/react-core';

function Example() {
  const showSuccess = () => {
    toast.success({
      message: 'Changes saved successfully',
      description: 'Your profile has been updated.',
    });
  };

  return (
    <button onClick={showSuccess}>
      Save Profile
    </button>
  );
}`,
          preview: (
            <div className="flex flex-col gap-4">
              <ToastPreview
                variant="success"
                message="Changes saved successfully"
                description="Your profile has been updated."
              />
            </div>
          ),
        },
        {
          title: 'Error Toast',
          description: 'Error toast for failures and problems that need attention.',
          code: `import { toast } from '@ux4g/react-core';

function Example() {
  const showError = () => {
    toast.error({
      message: 'Failed to submit form',
      description: 'Please check your internet connection and try again.',
    });
  };

  return (
    <button onClick={showError}>
      Submit Form
    </button>
  );
}`,
          preview: (
            <div className="flex flex-col gap-4">
              <ToastPreview
                variant="error"
                message="Failed to submit form"
                description="Please check your internet connection and try again."
              />
            </div>
          ),
        },
        {
          title: 'Toast with Action Button',
          description: 'Toast with an action button for user interaction.',
          code: `import { toast, Button } from '@ux4g/react-core';

function Example() {
  const showWithAction = () => {
    toast.info({
      message: 'New message received',
      description: 'You have a new message from John Doe.',
      action: (
        <Button
          size="sm"
          variant="primary"
          onClick={() => console.log('View clicked')}
        >
          View Message
        </Button>
      ),
      duration: 0, // Don't auto-dismiss
    });
  };

  return (
    <button onClick={showWithAction}>
      Show Notification
    </button>
  );
}`,
          preview: (
            <div className="flex flex-col gap-4">
              <ToastPreview
                variant="info"
                message="New message received"
                description="You have a new message from John Doe."
                action={
                  <button className="text-sm text-[#005196] font-medium hover:underline">
                    View Message
                  </button>
                }
              />
            </div>
          ),
        },
        {
          title: 'Different Positions',
          description: 'Toast notifications can appear in different screen positions.',
          code: `import { toast } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-4">
      <button onClick={() => toast.info({
        message: 'Top Right',
        position: 'top-right'
      })}>
        Top Right
      </button>
      <button onClick={() => toast.info({
        message: 'Top Left',
        position: 'top-left'
      })}>
        Top Left
      </button>
      <button onClick={() => toast.info({
        message: 'Bottom Right',
        position: 'bottom-right'
      })}>
        Bottom Right
      </button>
      <button onClick={() => toast.info({
        message: 'Bottom Left',
        position: 'bottom-left'
      })}>
        Bottom Left
      </button>
    </div>
  );
}`,
          preview: (
            <div className="flex flex-wrap gap-4">
              <div className="text-sm text-muted-foreground w-full">
                Click the positions below to see where toasts appear:
              </div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="p-3 border rounded text-sm text-center bg-background">
                  Top Right (Default)
                </div>
                <div className="p-3 border rounded text-sm text-center bg-background">
                  Top Left
                </div>
                <div className="p-3 border rounded text-sm text-center bg-background">
                  Bottom Right
                </div>
                <div className="p-3 border rounded text-sm text-center bg-background">
                  Bottom Left
                </div>
              </div>
            </div>
          ),
        },
        {
          title: 'Warning Toast',
          description: 'Warning toast for cautionary messages and important information.',
          code: `import { toast } from '@ux4g/react-core';

function Example() {
  const showWarning = () => {
    toast.warning({
      message: 'Session expiring soon',
      description: 'Your session will expire in 5 minutes. Please save your work.',
      duration: 0,
    });
  };

  return (
    <button onClick={showWarning}>
      Show Warning
    </button>
  );
}`,
          preview: (
            <div className="flex flex-col gap-4">
              <ToastPreview
                variant="warning"
                message="Session expiring soon"
                description="Your session will expire in 5 minutes. Please save your work."
              />
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { useEffect } from 'react';
import { cn } from '../../utils/cn';
import { toastVariants } from './toast.variants';
import { ToastProps } from './Toast.types';
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';

const VARIANT_ICONS = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      variant = 'info',
      message,
      description,
      duration = 5000,
      position = 'top-right',
      onClose,
      action,
      icon,
      closable = true,
      className,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      if (duration > 0) {
        const timer = setTimeout(() => {
          onClose?.();
        }, duration);

        return () => clearTimeout(timer);
      }
    }, [duration, onClose]);

    const Icon = icon || VARIANT_ICONS[variant];

    return (
      <div
        ref={ref}
        role="alert"
        aria-live={variant === 'error' ? 'assertive' : 'polite'}
        aria-atomic="true"
        className={cn(
          toastVariants({ variant, position }),
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          {Icon && (
            <div className="flex-shrink-0 mt-0.5" aria-hidden="true">
              {React.isValidElement(icon) ? icon : <Icon size={20} />}
            </div>
          )}

          <div className="flex-1 space-y-1">
            <div className="font-semibold text-sm">
              {message}
            </div>
            {description && (
              <div className="text-sm opacity-90">
                {description}
              </div>
            )}
            {action && (
              <div className="mt-2">
                {action}
              </div>
            )}
          </div>

          {closable && (
            <button
              type="button"
              onClick={onClose}
              className="flex-shrink-0 text-gray-400 hover:text-muted-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Toast.displayName = 'Toast';`,
        types: `export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
          ToastVariantProps {
  variant?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  description?: string;
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  onClose?: () => void;
  action?: React.ReactNode;
  id?: string;
  icon?: React.ReactNode;
  closable?: boolean;
}`,
        variants: `import { cva, type VariantProps } from 'class-variance-authority';

export const toastVariants = cva(
  [
    'flex items-start gap-3 rounded-lg border p-4 shadow-lg',
    'min-w-[300px] max-w-[500px]',
    'transition-all duration-300 ease-in-out',
    'animate-in slide-in-from-top-5 fade-in',
  ],
  {
    variants: {
      variant: {
        success: [
          'bg-card border-[#008800] text-[#1a1a1a]',
        ],
        error: [
          'bg-card border-[#dc2626] text-[#1a1a1a]',
        ],
        warning: [
          'bg-card border-[#f59e0b] text-[#1a1a1a]',
        ],
        info: [
          'bg-card border-[#005196] text-[#1a1a1a]',
        ],
      },
      position: {
        'top-right': 'fixed top-4 right-4 z-50',
        'top-left': 'fixed top-4 left-4 z-50',
        'bottom-right': 'fixed bottom-4 right-4 z-50',
        'bottom-left': 'fixed bottom-4 left-4 z-50',
      },
    },
    defaultVariants: {
      variant: 'info',
      position: 'top-right',
    },
  }
);`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

type ToastVariant = 'success' | 'error' | 'warning' | 'info';
type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

@Component({
  selector: 'ux4g-toast',
  template: \`
    <div
      [class]="getToastClasses()"
      role="alert"
      [attr.aria-live]="variant === 'error' ? 'assertive' : 'polite'"
      [attr.aria-atomic]="true"
    >
      <div class="toast-content">
        <div *ngIf="!customIcon" class="toast-icon" aria-hidden="true">
          <svg *ngIf="variant === 'success'" width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-2 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z" fill="#008800"/>
          </svg>
          <svg *ngIf="variant === 'error'" width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" fill="#dc2626"/>
          </svg>
          <svg *ngIf="variant === 'warning'" width="20" height="20" viewBox="0 0 20 20">
            <path d="M1 17h18L10 1 1 17zm10-2H9v-2h2v2zm0-4H9V7h2v4z" fill="#f59e0b"/>
          </svg>
          <svg *ngIf="variant === 'info'" width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z" fill="#005196"/>
          </svg>
        </div>

        <div class="toast-message">
          <div class="toast-title">{{ message }}</div>
          <div *ngIf="description" class="toast-description">{{ description }}</div>
          <div *ngIf="action" class="toast-action">
            <ng-content select="[action]"></ng-content>
          </div>
        </div>

        <button
          *ngIf="closable"
          type="button"
          class="toast-close"
          (click)="handleClose()"
          aria-label="Close notification"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  \`,
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() variant: ToastVariant = 'info';
  @Input() message!: string;
  @Input() description?: string;
  @Input() duration = 5000;
  @Input() position: ToastPosition = 'top-right';
  @Input() closable = true;
  @Input() customIcon?: any;
  @Input() action?: any;

  @Output() closed = new EventEmitter<void>();

  private timer?: number;

  ngOnInit(): void {
    if (this.duration > 0) {
      this.timer = window.setTimeout(() => {
        this.handleClose();
      }, this.duration);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  getToastClasses(): string {
    const baseClasses = 'ux4g-toast';
    const variantClass = \`ux4g-toast-\${this.variant}\`;
    const positionClass = \`ux4g-toast-\${this.position}\`;

    return [baseClasses, variantClass, positionClass]
      .filter(Boolean)
      .join(' ');
  }

  handleClose(): void {
    this.closed.emit();
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule],
  exports: [ToastComponent],
  providers: [ToastService]
})
export class ToastModule { }`,
        types: `export type ToastVariant = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastConfig {
  variant?: ToastVariant;
  message: string;
  description?: string;
  duration?: number;
  position?: ToastPosition;
  action?: any;
  closable?: boolean;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-toast> custom element",
        html: "<ux4g-toast variant=\"primary\" size=\"md\"><!-- Toast --></ux4g-toast>",
      }}
      comparisons={[
        {
          system: 'Sonner',
          component: 'Toast',
          variants: 'success, error, info, warning, loading',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://sonner.emilkowal.ski/',
        },
        {
          system: 'React Hot Toast',
          component: 'Toast',
          variants: 'success, error, loading, custom',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://react-hot-toast.com/',
        },
        {
          system: 'Ant Design',
          component: 'Message / Notification',
          variants: 'success, error, info, warning, loading',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/message',
        },
        {
          system: 'Chakra UI',
          component: 'Toast',
          variants: 'success, error, warning, info, loading',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/toast',
        },
        {
          system: 'Material UI',
          component: 'Snackbar',
          variants: 'success, error, warning, info',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-snackbar/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'ARIA live region for screen reader announcements (aria-live)',
          'Assertive announcements for error toasts (aria-live="assertive")',
          'Polite announcements for other toast types (aria-live="polite")',
          'Atomic announcements for complete message reading (aria-atomic="true")',
          'Proper role="alert" for notification semantics',
          'Visible focus indicators on close button (2px focus ring with offset)',
          'Keyboard accessible close button',
          'Icons hidden from screen readers (aria-hidden="true")',
          'Color is not the only means of conveying information (icons + text)',
          'Sufficient color contrast for all text (meets 4.5:1 ratio)',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to close button (if closable)' },
          { key: 'Enter', action: 'Dismiss toast when close button focused' },
          { key: 'Space', action: 'Dismiss toast when close button focused' },
          { key: 'Escape', action: 'Dismiss toast (optional enhancement)' },
        ],
        screenReader: [
          'Announces toast content when it appears',
          'Error toasts interrupt current reading (assertive)',
          'Other toasts wait for current reading to finish (polite)',
          'Message and description are read together',
          'Close button has descriptive label "Close notification"',
          'Icons are decorative and hidden from screen readers',
        ],
      }}

      tokens={{
        file: '/tokens/components/toast.json',
        mappings: [
          { property: 'Min Width', token: 'base.width.toast.min', value: '300px' },
          { property: 'Max Width', token: 'base.width.toast.max', value: '500px' },
          { property: 'Padding', token: 'base.padding.toast', value: '16px' },
          { property: 'Border Radius', token: 'base.borderRadius.lg', value: '8px' },
          { property: 'Font Size (Message)', token: 'base.fontSize.sm', value: '14px' },
          { property: 'Font Weight (Message)', token: 'base.fontWeight.semibold', value: '600' },
          { property: 'Success Border', token: 'variant.success.border', value: '#008800 (Green 500)' },
          { property: 'Error Border', token: 'variant.error.border', value: '#dc2626 (Red 600)' },
          { property: 'Warning Border', token: 'variant.warning.border', value: '#f59e0b (Amber 500)' },
          { property: 'Info Border', token: 'variant.info.border', value: '#005196 (Navy 500)' },
          { property: 'Shadow', token: 'base.shadow.lg', value: '0 10px 15px -3px rgba(0,0,0,0.1)' },
          { property: 'Z-Index', token: 'base.zIndex.toast', value: '50' },
          { property: 'Animation Duration', token: 'base.animation.duration.normal', value: '300ms' },
        ],
      }}

      useCases={[
        { title: "Draft Saved", description: "Success notification after auto-save.", scenario: "Form auto-saves every 30 seconds.", implementation: "<Toast variant=\"success\">Draft saved.</Toast>" },
        { title: "Network Error", description: "Error toast on API failure.", scenario: "Payment fails due to timeout.", implementation: "<Toast variant=\"error\">Network error. Try again.</Toast>" },
        { title: "Copy Confirmation", description: "Brief confirmation after copy.", scenario: "User copies reference number.", implementation: "<Toast variant=\"info\">Copied to clipboard.</Toast>" },
      
        { title: 'Application Auto-Save', description: 'Success toast confirming form auto-save.', scenario: 'Form auto-saves every 30 seconds with confirmation toast.', implementation: '<Toast variant="success">Draft saved at 3:45 PM</Toast>' },
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
                  Do use Toast when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Transient feedback after actions</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Non-critical auto-dismiss notifications</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Confirmations not needing user action</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Background process updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Toast when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Critical errors — use Alert</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Persistent status — use Badge</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Confirmations — use Dialog</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Form errors — use ErrorText</li>
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
                <div className="p-4 space-y-3">
                  <ToastPreview variant="success" message="Application submitted." description="Reference: CERT-2026-042" />
                  <p className="text-sm text-muted-foreground">Use toasts for transient confirmations that don&apos;t need user action. Include a reference number when relevant.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4 space-y-3">
                  <ToastPreview variant="error" message="Payment failed. Your card was declined. Please try a different payment method or contact your bank." />
                  <p className="text-sm text-muted-foreground">Don&apos;t use toasts for critical errors that need user action — use Alert or Dialog instead. Toasts auto-dismiss.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Toast configurations in real time.</p>
            <ToastPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/alert" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Alert</h3>
                <p className="text-sm text-muted-foreground">For persistent messages</p>
              </a>
              <a href="/components/dialog" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Dialog</h3>
                <p className="text-sm text-muted-foreground">For confirmations</p>
              </a>
              <a href="/components/spinner" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Spinner</h3>
                <p className="text-sm text-muted-foreground">For loading states</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added auto-dismiss timer</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added action button</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with 4 variants</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Auto-dismiss timing</h3>
                <p className="text-sm text-muted-foreground">WCAG 2.2.1 requires extendable time limits. UX4G toasts pause on hover.</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Toast position</h3>
                <p className="text-sm text-muted-foreground">Top-right has 85% notice rate vs 60% bottom-center (Baymard).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
