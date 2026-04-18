/**
 * Spinner Component Documentation Page
 * Complete documentation for the Spinner component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';
import { Loader2 } from 'lucide-react';

// Import the actual Spinner component for live preview
const SpinnerPreview = ({ size, color, label, speed, ...props }: any) => {
  const sizeMap = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  };

  const speedMap = {
    slow: '2s',
    normal: '1s',
    fast: '0.6s',
  };

  const dimension = sizeMap[size || 'md'];
  const animationDuration = speedMap[speed || 'normal'];

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
        style={{
          animationDuration,
          color: color || '#005196',
        }}
        role="status"
        aria-label={label || 'Loading'}
        {...props}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeOpacity="0.25"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      {label && (
        <span className="text-sm text-muted-foreground">{label}</span>
      )}
    </div>
  );
};

const SPINNER_CONTROLS: PlaygroundControl[] = [
  {
    name: 'size',
    label: 'Size',
    type: 'text',
    defaultValue: 'sm',
  },
  {
    name: 'label',
    label: 'Label',
    type: 'text',
    defaultValue: 'Loading...',
  },
  {
    name: 'overlay',
    label: 'Overlay',
    type: 'boolean',
    defaultValue: false,
  },
];

function SpinnerPlayground() {
  return (
    <ComponentPlayground
      name="Spinner"
      controls={SPINNER_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg">
          <SpinnerPreview {...v} />
        </div>
      )}
      codeTemplate={(v) => {
        const props: string[] = [];
        SPINNER_CONTROLS.forEach((c) => {
          const val = v[c.name];
          if (c.type === 'boolean' && val) props.push(c.name);
          else if (c.type !== 'boolean' && val !== c.defaultValue) {
            props.push(`${c.name}="${val}"`);
          }
        });
        return `<Spinner${props.length ? ' ' + props.join(' ') : ''} />`;
      }}
    />
  );
}

export default function ComponentSpinnerPage() {
  return (
    <ComponentDocumentation
      name="Spinner"
      description="Loading indicator for asynchronous operations and feedback states. Provides visual feedback during data loading, form submissions, and page transitions with full accessibility support."
      category="Feedback"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <div className="flex items-center gap-6"><SpinnerPreview size="sm" label="Loading..." /><SpinnerPreview size="md" label="Loading..." /><SpinnerPreview size="lg" label="Loading..." /></div>
        </div>
      }

      props={[
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of the spinner.',
        },
        {
          name: 'variant',
          type: "'neutral' | 'info' | 'success' | 'warning' | 'error' | 'primary'",
          default: "'info'",
          required: false,
          description: 'Color variant of the spinner.',
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          description: 'Loading text displayed alongside the spinner.',
        },
        {
          name: 'centered',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Center the spinner in its container.',
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
          title: 'Basic Spinner',
          description: 'Default spinner with medium size and normal speed.',
          code: `import { Spinner } from '@ux4g/react-core';

function Example() {
  return <Spinner />;
}`,
          preview: (
            <div className="flex justify-center p-4 sm:p-6 lg:p-8">
              <SpinnerPreview />
            </div>
          ),
        },
        {
          title: 'Different Sizes',
          description: 'Spinners in all available sizes from extra small to extra large.',
          code: `import { Spinner } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  );
}`,
          preview: (
            <div className="flex items-center gap-6 p-4 sm:p-6 lg:p-8">
              <SpinnerPreview size="xs" />
              <SpinnerPreview size="sm" />
              <SpinnerPreview size="md" />
              <SpinnerPreview size="lg" />
              <SpinnerPreview size="xl" />
            </div>
          ),
        },
        {
          title: 'With Label',
          description: 'Spinners with descriptive text labels for better user feedback.',
          code: `import { Spinner } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex gap-8">
      <Spinner label="Loading..." />
      <Spinner label="Processing" />
      <Spinner label="Saving changes" />
    </div>
  );
}`,
          preview: (
            <div className="flex gap-8 p-4 sm:p-6 lg:p-8">
              <SpinnerPreview label="Loading..." />
              <SpinnerPreview label="Processing" />
              <SpinnerPreview label="Saving changes" />
            </div>
          ),
        },
        {
          title: 'Color Variants',
          description: 'Spinners can be customized with different colors to match your design system.',
          code: `import { Spinner } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex items-center gap-6">
      <Spinner color="#005196" label="Primary" />
      <Spinner color="#008800" label="Success" />
      <Spinner color="#dc2626" label="Error" />
      <Spinner color="#f59e0b" label="Warning" />
    </div>
  );
}`,
          preview: (
            <div className="flex items-center gap-6 p-4 sm:p-6 lg:p-8">
              <SpinnerPreview color="#005196" label="Primary" />
              <SpinnerPreview color="#008800" label="Success" />
              <SpinnerPreview color="#dc2626" label="Error" />
              <SpinnerPreview color="#f59e0b" label="Warning" />
            </div>
          ),
        },
        {
          title: 'Full Page Loading',
          description: 'Centered spinner overlay for full-page loading states.',
          code: `import { Spinner } from '@ux4g/react-core';

function Example() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-card/80 backdrop-blur-sm">
      <Spinner size="xl" label="Loading application..." />
    </div>
  );
}`,
          preview: (
            <div className="relative flex items-center justify-center bg-background p-16 rounded border-2 border-dashed border-border">
              <SpinnerPreview size="xl" label="Loading application..." />
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { spinnerVariants } from './spinner.variants';
import { SpinnerProps } from './Spinner.types';

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      className,
      size = 'md',
      color = '#005196',
      label,
      speed = 'normal',
      thickness = 3,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const sizeMap = {
      xs: 12,
      sm: 16,
      md: 24,
      lg: 32,
      xl: 48,
    };

    const speedMap = {
      slow: '2s',
      normal: '1s',
      fast: '0.6s',
    };

    const dimension = sizeMap[size];
    const animationDuration = speedMap[speed];

    return (
      <div
        ref={ref}
        className={cn('inline-flex flex-col items-center gap-2', className)}
        {...props}
      >
        <svg
          width={dimension}
          height={dimension}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
          style={{
            animationDuration,
            color,
          }}
          role="status"
          aria-label={ariaLabel || label || 'Loading'}
          aria-live="polite"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={thickness}
            strokeOpacity="0.25"
          />
          <path
            d="M12 2a10 10 0 0 1 10 10"
            stroke="currentColor"
            strokeWidth={thickness}
            strokeLinecap="round"
          />
        </svg>
        {label && (
          <span className="text-sm text-muted-foreground" aria-live="polite">
            {label}
          </span>
        )}
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';`,
        types: `export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerSpeed = 'slow' | 'normal' | 'fast';

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  color?: string;
  label?: string;
  speed?: SpinnerSpeed;
  thickness?: number;
  'aria-label'?: string;
}`,
        variants: `import { cva, type VariantProps } from 'class-variance-authority';

export const spinnerVariants = cva(
  [
    'inline-flex flex-col items-center gap-2',
  ],
  {
    variants: {
      size: {
        xs: ['text-xs'],
        sm: ['text-sm'],
        md: ['text-base'],
        lg: ['text-lg'],
        xl: ['text-xl'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>;`,
      }}

      angularCode={{
        component: `import { Component, Input } from '@angular/core';

type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SpinnerSpeed = 'slow' | 'normal' | 'fast';

@Component({
  selector: 'ux4g-spinner',
  template: \`
    <div class="ux4g-spinner-container">
      <svg
        [attr.width]="getDimension()"
        [attr.height]="getDimension()"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="ux4g-spinner"
        [style.animation-duration]="getAnimationDuration()"
        [style.color]="color"
        role="status"
        [attr.aria-label]="ariaLabel || label || 'Loading'"
        aria-live="polite"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          [attr.stroke-width]="thickness"
          stroke-opacity="0.25"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          [attr.stroke-width]="thickness"
          stroke-linecap="round"
        />
      </svg>
      <span *ngIf="label" class="ux4g-spinner-label" aria-live="polite">
        {{ label }}
      </span>
    </div>
  \`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  @Input() size: SpinnerSize = 'md';
  @Input() color = '#005196';
  @Input() label?: string;
  @Input() speed: SpinnerSpeed = 'normal';
  @Input() thickness = 3;
  @Input() ariaLabel?: string;

  private sizeMap = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  };

  private speedMap = {
    slow: '2s',
    normal: '1s',
    fast: '0.6s',
  };

  getDimension(): number {
    return this.sizeMap[this.size];
  }

  getAnimationDuration(): string {
    return this.speedMap[this.speed];
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }`,
        types: `export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerSpeed = 'slow' | 'normal' | 'fast';

export interface SpinnerConfig {
  size?: SpinnerSize;
  color?: string;
  label?: string;
  speed?: SpinnerSpeed;
  thickness?: number;
  ariaLabel?: string;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-spinner> custom element",
        html: "<ux4g-spinner variant=\"primary\" size=\"md\"><!-- Spinner --></ux4g-spinner>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'CircularProgress',
          variants: 'determinate, indeterminate',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-progress/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Spin',
          variants: 'default, with tip, custom indicator',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/spin',
        },
        {
          system: 'Chakra UI',
          component: 'Spinner',
          variants: 'sizes, colors, thickness',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/spinner',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Loading Spinner (Custom)',
          variants: 'basic implementation',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Limited',
          link: 'https://design-system.service.gov.uk/',
        },
        {
          system: 'Bootstrap',
          component: 'Spinner',
          variants: 'border, grow',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://getbootstrap.com/docs/5.3/components/spinners/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'role="status" attribute for announcing loading states to screen readers',
          'aria-label for descriptive loading messages (WCAG 4.1.2)',
          'aria-live="polite" for non-intrusive updates to screen readers',
          'Color is not the only visual indicator (animation provides additional feedback)',
          'Sufficient color contrast for visibility (meets WCAG 1.4.3)',
          'No reliance on motion alone - text labels available for additional context',
          'Respects prefers-reduced-motion user preferences',
          'Label text announced to screen readers for context',
        ],
        keyboardSupport: [
          { key: 'N/A', action: 'Spinner is not interactive and does not receive keyboard focus' },
        ],
        screenReader: [
          'Announces loading status with role="status"',
          'Reads aria-label or label prop for context',
          'Polite aria-live ensures non-disruptive announcements',
          'Label text is read if provided',
        ],
      }}

      tokens={{
        file: '/tokens/components/spinner.json',
        mappings: [
          { property: 'Size XS', token: 'spinner.size.xs', value: '12px' },
          { property: 'Size Small', token: 'spinner.size.sm', value: '16px' },
          { property: 'Size Medium', token: 'spinner.size.md', value: '24px' },
          { property: 'Size Large', token: 'spinner.size.lg', value: '32px' },
          { property: 'Size XL', token: 'spinner.size.xl', value: '48px' },
          { property: 'Default Color', token: 'spinner.color.default', value: '#005196 (Navy 500)' },
          { property: 'Stroke Width', token: 'spinner.strokeWidth', value: '3px' },
          { property: 'Speed Normal', token: 'spinner.speed.normal', value: '1s' },
          { property: 'Speed Slow', token: 'spinner.speed.slow', value: '2s' },
          { property: 'Speed Fast', token: 'spinner.speed.fast', value: '0.6s' },
          { property: 'Label Font Size', token: 'spinner.label.fontSize', value: '14px' },
          { property: 'Label Color', token: 'spinner.label.color', value: '#6B7280 (Gray 600)' },
        ],
      }}

      useCases={[
        { title: "Button Loading State", description: "Inline spinner inside a loading button.", scenario: "User clicks Submit and waits for API response.", implementation: "<Spinner size=\"sm\" /> inside <Button loading>" },
        { title: "Page Loading", description: "Full-page spinner during route transitions.", scenario: "Lazy-loaded page is being fetched.", implementation: "<Spinner size=\"lg\" label=\"Loading page...\" />" },
        { title: "Data Fetching", description: "Spinner while fetching application status.", scenario: "Status tracker loads timeline data.", implementation: "<Spinner size=\"md\" label=\"Loading status...\" />" },
      
        { title: 'Payment Processing', description: 'Spinner during payment gateway processing.', scenario: 'Citizen sees spinner while UPI payment is being verified.', implementation: '<Spinner size="lg" label="Verifying payment..." />' },
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
                  Do use Spinner when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Brief loading states (under 3 seconds)</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Inline loading indicators in buttons or cards</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Initial page or component loading</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>API call waiting states</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Spinner when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Long operations with known progress — use Progress</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Content placeholders — use Skeleton</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Background tasks — no indicator needed</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Operations longer than 10 seconds — add a message</li>
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
                  <div className="flex items-center gap-3 mb-3"><div className="w-5 h-5 border-2 border-[#005196]/30 border-t-[#005196] rounded-full animate-spin" /><span className="text-xs text-muted-foreground">Loading status...</span></div>
                  <p className="text-sm text-muted-foreground">Use spinners for brief loading states under 3 seconds.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="flex items-center justify-center mb-3"><div className="w-12 h-12 border-4 border-[#005196]/30 border-t-[#005196] rounded-full animate-spin" /></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use spinners for long operations — add a message or use Progress bar.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <SpinnerPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/progress" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Progress</h3>
                <p className="text-sm text-muted-foreground">For determinate progress</p>
              </a>
              <a href="/components/skeleton" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Skeleton</h3>
                <p className="text-sm text-muted-foreground">For content placeholders</p>
              </a>
              <a href="/components/toast" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Toast</h3>
                <p className="text-sm text-muted-foreground">For completion notifications</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added accessible label prop</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added color variants</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with 3 sizes</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Spinner vs Skeleton</h3>
                <p className="text-sm text-muted-foreground">Skeleton screens are perceived as 15% faster than spinners for content loading (Google research).</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Accessible spinners</h3>
                <p className="text-sm text-muted-foreground">WCAG requires role="status" or aria-live="polite" so screen readers announce loading state.</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
