import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ServiceFooterComponent } from '../service-footer/service-footer.component';
import { MOCK_USER } from '../../mock-api/mock-data';

@Component({
  selector: 'ux4g-user-profile',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="svc-page">
      <ux4g-service-header icon="👤" iconColor="#2563eb" category="Government Service Access" title="Account Settings"></ux4g-service-header>
      <main class="svc-form-main">
        <div class="svc-card" style="margin-bottom: 1.5rem;">
          <div class="profile-header">
            <div class="profile-avatar" aria-hidden="true">{{ user.fullName.charAt(0) }}</div>
            <div>
              <h2 class="profile-name">{{ user.fullName }}</h2>
              <p class="profile-role">{{ user.role | titlecase }} Account</p>
            </div>
          </div>
          <div class="profile-grid">
            <div class="profile-field"><span class="profile-label">Email</span><span class="profile-value">{{ user.email }}</span></div>
            <div class="profile-field"><span class="profile-label">Mobile</span><span class="profile-value">{{ user.mobile }}</span></div>
            <div class="profile-field"><span class="profile-label">Aadhaar</span><span class="profile-value">{{ user.aadhaar || 'Not linked' }}</span></div>
            <div class="profile-field"><span class="profile-label">User ID</span><span class="profile-value">{{ user.id }}</span></div>
          </div>
        </div>
        <div class="profile-actions">
          <a [href]="myApplicationsPath" class="svc-btn svc-btn--primary">My Applications</a>
          <a [href]="forgotPasswordPath" class="svc-btn svc-btn--outline">Change Password</a>
        </div>
      </main>
      <ux4g-service-footer [leftText]="serviceName + ' • Government of India'" rightText="User Profile"></ux4g-service-footer>
    </div>
  `,
  styles: [`
    @use '../../styles/service-shared';
    .svc-page { min-height: 100vh; background: var(--ux4g-svc-bg-muted); }
    .svc-form-main { max-width: 720px; margin: 0 auto; padding: 2rem 1.5rem; }
    .svc-card { background: var(--ux4g-svc-bg); border: 2px solid var(--ux4g-svc-border); border-radius: 0.5rem; padding: 1.5rem; }
    .profile-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 2px solid var(--ux4g-svc-border); }
    .profile-avatar { width: 3.5rem; height: 3.5rem; border-radius: 50%; background: var(--ux4g-svc-primary); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; }
    .profile-name { font-size: 1.25rem; font-weight: 700; color: var(--ux4g-svc-fg); margin: 0; }
    .profile-role { font-size: 0.8125rem; color: var(--ux4g-svc-fg-muted); margin: 0; }
    .profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .profile-field { }
    .profile-label { display: block; font-size: 0.75rem; color: var(--ux4g-svc-fg-muted); margin-bottom: 0.125rem; }
    .profile-value { font-weight: 600; color: var(--ux4g-svc-fg); font-size: 0.9375rem; }
    .profile-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
    .svc-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer;
      &--primary { background: var(--ux4g-svc-primary); color: #fff; } &--outline { background: var(--ux4g-svc-bg); color: var(--ux4g-svc-fg-muted); border-color: var(--ux4g-svc-border); }
    }
    @media (max-width: 480px) { .profile-grid { grid-template-columns: 1fr; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {
  @Input() myApplicationsPath = '/reference-service/overview';
  @Input() forgotPasswordPath = '/reference-service/forgot-password';
  @Input() serviceName = 'Government Service Platform';
  user = MOCK_USER;
}
