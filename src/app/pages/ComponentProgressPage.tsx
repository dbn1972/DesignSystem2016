/**
 * Progress Component Documentation Page
 * Complete documentation for the Progress component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';

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
        className={`w-full bg-gray-200 rounded-full overflow-hidden ${heightMap[size || 'md']}`}
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

      props={[
        {
          name: 'value',
          type: 'number',
          default: '0',
          required: false,
          description: 'Progress value between 0-100. Represents percentage of completion.',
        },
        {
          name: 'variant',
          type: "'linear' | 'circular'",
          default: "'linear'",
          required: false,
          description: 'Visual variant of the progress indicator. Linear for horizontal bars, circular for radial progress.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of the progress indicator. Small (4px/40px), Medium (8px/60px), Large (12px/80px) for linear/circular.',
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          description: 'Descriptive label for the progress indicator. Announced to screen readers via aria-label.',
        },
        {
          name: 'showPercentage',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to display the percentage value. Shows next to label for linear, below indicator for circular.',
        },
        {
          name: 'color',
          type: "'primary' | 'success' | 'warning' | 'danger'",
          default: "'primary'",
          required: false,
          description: 'Color variant of the progress bar. Primary (blue), Success (green), Warning (yellow), Danger (red).',
        },
        {
          name: 'indeterminate',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Indeterminate loading state. Shows animated progress without specific value. Used when duration is unknown.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply. Merged with variant classes.',
        },
        {
          name: 'aria-label',
          type: 'string',
          required: false,
          description: 'Accessible label for screen readers. Falls back to label prop if not provided.',
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
    />
  );
}
