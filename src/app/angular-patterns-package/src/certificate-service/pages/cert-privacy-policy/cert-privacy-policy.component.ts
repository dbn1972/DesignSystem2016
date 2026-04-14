import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from '../../../services/components/service-header/service-header.component';
import { ServiceFooterComponent } from '../../../services/components/service-footer/service-footer.component';

@Component({
  selector: 'cert-privacy-policy-page',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceFooterComponent],
  template: `
    <div class="pp"><ux4g-service-header icon="🛡" iconColor="#2563eb" category="Legal Information" title="Privacy Policy"></ux4g-service-header>
    <main class="pp-container">
      <div class="pp-notice">ℹ <strong>Last Updated:</strong> January 1, 2026 — This policy explains how we collect, use, and protect your personal information.</div>
      <div class="pp-card">
        <div *ngFor="let s of sections" class="pp-section">
          <h2>{{ s.title }}</h2>
          <div [innerHTML]="s.html"></div>
        </div>
        <div class="pp-contact"><h3>Contact</h3><p>Data Protection Officer • <a href="mailto:privacy&#64;certificate.gov.in">privacy&#64;certificate.gov.in</a> • 1800-111-1111</p></div>
      </div>
    </main>
    <ux4g-service-footer leftText="Certificate Application Service • Government of India" rightText="Privacy Policy"></ux4g-service-footer></div>
  `,
  styles: [`
    .pp { min-height: 100vh; background: var(--cert-bg-muted, #f8fafc); font-family: system-ui, sans-serif; color: var(--cert-fg, #0f172a); }
    .pp-container { max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem; }
    .pp-notice { background: #eff6ff; border: 2px solid #93c5fd; border-radius: 0.5rem; padding: 1rem; font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin-bottom: 1.5rem; strong { color: var(--cert-fg, #0f172a); } }
    .pp-card { background: var(--cert-bg, #fff); border: 2px solid var(--cert-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; }
    .pp-section { padding-bottom: 1.5rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--cert-border, #e2e8f0); &:last-of-type { border-bottom: none; margin-bottom: 0; }
      h2 { font-size: 1.125rem; font-weight: 700; margin: 0 0 0.75rem; }
    }
    :host ::ng-deep .pp-section ul { padding-left: 1.25rem; font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); line-height: 1.8; }
    :host ::ng-deep .pp-section p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); line-height: 1.6; margin: 0 0 0.5rem; }
    .pp-contact { padding-top: 1.5rem; border-top: 2px solid var(--cert-border, #e2e8f0); h3 { font-size: 1rem; font-weight: 700; margin: 0 0 0.5rem; } p { font-size: 0.875rem; color: var(--cert-fg-muted, #64748b); margin: 0; } a { color: var(--cert-primary, #000080); font-weight: 700; text-decoration: none; &:hover { text-decoration: underline; } } }
  `],
})
export class CertPrivacyPolicyComponent {
  sections = [
    { title: '1. Information We Collect', html: '<ul><li>Personal: name, DOB, gender, contact, address, identity proof, photograph</li><li>Application-specific: income, education, caste (where applicable)</li><li>Technical: IP address, browser, session data, cookies</li></ul>' },
    { title: '2. How We Use Your Information', html: '<ul><li>Processing certificate applications</li><li>Verifying identity and eligibility</li><li>Communicating application status</li><li>Preventing fraud and ensuring security</li><li>Complying with legal obligations</li></ul>' },
    { title: '3. Information Sharing', html: '<p>We do not sell your data. We share only with: government authorities for processing, as required by law, and trusted service providers (payment gateways, SMS) bound by confidentiality.</p>' },
    { title: '4. Data Security', html: '<ul><li>SSL/TLS encryption</li><li>Encrypted storage</li><li>Regular security audits</li><li>Access controls and authentication</li></ul>' },
    { title: '5. Your Rights', html: '<ul><li>Right to Access, Correction, Erasure</li><li>Right to Restrict Processing</li><li>Right to Data Portability</li><li>Right to Object</li></ul>' },
    { title: '6. Data Retention', html: '<ul><li>Active applications: until processed</li><li>Issued certificates: 7–10 years per government policy</li><li>Account info: until deletion or 2 years inactivity</li></ul>' },
    { title: '7. Changes to Policy', html: '<p>We may update this policy. Changes will be posted here with an updated date. Continued use constitutes acceptance.</p>' },
  ];
}
