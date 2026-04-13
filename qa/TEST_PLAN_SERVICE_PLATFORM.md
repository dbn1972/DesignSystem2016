# UX4G Service Platform QA Test Plan

## 1) System Understanding

### Project Structure
- React app shell under `src/app` with route-level pages in `src/app/pages`.
- Reusable business logic in `src/app/services` (auth, OTP, forgot-password, payment, form flow, upload, status).
- Reusable service components in `src/app/components/auth` and `src/app/components/service`.
- Shared layout/header/footer and content patterns in `src/app/components/*`.

### Routing Model
- Central browser router in `src/app/routes.tsx`.
- Two route tracks:
  - Reusable services (`/reference-service/*`)
  - Certificate-specific wrappers (`/reference-service/certificate/*`)
- Route constants and group metadata in `src/app/services/routeConfig.ts`.

### Service Architecture
- UI orchestration in components, flow logic in services.
- LocalStorage-backed draft/application behavior in `certificateFlow.ts`.
- Mock API simulation via `mockApi.ts`.

## 2) Flow-Level Test Plan

### Authentication (Sign In, OTP, Recovery)
- Happy path: valid identifier + password, OTP success, reset password success.
- Validation: missing identifier/password, malformed email/mobile, invalid OTP length.
- Edge: account locked, session expired, service unavailable.
- Failure: wrong credentials, expired OTP, identifier not found.
- Recovery: resend OTP, alternate path (OTP sign-in / forgot-password).

### Multi-step Forms (personal/address/additional/review)
- Happy path: complete required fields, save draft, next-step navigation.
- Validation: field-level required/format failures, certificate-type conditional fields.
- Edge: optional fields empty, whitespace input, numeric sanitation.
- Failure: invalid pin/mobile/email/aadhaar.
- Recovery: edit from review, save/resume from draft state.

### Document Upload
- Happy path: required docs uploaded with allowed types/sizes.
- Validation: extension block, oversized files, required-missing on continue.
- Edge: replace file, remove file, optional docs omitted.
- Failure: invalid files and blocked progression.
- Recovery: re-upload after validation failure.

### Payment
- Happy path: fee summary renders and success redirects.
- Validation: retry state visible on failed attempt.
- Edge: first-attempt failure then retry.
- Failure: payment gateway/network failure state.
- Recovery: retry button and resumed continuation.

### Submission & Confirmation
- Happy path: successful submission message, reference id visibility.
- Edge: duplicate submits, refresh resilience, back-navigation safety.
- Failure: submission unavailable, retry guidance.
- Recovery: return to prior step without data loss.

### Status Tracking
- Happy path: reference, status label, timeline render.
- Validation: fallback data when no latest application.
- Edge: in-progress timeline states.
- Failure: missing/invalid reference handling.
- Recovery: route back to service home.

### Contact/Support
- Happy path: intent selection -> form -> review -> success.
- Validation: required fields, email/phone/message checks.
- Edge: help panel toggling, preferred contact mode switching.
- Failure: short message, invalid contact details.
- Recovery: edit-before-submit and re-submit.

## 3) Test Case Matrix (Representative)

### Authentication
- AUTH-HP-01: Sign-in with valid userId and valid password.
- AUTH-VAL-01: Empty identifier/password blocks submit with inline errors.
- AUTH-FAIL-01: Wrong password shows wrong-credentials banner.
- AUTH-FAIL-02: `locked` identifier yields locked-account state.
- OTP-HP-01: `123456` verifies and redirects.
- OTP-FAIL-01: `000000` yields expired OTP state.
- FP-HP-01: Reset request + valid OTP + new password succeeds.
- FP-FAIL-01: Unknown identifier yields identifier-not-found.

### Form
- FORM-P-VAL-01: Personal form required fields enforced.
- FORM-A-VAL-01: Address form pincode and required fields enforced.
- FORM-ADD-VAL-01: Income type requires annual income.
- FORM-RVW-HP-01: Review screen shows mapped draft values and edit links.

### Upload
- UP-VAL-01: `.exe` file blocked.
- UP-VAL-02: Continue blocked until required docs uploaded.
- UP-HP-01: Two required docs uploaded, continue allowed.

### Payment
- PAY-HP-01: Summary lines and total visible.
- PAY-FAIL-01: Failed payment shows retry message.
- PAY-REC-01: Success path navigates to receipt route.

### Status + Support
- ST-HP-01: Timeline + status metadata visible.
- SUP-VAL-01: Contact form required validation surfaces correctly.

