/**
 * UX4G Chip Input Web Component
 * 
 * @element ux4g-chip-input
 * 
 * @attr {string} name - Form field name
 * @attr {string} value - Comma-separated chip values
 * @attr {string} placeholder - Placeholder text
 * @attr {boolean} disabled - Disabled state
 * @attr {number} max-chips - Maximum number of chips allowed
 * @attr {boolean} allow-duplicates - Allow duplicate chips
 * @attr {string} delimiter - Character to split input (default: comma)
 * @attr {string} variant - Chip variant: default, primary, success, warning, danger
 * 
 * @fires ux4g-chip-add - Fired when chip is added
 * @fires ux4g-chip-remove - Fired when chip is removed
 * @fires ux4g-chips-change - Fired when chips change
 * 
 * @example
 * ```html
 * <ux4g-chip-input 
 *   name="tags" 
 *   placeholder="Add tags..."
 *   max-chips="5"
 *   variant="primary">
 * </ux4g-chip-input>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GChipInput extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled', 'max-chips', 'allow-duplicates', 'delimiter', 'variant'];
  }

  private _input: HTMLInputElement | null = null;
  private _chips: string[] = [];

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    
    // Initialize chips from value
    if (this._value) {
      this._chips = this._value.split(',').map(c => c.trim()).filter(Boolean);
    }
    
    this.render();
  }

  protected render(): void {
    const placeholder = this.getAttribute('placeholder') || 'Type and press Enter...';
    const disabled = this.getBooleanAttribute('disabled');
    const variant = this.getAttributeOrDefault('variant', 'default');

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', [
      'ux4g-chip-input',
      disabled ? 'ux4g-chip-input-disabled' : '',
    ].filter(Boolean));

    // Chips container
    const chipsContainer = this.createElement('div', ['ux4g-chip-input-chips']);

    // Render existing chips
    this._chips.forEach((chip, index) => {
      const chipElement = this.createElement('div', [
        'ux4g-chip',
        `ux4g-chip-${variant}`,
      ]);

      const chipLabel = this.createElement('span', ['ux4g-chip-label']);
      chipLabel.textContent = chip;
      chipElement.appendChild(chipLabel);

      if (!disabled) {
        const removeButton = this.createElement('button', ['ux4g-chip-remove']);
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('aria-label', `Remove ${chip}`);
        removeButton.innerHTML = '×';
        removeButton.addEventListener('click', () => this.removeChip(index));
        chipElement.appendChild(removeButton);
      }

      chipsContainer.appendChild(chipElement);
    });

    // Input field
    this._input = this.createElement('input', ['ux4g-chip-input-field']);
    this._input.type = 'text';
    this._input.placeholder = this._chips.length === 0 ? placeholder : '';
    this._input.disabled = disabled;

    if (this.hasAttribute('name')) {
      // Hidden input for form submission
      const hiddenInput = this.createElement('input', []);
      hiddenInput.type = 'hidden';
      hiddenInput.name = this.getAttribute('name')!;
      hiddenInput.value = this._chips.join(',');
      container.appendChild(hiddenInput);
    }

    this._input.addEventListener('keydown', (e) => {
      const delimiter = this.getAttribute('delimiter') || ',';
      const target = e.target as HTMLInputElement;

      if (e.key === 'Enter' || e.key === delimiter) {
        e.preventDefault();
        this.addChip(target.value.trim());
      } else if (e.key === 'Backspace' && !target.value && this._chips.length > 0) {
        // Remove last chip on backspace when input is empty
        this.removeChip(this._chips.length - 1);
      }
    });

    this._input.addEventListener('blur', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.value.trim()) {
        this.addChip(target.value.trim());
      }
    });

    chipsContainer.appendChild(this._input);
    container.appendChild(chipsContainer);

    // Info text
    const maxChips = this.getAttribute('max-chips');
    if (maxChips) {
      const info = this.createElement('div', ['ux4g-chip-input-info']);
      info.textContent = `${this._chips.length}/${maxChips} chips`;
      container.appendChild(info);
    }

    this.root.appendChild(container);
  }

  private addChip(value: string): void {
    if (!value) return;

    const maxChips = this.getAttribute('max-chips');
    const allowDuplicates = this.getBooleanAttribute('allow-duplicates');

    // Check max chips
    if (maxChips && this._chips.length >= parseInt(maxChips)) {
      console.warn('Maximum number of chips reached');
      return;
    }

    // Check duplicates
    if (!allowDuplicates && this._chips.includes(value)) {
      console.warn('Duplicate chip not allowed');
      if (this._input) {
        this._input.value = '';
      }
      return;
    }

    // Add chip
    this._chips.push(value);
    this.updateValue();

    if (this._input) {
      this._input.value = '';
    }

    this.dispatchCustomEvent('ux4g-chip-add', { 
      chip: value,
      chips: [...this._chips]
    });

    this.render();
  }

  private removeChip(index: number): void {
    const removed = this._chips.splice(index, 1)[0];
    this.updateValue();

    this.dispatchCustomEvent('ux4g-chip-remove', { 
      chip: removed,
      chips: [...this._chips]
    });

    this.render();
    this._input?.focus();
  }

  private updateValue(): void {
    this._value = this._chips.join(',');
    
    if (this._internals) {
      this._internals.setFormValue(this._value);
    }

    this.dispatchCustomEvent('ux4g-chips-change', { 
      value: this._value,
      chips: [...this._chips]
    });
  }

  /**
   * Get all chips
   */
  get chips(): string[] {
    return [...this._chips];
  }

  /**
   * Set chips programmatically
   */
  set chips(values: string[]) {
    this._chips = values.filter(Boolean);
    this.updateValue();
    this.render();
  }

  /**
   * Add a chip programmatically
   */
  addChipValue(value: string): void {
    this.addChip(value);
  }

  /**
   * Remove a chip by value
   */
  removeChipValue(value: string): void {
    const index = this._chips.indexOf(value);
    if (index !== -1) {
      this.removeChip(index);
    }
  }

  /**
   * Clear all chips
   */
  clearChips(): void {
    this._chips = [];
    this.updateValue();
    this.render();
    this._input?.focus();
  }

  /**
   * Focus the input
   */
  focus(): void {
    this._input?.focus();
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
if (!customElements.get('ux4g-chip-input')) {
  customElements.define('ux4g-chip-input', UX4GChipInput);
}
