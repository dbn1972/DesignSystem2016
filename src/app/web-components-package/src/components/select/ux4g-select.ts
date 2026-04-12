/**
 * UX4G Select Web Component
 * 
 * @element ux4g-select
 * 
 * @attr {string} label - Select label
 * @attr {string} value - Selected value
 * @attr {string} placeholder - Placeholder text
 * @attr {string} size - Select size: sm, md, lg
 * @attr {boolean} required - Whether select is required
 * @attr {boolean} disabled - Whether select is disabled
 * @attr {boolean} error - Whether select has an error
 * @attr {string} error-message - Error message to display
 * @attr {string} hint - Hint text to display
 * @attr {boolean} full-width - Whether select takes full width
 * @attr {string} name - Select name for form submission
 * @attr {string} options - JSON string of options
 * 
 * @fires ux4g-change - Fired when selection changes
 * 
 * @example
 * ```html
 * <ux4g-select 
 *   label="Select State" 
 *   required
 *   options='[{"value":"DL","label":"Delhi"},{"value":"MH","label":"Maharashtra"}]'
 * ></ux4g-select>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';
import { uniqueId } from '../../utils/helpers';

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export class UX4GSelect extends UX4GFormElement {
  static get observedAttributes() {
    return [
      'label',
      'value',
      'placeholder',
      'size',
      'required',
      'disabled',
      'error',
      'error-message',
      'hint',
      'full-width',
      'name',
      'options',
    ];
  }

  private _select: HTMLSelectElement | null = null;
  private _id: string;

  constructor() {
    super({ useShadowDOM: true });
    this._id = uniqueId('select');
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const label = this.getAttribute('label') || '';
    const placeholder = this.getAttribute('placeholder') || 'Select an option';
    const size = this.getAttributeOrDefault('size', 'md');
    const required = this.getBooleanAttribute('required');
    const disabled = this.getBooleanAttribute('disabled');
    const error = this.getBooleanAttribute('error');
    const errorMessage = this.getAttribute('error-message') || '';
    const hint = this.getAttribute('hint') || '';
    const fullWidth = this.getBooleanAttribute('full-width');
    const name = this.getAttribute('name') || '';
    const optionsAttr = this.getAttribute('options') || '[]';

    let options: SelectOption[] = [];
    try {
      options = JSON.parse(optionsAttr);
    } catch (e) {
      console.error('Invalid options JSON:', e);
    }

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

    // Create select wrapper
    const wrapper = this.createElement('div', ['ux4g-select-wrapper']);

    // Create select
    this._select = this.createElement('select', [
      'ux4g-select',
      `ux4g-select-${size}`,
      error ? 'ux4g-select-error' : '',
      disabled ? 'ux4g-select-disabled' : '',
    ].filter(Boolean));

    this._select.id = this._id;
    this._select.disabled = disabled;
    this._select.required = required;
    this._select.name = name;

    if (error) {
      this._select.setAttribute('aria-invalid', 'true');
    }

    if (required) {
      this._select.setAttribute('aria-required', 'true');
    }

    if (errorMessage) {
      this._select.setAttribute('aria-describedby', `${this._id}-error`);
    } else if (hint) {
      this._select.setAttribute('aria-describedby', `${this._id}-hint`);
    }

    // Add placeholder option
    const placeholderOption = this.createElement('option', []);
    placeholderOption.value = '';
    placeholderOption.textContent = placeholder;
    placeholderOption.disabled = true;
    placeholderOption.selected = !this._value;
    this._select.appendChild(placeholderOption);

    // Add options
    options.forEach((opt) => {
      const option = this.createElement('option', []);
      option.value = opt.value;
      option.textContent = opt.label;
      option.disabled = opt.disabled || false;
      option.selected = opt.value === this._value;
      this._select!.appendChild(option);
    });

    // Event listener
    this._select.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      this._value = target.value;
      
      if (this._internals) {
        this._internals.setFormValue(this._value);
      }

      this.dispatchCustomEvent('ux4g-change', {
        value: this._value,
        originalEvent: e,
      });

      // Update value attribute
      this.setAttribute('value', this._value);
    });

    wrapper.appendChild(this._select);
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
    if (this._select) {
      this._select.value = val;
    }
    if (this._internals) {
      this._internals.setFormValue(val);
    }
  }

  /**
   * Focus the select
   */
  focus(): void {
    this._select?.focus();
  }

  /**
   * Blur the select
   */
  blur(): void {
    this._select?.blur();
  }
}

// Define the custom element
if (!customElements.get('ux4g-select')) {
  customElements.define('ux4g-select', UX4GSelect);
}
