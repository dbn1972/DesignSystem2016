/**
 * Certificate Service Demo Landing Page — Web Component
 * Matches React CertificateService.tsx
 * @element ux4g-cert-demo
 */
import { UX4GElement } from '../../base/UX4GElement';

const ELIGIBILITY = ['Must be an Indian citizen', 'Must be 18 years of age or above', 'Must have valid identity proof (Aadhaar, Voter ID, Passport)', 'Must have valid address proof', 'Must meet specific requirements for certificate type'];
const MANDATORY_DOCS = ['Identity Proof (Aadhaar / Voter ID / Passport)', 'Address Proof (Utility Bill / Rent Agreement)', 'Recent Passport Size Photograph', 'Application Form (System Generated)'];
const ADDITIONAL_DOCS = ['Income Proof (for income certificate)', 'Caste Certificate (for caste certificate renewal)', 'Birth/Death Registration (for related certificates)', 'Any other supporting documents'];
const STEPS = [
  { n: 1, t: 'Create Account or Sign In', d: 'Register or log in using your mobile number and OTP verification' },
  { n: 2, t: 'Fill Application Form', d: 'Complete the multi-step form with personal, address, and certificate-specific details' },
  { n: 3, t: 'Upload Documents', d: 'Upload all required documents as per the checklist provided' },
  { n: 4, t: 'Review and Declare', d: 'Review your application, provide consent, and make declaration of accuracy' },
  { n: 5, t: 'Make Payment (if applicable)', d: 'Pay the application fee using online payment methods' },
  { n: 6, t: 'Submit Application', d: 'Submit your application and receive a unique reference number' },
  { n: 7, t: 'Track Status', d: 'Track your application status online using the reference number' },
  { n: 8, t: 'Download Certificate', d: 'Once approved, download your digital certificate' },
];

export class UX4GCertDemo extends UX4GElement {
  constructor() { super({ useShadowDOM: true }); }
  connectedCallback(): void { super.connectedCallback(); this.importUX4GStyles(); this.render(); }

  protected render(): void {
    this.root.innerHTML = `
      <style>
        :host { display: block; min-height: 100vh; background: var(--ux4g-color-background, #f8fafc); font-family: system-ui, sans-serif; color: var(--ux4g-color-text-default, #0f172a); }
        .tri { height: 4px; background: linear-gradient(to right, #FF9933, #fff, #138808); }
        .hero { background: var(--ux4g-color-surface, #fff); padding: 2rem 3rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); }
        .hero__icon { width: 4rem; height: 4rem; border-radius: 0.5rem; background: linear-gradient(135deg, #FF9933, #138808); display: flex; align-items: center; justify-content: center; font-size: 2rem; color: #fff; flex-shrink: 0; }
        .hero__sub { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .hero__title { font-size: 1.875rem; font-weight: 700; margin: 0; }
        .hero__desc { color: var(--ux4g-color-text-muted, #64748b); line-height: 1.6; margin: 0.5rem 0 0; max-width: 48rem; }
        .badge { padding: 0.5rem 1.25rem; border-radius: 0.375rem; font-size: 0.8125rem; font-weight: 700; background: #f0fdf4; color: #16a34a; border: 2px solid #16a34a; }
        .info-bar { background: #eff6ff; border-bottom: 2px solid var(--ux4g-color-border, #e2e8f0); padding: 1.5rem 3rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .info-item { display: flex; align-items: center; gap: 0.75rem; }
        .info-item__icon { width: 3rem; height: 3rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; color: #fff; flex-shrink: 0; }
        .info-item__label { font-size: 0.75rem; color: var(--ux4g-color-text-muted, #64748b); }
        .info-item__value { font-weight: 700; font-size: 0.9375rem; }
        .main { max-width: 1400px; margin: 0 auto; padding: 3rem; }
        .section { margin-bottom: 3rem; }
        .section__title { font-size: 1.5rem; font-weight: 700; margin: 0 0 1.5rem; }
        .card { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; padding: 2rem; }
        .card p { color: var(--ux4g-color-text-muted, #64748b); line-height: 1.6; margin: 0 0 1rem; }
        .card p:last-child { margin-bottom: 0; }
        .check-list { display: flex; flex-direction: column; gap: 0.625rem; }
        .check-item { display: flex; align-items: flex-start; gap: 0.625rem; color: var(--ux4g-color-text-muted, #64748b); }
        .check-item__icon { color: #16a34a; font-weight: 700; flex-shrink: 0; }
        .arrow-item { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .arrow-item--muted { opacity: 0.8; }
        .docs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .docs-grid h3 { font-weight: 700; margin: 0 0 0.75rem; }
        .card__footer { margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid var(--ux4g-color-border, #e2e8f0); }
        .info-banner { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; background: #eff6ff; border: 2px solid var(--ux4g-color-border, #e2e8f0); border-radius: 0.5rem; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .info-banner strong { display: block; color: var(--ux4g-color-text-default, #0f172a); margin-bottom: 0.25rem; }
        .step { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem; }
        .step:last-child { margin-bottom: 0; }
        .step__num { width: 2.5rem; height: 2.5rem; border-radius: 50%; background: var(--ux4g-color-interactive-default, #000080); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
        .step__title { font-weight: 700; margin-bottom: 0.125rem; }
        .step__desc { font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .important-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .important-card { border-radius: 0.5rem; padding: 1.5rem; border: 2px solid; }
        .important-card--warning { background: #fffbeb; border-color: #d97706; }
        .important-card--success { background: #f0fdf4; border-color: #16a34a; }
        .important-card h3 { font-weight: 700; margin: 0 0 1rem; display: flex; align-items: center; gap: 0.5rem; }
        .important-card .check-list { font-size: 0.875rem; }
        .cta-banner { border-radius: 0.5rem; overflow: hidden; }
        .cta-banner__tri { height: 4px; background: linear-gradient(to right, #FF9933, #fff, #138808); }
        .cta-banner__inner { background: var(--ux4g-color-surface, #fff); border: 2px solid var(--ux4g-color-border, #e2e8f0); border-top: none; border-radius: 0 0 0.5rem 0.5rem; padding: 3rem; text-align: center; }
        .cta-banner__title { font-size: 1.875rem; font-weight: 700; margin: 0 0 1rem; }
        .cta-banner__desc { color: var(--ux4g-color-text-muted, #64748b); max-width: 40rem; margin: 0 auto 2rem; line-height: 1.6; }
        .cta-actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.875rem 2rem; font-size: 0.875rem; font-weight: 700; border-radius: 0.375rem; text-decoration: none; border: 2px solid transparent; cursor: pointer; }
        .btn--primary { background: var(--ux4g-color-interactive-default, #000080); color: #fff; }
        .btn--secondary { background: var(--ux4g-color-surface, #fff); color: var(--ux4g-color-text-muted, #64748b); border-color: var(--ux4g-color-border, #e2e8f0); }
        .cta-signup { margin-top: 1.5rem; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        .link { color: var(--ux4g-color-interactive-default, #000080); font-weight: 700; text-decoration: none; }
        .footer { background: var(--ux4g-color-surface, #fff); border-top: 2px solid var(--ux4g-color-border, #e2e8f0); margin-top: 4rem; }
        .footer__inner { max-width: 1400px; margin: 0 auto; padding: 2rem 3rem; display: flex; justify-content: space-between; font-size: 0.875rem; color: var(--ux4g-color-text-muted, #64748b); }
        @media (max-width: 768px) { .hero { flex-direction: column; padding: 1.5rem 1rem; } .info-bar { grid-template-columns: 1fr 1fr; padding: 1rem; } .main { padding: 1.5rem 1rem; } .docs-grid, .important-grid { grid-template-columns: 1fr; } }
      </style>

      <div class="tri" aria-hidden="true"></div>
      <header class="hero">
        <div>
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
            <div class="hero__icon" aria-hidden="true">📄</div>
            <div><div class="hero__sub">Government of India</div><h1 class="hero__title">Certificate Application Service</h1></div>
          </div>
          <p class="hero__desc">Apply for government-issued certificates online. Complete application, track status, and receive digital certificates from the comfort of your home.</p>
        </div>
        <span class="badge">SERVICE ACTIVE</span>
      </header>

      <section class="info-bar" aria-label="Quick facts">
        <div class="info-item"><div class="info-item__icon" style="background:#2563eb">⏱</div><div><div class="info-item__label">Processing Time</div><div class="info-item__value">7–10 Days</div></div></div>
        <div class="info-item"><div class="info-item__icon" style="background:#16a34a">📄</div><div><div class="info-item__label">Application Mode</div><div class="info-item__value">100% Online</div></div></div>
        <div class="info-item"><div class="info-item__icon" style="background:#9333ea">👥</div><div><div class="info-item__label">Eligibility</div><div class="info-item__value">All Citizens</div></div></div>
        <div class="info-item"><div class="info-item__icon" style="background:#ea580c">🏅</div><div><div class="info-item__label">Certificate Type</div><div class="info-item__value">Digital + Print</div></div></div>
      </section>

      <main class="main">
        <section class="section"><h2 class="section__title">About This Service</h2><div class="card"><p>This is a generic government certificate application service that can be used for various types of certificates including birth certificates, death certificates, income certificates, domicile certificates, and caste certificates.</p><p>The service provides a complete digital experience from application submission to certificate download, with real-time status tracking and notifications at every step.</p></div></section>

        <section class="section"><h2 class="section__title">Eligibility Criteria</h2><div class="card"><div class="check-list">${ELIGIBILITY.map(e => `<div class="check-item"><span class="check-item__icon">✓</span><span>${e}</span></div>`).join('')}</div><div class="card__footer"><a href="/reference-service/certificate/eligibility" class="btn btn--primary">Check Your Eligibility →</a></div></div></section>

        <section class="section"><h2 class="section__title">Required Documents</h2><div class="card"><div class="docs-grid"><div><h3>Mandatory Documents</h3><div class="check-list">${MANDATORY_DOCS.map(d => `<div class="arrow-item"><span>›</span><span>${d}</span></div>`).join('')}</div></div><div><h3>Additional Documents (If Applicable)</h3><div class="check-list">${ADDITIONAL_DOCS.map(d => `<div class="arrow-item arrow-item--muted"><span>›</span><span>${d} <em style="color:var(--ux4g-color-text-muted,#64748b)">(Optional)</em></span></div>`).join('')}</div></div></div><div class="card__footer"><div class="info-banner"><span>ℹ</span><div><strong>Document Upload Guidelines</strong><span>All documents must be uploaded in PDF, JPEG, or PNG format. Maximum file size: 2MB per document. Ensure all documents are clear and readable.</span></div></div></div></div></section>

        <section class="section"><h2 class="section__title">Application Process</h2><div class="card">${STEPS.map(s => `<div class="step"><div class="step__num">${s.n}</div><div><div class="step__title">${s.t}</div><div class="step__desc">${s.d}</div></div></div>`).join('')}</div></section>

        <section class="section"><h2 class="section__title">Important Information</h2><div class="important-grid"><div class="important-card important-card--warning"><h3><span>⚠</span> Before You Apply</h3><div class="check-list"><div class="arrow-item"><span>›</span><span>Keep all required documents ready in digital format</span></div><div class="arrow-item"><span>›</span><span>Ensure your mobile number is active for OTP verification</span></div><div class="arrow-item"><span>›</span><span>Have a valid email address for notifications</span></div><div class="arrow-item"><span>›</span><span>Application cannot be edited after submission</span></div></div></div><div class="important-card important-card--success"><h3><span>✅</span> After Submission</h3><div class="check-list"><div class="arrow-item"><span>›</span><span>You will receive SMS and email confirmation</span></div><div class="arrow-item"><span>›</span><span>Track status using your reference number</span></div><div class="arrow-item"><span>›</span><span>Officer may request additional documents if needed</span></div><div class="arrow-item"><span>›</span><span>Certificate will be available for download upon approval</span></div></div></div></div></section>

        <section class="cta-banner"><div class="cta-banner__tri" aria-hidden="true"></div><div class="cta-banner__inner"><h2 class="cta-banner__title">Ready to Apply?</h2><p class="cta-banner__desc">Start your certificate application now. The entire process takes approximately 15–20 minutes to complete online.</p><div class="cta-actions"><a href="/reference-service/certificate/sign-in" class="btn btn--primary">🛡 Sign In to Apply</a><a href="/reference-service/certificate/help" class="btn btn--secondary">❓ Need Help?</a></div><p class="cta-signup">Don't have an account? <a href="/reference-service/certificate/sign-up" class="link">Sign Up Here</a></p></div></section>
      </main>

      <footer class="footer"><div class="footer__inner"><span>Certificate Application Service • Government of India</span><span><a href="/reference-service/overview" class="link">View Service Blueprint</a> · Digital India Initiative</span></div></footer>
    `;
  }
}

if (!customElements.get('ux4g-cert-demo')) customElements.define('ux4g-cert-demo', UX4GCertDemo);
