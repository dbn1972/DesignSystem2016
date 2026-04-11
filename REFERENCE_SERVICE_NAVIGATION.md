# Reference Service Navigation Map
## Certificate Application Service - Complete Flow Documentation

This document maps all 45 pages of the Certificate Application reference service, organized by service phase with complete navigation flows.

---

## 📋 SERVICE PHASES & PAGE INVENTORY

### **PHASE 1: DISCOVERY & INFORMATION (5 pages)**

| # | Page | Route | Purpose | Next Steps |
|---|------|-------|---------|------------|
| 1 | **Service Landing** | `/certificate-service` | Overview, eligibility, process | → Eligibility / Sign Up / Sign In |
| 2 | **Eligibility Checker** | `/certificate-eligibility` | Interactive 5-question assessment | → Sign Up / Service Home |
| 3 | **Help & Support** | `/certificate-help` | FAQs, contact options | → Service Home |
| 4 | **Document Guidelines** | `/certificate-document-guidelines` | Upload requirements, specs | → Sign Up / Document Upload |
| 5 | **Privacy Policy** | `/certificate-privacy-policy` | Legal compliance, data protection | → Service Home |

**Primary Entry Points:**
- `/certificate-service` - Main landing page
- Direct links from documentation

**Exit Points:**
- → Sign Up (new users)
- → Sign In (returning users)
- → Eligibility Checker (check qualification)

---

### **PHASE 2: IDENTITY & ACCESS (6 pages)**

| # | Page | Route | Purpose | Next Steps |
|---|------|-------|---------|------------|
| 6 | **Sign Up** | `/certificate-signup` | New user registration | → OTP Verification |
| 7 | **OTP Verification** | `/certificate-verify-otp` | Mobile number verification | → Application Start |
| 8 | **Sign In** | `/certificate-signin` | Returning user login | → Dashboard / Continue Application |
| 9 | **Forgot Password** | `/certificate-forgot-password` | 3-step password recovery | → Sign In |
| 10 | **Session Timeout** | `/certificate-session-timeout` | Security timeout message | → Sign In |
| 11 | **User Profile** | `/certificate-user-profile` | Account settings, preferences | → Dashboard |

**Primary Flow:**
```
NEW USER:    Sign Up → OTP → Start Application
RETURNING:   Sign In → Dashboard → Track/Continue
RECOVERY:    Forgot Password → Mobile → OTP → New Password → Sign In
TIMEOUT:     Session Timeout → Sign In → Resume
```

**Navigation Links:**
- Sign Up ↔ Sign In (toggle between registration/login)
- All auth pages → Service Home
- Profile accessible from Dashboard

---

### **PHASE 3: APPLICATION SUBMISSION (8 pages)**

| # | Page | Route | Purpose | Next Steps |
|---|------|-------|---------|------------|
| 12 | **Application Start** | `/certificate-start` | Instructions, requirements | → Personal Info (Step 1) |
| 13 | **Personal Information** | `/certificate-form-personal` | Step 1/3: Name, DOB, etc. | → Address (Step 2) |
| 14 | **Address Details** | `/certificate-form-address` | Step 2/3: Full address | → Additional Info (Step 3) |
| 15 | **Additional Information** | `/certificate-form-additional` | Step 3/3: Certificate-specific | → Form Review |
| 16 | **Form Review** | `/certificate-form-review` | Review all form data | → Document Upload / Edit forms |
| 17 | **Document Upload** | `/certificate-document-upload` | Upload required documents | → Final Review |
| 18 | **Review Summary** | `/certificate-review-summary` | Final pre-submission review | → Declaration |
| 19 | **Declaration** | `/certificate-declaration` | Legal 8-point declaration | → Payment |

**Linear Flow with Back Navigation:**
```
Start → Personal (1/3) → Address (2/3) → Additional (3/3) → 
Form Review → Documents → Final Review → Declaration → Payment
```

**Progress Indicator:**
- Steps 1-3 show "Step X of 3" progress
- Each page has "Save Draft" option
- "Previous" buttons for backward navigation
- Review pages have "Edit" links to specific sections

**Exit Points:**
- Save Draft → Dashboard
- Help → Help Center
- Cancel → Dashboard (with confirmation)

---

### **PHASE 4: PAYMENT (2 pages)**

| # | Page | Route | Purpose | Next Steps |
|---|------|-------|---------|------------|
| 20 | **Payment Summary** | `/certificate-payment-summary` | Fee breakdown, payment gateway | → Payment Receipt |
| 21 | **Payment Receipt** | `/certificate-payment-receipt` | Transaction confirmation | → Submission Success |

**Payment Flow:**
```
Declaration → Payment Summary (₹155 breakdown) → 
Process Payment → Receipt → Success
```

**Features:**
- Detailed fee breakdown
- Multiple payment methods
- Print/Download receipt
- Transaction ID tracking

---

### **PHASE 5: POST-SUBMISSION (3 pages)**

| # | Page | Route | Purpose | Next Steps |
|---|------|-------|---------|------------|
| 22 | **Submission Success** | `/certificate-submission-success` | Confirmation, reference number | → Track Status / Dashboard |
| 23 | **Status Tracker** | `/certificate-status-tracker` | 5-stage timeline tracking | → Dashboard / Correction (if needed) |
| 24 | **Notifications** | `/certificate-notifications` | Real-time updates center | → Status Tracker / Dashboard |

**Tracking Flow:**
```
Success (Reference: CERT-2026-MH-XXXXXX) → 
Status Tracker (5 stages) → Notifications → 
Check updates periodically
```

**Status Stages:**
1. Application Submitted
2. Payment Received
3. Under Review
4. Approved/Clarification/Rejected
5. Certificate Issued

---

### **PHASE 6: ISSUANCE & COMPLETION (2 pages)**

| # | Page | Route | Purpose | Next Steps |
|---|------|-------|---------|------------|
| 25 | **Certificate Issued** | `/certificate-issued` | Download digital certificate | → Feedback / Dashboard |
| 26 | **Feedback** | `/certificate-feedback` | 5-star rating, comments | → Dashboard |

**Completion Flow:**
```
Status Tracker (Approved) → Certificate Issued → 
Download/Print → Verify (optional) → Feedback → Dashboard
```

**Certificate Features:**
- QR code for verification
- Download as PDF
- Print functionality
- Share options

---

### **PHASE 7: RECOVERY & CORRECTIONS (3 pages)**

| # | Page | Route | Purpose | Next Steps |
|---|------|-------|---------|------------|
| 27 | **Correction Request** | `/certificate-correction-request` | Officer-requested updates | → Update Forms/Docs → Resubmit |
| 28 | **Application Rejected** | `/certificate-rejected` | Rejection details, reasons | → Resubmit / Appeal |
| 29 | **Appeal Submission** | `/certificate-appeal` | Formal appeal process | → Status Tracker |

**Recovery Flows:**

**Clarification Needed:**
```
Status Tracker (Clarification) → Correction Request → 
Select sections to update → Edit Forms/Upload Docs → Submit → 
Back to Status Tracker
```

**Rejection:**
```
Status Tracker (Rejected) → Rejection Page → 
Option 1: New Application
Option 2: File Appeal → Appeal Form → Submit → Track Appeal
```

---

### **PHASE 8: OFFICER WORKFLOWS (3 pages)**

| # | Page | Route | Purpose | Next Steps |
|---|------|-------|---------|------------|
| 30 | **Officer Dashboard** | `/certificate-officer-dashboard` | Overview, stats, goals | → Case Queue |
| 31 | **Officer Case Queue** | `/certificate-officer-cases` | All cases, filters, search | → Review Case |
| 32 | **Officer Review** | `/certificate-officer-review` | Review & decide on application | → Next Case / Dashboard |

**Officer Flow:**
```
Dashboard (Stats & Goals) → Case Queue (Filter/Search) → 
Select Case → Review Details → Check Documents → 
Decision (Approve/Clarify/Reject) → Submit → Next Case
```

**Decision Options:**
- **Approve** → Certificate generation
- **Request Clarification** → Notification to citizen
- **Reject** → Rejection notice

---

### **PHASE 9: USER DASHBOARD (1 page)**

| # | Page | Route | Purpose | Next Steps |
|---|------|-------|---------|------------|
| 33 | **My Applications** | `/certificate-my-applications` | All applications dashboard | → Track / New Application |

**Dashboard Flow:**
```
Sign In → Dashboard → 
View all applications → 
Filter by status → 
Select application → Track Status / Download
```

**Features:**
- Statistics cards (Total, Pending, Approved, etc.)
- Search by reference number
- Filter by status
- Quick actions (Track, Download)
- New application button

---

### **PHASE 10: PUBLIC SERVICES (1 page)**

| # | Page | Route | Purpose | Next Steps |
|---|------|-------|---------|------------|
| 34 | **Certificate Verification** | `/certificate-verification` | Public authentication check | → Service Home |

**Verification Flow:**
```
Public Access → Verification Page → 
Enter Certificate Number / Scan QR → 
Verify → View Details (if valid) / Error (if invalid)
```

**Use Cases:**
- Third-party employers verify certificates
- Banks/institutions check authenticity
- Public can validate government-issued documents

---

## 🔗 COMPLETE USER JOURNEYS

### **Journey 1: New Citizen - Happy Path (20 pages)**
```
1. Service Landing
2. Eligibility Checker
3. Sign Up
4. OTP Verification
5. Application Start
6. Personal Information Form
7. Address Details Form
8. Additional Information Form
9. Form Review
10. Document Upload
11. Review Summary
12. Declaration
13. Payment Summary
14. Payment Receipt
15. Submission Success
16. Status Tracker (periodic checks)
17. Notifications (updates)
18. Certificate Issued
19. Feedback
20. My Applications Dashboard
```

### **Journey 2: Returning User (4 pages)**
```
1. Sign In
2. My Applications Dashboard
3. Status Tracker (select application)
4. Certificate Issued (if approved) / Download
```

### **Journey 3: Correction Flow (6 pages)**
```
1. Status Tracker (clarification needed)
2. Correction Request
3. Personal/Address/Additional Form (edit as needed)
4. Document Upload (new documents)
5. Re-submit
6. Status Tracker (track updated application)
```

### **Journey 4: Rejection & Appeal (4 pages)**
```
1. Status Tracker (rejected)
2. Application Rejected
3. Appeal Submission
4. Status Tracker (track appeal)
```

### **Journey 5: Officer Workflow (4 pages)**
```
1. Officer Dashboard
2. Officer Case Queue
3. Officer Review (selected case)
4. Back to Queue (next case)
```

### **Journey 6: Password Recovery (3 pages)**
```
1. Sign In → Forgot Password
2. Forgot Password (mobile → OTP → new password)
3. Sign In (with new password)
```

### **Journey 7: Public Verification (2 pages)**
```
1. Certificate Verification (enter number/scan QR)
2. Results (valid/invalid)
```

### **Journey 8: Session Timeout Recovery (2 pages)**
```
1. Session Timeout
2. Sign In (resume session)
```

---

## 📊 NAVIGATION MATRIX

### **Global Navigation (Available on All Pages)**

| Link | Destination | Availability |
|------|-------------|--------------|
| Service Home | `/certificate-service` | All pages (header/footer) |
| Help & Support | `/certificate-help` | All pages (footer) |
| Privacy Policy | `/certificate-privacy-policy` | All pages (footer) |
| Sign Out | Session termination → Sign In | Authenticated pages only |

### **Contextual Navigation**

**From Landing Page:**
- → Sign Up (new users)
- → Sign In (returning users)
- → Eligibility Checker
- → Help & Support
- → Document Guidelines

**From Dashboard:**
- → New Application
- → Track Application (any)
- → User Profile
- → Notifications
- → Download Certificate (if issued)

**From Forms:**
- → Previous Step
- → Next Step
- → Save Draft
- → Cancel (with confirmation)

**From Status Tracker:**
- → Download Certificate (if issued)
- → Correction Request (if clarification needed)
- → Appeal (if rejected)
- → Dashboard

---

## ✅ VALIDATION CHECKLIST

### **Naming Consistency**
✅ All routes follow `certificate-[feature]` pattern  
✅ Component names match route names (PascalCase)  
✅ File names match component names  
✅ Consistent terminology across all pages  

### **Navigation Completeness**
✅ All pages have proper header navigation  
✅ All pages have footer with links  
✅ Form flows have Previous/Next buttons  
✅ Back buttons exist on all deep pages  
✅ Breadcrumbs where applicable  

### **Flow Connectivity**
✅ No dead-end pages (all have exit routes)  
✅ All CTAs lead to valid destinations  
✅ Error states have recovery paths  
✅ Success states have next steps  
✅ Cancel actions handled properly  

### **Component Reuse**
✅ ServiceHeader component (header with icon/title)  
✅ ServiceFooter component (consistent footer)  
✅ FormProgress component (multi-step indicator)  
✅ InfoBanner component (alerts/notices)  
✅ Consistent button styles across all pages  

### **Phase Grouping**
✅ Discovery & Information (5 pages)  
✅ Identity & Access (6 pages)  
✅ Application Submission (8 pages)  
✅ Payment (2 pages)  
✅ Post-Submission (3 pages)  
✅ Issuance & Completion (2 pages)  
✅ Recovery & Corrections (3 pages)  
✅ Officer Workflows (3 pages)  
✅ User Dashboard (1 page)  
✅ Public Services (1 page)  

**Total: 10 Phases | 34 Core Pages**

---

## 🎯 KEY NAVIGATION PATTERNS

### **1. Progressive Disclosure**
Forms reveal information step-by-step with clear progress indicators.

### **2. Multiple Exit Points**
Users can save draft, go to dashboard, or access help at any point.

### **3. Contextual Back Navigation**
Back buttons return to logical previous page, not just browser history.

### **4. Status-Based Routing**
Different application states route to appropriate pages (correction, appeal, download).

### **5. Role-Based Access**
Citizen vs. Officer pages are separated with appropriate authentication.

### **6. Recovery Paths**
Every error state has a clear recovery action (resubmit, appeal, contact support).

---

## 📱 RESPONSIVE NAVIGATION

All navigation patterns work across:
- **Desktop**: Full navigation menus, breadcrumbs
- **Tablet**: Collapsible menus, maintained functionality
- **Mobile**: Hamburger menus, bottom navigation where appropriate

---

## 🔐 AUTHENTICATION REQUIREMENTS

**Public Access (No Auth Required):**
- Service Landing
- Eligibility Checker
- Help & Support
- Document Guidelines
- Privacy Policy
- Certificate Verification
- Sign Up
- Sign In
- Forgot Password

**Authenticated Required:**
- All Application Forms
- Dashboard
- Profile
- Status Tracker
- Notifications
- Document Upload
- Payment
- Certificate Download

**Officer Access Only:**
- Officer Dashboard
- Officer Case Queue
- Officer Review

---

**Document Version:** 1.0  
**Last Updated:** April 10, 2026  
**Total Pages Documented:** 34 unique certificate service pages  
**Total Flows Mapped:** 8 complete user journeys
