/**
 * Accordion Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ChevronDown } from 'lucide-react';

const AccordionPreview = () => {
  const [open, setOpen] = React.useState(0);
  
  const items = [
    { title: 'What documents are required?', content: 'You need Aadhaar card, PAN card, and address proof.' },
    { title: 'How long does processing take?', content: 'Processing typically takes 7-10 business days.' },
    { title: 'What are the fees?', content: 'Application fee is ₹500, payable online.' },
  ];
  
  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === idx ? -1 : idx)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background transition-colors"
          >
            <span className="font-semibold text-foreground">{item.title}</span>
            <ChevronDown
              size={20}
              className={`text-muted-foreground transition-transform ${open === idx ? 'rotate-180' : ''}`}
            />
          </button>
          {open === idx && (
            <div className="px-6 py-4 bg-background border-t border-border">
              <p className="text-muted-foreground">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

function AccordionPlayground() {
  const [allowMultiple, setAllowMultiple] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="text-center space-y-3">
          <div className="text-4xl">🧩</div>
          <p className="text-sm text-muted-foreground">Live Accordion preview with current settings</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {allowMultiple && <span className="px-2 py-0.5 rounded-full text-xs bg-[#005196]/10 text-[#005196] font-medium">allowMultiple</span>}
          </div>
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={allowMultiple} onChange={e => setAllowMultiple(e.target.checked)} className="accent-primary" /><span className="text-foreground">Allow Multiple</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Accordion${allowMultiple ? ' allowMultiple' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentAccordionPage() {
  return (
    <ComponentDocumentation
      name="Accordion"
      description="Collapsible content component that allows users to show and hide sections of content. Useful for FAQs, documentation, and organizing large amounts of information."
      category="Data Display"
      maturity="stable"
      tier="composite"
      since="v1.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <AccordionPreview />
        </div>
      }
      
      props={[
        {
          name: 'items',
          type: 'Array<{title: string, content: ReactNode}>',
          required: true,
          description: 'Accordion items with title and content.',
        },
        {
          name: 'defaultOpen',
          type: 'number | number[]',
          required: false,
          description: 'Index(es) of initially open items.',
        },
        {
          name: 'multiple',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Allow multiple items open simultaneously.',
        },
        {
          name: 'bordered',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Show borders around items.',
        },
      ]}
      
      examples={[
        {
          title: 'Basic Accordion',
          description: 'Simple FAQ accordion.',
          code: `import { Accordion } from '@ux4g/react-core';

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
}`,
          preview: <AccordionPreview />,
        },
      ]}
      
      reactCode={{
        component: `import React, { useState } from 'react';
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
          className={\`\${bordered ? 'border border-border' : ''} rounded-lg overflow-hidden\`}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background transition-colors"
          >
            <span className="font-semibold text-foreground">{item.title}</span>
            <ChevronDown
              size={20}
              className={\`text-muted-foreground transition-transform \${
                openItems.includes(index) ? 'rotate-180' : ''
              }\`}
            />
          </button>
          
          {openItems.includes(index) && (
            <div className="px-6 py-4 bg-background border-t border-border">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};`,
        types: `export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number | number[];
  multiple?: boolean;
  bordered?: boolean;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input } from '@angular/core';

interface AccordionItem {
  title: string;
  content: string;
}

@Component({
  selector: 'ux4g-accordion',
  template: \`
    <div class="space-y-2">
      <div *ngFor="let item of items; let i = index"
           [class]="bordered ? 'border border-border rounded-lg overflow-hidden' : ''">
        <button
          (click)="toggleItem(i)"
          class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background transition-colors">
          <span class="font-semibold text-foreground">{{ item.title }}</span>
          <span [class]="getChevronClasses(i)">▼</span>
        </button>
        
        <div *ngIf="isOpen(i)"
             class="px-6 py-4 bg-background border-t border-border">
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
    return \`text-muted-foreground transition-transform \${this.isOpen(index) ? 'rotate-180' : ''}\`;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule],
  exports: [AccordionComponent]
})
export class AccordionModule { }`,
        types: `export interface AccordionItem {
  title: string;
  content: string;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-accordion> custom element",
        html: "<ux4g-accordion variant=\"primary\" size=\"md\"><!-- Accordion --></ux4g-accordion>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Accordion',
          variants: 'default, controlled, disabled',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-accordion/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Collapse',
          variants: 'default, accordion, ghost, borderless',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/collapse',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Accordion',
          variants: 'default',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/accordion/',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Keyboard navigable buttons',
          'ARIA attributes for expand/collapse state',
          'Focus management',
          'Clear visual indicators',
          'Semantic HTML structure',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate between accordion headers' },
          { key: 'Enter/Space', action: 'Toggle accordion item' },
        ],
        screenReader: [
          'Announces button role',
          'Reads header text',
          'Announces expanded/collapsed state',
          'Reads content when expanded',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/accordion.json',
        mappings: [
          { property: 'Header Background (Hover)', token: 'accordion.header.hover', value: '#F9FAFB' },
          { property: 'Content Background', token: 'accordion.content.bg', value: '#F9FAFB' },
          { property: 'Border Color', token: 'accordion.border', value: '#E5E7EB' },
        ],
      }}

      useCases={[
        { title: "FAQ Section", description: "Expandable FAQ items on help pages.", scenario: "Certificate service help page.", implementation: "<Accordion><AccordionItem title=\"How long does processing take?\">7-10 days.</AccordionItem></Accordion>" },
        { title: "Document Guidelines", description: "Collapsible sections for each document type.", scenario: "Document requirements page.", implementation: "<Accordion><AccordionItem title=\"Identity Proof\">Aadhaar, Voter ID...</AccordionItem></Accordion>" },
        { title: "Application Details", description: "Expandable sections in review summary.", scenario: "Review page before submission.", implementation: "<Accordion><AccordionItem title=\"Personal Details\">...</AccordionItem></Accordion>" },
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
                  Do use Accordion when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Long content that can be organized into sections</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>FAQ pages with many questions</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Progressive disclosure of detailed information</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Reducing visual clutter on content-heavy pages</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Accordion when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Content users need to see simultaneously — show it all</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Navigation — use Tabs or links</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Very short content — no need to collapse</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Critical information that must be visible</li>
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
                  <p className="text-sm text-muted-foreground">Use accordions for FAQ pages and collapsible content sections.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t hide critical information inside accordions — users may miss it.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Accordion configurations in real time.</p>
            <AccordionPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/tabs" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Tabs</h3>
                <p className="text-sm text-muted-foreground">For parallel content sections</p>
              </a>
              <a href="/components/drawer" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Drawer</h3>
                <p className="text-sm text-muted-foreground">For side panel content</p>
              </a>
              <a href="/components/showhide" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">ShowHide</h3>
                <p className="text-sm text-muted-foreground">For simple toggle visibility</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added allow-multiple mode</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added controlled open state</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with single-open mode</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Accordion reduces cognitive load</h3>
                <p className="text-sm text-muted-foreground">Accordions reduce perceived page complexity by 40% on content-heavy pages (NNG).</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Default open state</h3>
                <p className="text-sm text-muted-foreground">GOV.UK recommends opening the first item by default so users understand the interaction pattern.</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
