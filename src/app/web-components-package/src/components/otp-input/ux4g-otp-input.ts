/**
 * UX4G OTP Input Web Component
 * 
 * @element ux4g-otp-input
 * 
 * @attr {string} name - Form field name
 * @attr {string} value - Current OTP value
 * @attr {number} length - Number of OTP digits (default: 6)
 * @attr {boolean} disabled - Whether input is disabled
 * @attr {boolean} auto-focus - Auto-focus first input on mount
 * 
 * @fires ux4g-otp-complete - Fired when all digits are entered
 * @fires ux4g-otp-change - Fired when value changes
 * 
 * @example
 * ```html
 * <ux4g-otp-input name="otp" length="6" auto-focus></ux4g-otp-input>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GOTPInput extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'length', 'disabled', 'auto-focus'];
  }

  private _inputs: HTMLInputElement[] = [];

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const length = parseInt(this.getAttribute('length') || '6');
    const disabled = this.getBooleanAttribute('disabled');
    const autoFocus = this.getBooleanAttribute('auto-focus');

    // Clear previous content
    this.root.innerHTML = '';
    this._inputs = [];

    // Create OTP container
    const container = this.createElement('div', [
      'ux4g-otp-input',
      disabled ? 'ux4g-otp-input-disabled' : '',
    ].filter(Boolean));

    const currentValue = this._value || '';
    const digits = currentValue.split('').slice(0, length);

    for (let i = 0; i < length; i++) {
      const input = this.createElement('input', ['ux4g-otp-digit']);
      input.type = 'text';
      input.inputMode = 'numeric';
      input.pattern = '[0-9]';
      input.maxLength = 1;
      input.disabled = disabled;
      input.value = digits[i] || '';
      input.setAttribute('data-index', String(i));

      if (autoFocus && i === 0) {
        setTimeout(() => input.focus(), 100);
      }

      // Handle input
      input.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;

        // Only allow digits
        if (value && !/^\d$/.test(value)) {
          target.value = '';
          return;
        }

        // Move to next input
        if (value && i < length - 1) {
          this._inputs[i + 1]?.focus();
        }

        this.updateValue();
      });

      // Handle keydown for backspace
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && i > 0) {
          this._inputs[i - 1]?.focus();
        }
      });

      // Handle paste
      input.addEventListener('paste', (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData?.getData('text/plain') || '';
        const digits = pastedData.replace(/\D/g, '').slice(0, length);
        
        this.setValue(digits);
      });

      this._inputs.push(input);
      container.appendChild(input);
    }

    this.root.appendChild(container);
  }

  private updateValue(): void {
    this._value = this._inputs.map(input => input.value).join('');
    
    if (this._internals) {
      this._internals.setFormValue(this._value);
    }

    this.dispatchCustomEvent('ux4g-otp-change', { value: this._value });

    // Check if complete
    const length = parseInt(this.getAttribute('length') || '6');
    if (this._value.length === length) {
      this.dispatchCustomEvent('ux4g-otp-complete', { value: this._value });
    }
  }

  /**
   * Set OTP value programmatically
   */
  setValue(value: string): void {
    const length = parseInt(this.getAttribute('length') || '6');
    const digits = value.replace(/\D/g, '').slice(0, length).split('');
    
    this._inputs.forEach((input, index) => {
      input.value = digits[index] || '';
    });

    this.updateValue();
  }

  /**
   * Clear all inputs
   */
  clear(): void {
    this._inputs.forEach(input => {
      input.value = '';
    });
    this._value = '';
    this._inputs[0]?.focus();
    this.updateValue();
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
}

// Define the custom element
if (!customElements.get('ux4g-otp-input')) {
  customElements.define('ux4g-otp-input', UX4GOTPInput);
}
