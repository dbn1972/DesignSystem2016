import{j as e}from"./index-BYMLq1ET.js";import{C as a}from"./ComponentDocumentation-CxrYZXwp.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";const t=({maxWidth:n="lg"})=>e.jsx("div",{className:`mx-auto px-4 ${n==="sm"?"max-w-2xl":n==="md"?"max-w-4xl":n==="lg"?"max-w-6xl":n==="xl"?"max-w-7xl":"max-w-full"} bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg p-6`,children:e.jsxs("p",{className:"text-center text-gray-700",children:["Container content (",n,")"]})});function l(){return e.jsx(a,{name:"Container",description:"Layout component that centers and constrains content width. Provides consistent horizontal spacing and responsive max-widths for optimal readability across devices.",category:"Layout",maturity:"stable",tier:"foundation",since:"v1.0.0",props:[{name:"maxWidth",type:"'sm' | 'md' | 'lg' | 'xl' | 'full'",default:"'lg'",required:!1,description:"Maximum width constraint for the container."},{name:"children",type:"ReactNode",required:!0,description:"Content to be contained."},{name:"centered",type:"boolean",default:"true",required:!1,description:"Whether to center the container horizontally."},{name:"padding",type:"'none' | 'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Horizontal padding inside the container."},{name:"className",type:"string",required:!1,description:"Additional CSS classes."}],examples:[{title:"Container Sizes",description:"Different maximum width constraints.",code:`import { Container } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-8">
      <Container maxWidth="sm">
        <h2>Small Container</h2>
        <p>Max width: 672px (42rem)</p>
      </Container>
      
      <Container maxWidth="md">
        <h2>Medium Container</h2>
        <p>Max width: 896px (56rem)</p>
      </Container>
      
      <Container maxWidth="lg">
        <h2>Large Container</h2>
        <p>Max width: 1152px (72rem)</p>
      </Container>
      
      <Container maxWidth="xl">
        <h2>Extra Large Container</h2>
        <p>Max width: 1280px (80rem)</p>
      </Container>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-6 w-full",children:[e.jsx(t,{maxWidth:"sm"}),e.jsx(t,{maxWidth:"md"}),e.jsx(t,{maxWidth:"lg"}),e.jsx(t,{maxWidth:"xl"})]})},{title:"Full Width Container",description:"Container without max-width constraint.",code:`import { Container } from '@ux4g/react-core';

function Example() {
  return (
    <Container maxWidth="full">
      <h2>Full Width Container</h2>
      <p>Spans the entire viewport width with padding.</p>
    </Container>
  );
}`,preview:e.jsx(t,{maxWidth:"full"})},{title:"Padding Variants",description:"Different horizontal padding options.",code:`import { Container } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <Container padding="none">
        No padding
      </Container>
      
      <Container padding="sm">
        Small padding (8px)
      </Container>
      
      <Container padding="md">
        Medium padding (16px)
      </Container>
      
      <Container padding="lg">
        Large padding (32px)
      </Container>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4 w-full",children:[e.jsx("div",{className:"mx-auto max-w-6xl bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg p-0",children:e.jsx("p",{className:"text-center text-gray-700",children:"No padding"})}),e.jsx("div",{className:"mx-auto max-w-6xl bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg px-2 py-4",children:e.jsx("p",{className:"text-center text-gray-700",children:"Small padding"})}),e.jsx("div",{className:"mx-auto max-w-6xl bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg px-4 py-4",children:e.jsx("p",{className:"text-center text-gray-700",children:"Medium padding"})}),e.jsx("div",{className:"mx-auto max-w-6xl bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg px-8 py-4",children:e.jsx("p",{className:"text-center text-gray-700",children:"Large padding"})})]})}],reactCode:{component:`import React from 'react';
import { cn } from '../../utils/cn';
import { containerVariants } from './container.variants';
import { ContainerProps } from './Container.types';

export const Container: React.FC<ContainerProps> = ({
  maxWidth = 'lg',
  children,
  centered = true,
  padding = 'md',
  className,
}) => {
  return (
    <div
      className={cn(
        containerVariants({ maxWidth, centered, padding }),
        className
      )}
    >
      {children}
    </div>
  );
};`,types:`export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ContainerPadding = 'none' | 'sm' | 'md' | 'lg';

export interface ContainerProps {
  maxWidth?: ContainerMaxWidth;
  children: React.ReactNode;
  centered?: boolean;
  padding?: ContainerPadding;
  className?: string;
}`,variants:`import { cva } from 'class-variance-authority';

export const containerVariants = cva(
  'w-full',
  {
    variants: {
      maxWidth: {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-full',
      },
      centered: {
        true: 'mx-auto',
        false: '',
      },
      padding: {
        none: 'px-0',
        sm: 'px-2 sm:px-4',
        md: 'px-4 sm:px-6 lg:px-8',
        lg: 'px-8 sm:px-12 lg:px-16',
      },
    },
    defaultVariants: {
      maxWidth: 'lg',
      centered: true,
      padding: 'md',
    },
  }
);`},angularCode:{component:`import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-container',
  template: \`
    <div [class]="getContainerClasses()">
      <ng-content></ng-content>
    </div>
  \`
})
export class ContainerComponent {
  @Input() maxWidth: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'lg';
  @Input() centered = true;
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  
  getContainerClasses(): string {
    const maxWidthClasses = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };
    
    const paddingClasses = {
      none: 'px-0',
      sm: 'px-2 sm:px-4',
      md: 'px-4 sm:px-6 lg:px-8',
      lg: 'px-8 sm:px-12 lg:px-16',
    };
    
    let classes = 'w-full';
    classes += ' ' + maxWidthClasses[this.maxWidth];
    if (this.centered) classes += ' mx-auto';
    classes += ' ' + paddingClasses[this.padding];
    
    return classes;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule],
  exports: [ContainerComponent]
})
export class ContainerModule { }`,types:`export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ContainerPadding = 'none' | 'sm' | 'md' | 'lg';

export interface ContainerProps {
  maxWidth?: ContainerMaxWidth;
  centered?: boolean;
  padding?: ContainerPadding;
}`},comparisons:[{system:"Material UI (Google)",component:"Container",variants:"maxWidth: xs, sm, md, lg, xl, fixed",accessibility:"N/A (Layout)",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-container/"},{system:"Bootstrap",component:"Container",variants:"container, container-fluid, container-{breakpoint}",accessibility:"N/A (Layout)",documentation:"Comprehensive",link:"https://getbootstrap.com/docs/5.3/layout/containers/"},{system:"Chakra UI",component:"Container",variants:"maxWidth: sm, md, lg, xl, 2xl",accessibility:"N/A (Layout)",documentation:"Good",link:"https://chakra-ui.com/docs/components/container"},{system:"Tailwind CSS",component:"Container",variants:"container class with responsive max-widths",accessibility:"N/A (Layout)",documentation:"Comprehensive",link:"https://tailwindcss.com/docs/container"}],accessibility:{wcagLevel:"Layout Component (No specific WCAG criteria)",features:["Semantic HTML div element","Responsive design support","Does not interfere with screen readers","Maintains document flow","Supports nested interactive elements"],keyboardSupport:[{key:"N/A",action:"Container is non-interactive"}],screenReader:["Transparent to screen readers","Does not announce as landmark","Content within is read normally"]},tokens:{file:"/tokens/layout/container.json",mappings:[{property:"Max Width (Small)",token:"container.maxWidth.sm",value:"672px (42rem)"},{property:"Max Width (Medium)",token:"container.maxWidth.md",value:"896px (56rem)"},{property:"Max Width (Large)",token:"container.maxWidth.lg",value:"1152px (72rem)"},{property:"Max Width (XL)",token:"container.maxWidth.xl",value:"1280px (80rem)"},{property:"Padding (Small)",token:"container.padding.sm",value:"8px / 16px (responsive)"},{property:"Padding (Medium)",token:"container.padding.md",value:"16px / 24px / 32px (responsive)"},{property:"Padding (Large)",token:"container.padding.lg",value:"32px / 48px / 64px (responsive)"}]}})}export{l as default};
