/**
 * Public API Surface of @ux4g/angular-core
 */

// Types
export * from './types/common.types';

// Utils
export { classNames, bemClass, ux4gClass } from './utils/class-names';

// Form Components
export { ButtonComponent } from './lib/button';
export { InputComponent } from './lib/input';
export { AlertComponent } from './lib/alert';
export { SelectComponent, SelectOption, SelectOptGroup } from './lib/select';
export { CheckboxComponent } from './lib/checkbox';
export { RadioComponent, RadioGroupComponent } from './lib/radio';
export { TextareaComponent } from './lib/textarea';
export { FieldComponent } from './lib/field';
export { LabelComponent } from './lib/label';
export { HintTextComponent } from './lib/hint-text';
export { ErrorTextComponent } from './lib/error-text';
export { SwitchComponent } from './lib/switch';
export { OtpInputComponent } from './lib/otp-input';
export { DatePickerComponent } from './lib/date-picker';
export { FileUploadComponent } from './lib/file-upload';
export { AutocompleteComponent } from './lib/autocomplete';

// Government-Specific Form Components (Batch 9)
export { SegmentedControlComponent } from './lib/segmented-control';
export { AadhaarInputComponent } from './lib/aadhaar-input';
export { PanInputComponent } from './lib/pan-input';
export { AddressAutocompleteIndiaComponent } from './lib/address-autocomplete-india';
export { CaptchaComponent } from './lib/captcha';

// Feedback Components
export { BadgeComponent } from './lib/badge';
export { ToastContainerComponent, ToastService, Toast } from './lib/toast';
export { ProgressComponent } from './lib/progress';
export { SpinnerComponent } from './lib/spinner';
export { StatusTagComponent } from './lib/status-tag';

// Navigation Components
export { BreadcrumbComponent, BreadcrumbItem } from './lib/breadcrumb';
export { PaginationComponent } from './lib/pagination';
export { TabsComponent, TabPanelComponent } from './lib/tabs';
export { MenuComponent, MenuItem } from './lib/menu';
export { DrawerComponent } from './lib/drawer';
export { StepperComponent, Step } from './lib/stepper';
export { AccordionComponent, AccordionItemComponent } from './lib/accordion';
export { SearchBarComponent } from './lib/search-bar';
export { HeaderComponent } from './lib/header';
export { FooterComponent } from './lib/footer';
export { DropdownComponent } from './lib/dropdown';
export { BackToTopComponent } from './lib/back-to-top';

// Data Display Components
export { AvatarComponent } from './lib/avatar';
export { TagComponent } from './lib/tag';
export { StatisticComponent } from './lib/statistic';
export { TimelineComponent, TimelineItem } from './lib/timeline';
export { RatingComponent } from './lib/rating';

// Display Utilities (Batch 11)
export { ListComponent, ListItem } from './lib/list';
export { DescriptionListComponent, DescriptionItem } from './lib/description-list';
export { EmptyStateComponent } from './lib/empty-state';
export { CodeBlockComponent } from './lib/code-block';
export { TreeViewComponent, TreeNode } from './lib/tree-view';

// Layout Components
export { CardComponent, CardHeaderComponent, CardContentComponent, CardFooterComponent } from './lib/card';
export { TableComponent, TableColumn, TableSortEvent } from './lib/table';
export { DividerComponent } from './lib/divider';
export { StackComponent } from './lib/stack';
export { ContainerComponent } from './lib/container';
export { SkeletonComponent } from './lib/skeleton';
export { GridComponent } from './lib/grid';
export { SpacerComponent } from './lib/spacer';

// Layout Utilities (Batch 12)
export { FlexComponent } from './lib/flex';
export { CenterComponent } from './lib/center';
export { AspectRatioComponent } from './lib/aspect-ratio';
export { ShowHideComponent } from './lib/show-hide';
export { SectionComponent } from './lib/section';

// Overlay Components
export { DialogComponent, DialogContentComponent, DialogFooterComponent } from './lib/dialog';
export { TooltipDirective } from './lib/tooltip';
export { PopoverComponent } from './lib/popover';

// Advanced Display Components (Batch 13 & 14)
export { DataGridComponent, DataGridColumn } from './lib/data-grid';
export { QrCodeComponent } from './lib/qr-code';
export { ApplicationTrackerComponent, TrackerStage } from './lib/application-tracker';
export { DocumentViewerComponent } from './lib/document-viewer';
export { ChartLibraryComponent, ChartData } from './lib/chart-library';
export { CalendarSchedulerComponent, TimeSlot } from './lib/calendar-scheduler';
export { FeedbackRatingComponent } from './lib/feedback-rating';
export { DigitalSignatureComponent } from './lib/digital-signature';
export { LanguageSelectorComponent, Language } from './lib/language-selector';
