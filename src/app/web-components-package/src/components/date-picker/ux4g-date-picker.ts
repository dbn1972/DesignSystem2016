/**
 * UX4G Date Picker Web Component
 * 
 * @element ux4g-date-picker
 * 
 * @attr {string} name - Form field name
 * @attr {string} value - Current date value (YYYY-MM-DD)
 * @attr {string} placeholder - Placeholder text
 * @attr {boolean} disabled - Whether date picker is disabled
 * @attr {string} format - Display format: dd/mm/yyyy, mm/dd/yyyy, yyyy-mm-dd
 * @attr {string} min - Minimum date (YYYY-MM-DD)
 * @attr {string} max - Maximum date (YYYY-MM-DD)
 * 
 * @fires ux4g-date-change - Fired when date changes
 * 
 * @example
 * ```html
 * <ux4g-date-picker 
 *   name="birthdate" 
 *   placeholder="Select date"
 *   format="dd/mm/yyyy">
 * </ux4g-date-picker>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GDatePicker extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled', 'format', 'min', 'max'];
  }

  private _input: HTMLInputElement | null = null;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const placeholder = this.getAttribute('placeholder') || 'Select date';
    const disabled = this.getBooleanAttribute('disabled');
    const min = this.getAttribute('min');
    const max = this.getAttribute('max');

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', ['ux4g-date-picker']);

    // Create input wrapper
    const inputWrapper = this.createElement('div', ['ux4g-date-picker-input-wrapper']);

    // Create native date input
    this._input = this.createElement('input', [
      'ux4g-date-picker-input',
      'ux4g-input',
    ]);
    this._input.type = 'date';
    this._input.placeholder = placeholder;
    this._input.disabled = disabled;

    if (this.hasAttribute('name')) {
      this._input.name = this.getAttribute('name')!;
    }

    if (this.hasAttribute('value')) {
      this._input.value = this.getAttribute('value')!;
      this._value = this._input.value;
    }

    if (min) {
      this._input.min = min;
    }

    if (max) {
      this._input.max = max;
    }

    this._input.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      this._value = target.value;
      
      if (this._internals) {
        this._internals.setFormValue(this._value);
      }

      this.dispatchCustomEvent('ux4g-date-change', { 
        value: this._value,
        originalEvent: e 
      });
    });

    inputWrapper.appendChild(this._input);

    // Calendar icon
    const icon = this.createElement('span', ['ux4g-date-picker-icon']);
    icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
    inputWrapper.appendChild(icon);

    container.appendChild(inputWrapper);
    this.root.appendChild(container);
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
   * Focus the input
   */
  focus(): void {
    this._input?.focus();
  }
}

// Define the custom element
if (!customElements.get('ux4g-date-picker')) {
  customElements.define('ux4g-date-picker', UX4GDatePicker);
}
