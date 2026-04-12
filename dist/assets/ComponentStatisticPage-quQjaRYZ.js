import{e as b,j as e,F as h,U as C}from"./index-LBJNeHTL.js";import{C as S}from"./ComponentDocumentation-DvEedSJi.js";import{A as w}from"./activity-CxDBoZQ1.js";import{T as g}from"./trending-up-lf9mQiXY.js";import{T as x}from"./trending-down-BFvDrl4q.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],z=b("dollar-sign",N),t=({value:d,label:u,trend:a,trendValue:s,prefix:i,suffix:n,size:r="md",variant:o="default",icon:l,layout:y="default",...p})=>{const m=r==="sm"?"text-2xl":r==="lg"?"text-5xl":"text-4xl",v=r==="sm"?"text-sm":r==="lg"?"text-lg":"text-base",c={default:"text-gray-900",primary:"text-[#005196]",success:"text-[#008800]",danger:"text-[#dc2626]",warning:"text-[#f59e0b]"},f={up:"text-[#008800]",down:"text-[#dc2626]"};return y==="card"?e.jsx("div",{className:"border border-gray-200 rounded-lg p-6 bg-white shadow-sm",...p,children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-gray-600 mb-2 "+v,children:u}),e.jsxs("div",{className:"font-bold "+m+" "+c[o],children:[i&&e.jsx("span",{className:"mr-1",children:i}),d,n&&e.jsx("span",{className:"ml-1",children:n})]}),a&&s&&e.jsxs("div",{className:"flex items-center gap-1 mt-2 "+f[a],children:[a==="up"?e.jsx(g,{size:16}):e.jsx(x,{size:16}),e.jsx("span",{className:"text-sm font-medium",children:s})]})]}),l&&e.jsx("div",{className:"p-3 rounded-lg bg-gray-50 "+c[o],children:l})]})}):e.jsxs("div",{className:"inline-block",...p,children:[e.jsx("div",{className:"text-gray-600 mb-1 "+v,children:u}),e.jsxs("div",{className:"font-bold flex items-baseline gap-2 "+m+" "+c[o],children:[e.jsxs("span",{children:[i&&e.jsx("span",{className:"mr-1",children:i}),d,n&&e.jsx("span",{className:"ml-1",children:n})]}),a&&s&&e.jsxs("div",{className:"flex items-center gap-1 "+f[a],children:[a==="up"?e.jsx(g,{size:20}):e.jsx(x,{size:20}),e.jsx("span",{className:"text-lg font-medium",children:s})]})]}),l&&e.jsx("div",{className:"mt-2",children:l})]})};function R(){return e.jsx(S,{name:"Statistic",description:"Display numerical data, KPIs, metrics, and statistics prominently for dashboards and data visualization. Supports trends, prefixes, suffixes, icons, and multiple layout variants with full accessibility compliance.",category:"Data Display",maturity:"beta",tier:"core",since:"v1.0.0",updated:"v2.0.0",props:[{name:"value",type:"string | number",required:!0,description:"The numerical or text value to display prominently. Can be formatted numbers, percentages, or custom strings."},{name:"label",type:"string",required:!0,description:"Descriptive label for the statistic. Should clearly indicate what the value represents."},{name:"trend",type:"'up' | 'down' | undefined",required:!1,description:"Direction of the trend indicator. Shows upward or downward arrow with associated color."},{name:"trendValue",type:"string",required:!1,description:"Value to display with the trend indicator. Typically a percentage or delta value."},{name:"prefix",type:"string",required:!1,description:'Text or symbol to display before the value (e.g., "$", "€", "+").'},{name:"suffix",type:"string",required:!1,description:'Text or symbol to display after the value (e.g., "%", "kg", "users").'},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Size of the statistic display. Small for compact views, medium for standard, large for emphasis."},{name:"variant",type:"'default' | 'primary' | 'success' | 'danger' | 'warning'",default:"'default'",required:!1,description:"Color variant for the value. Use semantic colors to indicate status or importance."},{name:"icon",type:"ReactNode",required:!1,description:"Icon to display alongside the statistic. Provides visual context for the metric."},{name:"layout",type:"'default' | 'card'",default:"'default'",required:!1,description:"Layout style. Default for inline display, card for contained presentation with border and padding."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply. Merged with variant classes."},{name:"ariaLabel",type:"string",required:!1,description:"Custom ARIA label for screen readers. Auto-generated if not provided."}],examples:[{title:"Dashboard Metrics",description:"Key performance indicators displayed in a dashboard grid layout.",code:`import { Statistic } from '@ux4g/react-core';
import { Users, FileText, Activity, DollarSign } from 'lucide-react';

function Example() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Statistic
        value="12,458"
        label="Total Applications"
        trend="up"
        trendValue="+12.5%"
        variant="primary"
        layout="card"
        icon={<FileText size={24} />}
      />
      <Statistic
        value="3,247"
        label="Active Users"
        trend="up"
        trendValue="+8.2%"
        variant="success"
        layout="card"
        icon={<Users size={24} />}
      />
      <Statistic
        value="98.7"
        label="Service Uptime"
        suffix="%"
        variant="success"
        layout="card"
        icon={<Activity size={24} />}
      />
      <Statistic
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
  );
}`,preview:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsx(t,{value:"12,458",label:"Total Applications",trend:"up",trendValue:"+12.5%",variant:"primary",layout:"card",icon:e.jsx(h,{size:24})}),e.jsx(t,{value:"3,247",label:"Active Users",trend:"up",trendValue:"+8.2%",variant:"success",layout:"card",icon:e.jsx(C,{size:24})}),e.jsx(t,{value:"98.7",label:"Service Uptime",suffix:"%",variant:"success",layout:"card",icon:e.jsx(w,{size:24})}),e.jsx(t,{value:"2.4M",label:"Revenue",prefix:"$",trend:"down",trendValue:"-3.1%",variant:"danger",layout:"card",icon:e.jsx(z,{size:24})})]})},{title:"KPI Cards with Trends",description:"Statistics with trend indicators showing performance changes over time.",code:`import { Statistic } from '@ux4g/react-core';

function Example() {
  return (
    <div className="flex flex-wrap gap-6">
      <Statistic
        value="15,234"
        label="Pending Approvals"
        trend="up"
        trendValue="+23%"
        variant="warning"
        layout="card"
      />
      <Statistic
        value="8,942"
        label="Completed This Month"
        trend="up"
        trendValue="+15.3%"
        variant="success"
        layout="card"
      />
      <Statistic
        value="142"
        label="Rejected Applications"
        trend="down"
        trendValue="-8%"
        variant="danger"
        layout="card"
      />
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsx(t,{value:"15,234",label:"Pending Approvals",trend:"up",trendValue:"+23%",variant:"warning",layout:"card"}),e.jsx(t,{value:"8,942",label:"Completed This Month",trend:"up",trendValue:"+15.3%",variant:"success",layout:"card"}),e.jsx(t,{value:"142",label:"Rejected Applications",trend:"down",trendValue:"-8%",variant:"danger",layout:"card"})]})},{title:"Sizes and Variants",description:"Different size options and color variants for various emphasis levels.",code:`import { Statistic } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-8">
        <Statistic
          value="1,234"
          label="Small Size"
          size="sm"
          variant="default"
        />
        <Statistic
          value="5,678"
          label="Medium Size"
          size="md"
          variant="primary"
        />
        <Statistic
          value="9,012"
          label="Large Size"
          size="lg"
          variant="success"
        />
      </div>
      <div className="flex flex-wrap items-end gap-8">
        <Statistic
          value="100"
          label="Default"
          suffix="%"
          variant="default"
        />
        <Statistic
          value="100"
          label="Primary"
          suffix="%"
          variant="primary"
        />
        <Statistic
          value="100"
          label="Success"
          suffix="%"
          variant="success"
        />
        <Statistic
          value="100"
          label="Warning"
          suffix="%"
          variant="warning"
        />
        <Statistic
          value="100"
          label="Danger"
          suffix="%"
          variant="danger"
        />
      </div>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-end gap-8",children:[e.jsx(t,{value:"1,234",label:"Small Size",size:"sm",variant:"default"}),e.jsx(t,{value:"5,678",label:"Medium Size",size:"md",variant:"primary"}),e.jsx(t,{value:"9,012",label:"Large Size",size:"lg",variant:"success"})]}),e.jsxs("div",{className:"flex flex-wrap items-end gap-8",children:[e.jsx(t,{value:"100",label:"Default",suffix:"%",variant:"default"}),e.jsx(t,{value:"100",label:"Primary",suffix:"%",variant:"primary"}),e.jsx(t,{value:"100",label:"Success",suffix:"%",variant:"success"}),e.jsx(t,{value:"100",label:"Warning",suffix:"%",variant:"warning"}),e.jsx(t,{value:"100",label:"Danger",suffix:"%",variant:"danger"})]})]})},{title:"With Prefix and Suffix",description:"Statistics with currency symbols, units, and other prefix/suffix indicators.",code:`import { Statistic } from '@ux4g/react-core';

function Example() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Statistic
        value="45,234.50"
        label="Total Revenue"
        prefix="$"
        variant="success"
        layout="card"
      />
      <Statistic
        value="89.5"
        label="Completion Rate"
        suffix="%"
        variant="primary"
        layout="card"
      />
      <Statistic
        value="2,847"
        label="New Registrations"
        suffix=" users"
        trend="up"
        trendValue="+127"
        variant="success"
        layout="card"
      />
    </div>
  );
}`,preview:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsx(t,{value:"45,234.50",label:"Total Revenue",prefix:"$",variant:"success",layout:"card"}),e.jsx(t,{value:"89.5",label:"Completion Rate",suffix:"%",variant:"primary",layout:"card"}),e.jsx(t,{value:"2,847",label:"New Registrations",suffix:" users",trend:"up",trendValue:"+127",variant:"success",layout:"card"})]})},{title:"Comparison Statistics",description:"Side-by-side comparison of related metrics with different layouts.",code:`import { Statistic } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <div className="flex gap-8">
        <Statistic
          value="12,458"
          label="This Month"
          variant="primary"
          size="lg"
        />
        <Statistic
          value="10,234"
          label="Last Month"
          variant="default"
          size="lg"
        />
      </div>
      <div className="border-t pt-4">
        <Statistic
          value="+2,224"
          label="Increase"
          trend="up"
          trendValue="+21.7%"
          variant="success"
          size="md"
        />
      </div>
    </div>
  );
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-8",children:[e.jsx(t,{value:"12,458",label:"This Month",variant:"primary",size:"lg"}),e.jsx(t,{value:"10,234",label:"Last Month",variant:"default",size:"lg"})]}),e.jsx("div",{className:"border-t pt-4",children:e.jsx(t,{value:"+2,224",label:"Increase",trend:"up",trendValue:"+21.7%",variant:"success",size:"md"})})]})}],reactCode:{component:`import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { statisticVariants } from './statistic.variants';
import { StatisticProps } from './Statistic.types';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const Statistic = forwardRef<HTMLDivElement, StatisticProps>(
  (
    {
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
      className,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const formattedValue = [
      prefix,
      value,
      suffix
    ].filter(Boolean).join('');

    const defaultAriaLabel = ariaLabel || label + ' ' + formattedValue + (trendValue ? ' ' + trendValue : '');

    const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
    const trendColorClass = trend === 'up' ? 'text-success-600' : 'text-danger-600';

    const containerClass = layout === 'card'
      ? 'border border-gray-200 rounded-lg p-6 bg-white shadow-sm'
      : 'inline-block';

    return (
      <div
        ref={ref}
        className={cn(containerClass, className)}
        role="region"
        aria-label={defaultAriaLabel}
        {...props}
      >
        {layout === 'card' && icon ? (
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className={cn(statisticVariants({ size, element: 'label' }))}>
                {label}
              </div>
              <div className={cn(statisticVariants({ size, variant, element: 'value' }))}>
                {prefix && <span className="mr-1">{prefix}</span>}
                <span>{value}</span>
                {suffix && <span className="ml-1">{suffix}</span>}
              </div>
              {trend && trendValue && (
                <div className={cn('flex items-center gap-1 mt-2', trendColorClass)}>
                  <TrendIcon size={16} aria-hidden="true" />
                  <span className="text-sm font-medium">{trendValue}</span>
                </div>
              )}
            </div>
            <div className={cn('p-3 rounded-lg bg-gray-50', statisticVariants({ variant, element: 'icon' }))}>
              {icon}
            </div>
          </div>
        ) : (
          <div>
            <div className={cn(statisticVariants({ size, element: 'label' }))}>
              {label}
            </div>
            <div className={cn('flex items-baseline gap-2', statisticVariants({ size, variant, element: 'value' }))}>
              <span>
                {prefix && <span className="mr-1">{prefix}</span>}
                {value}
                {suffix && <span className="ml-1">{suffix}</span>}
              </span>
              {trend && trendValue && (
                <div className={cn('flex items-center gap-1', trendColorClass)}>
                  <TrendIcon size={20} aria-hidden="true" />
                  <span className="text-lg font-medium">{trendValue}</span>
                </div>
              )}
            </div>
            {icon && layout !== 'card' && (
              <div className="mt-2">
                {icon}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Statistic.displayName = 'Statistic';`,types:`export interface StatisticProps 
  extends React.HTMLAttributes<HTMLDivElement>,
          StatisticVariantProps {
  value: string | number;
  label: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
  layout?: 'default' | 'card';
  ariaLabel?: string;
}`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const statisticVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
      },
      variant: {
        default: '',
        primary: '',
        success: '',
        danger: '',
        warning: '',
      },
      element: {
        label: '',
        value: '',
        icon: '',
      },
    },
    compoundVariants: [
      {
        element: 'label',
        size: 'sm',
        className: 'text-sm text-gray-600 mb-1',
      },
      {
        element: 'label',
        size: 'md',
        className: 'text-base text-gray-600 mb-1',
      },
      {
        element: 'label',
        size: 'lg',
        className: 'text-lg text-gray-600 mb-2',
      },
      {
        element: 'value',
        size: 'sm',
        className: 'text-2xl font-bold',
      },
      {
        element: 'value',
        size: 'md',
        className: 'text-4xl font-bold',
      },
      {
        element: 'value',
        size: 'lg',
        className: 'text-5xl font-bold',
      },
      {
        element: 'value',
        variant: 'default',
        className: 'text-gray-900',
      },
      {
        element: 'value',
        variant: 'primary',
        className: 'text-[#005196]',
      },
      {
        element: 'value',
        variant: 'success',
        className: 'text-[#008800]',
      },
      {
        element: 'value',
        variant: 'danger',
        className: 'text-[#dc2626]',
      },
      {
        element: 'value',
        variant: 'warning',
        className: 'text-[#f59e0b]',
      },
      {
        element: 'icon',
        variant: 'default',
        className: 'text-gray-900',
      },
      {
        element: 'icon',
        variant: 'primary',
        className: 'text-[#005196]',
      },
      {
        element: 'icon',
        variant: 'success',
        className: 'text-[#008800]',
      },
      {
        element: 'icon',
        variant: 'danger',
        className: 'text-[#dc2626]',
      },
      {
        element: 'icon',
        variant: 'warning',
        className: 'text-[#f59e0b]',
      },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

export type StatisticVariantProps = VariantProps<typeof statisticVariants>;`},angularCode:{component:`import { Component, Input } from '@angular/core';

type StatisticVariant = 'default' | 'primary' | 'success' | 'danger' | 'warning';
type StatisticSize = 'sm' | 'md' | 'lg';
type StatisticTrend = 'up' | 'down';
type StatisticLayout = 'default' | 'card';

@Component({
  selector: 'ux4g-statistic',
  template: \`
    <div
      [class]="getContainerClasses()"
      role="region"
      [attr.aria-label]="getAriaLabel()"
    >
      <div *ngIf="layout === 'card' && icon; else defaultLayout" class="flex items-start justify-between">
        <div class="flex-1">
          <div [class]="getLabelClasses()">{{ label }}</div>
          <div [class]="getValueClasses()">
            <span *ngIf="prefix" class="mr-1">{{ prefix }}</span>
            <span>{{ value }}</span>
            <span *ngIf="suffix" class="ml-1">{{ suffix }}</span>
          </div>
          <div *ngIf="trend && trendValue" [class]="getTrendClasses()">
            <svg *ngIf="trend === 'up'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <svg *ngIf="trend === 'down'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
              <polyline points="17 18 23 18 23 12"></polyline>
            </svg>
            <span class="text-sm font-medium">{{ trendValue }}</span>
          </div>
        </div>
        <div [class]="getIconContainerClasses()">
          <ng-content select="[icon]"></ng-content>
        </div>
      </div>

      <ng-template #defaultLayout>
        <div>
          <div [class]="getLabelClasses()">{{ label }}</div>
          <div [class]="getValueContainerClasses()">
            <span>
              <span *ngIf="prefix" class="mr-1">{{ prefix }}</span>
              {{ value }}
              <span *ngIf="suffix" class="ml-1">{{ suffix }}</span>
            </span>
            <div *ngIf="trend && trendValue" [class]="getTrendClasses()">
              <svg *ngIf="trend === 'up'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <svg *ngIf="trend === 'down'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                <polyline points="17 18 23 18 23 12"></polyline>
              </svg>
              <span class="text-lg font-medium">{{ trendValue }}</span>
            </div>
          </div>
          <div *ngIf="icon && layout !== 'card'" class="mt-2">
            <ng-content select="[icon]"></ng-content>
          </div>
        </div>
      </ng-template>
    </div>
  \`,
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent {
  @Input() value!: string | number;
  @Input() label!: string;
  @Input() trend?: StatisticTrend;
  @Input() trendValue?: string;
  @Input() prefix?: string;
  @Input() suffix?: string;
  @Input() size: StatisticSize = 'md';
  @Input() variant: StatisticVariant = 'default';
  @Input() icon?: any;
  @Input() layout: StatisticLayout = 'default';
  @Input() ariaLabel?: string;

  getContainerClasses(): string {
    const baseClass = this.layout === 'card'
      ? 'border border-gray-200 rounded-lg p-6 bg-white shadow-sm'
      : 'inline-block';
    return baseClass;
  }

  getLabelClasses(): string {
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    return 'text-gray-600 mb-1 ' + sizeClasses[this.size];
  }

  getValueClasses(): string {
    return this.getValueBaseClasses() + ' ' + this.getVariantClasses();
  }

  getValueBaseClasses(): string {
    const sizeClasses = {
      sm: 'text-2xl',
      md: 'text-4xl',
      lg: 'text-5xl'
    };
    return 'font-bold ' + sizeClasses[this.size];
  }

  getValueContainerClasses(): string {
    return 'flex items-baseline gap-2 ' + this.getValueClasses();
  }

  getVariantClasses(): string {
    const variantClasses = {
      default: 'text-gray-900',
      primary: 'text-[#005196]',
      success: 'text-[#008800]',
      danger: 'text-[#dc2626]',
      warning: 'text-[#f59e0b]'
    };
    return variantClasses[this.variant];
  }

  getTrendClasses(): string {
    const trendClasses = {
      up: 'text-[#008800]',
      down: 'text-[#dc2626]'
    };
    const baseClass = 'flex items-center gap-1 mt-2';
    return baseClass + ' ' + (this.trend ? trendClasses[this.trend] : '');
  }

  getIconContainerClasses(): string {
    return 'p-3 rounded-lg bg-gray-50 ' + this.getVariantClasses();
  }

  getAriaLabel(): string {
    if (this.ariaLabel) {
      return this.ariaLabel;
    }
    const parts = [this.label, this.prefix || '', this.value, this.suffix || ''];
    if (this.trendValue) {
      parts.push(this.trendValue);
    }
    return parts.filter(Boolean).join(' ');
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic.component';

@NgModule({
  declarations: [StatisticComponent],
  imports: [CommonModule],
  exports: [StatisticComponent]
})
export class StatisticModule { }`,types:`export type StatisticVariant = 'default' | 'primary' | 'success' | 'danger' | 'warning';
export type StatisticSize = 'sm' | 'md' | 'lg';
export type StatisticTrend = 'up' | 'down';
export type StatisticLayout = 'default' | 'card';`},comparisons:[{system:"Ant Design (Alibaba)",component:"Statistic",variants:"default, card with prefix/suffix/trend",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://ant.design/components/statistic"},{system:"Material UI (Google)",component:"Typography + Custom",variants:"Custom implementation required",accessibility:"WCAG 2.1 AA",documentation:"Limited",link:"https://mui.com/material-ui/react-typography/"},{system:"Chakra UI",component:"Stat",variants:"default, with help text, with indicator",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://chakra-ui.com/docs/components/stat"},{system:"GOV.UK Design System",component:"Summary card (custom)",variants:"Card-based metrics",accessibility:"WCAG 2.1 AAA",documentation:"Good",link:"https://design-system.service.gov.uk/components/"},{system:"Carbon Design (IBM)",component:"Data visualization",variants:"Charts and graphs focus",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://carbondesignsystem.com/data-visualization/getting-started"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['Semantic HTML with role="region" for screen reader context (WCAG 4.1.2)',"Descriptive aria-label combining label, value, and trend for complete context","Color is not the only means of conveying trend information (icons included) (WCAG 1.4.1)","Text contrast ratios meet or exceed 4.5:1 for normal text (WCAG 1.4.3)","Large text (values) meets 3:1 contrast ratio requirement (WCAG 1.4.3)",'Trend icons marked with aria-hidden="true" to prevent redundant announcements',"Values are announced with prefix/suffix for complete comprehension","Responsive text sizing maintains readability at 200% zoom (WCAG 1.4.4)"],keyboardSupport:[{key:"Tab",action:"Navigate through interactive elements (if statistic contains links or buttons)"},{key:"Screen Reader",action:"Announces complete statistic value with label and trend"}],screenReader:["Announces region role to provide context","Reads complete aria-label with formatted value",'Prefix and suffix are included in announcement (e.g., "Total Revenue $45,234.50")','Trend values announced with context (e.g., "+12.5%")',"Icons hidden from screen reader to avoid redundant information","Card layout provides clear grouping of related information"]},tokens:{file:"/tokens/components/statistic.json",mappings:[{property:"Value Size (Medium)",token:"statistic.value.fontSize.md",value:"36px (2.25rem)"},{property:"Value Size (Large)",token:"statistic.value.fontSize.lg",value:"48px (3rem)"},{property:"Value Font Weight",token:"statistic.value.fontWeight",value:"700 (Bold)"},{property:"Label Size (Medium)",token:"statistic.label.fontSize.md",value:"16px (1rem)"},{property:"Label Color",token:"statistic.label.color",value:"#6B7280 (Gray 600)"},{property:"Primary Value Color",token:"statistic.variant.primary.color",value:"#005196 (Navy 500)"},{property:"Success Value Color",token:"statistic.variant.success.color",value:"#008800 (Green 600)"},{property:"Danger Value Color",token:"statistic.variant.danger.color",value:"#dc2626 (Red 600)"},{property:"Trend Up Color",token:"statistic.trend.up.color",value:"#008800 (Green 600)"},{property:"Trend Down Color",token:"statistic.trend.down.color",value:"#dc2626 (Red 600)"},{property:"Card Border Radius",token:"statistic.card.borderRadius",value:"8px"},{property:"Card Padding",token:"statistic.card.padding",value:"24px"},{property:"Card Border Color",token:"statistic.card.borderColor",value:"#E5E7EB (Gray 200)"}]},useCases:[{title:"Total Applications Dashboard",description:"Display the total number of applications received across government services.",code:`<Statistic
  value="12,458"
  label="Total Applications"
  trend="up"
  trendValue="+12.5%"
  variant="primary"
  layout="card"
  icon={<FileText size={24} />}
/>`},{title:"Pending Approvals Queue",description:"Show the number of applications waiting for review and approval.",code:`<Statistic
  value="3,247"
  label="Pending Approvals"
  trend="up"
  trendValue="+23%"
  variant="warning"
  layout="card"
  icon={<Users size={24} />}
/>`},{title:"Service Uptime Monitor",description:"Display government service availability and uptime percentage.",code:`<Statistic
  value="98.7"
  label="Service Uptime"
  suffix="%"
  variant="success"
  layout="card"
  icon={<Activity size={24} />}
/>`},{title:"Citizen Registrations",description:"Track new citizen registrations and user sign-ups over time.",code:`<Statistic
  value="2,847"
  label="New Registrations"
  suffix=" citizens"
  trend="up"
  trendValue="+127"
  variant="success"
  layout="card"
/>`},{title:"Revenue Metrics",description:"Display government revenue, fees collected, or budget information.",code:`<Statistic
  value="2.4M"
  label="Revenue Collected"
  prefix="$"
  trend="down"
  trendValue="-3.1%"
  variant="danger"
  layout="card"
  icon={<DollarSign size={24} />}
/>`},{title:"Processing Time Average",description:"Show average processing time for applications and requests.",code:`<Statistic
  value="4.2"
  label="Avg Processing Time"
  suffix=" days"
  trend="down"
  trendValue="-12%"
  variant="success"
  layout="card"
/>`}]})}export{R as default};
