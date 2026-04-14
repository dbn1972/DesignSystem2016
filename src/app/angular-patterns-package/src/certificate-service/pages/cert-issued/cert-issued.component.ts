import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-issued-page',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="ci"><ux4g-service-header icon="🏆" iconColor="#16a34a" category="Certificate Application Service" title="Certificate Issued"></ux4g-service-header>
    <main class="ci-main">
      <div class="ci-card">
        <h2>Birth Certificate</h2>
        <div class="ci-grid">
          <div><span class="ci-label">Applicant</span><span class="ci-val">Priya Sharma</span></div>
          <div><span class="ci-label">Reference</span><span class="ci-val">CERT-2026-MH-654321</span></div>
          <div><span class="ci-label">Certificate Number</span><span class="ci-val">BC/2026/MH/654321</span></div>
          <div><span class="ci-label">Status</span><span class="ci-val ci-val--success">Issued</span></div>
        </div>
        <div class="ci-actions">
          <button class="ci-btn ci-btn--success">📥 Download PDF</button>
          <button class="ci-btn ci-btn--outline">🔍 Verify via QR</button>
        </div>
      </div>
    </main>
    <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Certificate Issued"></ux4g-service-footer></div>
  `,
  styles: [`
    .ci { min-height: 100vh; background: var(--cert-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--cert-fg, #0f172a); }
    .ci-main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
    .ci-card { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; h2 { font-size: 1.25rem; font-weight: 700; margin: 0 0 1rem; } }
    .ci-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
    .ci-label { display: block; font-size: 0.75rem; color: var(--cert-fg-muted, #64748b); }
    .ci-val { font-weight: 600; &--success { color: #16a34a; } }
    .ci-actions { display: flex; gap: 0.75rem; }
    .ci-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: 2px solid transparent; cursor: pointer;
      &--success { background: #16a34a; color: #fff; } &--outline { background: var(--cert-bg, #fff); color: var(--cert-fg-muted, #64748b); border-color: var(--cert-border, #e2e8f0); }
    }
  `],
})
export class CertIssuedComponent {}
