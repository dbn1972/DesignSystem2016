/**
 * UX4G Description List Web Component
 * 
 * @element ux4g-description-list
 * 
 * @attr {string} layout - Layout: horizontal, vertical
 * @attr {boolean} bordered - Show borders
 * @attr {string} size - Size: sm, md, lg
 * 
 * @example
 * ```html
 * <ux4g-description-list layout="horizontal" bordered>
 *   <ux4g-description-item label="Name">John Doe</ux4g-description-item>
 *   <ux4g-description-item label="Email">john@example.com</ux4g-description-item>
 *   <ux4g-description-item label="Phone">+91 98765 43210</ux4g-description-item>
 * </ux4g-description-list>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GDescriptionList extends UX4GElement {
  static get observedAttributes() {
    return ['layout', 'bordered', 'size'];
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
    const layout = this.getAttributeOrDefault('layout', 'horizontal');
    const bordered = this.getBooleanAttribute('bordered');
    const size = this.getAttributeOrDefault('size', 'md');

    // Clear previous content
    this.root.innerHTML = '';

    // Create description list
    const list = this.createElement('dl', [
      'ux4g-description-list',
      `ux4g-description-list-${layout}`,
      `ux4g-description-list-${size}`,
      bordered ? 'ux4g-description-list-bordered' : '',
    ].filter(Boolean));

    const slot = document.createElement('slot');
    list.appendChild(slot);

    this.root.appendChild(list);
  }

  /**
   * Set layout
   */
  set layout(value: string) {
    this.setAttribute('layout', value);
  }

  get layout(): string {
    return this.getAttributeOrDefault('layout', 'horizontal');
  }
}

// Description Item Component
export class UX4GDescriptionItem extends UX4GElement {
  static get observedAttributes() {
    return ['label', 'span'];
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
    const label = this.getAttribute('label') || '';
    const span = this.getAttribute('span');

    // Clear previous content
    this.root.innerHTML = '';

    // Create wrapper
    const wrapper = this.createElement('div', [
      'ux4g-description-item',
      span ? `ux4g-description-item-span-${span}` : '',
    ].filter(Boolean));

    // Term (label)
    const term = this.createElement('dt', ['ux4g-description-term']);
    term.textContent = label;
    wrapper.appendChild(term);

    // Definition (content)
    const definition = this.createElement('dd', ['ux4g-description-detail']);
    const slot = document.createElement('slot');
    definition.appendChild(slot);
    wrapper.appendChild(definition);

    this.root.appendChild(wrapper);
  }

  /**
   * Set label
   */
  set label(value: string) {
    this.setAttribute('label', value);
  }

  get label(): string {
    return this.getAttribute('label') || '';
  }
}

// Define the custom elements
if (!customElements.get('ux4g-description-list')) {
  customElements.define('ux4g-description-list', UX4GDescriptionList);
}

if (!customElements.get('ux4g-description-item')) {
  customElements.define('ux4g-description-item', UX4GDescriptionItem);
}
