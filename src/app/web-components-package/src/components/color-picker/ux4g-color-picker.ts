/**
 * UX4G Color Picker Web Component
 * 
 * @element ux4g-color-picker
 * 
 * @attr {string} name - Form field name
 * @attr {string} value - Current color value (hex)
 * @attr {boolean} disabled - Disabled state
 * @attr {boolean} show-input - Show hex input field
 * @attr {string} presets - JSON string of preset colors
 * 
 * @fires ux4g-color-change - Fired when color changes
 * 
 * @example
 * ```html
 * <ux4g-color-picker 
 *   name="color" 
 *   value="#000080" 
 *   show-input
 *   presets='["#FF5733","#33FF57","#3357FF"]'>
 * </ux4g-color-picker>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GColorPicker extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'disabled', 'show-input', 'presets'];
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
    const showInput = this.getBooleanAttribute('show-input');
    const presetsStr = this.getAttribute('presets');

    let presets: string[] = [];
    if (presetsStr) {
      try {
        presets = JSON.parse(presetsStr);
      } catch (e) {
        console.error('Invalid presets JSON');
      }
    }

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', [
      'ux4g-color-picker',
      disabled ? 'ux4g-color-picker-disabled' : '',
    ].filter(Boolean));

    // Color input wrapper
    const inputWrapper = this.createElement('div', ['ux4g-color-picker-wrapper']);

    // Native color input
    this._input = this.createElement('input', ['ux4g-color-picker-input']);
    this._input.type = 'color';
    this._input.disabled = disabled;
    this._input.value = this._value || '#000000';

    if (this.hasAttribute('name')) {
      this._input.name = this.getAttribute('name')!;
    }

    this._input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      this.updateColor(target.value);
    });

    inputWrapper.appendChild(this._input);

    // Color preview
    const preview = this.createElement('div', ['ux4g-color-preview']);
    preview.style.backgroundColor = this._value || '#000000';
    preview.addEventListener('click', () => {
      if (!disabled) {
        this._input?.click();
      }
    });
    inputWrapper.appendChild(preview);

    container.appendChild(inputWrapper);

    // Hex input field
    if (showInput) {
      const hexInput = this.createElement('input', [
        'ux4g-input',
        'ux4g-color-hex-input',
      ]);
      hexInput.type = 'text';
      hexInput.placeholder = '#000000';
      hexInput.maxLength = 7;
      hexInput.disabled = disabled;
      hexInput.value = this._value || '#000000';

      hexInput.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        let value = target.value.toUpperCase();
        
        // Ensure # prefix
        if (!value.startsWith('#')) {
          value = '#' + value;
        }
        
        // Validate hex color
        if (/^#[0-9A-F]{6}$/i.test(value)) {
          this.updateColor(value);
        }
      });

      container.appendChild(hexInput);
    }

    // Preset colors
    if (presets.length > 0) {
      const presetsContainer = this.createElement('div', ['ux4g-color-presets']);
      const presetsLabel = this.createElement('div', ['ux4g-color-presets-label']);
      presetsLabel.textContent = 'Presets:';
      presetsContainer.appendChild(presetsLabel);

      const presetsGrid = this.createElement('div', ['ux4g-color-presets-grid']);
      
      presets.forEach(color => {
        const preset = this.createElement('button', [
          'ux4g-color-preset',
          this._value === color ? 'ux4g-color-preset-selected' : '',
        ].filter(Boolean));
        
        preset.setAttribute('type', 'button');
        preset.style.backgroundColor = color;
        preset.setAttribute('aria-label', color);
        
        preset.addEventListener('click', () => {
          if (!disabled) {
            this.updateColor(color);
          }
        });
        
        presetsGrid.appendChild(preset);
      });

      presetsContainer.appendChild(presetsGrid);
      container.appendChild(presetsContainer);
    }

    this.root.appendChild(container);
  }

  private updateColor(color: string): void {
    this._value = color;
    
    if (this._input) {
      this._input.value = color;
    }

    if (this._internals) {
      this._internals.setFormValue(this._value);
    }

    // Update preview and hex input
    const preview = this.root.querySelector('.ux4g-color-preview') as HTMLElement;
    if (preview) {
      preview.style.backgroundColor = color;
    }

    const hexInput = this.root.querySelector('.ux4g-color-hex-input') as HTMLInputElement;
    if (hexInput) {
      hexInput.value = color;
    }

    this.dispatchCustomEvent('ux4g-color-change', { color });
    this.render();
  }

  /**
   * Set color
   */
  set value(color: string) {
    this.setAttribute('value', color);
  }

  get value(): string {
    return this._value || '#000000';
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
if (!customElements.get('ux4g-color-picker')) {
  customElements.define('ux4g-color-picker', UX4GColorPicker);
}
