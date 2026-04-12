/**
 * UX4G HintText Web Component
 * Helper text displayed below form fields to provide additional guidance
 *
 * @element ux4g-hint-text
 *
 * @attr {string} id - Optional ID for ARIA association
 *
 * @example
 * ```html
 * <ux4g-label for="password">Password</ux4g-label>
 * <ux4g-input id="password" type="password" aria-describedby="password-hint"></ux4g-input>
 * <ux4g-hint-text id="password-hint">Must be at least 8 characters</ux4g-hint-text>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GHintText extends UX4GElement {
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

    // Create hint text element
    const hintText = this.createElement('span', ['ux4g-helper-text']);

    // Add slot for content
    const slot = document.createElement('slot');
    hintText.appendChild(slot);

    this.root.appendChild(hintText);
  }
}

// Define the custom element
if (!customElements.get('ux4g-hint-text')) {
  customElements.define('ux4g-hint-text', UX4GHintText);
}
