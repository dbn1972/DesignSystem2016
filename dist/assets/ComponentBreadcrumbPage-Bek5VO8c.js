import{j as e}from"./index-wYwTiNL-.js";import{C as t}from"./ComponentDocumentation-DKnXH-Pi.js";import{H as a}from"./house-Cmkg9_8m.js";import{C as r}from"./chevron-right-D7hQKSZL.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const s=()=>e.jsxs("nav",{"aria-label":"Breadcrumb",className:"flex items-center gap-2 text-sm",children:[e.jsxs("a",{href:"/",className:"text-[#005196] hover:underline flex items-center gap-1",children:[e.jsx(a,{size:16}),"Home"]}),e.jsx(r,{size:16,className:"text-gray-400"}),e.jsx("a",{href:"/services",className:"text-[#005196] hover:underline",children:"Services"}),e.jsx(r,{size:16,className:"text-gray-400"}),e.jsx("span",{className:"text-gray-600",children:"Current Page"})]});function u(){return e.jsx(t,{name:"Breadcrumb",description:"Navigation aid showing the user's current location within the website hierarchy. Helps users understand their context and navigate back through parent pages.",category:"Navigation",maturity:"stable",tier:"core",since:"v1.0.0",props:[{name:"items",type:"Array<{label: string, href?: string}>",required:!0,description:"Array of breadcrumb items to display."},{name:"separator",type:"ReactNode",default:"ChevronRight",required:!1,description:"Custom separator element between items."},{name:"showHome",type:"boolean",default:"true",required:!1,description:"Whether to show home icon on first item."},{name:"className",type:"string",required:!1,description:"Additional CSS classes."}],examples:[{title:"Basic Breadcrumb",description:"Simple breadcrumb navigation.",code:`import { Breadcrumb } from '@ux4g/react-core';

function Example() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Apply for Certificate' },
  ];
  
  return <Breadcrumb items={items} />;
}`,preview:e.jsx(s,{})}],reactCode:{component:`import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbProps } from './Breadcrumb.types';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <ChevronRight size={16} />,
  showHome = true,
  className = '',
}) => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;
          
          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-gray-400" aria-hidden="true">
                  {separator}
                </span>
              )}
              
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="text-[#005196] hover:underline flex items-center gap-1"
                >
                  {isFirst && showHome && <Home size={16} />}
                  {item.label}
                </a>
              ) : (
                <span
                  className="text-gray-600"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};`,types:`export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  showHome?: boolean;
  className?: string;
}`},angularCode:{component:`import { Component, Input } from '@angular/core';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

@Component({
  selector: 'ux4g-breadcrumb',
  template: \`
    <nav aria-label="Breadcrumb" [class]="className">
      <ol class="flex items-center gap-2 text-sm">
        <li *ngFor="let item of items; let i = index; let isLast = last" 
            class="flex items-center gap-2">
          <span *ngIf="i > 0" class="text-gray-400" aria-hidden="true">
            /
          </span>
          
          <a *ngIf="item.href && !isLast"
             [href]="item.href"
             class="text-blue-600 hover:underline">
            {{ item.label }}
          </a>
          
          <span *ngIf="!item.href || isLast"
                class="text-gray-600"
                [attr.aria-current]="isLast ? 'page' : null">
            {{ item.label }}
          </span>
        </li>
      </ol>
    </nav>
  \`
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
  @Input() className: string = '';
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }`,types:`export interface BreadcrumbItem {
  label: string;
  href?: string;
}`},comparisons:[{system:"Material UI (Google)",component:"Breadcrumbs",variants:"default, custom separator, max items",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-breadcrumbs/"},{system:"Ant Design (Alibaba)",component:"Breadcrumb",variants:"default, with icons, separator",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/breadcrumb"},{system:"GOV.UK Design System",component:"Breadcrumbs",variants:"default, collapsed on mobile",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/breadcrumbs/"},{system:"Chakra UI",component:"Breadcrumb",variants:"default, custom separator",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/docs/components/breadcrumb"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['Semantic <nav> element with aria-label="Breadcrumb"',"Ordered list <ol> structure",'aria-current="page" on current page',"Keyboard navigable links","Clear visual hierarchy","Color contrast meets 4.5:1 ratio"],keyboardSupport:[{key:"Tab",action:"Navigate through breadcrumb links"},{key:"Enter",action:"Follow breadcrumb link"}],screenReader:["Announces navigation landmark","Reads breadcrumb structure","Announces current page location","Reads link text clearly"]},tokens:{file:"/tokens/components/breadcrumb.json",mappings:[{property:"Font Size",token:"base.fontSize.sm",value:"14px"},{property:"Link Color",token:"link.color",value:"#005196 (Navy 500)"},{property:"Current Color",token:"text.secondary",value:"#6B7280 (Gray 600)"},{property:"Separator Color",token:"text.tertiary",value:"#9CA3AF (Gray 400)"}]}})}export{u as default};
