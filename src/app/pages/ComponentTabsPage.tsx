/**
 * Tabs Component Documentation Page
 * Complete documentation for the Tabs component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

// Import the actual Tabs component for live preview
const TabsPreview = ({ variant, items }: any) => {
  const [active, setActive] = React.useState(0);

  return (
    <div className="w-full">
      <div className={`flex border-b ${variant === 'pills' ? 'border-transparent gap-2' : 'border-border'}`}>
        {items.map((item: any, index: number) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-4 py-2 transition-colors ${
              variant === 'pills'
                ? active === index
                  ? 'bg-[#005196] text-white rounded-lg'
                  : 'bg-muted text-muted-foreground rounded-lg hover:bg-gray-200'
                : active === index
                ? 'border-b-2 border-[#005196] text-[#005196] font-semibold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="p-6 bg-card border border-border border-t-0 rounded-b-lg">
        <p className="text-muted-foreground">{items[active].content}</p>
      </div>
    </div>
  );
};

export default function ComponentTabsPage() {
  const sampleTabs = [
    { label: 'Overview', content: 'Overview content goes here' },
    { label: 'Details', content: 'Detailed information' },
    { label: 'Documents', content: 'Document list and uploads' },
  ];

  return (
    <ComponentDocumentation
      name="Tabs"
      description="Tab navigation component for organizing related content into separate views. Commonly used in forms, dashboards, and detail pages."
      category="Navigation"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      props={[
        {
          name: 'variant',
          type: "'underline' | 'pills' | 'enclosed'",
          default: "'underline'",
          required: false,
          description: 'Visual style of tabs. Underline for minimal design, pills for button-like tabs, enclosed for boxed tabs.',
        },
        {
          name: 'items',
          type: "Array<{ label: string; content: ReactNode; disabled?: boolean; icon?: ReactNode }>",
          required: true,
          description: 'Array of tab items with labels and content.',
        },
        {
          name: 'defaultIndex',
          type: 'number',
          default: '0',
          required: false,
          description: 'Index of the initially active tab.',
        },
        {
          name: 'onChange',
          type: '(index: number) => void',
          required: false,
          description: 'Callback fired when tab changes.',
        },
        {
          name: 'orientation',
          type: "'horizontal' | 'vertical'",
          default: "'horizontal'",
          required: false,
          description: 'Tab orientation.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Tab size.',
        },
      ]}

      examples={[
        {
          title: 'Underline Variant',
          description: 'Default tabs with underline indicator.',
          code: `import { Tabs } from '@ux4g/react-core';

function Example() {
  return (
    <Tabs
      variant="underline"
      items={[
        { label: 'Overview', content: <div>Overview content</div> },
        { label: 'Details', content: <div>Details content</div> },
        { label: 'Documents', content: <div>Documents content</div> },
      ]}
    />
  );
}`,
          preview: <TabsPreview variant="underline" items={sampleTabs} />,
        },
        {
          title: 'Pills Variant',
          description: 'Button-style tabs for more visual prominence.',
          code: `import { Tabs } from '@ux4g/react-core';

function Example() {
  return (
    <Tabs
      variant="pills"
      items={[
        { label: 'Active', content: <div>Active applications</div> },
        { label: 'Pending', content: <div>Pending review</div> },
        { label: 'Completed', content: <div>Completed items</div> },
      ]}
    />
  );
}`,
          preview: <TabsPreview variant="pills" items={sampleTabs} />,
        },
      ]}

      reactCode={{
        component: `import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { TabsProps } from './Tabs.types';

export const Tabs: React.FC<TabsProps> = ({
  variant = 'underline',
  items,
  defaultIndex = 0,
  onChange,
  orientation = 'horizontal',
  size = 'md',
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleTabClick = (index: number) => {
    if (!items[index].disabled) {
      setActiveIndex(index);
      onChange?.(index);
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          'flex',
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          variant === 'underline' && 'border-b border-border',
          variant === 'pills' && 'gap-2'
        )}
        role="tablist"
      >
        {items.map((item, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={\`panel-\${index}\`}
            disabled={item.disabled}
            onClick={() => handleTabClick(index)}
            className={cn(
              'transition-colors',
              size === 'sm' && 'px-3 py-1.5 text-sm',
              size === 'md' && 'px-4 py-2 text-base',
              size === 'lg' && 'px-6 py-3 text-lg',
              variant === 'underline' && [
                activeIndex === index
                  ? 'border-b-2 border-[#005196] text-[#005196] font-semibold'
                  : 'text-muted-foreground hover:text-foreground',
              ],
              variant === 'pills' && [
                'rounded-lg',
                activeIndex === index
                  ? 'bg-[#005196] text-white'
                  : 'bg-muted text-muted-foreground hover:bg-gray-200',
              ],
              item.disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </button>
        ))}
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          id={\`panel-\${index}\`}
          role="tabpanel"
          hidden={activeIndex !== index}
          className="p-6"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};`,
        types: `export interface TabItem {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TabsProps {
  variant?: 'underline' | 'pills' | 'enclosed';
  items: TabItem[];
  defaultIndex?: number;
  onChange?: (index: number) => void;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}`,
        variants: `import { cva } from 'class-variance-authority';

export const tabVariants = cva(
  ['transition-colors cursor-pointer'],
  {
    variants: {
      variant: {
        underline: '',
        pills: 'rounded-lg',
        enclosed: 'border',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
  }
);`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

interface TabItem {
  label: string;
  content: any;
  disabled?: boolean;
}

@Component({
  selector: 'ux4g-tabs',
  template: \`
    <div class="w-full">
      <div [class]="getTabListClasses()" role="tablist">
        <button
          *ngFor="let item of items; let i = index"
          role="tab"
          [attr.aria-selected]="activeIndex === i"
          [disabled]="item.disabled"
          [class]="getTabClasses(i)"
          (click)="handleTabClick(i)"
        >
          {{ item.label }}
        </button>
      </div>

      <div
        *ngFor="let item of items; let i = index"
        [hidden]="activeIndex !== i"
        role="tabpanel"
        class="p-6"
      >
        <ng-container *ngIf="activeIndex === i">
          {{ item.content }}
        </ng-container>
      </div>
    </div>
  \`,
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() variant: 'underline' | 'pills' | 'enclosed' = 'underline';
  @Input() items: TabItem[] = [];
  @Input() defaultIndex = 0;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Output() change = new EventEmitter<number>();

  activeIndex = this.defaultIndex;

  handleTabClick(index: number): void {
    if (!this.items[index].disabled) {
      this.activeIndex = index;
      this.change.emit(index);
    }
  }

  getTabListClasses(): string {
    const classes = ['flex'];
    if (this.variant === 'underline') {
      classes.push('border-b', 'border-border');
    } else if (this.variant === 'pills') {
      classes.push('gap-2');
    }
    return classes.join(' ');
  }

  getTabClasses(index: number): string {
    const classes = ['transition-colors'];
    const isActive = this.activeIndex === index;

    if (this.size === 'sm') classes.push('px-3', 'py-1.5', 'text-sm');
    else if (this.size === 'lg') classes.push('px-6', 'py-3', 'text-lg');
    else classes.push('px-4', 'py-2', 'text-base');

    if (this.variant === 'pills') {
      classes.push('rounded-lg');
      if (isActive) {
        classes.push('bg-[#005196]', 'text-white');
      } else {
        classes.push('bg-muted', 'text-muted-foreground', 'hover:bg-gray-200');
      }
    } else if (this.variant === 'underline') {
      if (isActive) {
        classes.push('border-b-2', 'border-[#005196]', 'text-[#005196]', 'font-semibold');
      } else {
        classes.push('text-muted-foreground', 'hover:text-foreground');
      }
    }

    return classes.join(' ');
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule],
  exports: [TabsComponent]
})
export class TabsModule { }`,
        types: `export interface TabItem {
  label: string;
  content: any;
  disabled?: boolean;
}

export type TabVariant = 'underline' | 'pills' | 'enclosed';`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-tabs> custom element",
        html: "<ux4g-tabs variant=\"primary\" size=\"md\"><!-- Tabs --></ux4g-tabs>",
      }}
      comparisons={[
        {
          system: 'Material UI',
          component: 'Tabs',
          variants: 'standard, scrollable, full-width',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-tabs/',
        },
        {
          system: 'Ant Design',
          component: 'Tabs',
          variants: 'line, card, editable-card',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/tabs',
        },
        {
          system: 'Chakra UI',
          component: 'Tabs',
          variants: 'line, enclosed, soft-rounded',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/tabs',
        },
        {
          system: 'Radix UI',
          component: 'Tabs',
          variants: 'unstyled primitive',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://www.radix-ui.com/primitives/docs/components/tabs',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'ARIA tablist, tab, and tabpanel roles',
          'aria-selected attribute on active tab',
          'aria-controls linking tabs to panels',
          'Keyboard navigation support',
          'Focus management with visible focus indicators',
          'Disabled tabs marked with aria-disabled',
          'Proper color contrast for all states',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus into tab list' },
          { key: 'Left Arrow', action: 'Navigate to previous tab' },
          { key: 'Right Arrow', action: 'Navigate to next tab' },
          { key: 'Home', action: 'Navigate to first tab' },
          { key: 'End', action: 'Navigate to last tab' },
          { key: 'Enter/Space', action: 'Activate focused tab' },
        ],
        screenReader: [
          'Announces tab role and label',
          'Announces selected state',
          'Announces panel content when tab is activated',
          'Announces disabled state for disabled tabs',
        ],
      }}

      tokens={{
        file: '/tokens/components/tabs.json',
        mappings: [
          { property: 'Tab Height (Medium)', token: 'tabs.height.md', value: '40px' },
          { property: 'Tab Padding Horizontal', token: 'tabs.padding.horizontal', value: '16px' },
          { property: 'Active Border Width', token: 'tabs.border.active', value: '2px' },
          { property: 'Active Border Color', token: 'tabs.border.color', value: '#005196 (Navy 500)' },
          { property: 'Active Text Color', token: 'tabs.text.active', value: '#005196' },
          { property: 'Inactive Text Color', token: 'tabs.text.inactive', value: '#6B7280 (Gray 600)' },
        ],
      }}
    />
  );
}
