import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-rejected-page',
  standalone: true,
  imports: [CommonModule, ServiceFooterComponent],
  template: `
    <div class="rj">
      <header class="rj-header"><div class="rj-icon" aria-hidden="true">❌</div><h1>Application Rejected</h1><p>Your application has been reviewed and could not be approved.</p></header>
      <main class="rj-main">
        <div class="rj-card rj-card--red"><div class="rj-ref-label">Reference Number</div><div class="rj-ref">CERT-2026-MH-876543</div>
          <div class="rj-grid"><div><span class="rj-label">Applicant</span><span>Priya Sharma</span></div><div><span class="rj-label">Certificate Type</span><span>Income Certificate</span></div><div><span class="rj-label">Rejection Date</span><span>April 15, 2026</span></div><div><span class="rj-label">Reviewed By</span><span>Suresh Mehta<br/><small>Asst. Certifying Officer</small></span></div></div>
        </div>
        <div class="rj-card"><h2>💬 Reason for Rejection</h2><p>Income proof document is not clear. The salary slip does not show all required details including employer name, employee ID, and monthly breakdown. Additionally, the document appears to be more than 3 months old.</p></div>
        <div class="rj-next"><h3>What Can You Do Next?</h3>
          <div class="rj-option"><div class="rj-option__icon">🔄</div><div><h4>Resubmit Application</h4><p>Fix the issues and submit a new application with correct documents.</p><a href="/reference-service/certificate/start" class="rj-btn rj-btn--primary">Start New Application</a></div></div>
          <div class="rj-option"><div class="rj-option__icon">⚖</div><div><h4>File an Appeal</h4><p>If you believe this rejection was incorrect.</p><a href="/reference-service/certificate/appeal" class="rj-btn rj-btn--primary">File Appeal</a></div></div>
          <div class="rj-option"><div class="rj-option__icon">❓</div><div><h4>Contact Support</h4><p>Need clarification on the rejection.</p><a href="/reference-service/certificate/help" class="rj-btn rj-btn--primary">Get Help</a></div></div>
        </div>
      </main>
      <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Application Rejected"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .rj { min-height: 100vh; background: var(--cert-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--cert-fg, #0f172a); }
    .rj-header { text-align: center; padding: 2rem; background: var(--cert-bg, #fff); border-bottom: 2px solid var(--cert-border, #e2e8f0); h1 { font-size: 1.75rem; font-weight: 700; margin: 0.5rem 0 0.25rem; } p { color: var(--cert-fg-muted, #64748b); margin: 0; } }
    .rj-icon { font-size: 3rem; }
    .rj-main { max-width: 800px; margin: 0 auto; padding: 2rem 1.5rem; }
    .rj-card { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1.5rem; &--red { border-top: 4px solid #dc2626; } h2 { font-size: 1rem; font-weight: 700; margin: 0 0 0.75rem; } p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); line-height: 1.6; margin: 0; } }
    .rj-ref-label { font-size: 0.75rem; color: var(--cert-fg-muted, #64748b); }
    .rj-ref { font-size: 1.5rem; font-weight: 700; font-family: monospace; margin-bottom: 1rem; }
    .rj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.875rem; }
    .rj-label { display: block; font-size: 0.6875rem; color: var(--cert-fg-muted, #64748b); margin-bottom: 0.125rem; }
    .rj-next { background: #fffbeb; border: 2px solid #d97706; border-radius: 0.5rem; padding: 1.5rem; h3 { font-weight: 700; margin: 0 0 1rem; } }
    .rj-option { display: flex; gap: 1rem; background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; margin-bottom: 0.75rem; &__icon { font-size: 1.5rem; flex-shrink: 0; } h4 { font-weight: 700; margin: 0 0 0.25rem; } p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin: 0 0 0.75rem; } }
    .rj-btn { display: inline-block; padding: 0.5rem 1rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; &--primary { background: var(--cert-primary, #000080); color: #fff; } }
  `],
})
export class CertRejectedComponent {}
