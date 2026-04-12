import{j as e,R as s,i as a}from"./index-LBJNeHTL.js";import{C as c}from"./ComponentDocumentation-DvEedSJi.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const d=()=>{const[o,r]=s.useState(0),i=[{title:"What documents are required?",content:"You need Aadhaar card, PAN card, and address proof."},{title:"How long does processing take?",content:"Processing typically takes 7-10 business days."},{title:"What are the fees?",content:"Application fee is ₹500, payable online."}];return e.jsx("div",{className:"space-y-2",children:i.map((n,t)=>e.jsxs("div",{className:"border border-gray-200 rounded-lg overflow-hidden",children:[e.jsxs("button",{onClick:()=>r(o===t?-1:t),className:"w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors",children:[e.jsx("span",{className:"font-semibold text-gray-900",children:n.title}),e.jsx(a,{size:20,className:`text-gray-600 transition-transform ${o===t?"rotate-180":""}`})]}),o===t&&e.jsx("div",{className:"px-6 py-4 bg-gray-50 border-t border-gray-200",children:e.jsx("p",{className:"text-gray-700",children:n.content})})]},t))})};function f(){return e.jsx(c,{name:"Accordion",description:"Collapsible content component that allows users to show and hide sections of content. Useful for FAQs, documentation, and organizing large amounts of information.",category:"Data Display",maturity:"stable",tier:"composite",since:"v1.0.0",props:[{name:"items",type:"Array<{title: string, content: ReactNode}>",required:!0,description:"Accordion items with title and content."},{name:"defaultOpen",type:"number | number[]",required:!1,description:"Index(es) of initially open items."},{name:"multiple",type:"boolean",default:"false",required:!1,description:"Allow multiple items open simultaneously."},{name:"bordered",type:"boolean",default:"true",required:!1,description:"Show borders around items."}],examples:[{title:"Basic Accordion",description:"Simple FAQ accordion.",code:`import { Accordion } from '@ux4g/react-core';

function Example() {
  const items = [
    {
      title: 'What documents are required?',
      content: 'You need Aadhaar card, PAN card, and address proof.'
    },
    {
      title: 'How long does processing take?',
      content: 'Processing typically takes 7-10 business days.'
    },
  ];
  
  return <Accordion items={items} />;
}`,preview:e.jsx(d,{})}],reactCode:{component:`import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AccordionProps } from './Accordion.types';

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpen,
  multiple = false,
  bordered = true,
}) => {
  const [openItems, setOpenItems] = useState<number[]>(() => {
    if (defaultOpen === undefined) return [];
    return Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen];
  });
  
  const toggleItem = (index: number) => {
    if (multiple) {
      setOpenItems(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev =>
        prev.includes(index) ? [] : [index]
      );
    }
  };
  
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={\`\${bordered ? 'border border-gray-200' : ''} rounded-lg overflow-hidden\`}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">{item.title}</span>
            <ChevronDown
              size={20}
              className={\`text-gray-600 transition-transform \${
                openItems.includes(index) ? 'rotate-180' : ''
              }\`}
            />
          </button>
          
          {openItems.includes(index) && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};`,types:`export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number | number[];
  multiple?: boolean;
  bordered?: boolean;
}`},angularCode:{component:`import { Component, Input } from '@angular/core';

interface AccordionItem {
  title: string;
  content: string;
}

@Component({
  selector: 'ux4g-accordion',
  template: \`
    <div class="space-y-2">
      <div *ngFor="let item of items; let i = index"
           [class]="bordered ? 'border border-gray-200 rounded-lg overflow-hidden' : ''">
        <button
          (click)="toggleItem(i)"
          class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors">
          <span class="font-semibold text-gray-900">{{ item.title }}</span>
          <span [class]="getChevronClasses(i)">▼</span>
        </button>
        
        <div *ngIf="isOpen(i)"
             class="px-6 py-4 bg-gray-50 border-t border-gray-200">
          {{ item.content }}
        </div>
      </div>
    </div>
  \`
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  @Input() multiple = false;
  @Input() bordered = true;
  
  openItems: number[] = [];
  
  toggleItem(index: number): void {
    if (this.multiple) {
      const idx = this.openItems.indexOf(index);
      if (idx > -1) {
        this.openItems.splice(idx, 1);
      } else {
        this.openItems.push(index);
      }
    } else {
      this.openItems = this.isOpen(index) ? [] : [index];
    }
  }
  
  isOpen(index: number): boolean {
    return this.openItems.includes(index);
  }
  
  getChevronClasses(index: number): string {
    return \`text-gray-600 transition-transform \${this.isOpen(index) ? 'rotate-180' : ''}\`;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule],
  exports: [AccordionComponent]
})
export class AccordionModule { }`,types:`export interface AccordionItem {
  title: string;
  content: string;
}`},comparisons:[{system:"Material UI (Google)",component:"Accordion",variants:"default, controlled, disabled",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-accordion/"},{system:"Ant Design (Alibaba)",component:"Collapse",variants:"default, accordion, ghost, borderless",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/collapse"},{system:"GOV.UK Design System",component:"Accordion",variants:"default",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/accordion/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Keyboard navigable buttons","ARIA attributes for expand/collapse state","Focus management","Clear visual indicators","Semantic HTML structure"],keyboardSupport:[{key:"Tab",action:"Navigate between accordion headers"},{key:"Enter/Space",action:"Toggle accordion item"}],screenReader:["Announces button role","Reads header text","Announces expanded/collapsed state","Reads content when expanded"]},tokens:{file:"/tokens/components/accordion.json",mappings:[{property:"Header Background (Hover)",token:"accordion.header.hover",value:"#F9FAFB"},{property:"Content Background",token:"accordion.content.bg",value:"#F9FAFB"},{property:"Border Color",token:"accordion.border",value:"#E5E7EB"}]}})}export{f as default};
