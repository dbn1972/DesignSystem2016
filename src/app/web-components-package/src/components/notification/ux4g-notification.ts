/**
 * UX4G Notification Web Component
 * 
 * @element ux4g-notification
 * 
 * @attr {string} variant - Notification variant: info, success, warning, danger
 * @attr {string} title - Notification title
 * @attr {boolean} dismissible - Show close button
 * @attr {boolean} visible - Whether notification is visible
 * @attr {string} position - Position: top-left, top-right, bottom-left, bottom-right
 * @attr {string} icon - Custom icon HTML
 * 
 * @fires ux4g-notification-close - Fired when notification is closed
 * 
 * @example
 * ```html
 * <ux4g-notification 
 *   variant="success" 
 *   title="Success!" 
 *   dismissible 
 *   visible
 *   position="top-right">
 *   Your operation completed successfully.
 * </ux4g-notification>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GNotification extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'title', 'dismissible', 'visible', 'position', 'icon'];
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
    const title = this.getAttribute('title');
    const dismissible = this.getBooleanAttribute('dismissible');
    const visible = this.getBooleanAttribute('visible');
    const position = this.getAttributeOrDefault('position', 'top-right');
    const customIcon = this.getAttribute('icon');

    // Clear previous content
    this.root.innerHTML = '';

    // Create notification
    const notification = this.createElement('div', [
      'ux4g-notification',
      `ux4g-notification-${variant}`,
      `ux4g-notification-${position}`,
      visible ? 'ux4g-notification-visible' : '',
    ].filter(Boolean));

    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', variant === 'danger' ? 'assertive' : 'polite');

    // Icon
    const icon = this.createElement('div', ['ux4g-notification-icon']);
    icon.innerHTML = customIcon || this.getIconForVariant(variant);
    notification.appendChild(icon);

    // Content
    const content = this.createElement('div', ['ux4g-notification-content']);

    if (title) {
      const titleElement = this.createElement('div', ['ux4g-notification-title']);
      titleElement.textContent = title;
      content.appendChild(titleElement);
    }

    const message = this.createElement('div', ['ux4g-notification-message']);
    const slot = document.createElement('slot');
    message.appendChild(slot);
    content.appendChild(message);

    notification.appendChild(content);

    // Close button
    if (dismissible) {
      const closeButton = this.createElement('button', ['ux4g-notification-close']);
      closeButton.setAttribute('type', 'button');
      closeButton.setAttribute('aria-label', 'Close');
      closeButton.innerHTML = '×';
      closeButton.addEventListener('click', () => this.close());
      notification.appendChild(closeButton);
    }

    this.root.appendChild(notification);
  }

  private getIconForVariant(variant: string): string {
    const icons: Record<string, string> = {
      success: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>',
      warning: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',
      danger: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>',
      info: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>',
    };
    return icons[variant] || icons.info;
  }

  /**
   * Show the notification
   */
  show(): void {
    this.setBooleanAttribute('visible', true);
  }

  /**
   * Close the notification
   */
  close(): void {
    this.setBooleanAttribute('visible', false);
    this.dispatchCustomEvent('ux4g-notification-close');
  }

  /**
   * Set variant
   */
  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get variant(): string {
    return this.getAttributeOrDefault('variant', 'info');
  }
}

// Define the custom element
if (!customElements.get('ux4g-notification')) {
  customElements.define('ux4g-notification', UX4GNotification);
}
