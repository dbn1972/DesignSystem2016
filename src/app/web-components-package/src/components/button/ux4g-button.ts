/**
 * UX4G Button Web Component
 * 
 * @element ux4g-button
 * 
 * @attr {string} variant - Button variant: primary, secondary, outline, ghost, danger
 * @attr {string} size - Button size: sm, md, lg
 * @attr {boolean} disabled - Whether button is disabled
 * @attr {boolean} loading - Whether button is in loading state
 * @attr {string} type - Button type: button, submit, reset
 * @attr {boolean} full-width - Whether button takes full width
 * 
 * @fires ux4g-click - Fired when button is clicked
 * 
 * @example
 * ```html
 * <ux4g-button variant="primary" size="md">
 *   Submit Application
 * </ux4g-button>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';
import { classNames } from '../../utils/helpers';

export class UX4GButton extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'loading', 'type', 'full-width'];
  }

  private _button: HTMLButtonElement | null = null;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const variant = this.getAttributeOrDefault('variant', 'primary');
    const size = this.getAttributeOrDefault('size', 'md');
    const type = this.getAttributeOrDefault('type', 'button') as 'button' | 'submit' | 'reset';
    const disabled = this.getBooleanAttribute('disabled');
    const loading = this.getBooleanAttribute('loading');
    const fullWidth = this.getBooleanAttribute('full-width');

    const isDisabled = disabled || loading;

    // Clear previous content
    this.root.innerHTML = '';

    // Create button element
    this._button = this.createElement('button', [
      'ux4g-button',
      `ux4g-button-${variant}`,
      `ux4g-button-${size}`,
      fullWidth ? 'ux4g-w-full' : '',
      loading ? 'ux4g-button-loading' : '',
    ].filter(Boolean));

    this._button.type = type;
    this._button.disabled = isDisabled;
    this._button.setAttribute('aria-disabled', String(isDisabled));
    
    if (loading) {
      this._button.setAttribute('aria-busy', 'true');
    }

    // Add loading spinner
    if (loading) {
      const spinner = this.createElement('span', ['ux4g-spinner', 'ux4g-spinner-sm', 'ux4g-mr-2']);
      spinner.setAttribute('aria-hidden', 'true');
      this._button.appendChild(spinner);
    }

    // Add slot for content
    const slot = document.createElement('slot');
    this._button.appendChild(slot);

    // Click handler
    this._button.addEventListener('click', (e) => {
      if (!isDisabled) {
        this.dispatchCustomEvent('ux4g-click', { originalEvent: e });
      }
    });

    this.root.appendChild(this._button);
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

  /**
   * Set loading state
   */
  set loading(value: boolean) {
    this.setBooleanAttribute('loading', value);
  }

  get loading(): boolean {
    return this.getBooleanAttribute('loading');
  }

  /**
   * Set variant
   */
  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get variant(): string {
    return this.getAttributeOrDefault('variant', 'primary');
  }

  /**
   * Set size
   */
  set size(value: string) {
    this.setAttribute('size', value);
  }

  get size(): string {
    return this.getAttributeOrDefault('size', 'md');
  }

  /**
   * Click the button programmatically
   */
  click(): void {
    this._button?.click();
  }

  /**
   * Focus the button
   */
  focus(): void {
    this._button?.focus();
  }

  /**
   * Blur the button
   */
  blur(): void {
    this._button?.blur();
  }
}

// Define the custom element
if (!customElements.get('ux4g-button')) {
  customElements.define('ux4g-button', UX4GButton);
}
