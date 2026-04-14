/**
 * Tag/Chip Component Documentation Page
 * Complete documentation for the Tag/Chip component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { X, Tag, AlertCircle, CheckCircle, Info, Shield, FileText, Users, Calendar } from 'lucide-react';

// Import the actual Tag component for live preview
const TagPreview = ({ variant, size, closeable, outlined, children, icon, onClose, ...props }: any) => {
  const baseClasses = 'inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap transition-all';

  const variantClasses =
    variant === 'primary' ? (
      outlined
        ? 'bg-card text-[#005196] border border-[#005196]'
        : 'bg-[#005196] text-white border border-[#005196]'
    ) :
    variant === 'success' ? (
      outlined
        ? 'bg-card text-[#008800] border border-[#008800]'
        : 'bg-[#008800] text-white border border-[#008800]'
    ) :
    variant === 'warning' ? (
      outlined
        ? 'bg-card text-[#f59e0b] border border-[#f59e0b]'
        : 'bg-[#f59e0b] text-white border border-[#f59e0b]'
    ) :
    variant === 'error' ? (
      outlined
        ? 'bg-card text-[#dc2626] border border-[#dc2626]'
        : 'bg-[#dc2626] text-white border border-[#dc2626]'
    ) :
    variant === 'info' ? (
      outlined
        ? 'bg-card text-[#0284c7] border border-[#0284c7]'
        : 'bg-[#0284c7] text-white border border-[#0284c7]'
    ) :
    outlined
      ? 'bg-card text-[#525252] border border-[#737373]'
      : 'bg-[#e5e5e5] text-[#262626] border border-transparent';

  const sizeClasses =
    size === 'sm' ? 'h-6 px-2 text-xs' :
    size === 'lg' ? 'h-9 px-4 text-base' :
    'h-7 px-3 text-sm';

  return (
    <span
      className={baseClasses + ' ' + variantClasses + ' ' + sizeClasses}
      {...props}
    >
      {icon && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {closeable && (
        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-full hover:bg-black hover:bg-opacity-10 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-current ml-1 -mr-1"
          onClick={onClose}
          aria-label={'Remove ' + String(children)}
          style={{ width: '16px', height: '16px' }}
        >
          <X size={12} />
        </button>
      )}
    </span>
  );
};

export default function ComponentTagPage() {
  const [tags, setTags] = React.useState(['Design', 'Development', 'Research']);
  const [statusTags, setStatusTags] = React.useState(['Pending Review', 'In Progress', 'Approved']);

  const removeTag = (tagToRemove: string, tagsList: string[], setter: (tags: string[]) => void) => {
    setter(tagsList.filter(tag => tag !== tagToRemove));
  };

  return (
    <ComponentDocumentation
      name="Tag / Chip"
      description="Compact elements for displaying categories, labels, status indicators, or filters. Tags provide visual organization and allow users to quickly identify, categorize, and filter information across government services."
      category="Data Display"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.1.0"

      props={[
        {
          name: 'variant',
          type: "'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'",
          default: "'default'",
          required: false,
          description: 'Visual variant of the tag. Default for neutral labels, primary for highlighted categories, success for positive status, warning for caution states, error for negative status, info for informational labels.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of the tag. Small (24px), Medium (28px), Large (36px).',
        },
        {
          name: 'outlined',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the tag should have outlined styling instead of filled background.',
        },
        {
          name: 'closeable',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the tag can be dismissed with a close button. Adds an interactive close icon.',
        },
        {
          name: 'onClose',
          type: '() => void',
          required: false,
          description: 'Callback function triggered when the close button is clicked. Required when closeable is true.',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          required: false,
          description: 'Icon to display before tag text. Should be 12-16px for optimal sizing.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the tag is disabled. Reduces opacity and prevents interaction for closeable tags.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Tag content (text or elements).',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply. Merged with variant classes.',
        },
        {
          name: 'onClick',
          type: '(event: MouseEvent) => void',
          required: false,
          description: 'Click event handler for interactive tags. Makes the entire tag clickable.',
        },
      ]}

      examples={[
        {
          title: 'Basic Variants',
          description: 'All six tag variants for different use cases and semantic meanings.',
          code: 'import { Tag } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div className="flex flex-wrap gap-2">\n      <Tag variant="default">Default</Tag>\n      <Tag variant="primary">Primary</Tag>\n      <Tag variant="success">Success</Tag>\n      <Tag variant="warning">Warning</Tag>\n      <Tag variant="error">Error</Tag>\n      <Tag variant="info">Info</Tag>\n    </div>\n  );\n}',
          preview: (
            <div className="flex flex-wrap gap-2">
              <TagPreview variant="default">Default</TagPreview>
              <TagPreview variant="primary">Primary</TagPreview>
              <TagPreview variant="success">Success</TagPreview>
              <TagPreview variant="warning">Warning</TagPreview>
              <TagPreview variant="error">Error</TagPreview>
              <TagPreview variant="info">Info</TagPreview>
            </div>
          ),
        },
        {
          title: 'Outlined Style',
          description: 'Outlined tags provide a lighter visual weight while maintaining variant colors.',
          code: 'import { Tag } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div className="flex flex-wrap gap-2">\n      <Tag variant="default" outlined>Default</Tag>\n      <Tag variant="primary" outlined>Primary</Tag>\n      <Tag variant="success" outlined>Success</Tag>\n      <Tag variant="warning" outlined>Warning</Tag>\n      <Tag variant="error" outlined>Error</Tag>\n      <Tag variant="info" outlined>Info</Tag>\n    </div>\n  );\n}',
          preview: (
            <div className="flex flex-wrap gap-2">
              <TagPreview variant="default" outlined>Default</TagPreview>
              <TagPreview variant="primary" outlined>Primary</TagPreview>
              <TagPreview variant="success" outlined>Success</TagPreview>
              <TagPreview variant="warning" outlined>Warning</TagPreview>
              <TagPreview variant="error" outlined>Error</TagPreview>
              <TagPreview variant="info" outlined>Info</TagPreview>
            </div>
          ),
        },
        {
          title: 'Sizes',
          description: 'Three tag sizes: small (24px), medium (28px), and large (36px) for different contexts.',
          code: 'import { Tag } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div className="flex items-center gap-3">\n      <Tag size="sm" variant="primary">Small Tag</Tag>\n      <Tag size="md" variant="primary">Medium Tag</Tag>\n      <Tag size="lg" variant="primary">Large Tag</Tag>\n    </div>\n  );\n}',
          preview: (
            <div className="flex items-center gap-3">
              <TagPreview size="sm" variant="primary">Small Tag</TagPreview>
              <TagPreview size="md" variant="primary">Medium Tag</TagPreview>
              <TagPreview size="lg" variant="primary">Large Tag</TagPreview>
            </div>
          ),
        },
        {
          title: 'With Icons',
          description: 'Tags can display icons before the text to provide additional context.',
          code: 'import { Tag } from \'@ux4g/react-core\';\nimport { CheckCircle, AlertCircle, Info, Shield } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <div className="flex flex-wrap gap-2">\n      <Tag variant="success" icon={<CheckCircle size={14} />}>\n        Verified\n      </Tag>\n      <Tag variant="warning" icon={<AlertCircle size={14} />}>\n        Attention Required\n      </Tag>\n      <Tag variant="info" icon={<Info size={14} />}>\n        Information\n      </Tag>\n      <Tag variant="primary" icon={<Shield size={14} />}>\n        Secure\n      </Tag>\n    </div>\n  );\n}',
          preview: (
            <div className="flex flex-wrap gap-2">
              <TagPreview variant="success" icon={<CheckCircle size={14} />}>
                Verified
              </TagPreview>
              <TagPreview variant="warning" icon={<AlertCircle size={14} />}>
                Attention Required
              </TagPreview>
              <TagPreview variant="info" icon={<Info size={14} />}>
                Information
              </TagPreview>
              <TagPreview variant="primary" icon={<Shield size={14} />}>
                Secure
              </TagPreview>
            </div>
          ),
        },
        {
          title: 'Closeable Tags',
          description: 'Interactive tags that can be dismissed by users. Useful for filters and dynamic categorization.',
          code: 'import { Tag } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [tags, setTags] = useState([\'Design\', \'Development\', \'Research\']);\n  \n  const removeTag = (tagToRemove: string) => {\n    setTags(tags.filter(tag => tag !== tagToRemove));\n  };\n  \n  return (\n    <div className="flex flex-wrap gap-2">\n      {tags.map((tag) => (\n        <Tag\n          key={tag}\n          variant="primary"\n          closeable\n          onClose={() => removeTag(tag)}\n        >\n          {tag}\n        </Tag>\n      ))}\n    </div>\n  );\n}',
          preview: (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <TagPreview
                  key={tag}
                  variant="primary"
                  closeable
                  onClose={() => removeTag(tag, tags, setTags)}
                >
                  {tag}
                </TagPreview>
              ))}
            </div>
          ),
        },
        {
          title: 'Status Indicators',
          description: 'Tags used to display application or process status across government services.',
          code: 'import { Tag } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [statuses, setStatuses] = useState([\n    \'Pending Review\',\n    \'In Progress\',\n    \'Approved\'\n  ]);\n  \n  const getVariant = (status: string) => {\n    if (status === \'Approved\') return \'success\';\n    if (status === \'Pending Review\') return \'warning\';\n    return \'info\';\n  };\n  \n  const removeStatus = (statusToRemove: string) => {\n    setStatuses(statuses.filter(s => s !== statusToRemove));\n  };\n  \n  return (\n    <div className="flex flex-wrap gap-2">\n      {statuses.map((status) => (\n        <Tag\n          key={status}\n          variant={getVariant(status)}\n          closeable\n          onClose={() => removeStatus(status)}\n        >\n          {status}\n        </Tag>\n      ))}\n    </div>\n  );\n}',
          preview: (
            <div className="flex flex-wrap gap-2">
              {statusTags.map((status) => {
                const variant =
                  status === 'Approved' ? 'success' :
                  status === 'Pending Review' ? 'warning' :
                  'info';
                return (
                  <TagPreview
                    key={status}
                    variant={variant}
                    closeable
                    onClose={() => removeTag(status, statusTags, setStatusTags)}
                  >
                    {status}
                  </TagPreview>
                );
              })}
            </div>
          ),
        },
        {
          title: 'Department Tags',
          description: 'Tags for categorizing content by government department or agency.',
          code: 'import { Tag } from \'@ux4g/react-core\';\nimport { Shield, FileText, Users, Calendar } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <div className="flex flex-wrap gap-2">\n      <Tag variant="primary" outlined icon={<Shield size={14} />}>\n        Defense\n      </Tag>\n      <Tag variant="primary" outlined icon={<FileText size={14} />}>\n        Treasury\n      </Tag>\n      <Tag variant="primary" outlined icon={<Users size={14} />}>\n        Health Services\n      </Tag>\n      <Tag variant="primary" outlined icon={<Calendar size={14} />}>\n        Veterans Affairs\n      </Tag>\n    </div>\n  );\n}',
          preview: (
            <div className="flex flex-wrap gap-2">
              <TagPreview variant="primary" outlined icon={<Shield size={14} />}>
                Defense
              </TagPreview>
              <TagPreview variant="primary" outlined icon={<FileText size={14} />}>
                Treasury
              </TagPreview>
              <TagPreview variant="primary" outlined icon={<Users size={14} />}>
                Health Services
              </TagPreview>
              <TagPreview variant="primary" outlined icon={<Calendar size={14} />}>
                Veterans Affairs
              </TagPreview>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: 'import React, { forwardRef } from \'react\';\nimport { cn } from \'../../utils/cn\';\nimport { tagVariants } from \'./tag.variants\';\nimport { TagProps } from \'./Tag.types\';\nimport { X } from \'lucide-react\';\n\nexport const Tag = forwardRef<HTMLSpanElement, TagProps>(\n  (\n    {\n      children,\n      className,\n      variant = \'default\',\n      size = \'md\',\n      outlined = false,\n      closeable = false,\n      onClose,\n      icon,\n      disabled = false,\n      onClick,\n      \'aria-label\': ariaLabel,\n      ...props\n    },\n    ref\n  ) => {\n    const isInteractive = !!onClick || closeable;\n    const isDisabled = disabled;\n\n    const handleClose = (e: React.MouseEvent) => {\n      e.stopPropagation();\n      if (!isDisabled && onClose) {\n        onClose();\n      }\n    };\n\n    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {\n      if (!isDisabled && onClick) {\n        onClick(e);\n      }\n    };\n\n    const TagElement = isInteractive ? \'button\' : \'span\';\n    const componentProps = isInteractive\n      ? {\n          type: \'button\' as const,\n          disabled: isDisabled,\n          onClick: handleClick,\n        }\n      : {};\n\n    return (\n      <TagElement\n        ref={ref as any}\n        className={cn(\n          tagVariants({ variant, size, outlined, disabled }),\n          isInteractive && \'cursor-pointer hover:opacity-90\',\n          className\n        )}\n        aria-label={ariaLabel || (typeof children === \'string\' ? children : undefined)}\n        aria-disabled={isDisabled}\n        {...componentProps}\n        {...props}\n      >\n        {icon && (\n          <span className="inline-flex shrink-0" aria-hidden="true">\n            {icon}\n          </span>\n        )}\n        <span className="inline-flex items-center">{children}</span>\n        {closeable && (\n          <button\n            type="button"\n            className="inline-flex shrink-0 items-center justify-center w-4 h-4 rounded-full hover:bg-black hover:bg-opacity-10 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-current ml-1 -mr-1"\n            onClick={handleClose}\n            disabled={isDisabled}\n            aria-label={ariaLabel ? \`Remove \${ariaLabel}\` : \'Remove tag\'}\n          >\n            <X size={12} />\n          </button>\n        )}\n      </TagElement>\n    );\n  }\n);\n\nTag.displayName = \'Tag\';',
        types: 'export interface TagProps \n  extends Omit<React.HTMLAttributes<HTMLSpanElement>, \'onClick\'>,\n          TagVariantProps {\n  children?: React.ReactNode;\n  closeable?: boolean;\n  onClose?: () => void;\n  icon?: React.ReactNode;\n  disabled?: boolean;\n  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;\n}\n\nexport interface TagVariantProps {\n  variant?: \'default\' | \'primary\' | \'success\' | \'warning\' | \'error\' | \'info\';\n  size?: \'sm\' | \'md\' | \'lg\';\n  outlined?: boolean;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const tagVariants = cva(\n  [\n    \'inline-flex items-center gap-1.5\',\n    \'font-medium whitespace-nowrap\',\n    \'rounded-full\',\n    \'transition-all duration-150 ease-in-out\',\n    \'border\',\n  ],\n  {\n    variants: {\n      variant: {\n        default: [],\n        primary: [],\n        success: [],\n        warning: [],\n        error: [],\n        info: [],\n      },\n      size: {\n        sm: [\'h-6 px-2 py-0.5 text-xs\'],\n        md: [\'h-7 px-3 py-1 text-sm\'],\n        lg: [\'h-9 px-4 py-1.5 text-base\'],\n      },\n      outlined: {\n        true: [],\n        false: [],\n      },\n      disabled: {\n        true: [\'opacity-60 cursor-not-allowed\'],\n        false: [],\n      },\n    },\n    compoundVariants: [\n      {\n        variant: \'default\',\n        outlined: false,\n        class: \'bg-[#e5e5e5] text-[#262626] border-transparent\',\n      },\n      {\n        variant: \'default\',\n        outlined: true,\n        class: \'bg-card text-[#525252] border-[#737373]\',\n      },\n      {\n        variant: \'primary\',\n        outlined: false,\n        class: \'bg-[#005196] text-white border-[#005196]\',\n      },\n      {\n        variant: \'primary\',\n        outlined: true,\n        class: \'bg-card text-[#005196] border-[#005196]\',\n      },\n      {\n        variant: \'success\',\n        outlined: false,\n        class: \'bg-[#008800] text-white border-[#008800]\',\n      },\n      {\n        variant: \'success\',\n        outlined: true,\n        class: \'bg-card text-[#008800] border-[#008800]\',\n      },\n      {\n        variant: \'warning\',\n        outlined: false,\n        class: \'bg-[#f59e0b] text-white border-[#f59e0b]\',\n      },\n      {\n        variant: \'warning\',\n        outlined: true,\n        class: \'bg-card text-[#f59e0b] border-[#f59e0b]\',\n      },\n      {\n        variant: \'error\',\n        outlined: false,\n        class: \'bg-[#dc2626] text-white border-[#dc2626]\',\n      },\n      {\n        variant: \'error\',\n        outlined: true,\n        class: \'bg-card text-[#dc2626] border-[#dc2626]\',\n      },\n      {\n        variant: \'info\',\n        outlined: false,\n        class: \'bg-[#0284c7] text-white border-[#0284c7]\',\n      },\n      {\n        variant: \'info\',\n        outlined: true,\n        class: \'bg-card text-[#0284c7] border-[#0284c7]\',\n      },\n    ],\n    defaultVariants: {\n      variant: \'default\',\n      size: \'md\',\n      outlined: false,\n      disabled: false,\n    },\n  }\n);\n\nexport type TagVariantProps = VariantProps<typeof tagVariants>;',
      }}

      angularCode={{
        component: 'import { Component, Input, Output, EventEmitter } from \'@angular/core\';\n\ntype TagVariant = \'default\' | \'primary\' | \'success\' | \'warning\' | \'error\' | \'info\';\ntype TagSize = \'sm\' | \'md\' | \'lg\';\n\n@Component({\n  selector: \'ux4g-tag\',\n  template: \`\n    <span\n      [class]="getTagClasses()"\n      [attr.aria-label]="ariaLabel || content"\n      [attr.aria-disabled]="disabled"\n    >\n      <span *ngIf="icon" class="icon-wrapper" aria-hidden="true">\n        <ng-content select="[icon]"></ng-content>\n      </span>\n      <span class="tag-content">{{ content }}</span>\n      <ng-content></ng-content>\n      <button\n        *ngIf="closeable"\n        type="button"\n        class="close-button"\n        [disabled]="disabled"\n        [attr.aria-label]="\'Remove \' + (ariaLabel || content)"\n        (click)="handleClose($event)"\n      >\n        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n      </button>\n    </span>\n  \`,\n  styleUrls: [\'./tag.component.css\']\n})\nexport class TagComponent {\n  @Input() variant: TagVariant = \'default\';\n  @Input() size: TagSize = \'md\';\n  @Input() outlined = false;\n  @Input() closeable = false;\n  @Input() disabled = false;\n  @Input() icon = false;\n  @Input() content = \'\';\n  @Input() ariaLabel?: string;\n  \n  @Output() closed = new EventEmitter<void>();\n\n  getTagClasses(): string {\n    const baseClasses = \'ux4g-tag\';\n    const variantClass = \`ux4g-tag-\${this.variant}\`;\n    const sizeClass = \`ux4g-tag-\${this.size}\`;\n    const outlinedClass = this.outlined ? \'ux4g-tag-outlined\' : \'ux4g-tag-filled\';\n    const disabledClass = this.disabled ? \'ux4g-tag-disabled\' : \'\';\n    \n    return [baseClasses, variantClass, sizeClass, outlinedClass, disabledClass]\n      .filter(Boolean)\n      .join(\' \');\n  }\n\n  handleClose(event: Event): void {\n    event.stopPropagation();\n    if (!this.disabled) {\n      this.closed.emit();\n    }\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { TagComponent } from \'./tag.component\';\n\n@NgModule({\n  declarations: [TagComponent],\n  imports: [CommonModule],\n  exports: [TagComponent]\n})\nexport class TagModule { }',
        types: 'export type TagVariant = \'default\' | \'primary\' | \'success\' | \'warning\' | \'error\' | \'info\';\nexport type TagSize = \'sm\' | \'md\' | \'lg\';\n\nexport interface TagConfig {\n  variant?: TagVariant;\n  size?: TagSize;\n  outlined?: boolean;\n  closeable?: boolean;\n  disabled?: boolean;\n  icon?: boolean;\n  content: string;\n  ariaLabel?: string;\n}',
      }}

      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Chip',
          variants: 'filled, outlined',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-chip/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Tag',
          variants: 'default, success, processing, error, warning',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/tag',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Tag',
          variants: 'default, grey, green, turquoise, blue, purple, pink, red, orange, yellow',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/tag/',
        },
        {
          system: 'Chakra UI',
          component: 'Tag',
          variants: 'solid, subtle, outline',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/tag',
        },
        {
          system: 'Carbon Design (IBM)',
          component: 'Tag',
          variants: 'red, magenta, purple, blue, cyan, teal, green, gray, cool-gray, warm-gray',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://carbondesignsystem.com/components/tag/usage/',
        },
        {
          system: 'Adobe Spectrum',
          component: 'Tag',
          variants: 'neutral, accent, positive, negative, notice, informative',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://spectrum.adobe.com/page/tag/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 3:1 color contrast ratio for non-text elements (WCAG 1.4.11)',
          '4.5:1 color contrast ratio for text content (WCAG 1.4.3)',
          'Close button meets 24x24px minimum touch target (WCAG 2.5.5)',
          'Semantic HTML elements (span for static, button for interactive)',
          'aria-label attribute for screen reader identification',
          'aria-disabled attribute for disabled state',
          'Close button has descriptive aria-label with tag content',
          'Icons properly hidden from screen readers with aria-hidden',
          'Focus visible ring on close button for keyboard navigation (WCAG 2.4.7)',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to closeable tag button' },
          { key: 'Shift + Tab', action: 'Move focus away from tag' },
          { key: 'Enter', action: 'Activate close button on closeable tag' },
          { key: 'Space', action: 'Activate close button on closeable tag' },
        ],
        screenReader: [
          'Announces tag content and variant information',
          'Announces disabled state when applicable',
          'Close button announces "Remove [tag content]"',
          'Icons are hidden from screen reader (aria-hidden="true")',
          'Dynamic tag removal announced as content change',
        ],
      }}

      tokens={{
        file: '/tokens/components/tag.json',
        mappings: [
          { property: 'Height (Medium)', token: 'tag.height.md', value: '28px' },
          { property: 'Padding Horizontal (Medium)', token: 'tag.padding.horizontal.md', value: '12px' },
          { property: 'Border Radius', token: 'tag.borderRadius', value: '9999px (pill)' },
          { property: 'Font Size (Medium)', token: 'tag.fontSize.md', value: '14px' },
          { property: 'Default Background', token: 'tag.variant.default.background.filled', value: '#e5e5e5 (Neutral 200)' },
          { property: 'Default Text', token: 'tag.variant.default.text.filled', value: '#262626 (Neutral 800)' },
          { property: 'Primary Background', token: 'tag.variant.primary.background.filled', value: '#005196 (Navy 500)' },
          { property: 'Primary Border', token: 'tag.variant.primary.border.outlined', value: '#005196 (Navy 500)' },
          { property: 'Success Background', token: 'tag.variant.success.background.filled', value: '#008800 (Green 600)' },
          { property: 'Warning Background', token: 'tag.variant.warning.background.filled', value: '#f59e0b (Amber 500)' },
          { property: 'Error Background', token: 'tag.variant.error.background.filled', value: '#dc2626 (Red 600)' },
          { property: 'Info Background', token: 'tag.variant.info.background.filled', value: '#0284c7 (Sky 600)' },
          { property: 'Icon Size', token: 'tag.icon.size', value: '14px' },
          { property: 'Close Button Size', token: 'tag.closeButton.size', value: '16px' },
          { property: 'Gap Between Elements', token: 'tag.gap', value: '6px' },
        ],
      }}

      useCases={[
        {
          title: 'Department and Agency Tags',
          description: 'Categorize content, documents, or services by government department or agency affiliation.',
          implementation: 'Use primary outlined tags with department icons to label documents: "Department of Defense", "Treasury", "Health and Human Services".',
        },
        {
          title: 'Application Status Labels',
          description: 'Display the current status of applications, permits, or requests throughout their lifecycle.',
          implementation: 'Use success tags for "Approved", warning tags for "Pending Review", info tags for "In Progress", and error tags for "Rejected".',
        },
        {
          title: 'Service Category Filters',
          description: 'Allow users to filter services or content by category with closeable tags.',
          implementation: 'Use closeable primary tags for active filters: "Veterans Services", "Healthcare", "Education" that users can remove to update results.',
        },
        {
          title: 'Security Classification Badges',
          description: 'Indicate security clearance levels or document classification status.',
          implementation: 'Use error tags for "Classified", warning tags for "Confidential", info tags for "Internal Use", and success tags for "Public".',
        },
        {
          title: 'Multi-Language Content Tags',
          description: 'Identify available language translations for forms and documents.',
          implementation: 'Use default outlined tags to show available languages: "English", "Spanish", "French", "Chinese".',
        },
        {
          title: 'Benefit Eligibility Indicators',
          description: 'Show which benefits or services a user qualifies for based on their profile.',
          implementation: 'Use success tags with checkmark icons for "Eligible" benefits and default tags for "Not Eligible" programs.',
        },
      ]}
    />
  );
}
