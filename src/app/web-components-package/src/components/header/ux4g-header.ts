/**
 * UX4G Header Web Component
 * 
 * @element ux4g-header
 * 
 * @attr {string} variant - Header variant: default, transparent, sticky
 * @attr {string} logo-src - Logo image source
 * @attr {string} logo-alt - Logo alt text
 * @attr {string} title - Site/application title
 * 
 * @slot logo - Custom logo content
 * @slot nav - Navigation content
 * @slot actions - Action buttons (login, profile, etc.)
 * 
 * @example
 * ```html
 * <ux4g-header variant="sticky" title="Government Portal">
 *   <nav slot="nav">
 *     <ux4g-menu mode="horizontal">...</ux4g-menu>
 *   </nav>
 *   <div slot="actions">
 *     <ux4g-button>Login</ux4g-button>
 *   </div>
 * </ux4g-header>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GHeader extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'logo-src', 'logo-alt', 'title'];
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
    const variant = this.getAttributeOrDefault('variant', 'default');
    const logoSrc = this.getAttribute('logo-src');
    const logoAlt = this.getAttribute('logo-alt') || 'Logo';
    const title = this.getAttribute('title');

    // Clear previous content
    this.root.innerHTML = '';

    // Create header
    const header = this.createElement('header', [
      'ux4g-header',
      `ux4g-header-${variant}`,
    ]);

    header.setAttribute('role', 'banner');

    // Container
    const container = this.createElement('div', ['ux4g-header-container']);

    // Logo section
    const logoSection = this.createElement('div', ['ux4g-header-logo']);
    
    const logoSlot = document.createElement('slot');
    logoSlot.name = 'logo';
    
    if (logoSrc) {
      const logo = this.createElement('img', ['ux4g-header-logo-img']);
      logo.src = logoSrc;
      logo.alt = logoAlt;
      logoSection.appendChild(logo);
    }
    
    logoSection.appendChild(logoSlot);

    if (title) {
      const titleElement = this.createElement('span', ['ux4g-header-title']);
      titleElement.textContent = title;
      logoSection.appendChild(titleElement);
    }

    container.appendChild(logoSection);

    // Navigation
    const nav = this.createElement('nav', ['ux4g-header-nav']);
    nav.setAttribute('role', 'navigation');
    const navSlot = document.createElement('slot');
    navSlot.name = 'nav';
    nav.appendChild(navSlot);
    container.appendChild(nav);

    // Actions
    const actions = this.createElement('div', ['ux4g-header-actions']);
    const actionsSlot = document.createElement('slot');
    actionsSlot.name = 'actions';
    actions.appendChild(actionsSlot);
    container.appendChild(actions);

    header.appendChild(container);
    this.root.appendChild(header);
  }

  /**
   * Set variant
   */
  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get variant(): string {
    return this.getAttributeOrDefault('variant', 'default');
  }
}

// Define the custom element
if (!customElements.get('ux4g-header')) {
  customElements.define('ux4g-header', UX4GHeader);
}
