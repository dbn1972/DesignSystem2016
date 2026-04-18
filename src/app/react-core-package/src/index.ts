/**
 * UX4G React Core Components
 * React component library for Indian Government Design System
 *
 * @packageDocumentation
 */

// Form Components
export { Button } from './components/Button';
export { Input } from './components/Input';
export { Checkbox } from './components/Checkbox';
export { Radio } from './components/Radio';
export { Select } from './components/Select';
export { Textarea } from './components/Textarea';
export { Field } from './components/Field';
export { Label } from './components/Label';
export { HintText } from './components/HintText';
export { ErrorText } from './components/ErrorText';

// Display Components
export { Card } from './components/Card';
export { Badge } from './components/Badge';
export { Avatar } from './components/Avatar';
export { Table } from './components/Table';

// Navigation Components
export { Tabs } from './components/Tabs';
export { Breadcrumb } from './components/Breadcrumb';
export { Pagination } from './components/Pagination';

// Overlay Components
export { Dialog } from './components/Dialog';
export { Tooltip } from './components/Tooltip';
export { Drawer } from './components/Drawer';
export { Popover } from './components/Popover';

// Feedback Components
export { Alert } from './components/Alert';
export { Toast } from './components/Toast';
export { Progress } from './components/Progress';
export { Spinner } from './components/Spinner';

// Specialized Components
export { Accordion } from './components/Accordion';
export { Rating } from './components/Rating';
export { Stepper } from './components/Stepper';
export { Timeline } from './components/Timeline';
export { OTPInput } from './components/OTPInput';

// Advanced Components
export { DatePicker } from './components/DatePicker';
export { FileUpload } from './components/FileUpload';
export { Autocomplete } from './components/Autocomplete';
export { SearchBar } from './components/SearchBar';
export { Menu } from './components/Menu';

// Type Exports - Form Components
export type { ButtonProps } from './components/Button';
export type { InputProps } from './components/Input';
export type { CheckboxProps } from './components/Checkbox';
export type { RadioProps } from './components/Radio';
export type { SelectProps } from './components/Select';
export type { TextareaProps } from './components/Textarea';
export type { FieldProps } from './components/Field';
export type { LabelProps } from './components/Label';
export type { HintTextProps } from './components/HintText';
export type { ErrorTextProps } from './components/ErrorText';

// Type Exports - Display Components
export type { CardProps } from './components/Card';
export type { BadgeProps } from './components/Badge';
export type { AvatarProps } from './components/Avatar';
export type { TableProps } from './components/Table';

// Type Exports - Navigation Components
export type { TabsProps } from './components/Tabs';
export type { BreadcrumbProps } from './components/Breadcrumb';
export type { PaginationProps } from './components/Pagination';

// Type Exports - Overlay Components
export type { DialogProps } from './components/Dialog';
export type { TooltipProps } from './components/Tooltip';
export type { DrawerProps } from './components/Drawer';
export type { PopoverProps } from './components/Popover';

// Type Exports - Feedback Components
export type { AlertProps } from './components/Alert';
export type { ToastProps } from './components/Toast';
export type { ProgressProps } from './components/Progress';
export type { SpinnerProps } from './components/Spinner';

// Type Exports - Specialized Components
export type { AccordionProps } from './components/Accordion';
export type { RatingProps } from './components/Rating';
export type { StepperProps } from './components/Stepper';
export type { TimelineProps } from './components/Timeline';
export type { OTPInputProps } from './components/OTPInput';

// Type Exports - Advanced Components
export type { DatePickerProps } from './components/DatePicker';
export type { FileUploadProps } from './components/FileUpload';
export type { AutocompleteProps } from './components/Autocomplete';
export type { SearchBarProps } from './components/SearchBar';
export type { MenuProps } from './components/Menu';

// Common Types
export type {
  ComponentSize,
  ComponentVariant,
  StatusVariant,
  ComponentMaturity,
  ComponentState,
  ComponentEventName,
  ComponentSlotName,
  BaseComponentProps,
  InteractiveComponentProps,
  FormFieldProps,
  LoadingStateProps,
  ControlledValueProps,
  DescribableProps
} from './types/common';

export {
  COMPONENT_SIZES,
  COMPONENT_VARIANTS,
  STATUS_VARIANTS
} from './types/common';

export {
  REACT_COMPONENT_MATURITY
} from '../../component-maturity';

// Utilities
export { cn } from './utils/cn';

// Icon System
export { Icon } from './icons';
export {
  AccessibilityIcon,
  AddUserIcon,
  AdminIcon,
  ApprovalIcon,
  AlertOctagonIcon,
  ApplicationIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  AttachmentIcon,
  CaseIcon,
  CalendarIcon,
  CertificateIcon,
  ChartIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ClockIcon,
  CloseIcon,
  CompletedIcon,
  ContrastIcon,
  CopyIcon,
  DashboardIcon,
  DeleteIcon,
  DocumentIcon,
  DownloadIcon,
  EditIcon,
  ErrorIcon,
  ExportIcon,
  ExternalLinkIcon,
  FileCheckIcon,
  FlagIcon,
  FilterIcon,
  FingerprintIcon,
  FolderIcon,
  FocusIcon,
  FontSizeIcon,
  GridIcon,
  HelpIcon,
  HideIcon,
  HomeIcon,
  IdCardIcon,
  ImageIcon,
  InfoIcon,
  ImportIcon,
  InReviewIcon,
  KeyboardIcon,
  KeyIcon,
  LanguageIcon,
  LinkIcon,
  ListIcon,
  LocationIcon,
  LockIcon,
  MailIcon,
  MenuIcon,
  MinusIcon,
  MinusCircleIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  NotificationIcon,
  PendingIcon,
  PauseCircleIcon,
  PhoneIcon,
  PlusIcon,
  PlusCircleIcon,
  PrintIcon,
  RefreshIcon,
  ReceiptIcon,
  RedoIcon,
  RejectionIcon,
  RemoveUserIcon,
  SaveIcon,
  ScreenReaderIcon,
  SearchIcon,
  SendIcon,
  ServerIcon,
  ServiceIcon,
  SettingsIcon,
  ShieldCheckIcon,
  ShareIcon,
  ShieldIcon,
  SidebarLeftIcon,
  SortIcon,
  SortAscIcon,
  SortDescIcon,
  StampIcon,
  TableIcon,
  UndoIcon,
  UnlockIcon,
  UploadIcon,
  UserIcon,
  UserCheckIcon,
  UsersIcon,
  VisibilityIcon,
  WarningIcon,
  UX4G_ICONS,
  UX4G_ICON_ALIASES,
  UX4G_ICON_METADATA,
  UX4G_ICON_SVGS,
  UX4G_ICON_SIZES
} from './icons';
export type {
  UX4GIconAliasName,
  UX4GIconCategory,
  UX4GIconMetadata,
  UX4GIconName,
  UX4GIconProps,
  UX4GIconSize,
  UX4GIconSizeToken
} from './icons';
