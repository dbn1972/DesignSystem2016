import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-my-applications-page',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="ma"><ux4g-service-header icon="📁" iconColor="#9333ea" category="User Dashboard" title="My Applications">
      <a href="/reference-service/demo" class="ma-btn ma-btn--success">+ New Application</a>
    </ux4g-service-header>
    <main class="ma-main">
      <div *ngFor="let app of applications" class="ma-card">
        <div class="ma-card__top"><div><h3>{{ app.type }}</h3><p>{{ app.ref }}</p><p>Submitted: {{ app.date }}</p></div><span class="ma-badge">{{ app.status }}</span></div>
        <div class="ma-card__actions">
          <a href="/reference-service/certificate/status-tracker" class="ma-btn ma-btn--outline">👁 Track</a>
          <a *ngIf="app.canDownload" href="/reference-service/certificate/issued" class="ma-btn ma-btn--success">📥 Download</a>
        </div>
      </div>
    </main>
    <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="My Applications"></ux4g-service-footer></div>
  `,
  styles: [`
    .ma { min-height: 100vh; background: var(--cert-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--cert-fg, #0f172a); }
    .ma-main { max-width: 1100px; margin: 0 auto; padding: 2rem 1.5rem; }
    .ma-card { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; margin-bottom: 1rem;
      &__top { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; h3 { font-weight: 700; margin: 0 0 0.125rem; } p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin: 0; } }
      &__actions { display: flex; gap: 0.5rem; margin-top: 1rem; }
    }
    .ma-badge { padding: 0.25rem 0.75rem; border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.25rem; font-size: 0.75rem; font-weight: 700; color: var(--cert-fg-muted, #64748b); white-space: nowrap; }
    .ma-btn { display: inline-flex; align-items: center; gap: 0.375rem; padding: 0.5rem 0.75rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer;
      &--outline { background: var(--cert-bg, #fff); color: var(--cert-fg-muted, #64748b); border-color: var(--cert-border, #e2e8f0); }
      &--success { background: #16a34a; color: #fff; }
    }
  `],
})
export class CertMyApplicationsComponent {
  applications = [
    { type: 'Income Certificate', ref: 'CERT-2026-MH-876543', date: 'April 10, 2026', status: 'Under Review', canDownload: false },
    { type: 'Birth Certificate', ref: 'CERT-2026-MH-654321', date: 'March 15, 2026', status: 'Issued', canDownload: true },
    { type: 'Domicile Certificate', ref: 'CERT-2026-MH-111222', date: 'February 20, 2026', status: 'Rejected', canDownload: false },
  ];
}
