import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-appeal-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="ap"><ux4g-service-header icon="⚖" iconColor="#4f46e5" category="Application Appeal" title="File an Appeal"></ux4g-service-header>
    <main class="ap-main">
      <div class="ap-info"><h2>About Appeals</h2><p>If you believe your application was rejected incorrectly, you can file an appeal. It will be reviewed by a senior officer within 7 working days. The appeal decision is final.</p></div>
      <div class="ap-card ap-card--red"><h3>Rejected Application Details</h3>
        <div class="ap-grid"><div><span class="ap-label">Reference</span><span>CERT-2026-MH-876543</span></div><div><span class="ap-label">Type</span><span>Income Certificate</span></div><div><span class="ap-label">Rejection Date</span><span>April 15, 2026</span></div></div>
        <div class="ap-reason"><span class="ap-label">Reason</span><p>Income proof document is not clear and appears outdated.</p></div>
      </div>
      <div class="ap-card"><h3>Appeal Information</h3>
        <div class="ap-field"><label>Reason for Appeal <span class="req">*</span></label><textarea [(ngModel)]="reason" rows="6" placeholder="Explain why you believe the rejection was incorrect…"></textarea><div *ngIf="error" class="ap-error">⚠ {{ error }}</div></div>
        <div class="ap-field"><label>Supporting Evidence (Optional)</label><textarea [(ngModel)]="evidence" rows="4" placeholder="List any evidence or documents…"></textarea></div>
        <label class="ap-checkbox"><input type="checkbox" [(ngModel)]="hasNewDocs" /><div><strong>I have new or corrected documents to submit</strong><p>Upload corrected or additional documents as part of your appeal.</p></div></label>
        <button *ngIf="hasNewDocs" class="ap-upload-btn">📤 Upload New Documents</button>
      </div>
      <div class="ap-warning">⚠ <strong>Important:</strong> The appeal decision is final. If rejected again, you will need to submit a fresh application.</div>
      <div class="ap-actions"><a href="/reference-service/certificate/rejected" class="ap-btn ap-btn--outline">Cancel</a><button (click)="submit()" class="ap-btn ap-btn--primary">Submit Appeal →</button></div>
    </main>
    <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="File Appeal"></ux4g-service-footer></div>
  `,
  styles: [`
    .ap { min-height: 100vh; background: var(--cert-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--cert-fg, #0f172a); }
    .ap-main { max-width: 800px; margin: 0 auto; padding: 2rem 1.5rem; }
    .ap-info { background: #eff6ff; border: 2px solid #93c5fd; border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1.5rem; h2 { font-size: 1rem; font-weight: 700; margin: 0 0 0.5rem; } p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); line-height: 1.6; margin: 0; } }
    .ap-card { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1.5rem; &--red { border-top: 4px solid #dc2626; } h3 { font-size: 1rem; font-weight: 700; margin: 0 0 1rem; } }
    .ap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; }
    .ap-label { display: block; font-size: 0.6875rem; color: var(--cert-fg-muted, #64748b); margin-bottom: 0.125rem; }
    .ap-reason { background: #fef2f2; border: 2px solid #dc2626; border-radius: 0.375rem; padding: 0.75rem; p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin: 0; } }
    .ap-field { margin-bottom: 1.25rem; label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.5rem; } textarea { width: 100%; padding: 0.625rem; border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; resize: vertical; box-sizing: border-box; &:focus { border-color: var(--cert-primary, #000080); outline: none; } } }
    .ap-error { color: #dc2626; font-size: 0.8125rem; margin-top: 0.375rem; }
    .ap-checkbox { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; background: #fffbeb; border: 2px solid #d97706; border-radius: 0.5rem; cursor: pointer; margin-bottom: 1rem; input { margin-top: 0.25rem; } strong { display: block; margin-bottom: 0.25rem; } p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin: 0; } }
    .ap-upload-btn { width: 100%; padding: 0.75rem; border: 2px dashed var(--cert-primary, #000080); background: #eff6ff; color: var(--cert-primary, #000080); font-weight: 700; font-size: 0.875rem; border-radius: 0.375rem; cursor: pointer; margin-bottom: 1rem; }
    .ap-warning { background: #fffbeb; border: 2px solid #d97706; border-radius: 0.5rem; padding: 1rem; font-size: 0.875rem; color: #92400e; margin-bottom: 1.5rem; strong { color: var(--cert-fg, #0f172a); } }
    .ap-actions { display: flex; gap: 0.75rem; }
    .ap-btn { flex: 1; padding: 0.875rem; font-weight: 700; font-size: 0.875rem; border-radius: 0.375rem; text-align: center; text-decoration: none; border: 2px solid transparent; cursor: pointer;
      &--outline { background: var(--cert-bg, #fff); color: var(--cert-fg-muted, #64748b); border-color: var(--cert-border, #e2e8f0); }
      &--primary { background: var(--cert-primary, #000080); color: #fff; }
    }
    .req { color: #dc2626; }
  `],
})
export class CertAppealComponent {
  reason = ''; evidence = ''; hasNewDocs = false; error = '';
  submit() { if (!this.reason.trim()) { this.error = 'Please provide reason for appeal'; return; } window.location.href = '/reference-service/certificate/submission-success'; }
}
