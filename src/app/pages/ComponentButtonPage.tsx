/**
 * Button Component Documentation Page
 * Complete documentation for the Button component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Save, Send, Trash2 } from 'lucide-react';

// Import the actual Button component for live preview
const ButtonPreview = ({ variant, size, children, ...props }: any) => (
  <button
    className={`inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] ${
      variant === 'primary' ? 'bg-[#005196] text-white border-[#005196] hover:bg-[#004178]' :
      variant === 'secondary' ? 'bg-card text-[#005196] border-[#005196] hover:bg-[#f5f5f5]' :
      variant === 'tertiary' ? 'bg-transparent text-[#005196] border-transparent hover:bg-[#f5f5f5]' :
      variant === 'danger' ? 'bg-[#dc2626] text-white border-[#dc2626] hover:bg-[#991b1b]' :
      variant === 'ghost' ? 'bg-transparent text-foreground border-transparent hover:bg-accent' :
      'bg-[#008800] text-white border-[#008800] hover:bg-[#006600]'
    } ${
      size === 'sm' ? 'h-8 px-3 text-sm' :
      size === 'lg' ? 'h-12 px-6 text-lg' :
      'h-10 px-4 text-base'
    }`}
    {...props}
  >
    {children}
  </button>
);

export default function ComponentButtonPage() {
  return (
    <ComponentDocumentation
      name="Button"
      description="Primary interactive element for user actions across government services. Supports multiple variants, sizes, loading states, and icons with full accessibility compliance."
      category="Form Elements"
      maturity="beta"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"
      
      props={[
        {
          name: 'variant',
          type: "'primary' | 'secondary' | 'tertiary' | 'destructive' | 'ghost' | 'success' | 'danger'",
          default: "'primary'",
          required: false,
          description: 'Visual variant. Primary for main actions, secondary for alternatives, tertiary for low-emphasis, destructive for dangerous actions, ghost for transparent backgrounds, success for positive confirmations. "danger" is a legacy alias for "destructive".',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of the button. Small (32px), Medium (40px), Large (48px).',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the button is disabled. Prevents interaction and applies disabled styling.',
        },
        {
          name: 'loading',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Loading state. Shows spinner and prevents interaction.',
        },
        {
          name: 'loadingText',
          type: 'string',
          default: "'Loading...'",
          required: false,
          description: 'Text to display when loading. Announced to screen readers.',
        },
        {
          name: 'fullWidth',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the button should take full width of its container.',
        },
        {
          name: 'iconBefore',
          type: 'ReactNode',
          required: false,
          description: 'Icon to display before button text.',
        },
        {
          name: 'iconAfter',
          type: 'ReactNode',
          required: false,
          description: 'Icon to display after button text.',
        },
        {
          name: 'type',
          type: "'button' | 'submit' | 'reset'",
          default: "'button'",
          required: false,
          description: 'HTML button type attribute.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Button content (text or elements).',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply. Merged with variant classes.',
        },
        {
          name: 'as',
          type: 'ElementType',
          default: "'button'",
          required: false,
          description: 'Polymorphic element type. Pass "a" to render as a link, or a React Router Link component for client-side navigation.',
        },
        {
          name: 'href',
          type: 'string',
          required: false,
          description: 'Link URL — used when as="a". Ignored for button elements.',
        },
        {
          name: 'onClick',
          type: '(event: MouseEvent) => void',
          required: false,
          description: 'Click event handler.',
        },
      ]}
      
      examples={[
        {
          title: 'Basic Variants',
          description: 'All five button variants for different use cases.',
          code: `import { Button } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="success">Success</Button>
    </div>
  );
}`,
          preview: (
            <div className="flex flex-wrap gap-4">
              <ButtonPreview variant="primary">Primary</ButtonPreview>
              <ButtonPreview variant="secondary">Secondary</ButtonPreview>
              <ButtonPreview variant="tertiary">Tertiary</ButtonPreview>
              <ButtonPreview variant="danger">Destructive</ButtonPreview>
              <ButtonPreview variant="ghost">Ghost</ButtonPreview>
              <ButtonPreview variant="success">Success</ButtonPreview>
            </div>
          ),
        },
        {
          title: 'Sizes',
          description: 'Three button sizes: small (32px), medium (40px), and large (48px).',
          code: `import { Button } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
  );
}`,
          preview: (
            <div className="flex items-center gap-4">
              <ButtonPreview size="sm">Small Button</ButtonPreview>
              <ButtonPreview size="md">Medium Button</ButtonPreview>
              <ButtonPreview size="lg">Large Button</ButtonPreview>
            </div>
          ),
        },
        {
          title: 'With Icons',
          description: 'Buttons can display icons before or after the text.',
          code: `import { Button } from '@ux4g/react-core';
import { Save, Send, Trash2 } from 'lucide-react';

function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="primary" iconBefore={<Save size={16} />}>
        Save Draft
      </Button>
      <Button variant="secondary" iconAfter={<Send size={16} />}>
        Send Message
      </Button>
      <Button variant="danger" iconBefore={<Trash2 size={16} />}>
        Delete
      </Button>
    </div>
  );
}`,
          preview: (
            <div className="flex gap-4">
              <ButtonPreview variant="primary">
                <Save size={16} />
                <span>Save Draft</span>
              </ButtonPreview>
              <ButtonPreview variant="secondary">
                <span>Send Message</span>
                <Send size={16} />
              </ButtonPreview>
              <ButtonPreview variant="danger">
                <Trash2 size={16} />
                <span>Delete</span>
              </ButtonPreview>
            </div>
          ),
        },
        {
          title: 'Disabled State',
          description: 'Disabled buttons prevent interaction and show reduced opacity.',
          code: `import { Button } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="primary" disabled>
        Disabled Primary
      </Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
    </div>
  );
}`,
          preview: (
            <div className="flex gap-4">
              <ButtonPreview variant="primary" disabled>
                Disabled Primary
              </ButtonPreview>
              <ButtonPreview variant="secondary" disabled>
                Disabled Secondary
              </ButtonPreview>
            </div>
          ),
        },
        {
          title: 'Full Width',
          description: 'Buttons can span the full width of their container.',
          code: `import { Button } from '@ux4g/react-core';

function Example() {
  return (
    <div className="max-w-md">
      <Button variant="primary" fullWidth>
        Submit Application
      </Button>
    </div>
  );
}`,
          preview: (
            <div className="w-full max-w-md">
              <ButtonPreview variant="primary" style={{ width: '100%' }}>
                Submit Application
              </ButtonPreview>
            </div>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { buttonVariants } from './button.variants';
import { ButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      loadingText = 'Loading...',
      fullWidth = false,
      iconBefore,
      iconAfter,
      type = 'button',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({ variant, size, fullWidth, loading }),
          className
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        aria-label={loading ? loadingText : ariaLabel}
        {...props}
      >
        {loading && <LoadingSpinner variant={variant} />}
        {!loading && iconBefore && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {iconBefore}
          </span>
        )}
        <span className="inline-flex items-center">
          {loading ? loadingText : children}
        </span>
        {!loading && iconAfter && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {iconAfter}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';`,
        types: `export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
          ButtonVariantProps {
  children?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  fullWidth?: boolean;
}`,
        variants: `import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium leading-normal text-center whitespace-nowrap',
    'rounded border cursor-pointer select-none touch-manipulation',
    'transition-all duration-150 ease-in-out',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-60',
    'min-h-[44px]',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[#005196] text-white border-[#005196]',
          'hover:bg-[#004178] hover:border-[#004178]',
          'active:bg-[#00315a] active:border-[#00315a]',
          'focus-visible:ring-[#005196]',
        ],
        secondary: [
          'bg-card text-[#005196] border-[#005196]',
          'hover:bg-[#f5f5f5] hover:border-[#004178]',
          'active:bg-[#e5e5e5]',
        ],
      },
      size: {
        sm: ['h-8 px-3 py-1.5 text-sm'],
        md: ['h-10 px-4 py-2.5 text-base'],
        lg: ['h-12 px-6 py-3 text-lg'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ux4g-button',
  template: \`
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [attr.aria-disabled]="disabled || loading"
      [attr.aria-busy]="loading"
      [class]="getButtonClasses()"
      (click)="handleClick($event)"
    >
      <span *ngIf="loading" class="spinner"></span>
      <ng-content></ng-content>
    </button>
  \`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  
  @Output() clicked = new EventEmitter<Event>();

  getButtonClasses(): string {
    const baseClasses = 'ux4g-button';
    const variantClass = \`ux4g-button-\${this.variant}\`;
    const sizeClass = \`ux4g-button-\${this.size}\`;
    const fullWidthClass = this.fullWidth ? 'ux4g-w-full' : '';
    
    return [baseClasses, variantClass, sizeClass, fullWidthClass]
      .filter(Boolean)
      .join(' ');
  }

  handleClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent]
})
export class ButtonModule { }`,
        types: `export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-button> custom element",
        html: "<ux4g-button variant=\"primary\" size=\"md\"><!-- Button --></ux4g-button>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Button',
          variants: 'text, contained, outlined',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-button/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Button',
          variants: 'primary, default, dashed, text, link',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/button',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Button',
          variants: 'default, secondary, warning',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/button/',
        },
        {
          system: 'Chakra UI',
          component: 'Button',
          variants: 'solid, outline, ghost, link',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/button',
        },
        {
          system: 'Radix UI',
          component: 'Button (as styled primitive)',
          variants: 'Custom (unstyled)',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://www.radix-ui.com/primitives/docs/components/button',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 44x44px touch target size (WCAG 2.5.5)',
          '2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)',
          'Color contrast ratios meet or exceed 4.5:1 for text (WCAG 1.4.3)',
          'Semantic HTML button element for proper keyboard and assistive technology support',
          'aria-disabled attribute for disabled state',
          'aria-busy attribute for loading state',
          'Screen reader announcements for loading text',
          'Icons properly hidden from screen readers with aria-hidden',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to button' },
          { key: 'Shift + Tab', action: 'Move focus away from button' },
          { key: 'Enter', action: 'Activate button' },
          { key: 'Space', action: 'Activate button' },
        ],
        screenReader: [
          'Announces button role and label',
          'Announces disabled state when applicable',
          'Announces loading state with custom loadingText',
          'Icons are hidden from screen reader (aria-hidden="true")',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/button.json',
        mappings: [
          { property: 'Height (Medium)', token: 'base.height.md', value: '40px' },
          { property: 'Padding Horizontal (Medium)', token: 'base.padding.horizontal.md', value: '16px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '4px' },
          { property: 'Font Size (Medium)', token: 'base.fontSize.md', value: '16px' },
          { property: 'Primary Background', token: 'variant.primary.background.default', value: 'var(--primary)' },
          { property: 'Primary Hover', token: 'variant.primary.background.hover', value: 'var(--primary) / 90%' },
          { property: 'Min Touch Target', token: 'accessibility.minTouchTarget', value: '44px' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
        ],
      }}

      useCases={[
        {
          title: 'Application Submission',
          description: 'Primary CTA for submitting government service applications.',
          scenario: 'Citizen completes a multi-step certificate application form.',
          implementation: '<Button variant="primary" type="submit">Submit Application</Button>',
        },
        {
          title: 'Destructive Action Confirmation',
          description: 'Destructive variant for irreversible actions like deleting a draft.',
          scenario: 'Officer deletes a pending application from the review queue.',
          implementation: '<Button variant="destructive" iconBefore={<Trash2 />}>Delete Draft</Button>',
        },
        {
          title: 'Navigation as Link',
          description: 'Polymorphic rendering as an anchor for navigation CTAs.',
          scenario: 'Service landing page with a "Get Started" button linking to sign-up.',
          implementation: '<Button as="a" href="/sign-up" variant="primary">Get Started</Button>',
        },
        {
          title: 'Ghost Action in Toolbars',
          description: 'Ghost variant for low-emphasis actions in dense UI areas.',
          scenario: 'Officer dashboard toolbar with filter and sort actions.',
          implementation: '<Button variant="ghost" size="sm" iconBefore={<Filter />}>Filter</Button>',
        },
      ]}

      additionalContent={
        <>
          {/* ── When to use / When not to use ── */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use Button when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>The user needs to perform an action (submit, save, delete, confirm)</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>You need a clear call-to-action on a page or form</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>The action changes data or triggers a process</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>You need to indicate a primary, secondary, or destructive action</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>You need a loading state while an async operation completes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Button when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>The action is purely navigational — use a link instead</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>You need a toggle — use Switch or Checkbox instead</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>You have more than 3 actions in a row — consider a Menu or Dropdown</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>The text is very long — buttons should have concise labels</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>You're using it only for styling — semantic HTML matters</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Do / Don't examples ── */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don't</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4 space-y-3">
                  <div className="flex gap-3">
                    <ButtonPreview variant="primary" size="md">Submit Application</ButtonPreview>
                    <ButtonPreview variant="secondary" size="md">Save Draft</ButtonPreview>
                  </div>
                  <p className="text-sm text-muted-foreground">Use one primary action per section. Pair with a secondary action for alternatives.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don't</div>
                <div className="p-4 space-y-3">
                  <div className="flex gap-3">
                    <ButtonPreview variant="primary" size="md">Submit</ButtonPreview>
                    <ButtonPreview variant="primary" size="md">Save</ButtonPreview>
                    <ButtonPreview variant="primary" size="md">Continue</ButtonPreview>
                  </div>
                  <p className="text-sm text-muted-foreground">Don't use multiple primary buttons in the same section — it creates confusion about which action is most important.</p>
                </div>
              </div>
              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4 space-y-3">
                  <ButtonPreview variant="danger" size="md">Delete Application</ButtonPreview>
                  <p className="text-sm text-muted-foreground">Use the destructive variant for irreversible actions. Make the label specific about what will be deleted.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don't</div>
                <div className="p-4 space-y-3">
                  <ButtonPreview variant="danger" size="md">Click Here</ButtonPreview>
                  <p className="text-sm text-muted-foreground">Don't use vague labels like "Click Here" or "OK". Button text should describe the action.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Related components ── */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/menu" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Menu</h3>
                <p className="text-sm text-muted-foreground">For multiple actions in a dropdown</p>
              </a>
              <a href="/components/switch" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Switch</h3>
                <p className="text-sm text-muted-foreground">For toggle on/off actions</p>
              </a>
              <a href="/components/stepper" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Stepper</h3>
                <p className="text-sm text-muted-foreground">For multi-step form navigation</p>
              </a>
            </div>
          </section>
        </>
      }
    />
  );
}
