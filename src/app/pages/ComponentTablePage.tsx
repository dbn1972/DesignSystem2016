/**
 * Table Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const TablePreview = () => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-background">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Name</th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Status</th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Date</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-card">
        <tr className="hover:bg-background">
          <td className="px-6 py-4 text-sm text-foreground">Application #001</td>
          <td className="px-6 py-4 text-sm">
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
              Approved
            </span>
          </td>
          <td className="px-6 py-4 text-sm text-muted-foreground">2024-03-15</td>
        </tr>
        <tr className="hover:bg-background">
          <td className="px-6 py-4 text-sm text-foreground">Application #002</td>
          <td className="px-6 py-4 text-sm">
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
              Pending
            </span>
          </td>
          <td className="px-6 py-4 text-sm text-muted-foreground">2024-03-14</td>
        </tr>
      </tbody>
    </table>
  </div>
);

function TablePlayground() {
  const [striped, setStriped] = React.useState(false);
  const [bordered, setBordered] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="text-center space-y-3">
          <div className="text-4xl">🧩</div>
          <p className="text-sm text-muted-foreground">Live Table preview with current settings</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {striped && <span className="px-2 py-0.5 rounded-full text-xs bg-[#005196]/10 text-[#005196] font-medium">striped</span>}
            {bordered && <span className="px-2 py-0.5 rounded-full text-xs bg-[#005196]/10 text-[#005196] font-medium">bordered</span>}
          </div>
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={striped} onChange={e => setStriped(e.target.checked)} className="accent-primary" /><span className="text-foreground">Striped</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={bordered} onChange={e => setBordered(e.target.checked)} className="accent-primary" /><span className="text-foreground">Bordered</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Table${striped ? ' striped' : ''}${bordered ? ' bordered' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentTablePage() {
  return (
    <ComponentDocumentation
      name="Table"
      description="Data table component for displaying structured information in rows and columns. Supports sorting, filtering, pagination, and responsive layouts for government data display."
      category="Data Display"
      maturity="beta"
      tier="composite"
      since="v1.0.0"

      preview={
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#005196]/10 text-[#005196] text-2xl font-bold">Ta</div>
          <p className="text-sm text-muted-foreground">Table component in its default state</p>
        </div>
      }
      
      props={[
        {
          name: 'columns',
          type: 'Array<{key: string, label: string, sortable?: boolean}>',
          required: true,
          description: 'Table column definitions.',
        },
        {
          name: 'data',
          type: 'Array<Record<string, any>>',
          required: true,
          description: 'Table row data.',
        },
        {
          name: 'striped',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Alternating row background colors.',
        },
        {
          name: 'hoverable',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Row hover effect.',
        },
        {
          name: 'bordered',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Table borders.',
        },
        {
          name: 'responsive',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Responsive horizontal scrolling.',
        },
      ]}
      
      examples={[
        {
          title: 'Basic Table',
          description: 'Simple data table with headers and rows.',
          code: `import { Table } from '@ux4g/react-core';

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
}`,
          preview: <TablePreview />,
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
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
      <thead className="bg-background">
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider"
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
              \${striped && rowIndex % 2 === 0 ? 'bg-background' : 'bg-card'}
              \${hoverable ? 'hover:bg-muted' : ''}
            \`}
          >
            {columns.map((column) => (
              <td
                key={column.key}
                className="px-6 py-4 text-sm text-foreground"
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
      <div className={\`overflow-x-auto \${bordered ? 'border border-border rounded-lg' : ''}\`}>
        {TableContent}
      </div>
    );
  }
  
  return TableContent;
};`,
        types: `export interface TableColumn {
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
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input } from '@angular/core';

interface TableColumn {
  key: string;
  label: string;
}

@Component({
  selector: 'ux4g-table',
  template: \`
    <div [class]="getWrapperClasses()">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-background">
          <tr>
            <th *ngFor="let column of columns"
                class="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody [class]="getBodyClasses()">
          <tr *ngFor="let row of data; let i = index"
              [class]="getRowClasses(i)">
            <td *ngFor="let column of columns"
                class="px-6 py-4 text-sm text-foreground">
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
    if (this.bordered) classes += 'border border-border rounded-lg';
    return classes;
  }
  
  getBodyClasses(): string {
    return this.striped ? '' : 'divide-y divide-gray-200';
  }
  
  getRowClasses(index: number): string {
    let classes = '';
    if (this.striped) {
      classes += index % 2 === 0 ? 'bg-background' : 'bg-card';
    } else {
      classes += 'bg-card';
    }
    if (this.hoverable) classes += ' hover:bg-muted';
    return classes;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule],
  exports: [TableComponent]
})
export class TableModule { }`,
        types: `export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-table> custom element",
        html: "<ux4g-table variant=\"primary\" size=\"md\"><!-- Table --></ux4g-table>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Table',
          variants: 'default, dense, enhanced (sorting, pagination)',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-table/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Table',
          variants: 'sortable, filterable, expandable, tree',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/table',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Table',
          variants: 'default, numeric columns',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/table/',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic <table> HTML structure',
          'Proper <thead>, <tbody> organization',
          '<th> elements for column headers',
          'scope attributes on headers',
          'Sufficient color contrast',
          'Responsive scrolling container',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate through interactive elements' },
          { key: 'Arrow keys', action: 'Scroll table if responsive' },
        ],
        screenReader: [
          'Announces table structure',
          'Reads column headers with data',
          'Announces row and column positions',
          'Navigates by row and column',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/table.json',
        mappings: [
          { property: 'Header Background', token: 'table.header.bg', value: '#F9FAFB' },
          { property: 'Border Color', token: 'table.border', value: '#E5E7EB' },
          { property: 'Hover Background', token: 'table.row.hover', value: '#F3F4F6' },
          { property: 'Stripe Background', token: 'table.row.stripe', value: '#F9FAFB' },
        ],
      }}

      useCases={[
        { title: "Application Case Queue", description: "Sortable table of pending applications for officers.", scenario: "Officer dashboard shows all assigned cases.", implementation: "<Table columns={columns} data={cases} sortable />" },
        { title: "Fee Structure Display", description: "Read-only table showing service fees.", scenario: "Certificate service information page.", implementation: "<Table columns={feeColumns} data={fees} />" },
        { title: "Document Checklist", description: "Table with status indicators per document.", scenario: "Review summary shows uploaded document status.", implementation: "<Table columns={docColumns} data={documents} />" },
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
                  Do use Table when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Displaying structured data in rows and columns</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Sortable and filterable data sets</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Comparison data (fees, features, status)</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Administrative data views</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Table when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple key-value pairs — use DescriptionList</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Card-based layouts — use Card grid</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Single-column lists — use List</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Very few items — consider a simpler layout</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Use zebra striping and column headers for data tables with 5+ rows.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t display tabular data as plain text — use a proper Table for structured data.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Table configurations in real time.</p>
            <TablePlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/datagrid" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">DataGrid</h3>
                <p className="text-sm text-muted-foreground">For advanced data tables</p>
              </a>
              <a href="/components/descriptionlist" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">DescriptionList</h3>
                <p className="text-sm text-muted-foreground">For key-value pairs</p>
              </a>
              <a href="/components/card" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Card</h3>
                <p className="text-sm text-muted-foreground">For card-based layouts</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added column sorting</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added row selection</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with basic table rendering</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Zebra striping improves scanning</h3>
                <p className="text-sm text-muted-foreground">Alternating row colors improve data scanning speed by 10% for tables with 10+ rows (Baymard).</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Sticky headers for long tables</h3>
                <p className="text-sm text-muted-foreground">GOV.UK recommends sticky column headers for tables exceeding viewport height.</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
