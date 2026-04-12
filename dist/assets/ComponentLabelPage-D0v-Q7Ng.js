import{j as e}from"./index-wYwTiNL-.js";import{C as o}from"./ComponentDocumentation-DKnXH-Pi.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const a=({required:i,disabled:s,children:r,...l})=>e.jsxs("label",{className:`block text-sm font-medium ${s?"text-gray-400 cursor-not-allowed":"text-gray-900"}`,...l,children:[r,i&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),t=({...i})=>e.jsx("input",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2 transition-all",...i});function u(){return e.jsx(o,{name:"Label",description:"Form field label with required indicator support. Provides accessible, semantic labeling for form inputs with proper associations and visual indicators for mandatory fields in government forms.",category:"Form Elements",maturity:"beta",tier:"core",since:"v2.0.0",updated:"v2.0.0",props:[{name:"htmlFor",type:"string",required:!1,description:"ID of the associated form control. Creates proper label-input association."},{name:"required",type:"boolean",default:"false",required:!1,description:"Whether to show required indicator (*). Adds visual asterisk after label text."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the label is for a disabled field. Applies muted styling."},{name:"children",type:"ReactNode",required:!0,description:"Label text content."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply."}],examples:[{title:"Basic Label",description:"Simple label associated with an input.",code:`import { Label, Input } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="name">Full Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"name",children:"Full Name"}),e.jsx(t,{id:"name",placeholder:"Enter your name"})]})},{title:"Required Label",description:"Label with required indicator for mandatory fields.",code:`import { Label, Input } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email" required>Email Address</Label>
      <Input id="email" type="email" required />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"email",required:!0,children:"Email Address"}),e.jsx(t,{id:"email",type:"email",required:!0})]})},{title:"Disabled Label",description:"Label for disabled input field.",code:`import { Label, Input } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="username" disabled>Username</Label>
      <Input id="username" value="john_doe" disabled />
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"username",disabled:!0,children:"Username"}),e.jsx(t,{id:"username",defaultValue:"john_doe",disabled:!0})]})},{title:"Multiple Form Fields",description:"Labels for a complete form.",code:`import { Label, Input, Textarea, Select } from '@ux4g/react-core';

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
}`,preview:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"name",required:!0,children:"Full Name"}),e.jsx(t,{id:"name"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"email",required:!0,children:"Email"}),e.jsx(t,{id:"email",type:"email"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"state",children:"State"}),e.jsx(t,{id:"state",as:"select"})]})]})}],reactCode:{component:`import React, { forwardRef, LabelHTMLAttributes } from 'react';
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

Label.displayName = 'Label';`,types:`import { LabelHTMLAttributes } from 'react';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    BaseComponentProps,
    ChildrenProp {
  required?: boolean;
  disabled?: boolean;
}`},angularCode:{component:`import { Component, Input } from '@angular/core';

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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label.component';

@NgModule({
  declarations: [LabelComponent],
  imports: [CommonModule],
  exports: [LabelComponent]
})
export class LabelModule { }`,types:`export interface LabelProps {
  htmlFor?: string;
  required?: boolean;
  disabled?: boolean;
}`},comparisons:[{system:"GOV.UK Design System",component:"Label",variants:"default (with optional hint)",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/text-input/"},{system:"U.S. Web Design System",component:"Label",variants:"default (with required indicator)",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://designsystem.digital.gov/components/form/"},{system:"Material UI",component:"InputLabel / FormLabel",variants:"standard, outlined, filled",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/api/input-label/"},{system:"Ant Design",component:"Form.Item (label prop)",variants:"default (customizable)",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/form"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Uses semantic <label> element for proper form associations","htmlFor attribute creates programmatic relationship with input","Screen readers announce label text when input receives focus","Required indicator (*) is visible to all users","Disabled state conveyed through visual styling and semantic attributes","Clicking label focuses associated input (improves touch targets)","Color contrast ratio meets 4.5:1 for text (WCAG 1.4.3)","Clear visual distinction between normal and disabled states"],keyboardSupport:[{key:"Mouse Click",action:"Focus associated input element"},{key:"Tab",action:"Skip to next focusable element (labels not focusable)"}],screenReader:["Announces label text when associated input receives focus","Required state conveyed through visual asterisk (announced by context)","Disabled state conveyed through parent field or input element","Label text read before input value","Long labels read completely without truncation"]},useCases:[{title:"Aadhaar Number Input",description:"Label for Aadhaar card number input",scenario:"User entering Aadhaar number for identity verification",implementation:"Use required prop to indicate mandatory field. Associate with Aadhaar input component using htmlFor."},{title:"PAN Card Input",description:"Label for PAN card number",scenario:"User providing PAN for tax-related services",implementation:"Clear label text with required indicator. Associated with PAN input for proper accessibility."},{title:"Multi-language Forms",description:"Labels in regional languages",scenario:"Forms in Hindi, Tamil, or other scheduled languages",implementation:"Label component supports all Unicode characters for multi-language content."},{title:"Application Forms",description:"Labels for government application forms",scenario:"Citizen applying for certificate or license",implementation:"Consistent labeling across all form fields with required indicators where needed."}]})}export{u as default};
