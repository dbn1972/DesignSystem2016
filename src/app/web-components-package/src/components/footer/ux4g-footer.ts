/**
 * UX4G Footer Web Component
 * 
 * @element ux4g-footer
 * 
 * @attr {string} variant - Footer variant: default, minimal, full
 * @attr {string} copyright - Copyright text
 * 
 * @slot - Default slot for main footer content
 * @slot links - Footer links section
 * @slot social - Social media links
 * @slot bottom - Bottom bar content
 * 
 * @example
 * ```html
 * <ux4g-footer variant="full" copyright="© 2024 Government of India">
 *   <div slot="links">
 *     <h4>Quick Links</h4>
 *     <ul>
 *       <li><a href="/about">About</a></li>
 *       <li><a href="/contact">Contact</a></li>
 *     </ul>
 *   </div>
 * </ux4g-footer>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GFooter extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'copyright'];
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
    const copyright = this.getAttribute('copyright');

    // Clear previous content
    this.root.innerHTML = '';

    // Create footer
    const footer = this.createElement('footer', [
      'ux4g-footer',
      `ux4g-footer-${variant}`,
    ]);

    footer.setAttribute('role', 'contentinfo');

    // Container
    const container = this.createElement('div', ['ux4g-footer-container']);

    // Main content
    const main = this.createElement('div', ['ux4g-footer-main']);
    const mainSlot = document.createElement('slot');
    main.appendChild(mainSlot);
    container.appendChild(main);

    // Links section
    const links = this.createElement('div', ['ux4g-footer-links']);
    const linksSlot = document.createElement('slot');
    linksSlot.name = 'links';
    links.appendChild(linksSlot);
    container.appendChild(links);

    // Social section
    const social = this.createElement('div', ['ux4g-footer-social']);
    const socialSlot = document.createElement('slot');
    socialSlot.name = 'social';
    social.appendChild(socialSlot);
    container.appendChild(social);

    footer.appendChild(container);

    // Bottom bar
    const bottom = this.createElement('div', ['ux4g-footer-bottom']);
    
    if (copyright) {
      const copyrightElement = this.createElement('div', ['ux4g-footer-copyright']);
      copyrightElement.textContent = copyright;
      bottom.appendChild(copyrightElement);
    }

    const bottomSlot = document.createElement('slot');
    bottomSlot.name = 'bottom';
    bottom.appendChild(bottomSlot);

    footer.appendChild(bottom);

    this.root.appendChild(footer);
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
if (!customElements.get('ux4g-footer')) {
  customElements.define('ux4g-footer', UX4GFooter);
}
