/**
 * UX4G Alert Web Component
 * 
 * @element ux4g-alert
 * 
 * @attr {string} variant - Alert variant: info, success, warning, error
 * @attr {string} title - Alert title
 * @attr {boolean} dismissible - Whether alert can be dismissed
 * @attr {string} role - ARIA role: alert, status
 * 
 * @fires ux4g-dismiss - Fired when alert is dismissed
 * 
 * @example
 * ```html
 * <ux4g-alert variant="success" title="Success" dismissible>
 *   Your application has been submitted successfully.
 * </ux4g-alert>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GAlert extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'title', 'dismissible', 'role'];
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
    const variant = this.getAttributeOrDefault('variant', 'info');
    const title = this.getAttribute('title') || '';
    const dismissible = this.getBooleanAttribute('dismissible');
    const ariaRole = this.getAttributeOrDefault('role', 'alert');

    // Clear previous content
    this.root.innerHTML = '';

    // Create alert container
    const container = this.createElement('div', [
      'ux4g-alert',
      `ux4g-alert-${variant}`,
    ]);
    container.setAttribute('role', ariaRole);

    // Create icon (based on variant)
    const icon = this.createElement('div', ['ux4g-alert-icon']);
    icon.innerHTML = this.getIconForVariant(variant);
    icon.setAttribute('aria-hidden', 'true');
    container.appendChild(icon);

    // Create content wrapper
    const content = this.createElement('div', ['ux4g-alert-content']);

    // Create title if provided
    if (title) {
      const titleElement = this.createElement('div', ['ux4g-alert-title']);
      titleElement.textContent = title;
      content.appendChild(titleElement);
    }

    // Create message (slot)
    const message = this.createElement('div', ['ux4g-alert-message']);
    const slot = document.createElement('slot');
    message.appendChild(slot);
    content.appendChild(message);

    container.appendChild(content);

    // Create dismiss button if dismissible
    if (dismissible) {
      const dismissBtn = this.createElement('button', ['ux4g-alert-dismiss'], {
        'type': 'button',
        'aria-label': 'Dismiss alert',
      });
      dismissBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;

      dismissBtn.addEventListener('click', () => {
        this.dispatchCustomEvent('ux4g-dismiss');
        this.remove();
      });

      container.appendChild(dismissBtn);
    }

    this.root.appendChild(container);
  }

  /**
   * Get icon SVG based on variant
   */
  private getIconForVariant(variant: string): string {
    const icons: Record<string, string> = {
      info: `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      `,
      success: `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      `,
      warning: `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      `,
      error: `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      `,
    };

    return icons[variant] || icons.info;
  }

  /**
   * Dismiss the alert programmatically
   */
  dismiss(): void {
    this.dispatchCustomEvent('ux4g-dismiss');
    this.remove();
  }
}

// Define the custom element
if (!customElements.get('ux4g-alert')) {
  customElements.define('ux4g-alert', UX4GAlert);
}
