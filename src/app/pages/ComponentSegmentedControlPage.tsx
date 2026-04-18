/**
 * Segmented Control Component Documentation Page
 * Complete documentation for the Segmented Control component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { List, Grid, Calendar, Filter, Globe } from 'lucide-react';

// Import the actual Segmented Control component for live preview
const SegmentedControlPreview = ({
  options,
  value,
  onChange,
  size = 'md',
  variant = 'default',
  fullWidth = false,
  orientation = 'horizontal',
  disabled = false,
  iconOnly = false,
  ...props
}: any) => {
  const [selectedIndex, setSelectedIndex] = useState(
    options.findIndex((opt: any) => opt.value === value)
  );

  const handleChange = (index: number) => {
    if (disabled) return;
    setSelectedIndex(index);
    if (onChange) {
      onChange(options[index].value);
    }
  };

  const baseClasses = 'relative inline-flex rounded-lg p-1 transition-all';
  const containerClasses = [
    baseClasses,
    variant === 'primary' ? 'bg-[#005196]/10 border border-[#005196]/20' : 'bg-muted border border-border',
    fullWidth ? 'w-full' : '',
    orientation === 'vertical' ? 'flex-col' : 'flex-row',
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  ].filter(Boolean).join(' ');

  const buttonBaseClasses = 'relative z-10 font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]';

  const getButtonClasses = (index: number) => {
    const isSelected = index === selectedIndex;
    const sizeClasses =
      size === 'sm' ? (iconOnly ? 'h-7 w-7' : 'h-7 px-3 text-sm') :
      size === 'lg' ? (iconOnly ? 'h-11 w-11' : 'h-11 px-5 text-lg') :
      iconOnly ? 'h-9 w-9' : 'h-9 px-4 text-base';

    const colorClasses = isSelected
      ? (variant === 'primary' ? 'text-white' : 'text-[#005196]')
      : (variant === 'primary' ? 'text-[#005196] hover:text-[#004178]' : 'text-muted-foreground hover:text-foreground');

    return [
      buttonBaseClasses,
      sizeClasses,
      colorClasses,
      'rounded-md',
      fullWidth ? 'flex-1' : '',
      iconOnly ? 'flex items-center justify-center' : 'inline-flex items-center justify-center gap-2',
      disabled ? 'cursor-not-allowed' : 'cursor-pointer'
    ].filter(Boolean).join(' ');
  };

  const indicatorBaseClasses = 'absolute z-0 rounded-md shadow-sm transition-all duration-200 ease-out';
  const indicatorColorClasses = variant === 'primary' ? 'bg-[#005196]' : 'bg-card';

  const getIndicatorStyle = () => {
    if (orientation === 'vertical') {
      const buttonHeight = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;
      const gap = 0;
      return {
        top: selectedIndex * (buttonHeight + gap) + 4 + 'px',
        left: '4px',
        right: '4px',
        height: buttonHeight + 'px',
      };
    } else {
      const buttonElement = document.getElementById('seg-btn-' + selectedIndex + '');
      if (buttonElement) {
        const parent = buttonElement.parentElement;
        if (parent) {
          const parentRect = parent.getBoundingClientRect();
          const buttonRect = buttonElement.getBoundingClientRect();
          return {
            left: buttonRect.left - parentRect.left + 'px',
            width: buttonRect.width + 'px',
            top: '4px',
            bottom: '4px',
          };
        }
      }

      const buttonCount = options.length;
      const buttonWidth = 100 / buttonCount;
      return {
        left: selectedIndex * buttonWidth + '%',
        width: buttonWidth + '%',
        top: '4px',
        bottom: '4px',
      };
    }
  };

  return (
    <div className={containerClasses} role="radiogroup" {...props}>
      <div className={indicatorColorClasses + ' ' + indicatorBaseClasses} style={getIndicatorStyle()} />
      {options.map((option: any, index: number) => (
        <button
          key={option.value}
          id={'seg-btn-' + index + ''}
          type="button"
          role="radio"
          aria-checked={index === selectedIndex}
          className={getButtonClasses(index)}
          onClick={() => handleChange(index)}
          disabled={disabled}
        >
          {option.icon && (
            <span className="inline-flex shrink-0" aria-hidden="true">
              {option.icon}
            </span>
          )}
          {!iconOnly && <span>{option.label}</span>}
        </button>
      ))}
    </div>
  );
};

const SEGMENTEDCONTROL_CONTROLS: PlaygroundControl[] = [
  {
    name: 'size',
    label: 'Size',
    type: 'text',
    defaultValue: 'sm',
  },
  {
    name: 'disabled',
    label: 'Disabled',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'fullWidth',
    label: 'Full Width',
    type: 'boolean',
    defaultValue: false,
  },
];

function SegmentedControlPlayground() {
  return (
    <ComponentPlayground
      name="SegmentedControl"
      controls={SEGMENTEDCONTROL_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg">
          <SegmentedControlPreview {...v} />
        </div>
      )}
      codeTemplate={(v) => {
        const props: string[] = [];
        SEGMENTEDCONTROL_CONTROLS.forEach((c) => {
          const val = v[c.name];
          if (c.type === 'boolean' && val) props.push(c.name);
          else if (c.type !== 'boolean' && val !== c.defaultValue) {
            props.push(`${c.name}="${val}"`);
          }
        });
        return `<SegmentedControl${props.length ? ' ' + props.join(' ') : ''} />`;
      }}
    />
  );
}

export default function ComponentSegmentedControlPage() {
  const [basicValue, setBasicValue] = useState('tab1');
  const [viewMode, setViewMode] = useState('list');
  const [timePeriod, setTimePeriod] = useState('week');
  const [filterTab, setFilterTab] = useState('all');
  const [language, setLanguage] = useState('en');
  const [formType, setFormType] = useState('individual');
  const [iconOnlyValue, setIconOnlyValue] = useState('grid');

  return (
    <ComponentDocumentation
      name="Segmented Control"
      description="Modern alternative to radio buttons for mutually exclusive options. Button group pattern that provides clear visual feedback and smooth transitions between options, commonly used in government services for filters, view modes, and toggles."
      category="Form Elements"
      maturity="beta"
      tier="core"
      since="v1.2.0"
      updated="v2.1.0"

      preview={
        <div className="w-full max-w-2xl">
          <SegmentedControlPreview options={[{ value: 'grid', label: 'Grid' }, { value: 'list', label: 'List' }, { value: 'calendar', label: 'Calendar' }]} value="grid" />
        </div>
      }

      props={[
        {
          name: 'options',
          type: 'SegmentOption[]',
          required: true,
          description: 'Array of options ({ value, label, disabled? }).',
        },
        {
          name: 'value',
          type: 'string',
          required: false,
          description: 'Currently selected value.',
        },
        {
          name: 'onChange',
          type: '(value: string) => void',
          required: false,
          description: 'Callback when selection changes.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          required: false,
          description: 'Size variant.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Whether the control is disabled.',
        },
        {
          name: 'aria-label',
          type: 'string',
          required: false,
          description: 'Accessible label for the control.',
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
          title: 'Basic Segmented Control',
          description: 'Simple segmented control with three options for tab navigation.',
          code: 'import { SegmentedControl } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [value, setValue] = useState(\'tab1\');\n\n  return (\n    <SegmentedControl\n      value={value}\n      onChange={setValue}\n      options={[\n        { value: \'tab1\', label: \'Overview\' },\n        { value: \'tab2\', label: \'Details\' },\n        { value: \'tab3\', label: \'History\' },\n      ]}\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <SegmentedControlPreview
                value={basicValue}
                onChange={setBasicValue}
                options={[
                  { value: 'tab1', label: 'Overview' },
                  { value: 'tab2', label: 'Details' },
                  { value: 'tab3', label: 'History' },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'With Icons',
          description: 'Segmented control with icons alongside labels for better visual recognition.',
          code: 'import { SegmentedControl } from \'@ux4g/react-core\';\nimport { List, Grid } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [viewMode, setViewMode] = useState(\'list\');\n\n  return (\n    <SegmentedControl\n      value={viewMode}\n      onChange={setViewMode}\n      options={[\n        { value: \'list\', label: \'List View\', icon: <List size={16} /> },\n        { value: \'grid\', label: \'Grid View\', icon: <Grid size={16} /> },\n      ]}\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <SegmentedControlPreview
                value={viewMode}
                onChange={setViewMode}
                options={[
                  { value: 'list', label: 'List View', icon: <List size={16} /> },
                  { value: 'grid', label: 'Grid View', icon: <Grid size={16} /> },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'Icon Only',
          description: 'Compact view mode switcher showing only icons for space efficiency.',
          code: 'import { SegmentedControl } from \'@ux4g/react-core\';\nimport { List, Grid } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [viewMode, setViewMode] = useState(\'grid\');\n\n  return (\n    <SegmentedControl\n      value={viewMode}\n      onChange={setViewMode}\n      iconOnly\n      aria-label="View mode"\n      options={[\n        { value: \'list\', label: \'List\', icon: <List size={16} /> },\n        { value: \'grid\', label: \'Grid\', icon: <Grid size={16} /> },\n      ]}\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <SegmentedControlPreview
                value={iconOnlyValue}
                onChange={setIconOnlyValue}
                iconOnly
                aria-label="View mode"
                options={[
                  { value: 'list', label: 'List', icon: <List size={16} /> },
                  { value: 'grid', label: 'Grid', icon: <Grid size={16} /> },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'Time Period Selector',
          description: 'Data filtering control for selecting time ranges in analytics dashboards.',
          code: 'import { SegmentedControl } from \'@ux4g/react-core\';\nimport { Calendar } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [period, setPeriod] = useState(\'week\');\n\n  return (\n    <SegmentedControl\n      value={period}\n      onChange={setPeriod}\n      variant="primary"\n      options={[\n        { value: \'day\', label: \'Day\', icon: <Calendar size={14} /> },\n        { value: \'week\', label: \'Week\', icon: <Calendar size={14} /> },\n        { value: \'month\', label: \'Month\', icon: <Calendar size={14} /> },\n        { value: \'year\', label: \'Year\', icon: <Calendar size={14} /> },\n      ]}\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <SegmentedControlPreview
                value={timePeriod}
                onChange={setTimePeriod}
                variant="primary"
                options={[
                  { value: 'day', label: 'Day', icon: <Calendar size={14} /> },
                  { value: 'week', label: 'Week', icon: <Calendar size={14} /> },
                  { value: 'month', label: 'Month', icon: <Calendar size={14} /> },
                  { value: 'year', label: 'Year', icon: <Calendar size={14} /> },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'Filter Tabs',
          description: 'Application status filter with full width layout for form sections.',
          code: 'import { SegmentedControl } from \'@ux4g/react-core\';\nimport { Filter } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [filter, setFilter] = useState(\'all\');\n\n  return (\n    <div className="max-w-xl">\n      <SegmentedControl\n        value={filter}\n        onChange={setFilter}\n        fullWidth\n        options={[\n          { value: \'all\', label: \'All\', icon: <Filter size={14} /> },\n          { value: \'pending\', label: \'Pending\', icon: <Filter size={14} /> },\n          { value: \'approved\', label: \'Approved\', icon: <Filter size={14} /> },\n          { value: \'rejected\', label: \'Rejected\', icon: <Filter size={14} /> },\n        ]}\n      />\n    </div>\n  );\n}',
          preview: (
            <div className="w-full max-w-xl">
              <SegmentedControlPreview
                value={filterTab}
                onChange={setFilterTab}
                fullWidth
                options={[
                  { value: 'all', label: 'All', icon: <Filter size={14} /> },
                  { value: 'pending', label: 'Pending', icon: <Filter size={14} /> },
                  { value: 'approved', label: 'Approved', icon: <Filter size={14} /> },
                  { value: 'rejected', label: 'Rejected', icon: <Filter size={14} /> },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'Language Toggle',
          description: 'Bilingual language selector for government services supporting multiple languages.',
          code: 'import { SegmentedControl } from \'@ux4g/react-core\';\nimport { Globe } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [lang, setLang] = useState(\'en\');\n\n  return (\n    <SegmentedControl\n      value={lang}\n      onChange={setLang}\n      size="sm"\n      options={[\n        { value: \'en\', label: \'English\', icon: <Globe size={12} /> },\n        { value: \'fr\', label: \'Français\', icon: <Globe size={12} /> },\n      ]}\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <SegmentedControlPreview
                value={language}
                onChange={setLanguage}
                size="sm"
                options={[
                  { value: 'en', label: 'English', icon: <Globe size={12} /> },
                  { value: 'fr', label: 'Français', icon: <Globe size={12} /> },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'Form Type Selector',
          description: 'Application form type selection with large size for prominent placement.',
          code: 'import { SegmentedControl } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [formType, setFormType] = useState(\'individual\');\n\n  return (\n    <div className="max-w-md">\n      <SegmentedControl\n        value={formType}\n        onChange={setFormType}\n        size="lg"\n        fullWidth\n        variant="primary"\n        options={[\n          { value: \'individual\', label: \'Individual\' },\n          { value: \'business\', label: \'Business\' },\n        ]}\n      />\n    </div>\n  );\n}',
          preview: (
            <div className="w-full max-w-md">
              <SegmentedControlPreview
                value={formType}
                onChange={setFormType}
                size="lg"
                fullWidth
                variant="primary"
                options={[
                  { value: 'individual', label: 'Individual' },
                  { value: 'business', label: 'Business' },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'Sizes',
          description: 'Three size variants: small (28px), medium (36px), and large (44px).',
          code: 'import { SegmentedControl } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [sm, setSm] = useState(\'opt1\');\n  const [md, setMd] = useState(\'opt1\');\n  const [lg, setLg] = useState(\'opt1\');\n\n  const options = [\n    { value: \'opt1\', label: \'Option 1\' },\n    { value: \'opt2\', label: \'Option 2\' },\n    { value: \'opt3\', label: \'Option 3\' },\n  ];\n\n  return (\n    <div className="flex flex-col gap-4">\n      <SegmentedControl value={sm} onChange={setSm} size="sm" options={options} />\n      <SegmentedControl value={md} onChange={setMd} size="md" options={options} />\n      <SegmentedControl value={lg} onChange={setLg} size="lg" options={options} />\n    </div>\n  );\n}',
          preview: (
            <div className="flex flex-col items-center gap-4">
              <SegmentedControlPreview
                value="opt1"
                onChange={() => {}}
                size="sm"
                options={[
                  { value: 'opt1', label: 'Small' },
                  { value: 'opt2', label: 'Option 2' },
                  { value: 'opt3', label: 'Option 3' },
                ]}
              />
              <SegmentedControlPreview
                value="opt1"
                onChange={() => {}}
                size="md"
                options={[
                  { value: 'opt1', label: 'Medium' },
                  { value: 'opt2', label: 'Option 2' },
                  { value: 'opt3', label: 'Option 3' },
                ]}
              />
              <SegmentedControlPreview
                value="opt1"
                onChange={() => {}}
                size="lg"
                options={[
                  { value: 'opt1', label: 'Large' },
                  { value: 'opt2', label: 'Option 2' },
                  { value: 'opt3', label: 'Option 3' },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'Vertical Orientation',
          description: 'Stacked layout for sidebar navigation or narrow containers.',
          code: 'import { SegmentedControl } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [value, setValue] = useState(\'settings\');\n\n  return (\n    <SegmentedControl\n      value={value}\n      onChange={setValue}\n      orientation="vertical"\n      options={[\n        { value: \'profile\', label: \'Profile\' },\n        { value: \'settings\', label: \'Settings\' },\n        { value: \'notifications\', label: \'Notifications\' },\n        { value: \'security\', label: \'Security\' },\n      ]}\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <SegmentedControlPreview
                value="settings"
                onChange={() => {}}
                orientation="vertical"
                options={[
                  { value: 'profile', label: 'Profile' },
                  { value: 'settings', label: 'Settings' },
                  { value: 'notifications', label: 'Notifications' },
                  { value: 'security', label: 'Security' },
                ]}
              />
            </div>
          ),
        },
      ]}

      reactCode={{
        component: 'import React, { forwardRef, useState, useRef, useEffect } from \'react\';\nimport { cn } from \'../../utils/cn\';\nimport { segmentedControlVariants } from \'./segmented-control.variants\';\nimport { SegmentedControlProps } from \'./SegmentedControl.types\';\n\nexport const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(\n  (\n    {\n      options,\n      value,\n      onChange,\n      size = \'md\',\n      variant = \'default\',\n      fullWidth = false,\n      orientation = \'horizontal\',\n      disabled = false,\n      iconOnly = false,\n      className,\n      \'aria-label\': ariaLabel,\n      ...props\n    },\n    ref\n  ) => {\n    const containerRef = useRef<HTMLDivElement>(null);\n    const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});\n    const selectedIndex = options.findIndex((opt) => opt.value === value);\n\n    useEffect(() => {\n      updateIndicatorPosition();\n    }, [selectedIndex, orientation, size]);\n\n    const updateIndicatorPosition = () => {\n      if (!containerRef.current) return;\n\n      const buttons = containerRef.current.querySelectorAll(\'button\');\n      const selectedButton = buttons[selectedIndex];\n\n      if (!selectedButton) return;\n\n      const containerRect = containerRef.current.getBoundingClientRect();\n      const buttonRect = selectedButton.getBoundingClientRect();\n\n      if (orientation === \'vertical\') {\n        setIndicatorStyle({\n          top: buttonRect.top - containerRect.top + \'px\',\n          height: buttonRect.height + \'px\',\n          left: \'4px\',\n          right: \'4px\',\n        });\n      } else {\n        setIndicatorStyle({\n          left: buttonRect.left - containerRect.left + \'px\',\n          width: buttonRect.width + \'px\',\n          top: \'4px\',\n          bottom: \'4px\',\n        });\n      }\n    };\n\n    const handleChange = (optionValue: string) => {\n      if (disabled) return;\n      onChange(optionValue);\n    };\n\n    return (\n      <div\n        ref={containerRef}\n        role="radiogroup"\n        aria-label={ariaLabel}\n        className={cn(\n          segmentedControlVariants({ variant, orientation, fullWidth, disabled }),\n          className\n        )}\n        {...props}\n      >\n        <div\n          className={cn(\n            \'absolute z-0 rounded-md shadow-sm transition-all duration-200 ease-out\',\n            variant === \'primary\' ? \'bg-[#005196]\' : \'bg-card\'\n          )}\n          style={indicatorStyle}\n          aria-hidden="true"\n        />\n        {options.map((option) => {\n          const isSelected = option.value === value;\n          return (\n            <button\n              key={option.value}\n              type="button"\n              role="radio"\n              aria-checked={isSelected}\n              disabled={disabled}\n              className={cn(\n                \'relative z-10 font-medium transition-all\',\n                \'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]\',\n                \'rounded-md\',\n                size === \'sm\' ? (iconOnly ? \'h-7 w-7\' : \'h-7 px-3 text-sm\') :\n                size === \'lg\' ? (iconOnly ? \'h-11 w-11\' : \'h-11 px-5 text-lg\') :\n                (iconOnly ? \'h-9 w-9\' : \'h-9 px-4 text-base\'),\n                iconOnly ? \'flex items-center justify-center\' : \'inline-flex items-center justify-center gap-2\',\n                isSelected\n                  ? (variant === \'primary\' ? \'text-white\' : \'text-[#005196]\')\n                  : (variant === \'primary\' ? \'text-[#005196] hover:text-[#004178]\' : \'text-muted-foreground hover:text-foreground\'),\n                fullWidth && \'flex-1\',\n                disabled ? \'cursor-not-allowed\' : \'cursor-pointer\'\n              )}\n              onClick={() => handleChange(option.value)}\n            >\n              {option.icon && (\n                <span className="inline-flex shrink-0" aria-hidden="true">\n                  {option.icon}\n                </span>\n              )}\n              {!iconOnly && <span>{option.label}</span>}\n            </button>\n          );\n        })}\n      </div>\n    );\n  }\n);\n\nSegmentedControl.displayName = \'SegmentedControl\';',
        types: 'export interface SegmentedControlOption {\n  value: string;\n  label: string;\n  icon?: React.ReactNode;\n}\n\nexport interface SegmentedControlProps\n  extends Omit<React.HTMLAttributes<HTMLDivElement>, \'onChange\'>,\n          SegmentedControlVariantProps {\n  options: SegmentedControlOption[];\n  value: string;\n  onChange: (value: string) => void;\n  iconOnly?: boolean;\n  disabled?: boolean;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const segmentedControlVariants = cva(\n  [\n    \'relative inline-flex rounded-lg p-1\',\n    \'transition-all\',\n  ],\n  {\n    variants: {\n      variant: {\n        default: [\n          \'bg-muted border border-border\',\n        ],\n        primary: [\n          \'bg-[#005196]/10 border border-[#005196]/20\',\n        ],\n      },\n      orientation: {\n        horizontal: \'flex-row\',\n        vertical: \'flex-col\',\n      },\n      fullWidth: {\n        true: \'w-full\',\n        false: \'\',\n      },\n      disabled: {\n        true: \'opacity-50 cursor-not-allowed\',\n        false: \'\',\n      },\n    },\n    defaultVariants: {\n      variant: \'default\',\n      orientation: \'horizontal\',\n      fullWidth: false,\n      disabled: false,\n    },\n  }\n);\n\nexport type SegmentedControlVariantProps = VariantProps<typeof segmentedControlVariants>;',
      }}

      angularCode={{
        component: 'import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from \'@angular/core\';\n\ninterface SegmentedControlOption {\n  value: string;\n  label: string;\n  icon?: string;\n}\n\ntype SegmentedControlVariant = \'default\' | \'primary\';\ntype SegmentedControlSize = \'sm\' | \'md\' | \'lg\';\ntype SegmentedControlOrientation = \'horizontal\' | \'vertical\';\n\n@Component({\n  selector: \'ux4g-segmented-control\',\n  template: `\n    <div\n      #container\n      role="radiogroup"\n      [attr.aria-label]="ariaLabel"\n      [class]="getContainerClasses()"\n    >\n      <div\n        class="indicator"\n        [ngStyle]="indicatorStyle"\n        [class.primary]="variant === \'primary\'"\n        aria-hidden="true"\n      ></div>\n      <button\n        *ngFor="let option of options; let i = index"\n        type="button"\n        role="radio"\n        [attr.aria-checked]="option.value === value"\n        [disabled]="disabled"\n        [class]="getButtonClasses(option)"\n        (click)="handleChange(option.value)"\n      >\n        <span *ngIf="option.icon" class="icon" aria-hidden="true">\n          <i [class]="option.icon"></i>\n        </span>\n        <span *ngIf="!iconOnly">{{ option.label }}</span>\n      </button>\n    </div>\n  `,\n  styleUrls: [\'./segmented-control.component.css\']\n})\nexport class SegmentedControlComponent implements AfterViewInit {\n  @Input() options: SegmentedControlOption[] = [];\n  @Input() value = \'\';\n  @Input() variant: SegmentedControlVariant = \'default\';\n  @Input() size: SegmentedControlSize = \'md\';\n  @Input() orientation: SegmentedControlOrientation = \'horizontal\';\n  @Input() fullWidth = false;\n  @Input() iconOnly = false;\n  @Input() disabled = false;\n  @Input() ariaLabel?: string;\n  \n  @Output() valueChange = new EventEmitter<string>();\n\n  @ViewChild(\'container\') containerRef!: ElementRef;\n\n  indicatorStyle: any = {};\n\n  ngAfterViewInit(): void {\n    setTimeout(() => this.updateIndicatorPosition(), 0);\n  }\n\n  getContainerClasses(): string {\n    const classes = [\'ux4g-segmented-control\'];\n    classes.push(\'variant-\' + this.variant + \'\');\n    classes.push(\'orientation-\' + this.orientation + \'\');\n    if (this.fullWidth) classes.push(\'full-width\');\n    if (this.disabled) classes.push(\'disabled\');\n    return classes.join(\' \');\n  }\n\n  getButtonClasses(option: SegmentedControlOption): string {\n    const classes = [\'ux4g-seg-button\'];\n    classes.push(\'size-\' + this.size + \'\');\n    if (option.value === this.value) classes.push(\'selected\');\n    if (this.iconOnly) classes.push(\'icon-only\');\n    if (this.fullWidth) classes.push(\'flex-1\');\n    return classes.join(\' \');\n  }\n\n  handleChange(value: string): void {\n    if (!this.disabled) {\n      this.value = value;\n      this.valueChange.emit(value);\n      setTimeout(() => this.updateIndicatorPosition(), 0);\n    }\n  }\n\n  updateIndicatorPosition(): void {\n    const container = this.containerRef.nativeElement;\n    const buttons = container.querySelectorAll(\'button\');\n    const selectedIndex = this.options.findIndex(opt => opt.value === this.value);\n    const selectedButton = buttons[selectedIndex];\n\n    if (!selectedButton) return;\n\n    const containerRect = container.getBoundingClientRect();\n    const buttonRect = selectedButton.getBoundingClientRect();\n\n    if (this.orientation === \'vertical\') {\n      this.indicatorStyle = {\n        top: (buttonRect.top - containerRect.top) + \'px\',\n        height: buttonRect.height + \'px\',\n        left: \'4px\',\n        right: \'4px\',\n      };\n    } else {\n      this.indicatorStyle = {\n        left: (buttonRect.left - containerRect.left) + \'px\',\n        width: buttonRect.width + \'px\',\n        top: \'4px\',\n        bottom: \'4px\',\n      };\n    }\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { SegmentedControlComponent } from \'./segmented-control.component\';\n\n@NgModule({\n  declarations: [SegmentedControlComponent],\n  imports: [CommonModule],\n  exports: [SegmentedControlComponent]\n})\nexport class SegmentedControlModule { }',
        types: 'export interface SegmentedControlOption {\n  value: string;\n  label: string;\n  icon?: string;\n}\n\nexport type SegmentedControlVariant = \'default\' | \'primary\';\nexport type SegmentedControlSize = \'sm\' | \'md\' | \'lg\';\nexport type SegmentedControlOrientation = \'horizontal\' | \'vertical\';',
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-segmented-control> custom element",
        html: "<ux4g-segmented-control variant=\"primary\" size=\"md\"><!-- SegmentedControl --></ux4g-segmented-control>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'ToggleButtonGroup',
          variants: 'default, exclusive, multiple',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-toggle-button/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Segmented',
          variants: 'default, block, disabled',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/segmented',
        },
        {
          system: 'Chakra UI',
          component: 'RadioGroup (styled as SegmentedControl)',
          variants: 'custom variants',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/radio',
        },
        {
          system: 'Radix UI',
          component: 'RadioGroup (unstyled primitive)',
          variants: 'Custom (unstyled)',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://www.radix-ui.com/primitives/docs/components/radio-group',
        },
        {
          system: 'iOS Human Interface',
          component: 'Segmented Control',
          variants: 'default, bordered',
          accessibility: 'Platform standards',
          documentation: 'Comprehensive',
          link: 'https://developer.apple.com/design/human-interface-guidelines/segmented-controls',
        },
        {
          system: 'Carbon Design (IBM)',
          component: 'ContentSwitcher',
          variants: 'default, icon',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://carbondesignsystem.com/components/content-switcher/usage/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Uses role="radiogroup" for semantic structure (WCAG 4.1.2)',
          'Each option uses role="radio" with aria-checked state (WCAG 4.1.2)',
          'Keyboard navigation with Arrow keys for sequential selection (WCAG 2.1.1)',
          'Tab key moves focus to and from the control group (WCAG 2.1.1)',
          'Minimum 44px touch target size for mobile accessibility (WCAG 2.5.5)',
          '2px focus ring with offset for keyboard navigation visibility (WCAG 2.4.7)',
          'Color contrast ratios meet 4.5:1 for text and 3:1 for UI components (WCAG 1.4.3, 1.4.11)',
          'Icons properly hidden from screen readers with aria-hidden (WCAG 4.1.2)',
          'Required aria-label when no visible label exists (WCAG 4.1.2)',
          'Disabled state prevents interaction and is announced to assistive technologies',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to the control group or away from it' },
          { key: 'Right Arrow', action: 'Select next option (horizontal orientation)' },
          { key: 'Left Arrow', action: 'Select previous option (horizontal orientation)' },
          { key: 'Down Arrow', action: 'Select next option (vertical orientation)' },
          { key: 'Up Arrow', action: 'Select previous option (vertical orientation)' },
          { key: 'Space', action: 'Select the focused option' },
          { key: 'Enter', action: 'Select the focused option' },
        ],
        screenReader: [
          'Announces radiogroup role with accessible label',
          'Announces each option as radio button with checked state',
          'Announces disabled state when applicable',
          'Icons are hidden from screen reader (aria-hidden="true")',
          'Announces position in set (e.g., "1 of 3")',
        ],
      }}

      tokens={{
        file: '/tokens/components/segmented-control.json',
        mappings: [
          { property: 'Height (Medium)', token: 'base.height.md', value: '36px' },
          { property: 'Padding Horizontal (Medium)', token: 'base.padding.horizontal.md', value: '16px' },
          { property: 'Container Padding', token: 'base.padding.container', value: '4px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '8px' },
          { property: 'Button Border Radius', token: 'base.borderRadius.button', value: '6px' },
          { property: 'Font Size (Medium)', token: 'base.fontSize.md', value: '16px' },
          { property: 'Default Background', token: 'variant.default.background.container', value: '#f5f5f5 (Gray 100)' },
          { property: 'Default Indicator', token: 'variant.default.background.indicator', value: '#ffffff (White)' },
          { property: 'Primary Background', token: 'variant.primary.background.container', value: 'rgba(0, 81, 150, 0.1)' },
          { property: 'Primary Indicator', token: 'variant.primary.background.indicator', value: '#005196 (Navy 500)' },
          { property: 'Transition Duration', token: 'animation.duration.normal', value: '200ms' },
          { property: 'Transition Easing', token: 'animation.easing.easeOut', value: 'ease-out' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
        ],
      }}

      useCases={[
        {
          title: 'View Mode Switcher',
          description: 'Toggle between list and grid views in document libraries or search results.',
          implementation: 'Applications list displaying between table view and card view for easier scanning.',
        },
        {
          title: 'Time Period Filter',
          description: 'Select date ranges for analytics dashboards and reporting interfaces.',
          implementation: 'Government service analytics showing data by day, week, month, quarter, or year.',
        },
        {
          title: 'Application Status Filter',
          description: 'Filter applications by status (all, pending, approved, rejected) in admin dashboards.',
          implementation: 'Case management system showing different application states for processing officers.',
        },
        {
          title: 'Language Selector',
          description: 'Switch between supported languages in bilingual or multilingual government services.',
          implementation: 'Federal service portal offering English and French language options prominently.',
        },
        {
          title: 'Document Type Selector',
          description: 'Choose document category when uploading or searching government documents.',
          implementation: 'Upload interface selecting between passport, driver license, birth certificate, or other ID.',
        },
        {
          title: 'Service Category Navigation',
          description: 'Navigate between service categories on government portals.',
          implementation: 'Main service portal switching between benefits, taxes, healthcare, and immigration sections.',
        },
        {
          title: 'Payment Method Selection',
          description: 'Choose payment method for government fees and services.',
          implementation: 'Payment page selecting between credit card, debit card, or bank transfer options.',
        },
        {
          title: 'Form Type Toggle',
          description: 'Switch between individual and business application forms.',
          implementation: 'Tax filing portal toggling between personal and corporate tax return forms.',
        },
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
                  Do use SegmentedControl when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Switching between 2-5 mutually exclusive views</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Filter toggles with immediate effect</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>View mode selectors</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Compact option groups</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use SegmentedControl when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>More than 5 options — use Tabs or Select</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Form selections — use Radio</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Navigation — use Tabs</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Non-exclusive options — use Checkbox</li>
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
                  <p className="text-sm text-muted-foreground">Use segmented controls for 2-5 mutually exclusive view toggles.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 dark:border-red-800 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use segmented controls for more than 5 options — use Tabs or Select.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <SegmentedControlPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/tabs" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Tabs</h3>
                <p className="text-sm text-muted-foreground">For content section switching</p>
              </a>
              <a href="/components/radio" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Radio</h3>
                <p className="text-sm text-muted-foreground">For form selections</p>
              </a>
              <a href="/components/switch" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Switch</h3>
                <p className="text-sm text-muted-foreground">For binary toggles</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added icon-only segments</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added size variants</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with text segments</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Segmented controls vs tabs</h3>
                <p className="text-sm text-muted-foreground">Segmented controls are preferred for filtering within a view, while tabs are for switching between views (Apple HIG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
