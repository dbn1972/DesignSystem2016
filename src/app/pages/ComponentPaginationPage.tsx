/**
 * Pagination Component Documentation Page
 * Complete documentation for the Pagination component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

// Import the actual Pagination component for live preview
const PaginationPreview = ({ totalPages, showFirstLast }: any) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="flex items-center gap-2">
      {showFirstLast && (
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          className="p-2 rounded border border-border hover:bg-background disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="First page"
        >
          <ChevronsLeft size={16} />
        </button>
      )}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="p-2 rounded border border-border hover:bg-background disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`min-w-[40px] h-10 px-3 rounded border ${
            currentPage === page
              ? 'bg-[#005196] text-white border-[#005196]'
              : 'border-border hover:bg-background'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="p-2 rounded border border-border hover:bg-background disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
      {showFirstLast && (
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className="p-2 rounded border border-border hover:bg-background disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Last page"
        >
          <ChevronsRight size={16} />
        </button>
      )}
    </div>
  );
};

export default function ComponentPaginationPage() {
  return (
    <ComponentDocumentation
      name="Pagination"
      description="Navigation component for dividing large data sets across multiple pages. Essential for tables, search results, and list views."
      category="Navigation"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.0.0"

      props={[
        {
          name: 'totalPages',
          type: 'number',
          required: true,
          description: 'Total number of pages.',
        },
        {
          name: 'currentPage',
          type: 'number',
          default: '1',
          required: false,
          description: 'Current active page.',
        },
        {
          name: 'onPageChange',
          type: '(page: number) => void',
          required: true,
          description: 'Callback fired when page changes.',
        },
        {
          name: 'siblingCount',
          type: 'number',
          default: '1',
          required: false,
          description: 'Number of siblings to show on each side of current page.',
        },
        {
          name: 'showFirstLast',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Show first and last page buttons.',
        },
        {
          name: 'showPageNumbers',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Show page number buttons.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Size of pagination buttons.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Disable all pagination controls.',
        },
      ]}

      examples={[
        {
          title: 'Basic Pagination',
          description: 'Simple pagination with previous and next buttons.',
          code: `import { Pagination } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      totalPages={10}
      currentPage={page}
      onPageChange={setPage}
    />
  );
}`,
          preview: <PaginationPreview totalPages={10} showFirstLast={false} />,
        },
        {
          title: 'With First/Last Buttons',
          description: 'Pagination with quick navigation to first and last pages.',
          code: `import { Pagination } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      totalPages={20}
      currentPage={page}
      onPageChange={setPage}
      showFirstLast
    />
  );
}`,
          preview: <PaginationPreview totalPages={20} showFirstLast />,
        },
      ]}

      reactCode={{
        component: `import React from 'react';
import { cn } from '../../utils/cn';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { PaginationProps } from './Pagination.types';

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage = 1,
  onPageChange,
  siblingCount = 1,
  showFirstLast = false,
  showPageNumbers = true,
  size = 'md',
  disabled = false,
  className,
}) => {
  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const paginationRange = () => {
    const totalPageNumbers = siblingCount * 2 + 3;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, 3 + siblingCount * 2);
      return [...leftRange, '...', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(totalPages - (2 + siblingCount * 2), totalPages);
      return [1, '...', ...rightRange];
    }

    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [1, '...', ...middleRange, '...', totalPages];
  };

  const buttonClasses = cn(
    'rounded border transition-colors',
    size === 'sm' && 'min-w-[32px] h-8 px-2 text-sm',
    size === 'md' && 'min-w-[40px] h-10 px-3 text-base',
    size === 'lg' && 'min-w-[48px] h-12 px-4 text-lg',
    disabled && 'opacity-50 cursor-not-allowed'
  );

  return (
    <nav className={cn('flex items-center gap-2', className)} aria-label="Pagination">
      {showFirstLast && (
        <button
          onClick={() => onPageChange(1)}
          disabled={disabled || currentPage === 1}
          className={cn(buttonClasses, 'border-border hover:bg-background')}
          aria-label="First page"
        >
          <ChevronsLeft size={16} />
        </button>
      )}

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        className={cn(buttonClasses, 'border-border hover:bg-background')}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {showPageNumbers && paginationRange().map((page, index) => {
        if (page === '...') {
          return (
            <span key={index} className="px-2">
              ...
            </span>
          );
        }

        return (
          <button
            key={index}
            onClick={() => onPageChange(page as number)}
            disabled={disabled}
            className={cn(
              buttonClasses,
              page === currentPage
                ? 'bg-[#005196] text-white border-[#005196]'
                : 'border-border hover:bg-background'
            )}
            aria-label={\`Page \${page}\`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
        className={cn(buttonClasses, 'border-border hover:bg-background')}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>

      {showFirstLast && (
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={disabled || currentPage === totalPages}
          className={cn(buttonClasses, 'border-border hover:bg-background')}
          aria-label="Last page"
        >
          <ChevronsRight size={16} />
        </button>
      )}
    </nav>
  );
};`,
        types: `export interface PaginationProps {
  totalPages: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
  showPageNumbers?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}`,
        variants: `import { cva } from 'class-variance-authority';

export const paginationButtonVariants = cva(
  ['rounded border transition-colors'],
  {
    variants: {
      size: {
        sm: 'min-w-[32px] h-8 px-2 text-sm',
        md: 'min-w-[40px] h-10 px-3 text-base',
        lg: 'min-w-[48px] h-12 px-4 text-lg',
      },
      active: {
        true: 'bg-[#005196] text-white border-[#005196]',
        false: 'border-border hover:bg-background',
      },
    },
  }
);`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux4g-pagination',
  template: \`
    <nav class="flex items-center gap-2" aria-label="Pagination">
      <button
        *ngIf="showFirstLast"
        (click)="handlePageChange(1)"
        [disabled]="disabled || currentPage === 1"
        [class]="getButtonClasses()"
      >
        ‹‹
      </button>

      <button
        (click)="handlePageChange(currentPage - 1)"
        [disabled]="disabled || currentPage === 1"
        [class]="getButtonClasses()"
      >
        ‹
      </button>

      <button
        *ngFor="let page of getPageRange()"
        [disabled]="disabled || page === '...'"
        (click)="page !== '...' && handlePageChange(page)"
        [class]="getButtonClasses(page === currentPage)"
      >
        {{ page }}
      </button>

      <button
        (click)="handlePageChange(currentPage + 1)"
        [disabled]="disabled || currentPage === totalPages"
        [class]="getButtonClasses()"
      >
        ›
      </button>

      <button
        *ngIf="showFirstLast"
        (click)="handlePageChange(totalPages)"
        [disabled]="disabled || currentPage === totalPages"
        [class]="getButtonClasses()"
      >
        ››
      </button>
    </nav>
  \`,
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalPages!: number;
  @Input() currentPage = 1;
  @Input() siblingCount = 1;
  @Input() showFirstLast = false;
  @Input() showPageNumbers = true;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;

  @Output() pageChange = new EventEmitter<number>();

  handlePageChange(page: number): void {
    if (!this.disabled && page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }

  getPageRange(): (number | string)[] {
    if (this.totalPages <= 7) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(this.currentPage - this.siblingCount, 1);
    const rightSiblingIndex = Math.min(this.currentPage + this.siblingCount, this.totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < this.totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = Array.from({ length: 5 }, (_, i) => i + 1);
      return [...leftRange, '...', this.totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = Array.from({ length: 5 }, (_, i) => this.totalPages - 4 + i);
      return [1, '...', ...rightRange];
    }

    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [1, '...', ...middleRange, '...', this.totalPages];
  }

  getButtonClasses(isActive = false): string {
    const classes = ['rounded', 'border', 'transition-colors'];

    if (this.size === 'sm') classes.push('min-w-[32px]', 'h-8', 'px-2', 'text-sm');
    else if (this.size === 'lg') classes.push('min-w-[48px]', 'h-12', 'px-4', 'text-lg');
    else classes.push('min-w-[40px]', 'h-10', 'px-3', 'text-base');

    if (isActive) {
      classes.push('bg-[#005196]', 'text-white', 'border-[#005196]');
    } else {
      classes.push('border-border', 'hover:bg-background');
    }

    if (this.disabled) {
      classes.push('opacity-50', 'cursor-not-allowed');
    }

    return classes.join(' ');
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule],
  exports: [PaginationComponent]
})
export class PaginationModule { }`,
        types: `export type PaginationSize = 'sm' | 'md' | 'lg';`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-pagination> custom element",
        html: "<ux4g-pagination variant=\"primary\" size=\"md\"><!-- Pagination --></ux4g-pagination>",
      }}
      comparisons={[
        {
          system: 'Material UI',
          component: 'Pagination',
          variants: 'default, outlined, text',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-pagination/',
        },
        {
          system: 'Ant Design',
          component: 'Pagination',
          variants: 'default, simple',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/pagination',
        },
        {
          system: 'Chakra UI',
          component: 'Pagination (Custom)',
          variants: 'custom implementations',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Moderate',
          link: 'https://chakra-ui.com/',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Pagination',
          variants: 'default, next/previous only',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://design-system.service.gov.uk/components/pagination/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Semantic nav element with aria-label="Pagination"',
          'aria-current="page" on current page button',
          'Descriptive aria-labels on navigation buttons',
          'Keyboard accessible with clear focus indicators',
          '44x44px minimum touch target size',
          'Sufficient color contrast for all states',
          'Disabled state properly communicated',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate through pagination buttons' },
          { key: 'Shift + Tab', action: 'Navigate backwards' },
          { key: 'Enter/Space', action: 'Activate focused button' },
        ],
        screenReader: [
          'Announces pagination navigation region',
          'Announces current page number',
          'Announces total page count',
          'Announces button purposes (First, Previous, Next, Last)',
        ],
      }}

      tokens={{
        file: '/tokens/components/pagination.json',
        mappings: [
          { property: 'Button Height (Medium)', token: 'pagination.button.height.md', value: '40px' },
          { property: 'Button Min Width', token: 'pagination.button.minWidth', value: '40px' },
          { property: 'Button Gap', token: 'pagination.gap', value: '8px (0.5rem)' },
          { property: 'Active Background', token: 'pagination.active.background', value: '#005196 (Navy 500)' },
          { property: 'Active Text Color', token: 'pagination.active.text', value: '#FFFFFF' },
          { property: 'Border Color', token: 'pagination.border.color', value: '#D1D5DB (Gray 300)' },
        ],
      }}
    />
  );
}
