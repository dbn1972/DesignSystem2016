/**
 * Alert Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';
import { CheckCircle, Info, AlertCircle, X } from 'lucide-react';

const AlertPreview = ({ variant = 'info', children }: any) => {
  const [visible, setVisible] = React.useState(true);
  const variants = {
    success: { bg: 'bg-green-50 dark:bg-green-950/30', border: 'border-green-200 dark:border-green-800', icon: <CheckCircle className="text-[#138808]" size={20} /> },
    info: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-800', icon: <Info className="text-[#005196]" size={20} /> },
    warning: { bg: 'bg-yellow-50 dark:bg-yellow-950/30', border: 'border-yellow-200 dark:border-yellow-800', icon: <AlertCircle className="text-yellow-600" size={20} /> },
    error: { bg: 'bg-red-50 dark:bg-red-950/30', border: 'border-red-200 dark:border-red-800', icon: <AlertCircle className="text-red-600" size={20} /> },
  };
  
  if (!visible) return null;
  const config = variants[variant as keyof typeof variants];
  
  return (
    <div className={`${config.bg} ${config.border} border rounded-lg p-4 flex items-start gap-3`}>
      {config.icon}
      <div className="flex-1">
        {children}
      </div>
      <button onClick={() => setVisible(false)} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Dismiss alert">
        <X size={20} />
      </button>
    </div>
  );
};

const ALERT_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  {
    name: 'variant',
    label: 'Variant',
    type: 'select',
    defaultValue: 'info',
    options: ['info', 'success', 'warning', 'error'],
  },
  {
    name: 'dismissible',
    label: 'Dismissible',
    type: 'boolean',
    defaultValue: true,
  },
  {
    name: 'message',
    label: 'Message',
    type: 'text',
    defaultValue: 'Your application has been submitted successfully.',
  },
];

function AlertPlayground() {
  return (
    <ComponentPlayground
      name="Alert"
      controls={ALERT_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg w-full max-w-lg">
          <AlertPreview variant={v.variant}>{v.message}</AlertPreview>
        </div>
      )}
      codeTemplate={(v) =>
        `<Alert variant="${v.variant}"${v.dismissible ? ' dismissible' : ''}>${v.message}</Alert>`}
    />
  );
}

export default function ComponentAlertPage() {
  return (
    <ComponentDocumentation
      name="Alert"
      description="Feedback component to display important messages, notifications, and system status to users. Supports multiple severity levels with appropriate visual styling."
      category="Feedback"
      maturity="stable"
      tier="core"
      since="v1.0.0"

      preview={
        <div className="flex flex-col gap-3 w-full max-w-lg">
          <AlertPreview variant="success">Payment received successfully.</AlertPreview>
          <AlertPreview variant="error">Please fix the errors below.</AlertPreview>
          <AlertPreview variant="warning">Service unavailable Sunday 2-6 AM.</AlertPreview>
        </div>
      }
      
      props={[
        {
          name: 'variant',
          type: "'neutral' | 'info' | 'success' | 'warning' | 'error'",
          default: "'info'",
          required: false,
          description: 'Status variant indicating message severity.',
        },
        {
          name: 'title',
          type: 'ReactNode',
          required: false,
          description: 'Alert title/heading displayed prominently.',
        },
        {
          name: 'description',
          type: 'ReactNode',
          required: false,
          description: 'Alert description or message body.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: false,
          description: 'Alert content. Alternative to description prop.',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          required: false,
          description: 'Custom icon element. Overrides the default status icon.',
        },
        {
          name: 'showIcon',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to show the status icon.',
        },
        {
          name: 'onClose',
          type: '() => void',
          required: false,
          description: 'Close button handler. Shows a close button when provided.',
        },
        {
          name: 'closeLabel',
          type: 'string',
          default: "'Close alert'",
          required: false,
          description: 'Accessible label for the close button.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
      ]}
      
      examples={[
        {
          title: 'Alert Variants',
          description: 'Four severity levels for different message types.',
          code: `import { Alert } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <Alert variant="success" title="Success">
        Your application has been submitted successfully.
      </Alert>
      
      <Alert variant="info" title="Information">
        Please complete your profile to continue.
      </Alert>
      
      <Alert variant="warning" title="Warning">
        Your session will expire in 5 minutes.
      </Alert>
      
      <Alert variant="error" title="Error">
        Unable to process your request. Please try again.
      </Alert>
    </div>
  );
}`,
          preview: (
            <div className="space-y-4">
              <AlertPreview variant="success">
                <h3 className="font-semibold text-foreground mb-1">Success</h3>
                <p className="text-muted-foreground">Your application has been submitted successfully.</p>
              </AlertPreview>
              <AlertPreview variant="info">
                <h3 className="font-semibold text-foreground mb-1">Information</h3>
                <p className="text-muted-foreground">Please complete your profile to continue.</p>
              </AlertPreview>
              <AlertPreview variant="warning">
                <h3 className="font-semibold text-foreground mb-1">Warning</h3>
                <p className="text-muted-foreground">Your session will expire in 5 minutes.</p>
              </AlertPreview>
              <AlertPreview variant="error">
                <h3 className="font-semibold text-foreground mb-1">Error</h3>
                <p className="text-muted-foreground">Unable to process your request. Please try again.</p>
              </AlertPreview>
            </div>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { CheckCircle, Info, AlertCircle, X } from 'lucide-react';
import { AlertProps } from './Alert.types';

const iconMap = {
  success: CheckCircle,
  info: Info,
  warning: AlertCircle,
  error: AlertCircle,
};

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  closable = false,
  onClose,
  icon,
  className = '',
}) => {
  const [isVisible, setIsVisible] = React.useState(true);
  
  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };
  
  if (!isVisible) return null;
  
  const Icon = icon || iconMap[variant];
  
  return (
    <div className={\`alert alert-\${variant} \${className}\`} role="alert">
      {Icon && <Icon size={20} />}
      <div className="flex-1">
        {title && <h3>{title}</h3>}
        <div>{children}</div>
      </div>
      {closable && (
        <button onClick={handleClose} aria-label="Close alert">
          <X size={20} />
        </button>
      )}
    </div>
  );
};`,
        types: `export type AlertVariant = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
  className?: string;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux4g-alert',
  template: \`
    <div *ngIf="isVisible"
         [class]="getAlertClasses()"
         role="alert">
      <div class="flex-1">
        <h3 *ngIf="title">{{ title }}</h3>
        <ng-content></ng-content>
      </div>
      <button *ngIf="closable"
              (click)="handleClose()"
              aria-label="Close alert">
        ×
      </button>
    </div>
  \`
})
export class AlertComponent {
  @Input() variant: 'success' | 'info' | 'warning' | 'error' = 'info';
  @Input() title?: string;
  @Input() closable = false;
  @Output() closed = new EventEmitter<void>();
  
  isVisible = true;
  
  getAlertClasses(): string {
    return \`alert alert-\${this.variant}\`;
  }
  
  handleClose(): void {
    this.isVisible = false;
    this.closed.emit();
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule],
  exports: [AlertComponent]
})
export class AlertModule { }`,
        types: `export type AlertVariant = 'success' | 'info' | 'warning' | 'error';`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-alert> custom element",
        html: "<ux4g-alert variant=\"primary\" size=\"md\"><!-- Alert --></ux4g-alert>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Alert',
          variants: 'success, info, warning, error, filled, outlined',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-alert/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Alert',
          variants: 'success, info, warning, error, banner',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/alert',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Warning text / Error message',
          variants: 'warning, error',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'role="alert" for important messages',
          'Color not sole indicator (icons used)',
          'Sufficient color contrast',
          'Keyboard accessible close button',
          'Clear visual hierarchy',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Focus close button if closable' },
          { key: 'Enter/Space', action: 'Close alert' },
        ],
        screenReader: [
          'Announces alert role',
          'Reads alert content',
          'Announces when alert appears',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/alert.json',
        mappings: [
          { property: 'Success Background', token: 'alert.success.bg', value: '#F0FDF4' },
          { property: 'Info Background', token: 'alert.info.bg', value: '#EFF6FF' },
          { property: 'Warning Background', token: 'alert.warning.bg', value: '#FFFBEB' },
          { property: 'Error Background', token: 'alert.error.bg', value: '#FEF2F2' },
        ],
      }}

      useCases={[
        { title: "Form Validation Summary", description: "Error alert listing validation issues.", scenario: "Certificate form has missing fields.", implementation: "<Alert variant=\"error\">Please fix the errors below.</Alert>" },
        { title: "Payment Confirmation", description: "Success alert after payment.", scenario: "Fee payment completed.", implementation: "<Alert variant=\"success\">Payment received.</Alert>" },
        { title: "Maintenance Notice", description: "Warning for scheduled downtime.", scenario: "Service unavailable for maintenance.", implementation: "<Alert variant=\"warning\">Service unavailable Sunday 2-6 AM.</Alert>" },
      
        { title: 'Scheduled Maintenance Notice', description: 'Info alert for planned system downtime.', scenario: 'Portal shows advance notice of weekend maintenance window.', implementation: '<Alert variant="info" dismissible>Portal maintenance scheduled Saturday 2-6 AM IST.</Alert>' },
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
                  Do use Alert when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Important messages needing user attention</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Form validation error summaries</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Success confirmations after actions</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>System status notifications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Alert when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Transient notifications — use Toast</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Inline field errors — use ErrorText</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Promotional content</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Content not requiring immediate attention</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4 space-y-3">
                  <AlertPreview variant="error">Please fix 3 errors before submitting: Name is required, Aadhaar must be 12 digits, Photo is missing.</AlertPreview>
                  <p className="text-sm text-muted-foreground">Place error summaries at the top of the form with specific, actionable messages.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4 space-y-3">
                  <AlertPreview variant="error">Something went wrong.</AlertPreview>
                  <p className="text-sm text-muted-foreground">Don&apos;t use vague error messages — tell the user exactly what failed and how to fix it.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <AlertPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/toast" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Toast</h3>
                <p className="text-sm text-muted-foreground">For transient notifications</p>
              </a>
              <a href="/components/errortext" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">ErrorText</h3>
                <p className="text-sm text-muted-foreground">For inline field errors</p>
              </a>
              <a href="/components/badge" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Badge</h3>
                <p className="text-sm text-muted-foreground">For status indicators</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added dismissible prop</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added icon customization</li>
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
                <h3 className="font-semibold text-foreground mb-1 text-sm">Alert placement matters</h3>
                <p className="text-sm text-muted-foreground">GOV.UK found error summaries at form top reduce correction time by 25%.</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Color alone is not enough</h3>
                <p className="text-sm text-muted-foreground">WCAG 1.4.1 requires non-color indicators. UX4G alerts use icons alongside color.</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
