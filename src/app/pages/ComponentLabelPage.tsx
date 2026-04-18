/**
 * Label Component Documentation Page
 * Complete documentation for the Label component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

// Label preview component
const LabelPreview = ({ required, disabled, children, ...props }: any) => (
  <label
    className={`block text-sm font-medium ${
      disabled ? 'text-muted-foreground cursor-not-allowed' : 'text-foreground'
    }`}
    {...props}
  >
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
);

const InputPreview = ({ ...props }: any) => (
  <input
    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2 transition-all"
    {...props}
  />
);

const LABEL_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  { name: 'required', label: 'Required', type: 'boolean', defaultValue: false },
  { name: 'disabled', label: 'Disabled', type: 'boolean', defaultValue: false },
  { name: 'labelText', label: 'Label Text', type: 'text', defaultValue: 'Full Name' },
];

function LabelPlayground() {
  return (
    <ComponentPlayground
      name="Label"
      controls={LABEL_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-sm space-y-2">
          <LabelPreview htmlFor="pg-input" required={v.required} disabled={v.disabled}>{v.labelText}</LabelPreview>
          <InputPreview id="pg-input" placeholder={`Enter ${labelText.toLowerCase()}`} disabled={v.disabled} />
        </div>
      )}
      codeTemplate={(v) =>
        `<Label htmlFor="input"${v.required ? ' required' : ''}${v.disabled ? ' disabled' : ''}>${v.labelText}</Label>\n<Input id="input" />`
      }
    />
  );
}

export default function ComponentLabelPage() {
  return (
    <ComponentDocumentation
      name="Label"
      description="Form field label with required indicator support. Provides accessible, semantic labeling for form inputs with proper associations and visual indicators for mandatory fields in government forms."
      category="Form Elements"
      maturity="beta"
      tier="core"
      since="v2.0.0"
      updated="v2.0.0"

      preview={
        <div className="flex flex-wrap items-end gap-8">
          <div className="space-y-2">
            <LabelPreview htmlFor="p1">Full Name</LabelPreview>
            <InputPreview id="p1" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <LabelPreview htmlFor="p2" required>Email Address</LabelPreview>
            <InputPreview id="p2" type="email" placeholder="email@gov.in" />
          </div>
          <div className="space-y-2">
            <LabelPreview htmlFor="p3" disabled>Username</LabelPreview>
            <InputPreview id="p3" defaultValue="john_doe" disabled />
          </div>
        </div>
      }

      props={[
        {
          name: 'htmlFor',
          type: 'string',
          required: false,
          description: 'ID of the associated form control. Creates proper label-input association.',
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to show required indicator (*). Adds visual asterisk after label text.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the label is for a disabled field. Applies muted styling.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Label text content.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply.',
        },
      ]}

      examples={[
        {
          title: 'Basic Label',
          description: 'Simple label associated with an input.',
          code: `import { Label, Input } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="name">Full Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
  );
}`,
          preview: (
            <div className="space-y-2">
              <LabelPreview htmlFor="name">Full Name</LabelPreview>
              <InputPreview id="name" placeholder="Enter your name" />
            </div>
          ),
        },
        {
          title: 'Required Label',
          description: 'Label with required indicator for mandatory fields.',
          code: `import { Label, Input } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email" required>Email Address</Label>
      <Input id="email" type="email" required />
    </div>
  );
}`,
          preview: (
            <div className="space-y-2">
              <LabelPreview htmlFor="email" required>Email Address</LabelPreview>
              <InputPreview id="email" type="email" required />
            </div>
          ),
        },
        {
          title: 'Disabled Label',
          description: 'Label for disabled input field.',
          code: `import { Label, Input } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="username" disabled>Username</Label>
      <Input id="username" value="john_doe" disabled />
    </div>
  );
}`,
          preview: (
            <div className="space-y-2">
              <LabelPreview htmlFor="username" disabled>Username</LabelPreview>
              <InputPreview id="username" defaultValue="john_doe" disabled />
            </div>
          ),
        },
        {
          title: 'Multiple Form Fields',
          description: 'Labels for a complete form.',
          code: `import { Label, Input, Textarea, Select } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" required>Full Name</Label>
        <Input id="name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" required>Email</Label>
        <Input id="email" type="email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="state">State</Label>
        <Select id="state">
          <option>Select a state</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments">Comments</Label>
        <Textarea id="comments" />
      </div>
    </div>
  );
}`,
          preview: (
            <div className="space-y-6">
              <div className="space-y-2">
                <LabelPreview htmlFor="name" required>Full Name</LabelPreview>
                <InputPreview id="name" />
              </div>
              <div className="space-y-2">
                <LabelPreview htmlFor="email" required>Email</LabelPreview>
                <InputPreview id="email" type="email" />
              </div>
              <div className="space-y-2">
                <LabelPreview htmlFor="state">State</LabelPreview>
                <InputPreview id="state" as="select" />
              </div>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef, LabelHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    BaseComponentProps,
    ChildrenProp {
  /**
   * Whether to show required indicator (*)
   * @default false
   */
  required?: boolean;

  /**
   * Whether the label is disabled
   * @default false
   */
  disabled?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      children,
      className,
      required = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <label
        ref={ref}
        className={cn(
          'ux4g-label',
          required && 'ux4g-label-required',
          disabled && 'ux4g-label-disabled',
          className
        )}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = 'Label';`,
        types: `import { LabelHTMLAttributes } from 'react';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    BaseComponentProps,
    ChildrenProp {
  required?: boolean;
  disabled?: boolean;
}`,
      }}

      angularCode={{
        component: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-label',
  template: \`
    <label
      [for]="htmlFor"
      [class]="getLabelClasses()"
    >
      <ng-content></ng-content>
      <span *ngIf="required" class="text-red-500 ml-1">*</span>
    </label>
  \`,
  styles: [\`
    :host {
      display: block;
    }
  \`]
})
export class LabelComponent {
  @Input() htmlFor?: string;
  @Input() required = false;
  @Input() disabled = false;

  getLabelClasses(): string {
    const classes = ['ux4g-label'];

    if (this.required) {
      classes.push('ux4g-label-required');
    }

    if (this.disabled) {
      classes.push('ux4g-label-disabled');
    }

    return classes.join(' ');
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label.component';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';

@NgModule({
  declarations: [LabelComponent],
  imports: [CommonModule],
  exports: [LabelComponent]
})
export class LabelModule { }`,
        types: `export interface LabelProps {
  htmlFor?: string;
  required?: boolean;
  disabled?: boolean;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-label> custom element",
        html: "<ux4g-label variant=\"primary\" size=\"md\"><!-- Label --></ux4g-label>",
      }}
      comparisons={[
        {
          system: 'GOV.UK Design System',
          component: 'Label',
          variants: 'default (with optional hint)',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/text-input/',
        },
        {
          system: 'U.S. Web Design System',
          component: 'Label',
          variants: 'default (with required indicator)',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://designsystem.digital.gov/components/form/',
        },
        {
          system: 'Material UI',
          component: 'InputLabel / FormLabel',
          variants: 'standard, outlined, filled',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/api/input-label/',
        },
        {
          system: 'Ant Design',
          component: 'Form.Item (label prop)',
          variants: 'default (customizable)',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/form',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Uses semantic <label> element for proper form associations',
          'htmlFor attribute creates programmatic relationship with input',
          'Screen readers announce label text when input receives focus',
          'Required indicator (*) is visible to all users',
          'Disabled state conveyed through visual styling and semantic attributes',
          'Clicking label focuses associated input (improves touch targets)',
          'Color contrast ratio meets 4.5:1 for text (WCAG 1.4.3)',
          'Clear visual distinction between normal and disabled states',
        ],
        keyboardSupport: [
          { key: 'Mouse Click', action: 'Focus associated input element' },
          { key: 'Tab', action: 'Skip to next focusable element (labels not focusable)' },
        ],
        screenReader: [
          'Announces label text when associated input receives focus',
          'Required state conveyed through visual asterisk (announced by context)',
          'Disabled state conveyed through parent field or input element',
          'Label text read before input value',
          'Long labels read completely without truncation',
        ],
      }}

      useCases={[
        {
          title: 'Aadhaar Number Input',
          description: 'Label for Aadhaar card number input',
          scenario: 'User entering Aadhaar number for identity verification',
          implementation: 'Use required prop to indicate mandatory field. Associate with Aadhaar input component using htmlFor.',
        },
        {
          title: 'PAN Card Input',
          description: 'Label for PAN card number',
          scenario: 'User providing PAN for tax-related services',
          implementation: 'Clear label text with required indicator. Associated with PAN input for proper accessibility.',
        },
        {
          title: 'Multi-language Forms',
          description: 'Labels in regional languages',
          scenario: 'Forms in Hindi, Tamil, or other scheduled languages',
          implementation: 'Label component supports all Unicode characters for multi-language content.',
        },
        {
          title: 'Application Forms',
          description: 'Labels for government application forms',
          scenario: 'Citizen applying for certificate or license',
          implementation: 'Consistent labeling across all form fields with required indicators where needed.',
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
                  Do use Label when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Form field labels</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Required field indicators</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Accessible input labeling</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Consistent label styling</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Label when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Section headings — use heading elements</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Button text — use Button</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Badge text — use Badge</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Non-form text — use paragraph elements</li>
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
                  <div className="space-y-2">
                    <LabelPreview htmlFor="do-name" required>Full Name</LabelPreview>
                    <InputPreview id="do-name" placeholder="As per Aadhaar card" />
                  </div>
                  <p className="text-sm text-muted-foreground">Always use a visible label with htmlFor linking it to the input. Add required indicator for mandatory fields.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4 space-y-3">
                  <div className="space-y-2">
                    <InputPreview placeholder="Full Name" />
                  </div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use placeholder as the only label — it disappears on focus and fails WCAG 1.3.1. Screen readers may not announce it.</p>
                </div>
              </div>
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4 space-y-3">
                  <div className="space-y-2">
                    <LabelPreview htmlFor="do-aadhaar" required>Aadhaar Number</LabelPreview>
                    <InputPreview id="do-aadhaar" placeholder="XXXX-XXXX-XXXX" />
                    <p className="text-xs text-muted-foreground">Enter your 12-digit Aadhaar number</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Pair labels with hint text for fields that need format guidance. Keep label text concise.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4 space-y-3">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Please enter your twelve digit Aadhaar Unique Identification Number as printed on your Aadhaar card issued by UIDAI <span className="text-red-500">*</span></label>
                    <InputPreview placeholder="Enter here" />
                  </div>
                  <p className="text-sm text-muted-foreground">Don&apos;t write overly long labels — keep them short and use hint text for additional guidance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <LabelPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/field" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Field</h3>
                <p className="text-sm text-muted-foreground">For complete field wrapper</p>
              </a>
              <a href="/components/hinttext" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">HintText</h3>
                <p className="text-sm text-muted-foreground">For help text</p>
              </a>
              <a href="/components/errortext" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">ErrorText</h3>
                <p className="text-sm text-muted-foreground">For error messages</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added responsive variants</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Improved dark mode support</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with htmlFor and required props</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Labels improve accessibility</h3>
                <p className="text-sm text-muted-foreground">WCAG 1.3.1 requires all form inputs to have associated labels. Missing labels are the most common accessibility failure (WebAIM Million).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
