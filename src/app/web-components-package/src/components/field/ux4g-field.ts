/**
 * UX4G Field Web Component
 * Container for form field composition (Label + Input + HintText/ErrorText)
 * Provides consistent spacing and state management for form fields
 *
 * @element ux4g-field
 *
 * @attr {boolean} error - Display error state styling
 * @attr {boolean} required - Indicate required field
 * @attr {boolean} disabled - Display disabled state styling
 *
 * @example
 * ```html
 * <ux4g-field error>
 *   <ux4g-label for="email" required>Email Address</ux4g-label>
 *   <ux4g-input id="email" type="email" error aria-describedby="email-error"></ux4g-input>
 *   <ux4g-error-text id="email-error">Please enter a valid email</ux4g-error-text>
 * </ux4g-field>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GField extends UX4GElement {
  static get observedAttributes() {
    return ['error', 'required', 'disabled'];
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
    const error = this.getBooleanAttribute('error');
    const required = this.getBooleanAttribute('required');
    const disabled = this.getBooleanAttribute('disabled');

    // Clear previous content
    this.root.innerHTML = '';

    // Create field container
    const field = this.createElement('div', [
      'ux4g-form-group',
      error ? 'ux4g-form-group-error' : '',
      disabled ? 'ux4g-form-group-disabled' : '',
    ].filter(Boolean));

    // Add slot for content (label, input, hint/error text)
    const slot = document.createElement('slot');
    field.appendChild(slot);

    this.root.appendChild(field);
  }

  /**
   * Set error state
   */
  set error(value: boolean) {
    this.setBooleanAttribute('error', value);
  }

  get error(): boolean {
    return this.getBooleanAttribute('error');
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
if (!customElements.get('ux4g-field')) {
  customElements.define('ux4g-field', UX4GField);
}
