/**
 * UX4G List Web Component
 * 
 * @element ux4g-list
 * 
 * @attr {string} variant - List variant: default, bordered, striped
 * @attr {boolean} hoverable - Add hover effect on items
 * 
 * @example
 * ```html
 * <ux4g-list variant="bordered" hoverable>
 *   <ux4g-list-item>First item</ux4g-list-item>
 *   <ux4g-list-item>Second item</ux4g-list-item>
 *   <ux4g-list-item>Third item</ux4g-list-item>
 * </ux4g-list>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GList extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'hoverable'];
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
    const variant = this.getAttributeOrDefault('variant', 'default');
    const hoverable = this.getBooleanAttribute('hoverable');

    // Clear previous content
    this.root.innerHTML = '';

    // Create list
    const list = this.createElement('ul', [
      'ux4g-list',
      `ux4g-list-${variant}`,
      hoverable ? 'ux4g-list-hoverable' : '',
    ].filter(Boolean));

    list.setAttribute('role', 'list');

    const slot = document.createElement('slot');
    list.appendChild(slot);

    this.root.appendChild(list);
  }

  /**
   * Set variant
   */
  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get variant(): string {
    return this.getAttributeOrDefault('variant', 'default');
  }
}

// List Item Component
export class UX4GListItem extends UX4GElement {
  static get observedAttributes() {
    return ['active', 'disabled'];
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
    const active = this.getBooleanAttribute('active');
    const disabled = this.getBooleanAttribute('disabled');

    // Clear previous content
    this.root.innerHTML = '';

    // Create list item
    const item = this.createElement('li', [
      'ux4g-list-item',
      active ? 'ux4g-list-item-active' : '',
      disabled ? 'ux4g-list-item-disabled' : '',
    ].filter(Boolean));

    item.setAttribute('role', 'listitem');

    const slot = document.createElement('slot');
    item.appendChild(slot);

    this.root.appendChild(item);
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
if (!customElements.get('ux4g-list')) {
  customElements.define('ux4g-list', UX4GList);
}

if (!customElements.get('ux4g-list-item')) {
  customElements.define('ux4g-list-item', UX4GListItem);
}
