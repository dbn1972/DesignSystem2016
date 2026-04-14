import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux4g-service-footer',
  standalone: true,
  template: `
    <footer class="svc-footer">
      <div class="svc-footer__inner">
        <span>{{ leftText }}</span>
        <span>{{ rightText }}</span>
      </div>
    </footer>
  `,
  styles: [`
    .svc-footer {
      background: var(--ux4g-svc-bg, #fff);
      border-top: 2px solid var(--ux4g-svc-border, #e2e8f0);
      margin-top: 4rem;
    }
    .svc-footer__inner {
      max-width: 1400px; margin: 0 auto; padding: 1.5rem 3rem;
      display: flex; justify-content: space-between; align-items: center;
      font-size: 0.875rem; color: var(--ux4g-svc-fg-muted, #64748b);
    }
    @media (max-width: 640px) {
      .svc-footer__inner { flex-direction: column; gap: 0.5rem; text-align: center; padding: 1rem; }
    }
  `],
})
export class ServiceFooterComponent {
  @Input() leftText = '';
  @Input() rightText = '';
}
