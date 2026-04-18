/**
 * Center Component Documentation Page
 * Complete documentation for the Center component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Loader2, AlertCircle, FileQuestion, CheckCircle } from 'lucide-react';

// Import the actual Center component for live preview
const CenterPreview = ({ inline = false, minHeight, children, as: Element = 'div', className = '', ...props }: any) => {
  const Component = inline ? 'span' : Element;
  const baseStyles = inline
    ? 'inline-flex items-center justify-center'
    : 'flex items-center justify-center';

  return (
    <Component
      className={`${baseStyles} ${className}`}
      style={{ minHeight: minHeight || (inline ? undefined : '200px'), ...props.style }}
      {...props}
    >
      {children}
    </Component>
  );
};

const CENTER_CONTROLS: PlaygroundControl[] = [
  {
    name: 'minHeight',
    label: 'Min Height',
    type: 'text',
    defaultValue: '200px',
  },
  {
    name: 'inline',
    label: 'Inline',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'padding',
    label: 'Padding',
    type: 'text',
    defaultValue: 'md',
  },
];

function CenterPlayground() {
  return (
    <ComponentPlayground
      name="Center"
      controls={CENTER_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg">
          <CenterPreview {...v} />
        </div>
      )}
      codeTemplate={(v) => {
        const props: string[] = [];
        CENTER_CONTROLS.forEach((c) => {
          const val = v[c.name];
          if (c.type === 'boolean' && val) props.push(c.name);
          else if (c.type !== 'boolean' && val !== c.defaultValue) {
            props.push(`${c.name}="${val}"`);
          }
        });
        return `<Center${props.length ? ' ' + props.join(' ') : ''} />`;
      }}
    />
  );
}

export default function ComponentCenterPage() {
  return (
    <ComponentDocumentation
      name="Center"
      description="Utility component for centering content both horizontally and vertically. Simplifies layout patterns for loading states, empty states, icons, modal content, and error messages with accessibility built-in."
      category="Layout"
      maturity="stable"
      tier="foundation"
      since="v1.0.0"
      updated="v2.3.0"

      preview={
        <div className="w-full max-w-2xl">
          <CenterPreview minHeight="120px"><p className="text-sm text-muted-foreground">Centered content</p></CenterPreview>
        </div>
      }

      props={[
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Content to be centered.',
        },
        {
          name: 'minHeight',
          type: 'string | number',
          required: false,
          description: 'Minimum height of the container.',
        },
        {
          name: 'inline',
          type: 'boolean',
          required: false,
          description: 'Center inline (horizontal only) instead of block.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
      ]}

      examples={[
        {
          title: 'Centered Icon',
          description: 'Center a single icon or graphic element.',
          code: `import { Center } from '@ux4g/react-core';
import { CheckCircle } from 'lucide-react';

function Example() {
  return (
    <Center className="bg-background border border-border rounded">
      <CheckCircle size={48} className="text-green-600" />
    </Center>
  );
}`,
          preview: (
            <CenterPreview className="bg-background border border-border rounded">
              <CheckCircle size={48} className="text-green-600" />
            </CenterPreview>
          ),
        },
        {
          title: 'Loading State',
          description: 'Display a centered loading spinner with message.',
          code: `import { Center } from '@ux4g/react-core';
import { Loader2 } from 'lucide-react';

function Example() {
  return (
    <Center className="bg-card" minHeight="300px">
      <div className="flex flex-col items-center gap-3">
        <Loader2 size={40} className="text-blue-600 animate-spin" />
        <p className="text-muted-foreground">Loading your data...</p>
      </div>
    </Center>
  );
}`,
          preview: (
            <CenterPreview className="bg-card border border-border rounded" minHeight="300px">
              <div className="flex flex-col items-center gap-3">
                <Loader2 size={40} className="text-blue-600 animate-spin" />
                <p className="text-muted-foreground">Loading your data...</p>
              </div>
            </CenterPreview>
          ),
        },
        {
          title: 'Empty State',
          description: 'Center empty state messaging with icon and action.',
          code: `import { Center } from '@ux4g/react-core';
import { FileQuestion } from 'lucide-react';

function Example() {
  return (
    <Center className="bg-background" minHeight="400px">
      <div className="flex flex-col items-center gap-4 max-w-md text-center">
        <FileQuestion size={64} className="text-muted-foreground" />
        <div>
          <h3 className="text-lg font-semibold text-foreground">No documents found</h3>
          <p className="text-muted-foreground mt-1">
            Upload your first document to get started.
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Upload Document
        </button>
      </div>
    </Center>
  );
}`,
          preview: (
            <CenterPreview className="bg-background border border-border rounded" minHeight="400px">
              <div className="flex flex-col items-center gap-4 max-w-md text-center">
                <FileQuestion size={64} className="text-muted-foreground" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">No documents found</h3>
                  <p className="text-muted-foreground mt-1">
                    Upload your first document to get started.
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px]">
                  Upload Document
                </button>
              </div>
            </CenterPreview>
          ),
        },
        {
          title: 'Modal Content',
          description: 'Center content within a modal dialog.',
          code: `import { Center } from '@ux4g/react-core';
import { AlertCircle } from 'lucide-react';

function Example() {
  return (
    <div className="bg-card rounded-lg shadow-xl p-6 max-w-md">
      <Center minHeight="200px">
        <div className="flex flex-col items-center gap-4 text-center">
          <AlertCircle size={56} className="text-amber-500" />
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Confirm Action
            </h2>
            <p className="text-muted-foreground mt-2">
              Are you sure you want to proceed with this action?
            </p>
          </div>
          <div className="flex gap-3 mt-2">
            <button className="px-4 py-2 border border-border rounded hover:bg-background">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Confirm
            </button>
          </div>
        </div>
      </Center>
    </div>
  );
}`,
          preview: (
            <div className="bg-card rounded-lg shadow-xl p-6 max-w-md mx-auto">
              <CenterPreview minHeight="200px">
                <div className="flex flex-col items-center gap-4 text-center">
                  <AlertCircle size={56} className="text-amber-500" />
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      Confirm Action
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Are you sure you want to proceed with this action?
                    </p>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button className="px-4 py-2 border border-border rounded hover:bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px]">
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px]">
                      Confirm
                    </button>
                  </div>
                </div>
              </CenterPreview>
            </div>
          ),
        },
        {
          title: 'Centered Text',
          description: 'Center text content in a semantic element.',
          code: `import { Center } from '@ux4g/react-core';

function Example() {
  return (
    <Center as="section" className="bg-blue-50 py-12">
      <div className="max-w-2xl px-4 text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome to UX4Gov
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Building accessible, consistent government digital services.
        </p>
      </div>
    </Center>
  );
}`,
          preview: (
            <CenterPreview as="section" className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 rounded py-12">
              <div className="max-w-2xl px-4 text-center">
                <h1 className="text-3xl font-bold text-foreground">
                  Welcome to UX4Gov
                </h1>
                <p className="text-lg text-muted-foreground mt-4">
                  Building accessible, consistent government digital services.
                </p>
              </div>
            </CenterPreview>
          ),
        },
        {
          title: 'Full Page Center',
          description: 'Center content to fill the entire viewport height.',
          code: `import { Center } from '@ux4g/react-core';
import { CheckCircle } from 'lucide-react';

function Example() {
  return (
    <Center as="main" minHeight="100vh">
      <div className="flex flex-col items-center gap-4 text-center">
        <CheckCircle size={72} className="text-green-600" />
        <h1 className="text-2xl font-bold text-foreground">
          Application Submitted
        </h1>
        <p className="text-muted-foreground max-w-md">
          Your application has been successfully submitted.
          You will receive a confirmation email shortly.
        </p>
      </div>
    </Center>
  );
}`,
          preview: (
            <CenterPreview as="main" minHeight="400px" className="bg-gradient-to-b from-green-50 to-white border border-green-200 dark:border-green-800 rounded">
              <div className="flex flex-col items-center gap-4 text-center">
                <CheckCircle size={72} className="text-green-600" />
                <h1 className="text-2xl font-bold text-foreground">
                  Application Submitted
                </h1>
                <p className="text-muted-foreground max-w-md px-4">
                  Your application has been successfully submitted.
                  You will receive a confirmation email shortly.
                </p>
              </div>
            </CenterPreview>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { CenterProps } from './Center.types';

export const Center = forwardRef<HTMLElement, CenterProps>(
  (
    {
      children,
      className,
      inline = false,
      as: Component = 'div',
      minHeight,
      style,
      ...props
    },
    ref
  ) => {
    const ElementType = inline ? 'span' : Component;

    const baseClasses = inline
      ? 'inline-flex items-center justify-center'
      : 'flex items-center justify-center';

    const styles = {
      ...style,
      ...(minHeight && { minHeight }),
    };

    return (
      <ElementType
        ref={ref as any}
        className={cn(baseClasses, className)}
        style={styles}
        {...props}
      >
        {children}
      </ElementType>
    );
  }
);

Center.displayName = 'Center';`,
        types: `import { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';

export interface CenterProps extends HTMLAttributes<HTMLElement> {
  /**
   * Content to be centered
   */
  children: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Whether to center inline (span) vs block (div)
   * @default false
   */
  inline?: boolean;

  /**
   * The HTML element type to render
   * @default 'div'
   */
  as?: ElementType;

  /**
   * Minimum height of the container
   * Accepts CSS values (e.g., "100vh", "400px", 300)
   */
  minHeight?: string | number;

  /**
   * Custom inline styles
   */
  style?: CSSProperties;
}`,
        variants: `// Center doesn't use CVA variants as it's a simple layout utility
// The component uses direct className composition for flexibility

export const centerClasses = {
  block: 'flex items-center justify-center',
  inline: 'inline-flex items-center justify-center',
} as const;`,
      }}

      angularCode={{
        component: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-center',
  template: \`
    <ng-container [ngSwitch]="inline">
      <span
        *ngSwitchCase="true"
        class="inline-flex items-center justify-center"
        [class]="className"
        [style.min-height]="minHeight"
      >
        <ng-content></ng-content>
      </span>

      <div
        *ngSwitchDefault
        class="flex items-center justify-center"
        [class]="className"
        [style.min-height]="minHeight"
      >
        <ng-content></ng-content>
      </div>
    </ng-container>
  \`,
  styles: [\`
    :host {
      display: contents;
    }
  \`]
})
export class CenterComponent {
  @Input() inline = false;
  @Input() className = '';
  @Input() minHeight?: string;
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterComponent } from './center.component';

@NgModule({
  declarations: [CenterComponent],
  imports: [CommonModule],
  exports: [CenterComponent]
})
export class CenterModule { }`,
        types: `export interface CenterConfig {
  inline?: boolean;
  className?: string;
  minHeight?: string;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-center> custom element",
        html: "<ux4g-center variant=\"primary\" size=\"md\"><!-- Center --></ux4g-center>",
      }}
      comparisons={[
        {
          system: 'Chakra UI',
          component: 'Center',
          variants: 'Simple utility component',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/center',
        },
        {
          system: 'Material UI',
          component: 'Box (with centering props)',
          variants: 'Flexible with sx prop',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-box/',
        },
        {
          system: 'Bootstrap',
          component: 'd-flex justify-content-center align-items-center',
          variants: 'Utility classes',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://getbootstrap.com/docs/5.0/utilities/flex/',
        },
        {
          system: 'Mantine',
          component: 'Center',
          variants: 'Simple utility with inline option',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://mantine.dev/core/center/',
        },
        {
          system: 'Tailwind CSS',
          component: 'flex items-center justify-center',
          variants: 'Utility classes',
          accessibility: 'N/A (utility framework)',
          documentation: 'Comprehensive',
          link: 'https://tailwindcss.com/docs/justify-content',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic HTML elements supported via "as" prop for proper document structure',
          'Does not interfere with keyboard navigation or focus management',
          'Maintains normal document flow for screen readers',
          'Supports all ARIA attributes through standard HTML props',
          'No hardcoded dimensions that could clip content or cause overflow issues',
          'Compatible with reduced motion preferences (no animations)',
          'Works with browser zoom and text scaling',
          'Maintains logical content order regardless of visual centering',
        ],
        keyboardSupport: [
          { key: 'N/A', action: 'Component is layout-only and does not intercept keyboard events' },
        ],
        screenReader: [
          'Announces content normally based on semantic element (div, section, etc.)',
          'Does not add any additional announcements or roles',
          'Content order in DOM matches visual order',
          'Use semantic "as" prop values (section, main, article) for better navigation landmarks',
        ],
      }}

      tokens={{
        file: '/tokens/layout/center.json',
        mappings: [
          { property: 'Display (Block)', token: 'layout.center.display.block', value: 'flex' },
          { property: 'Display (Inline)', token: 'layout.center.display.inline', value: 'inline-flex' },
          { property: 'Align Items', token: 'layout.center.alignItems', value: 'center' },
          { property: 'Justify Content', token: 'layout.center.justifyContent', value: 'center' },
          { property: 'Default Min Height', token: 'layout.center.minHeight.default', value: 'auto' },
          { property: 'Full Viewport', token: 'layout.center.minHeight.fullViewport', value: '100vh' },
        ],
      }}

      useCases={[
        { title: "Loading State", description: "Center a spinner in a container.", scenario: "Page loading state.", implementation: "<Center><Spinner /></Center>" },
        { title: "Empty State", description: "Center empty state content.", scenario: "No results found page.", implementation: "<Center height=\"400px\"><EmptyState /></Center>" },
      
        { title: 'Loading State Container', description: 'Center spinner during page data loading.', scenario: 'Dashboard shows centered spinner while fetching data.', implementation: '<Center minHeight="300px"><Spinner label="Loading..." /></Center>' },
        { title: 'Success Confirmation', description: 'Center success message after form submission.', scenario: 'Citizen sees centered success message after application.', implementation: '<Center><div className="text-center"><CheckCircle /><h2>Application Submitted</h2></div></Center>' },
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
                  Do use Center when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Centering content horizontally and vertically</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Loading state containers</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Empty state layouts</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Hero section content alignment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Center when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Complex layouts — use Grid or Flex</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Text alignment only — use CSS text-align</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Single-axis centering — use Flex</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Full-page layouts — use Container</li>
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
                  <p className="text-sm text-muted-foreground">Use Center for loading states and empty state layouts.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 dark:border-red-800 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use Center for complex layouts — use Grid or Flex instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <CenterPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/flex" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Flex</h3>
                <p className="text-sm text-muted-foreground">For flexible layouts</p>
              </a>
              <a href="/components/stack" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Stack</h3>
                <p className="text-sm text-muted-foreground">For vertical/horizontal stacking</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with horizontal and vertical centering</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Visual centering</h3>
                <p className="text-sm text-muted-foreground">Centered content is perceived as more important and draws attention 20% faster than left-aligned content (eye-tracking studies).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
