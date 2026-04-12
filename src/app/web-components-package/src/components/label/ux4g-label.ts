/**
 * UX4G Label Web Component
 * Form field label with required indicator support
 *
 * @element ux4g-label
 *
 * @attr {string} for - ID of the associated form control
 * @attr {boolean} required - Show required indicator (*)
 * @attr {boolean} disabled - Display as disabled
 *
 * @example
 * ```html
 * <ux4g-label for="email" required>Email Address</ux4g-label>
 * <ux4g-input id="email" type="email"></ux4g-input>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GLabel extends UX4GElement {
  static get observedAttributes() {
    return ['for', 'required', 'disabled'];
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
    const htmlFor = this.getAttribute('for') || '';
    const required = this.getBooleanAttribute('required');
    const disabled = this.getBooleanAttribute('disabled');

    // Clear previous content
    this.root.innerHTML = '';

    // Create label element
    const label = this.createElement('label', [
      'ux4g-label',
      required ? 'ux4g-label-required' : '',
      disabled ? 'ux4g-label-disabled' : '',
    ].filter(Boolean));

    // Set for attribute
    if (htmlFor) {
      label.setAttribute('for', htmlFor);
    }

    // Add slot for content
    const slot = document.createElement('slot');
    label.appendChild(slot);

    this.root.appendChild(label);
  }

  /**
   * Set the for attribute (associated form control ID)
   */
  set htmlFor(value: string) {
    this.setAttribute('for', value);
  }

  get htmlFor(): string {
    return this.getAttribute('for') || '';
  }

  /**
   * Set required state
   */
  set required(value: boolean) {
    this.setBooleanAttribute('required', value);
  }

  get required(): boolean {
    return this.getBooleanAttribute('required');
  }

  /**
   * Set disabled state
   */
  set disabled(value: boolean) {
    this.setBooleanAttribute('disabled', value);
  }

  get disabled(): boolean {
    return this.getBooleanAttribute('disabled');
  }
}

// Define the custom element
if (!customElements.get('ux4g-label')) {
  customElements.define('ux4g-label', UX4GLabel);
}
