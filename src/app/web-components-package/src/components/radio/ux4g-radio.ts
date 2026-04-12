/**
 * UX4G Radio Web Component
 * 
 * @element ux4g-radio
 * 
 * @attr {string} label - Radio button label
 * @attr {boolean} checked - Whether radio is checked
 * @attr {boolean} disabled - Whether radio is disabled
 * @attr {boolean} required - Whether radio is required
 * @attr {string} name - Radio group name for form submission
 * @attr {string} value - Radio button value
 * 
 * @fires ux4g-change - Fired when checked state changes
 * 
 * @example
 * ```html
 * <ux4g-radio 
 *   name="gender"
 *   value="male"
 *   label="Male"
 * ></ux4g-radio>
 * <ux4g-radio 
 *   name="gender"
 *   value="female"
 *   label="Female"
 *   checked
 * ></ux4g-radio>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';
import { uniqueId } from '../../utils/helpers';

export class UX4GRadio extends UX4GFormElement {
  static get observedAttributes() {
    return ['label', 'checked', 'disabled', 'required', 'name', 'value'];
  }

  private _radio: HTMLInputElement | null = null;
  private _id: string;
  private _checked: boolean = false;

  constructor() {
    super({ useShadowDOM: true });
    this._id = uniqueId('radio');
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const label = this.getAttribute('label') || '';
    const checked = this.getBooleanAttribute('checked');
    const disabled = this.getBooleanAttribute('disabled');
    const required = this.getBooleanAttribute('required');
    const name = this.getAttribute('name') || '';
    const value = this.getAttribute('value') || '';

    this._checked = checked;
    this._value = checked ? value : '';

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', ['ux4g-radio-wrapper']);

    // Create radio input
    this._radio = this.createElement('input', ['ux4g-radio']);
    this._radio.type = 'radio';
    this._radio.id = this._id;
    this._radio.checked = checked;
    this._radio.disabled = disabled;
    this._radio.required = required;
    this._radio.name = name;
    this._radio.value = value;

    if (required) {
      this._radio.setAttribute('aria-required', 'true');
    }

    // Event listener
    this._radio.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      this._checked = target.checked;
      this._value = target.checked ? value : '';
      
      if (this._internals) {
        this._internals.setFormValue(this._value);
      }

      // Update checked attribute
      if (this._checked) {
        this.setAttribute('checked', '');
        
        // Uncheck other radios with the same name
        this.uncheckOtherRadios();
      } else {
        this.removeAttribute('checked');
      }

      this.dispatchCustomEvent('ux4g-change', {
        checked: this._checked,
        value: this._value,
        name: name,
        originalEvent: e,
      });
    });

    container.appendChild(this._radio);

    // Create label
    if (label) {
      const labelElement = this.createElement('label', [
        'ux4g-radio-label',
        required ? 'ux4g-label-required' : '',
      ].filter(Boolean));
      labelElement.htmlFor = this._id;
      labelElement.textContent = label;
      container.appendChild(labelElement);
    }

    this.root.appendChild(container);
  }

  /**
   * Uncheck other radio buttons with the same name
   */
  private uncheckOtherRadios(): void {
    const name = this.getAttribute('name');
    if (!name) return;

    // Find all ux4g-radio elements with the same name in the document
    const radios = document.querySelectorAll(`ux4g-radio[name="${name}"]`);
    radios.forEach((radio) => {
      if (radio !== this && radio instanceof UX4GRadio) {
        radio.checked = false;
      }
    });
  }

  /**
   * Get/Set checked state
   */
  get checked(): boolean {
    return this._checked;
  }

  set checked(value: boolean) {
    this._checked = value;
    this.setBooleanAttribute('checked', value);
    if (this._radio) {
      this._radio.checked = value;
    }
    
    if (value) {
      const val = this.getAttribute('value') || '';
      this._value = val;
      if (this._internals) {
        this._internals.setFormValue(val);
      }
    } else {
      this._value = '';
      if (this._internals) {
        this._internals.setFormValue('');
      }
    }
  }

  /**
   * Focus the radio button
   */
  focus(): void {
    this._radio?.focus();
  }

  /**
   * Blur the radio button
   */
  blur(): void {
    this._radio?.blur();
  }
}

// Define the custom element
if (!customElements.get('ux4g-radio')) {
  customElements.define('ux4g-radio', UX4GRadio);
}
