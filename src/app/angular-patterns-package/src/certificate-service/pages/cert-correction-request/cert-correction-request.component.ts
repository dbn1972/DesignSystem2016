import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-correction-request-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="cr"><ux4g-service-header icon="✏" iconColor="#ca8a04" category="Application Update Required" title="Correction Request"></ux4g-service-header>
    <main class="cr-main">
      <div class="cr-officer-msg"><div class="cr-officer-msg__header"><h2>Message from Officer</h2><span class="cr-badge">CLARIFICATION NEEDED</span></div><div class="cr-officer-msg__body"><p>⚠ Please provide a recent salary slip (not older than 3 months) showing all required details including employer name, employee ID, and monthly breakdown.</p><div class="cr-meta"><div><span class="cr-label">Requested By</span><span>Officer Suresh Mehta</span></div><div><span class="cr-label">Date</span><span>April 12, 2026</span></div></div></div></div>
      <div class="cr-card"><div class="cr-ref-grid"><div><span class="cr-label">Reference</span><span class="cr-val">CERT-2026-MH-876543</span></div><div><span class="cr-label">Type</span><span class="cr-val">Income Certificate</span></div><div><span class="cr-label">Submitted</span><span class="cr-val">April 10, 2026</span></div></div></div>
      <div class="cr-card"><h3>What needs to be corrected?</h3>
        <div *ngFor="let opt of options" class="cr-option" [class.cr-option--highlighted]="opt.highlighted">
          <label><input type="checkbox" [(ngModel)]="opt.checked" /><div><strong>{{ opt.label }}</strong><span *ngIf="opt.highlighted" class="cr-rec">RECOMMENDED</span><p>{{ opt.desc }}</p></div></label>
          <a *ngIf="opt.checked" [href]="opt.link" class="cr-edit-btn">✏ Edit This Section</a>
        </div>
      </div>
      <div class="cr-card"><h3>Additional Comments (Optional)</h3><textarea [(ngModel)]="comments" rows="4" placeholder="Any additional information…"></textarea></div>
      <div class="cr-actions"><a href="/reference-service/certificate/status-tracker" class="cr-btn cr-btn--outline">View Application Status</a><button (click)="submit()" class="cr-btn cr-btn--success" [disabled]="!canSubmit">Submit Corrections →</button></div>
    </main>
    <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Correction Request"></ux4g-service-footer></div>
  `,
  styles: [`
    .cr { min-height: 100vh; background: var(--cert-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--cert-fg, #0f172a); }
    .cr-main { max-width: 800px; margin: 0 auto; padding: 2rem 1.5rem; }
    .cr-officer-msg { border: 2px solid #d97706; border-radius: 0.5rem; overflow: hidden; margin-bottom: 1.5rem;
      &__header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background: #fef3c7; border-bottom: 2px solid #d97706; h2 { font-size: 1rem; font-weight: 700; margin: 0; } }
      &__body { padding: 1.5rem; p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); line-height: 1.6; margin: 0 0 1rem; } }
    }
    .cr-badge { background: #ea580c; color: #fff; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.6875rem; font-weight: 700; }
    .cr-rec { background: #ea580c; color: #fff; padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-size: 0.625rem; font-weight: 700; margin-left: 0.5rem; }
    .cr-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.8125rem; }
    .cr-label { display: block; font-size: 0.6875rem; color: var(--cert-fg-muted, #64748b); margin-bottom: 0.125rem; }
    .cr-val { font-weight: 600; font-family: monospace; }
    .cr-card { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1.5rem; h3 { font-size: 1rem; font-weight: 700; margin: 0 0 1rem; } textarea { width: 100%; padding: 0.625rem; border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; resize: vertical; box-sizing: border-box; } }
    .cr-ref-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .cr-option { border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 1rem; margin-bottom: 0.75rem; &--highlighted { border-color: #d97706; background: #fffbeb; }
      label { display: flex; align-items: flex-start; gap: 0.75rem; cursor: pointer; input { margin-top: 0.25rem; } strong { display: block; margin-bottom: 0.25rem; } p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin: 0; } }
    }
    .cr-edit-btn { display: inline-flex; align-items: center; gap: 0.375rem; margin-top: 0.75rem; margin-left: 1.75rem; padding: 0.375rem 0.75rem; background: var(--cert-primary, #000080); color: #fff; font-size: 0.8125rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; }
    .cr-actions { display: flex; gap: 0.75rem; }
    .cr-btn { flex: 1; padding: 0.875rem; font-weight: 700; font-size: 0.875rem; border-radius: 0.375rem; text-align: center; text-decoration: none; border: 2px solid transparent; cursor: pointer;
      &--outline { background: var(--cert-bg, #fff); color: var(--cert-fg-muted, #64748b); border-color: var(--cert-border, #e2e8f0); }
      &--success { background: #16a34a; color: #fff; &:disabled { background: #9ca3af; cursor: not-allowed; } }
    }
  `],
})
export class CertCorrectionRequestComponent {
  comments = '';
  options = [
    { label: 'Personal Information', desc: 'Update name, DOB, contact details', link: '/reference-service/certificate/form/personal', checked: false, highlighted: false },
    { label: 'Address Details', desc: 'Update residential address', link: '/reference-service/certificate/form/address', checked: false, highlighted: false },
    { label: 'Upload New Documents', desc: 'Replace or add documents (Recommended)', link: '/reference-service/certificate/document-upload', checked: false, highlighted: true },
    { label: 'Additional Information', desc: 'Update income, occupation, or other details', link: '/reference-service/certificate/form/additional', checked: false, highlighted: false },
  ];
  get canSubmit() { return this.options.some(o => o.checked) || this.comments.trim().length > 0; }
  submit() { if (this.canSubmit) window.location.href = '/reference-service/certificate/status-tracker'; }
}
