import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-officer-review-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="or">
      <ux4g-service-header icon="📝" iconColor="#4f46e5" category="Officer Dashboard" title="Review Application">
        <a class="or-back" href="/reference-service/certificate/officer/cases" aria-label="Back to cases">← Back to Cases</a>
      </ux4g-service-header>

      <main class="or-main">
        <!-- Application Details -->
        <section class="or-card" aria-label="Application details">
          <div class="or-card__header">Application Details</div>
          <div class="or-card__body">
            <div class="or-details">
              <div class="or-detail"><span class="or-detail__label">Applicant</span><span class="or-detail__val">Priya Sharma</span></div>
              <div class="or-detail"><span class="or-detail__label">Certificate Type</span><span class="or-detail__val">Income Certificate</span></div>
              <div class="or-detail"><span class="or-detail__label">Status</span><span class="or-detail__val"><span class="or-badge or-badge--blue">Under Review</span></span></div>
              <div class="or-detail"><span class="or-detail__label">Reference Number</span><span class="or-detail__val or-mono">CERT-2026-MH-876543</span></div>
            </div>
          </div>
        </section>

        <!-- Decision Section -->
        <section class="or-card" aria-label="Officer decision">
          <div class="or-card__header">Decision</div>
          <div class="or-card__body">
            <div class="or-decisions" role="radiogroup" aria-label="Select decision">
              <button type="button" class="or-decision or-decision--approve" [class.or-decision--active]="decision === 'approve'" (click)="decision = 'approve'" role="radio" [attr.aria-checked]="decision === 'approve'">
                ✅ Approve &amp; Issue
              </button>
              <button type="button" class="or-decision or-decision--correct" [class.or-decision--active]="decision === 'correct'" (click)="decision = 'correct'" role="radio" [attr.aria-checked]="decision === 'correct'">
                🔄 Request Correction
              </button>
              <button type="button" class="or-decision or-decision--reject" [class.or-decision--active]="decision === 'reject'" (click)="decision = 'reject'" role="radio" [attr.aria-checked]="decision === 'reject'">
                ❌ Reject
              </button>
            </div>

            <div class="or-field">
              <label class="or-label" for="comments">Officer Comments <span class="or-req">*</span></label>
              <textarea id="comments" class="or-textarea" [(ngModel)]="comments" rows="5" placeholder="Provide your comments and reasoning for this decision…" aria-required="true"></textarea>
            </div>

            <button type="button" class="or-submit" [disabled]="!decision || !comments.trim()" (click)="submitDecision()">
              Submit Decision
            </button>
          </div>
        </section>
      </main>

      <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Officer Review"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    .or { min-height: 100vh; background: var(--ux4g-svc-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-svc-fg, #0f172a); }
    .or-back { font-size: 0.875rem; color: var(--ux4g-svc-primary, #4f46e5); text-decoration: none; font-weight: 600; }
    .or-back:hover { text-decoration: underline; }
    .or-main { max-width: 800px; margin: 0 auto; padding: 2rem 1.5rem; display: flex; flex-direction: column; gap: 1.5rem; }
    .or-card { background: var(--ux4g-svc-bg, #fff); border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.5rem; overflow: hidden; }
    .or-card__header { padding: 1rem 1.5rem; font-weight: 700; background: var(--ux4g-svc-bg-muted, #f8fafc); border-bottom: 2px solid var(--ux4g-svc-border, #e2e8f0); }
    .or-card__body { padding: 1.5rem; }
    .or-details { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
    .or-detail__label { display: block; font-size: 0.75rem; font-weight: 700; color: var(--ux4g-svc-fg-muted, #64748b); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
    .or-detail__val { font-size: 0.9375rem; font-weight: 600; }
    .or-mono { font-family: monospace; }
    .or-badge { display: inline-block; padding: 0.25rem 0.625rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; color: #fff; }
    .or-badge--blue { background: #3b82f6; }
    .or-decisions { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
    .or-decision { padding: 0.875rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; background: var(--ux4g-svc-bg, #fff); font-size: 0.875rem; font-weight: 700; cursor: pointer; transition: all 0.15s; }
    .or-decision--approve.or-decision--active { border-color: #16a34a; background: #f0fdf4; color: #16a34a; }
    .or-decision--correct.or-decision--active { border-color: #f97316; background: #fff7ed; color: #f97316; }
    .or-decision--reject.or-decision--active { border-color: #dc2626; background: #fef2f2; color: #dc2626; }
    .or-field { margin-bottom: 1.5rem; }
    .or-label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.5rem; }
    .or-req { color: #dc2626; }
    .or-textarea { width: 100%; padding: 0.75rem; border: 2px solid var(--ux4g-svc-border, #e2e8f0); border-radius: 0.375rem; font-size: 0.875rem; font-family: system-ui, sans-serif; resize: vertical; box-sizing: border-box; }
    .or-textarea:focus { border-color: var(--ux4g-svc-primary, #4f46e5); outline: none; }
    .or-submit { width: 100%; padding: 0.875rem; background: var(--ux4g-svc-primary, #4f46e5); color: #fff; font-weight: 700; font-size: 0.875rem; border: none; border-radius: 0.375rem; cursor: pointer; }
    .or-submit:disabled { background: #9ca3af; cursor: not-allowed; }
    @media (max-width: 640px) {
      .or-details { grid-template-columns: 1fr; }
      .or-decisions { grid-template-columns: 1fr; }
    }
  `],
})
export class CertOfficerReviewComponent {
  decision: 'approve' | 'correct' | 'reject' | null = null;
  comments = '';
  submitDecision() {
    if (this.decision && this.comments.trim()) {
      window.location.href = '/reference-service/certificate/officer/cases';
    }
  }
}
