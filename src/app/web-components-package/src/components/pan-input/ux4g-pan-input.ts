/**
 * UX4G PAN Card Input Web Component
 * 
 * @element ux4g-pan-input
 * 
 * @attr {string} name - Form field name
 * @attr {string} value - PAN number (10 characters)
 * @attr {boolean} disabled - Whether input is disabled
 * @attr {string} placeholder - Placeholder text
 * 
 * @fires ux4g-pan-change - Fired when value changes
 * @fires ux4g-pan-valid - Fired when valid PAN is entered
 * 
 * @example
 * ```html
 * <ux4g-pan-input 
 *   name="pan" 
 *   placeholder="Enter PAN (e.g., ABCDE1234F)">
 * </ux4g-pan-input>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GPANInput extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'disabled', 'placeholder'];
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
    const placeholder = this.getAttribute('placeholder') || 'ABCDE1234F';

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', ['ux4g-pan-input']);

    // Create input
    this._input = this.createElement('input', [
      'ux4g-input',
      'ux4g-pan-field',
    ]);
    this._input.type = 'text';
    this._input.placeholder = placeholder;
    this._input.disabled = disabled;
    this._input.maxLength = 10;
    this._input.style.textTransform = 'uppercase';

    if (this.hasAttribute('name')) {
      this._input.name = this.getAttribute('name')!;
    }

    if (this._value) {
      this._input.value = this._value.toUpperCase();
    }

    this._input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      let value = target.value.toUpperCase();
      
      // Format PAN: First 5 letters, next 4 digits, last 1 letter
      // Remove invalid characters based on position
      const chars = value.split('');
      let formatted = '';
      
      for (let i = 0; i < chars.length && i < 10; i++) {
        const char = chars[i];
        if (i < 5 || i === 9) {
          // Letters only
          if (/[A-Z]/.test(char)) {
            formatted += char;
          }
        } else {
          // Digits only (positions 5-8)
          if (/\d/.test(char)) {
            formatted += char;
          }
        }
      }
      
      this._value = formatted;
      target.value = formatted;
      
      if (this._internals) {
        this._internals.setFormValue(this._value);
      }

      this.dispatchCustomEvent('ux4g-pan-change', { value: this._value });

      // Validate
      if (this.validatePAN(this._value)) {
        this.dispatchCustomEvent('ux4g-pan-valid', { value: this._value });
        this.showValidation('Valid PAN format', 'success');
      } else if (this._value.length === 10) {
        this.showValidation('Invalid PAN format', 'error');
      } else {
        this.clearValidation();
      }
    });

    container.appendChild(this._input);

    // Validation message
    const validation = this.createElement('div', ['ux4g-pan-validation']);
    validation.id = 'validation-message';
    container.appendChild(validation);

    // Info text
    const info = this.createElement('div', ['ux4g-pan-info']);
    info.textContent = 'Format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)';
    container.appendChild(info);

    this.root.appendChild(container);
  }

  private validatePAN(value: string): boolean {
    // PAN format: [A-Z]{5}[0-9]{4}[A-Z]{1}
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    
    if (!panRegex.test(value)) return false;
    
    // Additional validation: 4th character should be P for individual
    // (This is a common check but not mandatory for all PAN types)
    return true;
  }

  private showValidation(message: string, type: 'success' | 'error'): void {
    const validation = this.root.querySelector('#validation-message');
    if (validation) {
      validation.textContent = message;
      validation.className = `ux4g-pan-validation ux4g-pan-validation-${type}`;
    }
  }

  private clearValidation(): void {
    const validation = this.root.querySelector('#validation-message');
    if (validation) {
      validation.textContent = '';
      validation.className = 'ux4g-pan-validation';
    }
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
if (!customElements.get('ux4g-pan-input')) {
  customElements.define('ux4g-pan-input', UX4GPANInput);
}
