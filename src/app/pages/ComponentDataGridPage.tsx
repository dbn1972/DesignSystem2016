/**
 * DataGrid Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DataGridPreview = () => {
  const [sortColumn, setSortColumn] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
  
  const data = [
    { id: 1, name: 'Rajesh Kumar', department: 'IT', salary: 75000, status: 'Active' },
    { id: 2, name: 'Priya Sharma', department: 'HR', salary: 65000, status: 'Active' },
    { id: 3, name: 'Amit Patel', department: 'Finance', salary: 80000, status: 'Inactive' },
  ];
  
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-background">
          <tr>
            <th
              onClick={() => handleSort('name')}
              className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase cursor-pointer hover:bg-muted"
            >
              <div className="flex items-center gap-2">
                Name
                {sortColumn === 'name' && (
                  sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                )}
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
              Department
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
              Salary
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-card divide-y divide-gray-200">
          {data.map(row => (
            <tr key={row.id} className="hover:bg-background">
              <td className="px-6 py-4 text-sm font-semibold text-foreground">{row.name}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{row.department}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground">₹{row.salary.toLocaleString()}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  row.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-muted text-foreground'
                }`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="bg-background px-6 py-3 flex items-center justify-between border-t border-border">
        <span className="text-sm text-muted-foreground">Showing 1-3 of 3 entries</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-card border border-border rounded text-sm disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-1 bg-card border border-border rounded text-sm disabled:opacity-50" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ComponentDataGridPage() {
  return (
    <ComponentDocumentation
      name="DataGrid"
      description="Advanced data table with sorting, filtering, pagination, and row selection. Essential for displaying large datasets in government dashboards, employee records, application lists."
      category="Data Display"
      maturity="beta"
      tier="composite"
      since="v2.0.0"
      
      props={[
        {
          name: 'columns',
          type: 'Array<{key: string, label: string, sortable?: boolean, width?: string}>',
          required: true,
          description: 'Column definitions.',
        },
        {
          name: 'data',
          type: 'Array<Record<string, any>>',
          required: true,
          description: 'Table data rows.',
        },
        {
          name: 'sortable',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Enable column sorting.',
        },
        {
          name: 'pageable',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Enable pagination.',
        },
        {
          name: 'pageSize',
          type: 'number',
          default: '10',
          required: false,
          description: 'Number of rows per page.',
        },
        {
          name: 'selectable',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Enable row selection checkboxes.',
        },
        {
          name: 'onSort',
          type: '(column: string, direction: "asc" | "desc") => void',
          required: false,
          description: 'Sort callback.',
        },
        {
          name: 'onRowClick',
          type: '(row: any) => void',
          required: false,
          description: 'Row click callback.',
        },
      ]}
      
      examples={[
        {
          title: 'Employee Data Grid',
          description: 'Sortable, paginated employee list.',
          code: `import { DataGrid } from '@ux4g/react-core';

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

      useCases={[
        { title: "Officer Case Management", description: "Advanced data grid for managing cases.", scenario: "Officer dashboard with sorting, filtering, pagination.", implementation: "<DataGrid columns={columns} data={cases} sortable filterable />" },
        { title: "Audit Log", description: "Paginated audit trail with search.", scenario: "Governance compliance audit view.", implementation: "<DataGrid columns={auditColumns} data={auditLog} searchable />" },
      ]}

      additionalContent={
        <>
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use DataGrid when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Large datasets needing sort, filter, search</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Administrative data management</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Paginated data with column controls</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Export-ready data views</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use DataGrid when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple data display — use Table</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Card-based layouts — use Card grid</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Small datasets — use Table</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Read-only summaries — use DescriptionList</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/table" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Table</h3>
                <p className="text-sm text-muted-foreground">For simpler data display</p>
              </a>
              <a href="/components/pagination" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Pagination</h3>
                <p className="text-sm text-muted-foreground">For page navigation</p>
              </a>
              <a href="/components/input" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Input</h3>
                <p className="text-sm text-muted-foreground">For search/filter inputs</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added column resizing</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added row selection</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with sort and filter</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Column prioritization</h3>
                <p className="text-sm text-muted-foreground">Data grids should show the most important columns first and allow users to customize column order (Baymard).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}`,
          preview: <DataGridPreview />,
        },
      ]}
      
      reactCode={{
        component: `import React, { useState } from 'react';
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
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-background">
            <tr>
              {selectable && (
                <th className="px-6 py-3 w-12">
                  <input
                    type="checkbox"
                    className="rounded border-border"
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
                  className={\`px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase \${
                    column.sortable !== false && sortable ? 'cursor-pointer hover:bg-muted' : ''
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
          
          <tbody className="bg-card divide-y divide-gray-200">
            {paginatedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => onRowClick?.(row)}
                className={\`\${onRowClick ? 'cursor-pointer' : ''} hover:bg-background\`}
              >
                {selectable && (
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-border"
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
                  <td key={column.key} className="px-6 py-4 text-sm text-foreground">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {pageable && (
        <div className="bg-background px-6 py-3 flex items-center justify-between border-t border-border">
          <span className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-card border border-border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-background"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-card border border-border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-background"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};`,
        types: `export interface DataGridColumn {
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
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux4g-datagrid',
  template: \`
    <div class="border border-border rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-background">
          <tr>
            <th *ngFor="let column of columns"
                (click)="handleSort(column.key)"
                [class]="getHeaderClasses(column)">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-card divide-y divide-gray-200">
          <tr *ngFor="let row of paginatedData" class="hover:bg-background">
            <td *ngFor="let column of columns" class="px-6 py-4 text-sm text-foreground">
              {{ row[column.key] }}
            </td>
          </tr>
        </tbody>
      </table>
      
      <div *ngIf="pageable" class="bg-background px-6 py-3 flex items-center justify-between border-t">
        <span class="text-sm text-muted-foreground">Showing {{ data.length }} entries</span>
        <div class="flex gap-2">
          <button class="px-3 py-1 bg-card border rounded text-sm">Previous</button>
          <button class="px-3 py-1 bg-card border rounded text-sm">Next</button>
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
    let classes = 'px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase';
    if (this.sortable) classes += ' cursor-pointer hover:bg-muted';
    return classes;
  }
  
  handleSort(key: string) {
    if (!this.sortable) return;
    this.sortColumn = key;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sorted.emit({ column: key, direction: this.sortDirection });
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './datagrid.component';

@NgModule({
  declarations: [DataGridComponent],
  imports: [CommonModule],
  exports: [DataGridComponent]
})
export class DataGridModule { }`,
        types: `export interface DataGridColumn {
  key: string;
  label: string;
  sortable?: boolean;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-data-grid> custom element",
        html: "<ux4g-data-grid variant=\"primary\" size=\"md\"><!-- DataGrid --></ux4g-data-grid>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'DataGrid',
          variants: 'sorting, filtering, pagination, selection',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/x/react-data-grid/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Table',
          variants: 'sortable, filterable, expandable',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/table',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic table structure',
          'Sortable column headers',
          'Keyboard navigation',
          'Row selection',
          'Screen reader support',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate cells' },
          { key: 'Enter', action: 'Sort column / Select row' },
        ],
        screenReader: [
          'Announces table structure',
          'Reads column headers',
          'Announces sort direction',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/datagrid.json',
        mappings: [
          { property: 'Header Background', token: 'datagrid.header.bg', value: '#F9FAFB' },
          { property: 'Row Hover', token: 'datagrid.row.hover', value: '#F9FAFB' },
          { property: 'Border Color', token: 'datagrid.border', value: '#E5E7EB' },
        ],
      }}
    />
  );
}
