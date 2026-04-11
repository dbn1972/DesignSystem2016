# Certificate Service Architecture
## Visual Structure & Flow Diagrams

---

## 🏗️ SERVICE ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────────────┐
│                   CERTIFICATE APPLICATION SERVICE               │
│                     (34 Pages, 10 Phases)                       │
└─────────────────────────────────────────────────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│   CITIZEN   │       │   OFFICER   │       │   PUBLIC    │
│   PORTAL    │       │   PORTAL    │       │   ACCESS    │
│  (28 pages) │       │  (3 pages)  │       │  (1 page)   │
└─────────────┘       └─────────────┘       └─────────────┘
```

---

## 📊 PHASE DISTRIBUTION

```
CITIZEN FLOWS (28 pages)
├─ Discovery & Information ────────── 5 pages (15%)
├─ Identity & Access ──────────────── 6 pages (18%)
├─ Application Submission ─────────── 8 pages (24%)
├─ Payment ────────────────────────── 2 pages (6%)
├─ Post-Submission ────────────────── 3 pages (9%)
├─ Issuance & Completion ──────────── 2 pages (6%)
├─ Recovery & Corrections ─────────── 3 pages (9%)
└─ User Dashboard ─────────────────── 1 page (3%)

OFFICER FLOWS (3 pages)
└─ Officer Workflows ──────────────── 3 pages (9%)

PUBLIC ACCESS (1 page)
└─ Public Services ────────────────── 1 page (3%)
```

---

## 🔄 PRIMARY USER FLOW (HAPPY PATH)

```
START
  │
  ▼
┌────────────────────────────────────────────────────────────────┐
│ 1. DISCOVERY (Choose Entry Point)                             │
├────────────────────────────────────────────────────────────────┤
│ • Landing Page (/certificate-service)                         │
│ • Check Eligibility (/certificate-eligibility)                │
│ • Review Document Guidelines (/certificate-document-guidelines)│
└────────────────────────────────────────────────────────────────┘
  │
  ▼
┌────────────────────────────────────────────────────────────────┐
│ 2. AUTHENTICATION (Create Account or Sign In)                 │
├────────────────────────────────────────────────────────────────┤
│ NEW USER                    │  RETURNING USER                  │
│ • Sign Up                   │  • Sign In                       │
│ • Verify OTP                │  • Dashboard                     │
│ • Profile Created           │  • Continue/Track                │
└────────────────────────────────────────────────────────────────┘
  │
  ▼
┌────────────────────────────────────────────────────────────────┐
│ 3. APPLICATION (Multi-Step Form)                              │
├────────────────────────────────────────────────────────────────┤
│ Step 1: Personal Info → Step 2: Address → Step 3: Additional  │
│              ↓                  ↓                 ↓            │
│         Review Form → Upload Documents → Final Review          │
└────────────────────────────────────────────────────────────────┘
  │
  ▼
┌────────────────────────────────────────────────────────────────┐
│ 4. CONSENT & DECLARATION                                       │
├────────────────────────────────────────────────────────────────┤
│ • Read 8-point declaration                                     │
│ • Accept terms and conditions                                  │
│ • Confirm submission intent                                    │
└────────────────────────────────────────────────────────────────┘
  │
  ▼
┌────────────────────────────────────────────────────────────────┐
│ 5. PAYMENT                                                     │
├────────────────────────────────────────────────────────────────┤
│ • View fee breakdown (₹155)                                    │
│ • Complete payment                                             │
│ • Download receipt                                             │
└────────────────────────────────────────────────────────────────┘
  │
  ▼
┌────────────────────────────────────────────────────────────────┐
│ 6. SUBMISSION CONFIRMATION                                     │
├────────────────────────────────────────────────────────────────┤
│ • Success page with reference number                           │
│ • Email/SMS notifications enabled                              │
│ • Timeline preview (7-10 days)                                 │
└────────────────────────────────────────────────────────────────┘
  │
  ▼
┌────────────────────────────────────────────────────────────────┐
│ 7. PROCESSING & TRACKING                                       │
├────────────────────────────────────────────────────────────────┤
│ Status Timeline:                                               │
│ [✓] Submitted → [✓] Paid → [⏳] Review → [ ] Decision → [ ] Issue│
│                                                                │
│ • Check status periodically                                    │
│ • Receive notifications                                        │
│ • View officer details                                         │
└────────────────────────────────────────────────────────────────┘
  │
  ▼
┌────────────────────────────────────────────────────────────────┐
│ 8. ISSUANCE & COMPLETION                                       │
├────────────────────────────────────────────────────────────────┤
│ • Download digital certificate                                 │
│ • Print certificate                                            │
│ • Verify with QR code                                          │
│ • Provide feedback                                             │
└────────────────────────────────────────────────────────────────┘
  │
  ▼
END (Certificate Received)
```

---

## 🔀 ALTERNATE FLOWS

### **Correction Flow**
```
Status Tracker
  │
  ├─ [Clarification Needed] ──→ Correction Request
  │                                    │
  │                                    ▼
  │                          Select Sections to Update
  │                                    │
  │                        ┌───────────┴───────────┐
  │                        ▼                       ▼
  │                  Edit Forms            Upload New Documents
  │                        │                       │
  │                        └───────────┬───────────┘
  │                                    ▼
  │                              Resubmit Application
  │                                    │
  └────────────────────────────────────┘
                                       │
                                       ▼
                              Back to Processing
```

### **Rejection & Appeal Flow**
```
Status Tracker
  │
  ├─ [Rejected] ──→ Rejection Page
  │                      │
  │          ┌───────────┴────────────┐
  │          ▼                        ▼
  │   New Application          File Appeal
  │          │                        │
  │          │                        ▼
  │          │                 Appeal Form
  │          │                        │
  │          │                        ▼
  │          │             Submit Supporting Evidence
  │          │                        │
  │          │                        ▼
  │          │                 Appeal Processing
  │          │                        │
  │          └────────────┬───────────┘
  │                       ▼
  └────────── Back to Status Tracker
```

### **Password Recovery Flow**
```
Sign In Page
  │
  ├─ [Forgot Password] ──→ Recovery Page
  │                              │
  │                              ▼
  │                      Enter Mobile Number
  │                              │
  │                              ▼
  │                         Verify OTP
  │                              │
  │                              ▼
  │                      Create New Password
  │                              │
  │                              ▼
  └──────────────────────→ Sign In (Success)
```

---

## 👮 OFFICER WORKFLOW

```
Officer Sign In
  │
  ▼
┌────────────────────────────────────────────────────────────────┐
│ OFFICER DASHBOARD                                              │
├────────────────────────────────────────────────────────────────┤
│ Statistics:                                                    │
│ • Total Cases: 47           • Pending: 12                      │
│ • Completed Today: 6        • Clarifications: 5                │
│                                                                │
│ Quick Actions:                                                 │
│ [View Queue] [Pending] [Clarifications] [Completed]           │
└────────────────────────────────────────────────────────────────┘
  │
  ▼
┌────────────────────────────────────────────────────────────────┐
│ CASE QUEUE                                                     │
├────────────────────────────────────────────────────────────────┤
│ Filters: [Status ▼] [Date ▼] [Type ▼]                         │
│ Search: [Reference Number or Name]                             │
│                                                                │
│ Applications List:                                             │
│ ┌────────────────────────────────────────────────────────┐    │
│ │ CERT-2026-MH-876543 │ Priya Sharma │ 2 days │ [Review]│    │
│ │ CERT-2026-MH-875421 │ Rajesh Kumar │ 5 days │ [Review]│    │
│ │ CERT-2026-MH-874112 │ Anita Desai  │ 1 day  │ [Review]│    │
│ └────────────────────────────────────────────────────────┘    │
└────────────────────────────────────────────────────────────────┘
  │
  ├─ [Select Case] ────→ CASE REVIEW
  │                           │
  │                           ▼
  │              ┌────────────────────────────┐
  │              │ Review Application Details │
  │              ├────────────────────────────┤
  │              │ • Personal Information     │
  │              │ • Address Verification     │
  │              │ • Document Authenticity    │
  │              │ • Eligibility Check        │
  │              └────────────────────────────┘
  │                           │
  │                           ▼
  │              ┌────────────────────────────┐
  │              │    DECISION PANEL          │
  │              ├────────────────────────────┤
  │              │ [Approve]                  │
  │              │ [Request Clarification]    │
  │              │ [Reject]                   │
  │              └────────────────────────────┘
  │                           │
  │              ┌────────────┼────────────┐
  │              ▼            ▼            ▼
  │         Approve    Clarification   Reject
  │              │            │            │
  │              ▼            ▼            ▼
  │         Generate   Send to      Send to
  │      Certificate  Citizen      Citizen
  │                           │
  └───────────────────────────┴─────→ Next Case
```

---

## 🗂️ COMPONENT HIERARCHY

```
Certificate Service
│
├─ Shared Components
│  ├─ ServiceHeader
│  ├─ ServiceFooter
│  ├─ FormProgress
│  └─ InfoBanner
│
├─ Phase 1: Discovery (5 components)
│  ├─ CertificateService
│  ├─ CertificateEligibility
│  ├─ CertificateHelp
│  ├─ CertificateDocumentGuidelines
│  └─ CertificatePrivacyPolicy
│
├─ Phase 2: Identity (6 components)
│  ├─ CertificateSignUp
│  ├─ CertificateVerifyOTP
│  ├─ CertificateSignIn
│  ├─ CertificateForgotPassword
│  ├─ CertificateSessionTimeout
│  └─ CertificateUserProfile
│
├─ Phase 3: Application (8 components)
│  ├─ CertificateStart
│  ├─ CertificateFormPersonal
│  ├─ CertificateFormAddress
│  ├─ CertificateFormAdditional
│  ├─ CertificateFormReview
│  ├─ CertificateDocumentUpload
│  ├─ CertificateReviewSummary
│  └─ CertificateDeclaration
│
├─ Phase 4: Payment (2 components)
│  ├─ CertificatePaymentSummary
│  └─ CertificatePaymentReceipt
│
├─ Phase 5: Post-Submission (3 components)
│  ├─ CertificateSubmissionSuccess
│  ├─ CertificateStatusTracker
│  └─ CertificateNotifications
│
├─ Phase 6: Issuance (2 components)
│  ├─ CertificateIssued
│  └─ CertificateFeedback
│
├─ Phase 7: Recovery (3 components)
│  ├─ CertificateCorrectionRequest
│  ├─ CertificateRejected
│  └─ CertificateAppeal
│
├─ Phase 8: Officer (3 components)
│  ├─ CertificateOfficerDashboard
│  ├─ CertificateOfficerCases
│  └─ CertificateOfficerReview
│
├─ Phase 9: Dashboard (1 component)
│  └─ CertificateMyApplications
│
└─ Phase 10: Public (1 component)
   └─ CertificateVerification
```

---

## 🔐 AUTHENTICATION MATRIX

```
┌──────────────────────────────────┬─────────┬─────────┬─────────┐
│ Page                             │ Public  │ Citizen │ Officer │
├──────────────────────────────────┼─────────┼─────────┼─────────┤
│ Service Landing                  │    ✓    │    ✓    │    ✓    │
│ Eligibility Checker              │    ✓    │    ✓    │    ✓    │
│ Help & Support                   │    ✓    │    ✓    │    ✓    │
│ Document Guidelines              │    ✓    │    ✓    │    ✓    │
│ Privacy Policy                   │    ✓    │    ✓    │    ✓    │
│ Certificate Verification         │    ✓    │    ✓    │    ✓    │
│ Sign Up                          │    ✓    │    -    │    -    │
│ Sign In                          │    ✓    │    -    │    -    │
│ Forgot Password                  │    ✓    │    -    │    -    │
├──────────────────────────────────┼─────────┼─────────┼─────────┤
│ All Application Forms            │    -    │    ✓    │    -    │
│ Document Upload                  │    -    │    ✓    │    -    │
│ Payment                          │    -    │    ✓    │    -    │
│ Status Tracker                   │    -    │    ✓    │    -    │
│ My Applications                  │    -    │    ✓    │    -    │
│ Notifications                    │    -    │    ✓    │    -    │
│ User Profile                     │    -    │    ✓    │    -    │
│ Certificate Download             │    -    │    ✓    │    -    │
├──────────────────────────────────┼─────────┼─────────┼─────────┤
│ Officer Dashboard                │    -    │    -    │    ✓    │
│ Officer Case Queue               │    -    │    -    │    ✓    │
│ Officer Review                   │    -    │    -    │    ✓    │
└──────────────────────────────────┴─────────┴─────────┴─────────┘
```

---

## 📱 RESPONSIVE DESIGN STRATEGY

```
┌────────────────────────────────────────────────────────────────┐
│                        VIEWPORT BREAKPOINTS                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Mobile (< 768px)                                               │
│ ├─ Single column layout                                        │
│ ├─ Hamburger menu                                              │
│ ├─ Stacked form fields                                         │
│ ├─ Full-width buttons                                          │
│ └─ Bottom navigation                                           │
│                                                                │
│ Tablet (768px - 1024px)                                        │
│ ├─ Two-column layout                                           │
│ ├─ Collapsible sidebar                                         │
│ ├─ Grid forms (2 columns)                                      │
│ ├─ Floating action buttons                                     │
│ └─ Persistent navigation                                       │
│                                                                │
│ Desktop (> 1024px)                                             │
│ ├─ Full multi-column layout                                    │
│ ├─ Expanded navigation                                         │
│ ├─ Grid forms (3+ columns)                                     │
│ ├─ Hover interactions                                          │
│ └─ Breadcrumb navigation                                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 🎨 VISUAL DESIGN SYSTEM

```
┌────────────────────────────────────────────────────────────────┐
│                     COLOR PALETTE                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Primary Colors (Indian Tricolor)                              │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                  │
│ │#FF9933 │ │#FFFFFF │ │#138808 │ │#000080 │                  │
│ │Saffron │ │ White  │ │ Green  │ │  Navy  │                  │
│ └────────┘ └────────┘ └────────┘ └────────┘                  │
│                                                                │
│ Status Colors                                                  │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                  │
│ │#10B981 │ │#F59E0B │ │#EF4444 │ │#6366F1 │                  │
│ │Success │ │Warning │ │ Error  │ │  Info  │                  │
│ └────────┘ └────────┘ └────────┘ └────────┘                  │
│                                                                │
│ Neutral Colors                                                 │
│ ┌────────┐ ┌────────┐ ┌────────┐                              │
│ │#111827 │ │#6B7280 │ │#F3F4F6 │                              │
│ │  Dark  │ │  Gray  │ │ Light  │                              │
│ └────────┘ └────────┘ └────────┘                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                     COMPONENT ANATOMY                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Standard Button:                                               │
│ ┌──────────────────────────────────────────┐                  │
│ │  [Icon] Button Text                      │                  │
│ │  px-6 py-3 | font-bold | rounded         │                  │
│ └──────────────────────────────────────────┘                  │
│                                                                │
│ Form Input:                                                    │
│ ┌──────────────────────────────────────────┐                  │
│ │ Label *required                          │                  │
│ │ ┌────────────────────────────────────┐   │                  │
│ │ │ Input field                        │   │                  │
│ │ └────────────────────────────────────┘   │                  │
│ │ Helper text or error message             │                  │
│ └──────────────────────────────────────────┘                  │
│                                                                │
│ Info Card:                                                     │
│ ┌──────────────────────────────────────────┐                  │
│ │ ┌──────────────────────────────────────┐ │                  │
│ │ │ [Icon] Title                         │ │                  │
│ │ ├──────────────────────────────────────┤ │                  │
│ │ │ Content area                         │ │                  │
│ │ │ Additional information               │ │                  │
│ │ └──────────────────────────────────────┘ │                  │
│ └──────────────────────────────────────────┘                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 📈 ANALYTICS & METRICS

```
Recommended Tracking Points:
┌────────────────────────────────────────────────────────────────┐
│ FUNNEL STAGE          │ PAGE                │ KEY METRIC       │
├────────────────────────────────────────────────────────────────┤
│ 1. Discovery          │ Landing             │ Visit Rate       │
│ 2. Interest           │ Eligibility         │ Check Rate       │
│ 3. Registration       │ Sign Up             │ Conversion Rate  │
│ 4. Application Start  │ Form Personal       │ Start Rate       │
│ 5. Application Submit │ Payment             │ Completion Rate  │
│ 6. Success            │ Submission Success  │ Success Rate     │
│ 7. Issuance           │ Certificate Issued  │ Download Rate    │
│ 8. Satisfaction       │ Feedback            │ Rating Score     │
└────────────────────────────────────────────────────────────────┘

Drop-off Analysis Points:
• Sign Up → OTP (abandonment)
• Personal → Address (form exit)
• Declaration → Payment (payment dropout)
• Any → Session Timeout (timeout rate)
```

---

## 🔍 ERROR HANDLING MAP

```
ERROR STATE → RECOVERY PATH

┌────────────────────────────────────────────────────────────────┐
│ Authentication Errors                                          │
├────────────────────────────────────────────────────────────────┤
│ Invalid Login         →  Forgot Password                       │
│ OTP Timeout          →  Resend OTP                            │
│ Session Expired      →  Re-login (Session Timeout Page)       │
│ Account Locked       →  Contact Support                       │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ Form Validation Errors                                         │
├────────────────────────────────────────────────────────────────┤
│ Required Field       →  Inline error with guidance            │
│ Invalid Format       →  Example shown below field             │
│ Upload Failed        →  Retry upload button                   │
│ File Too Large       →  Size limit displayed                  │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ Application Errors                                             │
├────────────────────────────────────────────────────────────────┤
│ Clarification Needed →  Correction Request Page               │
│ Application Rejected →  Rejection Page → Appeal or Resubmit   │
│ Payment Failed       →  Retry Payment                          │
│ Network Error        →  Auto-retry with notification          │
└────────────────────────────────────────────────────────────────┘
```

---

**Document Purpose:** Visual reference for architecture and flows  
**Target Audience:** Developers, Designers, Product Managers  
**Last Updated:** April 10, 2026
