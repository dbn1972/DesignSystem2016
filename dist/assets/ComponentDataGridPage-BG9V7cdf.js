import{j as e,R as o,i as d}from"./index-wYwTiNL-.js";import{C as c}from"./ComponentDocumentation-DKnXH-Pi.js";import{C as m}from"./chevron-up-BTy5uBWm.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const p=()=>{const[a,n]=o.useState(null),[r,s]=o.useState("asc"),i=[{id:1,name:"Rajesh Kumar",department:"IT",salary:75e3,status:"Active"},{id:2,name:"Priya Sharma",department:"HR",salary:65e3,status:"Active"},{id:3,name:"Amit Patel",department:"Finance",salary:8e4,status:"Inactive"}],l=t=>{a===t?s(r==="asc"?"desc":"asc"):(n(t),s("asc"))};return e.jsxs("div",{className:"border border-gray-200 rounded-lg overflow-hidden",children:[e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>l("name"),className:"px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase cursor-pointer hover:bg-gray-100",children:e.jsxs("div",{className:"flex items-center gap-2",children:["Name",a==="name"&&(r==="asc"?e.jsx(m,{size:16}):e.jsx(d,{size:16}))]})}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase",children:"Department"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase",children:"Salary"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase",children:"Status"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:i.map(t=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4 text-sm font-semibold text-gray-900",children:t.name}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:t.department}),e.jsxs("td",{className:"px-6 py-4 text-sm text-gray-600",children:["₹",t.salary.toLocaleString()]}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:`px-2 py-1 text-xs font-semibold rounded-full ${t.status==="Active"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:t.status})})]},t.id))})]}),e.jsxs("div",{className:"bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Showing 1-3 of 3 entries"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 bg-white border border-gray-300 rounded text-sm disabled:opacity-50",disabled:!0,children:"Previous"}),e.jsx("button",{className:"px-3 py-1 bg-white border border-gray-300 rounded text-sm disabled:opacity-50",disabled:!0,children:"Next"})]})]})]})};function f(){return e.jsx(c,{name:"DataGrid",description:"Advanced data table with sorting, filtering, pagination, and row selection. Essential for displaying large datasets in government dashboards, employee records, application lists.",category:"Data Display",maturity:"beta",tier:"composite",since:"v2.0.0",props:[{name:"columns",type:"Array<{key: string, label: string, sortable?: boolean, width?: string}>",required:!0,description:"Column definitions."},{name:"data",type:"Array<Record<string, any>>",required:!0,description:"Table data rows."},{name:"sortable",type:"boolean",default:"true",required:!1,description:"Enable column sorting."},{name:"pageable",type:"boolean",default:"true",required:!1,description:"Enable pagination."},{name:"pageSize",type:"number",default:"10",required:!1,description:"Number of rows per page."},{name:"selectable",type:"boolean",default:"false",required:!1,description:"Enable row selection checkboxes."},{name:"onSort",type:'(column: string, direction: "asc" | "desc") => void',required:!1,description:"Sort callback."},{name:"onRowClick",type:"(row: any) => void",required:!1,description:"Row click callback."}],examples:[{title:"Employee Data Grid",description:"Sortable, paginated employee list.",code:`import { DataGrid } from '@ux4g/react-core';

function Example() {
  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'salary', label: 'Salary', sortable: true },
    { key: 'status', label: 'Status' },
  ];
  
  const data = [
    { id: 1, name: 'Rajesh Kumar', department: 'IT', salary: 75000, status: 'Active' },
    // ... more rows
  ];
  
  return (
    <DataGrid
      columns={columns}
      data={data}
      sortable
      pageable
      pageSize={10}
    />
  );
}`,preview:e.jsx(p,{})}],reactCode:{component:`import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { DataGridProps } from './DataGrid.types';

export const DataGrid: React.FC<DataGridProps> = ({
  columns,
  data,
  sortable = true,
  pageable = true,
  pageSize = 10,
  selectable = false,
  onSort,
  onRowClick,
}) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<Set<any>>(new Set());
  
  const handleSort = (columnKey: string) => {
    if (!sortable) return;
    
    const newDirection = sortColumn === columnKey && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(columnKey);
    setSortDirection(newDirection);
    onSort?.(columnKey, newDirection);
  };
  
  const sortedData = React.useMemo(() => {
    if (!sortColumn) return data;
    
    return [...data].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      
      if (sortDirection === 'asc') {
        return aVal > bVal ? 1 : -1;
      }
      return aVal < bVal ? 1 : -1;
    });
  }, [data, sortColumn, sortDirection]);
  
  const paginatedData = pageable
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;
  
  const totalPages = Math.ceil(sortedData.length / pageSize);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {selectable && (
                <th className="px-6 py-3 w-12">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRows(new Set(paginatedData));
                      } else {
                        setSelectedRows(new Set());
                      }
                    }}
                  />
                </th>
              )}
              
              {columns.map(column => (
                <th
                  key={column.key}
                  onClick={() => column.sortable !== false && handleSort(column.key)}
                  className={\`px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase \${
                    column.sortable !== false && sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                  }\`}
                  style={{ width: column.width }}
                >
                  <div className="flex items-center gap-2">
                    {column.label}
                    {sortColumn === column.key && (
                      sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => onRowClick?.(row)}
                className={\`\${onRowClick ? 'cursor-pointer' : ''} hover:bg-gray-50\`}
              >
                {selectable && (
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedRows.has(row)}
                      onChange={(e) => {
                        const newSelected = new Set(selectedRows);
                        if (e.target.checked) {
                          newSelected.add(row);
                        } else {
                          newSelected.delete(row);
                        }
                        setSelectedRows(newSelected);
                      }}
                    />
                  </td>
                )}
                
                {columns.map(column => (
                  <td key={column.key} className="px-6 py-4 text-sm text-gray-900">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {pageable && (
        <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
          <span className="text-sm text-gray-600">
            Showing {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-white border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-white border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};`,types:`export interface DataGridColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

export interface DataGridProps {
  columns: DataGridColumn[];
  data: Array<Record<string, any>>;
  sortable?: boolean;
  pageable?: boolean;
  pageSize?: number;
  selectable?: boolean;
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
  onRowClick?: (row: any) => void;
}`},angularCode:{component:`import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux4g-datagrid',
  template: \`
    <div class="border border-gray-200 rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th *ngFor="let column of columns"
                (click)="handleSort(column.key)"
                [class]="getHeaderClasses(column)">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr *ngFor="let row of paginatedData" class="hover:bg-gray-50">
            <td *ngFor="let column of columns" class="px-6 py-4 text-sm text-gray-900">
              {{ row[column.key] }}
            </td>
          </tr>
        </tbody>
      </table>
      
      <div *ngIf="pageable" class="bg-gray-50 px-6 py-3 flex items-center justify-between border-t">
        <span class="text-sm text-gray-600">Showing {{ data.length }} entries</span>
        <div class="flex gap-2">
          <button class="px-3 py-1 bg-white border rounded text-sm">Previous</button>
          <button class="px-3 py-1 bg-white border rounded text-sm">Next</button>
        </div>
      </div>
    </div>
  \`
})
export class DataGridComponent {
  @Input() columns: any[] = [];
  @Input() data: any[] = [];
  @Input() sortable = true;
  @Input() pageable = true;
  @Input() pageSize = 10;
  
  @Output() sorted = new EventEmitter<any>();
  
  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  paginatedData: any[] = [];
  
  ngOnInit() {
    this.paginatedData = this.data.slice(0, this.pageSize);
  }
  
  getHeaderClasses(column: any): string {
    let classes = 'px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase';
    if (this.sortable) classes += ' cursor-pointer hover:bg-gray-100';
    return classes;
  }
  
  handleSort(key: string) {
    if (!this.sortable) return;
    this.sortColumn = key;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sorted.emit({ column: key, direction: this.sortDirection });
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './datagrid.component';

@NgModule({
  declarations: [DataGridComponent],
  imports: [CommonModule],
  exports: [DataGridComponent]
})
export class DataGridModule { }`,types:`export interface DataGridColumn {
  key: string;
  label: string;
  sortable?: boolean;
}`},comparisons:[{system:"Material UI (Google)",component:"DataGrid",variants:"sorting, filtering, pagination, selection",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/x/react-data-grid/"},{system:"Ant Design (Alibaba)",component:"Table",variants:"sortable, filterable, expandable",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://ant.design/components/table"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Semantic table structure","Sortable column headers","Keyboard navigation","Row selection","Screen reader support"],keyboardSupport:[{key:"Tab",action:"Navigate cells"},{key:"Enter",action:"Sort column / Select row"}],screenReader:["Announces table structure","Reads column headers","Announces sort direction"]},tokens:{file:"/tokens/components/datagrid.json",mappings:[{property:"Header Background",token:"datagrid.header.bg",value:"#F9FAFB"},{property:"Row Hover",token:"datagrid.row.hover",value:"#F9FAFB"},{property:"Border Color",token:"datagrid.border",value:"#E5E7EB"}]}})}export{f as default};
