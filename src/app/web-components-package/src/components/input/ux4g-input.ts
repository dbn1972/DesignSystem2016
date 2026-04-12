/**
 * UX4G Input Web Component
 * 
 * @element ux4g-input
 * 
 * @attr {string} label - Input label
 * @attr {string} type - Input type: text, email, password, number, tel, url, search
 * @attr {string} value - Input value
 * @attr {string} placeholder - Placeholder text
 * @attr {string} size - Input size: sm, md, lg
 * @attr {boolean} required - Whether input is required
 * @attr {boolean} disabled - Whether input is disabled
 * @attr {boolean} readonly - Whether input is readonly
 * @attr {boolean} error - Whether input has an error
 * @attr {string} error-message - Error message to display
 * @attr {string} hint - Hint text to display
 * @attr {boolean} full-width - Whether input takes full width
 * @attr {string} name - Input name for form submission
 * 
 * @fires ux4g-change - Fired when value changes
 * @fires ux4g-input - Fired on input
 * @fires ux4g-focus - Fired when input receives focus
 * @fires ux4g-blur - Fired when input loses focus
 * 
 * @example
 * ```html
 * <ux4g-input 
 *   label="Email Address" 
 *   type="email" 
 *   required 
 *   placeholder="Enter your email"
 * ></ux4g-input>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';
import { uniqueId } from '../../utils/helpers';

export class UX4GInput extends UX4GFormElement {
  static get observedAttributes() {
    return [
      'label',
      'type',
      'value',
      'placeholder',
      'size',
      'required',
      'disabled',
      'readonly',
      'error',
      'error-message',
      'hint',
      'full-width',
      'name',
    ];
  }

  private _input: HTMLInputElement | null = null;
  private _id: string;

  constructor() {
    super({ useShadowDOM: true });
    this._id = uniqueId('input');
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const label = this.getAttribute('label') || '';
    const type = this.getAttributeOrDefault('type', 'text');
    const placeholder = this.getAttribute('placeholder') || '';
    const size = this.getAttributeOrDefault('size', 'md');
    const required = this.getBooleanAttribute('required');
    const disabled = this.getBooleanAttribute('disabled');
    const readonly = this.getBooleanAttribute('readonly');
    const error = this.getBooleanAttribute('error');
    const errorMessage = this.getAttribute('error-message') || '';
    const hint = this.getAttribute('hint') || '';
    const fullWidth = this.getBooleanAttribute('full-width');
    const name = this.getAttribute('name') || '';

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', [
      'ux4g-form-group',
      fullWidth ? 'ux4g-w-full' : '',
    ].filter(Boolean));

    // Create label
    if (label) {
      const labelElement = this.createElement('label', [
        'ux4g-label',
        required ? 'ux4g-label-required' : '',
      ].filter(Boolean));
      labelElement.textContent = label;
      labelElement.htmlFor = this._id;
      container.appendChild(labelElement);
    }

    // Create input wrapper
    const wrapper = this.createElement('div', ['ux4g-input-wrapper']);

    // Create input
    this._input = this.createElement('input', [
      'ux4g-input',
      `ux4g-input-${size}`,
      error ? 'ux4g-input-error' : '',
      disabled ? 'ux4g-input-disabled' : '',
      readonly ? 'ux4g-input-readonly' : '',
    ].filter(Boolean));

    this._input.id = this._id;
    this._input.type = type;
    this._input.value = this._value;
    this._input.placeholder = placeholder;
    this._input.disabled = disabled;
    this._input.readOnly = readonly;
    this._input.required = required;
    this._input.name = name;

    if (error) {
      this._input.setAttribute('aria-invalid', 'true');
    }

    if (required) {
      this._input.setAttribute('aria-required', 'true');
    }

    if (errorMessage) {
      this._input.setAttribute('aria-describedby', `${this._id}-error`);
    } else if (hint) {
      this._input.setAttribute('aria-describedby', `${this._id}-hint`);
    }

    // Event listeners
    this._input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      this._value = target.value;
      if (this._internals) {
        this._internals.setFormValue(this._value);
      }
      this.dispatchCustomEvent('ux4g-input', { value: this._value, originalEvent: e });
    });

    this._input.addEventListener('change', (e) => {
      this.dispatchCustomEvent('ux4g-change', { value: this._value, originalEvent: e });
    });

    this._input.addEventListener('focus', (e) => {
      this.dispatchCustomEvent('ux4g-focus', { originalEvent: e });
    });

    this._input.addEventListener('blur', (e) => {
      this.dispatchCustomEvent('ux4g-blur', { originalEvent: e });
    });

    wrapper.appendChild(this._input);
    container.appendChild(wrapper);

    // Create hint text
    if (hint && !error) {
      const hintElement = this.createElement('div', ['ux4g-hint-text']);
      hintElement.id = `${this._id}-hint`;
      hintElement.textContent = hint;
      container.appendChild(hintElement);
    }

    // Create error message
    if (error && errorMessage) {
      const errorElement = this.createElement('div', ['ux4g-error-text']);
      errorElement.id = `${this._id}-error`;
      errorElement.setAttribute('role', 'alert');
      errorElement.textContent = errorMessage;
      container.appendChild(errorElement);
    }

    this.root.appendChild(container);
  }

  /**
   * Get/Set value
   */
  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    if (this._input) {
      this._input.value = val;
    }
    if (this._internals) {
      this._internals.setFormValue(val);
    }
  }

  /**
   * Focus the input
   */
  focus(): void {
    this._input?.focus();
  }

  /**
   * Blur the input
   */
  blur(): void {
    this._input?.blur();
  }

  /**
   * Select input text
   */
  select(): void {
    this._input?.select();
  }
}

// Define the custom element
if (!customElements.get('ux4g-input')) {
  customElements.define('ux4g-input', UX4GInput);
}
