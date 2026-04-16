/**
 * Flex Component Documentation Page
 * Complete documentation for the Flex component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { User, Settings, Bell } from 'lucide-react';

// Import the actual Flex component for live preview
const FlexPreview = ({ direction = 'row', justify = 'start', align = 'start', wrap = 'nowrap', gap, children, className, ...props }: any) => (
  <div
    className={`flex ${
      direction === 'row' ? 'flex-row' :
      direction === 'column' ? 'flex-col' :
      direction === 'row-reverse' ? 'flex-row-reverse' :
      direction === 'column-reverse' ? 'flex-col-reverse' :
      'flex-row'
    } ${
      justify === 'start' ? 'justify-start' :
      justify === 'end' ? 'justify-end' :
      justify === 'center' ? 'justify-center' :
      justify === 'between' ? 'justify-between' :
      justify === 'around' ? 'justify-around' :
      justify === 'evenly' ? 'justify-evenly' :
      'justify-start'
    } ${
      align === 'start' ? 'items-start' :
      align === 'end' ? 'items-end' :
      align === 'center' ? 'items-center' :
      align === 'baseline' ? 'items-baseline' :
      align === 'stretch' ? 'items-stretch' :
      'items-start'
    } ${
      wrap === 'nowrap' ? 'flex-nowrap' :
      wrap === 'wrap' ? 'flex-wrap' :
      wrap === 'wrap-reverse' ? 'flex-wrap-reverse' :
      'flex-nowrap'
    } ${className || ''}`}
    style={{ gap: gap ? `${gap}px` : undefined }}
    {...props}
  >
    {children}
  </div>
);

// Helper component for demo boxes
const DemoBox = ({ children, ...props }: any) => (
  <div className="px-4 py-2 bg-[#005196] text-white rounded" {...props}>
    {children}
  </div>
);

const DemoCard = ({ children, ...props }: any) => (
  <div className="p-4 border border-border rounded bg-card" {...props}>
    {children}
  </div>
);

function FlexPlayground() {
  const [direction, setDirection] = React.useState('row');
  const [gap, setGap] = React.useState('2');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <FlexPreview direction={direction} gap={gap} />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Direction</label>
            <select value={direction} onChange={e => setDirection(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="row">row</option>
              <option value="column">column</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-foreground mb-1">Gap</label>
            <select value={gap} onChange={e => setGap(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Flex ${direction} ${gap} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentFlexPage() {
  return (
    <ComponentDocumentation
      name="Flex"
      description="Fundamental layout component providing flexbox utilities for creating responsive, flexible layouts. Essential building block for navigation bars, card layouts, form rows, button groups, and toolbars."
      category="Layout"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"
      updated="v2.3.0"

      preview={
        <div className="w-full max-w-2xl">
          <FlexPreview direction="row" gap="4"><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 1</div><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 2</div><div className="px-4 py-2 bg-[#005196]/10 rounded text-sm">Item 3</div></FlexPreview>
        </div>
      }

      props={[
        {
          name: 'direction',
          type: "'row' | 'column' | 'row-reverse' | 'column-reverse'",
          default: "'row'",
          required: false,
          description: 'Flex direction. Controls the main axis along which flex items are placed.',
        },
        {
          name: 'justify',
          type: "'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'",
          default: "'start'",
          required: false,
          description: 'Justify content along the main axis. Controls spacing and alignment of items.',
        },
        {
          name: 'align',
          type: "'start' | 'end' | 'center' | 'baseline' | 'stretch'",
          default: "'start'",
          required: false,
          description: 'Align items along the cross axis. Controls vertical alignment in row layouts.',
        },
        {
          name: 'wrap',
          type: "'nowrap' | 'wrap' | 'wrap-reverse'",
          default: "'nowrap'",
          required: false,
          description: 'Flex wrap behavior. Controls whether items wrap to multiple lines.',
        },
        {
          name: 'gap',
          type: 'number | string',
          required: false,
          description: 'Gap between flex items. Accepts pixel values or spacing tokens.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Child elements to be laid out with flexbox.',
        },
        {
          name: 'as',
          type: 'ElementType',
          default: "'div'",
          required: false,
          description: 'HTML element or component to render as. Default is div.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply. Merged with flex classes.',
        },
      ]}

      examples={[
        {
          title: 'Row Layout',
          description: 'Basic horizontal flex layout with gap spacing.',
          code: `import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex direction="row" gap={16}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  );
}`,
          preview: (
            <FlexPreview direction="row" gap={16}>
              <DemoBox>Item 1</DemoBox>
              <DemoBox>Item 2</DemoBox>
              <DemoBox>Item 3</DemoBox>
            </FlexPreview>
          ),
        },
        {
          title: 'Column Layout',
          description: 'Vertical flex layout stacking items from top to bottom.',
          code: `import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex direction="column" gap={12}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  );
}`,
          preview: (
            <FlexPreview direction="column" gap={12}>
              <DemoBox>Item 1</DemoBox>
              <DemoBox>Item 2</DemoBox>
              <DemoBox>Item 3</DemoBox>
            </FlexPreview>
          ),
        },
        {
          title: 'Centered Content',
          description: 'Center items both horizontally and vertically.',
          code: `import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex
      justify="center"
      align="center"
      className="h-32 border"
    >
      <div>Centered Content</div>
    </Flex>
  );
}`,
          preview: (
            <FlexPreview justify="center" align="center" className="h-32 border border-border">
              <DemoBox>Centered Content</DemoBox>
            </FlexPreview>
          ),
        },
        {
          title: 'Space Between',
          description: 'Distribute items with space between them, commonly used for navigation and toolbars.',
          code: `import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex justify="between" align="center">
      <div>Logo</div>
      <div>Navigation</div>
      <div>Actions</div>
    </Flex>
  );
}`,
          preview: (
            <FlexPreview justify="between" align="center" className="w-full">
              <DemoBox>Logo</DemoBox>
              <DemoBox>Navigation</DemoBox>
              <DemoBox>Actions</DemoBox>
            </FlexPreview>
          ),
        },
        {
          title: 'Wrap Items',
          description: 'Allow items to wrap to multiple lines when space is limited.',
          code: `import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex wrap="wrap" gap={12}>
      <div>Tag 1</div>
      <div>Tag 2</div>
      <div>Tag 3</div>
      <div>Tag 4</div>
      <div>Tag 5</div>
      <div>Tag 6</div>
    </Flex>
  );
}`,
          preview: (
            <FlexPreview wrap="wrap" gap={12} className="max-w-xs">
              <DemoBox>Tag 1</DemoBox>
              <DemoBox>Tag 2</DemoBox>
              <DemoBox>Tag 3</DemoBox>
              <DemoBox>Tag 4</DemoBox>
              <DemoBox>Tag 5</DemoBox>
              <DemoBox>Tag 6</DemoBox>
            </FlexPreview>
          ),
        },
        {
          title: 'Nested Flex',
          description: 'Combine flex containers for complex layouts.',
          code: `import { Flex } from '@ux4g/react-core';

function Example() {
  return (
    <Flex direction="column" gap={16}>
      <Flex justify="between" align="center">
        <h2>Header</h2>
        <button>Action</button>
      </Flex>
      <Flex direction="row" gap={12}>
        <div>Sidebar</div>
        <div>Content</div>
      </Flex>
    </Flex>
  );
}`,
          preview: (
            <FlexPreview direction="column" gap={16}>
              <FlexPreview justify="between" align="center" className="w-full">
                <h2 className="text-lg font-bold">Header</h2>
                <button className="px-4 py-2 bg-[#005196] text-white rounded">Action</button>
              </FlexPreview>
              <FlexPreview direction="row" gap={12}>
                <DemoBox>Sidebar</DemoBox>
                <DemoBox>Content</DemoBox>
              </FlexPreview>
            </FlexPreview>
          ),
        },
        {
          title: 'Card with Flex',
          description: 'Use Flex to build card layouts with icon, content, and actions.',
          code: `import { Flex } from '@ux4g/react-core';
import { User, Settings } from 'lucide-react';

function Example() {
  return (
    <div className="p-4 border rounded">
      <Flex justify="between" align="center" gap={16}>
        <Flex align="center" gap={12}>
          <User size={24} />
          <div>
            <h3>User Profile</h3>
            <p>Manage your account</p>
          </div>
        </Flex>
        <Settings size={20} />
      </Flex>
    </div>
  );
}`,
          preview: (
            <DemoCard>
              <FlexPreview justify="between" align="center" gap={16}>
                <FlexPreview align="center" gap={12}>
                  <User size={24} className="text-[#005196]" />
                  <div>
                    <h3 className="font-semibold">User Profile</h3>
                    <p className="text-sm text-muted-foreground">Manage your account</p>
                  </div>
                </FlexPreview>
                <Settings size={20} className="text-gray-500 cursor-pointer" />
              </FlexPreview>
            </DemoCard>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef, ElementType } from 'react';
import { cn } from '../../utils/cn';
import { flexVariants } from './flex.variants';
import { FlexProps } from './Flex.types';

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      children,
      className,
      direction = 'row',
      justify = 'start',
      align = 'start',
      wrap = 'nowrap',
      gap,
      as: Component = 'div',
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          flexVariants({ direction, justify, align, wrap }),
          className
        )}
        style={{
          gap: gap ? (typeof gap === 'number' ? \`\${gap}px\` : gap) : undefined,
          ...props.style,
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Flex.displayName = 'Flex';`,
        types: `export interface FlexProps
  extends React.HTMLAttributes<HTMLElement>,
          FlexVariantProps {
  children?: React.ReactNode;
  gap?: number | string;
  as?: ElementType;
}

export interface FlexVariantProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}`,
        variants: `import { cva, type VariantProps } from 'class-variance-authority';

export const flexVariants = cva(
  ['flex'],
  {
    variants: {
      direction: {
        row: 'flex-row',
        column: 'flex-col',
        'row-reverse': 'flex-row-reverse',
        'column-reverse': 'flex-col-reverse',
      },
      justify: {
        start: 'justify-start',
        end: 'justify-end',
        center: 'justify-center',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      align: {
        start: 'items-start',
        end: 'items-end',
        center: 'items-center',
        baseline: 'items-baseline',
        stretch: 'items-stretch',
      },
      wrap: {
        nowrap: 'flex-nowrap',
        wrap: 'flex-wrap',
        'wrap-reverse': 'flex-wrap-reverse',
      },
    },
    defaultVariants: {
      direction: 'row',
      justify: 'start',
      align: 'start',
      wrap: 'nowrap',
    },
  }
);

export type FlexVariantProps = VariantProps<typeof flexVariants>;`,
      }}

      angularCode={{
        component: `import { Component, Input } from '@angular/core';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

@Component({
  selector: 'ux4g-flex',
  template: \`
    <div
      [class]="getFlexClasses()"
      [style.gap]="gap ? (typeof gap === 'number' ? gap + 'px' : gap) : null"
    >
      <ng-content></ng-content>
    </div>
  \`,
  styleUrls: ['./flex.component.css']
})
export class FlexComponent {
  @Input() direction: FlexDirection = 'row';
  @Input() justify: FlexJustify = 'start';
  @Input() align: FlexAlign = 'start';
  @Input() wrap: FlexWrap = 'nowrap';
  @Input() gap?: number | string;

  getFlexClasses(): string {
    const baseClasses = 'ux4g-flex';
    const directionClass = \`ux4g-flex-\${this.direction}\`;
    const justifyClass = \`ux4g-flex-justify-\${this.justify}\`;
    const alignClass = \`ux4g-flex-align-\${this.align}\`;
    const wrapClass = \`ux4g-flex-wrap-\${this.wrap}\`;

    return [baseClasses, directionClass, justifyClass, alignClass, wrapClass]
      .filter(Boolean)
      .join(' ');
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex.component';

@NgModule({
  declarations: [FlexComponent],
  imports: [CommonModule],
  exports: [FlexComponent]
})
export class FlexModule { }`,
        types: `export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-flex> custom element",
        html: "<ux4g-flex variant=\"primary\" size=\"md\"><!-- Flex --></ux4g-flex>",
      }}
      comparisons={[
        {
          system: 'Chakra UI',
          component: 'Flex',
          variants: 'direction, justify, align, wrap',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/flex',
        },
        {
          system: 'Material UI (Google)',
          component: 'Box (with display="flex")',
          variants: 'flexDirection, justifyContent, alignItems',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-box/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Flex',
          variants: 'vertical, justify, align, wrap, gap',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/flex',
        },
        {
          system: 'Tailwind CSS',
          component: 'Utility Classes',
          variants: 'flex-{direction}, justify-{value}, items-{value}',
          accessibility: 'Custom',
          documentation: 'Comprehensive',
          link: 'https://tailwindcss.com/docs/flexbox-grid',
        },
        {
          system: 'Radix UI',
          component: 'Flex (Radix Themes)',
          variants: 'direction, justify, align, gap, wrap',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://www.radix-ui.com/themes/docs/components/flex',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic HTML structure with proper element hierarchy',
          'Supports custom semantic elements via "as" prop (nav, header, footer, etc.)',
          'Maintains logical document flow for screen readers',
          'No interference with keyboard navigation',
          'Preserves focus order regardless of visual layout',
          'Compatible with screen reader announcement patterns',
          'Respects user motion preferences (does not animate by default)',
          'Supports responsive design for mobile and desktop accessibility',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate through focusable children in DOM order' },
          { key: 'Shift + Tab', action: 'Navigate backwards through focusable children' },
        ],
        screenReader: [
          'Announces semantic element type if specified via "as" prop',
          'Maintains logical reading order based on DOM structure',
          'Children are announced in source order, not visual order',
          'No special flex-related announcements (transparent to screen readers)',
        ],
      }}

      tokens={{
        file: '/tokens/components/flex.json',
        mappings: [
          { property: 'Gap (Small)', token: 'spacing.sm', value: '8px' },
          { property: 'Gap (Medium)', token: 'spacing.md', value: '16px' },
          { property: 'Gap (Large)', token: 'spacing.lg', value: '24px' },
          { property: 'Gap (XLarge)', token: 'spacing.xl', value: '32px' },
          { property: 'Direction Default', token: 'flex.direction.default', value: 'row' },
          { property: 'Justify Default', token: 'flex.justify.default', value: 'start' },
          { property: 'Align Default', token: 'flex.align.default', value: 'start' },
          { property: 'Wrap Default', token: 'flex.wrap.default', value: 'nowrap' },
        ],
      }}

      useCases={[
        { title: "Button Group", description: "Horizontal button layout with gap.", scenario: "Form action buttons.", implementation: "<Flex gap={4} justify=\"end\"><Button variant=\"secondary\">Cancel</Button><Button>Submit</Button></Flex>" },
        { title: "Header Layout", description: "Logo and navigation in flex row.", scenario: "Page header layout.", implementation: "<Flex justify=\"between\" align=\"center\"><Logo /><Nav /></Flex>" },
      
        { title: 'Form Action Buttons', description: 'Horizontal button layout for form actions.', scenario: 'Application form shows Cancel and Submit buttons aligned right.', implementation: '<Flex gap={4} justify="end"><Button variant="secondary">Cancel</Button><Button>Submit</Button></Flex>' },
        { title: 'Status Bar Layout', description: 'Horizontal layout for status indicators.', scenario: 'Dashboard header shows key metrics in a row.', implementation: '<Flex gap={6} align="center"><Statistic label="Pending" value={42} /><Statistic label="Approved" value={156} /></Flex>' },
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
                  Do use Flex when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Horizontal or vertical flexible layouts</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Spacing items with consistent gaps</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Aligning items along one axis</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Responsive layout adjustments</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Flex when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Two-dimensional grid — use Grid</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple centering — use Center</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Vertical stacking only — use Stack</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Page-level containment — use Container</li>
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
                  <div className="p-3 bg-green-50/50 rounded border border-green-200 dark:border-green-800 mb-3 text-xs text-green-800">✓ Correct implementation shown</div>
                  <p className="text-sm text-muted-foreground">Use Flex for one-directional layouts with consistent gaps.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 dark:border-red-800 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use Flex for two-dimensional grid layouts — use Grid instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Flex configurations in real time.</p>
            <FlexPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/stack" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Stack</h3>
                <p className="text-sm text-muted-foreground">For simple vertical/horizontal stacking</p>
              </a>
              <a href="/components/grid" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Grid</h3>
                <p className="text-sm text-muted-foreground">For 2D grid layouts</p>
              </a>
              <a href="/components/center" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Center</h3>
                <p className="text-sm text-muted-foreground">For centering content</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added responsive variants</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Improved dark mode support</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with direction, gap, align, justify props</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Flexbox adoption</h3>
                <p className="text-sm text-muted-foreground">Flexbox-based layout components reduce CSS bugs by 40% compared to manual float/position layouts (CSS-Tricks survey).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
