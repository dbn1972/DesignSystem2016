/**
 * UX4G Switch Web Component
 * 
 * @element ux4g-switch
 * 
 * @attr {string} size - Switch size: sm, md, lg
 * @attr {boolean} checked - Whether switch is checked
 * @attr {boolean} disabled - Whether switch is disabled
 * @attr {string} name - Form field name
 * @attr {string} value - Form field value
 * 
 * @fires ux4g-change - Fired when switch state changes
 * 
 * @example
 * ```html
 * <ux4g-switch name="notifications" checked>
 *   Enable Notifications
 * </ux4g-switch>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GSwitch extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['size', 'checked', 'disabled', 'name', 'value'];
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
    const size = this.getAttributeOrDefault('size', 'md');
    const checked = this.getBooleanAttribute('checked');
    const disabled = this.getBooleanAttribute('disabled');

    // Clear previous content
    this.root.innerHTML = '';

    // Create label container
    const label = this.createElement('label', [
      'ux4g-switch-container',
      disabled ? 'ux4g-switch-disabled' : '',
    ].filter(Boolean));

    // Create hidden input
    this._input = this.createElement('input', ['ux4g-switch-input']);
    this._input.type = 'checkbox';
    this._input.checked = checked;
    this._input.disabled = disabled;
    
    if (this.hasAttribute('name')) {
      this._input.name = this.getAttribute('name')!;
    }

    this._input.addEventListener('change', () => {
      this.setBooleanAttribute('checked', this._input!.checked);
      this.dispatchCustomEvent('ux4g-change', { 
        checked: this._input!.checked,
        value: this._input!.value 
      });
      
      // Update form value
      if (this._internals) {
        this._internals.setFormValue(this._input!.checked ? 'on' : null);
      }
    });

    // Create switch visual
    const switchElement = this.createElement('span', [
      'ux4g-switch',
      `ux4g-switch-${size}`,
      checked ? 'ux4g-switch-checked' : '',
    ].filter(Boolean));

    const thumb = this.createElement('span', ['ux4g-switch-thumb']);
    switchElement.appendChild(thumb);

    // Create label text slot
    const labelText = this.createElement('span', ['ux4g-switch-label']);
    const slot = document.createElement('slot');
    labelText.appendChild(slot);

    label.appendChild(this._input);
    label.appendChild(switchElement);
    label.appendChild(labelText);

    this.root.appendChild(label);
  }

  /**
   * Set checked state
   */
  set checked(value: boolean) {
    this.setBooleanAttribute('checked', value);
    if (this._internals) {
      this._internals.setFormValue(value ? 'on' : null);
    }
  }

  get checked(): boolean {
    return this.getBooleanAttribute('checked');
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
   * Toggle the switch
   */
  toggle(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this._input?.click();
    }
  }
}

// Define the custom element
if (!customElements.get('ux4g-switch')) {
  customElements.define('ux4g-switch', UX4GSwitch);
}
