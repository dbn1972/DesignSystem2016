/**
 * UX4G Search Web Component
 * 
 * @element ux4g-search
 * 
 * @attr {string} name - Form field name
 * @attr {string} value - Current search value
 * @attr {string} placeholder - Placeholder text
 * @attr {boolean} disabled - Disabled state
 * @attr {string} size - Search size: sm, md, lg
 * @attr {boolean} show-suggestions - Show search suggestions
 * @attr {string} suggestions - JSON string of suggestion items
 * @attr {boolean} loading - Show loading spinner
 * 
 * @fires ux4g-search-input - Fired when input value changes
 * @fires ux4g-search-submit - Fired when search is submitted
 * @fires ux4g-search-clear - Fired when search is cleared
 * @fires ux4g-search-select - Fired when suggestion is selected
 * 
 * @example
 * ```html
 * <ux4g-search 
 *   name="search" 
 *   placeholder="Search government services..."
 *   show-suggestions
 *   suggestions='[{"label":"Passport Services","value":"passport"},
 *                 {"label":"Pan Card","value":"pan"}]'>
 * </ux4g-search>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

interface Suggestion {
  label: string;
  value: string;
  description?: string;
}

export class UX4GSearch extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled', 'size', 'show-suggestions', 'suggestions', 'loading'];
  }

  private _input: HTMLInputElement | null = null;
  private _showSuggestions = false;
  private _filteredSuggestions: Suggestion[] = [];

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
  }

  protected render(): void {
    const placeholder = this.getAttribute('placeholder') || 'Search...';
    const disabled = this.getBooleanAttribute('disabled');
    const size = this.getAttributeOrDefault('size', 'md');
    const showSuggestions = this.getBooleanAttribute('show-suggestions');
    const loading = this.getBooleanAttribute('loading');

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', [
      'ux4g-search',
      `ux4g-search-${size}`,
      disabled ? 'ux4g-search-disabled' : '',
    ].filter(Boolean));

    // Search wrapper
    const wrapper = this.createElement('div', ['ux4g-search-wrapper']);

    // Search icon
    const searchIcon = this.createElement('span', ['ux4g-search-icon']);
    searchIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>`;
    wrapper.appendChild(searchIcon);

    // Input field
    this._input = this.createElement('input', ['ux4g-search-input', 'ux4g-input']);
    this._input.type = 'search';
    this._input.placeholder = placeholder;
    this._input.disabled = disabled;
    this._input.value = this._value || '';

    if (this.hasAttribute('name')) {
      this._input.name = this.getAttribute('name')!;
    }

    this._input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      this._value = target.value;
      
      if (this._internals) {
        this._internals.setFormValue(this._value);
      }

      // Filter suggestions
      if (showSuggestions) {
        this.filterSuggestions(this._value);
      }

      this.dispatchCustomEvent('ux4g-search-input', { 
        value: this._value,
        originalEvent: e 
      });
    });

    this._input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.submit();
      } else if (e.key === 'Escape') {
        this.clear();
      }
    });

    this._input.addEventListener('focus', () => {
      if (showSuggestions && this._filteredSuggestions.length > 0) {
        this._showSuggestions = true;
        this.render();
      }
    });

    wrapper.appendChild(this._input);

    // Loading spinner
    if (loading) {
      const spinner = this.createElement('span', ['ux4g-search-loading']);
      spinner.innerHTML = `<svg class="ux4g-spinner" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
      </svg>`;
      wrapper.appendChild(spinner);
    }

    // Clear button
    if (this._value) {
      const clearButton = this.createElement('button', ['ux4g-search-clear']);
      clearButton.setAttribute('type', 'button');
      clearButton.setAttribute('aria-label', 'Clear search');
      clearButton.innerHTML = '×';
      clearButton.addEventListener('click', () => this.clear());
      wrapper.appendChild(clearButton);
    }

    // Search button
    const searchButton = this.createElement('button', ['ux4g-search-button']);
    searchButton.setAttribute('type', 'button');
    searchButton.setAttribute('aria-label', 'Search');
    searchButton.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="m21 21-4.35-4.35"/>
    </svg>`;
    searchButton.addEventListener('click', () => this.submit());
    wrapper.appendChild(searchButton);

    container.appendChild(wrapper);

    // Suggestions dropdown
    if (showSuggestions && this._showSuggestions && this._filteredSuggestions.length > 0) {
      const suggestions = this.createElement('div', ['ux4g-search-suggestions']);
      suggestions.setAttribute('role', 'listbox');

      this._filteredSuggestions.forEach(suggestion => {
        const item = this.createElement('div', ['ux4g-search-suggestion-item']);
        item.setAttribute('role', 'option');
        item.setAttribute('tabindex', '0');

        const label = this.createElement('div', ['ux4g-search-suggestion-label']);
        label.textContent = suggestion.label;
        item.appendChild(label);

        if (suggestion.description) {
          const description = this.createElement('div', ['ux4g-search-suggestion-description']);
          description.textContent = suggestion.description;
          item.appendChild(description);
        }

        item.addEventListener('click', () => {
          this.selectSuggestion(suggestion);
        });

        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            this.selectSuggestion(suggestion);
          }
        });

        suggestions.appendChild(item);
      });

      container.appendChild(suggestions);
    }

    this.root.appendChild(container);
  }

  private filterSuggestions(query: string): void {
    if (!query) {
      this._filteredSuggestions = [];
      this._showSuggestions = false;
      this.render();
      return;
    }

    const suggestionsStr = this.getAttribute('suggestions') || '[]';
    let allSuggestions: Suggestion[] = [];
    
    try {
      allSuggestions = JSON.parse(suggestionsStr);
    } catch (e) {
      console.error('Invalid suggestions JSON');
    }

    this._filteredSuggestions = allSuggestions.filter(suggestion =>
      suggestion.label.toLowerCase().includes(query.toLowerCase()) ||
      (suggestion.description && suggestion.description.toLowerCase().includes(query.toLowerCase()))
    );

    this._showSuggestions = this._filteredSuggestions.length > 0;
    this.render();
  }

  private selectSuggestion(suggestion: Suggestion): void {
    this._value = suggestion.value;
    
    if (this._input) {
      this._input.value = suggestion.label;
    }

    if (this._internals) {
      this._internals.setFormValue(this._value);
    }

    this._showSuggestions = false;
    
    this.dispatchCustomEvent('ux4g-search-select', { suggestion });
    this.submit();
  }

  /**
   * Submit search
   */
  submit(): void {
    this.dispatchCustomEvent('ux4g-search-submit', { value: this._value });
    this._showSuggestions = false;
    this.render();
  }

  /**
   * Clear search
   */
  clear(): void {
    this._value = '';
    
    if (this._input) {
      this._input.value = '';
    }

    if (this._internals) {
      this._internals.setFormValue('');
    }

    this._showSuggestions = false;
    this._filteredSuggestions = [];
    
    this.dispatchCustomEvent('ux4g-search-clear');
    this.render();
    this._input?.focus();
  }

  /**
   * Focus the search input
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
if (!customElements.get('ux4g-search')) {
  customElements.define('ux4g-search', UX4GSearch);
}
