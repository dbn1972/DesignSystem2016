/**
 * UX4G Back to Top Web Component
 * 
 * @element ux4g-back-to-top
 * 
 * @attr {number} visibility-height - Scroll height to show button (default: 300px)
 * @attr {string} position - Button position: bottom-right, bottom-left, bottom-center
 * @attr {string} shape - Button shape: circle, square
 * 
 * @fires ux4g-back-to-top-click - Fired when button is clicked
 * 
 * @example
 * ```html
 * <ux4g-back-to-top visibility-height="400" position="bottom-right" shape="circle"></ux4g-back-to-top>
 * ```
 */

import { UX4GElement } from '../../base/UX4GElement';

export class UX4GBackToTop extends UX4GElement {
  static get observedAttributes() {
    return ['visibility-height', 'position', 'shape'];
  }

  private _visible = false;
  private _scrollHandler: (() => void) | null = null;

  constructor() {
    super({ useShadowDOM: true });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.importUX4GStyles();
    this.render();
    this.attachScrollListener();
  }

  disconnectedCallback(): void {
    this.removeScrollListener();
  }

  protected render(): void {
    const position = this.getAttributeOrDefault('position', 'bottom-right');
    const shape = this.getAttributeOrDefault('shape', 'circle');

    // Clear previous content
    this.root.innerHTML = '';

    // Create back to top button
    const button = this.createElement('button', [
      'ux4g-back-to-top',
      `ux4g-back-to-top-${position}`,
      `ux4g-back-to-top-${shape}`,
      this._visible ? 'ux4g-back-to-top-visible' : '',
    ].filter(Boolean));

    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', 'Back to top');
    button.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>';

    button.addEventListener('click', () => {
      this.scrollToTop();
    });

    this.root.appendChild(button);
  }

  private attachScrollListener(): void {
    this._scrollHandler = () => {
      const visibilityHeight = parseInt(this.getAttribute('visibility-height') || '300');
      const shouldBeVisible = window.pageYOffset > visibilityHeight;

      if (shouldBeVisible !== this._visible) {
        this._visible = shouldBeVisible;
        this.render();
      }
    };

    window.addEventListener('scroll', this._scrollHandler);
  }

  private removeScrollListener(): void {
    if (this._scrollHandler) {
      window.removeEventListener('scroll', this._scrollHandler);
    }
  }

  /**
   * Scroll to top of page
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.dispatchCustomEvent('ux4g-back-to-top-click');
  }

  /**
   * Set visibility height
   */
  set visibilityHeight(value: number) {
    this.setAttribute('visibility-height', String(value));
  }

  get visibilityHeight(): number {
    return parseInt(this.getAttribute('visibility-height') || '300');
  }
}

// Define the custom element
if (!customElements.get('ux4g-back-to-top')) {
  customElements.define('ux4g-back-to-top', UX4GBackToTop);
}
