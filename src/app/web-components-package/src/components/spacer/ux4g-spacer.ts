/**
 * UX4G Spacer Web Component
 * 
 * @element ux4g-spacer
 * 
 * @attr {string} size - Spacing size: xs, sm, md, lg, xl, 2xl, 3xl
 * @attr {string} direction - Spacing direction: vertical, horizontal, both
 * 
 * @example
 * ```html
 * <ux4g-spacer size="lg" direction="vertical"></ux4g-spacer>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GSpacer extends UX4GElement {
  static get observedAttributes() {
    return ['size', 'direction'];
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
    const size = this.getAttributeOrDefault('size', 'md');
    const direction = this.getAttributeOrDefault('direction', 'vertical');

    // Clear previous content
    this.root.innerHTML = '';

    // Create spacer
    const spacer = this.createElement('div', [
      'ux4g-spacer',
      `ux4g-spacer-${size}`,
      `ux4g-spacer-${direction}`,
    ]);

    spacer.setAttribute('aria-hidden', 'true');

    this.root.appendChild(spacer);
  }

  /**
   * Set size
   */
  set size(value: string) {
    this.setAttribute('size', value);
  }

  get size(): string {
    return this.getAttributeOrDefault('size', 'md');
  }
}

// Define the custom element
if (!customElements.get('ux4g-spacer')) {
  customElements.define('ux4g-spacer', UX4GSpacer);
}
