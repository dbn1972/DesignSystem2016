/**
 * UX4G Slider (Range) Web Component
 * 
 * @element ux4g-slider
 * 
 * @attr {string} name - Form field name
 * @attr {number} value - Current value
 * @attr {number} min - Minimum value (default: 0)
 * @attr {number} max - Maximum value (default: 100)
 * @attr {number} step - Step increment (default: 1)
 * @attr {boolean} disabled - Disabled state
 * @attr {boolean} show-value - Show current value
 * @attr {boolean} show-ticks - Show tick marks
 * 
 * @fires ux4g-slider-change - Fired when value changes
 * 
 * @example
 * ```html
 * <ux4g-slider 
 *   name="volume" 
 *   value="50" 
 *   min="0" 
 *   max="100" 
 *   show-value>
 * </ux4g-slider>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GSlider extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'min', 'max', 'step', 'disabled', 'show-value', 'show-ticks'];
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
    const min = parseFloat(this.getAttribute('min') || '0');
    const max = parseFloat(this.getAttribute('max') || '100');
    const step = parseFloat(this.getAttribute('step') || '1');
    const disabled = this.getBooleanAttribute('disabled');
    const showValue = this.getBooleanAttribute('show-value');
    const showTicks = this.getBooleanAttribute('show-ticks');

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', [
      'ux4g-slider',
      disabled ? 'ux4g-slider-disabled' : '',
    ].filter(Boolean));

    // Create input
    this._input = this.createElement('input', ['ux4g-slider-input']);
    this._input.type = 'range';
    this._input.min = String(min);
    this._input.max = String(max);
    this._input.step = String(step);
    this._input.disabled = disabled;
    this._input.value = this._value || String(min);

    if (this.hasAttribute('name')) {
      this._input.name = this.getAttribute('name')!;
    }

    this._input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      this._value = target.value;
      
      if (this._internals) {
        this._internals.setFormValue(this._value);
      }

      // Update value display
      if (showValue) {
        const valueDisplay = this.root.querySelector('.ux4g-slider-value');
        if (valueDisplay) {
          valueDisplay.textContent = this._value;
        }
      }

      this.dispatchCustomEvent('ux4g-slider-change', { 
        value: parseFloat(this._value) 
      });
    });

    container.appendChild(this._input);

    // Value display
    if (showValue) {
      const valueDisplay = this.createElement('div', ['ux4g-slider-value']);
      valueDisplay.textContent = this._value || String(min);
      container.appendChild(valueDisplay);
    }

    // Tick marks
    if (showTicks) {
      const ticks = this.createElement('div', ['ux4g-slider-ticks']);
      const tickCount = Math.floor((max - min) / step) + 1;
      
      for (let i = 0; i < tickCount; i++) {
        const tick = this.createElement('span', ['ux4g-slider-tick']);
        ticks.appendChild(tick);
      }
      
      container.appendChild(ticks);
    }

    this.root.appendChild(container);
  }

  /**
   * Set value (numeric)
   */
  set value(val: number | string) {
    this.setAttribute('value', String(val));
  }

  get value(): string {
    return this._value || '0';
  }

  /** Numeric convenience getter */
  get numericValue(): number {
    return parseFloat(this._value || '0');
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
   * Focus the slider
   */
  focus(): void {
    this._input?.focus();
  }
}

// Define the custom element
if (!customElements.get('ux4g-slider')) {
  customElements.define('ux4g-slider', UX4GSlider);
}
