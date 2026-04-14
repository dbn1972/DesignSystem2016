/**
 * Certificate Flow — Web Component Pages
 *
 * 31 pages matching the React certificate service implementation:
 * - 1 demo landing page (cert-demo)
 * - 18 thin wrappers composing reusable service components (cert-pages)
 * - 12 unique certificate-specific pages (cert-unique-pages)
 */
export { UX4GCertDemo } from './cert-demo';
export { UX4GCertOfficerDashboard, UX4GCertOfficerCases, UX4GCertOfficerReview } from './cert-officer';
export { UX4GIdentitySignIn, UX4GIdentitySignUp, UX4GIdentityMobileOTP } from './identity-auth';
export { UX4GIdentityEmailOTP, UX4GIdentityForgotPassword, UX4GIdentityAccountRecovery } from './identity-recovery';
export { UX4GIdentitySessionTimeout, UX4GIdentityErrorLockout, UX4GIdentityAadhaar } from './identity-security';
import './cert-pages';
import './cert-unique-pages';
import './cert-officer';
import './identity-auth';
import './identity-recovery';
import './identity-security';
