/**
 * UX4G Result Web Component
 * 
 * @element ux4g-result
 * 
 * @attr {string} status - Result status: success, error, warning, info, 404, 403, 500
 * @attr {string} title - Result title
 * @attr {string} subtitle - Result subtitle/description
 * @attr {string} icon - Custom icon HTML
 * 
 * @slot - Default slot for additional content
 * @slot actions - Slot for action buttons
 * 
 * @example
 * ```html
 * <ux4g-result 
 *   status="success" 
 *   title="Application Submitted Successfully"
 *   subtitle="Your application ID is APP123456">
 *   <div slot="actions">
 *     <ux4g-button variant="primary">View Status</ux4g-button>
 *     <ux4g-button variant="outline">Download Receipt</ux4g-button>
 *   </div>
 * </ux4g-result>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GResult extends UX4GElement {
  static get observedAttributes() {
    return ['status', 'title', 'subtitle', 'icon'];
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
    const status = this.getAttributeOrDefault('status', 'info');
    const title = this.getAttribute('title') || this.getDefaultTitle(status);
    const subtitle = this.getAttribute('subtitle');
    const customIcon = this.getAttribute('icon');

    // Clear previous content
    this.root.innerHTML = '';

    // Create result container
    const container = this.createElement('div', [
      'ux4g-result',
      `ux4g-result-${status}`,
    ]);

    container.setAttribute('role', 'status');

    // Icon
    const iconContainer = this.createElement('div', ['ux4g-result-icon']);
    iconContainer.innerHTML = customIcon || this.getIconForStatus(status);
    container.appendChild(iconContainer);

    // Title
    const titleElement = this.createElement('h2', ['ux4g-result-title']);
    titleElement.textContent = title;
    container.appendChild(titleElement);

    // Subtitle
    if (subtitle) {
      const subtitleElement = this.createElement('p', ['ux4g-result-subtitle']);
      subtitleElement.textContent = subtitle;
      container.appendChild(subtitleElement);
    }

    // Content slot
    const content = this.createElement('div', ['ux4g-result-content']);
    const contentSlot = document.createElement('slot');
    content.appendChild(contentSlot);
    container.appendChild(content);

    // Actions slot
    const actions = this.createElement('div', ['ux4g-result-actions']);
    const actionsSlot = document.createElement('slot');
    actionsSlot.name = 'actions';
    actions.appendChild(actionsSlot);
    container.appendChild(actions);

    this.root.appendChild(container);
  }

  private getDefaultTitle(status: string): string {
    const titles: Record<string, string> = {
      success: 'Success',
      error: 'Error',
      warning: 'Warning',
      info: 'Information',
      404: 'Page Not Found',
      403: 'Access Forbidden',
      500: 'Internal Server Error',
    };
    return titles[status] || 'Result';
  }

  private getIconForStatus(status: string): string {
    const icons: Record<string, string> = {
      success: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
          <path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      `,
      error: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
          <line x1="15" y1="9" x2="9" y2="15" stroke-linecap="round"/>
          <line x1="9" y1="9" x2="15" y2="15" stroke-linecap="round"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      `,
      warning: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="currentColor" opacity="0.1"/>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13" stroke-linecap="round"/>
          <circle cx="12" cy="17" r="0.5" fill="currentColor"/>
        </svg>
      `,
      info: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12" stroke-linecap="round"/>
          <circle cx="12" cy="8" r="0.5" fill="currentColor"/>
        </svg>
      `,
      404: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
          <path d="M8 8h3v8M14 8h3l-3 4 3 4" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      `,
      403: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="currentColor" opacity="0.1"/>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      `,
      500: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke-linecap="round"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      `,
    };
    return icons[status] || icons.info;
  }

  /**
   * Set status
   */
  set status(value: string) {
    this.setAttribute('status', value);
  }

  get status(): string {
    return this.getAttributeOrDefault('status', 'info');
  }
}

// Define the custom element
if (!customElements.get('ux4g-result')) {
  customElements.define('ux4g-result', UX4GResult);
}
