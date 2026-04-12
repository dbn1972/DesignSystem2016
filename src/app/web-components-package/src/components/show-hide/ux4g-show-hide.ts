/**
 * UX4G Show/Hide (Visibility Toggle) Web Component
 * 
 * @element ux4g-show-hide
 * 
 * @attr {boolean} visible - Whether content is visible
 * @attr {string} mode - Visibility mode: display, visibility, opacity
 * 
 * @slot - Default slot for content to show/hide
 * 
 * @fires ux4g-visibility-change - Fired when visibility changes
 * 
 * @example
 * ```html
 * <ux4g-show-hide visible mode="display">
 *   <p>Content to show/hide</p>
 * </ux4g-show-hide>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GShowHide extends UX4GElement {
  static get observedAttributes() {
    return ['visible', 'mode'];
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
    const visible = this.getBooleanAttribute('visible');
    const mode = this.getAttributeOrDefault('mode', 'display');

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', [
      'ux4g-show-hide',
      `ux4g-show-hide-${mode}`,
      visible ? 'ux4g-show-hide-visible' : 'ux4g-show-hide-hidden',
    ].filter(Boolean));

    container.setAttribute('aria-hidden', String(!visible));

    const slot = document.createElement('slot');
    container.appendChild(slot);

    this.root.appendChild(container);
  }

  /**
   * Show content
   */
  show(): void {
    this.setBooleanAttribute('visible', true);
    this.dispatchCustomEvent('ux4g-visibility-change', { visible: true });
  }

  /**
   * Hide content
   */
  hide(): void {
    this.setBooleanAttribute('visible', false);
    this.dispatchCustomEvent('ux4g-visibility-change', { visible: false });
  }

  /**
   * Toggle visibility
   */
  toggle(): void {
    const visible = this.getBooleanAttribute('visible');
    if (visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * Set visible state
   */
  set visible(value: boolean) {
    this.setBooleanAttribute('visible', value);
  }

  get visible(): boolean {
    return this.getBooleanAttribute('visible');
  }
}

// Define the custom element
if (!customElements.get('ux4g-show-hide')) {
  customElements.define('ux4g-show-hide', UX4GShowHide);
}
