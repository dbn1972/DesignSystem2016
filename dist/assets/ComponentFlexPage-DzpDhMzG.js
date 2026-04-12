import{j as e}from"./index-LBJNeHTL.js";import{C as d}from"./ComponentDocumentation-DvEedSJi.js";import{U as m}from"./user-Cb11iFvg.js";import{S as u}from"./settings-BGZxYTvq.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const n=({direction:i="row",justify:r="start",align:a="start",wrap:s="nowrap",gap:o,children:l,className:c,...p})=>e.jsx("div",{className:`flex ${i==="row"?"flex-row":i==="column"?"flex-col":i==="row-reverse"?"flex-row-reverse":i==="column-reverse"?"flex-col-reverse":"flex-row"} ${r==="start"?"justify-start":r==="end"?"justify-end":r==="center"?"justify-center":r==="between"?"justify-between":r==="around"?"justify-around":r==="evenly"?"justify-evenly":"justify-start"} ${a==="start"?"items-start":a==="end"?"items-end":a==="center"?"items-center":a==="baseline"?"items-baseline":a==="stretch"?"items-stretch":"items-start"} ${s==="nowrap"?"flex-nowrap":s==="wrap"?"flex-wrap":s==="wrap-reverse"?"flex-wrap-reverse":"flex-nowrap"} ${c||""}`,style:{gap:o?`${o}px`:void 0},...p,children:l}),t=({children:i,...r})=>e.jsx("div",{className:"px-4 py-2 bg-[#005196] text-white rounded",...r,children:i}),x=({children:i,...r})=>e.jsx("div",{className:"p-4 border border-gray-300 rounded bg-white",...r,children:i});function j(){return e.jsx(d,{name:"Flex",description:"Fundamental layout component providing flexbox utilities for creating responsive, flexible layouts. Essential building block for navigation bars, card layouts, form rows, button groups, and toolbars.",category:"Layout",maturity:"stable",tier:"foundations",since:"v1.0.0",updated:"v2.3.0",props:[{name:"direction",type:"'row' | 'column' | 'row-reverse' | 'column-reverse'",default:"'row'",required:!1,description:"Flex direction. Controls the main axis along which flex items are placed."},{name:"justify",type:"'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'",default:"'start'",required:!1,description:"Justify content along the main axis. Controls spacing and alignment of items."},{name:"align",type:"'start' | 'end' | 'center' | 'baseline' | 'stretch'",default:"'start'",required:!1,description:"Align items along the cross axis. Controls vertical alignment in row layouts."},{name:"wrap",type:"'nowrap' | 'wrap' | 'wrap-reverse'",default:"'nowrap'",required:!1,description:"Flex wrap behavior. Controls whether items wrap to multiple lines."},{name:"gap",type:"number | string",required:!1,description:"Gap between flex items. Accepts pixel values or spacing tokens."},{name:"children",type:"ReactNode",required:!0,description:"Child elements to be laid out with flexbox."},{name:"as",type:"ElementType",default:"'div'",required:!1,description:"HTML element or component to render as. Default is div."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with flex classes."}],examples:[{title:"Row Layout",description:"Basic horizontal flex layout with gap spacing.",code:`import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex direction="row" gap={16}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  );
}`,preview:e.jsxs(n,{direction:"row",gap:16,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"})]})},{title:"Column Layout",description:"Vertical flex layout stacking items from top to bottom.",code:`import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex direction="column" gap={12}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  );
}`,preview:e.jsxs(n,{direction:"column",gap:12,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"})]})},{title:"Centered Content",description:"Center items both horizontally and vertically.",code:`import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex
      justify="center"
      align="center"
      className="h-32 border"
    >
      <div>Centered Content</div>
    </Flex>
  );
}`,preview:e.jsx(n,{justify:"center",align:"center",className:"h-32 border border-gray-300",children:e.jsx(t,{children:"Centered Content"})})},{title:"Space Between",description:"Distribute items with space between them, commonly used for navigation and toolbars.",code:`import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex justify="between" align="center">
      <div>Logo</div>
      <div>Navigation</div>
      <div>Actions</div>
    </Flex>
  );
}`,preview:e.jsxs(n,{justify:"between",align:"center",className:"w-full",children:[e.jsx(t,{children:"Logo"}),e.jsx(t,{children:"Navigation"}),e.jsx(t,{children:"Actions"})]})},{title:"Wrap Items",description:"Allow items to wrap to multiple lines when space is limited.",code:`import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex wrap="wrap" gap={12}>
      <div>Tag 1</div>
      <div>Tag 2</div>
      <div>Tag 3</div>
      <div>Tag 4</div>
      <div>Tag 5</div>
      <div>Tag 6</div>
    </Flex>
  );
}`,preview:e.jsxs(n,{wrap:"wrap",gap:12,className:"max-w-xs",children:[e.jsx(t,{children:"Tag 1"}),e.jsx(t,{children:"Tag 2"}),e.jsx(t,{children:"Tag 3"}),e.jsx(t,{children:"Tag 4"}),e.jsx(t,{children:"Tag 5"}),e.jsx(t,{children:"Tag 6"})]})},{title:"Nested Flex",description:"Combine flex containers for complex layouts.",code:`import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex direction="column" gap={16}>
      <Flex justify="between" align="center">
        <h2>Header</h2>
        <button>Action</button>
      </Flex>
      <Flex direction="row" gap={12}>
        <div>Sidebar</div>
        <div>Content</div>
      </Flex>
    </Flex>
  );
}`,preview:e.jsxs(n,{direction:"column",gap:16,children:[e.jsxs(n,{justify:"between",align:"center",className:"w-full",children:[e.jsx("h2",{className:"text-lg font-bold",children:"Header"}),e.jsx("button",{className:"px-4 py-2 bg-[#005196] text-white rounded",children:"Action"})]}),e.jsxs(n,{direction:"row",gap:12,children:[e.jsx(t,{children:"Sidebar"}),e.jsx(t,{children:"Content"})]})]})},{title:"Card with Flex",description:"Use Flex to build card layouts with icon, content, and actions.",code:`import { Flex } from '@ux4g/react-core';
import { User, Settings } from 'lucide-react';

function Example() {
  return (
    <div className="p-4 border rounded">
      <Flex justify="between" align="center" gap={16}>
        <Flex align="center" gap={12}>
          <User size={24} />
          <div>
            <h3>User Profile</h3>
            <p>Manage your account</p>
          </div>
        </Flex>
        <Settings size={20} />
      </Flex>
    </div>
  );
}`,preview:e.jsx(x,{children:e.jsxs(n,{justify:"between",align:"center",gap:16,children:[e.jsxs(n,{align:"center",gap:12,children:[e.jsx(m,{size:24,className:"text-[#005196]"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"User Profile"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Manage your account"})]})]}),e.jsx(u,{size:20,className:"text-gray-500 cursor-pointer"})]})})}],reactCode:{component:`import React, { forwardRef, ElementType } from 'react';
import { cn } from '../../utils/cn';
import { flexVariants } from './flex.variants';
import { FlexProps } from './Flex.types';

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      children,
      className,
      direction = 'row',
      justify = 'start',
      align = 'start',
      wrap = 'nowrap',
      gap,
      as: Component = 'div',
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          flexVariants({ direction, justify, align, wrap }),
          className
        )}
        style={{
          gap: gap ? (typeof gap === 'number' ? \`\${gap}px\` : gap) : undefined,
          ...props.style,
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Flex.displayName = 'Flex';`,types:`export interface FlexProps
  extends React.HTMLAttributes<HTMLElement>,
          FlexVariantProps {
  children?: React.ReactNode;
  gap?: number | string;
  as?: ElementType;
}

export interface FlexVariantProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const flexVariants = cva(
  ['flex'],
  {
    variants: {
      direction: {
        row: 'flex-row',
        column: 'flex-col',
        'row-reverse': 'flex-row-reverse',
        'column-reverse': 'flex-col-reverse',
      },
      justify: {
        start: 'justify-start',
        end: 'justify-end',
        center: 'justify-center',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      align: {
        start: 'items-start',
        end: 'items-end',
        center: 'items-center',
        baseline: 'items-baseline',
        stretch: 'items-stretch',
      },
      wrap: {
        nowrap: 'flex-nowrap',
        wrap: 'flex-wrap',
        'wrap-reverse': 'flex-wrap-reverse',
      },
    },
    defaultVariants: {
      direction: 'row',
      justify: 'start',
      align: 'start',
      wrap: 'nowrap',
    },
  }
);

export type FlexVariantProps = VariantProps<typeof flexVariants>;`},angularCode:{component:`import { Component, Input } from '@angular/core';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

@Component({
  selector: 'ux4g-flex',
  template: \`
    <div
      [class]="getFlexClasses()"
      [style.gap]="gap ? (typeof gap === 'number' ? gap + 'px' : gap) : null"
    >
      <ng-content></ng-content>
    </div>
  \`,
  styleUrls: ['./flex.component.css']
})
export class FlexComponent {
  @Input() direction: FlexDirection = 'row';
  @Input() justify: FlexJustify = 'start';
  @Input() align: FlexAlign = 'start';
  @Input() wrap: FlexWrap = 'nowrap';
  @Input() gap?: number | string;

  getFlexClasses(): string {
    const baseClasses = 'ux4g-flex';
    const directionClass = \`ux4g-flex-\${this.direction}\`;
    const justifyClass = \`ux4g-flex-justify-\${this.justify}\`;
    const alignClass = \`ux4g-flex-align-\${this.align}\`;
    const wrapClass = \`ux4g-flex-wrap-\${this.wrap}\`;

    return [baseClasses, directionClass, justifyClass, alignClass, wrapClass]
      .filter(Boolean)
      .join(' ');
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex.component';

@NgModule({
  declarations: [FlexComponent],
  imports: [CommonModule],
  exports: [FlexComponent]
})
export class FlexModule { }`,types:`export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';`},comparisons:[{system:"Chakra UI",component:"Flex",variants:"direction, justify, align, wrap",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/flex"},{system:"Material UI (Google)",component:'Box (with display="flex")',variants:"flexDirection, justifyContent, alignItems",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-box/"},{system:"Ant Design (Alibaba)",component:"Flex",variants:"vertical, justify, align, wrap, gap",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/flex"},{system:"Tailwind CSS",component:"Utility Classes",variants:"flex-{direction}, justify-{value}, items-{value}",accessibility:"Custom",documentation:"Comprehensive",link:"https://tailwindcss.com/docs/flexbox-grid"},{system:"Radix UI",component:"Flex (Radix Themes)",variants:"direction, justify, align, gap, wrap",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://www.radix-ui.com/themes/docs/components/flex"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Semantic HTML structure with proper element hierarchy",'Supports custom semantic elements via "as" prop (nav, header, footer, etc.)',"Maintains logical document flow for screen readers","No interference with keyboard navigation","Preserves focus order regardless of visual layout","Compatible with screen reader announcement patterns","Respects user motion preferences (does not animate by default)","Supports responsive design for mobile and desktop accessibility"],keyboardSupport:[{key:"Tab",action:"Navigate through focusable children in DOM order"},{key:"Shift + Tab",action:"Navigate backwards through focusable children"}],screenReader:['Announces semantic element type if specified via "as" prop',"Maintains logical reading order based on DOM structure","Children are announced in source order, not visual order","No special flex-related announcements (transparent to screen readers)"]},tokens:{file:"/tokens/components/flex.json",mappings:[{property:"Gap (Small)",token:"spacing.sm",value:"8px"},{property:"Gap (Medium)",token:"spacing.md",value:"16px"},{property:"Gap (Large)",token:"spacing.lg",value:"24px"},{property:"Gap (XLarge)",token:"spacing.xl",value:"32px"},{property:"Direction Default",token:"flex.direction.default",value:"row"},{property:"Justify Default",token:"flex.justify.default",value:"start"},{property:"Align Default",token:"flex.align.default",value:"start"},{property:"Wrap Default",token:"flex.wrap.default",value:"nowrap"}]}})}export{j as default};
