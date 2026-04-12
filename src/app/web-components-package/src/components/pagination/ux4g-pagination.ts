/**
 * UX4G Pagination Web Component
 * 
 * @element ux4g-pagination
 * 
 * @attr {number} current - Current page number (1-based)
 * @attr {number} total - Total number of pages
 * @attr {number} siblings - Number of sibling pages to show on each side
 * @attr {boolean} show-edges - Show first/last page buttons
 * @attr {string} size - Pagination size: sm, md, lg
 * 
 * @fires ux4g-page-change - Fired when page changes
 * 
 * @example
 * ```html
 * <ux4g-pagination current="1" total="10" siblings="1" show-edges></ux4g-pagination>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GPagination extends UX4GElement {
  static get observedAttributes() {
    return ['current', 'total', 'siblings', 'show-edges', 'size'];
  }

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const current = parseInt(this.getAttribute('current') || '1');
    const total = parseInt(this.getAttribute('total') || '1');
    const siblings = parseInt(this.getAttribute('siblings') || '1');
    const showEdges = this.getBooleanAttribute('show-edges');
    const size = this.getAttributeOrDefault('size', 'md');

    // Clear previous content
    this.root.innerHTML = '';

    // Create pagination container
    const pagination = this.createElement('nav', ['ux4g-pagination', `ux4g-pagination-${size}`]);
    pagination.setAttribute('role', 'navigation');
    pagination.setAttribute('aria-label', 'Pagination');

    const list = this.createElement('ul', ['ux4g-pagination-list']);

    // Previous button
    const prevButton = this.createPageButton('Previous', current - 1, current <= 1);
    prevButton.innerHTML = '‹';
    list.appendChild(prevButton);

    // First page (if show-edges)
    if (showEdges && current > siblings + 2) {
      list.appendChild(this.createPageButton('1', 1, false));
      if (current > siblings + 3) {
        list.appendChild(this.createEllipsis());
      }
    }

    // Page numbers
    const pages = this.getPageNumbers(current, total, siblings);
    pages.forEach(page => {
      list.appendChild(this.createPageButton(String(page), page, false, page === current));
    });

    // Last page (if show-edges)
    if (showEdges && current < total - siblings - 1) {
      if (current < total - siblings - 2) {
        list.appendChild(this.createEllipsis());
      }
      list.appendChild(this.createPageButton(String(total), total, false));
    }

    // Next button
    const nextButton = this.createPageButton('Next', current + 1, current >= total);
    nextButton.innerHTML = '›';
    list.appendChild(nextButton);

    pagination.appendChild(list);
    this.root.appendChild(pagination);
  }

  private getPageNumbers(current: number, total: number, siblings: number): number[] {
    const pages: number[] = [];
    const start = Math.max(1, current - siblings);
    const end = Math.min(total, current + siblings);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  private createPageButton(label: string, page: number, disabled: boolean, active = false): HTMLElement {
    const item = this.createElement('li', ['ux4g-pagination-item']);
    const button = this.createElement('button', [
      'ux4g-pagination-button',
      active ? 'ux4g-pagination-active' : '',
      disabled ? 'ux4g-pagination-disabled' : '',
    ].filter(Boolean));

    button.textContent = label;
    button.disabled = disabled;
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', `Go to page ${page}`);
    
    if (active) {
      button.setAttribute('aria-current', 'page');
    }

    if (!disabled) {
      button.addEventListener('click', () => {
        this.goToPage(page);
      });
    }

    item.appendChild(button);
    return item;
  }

  private createEllipsis(): HTMLElement {
    const item = this.createElement('li', ['ux4g-pagination-item']);
    const ellipsis = this.createElement('span', ['ux4g-pagination-ellipsis']);
    ellipsis.textContent = '...';
    ellipsis.setAttribute('aria-hidden', 'true');
    item.appendChild(ellipsis);
    return item;
  }

  /**
   * Go to specific page
   */
  goToPage(page: number): void {
    const total = parseInt(this.getAttribute('total') || '1');
    
    if (page < 1 || page > total) {
      return;
    }

    this.setAttribute('current', String(page));
    this.dispatchCustomEvent('ux4g-page-change', { page });
  }

  /**
   * Go to next page
   */
  nextPage(): void {
    const current = parseInt(this.getAttribute('current') || '1');
    this.goToPage(current + 1);
  }

  /**
   * Go to previous page
   */
  prevPage(): void {
    const current = parseInt(this.getAttribute('current') || '1');
    this.goToPage(current - 1);
  }

  /**
   * Set current page
   */
  set current(value: number) {
    this.setAttribute('current', String(value));
  }

  get current(): number {
    return parseInt(this.getAttribute('current') || '1');
  }

  /**
   * Set total pages
   */
  set total(value: number) {
    this.setAttribute('total', String(value));
  }

  get total(): number {
    return parseInt(this.getAttribute('total') || '1');
  }
}

// Define the custom element
if (!customElements.get('ux4g-pagination')) {
  customElements.define('ux4g-pagination', UX4GPagination);
}
