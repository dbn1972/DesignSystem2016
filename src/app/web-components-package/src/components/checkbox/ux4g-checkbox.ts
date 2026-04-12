/**
 * UX4G Checkbox Web Component
 * 
 * @element ux4g-checkbox
 * 
 * @attr {string} label - Checkbox label
 * @attr {boolean} checked - Whether checkbox is checked
 * @attr {boolean} disabled - Whether checkbox is disabled
 * @attr {boolean} required - Whether checkbox is required
 * @attr {boolean} indeterminate - Whether checkbox is in indeterminate state
 * @attr {string} name - Checkbox name for form submission
 * @attr {string} value - Checkbox value
 * 
 * @fires ux4g-change - Fired when checked state changes
 * 
 * @example
 * ```html
 * <ux4g-checkbox 
 *   label="I agree to the terms and conditions" 
 *   required
 * ></ux4g-checkbox>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';
import { uniqueId } from '../../utils/helpers';

export class UX4GCheckbox extends UX4GFormElement {
  static get observedAttributes() {
    return ['label', 'checked', 'disabled', 'required', 'indeterminate', 'name', 'value'];
  }

  private _checkbox: HTMLInputElement | null = null;
  private _id: string;
  private _checked: boolean = false;

  constructor() {
    super({ useShadowDOM: true });
    this._id = uniqueId('checkbox');
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
    const indeterminate = this.getBooleanAttribute('indeterminate');
    const name = this.getAttribute('name') || '';
    const value = this.getAttribute('value') || 'on';

    this._checked = checked;

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', ['ux4g-checkbox-wrapper']);

    // Create checkbox input
    this._checkbox = this.createElement('input', ['ux4g-checkbox']);
    this._checkbox.type = 'checkbox';
    this._checkbox.id = this._id;
    this._checkbox.checked = checked;
    this._checkbox.disabled = disabled;
    this._checkbox.required = required;
    this._checkbox.name = name;
    this._checkbox.value = value;

    if (indeterminate) {
      this._checkbox.indeterminate = true;
    }

    if (required) {
      this._checkbox.setAttribute('aria-required', 'true');
    }

    // Event listener
    this._checkbox.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      this._checked = target.checked;
      this._value = target.checked ? value : '';
      
      if (this._internals) {
        this._internals.setFormValue(this._value);
      }

      this.dispatchCustomEvent('ux4g-change', {
        checked: this._checked,
        value: this._value,
        originalEvent: e,
      });

      // Update checked attribute
      if (this._checked) {
        this.setAttribute('checked', '');
      } else {
        this.removeAttribute('checked');
      }
    });

    container.appendChild(this._checkbox);

    // Create label
    if (label) {
      const labelElement = this.createElement('label', [
        'ux4g-checkbox-label',
        required ? 'ux4g-label-required' : '',
      ].filter(Boolean));
      labelElement.htmlFor = this._id;
      labelElement.textContent = label;
      container.appendChild(labelElement);
    }

    this.root.appendChild(container);
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
    if (this._checkbox) {
      this._checkbox.checked = value;
    }
  }

  /**
   * Get/Set indeterminate state
   */
  get indeterminate(): boolean {
    return this._checkbox?.indeterminate ?? false;
  }

  set indeterminate(value: boolean) {
    this.setBooleanAttribute('indeterminate', value);
    if (this._checkbox) {
      this._checkbox.indeterminate = value;
    }
  }

  /**
   * Focus the checkbox
   */
  focus(): void {
    this._checkbox?.focus();
  }

  /**
   * Blur the checkbox
   */
  blur(): void {
    this._checkbox?.blur();
  }
}

// Define the custom element
if (!customElements.get('ux4g-checkbox')) {
  customElements.define('ux4g-checkbox', UX4GCheckbox);
}
