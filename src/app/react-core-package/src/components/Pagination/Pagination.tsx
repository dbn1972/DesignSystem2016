/**
 * Pagination Component
 * Page navigation controls
 *
 * @example
 * ```tsx
 * <Pagination
 *   totalPages={10}
 *   value={currentPage}
 *   onChange={setCurrentPage}
 * />
 * ```
 */

import React, { useState, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { PaginationProps } from './Pagination.types';

export function Pagination({
  totalPages,
  value: controlledValue,
  defaultValue = 1,
  onChange,
  siblingCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  variant = 'default',
  disabled = false,
  showPageInfo = false,
  labels = {},
  className,
  ...props
}: PaginationProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const currentPage = controlledValue ?? internalValue;
  const isControlled = controlledValue !== undefined;

  const {
    first = 'First',
    previous = 'Previous',
    next = 'Next',
    last = 'Last',
    pageInfo = (current: number, total: number) => `Page ${current} of ${total}`,
  } = labels;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage || disabled) {
      return;
    }

    if (!isControlled) {
      setInternalValue(page);
    }
    onChange?.(page);
  };

  // Generate page numbers to display
  const pageNumbers = useMemo(() => {
    const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({ length }, (_, i) => start + i);
    };

    const totalNumbers = siblingCount * 2 + 3; // siblings + current + first + last
    const totalBlocks = totalNumbers + 2; // + 2 ellipsis

    if (totalPages <= totalBlocks) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftEllipsis = leftSiblingIndex > 2;
    const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, 'ellipsis-right', totalPages];
    }

    if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [1, 'ellipsis-left', ...rightRange];
    }

    if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, 'ellipsis-left', ...middleRange, 'ellipsis-right', totalPages];
    }

    return range(1, totalPages);
  }, [currentPage, totalPages, siblingCount]);

  return (
    <nav
      className={cn('ux4g-pagination', `ux4g-pagination-${variant}`, className)}
      aria-label="Pagination"
      {...props}
    >
      <ul className="ux4g-pagination-list">
        {showFirstLast && (
          <li>
            <button
              type="button"
              className="ux4g-pagination-button ux4g-pagination-first"
              onClick={() => handlePageChange(1)}
              disabled={disabled || currentPage === 1}
              aria-label="Go to first page"
            >
              {first}
            </button>
          </li>
        )}

        {showPrevNext && (
          <li>
            <button
              type="button"
              className="ux4g-pagination-button ux4g-pagination-prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={disabled || currentPage === 1}
              aria-label="Go to previous page"
            >
              {previous}
            </button>
          </li>
        )}

        {pageNumbers.map((pageNumber, index) => {
          if (typeof pageNumber === 'string' && pageNumber.startsWith('ellipsis')) {
            return (
              <li key={pageNumber}>
                <span className="ux4g-pagination-ellipsis" aria-hidden="true">
                  ...
                </span>
              </li>
            );
          }

          const page = pageNumber as number;
          const isCurrent = page === currentPage;

          return (
            <li key={page}>
              <button
                type="button"
                className={cn(
                  'ux4g-pagination-button',
                  'ux4g-pagination-page',
                  isCurrent && 'ux4g-pagination-page-active'
                )}
                onClick={() => handlePageChange(page)}
                disabled={disabled}
                aria-label={`Go to page ${page}`}
                aria-current={isCurrent ? 'page' : undefined}
              >
                {page}
              </button>
            </li>
          );
        })}

        {showPrevNext && (
          <li>
            <button
              type="button"
              className="ux4g-pagination-button ux4g-pagination-next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={disabled || currentPage === totalPages}
              aria-label="Go to next page"
            >
              {next}
            </button>
          </li>
        )}

        {showFirstLast && (
          <li>
            <button
              type="button"
              className="ux4g-pagination-button ux4g-pagination-last"
              onClick={() => handlePageChange(totalPages)}
              disabled={disabled || currentPage === totalPages}
              aria-label="Go to last page"
            >
              {last}
            </button>
          </li>
        )}
      </ul>

      {showPageInfo && (
        <div className="ux4g-pagination-info" aria-live="polite">
          {pageInfo(currentPage, totalPages)}
        </div>
      )}
    </nav>
  );
}

Pagination.displayName = 'Pagination';
