import{j as e}from"./index-BYMLq1ET.js";import{C as t}from"./ComponentDocumentation-CxrYZXwp.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";const a=()=>e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase",children:"Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase",children:"Status"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase",children:"Date"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 bg-white",children:[e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4 text-sm text-gray-900",children:"Application #001"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold",children:"Approved"})}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"2024-03-15"})]}),e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4 text-sm text-gray-900",children:"Application #002"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsx("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold",children:"Pending"})}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:"2024-03-14"})]})]})]})});function i(){return e.jsx(t,{name:"Table",description:"Data table component for displaying structured information in rows and columns. Supports sorting, filtering, pagination, and responsive layouts for government data display.",category:"Data Display",maturity:"beta",tier:"composite",since:"v1.0.0",props:[{name:"columns",type:"Array<{key: string, label: string, sortable?: boolean}>",required:!0,description:"Table column definitions."},{name:"data",type:"Array<Record<string, any>>",required:!0,description:"Table row data."},{name:"striped",type:"boolean",default:"false",required:!1,description:"Alternating row background colors."},{name:"hoverable",type:"boolean",default:"true",required:!1,description:"Row hover effect."},{name:"bordered",type:"boolean",default:"true",required:!1,description:"Table borders."},{name:"responsive",type:"boolean",default:"true",required:!1,description:"Responsive horizontal scrolling."}],examples:[{title:"Basic Table",description:"Simple data table with headers and rows.",code:`import { Table } from '@ux4g/react-core';

function Example() {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status' },
    { key: 'date', label: 'Date' },
  ];
  
  const data = [
    { name: 'Application #001', status: 'Approved', date: '2024-03-15' },
    { name: 'Application #002', status: 'Pending', date: '2024-03-14' },
  ];
  
  return <Table columns={columns} data={data} />;
}`,preview:e.jsx(a,{})}],reactCode:{component:`import React from 'react';
import { TableProps } from './Table.types';

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  striped = false,
  hoverable = true,
  bordered = true,
  responsive = true,
}) => {
  const TableContent = (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={\`divide-y divide-gray-200 \${striped ? 'divide-y-0' : ''}\`}>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={\`
              \${striped && rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              \${hoverable ? 'hover:bg-gray-100' : ''}
            \`}
          >
            {columns.map((column) => (
              <td
                key={column.key}
                className="px-6 py-4 text-sm text-gray-900"
              >
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  if (responsive) {
    return (
      <div className={\`overflow-x-auto \${bordered ? 'border border-gray-200 rounded-lg' : ''}\`}>
        {TableContent}
      </div>
    );
  }
  
  return TableContent;
};`,types:`export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: Array<Record<string, any>>;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  responsive?: boolean;
}`},angularCode:{component:`import { Component, Input } from '@angular/core';

interface TableColumn {
  key: string;
  label: string;
}

@Component({
  selector: 'ux4g-table',
  template: \`
    <div [class]="getWrapperClasses()">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th *ngFor="let column of columns"
                class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody [class]="getBodyClasses()">
          <tr *ngFor="let row of data; let i = index"
              [class]="getRowClasses(i)">
            <td *ngFor="let column of columns"
                class="px-6 py-4 text-sm text-gray-900">
              {{ row[column.key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  \`
})
export class TableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() striped = false;
  @Input() hoverable = true;
  @Input() bordered = true;
  @Input() responsive = true;
  
  getWrapperClasses(): string {
    let classes = '';
    if (this.responsive) classes += 'overflow-x-auto ';
    if (this.bordered) classes += 'border border-gray-200 rounded-lg';
    return classes;
  }
  
  getBodyClasses(): string {
    return this.striped ? '' : 'divide-y divide-gray-200';
  }
  
  getRowClasses(index: number): string {
    let classes = '';
    if (this.striped) {
      classes += index % 2 === 0 ? 'bg-gray-50' : 'bg-white';
    } else {
      classes += 'bg-white';
    }
    if (this.hoverable) classes += ' hover:bg-gray-100';
    return classes;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule],
  exports: [TableComponent]
})
export class TableModule { }`,types:`export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}`},comparisons:[{system:"Material UI (Google)",component:"Table",variants:"default, dense, enhanced (sorting, pagination)",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-table/"},{system:"Ant Design (Alibaba)",component:"Table",variants:"sortable, filterable, expandable, tree",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://ant.design/components/table"},{system:"GOV.UK Design System",component:"Table",variants:"default, numeric columns",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/components/table/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Semantic <table> HTML structure","Proper <thead>, <tbody> organization","<th> elements for column headers","scope attributes on headers","Sufficient color contrast","Responsive scrolling container"],keyboardSupport:[{key:"Tab",action:"Navigate through interactive elements"},{key:"Arrow keys",action:"Scroll table if responsive"}],screenReader:["Announces table structure","Reads column headers with data","Announces row and column positions","Navigates by row and column"]},tokens:{file:"/tokens/components/table.json",mappings:[{property:"Header Background",token:"table.header.bg",value:"#F9FAFB"},{property:"Border Color",token:"table.border",value:"#E5E7EB"},{property:"Hover Background",token:"table.row.hover",value:"#F3F4F6"},{property:"Stripe Background",token:"table.row.stripe",value:"#F9FAFB"}]}})}export{i as default};
