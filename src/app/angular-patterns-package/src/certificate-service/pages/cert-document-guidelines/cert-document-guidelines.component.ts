import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-document-guidelines-page',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="cp"><ux4g-service-header icon="📄" iconColor="#16a34a" category="Application Help" title="Document Requirements & Guidelines"></ux4g-service-header>
    <main class="cp-container cp-main">
      <div class="cp-alert cp-alert--warning"><span aria-hidden="true">⚠</span><div><strong>Important: Read Before Uploading</strong><p>Ensure all documents meet specifications below. Incomplete or unclear documents cause rejection and delays.</p></div></div>
      <div *ngFor="let doc of documents" class="cp-doc-card">
        <div class="cp-doc-card__header"><h3>{{ doc.name }}</h3><span class="cp-badge" [class.cp-badge--req]="doc.required" [class.cp-badge--opt]="!doc.required">{{ doc.required ? 'REQUIRED' : 'CONDITIONAL' }}</span></div>
        <div class="cp-doc-card__body">
          <div><h4>✓ Accepted</h4><ul><li *ngFor="let a of doc.accepted">{{ a }}</li></ul></div>
          <div><h4>📐 Specifications</h4><ul><li *ngFor="let s of doc.specs">{{ s }}</li></ul></div>
          <div><h4>✗ Common Errors</h4><ul class="cp-errors"><li *ngFor="let e of doc.errors">{{ e }}</li></ul></div>
        </div>
      </div>
      <div class="cp-tech-box"><h3>General Technical Guidelines</h3>
        <div class="cp-tech-grid">
          <div><h4>Formats</h4><p>PDF, JPG/JPEG, PNG</p></div>
          <div><h4>Max Size</h4><p>2 MB per document (Photo: 50–200 KB)</p></div>
          <div><h4>Quality</h4><p>Min 300 DPI, color preferred, correct orientation</p></div>
          <div><h4>Validity</h4><p>ID: valid, Bills: 3 months, Photo: 6 months</p></div>
        </div>
      </div>
    </main>
    <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Document Guidelines"></ux4g-service-footer></div>
  `,
  styles: [`
    .cp { min-height: 100vh; background: var(--cert-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--cert-fg, #0f172a); }
    .cp-container { max-width: 1400px; margin: 0 auto; padding: 0 3rem; }
    .cp-main { padding: 2rem 3rem; }
    .cp-alert { display: flex; gap: 0.75rem; padding: 1rem; border-radius: 0.5rem; margin-bottom: 2rem; font-size: 0.875rem; &--warning { background: #fffbeb; border: 2px solid #d97706; color: #92400e; } strong { display: block; margin-bottom: 0.25rem; } p { margin: 0; } }
    .cp-doc-card { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; overflow: hidden; margin-bottom: 1.5rem;
      &__header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background: var(--cert-bg-muted, #f8fafc); border-bottom: 2px solid var(--cert-border, #e2e8f0); h3 { font-size: 1rem; font-weight: 700; margin: 0; } }
      &__body { padding: 1.5rem; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; h4 { font-size: 0.8125rem; font-weight: 700; margin: 0 0 0.5rem; } ul { margin: 0; padding-left: 1rem; font-size: 0.8125rem; color: var(--cert-fg-muted, #64748b); li { margin-bottom: 0.25rem; } } }
    }
    .cp-badge { padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.6875rem; font-weight: 700; &--req { background: #fef2f2; color: #dc2626; border: 1px solid #dc2626; } &--opt { background: #eff6ff; color: #2563eb; border: 1px solid #2563eb; } }
    .cp-errors li { color: #dc2626; }
    .cp-tech-box { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; h3 { font-size: 1rem; font-weight: 700; margin: 0 0 1rem; } }
    .cp-tech-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; h4 { font-size: 0.8125rem; font-weight: 700; margin: 0 0 0.25rem; } p { font-size: 0.8125rem; color: var(--cert-fg-muted, #64748b); margin: 0; } }
    @media (max-width: 768px) { .cp-container, .cp-main { padding-left: 1rem; padding-right: 1rem; } .cp-doc-card__body, .cp-tech-grid { grid-template-columns: 1fr; } }
  `],
})
export class CertDocumentGuidelinesComponent {
  documents = [
    { name: 'Identity Proof', required: true, accepted: ['Aadhaar Card', 'Voter ID', 'Passport', 'Driving License'], specs: ['Clear colored scan', 'All corners visible', 'Max 2 MB', 'PDF/JPG/PNG'], errors: ['Blurred image', 'B&W photocopy', 'Cropped document', 'Expired document'] },
    { name: 'Address Proof', required: true, accepted: ['Electricity Bill', 'Gas Bill', 'Rent Agreement', 'Bank Statement'], specs: ['Within last 3 months', 'Name & address visible', 'Max 2 MB'], errors: ['Bill older than 3 months', 'Address mismatch', 'Name mismatch'] },
    { name: 'Photograph', required: true, accepted: ['Passport-size (35×45mm)'], specs: ['Within 6 months', 'White background', 'Front view', '50–200 KB', 'JPG only'], errors: ['Old photo', 'Selfie', 'Poor lighting', 'Face covered'] },
    { name: 'Income Proof', required: false, accepted: ['Salary Slip', 'Form 16', 'ITR', 'Employer Certificate'], specs: ['Latest or last 3 months', 'Max 2 MB each', 'PDF/JPG'], errors: ['Older than 3 months', 'Incomplete', 'Handwritten'] },
  ];
}
