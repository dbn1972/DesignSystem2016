/**
 * UX4G Container Web Component
 * 
 * @element ux4g-container
 * 
 * @attr {string} size - Container max-width: sm, md, lg, xl, full
 * @attr {boolean} fluid - Full width container
 * 
 * @slot - Default slot for container content
 * 
 * @example
 * ```html
 * <ux4g-container size="lg">
 *   <p>Content goes here</p>
 * </ux4g-container>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GContainer extends UX4GElement {
  static get observedAttributes() {
    return ['size', 'fluid'];
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
    const size = this.getAttributeOrDefault('size', 'lg');
    const fluid = this.getBooleanAttribute('fluid');

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', [
      'ux4g-container',
      fluid ? 'ux4g-container-fluid' : `ux4g-container-${size}`,
    ].filter(Boolean));

    const slot = document.createElement('slot');
    container.appendChild(slot);

    this.root.appendChild(container);
  }

  /**
   * Set size
   */
  set size(value: string) {
    this.setAttribute('size', value);
  }

  get size(): string {
    return this.getAttributeOrDefault('size', 'lg');
  }
}

// Define the custom element
if (!customElements.get('ux4g-container')) {
  customElements.define('ux4g-container', UX4GContainer);
}
