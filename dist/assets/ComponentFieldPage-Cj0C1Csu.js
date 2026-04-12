import{j as e}from"./index-wYwTiNL-.js";import{C as l}from"./ComponentDocumentation-DKnXH-Pi.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const t=({error:r,disabled:a,children:s})=>e.jsx("div",{className:`space-y-2 ${a?"opacity-60":""}`,children:s}),i=({children:r,required:a})=>e.jsxs("label",{className:"block text-sm font-medium text-gray-900",children:[r,a&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),o=({error:r,...a})=>e.jsx("input",{className:`w-full px-4 py-3 border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all ${r?"border-red-500 focus-visible:ring-red-500":"border-gray-300 focus-visible:ring-[#005196]"}`,...a}),n=({children:r})=>e.jsx("p",{className:"text-sm text-gray-600",children:r}),d=({children:r})=>e.jsx("p",{className:"text-sm text-red-600",role:"alert",children:r});function h(){return e.jsx(l,{name:"Field",description:"Container for form field composition that combines Label, Input, and HintText/ErrorText components. Provides consistent spacing, layout, and state management for form fields across government applications.",category:"Form Elements",maturity:"beta",tier:"core",since:"v2.0.0",updated:"v2.0.0",props:[{name:"children",type:"ReactNode",required:!0,description:"Form field components (Label, Input, HintText, ErrorText)."},{name:"error",type:"boolean",default:"false",required:!1,description:"Whether the field is in error state. Applies error styling to the container."},{name:"required",type:"boolean",default:"false",required:!1,description:"Whether the field is required."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the field is disabled. Applies disabled styling."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply."}],examples:[{title:"Basic Field",description:"Simple form field with label and input.",code:`import { Field, Label, Input } from '@ux4g/react-core';

function Example() {
  return (
    <Field>
      <Label htmlFor="name">Full Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </Field>
  );
}`,preview:e.jsxs(t,{children:[e.jsx(i,{children:"Full Name"}),e.jsx(o,{placeholder:"Enter your name"})]})},{title:"Field with Helper Text",description:"Form field with hint text for additional guidance.",code:`import { Field, Label, Input, HintText } from '@ux4g/react-core';

function Example() {
  return (
    <Field>
      <Label htmlFor="email" required>Email Address</Label>
      <Input id="email" type="email" placeholder="your@email.com" />
      <HintText>We'll never share your email with anyone.</HintText>
    </Field>
  );
}`,preview:e.jsxs(t,{children:[e.jsx(i,{required:!0,children:"Email Address"}),e.jsx(o,{type:"email",placeholder:"your@email.com"}),e.jsx(n,{children:"We'll never share your email with anyone."})]})},{title:"Field with Error",description:"Form field in error state with error message.",code:`import { Field, Label, Input, ErrorText } from '@ux4g/react-core';

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
}`,preview:e.jsxs(t,{error:!0,children:[e.jsx(i,{required:!0,children:"Email Address"}),e.jsx(o,{type:"email",defaultValue:"invalid-email",error:!0}),e.jsx(d,{children:"Please enter a valid email address"})]})},{title:"Disabled Field",description:"Form field in disabled state.",code:`import { Field, Label, Input } from '@ux4g/react-core';

function Example() {
  return (
    <Field disabled>
      <Label htmlFor="username">Username</Label>
      <Input id="username" value="john_doe" disabled />
    </Field>
  );
}`,preview:e.jsxs(t,{disabled:!0,children:[e.jsx(i,{children:"Username"}),e.jsx(o,{defaultValue:"john_doe",disabled:!0})]})},{title:"Complex Form with Multiple Fields",description:"Complete form using Field containers.",code:`import { Field, Label, Input, HintText, ErrorText, Select, Textarea } from '@ux4g/react-core';

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
}`,preview:e.jsxs("div",{className:"space-y-6",children:[e.jsxs(t,{children:[e.jsx(i,{required:!0,children:"Full Name"}),e.jsx(o,{})]}),e.jsxs(t,{children:[e.jsx(i,{required:!0,children:"Email Address"}),e.jsx(o,{type:"email"}),e.jsx(n,{children:"We'll use this for account notifications"})]})]})}],reactCode:{component:`import React, { forwardRef } from 'react';
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

Field.displayName = 'Field';`,types:`import { HTMLAttributes } from 'react';
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
}`},angularCode:{component:`import { Component, Input } from '@angular/core';

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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field.component';

@NgModule({
  declarations: [FieldComponent],
  imports: [CommonModule],
  exports: [FieldComponent]
})
export class FieldModule { }`,types:`export interface FieldProps {
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
}`},comparisons:[{system:"GOV.UK Design System",component:"Form Group",variants:"default, error",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/text-input/"},{system:"U.S. Web Design System",component:"Form Group",variants:"default, error",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://designsystem.digital.gov/components/form/"},{system:"Material UI",component:"FormControl",variants:"standard, outlined, filled",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-text-field/"},{system:"Ant Design",component:"Form.Item",variants:"default (customizable)",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/form"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Groups related form elements for screen readers","Provides consistent spacing between form components","Error states communicated through visual and semantic means","Required fields indicated visually and programmatically","Disabled state prevents interaction and is announced","Proper container semantics for form field composition","Maintains focus order through logical DOM structure"],keyboardSupport:[{key:"Tab",action:"Navigate to child input elements"},{key:"Shift + Tab",action:"Navigate backwards through child elements"}],screenReader:["Announces error state when present","Groups related form elements logically","Child components (Label, Input, ErrorText) properly associated","Error messages announced via ARIA live regions in ErrorText","Required state communicated through Label component","Disabled state communicated through child components"]},useCases:[{title:"Citizen Registration Form",description:"Multi-field registration form with validation",scenario:"Citizen registering for government services online",implementation:"Use Field to wrap each input with its label, hint text, and error messages. Consistent spacing and error handling across all fields."},{title:"Application Submission",description:"Complex application form with multiple sections",scenario:"User submitting application for license or certificate",implementation:"Field containers provide consistent structure for all form inputs, making it easy to add validation and error handling."},{title:"Document Upload Form",description:"Form for uploading required documents",scenario:"User uploading Aadhaar, PAN, and supporting documents",implementation:"Use Field to wrap file upload inputs with instructions and validation messages."},{title:"Profile Update Form",description:"User profile editing form",scenario:"Citizen updating their profile information",implementation:"Field components ensure consistent layout and error handling for all editable fields."}]})}export{h as default};
