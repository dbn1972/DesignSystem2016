/**
 * UX4G Service Header Web Component
 *
 * @element ux4g-service-header
 * @attr {string} icon - Emoji or text icon
 * @attr {string} icon-color - Background color for icon
 * @attr {string} category - Category/subtitle text
 * @attr {string} heading - Main heading text
 */
import { UX4GElement } from '../base/UX4GElement';

export class UX4GServiceHeader extends UX4GElement {
  static get observedAttributes() {
    return ['icon', 'icon-color', 'category', 'heading'];
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
    const icon = this.getAttribute('icon') || '📄';
    const iconColor = this.getAttribute('icon-color') || '#16a34a';
    const category = this.getAttribute('category') || '';
    const heading = this.getAttribute('heading') || '';

    this.root.innerHTML = `
      <style>
        :host { display: block; }
        .sh { border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); }
        .sh__tri { height: 4px; background: linear-gradient(to right, #FF9933, #fff, #138808); }
        .sh__inner { max-width: 1400px; margin: 0 auto; padding: 1.25rem 3rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
        .sh__left { display: flex; align-items: center; gap: 0.75rem; }
        .sh__icon { width: 3rem; height: 3rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0; color: #fff; }
        .sh__cat { font-size: 0.8125rem; color: var(--ux4g-color-text-muted, #64748b); }
        .sh__title { font-size: 1.375rem; font-weight: 700; color: var(--ux4g-color-text-default, #0f172a); margin: 0; }
        @media (max-width: 640px) { .sh__inner { padding: 1rem; flex-direction: column; align-items: flex-start; } }
      </style>
      <header class="sh">
        <div class="sh__tri" aria-hidden="true"></div>
        <div class="sh__inner">
          <div class="sh__left">
            <div class="sh__icon" style="background:${iconColor}" aria-hidden="true">${icon}</div>
            <div>
              <div class="sh__cat">${category}</div>
              <h1 class="sh__title">${heading}</h1>
            </div>
          </div>
          <slot name="actions"></slot>
        </div>
      </header>
    `;
  }
}

if (!customElements.get('ux4g-service-header')) {
  customElements.define('ux4g-service-header', UX4GServiceHeader);
}
