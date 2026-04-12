import{j as e}from"./index-BYMLq1ET.js";import{C as t}from"./ComponentDocumentation-CxrYZXwp.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";function a(){return e.jsx(t,{name:"List",description:"Component for displaying collections of items in an organized, scannable format. Supports various list types including ordered, unordered, and description lists.",category:"Data Display",maturity:"stable",tier:"foundation",since:"v1.0.0",props:[{name:"items",type:"Array<string | ReactNode>",required:!0,description:"List items to display."},{name:"type",type:"'ordered' | 'unordered' | 'checklist'",default:"'unordered'",required:!1,description:"Type of list marker."},{name:"spacing",type:"'compact' | 'normal' | 'relaxed'",default:"'normal'",required:!1,description:"Spacing between list items."}],examples:[{title:"Unordered List",description:"Bullet point list.",code:`import { List } from '@ux4g/react-core';

function Example() {
  const items = [
    'First item',
    'Second item',
    'Third item',
  ];
  
  return <List items={items} type="unordered" />;
}`,preview:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"First item"}),e.jsx("li",{children:"Second item"}),e.jsx("li",{children:"Third item"})]})}],reactCode:{component:`import React from 'react';
import { Check } from 'lucide-react';
import { ListProps } from './List.types';

export const List: React.FC<ListProps> = ({
  items,
  type = 'unordered',
  spacing = 'normal',
}) => {
  const spacingClasses = {
    compact: 'space-y-1',
    normal: 'space-y-2',
    relaxed: 'space-y-3',
  };
  
  if (type === 'ordered') {
    return (
      <ol className={\`list-decimal list-inside \${spacingClasses[spacing]}\`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    );
  }
  
  if (type === 'checklist') {
    return (
      <ul className={spacingClasses[spacing]}>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check size={16} className="text-green-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  
  return (
    <ul className={\`list-disc list-inside \${spacingClasses[spacing]}\`}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};`,types:`export type ListType = 'ordered' | 'unordered' | 'checklist';
export type ListSpacing = 'compact' | 'normal' | 'relaxed';

export interface ListProps {
  items: Array<string | React.ReactNode>;
  type?: ListType;
  spacing?: ListSpacing;
}`},angularCode:{component:`import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-list',
  template: \`
    <ul *ngIf="type === 'unordered'" [class]="getListClasses()">
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    
    <ol *ngIf="type === 'ordered'" [class]="getListClasses()">
      <li *ngFor="let item of items">{{ item }}</li>
    </ol>
    
    <ul *ngIf="type === 'checklist'" [class]="getSpacingClasses()">
      <li *ngFor="let item of items" class="flex items-center gap-2">
        <span>✓</span>
        <span>{{ item }}</span>
      </li>
    </ul>
  \`
})
export class ListComponent {
  @Input() items: string[] = [];
  @Input() type: 'ordered' | 'unordered' | 'checklist' = 'unordered';
  @Input() spacing: 'compact' | 'normal' | 'relaxed' = 'normal';
  
  getListClasses(): string {
    const base = this.type === 'ordered' ? 'list-decimal' : 'list-disc';
    return \`\${base} list-inside \${this.getSpacingClasses()}\`;
  }
  
  getSpacingClasses(): string {
    const spacings = {
      compact: 'space-y-1',
      normal: 'space-y-2',
      relaxed: 'space-y-3',
    };
    return spacings[this.spacing];
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule],
  exports: [ListComponent]
})
export class ListModule { }`,types:`export type ListType = 'ordered' | 'unordered' | 'checklist';
export type ListSpacing = 'compact' | 'normal' | 'relaxed';`},comparisons:[{system:"Material UI (Google)",component:"List",variants:"default, dense, nested, interactive",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-list/"},{system:"Ant Design (Alibaba)",component:"List",variants:"default, grid, vertical, horizontal",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/list"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Semantic HTML list elements","Proper nesting structure","Adequate spacing","Clear visual hierarchy"],keyboardSupport:[{key:"Tab",action:"Navigate interactive list items"}],screenReader:["Announces list type","Reads number of items","Announces item position"]},tokens:{file:"/tokens/components/list.json",mappings:[{property:"Spacing (Normal)",token:"list.spacing.normal",value:"0.5rem"},{property:"Marker Color",token:"list.marker.color",value:"currentColor"}]}})}export{a as default};
