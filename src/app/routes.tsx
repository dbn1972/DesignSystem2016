import { lazy } from "react";
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
const UnifiedHome = lazy(() => import("./pages/UnifiedHome"));
const NotFound = lazy(() => import("./pages/NotFound"));

// ========================================
// 1. FOUNDATIONS
// ========================================
const Foundations = lazy(() => import("./pages/Foundations"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const ContentDesignSystem = lazy(() => import("./pages/ContentDesignSystem"));

// ========================================
// 2. COMPONENTS
// ========================================
const Components = lazy(() => import("./pages/Components"));
const FrameworkStatus = lazy(() => import("./pages/FrameworkStatus"));
const WebComponentsDemo = lazy(() => import("./pages/WebComponentsDemo"));
const ComponentButtonPage = lazy(() => import("./pages/ComponentButtonPage"));
const ComponentInputPage = lazy(() => import("./pages/ComponentInputPage"));
const ComponentCheckboxPage = lazy(() => import("./pages/ComponentCheckboxPage"));
const ComponentSelectPage = lazy(() => import("./pages/ComponentSelectPage"));
const ComponentTextareaPage = lazy(() => import("./pages/ComponentTextareaPage"));
const ComponentSwitchPage = lazy(() => import("./pages/ComponentSwitchPage"));
const ComponentRadioPage = lazy(() => import("./pages/ComponentRadioPage"));
const ComponentBreadcrumbPage = lazy(() => import("./pages/ComponentBreadcrumbPage"));
const ComponentAlertPage = lazy(() => import("./pages/ComponentAlertPage"));
const ComponentBadgePage = lazy(() => import("./pages/ComponentBadgePage"));
const ComponentModalPage = lazy(() => import("./pages/ComponentModalPage"));
const ComponentCardPage = lazy(() => import("./pages/ComponentCardPage"));
const ComponentTablePage = lazy(() => import("./pages/ComponentTablePage"));
const ComponentAccordionPage = lazy(() => import("./pages/ComponentAccordionPage"));
const ComponentListPage = lazy(() => import("./pages/ComponentListPage"));
const ComponentContainerPage = lazy(() => import("./pages/ComponentContainerPage"));
const ComponentGridPage = lazy(() => import("./pages/ComponentGridPage"));
const ComponentStackPage = lazy(() => import("./pages/ComponentStackPage"));
const ComponentDividerPage = lazy(() => import("./pages/ComponentDividerPage"));
const ComponentSpacerPage = lazy(() => import("./pages/ComponentSpacerPage"));
const ComponentDatePickerPage = lazy(() => import("./pages/ComponentDatePickerPage"));
const ComponentFileUploadPage = lazy(() => import("./pages/ComponentFileUploadPage"));
const ComponentStepperPage = lazy(() => import("./pages/ComponentStepperPage"));
const ComponentOTPInputPage = lazy(() => import("./pages/ComponentOTPInputPage"));
const ComponentApplicationTrackerPage = lazy(() => import("./pages/ComponentApplicationTrackerPage"));
const ComponentDataGridPage = lazy(() => import("./pages/ComponentDataGridPage"));
const ComponentAadhaarInputPage = lazy(() => import("./pages/ComponentAadhaarInputPage"));
const ComponentHeaderPage = lazy(() => import("./pages/ComponentHeaderPage"));
const ComponentFooterPage = lazy(() => import("./pages/ComponentFooterPage"));
const ComponentTabsPage = lazy(() => import("./pages/ComponentTabsPage"));
const ComponentPaginationPage = lazy(() => import("./pages/ComponentPaginationPage"));
const ComponentMenuPage = lazy(() => import("./pages/ComponentMenuPage"));
const ComponentToastPage = lazy(() => import("./pages/ComponentToastPage"));
const ComponentProgressPage = lazy(() => import("./pages/ComponentProgressPage"));
const ComponentSpinnerPage = lazy(() => import("./pages/ComponentSpinnerPage"));
const ComponentTooltipPage = lazy(() => import("./pages/ComponentTooltipPage"));
const ComponentAvatarPage = lazy(() => import("./pages/ComponentAvatarPage"));
const ComponentDocumentViewerPage = lazy(() => import("./pages/ComponentDocumentViewerPage"));
const ComponentDigitalSignaturePage = lazy(() => import("./pages/ComponentDigitalSignaturePage"));
const ComponentMapLocationPickerPage = lazy(() => import("./pages/ComponentMapLocationPickerPage"));
const ComponentQRCodePage = lazy(() => import("./pages/ComponentQRCodePage"));
const ComponentLanguageSelectorPage = lazy(() => import("./pages/ComponentLanguageSelectorPage"));
const ComponentPaymentGatewayPage = lazy(() => import("./pages/ComponentPaymentGatewayPage"));
const ComponentChatbotPage = lazy(() => import("./pages/ComponentChatbotPage"));
const ComponentRichTextEditorPage = lazy(() => import("./pages/ComponentRichTextEditorPage"));
const ComponentChartLibraryPage = lazy(() => import("./pages/ComponentChartLibraryPage"));
const ComponentCalendarSchedulerPage = lazy(() => import("./pages/ComponentCalendarSchedulerPage"));
const ComponentAddressAutocompleteIndiaPage = lazy(() => import("./pages/ComponentAddressAutocompleteIndiaPage"));
const ComponentPANCardInputPage = lazy(() => import("./pages/ComponentPANCardInputPage"));
const ComponentFeedbackRatingWidgetPage = lazy(() => import("./pages/ComponentFeedbackRatingWidgetPage"));
const ComponentCaptchaPage = lazy(() => import("./pages/ComponentCaptchaPage"));
const ComponentVideoPlayerPage = lazy(() => import("./pages/ComponentVideoPlayerPage"));
const ComponentFormBuilderPage = lazy(() => import("./pages/ComponentFormBuilderPage"));
const ComponentFlexPage = lazy(() => import("./pages/ComponentFlexPage"));
const ComponentCenterPage = lazy(() => import("./pages/ComponentCenterPage"));
const ComponentAspectRatioPage = lazy(() => import("./pages/ComponentAspectRatioPage"));
const ComponentShowHidePage = lazy(() => import("./pages/ComponentShowHidePage"));
const ComponentSectionPage = lazy(() => import("./pages/ComponentSectionPage"));
const ComponentTagPage = lazy(() => import("./pages/ComponentTagPage"));
const ComponentTimelinePage = lazy(() => import("./pages/ComponentTimelinePage"));
const ComponentStatisticPage = lazy(() => import("./pages/ComponentStatisticPage"));
const ComponentDescriptionListPage = lazy(() => import("./pages/ComponentDescriptionListPage"));
const ComponentEmptyStatePage = lazy(() => import("./pages/ComponentEmptyStatePage"));
const ComponentDrawerPage = lazy(() => import("./pages/ComponentDrawerPage"));
const ComponentSkeletonPage = lazy(() => import("./pages/ComponentSkeletonPage"));
const ComponentAutocompletePage = lazy(() => import("./pages/ComponentAutocompletePage"));
const ComponentDialogPage = lazy(() => import("./pages/ComponentDialogPage"));
const ComponentPopoverPage = lazy(() => import("./pages/ComponentPopoverPage"));
const ComponentDropdownPage = lazy(() => import("./pages/ComponentDropdownPage"));
const ComponentCodeBlockPage = lazy(() => import("./pages/ComponentCodeBlockPage"));
const ComponentSegmentedControlPage = lazy(() => import("./pages/ComponentSegmentedControlPage"));
const ComponentTreeViewPage = lazy(() => import("./pages/ComponentTreeViewPage"));
const ComponentBackToTopPage = lazy(() => import("./pages/ComponentBackToTopPage"));
const ComponentFieldPage = lazy(() => import("./pages/ComponentFieldPage"));
const ComponentLabelPage = lazy(() => import("./pages/ComponentLabelPage"));
const ComponentHintTextPage = lazy(() => import("./pages/ComponentHintTextPage"));
const ComponentErrorTextPage = lazy(() => import("./pages/ComponentErrorTextPage"));

// ========================================
// 3. PATTERNS
// ========================================
const PatternLibraryHub = lazy(() => import("./pages/PatternLibraryHub"));
const Patterns = lazy(() => import("./pages/Patterns"));

// Identity & Access Patterns
const IdentityAccessPatterns = lazy(() => import("./pages/IdentityAccessPatterns"));
const SignInPattern = lazy(() => import("./pages/SignInPattern"));
const SignUpPattern = lazy(() => import("./pages/SignUpPattern"));
const OTPVerificationPattern = lazy(() => import("./pages/OTPVerificationPattern"));
const MobileOTPPattern = lazy(() => import("./pages/MobileOTPPattern"));
const ForgotPasswordPattern = lazy(() => import("./pages/ForgotPasswordPattern"));
const AccountRecoveryPattern = lazy(() => import("./pages/AccountRecoveryPattern"));
const AadhaarAuthenticationPattern = lazy(() => import("./pages/AadhaarAuthenticationPattern"));
const SessionTimeoutPattern = lazy(() => import("./pages/SessionTimeoutPattern"));
const AuthErrorLockoutPattern = lazy(() => import("./pages/AuthErrorLockoutPattern"));
const OfflineVideoKYCPattern = lazy(() => import("./pages/OfflineVideoKYCPattern"));
const OnlineVideoKYCPattern = lazy(() => import("./pages/OnlineVideoKYCPattern"));
const AadhaarVideoKYCPattern = lazy(() => import("./pages/AadhaarVideoKYCPattern"));

// Consent & Declaration Patterns
const ConsentDeclarationPatterns = lazy(() => import("./pages/ConsentDeclarationPatterns"));
const ConsentCapturePattern = lazy(() => import("./pages/ConsentCapturePattern"));
const ConsentCapturePatternCode = lazy(() => import("./pages/patterns/ConsentCapturePatternCode"));
const ConsentCaptureDemo = lazy(() => import("./pages/ConsentCaptureDemo"));
const GuardianProxyConsentDemo = lazy(() => import("./pages/GuardianProxyConsentDemo"));
const ConsentWithdrawalDemo = lazy(() => import("./pages/ConsentWithdrawalDemo"));
const DataSharingConsentDemo = lazy(() => import("./pages/DataSharingConsentDemo"));
const PrivacyNoticeDemo = lazy(() => import("./pages/PrivacyNoticeDemo"));
const TermsAcceptanceDemo = lazy(() => import("./pages/TermsAcceptanceDemo"));
const DeclarationBeforeSubmissionDemo = lazy(() => import("./pages/DeclarationBeforeSubmissionDemo"));

// Payment Patterns
const FeePaymentDemo = lazy(() => import("./pages/FeePaymentDemo"));
const PaymentFailureRetryDemo = lazy(() => import("./pages/PaymentFailureRetryDemo"));

// Form & State Patterns
const FormIntelligenceSystem = lazy(() => import("./pages/FormIntelligenceSystem"));
const StateResilienceSystem = lazy(() => import("./pages/StateResilienceSystem"));

// Search & Discovery Patterns
const SearchDiscoveryPatterns = lazy(() => import("./pages/SearchDiscoveryPatterns"));
const SearchDiscoveryOverview = lazy(() => import("./pages/SearchDiscoveryOverview"));
const GlobalSearchPattern = lazy(() => import("./pages/GlobalSearchPattern"));
const SearchResultsPattern = lazy(() => import("./pages/SearchResultsPattern"));
const NoResultsPattern = lazy(() => import("./pages/NoResultsPattern"));

// Dashboard & Personalization Patterns
const DashboardPatterns = lazy(() => import("./pages/DashboardPatterns"));
const DashboardOverview = lazy(() => import("./pages/DashboardOverview"));
const CitizenDashboardPattern = lazy(() => import("./pages/CitizenDashboardPattern"));
const TaskListPattern = lazy(() => import("./pages/TaskListPattern"));

// Status & Lifecycle Patterns
const StatusLifecyclePatterns = lazy(() => import("./pages/StatusLifecyclePatterns"));
const StatusLifecycleOverview = lazy(() => import("./pages/StatusLifecycleOverview"));
const TimelineViewPattern = lazy(() => import("./pages/TimelineViewPattern"));
const StepProgressPattern = lazy(() => import("./pages/StepProgressPattern"));

// Notification Patterns
const NotificationPatterns = lazy(() => import("./pages/NotificationPatterns"));
const NotificationOverview = lazy(() => import("./pages/NotificationOverview"));
const NotificationCenterPattern = lazy(() => import("./pages/NotificationCenterPattern"));
const ActionableNotificationsPattern = lazy(() => import("./pages/ActionableNotificationsPattern"));

// Contact & Support Patterns
const ContactSupportPatterns = lazy(() => import("./pages/ContactSupportPatterns"));
const ContactSupportOverview = lazy(() => import("./pages/ContactSupportOverview"));
const GeneralContactPattern = lazy(() => import("./pages/GeneralContactPattern"));
const ServiceSupportPattern = lazy(() => import("./pages/ServiceSupportPattern"));

// Feedback & Rating Patterns
const FeedbackRatingPatterns = lazy(() => import("./pages/FeedbackRatingPatterns"));
const RateServicePattern = lazy(() => import("./pages/RateServicePattern"));
const PostCompletionFeedbackPattern = lazy(() => import("./pages/PostCompletionFeedbackPattern"));
const IssueReportingPattern = lazy(() => import("./pages/IssueReportingPattern"));
const SuggestImprovementPattern = lazy(() => import("./pages/SuggestImprovementPattern"));
const FeedbackAcknowledgmentPattern = lazy(() => import("./pages/FeedbackAcknowledgmentPattern"));

// Localization & Multilingual Patterns
const LocalizationPatterns = lazy(() => import("./pages/LocalizationPatterns"));
const LanguageSwitcherPattern = lazy(() => import("./pages/LanguageSwitcherPattern"));
const MixedLanguageFallbackPattern = lazy(() => import("./pages/MixedLanguageFallbackPattern"));
const ContentExpansionPattern = lazy(() => import("./pages/ContentExpansionPattern"));
const ScriptLayoutPattern = lazy(() => import("./pages/ScriptLayoutPattern"));
const TranslationConfidencePattern = lazy(() => import("./pages/TranslationConfidencePattern"));

// Data Input Patterns
const DataInputPatterns = lazy(() => import("./pages/DataInputPatterns"));
const AddressLookupPattern = lazy(() => import("./pages/AddressLookupPattern"));
const AutofillPattern = lazy(() => import("./pages/AutofillPattern"));
const SmartSuggestionsPattern = lazy(() => import("./pages/SmartSuggestionsPattern"));
const UploadExtractPattern = lazy(() => import("./pages/UploadExtractPattern"));
const MapInputPattern = lazy(() => import("./pages/MapInputPattern"));
const BulkDataEntryPattern = lazy(() => import("./pages/BulkDataEntryPattern"));
const RepeatableSectionsPattern = lazy(() => import("./pages/RepeatableSectionsPattern"));

// Operational Service Patterns
const OperationalServicePatterns = lazy(() => import("./pages/OperationalServicePatterns"));

// ========================================
// 4. SERVICE ARCHETYPES
// ========================================
const ServicePatternLibraries = lazy(() => import("./pages/ServicePatternLibraries"));
const ApplicationSubmissionPattern = lazy(() => import("./pages/ApplicationSubmissionPattern"));
const EligibilityScreeningPattern = lazy(() => import("./pages/EligibilityScreeningPattern"));
const RenewalPattern = lazy(() => import("./pages/RenewalPattern"));
const CorrectionResubmissionPattern = lazy(() => import("./pages/CorrectionResubmissionPattern"));
const ComplaintEscalationPattern = lazy(() => import("./pages/ComplaintEscalationPattern"));
const ApprovalIssuancePattern = lazy(() => import("./pages/ApprovalIssuancePattern"));
const AssistedOfflineOnlinePattern = lazy(() => import("./pages/AssistedOfflineOnlinePattern"));
const HighVolumeStatusTrackingPattern = lazy(() => import("./pages/HighVolumeStatusTrackingPattern"));
const AppointmentBookingPattern = lazy(() => import("./pages/AppointmentBookingPattern"));

// ========================================
// 5. SYSTEMS
// ========================================
const MultilingualGuidance = lazy(() => import("./pages/MultilingualGuidance"));

// ========================================
// 6. REFERENCE SERVICES
// ========================================
const ReferenceServiceBlueprint = lazy(() => import("./pages/ReferenceServiceBlueprint"));
const CertificateService = lazy(() => import("./pages/CertificateService"));
const ReferenceServiceSignIn = lazy(() => import("./pages/ReferenceServiceSignIn"));

// Certificate Service - Complete Flow (44 pages)
const CertificateStart = lazy(() => import("./pages/CertificateStart"));
const CertificateEligibility = lazy(() => import("./pages/CertificateEligibility"));
const CertificateHelp = lazy(() => import("./pages/CertificateHelp"));
const CertificateDocumentGuidelines = lazy(() => import("./pages/CertificateDocumentGuidelines"));
const CertificatePrivacyPolicy = lazy(() => import("./pages/CertificatePrivacyPolicy"));
const CertificateSignIn = lazy(() => import("./pages/CertificateSignIn"));
const CertificateSignUp = lazy(() => import("./pages/CertificateSignUp"));
const ReferenceServiceSignUp = lazy(() => import("./pages/ReferenceServiceSignUp"));
const CertificateVerifyOTP = lazy(() => import("./pages/CertificateVerifyOTP"));
const CertificateForgotPassword = lazy(() => import("./pages/CertificateForgotPassword"));
const ReferenceServiceForgotPassword = lazy(() => import("./pages/ReferenceServiceForgotPassword"));
const ReferenceServiceVerifyOTP = lazy(() => import("./pages/ReferenceServiceVerifyOTP"));
const ReferenceServiceAuthStatus = lazy(() => import("./pages/ReferenceServiceAuthStatus"));
const CertificateSessionTimeout = lazy(() => import("./pages/CertificateSessionTimeout"));
const CertificateUserProfile = lazy(() => import("./pages/CertificateUserProfile"));
const CertificateFormPersonal = lazy(() => import("./pages/CertificateFormPersonal"));
const CertificateFormAddress = lazy(() => import("./pages/CertificateFormAddress"));
const CertificateFormAdditional = lazy(() => import("./pages/CertificateFormAdditional"));
const CertificateFormReview = lazy(() => import("./pages/CertificateFormReview"));
const CertificateDocumentUpload = lazy(() => import("./pages/CertificateDocumentUpload"));
const CertificateReviewSummary = lazy(() => import("./pages/CertificateReviewSummary"));
const CertificateDeclaration = lazy(() => import("./pages/CertificateDeclaration"));
const CertificatePaymentSummary = lazy(() => import("./pages/CertificatePaymentSummary"));
const CertificatePaymentReceipt = lazy(() => import("./pages/CertificatePaymentReceipt"));
const CertificateSubmissionSuccess = lazy(() => import("./pages/CertificateSubmissionSuccess"));
const CertificateStatusTracker = lazy(() => import("./pages/CertificateStatusTracker"));
const CertificateNotifications = lazy(() => import("./pages/CertificateNotifications"));
const CertificateMyApplications = lazy(() => import("./pages/CertificateMyApplications"));
const CertificateIssued = lazy(() => import("./pages/CertificateIssued"));
const CertificateFeedback = lazy(() => import("./pages/CertificateFeedback"));
const CertificateVerification = lazy(() => import("./pages/CertificateVerification"));
const CertificateCorrectionRequest = lazy(() => import("./pages/CertificateCorrectionRequest"));
const CertificateRejected = lazy(() => import("./pages/CertificateRejected"));
const CertificateAppeal = lazy(() => import("./pages/CertificateAppeal"));
const CertificateOfficerDashboard = lazy(() => import("./pages/CertificateOfficerDashboard"));
const CertificateOfficerCases = lazy(() => import("./pages/CertificateOfficerCases"));
const CertificateOfficerReview = lazy(() => import("./pages/CertificateOfficerReview"));

// ========================================
// 7. RESOURCES
// ========================================
const ResourcesHub = lazy(() => import("./pages/ResourcesHub"));
const Documentation = lazy(() => import("./pages/Documentation"));
const InstallationGuide = lazy(() => import("./pages/InstallationGuide"));
const UX4GStarterKit = lazy(() => import("./pages/UX4GStarterKit"));
const ComponentCodeMapping = lazy(() => import("./pages/ComponentCodeMapping"));
const FigmaDesignSystem = lazy(() => import("./pages/FigmaDesignSystem"));
const MigrationGuides = lazy(() => import("./pages/MigrationGuides"));
const MigrationMaterialUI = lazy(() => import("./pages/MigrationMaterialUI"));
const ServiceCodeDownloads = lazy(() => import("./pages/ServiceCodeDownloads"));

// ========================================
// 8. GOVERNANCE
// ========================================
const Governance = lazy(() => import("./pages/Governance"));
const Adoption = lazy(() => import("./pages/Adoption"));
const ConformanceDashboard = lazy(() => import("./pages/ConformanceDashboard"));
const ServiceAnalytics = lazy(() => import("./pages/ServiceAnalytics"));
const SecurityPolicy = lazy(() => import("./pages/SecurityPolicy"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));
const Contributing = lazy(() => import("./pages/Contributing"));
const Copyright = lazy(() => import("./pages/Copyright"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const Contact = lazy(() => import("./pages/Contact"));

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
      { path: "systems", element: <Navigate to="/systems/multilingual" replace /> },
      { path: "systems/multilingual", Component: MultilingualGuidance },
      { path: "systems/form-intelligence", Component: FormIntelligenceSystem },
      { path: "systems/state-resilience", Component: StateResilienceSystem },

      // ======================================================================
      // 6. REFERENCE SERVICES
      // ======================================================================
      { path: "reference-service/overview", Component: ReferenceServiceBlueprint },
      { path: "reference-service/demo", Component: CertificateService },
      { path: "reference-service/sign-in", Component: ReferenceServiceSignIn },
      { path: "reference-service/sign-up", Component: ReferenceServiceSignUp },
      { path: "reference-service/forgot-password", Component: ReferenceServiceForgotPassword },
      { path: "reference-service/verify-otp", Component: ReferenceServiceVerifyOTP },
      { path: "reference-service/auth-status", Component: ReferenceServiceAuthStatus },

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
      { path: "resources/service-code-downloads", Component: ServiceCodeDownloads },
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
