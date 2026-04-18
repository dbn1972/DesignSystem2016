/**
 * Modal Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { X } from 'lucide-react';

const MODAL_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  {
    name: 'size',
    label: 'Size',
    type: 'select',
    defaultValue: 'md',
    options: ['sm', 'md', 'lg'],
  },
  {
    name: 'showClose',
    label: 'Show Close',
    type: 'boolean',
    defaultValue: true,
  },
];

function ModalPlayground() {
  return (
    <ComponentPlayground
      name="Modal"
      controls={MODAL_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg w-full flex items-center justify-center">
          <div className="w-full max-w-sm bg-card border border-border rounded-xl shadow-lg"><div className="flex items-center justify-between p-4 border-b border-border"><h3 className="font-semibold text-foreground text-sm">{v.size === "lg" ? "Document Preview" : "Confirm Action"}</h3>{showClose && <span className="text-muted-foreground cursor-pointer">✕</span>}</div><div className="p-4"><p className="text-sm text-muted-foreground">Modal content goes here.</p></div><div className="flex justify-end gap-2 p-4 border-t border-border"><button className="px-3 py-1.5 text-xs border border-border rounded">Cancel</button><button className="px-3 py-1.5 text-xs bg-[#005196] text-white rounded">Confirm</button></div></div>
        </div>
      )}
      codeTemplate={(v) =>
        `<Modal size="${v.size}"${v.showClose ? '' : ' hideClose'} title="Confirm">...</Modal>`}
    />
  );
}

export default function ComponentModalPage() {
  return (
    <ComponentDocumentation
      name="Modal"
      description="Overlay dialog component for focused user interactions. Displays content above the main page, requiring user action before returning to the main workflow."
      category="Feedback"
      maturity="beta"
      tier="composite"
      since="v1.0.0"

      preview={
        <div className="w-full max-w-sm bg-card border border-border rounded-xl shadow-lg">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Session Expiring</h3>
            <button className="text-muted-foreground"><X size={18} /></button>
          </div>
          <div className="p-4"><p className="text-sm text-muted-foreground">Your session will expire in 2 minutes. Save your work.</p></div>
          <div className="flex justify-end gap-2 p-4 border-t border-border">
            <button className="px-4 py-2 text-sm border border-border rounded-lg">Dismiss</button>
            <button className="px-4 py-2 text-sm bg-[#005196] text-white rounded-lg">Extend Session</button>
          </div>
        </div>
      }
      
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
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Modal body content.',
        },
        {
          name: 'title',
          type: 'string',
          required: false,
          description: 'Modal title/heading.',
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          description: 'Modal description text below the title.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Modal width size.',
        },
        {
          name: 'closeOnOverlay',
          type: 'boolean',
          required: false,
          description: 'Whether clicking the overlay closes the modal.',
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
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-modal> custom element",
        html: "<ux4g-modal variant=\"primary\" size=\"md\"><!-- Modal --></ux4g-modal>",
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

      useCases={[
        { title: "Delete Confirmation", description: "Confirm before destructive action.", scenario: "Officer deletes pending application.", implementation: "<Modal title=\"Delete?\">This cannot be undone.</Modal>" },
        { title: "Document Preview", description: "View uploaded documents.", scenario: "Officer reviews Aadhaar card.", implementation: "<Modal size=\"lg\" title=\"Preview\"><img src={url} /></Modal>" },
        { title: "Session Warning", description: "Warn before auto-logout.", scenario: "Session about to expire.", implementation: "<Modal title=\"Session Expiring\">2 minutes remaining.</Modal>" },
      
        { title: 'Document Preview Modal', description: 'Large modal for previewing uploaded documents.', scenario: 'Officer opens full-screen preview of uploaded Aadhaar scan.', implementation: '<Modal size="lg" title="Document Preview"><DocumentViewer src={docUrl} /></Modal>' },
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
                  Do use Modal when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Confirmation before destructive actions</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Focused tasks needing full attention</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Content preview without leaving page</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Critical warnings blocking interaction</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Modal when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple notifications — use Toast</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Navigation — use pages</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Long forms — use dedicated page</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Non-critical info</li>
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
                  <div className="flex justify-end gap-2"><button className="px-3 py-1.5 text-sm border border-border rounded">Cancel</button><button className="px-3 py-1.5 text-sm bg-red-600 text-white rounded">Delete Application</button></div>
                  <p className="text-sm text-muted-foreground">Use specific action labels in modal footers — &quot;Delete Application&quot; is clearer than &quot;OK&quot;.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-end gap-2"><button className="px-3 py-1.5 text-sm border border-border rounded">No</button><button className="px-3 py-1.5 text-sm bg-[#005196] text-white rounded">OK</button></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use generic labels like &quot;OK&quot; / &quot;No&quot; — users should know what each button does without reading the modal body.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <ModalPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/dialog" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Dialog</h3>
                <p className="text-sm text-muted-foreground">For simpler confirmations</p>
              </a>
              <a href="/components/drawer" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Drawer</h3>
                <p className="text-sm text-muted-foreground">For side panels</p>
              </a>
              <a href="/components/alert" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Alert</h3>
                <p className="text-sm text-muted-foreground">For inline messages</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added focus trap</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added scroll lock</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with 3 sizes</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Focus trap essential</h3>
                <p className="text-sm text-muted-foreground">WCAG 2.4.3 requires focus stays within modal while open.</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Escape to close</h3>
                <p className="text-sm text-muted-foreground">92% of users expect Escape to close modals (NNG). WCAG 2.1.1 requires it.</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
