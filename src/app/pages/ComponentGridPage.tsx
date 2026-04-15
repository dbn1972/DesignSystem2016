/**
 * Grid Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

const GridPreview = ({ cols = 3 }: any) => (
  <div className={`grid ${cols === 2 ? 'grid-cols-2' : cols === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-4`}>
    {Array.from({ length: cols === 2 ? 4 : cols === 3 ? 6 : 8 }).map((_, i) => (
      <div key={i} className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center">
        <span className="text-muted-foreground font-semibold">Item {i + 1}</span>
      </div>
    ))}
  </div>
);

function GridPlayground() {
  const [columns, setColumns] = React.useState('1');
  const [gap, setGap] = React.useState('2');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="text-center space-y-3">
          <div className="text-4xl">🧩</div>
          <p className="text-sm text-muted-foreground">Live Grid preview with current settings</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground font-medium">{columns}</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground font-medium">{gap}</span>
          </div>
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Columns</label>
            <select value={columns} onChange={e => setColumns(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
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
            {`<Grid ${columns} ${gap} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentGridPage() {
  return (
    <ComponentDocumentation
      name="Grid"
      description="Flexible grid layout system for arranging content in rows and columns. Supports responsive breakpoints, gap control, and flexible column configurations."
      category="Layout"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <GridPreview />
        </div>
      }
      
      props={[
        {
          name: 'columns',
          type: 'number | { sm?: number, md?: number, lg?: number, xl?: number }',
          default: '1',
          required: false,
          description: 'Number of columns (responsive object supported).',
        },
        {
          name: 'gap',
          type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",
          default: "'md'",
          required: false,
          description: 'Gap between grid items.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Grid items to display.',
        },
        {
          name: 'alignItems',
          type: "'start' | 'center' | 'end' | 'stretch'",
          default: "'stretch'",
          required: false,
          description: 'Vertical alignment of items.',
        },
        {
          name: 'justifyItems',
          type: "'start' | 'center' | 'end' | 'stretch'",
          default: "'stretch'",
          required: false,
          description: 'Horizontal alignment of items.',
        },
      ]}
      
      examples={[
        {
          title: 'Basic Grid',
          description: 'Simple 3-column grid layout.',
          code: `import { Grid } from '@ux4g/react-core';

function Example() {
  return (
    <Grid columns={3} gap="md">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
    </Grid>
  );
}`,
          preview: <GridPreview cols={3} />,
        },
        {
          title: '2-Column Grid',
          description: 'Two-column layout.',
          code: `import { Grid } from '@ux4g/react-core';

function Example() {
  return (
    <Grid columns={2} gap="lg">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Grid>
  );
}`,
          preview: <GridPreview cols={2} />,
        },
        {
          title: '4-Column Grid',
          description: 'Four-column layout.',
          code: `import { Grid } from '@ux4g/react-core';

function Example() {
  return (
    <Grid columns={4} gap="sm">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
      <div>Item 7</div>
      <div>Item 8</div>
    </Grid>
  );
}`,
          preview: <GridPreview cols={4} />,
        },
        {
          title: 'Responsive Grid',
          description: 'Grid that adapts to screen size.',
          code: `import { Grid } from '@ux4g/react-core';

function Example() {
  return (
    <Grid 
      columns={{ 
        sm: 1, 
        md: 2, 
        lg: 3, 
        xl: 4 
      }} 
      gap="md"
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
      <div>Item 7</div>
      <div>Item 8</div>
    </Grid>
  );
}`,
          preview: <GridPreview cols={3} />,
        },
        {
          title: 'Different Gap Sizes',
          description: 'Grid with various gap options.',
          code: `import { Grid } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-8">
      <Grid columns={3} gap="xs">
        {/* Extra small gap */}
      </Grid>
      
      <Grid columns={3} gap="sm">
        {/* Small gap */}
      </Grid>
      
      <Grid columns={3} gap="md">
        {/* Medium gap (default) */}
      </Grid>
      
      <Grid columns={3} gap="lg">
        {/* Large gap */}
      </Grid>
      
      <Grid columns={3} gap="xl">
        {/* Extra large gap */}
      </Grid>
    </div>
  );
}`,
          preview: (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Extra Small Gap</p>
                <div className="grid grid-cols-3 gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-blue-100 border-2 border-blue-300 rounded p-2 text-center text-sm">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Medium Gap</p>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-blue-100 border-2 border-blue-300 rounded p-2 text-center text-sm">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Large Gap</p>
                <div className="grid grid-cols-3 gap-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-blue-100 border-2 border-blue-300 rounded p-2 text-center text-sm">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        },
      ]}
      
      reactCode={{
        component: `import React from 'react';
import { cn } from '../../utils/cn';
import { GridProps } from './Grid.types';

export const Grid: React.FC<GridProps> = ({
  columns = 1,
  gap = 'md',
  children,
  alignItems = 'stretch',
  justifyItems = 'stretch',
  className,
}) => {
  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };
  
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };
  
  const justifyClasses = {
    start: 'justify-items-start',
    center: 'justify-items-center',
    end: 'justify-items-end',
    stretch: 'justify-items-stretch',
  };
  
  // Handle responsive columns
  const getColumnClasses = () => {
    if (typeof columns === 'number') {
      return \`grid-cols-\${columns}\`;
    }
    
    const responsiveClasses = [];
    if (columns.sm) responsiveClasses.push(\`sm:grid-cols-\${columns.sm}\`);
    if (columns.md) responsiveClasses.push(\`md:grid-cols-\${columns.md}\`);
    if (columns.lg) responsiveClasses.push(\`lg:grid-cols-\${columns.lg}\`);
    if (columns.xl) responsiveClasses.push(\`xl:grid-cols-\${columns.xl}\`);
    
    return responsiveClasses.join(' ');
  };
  
  return (
    <div
      className={cn(
        'grid',
        getColumnClasses(),
        gapClasses[gap],
        alignClasses[alignItems],
        justifyClasses[justifyItems],
        className
      )}
    >
      {children}
    </div>
  );
};`,
        types: `export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GridAlign = 'start' | 'center' | 'end' | 'stretch';

export interface GridResponsiveColumns {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface GridProps {
  columns?: number | GridResponsiveColumns;
  gap?: GridGap;
  children: React.ReactNode;
  alignItems?: GridAlign;
  justifyItems?: GridAlign;
  className?: string;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-grid',
  template: \`
    <div [class]="getGridClasses()">
      <ng-content></ng-content>
    </div>
  \`
})
export class GridComponent {
  @Input() columns: number = 1;
  @Input() gap: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() alignItems: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  @Input() justifyItems: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  
  getGridClasses(): string {
    const gapClasses = {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    };
    
    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    };
    
    const justifyClasses = {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      stretch: 'justify-items-stretch',
    };
    
    return \`grid grid-cols-\${this.columns} \${gapClasses[this.gap]} \${alignClasses[this.alignItems]} \${justifyClasses[this.justifyItems]}\`;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';

@NgModule({
  declarations: [GridComponent],
  imports: [CommonModule],
  exports: [GridComponent]
})
export class GridModule { }`,
        types: `export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GridAlign = 'start' | 'center' | 'end' | 'stretch';

export interface GridProps {
  columns?: number;
  gap?: GridGap;
  alignItems?: GridAlign;
  justifyItems?: GridAlign;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-grid> custom element",
        html: "<ux4g-grid variant=\"primary\" size=\"md\"><!-- Grid --></ux4g-grid>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Grid',
          variants: 'container, item, spacing, responsive',
          accessibility: 'N/A (Layout)',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-grid/',
        },
        {
          system: 'Bootstrap',
          component: 'Grid',
          variants: 'row, col, gutter, responsive',
          accessibility: 'N/A (Layout)',
          documentation: 'Comprehensive',
          link: 'https://getbootstrap.com/docs/5.3/layout/grid/',
        },
        {
          system: 'Chakra UI',
          component: 'Grid / SimpleGrid',
          variants: 'columns, spacing, responsive',
          accessibility: 'N/A (Layout)',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/grid',
        },
        {
          system: 'Tailwind CSS',
          component: 'Grid',
          variants: 'grid-cols-*, gap-*, responsive',
          accessibility: 'N/A (Layout)',
          documentation: 'Comprehensive',
          link: 'https://tailwindcss.com/docs/grid-template-columns',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'Layout Component (No specific WCAG criteria)',
        features: [
          'Semantic HTML structure',
          'Responsive design support',
          'Does not interfere with document flow',
          'Maintains reading order for screen readers',
          'Supports nested interactive elements',
        ],
        keyboardSupport: [
          { key: 'N/A', action: 'Grid is non-interactive layout container' },
        ],
        screenReader: [
          'Transparent to screen readers',
          'Content read in DOM order',
          'Visual grid does not affect semantic structure',
        ],
      }}
      
      tokens={{
        file: '/tokens/layout/grid.json',
        mappings: [
          { property: 'Gap (XS)', token: 'grid.gap.xs', value: '4px (0.25rem)' },
          { property: 'Gap (SM)', token: 'grid.gap.sm', value: '8px (0.5rem)' },
          { property: 'Gap (MD)', token: 'grid.gap.md', value: '16px (1rem)' },
          { property: 'Gap (LG)', token: 'grid.gap.lg', value: '24px (1.5rem)' },
          { property: 'Gap (XL)', token: 'grid.gap.xl', value: '32px (2rem)' },
          { property: 'Columns (Default)', token: 'grid.columns.default', value: '1' },
          { property: 'Breakpoint (SM)', token: 'grid.breakpoint.sm', value: '640px' },
          { property: 'Breakpoint (MD)', token: 'grid.breakpoint.md', value: '768px' },
          { property: 'Breakpoint (LG)', token: 'grid.breakpoint.lg', value: '1024px' },
          { property: 'Breakpoint (XL)', token: 'grid.breakpoint.xl', value: '1280px' },
        ],
      }}

      useCases={[
        { title: "Service Card Grid", description: "Grid layout for service cards.", scenario: "Home page service listing.", implementation: "<Grid columns={3} gap={6}>{services.map(s => <Card key={s.id} />)}</Grid>" },
        { title: "Dashboard Layout", description: "Multi-column dashboard layout.", scenario: "Officer dashboard widgets.", implementation: "<Grid columns={{ sm: 1, md: 2, lg: 3 }} gap={4}>{widgets}</Grid>" },
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
                  Do use Grid when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Two-dimensional grid layouts</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Card grid displays</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Dashboard widget layouts</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Responsive multi-column content</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Grid when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Single-axis layout — use Flex or Stack</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple centering — use Center</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Page containment — use Container</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Sequential content — use Stack</li>
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
                  <p className="text-sm text-muted-foreground">Use responsive column breakpoints for card grids that adapt to screen size.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t use Grid for single-axis layouts — use Flex or Stack instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Grid configurations in real time.</p>
            <GridPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/flex" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Flex</h3>
                <p className="text-sm text-muted-foreground">For single-axis layouts</p>
              </a>
              <a href="/components/stack" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Stack</h3>
                <p className="text-sm text-muted-foreground">For vertical stacking</p>
              </a>
              <a href="/components/container" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Container</h3>
                <p className="text-sm text-muted-foreground">For max-width containment</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added responsive column breakpoints</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added auto-fit mode</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with fixed column grid</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Grid improves scanning</h3>
                <p className="text-sm text-muted-foreground">Grid layouts improve content scanning speed by 25% compared to single-column layouts for card-based content (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
