/**
 * UX4G Tag Web Component
 * 
 * @element ux4g-tag
 * 
 * @attr {string} variant - Tag variant: primary, secondary, success, warning, danger, info
 * @attr {string} size - Tag size: sm, md, lg
 * @attr {boolean} dismissible - Show close button
 * @attr {boolean} rounded - Fully rounded corners
 * @attr {boolean} outlined - Outlined style
 * 
 * @fires ux4g-tag-dismiss - Fired when tag is dismissed
 * 
 * @example
 * ```html
 * <ux4g-tag variant="primary" dismissible>Technology</ux4g-tag>
 * <ux4g-tag variant="success" rounded>Active</ux4g-tag>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GTag extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'size', 'dismissible', 'rounded', 'outlined'];
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
    const variant = this.getAttributeOrDefault('variant', 'primary');
    const size = this.getAttributeOrDefault('size', 'md');
    const dismissible = this.getBooleanAttribute('dismissible');
    const rounded = this.getBooleanAttribute('rounded');
    const outlined = this.getBooleanAttribute('outlined');

    // Clear previous content
    this.root.innerHTML = '';

    // Create tag element
    const tag = this.createElement('span', [
      'ux4g-tag',
      `ux4g-tag-${variant}`,
      `ux4g-tag-${size}`,
      rounded ? 'ux4g-tag-rounded' : '',
      outlined ? 'ux4g-tag-outlined' : '',
    ].filter(Boolean));

    // Add content slot
    const content = this.createElement('span', ['ux4g-tag-content']);
    const slot = document.createElement('slot');
    content.appendChild(slot);
    tag.appendChild(content);

    // Add dismiss button if dismissible
    if (dismissible) {
      const dismissButton = this.createElement('button', ['ux4g-tag-dismiss']);
      dismissButton.setAttribute('type', 'button');
      dismissButton.setAttribute('aria-label', 'Dismiss tag');
      dismissButton.innerHTML = '×';
      dismissButton.addEventListener('click', () => {
        this.dismiss();
      });
      tag.appendChild(dismissButton);
    }

    this.root.appendChild(tag);
  }

  /**
   * Dismiss the tag
   */
  dismiss(): void {
    this.dispatchCustomEvent('ux4g-tag-dismiss');
    // Optionally remove the element
    this.remove();
  }

  /**
   * Set variant
   */
  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get variant(): string {
    return this.getAttributeOrDefault('variant', 'primary');
  }

  /**
   * Set size
   */
  set size(value: string) {
    this.setAttribute('size', value);
  }

  get size(): string {
    return this.getAttributeOrDefault('size', 'md');
  }
}

// Define the custom element
if (!customElements.get('ux4g-tag')) {
  customElements.define('ux4g-tag', UX4GTag);
}
