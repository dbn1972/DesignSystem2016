/**
 * Certificate Flow — 30 thin wrapper Web Components
 *
 * Each component composes a reusable service component with
 * certificate-specific paths. Matches the React Certificate* pages.
 */
import { UX4GElement } from '../../base/UX4GElement';

const SVC = 'Certificate Application Service';
const P = '/reference-service/certificate';

function defineCertPage(tag: string, html: string) {
  if (!customElements.get(tag)) {
    const Cls = class extends UX4GElement {
      constructor() { super({ useShadowDOM: false }); }
      connectedCallback(): void { super.connectedCallback(); this.innerHTML = html; }
      protected render(): void { this.innerHTML = html; }
    };
    customElements.define(tag, Cls);
  }
}

// ── Pre-Application ──
defineCertPage('ux4g-cert-start', `<ux4g-application-start-service service-name="${SVC}" applicant-name="Priya Sharma" start-form-path="${P}/form/personal" help-path="${P}/help"></ux4g-application-start-service>`);

defineCertPage('ux4g-cert-eligibility', `<ux4g-eligibility-service service-name="${SVC}" sign-in-path="${P}/sign-in"></ux4g-eligibility-service>`);

// ── Authentication ──
defineCertPage('ux4g-cert-sign-in', `<ux4g-sign-in-service service-name="${SVC}" sign-up-path="${P}/sign-up" forgot-password-path="${P}/forgot-password"></ux4g-sign-in-service>`);

defineCertPage('ux4g-cert-sign-up', `<ux4g-sign-up-service service-name="${SVC}" sign-in-path="${P}/sign-in"></ux4g-sign-up-service>`);

defineCertPage('ux4g-cert-verify-otp', `<ux4g-otp-verify-service service-name="${SVC}" destination="9876543210"></ux4g-otp-verify-service>`);

defineCertPage('ux4g-cert-forgot-password', `<ux4g-forgot-password-service service-name="${SVC}" sign-in-path="${P}/sign-in"></ux4g-forgot-password-service>`);

defineCertPage('ux4g-cert-session-timeout', `<ux4g-auth-status-service status="session-expired" service-name="${SVC}" sign-in-path="${P}/sign-in" home-path="/reference-service/demo"></ux4g-auth-status-service>`);

// ── Application Forms ──
defineCertPage('ux4g-cert-form-personal', `<ux4g-personal-form-service service-name="${SVC}" back-path="${P}/start" next-path="${P}/form/address"></ux4g-personal-form-service>`);

defineCertPage('ux4g-cert-form-address', `<ux4g-address-form-service service-name="${SVC}" back-path="${P}/form/personal" next-path="${P}/form/additional"></ux4g-address-form-service>`);

defineCertPage('ux4g-cert-form-additional', `<ux4g-additional-form-service service-name="${SVC}" back-path="${P}/form/address" next-path="${P}/form/review"></ux4g-additional-form-service>`);

defineCertPage('ux4g-cert-form-review', `<ux4g-form-review-service service-name="${SVC}" edit-personal-path="${P}/form/personal" edit-address-path="${P}/form/address" edit-additional-path="${P}/form/additional" back-path="${P}/form/additional" next-path="${P}/document-upload"></ux4g-form-review-service>`);

// ── Submission ──
defineCertPage('ux4g-cert-document-upload', `<ux4g-document-upload-service service-name="${SVC}" back-path="${P}/form/review" next-path="${P}/review-summary"></ux4g-document-upload-service>`);

defineCertPage('ux4g-cert-review-summary', `<ux4g-review-summary-service service-name="${SVC}" edit-personal-path="${P}/form/personal" edit-address-path="${P}/form/address" edit-additional-path="${P}/form/additional" edit-documents-path="${P}/document-upload" back-path="${P}/document-upload" next-path="${P}/declaration"></ux4g-review-summary-service>`);

defineCertPage('ux4g-cert-declaration', `<ux4g-declaration-service service-name="${SVC}" applicant-name="Priya Sharma" back-path="${P}/review-summary" next-path="${P}/payment-summary"></ux4g-declaration-service>`);

// ── Payment ──
defineCertPage('ux4g-cert-payment-summary', `<ux4g-payment-summary-service service-name="${SVC}" application-id="CERT-2026-MH-876543"></ux4g-payment-summary-service>`);

defineCertPage('ux4g-cert-payment-receipt', `<ux4g-payment-receipt-service service-name="${SVC}" transaction-id="TXN-2026041012345" application-id="CERT-2026-MH-876543" amount="₹649" status-tracker-path="${P}/status-tracker" dashboard-path="${P}/my-applications"></ux4g-payment-receipt-service>`);

// ── Post-Submission ──
defineCertPage('ux4g-cert-status-tracker', `<ux4g-status-tracker-service service-name="${SVC}" application-id="CERT-2026-MH-876543"></ux4g-status-tracker-service>`);

defineCertPage('ux4g-cert-user-profile', `<ux4g-user-profile-service service-name="${SVC}" my-applications-path="${P}/my-applications" change-password-path="${P}/forgot-password"></ux4g-user-profile-service>`);

export {};
