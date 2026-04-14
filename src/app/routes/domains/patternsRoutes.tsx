import { lazy } from "react";
import type { RouteObject } from "react-router";

import { ROUTE_PATHS, toChildPath } from "../pathSource";

const PatternLibraryHub = lazy(() => import("../../pages/PatternLibraryHub"));
const Patterns = lazy(() => import("../../pages/Patterns"));
const IdentityAccessPatterns = lazy(() => import("../../pages/IdentityAccessPatterns"));
const SignInPattern = lazy(() => import("../../pages/SignInPattern"));
const SignUpPattern = lazy(() => import("../../pages/SignUpPattern"));
const OTPVerificationPattern = lazy(() => import("../../pages/OTPVerificationPattern"));
const MobileOTPPattern = lazy(() => import("../../pages/MobileOTPPattern"));
const ForgotPasswordPattern = lazy(() => import("../../pages/ForgotPasswordPattern"));
const AccountRecoveryPattern = lazy(() => import("../../pages/AccountRecoveryPattern"));
const AadhaarAuthenticationPattern = lazy(() => import("../../pages/AadhaarAuthenticationPattern"));
const SessionTimeoutPattern = lazy(() => import("../../pages/SessionTimeoutPattern"));
const AuthErrorLockoutPattern = lazy(() => import("../../pages/AuthErrorLockoutPattern"));
const OfflineVideoKYCPattern = lazy(() => import("../../pages/OfflineVideoKYCPattern"));
const OnlineVideoKYCPattern = lazy(() => import("../../pages/OnlineVideoKYCPattern"));
const AadhaarVideoKYCPattern = lazy(() => import("../../pages/AadhaarVideoKYCPattern"));
const ConsentDeclarationPatterns = lazy(() => import("../../pages/ConsentDeclarationPatterns"));
const ConsentCapturePattern = lazy(() => import("../../pages/ConsentCapturePattern"));
const ConsentCapturePatternCode = lazy(() => import("../../pages/patterns/ConsentCapturePatternCode"));
const ConsentCaptureDemo = lazy(() => import("../../pages/ConsentCaptureDemo"));
const GuardianProxyConsentDemo = lazy(() => import("../../pages/GuardianProxyConsentDemo"));
const ConsentWithdrawalDemo = lazy(() => import("../../pages/ConsentWithdrawalDemo"));
const DataSharingConsentDemo = lazy(() => import("../../pages/DataSharingConsentDemo"));
const PrivacyNoticeDemo = lazy(() => import("../../pages/PrivacyNoticeDemo"));
const TermsAcceptanceDemo = lazy(() => import("../../pages/TermsAcceptanceDemo"));
const DeclarationBeforeSubmissionDemo = lazy(() => import("../../pages/DeclarationBeforeSubmissionDemo"));
const FeePaymentDemo = lazy(() => import("../../pages/FeePaymentDemo"));
const PaymentFailureRetryDemo = lazy(() => import("../../pages/PaymentFailureRetryDemo"));
const FormIntelligenceSystem = lazy(() => import("../../pages/FormIntelligenceSystem"));
const StateResilienceSystem = lazy(() => import("../../pages/StateResilienceSystem"));
const SearchDiscoveryPatterns = lazy(() => import("../../pages/SearchDiscoveryPatterns"));
const SearchDiscoveryOverview = lazy(() => import("../../pages/SearchDiscoveryOverview"));
const GlobalSearchPattern = lazy(() => import("../../pages/GlobalSearchPattern"));
const SearchResultsPattern = lazy(() => import("../../pages/SearchResultsPattern"));
const NoResultsPattern = lazy(() => import("../../pages/NoResultsPattern"));
const DashboardPatterns = lazy(() => import("../../pages/DashboardPatterns"));
const DashboardOverview = lazy(() => import("../../pages/DashboardOverview"));
const CitizenDashboardPattern = lazy(() => import("../../pages/CitizenDashboardPattern"));
const TaskListPattern = lazy(() => import("../../pages/TaskListPattern"));
const StatusLifecyclePatterns = lazy(() => import("../../pages/StatusLifecyclePatterns"));
const StatusLifecycleOverview = lazy(() => import("../../pages/StatusLifecycleOverview"));
const TimelineViewPattern = lazy(() => import("../../pages/TimelineViewPattern"));
const StepProgressPattern = lazy(() => import("../../pages/StepProgressPattern"));
const NotificationPatterns = lazy(() => import("../../pages/NotificationPatterns"));
const NotificationOverview = lazy(() => import("../../pages/NotificationOverview"));
const NotificationCenterPattern = lazy(() => import("../../pages/NotificationCenterPattern"));
const ActionableNotificationsPattern = lazy(() => import("../../pages/ActionableNotificationsPattern"));
const ContactSupportPatterns = lazy(() => import("../../pages/ContactSupportPatterns"));
const ContactSupportOverview = lazy(() => import("../../pages/ContactSupportOverview"));
const GeneralContactPattern = lazy(() => import("../../pages/GeneralContactPattern"));
const ServiceSupportPattern = lazy(() => import("../../pages/ServiceSupportPattern"));
const FeedbackRatingPatterns = lazy(() => import("../../pages/FeedbackRatingPatterns"));
const RateServicePattern = lazy(() => import("../../pages/RateServicePattern"));
const PostCompletionFeedbackPattern = lazy(() => import("../../pages/PostCompletionFeedbackPattern"));
const IssueReportingPattern = lazy(() => import("../../pages/IssueReportingPattern"));
const SuggestImprovementPattern = lazy(() => import("../../pages/SuggestImprovementPattern"));
const FeedbackAcknowledgmentPattern = lazy(() => import("../../pages/FeedbackAcknowledgmentPattern"));
const LocalizationPatterns = lazy(() => import("../../pages/LocalizationPatterns"));
const LanguageSwitcherPattern = lazy(() => import("../../pages/LanguageSwitcherPattern"));
const MixedLanguageFallbackPattern = lazy(() => import("../../pages/MixedLanguageFallbackPattern"));
const ContentExpansionPattern = lazy(() => import("../../pages/ContentExpansionPattern"));
const ScriptLayoutPattern = lazy(() => import("../../pages/ScriptLayoutPattern"));
const TranslationConfidencePattern = lazy(() => import("../../pages/TranslationConfidencePattern"));
const DataInputPatterns = lazy(() => import("../../pages/DataInputPatterns"));
const AddressLookupPattern = lazy(() => import("../../pages/AddressLookupPattern"));
const AutofillPattern = lazy(() => import("../../pages/AutofillPattern"));
const SmartSuggestionsPattern = lazy(() => import("../../pages/SmartSuggestionsPattern"));
const UploadExtractPattern = lazy(() => import("../../pages/UploadExtractPattern"));
const MapInputPattern = lazy(() => import("../../pages/MapInputPattern"));
const BulkDataEntryPattern = lazy(() => import("../../pages/BulkDataEntryPattern"));
const RepeatableSectionsPattern = lazy(() => import("../../pages/RepeatableSectionsPattern"));
const OperationalServicePatterns = lazy(() => import("../../pages/OperationalServicePatterns"));
const ServicePatternLibraries = lazy(() => import("../../pages/ServicePatternLibraries"));
const ApplicationSubmissionPattern = lazy(() => import("../../pages/ApplicationSubmissionPattern"));
const EligibilityScreeningPattern = lazy(() => import("../../pages/EligibilityScreeningPattern"));
const RenewalPattern = lazy(() => import("../../pages/RenewalPattern"));
const CorrectionResubmissionPattern = lazy(() => import("../../pages/CorrectionResubmissionPattern"));
const ComplaintEscalationPattern = lazy(() => import("../../pages/ComplaintEscalationPattern"));
const ApprovalIssuancePattern = lazy(() => import("../../pages/ApprovalIssuancePattern"));
const AssistedOfflineOnlinePattern = lazy(() => import("../../pages/AssistedOfflineOnlinePattern"));
const HighVolumeStatusTrackingPattern = lazy(() => import("../../pages/HighVolumeStatusTrackingPattern"));
const AppointmentBookingPattern = lazy(() => import("../../pages/AppointmentBookingPattern"));
const MultilingualGuidance = lazy(() => import("../../pages/MultilingualGuidance"));

export const patternsRoutes: RouteObject[] = [
  { path: toChildPath(ROUTE_PATHS.PATTERNS.LIBRARY), Component: PatternLibraryHub },
  { path: toChildPath(ROUTE_PATHS.PATTERNS.ROOT), Component: Patterns },

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

  { path: "patterns/payment", Component: FeePaymentDemo },
  { path: "patterns/payment/fee-payment", Component: FeePaymentDemo },
  { path: "patterns/payment/failure-retry", Component: PaymentFailureRetryDemo },

  { path: "patterns/forms", Component: FormIntelligenceSystem },
  { path: "patterns/resilience", Component: StateResilienceSystem },

  { path: "patterns/search-discovery", Component: SearchDiscoveryPatterns },
  { path: "patterns/search-discovery/overview", Component: SearchDiscoveryOverview },
  { path: "patterns/search-discovery/global-search", Component: GlobalSearchPattern },
  { path: "patterns/search-discovery/search-results", Component: SearchResultsPattern },
  { path: "patterns/search-discovery/no-results", Component: NoResultsPattern },

  { path: "patterns/dashboard", Component: DashboardPatterns },
  { path: "patterns/dashboard/overview", Component: DashboardOverview },
  { path: "patterns/dashboard/citizen-dashboard", Component: CitizenDashboardPattern },
  { path: "patterns/dashboard/task-list", Component: TaskListPattern },

  { path: "patterns/status-lifecycle", Component: StatusLifecyclePatterns },
  { path: "patterns/status-lifecycle/overview", Component: StatusLifecycleOverview },
  { path: "patterns/status-lifecycle/timeline-view", Component: TimelineViewPattern },
  { path: "patterns/status-lifecycle/step-progress", Component: StepProgressPattern },

  { path: "patterns/notifications", Component: NotificationPatterns },
  { path: "patterns/notifications/overview", Component: NotificationOverview },
  { path: "patterns/notifications/center", Component: NotificationCenterPattern },
  { path: "patterns/notifications/actionable", Component: ActionableNotificationsPattern },

  { path: "patterns/contact-support", Component: ContactSupportPatterns },
  { path: "patterns/contact-support/overview", Component: ContactSupportOverview },
  { path: "patterns/contact-support/general-contact", Component: GeneralContactPattern },
  { path: "patterns/contact-support/service-support", Component: ServiceSupportPattern },

  { path: "patterns/feedback", Component: FeedbackRatingPatterns },
  { path: "patterns/feedback/rate-service", Component: RateServicePattern },
  { path: "patterns/feedback/post-completion", Component: PostCompletionFeedbackPattern },
  { path: "patterns/feedback/issue-reporting", Component: IssueReportingPattern },
  { path: "patterns/feedback/suggest-improvement", Component: SuggestImprovementPattern },
  { path: "patterns/feedback/acknowledgment", Component: FeedbackAcknowledgmentPattern },

  { path: "patterns/localization", Component: LocalizationPatterns },
  { path: "patterns/localization/language-switcher", Component: LanguageSwitcherPattern },
  { path: "patterns/localization/mixed-language-fallback", Component: MixedLanguageFallbackPattern },
  { path: "patterns/localization/content-expansion", Component: ContentExpansionPattern },
  { path: "patterns/localization/script-layout", Component: ScriptLayoutPattern },
  { path: "patterns/localization/translation-confidence", Component: TranslationConfidencePattern },

  { path: "patterns/data-input", Component: DataInputPatterns },
  { path: "patterns/data-input/address-lookup", Component: AddressLookupPattern },
  { path: "patterns/data-input/autofill", Component: AutofillPattern },
  { path: "patterns/data-input/smart-suggestions", Component: SmartSuggestionsPattern },
  { path: "patterns/data-input/upload-extract", Component: UploadExtractPattern },
  { path: "patterns/data-input/map-input", Component: MapInputPattern },
  { path: "patterns/data-input/bulk-entry", Component: BulkDataEntryPattern },
  { path: "patterns/data-input/repeatable-sections", Component: RepeatableSectionsPattern },
  { path: "patterns/service", Component: OperationalServicePatterns },

  { path: toChildPath(ROUTE_PATHS.ARCHETYPES.ROOT), Component: ServicePatternLibraries },
  { path: toChildPath(ROUTE_PATHS.ARCHETYPES.APPLICATION), Component: ApplicationSubmissionPattern },
  { path: toChildPath(ROUTE_PATHS.ARCHETYPES.ELIGIBILITY), Component: EligibilityScreeningPattern },
  { path: toChildPath(ROUTE_PATHS.ARCHETYPES.RENEWAL), Component: RenewalPattern },
  { path: toChildPath(ROUTE_PATHS.ARCHETYPES.CORRECTION), Component: CorrectionResubmissionPattern },
  { path: toChildPath(ROUTE_PATHS.ARCHETYPES.COMPLAINT), Component: ComplaintEscalationPattern },
  { path: toChildPath(ROUTE_PATHS.ARCHETYPES.APPROVAL), Component: ApprovalIssuancePattern },
  { path: toChildPath(ROUTE_PATHS.ARCHETYPES.ASSISTED), Component: AssistedOfflineOnlinePattern },
  { path: toChildPath(ROUTE_PATHS.ARCHETYPES.TRACKING), Component: HighVolumeStatusTrackingPattern },
  { path: toChildPath(ROUTE_PATHS.ARCHETYPES.APPOINTMENT), Component: AppointmentBookingPattern },

  { path: toChildPath(ROUTE_PATHS.SYSTEMS.MULTILINGUAL), Component: MultilingualGuidance },
  { path: toChildPath(ROUTE_PATHS.SYSTEMS.FORM_INTELLIGENCE), Component: FormIntelligenceSystem },
  { path: toChildPath(ROUTE_PATHS.SYSTEMS.STATE_RESILIENCE), Component: StateResilienceSystem },
];
