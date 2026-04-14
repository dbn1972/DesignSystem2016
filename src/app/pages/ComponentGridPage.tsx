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

export default function ComponentGridPage() {
  return (
    <ComponentDocumentation
      name="Grid"
      description="Flexible grid layout system for arranging content in rows and columns. Supports responsive breakpoints, gap control, and flexible column configurations."
      category="Layout"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"
      
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
    />
  );
}
