import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-submission-success-page',
  standalone: true,
  imports: [CommonModule, ServiceFooterComponent],
  template: `
    <div class="ss">
      <header class="ss-header"><div class="ss-icon" aria-hidden="true">✅</div><h1>Application Submitted Successfully</h1><p>Your application is now in the review queue.</p></header>
      <main class="ss-main">
        <div class="ss-card">
          <div class="ss-ref-label">Reference Number</div>
          <div class="ss-ref">CERT-2026-MH-876543</div>
          <div class="ss-grid">
            <div><span class="ss-label">Applicant</span><span class="ss-val">Priya Sharma</span></div>
            <div><span class="ss-label">Certificate Type</span><span class="ss-val">Income Certificate</span></div>
            <div><span class="ss-label">Submission Date</span><span class="ss-val">April 10, 2026</span></div>
            <div><span class="ss-label">Status</span><span class="ss-val">Submitted</span></div>
          </div>
          <div class="ss-actions">
            <button class="ss-btn ss-btn--primary">📥 Download Receipt</button>
            <a href="/reference-service/certificate/status-tracker" class="ss-btn ss-btn--outline">Track Status</a>
          </div>
        </div>
        <div class="ss-next"><h2>🔔 What Happens Next</h2><ol><li>Your application will be assigned to an officer.</li><li>You will receive notifications for status updates and correction requests.</li><li>After approval, your certificate will be available for download.</li></ol></div>
      </main>
      <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Submission Success"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .ss { min-height: 100vh; background: var(--cert-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--cert-fg, #0f172a); }
    .ss-header { text-align: center; padding: 2rem; background: var(--cert-bg, #fff); border-bottom: 2px solid var(--cert-border, #e2e8f0); h1 { font-size: 1.5rem; font-weight: 700; margin: 0.5rem 0 0.25rem; } p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin: 0; } }
    .ss-icon { font-size: 3rem; }
    .ss-main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
    .ss-card { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1.5rem; }
    .ss-ref-label { font-size: 0.75rem; color: var(--cert-fg-muted, #64748b); }
    .ss-ref { font-size: 1.5rem; font-weight: 700; font-family: monospace; margin-bottom: 1rem; }
    .ss-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
    .ss-label { display: block; font-size: 0.75rem; color: var(--cert-fg-muted, #64748b); }
    .ss-val { font-weight: 600; }
    .ss-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
    .ss-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer;
      &--primary { background: var(--cert-primary, #000080); color: #fff; } &--outline { background: var(--cert-bg, #fff); color: var(--cert-primary, #000080); border-color: var(--cert-primary, #000080); }
    }
    .ss-next { background: #eff6ff; border: 2px solid #93c5fd; border-radius: 0.5rem; padding: 1.5rem; h2 { font-size: 1rem; font-weight: 700; margin: 0 0 0.75rem; } ol { margin: 0; padding-left: 1.25rem; font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); line-height: 1.8; } }
  `],
})
export class CertSubmissionSuccessComponent {}
