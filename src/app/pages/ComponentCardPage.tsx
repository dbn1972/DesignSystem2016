/**
 * Card Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const CardPreview = ({ title, children }: any) => (
  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground mb-4">{children}</p>
    <button className="px-4 py-2 bg-[#005196] text-white rounded-lg text-sm font-semibold">
      Learn More
    </button>
  </div>
);

function CardPlayground() {
  const [shadow, setShadow] = React.useState(false);
  const [clickable, setClickable] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <CardPreview title="Service Card"><p className="text-sm text-muted-foreground">Card content preview</p></CardPreview>
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={shadow} onChange={e => setShadow(e.target.checked)} className="accent-primary" /><span className="text-foreground">Shadow</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={clickable} onChange={e => setClickable(e.target.checked)} className="accent-primary" /><span className="text-foreground">Clickable</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Card${shadow ? ' shadow' : ''}${clickable ? ' clickable' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentCardPage() {
  return (
    <ComponentDocumentation
      name="Card"
      description="Flexible container component for grouping related content. Provides a contained surface for displaying information with consistent spacing and visual hierarchy."
      category="Data Display"
      maturity="stable"
      tier="core"
      since="v1.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <div className="flex gap-4"><CardPreview title="Birth Certificate"><p className="text-sm text-muted-foreground">Apply online</p></CardPreview><CardPreview title="Income Certificate"><p className="text-sm text-muted-foreground">Verify income</p></CardPreview></div>
        </div>
      }
      
      props={[
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Card content.',
        },
        {
          name: 'title',
          type: 'string',
          required: false,
          description: 'Card title/heading.',
        },
        {
          name: 'header',
          type: 'ReactNode',
          required: false,
          description: 'Custom header content.',
        },
        {
          name: 'footer',
          type: 'ReactNode',
          required: false,
          description: 'Card footer content.',
        },
        {
          name: 'hoverable',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether card shows hover effect.',
        },
        {
          name: 'bordered',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether card has border.',
        },
        {
          name: 'onClick',
          type: '() => void',
          required: false,
          description: 'Click handler for interactive cards.',
        },
      ]}
      
      examples={[
        {
          title: 'Basic Card',
          description: 'Simple card with title and content.',
          code: `import { Card } from '@ux4g/react-core';

function Example() {
  return (
    <Card title="Card Title">
      <p>This is the card content with some descriptive text.</p>
    </Card>
  );
}`,
          preview: (
            <CardPreview title="Card Title">
              This is the card content with some descriptive text.
            </CardPreview>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { cn } from '../../utils/cn';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
  children,
  title,
  header,
  footer,
  hoverable = false,
  bordered = true,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-card rounded-xl p-6',
        bordered && 'border border-border',
        hoverable && 'hover:shadow-lg transition-shadow',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {header && <div className="mb-4">{header}</div>}
      
      {title && (
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
      )}
      
      <div>{children}</div>
      
      {footer && (
        <div className="mt-4 pt-4 border-t border-border">
          {footer}
        </div>
      )}
    </div>
  );
};`,
        types: `export interface CardProps {
  children: React.ReactNode;
  title?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  hoverable?: boolean;
  bordered?: boolean;
  onClick?: () => void;
  className?: string;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux4g-card',
  template: \`
    <div [class]="getCardClasses()" (click)="handleClick()">
      <div *ngIf="hasHeader" class="mb-4">
        <ng-content select="[header]"></ng-content>
      </div>
      
      <h3 *ngIf="title" class="text-xl font-semibold text-foreground mb-3">
        {{ title }}
      </h3>
      
      <div>
        <ng-content></ng-content>
      </div>
      
      <div *ngIf="hasFooter" class="mt-4 pt-4 border-t border-border">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  \`
})
export class CardComponent {
  @Input() title?: string;
  @Input() hoverable = false;
  @Input() bordered = true;
  @Input() hasHeader = false;
  @Input() hasFooter = false;
  @Output() clicked = new EventEmitter<void>();
  
  getCardClasses(): string {
    let classes = 'bg-card rounded-xl p-6';
    if (this.bordered) classes += ' border border-border';
    if (this.hoverable) classes += ' hover:shadow-lg transition-shadow';
    if (this.clicked.observers.length > 0) classes += ' cursor-pointer';
    return classes;
  }
  
  handleClick(): void {
    this.clicked.emit();
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule],
  exports: [CardComponent]
})
export class CardModule { }`,
        types: `export interface CardProps {
  title?: string;
  hoverable?: boolean;
  bordered?: boolean;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-card> custom element",
        html: "<ux4g-card variant=\"primary\" size=\"md\"><!-- Card --></ux4g-card>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Card',
          variants: 'default, elevation, outlined',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-card/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Card',
          variants: 'default, bordered, hoverable, grid',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/card',
        },
        {
          system: 'Chakra UI',
          component: 'Card',
          variants: 'default, elevated, outline, filled',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/card',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic HTML structure',
          'Sufficient color contrast',
          'Clear visual hierarchy',
          'Keyboard accessible when interactive',
          'Proper heading levels',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Focus interactive cards' },
          { key: 'Enter', action: 'Activate clickable card' },
        ],
        screenReader: [
          'Reads card content in logical order',
          'Announces headings properly',
          'Context provided by surrounding content',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/card.json',
        mappings: [
          { property: 'Background', token: 'card.bg', value: '#FFFFFF' },
          { property: 'Border Color', token: 'card.border', value: '#E5E7EB' },
          { property: 'Border Radius', token: 'card.borderRadius', value: '12px' },
          { property: 'Padding', token: 'card.padding', value: '24px' },
        ],
      }}

      useCases={[
        { title: "Service Information Card", description: "Card displaying a government service summary.", scenario: "Home page shows available services as cards.", implementation: "<Card title=\"Birth Certificate\" description=\"Apply online\" />" },
        { title: "Application Status Card", description: "Card showing application progress.", scenario: "My Applications dashboard.", implementation: "<Card><Badge>Under Review</Badge><p>CERT-2026-001</p></Card>" },
        { title: "Quick Action Card", description: "Clickable card for navigation.", scenario: "Officer dashboard quick actions.", implementation: "<Card as=\"a\" href=\"/cases\">View Cases</Card>" },
      
        { title: 'Officer Dashboard Widget', description: 'Card displaying key metric with trend indicator.', scenario: 'Officer dashboard shows pending cases count with weekly trend.', implementation: '<Card><Statistic label="Pending Cases" value={42} trend="+5" /></Card>' },
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
                  Do use Card when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Grouping related content visually</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Clickable content blocks for navigation</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Dashboard widgets and summaries</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Service or feature showcases</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Card when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Tabular data — use Table</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple text content — no card needed</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Full-page layouts — use Section</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Inline content grouping — use Divider</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <div className="w-full max-w-[200px] bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer mb-3"><h4 className="font-semibold text-foreground text-sm mb-1">Birth Certificate</h4><p className="text-xs text-muted-foreground">Apply online</p></div>
                  <p className="text-sm text-muted-foreground">Use cards to group related content. Make the entire card clickable for navigation.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="w-full max-w-[200px] bg-card border border-border rounded-xl p-4 shadow-sm mb-3"><h4 className="font-semibold text-foreground text-sm mb-1">Certificate</h4><div className="flex gap-1 mt-2"><button className="px-1.5 py-0.5 text-[10px] bg-[#005196] text-white rounded">Apply</button><button className="px-1.5 py-0.5 text-[10px] border border-border rounded">Details</button><button className="px-1.5 py-0.5 text-[10px] border border-border rounded">Share</button><button className="px-1.5 py-0.5 text-[10px] border border-border rounded">Save</button></div></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t nest too many interactive elements inside a card — it creates confusing click targets.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Card configurations in real time.</p>
            <CardPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/table" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Table</h3>
                <p className="text-sm text-muted-foreground">For structured data</p>
              </a>
              <a href="/components/section" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Section</h3>
                <p className="text-sm text-muted-foreground">For page sections</p>
              </a>
              <a href="/components/badge" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Badge</h3>
                <p className="text-sm text-muted-foreground">For status indicators in cards</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added header/content/footer slots</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added clickable card variant</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with basic card layout</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Card scanning patterns</h3>
                <p className="text-sm text-muted-foreground">Users scan card grids in F-pattern. Place the most important info (title, status) in the top-left (NNG).</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Click target size</h3>
                <p className="text-sm text-muted-foreground">Clickable cards should have the entire card as the click target, not just the title link (WCAG 2.5.5).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
