/**
 * ErrorText Component Documentation Page
 * Complete documentation for the ErrorText component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { AlertCircle } from 'lucide-react';

// Component previews
const LabelPreview = ({ children, required }: any) => (
  <label className="block text-sm font-medium text-gray-900">
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
);

const InputPreview = ({ error, ...props }: any) => (
  <input
    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all ${
      error
        ? 'border-red-500 focus-visible:ring-red-500'
        : 'border-gray-300 focus-visible:ring-[#005196]'
    }`}
    {...props}
  />
);

const ErrorTextPreview = ({ children, icon }: any) => (
  <p className="text-sm text-red-600 flex items-start gap-2" role="alert">
    {icon && <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />}
    <span>{children}</span>
  </p>
);

export default function ComponentErrorTextPage() {
  const [email, setEmail] = React.useState('invalid-email');
  const [password, setPassword] = React.useState('123');

  const emailError = !email.includes('@');
  const passwordError = password.length < 8;

  return (
    <ComponentDocumentation
      name="ErrorText"
      description="Error message text displayed below form fields with ARIA live region support. Provides clear, actionable error messages that are announced to screen readers for accessible form validation in government services."
      category="Form Elements"
      maturity="beta"
      tier="core"
      since="v2.0.0"
      updated="v2.0.0"

      props={[
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Error message content.',
        },
        {
          name: 'id',
          type: 'string',
          required: false,
          description: 'ID for ARIA association with input (aria-describedby).',
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
          title: 'Basic Error Message',
          description: 'Simple error text displayed below an invalid input.',
          code: `import { Label, Input, ErrorText } from '@ux4g/react-core';

function Example() {
  const [email, setEmail] = useState('invalid-email');
  const error = !email.includes('@');

  return (
    <div className="space-y-2">
      <Label htmlFor="email" required>Email Address</Label>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />
      {error && <ErrorText>Please enter a valid email address</ErrorText>}
    </div>
  );
}`,
          preview: (
            <div className="space-y-2">
              <LabelPreview htmlFor="email" required>Email Address</LabelPreview>
              <InputPreview
                id="email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                error={emailError}
              />
              {emailError && <ErrorTextPreview>Please enter a valid email address</ErrorTextPreview>}
            </div>
          ),
        },
        {
          title: 'Password Validation',
          description: 'Error message for password requirements.',
          code: `import { Label, Input, ErrorText } from '@ux4g/react-core';

function Example() {
  const [password, setPassword] = useState('');
  const error = password.length > 0 && password.length < 8;

  return (
    <div className="space-y-2">
      <Label htmlFor="password" required>Password</Label>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={error}
      />
      {error && (
        <ErrorText>Password must be at least 8 characters long</ErrorText>
      )}
    </div>
  );
}`,
          preview: (
            <div className="space-y-2">
              <LabelPreview htmlFor="password" required>Password</LabelPreview>
              <InputPreview
                id="password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                error={passwordError}
              />
              {passwordError && (
                <ErrorTextPreview>Password must be at least 8 characters long</ErrorTextPreview>
              )}
            </div>
          ),
        },
        {
          title: 'With ARIA Association',
          description: 'Error text properly associated with input for screen readers.',
          code: `import { Label, Input, ErrorText } from '@ux4g/react-core';

function Example() {
  const [pan, setPan] = useState('ABC123');
  const error = !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan);

  return (
    <div className="space-y-2">
      <Label htmlFor="pan" required>PAN Card Number</Label>
      <Input
        id="pan"
        value={pan}
        onChange={(e) => setPan(e.target.value)}
        error={error}
        aria-invalid={error}
        aria-describedby={error ? "pan-error" : undefined}
      />
      {error && (
        <ErrorText id="pan-error">
          Invalid PAN format. Expected: ABCDE1234F
        </ErrorText>
      )}
    </div>
  );
}`,
          preview: (
            <div className="space-y-2">
              <LabelPreview htmlFor="pan" required>PAN Card Number</LabelPreview>
              <InputPreview id="pan" defaultValue="ABC123" error />
              <ErrorTextPreview>Invalid PAN format. Expected: ABCDE1234F</ErrorTextPreview>
            </div>
          ),
        },
        {
          title: 'Multiple Field Errors',
          description: 'Form with validation errors on multiple fields.',
          code: `import { Field, Label, Input, ErrorText } from '@ux4g/react-core';

function Example() {
  const [errors, setErrors] = useState({
    name: 'Name is required',
    email: 'Invalid email format',
    phone: 'Phone number must be 10 digits',
  });

  return (
    <div className="space-y-6">
      <Field error={!!errors.name}>
        <Label htmlFor="name" required>Full Name</Label>
        <Input id="name" error={!!errors.name} />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </Field>

      <Field error={!!errors.email}>
        <Label htmlFor="email" required>Email</Label>
        <Input id="email" type="email" error={!!errors.email} />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </Field>

      <Field error={!!errors.phone}>
        <Label htmlFor="phone" required>Phone</Label>
        <Input id="phone" type="tel" error={!!errors.phone} />
        {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
      </Field>
    </div>
  );
}`,
          preview: (
            <div className="space-y-6">
              <div className="space-y-2">
                <LabelPreview htmlFor="name" required>Full Name</LabelPreview>
                <InputPreview id="name" error />
                <ErrorTextPreview>Name is required</ErrorTextPreview>
              </div>
              <div className="space-y-2">
                <LabelPreview htmlFor="email" required>Email</LabelPreview>
                <InputPreview id="email" type="email" error />
                <ErrorTextPreview>Invalid email format</ErrorTextPreview>
              </div>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface ErrorTextProps
  extends HTMLAttributes<HTMLSpanElement>,
    BaseComponentProps,
    ChildrenProp {}

export const ErrorText = forwardRef<HTMLSpanElement, ErrorTextProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('ux4g-error-message', className)}
        role="alert"
        {...props}
      >
        {children}
      </span>
    );
  }
);

ErrorText.displayName = 'ErrorText';`,
        types: `import { HTMLAttributes } from 'react';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface ErrorTextProps
  extends HTMLAttributes<HTMLSpanElement>,
    BaseComponentProps,
    ChildrenProp {}`,
      }}

      angularCode={{
        component: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-error-text',
  template: \`
    <span
      [id]="id"
      class="ux4g-error-message"
      role="alert"
      aria-live="polite"
    >
      <ng-content></ng-content>
    </span>
  \`,
  styles: [\`
    :host {
      display: block;
    }
  \`]
})
export class ErrorTextComponent {
  @Input() id?: string;
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorTextComponent } from './error-text.component';

@NgModule({
  declarations: [ErrorTextComponent],
  imports: [CommonModule],
  exports: [ErrorTextComponent]
})
export class ErrorTextModule { }`,
        types: `export interface ErrorTextProps {
  id?: string;
}`,
      }}

      comparisons={[
        {
          system: 'GOV.UK Design System',
          component: 'Error Message',
          variants: 'default (with red left border)',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/error-message/',
        },
        {
          system: 'U.S. Web Design System',
          component: 'Error Message',
          variants: 'default (red text with icon)',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://designsystem.digital.gov/components/form/',
        },
        {
          system: 'Material UI',
          component: 'FormHelperText (error prop)',
          variants: 'standard, outlined, filled',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-text-field/',
        },
        {
          system: 'Ant Design',
          component: 'Form.Item (validateStatus="error")',
          variants: 'default',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/form',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Uses role="alert" for immediate screen reader announcement',
          'ARIA live region ensures errors are announced when they appear',
          'Can be associated with inputs using aria-describedby',
          'Red color combined with icon/text (not color alone)',
          'Clear, actionable error messages for all users',
          'Error state indicated on input with aria-invalid',
          'Announced immediately when validation fails',
          'Color contrast ratio meets 4.5:1 for text (WCAG 1.4.3)',
        ],
        keyboardSupport: [
          { key: 'N/A', action: 'Error text is not interactive' },
        ],
        screenReader: [
          'Immediately announced when error appears (role="alert")',
          'Announced when associated input receives focus (via aria-describedby)',
          'Read after label and hint text',
          'Error state on input announced via aria-invalid',
          'Long error messages read completely',
          'Multiple errors announced separately',
        ],
      }}

      useCases={[
        {
          title: 'Aadhaar Validation',
          description: 'Invalid Aadhaar format error',
          scenario: 'User enters incorrectly formatted Aadhaar number',
          implementation: 'ErrorText shows: "Aadhaar number must be exactly 12 digits". Associated with input via aria-describedby.',
        },
        {
          title: 'PAN Card Validation',
          description: 'Invalid PAN format error',
          scenario: 'User enters incorrect PAN card format',
          implementation: 'ErrorText shows: "Invalid PAN format. Expected: ABCDE1234F" with example.',
        },
        {
          title: 'Required Field Validation',
          description: 'Missing required field error',
          scenario: 'User attempts to submit form with empty required field',
          implementation: 'ErrorText shows: "This field is required" or field-specific message.',
        },
        {
          title: 'Email Validation',
          description: 'Invalid email format error',
          scenario: 'User enters email without @ symbol',
          implementation: 'ErrorText shows: "Please enter a valid email address".',
        },
      ]}
    />
  );
}
