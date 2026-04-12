/**
 * UX4G Language Selector Web Component
 * 
 * @element ux4g-language-selector
 * 
 * @attr {string} name - Form field name
 * @attr {string} value - Current selected language code
 * @attr {string} variant - Variant: dropdown, buttons
 * @attr {string} languages - JSON string of available languages
 * 
 * @fires ux4g-language-change - Fired when language changes
 * 
 * @example
 * ```html
 * <ux4g-language-selector 
 *   name="language" 
 *   value="en"
 *   variant="dropdown"
 *   languages='[{"code":"en","name":"English"},{"code":"hi","name":"हिन्दी"}]'>
 * </ux4g-language-selector>
 * ```
 */

import { UX4GFormElement } from '../../base/UX4GElement';

export class UX4GLanguageSelector extends UX4GFormElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['name', 'value', 'variant', 'languages'];
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
    const variant = this.getAttributeOrDefault('variant', 'dropdown');
    const languagesStr = this.getAttribute('languages') || JSON.stringify([
      { code: 'en', name: 'English', native: 'English' },
      { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
      { code: 'bn', name: 'Bengali', native: 'বাংলা' },
      { code: 'te', name: 'Telugu', native: 'తెలుగు' },
      { code: 'mr', name: 'Marathi', native: 'मराठी' },
      { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
      { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
      { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
      { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
      { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
    ]);
    
    const languages = JSON.parse(languagesStr);

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', [
      'ux4g-language-selector',
      `ux4g-language-selector-${variant}`,
    ]);

    if (variant === 'dropdown') {
      this.renderDropdown(container, languages);
    } else if (variant === 'buttons') {
      this.renderButtons(container, languages);
    }

    this.root.appendChild(container);
  }

  private renderDropdown(container: HTMLElement, languages: Array<{ code: string; name: string; native?: string }>): void {
    const select = this.createElement('select', ['ux4g-select', 'ux4g-language-select']);
    
    if (this.hasAttribute('name')) {
      select.name = this.getAttribute('name')!;
    }

    languages.forEach(lang => {
      const option = this.createElement('option', []);
      option.value = lang.code;
      option.textContent = lang.native || lang.name;
      option.selected = this._value === lang.code;
      select.appendChild(option);
    });

    select.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      this.selectLanguage(target.value);
    });

    container.appendChild(select);
  }

  private renderButtons(container: HTMLElement, languages: Array<{ code: string; name: string; native?: string }>): void {
    const buttonGroup = this.createElement('div', ['ux4g-language-buttons']);
    
    languages.forEach(lang => {
      const button = this.createElement('button', [
        'ux4g-language-button',
        this._value === lang.code ? 'ux4g-language-button-active' : '',
      ].filter(Boolean));
      
      button.setAttribute('type', 'button');
      button.setAttribute('data-code', lang.code);
      button.textContent = lang.native || lang.name;
      
      button.addEventListener('click', () => {
        this.selectLanguage(lang.code);
      });
      
      buttonGroup.appendChild(button);
    });

    container.appendChild(buttonGroup);
  }

  private selectLanguage(code: string): void {
    this._value = code;
    
    if (this._internals) {
      this._internals.setFormValue(this._value);
    }

    this.dispatchCustomEvent('ux4g-language-change', { 
      language: this._value 
    });
    
    this.render();
  }

  /**
   * Set language
   */
  set value(code: string) {
    this.setAttribute('value', code);
  }

  get value(): string {
    return this._value || 'en';
  }
}

// Define the custom element
if (!customElements.get('ux4g-language-selector')) {
  customElements.define('ux4g-language-selector', UX4GLanguageSelector);
}
