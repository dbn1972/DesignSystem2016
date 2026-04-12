/**
 * UX4G Textarea Web Component
 * 
 * @element ux4g-textarea
 * 
 * @attr {string} name - Form field name
 * @attr {string} value - Textarea value
 * @attr {string} placeholder - Placeholder text
 * @attr {boolean} disabled - Whether textarea is disabled
 * @attr {boolean} readonly - Whether textarea is readonly
 * @attr {boolean} required - Whether textarea is required
 * @attr {number} rows - Number of visible text lines
 * @attr {number} cols - Number of visible text columns
 * @attr {number} maxlength - Maximum number of characters
 * @attr {boolean} resize - Enable resize (vertical, horizontal, both, none)
 * 
 * @fires ux4g-input - Fired when textarea value changes
 * @fires ux4g-change - Fired when textarea loses focus after value change
 * 
 * @example
 * ```html
 * <ux4g-textarea 
 *   name="description" 
 *   placeholder="Enter description"
 *   rows="4"
 *   maxlength="500">
 * </ux4g-textarea>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GTextarea extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled', 'readonly', 'required', 'rows', 'cols', 'maxlength', 'resize'];
  }

  private _textarea: HTMLTextAreaElement | null = null;

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
    const readonly = this.getBooleanAttribute('readonly');
    const required = this.getBooleanAttribute('required');
    const resize = this.getAttributeOrDefault('resize', 'vertical');

    // Clear previous content
    this.root.innerHTML = '';

    // Create textarea container
    const container = this.createElement('div', ['ux4g-textarea-container']);

    // Create textarea element
    this._textarea = this.createElement('textarea', [
      'ux4g-textarea',
      `ux4g-textarea-resize-${resize}`,
      disabled ? 'ux4g-textarea-disabled' : '',
      readonly ? 'ux4g-textarea-readonly' : '',
    ].filter(Boolean));

    // Set attributes
    if (this.hasAttribute('name')) {
      this._textarea.name = this.getAttribute('name')!;
    }

    if (this.hasAttribute('placeholder')) {
      this._textarea.placeholder = this.getAttribute('placeholder')!;
    }

    if (this.hasAttribute('value')) {
      this._textarea.value = this.getAttribute('value')!;
      this._value = this._textarea.value;
    }

    if (this.hasAttribute('rows')) {
      this._textarea.rows = parseInt(this.getAttribute('rows')!) || 3;
    }

    if (this.hasAttribute('cols')) {
      this._textarea.cols = parseInt(this.getAttribute('cols')!) || 20;
    }

    if (this.hasAttribute('maxlength')) {
      this._textarea.maxLength = parseInt(this.getAttribute('maxlength')!);
    }

    this._textarea.disabled = disabled;
    this._textarea.readOnly = readonly;
    this._textarea.required = required;

    // Event listeners
    this._textarea.addEventListener('input', (e) => {
      const target = e.target as HTMLTextAreaElement;
      this._value = target.value;
      
      if (this._internals) {
        this._internals.setFormValue(this._value);
      }

      this.dispatchCustomEvent('ux4g-input', { 
        value: this._value,
        originalEvent: e 
      });
    });

    this._textarea.addEventListener('change', (e) => {
      this.dispatchCustomEvent('ux4g-change', { 
        value: this._value,
        originalEvent: e 
      });
    });

    container.appendChild(this._textarea);
    this.root.appendChild(container);
  }

  /**
   * Get textarea value
   */
  get value(): string {
    return this._value;
  }

  /**
   * Set textarea value
   */
  set value(val: string) {
    this._value = val;
    this.setAttribute('value', val);
    
    if (this._textarea) {
      this._textarea.value = val;
    }
    
    if (this._internals) {
      this._internals.setFormValue(val);
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
   * Focus the textarea
   */
  focus(): void {
    this._textarea?.focus();
  }

  /**
   * Blur the textarea
   */
  blur(): void {
    this._textarea?.blur();
  }

  /**
   * Select text in the textarea
   */
  select(): void {
    this._textarea?.select();
  }
}

// Define the custom element
if (!customElements.get('ux4g-textarea')) {
  customElements.define('ux4g-textarea', UX4GTextarea);
}
