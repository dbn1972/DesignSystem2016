/**
 * UX4G Breadcrumb Web Component
 * 
 * @element ux4g-breadcrumb
 * 
 * @attr {string} separator - Breadcrumb separator: /, >, →, or custom text
 * @attr {number} max-items - Maximum number of items to show (with collapse)
 * 
 * @fires ux4g-breadcrumb-click - Fired when breadcrumb item is clicked
 * 
 * @example
 * ```html
 * <ux4g-breadcrumb separator="/">
 *   <ux4g-breadcrumb-item href="/">Home</ux4g-breadcrumb-item>
 *   <ux4g-breadcrumb-item href="/services">Services</ux4g-breadcrumb-item>
 *   <ux4g-breadcrumb-item active>Current Page</ux4g-breadcrumb-item>
 * </ux4g-breadcrumb>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GBreadcrumb extends UX4GElement {
  static get observedAttributes() {
    return ['separator', 'max-items'];
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
    const separator = this.getAttributeOrDefault('separator', '/');

    // Clear previous content
    this.root.innerHTML = '';

    // Create breadcrumb nav
    const nav = this.createElement('nav', ['ux4g-breadcrumb']);
    nav.setAttribute('aria-label', 'Breadcrumb');

    const list = this.createElement('ol', ['ux4g-breadcrumb-list']);
    list.setAttribute('role', 'list');

    // Add separator data attribute for CSS
    list.setAttribute('data-separator', separator);

    // Slot for breadcrumb items
    const slot = document.createElement('slot');
    list.appendChild(slot);

    nav.appendChild(list);
    this.root.appendChild(nav);
  }

  /**
   * Set separator
   */
  set separator(value: string) {
    this.setAttribute('separator', value);
  }

  get separator(): string {
    return this.getAttributeOrDefault('separator', '/');
  }
}

// Breadcrumb Item Component
export class UX4GBreadcrumbItem extends UX4GElement {
  static get observedAttributes() {
    return ['href', 'active'];
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
    const href = this.getAttribute('href');
    const active = this.getBooleanAttribute('active');

    // Clear previous content
    this.root.innerHTML = '';

    // Create list item
    const item = this.createElement('li', [
      'ux4g-breadcrumb-item',
      active ? 'ux4g-breadcrumb-item-active' : '',
    ].filter(Boolean));

    if (active) {
      item.setAttribute('aria-current', 'page');
    }

    if (href && !active) {
      // Create link
      const link = this.createElement('a', ['ux4g-breadcrumb-link']);
      link.setAttribute('href', href);
      
      const slot = document.createElement('slot');
      link.appendChild(slot);

      link.addEventListener('click', (e) => {
        this.dispatchCustomEvent('ux4g-breadcrumb-click', {
          href,
          originalEvent: e,
        });
      });

      item.appendChild(link);
    } else {
      // Create text span
      const span = this.createElement('span', ['ux4g-breadcrumb-text']);
      const slot = document.createElement('slot');
      span.appendChild(slot);
      item.appendChild(span);
    }

    this.root.appendChild(item);
  }

  /**
   * Set href
   */
  set href(value: string) {
    this.setAttribute('href', value);
  }

  get href(): string {
    return this.getAttribute('href') || '';
  }

  /**
   * Set active state
   */
  set active(value: boolean) {
    this.setBooleanAttribute('active', value);
  }

  get active(): boolean {
    return this.getBooleanAttribute('active');
  }
}

// Define the custom elements
if (!customElements.get('ux4g-breadcrumb')) {
  customElements.define('ux4g-breadcrumb', UX4GBreadcrumb);
}

if (!customElements.get('ux4g-breadcrumb-item')) {
  customElements.define('ux4g-breadcrumb-item', UX4GBreadcrumbItem);
}
