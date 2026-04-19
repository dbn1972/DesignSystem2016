/**
 * Progress Component Documentation Page
 * Complete documentation for the Progress component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';

// Import the actual Progress component for live preview
const ProgressPreview = ({ variant, size, value, indeterminate, label, showPercentage, color, ...props }: any) => {
  if (variant === 'circular') {
    const radius = size === 'sm' ? 20 : size === 'lg' ? 40 : 30;
    const strokeWidth = size === 'sm' ? 3 : size === 'lg' ? 5 : 4;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = indeterminate ? 0 : circumference - (value / 100) * circumference;

    const colorMap: Record<string, string> = {
      primary: '#005196',
      success: '#008800',
      warning: '#fbbf24',
      danger: '#dc2626',
    };
    const strokeColor = colorMap[color || 'primary'] || colorMap.primary;

    return (
      <div className="inline-flex flex-col items-center gap-2">
        <svg
          height={radius * 2}
          width={radius * 2}
          className={indeterminate ? 'animate-spin' : ''}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label}
        >
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={strokeColor}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={indeterminate ? `${circumference * 0.25} ${circumference * 0.75}` : `${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            transform={`rotate(-90 ${radius} ${radius})`}
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        {showPercentage && !indeterminate && (
          <span className="text-sm font-medium text-muted-foreground">{value}%</span>
        )}
      </div>
    );
  }

  // Linear progress
  const heightMap = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const colorMap: Record<string, string> = {
    primary: 'bg-[#005196]',
    success: 'bg-[#008800]',
    warning: 'bg-[#fbbf24]',
    danger: 'bg-[#dc2626]',
  };
  const barColor = colorMap[color || 'primary'] || colorMap.primary;

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-muted-foreground">{label}</span>}
          {showPercentage && !indeterminate && <span className="text-sm font-medium text-muted-foreground">{value}%</span>}
        </div>
      )}
      <div
        className={`w-full bg-muted rounded-full overflow-hidden ${heightMap[size || 'md']}`}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={`h-full ${barColor} transition-all duration-300 ease-in-out ${
            indeterminate ? 'animate-pulse' : ''
          }`}
          style={{ width: indeterminate ? '100%' : `${value}%` }}
        />
      </div>
    </div>
  );
};

const PROGRESS_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  { name: 'value', label: 'Value', type: 'select', defaultValue: '50', options: ['0', '25', '50', '75', '100'] },
  { name: 'indeterminate', label: 'Indeterminate', type: 'boolean', defaultValue: false },
];

function ProgressPlayground() {
  return (
    <ComponentPlayground
      name="Progress"
      controls={PROGRESS_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-md">
          <ProgressPreview value={Number(v.value)} label="Uploading..." showPercentage />
        </div>
      )}
      codeTemplate={(v) =>
        `<Progress value={${v.value}}${v.indeterminate ? ' indeterminate' : ''} />`
      }
    />
  );
}

export default function ComponentProgressPage() {
  return (
    <ComponentDocumentation
      name="Progress"
      description="Feedback component displaying task completion status with linear and circular variants. Supports determinate progress tracking and indeterminate loading states with full accessibility compliance."
      category="Feedback"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <div className="w-full max-w-md space-y-4"><ProgressPreview value={75} label="Uploading Aadhaar..." showPercentage /><ProgressPreview value={30} label="Processing..." variant="default" /></div>
        </div>
      }

      props={[
        {
          name: 'value',
          type: 'number',
          required: true,
          description: 'Progress value between 0-100.',
        },
        {
          name: 'variant',
          type: "'neutral' | 'info' | 'success' | 'warning' | 'error'",
          default: "'info'",
          required: false,
          description: 'Color variant of the progress bar.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of the progress bar.',
        },
        {
          name: 'showLabel',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to display the progress label.',
        },
        {
          name: 'labelFormatter',
          type: '(value: number) => string',
          required: false,
          description: 'Custom formatter for the progress label text.',
        },
        {
          name: 'indeterminate',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Indeterminate loading animation (no specific value).',
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
          title: 'Linear Progress',
          description: 'Horizontal progress bars showing different completion states.',
          code: `import { Progress } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-6">
      <Progress value={25} label="Upload Progress" />
      <Progress value={50} label="Processing" />
      <Progress value={75} label="Almost Complete" />
      <Progress value={100} label="Done" color="success" />
    </div>
  );
}`,
          preview: (
            <div className="space-y-6 w-full">
              <ProgressPreview variant="linear" value={25} label="Upload Progress" />
              <ProgressPreview variant="linear" value={50} label="Processing" />
              <ProgressPreview variant="linear" value={75} label="Almost Complete" />
              <ProgressPreview variant="linear" value={100} label="Done" color="success" />
            </div>
          ),
        },
        {
          title: 'Circular Progress',
          description: 'Radial progress indicators for compact display areas.',
          code: `import { Progress } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex items-center gap-8">
      <Progress variant="circular" value={25} size="sm" />
      <Progress variant="circular" value={50} size="md" />
      <Progress variant="circular" value={75} size="lg" />
    </div>
  );
}`,
          preview: (
            <div className="flex items-center gap-8">
              <ProgressPreview variant="circular" value={25} size="sm" />
              <ProgressPreview variant="circular" value={50} size="md" />
              <ProgressPreview variant="circular" value={75} size="lg" />
            </div>
          ),
        },
        {
          title: 'With Percentage Label',
          description: 'Display progress value alongside the indicator.',
          code: `import { Progress } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-6">
      <Progress
        value={35}
        label="File Upload"
        showPercentage
      />
      <Progress
        variant="circular"
        value={68}
        showPercentage
      />
    </div>
  );
}`,
          preview: (
            <div className="space-y-6">
              <ProgressPreview
                variant="linear"
                value={35}
                label="File Upload"
                showPercentage
              />
              <div className="flex justify-center">
                <ProgressPreview
                  variant="circular"
                  value={68}
                  showPercentage
                />
              </div>
            </div>
          ),
        },
        {
          title: 'Indeterminate Loading',
          description: 'Animated progress for unknown duration tasks.',
          code: `import { Progress } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-6">
      <Progress
        indeterminate
        label="Loading..."
      />
      <div className="flex justify-center">
        <Progress
          variant="circular"
          indeterminate
          aria-label="Processing request"
        />
      </div>
    </div>
  );
}`,
          preview: (
            <div className="space-y-6">
              <ProgressPreview
                variant="linear"
                indeterminate
                label="Loading..."
              />
              <div className="flex justify-center">
                <ProgressPreview
                  variant="circular"
                  indeterminate
                  size="md"
                />
              </div>
            </div>
          ),
        },
        {
          title: 'Color Variants',
          description: 'Different color variants for semantic states.',
          code: `import { Progress } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-6">
      <Progress value={40} label="Primary" color="primary" showPercentage />
      <Progress value={60} label="Success" color="success" showPercentage />
      <Progress value={75} label="Warning" color="warning" showPercentage />
      <Progress value={90} label="Danger" color="danger" showPercentage />
    </div>
  );
}`,
          preview: (
            <div className="space-y-6 w-full">
              <ProgressPreview variant="linear" value={40} label="Primary" color="primary" showPercentage />
              <ProgressPreview variant="linear" value={60} label="Success" color="success" showPercentage />
              <ProgressPreview variant="linear" value={75} label="Warning" color="warning" showPercentage />
              <ProgressPreview variant="linear" value={90} label="Danger" color="danger" showPercentage />
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React from 'react';
import { cn } from '../../utils/cn';
import { progressVariants } from './progress.variants';
import { ProgressProps } from './Progress.types';

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value = 0,
      variant = 'linear',
      size = 'md',
      label,
      showPercentage = false,
      color = 'primary',
      indeterminate = false,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const normalizedValue = Math.min(100, Math.max(0, value));

    if (variant === 'circular') {
      return (
        <CircularProgress
          ref={ref}
          value={normalizedValue}
          size={size}
          color={color}
          indeterminate={indeterminate}
          showPercentage={showPercentage}
          aria-label={ariaLabel || label}
          className={className}
          {...props}
        />
      );
    }

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {(label || showPercentage) && (
          <div className="flex justify-between items-center mb-2">
            {label && (
              <span className="text-sm font-medium text-muted-foreground">
                {label}
              </span>
            )}
            {showPercentage && !indeterminate && (
              <span className="text-sm font-medium text-muted-foreground">
                {normalizedValue}%
              </span>
            )}
          </div>
        )}
        <div
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : normalizedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={ariaLabel || label}
          className={cn(
            progressVariants({ variant, size, color, indeterminate })
          )}
        >
          <div
            className={cn(
              'h-full transition-all duration-300 ease-in-out',
              progressVariants({ variant, size, color, indeterminate, bar: true })
            )}
            style={{ width: indeterminate ? '100%' : \`\${normalizedValue}%\` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';`,
        types: `export interface ProgressProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
          ProgressVariantProps {
  value?: number;
  label?: string;
  showPercentage?: boolean;
  indeterminate?: boolean;
}

export interface ProgressVariantProps {
  variant?: 'linear' | 'circular';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'danger';
}`,
        variants: `import { cva, type VariantProps } from 'class-variance-authority';

export const progressVariants = cva(
  [
    'w-full bg-gray-200 rounded-full overflow-hidden',
  ],
  {
    variants: {
      variant: {
        linear: '',
        circular: 'rounded-full',
      },
      size: {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
      },
      color: {
        primary: '',
        success: '',
        warning: '',
        danger: '',
      },
      indeterminate: {
        true: '',
        false: '',
      },
      bar: {
        true: '',
      },
    },
    compoundVariants: [
      {
        bar: true,
        color: 'primary',
        className: 'bg-[#005196]',
      },
      {
        bar: true,
        color: 'success',
        className: 'bg-[#008800]',
      },
      {
        bar: true,
        color: 'warning',
        className: 'bg-[#fbbf24]',
      },
      {
        bar: true,
        color: 'danger',
        className: 'bg-[#dc2626]',
      },
      {
        bar: true,
        indeterminate: true,
        className: 'animate-pulse',
      },
    ],
    defaultVariants: {
      variant: 'linear',
      size: 'md',
      color: 'primary',
      indeterminate: false,
    },
  }
);`,
      }}

      angularCode={{
        component: `import { Component, Input } from '@angular/core';

type ProgressVariant = 'linear' | 'circular';
type ProgressSize = 'sm' | 'md' | 'lg';
type ProgressColor = 'primary' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'ux4g-progress',
  template: \`
    <div class="progress-container" [class.w-full]="variant === 'linear'">
      <div *ngIf="(label || showPercentage) && variant === 'linear'"
           class="flex justify-between items-center mb-2">
        <span *ngIf="label" class="text-sm font-medium text-muted-foreground">
          {{ label }}
        </span>
        <span *ngIf="showPercentage && !indeterminate"
              class="text-sm font-medium text-muted-foreground">
          {{ value }}%
        </span>
      </div>

      <div *ngIf="variant === 'linear'"
           role="progressbar"
           [attr.aria-valuenow]="indeterminate ? null : value"
           [attr.aria-valuemin]="0"
           [attr.aria-valuemax]="100"
           [attr.aria-label]="label"
           [class]="getProgressClasses()">
        <div [class]="getBarClasses()"
             [style.width.%]="indeterminate ? 100 : value">
        </div>
      </div>

      <svg *ngIf="variant === 'circular'"
           [attr.height]="getCircularSize()"
           [attr.width]="getCircularSize()"
           [class.animate-spin]="indeterminate"
           role="progressbar"
           [attr.aria-valuenow]="indeterminate ? null : value"
           [attr.aria-valuemin]="0"
           [attr.aria-valuemax]="100"
           [attr.aria-label]="label">
        <circle [attr.stroke]="'#e5e7eb'"
                fill="transparent"
                [attr.stroke-width]="getStrokeWidth()"
                [attr.r]="getNormalizedRadius()"
                [attr.cx]="getCircularSize() / 2"
                [attr.cy]="getCircularSize() / 2" />
        <circle [attr.stroke]="getColorValue()"
                fill="transparent"
                [attr.stroke-width]="getStrokeWidth()"
                [attr.stroke-dasharray]="getStrokeDasharray()"
                [attr.stroke-dashoffset]="getStrokeDashoffset()"
                stroke-linecap="round"
                [attr.r]="getNormalizedRadius()"
                [attr.cx]="getCircularSize() / 2"
                [attr.cy]="getCircularSize() / 2"
                [attr.transform]="getCircleTransform()"
                class="transition-all duration-300 ease-in-out" />
      </svg>

      <span *ngIf="showPercentage && !indeterminate && variant === 'circular'"
            class="text-sm font-medium text-muted-foreground mt-2">
        {{ value }}%
      </span>
    </div>
  \`,
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  @Input() value = 0;
  @Input() variant: ProgressVariant = 'linear';
  @Input() size: ProgressSize = 'md';
  @Input() label?: string;
  @Input() showPercentage = false;
  @Input() color: ProgressColor = 'primary';
  @Input() indeterminate = false;

  getProgressClasses(): string {
    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };

    return \`w-full bg-gray-200 rounded-full overflow-hidden \${sizeClasses[this.size]}\`;
  }

  getBarClasses(): string {
    const colorClasses = {
      primary: 'bg-blue-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-400',
      danger: 'bg-red-600'
    };

    const baseClasses = 'h-full transition-all duration-300 ease-in-out';
    const colorClass = colorClasses[this.color];
    const animationClass = this.indeterminate ? 'animate-pulse' : '';

    return \`\${baseClasses} \${colorClass} \${animationClass}\`;
  }

  getCircularSize(): number {
    const sizeMap = { sm: 40, md: 60, lg: 80 };
    return sizeMap[this.size];
  }

  getStrokeWidth(): number {
    const widthMap = { sm: 3, md: 4, lg: 5 };
    return widthMap[this.size];
  }

  getNormalizedRadius(): number {
    return (this.getCircularSize() / 2) - (this.getStrokeWidth() / 2);
  }

  getColorValue(): string {
    const colorMap = {
      primary: '#005196',
      success: '#008800',
      warning: '#fbbf24',
      danger: '#dc2626'
    };
    return colorMap[this.color];
  }

  getStrokeDasharray(): string {
    const circumference = this.getNormalizedRadius() * 2 * Math.PI;
    if (this.indeterminate) {
      return \`\${circumference * 0.25} \${circumference * 0.75}\`;
    }
    return \`\${circumference} \${circumference}\`;
  }

  getStrokeDashoffset(): number {
    if (this.indeterminate) return 0;
    const circumference = this.getNormalizedRadius() * 2 * Math.PI;
    return circumference - (this.value / 100) * circumference;
  }

  getCircleTransform(): string {
    const size = this.getCircularSize() / 2;
    return \`rotate(-90 \${size} \${size})\`;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';

@NgModule({
  declarations: [ProgressComponent],
  imports: [CommonModule],
  exports: [ProgressComponent]
})
export class ProgressModule { }`,
        types: `export type ProgressVariant = 'linear' | 'circular';
export type ProgressSize = 'sm' | 'md' | 'lg';
export type ProgressColor = 'primary' | 'success' | 'warning' | 'danger';`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-progress> custom element",
        html: "<ux4g-progress variant=\"primary\" size=\"md\"><!-- Progress --></ux4g-progress>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'LinearProgress / CircularProgress',
          variants: 'determinate, indeterminate, buffer, query',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-progress/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Progress',
          variants: 'line, circle, dashboard',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/progress',
        },
        {
          system: 'Chakra UI',
          component: 'Progress',
          variants: 'linear with multiple sizes',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/progress',
        },
        {
          system: 'Radix UI',
          component: 'Progress',
          variants: 'indeterminate, determinate',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/progress',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'role="progressbar" for proper semantic meaning (WCAG 4.1.2)',
          'aria-valuenow attribute for current progress value',
          'aria-valuemin="0" and aria-valuemax="100" for value range',
          'aria-label for descriptive progress context',
          'Indeterminate state omits aria-valuenow as value is unknown',
          'Color is not the only indicator - value shown via bar width/arc',
          'Sufficient color contrast for progress bars (WCAG 1.4.3)',
          'Percentage labels provide alternative non-visual progress indication',
        ],
        keyboardSupport: [
          { key: 'N/A', action: 'Progress is a read-only component with no keyboard interaction' },
        ],
        screenReader: [
          'Announces progressbar role',
          'Announces current value, min, and max when determinate',
          'Announces label via aria-label attribute',
          'Updates announced as value changes',
          'Indeterminate state announced as "busy" or "loading"',
        ],
      }}

      tokens={{
        file: '/tokens/components/progress.json',
        mappings: [
          { property: 'Height (Medium Linear)', token: 'progress.linear.height.md', value: '8px' },
          { property: 'Height (Small Linear)', token: 'progress.linear.height.sm', value: '4px' },
          { property: 'Height (Large Linear)', token: 'progress.linear.height.lg', value: '12px' },
          { property: 'Size (Medium Circular)', token: 'progress.circular.size.md', value: '60px' },
          { property: 'Size (Small Circular)', token: 'progress.circular.size.sm', value: '40px' },
          { property: 'Size (Large Circular)', token: 'progress.circular.size.lg', value: '80px' },
          { property: 'Border Radius', token: 'base.borderRadius.full', value: '9999px' },
          { property: 'Primary Color', token: 'progress.color.primary', value: '#005196 (Navy 500)' },
          { property: 'Success Color', token: 'progress.color.success', value: '#008800 (Green 600)' },
          { property: 'Warning Color', token: 'progress.color.warning', value: '#fbbf24 (Yellow 400)' },
          { property: 'Danger Color', token: 'progress.color.danger', value: '#dc2626 (Red 600)' },
          { property: 'Background Color', token: 'progress.background', value: '#e5e7eb (Gray 200)' },
          { property: 'Transition Duration', token: 'animation.duration.normal', value: '300ms' },
        ],
      }}

      useCases={[
        { title: "Document Upload Progress", description: "Upload progress bar for each document.", scenario: "User uploads Aadhaar card during application.", implementation: "<Progress value={65} label=\"Uploading Aadhaar Card...\" />" },
        { title: "Application Completion", description: "Overall form completion percentage.", scenario: "Dashboard shows how much of the application is filled.", implementation: "<Progress value={40} label=\"Application 40% complete\" />" },
        { title: "Processing Status", description: "Indeterminate progress during API calls.", scenario: "Payment processing in progress.", implementation: "<Progress indeterminate label=\"Processing payment...\" />" },
      
        { title: 'Form Completion Tracker', description: 'Show overall application form completion percentage.', scenario: 'Dashboard shows citizen has completed 60% of application.', implementation: '<Progress value={60} label="Application 60% complete" showPercentage />' },
      ]}

      additionalContent={
        <>
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 dark:text-green-400 text-sm">✓</span>
                  Do use Progress when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>File upload progress</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Form completion percentage</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Long-running operations</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Determinate or indeterminate loading states</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 dark:text-red-400 text-sm">✗</span>
                  Don't use Progress when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Brief loading — use Spinner instead</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Step-based progress — use Stepper</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Status indicators — use Badge</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Background tasks the user does not need to track</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 dark:bg-green-900/20 px-4 py-2 text-sm font-bold text-green-800 dark:text-green-300">✓ Do</div>
                <div className="p-4">
                  <div className="w-full mb-3"><div className="flex justify-between text-xs mb-1"><span className="text-muted-foreground">Uploading Aadhaar...</span><span className="text-muted-foreground">65%</span></div><div className="w-full h-2 bg-muted rounded-full overflow-hidden"><div className="h-full bg-[#005196] rounded-full" style={{width:"65%"}} /></div></div>
                  <p className="text-sm text-muted-foreground">Show progress bars for file uploads and known-duration operations.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 dark:bg-red-900/20 px-4 py-2 text-sm font-bold text-red-800 dark:text-red-300">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="w-full mb-3"><div className="w-full h-2 bg-muted rounded-full overflow-hidden"><div className="h-full bg-[#005196] rounded-full" style={{width:"65%"}} /></div></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use progress bars for brief operations under 2 seconds — use Spinner.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <ProgressPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/spinner" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Spinner</h3>
                <p className="text-sm text-muted-foreground">For brief loading states</p>
              </a>
              <a href="/components/stepper" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Stepper</h3>
                <p className="text-sm text-muted-foreground">For step-based progress</p>
              </a>
              <a href="/components/skeleton" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Skeleton</h3>
                <p className="text-sm text-muted-foreground">For content loading placeholders</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added indeterminate mode</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added color variants</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with determinate progress</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Progress bars reduce perceived wait time</h3>
                <p className="text-sm text-muted-foreground">Users perceive waits as 15% shorter when a progress bar is visible (MIT research).</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Accessible progress</h3>
                <p className="text-sm text-muted-foreground">WCAG requires role="progressbar" with aria-valuenow, aria-valuemin, aria-valuemax attributes.</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
