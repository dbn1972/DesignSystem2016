/**
 * UX4G Service Footer Web Component
 *
 * @element ux4g-service-footer
 * @attr {string} left-text
 * @attr {string} right-text
 */
import { UX4GElement } from '../base/UX4GElement';

export class UX4GServiceFooter extends UX4GElement {
  static get observedAttributes() { return ['left-text', 'right-text']; }

  constructor() { super({ useShadowDOM: true }); }

  connectedCallback(): void {
    super.connectedCallback();
    this.render();
  }

  protected render(): void {
    const left = this.getAttribute('left-text') || '';
    const right = this.getAttribute('right-text') || '';

    this.root.innerHTML = `
      <style>
        :host { display: block; }
        .sf { background: var(--ux4g-color-surface, #fff); border-top: 2px solid var(--ux4g-color-border, #e2e8f0); margin-top: 4rem; }
        .sf__inner { max-width: 1400px; margin: 0 auto; padding: 1.5rem 3rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        @media (max-width: 640px) { .sf__inner { flex-direction: column; gap: 0.5rem; text-align: center; padding: 1rem; } }
      </style>
      <footer class="sf"><div class="sf__inner"><span>${left}</span><span>${right}</span></div></footer>
    `;
  }
}

if (!customElements.get('ux4g-service-footer')) {
  customElements.define('ux4g-service-footer', UX4GServiceFooter);
}
