/**
 * UX4G Web Components
 * Framework-agnostic Web Components for Government of India Design System
 * 
 * @package @ux4g/web-components
 * @version 1.0.0
 */

// Base classes
export { UX4GElement, UX4GFormElement } from './base/UX4GElement';
export * from './component-contract';
export { WEB_COMPONENT_MATURITY } from '../../component-maturity';

// Utilities
export * from './utils/helpers';

// Components - Form Elements
export { UX4GButton } from './components/button/ux4g-button';
export { UX4GInput } from './components/input/ux4g-input';
export { UX4GCheckbox } from './components/checkbox/ux4g-checkbox';
export { UX4GRadio } from './components/radio/ux4g-radio';
export { UX4GSelect } from './components/select/ux4g-select';
export { UX4GSwitch } from './components/switch/ux4g-switch';
export { UX4GTextarea } from './components/textarea/ux4g-textarea';
export { UX4GAutocomplete } from './components/autocomplete/ux4g-autocomplete';
export { UX4GDatePicker } from './components/date-picker/ux4g-date-picker';
export { UX4GFileUpload } from './components/file-upload/ux4g-file-upload';
export { UX4GSegmentedControl } from './components/segmented-control/ux4g-segmented-control';
export { UX4GOTPInput } from './components/otp-input/ux4g-otp-input';
export { UX4GAadhaarInput } from './components/aadhaar-input/ux4g-aadhaar-input';
export { UX4GPANInput } from './components/pan-input/ux4g-pan-input';
export { UX4GCAPTCHA } from './components/captcha/ux4g-captcha';
export { UX4GSlider } from './components/slider/ux4g-slider';
export { UX4GRating } from './components/rating/ux4g-rating';
export { UX4GColorPicker } from './components/color-picker/ux4g-color-picker';
export { UX4GSearch } from './components/search/ux4g-search';
export { UX4GChipInput } from './components/chip-input/ux4g-chip-input';

// Components - Form Composition
export { UX4GField } from './components/field/ux4g-field';
export { UX4GLabel } from './components/label/ux4g-label';
export { UX4GHintText } from './components/hint-text/ux4g-hint-text';
export { UX4GErrorText } from './components/error-text/ux4g-error-text';

// Components - Feedback
export { UX4GAlert } from './components/alert/ux4g-alert';
export { UX4GBadge } from './components/badge/ux4g-badge';
export { UX4GProgress } from './components/progress/ux4g-progress';
export { UX4GSpinner } from './components/spinner/ux4g-spinner';
export { UX4GToast } from './components/toast/ux4g-toast';
export { UX4GModal } from './components/modal/ux4g-modal';
export { UX4GDialog } from './components/dialog/ux4g-dialog';
export { UX4GSkeleton } from './components/skeleton/ux4g-skeleton';
export { UX4GPopover } from './components/popover/ux4g-popover';
export { UX4GNotification } from './components/notification/ux4g-notification';
export { UX4GFeedbackRating } from './components/feedback-rating/ux4g-feedback-rating';
export { UX4GResult } from './components/result/ux4g-result';

// Components - Data Display
export { UX4GCard } from './components/card/ux4g-card';
export { UX4GTooltip } from './components/tooltip/ux4g-tooltip';
export { UX4GAvatar } from './components/avatar/ux4g-avatar';
export { UX4GTag } from './components/tag/ux4g-tag';
export { UX4GDivider } from './components/divider/ux4g-divider';
export { UX4GTimeline, UX4GTimelineItem } from './components/timeline/ux4g-timeline';
export { UX4GTable } from './components/table/ux4g-table';
export { UX4GList, UX4GListItem } from './components/list/ux4g-list';
export { UX4GEmptyState } from './components/empty-state/ux4g-empty-state';
export { UX4GStatistic } from './components/statistic/ux4g-statistic';
export { UX4GDescriptionList, UX4GDescriptionItem } from './components/description-list/ux4g-description-list';
export { UX4GCodeBlock } from './components/code-block/ux4g-code-block';
export { UX4GTreeView } from './components/tree-view/ux4g-tree-view';
export { UX4GApplicationTracker } from './components/application-tracker/ux4g-application-tracker';
export { UX4GQRCode } from './components/qr-code/ux4g-qr-code';
export { UX4GCalendar } from './components/calendar/ux4g-calendar';

// Components - Navigation
export { UX4GTabs, UX4GTabItem } from './components/tabs/ux4g-tabs';
export { UX4GAccordion, UX4GAccordionItem } from './components/accordion/ux4g-accordion';
export { UX4GBreadcrumb, UX4GBreadcrumbItem } from './components/breadcrumb/ux4g-breadcrumb';
export { UX4GPagination } from './components/pagination/ux4g-pagination';
export { UX4GDropdown, UX4GDropdownItem } from './components/dropdown/ux4g-dropdown';
export { UX4GDrawer } from './components/drawer/ux4g-drawer';
export { UX4GMenu, UX4GMenuItem } from './components/menu/ux4g-menu';
export { UX4GStepper, UX4GStep } from './components/stepper/ux4g-stepper';
export { UX4GBackToTop } from './components/back-to-top/ux4g-back-to-top';
export { UX4GHeader } from './components/header/ux4g-header';
export { UX4GFooter } from './components/footer/ux4g-footer';

// Components - Layout
export { UX4GContainer } from './components/container/ux4g-container';
export { UX4GGrid } from './components/grid/ux4g-grid';
export { UX4GStack } from './components/stack/ux4g-stack';
export { UX4GSpacer } from './components/spacer/ux4g-spacer';
export { UX4GFlex } from './components/flex/ux4g-flex';
export { UX4GCenter } from './components/center/ux4g-center';
export { UX4GAspectRatio } from './components/aspect-ratio/ux4g-aspect-ratio';
export { UX4GShowHide } from './components/show-hide/ux4g-show-hide';
export { UX4GSection } from './components/section/ux4g-section';

// Components - Utilities
export { UX4GLanguageSelector } from './components/language-selector/ux4g-language-selector';

// ── Service Components ──────────────────────────────────────────────────────
// Service-level compositions that mirror React service implementations.
// These use the shared service contract for validation, field definitions,
// and event vocabulary.

export * from './services/service-contract';
export { UX4GServiceHeader } from './services/ux4g-service-header';
export { UX4GServiceFooter } from './services/ux4g-service-footer';
export { UX4GSignInService } from './services/ux4g-sign-in-service';
export { UX4GSignUpService } from './services/ux4g-sign-up-service';
export { UX4GOtpVerifyService } from './services/ux4g-otp-verify-service';
export { UX4GForgotPasswordService } from './services/ux4g-forgot-password-service';
export { UX4GAuthStatusService } from './services/ux4g-auth-status-service';
export { UX4GEligibilityService } from './services/ux4g-eligibility-service';
export { UX4GApplicationStartService } from './services/ux4g-application-start-service';
export { UX4GPersonalFormService } from './services/ux4g-personal-form-service';
export { UX4GAddressFormService } from './services/ux4g-address-form-service';
export { UX4GAdditionalFormService } from './services/ux4g-additional-form-service';
export { UX4GFormReviewService } from './services/ux4g-form-review-service';
export { UX4GDocumentUploadService } from './services/ux4g-document-upload-service';
export { UX4GReviewSummaryService } from './services/ux4g-review-summary-service';
export { UX4GDeclarationService } from './services/ux4g-declaration-service';
export { UX4GPaymentSummaryService } from './services/ux4g-payment-summary-service';
export { UX4GPaymentReceiptService } from './services/ux4g-payment-receipt-service';
export { UX4GStatusTrackerService } from './services/ux4g-status-tracker-service';
export { UX4GUserProfileService } from './services/ux4g-user-profile-service';

// ── Certificate Flow Pages ──────────────────────────────────────────────────
// 31 certificate-specific pages composing the reusable service components.
export { UX4GCertDemo } from './services/certificate-flow/cert-demo';
import './services/certificate-flow/cert-pages';
import './services/certificate-flow/cert-unique-pages';

/**
 * Auto-register all components
 * Call this to register all UX4G components at once
 */
export function registerAll(): void {
  // Components are auto-registered when imported
  // This function is a no-op but provided for convenience
  console.info('UX4G Web Components registered - 73 components available');
}

// Auto-register on import (optional)
if (typeof window !== 'undefined') {
  registerAll();
}
