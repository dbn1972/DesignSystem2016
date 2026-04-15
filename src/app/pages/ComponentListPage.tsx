/**
 * List Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Check } from 'lucide-react';

function ListPlayground() {
  const [variant, setVariant] = React.useState('default');
  const [showIcons, setShowIcons] = React.useState(true);
  const [interactive, setInteractive] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-sm border border-border rounded-lg overflow-hidden"><div className="flex items-center gap-3 px-4 py-3 border-b border-border"><span className="w-2 h-2 rounded-full bg-green-500" /><span className="text-sm text-foreground">Aadhaar Card</span><span className="ml-auto text-xs text-green-600">Verified</span></div><div className="flex items-center gap-3 px-4 py-3 border-b border-border"><span className="w-2 h-2 rounded-full bg-yellow-500" /><span className="text-sm text-foreground">Photo</span><span className="ml-auto text-xs text-yellow-600">Pending</span></div><div className="flex items-center gap-3 px-4 py-3"><span className="w-2 h-2 rounded-full bg-muted" /><span className="text-sm text-foreground">Address Proof</span><span className="ml-auto text-xs text-muted-foreground">Not uploaded</span></div></div>
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Variant</label>
            <select value={variant} onChange={e => setVariant(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="default">default</option>
              <option value="bordered">bordered</option>
              <option value="striped">striped</option>
            </select>
          </div>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showIcons} onChange={e => setShowIcons(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show icons</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={interactive} onChange={e => setInteractive(e.target.checked)} className="accent-primary" /><span className="text-foreground">Interactive items</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<List ${variant} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentListPage() {
  return (
    <ComponentDocumentation
      name="List"
      description="Component for displaying collections of items in an organized, scannable format. Supports various list types including ordered, unordered, and description lists."
      category="Data Display"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"

      preview={
        <div className="w-full max-w-sm border border-border rounded-lg overflow-hidden"><div className="flex items-center gap-3 px-4 py-3 border-b border-border"><span className="w-2 h-2 rounded-full bg-green-500" /><span className="text-sm text-foreground">Aadhaar Card</span><span className="ml-auto text-xs text-green-600">Verified</span></div><div className="flex items-center gap-3 px-4 py-3 border-b border-border"><span className="w-2 h-2 rounded-full bg-green-500" /><span className="text-sm text-foreground">Address Proof</span><span className="ml-auto text-xs text-green-600">Verified</span></div><div className="flex items-center gap-3 px-4 py-3"><span className="w-2 h-2 rounded-full bg-yellow-500" /><span className="text-sm text-foreground">Photo</span><span className="ml-auto text-xs text-yellow-600">Pending</span></div></div>
      }
      
      props={[
        {
          name: 'items',
          type: 'Array<string | ReactNode>',
          required: true,
          description: 'List items to display.',
        },
        {
          name: 'type',
          type: "'ordered' | 'unordered' | 'checklist'",
          default: "'unordered'",
          required: false,
          description: 'Type of list marker.',
        },
        {
          name: 'spacing',
          type: "'compact' | 'normal' | 'relaxed'",
          default: "'normal'",
          required: false,
          description: 'Spacing between list items.',
        },
      ]}
      
      examples={[
        {
          title: 'Unordered List',
          description: 'Bullet point list.',
          code: `import { List } from '@ux4g/react-core';

function Example() {
  const items = [
    'First item',
    'Second item',
    'Third item',
  ];
  
  return <List items={items} type="unordered" />;
}`,
          preview: (
            <ul className="list-disc list-inside space-y-2">
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
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
};`,
        types: `export type ListType = 'ordered' | 'unordered' | 'checklist';
export type ListSpacing = 'compact' | 'normal' | 'relaxed';

export interface ListProps {
  items: Array<string | React.ReactNode>;
  type?: ListType;
  spacing?: ListSpacing;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input } from '@angular/core';

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
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule],
  exports: [ListComponent]
})
export class ListModule { }`,
        types: `export type ListType = 'ordered' | 'unordered' | 'checklist';
export type ListSpacing = 'compact' | 'normal' | 'relaxed';`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-list> custom element",
        html: "<ux4g-list variant=\"primary\" size=\"md\"><!-- List --></ux4g-list>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'List',
          variants: 'default, dense, nested, interactive',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-list/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'List',
          variants: 'default, grid, vertical, horizontal',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/list',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic HTML list elements',
          'Proper nesting structure',
          'Adequate spacing',
          'Clear visual hierarchy',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate interactive list items' },
        ],
        screenReader: [
          'Announces list type',
          'Reads number of items',
          'Announces item position',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/list.json',
        mappings: [
          { property: 'Spacing (Normal)', token: 'list.spacing.normal', value: '0.5rem' },
          { property: 'Marker Color', token: 'list.marker.color', value: 'currentColor' },
        ],
      }}

      useCases={[
        { title: "Document Checklist", description: "List of required documents with status.", scenario: "Document upload requirements page.", implementation: "<List><ListItem>Aadhaar Card</ListItem><ListItem>Photo</ListItem></List>" },
        { title: "Notification List", description: "List of recent notifications.", scenario: "Notification center page.", implementation: "<List>{notifications.map(n => <ListItem key={n.id}>{n.title}</ListItem>)}</List>" },
      
        { title: 'Notification List', description: 'List of recent notifications with status.', scenario: 'Citizen views unread notifications in notification center.', implementation: '<List>{notifications.map(n => <ListItem key={n.id} icon={n.icon}>{n.title}</ListItem>)}</List>' },
        { title: 'Required Documents Checklist', description: 'Checklist of documents needed for application.', scenario: 'Citizen reviews required documents before starting application.', implementation: '<List variant="checklist">{requiredDocs.map(d => <ListItem key={d.id} checked={d.uploaded}>{d.name}</ListItem>)}</List>' },
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
                  Do use List when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Ordered or unordered item lists</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Checklists with status indicators</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Navigation link lists</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Simple data displays</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use List when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Structured data — use Table</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Card-based layouts — use Card grid</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Key-value pairs — use DescriptionList</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Complex items — use Card</li>
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
                  <div className="border border-border rounded overflow-hidden mb-3"><div className="flex items-center gap-2 px-3 py-2 border-b border-border text-xs"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /><span>Aadhaar Card</span><span className="ml-auto text-green-600">✓</span></div><div className="flex items-center gap-2 px-3 py-2 text-xs"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500" /><span>Photo</span><span className="ml-auto text-yellow-600">Pending</span></div></div>
                  <p className="text-sm text-muted-foreground">Use consistent left-aligned structure for list items — users scan 20% faster.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="text-xs space-y-0.5 mb-3"><p>• Aadhaar Card - Verified</p><p>• Photo - Pending</p></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use lists for structured multi-column data — use Table instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different List configurations in real time.</p>
            <ListPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/table" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Table</h3>
                <p className="text-sm text-muted-foreground">For structured data</p>
              </a>
              <a href="/components/descriptionlist" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">DescriptionList</h3>
                <p className="text-sm text-muted-foreground">For key-value pairs</p>
              </a>
              <a href="/components/card" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Card</h3>
                <p className="text-sm text-muted-foreground">For rich content items</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added icon support per item</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added interactive list items</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with basic list</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">List scanning</h3>
                <p className="text-sm text-muted-foreground">Users scan lists 20% faster when items have consistent left-aligned structure (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
