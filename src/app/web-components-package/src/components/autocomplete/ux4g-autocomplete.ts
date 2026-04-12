/**
 * UX4G Autocomplete Web Component
 * 
 * @element ux4g-autocomplete
 * 
 * @attr {string} name - Form field name
 * @attr {string} value - Current value
 * @attr {string} placeholder - Placeholder text
 * @attr {boolean} disabled - Whether autocomplete is disabled
 * @attr {string} options - JSON string of options array
 * @attr {number} min-chars - Minimum characters to trigger suggestions (default: 1)
 * 
 * @fires ux4g-autocomplete-select - Fired when option is selected
 * @fires ux4g-autocomplete-search - Fired when search text changes
 * 
 * @example
 * ```html
 * <ux4g-autocomplete 
 *   name="city" 
 *   placeholder="Search city..."
 *   options='[{"value":"delhi","label":"Delhi"},{"value":"mumbai","label":"Mumbai"}]'>
 * </ux4g-autocomplete>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GAutocomplete extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled', 'options', 'min-chars'];
  }

  private _input: HTMLInputElement | null = null;
  private _isOpen = false;
  private _filteredOptions: Array<{ value: string; label: string }> = [];

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const placeholder = this.getAttribute('placeholder') || '';
    const disabled = this.getBooleanAttribute('disabled');

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', ['ux4g-autocomplete']);

    // Create input
    this._input = this.createElement('input', [
      'ux4g-autocomplete-input',
      'ux4g-input',
    ]);
    this._input.type = 'text';
    this._input.placeholder = placeholder;
    this._input.disabled = disabled;
    this._input.value = this._value;

    if (this.hasAttribute('name')) {
      this._input.name = this.getAttribute('name')!;
    }

    this._input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      this._value = target.value;
      this.filterOptions(this._value);
      this.dispatchCustomEvent('ux4g-autocomplete-search', { query: this._value });
    });

    this._input.addEventListener('focus', () => {
      this.filterOptions(this._value);
    });

    container.appendChild(this._input);

    // Create dropdown
    const dropdown = this.createElement('div', [
      'ux4g-autocomplete-dropdown',
      this._isOpen && this._filteredOptions.length > 0 ? 'ux4g-autocomplete-dropdown-open' : '',
    ].filter(Boolean));

    dropdown.setAttribute('role', 'listbox');

    this._filteredOptions.forEach((option) => {
      const item = this.createElement('div', ['ux4g-autocomplete-option']);
      item.setAttribute('role', 'option');
      item.textContent = option.label;
      item.addEventListener('click', () => this.selectOption(option));
      dropdown.appendChild(item);
    });

    container.appendChild(dropdown);

    this.root.appendChild(container);
  }

  private filterOptions(query: string): void {
    const minChars = parseInt(this.getAttribute('min-chars') || '1');
    
    if (query.length < minChars) {
      this._isOpen = false;
      this._filteredOptions = [];
      this.render();
      return;
    }

    const optionsStr = this.getAttribute('options') || '[]';
    const allOptions = JSON.parse(optionsStr);
    
    this._filteredOptions = allOptions.filter((opt: { label: string }) =>
      opt.label.toLowerCase().includes(query.toLowerCase())
    );

    this._isOpen = true;
    this.render();
  }

  private selectOption(option: { value: string; label: string }): void {
    this._value = option.value;
    if (this._input) {
      this._input.value = option.label;
    }
    
    if (this._internals) {
      this._internals.setFormValue(this._value);
    }

    this._isOpen = false;
    this.dispatchCustomEvent('ux4g-autocomplete-select', { option });
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
if (!customElements.get('ux4g-autocomplete')) {
  customElements.define('ux4g-autocomplete', UX4GAutocomplete);
}
