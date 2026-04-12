import { createBrowserRouter, Navigate } from "react-router";

// ============================================================================
// UX4G PLATFORM - CLEAN IA STRUCTURE V3.0
// ============================================================================
// 8-tier Information Architecture:
// 1. Foundations | 2. Components | 3. Patterns | 4. Service Archetypes
// 5. Systems | 6. Services | 7. Resources | 8. Governance
// ============================================================================

// ========================================
// CORE PAGES
// ========================================
import UnifiedHome from "./pages/UnifiedHome";
import NotFound from "./pages/NotFound";

// ========================================
// 1. FOUNDATIONS
// ========================================
import Foundations from "./pages/Foundations";
import Accessibility from "./pages/Accessibility";
import ContentDesignSystem from "./pages/ContentDesignSystem";

// ========================================
// 2. COMPONENTS
// ========================================
import Components from "./pages/Components";
import FrameworkStatus from "./pages/FrameworkStatus";
import WebComponentsDemo from "./pages/WebComponentsDemo";
import ComponentButtonPage from "./pages/ComponentButtonPage";
import ComponentInputPage from "./pages/ComponentInputPage";
import ComponentCheckboxPage from "./pages/ComponentCheckboxPage";
import ComponentSelectPage from "./pages/ComponentSelectPage";
import ComponentTextareaPage from "./pages/ComponentTextareaPage";
import ComponentSwitchPage from "./pages/ComponentSwitchPage";
import ComponentRadioPage from "./pages/ComponentRadioPage";
import ComponentBreadcrumbPage from "./pages/ComponentBreadcrumbPage";
import ComponentAlertPage from "./pages/ComponentAlertPage";
import ComponentBadgePage from "./pages/ComponentBadgePage";
import ComponentModalPage from "./pages/ComponentModalPage";
import ComponentCardPage from "./pages/ComponentCardPage";
import ComponentTablePage from "./pages/ComponentTablePage";
import ComponentAccordionPage from "./pages/ComponentAccordionPage";
import ComponentListPage from "./pages/ComponentListPage";
import ComponentContainerPage from "./pages/ComponentContainerPage";
import ComponentGridPage from "./pages/ComponentGridPage";
import ComponentStackPage from "./pages/ComponentStackPage";
import ComponentDividerPage from "./pages/ComponentDividerPage";
import ComponentSpacerPage from "./pages/ComponentSpacerPage";
import ComponentDatePickerPage from "./pages/ComponentDatePickerPage";
import ComponentFileUploadPage from "./pages/ComponentFileUploadPage";
import ComponentStepperPage from "./pages/ComponentStepperPage";
import ComponentOTPInputPage from "./pages/ComponentOTPInputPage";
import ComponentApplicationTrackerPage from "./pages/ComponentApplicationTrackerPage";
import ComponentDataGridPage from "./pages/ComponentDataGridPage";
import ComponentAadhaarInputPage from "./pages/ComponentAadhaarInputPage";
import ComponentHeaderPage from "./pages/ComponentHeaderPage";
import ComponentFooterPage from "./pages/ComponentFooterPage";
import ComponentTabsPage from "./pages/ComponentTabsPage";
import ComponentPaginationPage from "./pages/ComponentPaginationPage";
import ComponentMenuPage from "./pages/ComponentMenuPage";
import ComponentToastPage from "./pages/ComponentToastPage";
import ComponentProgressPage from "./pages/ComponentProgressPage";
import ComponentSpinnerPage from "./pages/ComponentSpinnerPage";
import ComponentTooltipPage from "./pages/ComponentTooltipPage";
import ComponentAvatarPage from "./pages/ComponentAvatarPage";
import ComponentDocumentViewerPage from "./pages/ComponentDocumentViewerPage";
import ComponentDigitalSignaturePage from "./pages/ComponentDigitalSignaturePage";
import ComponentMapLocationPickerPage from "./pages/ComponentMapLocationPickerPage";
import ComponentQRCodePage from "./pages/ComponentQRCodePage";
import ComponentLanguageSelectorPage from "./pages/ComponentLanguageSelectorPage";
import ComponentPaymentGatewayPage from "./pages/ComponentPaymentGatewayPage";
import ComponentChatbotPage from "./pages/ComponentChatbotPage";
import ComponentRichTextEditorPage from "./pages/ComponentRichTextEditorPage";
import ComponentChartLibraryPage from "./pages/ComponentChartLibraryPage";
import ComponentCalendarSchedulerPage from "./pages/ComponentCalendarSchedulerPage";
import ComponentAddressAutocompleteIndiaPage from "./pages/ComponentAddressAutocompleteIndiaPage";
import ComponentPANCardInputPage from "./pages/ComponentPANCardInputPage";
import ComponentFeedbackRatingWidgetPage from "./pages/ComponentFeedbackRatingWidgetPage";
import ComponentCaptchaPage from "./pages/ComponentCaptchaPage";
import ComponentVideoPlayerPage from "./pages/ComponentVideoPlayerPage";
import ComponentFormBuilderPage from "./pages/ComponentFormBuilderPage";
import ComponentFlexPage from "./pages/ComponentFlexPage";
import ComponentCenterPage from "./pages/ComponentCenterPage";
import ComponentAspectRatioPage from "./pages/ComponentAspectRatioPage";
import ComponentShowHidePage from "./pages/ComponentShowHidePage";
import ComponentSectionPage from "./pages/ComponentSectionPage";
import ComponentTagPage from "./pages/ComponentTagPage";
import ComponentTimelinePage from "./pages/ComponentTimelinePage";
import ComponentStatisticPage from "./pages/ComponentStatisticPage";
import ComponentDescriptionListPage from "./pages/ComponentDescriptionListPage";
import ComponentEmptyStatePage from "./pages/ComponentEmptyStatePage";
import ComponentDrawerPage from "./pages/ComponentDrawerPage";
import ComponentSkeletonPage from "./pages/ComponentSkeletonPage";
import ComponentAutocompletePage from "./pages/ComponentAutocompletePage";
import ComponentDialogPage from "./pages/ComponentDialogPage";
import ComponentPopoverPage from "./pages/ComponentPopoverPage";
import ComponentDropdownPage from "./pages/ComponentDropdownPage";
import ComponentCodeBlockPage from "./pages/ComponentCodeBlockPage";
import ComponentSegmentedControlPage from "./pages/ComponentSegmentedControlPage";
import ComponentTreeViewPage from "./pages/ComponentTreeViewPage";
import ComponentBackToTopPage from "./pages/ComponentBackToTopPage";
import ComponentFieldPage from "./pages/ComponentFieldPage";
import ComponentLabelPage from "./pages/ComponentLabelPage";
import ComponentHintTextPage from "./pages/ComponentHintTextPage";
import ComponentErrorTextPage from "./pages/ComponentErrorTextPage";

// ========================================
// 3. PATTERNS
// ========================================
import PatternLibraryHub from "./pages/PatternLibraryHub";
import Patterns from "./pages/Patterns";

// Identity & Access Patterns
import IdentityAccessPatterns from "./pages/IdentityAccessPatterns";
import SignInPattern from "./pages/SignInPattern";
import SignUpPattern from "./pages/SignUpPattern";
import OTPVerificationPattern from "./pages/OTPVerificationPattern";
import MobileOTPPattern from "./pages/MobileOTPPattern";
import ForgotPasswordPattern from "./pages/ForgotPasswordPattern";
import AccountRecoveryPattern from "./pages/AccountRecoveryPattern";
import AadhaarAuthenticationPattern from "./pages/AadhaarAuthenticationPattern";
import SessionTimeoutPattern from "./pages/SessionTimeoutPattern";
import AuthErrorLockoutPattern from "./pages/AuthErrorLockoutPattern";
import OfflineVideoKYCPattern from "./pages/OfflineVideoKYCPattern";
import OnlineVideoKYCPattern from "./pages/OnlineVideoKYCPattern";
import AadhaarVideoKYCPattern from "./pages/AadhaarVideoKYCPattern";

// Consent & Declaration Patterns
import ConsentDeclarationPatterns from "./pages/ConsentDeclarationPatterns";
import ConsentCapturePattern from "./pages/ConsentCapturePattern";
import ConsentCapturePatternCode from "./pages/patterns/ConsentCapturePatternCode";
import ConsentCaptureDemo from "./pages/ConsentCaptureDemo";
import GuardianProxyConsentDemo from "./pages/GuardianProxyConsentDemo";
import ConsentWithdrawalDemo from "./pages/ConsentWithdrawalDemo";
import DataSharingConsentDemo from "./pages/DataSharingConsentDemo";
import PrivacyNoticeDemo from "./pages/PrivacyNoticeDemo";
import TermsAcceptanceDemo from "./pages/TermsAcceptanceDemo";
import DeclarationBeforeSubmissionDemo from "./pages/DeclarationBeforeSubmissionDemo";

// Payment Patterns
import FeePaymentDemo from "./pages/FeePaymentDemo";
import PaymentFailureRetryDemo from "./pages/PaymentFailureRetryDemo";

// Form & State Patterns
import FormIntelligenceSystem from "./pages/FormIntelligenceSystem";
import StateResilienceSystem from "./pages/StateResilienceSystem";

// Search & Discovery Patterns
import SearchDiscoveryPatterns from "./pages/SearchDiscoveryPatterns";
import SearchDiscoveryOverview from "./pages/SearchDiscoveryOverview";
import GlobalSearchPattern from "./pages/GlobalSearchPattern";
import SearchResultsPattern from "./pages/SearchResultsPattern";
import NoResultsPattern from "./pages/NoResultsPattern";

// Dashboard & Personalization Patterns
import DashboardPatterns from "./pages/DashboardPatterns";
import DashboardOverview from "./pages/DashboardOverview";
import CitizenDashboardPattern from "./pages/CitizenDashboardPattern";
import TaskListPattern from "./pages/TaskListPattern";

// Status & Lifecycle Patterns
import StatusLifecyclePatterns from "./pages/StatusLifecyclePatterns";
import StatusLifecycleOverview from "./pages/StatusLifecycleOverview";
import TimelineViewPattern from "./pages/TimelineViewPattern";
import StepProgressPattern from "./pages/StepProgressPattern";

// Notification Patterns
import NotificationPatterns from "./pages/NotificationPatterns";
import NotificationOverview from "./pages/NotificationOverview";
import NotificationCenterPattern from "./pages/NotificationCenterPattern";
import ActionableNotificationsPattern from "./pages/ActionableNotificationsPattern";

// Contact & Support Patterns
import ContactSupportPatterns from "./pages/ContactSupportPatterns";
import ContactSupportOverview from "./pages/ContactSupportOverview";
import GeneralContactPattern from "./pages/GeneralContactPattern";
import ServiceSupportPattern from "./pages/ServiceSupportPattern";

// Feedback & Rating Patterns
import FeedbackRatingPatterns from "./pages/FeedbackRatingPatterns";
import RateServicePattern from "./pages/RateServicePattern";
import PostCompletionFeedbackPattern from "./pages/PostCompletionFeedbackPattern";
import IssueReportingPattern from "./pages/IssueReportingPattern";
import SuggestImprovementPattern from "./pages/SuggestImprovementPattern";
import FeedbackAcknowledgmentPattern from "./pages/FeedbackAcknowledgmentPattern";

// Localization & Multilingual Patterns
import LocalizationPatterns from "./pages/LocalizationPatterns";
import LanguageSwitcherPattern from "./pages/LanguageSwitcherPattern";
import MixedLanguageFallbackPattern from "./pages/MixedLanguageFallbackPattern";
import ContentExpansionPattern from "./pages/ContentExpansionPattern";
import ScriptLayoutPattern from "./pages/ScriptLayoutPattern";
import TranslationConfidencePattern from "./pages/TranslationConfidencePattern";

// Data Input Patterns
import DataInputPatterns from "./pages/DataInputPatterns";
import AddressLookupPattern from "./pages/AddressLookupPattern";
import AutofillPattern from "./pages/AutofillPattern";
import SmartSuggestionsPattern from "./pages/SmartSuggestionsPattern";
import UploadExtractPattern from "./pages/UploadExtractPattern";
import MapInputPattern from "./pages/MapInputPattern";
import BulkDataEntryPattern from "./pages/BulkDataEntryPattern";
import RepeatableSectionsPattern from "./pages/RepeatableSectionsPattern";

// Operational Service Patterns
import OperationalServicePatterns from "./pages/OperationalServicePatterns";

// ========================================
// 4. SERVICE ARCHETYPES
// ========================================
import ServicePatternLibraries from "./pages/ServicePatternLibraries";
import ApplicationSubmissionPattern from "./pages/ApplicationSubmissionPattern";
import EligibilityScreeningPattern from "./pages/EligibilityScreeningPattern";
import RenewalPattern from "./pages/RenewalPattern";
import CorrectionResubmissionPattern from "./pages/CorrectionResubmissionPattern";
import ComplaintEscalationPattern from "./pages/ComplaintEscalationPattern";
import ApprovalIssuancePattern from "./pages/ApprovalIssuancePattern";
import AssistedOfflineOnlinePattern from "./pages/AssistedOfflineOnlinePattern";
import HighVolumeStatusTrackingPattern from "./pages/HighVolumeStatusTrackingPattern";
import AppointmentBookingPattern from "./pages/AppointmentBookingPattern";

// ========================================
// 5. SYSTEMS
// ========================================
import MultilingualGuidance from "./pages/MultilingualGuidance";

// ========================================
// 6. REFERENCE SERVICES
// ========================================
import ReferenceServiceBlueprint from "./pages/ReferenceServiceBlueprint";
import CertificateService from "./pages/CertificateService";

// Certificate Service - Complete Flow (44 pages)
import CertificateStart from "./pages/CertificateStart";
import CertificateEligibility from "./pages/CertificateEligibility";
import CertificateHelp from "./pages/CertificateHelp";
import CertificateDocumentGuidelines from "./pages/CertificateDocumentGuidelines";
import CertificatePrivacyPolicy from "./pages/CertificatePrivacyPolicy";
import CertificateSignIn from "./pages/CertificateSignIn";
import CertificateSignUp from "./pages/CertificateSignUp";
import CertificateVerifyOTP from "./pages/CertificateVerifyOTP";
import CertificateForgotPassword from "./pages/CertificateForgotPassword";
import CertificateSessionTimeout from "./pages/CertificateSessionTimeout";
import CertificateUserProfile from "./pages/CertificateUserProfile";
import CertificateFormPersonal from "./pages/CertificateFormPersonal";
import CertificateFormAddress from "./pages/CertificateFormAddress";
import CertificateFormAdditional from "./pages/CertificateFormAdditional";
import CertificateFormReview from "./pages/CertificateFormReview";
import CertificateDocumentUpload from "./pages/CertificateDocumentUpload";
import CertificateReviewSummary from "./pages/CertificateReviewSummary";
import CertificateDeclaration from "./pages/CertificateDeclaration";
import CertificatePaymentSummary from "./pages/CertificatePaymentSummary";
import CertificatePaymentReceipt from "./pages/CertificatePaymentReceipt";
import CertificateSubmissionSuccess from "./pages/CertificateSubmissionSuccess";
import CertificateStatusTracker from "./pages/CertificateStatusTracker";
import CertificateNotifications from "./pages/CertificateNotifications";
import CertificateMyApplications from "./pages/CertificateMyApplications";
import CertificateIssued from "./pages/CertificateIssued";
import CertificateFeedback from "./pages/CertificateFeedback";
import CertificateVerification from "./pages/CertificateVerification";
import CertificateCorrectionRequest from "./pages/CertificateCorrectionRequest";
import CertificateRejected from "./pages/CertificateRejected";
import CertificateAppeal from "./pages/CertificateAppeal";
import CertificateOfficerDashboard from "./pages/CertificateOfficerDashboard";
import CertificateOfficerCases from "./pages/CertificateOfficerCases";
import CertificateOfficerReview from "./pages/CertificateOfficerReview";

// ========================================
// 7. RESOURCES
// ========================================
import ResourcesHub from "./pages/ResourcesHub";
import Documentation from "./pages/Documentation";
import InstallationGuide from "./pages/InstallationGuide";
import UX4GStarterKit from "./pages/UX4GStarterKit";
import ComponentCodeMapping from "./pages/ComponentCodeMapping";
import FigmaDesignSystem from "./pages/FigmaDesignSystem";
import MigrationGuides from "./pages/MigrationGuides";
import MigrationMaterialUI from "./pages/MigrationMaterialUI";

// ========================================
// 8. GOVERNANCE
// ========================================
import Governance from "./pages/Governance";
import Adoption from "./pages/Adoption";
import ConformanceDashboard from "./pages/ConformanceDashboard";
import ServiceAnalytics from "./pages/ServiceAnalytics";
import SecurityPolicy from "./pages/SecurityPolicy";
import CodeOfConduct from "./pages/CodeOfConduct";
import Contributing from "./pages/Contributing";
import Copyright from "./pages/Copyright";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Contact from "./pages/Contact";

// ========================================
// LAYOUT
// ========================================
import Layout from "./components/Layout";

// ============================================================================
// ROUTER CONFIGURATION
// ============================================================================
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      // ======================================================================
      // HOME
      // ======================================================================
      { index: true, Component: UnifiedHome },

      // ======================================================================
      // 1. FOUNDATIONS
      // ======================================================================
      { path: "foundations", Component: Foundations },
      { path: "accessibility", Component: Accessibility },
      { path: "content-system", Component: ContentDesignSystem },

      // ======================================================================
      // 2. COMPONENTS
      // ======================================================================
      { path: "components", Component: Components },
      { path: "framework-status", Component: FrameworkStatus },
      { path: "web-components", Component: WebComponentsDemo },
      { path: "components/button", Component: ComponentButtonPage },
      { path: "components/input", Component: ComponentInputPage },
      { path: "components/field", Component: ComponentFieldPage },
      { path: "components/label", Component: ComponentLabelPage },
      { path: "components/hint-text", Component: ComponentHintTextPage },
      { path: "components/error-text", Component: ComponentErrorTextPage },
      { path: "components/checkbox", Component: ComponentCheckboxPage },
      { path: "components/select", Component: ComponentSelectPage },
      { path: "components/textarea", Component: ComponentTextareaPage },
      { path: "components/switch", Component: ComponentSwitchPage },
      { path: "components/radio", Component: ComponentRadioPage },
      { path: "components/autocomplete", Component: ComponentAutocompletePage },
      { path: "components/segmented-control", Component: ComponentSegmentedControlPage },
      { path: "components/breadcrumb", Component: ComponentBreadcrumbPage },
      { path: "components/alert", Component: ComponentAlertPage },
      { path: "components/badge", Component: ComponentBadgePage },
      { path: "components/modal", Component: ComponentModalPage },
      { path: "components/dialog", Component: ComponentDialogPage },
      { path: "components/card", Component: ComponentCardPage },
      { path: "components/table", Component: ComponentTablePage },
      { path: "components/accordion", Component: ComponentAccordionPage },
      { path: "components/list", Component: ComponentListPage },
      { path: "components/container", Component: ComponentContainerPage },
      { path: "components/grid", Component: ComponentGridPage },
      { path: "components/stack", Component: ComponentStackPage },
      { path: "components/divider", Component: ComponentDividerPage },
      { path: "components/spacer", Component: ComponentSpacerPage },
      { path: "components/date-picker", Component: ComponentDatePickerPage },
      { path: "components/file-upload", Component: ComponentFileUploadPage },
      { path: "components/stepper", Component: ComponentStepperPage },
      { path: "components/otp-input", Component: ComponentOTPInputPage },
      { path: "components/application-tracker", Component: ComponentApplicationTrackerPage },
      { path: "components/data-grid", Component: ComponentDataGridPage },
      { path: "components/aadhaar-input", Component: ComponentAadhaarInputPage },
      { path: "components/header", Component: ComponentHeaderPage },
      { path: "components/footer", Component: ComponentFooterPage },
      { path: "components/tabs", Component: ComponentTabsPage },
      { path: "components/pagination", Component: ComponentPaginationPage },
      { path: "components/menu", Component: ComponentMenuPage },
      { path: "components/dropdown", Component: ComponentDropdownPage },
      { path: "components/drawer", Component: ComponentDrawerPage },
      { path: "components/back-to-top", Component: ComponentBackToTopPage },
      { path: "components/toast", Component: ComponentToastPage },
      { path: "components/progress", Component: ComponentProgressPage },
      { path: "components/spinner", Component: ComponentSpinnerPage },
      { path: "components/skeleton", Component: ComponentSkeletonPage },
      { path: "components/tooltip", Component: ComponentTooltipPage },
      { path: "components/popover", Component: ComponentPopoverPage },
      { path: "components/avatar", Component: ComponentAvatarPage },
      { path: "components/tag", Component: ComponentTagPage },
      { path: "components/timeline", Component: ComponentTimelinePage },
      { path: "components/statistic", Component: ComponentStatisticPage },
      { path: "components/description-list", Component: ComponentDescriptionListPage },
      { path: "components/empty-state", Component: ComponentEmptyStatePage },
      { path: "components/code-block", Component: ComponentCodeBlockPage },
      { path: "components/tree-view", Component: ComponentTreeViewPage },
      { path: "components/document-viewer", Component: ComponentDocumentViewerPage },
      { path: "components/digital-signature", Component: ComponentDigitalSignaturePage },
      { path: "components/map-location-picker", Component: ComponentMapLocationPickerPage },
      { path: "components/qr-code", Component: ComponentQRCodePage },
      { path: "components/language-selector", Component: ComponentLanguageSelectorPage },
      { path: "components/payment-gateway", Component: ComponentPaymentGatewayPage },
      { path: "components/chatbot", Component: ComponentChatbotPage },
      { path: "components/rich-text-editor", Component: ComponentRichTextEditorPage },
      { path: "components/chart-library", Component: ComponentChartLibraryPage },
      { path: "components/calendar-scheduler", Component: ComponentCalendarSchedulerPage },
      { path: "components/address-autocomplete-india", Component: ComponentAddressAutocompleteIndiaPage },
      { path: "components/pan-card-input", Component: ComponentPANCardInputPage },
      { path: "components/feedback-rating-widget", Component: ComponentFeedbackRatingWidgetPage },
      { path: "components/captcha", Component: ComponentCaptchaPage },
      { path: "components/video-player", Component: ComponentVideoPlayerPage },
      { path: "components/form-builder", Component: ComponentFormBuilderPage },
      { path: "components/flex", Component: ComponentFlexPage },
      { path: "components/center", Component: ComponentCenterPage },
      { path: "components/aspect-ratio", Component: ComponentAspectRatioPage },
      { path: "components/show-hide", Component: ComponentShowHidePage },
      { path: "components/section", Component: ComponentSectionPage },

      // ======================================================================
      // 3. PATTERNS
      // ======================================================================
      { path: "pattern-library", Component: PatternLibraryHub },
      { path: "patterns", Component: Patterns },

      // Identity & Access Patterns
      { path: "patterns/identity", Component: IdentityAccessPatterns },
      { path: "patterns/identity/sign-in", Component: SignInPattern },
      { path: "patterns/identity/sign-up", Component: SignUpPattern },
      { path: "patterns/identity/otp-verification", Component: OTPVerificationPattern },
      { path: "patterns/identity/mobile-otp", Component: MobileOTPPattern },
      { path: "patterns/identity/forgot-password", Component: ForgotPasswordPattern },
      { path: "patterns/identity/account-recovery", Component: AccountRecoveryPattern },
      { path: "patterns/identity/aadhaar-auth", Component: AadhaarAuthenticationPattern },
      { path: "patterns/identity/session-timeout", Component: SessionTimeoutPattern },
      { path: "patterns/identity/auth-error", Component: AuthErrorLockoutPattern },
      { path: "patterns/identity/offline-video-kyc", Component: OfflineVideoKYCPattern },
      { path: "patterns/identity/online-video-kyc", Component: OnlineVideoKYCPattern },
      { path: "patterns/identity/aadhaar-video-kyc", Component: AadhaarVideoKYCPattern },

      // Consent & Declaration Patterns
      { path: "patterns/consent", Component: ConsentDeclarationPatterns },
      { path: "patterns/consent/consent-capture", Component: ConsentCapturePattern },
      { path: "patterns/consent/consent-capture-code", Component: ConsentCapturePatternCode },
      { path: "patterns/consent/consent-demo", Component: ConsentCaptureDemo },
      { path: "patterns/consent/guardian-proxy", Component: GuardianProxyConsentDemo },
      { path: "patterns/consent/withdrawal", Component: ConsentWithdrawalDemo },
      { path: "patterns/consent/data-sharing", Component: DataSharingConsentDemo },
      { path: "patterns/consent/privacy-notice", Component: PrivacyNoticeDemo },
      { path: "patterns/consent/terms-acceptance", Component: TermsAcceptanceDemo },
      { path: "patterns/consent/declaration", Component: DeclarationBeforeSubmissionDemo },

      // Payment Patterns
      { path: "patterns/payment", Component: FeePaymentDemo },
      { path: "patterns/payment/fee-payment", Component: FeePaymentDemo },
      { path: "patterns/payment/failure-retry", Component: PaymentFailureRetryDemo },

      // Form & State Patterns
      { path: "patterns/forms", Component: FormIntelligenceSystem },
      { path: "patterns/resilience", Component: StateResilienceSystem },

      // Search & Discovery Patterns
      { path: "patterns/search-discovery", Component: SearchDiscoveryPatterns },
      { path: "patterns/search-discovery/overview", Component: SearchDiscoveryOverview },
      { path: "patterns/search-discovery/global-search", Component: GlobalSearchPattern },
      { path: "patterns/search-discovery/search-results", Component: SearchResultsPattern },
      { path: "patterns/search-discovery/no-results", Component: NoResultsPattern },

      // Dashboard & Personalization Patterns
      { path: "patterns/dashboard", Component: DashboardPatterns },
      { path: "patterns/dashboard/overview", Component: DashboardOverview },
      { path: "patterns/dashboard/citizen-dashboard", Component: CitizenDashboardPattern },
      { path: "patterns/dashboard/task-list", Component: TaskListPattern },

      // Status & Lifecycle Patterns
      { path: "patterns/status-lifecycle", Component: StatusLifecyclePatterns },
      { path: "patterns/status-lifecycle/overview", Component: StatusLifecycleOverview },
      { path: "patterns/status-lifecycle/timeline-view", Component: TimelineViewPattern },
      { path: "patterns/status-lifecycle/step-progress", Component: StepProgressPattern },

      // Notification Patterns
      { path: "patterns/notifications", Component: NotificationPatterns },
      { path: "patterns/notifications/overview", Component: NotificationOverview },
      { path: "patterns/notifications/center", Component: NotificationCenterPattern },
      { path: "patterns/notifications/actionable", Component: ActionableNotificationsPattern },

      // Contact & Support Patterns
      { path: "patterns/contact-support", Component: ContactSupportPatterns },
      { path: "patterns/contact-support/overview", Component: ContactSupportOverview },
      { path: "patterns/contact-support/general-contact", Component: GeneralContactPattern },
      { path: "patterns/contact-support/service-support", Component: ServiceSupportPattern },

      // Feedback & Rating Patterns
      { path: "patterns/feedback", Component: FeedbackRatingPatterns },
      { path: "patterns/feedback/rate-service", Component: RateServicePattern },
      { path: "patterns/feedback/post-completion", Component: PostCompletionFeedbackPattern },
      { path: "patterns/feedback/issue-reporting", Component: IssueReportingPattern },
      { path: "patterns/feedback/suggest-improvement", Component: SuggestImprovementPattern },
      { path: "patterns/feedback/acknowledgment", Component: FeedbackAcknowledgmentPattern },

      // Localization & Multilingual Patterns
      { path: "patterns/localization", Component: LocalizationPatterns },
      { path: "patterns/localization/language-switcher", Component: LanguageSwitcherPattern },
      { path: "patterns/localization/mixed-language-fallback", Component: MixedLanguageFallbackPattern },
      { path: "patterns/localization/content-expansion", Component: ContentExpansionPattern },
      { path: "patterns/localization/script-layout", Component: ScriptLayoutPattern },
      { path: "patterns/localization/translation-confidence", Component: TranslationConfidencePattern },

      // Data Input Patterns
      { path: "patterns/data-input", Component: DataInputPatterns },
      { path: "patterns/data-input/address-lookup", Component: AddressLookupPattern },
      { path: "patterns/data-input/autofill", Component: AutofillPattern },
      { path: "patterns/data-input/smart-suggestions", Component: SmartSuggestionsPattern },
      { path: "patterns/data-input/upload-extract", Component: UploadExtractPattern },
      { path: "patterns/data-input/map-input", Component: MapInputPattern },
      { path: "patterns/data-input/bulk-entry", Component: BulkDataEntryPattern },
      { path: "patterns/data-input/repeatable-sections", Component: RepeatableSectionsPattern },

      // Operational Service Patterns
      { path: "patterns/service", Component: OperationalServicePatterns },

      // ======================================================================
      // 4. SERVICE ARCHETYPES
      // ======================================================================
      { path: "archetypes", Component: ServicePatternLibraries },
      { path: "archetypes/application", Component: ApplicationSubmissionPattern },
      { path: "archetypes/eligibility", Component: EligibilityScreeningPattern },
      { path: "archetypes/renewal", Component: RenewalPattern },
      { path: "archetypes/correction", Component: CorrectionResubmissionPattern },
      { path: "archetypes/complaint", Component: ComplaintEscalationPattern },
      { path: "archetypes/approval", Component: ApprovalIssuancePattern },
      { path: "archetypes/assisted", Component: AssistedOfflineOnlinePattern },
      { path: "archetypes/tracking", Component: HighVolumeStatusTrackingPattern },
      { path: "archetypes/appointment", Component: AppointmentBookingPattern },

      // ======================================================================
      // 5. SYSTEMS
      // ======================================================================
      { path: "systems/multilingual", Component: MultilingualGuidance },
      { path: "systems/form-intelligence", Component: FormIntelligenceSystem },
      { path: "systems/state-resilience", Component: StateResilienceSystem },

      // ======================================================================
      // 6. REFERENCE SERVICES
      // ======================================================================
      { path: "reference-service/overview", Component: ReferenceServiceBlueprint },
      { path: "reference-service/demo", Component: CertificateService },

      // Certificate Service Complete Flow
      { path: "reference-service/certificate/start", Component: CertificateStart },
      { path: "reference-service/certificate/eligibility", Component: CertificateEligibility },
      { path: "reference-service/certificate/help", Component: CertificateHelp },
      { path: "reference-service/certificate/document-guidelines", Component: CertificateDocumentGuidelines },
      { path: "reference-service/certificate/privacy-policy", Component: CertificatePrivacyPolicy },

      // Authentication Flow
      { path: "reference-service/certificate/sign-in", Component: CertificateSignIn },
      { path: "reference-service/certificate/sign-up", Component: CertificateSignUp },
      { path: "reference-service/certificate/verify-otp", Component: CertificateVerifyOTP },
      { path: "reference-service/certificate/forgot-password", Component: CertificateForgotPassword },
      { path: "reference-service/certificate/session-timeout", Component: CertificateSessionTimeout },

      // Application Flow
      { path: "reference-service/certificate/user-profile", Component: CertificateUserProfile },
      { path: "reference-service/certificate/form/personal", Component: CertificateFormPersonal },
      { path: "reference-service/certificate/form/address", Component: CertificateFormAddress },
      { path: "reference-service/certificate/form/additional", Component: CertificateFormAdditional },
      { path: "reference-service/certificate/form/review", Component: CertificateFormReview },
      { path: "reference-service/certificate/document-upload", Component: CertificateDocumentUpload },
      { path: "reference-service/certificate/review-summary", Component: CertificateReviewSummary },
      { path: "reference-service/certificate/declaration", Component: CertificateDeclaration },

      // Payment Flow
      { path: "reference-service/certificate/payment-summary", Component: CertificatePaymentSummary },
      { path: "reference-service/certificate/payment-receipt", Component: CertificatePaymentReceipt },

      // Post-Submission
      { path: "reference-service/certificate/submission-success", Component: CertificateSubmissionSuccess },
      { path: "reference-service/certificate/status-tracker", Component: CertificateStatusTracker },
      { path: "reference-service/certificate/notifications", Component: CertificateNotifications },
      { path: "reference-service/certificate/my-applications", Component: CertificateMyApplications },

      // Outcomes
      { path: "reference-service/certificate/issued", Component: CertificateIssued },
      { path: "reference-service/certificate/feedback", Component: CertificateFeedback },
      { path: "reference-service/certificate/verification", Component: CertificateVerification },
      { path: "reference-service/certificate/correction-request", Component: CertificateCorrectionRequest },
      { path: "reference-service/certificate/rejected", Component: CertificateRejected },
      { path: "reference-service/certificate/appeal", Component: CertificateAppeal },

      // Officer Views
      { path: "reference-service/certificate/officer/dashboard", Component: CertificateOfficerDashboard },
      { path: "reference-service/certificate/officer/cases", Component: CertificateOfficerCases },
      { path: "reference-service/certificate/officer/review", Component: CertificateOfficerReview },

      // ======================================================================
      // 7. RESOURCES
      // ======================================================================
      { path: "resources", Component: ResourcesHub },
      { path: "documentation", Component: Documentation },
      { path: "resources/getting-started", Component: InstallationGuide },
      { path: "resources/starter-kit", Component: UX4GStarterKit },
      { path: "resources/component-specs", Component: ComponentCodeMapping },
      { path: "resources/figma", Component: FigmaDesignSystem },
      { path: "resources/migration-guides", Component: MigrationGuides },
      { path: "resources/migration-material-ui", Component: MigrationMaterialUI },

      // ======================================================================
      // 8. GOVERNANCE
      // ======================================================================
      { path: "governance", Component: Governance },
      { path: "governance/adoption", Component: Adoption },
      { path: "governance/conformance", Component: ConformanceDashboard },
      { path: "governance/analytics", Component: ServiceAnalytics },
      { path: "security-policy", Component: SecurityPolicy },
      { path: "code-of-conduct", Component: CodeOfConduct },
      { path: "contributing", Component: Contributing },
      { path: "copyright", Component: Copyright },
      { path: "disclaimer", Component: Disclaimer },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-of-use", Component: TermsOfUse },
      { path: "contact", Component: Contact },

      // ======================================================================
      // LEGACY REDIRECTS (Consolidated)
      // ======================================================================

      // Old foundation pages
      { path: "foundations-detailed", element: <Navigate to="/foundations" replace /> },
      { path: "design-tokens", element: <Navigate to="/foundations" replace /> },
      { path: "styles-system", element: <Navigate to="/foundations" replace /> },
      { path: "theming-tokens", element: <Navigate to="/foundations" replace /> },
      { path: "accessibility-tooling", element: <Navigate to="/accessibility" replace /> },
      { path: "content-design-system", element: <Navigate to="/content-system" replace /> },
      { path: "content-system-showcase", element: <Navigate to="/content-system" replace /> },

      // Old component pages
      { path: "core-components", element: <Navigate to="/components" replace /> },
      { path: "component-docs", element: <Navigate to="/components" replace /> },
      { path: "component-template", element: <Navigate to="/components" replace /> },
      { path: "component-code-mapping", element: <Navigate to="/resources/component-specs" replace /> },

      // Old pattern pages
      { path: "advanced-patterns", element: <Navigate to="/patterns" replace /> },
      { path: "patterns-navigation-demo", element: <Navigate to="/patterns" replace /> },
      { path: "operational-service-patterns", element: <Navigate to="/patterns/service" replace /> },
      { path: "service-pattern-libraries", element: <Navigate to="/archetypes" replace /> },

      // Old identity pattern paths
      { path: "identity-access-patterns", element: <Navigate to="/patterns/identity" replace /> },
      { path: "sign-in-pattern", element: <Navigate to="/patterns/identity/sign-in" replace /> },
      { path: "identity-signin", element: <Navigate to="/patterns/identity/sign-in" replace /> },
      { path: "sign-up-pattern", element: <Navigate to="/patterns/identity/sign-up" replace /> },
      { path: "identity-signup", element: <Navigate to="/patterns/identity/sign-up" replace /> },
      { path: "otp-verification-pattern", element: <Navigate to="/patterns/identity/otp-verification" replace /> },
      { path: "mobile-otp-pattern", element: <Navigate to="/patterns/identity/mobile-otp" replace /> },
      { path: "identity-mobile-otp", element: <Navigate to="/patterns/identity/mobile-otp" replace /> },
      { path: "identity-email-otp", element: <Navigate to="/patterns/identity" replace /> },
      { path: "forgot-password-pattern", element: <Navigate to="/patterns/identity/forgot-password" replace /> },
      { path: "identity-forgot-password", element: <Navigate to="/patterns/identity/forgot-password" replace /> },
      { path: "aadhaar-authentication-pattern", element: <Navigate to="/patterns/identity/aadhaar-auth" replace /> },
      { path: "identity-aadhaar", element: <Navigate to="/patterns/identity/aadhaar-auth" replace /> },
      { path: "account-recovery-pattern", element: <Navigate to="/patterns/identity/account-recovery" replace /> },
      { path: "identity-account-recovery", element: <Navigate to="/patterns/identity/account-recovery" replace /> },
      { path: "session-timeout-pattern", element: <Navigate to="/patterns/identity/session-timeout" replace /> },
      { path: "identity-session-timeout", element: <Navigate to="/patterns/identity/session-timeout" replace /> },
      { path: "auth-error-lockout-pattern", element: <Navigate to="/patterns/identity/auth-error" replace /> },
      { path: "identity-error-lockout", element: <Navigate to="/patterns/identity/auth-error" replace /> },

      // Old consent pattern paths
      { path: "consent-declaration-patterns", element: <Navigate to="/patterns/consent" replace /> },
      { path: "consent-capture-pattern", element: <Navigate to="/patterns/consent/consent-capture" replace /> },
      { path: "consent-capture-demo", element: <Navigate to="/patterns/consent/consent-demo" replace /> },
      { path: "guardian-proxy-consent-demo", element: <Navigate to="/patterns/consent/guardian-proxy" replace /> },
      { path: "consent-withdrawal-demo", element: <Navigate to="/patterns/consent/withdrawal" replace /> },
      { path: "data-sharing-consent-demo", element: <Navigate to="/patterns/consent/data-sharing" replace /> },
      { path: "privacy-notice-demo", element: <Navigate to="/patterns/consent/privacy-notice" replace /> },
      { path: "terms-acceptance-demo", element: <Navigate to="/patterns/consent/terms-acceptance" replace /> },
      { path: "declaration-before-submission-demo", element: <Navigate to="/patterns/consent/declaration" replace /> },

      // Old payment pattern paths
      { path: "fee-payment-demo", element: <Navigate to="/patterns/payment" replace /> },
      { path: "payment-failure-retry-demo", element: <Navigate to="/patterns/payment/failure-retry" replace /> },

      // Old archetype pattern paths
      { path: "application-submission-pattern", element: <Navigate to="/archetypes/application" replace /> },
      { path: "eligibility-screening-pattern", element: <Navigate to="/archetypes/eligibility" replace /> },
      { path: "renewal-pattern", element: <Navigate to="/archetypes/renewal" replace /> },
      { path: "correction-resubmission-pattern", element: <Navigate to="/archetypes/correction" replace /> },
      { path: "complaint-escalation-pattern", element: <Navigate to="/archetypes/complaint" replace /> },
      { path: "approval-issuance-pattern", element: <Navigate to="/archetypes/approval" replace /> },
      { path: "assisted-offline-online-pattern", element: <Navigate to="/archetypes/assisted" replace /> },
      { path: "high-volume-status-tracking-pattern", element: <Navigate to="/archetypes/tracking" replace /> },
      { path: "appointment-booking-pattern", element: <Navigate to="/archetypes/appointment" replace /> },

      // Old system paths
      { path: "form-intelligence-system", element: <Navigate to="/systems/form-intelligence" replace /> },
      { path: "state-resilience-system", element: <Navigate to="/systems/state-resilience" replace /> },
      { path: "multilingual", element: <Navigate to="/systems/multilingual" replace /> },

      // Old resource pages
      { path: "old-home", element: <Navigate to="/" replace /> },
      { path: "cover", element: <Navigate to="/" replace /> },
      { path: "home", element: <Navigate to="/" replace /> },
      { path: "installation", element: <Navigate to="/resources/getting-started" replace /> },
      { path: "starter-kits", element: <Navigate to="/resources/starter-kit" replace /> },
      { path: "ux4g-starter-kit", element: <Navigate to="/resources/starter-kit" replace /> },
      { path: "design-to-code", element: <Navigate to="/resources/figma" replace /> },
      { path: "figma-design-system", element: <Navigate to="/resources/figma" replace /> },
      { path: "figma-ia", element: <Navigate to="/resources/figma" replace /> },

      // Old governance pages
      { path: "telemetry-docs", element: <Navigate to="/governance/analytics" replace /> },
      { path: "service-analytics", element: <Navigate to="/governance/analytics" replace /> },
      { path: "conformance-dashboard", element: <Navigate to="/governance/conformance" replace /> },

      // Old service blueprint pages
      { path: "service-blueprint", element: <Navigate to="/reference-service/overview" replace /> },
      { path: "sector-blueprints", element: <Navigate to="/reference-service/overview" replace /> },
      { path: "reference-service-blueprint", element: <Navigate to="/reference-service/overview" replace /> },

      // Old certificate service pages (redirect to new paths)
      { path: "certificate-service", element: <Navigate to="/reference-service/demo" replace /> },
      { path: "certificate-eligibility", element: <Navigate to="/reference-service/certificate/eligibility" replace /> },
      { path: "certificate-help", element: <Navigate to="/reference-service/certificate/help" replace /> },
      { path: "certificate-document-guidelines", element: <Navigate to="/reference-service/certificate/document-guidelines" replace /> },
      { path: "certificate-privacy-policy", element: <Navigate to="/reference-service/certificate/privacy-policy" replace /> },
      { path: "certificate-signup", element: <Navigate to="/reference-service/certificate/sign-up" replace /> },
      { path: "certificate-verify-otp", element: <Navigate to="/reference-service/certificate/verify-otp" replace /> },
      { path: "certificate-signin", element: <Navigate to="/reference-service/certificate/sign-in" replace /> },
      { path: "certificate-forgot-password", element: <Navigate to="/reference-service/certificate/forgot-password" replace /> },
      { path: "certificate-session-timeout", element: <Navigate to="/reference-service/certificate/session-timeout" replace /> },
      { path: "certificate-user-profile", element: <Navigate to="/reference-service/certificate/user-profile" replace /> },
      { path: "certificate-start", element: <Navigate to="/reference-service/certificate/start" replace /> },
      { path: "certificate-form-personal", element: <Navigate to="/reference-service/certificate/form/personal" replace /> },
      { path: "certificate-form-address", element: <Navigate to="/reference-service/certificate/form/address" replace /> },
      { path: "certificate-form-additional", element: <Navigate to="/reference-service/certificate/form/additional" replace /> },
      { path: "certificate-form-review", element: <Navigate to="/reference-service/certificate/form/review" replace /> },
      { path: "certificate-document-upload", element: <Navigate to="/reference-service/certificate/document-upload" replace /> },
      { path: "certificate-review-summary", element: <Navigate to="/reference-service/certificate/review-summary" replace /> },
      { path: "certificate-declaration", element: <Navigate to="/reference-service/certificate/declaration" replace /> },
      { path: "certificate-payment-summary", element: <Navigate to="/reference-service/certificate/payment-summary" replace /> },
      { path: "certificate-payment-receipt", element: <Navigate to="/reference-service/certificate/payment-receipt" replace /> },
      { path: "certificate-submission-success", element: <Navigate to="/reference-service/certificate/submission-success" replace /> },
      { path: "certificate-status-tracker", element: <Navigate to="/reference-service/certificate/status-tracker" replace /> },
      { path: "certificate-notifications", element: <Navigate to="/reference-service/certificate/notifications" replace /> },
      { path: "certificate-issued", element: <Navigate to="/reference-service/certificate/issued" replace /> },
      { path: "certificate-feedback", element: <Navigate to="/reference-service/certificate/feedback" replace /> },
      { path: "certificate-correction-request", element: <Navigate to="/reference-service/certificate/correction-request" replace /> },
      { path: "certificate-rejected", element: <Navigate to="/reference-service/certificate/rejected" replace /> },
      { path: "certificate-appeal", element: <Navigate to="/reference-service/certificate/appeal" replace /> },
      { path: "certificate-officer-dashboard", element: <Navigate to="/reference-service/certificate/officer/dashboard" replace /> },
      { path: "certificate-officer-cases", element: <Navigate to="/reference-service/certificate/officer/cases" replace /> },
      { path: "certificate-officer-review", element: <Navigate to="/reference-service/certificate/officer/review" replace /> },
      { path: "certificate-my-applications", element: <Navigate to="/reference-service/certificate/my-applications" replace /> },
      { path: "certificate-verification", element: <Navigate to="/reference-service/certificate/verification" replace /> },

      // 404 Not Found
      { path: "*", Component: NotFound }
    ]
  }
]);