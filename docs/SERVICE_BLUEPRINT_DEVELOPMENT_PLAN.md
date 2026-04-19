# UX4G Service Blueprint Development Plan

## Overview

This plan covers the development of 60+ government service blueprints for the UX4G Design System. Each blueprint is a complete, reference-quality UI flow that departments can adopt and customize. Services are organized into 6 phases by impact and dependency.

**Existing foundation:** Certificate Service (35 pages), Reference Service (18 pages), 65+ service patterns, 87 components.

**Each service blueprint includes:**
- Landing/start page with eligibility info
- Multi-step form flow (personal details, documents, declarations)
- Document upload with guidelines
- Payment summary and receipt
- Status tracker with timeline
- Officer/admin review dashboard
- Notifications and feedback
- Help and support pages

---

## Phase 1: Business & Company Services (10 services)
**Priority:** Highest — touches every business in India
**Timeline:** Weeks 1–4

| # | Service | Key Pages | Complexity |
|---|---------|-----------|------------|
| 1 | Company Registration (MCA/ROC) | Entity type selector, DIN verification, name reservation, MoA/AoA upload, CIN generation, incorporation certificate | High |
| 2 | GST Registration & Filing | GSTIN application, business details, bank verification, return filing dashboard, challan generation | High |
| 3 | Trade License Application & Renewal | Business category selector, location details, inspection scheduling, license card, renewal flow | Medium |
| 4 | MSME/Udyam Registration | Enterprise classification, investment/turnover calculator, Udyam number generation, certificate download | Medium |
| 5 | FSSAI Food License | License type selector (basic/state/central), food category, premises details, lab report upload | Medium |
| 6 | Import/Export Code (IEC) | Business entity details, bank certificate upload, DGFT verification, IEC card generation | Medium |
| 7 | Startup India Recognition (DPIIT) | Innovation description, incorporation proof, self-certification, recognition certificate | Medium |
| 8 | Shop & Establishment Registration | Shop details, employee count, working hours, municipal zone, registration certificate | Low |
| 9 | Drug License (CDSCO) | Drug category, qualified person details, premises inspection, license categories (wholesale/retail/manufacturing) | Medium |
| 10 | Factory License & Compliance | Factory plan upload, safety compliance checklist, inspector assignment, compliance dashboard | Medium |

**Shared patterns to build first:**
- Multi-entity registration (directors + company + office)
- License type selector with prerequisite checker
- Compliance dashboard template
- Inspector/officer assignment flow

---

## Phase 2: Land, Property & Construction (7 services)
**Priority:** High — major revenue and citizen touchpoint
**Timeline:** Weeks 5–7

| # | Service | Key Pages | Complexity |
|---|---------|-----------|------------|
| 11 | Property Registration & Stamp Duty | Property details, buyer/seller info, stamp duty calculator, e-registration, registered deed download | High |
| 12 | Building Plan Approval | Plot details, architect upload, floor plan viewer, multi-department NOC tracker, approval letter | High |
| 13 | Occupancy Certificate | Building completion report, fire NOC, structural stability certificate, OC issuance | Medium |
| 14 | Land Use Change / Conversion | Current land use, proposed use, revenue records, hearing schedule, conversion order | Medium |
| 15 | Encumbrance Certificate | Property ID lookup, date range selector, EC generation, digital verification | Low |
| 16 | Property Tax Assessment & Payment | Property search, tax calculation, payment gateway, receipt, arrears dashboard | Medium |
| 17 | RERA Project Registration | Project details, promoter info, financial disclosures, quarterly update dashboard | Medium |

**Shared patterns to build first:**
- Property/land search with survey number lookup
- Stamp duty / fee calculator
- Multi-department NOC tracker
- Map-based property selector (extends existing MapInputPattern)

---

## Phase 3: Citizen Identity & Civil Services (8 services)
**Priority:** High — highest volume citizen services
**Timeline:** Weeks 8–10

| # | Service | Key Pages | Complexity |
|---|---------|-----------|------------|
| 18 | Birth Certificate Registration | Hospital/home birth details, parent info, witness details, certificate generation | Medium |
| 19 | Death Certificate Registration | Deceased details, cause of death, informant info, cremation/burial certificate | Medium |
| 20 | Marriage Registration | Bride/groom details, witness info, marriage date/venue, photo upload, certificate | Medium |
| 21 | Domicile Certificate | Residence proof, duration of stay, tehsildar verification, certificate | Low |
| 22 | Income Certificate | Income declaration, employer details, revenue officer verification | Low |
| 23 | Caste Certificate | Community details, parent certificate reference, SDM verification | Low |
| 24 | Ration Card Application & Transfer | Family details, member list, Aadhaar seeding, FPS assignment, card type (APL/BPL/AAY) | Medium |
| 25 | Voter ID Registration & Correction | Electoral details, photo upload, address proof, polling station assignment | Medium |

**Shared patterns to build first:**
- Family member list with add/remove/edit
- Witness details capture (reusable across birth/marriage/death)
- Revenue officer verification flow
- Certificate template with QR verification

---

## Phase 4: Transport, Health & Education (12 services)
**Priority:** Medium-High
**Timeline:** Weeks 11–14

### Transport (5 services)
| # | Service | Key Pages | Complexity |
|---|---------|-----------|------------|
| 26 | Driving License Application & Renewal | Learner's test booking, slot selection, test result, DL card, renewal flow | High |
| 27 | Vehicle Registration (RC) | Vehicle details, dealer info, insurance upload, temporary/permanent RC, transfer | High |
| 28 | Fitness Certificate | Vehicle inspection booking, test results, certificate validity tracker | Medium |
| 29 | PUC Certificate | Testing center locator, emission test results, certificate with expiry | Low |
| 30 | Road/National Permit | Route selection, vehicle fitness check, permit card, validity tracker | Medium |

### Health (4 services)
| # | Service | Key Pages | Complexity |
|---|---------|-----------|------------|
| 31 | Hospital/Clinic Registration | Facility details, doctor list, equipment inventory, inspection, registration certificate | Medium |
| 32 | Disability Certificate (UDID) | Disability type/percentage, medical board assessment, UDID card generation | Medium |
| 33 | Pension Application | Pension type selector, beneficiary details, bank verification, disbursement tracker | Medium |
| 34 | Health Insurance Enrollment (Ayushman Bharat) | Eligibility check (SECC data), family details, e-card generation, hospital network | Medium |

### Education (3 services)
| # | Service | Key Pages | Complexity |
|---|---------|-----------|------------|
| 35 | Scholarship Application & Disbursement | Eligibility criteria, academic records, income proof, bank details, disbursement tracker | Medium |
| 36 | Degree/Diploma Verification | Institution search, certificate upload, verification status, verified badge | Low |
| 37 | School Affiliation Application | School infrastructure details, teacher qualifications, inspection scheduling, affiliation certificate | Medium |

---

## Phase 5: Environment, Revenue & Agriculture (12 services)
**Priority:** Medium
**Timeline:** Weeks 15–18

### Environment (5 services)
| # | Service | Key Pages | Complexity |
|---|---------|-----------|------------|
| 38 | Environmental Clearance (EIA) | Project category (A/B), EIA report upload, public hearing, expert committee review | High |
| 39 | Pollution Board Consent (CTE/CTO) | Industry category, emission data, consent type, compliance monitoring dashboard | Medium |
| 40 | Forest Clearance | Forest land details, compensatory afforestation plan, tribal rights check | Medium |
| 41 | Hazardous Waste Authorization | Waste category, storage/disposal plan, TSDF details, authorization certificate | Medium |
| 42 | Water/Air Pollution NOC | Pollution source details, monitoring data upload, NOC with conditions | Medium |

### Revenue & Tax (5 services)
| # | Service | Key Pages | Complexity |
|---|---------|-----------|------------|
| 43 | Income Tax Return Filing | Income sources, deductions, tax computation, e-verify, refund tracker | High |
| 44 | Property Tax Payment | Property search, tax calculation, online payment, receipt, arrears | Medium |
| 45 | Utility Bill Payment | Service selector (water/electricity/gas), account lookup, payment, receipt history | Medium |
| 46 | Challan Generation & Payment | Challan type, amount calculation, payment gateway, receipt with QR | Low |
| 47 | TDS Certificate Download | PAN verification, financial year selector, Form 16/16A download | Low |

### Agriculture (3 services)
| # | Service | Key Pages | Complexity |
|---|---------|-----------|------------|
| 48 | Farmer Registration (PM-KISAN) | Aadhaar verification, land records, bank details, installment tracker | Medium |
| 49 | Crop Insurance Claim | Crop details, damage assessment, photo evidence upload, claim tracker | Medium |
| 50 | Land Record / Mutation | Khata/khasra lookup, mutation application, revenue court hearing, updated record | Medium |

---

## Phase 6: Cross-Department & Advanced Patterns (10+ services)
**Priority:** Medium — enables complex multi-agency workflows
**Timeline:** Weeks 19–22

| # | Service/Pattern | Description | Complexity |
|---|----------------|-------------|------------|
| 51 | Single Window Clearance | One application → multiple departments review in parallel → consolidated approval | High |
| 52 | NOC (No Objection Certificate) | Multi-agency clearance with dependency tracking (fire → building → occupancy) | High |
| 53 | Compliance Dashboard | All active licenses, upcoming renewals, pending inspections, compliance score | High |
| 54 | Inspection & Site Visit | Schedule, assign inspector, conduct checklist, upload photos/report, issue findings | Medium |
| 55 | Bulk/Batch Application | File multiple applications simultaneously with shared common data | Medium |
| 56 | Digital Signature Integration | DSC-based document signing flow for legal documents | Medium |
| 57 | Inter-Department File Transfer | File movement tracking across offices with SLA monitoring | Medium |
| 58 | Public Grievance (CPGRAMS) | Grievance filing, department routing, escalation, resolution tracking | Medium |
| 59 | RTI Application & Response | RTI filing, fee payment, PIO response, first/second appeal | Medium |
| 60 | e-Court Case Filing | Case details, vakalatnama upload, hearing schedule, order download | High |
| 61 | Auction/Tender Portal | Tender listing, bid submission, EMD payment, result declaration | Medium |
| 62 | Subsidy Application & Tracking | Scheme eligibility, application, verification, disbursement tracker | Medium |

---

## Development Approach

### Per-Service Template
Each service follows a consistent structure:

```
src/app/pages/{ServiceName}/
├── {ServiceName}Start.tsx           # Landing page with eligibility
├── {ServiceName}SignIn.tsx           # Authentication (reuse existing)
├── {ServiceName}Eligibility.tsx      # Eligibility checker
├── {ServiceName}Form*.tsx            # Multi-step form pages
├── {ServiceName}DocumentUpload.tsx   # Document upload with guidelines
├── {ServiceName}Declaration.tsx      # Consent and declaration
├── {ServiceName}ReviewSummary.tsx    # Review before submission
├── {ServiceName}PaymentSummary.tsx   # Fee calculation and payment
├── {ServiceName}PaymentReceipt.tsx   # Payment confirmation
├── {ServiceName}Submission.tsx       # Submission success
├── {ServiceName}StatusTracker.tsx    # Application status timeline
├── {ServiceName}MyApplications.tsx   # All applications dashboard
├── {ServiceName}OfficerDashboard.tsx # Admin review interface
├── {ServiceName}OfficerReview.tsx    # Individual case review
├── {ServiceName}Certificate.tsx      # Issued certificate/license
├── {ServiceName}Help.tsx             # Help and FAQ
└── {ServiceName}Feedback.tsx         # Post-completion feedback
```

### Reusable Shared Components (build once, use everywhere)
- `ServiceStart` — generic landing page template
- `EligibilityChecker` — prerequisite validation
- `MultiStepForm` — step progress with validation
- `DocumentUploadGuidelines` — document type, size, format guidance
- `FeeCalculator` — dynamic fee computation
- `StatusTimeline` — application lifecycle visualization
- `OfficerCaseList` — filterable case queue for officers
- `CertificateViewer` — issued document with QR verification
- `ComplianceDashboard` — multi-license compliance overview
- `InspectionScheduler` — date/time slot booking for inspections
- `NOCTracker` — multi-department clearance progress

### Routing Convention
```
/services/{service-name}/start
/services/{service-name}/eligibility
/services/{service-name}/form/personal
/services/{service-name}/form/documents
/services/{service-name}/review
/services/{service-name}/payment
/services/{service-name}/status
/services/{service-name}/my-applications
/services/{service-name}/officer/dashboard
/services/{service-name}/officer/review/:id
```

---

## Execution Strategy

1. **Build shared service components first** (Week 0) — ServiceStart, MultiStepForm, StatusTimeline, OfficerCaseList, CertificateViewer
2. **Phase 1 first** — Business services have the broadest adoption potential
3. **Each service takes 2–4 hours** — leveraging existing patterns and shared components
4. **Test each service** — route registration, build verification, responsive check
5. **Commit per service** — one service per commit for clean git history
6. **Update ServicesHub** — add each new service to the hub page as it's built

## Summary

| Phase | Services | Timeline | Focus |
|-------|----------|----------|-------|
| 1 | 10 | Weeks 1–4 | Business & Company |
| 2 | 7 | Weeks 5–7 | Land & Property |
| 3 | 8 | Weeks 8–10 | Citizen Identity |
| 4 | 12 | Weeks 11–14 | Transport, Health, Education |
| 5 | 12 | Weeks 15–18 | Environment, Revenue, Agriculture |
| 6 | 12 | Weeks 19–22 | Cross-Department & Advanced |
| **Total** | **61** | **22 weeks** | **All major government domains** |
