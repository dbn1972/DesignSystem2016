/**
 * UX4G Aadhaar Input Web Component
 * 
 * @element ux4g-aadhaar-input
 * 
 * @attr {string} name - Form field name
 * @attr {string} value - Aadhaar number (12 digits)
 * @attr {boolean} disabled - Whether input is disabled
 * @attr {boolean} masked - Show masked format (XXXX XXXX 1234)
 * @attr {string} placeholder - Placeholder text
 * 
 * @fires ux4g-aadhaar-change - Fired when value changes
 * @fires ux4g-aadhaar-valid - Fired when valid Aadhaar is entered
 * 
 * @example
 * ```html
 * <ux4g-aadhaar-input 
 *   name="aadhaar" 
 *   placeholder="Enter 12-digit Aadhaar"
 *   masked>
 * </ux4g-aadhaar-input>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GAadhaarInput extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'disabled', 'masked', 'placeholder'];
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
    const disabled = this.getBooleanAttribute('disabled');
    const masked = this.getBooleanAttribute('masked');
    const placeholder = this.getAttribute('placeholder') || 'XXXX XXXX XXXX';

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', ['ux4g-aadhaar-input']);

    // Create input
    this._input = this.createElement('input', [
      'ux4g-input',
      'ux4g-aadhaar-field',
    ]);
    this._input.type = masked ? 'password' : 'text';
    this._input.inputMode = 'numeric';
    this._input.placeholder = placeholder;
    this._input.disabled = disabled;
    this._input.maxLength = 14; // 12 digits + 2 spaces

    if (this.hasAttribute('name')) {
      this._input.name = this.getAttribute('name')!;
    }

    // Format display value
    if (this._value) {
      this._input.value = this.formatAadhaar(this._value);
    }

    this._input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      let value = target.value.replace(/\D/g, ''); // Remove non-digits
      
      // Limit to 12 digits
      value = value.slice(0, 12);
      
      // Update internal value
      this._value = value;
      
      // Update display with formatting
      target.value = this.formatAadhaar(value);
      
      if (this._internals) {
        this._internals.setFormValue(this._value);
      }

      this.dispatchCustomEvent('ux4g-aadhaar-change', { value: this._value });

      // Validate
      if (value.length === 12 && this.validateAadhaar(value)) {
        this.dispatchCustomEvent('ux4g-aadhaar-valid', { value: this._value });
      }
    });

    container.appendChild(this._input);

    // Validation message
    const validation = this.createElement('div', ['ux4g-aadhaar-validation']);
    validation.id = 'validation-message';
    container.appendChild(validation);

    this.root.appendChild(container);
  }

  private formatAadhaar(value: string): string {
    // Format as XXXX XXXX XXXX
    const digits = value.replace(/\D/g, '');
    const parts = [];
    
    for (let i = 0; i < digits.length; i += 4) {
      parts.push(digits.slice(i, i + 4));
    }
    
    return parts.join(' ');
  }

  private validateAadhaar(value: string): boolean {
    // Basic validation: 12 digits, not all same digit
    if (value.length !== 12) return false;
    if (/^(\d)\1{11}$/.test(value)) return false; // All same digit
    if (value.startsWith('0') || value.startsWith('1')) return false; // Starts with 0 or 1
    
    // Verhoeff algorithm validation (simplified)
    return this.verhoeffCheck(value);
  }

  private verhoeffCheck(num: string): boolean {
    // Simplified Verhoeff checksum validation
    const d = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
      [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
      [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
      [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
      [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
      [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
      [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
      [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
      [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    ];

    const p = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
      [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
      [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
      [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
      [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
      [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
      [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
    ];

    let c = 0;
    const digits = num.split('').reverse().map(Number);

    for (let i = 0; i < digits.length; i++) {
      c = d[c][p[(i % 8)][digits[i]]];
    }

    return c === 0;
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
if (!customElements.get('ux4g-aadhaar-input')) {
  customElements.define('ux4g-aadhaar-input', UX4GAadhaarInput);
}
