import{j as e}from"./index-LBJNeHTL.js";import{C as r}from"./ComponentDocumentation-DvEedSJi.js";import{S as s}from"./save-Cchqx7pR.js";import{S as d}from"./send-BE8YrtDR.js";import{T as l}from"./trash-2-C2vR3CRM.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const t=({variant:n,size:a,children:i,...o})=>e.jsx("button",{className:`inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] ${n==="primary"?"bg-[#005196] text-white border-[#005196] hover:bg-[#004178]":n==="secondary"?"bg-white text-[#005196] border-[#005196] hover:bg-[#f5f5f5]":n==="tertiary"?"bg-transparent text-[#005196] border-transparent hover:bg-[#f5f5f5]":n==="danger"?"bg-[#dc2626] text-white border-[#dc2626] hover:bg-[#991b1b]":"bg-[#008800] text-white border-[#008800] hover:bg-[#006600]"} ${a==="sm"?"h-8 px-3 text-sm":a==="lg"?"h-12 px-6 text-lg":"h-10 px-4 text-base"}`,...o,children:i});function v(){return e.jsx(r,{name:"Button",description:"Primary interactive element for user actions across government services. Supports multiple variants, sizes, loading states, and icons with full accessibility compliance.",category:"Form Elements",maturity:"beta",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"variant",type:"'primary' | 'secondary' | 'tertiary' | 'danger' | 'success'",default:"'primary'",required:!1,description:"Visual variant of the button. Primary for main actions, secondary for alternative actions, tertiary for low-emphasis actions, danger for destructive actions, success for positive confirmations."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Size of the button. Small (32px), Medium (40px), Large (48px)."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the button is disabled. Prevents interaction and applies disabled styling."},{name:"loading",type:"boolean",default:"false",required:!1,description:"Loading state. Shows spinner and prevents interaction."},{name:"loadingText",type:"string",default:"'Loading...'",required:!1,description:"Text to display when loading. Announced to screen readers."},{name:"fullWidth",type:"boolean",default:"false",required:!1,description:"Whether the button should take full width of its container."},{name:"iconBefore",type:"ReactNode",required:!1,description:"Icon to display before button text."},{name:"iconAfter",type:"ReactNode",required:!1,description:"Icon to display after button text."},{name:"type",type:"'button' | 'submit' | 'reset'",default:"'button'",required:!1,description:"HTML button type attribute."},{name:"children",type:"ReactNode",required:!0,description:"Button content (text or elements)."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with variant classes."},{name:"onClick",type:"(event: MouseEvent) => void",required:!1,description:"Click event handler."}],examples:[{title:"Basic Variants",description:"All five button variants for different use cases.",code:`import { Button } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"}),e.jsx(t,{variant:"danger",children:"Danger"}),e.jsx(t,{variant:"success",children:"Success"})]})},{title:"Sizes",description:"Three button sizes: small (32px), medium (40px), and large (48px).",code:`import { Button } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"sm",children:"Small Button"}),e.jsx(t,{size:"md",children:"Medium Button"}),e.jsx(t,{size:"lg",children:"Large Button"})]})},{title:"With Icons",description:"Buttons can display icons before or after the text.",code:`import { Button } from '@ux4g/react-core';
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
}`,preview:e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(t,{variant:"primary",children:[e.jsx(s,{size:16}),e.jsx("span",{children:"Save Draft"})]}),e.jsxs(t,{variant:"secondary",children:[e.jsx("span",{children:"Send Message"}),e.jsx(d,{size:16})]}),e.jsxs(t,{variant:"danger",children:[e.jsx(l,{size:16}),e.jsx("span",{children:"Delete"})]})]})},{title:"Disabled State",description:"Disabled buttons prevent interaction and show reduced opacity.",code:`import { Button } from '@ux4g/react-core';

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
}`,preview:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{variant:"primary",disabled:!0,children:"Disabled Primary"}),e.jsx(t,{variant:"secondary",disabled:!0,children:"Disabled Secondary"})]})},{title:"Full Width",description:"Buttons can span the full width of their container.",code:`import { Button } from '@ux4g/react-core';

function Example() {
  return (
    <div className="max-w-md">
      <Button variant="primary" fullWidth>
        Submit Application
      </Button>
    </div>
  );
}`,preview:e.jsx("div",{className:"w-full max-w-md",children:e.jsx(t,{variant:"primary",style:{width:"100%"},children:"Submit Application"})})}],reactCode:{component:`import React, { forwardRef } from 'react';
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

Button.displayName = 'Button';`,types:`export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
          ButtonVariantProps {
  children?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  fullWidth?: boolean;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

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
          'bg-white text-[#005196] border-[#005196]',
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
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter } from '@angular/core';

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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent]
})
export class ButtonModule { }`,types:`export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';`},comparisons:[{system:"Material UI (Google)",component:"Button",variants:"text, contained, outlined",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-button/"},{system:"Ant Design (Alibaba)",component:"Button",variants:"primary, default, dashed, text, link",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/button"},{system:"GOV.UK Design System",component:"Button",variants:"default, secondary, warning",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/button/"},{system:"Chakra UI",component:"Button",variants:"solid, outline, ghost, link",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/button"},{system:"Radix UI",component:"Button (as styled primitive)",variants:"Custom (unstyled)",accessibility:"WCAG 2.1 AAA",documentation:"Good",link:"https://www.radix-ui.com/primitives/docs/components/button"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 44x44px touch target size (WCAG 2.5.5)","2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)","Color contrast ratios meet or exceed 4.5:1 for text (WCAG 1.4.3)","Semantic HTML button element for proper keyboard and assistive technology support","aria-disabled attribute for disabled state","aria-busy attribute for loading state","Screen reader announcements for loading text","Icons properly hidden from screen readers with aria-hidden"],keyboardSupport:[{key:"Tab",action:"Move focus to button"},{key:"Shift + Tab",action:"Move focus away from button"},{key:"Enter",action:"Activate button"},{key:"Space",action:"Activate button"}],screenReader:["Announces button role and label","Announces disabled state when applicable","Announces loading state with custom loadingText",'Icons are hidden from screen reader (aria-hidden="true")']},tokens:{file:"/tokens/components/button.json",mappings:[{property:"Height (Medium)",token:"base.height.md",value:"40px"},{property:"Padding Horizontal (Medium)",token:"base.padding.horizontal.md",value:"16px"},{property:"Border Radius",token:"base.borderRadius",value:"4px"},{property:"Font Size (Medium)",token:"base.fontSize.md",value:"16px"},{property:"Primary Background",token:"variant.primary.background.default",value:"#005196 (Navy 500)"},{property:"Primary Hover",token:"variant.primary.background.hover",value:"#004178 (Navy 600)"},{property:"Min Touch Target",token:"accessibility.minTouchTarget",value:"44px"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"}]}})}export{v as default};
