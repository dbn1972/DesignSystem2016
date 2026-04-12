import{j as e}from"./index-BYMLq1ET.js";import{C as s}from"./ComponentDocumentation-CxrYZXwp.js";import{I as o}from"./info-117bcUyF.js";import"./copy-Ck_ch6Lp.js";import"./external-link-Ckpfpf0L.js";const r=({children:t,required:n})=>e.jsxs("label",{className:"block text-sm font-medium text-gray-900",children:[t,n&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),i=({...t})=>e.jsx("input",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2 transition-all",...t}),a=({children:t,icon:n})=>e.jsxs("p",{className:"text-sm text-gray-600 flex items-start gap-2",children:[n&&e.jsx(o,{className:"w-4 h-4 mt-0.5 flex-shrink-0"}),e.jsx("span",{children:t})]});function u(){return e.jsx(s,{name:"HintText",description:"Helper text displayed below form fields to provide additional guidance, context, or examples. Improves form usability by clarifying expected input formats and requirements in government service forms.",category:"Form Elements",maturity:"beta",tier:"core",since:"v2.0.0",updated:"v2.0.0",props:[{name:"children",type:"ReactNode",required:!0,description:"Helper text content."},{name:"id",type:"string",required:!1,description:"ID for ARIA association with input (aria-describedby)."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply."}],examples:[{title:"Basic Helper Text",description:"Simple hint text below an input field.",code:`import { Label, Input, HintText } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="your@email.com" />
      <HintText>We'll never share your email with anyone.</HintText>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"email",children:"Email Address"}),e.jsx(i,{id:"email",type:"email",placeholder:"your@email.com"}),e.jsx(a,{children:"We'll never share your email with anyone."})]})},{title:"Format Guidance",description:"Hint text providing format examples.",code:`import { Label, Input, HintText } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="phone" required>Phone Number</Label>
      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
      <HintText>Enter phone number with country code (e.g., +91 98765 43210)</HintText>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"phone",required:!0,children:"Phone Number"}),e.jsx(i,{id:"phone",type:"tel",placeholder:"+91 98765 43210"}),e.jsx(a,{children:"Enter phone number with country code (e.g., +91 98765 43210)"})]})},{title:"Password Requirements",description:"Hint text explaining password rules.",code:`import { Label, Input, HintText } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="password" required>Password</Label>
      <Input id="password" type="password" />
      <HintText>
        Password must be at least 8 characters with uppercase,
        lowercase, number, and special character.
      </HintText>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"password",required:!0,children:"Password"}),e.jsx(i,{id:"password",type:"password"}),e.jsx(a,{children:"Password must be at least 8 characters with uppercase, lowercase, number, and special character."})]})},{title:"With ARIA Association",description:"Hint text properly associated with input for screen readers.",code:`import { Label, Input, HintText } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="aadhaar" required>Aadhaar Number</Label>
      <Input
        id="aadhaar"
        type="text"
        placeholder="XXXX XXXX XXXX"
        aria-describedby="aadhaar-hint"
      />
      <HintText id="aadhaar-hint">
        Enter 12-digit Aadhaar number without spaces
      </HintText>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"aadhaar",required:!0,children:"Aadhaar Number"}),e.jsx(i,{id:"aadhaar",type:"text",placeholder:"XXXX XXXX XXXX"}),e.jsx(a,{children:"Enter 12-digit Aadhaar number without spaces"})]})},{title:"Multiple Hints",description:"Form with helper text on multiple fields.",code:`import { Label, Input, Textarea, HintText } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="pan" required>PAN Card Number</Label>
        <Input id="pan" placeholder="ABCDE1234F" />
        <HintText>Format: 5 letters + 4 digits + 1 letter</HintText>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Textarea id="address" rows={3} />
        <HintText>Include street, landmark, and pin code</HintText>
      </div>
    </div>
  );
}`,preview:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"pan",required:!0,children:"PAN Card Number"}),e.jsx(i,{id:"pan",placeholder:"ABCDE1234F"}),e.jsx(a,{children:"Format: 5 letters + 4 digits + 1 letter"})]})})}],reactCode:{component:`import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface HintTextProps
  extends HTMLAttributes<HTMLSpanElement>,
    BaseComponentProps,
    ChildrenProp {}

export const HintText = forwardRef<HTMLSpanElement, HintTextProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('ux4g-helper-text', className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

HintText.displayName = 'HintText';`,types:`import { HTMLAttributes } from 'react';
import { BaseComponentProps, ChildrenProp } from '../../types/common';

export interface HintTextProps
  extends HTMLAttributes<HTMLSpanElement>,
    BaseComponentProps,
    ChildrenProp {}`},angularCode:{component:`import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-hint-text',
  template: \`
    <span [id]="id" class="ux4g-helper-text">
      <ng-content></ng-content>
    </span>
  \`,
  styles: [\`
    :host {
      display: block;
    }
  \`]
})
export class HintTextComponent {
  @Input() id?: string;
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintTextComponent } from './hint-text.component';

@NgModule({
  declarations: [HintTextComponent],
  imports: [CommonModule],
  exports: [HintTextComponent]
})
export class HintTextModule { }`,types:`export interface HintTextProps {
  id?: string;
}`},comparisons:[{system:"GOV.UK Design System",component:"Hint",variants:"default",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/text-input/"},{system:"U.S. Web Design System",component:"Form Hint",variants:"default",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://designsystem.digital.gov/components/form/"},{system:"Material UI",component:"FormHelperText",variants:"standard, outlined, filled",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/api/form-helper-text/"},{system:"Ant Design",component:"Form.Item (extra prop)",variants:"default",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/form"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Provides context and guidance for form inputs","Can be associated with inputs using aria-describedby","Screen readers announce hint text when input receives focus","Uses semantic <span> element with appropriate styling","Distinguishable from error text through color and tone","Helps users understand expected input format before errors occur","Color contrast ratio meets 4.5:1 for text (WCAG 1.4.3)","Visible to all users without requiring interaction"],keyboardSupport:[{key:"N/A",action:"Hint text is not interactive"}],screenReader:["Announced when associated input receives focus (via aria-describedby)","Read after label but before input value","Provides context before user starts typing","Long hints read completely without truncation","Not announced as separate landmark or region"]},useCases:[{title:"Aadhaar Number Input",description:"Guidance for Aadhaar format",scenario:"User entering 12-digit Aadhaar number",implementation:'Hint text explains format: "Enter 12-digit Aadhaar number without spaces". Associated with input via aria-describedby.'},{title:"PAN Card Input",description:"PAN card format guidance",scenario:"User providing PAN for tax-related services",implementation:'Hint text shows format: "Format: 5 letters + 4 digits + 1 letter" with example.'},{title:"Phone Number Input",description:"Phone format with country code",scenario:"User entering phone for verification",implementation:'Hint text: "Enter phone number with country code (e.g., +91 98765 43210)".'},{title:"Document Upload",description:"File upload restrictions",scenario:"User uploading supporting documents",implementation:'Hint text explains: "Supported formats: PDF, JPG, PNG. Maximum size: 2MB".'}]})}export{u as default};
