import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';

export type AuthStatusType = 'session-expired' | 'locked-account' | 'service-unavailable';

interface StatusConfig { icon: string; title: string; message: string; color: string; }

const STATUS_MAP: Record<AuthStatusType, StatusConfig> = {
  'session-expired': { icon: '⏱', title: 'Session Expired', message: 'Your session has expired due to inactivity. Please sign in again to continue.', color: '#d97706' },
  'locked-account': { icon: '🔒', title: 'Account Locked', message: 'Your account has been temporarily locked due to multiple failed sign-in attempts. Please try again after 30 minutes or contact support.', color: '#dc2626' },
  'service-unavailable': { icon: '🔧', title: 'Service Unavailable', message: 'This service is temporarily unavailable for maintenance. Please try again later.', color: '#64748b' },
};

@Component({
  selector: 'ux4g-auth-status',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="svc-page">
      <ux4g-service-header icon="🔐" iconColor="#9333ea" category="Government Service Access" title="Authentication Status"></ux4g-service-header>
      <main class="svc-center">
        <div class="auth-status" [style.--status-color]="config.color">
          <div class="auth-status__icon" aria-hidden="true">{{ config.icon }}</div>
          <h2 class="auth-status__title">{{ config.title }}</h2>
          <p class="auth-status__message">{{ config.message }}</p>
          <div class="auth-status__actions">
            <a [href]="signInPath" class="svc-btn svc-btn--primary">Sign In Again</a>
            <a [href]="homePath" class="svc-btn svc-btn--secondary">Go to Home</a>
          </div>
          <p class="auth-status__help">Need help? <a [href]="helpPath" class="ux4g-link">Contact Support</a></p>
        </div>
      </main>
      <ux4g-service-footer leftText="Government Service Platform • Government of India" rightText="Auth Status"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    @use '../../styles/service-shared';
    .svc-page { min-height: 100vh; background: var(--ux4g-svc-bg-muted); }
    .svc-center { max-width: 560px; margin: 0 auto; padding: 3rem 1rem; }
    .auth-status { background: var(--ux4g-svc-bg); border: 2px solid var(--ux4g-svc-border); border-radius: 0.5rem; padding: 2.5rem; text-align: center; border-top: 4px solid var(--status-color); }
    .auth-status__icon { font-size: 3rem; margin-bottom: 1rem; }
    .auth-status__title { font-size: 1.5rem; font-weight: 700; color: var(--ux4g-svc-fg); margin: 0 0 0.75rem; }
    .auth-status__message { color: var(--ux4g-svc-fg-muted); line-height: 1.6; margin: 0 0 1.5rem; }
    .auth-status__actions { display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1rem; }
    .auth-status__help { font-size: 0.875rem; color: var(--ux4g-svc-fg-muted); }
    .svc-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; }
    .svc-btn--primary { background: var(--ux4g-svc-primary); color: #fff; }
    .svc-btn--secondary { background: var(--ux4g-svc-bg); color: var(--ux4g-svc-fg-muted); border-color: var(--ux4g-svc-border); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthStatusComponent {
  @Input() status: AuthStatusType = 'session-expired';
  @Input() signInPath = '/reference-service/sign-in';
  @Input() homePath = '/reference-service/overview';
  @Input() helpPath = '/patterns/contact-support/service-support';

  get config(): StatusConfig { return STATUS_MAP[this.status]; }
}
