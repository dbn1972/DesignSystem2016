/**
 * UX4G Center Web Component
 * 
 * @element ux4g-center
 * 
 * @attr {boolean} inline - Use inline-flex instead of flex
 * @attr {string} axis - Centering axis: both, horizontal, vertical
 * 
 * @slot - Default slot for centered content
 * 
 * @example
 * ```html
 * <ux4g-center axis="both">
 *   <div>Centered content</div>
 * </ux4g-center>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GCenter extends UX4GElement {
  static get observedAttributes() {
    return ['inline', 'axis'];
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
    const inline = this.getBooleanAttribute('inline');
    const axis = this.getAttributeOrDefault('axis', 'both');

    // Clear previous content
    this.root.innerHTML = '';

    // Create center container
    const center = this.createElement('div', [
      'ux4g-center',
      inline ? 'ux4g-center-inline' : '',
      `ux4g-center-${axis}`,
    ].filter(Boolean));

    const slot = document.createElement('slot');
    center.appendChild(slot);

    this.root.appendChild(center);
  }

  /**
   * Set axis
   */
  set axis(value: string) {
    this.setAttribute('axis', value);
  }

  get axis(): string {
    return this.getAttributeOrDefault('axis', 'both');
  }
}

// Define the custom element
if (!customElements.get('ux4g-center')) {
  customElements.define('ux4g-center', UX4GCenter);
}
