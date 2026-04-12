import{j as e}from"./index-wYwTiNL-.js";import{C as a}from"./ComponentDocumentation-DKnXH-Pi.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const r=({size:i="md",axis:t="vertical"})=>{const s={xs:t==="vertical"?"h-1":"w-1",sm:t==="vertical"?"h-2":"w-2",md:t==="vertical"?"h-4":"w-4",lg:t==="vertical"?"h-8":"w-8",xl:t==="vertical"?"h-16":"w-16"};return t==="horizontal"?e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"bg-orange-100 border-2 border-orange-300 rounded-lg p-4",children:"Left"}),e.jsx("div",{className:`${s[i]} bg-yellow-200 border border-yellow-400`}),e.jsx("div",{className:"bg-orange-100 border-2 border-orange-300 rounded-lg p-4",children:"Right"})]}):e.jsxs("div",{children:[e.jsx("div",{className:"bg-orange-100 border-2 border-orange-300 rounded-lg p-4",children:"Above"}),e.jsx("div",{className:`${s[i]} bg-yellow-200 border border-yellow-400`}),e.jsx("div",{className:"bg-orange-100 border-2 border-orange-300 rounded-lg p-4",children:"Below"})]})};function m(){return e.jsx(a,{name:"Spacer",description:"Flexible spacing component that creates empty space between elements. Useful for precise layout control and maintaining consistent spacing without margin/padding utilities.",category:"Layout",maturity:"stable",tier:"foundation",since:"v1.0.0",props:[{name:"size",type:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | number",default:"'md'",required:!1,description:"Size of the space (preset or custom pixels)."},{name:"axis",type:"'vertical' | 'horizontal' | 'both'",default:"'vertical'",required:!1,description:"Direction of spacing."},{name:"flex",type:"boolean",default:"false",required:!1,description:"Use flex:1 to fill available space."}],examples:[{title:"Vertical Spacing",description:"Create vertical space between elements.",code:`import { Spacer } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <p>First element</p>
      <Spacer size="md" />
      <p>Second element</p>
    </div>
  );
}`,preview:e.jsx(r,{size:"md",axis:"vertical"})},{title:"Horizontal Spacing",description:"Create horizontal space between elements.",code:`import { Spacer } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex">
      <span>Left</span>
      <Spacer size="md" axis="horizontal" />
      <span>Right</span>
    </div>
  );
}`,preview:e.jsx(r,{size:"md",axis:"horizontal"})},{title:"Size Variants",description:"Different spacing sizes.",code:`import { Spacer } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-8">
      <div>
        <p>Element</p>
        <Spacer size="xs" />
        <p>Extra Small (4px)</p>
      </div>
      
      <div>
        <p>Element</p>
        <Spacer size="sm" />
        <p>Small (8px)</p>
      </div>
      
      <div>
        <p>Element</p>
        <Spacer size="md" />
        <p>Medium (16px)</p>
      </div>
      
      <div>
        <p>Element</p>
        <Spacer size="lg" />
        <p>Large (32px)</p>
      </div>
      
      <div>
        <p>Element</p>
        <Spacer size="xl" />
        <p>Extra Large (64px)</p>
      </div>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-600 mb-1",children:"Extra Small (4px)"}),e.jsx(r,{size:"xs",axis:"vertical"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-600 mb-1",children:"Medium (16px)"}),e.jsx(r,{size:"md",axis:"vertical"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-600 mb-1",children:"Large (32px)"}),e.jsx(r,{size:"lg",axis:"vertical"})]})]})},{title:"Flexible Spacer",description:"Spacer that fills available space (flex: 1).",code:`import { Spacer } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex">
      <button>Left Button</button>
      <Spacer flex />
      <button>Right Button</button>
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex w-full",children:[e.jsx("button",{className:"px-4 py-2 bg-orange-500 text-white rounded",children:"Left"}),e.jsx("div",{className:"flex-1 bg-yellow-200 border-y border-yellow-400"}),e.jsx("button",{className:"px-4 py-2 bg-orange-500 text-white rounded",children:"Right"})]})},{title:"Custom Size",description:"Spacer with custom pixel size.",code:`import { Spacer } from '@ux4g/react-core';

function Example() {
  return (
    <div>
      <p>Element</p>
      <Spacer size={24} />
      <p>Custom 24px spacing</p>
    </div>
  );
}`,preview:e.jsxs("div",{children:[e.jsx("div",{className:"bg-orange-100 border-2 border-orange-300 rounded-lg p-4",children:"Above"}),e.jsx("div",{className:"h-6 bg-yellow-200 border border-yellow-400"}),e.jsx("div",{className:"bg-orange-100 border-2 border-orange-300 rounded-lg p-4",children:"Below (24px)"})]})}],reactCode:{component:`import React from 'react';
import { cn } from '../../utils/cn';
import { SpacerProps } from './Spacer.types';

export const Spacer: React.FC<SpacerProps> = ({
  size = 'md',
  axis = 'vertical',
  flex = false,
  className,
}) => {
  if (flex) {
    return <div className={cn('flex-1', className)} aria-hidden="true" />;
  }
  
  const sizeClasses = {
    xs: { vertical: 'h-1', horizontal: 'w-1', both: 'h-1 w-1' },
    sm: { vertical: 'h-2', horizontal: 'w-2', both: 'h-2 w-2' },
    md: { vertical: 'h-4', horizontal: 'w-4', both: 'h-4 w-4' },
    lg: { vertical: 'h-8', horizontal: 'w-8', both: 'h-8 w-8' },
    xl: { vertical: 'h-16', horizontal: 'w-16', both: 'h-16 w-16' },
  };
  
  // Custom pixel size
  if (typeof size === 'number') {
    const style: React.CSSProperties = {};
    if (axis === 'vertical') style.height = \`\${size}px\`;
    if (axis === 'horizontal') style.width = \`\${size}px\`;
    if (axis === 'both') {
      style.height = \`\${size}px\`;
      style.width = \`\${size}px\`;
    }
    
    return (
      <div
        className={className}
        style={style}
        aria-hidden="true"
      />
    );
  }
  
  return (
    <div
      className={cn(sizeClasses[size][axis], className)}
      aria-hidden="true"
    />
  );
};`,types:`export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
export type SpacerAxis = 'vertical' | 'horizontal' | 'both';

export interface SpacerProps {
  size?: SpacerSize;
  axis?: SpacerAxis;
  flex?: boolean;
  className?: string;
}`},angularCode:{component:`import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-spacer',
  template: \`
    <div [class]="getSpacerClasses()" 
         [style]="getSpacerStyles()"
         aria-hidden="true">
    </div>
  \`
})
export class SpacerComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number = 'md';
  @Input() axis: 'vertical' | 'horizontal' | 'both' = 'vertical';
  @Input() flex = false;
  
  getSpacerClasses(): string {
    if (this.flex) return 'flex-1';
    
    if (typeof this.size === 'number') return '';
    
    const sizeClasses: Record<string, Record<string, string>> = {
      xs: { vertical: 'h-1', horizontal: 'w-1', both: 'h-1 w-1' },
      sm: { vertical: 'h-2', horizontal: 'w-2', both: 'h-2 w-2' },
      md: { vertical: 'h-4', horizontal: 'w-4', both: 'h-4 w-4' },
      lg: { vertical: 'h-8', horizontal: 'w-8', both: 'h-8 w-8' },
      xl: { vertical: 'h-16', horizontal: 'w-16', both: 'h-16 w-16' },
    };
    
    return sizeClasses[this.size][this.axis];
  }
  
  getSpacerStyles(): Partial<CSSStyleDeclaration> | null {
    if (typeof this.size !== 'number') return null;
    
    const styles: any = {};
    const px = \`\${this.size}px\`;
    
    if (this.axis === 'vertical') styles.height = px;
    if (this.axis === 'horizontal') styles.width = px;
    if (this.axis === 'both') {
      styles.height = px;
      styles.width = px;
    }
    
    return styles;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacerComponent } from './spacer.component';

@NgModule({
  declarations: [SpacerComponent],
  imports: [CommonModule],
  exports: [SpacerComponent]
})
export class SpacerModule { }`,types:`export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
export type SpacerAxis = 'vertical' | 'horizontal' | 'both';

export interface SpacerProps {
  size?: SpacerSize;
  axis?: SpacerAxis;
  flex?: boolean;
}`},comparisons:[{system:"Material UI (Google)",component:"Box (with spacing)",variants:"m, p, margin, padding props",accessibility:"N/A (Layout)",documentation:"Good",link:"https://mui.com/material-ui/react-box/"},{system:"Chakra UI",component:"Spacer",variants:"flex-based spacer",accessibility:"N/A (Layout)",documentation:"Good",link:"https://chakra-ui.com/docs/components/spacer"},{system:"Ant Design (Alibaba)",component:"Space",variants:"horizontal, vertical, size",accessibility:"N/A (Layout)",documentation:"Good",link:"https://ant.design/components/space"}],accessibility:{wcagLevel:"Layout Component (No specific WCAG criteria)",features:['aria-hidden="true" (purely visual)',"Does not interfere with screen readers","Transparent to assistive technologies","Does not affect document flow semantics"],keyboardSupport:[{key:"N/A",action:"Spacer is non-interactive visual element"}],screenReader:["Completely hidden from screen readers","Does not announce","Purely visual spacing element"]},tokens:{file:"/tokens/layout/spacer.json",mappings:[{property:"Size (XS)",token:"spacer.size.xs",value:"4px (0.25rem)"},{property:"Size (SM)",token:"spacer.size.sm",value:"8px (0.5rem)"},{property:"Size (MD)",token:"spacer.size.md",value:"16px (1rem)"},{property:"Size (LG)",token:"spacer.size.lg",value:"32px (2rem)"},{property:"Size (XL)",token:"spacer.size.xl",value:"64px (4rem)"}]}})}export{m as default};
