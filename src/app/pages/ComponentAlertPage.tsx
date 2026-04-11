/**
 * Alert Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { CheckCircle, Info, AlertCircle, X } from 'lucide-react';

const AlertPreview = ({ variant = 'info', children }: any) => {
  const variants = {
    success: { bg: 'bg-green-50', border: 'border-green-200', icon: <CheckCircle className="text-[#138808]" size={20} /> },
    info: { bg: 'bg-blue-50', border: 'border-blue-200', icon: <Info className="text-[#005196]" size={20} /> },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', icon: <AlertCircle className="text-yellow-600" size={20} /> },
    error: { bg: 'bg-red-50', border: 'border-red-200', icon: <AlertCircle className="text-red-600" size={20} /> },
  };
  
  const config = variants[variant as keyof typeof variants];
  
  return (
    <div className={`${config.bg} ${config.border} border rounded-lg p-4 flex items-start gap-3`}>
      {config.icon}
      <div className="flex-1">
        {children}
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <X size={20} />
      </button>
    </div>
  );
};

export default function ComponentAlertPage() {
  return (
    <ComponentDocumentation
      name="Alert"
      description="Feedback component to display important messages, notifications, and system status to users. Supports multiple severity levels with appropriate visual styling."
      category="Feedback"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      
      props={[
        {
          name: 'variant',
          type: "'success' | 'info' | 'warning' | 'error'",
          default: "'info'",
          required: false,
          description: 'Visual variant indicating message severity.',
        },
        {
          name: 'title',
          type: 'string',
          required: false,
          description: 'Alert title/heading.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Alert message content.',
        },
        {
          name: 'closable',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the alert can be dismissed.',
        },
        {
          name: 'onClose',
          type: '() => void',
          required: false,
          description: 'Callback when alert is closed.',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          required: false,
          description: 'Custom icon element.',
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
                <h3 className="font-semibold text-gray-900 mb-1">Success</h3>
                <p className="text-gray-700">Your application has been submitted successfully.</p>
              </AlertPreview>
              <AlertPreview variant="info">
                <h3 className="font-semibold text-gray-900 mb-1">Information</h3>
                <p className="text-gray-700">Please complete your profile to continue.</p>
              </AlertPreview>
              <AlertPreview variant="warning">
                <h3 className="font-semibold text-gray-900 mb-1">Warning</h3>
                <p className="text-gray-700">Your session will expire in 5 minutes.</p>
              </AlertPreview>
              <AlertPreview variant="error">
                <h3 className="font-semibold text-gray-900 mb-1">Error</h3>
                <p className="text-gray-700">Unable to process your request. Please try again.</p>
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
    />
  );
}
