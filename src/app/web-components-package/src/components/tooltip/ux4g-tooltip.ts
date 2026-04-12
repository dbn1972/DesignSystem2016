/**
 * UX4G Tooltip Web Component
 * 
 * @element ux4g-tooltip
 * 
 * @attr {string} text - Tooltip text content
 * @attr {string} placement - Tooltip placement: top, bottom, left, right
 * @attr {string} trigger - Trigger type: hover, click, focus
 * 
 * @slot - Content that triggers the tooltip
 * 
 * @example
 * ```html
 * <ux4g-tooltip text="This is helpful information" placement="top">
 *   <button>Hover me</button>
 * </ux4g-tooltip>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GTooltip extends UX4GElement {
  static get observedAttributes() {
    return ['text', 'placement', 'trigger'];
  }

  private _tooltipElement: HTMLElement | null = null;
  private _isVisible = false;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
    this.attachEventListeners();
  }

  disconnectedCallback(): void {
    this.hideTooltip();
  }

  protected render(): void {
    const placement = this.getAttributeOrDefault('placement', 'top');
    const text = this.getAttributeOrDefault('text', '');

    // Clear previous content
    this.root.innerHTML = '';

    // Create wrapper
    const wrapper = this.createElement('div', ['ux4g-tooltip-wrapper']);
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block';

    // Create slot for trigger content
    const slot = document.createElement('slot');
    wrapper.appendChild(slot);

    // Create tooltip element
    this._tooltipElement = this.createElement('div', [
      'ux4g-tooltip',
      `ux4g-tooltip-${placement}`,
    ]);
    this._tooltipElement.textContent = text;
    this._tooltipElement.setAttribute('role', 'tooltip');
    this._tooltipElement.style.visibility = 'hidden';
    this._tooltipElement.style.opacity = '0';

    wrapper.appendChild(this._tooltipElement);
    this.root.appendChild(wrapper);
  }

  private attachEventListeners(): void {
    const trigger = this.getAttributeOrDefault('trigger', 'hover');

    if (trigger === 'hover' || trigger === 'focus') {
      this.addEventListener('mouseenter', () => this.showTooltip());
      this.addEventListener('mouseleave', () => this.hideTooltip());
      this.addEventListener('focus', () => this.showTooltip(), true);
      this.addEventListener('blur', () => this.hideTooltip(), true);
    }

    if (trigger === 'click') {
      this.addEventListener('click', () => this.toggleTooltip());
    }
  }

  private showTooltip(): void {
    if (this._tooltipElement && !this._isVisible) {
      this._tooltipElement.style.visibility = 'visible';
      this._tooltipElement.style.opacity = '1';
      this._isVisible = true;
    }
  }

  private hideTooltip(): void {
    if (this._tooltipElement && this._isVisible) {
      this._tooltipElement.style.visibility = 'hidden';
      this._tooltipElement.style.opacity = '0';
      this._isVisible = false;
    }
  }

  private toggleTooltip(): void {
    if (this._isVisible) {
      this.hideTooltip();
    } else {
      this.showTooltip();
    }
  }

  /**
   * Set tooltip text
   */
  set text(value: string) {
    this.setAttribute('text', value);
  }

  get text(): string {
    return this.getAttributeOrDefault('text', '');
  }

  /**
   * Set placement
   */
  set placement(value: string) {
    this.setAttribute('placement', value);
  }

  get placement(): string {
    return this.getAttributeOrDefault('placement', 'top');
  }
}

// Define the custom element
if (!customElements.get('ux4g-tooltip')) {
  customElements.define('ux4g-tooltip', UX4GTooltip);
}
