import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';

@Component({
  selector: 'ux4g-review-summary',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="svc-page">
      <ux4g-service-header icon="📑" iconColor="#16a34a" category="Government Service Access" title="Review Summary"></ux4g-service-header>
      <main class="svc-form-main">
        <div class="svc-alert svc-alert--info" style="margin-bottom: 1.5rem;">
          <span aria-hidden="true">ℹ</span>
          <span>Please review all details carefully before proceeding to declaration. You will not be able to edit after submission.</span>
        </div>
        <div class="svc-card" style="margin-bottom: 1rem;">
          <div class="review-header"><h3>Personal Details</h3><a [href]="editPersonalPath" class="ux4g-link">Edit</a></div>
          <p class="review-text">Rajesh Kumar • Male • DOB: 15/03/1990 • Mobile: +91 98765 43210</p>
        </div>
        <div class="svc-card" style="margin-bottom: 1rem;">
          <div class="review-header"><h3>Address</h3><a [href]="editAddressPath" class="ux4g-link">Edit</a></div>
          <p class="review-text">123 Main Street, Sector 5, New Delhi, Delhi — 110001</p>
        </div>
        <div class="svc-card" style="margin-bottom: 1rem;">
          <div class="review-header"><h3>Additional Info</h3><a [href]="editAdditionalPath" class="ux4g-link">Edit</a></div>
          <p class="review-text">Purpose: Birth Certificate • Processing: Normal (7–10 days)</p>
        </div>
        <div class="svc-card" style="margin-bottom: 1.5rem;">
          <div class="review-header"><h3>Documents</h3><a [href]="editDocumentsPath" class="ux4g-link">Edit</a></div>
          <p class="review-text">Aadhaar Card ✅ • Passport Photo ✅ • Address Proof ✅</p>
        </div>
        <div class="svc-form-actions"><a [href]="backPath" class="svc-btn svc-btn--outline">← Back</a><a [href]="nextPath" class="svc-btn svc-btn--primary">Proceed to Declaration →</a></div>
      </main>
      <ux4g-service-footer [leftText]="serviceName + ' • Government of India'" rightText="Review Summary"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    @use '../../styles/service-shared';
    .svc-page { min-height: 100vh; background: var(--ux4g-svc-bg-muted); }
    .svc-form-main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
    .svc-card { background: var(--ux4g-svc-bg); border: 2px solid var(--ux4g-svc-border); border-radius: 0.5rem; padding: 1.5rem; }
    .review-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; h3 { font-size: 1rem; font-weight: 700; color: var(--ux4g-svc-fg); margin: 0; } }
    .review-text { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted); margin: 0; line-height: 1.6; }
    .svc-alert { display: flex; align-items: flex-start; gap: 0.5rem; padding: 0.75rem 1rem; border-radius: 0.5rem; font-size: 0.875rem;
      &--info { background: #eff6ff; border: 2px solid #93c5fd; color: #1e40af; }
    }
    .svc-form-actions { display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
    .svc-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer;
      &--primary { background: var(--ux4g-svc-primary); color: #fff; } &--outline { background: var(--ux4g-svc-bg); color: var(--ux4g-svc-fg-muted); border-color: var(--ux4g-svc-border); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewSummaryComponent {
  @Input() editPersonalPath = '/reference-service/start';
  @Input() editAddressPath = '/reference-service/start';
  @Input() editAdditionalPath = '/reference-service/start';
  @Input() editDocumentsPath = '/reference-service/document-upload';
  @Input() backPath = '/reference-service/document-upload';
  @Input() nextPath = '/reference-service/declaration';
  @Input() serviceName = 'Government Service Platform';
}
