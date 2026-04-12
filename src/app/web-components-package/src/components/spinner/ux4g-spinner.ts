/**
 * UX4G Spinner Web Component
 * 
 * @element ux4g-spinner
 * 
 * @attr {string} size - Spinner size: xs, sm, md, lg, xl
 * @attr {string} variant - Spinner variant: primary, secondary, white
 * @attr {string} label - Accessible label for screen readers
 * 
 * @example
 * ```html
 * <ux4g-spinner size="md" variant="primary" label="Loading..."></ux4g-spinner>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GSpinner extends UX4GElement {
  static get observedAttributes() {
    return ['size', 'variant', 'label'];
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
    const variant = this.getAttributeOrDefault('variant', 'primary');
    const label = this.getAttributeOrDefault('label', 'Loading...');

    // Clear previous content
    this.root.innerHTML = '';

    // Create spinner container
    const spinner = this.createElement('div', [
      'ux4g-spinner',
      `ux4g-spinner-${size}`,
      `ux4g-spinner-${variant}`,
    ]);

    spinner.setAttribute('role', 'status');
    spinner.setAttribute('aria-label', label);

    // Create visually hidden label for screen readers
    const srLabel = this.createElement('span', ['ux4g-sr-only']);
    srLabel.textContent = label;
    spinner.appendChild(srLabel);

    this.root.appendChild(spinner);
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

  /**
   * Set variant
   */
  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get variant(): string {
    return this.getAttributeOrDefault('variant', 'primary');
  }
}

// Define the custom element
if (!customElements.get('ux4g-spinner')) {
  customElements.define('ux4g-spinner', UX4GSpinner);
}
