/**
 * UX4G ErrorText Web Component
 * Error message text displayed below form fields with ARIA live region
 *
 * @element ux4g-error-text
 *
 * @attr {string} id - Optional ID for ARIA association
 *
 * @example
 * ```html
 * <ux4g-label for="email" required>Email</ux4g-label>
 * <ux4g-input id="email" type="email" error aria-describedby="email-error"></ux4g-input>
 * <ux4g-error-text id="email-error">Please enter a valid email address</ux4g-error-text>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GErrorText extends UX4GElement {
  static get observedAttributes() {
    return ['id'];
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
    // Clear previous content
    this.root.innerHTML = '';

    // Create error text element with role="alert" for screen readers
    const errorText = this.createElement('span', ['ux4g-error-message']);
    errorText.setAttribute('role', 'alert');
    errorText.setAttribute('aria-live', 'polite');

    // Add slot for content
    const slot = document.createElement('slot');
    errorText.appendChild(slot);

    this.root.appendChild(errorText);
  }
}

// Define the custom element
if (!customElements.get('ux4g-error-text')) {
  customElements.define('ux4g-error-text', UX4GErrorText);
}
