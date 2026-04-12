/**
 * UX4G Toast Web Component
 * 
 * @element ux4g-toast
 * 
 * @attr {string} variant - Toast variant: info, success, warning, danger
 * @attr {string} position - Toast position: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
 * @attr {number} duration - Auto-dismiss duration in milliseconds (0 = no auto-dismiss)
 * @attr {boolean} dismissible - Show close button
 * @attr {string} title - Toast title
 * 
 * @fires ux4g-toast-close - Fired when toast is closed
 * 
 * @example
 * ```html
 * <ux4g-toast variant="success" title="Success" duration="3000" dismissible>
 *   Your application has been submitted successfully.
 * </ux4g-toast>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GToast extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'position', 'duration', 'dismissible', 'title', 'visible'];
  }

  private _timer: number | null = null;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
    this.startDismissTimer();
  }

  disconnectedCallback(): void {
    this.clearDismissTimer();
  }

  protected render(): void {
    const variant = this.getAttributeOrDefault('variant', 'info');
    const position = this.getAttributeOrDefault('position', 'top-right');
    const dismissible = this.getBooleanAttribute('dismissible');
    const title = this.getAttribute('title');
    const visible = this.getBooleanAttribute('visible');

    // Clear previous content
    this.root.innerHTML = '';

    // Create toast container
    const toast = this.createElement('div', [
      'ux4g-toast',
      `ux4g-toast-${variant}`,
      `ux4g-toast-${position}`,
      visible ? 'ux4g-toast-visible' : 'ux4g-toast-hidden',
    ].filter(Boolean));

    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', variant === 'danger' ? 'assertive' : 'polite');

    // Icon
    const icon = this.createElement('div', ['ux4g-toast-icon']);
    icon.innerHTML = this.getIconForVariant(variant);
    toast.appendChild(icon);

    // Content
    const content = this.createElement('div', ['ux4g-toast-content']);

    if (title) {
      const titleElement = this.createElement('div', ['ux4g-toast-title']);
      titleElement.textContent = title;
      content.appendChild(titleElement);
    }

    const message = this.createElement('div', ['ux4g-toast-message']);
    const slot = document.createElement('slot');
    message.appendChild(slot);
    content.appendChild(message);

    toast.appendChild(content);

    // Close button
    if (dismissible) {
      const closeButton = this.createElement('button', ['ux4g-toast-close']);
      closeButton.setAttribute('type', 'button');
      closeButton.setAttribute('aria-label', 'Close');
      closeButton.innerHTML = '×';
      closeButton.addEventListener('click', () => this.close());
      toast.appendChild(closeButton);
    }

    this.root.appendChild(toast);
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

  private startDismissTimer(): void {
    const duration = parseInt(this.getAttribute('duration') || '0');
    if (duration > 0) {
      this.clearDismissTimer();
      this._timer = window.setTimeout(() => {
        this.close();
      }, duration);
    }
  }

  private clearDismissTimer(): void {
    if (this._timer !== null) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }

  /**
   * Show the toast
   */
  show(): void {
    this.setBooleanAttribute('visible', true);
    this.startDismissTimer();
  }

  /**
   * Close the toast
   */
  close(): void {
    this.setBooleanAttribute('visible', false);
    this.clearDismissTimer();
    this.dispatchCustomEvent('ux4g-toast-close');
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
if (!customElements.get('ux4g-toast')) {
  customElements.define('ux4g-toast', UX4GToast);
}
