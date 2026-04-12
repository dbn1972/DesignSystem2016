/**
 * UX4G Segmented Control Web Component
 * 
 * @element ux4g-segmented-control
 * 
 * @attr {string} name - Form field name
 * @attr {string} value - Current selected value
 * @attr {boolean} disabled - Whether control is disabled
 * @attr {string} size - Control size: sm, md, lg
 * @attr {string} options - JSON string of options array
 * 
 * @fires ux4g-segment-change - Fired when selection changes
 * 
 * @example
 * ```html
 * <ux4g-segmented-control 
 *   name="view" 
 *   value="grid"
 *   options='[{"value":"list","label":"List"},{"value":"grid","label":"Grid"}]'>
 * </ux4g-segmented-control>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GSegmentedControl extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'disabled', 'size', 'options'];
  }

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
    const size = this.getAttributeOrDefault('size', 'md');
    const optionsStr = this.getAttribute('options') || '[]';
    const options = JSON.parse(optionsStr);

    // Clear previous content
    this.root.innerHTML = '';

    // Create segmented control container
    const container = this.createElement('div', [
      'ux4g-segmented-control',
      `ux4g-segmented-control-${size}`,
      disabled ? 'ux4g-segmented-control-disabled' : '',
    ].filter(Boolean));

    container.setAttribute('role', 'radiogroup');

    options.forEach((option: { value: string; label: string; icon?: string }) => {
      const segment = this.createElement('button', [
        'ux4g-segment',
        this._value === option.value ? 'ux4g-segment-active' : '',
      ].filter(Boolean));

      segment.setAttribute('type', 'button');
      segment.setAttribute('role', 'radio');
      segment.setAttribute('aria-checked', String(this._value === option.value));
      segment.disabled = disabled;

      if (option.icon) {
        const icon = this.createElement('span', ['ux4g-segment-icon']);
        icon.innerHTML = option.icon;
        segment.appendChild(icon);
      }

      const label = this.createElement('span', ['ux4g-segment-label']);
      label.textContent = option.label;
      segment.appendChild(label);

      segment.addEventListener('click', () => {
        if (!disabled) {
          this.selectSegment(option.value);
        }
      });

      container.appendChild(segment);
    });

    this.root.appendChild(container);
  }

  private selectSegment(value: string): void {
    this._value = value;
    
    if (this._internals) {
      this._internals.setFormValue(this._value);
    }

    this.dispatchCustomEvent('ux4g-segment-change', { value: this._value });
    this.render();
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
if (!customElements.get('ux4g-segmented-control')) {
  customElements.define('ux4g-segmented-control', UX4GSegmentedControl);
}
