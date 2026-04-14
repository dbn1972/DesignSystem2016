import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';

@Component({
  selector: 'ux4g-form-review',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="svc-page">
      <ux4g-service-header icon="🔍" iconColor="#0891b2" category="Government Service Access" title="Review Form Details"></ux4g-service-header>
      <main class="svc-form-main">
        <div class="svc-card" style="margin-bottom: 1rem;">
          <div class="review-section">
            <div class="review-section__header"><h3>Personal Information</h3><a [href]="editPersonalPath" class="ux4g-link">Edit</a></div>
            <div class="review-row"><span class="review-label">Full Name</span><span class="review-value">Rajesh Kumar</span></div>
            <div class="review-row"><span class="review-label">Date of Birth</span><span class="review-value">15/03/1990</span></div>
            <div class="review-row"><span class="review-label">Gender</span><span class="review-value">Male</span></div>
            <div class="review-row"><span class="review-label">Mobile</span><span class="review-value">+91 98765 43210</span></div>
          </div>
        </div>
        <div class="svc-card" style="margin-bottom: 1rem;">
          <div class="review-section">
            <div class="review-section__header"><h3>Address Details</h3><a [href]="editAddressPath" class="ux4g-link">Edit</a></div>
            <div class="review-row"><span class="review-label">Address</span><span class="review-value">123 Main Street, Sector 5</span></div>
            <div class="review-row"><span class="review-label">City / District</span><span class="review-value">New Delhi / Central Delhi</span></div>
            <div class="review-row"><span class="review-label">State / PIN</span><span class="review-value">Delhi / 110001</span></div>
          </div>
        </div>
        <div class="svc-card" style="margin-bottom: 1.5rem;">
          <div class="review-section">
            <div class="review-section__header"><h3>Additional Information</h3><a [href]="editAdditionalPath" class="ux4g-link">Edit</a></div>
            <div class="review-row"><span class="review-label">Purpose</span><span class="review-value">Birth Certificate</span></div>
            <div class="review-row"><span class="review-label">Processing</span><span class="review-value">Normal (7–10 days)</span></div>
          </div>
        </div>
        <div class="svc-form-actions"><a [href]="backPath" class="svc-btn svc-btn--outline">← Back</a><a [href]="nextPath" class="svc-btn svc-btn--primary">Confirm and Continue →</a></div>
      </main>
      <ux4g-service-footer [leftText]="serviceName + ' • Government of India'" rightText="Form Review"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    @use '../../styles/service-shared';
    .svc-page { min-height: 100vh; background: var(--ux4g-svc-bg-muted); }
    .svc-form-main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
    .svc-card { background: var(--ux4g-svc-bg); border: 2px solid var(--ux4g-svc-border); border-radius: 0.5rem; padding: 1.5rem; }
    .review-section__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; h3 { font-size: 1rem; font-weight: 700; color: var(--ux4g-svc-fg); margin: 0; } }
    .review-row { display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--ux4g-svc-border); font-size: 0.875rem; &:last-child { border-bottom: none; } }
    .review-label { color: var(--ux4g-svc-fg-muted); }
    .review-value { font-weight: 600; color: var(--ux4g-svc-fg); }
    .svc-form-actions { display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
    .svc-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer;
      &--primary { background: var(--ux4g-svc-primary); color: #fff; &:hover { opacity: 0.9; } }
      &--outline { background: var(--ux4g-svc-bg); color: var(--ux4g-svc-fg-muted); border-color: var(--ux4g-svc-border); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormReviewComponent {
  @Input() editPersonalPath = '/reference-service/form/personal';
  @Input() editAddressPath = '/reference-service/form/address';
  @Input() editAdditionalPath = '/reference-service/form/additional';
  @Input() backPath = '/reference-service/form/additional';
  @Input() nextPath = '/reference-service/document-upload';
  @Input() serviceName = 'Government Service Platform';
}
