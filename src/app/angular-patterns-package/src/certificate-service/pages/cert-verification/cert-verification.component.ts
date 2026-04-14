import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-verification-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="cv"><ux4g-service-header icon="🔍" iconColor="#0d9488" category="Public Service" title="Verify Certificate Authenticity"></ux4g-service-header>
    <main class="cv-main">
      <div class="cv-info">ℹ Enter the certificate number or scan the QR code to check validity.</div>
      <div class="cv-card">
        <form (ngSubmit)="verify()" class="cv-form">
          <label class="cv-label">Certificate Number <span class="req">*</span></label>
          <div class="cv-row"><input class="cv-input" [(ngModel)]="certNumber" name="certNumber" placeholder="e.g., INC/2026/MH/876543" /><button type="submit" class="cv-btn cv-btn--primary">🔍 Verify</button></div>
          <p class="cv-hint">For testing: Use INC/2026/MH/876543</p>
        </form>
      </div>
      <div *ngIf="result==='valid'" class="cv-result cv-result--valid">
        <div class="cv-result__header"><span class="cv-result__icon">✅</span><h3>Certificate is Valid</h3><p>This certificate has been verified and is authentic.</p></div>
        <div class="cv-result__body">
          <div class="cv-grid"><div><span class="cv-label">Certificate Number</span><span class="cv-val">INC/2026/MH/876543</span></div><div><span class="cv-label">Type</span><span class="cv-val">Income Certificate</span></div><div><span class="cv-label">Holder</span><span class="cv-val">Priya Sharma</span></div><div><span class="cv-label">Issue Date</span><span class="cv-val">April 18, 2026</span></div><div><span class="cv-label">Valid Until</span><span class="cv-val">April 17, 2027</span></div><div><span class="cv-label">Status</span><span class="cv-val cv-val--success">Valid</span></div></div>
        </div>
      </div>
      <div *ngIf="result==='invalid'" class="cv-result cv-result--invalid">
        <div class="cv-result__header"><span class="cv-result__icon">❌</span><h3>Certificate Not Found</h3><p>The certificate number could not be verified.</p></div>
        <div class="cv-result__body"><ul><li>Certificate number entered incorrectly</li><li>Certificate has been revoked</li><li>Number does not exist in our system</li><li>Certificate may be fraudulent</li></ul></div>
      </div>
    </main>
    <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Certificate Verification"></ux4g-service-footer></div>
  `,
  styles: [`
    .cv { min-height: 100vh; background: var(--cert-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--cert-fg, #0f172a); }
    .cv-main { max-width: 800px; margin: 0 auto; padding: 2rem 1.5rem; }
    .cv-info { background: #eff6ff; border: 2px solid #93c5fd; border-radius: 0.5rem; padding: 1rem; font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin-bottom: 1.5rem; }
    .cv-card { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1.5rem; }
    .cv-label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.5rem; }
    .cv-row { display: flex; gap: 0.75rem; }
    .cv-input { flex: 1; padding: 0.625rem 0.75rem; border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; font-family: monospace; &:focus { border-color: var(--cert-primary, #000080); outline: none; } }
    .cv-btn { padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; border: none; cursor: pointer; &--primary { background: var(--cert-primary, #000080); color: #fff; } }
    .cv-hint { font-size: 0.75rem; color: var(--cert-fg-muted, #64748b); margin-top: 0.5rem; }
    .cv-result { border-radius: 0.5rem; overflow: hidden; margin-bottom: 1.5rem;
      &--valid { border: 2px solid #16a34a; } &--invalid { border: 2px solid #dc2626; }
      &__header { text-align: center; padding: 1.5rem; &:has(+ .cv-result__body) { border-bottom: 2px solid inherit; } h3 { font-size: 1.25rem; font-weight: 700; margin: 0.5rem 0 0.25rem; } p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin: 0; } }
      &__icon { font-size: 2.5rem; }
      &__body { padding: 1.5rem; }
    }
    .cv-result--valid .cv-result__header { background: #f0fdf4; }
    .cv-result--invalid .cv-result__header { background: #fef2f2; }
    .cv-result--invalid ul { padding-left: 1.25rem; font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); line-height: 1.8; }
    .cv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .cv-val { font-weight: 600; &--success { color: #16a34a; } }
    .req { color: #dc2626; }
  `],
})
export class CertVerificationComponent {
  certNumber = ''; result: 'valid' | 'invalid' | null = null;
  verify() { if (!this.certNumber) return; this.result = this.certNumber.toUpperCase() === 'INC/2026/MH/876543' ? 'valid' : 'invalid'; }
}
