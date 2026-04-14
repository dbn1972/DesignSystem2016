/**
 * Certificate Flow — Unique pages (no reusable service component equivalent)
 * These are self-contained Web Components for certificate-specific screens.
 */
import { UX4GElement } from '../../base/UX4GElement';

const SVC = 'Certificate Application Service';
const P = '/reference-service/certificate';

function s(tag: string, icon: string, iconColor: string, heading: string, bodyFn: () => string) {
  if (customElements.get(tag)) return;
  customElements.define(tag, class extends UX4GElement {
    constructor() { super({ useShadowDOM: true }); }
    connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }
    protected render(): void {
      this.root.innerHTML = `
        <style>
          :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
          .m { max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; }
          .c { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 1.5rem; }
          .c h2 { font-size: 1.125rem; font-weight: 700; margin: 0 0 1rem; }
          .c p { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); line-height: 1.6; margin: 0 0 0.75rem; }
          .c p:last-child { margin-bottom: 0; }
          .c ul, .c ol { margin: 0.5rem 0; padding-left: 1.25rem; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); line-height: 1.8; }
          .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
          .tile { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; }
          .tile__icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
          .tile__title { font-weight: 700; margin-bottom: 0.25rem; }
          .tile__text { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
          .success { text-align: center; padding: 2rem; background: #f0fdf4; border: 2px solid #16a34a; border-radius: 0.5rem; margin-bottom: 1.5rem; }
          .success__icon { font-size: 3rem; margin-bottom: 0.5rem; }
          .success h2 { font-size: 1.5rem; font-weight: 700; color: #166534; margin: 0 0 0.25rem; }
          .success p { font-size: 0.875rem; color: #15803d; margin: 0; }
          .error-box { text-align: center; padding: 2rem; background: #fef2f2; border: 2px solid #dc2626; border-radius: 0.5rem; margin-bottom: 1.5rem; }
          .error-box__icon { font-size: 3rem; margin-bottom: 0.5rem; }
          .error-box h2 { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.25rem; }
          .ref { font-size: 1.5rem; font-weight: 700; font-family: monospace; margin-bottom: 1rem; }
          .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
          .detail-label { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); }
          .detail-value { font-weight: 600; }
          .actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
          .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer; }
          .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; border: none; }
          .btn--success { background: #16a34a; color: #fff; border: none; }
          .btn--outline { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
          .link { color: var(--ux4g-color-interactive-default, #000080); font-weight: 600; text-decoration: none; }
          .badge { display: inline-block; padding: 0.25rem 0.625rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; }
          .badge--success { background: #f0fdf4; color: #16a34a; }
          .badge--error { background: #fef2f2; color: #dc2626; }
          .links-box { background: #eff6ff; border: 2px solid #93c5fd; border-radius: 0.5rem; padding: 1.5rem; }
          .links-box h3 { font-weight: 700; margin: 0 0 1rem; }
          .links-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
          .link-item { display: block; padding: 0.625rem 0.75rem; border: 2px solid var(--ux4g-color-border, #e2e8f0); background: var(--ux4g-color-surface, #fff); border-radius: 0.375rem; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); text-decoration: none; font-weight: 600; }
          .notif { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; margin-bottom: 0.75rem; }
          .notif--unread { border-left: 4px solid var(--ux4g-color-interactive-default, #000080); }
          .notif h3 { font-size: 0.9375rem; font-weight: 700; margin: 0 0 0.25rem; }
          .notif p { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); margin: 0; }
          .notif__date { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); margin-top: 0.25rem; }
          .app-card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 1.25rem; margin-bottom: 1rem; }
          .app-card h3 { font-weight: 700; margin: 0 0 0.125rem; }
          .app-card__ref { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
          @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } .detail-grid { grid-template-columns: 1fr; } .links-grid { grid-template-columns: 1fr; } }
        </style>
        <ux4g-service-header icon="${icon}" icon-color="${iconColor}" category="${SVC}" heading="${heading}"></ux4g-service-header>
        <div class="m">${bodyFn()}</div>
        <ux4g-service-footer left-text="${SVC} • Government of India" right-text="${heading}"></ux4g-service-footer>
      `;
    }
  });
}

// ── Help & Support ──
s('ux4g-cert-help', '❓', '#ea580c', 'Help & Support', () => `
  <div class="grid">
    <div class="tile"><div class="tile__icon">📞</div><div class="tile__title">Helpline</div><div class="tile__text">1800-111-1111</div><div class="tile__text">Mon–Sat, 9 AM – 6 PM</div></div>
    <div class="tile"><div class="tile__icon">✉</div><div class="tile__title">Email Support</div><div class="tile__text">support@certificate.gov.in</div><div class="tile__text">Response within 24–48 hrs</div></div>
    <div class="tile"><div class="tile__icon">📄</div><div class="tile__title">User Guide</div><div class="tile__text">Download PDF Guide</div><div class="tile__text">Step-by-step instructions</div></div>
  </div>
  <div class="links-box"><h3>Quick Links</h3><div class="links-grid">
    <a href="${P}/eligibility" class="link-item">› Check Eligibility</a>
    <a href="/reference-service/demo" class="link-item">› Service Information</a>
    <a href="${P}/status-tracker" class="link-item">› Track Application</a>
    <a href="${P}/document-guidelines" class="link-item">› Document Guidelines</a>
    <a href="/reference-service/demo" class="link-item">› Fee Structure</a>
    <a href="${P}/privacy-policy" class="link-item">› Privacy Policy</a>
  </div></div>
`);

// ── Document Guidelines ──
s('ux4g-cert-document-guidelines', '📄', '#16a34a', 'Document Requirements & Guidelines', () => `
  <div class="c"><h2>Identity Proof <span class="badge badge--error">REQUIRED</span></h2><p>Accepted: Aadhaar Card, Voter ID, Passport, Driving License</p><p>Specifications: Clear colored scan, all corners visible, max 2 MB, PDF/JPG/PNG</p></div>
  <div class="c"><h2>Address Proof <span class="badge badge--error">REQUIRED</span></h2><p>Accepted: Electricity Bill, Gas Bill, Rent Agreement, Bank Statement</p><p>Specifications: Within last 3 months, name & address visible, max 2 MB</p></div>
  <div class="c"><h2>Photograph <span class="badge badge--error">REQUIRED</span></h2><p>Accepted: Passport-size (35×45mm)</p><p>Specifications: Within 6 months, white background, front view, 50–200 KB, JPG only</p></div>
  <div class="c"><h2>Income Proof <span class="badge badge--success">CONDITIONAL</span></h2><p>Accepted: Salary Slip, Form 16, ITR, Employer Certificate</p><p>Specifications: Latest or last 3 months, max 2 MB each, PDF/JPG</p></div>
`);

// ── Privacy Policy ──
s('ux4g-cert-privacy-policy', '🛡', '#2563eb', 'Privacy Policy', () => `
  <div class="c"><p><strong>Last Updated:</strong> January 1, 2026</p></div>
  <div class="c"><h2>1. Information We Collect</h2><p>Personal: name, DOB, gender, contact, address, identity proof, photograph. Application-specific: income, education, caste. Technical: IP address, browser, session data.</p></div>
  <div class="c"><h2>2. How We Use Your Information</h2><p>Processing applications, verifying identity, communicating status, preventing fraud, complying with legal obligations.</p></div>
  <div class="c"><h2>3. Information Sharing</h2><p>We do not sell your data. Shared only with government authorities for processing, as required by law, and trusted service providers bound by confidentiality.</p></div>
  <div class="c"><h2>4. Data Security</h2><p>SSL/TLS encryption, encrypted storage, regular security audits, access controls.</p></div>
  <div class="c"><h2>5. Your Rights</h2><p>Right to Access, Correction, Erasure, Restrict Processing, Data Portability, Object.</p></div>
  <div class="c"><h2>6. Contact</h2><p>Data Protection Officer • privacy@certificate.gov.in • 1800-111-1111</p></div>
`);

// ── Submission Success ──
s('ux4g-cert-submission-success', '✅', '#16a34a', 'Application Submitted', () => `
  <div class="success"><div class="success__icon">✅</div><h2>Application Submitted Successfully</h2><p>Your application is now in the review queue.</p></div>
  <div class="c"><div class="detail-label">Reference Number</div><div class="ref">CERT-2026-MH-876543</div>
    <div class="detail-grid"><div><span class="detail-label">Applicant</span><div class="detail-value">Priya Sharma</div></div><div><span class="detail-label">Certificate Type</span><div class="detail-value">Income Certificate</div></div><div><span class="detail-label">Submission Date</span><div class="detail-value">April 10, 2026</div></div><div><span class="detail-label">Status</span><div class="detail-value">Submitted</div></div></div>
    <div class="actions"><a href="${P}/status-tracker" class="btn btn--primary">Track Status</a><button class="btn btn--outline">📥 Download Receipt</button></div>
  </div>
  <div class="c" style="background:#eff6ff;border-color:#93c5fd;"><h2>🔔 What Happens Next</h2><ol><li>Your application will be assigned to an officer.</li><li>You will receive notifications for status updates.</li><li>After approval, your certificate will be available for download.</li></ol></div>
`);

// ── Notifications ──
s('ux4g-cert-notifications', '🔔', '#2563eb', 'Notifications', () => `
  <div class="notif notif--unread"><h3>Document Clarification Needed</h3><p>The reviewing officer has requested additional information regarding your income proof document.</p><div class="notif__date">April 13, 2026</div></div>
  <div class="notif notif--unread"><h3>Application Under Review</h3><p>Your application has been assigned to Officer Suresh Mehta for review.</p><div class="notif__date">April 12, 2026</div></div>
  <div class="notif"><h3>Payment Confirmed</h3><p>Payment of ₹649 received via UPI. Transaction ID: TXN-2026041012345.</p><div class="notif__date">April 10, 2026</div></div>
  <div class="notif"><h3>Application Submitted</h3><p>Your certificate application CERT-2026-MH-876543 has been submitted successfully.</p><div class="notif__date">April 10, 2026</div></div>
`);

// ── My Applications ──
s('ux4g-cert-my-applications', '📁', '#9333ea', 'My Applications', () => `
  <div class="app-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;"><div><h3>Income Certificate</h3><div class="app-card__ref">CERT-2026-MH-876543 • Submitted: April 10, 2026</div></div><span class="badge" style="background:#fffbeb;color:#d97706;">Under Review</span></div><div class="actions" style="margin-top:1rem;"><a href="${P}/status-tracker" class="btn btn--outline">👁 Track</a></div></div>
  <div class="app-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;"><div><h3>Birth Certificate</h3><div class="app-card__ref">CERT-2026-MH-654321 • Submitted: March 15, 2026</div></div><span class="badge badge--success">Issued</span></div><div class="actions" style="margin-top:1rem;"><a href="${P}/status-tracker" class="btn btn--outline">👁 Track</a><a href="${P}/issued" class="btn btn--success">📥 Download</a></div></div>
  <div class="app-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;"><div><h3>Domicile Certificate</h3><div class="app-card__ref">CERT-2026-MH-111222 • Submitted: February 20, 2026</div></div><span class="badge badge--error">Rejected</span></div><div class="actions" style="margin-top:1rem;"><a href="${P}/status-tracker" class="btn btn--outline">👁 Track</a></div></div>
`);

// ── Certificate Issued ──
s('ux4g-cert-issued', '🏆', '#16a34a', 'Certificate Issued', () => `
  <div class="c"><h2>Birth Certificate</h2><div class="detail-grid"><div><span class="detail-label">Applicant</span><div class="detail-value">Priya Sharma</div></div><div><span class="detail-label">Reference</span><div class="detail-value">CERT-2026-MH-654321</div></div><div><span class="detail-label">Certificate Number</span><div class="detail-value">BC/2026/MH/654321</div></div><div><span class="detail-label">Status</span><div class="detail-value" style="color:#16a34a;">Issued</div></div></div><div class="actions"><button class="btn btn--success">📥 Download PDF</button><button class="btn btn--outline">🔍 Verify via QR</button></div></div>
`);

// ── Feedback ──
s('ux4g-cert-feedback', '💬', '#db2777', 'Share Your Experience', () => `
  <div class="success"><div class="success__icon">👍</div><h2>Congratulations on Receiving Your Certificate!</h2><p>We would love to hear about your experience.</p></div>
  <div class="c"><h2>Help Us Improve</h2><p>Rate your experience: ⭐⭐⭐⭐⭐</p><p>Categories: Application Process, Website Usability, Processing Time, Officer Support</p><p>Your feedback helps us improve our services for all citizens.</p><div class="actions" style="margin-top:1rem;"><button class="btn btn--success">📤 Submit Feedback</button><a href="${P}/my-applications" class="link" style="margin-left:1rem;">Skip for now</a></div></div>
`);

// ── Verification ──
s('ux4g-cert-verification', '🔍', '#0d9488', 'Verify Certificate Authenticity', () => `
  <div class="c" style="background:#eff6ff;border-color:#93c5fd;"><p>ℹ Enter the certificate number or scan the QR code to check validity. For testing: Use <strong>INC/2026/MH/876543</strong></p></div>
  <div class="c"><h2>Enter Certificate Number</h2><p>Certificate numbers are usually in format: TYPE/YEAR/STATE/NUMBER</p></div>
`);

// ── Correction Request ──
s('ux4g-cert-correction-request', '✏', '#ca8a04', 'Correction Request', () => `
  <div class="c" style="background:#fef3c7;border-color:#d97706;"><h2>Message from Officer</h2><p>⚠ Please provide a recent salary slip (not older than 3 months) showing all required details including employer name, employee ID, and monthly breakdown.</p><p><strong>Requested By:</strong> Officer Suresh Mehta • <strong>Date:</strong> April 12, 2026</p></div>
  <div class="c"><div class="detail-grid" style="grid-template-columns:repeat(3,1fr);"><div><span class="detail-label">Reference</span><div class="detail-value" style="font-family:monospace;">CERT-2026-MH-876543</div></div><div><span class="detail-label">Type</span><div class="detail-value">Income Certificate</div></div><div><span class="detail-label">Submitted</span><div class="detail-value">April 10, 2026</div></div></div></div>
  <div class="actions"><a href="${P}/status-tracker" class="btn btn--outline">View Application Status</a><button class="btn btn--success">Submit Corrections →</button></div>
`);

// ── Rejected ──
s('ux4g-cert-rejected', '❌', '#dc2626', 'Application Rejected', () => `
  <div class="error-box"><div class="error-box__icon">❌</div><h2>Application Rejected</h2><p>Your application has been reviewed and could not be approved.</p></div>
  <div class="c" style="border-top:4px solid #dc2626;"><div class="detail-label">Reference Number</div><div class="ref">CERT-2026-MH-876543</div><div class="detail-grid"><div><span class="detail-label">Applicant</span><div class="detail-value">Priya Sharma</div></div><div><span class="detail-label">Certificate Type</span><div class="detail-value">Income Certificate</div></div><div><span class="detail-label">Rejection Date</span><div class="detail-value">April 15, 2026</div></div><div><span class="detail-label">Reviewed By</span><div class="detail-value">Suresh Mehta</div></div></div></div>
  <div class="c"><h2>💬 Reason for Rejection</h2><p>Income proof document is not clear. The salary slip does not show all required details.</p></div>
  <div class="actions"><a href="${P}/start" class="btn btn--primary">🔄 Start New Application</a><a href="${P}/appeal" class="btn btn--outline">⚖ File Appeal</a><a href="${P}/help" class="btn btn--outline">❓ Get Help</a></div>
`);

// ── Appeal ──
s('ux4g-cert-appeal', '⚖', '#4f46e5', 'File an Appeal', () => `
  <div class="c" style="background:#eff6ff;border-color:#93c5fd;"><h2>About Appeals</h2><p>If you believe your application was rejected incorrectly, you can file an appeal. It will be reviewed by a senior officer within 7 working days. The appeal decision is final.</p></div>
  <div class="c" style="border-top:4px solid #dc2626;"><h2>Rejected Application Details</h2><div class="detail-grid" style="grid-template-columns:repeat(3,1fr);"><div><span class="detail-label">Reference</span><div class="detail-value" style="font-family:monospace;">CERT-2026-MH-876543</div></div><div><span class="detail-label">Type</span><div class="detail-value">Income Certificate</div></div><div><span class="detail-label">Rejection Date</span><div class="detail-value">April 15, 2026</div></div></div><div style="background:#fef2f2;border:2px solid #dc2626;border-radius:0.375rem;padding:0.75rem;margin-top:0.75rem;"><p style="margin:0;">Income proof document is not clear and appears outdated.</p></div></div>
  <div class="c"><h2>Appeal Information</h2><p>Provide your reason for appeal and any supporting evidence. You may also upload corrected documents.</p></div>
  <div class="actions"><a href="${P}/rejected" class="btn btn--outline">Cancel</a><button class="btn btn--primary">Submit Appeal →</button></div>
`);

export {};
