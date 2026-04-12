import{j as e}from"./index-LBJNeHTL.js";import{C as a}from"./ComponentDocumentation-DvEedSJi.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const i=({orientation:t="horizontal",variant:r="solid"})=>t==="vertical"?e.jsxs("div",{className:"flex items-center h-24",children:[e.jsx("div",{className:"bg-purple-100 border-2 border-purple-300 rounded-lg p-4",children:"Left"}),e.jsx("div",{className:`mx-4 h-full w-px ${r==="dashed"?"border-l border-dashed border-gray-300":"bg-gray-300"}`}),e.jsx("div",{className:"bg-purple-100 border-2 border-purple-300 rounded-lg p-4",children:"Right"})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-purple-100 border-2 border-purple-300 rounded-lg p-4",children:"Content Above"}),e.jsx("div",{className:`h-px ${r==="dashed"?"border-t border-dashed border-gray-300":"bg-gray-300"}`}),e.jsx("div",{className:"bg-purple-100 border-2 border-purple-300 rounded-lg p-4",children:"Content Below"})]});function p(){return e.jsx(a,{name:"Divider",description:"Visual separator component to divide content into distinct sections. Supports horizontal and vertical orientations with optional text labels.",category:"Layout",maturity:"stable",tier:"foundation",since:"v1.0.0",props:[{name:"orientation",type:"'horizontal' | 'vertical'",default:"'horizontal'",required:!1,description:"Orientation of the divider line."},{name:"variant",type:"'solid' | 'dashed' | 'dotted'",default:"'solid'",required:!1,description:"Style of the divider line."},{name:"label",type:"string | ReactNode",required:!1,description:"Optional label text to display in divider."},{name:"labelPosition",type:"'left' | 'center' | 'right'",default:"'center'",required:!1,description:"Position of label (horizontal only)."},{name:"spacing",type:"'none' | 'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Spacing around the divider."}],examples:[{title:"Horizontal Divider",description:"Basic horizontal separator.",code:`import { Divider } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <p>Content above divider</p>
      <Divider />
      <p>Content below divider</p>
    </div>
  );
}`,preview:e.jsx(i,{orientation:"horizontal",variant:"solid"})},{title:"Vertical Divider",description:"Vertical separator between elements.",code:`import { Divider } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex items-center">
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  );
}`,preview:e.jsx(i,{orientation:"vertical",variant:"solid"})},{title:"With Label",description:"Divider with centered text label.",code:`import { Divider } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <p>Section 1</p>
      <Divider label="OR" />
      <p>Section 2</p>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-purple-100 border-2 border-purple-300 rounded-lg p-4",children:"Section 1"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"flex-1 h-px bg-gray-300"}),e.jsx("span",{className:"text-sm font-semibold text-gray-600",children:"OR"}),e.jsx("div",{className:"flex-1 h-px bg-gray-300"})]}),e.jsx("div",{className:"bg-purple-100 border-2 border-purple-300 rounded-lg p-4",children:"Section 2"})]})},{title:"Dashed Divider",description:"Dashed line variant.",code:`import { Divider } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <p>Content above</p>
      <Divider variant="dashed" />
      <p>Content below</p>
    </div>
  );
}`,preview:e.jsx(i,{orientation:"horizontal",variant:"dashed"})}],reactCode:{component:`import React from 'react';
import { cn } from '../../utils/cn';
import { DividerProps } from './Divider.types';

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  label,
  labelPosition = 'center',
  spacing = 'md',
  className,
}) => {
  const spacingClasses = {
    none: orientation === 'horizontal' ? 'my-0' : 'mx-0',
    sm: orientation === 'horizontal' ? 'my-2' : 'mx-2',
    md: orientation === 'horizontal' ? 'my-4' : 'mx-4',
    lg: orientation === 'horizontal' ? 'my-6' : 'mx-6',
  };
  
  const variantClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };
  
  // Horizontal divider with label
  if (orientation === 'horizontal' && label) {
    return (
      <div className={cn('flex items-center', spacingClasses[spacing], className)}>
        {labelPosition !== 'left' && (
          <div className={cn('flex-1', variantClasses[variant], 'border-t border-gray-300')} />
        )}
        <span className="px-4 text-sm font-semibold text-gray-600">
          {label}
        </span>
        {labelPosition !== 'right' && (
          <div className={cn('flex-1', variantClasses[variant], 'border-t border-gray-300')} />
        )}
      </div>
    );
  }
  
  // Horizontal divider without label
  if (orientation === 'horizontal') {
    return (
      <hr
        className={cn(
          'border-0 border-t border-gray-300',
          variantClasses[variant],
          spacingClasses[spacing],
          className
        )}
      />
    );
  }
  
  // Vertical divider
  return (
    <div
      className={cn(
        'self-stretch w-px bg-gray-300',
        spacingClasses[spacing],
        className
      )}
      role="separator"
      aria-orientation="vertical"
    />
  );
};`,types:`export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';
export type DividerLabelPosition = 'left' | 'center' | 'right';
export type DividerSpacing = 'none' | 'sm' | 'md' | 'lg';

export interface DividerProps {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  label?: string | React.ReactNode;
  labelPosition?: DividerLabelPosition;
  spacing?: DividerSpacing;
  className?: string;
}`},angularCode:{component:`import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-divider',
  template: \`
    <!-- Horizontal with label -->
    <div *ngIf="orientation === 'horizontal' && label"
         [class]="getContainerClasses()">
      <div *ngIf="labelPosition !== 'left'" 
           [class]="getLineClasses()"></div>
      <span class="px-4 text-sm font-semibold text-gray-600">{{ label }}</span>
      <div *ngIf="labelPosition !== 'right'" 
           [class]="getLineClasses()"></div>
    </div>
    
    <!-- Horizontal without label -->
    <hr *ngIf="orientation === 'horizontal' && !label"
        [class]="getHrClasses()" />
    
    <!-- Vertical -->
    <div *ngIf="orientation === 'vertical'"
         [class]="getVerticalClasses()"
         role="separator"
         aria-orientation="vertical">
    </div>
  \`
})
export class DividerComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() variant: 'solid' | 'dashed' | 'dotted' = 'solid';
  @Input() label?: string;
  @Input() labelPosition: 'left' | 'center' | 'right' = 'center';
  @Input() spacing: 'none' | 'sm' | 'md' | 'lg' = 'md';
  
  getContainerClasses(): string {
    const spacingClasses = {
      none: 'my-0',
      sm: 'my-2',
      md: 'my-4',
      lg: 'my-6',
    };
    return \`flex items-center \${spacingClasses[this.spacing]}\`;
  }
  
  getLineClasses(): string {
    const variantClasses = {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    };
    return \`flex-1 border-t border-gray-300 \${variantClasses[this.variant]}\`;
  }
  
  getHrClasses(): string {
    const spacingClasses = {
      none: 'my-0',
      sm: 'my-2',
      md: 'my-4',
      lg: 'my-6',
    };
    const variantClasses = {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    };
    return \`border-0 border-t border-gray-300 \${variantClasses[this.variant]} \${spacingClasses[this.spacing]}\`;
  }
  
  getVerticalClasses(): string {
    const spacingClasses = {
      none: 'mx-0',
      sm: 'mx-2',
      md: 'mx-4',
      lg: 'mx-6',
    };
    return \`self-stretch w-px bg-gray-300 \${spacingClasses[this.spacing]}\`;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider.component';

@NgModule({
  declarations: [DividerComponent],
  imports: [CommonModule],
  exports: [DividerComponent]
})
export class DividerModule { }`,types:`export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';
export type DividerLabelPosition = 'left' | 'center' | 'right';
export type DividerSpacing = 'none' | 'sm' | 'md' | 'lg';`},comparisons:[{system:"Material UI (Google)",component:"Divider",variants:"horizontal, vertical, with text, inset",accessibility:"N/A (Visual)",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-divider/"},{system:"Ant Design (Alibaba)",component:"Divider",variants:"horizontal, vertical, with text, dashed",accessibility:"N/A (Visual)",documentation:"Good",link:"https://ant.design/components/divider"},{system:"Chakra UI",component:"Divider",variants:"horizontal, vertical, orientation",accessibility:"ARIA separator role",documentation:"Good",link:"https://chakra-ui.com/docs/components/divider"}],accessibility:{wcagLevel:"Visual Component (No specific WCAG criteria)",features:["Semantic <hr> element for horizontal dividers",'role="separator" for vertical dividers',"aria-orientation attribute on vertical dividers","Does not interfere with screen readers","Purely decorative/visual element"],keyboardSupport:[{key:"N/A",action:"Divider is non-interactive visual element"}],screenReader:["Typically ignored by screen readers","Does not announce unless labeled","Visual separation only"]},tokens:{file:"/tokens/layout/divider.json",mappings:[{property:"Color",token:"divider.color",value:"#D1D5DB (Gray 300)"},{property:"Thickness",token:"divider.thickness",value:"1px"},{property:"Spacing (SM)",token:"divider.spacing.sm",value:"8px"},{property:"Spacing (MD)",token:"divider.spacing.md",value:"16px"},{property:"Spacing (LG)",token:"divider.spacing.lg",value:"24px"}]}})}export{p as default};
