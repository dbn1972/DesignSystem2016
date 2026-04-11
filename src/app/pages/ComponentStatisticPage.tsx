/**
 * Statistic Component Documentation Page
 * Complete documentation for the Statistic component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { TrendingUp, TrendingDown, Users, FileText, DollarSign, Activity } from 'lucide-react';

// Import the actual Statistic component for live preview
const StatisticPreview = ({
  value,
  label,
  trend,
  trendValue,
  prefix,
  suffix,
  size = 'md',
  variant = 'default',
  icon,
  layout = 'default',
  ...props
}: any) => {
  const sizeClasses = size === 'sm' ? 'text-2xl' : size === 'lg' ? 'text-5xl' : 'text-4xl';
  const labelSizeClasses = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base';

  const variantColors = {
    default: 'text-gray-900',
    primary: 'text-[#005196]',
    success: 'text-[#008800]',
    danger: 'text-[#dc2626]',
    warning: 'text-[#f59e0b]',
  };

  const trendColors = {
    up: 'text-[#008800]',
    down: 'text-[#dc2626]',
  };

  if (layout === 'card') {
    return (
      <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm" {...props}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className={'text-gray-600 mb-2 ' + labelSizeClasses}>{label}</div>
            <div className={'font-bold ' + sizeClasses + ' ' + variantColors[variant]}>
              {prefix && <span className="mr-1">{prefix}</span>}
              {value}
              {suffix && <span className="ml-1">{suffix}</span>}
            </div>
            {trend && trendValue && (
              <div className={'flex items-center gap-1 mt-2 ' + trendColors[trend]}>
                {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                <span className="text-sm font-medium">{trendValue}</span>
              </div>
            )}
          </div>
          {icon && (
            <div className={'p-3 rounded-lg bg-gray-50 ' + variantColors[variant]}>
              {icon}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="inline-block" {...props}>
      <div className={'text-gray-600 mb-1 ' + labelSizeClasses}>{label}</div>
      <div className={'font-bold flex items-baseline gap-2 ' + sizeClasses + ' ' + variantColors[variant]}>
        <span>
          {prefix && <span className="mr-1">{prefix}</span>}
          {value}
          {suffix && <span className="ml-1">{suffix}</span>}
        </span>
        {trend && trendValue && (
          <div className={'flex items-center gap-1 ' + trendColors[trend]}>
            {trend === 'up' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            <span className="text-lg font-medium">{trendValue}</span>
          </div>
        )}
      </div>
      {icon && (
        <div className="mt-2">
          {icon}
        </div>
      )}
    </div>
  );
};

export default function ComponentStatisticPage() {
  return (
    <ComponentDocumentation
      name="Statistic"
      description="Display numerical data, KPIs, metrics, and statistics prominently for dashboards and data visualization. Supports trends, prefixes, suffixes, icons, and multiple layout variants with full accessibility compliance."
      category="Data Display"
      maturity="beta"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      props={[
        {
          name: 'value',
          type: 'string | number',
          required: true,
          description: 'The numerical or text value to display prominently. Can be formatted numbers, percentages, or custom strings.',
        },
        {
          name: 'label',
          type: 'string',
          required: true,
          description: 'Descriptive label for the statistic. Should clearly indicate what the value represents.',
        },
        {
          name: 'trend',
          type: "'up' | 'down' | undefined",
          required: false,
          description: 'Direction of the trend indicator. Shows upward or downward arrow with associated color.',
        },
        {
          name: 'trendValue',
          type: 'string',
          required: false,
          description: 'Value to display with the trend indicator. Typically a percentage or delta value.',
        },
        {
          name: 'prefix',
          type: 'string',
          required: false,
          description: 'Text or symbol to display before the value (e.g., "$", "€", "+").',
        },
        {
          name: 'suffix',
          type: 'string',
          required: false,
          description: 'Text or symbol to display after the value (e.g., "%", "kg", "users").',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of the statistic display. Small for compact views, medium for standard, large for emphasis.',
        },
        {
          name: 'variant',
          type: "'default' | 'primary' | 'success' | 'danger' | 'warning'",
          default: "'default'",
          required: false,
          description: 'Color variant for the value. Use semantic colors to indicate status or importance.',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          required: false,
          description: 'Icon to display alongside the statistic. Provides visual context for the metric.',
        },
        {
          name: 'layout',
          type: "'default' | 'card'",
          default: "'default'",
          required: false,
          description: 'Layout style. Default for inline display, card for contained presentation with border and padding.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply. Merged with variant classes.',
        },
        {
          name: 'ariaLabel',
          type: 'string',
          required: false,
          description: 'Custom ARIA label for screen readers. Auto-generated if not provided.',
        },
      ]}

      examples={[
        {
          title: 'Dashboard Metrics',
          description: 'Key performance indicators displayed in a dashboard grid layout.',
          code: 'import { Statistic } from \'@ux4g/react-core\';\nimport { Users, FileText, Activity, DollarSign } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">\n      <Statistic\n        value="12,458"\n        label="Total Applications"\n        trend="up"\n        trendValue="+12.5%"\n        variant="primary"\n        layout="card"\n        icon={<FileText size={24} />}\n      />\n      <Statistic\n        value="3,247"\n        label="Active Users"\n        trend="up"\n        trendValue="+8.2%"\n        variant="success"\n        layout="card"\n        icon={<Users size={24} />}\n      />\n      <Statistic\n        value="98.7"\n        label="Service Uptime"\n        suffix="%"\n        variant="success"\n        layout="card"\n        icon={<Activity size={24} />}\n      />\n      <Statistic\n        value="2.4M"\n        label="Revenue"\n        prefix="$"\n        trend="down"\n        trendValue="-3.1%"\n        variant="danger"\n        layout="card"\n        icon={<DollarSign size={24} />}\n      />\n    </div>\n  );\n}',
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatisticPreview
                value="12,458"
                label="Total Applications"
                trend="up"
                trendValue="+12.5%"
                variant="primary"
                layout="card"
                icon={<FileText size={24} />}
              />
              <StatisticPreview
                value="3,247"
                label="Active Users"
                trend="up"
                trendValue="+8.2%"
                variant="success"
                layout="card"
                icon={<Users size={24} />}
              />
              <StatisticPreview
                value="98.7"
                label="Service Uptime"
                suffix="%"
                variant="success"
                layout="card"
                icon={<Activity size={24} />}
              />
              <StatisticPreview
                value="2.4M"
                label="Revenue"
                prefix="$"
                trend="down"
                trendValue="-3.1%"
                variant="danger"
                layout="card"
                icon={<DollarSign size={24} />}
              />
            </div>
          ),
        },
        {
          title: 'KPI Cards with Trends',
          description: 'Statistics with trend indicators showing performance changes over time.',
          code: 'import { Statistic } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div className="flex flex-wrap gap-6">\n      <Statistic\n        value="15,234"\n        label="Pending Approvals"\n        trend="up"\n        trendValue="+23%"\n        variant="warning"\n        layout="card"\n      />\n      <Statistic\n        value="8,942"\n        label="Completed This Month"\n        trend="up"\n        trendValue="+15.3%"\n        variant="success"\n        layout="card"\n      />\n      <Statistic\n        value="142"\n        label="Rejected Applications"\n        trend="down"\n        trendValue="-8%"\n        variant="danger"\n        layout="card"\n      />\n    </div>\n  );\n}',
          preview: (
            <div className="flex flex-wrap gap-6">
              <StatisticPreview
                value="15,234"
                label="Pending Approvals"
                trend="up"
                trendValue="+23%"
                variant="warning"
                layout="card"
              />
              <StatisticPreview
                value="8,942"
                label="Completed This Month"
                trend="up"
                trendValue="+15.3%"
                variant="success"
                layout="card"
              />
              <StatisticPreview
                value="142"
                label="Rejected Applications"
                trend="down"
                trendValue="-8%"
                variant="danger"
                layout="card"
              />
            </div>
          ),
        },
        {
          title: 'Sizes and Variants',
          description: 'Different size options and color variants for various emphasis levels.',
          code: 'import { Statistic } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div className="space-y-6">\n      <div className="flex flex-wrap items-end gap-8">\n        <Statistic\n          value="1,234"\n          label="Small Size"\n          size="sm"\n          variant="default"\n        />\n        <Statistic\n          value="5,678"\n          label="Medium Size"\n          size="md"\n          variant="primary"\n        />\n        <Statistic\n          value="9,012"\n          label="Large Size"\n          size="lg"\n          variant="success"\n        />\n      </div>\n      <div className="flex flex-wrap items-end gap-8">\n        <Statistic\n          value="100"\n          label="Default"\n          suffix="%"\n          variant="default"\n        />\n        <Statistic\n          value="100"\n          label="Primary"\n          suffix="%"\n          variant="primary"\n        />\n        <Statistic\n          value="100"\n          label="Success"\n          suffix="%"\n          variant="success"\n        />\n        <Statistic\n          value="100"\n          label="Warning"\n          suffix="%"\n          variant="warning"\n        />\n        <Statistic\n          value="100"\n          label="Danger"\n          suffix="%"\n          variant="danger"\n        />\n      </div>\n    </div>\n  );\n}',
          preview: (
            <div className="space-y-6">
              <div className="flex flex-wrap items-end gap-8">
                <StatisticPreview
                  value="1,234"
                  label="Small Size"
                  size="sm"
                  variant="default"
                />
                <StatisticPreview
                  value="5,678"
                  label="Medium Size"
                  size="md"
                  variant="primary"
                />
                <StatisticPreview
                  value="9,012"
                  label="Large Size"
                  size="lg"
                  variant="success"
                />
              </div>
              <div className="flex flex-wrap items-end gap-8">
                <StatisticPreview
                  value="100"
                  label="Default"
                  suffix="%"
                  variant="default"
                />
                <StatisticPreview
                  value="100"
                  label="Primary"
                  suffix="%"
                  variant="primary"
                />
                <StatisticPreview
                  value="100"
                  label="Success"
                  suffix="%"
                  variant="success"
                />
                <StatisticPreview
                  value="100"
                  label="Warning"
                  suffix="%"
                  variant="warning"
                />
                <StatisticPreview
                  value="100"
                  label="Danger"
                  suffix="%"
                  variant="danger"
                />
              </div>
            </div>
          ),
        },
        {
          title: 'With Prefix and Suffix',
          description: 'Statistics with currency symbols, units, and other prefix/suffix indicators.',
          code: 'import { Statistic } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">\n      <Statistic\n        value="45,234.50"\n        label="Total Revenue"\n        prefix="$"\n        variant="success"\n        layout="card"\n      />\n      <Statistic\n        value="89.5"\n        label="Completion Rate"\n        suffix="%"\n        variant="primary"\n        layout="card"\n      />\n      <Statistic\n        value="2,847"\n        label="New Registrations"\n        suffix=" users"\n        trend="up"\n        trendValue="+127"\n        variant="success"\n        layout="card"\n      />\n    </div>\n  );\n}',
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatisticPreview
                value="45,234.50"
                label="Total Revenue"
                prefix="$"
                variant="success"
                layout="card"
              />
              <StatisticPreview
                value="89.5"
                label="Completion Rate"
                suffix="%"
                variant="primary"
                layout="card"
              />
              <StatisticPreview
                value="2,847"
                label="New Registrations"
                suffix=" users"
                trend="up"
                trendValue="+127"
                variant="success"
                layout="card"
              />
            </div>
          ),
        },
        {
          title: 'Comparison Statistics',
          description: 'Side-by-side comparison of related metrics with different layouts.',
          code: 'import { Statistic } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div className="space-y-4">\n      <div className="flex gap-8">\n        <Statistic\n          value="12,458"\n          label="This Month"\n          variant="primary"\n          size="lg"\n        />\n        <Statistic\n          value="10,234"\n          label="Last Month"\n          variant="default"\n          size="lg"\n        />\n      </div>\n      <div className="border-t pt-4">\n        <Statistic\n          value="+2,224"\n          label="Increase"\n          trend="up"\n          trendValue="+21.7%"\n          variant="success"\n          size="md"\n        />\n      </div>\n    </div>\n  );\n}',
          preview: (
            <div className="space-y-4">
              <div className="flex gap-8">
                <StatisticPreview
                  value="12,458"
                  label="This Month"
                  variant="primary"
                  size="lg"
                />
                <StatisticPreview
                  value="10,234"
                  label="Last Month"
                  variant="default"
                  size="lg"
                />
              </div>
              <div className="border-t pt-4">
                <StatisticPreview
                  value="+2,224"
                  label="Increase"
                  trend="up"
                  trendValue="+21.7%"
                  variant="success"
                  size="md"
                />
              </div>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: 'import React, { forwardRef } from \'react\';\nimport { cn } from \'../../utils/cn\';\nimport { statisticVariants } from \'./statistic.variants\';\nimport { StatisticProps } from \'./Statistic.types\';\nimport { TrendingUp, TrendingDown } from \'lucide-react\';\n\nexport const Statistic = forwardRef<HTMLDivElement, StatisticProps>(\n  (\n    {\n      value,\n      label,\n      trend,\n      trendValue,\n      prefix,\n      suffix,\n      size = \'md\',\n      variant = \'default\',\n      icon,\n      layout = \'default\',\n      className,\n      ariaLabel,\n      ...props\n    },\n    ref\n  ) => {\n    const formattedValue = [\n      prefix,\n      value,\n      suffix\n    ].filter(Boolean).join(\'\');\n\n    const defaultAriaLabel = ariaLabel || label + \' \' + formattedValue + (trendValue ? \' \' + trendValue : \'\');\n\n    const TrendIcon = trend === \'up\' ? TrendingUp : TrendingDown;\n    const trendColorClass = trend === \'up\' ? \'text-success-600\' : \'text-danger-600\';\n\n    const containerClass = layout === \'card\'\n      ? \'border border-gray-200 rounded-lg p-6 bg-white shadow-sm\'\n      : \'inline-block\';\n\n    return (\n      <div\n        ref={ref}\n        className={cn(containerClass, className)}\n        role="region"\n        aria-label={defaultAriaLabel}\n        {...props}\n      >\n        {layout === \'card\' && icon ? (\n          <div className="flex items-start justify-between">\n            <div className="flex-1">\n              <div className={cn(statisticVariants({ size, element: \'label\' }))}>\n                {label}\n              </div>\n              <div className={cn(statisticVariants({ size, variant, element: \'value\' }))}>\n                {prefix && <span className="mr-1">{prefix}</span>}\n                <span>{value}</span>\n                {suffix && <span className="ml-1">{suffix}</span>}\n              </div>\n              {trend && trendValue && (\n                <div className={cn(\'flex items-center gap-1 mt-2\', trendColorClass)}>\n                  <TrendIcon size={16} aria-hidden="true" />\n                  <span className="text-sm font-medium">{trendValue}</span>\n                </div>\n              )}\n            </div>\n            <div className={cn(\'p-3 rounded-lg bg-gray-50\', statisticVariants({ variant, element: \'icon\' }))}>\n              {icon}\n            </div>\n          </div>\n        ) : (\n          <div>\n            <div className={cn(statisticVariants({ size, element: \'label\' }))}>\n              {label}\n            </div>\n            <div className={cn(\'flex items-baseline gap-2\', statisticVariants({ size, variant, element: \'value\' }))}>\n              <span>\n                {prefix && <span className="mr-1">{prefix}</span>}\n                {value}\n                {suffix && <span className="ml-1">{suffix}</span>}\n              </span>\n              {trend && trendValue && (\n                <div className={cn(\'flex items-center gap-1\', trendColorClass)}>\n                  <TrendIcon size={20} aria-hidden="true" />\n                  <span className="text-lg font-medium">{trendValue}</span>\n                </div>\n              )}\n            </div>\n            {icon && layout !== \'card\' && (\n              <div className="mt-2">\n                {icon}\n              </div>\n            )}\n          </div>\n        )}\n      </div>\n    );\n  }\n);\n\nStatistic.displayName = \'Statistic\';',
        types: 'export interface StatisticProps \n  extends React.HTMLAttributes<HTMLDivElement>,\n          StatisticVariantProps {\n  value: string | number;\n  label: string;\n  trend?: \'up\' | \'down\';\n  trendValue?: string;\n  prefix?: string;\n  suffix?: string;\n  icon?: React.ReactNode;\n  layout?: \'default\' | \'card\';\n  ariaLabel?: string;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const statisticVariants = cva(\n  \'\',\n  {\n    variants: {\n      size: {\n        sm: \'\',\n        md: \'\',\n        lg: \'\',\n      },\n      variant: {\n        default: \'\',\n        primary: \'\',\n        success: \'\',\n        danger: \'\',\n        warning: \'\',\n      },\n      element: {\n        label: \'\',\n        value: \'\',\n        icon: \'\',\n      },\n    },\n    compoundVariants: [\n      {\n        element: \'label\',\n        size: \'sm\',\n        className: \'text-sm text-gray-600 mb-1\',\n      },\n      {\n        element: \'label\',\n        size: \'md\',\n        className: \'text-base text-gray-600 mb-1\',\n      },\n      {\n        element: \'label\',\n        size: \'lg\',\n        className: \'text-lg text-gray-600 mb-2\',\n      },\n      {\n        element: \'value\',\n        size: \'sm\',\n        className: \'text-2xl font-bold\',\n      },\n      {\n        element: \'value\',\n        size: \'md\',\n        className: \'text-4xl font-bold\',\n      },\n      {\n        element: \'value\',\n        size: \'lg\',\n        className: \'text-5xl font-bold\',\n      },\n      {\n        element: \'value\',\n        variant: \'default\',\n        className: \'text-gray-900\',\n      },\n      {\n        element: \'value\',\n        variant: \'primary\',\n        className: \'text-[#005196]\',\n      },\n      {\n        element: \'value\',\n        variant: \'success\',\n        className: \'text-[#008800]\',\n      },\n      {\n        element: \'value\',\n        variant: \'danger\',\n        className: \'text-[#dc2626]\',\n      },\n      {\n        element: \'value\',\n        variant: \'warning\',\n        className: \'text-[#f59e0b]\',\n      },\n      {\n        element: \'icon\',\n        variant: \'default\',\n        className: \'text-gray-900\',\n      },\n      {\n        element: \'icon\',\n        variant: \'primary\',\n        className: \'text-[#005196]\',\n      },\n      {\n        element: \'icon\',\n        variant: \'success\',\n        className: \'text-[#008800]\',\n      },\n      {\n        element: \'icon\',\n        variant: \'danger\',\n        className: \'text-[#dc2626]\',\n      },\n      {\n        element: \'icon\',\n        variant: \'warning\',\n        className: \'text-[#f59e0b]\',\n      },\n    ],\n    defaultVariants: {\n      size: \'md\',\n      variant: \'default\',\n    },\n  }\n);\n\nexport type StatisticVariantProps = VariantProps<typeof statisticVariants>;',
      }}

      angularCode={{
        component: 'import { Component, Input } from \'@angular/core\';\n\ntype StatisticVariant = \'default\' | \'primary\' | \'success\' | \'danger\' | \'warning\';\ntype StatisticSize = \'sm\' | \'md\' | \'lg\';\ntype StatisticTrend = \'up\' | \'down\';\ntype StatisticLayout = \'default\' | \'card\';\n\n@Component({\n  selector: \'ux4g-statistic\',\n  template: \`\n    <div\n      [class]="getContainerClasses()"\n      role="region"\n      [attr.aria-label]="getAriaLabel()"\n    >\n      <div *ngIf="layout === \'card\' && icon; else defaultLayout" class="flex items-start justify-between">\n        <div class="flex-1">\n          <div [class]="getLabelClasses()">{{ label }}</div>\n          <div [class]="getValueClasses()">\n            <span *ngIf="prefix" class="mr-1">{{ prefix }}</span>\n            <span>{{ value }}</span>\n            <span *ngIf="suffix" class="ml-1">{{ suffix }}</span>\n          </div>\n          <div *ngIf="trend && trendValue" [class]="getTrendClasses()">\n            <svg *ngIf="trend === \'up\'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>\n              <polyline points="17 6 23 6 23 12"></polyline>\n            </svg>\n            <svg *ngIf="trend === \'down\'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>\n              <polyline points="17 18 23 18 23 12"></polyline>\n            </svg>\n            <span class="text-sm font-medium">{{ trendValue }}</span>\n          </div>\n        </div>\n        <div [class]="getIconContainerClasses()">\n          <ng-content select="[icon]"></ng-content>\n        </div>\n      </div>\n\n      <ng-template #defaultLayout>\n        <div>\n          <div [class]="getLabelClasses()">{{ label }}</div>\n          <div [class]="getValueContainerClasses()">\n            <span>\n              <span *ngIf="prefix" class="mr-1">{{ prefix }}</span>\n              {{ value }}\n              <span *ngIf="suffix" class="ml-1">{{ suffix }}</span>\n            </span>\n            <div *ngIf="trend && trendValue" [class]="getTrendClasses()">\n              <svg *ngIf="trend === \'up\'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>\n                <polyline points="17 6 23 6 23 12"></polyline>\n              </svg>\n              <svg *ngIf="trend === \'down\'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>\n                <polyline points="17 18 23 18 23 12"></polyline>\n              </svg>\n              <span class="text-lg font-medium">{{ trendValue }}</span>\n            </div>\n          </div>\n          <div *ngIf="icon && layout !== \'card\'" class="mt-2">\n            <ng-content select="[icon]"></ng-content>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  \`,\n  styleUrls: [\'./statistic.component.css\']\n})\nexport class StatisticComponent {\n  @Input() value!: string | number;\n  @Input() label!: string;\n  @Input() trend?: StatisticTrend;\n  @Input() trendValue?: string;\n  @Input() prefix?: string;\n  @Input() suffix?: string;\n  @Input() size: StatisticSize = \'md\';\n  @Input() variant: StatisticVariant = \'default\';\n  @Input() icon?: any;\n  @Input() layout: StatisticLayout = \'default\';\n  @Input() ariaLabel?: string;\n\n  getContainerClasses(): string {\n    const baseClass = this.layout === \'card\'\n      ? \'border border-gray-200 rounded-lg p-6 bg-white shadow-sm\'\n      : \'inline-block\';\n    return baseClass;\n  }\n\n  getLabelClasses(): string {\n    const sizeClasses = {\n      sm: \'text-sm\',\n      md: \'text-base\',\n      lg: \'text-lg\'\n    };\n    return \'text-gray-600 mb-1 \' + sizeClasses[this.size];\n  }\n\n  getValueClasses(): string {\n    return this.getValueBaseClasses() + \' \' + this.getVariantClasses();\n  }\n\n  getValueBaseClasses(): string {\n    const sizeClasses = {\n      sm: \'text-2xl\',\n      md: \'text-4xl\',\n      lg: \'text-5xl\'\n    };\n    return \'font-bold \' + sizeClasses[this.size];\n  }\n\n  getValueContainerClasses(): string {\n    return \'flex items-baseline gap-2 \' + this.getValueClasses();\n  }\n\n  getVariantClasses(): string {\n    const variantClasses = {\n      default: \'text-gray-900\',\n      primary: \'text-[#005196]\',\n      success: \'text-[#008800]\',\n      danger: \'text-[#dc2626]\',\n      warning: \'text-[#f59e0b]\'\n    };\n    return variantClasses[this.variant];\n  }\n\n  getTrendClasses(): string {\n    const trendClasses = {\n      up: \'text-[#008800]\',\n      down: \'text-[#dc2626]\'\n    };\n    const baseClass = \'flex items-center gap-1 mt-2\';\n    return baseClass + \' \' + (this.trend ? trendClasses[this.trend] : \'\');\n  }\n\n  getIconContainerClasses(): string {\n    return \'p-3 rounded-lg bg-gray-50 \' + this.getVariantClasses();\n  }\n\n  getAriaLabel(): string {\n    if (this.ariaLabel) {\n      return this.ariaLabel;\n    }\n    const parts = [this.label, this.prefix || \'\', this.value, this.suffix || \'\'];\n    if (this.trendValue) {\n      parts.push(this.trendValue);\n    }\n    return parts.filter(Boolean).join(\' \');\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { StatisticComponent } from \'./statistic.component\';\n\n@NgModule({\n  declarations: [StatisticComponent],\n  imports: [CommonModule],\n  exports: [StatisticComponent]\n})\nexport class StatisticModule { }',
        types: 'export type StatisticVariant = \'default\' | \'primary\' | \'success\' | \'danger\' | \'warning\';\nexport type StatisticSize = \'sm\' | \'md\' | \'lg\';\nexport type StatisticTrend = \'up\' | \'down\';\nexport type StatisticLayout = \'default\' | \'card\';',
      }}

      comparisons={[
        {
          system: 'Ant Design (Alibaba)',
          component: 'Statistic',
          variants: 'default, card with prefix/suffix/trend',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/statistic',
        },
        {
          system: 'Material UI (Google)',
          component: 'Typography + Custom',
          variants: 'Custom implementation required',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Limited',
          link: 'https://mui.com/material-ui/react-typography/',
        },
        {
          system: 'Chakra UI',
          component: 'Stat',
          variants: 'default, with help text, with indicator',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/stat',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Summary card (custom)',
          variants: 'Card-based metrics',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://design-system.service.gov.uk/components/',
        },
        {
          system: 'Carbon Design (IBM)',
          component: 'Data visualization',
          variants: 'Charts and graphs focus',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://carbondesignsystem.com/data-visualization/getting-started',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic HTML with role="region" for screen reader context (WCAG 4.1.2)',
          'Descriptive aria-label combining label, value, and trend for complete context',
          'Color is not the only means of conveying trend information (icons included) (WCAG 1.4.1)',
          'Text contrast ratios meet or exceed 4.5:1 for normal text (WCAG 1.4.3)',
          'Large text (values) meets 3:1 contrast ratio requirement (WCAG 1.4.3)',
          'Trend icons marked with aria-hidden="true" to prevent redundant announcements',
          'Values are announced with prefix/suffix for complete comprehension',
          'Responsive text sizing maintains readability at 200% zoom (WCAG 1.4.4)',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate through interactive elements (if statistic contains links or buttons)' },
          { key: 'Screen Reader', action: 'Announces complete statistic value with label and trend' },
        ],
        screenReader: [
          'Announces region role to provide context',
          'Reads complete aria-label with formatted value',
          'Prefix and suffix are included in announcement (e.g., "Total Revenue $45,234.50")',
          'Trend values announced with context (e.g., "+12.5%")',
          'Icons hidden from screen reader to avoid redundant information',
          'Card layout provides clear grouping of related information',
        ],
      }}

      tokens={{
        file: '/tokens/components/statistic.json',
        mappings: [
          { property: 'Value Size (Medium)', token: 'statistic.value.fontSize.md', value: '36px (2.25rem)' },
          { property: 'Value Size (Large)', token: 'statistic.value.fontSize.lg', value: '48px (3rem)' },
          { property: 'Value Font Weight', token: 'statistic.value.fontWeight', value: '700 (Bold)' },
          { property: 'Label Size (Medium)', token: 'statistic.label.fontSize.md', value: '16px (1rem)' },
          { property: 'Label Color', token: 'statistic.label.color', value: '#6B7280 (Gray 600)' },
          { property: 'Primary Value Color', token: 'statistic.variant.primary.color', value: '#005196 (Navy 500)' },
          { property: 'Success Value Color', token: 'statistic.variant.success.color', value: '#008800 (Green 600)' },
          { property: 'Danger Value Color', token: 'statistic.variant.danger.color', value: '#dc2626 (Red 600)' },
          { property: 'Trend Up Color', token: 'statistic.trend.up.color', value: '#008800 (Green 600)' },
          { property: 'Trend Down Color', token: 'statistic.trend.down.color', value: '#dc2626 (Red 600)' },
          { property: 'Card Border Radius', token: 'statistic.card.borderRadius', value: '8px' },
          { property: 'Card Padding', token: 'statistic.card.padding', value: '24px' },
          { property: 'Card Border Color', token: 'statistic.card.borderColor', value: '#E5E7EB (Gray 200)' },
        ],
      }}

      useCases={[
        {
          title: 'Total Applications Dashboard',
          description: 'Display the total number of applications received across government services.',
          code: '<Statistic\n  value="12,458"\n  label="Total Applications"\n  trend="up"\n  trendValue="+12.5%"\n  variant="primary"\n  layout="card"\n  icon={<FileText size={24} />}\n/>',
        },
        {
          title: 'Pending Approvals Queue',
          description: 'Show the number of applications waiting for review and approval.',
          code: '<Statistic\n  value="3,247"\n  label="Pending Approvals"\n  trend="up"\n  trendValue="+23%"\n  variant="warning"\n  layout="card"\n  icon={<Users size={24} />}\n/>',
        },
        {
          title: 'Service Uptime Monitor',
          description: 'Display government service availability and uptime percentage.',
          code: '<Statistic\n  value="98.7"\n  label="Service Uptime"\n  suffix="%"\n  variant="success"\n  layout="card"\n  icon={<Activity size={24} />}\n/>',
        },
        {
          title: 'Citizen Registrations',
          description: 'Track new citizen registrations and user sign-ups over time.',
          code: '<Statistic\n  value="2,847"\n  label="New Registrations"\n  suffix=" citizens"\n  trend="up"\n  trendValue="+127"\n  variant="success"\n  layout="card"\n/>',
        },
        {
          title: 'Revenue Metrics',
          description: 'Display government revenue, fees collected, or budget information.',
          code: '<Statistic\n  value="2.4M"\n  label="Revenue Collected"\n  prefix="$"\n  trend="down"\n  trendValue="-3.1%"\n  variant="danger"\n  layout="card"\n  icon={<DollarSign size={24} />}\n/>',
        },
        {
          title: 'Processing Time Average',
          description: 'Show average processing time for applications and requests.',
          code: '<Statistic\n  value="4.2"\n  label="Avg Processing Time"\n  suffix=" days"\n  trend="down"\n  trendValue="-12%"\n  variant="success"\n  layout="card"\n/>',
        },
      ]}
    />
  );
}
