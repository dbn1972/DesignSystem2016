import{j as e}from"./index-LBJNeHTL.js";import{C as o}from"./ComponentDocumentation-DvEedSJi.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const a=({variant:t,children:r})=>{const n={primary:"bg-[#005196] text-white",success:"bg-[#138808] text-white",warning:"bg-yellow-500 text-white",error:"bg-red-600 text-white",neutral:"bg-gray-100 text-gray-700"};return e.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-semibold ${n[t]}`,children:r})};function m(){return e.jsx(o,{name:"Badge",description:"Small status indicators and labels for highlighting information, counts, or status. Used throughout government interfaces to draw attention to important metadata.",category:"Feedback",maturity:"stable",tier:"foundation",since:"v1.0.0",props:[{name:"variant",type:"'primary' | 'success' | 'warning' | 'error' | 'neutral'",default:"'neutral'",required:!1,description:"Visual variant of the badge."},{name:"children",type:"ReactNode",required:!0,description:"Badge content (text or number)."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Size of the badge."}],examples:[{title:"Badge Variants",description:"Different badge styles for various contexts.",code:`import { Badge } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-3">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",children:"Error"}),e.jsx(a,{variant:"neutral",children:"Neutral"})]})}],reactCode:{component:`import React from 'react';
import { cn } from '../../utils/cn';
import { badgeVariants } from './badge.variants';
import { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  size = 'md',
  children,
  className,
}) => {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {children}
    </span>
  );
};`,types:`export type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
}`,variants:`import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full font-semibold',
  {
    variants: {
      variant: {
        primary: 'bg-[#005196] text-white',
        success: 'bg-[#138808] text-white',
        warning: 'bg-yellow-500 text-white',
        error: 'bg-red-600 text-white',
        neutral: 'bg-gray-100 text-gray-700',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'md',
    },
  }
);`},angularCode:{component:`import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-badge',
  template: '<span [class]="getBadgeClasses()"><ng-content></ng-content></span>'
})
export class BadgeComponent {
  @Input() variant: 'primary' | 'success' | 'warning' | 'error' | 'neutral' = 'neutral';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  
  getBadgeClasses(): string {
    return \`badge badge-\${this.variant} badge-\${this.size}\`;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';

@NgModule({
  declarations: [BadgeComponent],
  imports: [CommonModule],
  exports: [BadgeComponent]
})
export class BadgeModule { }`,types:`export type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';`},comparisons:[{system:"Material UI (Google)",component:"Badge / Chip",variants:"standard, outlined, dot",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-badge/"},{system:"Ant Design (Alibaba)",component:"Badge / Tag",variants:"default, status, ribbon",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/badge"},{system:"GOV.UK Design System",component:"Tag",variants:"default, grey, status colors",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/tag/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Sufficient color contrast (4.5:1 minimum)","Not relying on color alone for meaning","Semantic HTML span element","Readable text sizing"],keyboardSupport:[{key:"N/A",action:"Badges are non-interactive"}],screenReader:["Reads badge text content","Context provided by surrounding elements"]},tokens:{file:"/tokens/components/badge.json",mappings:[{property:"Primary Background",token:"badge.primary.bg",value:"#005196"},{property:"Success Background",token:"badge.success.bg",value:"#138808"},{property:"Warning Background",token:"badge.warning.bg",value:"#EAB308"},{property:"Error Background",token:"badge.error.bg",value:"#DC2626"}]}})}export{m as default};
