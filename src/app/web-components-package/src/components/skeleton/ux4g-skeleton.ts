/**
 * UX4G Skeleton Web Component
 * 
 * @element ux4g-skeleton
 * 
 * @attr {string} variant - Skeleton variant: text, circle, rect, rounded
 * @attr {string} width - Width (e.g., "100px", "100%")
 * @attr {string} height - Height (e.g., "20px", "50px")
 * @attr {boolean} animated - Show animation/shimmer effect
 * @attr {number} count - Number of skeleton lines (for text variant)
 * 
 * @example
 * ```html
 * <ux4g-skeleton variant="text" count="3" animated></ux4g-skeleton>
 * <ux4g-skeleton variant="circle" width="40px" height="40px"></ux4g-skeleton>
 * <ux4g-skeleton variant="rect" width="100%" height="200px" animated></ux4g-skeleton>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GSkeleton extends UX4GElement {
  static get observedAttributes() {
    return ['variant', 'width', 'height', 'animated', 'count'];
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
    const variant = this.getAttributeOrDefault('variant', 'text');
    const width = this.getAttribute('width');
    const height = this.getAttribute('height');
    const animated = this.getBooleanAttribute('animated');
    const count = parseInt(this.getAttribute('count') || '1');

    // Clear previous content
    this.root.innerHTML = '';

    // Create container
    const container = this.createElement('div', ['ux4g-skeleton-container']);

    if (variant === 'text' && count > 1) {
      // Multiple text lines
      for (let i = 0; i < count; i++) {
        const skeleton = this.createSkeletonElement(variant, width, height, animated);
        container.appendChild(skeleton);
      }
    } else {
      // Single skeleton
      const skeleton = this.createSkeletonElement(variant, width, height, animated);
      container.appendChild(skeleton);
    }

    this.root.appendChild(container);
  }

  private createSkeletonElement(
    variant: string,
    width: string | null,
    height: string | null,
    animated: boolean
  ): HTMLElement {
    const skeleton = this.createElement('div', [
      'ux4g-skeleton',
      `ux4g-skeleton-${variant}`,
      animated ? 'ux4g-skeleton-animated' : '',
    ].filter(Boolean));

    skeleton.setAttribute('aria-busy', 'true');
    skeleton.setAttribute('aria-label', 'Loading');

    // Apply custom dimensions
    if (width) {
      skeleton.style.width = width;
    }
    if (height) {
      skeleton.style.height = height;
    }

    return skeleton;
  }

  /**
   * Set variant
   */
  set variant(value: string) {
    this.setAttribute('variant', value);
  }

  get variant(): string {
    return this.getAttributeOrDefault('variant', 'text');
  }

  /**
   * Set animated
   */
  set animated(value: boolean) {
    this.setBooleanAttribute('animated', value);
  }

  get animated(): boolean {
    return this.getBooleanAttribute('animated');
  }
}

// Define the custom element
if (!customElements.get('ux4g-skeleton')) {
  customElements.define('ux4g-skeleton', UX4GSkeleton);
}
