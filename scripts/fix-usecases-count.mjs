/**
 * Ensures every component page has exactly 4 useCases.
 * - Pages with 0: adds useCases prop with 4 entries
 * - Pages with 1-3: adds entries to reach 4
 * - Pages with 4: skip
 * - Pages with 5+: skip (already exceeds minimum)
 *
 * Run: node scripts/fix-usecases-count.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

// Use case data for components that need additions
// Each component gets 4 use cases total — we provide extras to fill gaps
const UC = {
  // 0 use cases — need full 4
  ApplicationTracker: [
    { t: 'Certificate Status Tracking', d: 'Track birth/death certificate application progress.', s: 'Citizen checks certificate status after submission.', i: '<ApplicationTracker applicationId="CERT-2026-001" />' },
    { t: 'Grievance Resolution Tracking', d: 'Track grievance resolution through government portal.', s: 'Citizen follows up on filed grievance with tracking ID.', i: '<ApplicationTracker applicationId="GRV-2026-042" showTimeline />' },
    { t: 'Passport Application Status', d: 'Track passport application through processing stages.', s: 'Citizen monitors passport from Applied to Dispatched.', i: '<ApplicationTracker applicationId="PSP-2026-100" stages={passportStages} />' },
    { t: 'Pension Claim Tracking', d: 'Track pension claim approval and disbursement status.', s: 'Retired employee tracks pension claim through HR department.', i: '<ApplicationTracker applicationId="PEN-2026-055" showDates />' },
  ],
  CalendarScheduler: [
    { t: 'Passport Appointment Booking', d: 'Schedule appointment at Passport Seva Kendra.', s: 'Citizen books slot for passport document verification.', i: '<CalendarScheduler availableSlots={slots} onBook={handleBook} />' },
    { t: 'Court Hearing Schedule', d: 'View and manage court hearing dates.', s: 'Advocate checks upcoming hearing dates for cases.', i: '<CalendarScheduler events={hearings} view="month" />' },
    { t: 'Vaccination Slot Booking', d: 'Book vaccination appointment at government health center.', s: 'Citizen books COVID/routine vaccination slot via CoWIN-style interface.', i: '<CalendarScheduler type="appointment" minSlotDuration={15} />' },
    { t: 'RTI Hearing Calendar', d: 'Schedule and track RTI appeal hearing dates.', s: 'Information Commissioner schedules RTI appeal hearings.', i: '<CalendarScheduler events={rtiHearings} view="week" />' },
  ],
  ChartLibrary: [
    { t: 'Application Analytics Dashboard', d: 'Bar chart showing monthly application volumes by department.', s: 'District collector reviews certificate application trends.', i: '<ChartLibrary type="bar" data={monthlyApplications} />' },
    { t: 'Budget Utilization Report', d: 'Pie chart showing department-wise budget allocation and spending.', s: 'Finance officer reviews quarterly budget utilization.', i: '<ChartLibrary type="pie" data={budgetData} />' },
    { t: 'Service Delivery Trends', d: 'Line chart showing service delivery time improvements over quarters.', s: 'Admin tracks average processing time reduction.', i: '<ChartLibrary type="line" data={deliveryTrends} />' },
    { t: 'Citizen Satisfaction Scores', d: 'Donut chart showing satisfaction ratings across services.', s: 'Department head reviews citizen feedback scores.', i: '<ChartLibrary type="donut" data={satisfactionData} />' },
  ],
  Chatbot: [
    { t: 'Citizen Help Assistant', d: 'AI chatbot answering queries about government services and eligibility.', s: 'Citizen asks about birth certificate requirements and fees.', i: '<Chatbot endpoint="/api/chat" placeholder="Ask about services..." />' },
    { t: 'Form Filling Guidance', d: 'Contextual chatbot helping users fill complex application forms.', s: 'Citizen gets step-by-step help filling passport application.', i: '<Chatbot context="passport-form" mode="guided" />' },
    { t: 'Grievance Registration Bot', d: 'Chatbot that helps citizens file and track grievances.', s: 'Citizen reports a public service issue via conversational interface.', i: '<Chatbot flow="grievance" onComplete={submitGrievance} />' },
    { t: 'Multilingual Support Bot', d: 'Chatbot supporting Hindi, English, and regional languages.', s: 'Rural citizen interacts with chatbot in Hindi for ration card query.', i: '<Chatbot languages={["en","hi","ta"]} autoDetect />' },
  ],
  DataGrid: [
    { t: 'Officer Case Management', d: 'Advanced data grid for managing assigned cases with sort and filter.', s: 'Officer reviews 500+ pending applications with priority sorting.', i: '<DataGrid columns={caseColumns} data={cases} sortable filterable />' },
    { t: 'Audit Log Viewer', d: 'Paginated audit trail with search for compliance review.', s: 'Auditor searches system logs for specific transaction records.', i: '<DataGrid columns={auditColumns} data={auditLog} searchable />' },
    { t: 'Beneficiary Database', d: 'Large dataset of scheme beneficiaries with export capability.', s: 'Block officer manages MGNREGA beneficiary records.', i: '<DataGrid columns={beneficiaryColumns} data={beneficiaries} exportable />' },
    { t: 'Revenue Collection Report', d: 'Tabular report of tax and fee collections by category.', s: 'Revenue department reviews monthly collection figures.', i: '<DataGrid columns={revenueColumns} data={collections} summary />' },
  ],
  DigitalSignature: [
    { t: 'Certificate Approval Signing', d: 'Officer digitally signs approved certificates using DSC token.', s: 'Tehsildar signs approved income certificate with Class 3 DSC.', i: '<DigitalSignature type="dsc" onSign={handleApproval} certificate={cert} />' },
    { t: 'Aadhaar eSign Consent', d: 'Citizen signs consent form using Aadhaar-based eSign.', s: 'Citizen provides eSign consent for data sharing in KYC flow.', i: '<DigitalSignature type="aadhaar-esign" onSign={handleConsent} />' },
    { t: 'Contract Execution', d: 'Digital signature on government procurement contracts.', s: 'Procurement officer signs vendor contract on GeM portal.', i: '<DigitalSignature type="dsc" document={contractPdf} multiParty />' },
    { t: 'Affidavit Attestation', d: 'Digital attestation of affidavits and declarations.', s: 'Notary digitally attests citizen affidavit for court submission.', i: '<DigitalSignature type="dsc" attestation onComplete={notarize} />' },
  ],
  DocumentViewer: [
    { t: 'Certificate Preview', d: 'Preview generated certificate before download.', s: 'Citizen previews birth certificate PDF before downloading.', i: '<DocumentViewer src={certificateUrl} type="pdf" />' },
    { t: 'Uploaded Document Review', d: 'Officer reviews citizen-uploaded documents during verification.', s: 'Verification officer reviews Aadhaar card scan for identity check.', i: '<DocumentViewer src={docUrl} zoom controls />' },
    { t: 'Gazette Notification Viewer', d: 'View official gazette notifications and government orders.', s: 'Citizen reads published gazette notification about policy change.', i: '<DocumentViewer src={gazetteUrl} type="pdf" pagination />' },
    { t: 'Land Record Document', d: 'View digitized land ownership records and maps.', s: 'Citizen views 7/12 extract from land records department.', i: '<DocumentViewer src={landRecordUrl} type="image" zoom />' },
  ],
  FeedbackRatingWidget: [
    { t: 'Service Satisfaction Rating', d: 'Star rating after completing a government service.', s: 'Citizen rates certificate issuance experience after receiving document.', i: '<FeedbackRatingWidget type="stars" onSubmit={handleFeedback} />' },
    { t: 'Page Helpfulness', d: 'Thumbs up/down rating on documentation and help pages.', s: 'User rates whether the FAQ page answered their question.', i: '<FeedbackRatingWidget type="thumbs" question="Was this helpful?" />' },
    { t: 'Officer Performance Rating', d: 'Citizen rates interaction with government officer.', s: 'Citizen rates counter staff behavior after in-person visit.', i: '<FeedbackRatingWidget type="stars" maxRating={5} showComment />' },
    { t: 'Portal Usability Feedback', d: 'Emoji-based quick feedback on portal usability.', s: 'User provides quick feedback on new portal redesign.', i: '<FeedbackRatingWidget type="emoji" question="How was your experience?" />' },
  ],
  Footer: [
    { t: 'Government Portal Footer', d: 'Standard footer with ministry links, helpline, and NIC branding.', s: 'All pages show footer with ministry contact and accessibility links.', i: '<Footer links={govLinks} copyright="Government of India" helpline="1800-XXX-XXXX" />' },
    { t: 'Service Portal Footer', d: 'Footer with social media links and app download badges.', s: 'Citizen portal footer shows mobile app links and social handles.', i: '<Footer socialLinks={social} appLinks={appStores} />' },
    { t: 'Multilingual Footer', d: 'Footer with language selector and regional office links.', s: 'State portal footer shows regional language options and district offices.', i: '<Footer languageSelector showRegionalOffices />' },
    { t: 'Compliance Footer', d: 'Footer with privacy policy, terms, and GIGW compliance badge.', s: 'All government sites show GIGW compliance and accessibility statement.', i: '<Footer compliance={["GIGW","WCAG-AA"]} privacyPolicy termsOfUse />' },
  ],
  FormBuilder: [
    { t: 'Dynamic Certificate Application', d: 'JSON-schema-driven form for different certificate types.', s: 'Admin configures birth/death/income certificate forms without coding.', i: '<FormBuilder schema={certFormSchema} onSubmit={handleSubmit} />' },
    { t: 'Citizen Feedback Survey', d: 'Configurable survey form for post-service feedback.', s: 'Department creates satisfaction survey for recently served citizens.', i: '<FormBuilder schema={surveySchema} preview />' },
    { t: 'Scheme Eligibility Form', d: 'Dynamic eligibility checker with conditional fields.', s: 'Citizen fills eligibility form that shows/hides fields based on answers.', i: '<FormBuilder schema={eligibilitySchema} conditional />' },
    { t: 'Event Registration Form', d: 'Multi-step registration form for government events.', s: 'Citizen registers for Republic Day parade viewing with seat selection.', i: '<FormBuilder schema={eventSchema} multiStep />' },
  ],
  Header: [
    { t: 'Government Portal Header', d: 'Standard header with emblem, ministry name, and navigation.', s: 'All pages show header with India emblem and ministry branding.', i: '<Header logo={<Emblem />} title="Ministry of Electronics & IT" navigation={navLinks} />' },
    { t: 'Citizen Service Header', d: 'Header with user profile, notifications, and language selector.', s: 'Logged-in citizen sees profile menu and notification bell.', i: '<Header user={currentUser} notifications={3} languageSelector />' },
    { t: 'Accessible Header', d: 'Header with skip-to-content link and high contrast toggle.', s: 'Screen reader user navigates directly to main content.', i: '<Header skipToContent accessibilityTools showFontSize />' },
    { t: 'Mobile Responsive Header', d: 'Header that collapses to hamburger menu on mobile.', s: 'Mobile user accesses full navigation via slide-out menu.', i: '<Header responsive mobileMenu="drawer" />' },
  ],
  LanguageSelector: [
    { t: 'Portal Language Switch', d: 'Switch between Hindi and English on government portal.', s: 'Citizen switches portal language from English to Hindi.', i: '<LanguageSelector languages={["en","hi"]} current="en" onChange={switchLang} />' },
    { t: 'Regional Language Selection', d: 'Select from 22 scheduled languages for state portals.', s: 'Tamil Nadu portal user switches to Tamil language.', i: '<LanguageSelector languages={["en","hi","ta","te","kn"]} showNativeNames />' },
    { t: 'Form Language Toggle', d: 'Toggle form labels and hints between languages.', s: 'Citizen fills certificate form with labels in their preferred language.', i: '<LanguageSelector compact position="inline" onChange={updateFormLang} />' },
    { t: 'Accessibility Language', d: 'Language selector with screen reader announcements.', s: 'Visually impaired user changes language using keyboard navigation.', i: '<LanguageSelector accessible announceChange ariaLabel="Select language" />' },
  ],
  MapLocationPicker: [
    { t: 'Service Center Locator', d: 'Find nearest government service center on map.', s: 'Citizen locates nearest Common Service Centre for certificate collection.', i: '<MapLocationPicker onSelect={handleLocation} markers={cscLocations} />' },
    { t: 'Address Verification', d: 'Verify residential address by pinning location on map.', s: 'Officer verifies applicant address during field verification.', i: '<MapLocationPicker defaultLocation={address} editable verification />' },
    { t: 'Disaster Relief Mapping', d: 'Mark affected areas and relief camp locations.', s: 'NDMA officer maps flood-affected areas for relief coordination.', i: '<MapLocationPicker mode="polygon" layers={["relief","affected"]} />' },
    { t: 'Property Survey Location', d: 'Mark property boundaries for land survey records.', s: 'Revenue surveyor marks property coordinates for mutation records.', i: '<MapLocationPicker mode="boundary" precision="high" />' },
  ],
  Menu: [
    { t: 'Application Actions Menu', d: 'Context menu for application card actions.', s: 'Citizen sees Track, Download, Print options on application card.', i: '<Menu trigger={<Button variant="ghost">Actions</Button>}><MenuItem>Track</MenuItem><MenuItem>Download</MenuItem><MenuItem>Print</MenuItem></Menu>' },
    { t: 'User Profile Menu', d: 'Profile dropdown in header with account options.', s: 'Logged-in user accesses Profile, Settings, Logout from header.', i: '<Menu trigger={<Avatar />}><MenuItem>Profile</MenuItem><MenuItem>Settings</MenuItem><MenuItem>Logout</MenuItem></Menu>' },
    { t: 'Officer Quick Actions', d: 'Action menu for case management operations.', s: 'Officer selects Approve, Reject, or Request Info on a case.', i: '<Menu trigger={<Button>Review</Button>}><MenuItem>Approve</MenuItem><MenuItem>Reject</MenuItem><MenuItem>Request Info</MenuItem></Menu>' },
    { t: 'Export Options Menu', d: 'Menu for data export format selection.', s: 'Admin exports report as PDF, Excel, or CSV.', i: '<Menu trigger={<Button variant="secondary">Export</Button>}><MenuItem>PDF</MenuItem><MenuItem>Excel</MenuItem><MenuItem>CSV</MenuItem></Menu>' },
  ],
  Stepper: [
    { t: 'Certificate Application Flow', d: 'Step indicator for multi-step certificate application.', s: 'Citizen sees progress: Personal > Address > Documents > Review.', i: '<Stepper steps={formSteps} currentStep={2} />' },
    { t: 'Payment Processing Flow', d: 'Steps through fee payment process.', s: 'Summary > Payment Method > Confirmation > Receipt.', i: '<Stepper steps={paymentSteps} currentStep={1} />' },
    { t: 'Account Recovery Flow', d: 'Multi-step identity verification for account recovery.', s: 'Citizen recovers locked account: Verify > OTP > Reset > Success.', i: '<Stepper steps={recoverySteps} currentStep={3} />' },
    { t: 'Document Verification Flow', d: 'Officer verification workflow with approval stages.', s: 'Officer processes: Receive > Verify > Approve > Issue.', i: '<Stepper steps={verificationSteps} currentStep={2} orientation="vertical" />' },
  ],
  Tabs: [
    { t: 'Component Documentation Tabs', d: 'Tabs for Overview, Props, Examples, Code sections.', s: 'Developer browses component documentation by section.', i: '<Tabs><Tab label="Overview">...</Tab><Tab label="Props">...</Tab></Tabs>' },
    { t: 'Application Form Sections', d: 'Tab navigation between form sections.', s: 'Citizen switches between Personal, Address, Documents tabs.', i: '<Tabs><Tab label="Personal">...</Tab><Tab label="Address">...</Tab></Tabs>' },
    { t: 'Dashboard Views', d: 'Switch between dashboard perspectives.', s: 'Officer toggles between Pending, Approved, Rejected case views.', i: '<Tabs><Tab label="Pending">...</Tab><Tab label="Approved">...</Tab></Tabs>' },
    { t: 'Service Information Tabs', d: 'Organize service details into tabbed sections.', s: 'Citizen views Eligibility, Documents Required, Fees, FAQs tabs.', i: '<Tabs><Tab label="Eligibility">...</Tab><Tab label="Fees">...</Tab></Tabs>' },
  ],
};


// Components with 1-3 use cases — need extras to reach 4
// We provide the ADDITIONAL entries needed
const EXTRAS = {
  // 1 use case — need 3 more
  Breadcrumb: [
    { t: 'Component Documentation', d: 'Breadcrumb on component docs pages.', s: 'Developer browses component library hierarchy.', i: '<Breadcrumb items={[{label:"Home"},{label:"Components"},{label:"Button"}]} />' },
    { t: 'Governance Pages', d: 'Breadcrumb in governance section.', s: 'Admin navigates compliance dashboard hierarchy.', i: '<Breadcrumb items={[{label:"Home"},{label:"Governance"},{label:"Conformance"}]} />' },
    { t: 'Certificate Service Flow', d: 'Breadcrumb trail in multi-step application.', s: 'Citizen sees navigation path during certificate application.', i: '<Breadcrumb items={[{label:"Home",href:"/"},{label:"Services"},{label:"Certificate"}]} />' },
  ],
  DescriptionList: [
    { t: 'Service Fee Details', d: 'Display fee structure for government services.', s: 'Citizen views certificate fee breakdown before payment.', i: '<DescriptionList items={[{term:"Application Fee",detail:"₹50"},{term:"Processing",detail:"₹25"}]} />' },
    { t: 'Officer Case Summary', d: 'Key details of assigned case for officer review.', s: 'Officer reviews case summary before making decision.', i: '<DescriptionList items={caseDetails} layout="horizontal" />' },
    { t: 'Scheme Eligibility Criteria', d: 'Display eligibility requirements for welfare schemes.', s: 'Citizen checks PM-KISAN eligibility criteria.', i: '<DescriptionList items={eligibilityCriteria} />' },
  ],
  EmptyState: [
    { t: 'First-Time User Dashboard', d: 'Welcome state for new portal users.', s: 'New citizen sees onboarding prompt on first login.', i: '<EmptyState title="Welcome!" description="Complete your profile to get started." action="Complete Profile" />' },
    { t: 'Filtered Results Empty', d: 'No results after applying search filters.', s: 'Officer filters cases and gets no matches.', i: '<EmptyState title="No matching cases" description="Try adjusting your filters." />' },
    { t: 'Offline State', d: 'No internet connection state.', s: 'Citizen loses connectivity during form filling.', i: '<EmptyState title="You are offline" description="Check your connection and try again." icon={<WifiOff />} />' },
  ],
  // 2 use cases — need 2 more
  AspectRatio: [
    { t: 'Passport Photo Preview', d: 'Maintain 35x45mm aspect ratio for passport photos.', s: 'Citizen previews uploaded passport photo in correct ratio.', i: '<AspectRatio ratio={35/45}><img src={photoUrl} /></AspectRatio>' },
    { t: 'Government Video Embed', d: 'Responsive 16:9 video container for announcements.', s: 'Ministry website embeds press conference video.', i: '<AspectRatio ratio={16/9}><iframe src={videoUrl} /></AspectRatio>' },
  ],
  Autocomplete: [
    { t: 'Department Search', d: 'Search across government departments and ministries.', s: 'Citizen finds the right department for their query.', i: '<Autocomplete label="Search Department" options={departments} />' },
    { t: 'Scheme Finder', d: 'Search eligible government schemes by keyword.', s: 'Citizen searches for applicable welfare schemes.', i: '<Autocomplete label="Find Scheme" options={schemes} groupBy="ministry" />' },
  ],
  Avatar: [
    { t: 'Citizen Profile Display', d: 'Show citizen photo or initials in portal header.', s: 'Logged-in citizen sees their initials in the header.', i: '<Avatar name="Rajesh Kumar" size="md" />' },
    { t: 'Case Assignment Badge', d: 'Show assigned officer avatar on case cards.', s: 'Case card shows assigned officer identity.', i: '<Avatar name="Officer Mehta" size="sm" status="online" />' },
  ],
  Center: [
    { t: 'Loading State Container', d: 'Center spinner during page data loading.', s: 'Dashboard shows centered spinner while fetching data.', i: '<Center minHeight="300px"><Spinner label="Loading..." /></Center>' },
    { t: 'Success Confirmation', d: 'Center success message after form submission.', s: 'Citizen sees centered success message after application.', i: '<Center><div className="text-center"><CheckCircle /><h2>Application Submitted</h2></div></Center>' },
  ],
  Container: [
    { t: 'Form Page Container', d: 'Max-width container for application forms.', s: 'Certificate form is contained within readable width.', i: '<Container maxWidth="600px"><ApplicationForm /></Container>' },
    { t: 'Content Page Container', d: 'Readable width container for policy documents.', s: 'Citizen reads RTI guidelines within comfortable line length.', i: '<Container maxWidth="800px"><PolicyContent /></Container>' },
  ],
  DatePicker: [
    { t: 'Appointment Date Selection', d: 'Select appointment date from available slots.', s: 'Citizen picks passport appointment date from calendar.', i: '<DatePicker label="Appointment Date" minDate={today} availableDates={slots} />' },
    { t: 'Document Issue Date', d: 'Officer selects certificate issue date.', s: 'Officer sets issue date while approving certificate.', i: '<DatePicker label="Issue Date" defaultValue={today} />' },
  ],
  Divider: [
    { t: 'Form Section Separator', d: 'Visual break between form sections.', s: 'Application form separates Personal and Address sections.', i: '<Divider />' },
    { t: 'Footer Separator', d: 'Divider above page footer.', s: 'Government portal separates content from footer links.', i: '<Divider variant="subtle" />' },
  ],
  FileUpload: [
    { t: 'Bulk Document Upload', d: 'Multiple file upload for supporting documents.', s: 'Officer uploads batch verification documents.', i: '<FileUpload multiple maxFiles={5} accept=".pdf,.jpg" />' },
    { t: 'Photo Upload with Preview', d: 'Single photo upload with crop and preview.', s: 'Citizen uploads passport-size photo for application.', i: '<FileUpload accept=".jpg,.png" maxSize={2} preview crop />' },
  ],
  Flex: [
    { t: 'Form Action Buttons', d: 'Horizontal button layout for form actions.', s: 'Application form shows Cancel and Submit buttons aligned right.', i: '<Flex gap={4} justify="end"><Button variant="secondary">Cancel</Button><Button>Submit</Button></Flex>' },
    { t: 'Status Bar Layout', d: 'Horizontal layout for status indicators.', s: 'Dashboard header shows key metrics in a row.', i: '<Flex gap={6} align="center"><Statistic label="Pending" value={42} /><Statistic label="Approved" value={156} /></Flex>' },
  ],
  Grid: [
    { t: 'Dashboard Widget Grid', d: 'Multi-column grid for dashboard widgets.', s: 'Officer dashboard shows metrics, charts, and tasks in grid.', i: '<Grid columns={{ sm: 1, md: 2, lg: 3 }} gap={4}>{widgets}</Grid>' },
    { t: 'Document Gallery Grid', d: 'Grid layout for uploaded document thumbnails.', s: 'Verification page shows all uploaded documents in grid.', i: '<Grid columns={4} gap={2}>{documents.map(d => <DocCard key={d.id} />)}</Grid>' },
  ],
  List: [
    { t: 'Notification List', d: 'List of recent notifications with status.', s: 'Citizen views unread notifications in notification center.', i: '<List>{notifications.map(n => <ListItem key={n.id} icon={n.icon}>{n.title}</ListItem>)}</List>' },
    { t: 'Required Documents Checklist', d: 'Checklist of documents needed for application.', s: 'Citizen reviews required documents before starting application.', i: '<List variant="checklist">{requiredDocs.map(d => <ListItem key={d.id} checked={d.uploaded}>{d.name}</ListItem>)}</List>' },
  ],
  OTPInput: [
    { t: 'Aadhaar OTP Verification', d: 'OTP sent to Aadhaar-linked mobile for eKYC.', s: 'Citizen enters 6-digit OTP received on Aadhaar-linked number.', i: '<OTPInput length={6} autoFocus onComplete={verifyAadhaar} />' },
    { t: 'Transaction OTP', d: 'OTP for payment authorization.', s: 'Citizen enters bank OTP to authorize fee payment.', i: '<OTPInput length={6} onComplete={authorizePayment} resendTimer={30} />' },
  ],
  Section: [
    { t: 'Application Form Section', d: 'Semantic section grouping related form fields.', s: 'Certificate form groups Personal Details fields together.', i: '<Section title="Personal Details" id="personal">...</Section>' },
    { t: 'Policy Document Section', d: 'Anchor-linkable section in long policy documents.', s: 'RTI guidelines page has linkable sections for each clause.', i: '<Section title="Section 4: Information Disclosure" id="section-4">...</Section>' },
  ],
  ShowHide: [
    { t: 'Advanced Search Filters', d: 'Toggle visibility of advanced search options.', s: 'Citizen expands advanced filters on service search page.', i: '<ShowHide label="Advanced Filters"><FilterForm /></ShowHide>' },
    { t: 'Sensitive Data Masking', d: 'Hide/show Aadhaar number on profile page.', s: 'Citizen toggles Aadhaar visibility on their profile.', i: '<ShowHide masked>{aadhaarNumber}</ShowHide>' },
  ],
  Spacer: [
    { t: 'Form Section Spacing', d: 'Consistent vertical space between form sections.', s: 'Application form has uniform spacing between field groups.', i: '<Spacer size="lg" />' },
    { t: 'Card Grid Spacing', d: 'Vertical space between card rows on dashboard.', s: 'Service cards have consistent spacing on home page.', i: '<Spacer size="md" />' },
  ],
  Stack: [
    { t: 'Form Field Stack', d: 'Vertical stack of form fields with consistent spacing.', s: 'Certificate application stacks input fields vertically.', i: '<Stack gap={4}><Input label="Name" /><Input label="Email" /><Button>Submit</Button></Stack>' },
    { t: 'Card Content Stack', d: 'Stack content elements inside a service card.', s: 'Service card stacks title, description, and status badge.', i: '<Stack gap={2}><h3>Birth Certificate</h3><p>Apply online</p><Badge>Available</Badge></Stack>' },
  ],
  Switch: [
    { t: 'Notification Preferences', d: 'Toggle SMS/email notification settings.', s: 'Citizen enables SMS notifications for application updates.', i: '<Switch label="SMS notifications" onChange={updatePreference} />' },
    { t: 'Accessibility Settings', d: 'Toggle high contrast and large text modes.', s: 'Visually impaired user enables high contrast mode.', i: '<Switch label="High contrast mode" checked={highContrast} onChange={toggleContrast} />' },
  ],
  Timeline: [
    { t: 'Application Status History', d: 'Chronological timeline of application status changes.', s: 'Citizen views full history: Submitted > Verified > Approved > Issued.', i: '<Timeline items={statusHistory} />' },
    { t: 'Audit Trail', d: 'Officer action log showing who did what and when.', s: 'Supervisor reviews audit trail of case processing actions.', i: '<Timeline items={auditTrail} variant="compact" />' },
  ],
  Tooltip: [
    { t: 'Form Field Help', d: 'Tooltip explaining what a form field requires.', s: 'Citizen hovers info icon next to Aadhaar field for format help.', i: '<Tooltip content="Enter 12-digit Aadhaar number"><InfoIcon /></Tooltip>' },
    { t: 'Action Button Label', d: 'Tooltip on icon-only action buttons in toolbars.', s: 'Officer hovers over icon buttons to see action labels.', i: '<Tooltip content="Approve application"><Button variant="ghost"><Check /></Button></Tooltip>' },
  ],
  // 3 use cases — need 1 more
  Accordion: [{ t: 'Scheme Eligibility FAQ', d: 'Expandable FAQ for welfare scheme eligibility questions.', s: 'Citizen checks PM-KISAN eligibility criteria in FAQ format.', i: '<Accordion><AccordionItem title="Who is eligible?">Small and marginal farmers...</AccordionItem></Accordion>' }],
  Alert: [{ t: 'Scheduled Maintenance Notice', d: 'Info alert for planned system downtime.', s: 'Portal shows advance notice of weekend maintenance window.', i: '<Alert variant="info" dismissible>Portal maintenance scheduled Saturday 2-6 AM IST.</Alert>' }],
  Badge: [{ t: 'Priority Indicator', d: 'Badge showing case priority level on officer dashboard.', s: 'High-priority cases show red badge for immediate attention.', i: '<Badge variant="error">High Priority</Badge>' }],
  Card: [{ t: 'Officer Dashboard Widget', d: 'Card displaying key metric with trend indicator.', s: 'Officer dashboard shows pending cases count with weekly trend.', i: '<Card><Statistic label="Pending Cases" value={42} trend="+5" /></Card>' }],
  Checkbox: [{ t: 'Scheme Selection', d: 'Multiple checkboxes for selecting applicable welfare schemes.', s: 'Citizen selects all applicable schemes during registration.', i: '<Checkbox label="PM-KISAN" /><Checkbox label="MGNREGA" /><Checkbox label="Ayushman Bharat" />' }],
  Modal: [{ t: 'Document Preview Modal', d: 'Large modal for previewing uploaded documents.', s: 'Officer opens full-screen preview of uploaded Aadhaar scan.', i: '<Modal size="lg" title="Document Preview"><DocumentViewer src={docUrl} /></Modal>' }],
  Pagination: [{ t: 'Gazette Search Results', d: 'Paginate through gazette notification search results.', s: 'Citizen browses 200+ gazette notifications with page navigation.', i: '<Pagination total={200} pageSize={20} current={3} onChange={setPage} />' }],
  Progress: [{ t: 'Form Completion Tracker', d: 'Show overall application form completion percentage.', s: 'Dashboard shows citizen has completed 60% of application.', i: '<Progress value={60} label="Application 60% complete" showPercentage />' }],
  Select: [{ t: 'District Selection', d: 'Select district after choosing state.', s: 'Address form shows districts filtered by selected state.', i: '<Select label="District" options={filteredDistricts} required />' }],
  Spinner: [{ t: 'Payment Processing', d: 'Spinner during payment gateway processing.', s: 'Citizen sees spinner while UPI payment is being verified.', i: '<Spinner size="lg" label="Verifying payment..." />' }],
  Table: [{ t: 'Scheme Beneficiary List', d: 'Table listing scheme beneficiaries with status.', s: 'Block officer reviews MGNREGA beneficiary list with payment status.', i: '<Table columns={beneficiaryColumns} data={beneficiaries} sortable />' }],
  Textarea: [{ t: 'RTI Application Details', d: 'Text area for detailed RTI information request.', s: 'Citizen describes specific information sought under RTI Act.', i: '<Textarea label="Information Sought" required rows={6} maxLength={2000} />' }],
  Toast: [{ t: 'Application Auto-Save', d: 'Success toast confirming form auto-save.', s: 'Form auto-saves every 30 seconds with confirmation toast.', i: '<Toast variant="success">Draft saved at 3:45 PM</Toast>' }],
  VideoPlayer: [{ t: 'Scheme Awareness Video', d: 'Video explaining welfare scheme benefits and enrollment.', s: 'PM-KISAN page shows explainer video about scheme benefits.', i: '<VideoPlayer src="/videos/pm-kisan-explainer.mp4" captions poster />' }],
};

// ── Injection logic ──
function formatUseCase(uc) {
  return `        { title: '${uc.t}', description: '${uc.d}', scenario: '${uc.s}', implementation: '${uc.i.replace(/'/g, "\\'")}' },`;
}

function buildFullUseCases(entries) {
  return `      useCases={[\n${entries.map(formatUseCase).join('\n')}\n      ]}`;
}

let updated = 0;
const pages = readdirSync(`${ROOT}/src/app/pages`).filter(f => f.startsWith('Component') && f.endsWith('Page.tsx')).sort();

for (const file of pages) {
  const name = file.replace('Component', '').replace('Page.tsx', '');
  const filePath = `${ROOT}/src/app/pages/${file}`;
  let content = readFileSync(filePath, 'utf8');

  // Check if this component needs full useCases (0 entries)
  if (UC[name]) {
    if (content.includes('useCases={[') || content.includes('useCases={\n')) {
      console.log(`SKIP: ${name} — already has useCases prop`);
      continue;
    }
    // Add before additionalContent or before closing />
    const acIdx = content.indexOf('      additionalContent={');
    const closeIdx = content.lastIndexOf('\n    />\n  );\n}');
    const insertIdx = acIdx > 0 ? acIdx : closeIdx;
    if (insertIdx > 0) {
      const block = buildFullUseCases(UC[name]);
      content = content.slice(0, insertIdx) + '\n' + block + '\n\n' + content.slice(insertIdx);
      writeFileSync(filePath, content);
      console.log(`ADDED 4: ${name}`);
      updated++;
    } else {
      console.log(`SKIP: ${name} — no insertion point`);
    }
    continue;
  }

  // Check if this component needs extra entries
  if (EXTRAS[name]) {
    // Find the closing of existing useCases: ]}
    const ucStart = content.indexOf('useCases={[');
    if (ucStart === -1) {
      console.log(`SKIP: ${name} — no useCases found to extend`);
      continue;
    }
    // Find the ]} that closes useCases
    let depth = 0;
    let ucEnd = -1;
    for (let i = ucStart; i < content.length; i++) {
      if (content[i] === '[') depth++;
      if (content[i] === ']') { depth--; if (depth === 0) { ucEnd = i; break; } }
    }
    if (ucEnd === -1) {
      console.log(`SKIP: ${name} — can't find useCases closing`);
      continue;
    }
    // Insert extra entries before the closing ]
    const extras = EXTRAS[name].map(formatUseCase).join('\n');
    content = content.slice(0, ucEnd) + '\n' + extras + '\n      ' + content.slice(ucEnd);
    writeFileSync(filePath, content);
    console.log(`EXTENDED +${EXTRAS[name].length}: ${name}`);
    updated++;
  }
}

console.log(`\nDone: ${updated} components updated`);
