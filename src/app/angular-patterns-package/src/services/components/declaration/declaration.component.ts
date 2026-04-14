import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';

@Component({
  selector: 'ux4g-declaration',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="svc-page">
      <ux4g-service-header icon="✅" iconColor="#9333ea" category="Government Service Access" title="Declaration and Consent"></ux4g-service-header>
      <main class="svc-form-main">
        <div class="svc-card">
          <p class="decl-text">I, <strong>{{ applicantName }}</strong>, declare that all submitted information and documents are accurate and can be verified by the issuing authority.</p>
          <ul class="decl-list">
            <li>Data may be used only for processing this certificate application.</li>
            <li>False information may lead to rejection and legal action.</li>
            <li>Application fee is non-refundable once payment succeeds.</li>
          </ul>
          <label class="decl-checkbox">
            <input type="checkbox" [(ngModel)]="accepted" />
            <span>I have read and agree to the declaration, consent, and data usage terms.</span>
          </label>
        </div>
        <div class="svc-form-actions">
          <a [href]="backPath" class="svc-btn svc-btn--outline">← Back</a>
          <a [href]="nextPath" class="svc-btn svc-btn--success" [class.svc-btn--disabled]="!accepted" [attr.aria-disabled]="!accepted">Accept and Continue →</a>
        </div>
      </main>
      <ux4g-service-footer [leftText]="serviceName + ' • Government of India'" rightText="Declaration"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    @use '../../styles/service-shared';
    .svc-page { min-height: 100vh; background: var(--ux4g-svc-bg-muted); }
    .svc-form-main { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
    .svc-card { background: var(--ux4g-svc-bg); border: 2px solid var(--ux4g-svc-border); border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1.5rem; }
    .decl-text { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted); line-height: 1.6; margin: 0 0 1rem; strong { color: var(--ux4g-svc-fg); } }
    .decl-list { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted); padding-left: 1.25rem; margin: 0 0 1.5rem; li { margin-bottom: 0.375rem; } }
    .decl-checkbox { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; border: 2px solid var(--ux4g-svc-border); border-radius: 0.5rem; cursor: pointer; font-size: 0.875rem; color: var(--ux4g-svc-fg-muted); input { margin-top: 0.125rem; } }
    .svc-form-actions { display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
    .svc-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer;
      &--outline { background: var(--ux4g-svc-bg); color: var(--ux4g-svc-fg-muted); border-color: var(--ux4g-svc-border); }
      &--success { background: #16a34a; color: #fff; &:hover { opacity: 0.9; } }
      &--disabled { background: #9ca3af !important; pointer-events: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeclarationComponent {
  @Input() applicantName = 'Rajesh Kumar';
  @Input() backPath = '/reference-service/review-summary';
  @Input() nextPath = '/reference-service/status-tracker';
  @Input() serviceName = 'Government Service Platform';
  accepted = false;
}
