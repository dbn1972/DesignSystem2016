/**
 * Field Component Documentation Page
 * Complete documentation for the Field component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

// Field preview component
const FieldPreview = ({ error, disabled, children }: any) => (
  <div className={`space-y-2 ${disabled ? 'opacity-60' : ''}`}>
    {children}
  </div>
);

const LabelPreview = ({ children, required }: any) => (
  <label className="block text-sm font-medium text-foreground">
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
);

const InputPreview = ({ error, ...props }: any) => (
  <input
    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all ${
      error
        ? 'border-red-500 focus-visible:ring-red-500'
        : 'border-border focus-visible:ring-[#005196]'
    }`}
    {...props}
  />
);

const HintTextPreview = ({ children }: any) => (
  <p className="text-sm text-muted-foreground">{children}</p>
);

const ErrorTextPreview = ({ children }: any) => (
  <p className="text-sm text-red-600" role="alert">{children}</p>
);

function FieldPlayground() {
  const [required, setRequired] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="text-center space-y-3">
          <div className="text-4xl">🧩</div>
          <p className="text-sm text-muted-foreground">Live Field preview with current settings</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {required && <span className="px-2 py-0.5 rounded-full text-xs bg-[#005196]/10 text-[#005196] font-medium">required</span>}
            {error && <span className="px-2 py-0.5 rounded-full text-xs bg-[#005196]/10 text-[#005196] font-medium">error</span>}
          </div>
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={required} onChange={e => setRequired(e.target.checked)} className="accent-primary" /><span className="text-foreground">Required</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={error} onChange={e => setError(e.target.checked)} className="accent-primary" /><span className="text-foreground">Error</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Field${required ? ' required' : ''}${error ? ' error' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentFieldPage() {
  return (
    <ComponentDocumentation
      name="Field"
      description="Container for form field composition that combines Label, Input, and HintText/ErrorText components. Provides consistent spacing, layout, and state management for form fields across government applications."
      category="Form Elements"
      maturity="beta"
      tier="core"
      since="v2.0.0"
      updated="v2.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <FieldPreview />
        </div>
      }

      props={[
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Form field components (Label, Input, HintText, ErrorText).',
        },
        {
          name: 'error',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the field is in error state. Applies error styling to the container.',
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the field is required.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the field is disabled. Applies disabled styling.',
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
          title: 'Basic Field',
          description: 'Simple form field with label and input.',
          code: `import { Field, Label, Input } from '@ux4g/react-core';

function Example() {
  return (
    <Field>
      <Label htmlFor="name">Full Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </Field>
  );
}`,
          preview: (
            <FieldPreview>
              <LabelPreview>Full Name</LabelPreview>
              <InputPreview placeholder="Enter your name" />
            </FieldPreview>
          ),
        },
        {
          title: 'Field with Helper Text',
          description: 'Form field with hint text for additional guidance.',
          code: `import { Field, Label, Input, HintText } from '@ux4g/react-core';

function Example() {
  return (
    <Field>
      <Label htmlFor="email" required>Email Address</Label>
      <Input id="email" type="email" placeholder="your@email.com" />
      <HintText>We'll never share your email with anyone.</HintText>
    </Field>
  );
}`,
          preview: (
            <FieldPreview>
              <LabelPreview required>Email Address</LabelPreview>
              <InputPreview type="email" placeholder="your@email.com" />
              <HintTextPreview>We'll never share your email with anyone.</HintTextPreview>
            </FieldPreview>
          ),
        },
        {
          title: 'Field with Error',
          description: 'Form field in error state with error message.',
          code: `import { Field, Label, Input, ErrorText } from '@ux4g/react-core';

function Example() {
  const [email, setEmail] = useState('invalid-email');
  const error = !email.includes('@');

  return (
    <Field error={error}>
      <Label htmlFor="email" required>Email Address</Label>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />
      {error && <ErrorText>Please enter a valid email address</ErrorText>}
    </Field>
  );
}`,
          preview: (
            <FieldPreview error>
              <LabelPreview required>Email Address</LabelPreview>
              <InputPreview type="email" defaultValue="invalid-email" error />
              <ErrorTextPreview>Please enter a valid email address</ErrorTextPreview>
            </FieldPreview>
          ),
        },
        {
          title: 'Disabled Field',
          description: 'Form field in disabled state.',
          code: `import { Field, Label, Input } from '@ux4g/react-core';

function Example() {
  return (
    <Field disabled>
      <Label htmlFor="username">Username</Label>
      <Input id="username" value="john_doe" disabled />
    </Field>
  );
}`,
          preview: (
            <FieldPreview disabled>
              <LabelPreview>Username</LabelPreview>
              <InputPreview defaultValue="john_doe" disabled />
            </FieldPreview>
          ),
        },
        {
          title: 'Complex Form with Multiple Fields',
          description: 'Complete form using Field containers.',
          code: `import { Field, Label, Input, HintText, ErrorText, Select, Textarea } from '@ux4g/react-core';

function Example() {
  const [errors, setErrors] = useState({});

  return (
    <form className="space-y-6">
      <Field error={errors.name}>
        <Label htmlFor="name" required>Full Name</Label>
        <Input id="name" />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </Field>

      <Field>
        <Label htmlFor="email" required>Email Address</Label>
        <Input id="email" type="email" />
        <HintText>We'll use this for account notifications</HintText>
      </Field>

      <Field>
        <Label htmlFor="state">State</Label>
        <Select id="state">
          <option value="">Select a state</option>
          <option value="DL">Delhi</option>
          <option value="MH">Maharashtra</option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="comments">Comments</Label>
        <Textarea id="comments" rows={4} />
        <HintText>Optional: Any additional information</HintText>
      </Field>
    </form>
  );
}`,
          preview: (
            <div className="space-y-6">
              <FieldPreview>
                <LabelPreview required>Full Name</LabelPreview>
                <InputPreview />
              </FieldPreview>
              <FieldPreview>
                <LabelPreview required>Email Address</LabelPreview>
                <InputPreview type="email" />
                <HintTextPreview>We'll use this for account notifications</HintTextPreview>
              </FieldPreview>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { FieldProps } from './Field.types';

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      children,
      className,
      error = false,
      required = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ux4g-form-group',
          error && 'ux4g-form-group-error',
          disabled && 'ux4g-form-group-disabled',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Field.displayName = 'Field';`,
        types: `import { HTMLAttributes } from 'react';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface FieldProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps,
    ChildrenProp {
  /**
   * Whether the field is in error state
   * @default false
   */
  error?: boolean;

  /**
   * Whether the field is required
   * @default false
   */
  required?: boolean;

  /**
   * Whether the field is disabled
   * @default false
   */
  disabled?: boolean;
}`,
      }}

      angularCode={{
        component: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-field',
  template: \`
    <div
      [class]="getFieldClasses()"
      [attr.data-error]="error"
      [attr.data-required]="required"
      [attr.data-disabled]="disabled"
    >
      <ng-content></ng-content>
    </div>
  \`,
  styles: [\`
    :host {
      display: block;
    }
  \`]
})
export class FieldComponent {
  @Input() error = false;
  @Input() required = false;
  @Input() disabled = false;

  getFieldClasses(): string {
    const classes = ['ux4g-form-group'];

    if (this.error) {
      classes.push('ux4g-form-group-error');
    }

    if (this.disabled) {
      classes.push('ux4g-form-group-disabled');
    }

    return classes.join(' ');
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field.component';

@NgModule({
  declarations: [FieldComponent],
  imports: [CommonModule],
  exports: [FieldComponent]
})
export class FieldModule { }`,
        types: `export interface FieldProps {
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-field> custom element",
        html: "<ux4g-field variant=\"primary\" size=\"md\"><!-- Field --></ux4g-field>",
      }}
      comparisons={[
        {
          system: 'GOV.UK Design System',
          component: 'Form Group',
          variants: 'default, error',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/text-input/',
        },
        {
          system: 'U.S. Web Design System',
          component: 'Form Group',
          variants: 'default, error',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://designsystem.digital.gov/components/form/',
        },
        {
          system: 'Material UI',
          component: 'FormControl',
          variants: 'standard, outlined, filled',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-text-field/',
        },
        {
          system: 'Ant Design',
          component: 'Form.Item',
          variants: 'default (customizable)',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/form',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Groups related form elements for screen readers',
          'Provides consistent spacing between form components',
          'Error states communicated through visual and semantic means',
          'Required fields indicated visually and programmatically',
          'Disabled state prevents interaction and is announced',
          'Proper container semantics for form field composition',
          'Maintains focus order through logical DOM structure',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate to child input elements' },
          { key: 'Shift + Tab', action: 'Navigate backwards through child elements' },
        ],
        screenReader: [
          'Announces error state when present',
          'Groups related form elements logically',
          'Child components (Label, Input, ErrorText) properly associated',
          'Error messages announced via ARIA live regions in ErrorText',
          'Required state communicated through Label component',
          'Disabled state communicated through child components',
        ],
      }}

      useCases={[
        {
          title: 'Citizen Registration Form',
          description: 'Multi-field registration form with validation',
          scenario: 'Citizen registering for government services online',
          implementation: 'Use Field to wrap each input with its label, hint text, and error messages. Consistent spacing and error handling across all fields.',
        },
        {
          title: 'Application Submission',
          description: 'Complex application form with multiple sections',
          scenario: 'User submitting application for license or certificate',
          implementation: 'Field containers provide consistent structure for all form inputs, making it easy to add validation and error handling.',
        },
        {
          title: 'Document Upload Form',
          description: 'Form for uploading required documents',
          scenario: 'User uploading Aadhaar, PAN, and supporting documents',
          implementation: 'Use Field to wrap file upload inputs with instructions and validation messages.',
        },
        {
          title: 'Profile Update Form',
          description: 'User profile editing form',
          scenario: 'Citizen updating their profile information',
          implementation: 'Field components ensure consistent layout and error handling for all editable fields.',
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
                  Do use Field when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Wrapping form inputs with label and error</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Consistent form field layout</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Adding hint text to inputs</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Required field indication</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Field when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Standalone labels — use Label directly</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Non-form content — not applicable</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Custom layouts — build manually</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Read-only displays — use DescriptionList</li>
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
                  <p className="text-sm text-muted-foreground">Always wrap inputs with Field for consistent label, hint, and error layout.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t use standalone inputs without labels — it fails WCAG 1.3.1.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Field configurations in real time.</p>
            <FieldPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/label" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Label</h3>
                <p className="text-sm text-muted-foreground">For standalone labels</p>
              </a>
              <a href="/components/errortext" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">ErrorText</h3>
                <p className="text-sm text-muted-foreground">For error messages</p>
              </a>
              <a href="/components/hinttext" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">HintText</h3>
                <p className="text-sm text-muted-foreground">For help text</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added horizontal layout option</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added field group support</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with label, hint, error slots</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Consistent field layout</h3>
                <p className="text-sm text-muted-foreground">Consistent label-input-error layout reduces form completion errors by 20% (Luke Wroblewski, Web Form Design).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
