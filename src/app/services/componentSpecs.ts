// ============================================================================
// UX4G COMPONENT SPECIFICATIONS
// ============================================================================
// Framework-agnostic component specifications for React and Angular
// Defines props, inputs/outputs, variants, and states
//
// Last Updated: April 2026
// Version: 1.0.0
// ============================================================================

import type { ReactNode, MouseEvent, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';

// Stub for Angular EventEmitter (used in Angular output specs only)
interface EventEmitter<T> { emit(value?: T): void; subscribe(fn: (v: T) => void): void; }

// ==================== BUTTON COMPONENT ====================

export interface ButtonProps {
  // Content
  children: ReactNode;
  
  // Variants
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // States
  disabled?: boolean;
  loading?: boolean;
  
  // Styling
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  
  // Behavior
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export const ButtonVariants = {
  PRIMARY: 'primary',      // Navy blue, high emphasis
  SECONDARY: 'secondary',  // White with border, medium emphasis
  TERTIARY: 'tertiary',    // Text only, low emphasis
  DANGER: 'danger',        // Red, destructive actions
  GHOST: 'ghost',          // Transparent, minimal
  LINK: 'link'            // Link-styled button
} as const;

export const ButtonSizes = {
  SM: 'sm',   // Small: px-3 py-1.5 text-xs
  MD: 'md',   // Medium: px-4 py-2 text-sm
  LG: 'lg',   // Large: px-6 py-3 text-base
  XL: 'xl'    // Extra Large: px-8 py-4 text-lg
} as const;

export const ButtonStates = {
  DEFAULT: 'default',
  HOVER: 'hover',
  ACTIVE: 'active',
  FOCUS: 'focus',
  DISABLED: 'disabled',
  LOADING: 'loading'
} as const;

// Angular equivalent
export interface ButtonAngular {
  inputs: {
    variant: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost' | 'link';
    size: 'sm' | 'md' | 'lg' | 'xl';
    disabled: boolean;
    loading: boolean;
    fullWidth: boolean;
    iconLeft: string;
    iconRight: string;
    type: 'button' | 'submit' | 'reset';
    ariaLabel: string;
  };
  outputs: {
    clicked: EventEmitter<MouseEvent>;
  };
}

// ==================== FORM FIELD COMPONENT ====================

export interface FormFieldProps {
  // Content
  label: string;
  children: ReactNode;
  
  // Helper text
  helperText?: string;
  
  // Validation
  error?: string;
  success?: boolean;
  warning?: string;
  
  // States
  required?: boolean;
  disabled?: boolean;
  
  // Layout
  inline?: boolean;
  
  // Accessibility
  id?: string;
  ariaDescribedBy?: string;
}

export const FormFieldStates = {
  DEFAULT: 'default',
  FOCUS: 'focus',
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning',
  DISABLED: 'disabled'
} as const;

// Angular equivalent
export interface FormFieldAngular {
  inputs: {
    label: string;
    helperText: string;
    error: string;
    success: boolean;
    warning: string;
    required: boolean;
    disabled: boolean;
    inline: boolean;
  };
  outputs: {};
}

// ==================== INPUT COMPONENT ====================

export interface InputProps {
  // Value
  value: string;
  defaultValue?: string;
  
  // Variants
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'url' | 'search';
  size?: 'sm' | 'md' | 'lg';
  
  // States
  disabled?: boolean;
  readOnly?: boolean;
  
  // Content
  placeholder?: string;
  
  // Validation
  error?: boolean;
  success?: boolean;
  
  // Behavior
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  
  // Constraints
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaInvalid?: boolean;
  ariaRequired?: boolean;
  
  // Icons
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const InputTypes = {
  TEXT: 'text',
  EMAIL: 'email',
  TEL: 'tel',
  PASSWORD: 'password',
  NUMBER: 'number',
  URL: 'url',
  SEARCH: 'search'
} as const;

export const InputStates = {
  DEFAULT: 'default',
  FOCUS: 'focus',
  FILLED: 'filled',
  ERROR: 'error',
  SUCCESS: 'success',
  DISABLED: 'disabled',
  READONLY: 'readonly'
} as const;

// Angular equivalent
export interface InputAngular {
  inputs: {
    value: string;
    type: string;
    size: string;
    disabled: boolean;
    readOnly: boolean;
    placeholder: string;
    error: boolean;
    success: boolean;
    maxLength: number;
    iconLeft: string;
    iconRight: string;
  };
  outputs: {
    valueChange: EventEmitter<string>;
    blur: EventEmitter<FocusEvent>;
    focus: EventEmitter<FocusEvent>;
  };
}

// ==================== ALERT COMPONENT ====================

export interface AlertProps {
  // Content
  children: ReactNode;
  title?: string;
  
  // Variants
  variant?: 'info' | 'success' | 'warning' | 'error';
  
  // Behavior
  dismissible?: boolean;
  onDismiss?: () => void;
  
  // Styling
  icon?: ReactNode;
  
  // Accessibility
  role?: 'alert' | 'status';
  ariaLive?: 'polite' | 'assertive' | 'off';
}

export const AlertVariants = {
  INFO: 'info',        // Blue - informational
  SUCCESS: 'success',  // Green - success confirmation
  WARNING: 'warning',  // Yellow - warning message
  ERROR: 'error'      // Red - error message
} as const;

export const AlertStates = {
  VISIBLE: 'visible',
  DISMISSING: 'dismissing',
  DISMISSED: 'dismissed'
} as const;

// Angular equivalent
export interface AlertAngular {
  inputs: {
    title: string;
    variant: 'info' | 'success' | 'warning' | 'error';
    dismissible: boolean;
    icon: string;
    role: string;
    ariaLive: string;
  };
  outputs: {
    dismissed: EventEmitter<void>;
  };
}

// ==================== MODAL COMPONENT ====================

export interface ModalProps {
  // State
  open: boolean;
  onClose: () => void;
  
  // Content
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  
  // Variants
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  // Behavior
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  preventScroll?: boolean;
  
  // Accessibility
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
}

export const ModalSizes = {
  SM: 'sm',    // 400px
  MD: 'md',    // 600px
  LG: 'lg',    // 800px
  XL: 'xl',    // 1200px
  FULL: 'full' // Full screen
} as const;

export const ModalStates = {
  CLOSED: 'closed',
  OPENING: 'opening',
  OPEN: 'open',
  CLOSING: 'closing'
} as const;

// Angular equivalent
export interface ModalAngular {
  inputs: {
    open: boolean;
    title: string;
    size: string;
    closeOnOverlayClick: boolean;
    closeOnEscape: boolean;
  };
  outputs: {
    closed: EventEmitter<void>;
  };
}

// ==================== TABS COMPONENT ====================

export interface TabsProps {
  // Content
  tabs: Array<{
    id: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
  }>;
  
  // State
  activeTab?: string;
  defaultActiveTab?: string;
  
  // Variants
  variant?: 'default' | 'pills' | 'underline';
  
  // Behavior
  onChange?: (tabId: string) => void;
  
  // Layout
  fullWidth?: boolean;
  
  // Accessibility
  ariaLabel?: string;
}

export const TabsVariants = {
  DEFAULT: 'default',    // Standard tabs
  PILLS: 'pills',        // Pill-style tabs
  UNDERLINE: 'underline' // Underline indicator
} as const;

export const TabStates = {
  DEFAULT: 'default',
  ACTIVE: 'active',
  HOVER: 'hover',
  FOCUS: 'focus',
  DISABLED: 'disabled'
} as const;

// Angular equivalent
export interface TabsAngular {
  inputs: {
    tabs: Array<{ id: string; label: string; disabled: boolean }>;
    activeTab: string;
    variant: string;
    fullWidth: boolean;
  };
  outputs: {
    tabChanged: EventEmitter<string>;
  };
}

// ==================== BADGE COMPONENT ====================

export interface BadgeProps {
  // Content
  children: ReactNode;
  
  // Variants
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  
  // Styling
  dot?: boolean;
  outline?: boolean;
  
  // Behavior
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const BadgeVariants = {
  DEFAULT: 'default',  // Gray
  PRIMARY: 'primary',  // Navy blue
  SUCCESS: 'success',  // Green
  WARNING: 'warning',  // Yellow
  ERROR: 'error',      // Red
  INFO: 'info'        // Blue
} as const;

export const BadgeSizes = {
  SM: 'sm',  // Small
  MD: 'md',  // Medium
  LG: 'lg'   // Large
} as const;

// Angular equivalent
export interface BadgeAngular {
  inputs: {
    variant: string;
    size: string;
    dot: boolean;
    outline: boolean;
    dismissible: boolean;
  };
  outputs: {
    dismissed: EventEmitter<void>;
  };
}

// ==================== PROGRESS STEPS COMPONENT ====================

export interface ProgressStepsProps {
  // Content
  steps: Array<{
    number: number;
    label: string;
    description?: string;
  }>;
  
  // State
  currentStep: number;
  
  // Variants
  variant?: 'default' | 'numbered' | 'dots';
  orientation?: 'horizontal' | 'vertical';
  
  // Behavior
  clickable?: boolean;
  onStepClick?: (stepNumber: number) => void;
}

export const ProgressStepsVariants = {
  DEFAULT: 'default',  // With icons
  NUMBERED: 'numbered', // Numbers only
  DOTS: 'dots'         // Dot indicators
} as const;

export const StepStates = {
  UPCOMING: 'upcoming',
  CURRENT: 'current',
  COMPLETED: 'completed',
  ERROR: 'error'
} as const;

// Angular equivalent
export interface ProgressStepsAngular {
  inputs: {
    steps: Array<{ number: number; label: string; description: string }>;
    currentStep: number;
    variant: string;
    orientation: string;
    clickable: boolean;
  };
  outputs: {
    stepClicked: EventEmitter<number>;
  };
}

// ==================== LOADING SPINNER COMPONENT ====================

export interface LoadingSpinnerProps {
  // Variants
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'bars';
  
  // Content
  text?: string;
  
  // Styling
  color?: 'primary' | 'secondary' | 'white';
  
  // Layout
  centered?: boolean;
  fullScreen?: boolean;
  
  // Accessibility
  ariaLabel?: string;
}

export const LoadingVariants = {
  SPINNER: 'spinner',  // Circular spinner
  DOTS: 'dots',        // Three dots
  BARS: 'bars'         // Vertical bars
} as const;

// Angular equivalent
export interface LoadingSpinnerAngular {
  inputs: {
    size: string;
    variant: string;
    text: string;
    color: string;
    centered: boolean;
    fullScreen: boolean;
  };
  outputs: {};
}

// ==================== CARD COMPONENT ====================

export interface CardProps {
  // Content
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  
  // Variants
  variant?: 'default' | 'outlined' | 'elevated' | 'filled';
  
  // Styling
  padding?: 'none' | 'sm' | 'md' | 'lg';
  
  // Behavior
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

export const CardVariants = {
  DEFAULT: 'default',    // Standard card
  OUTLINED: 'outlined',  // Border only
  ELEVATED: 'elevated',  // With shadow
  FILLED: 'filled'      // Background color
} as const;

export const CardStates = {
  DEFAULT: 'default',
  HOVER: 'hover',
  ACTIVE: 'active',
  DISABLED: 'disabled'
} as const;

// Angular equivalent
export interface CardAngular {
  inputs: {
    variant: string;
    padding: string;
    hoverable: boolean;
    clickable: boolean;
  };
  outputs: {
    clicked: EventEmitter<void>;
  };
}

// ==================== BREADCRUMB COMPONENT ====================

export interface BreadcrumbProps {
  // Content
  items: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
  
  // Styling
  separator?: ReactNode;
  
  // Behavior
  onNavigate?: (href: string) => void;
  
  // Accessibility
  ariaLabel?: string;
}

// Angular equivalent
export interface BreadcrumbAngular {
  inputs: {
    items: Array<{ label: string; href: string; current: boolean }>;
    separator: string;
  };
  outputs: {
    navigated: EventEmitter<string>;
  };
}

// ==================== TOAST NOTIFICATION COMPONENT ====================

export interface ToastProps {
  // Content
  title: string;
  message?: string;
  
  // Variants
  variant?: 'info' | 'success' | 'warning' | 'error';
  
  // Behavior
  duration?: number;
  dismissible?: boolean;
  onDismiss?: () => void;
  
  // Layout
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  
  // Styling
  icon?: ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const ToastPositions = {
  TOP_LEFT: 'top-left',
  TOP_CENTER: 'top-center',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_RIGHT: 'bottom-right'
} as const;

export const ToastStates = {
  ENTERING: 'entering',
  VISIBLE: 'visible',
  EXITING: 'exiting',
  DISMISSED: 'dismissed'
} as const;

// Angular equivalent
export interface ToastAngular {
  inputs: {
    title: string;
    message: string;
    variant: string;
    duration: number;
    dismissible: boolean;
    position: string;
  };
  outputs: {
    dismissed: EventEmitter<void>;
    actionClicked: EventEmitter<void>;
  };
}

// ==================== CHECKBOX COMPONENT ====================

export interface CheckboxProps {
  // State
  checked: boolean;
  indeterminate?: boolean;
  
  // Content
  label?: string;
  
  // States
  disabled?: boolean;
  
  // Behavior
  onChange?: (checked: boolean) => void;
  
  // Variants
  size?: 'sm' | 'md' | 'lg';
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export const CheckboxStates = {
  UNCHECKED: 'unchecked',
  CHECKED: 'checked',
  INDETERMINATE: 'indeterminate',
  DISABLED_UNCHECKED: 'disabled-unchecked',
  DISABLED_CHECKED: 'disabled-checked'
} as const;

// Angular equivalent
export interface CheckboxAngular {
  inputs: {
    checked: boolean;
    indeterminate: boolean;
    label: string;
    disabled: boolean;
    size: string;
  };
  outputs: {
    checkedChange: EventEmitter<boolean>;
  };
}

// ==================== RADIO COMPONENT ====================

export interface RadioProps {
  // State
  value: string;
  checked: boolean;
  
  // Content
  label?: string;
  
  // Group
  name: string;
  
  // States
  disabled?: boolean;
  
  // Behavior
  onChange?: (value: string) => void;
  
  // Variants
  size?: 'sm' | 'md' | 'lg';
}

export const RadioStates = {
  UNCHECKED: 'unchecked',
  CHECKED: 'checked',
  DISABLED_UNCHECKED: 'disabled-unchecked',
  DISABLED_CHECKED: 'disabled-checked'
} as const;

// Angular equivalent
export interface RadioAngular {
  inputs: {
    value: string;
    checked: boolean;
    label: string;
    name: string;
    disabled: boolean;
    size: string;
  };
  outputs: {
    valueChange: EventEmitter<string>;
  };
}

// ==================== SELECT COMPONENT ====================

export interface SelectProps {
  // Value
  value: string;
  
  // Options
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  
  // Content
  placeholder?: string;
  
  // States
  disabled?: boolean;
  
  // Validation
  error?: boolean;
  
  // Behavior
  onChange?: (value: string) => void;
  
  // Variants
  size?: 'sm' | 'md' | 'lg';
  
  // Features
  searchable?: boolean;
  clearable?: boolean;
  multiple?: boolean;
}

export const SelectStates = {
  DEFAULT: 'default',
  OPEN: 'open',
  FOCUS: 'focus',
  ERROR: 'error',
  DISABLED: 'disabled'
} as const;

// Angular equivalent
export interface SelectAngular {
  inputs: {
    value: string;
    options: Array<{ value: string; label: string; disabled: boolean }>;
    placeholder: string;
    disabled: boolean;
    error: boolean;
    size: string;
    searchable: boolean;
    clearable: boolean;
    multiple: boolean;
  };
  outputs: {
    valueChange: EventEmitter<string>;
  };
}

// ==================== EXPORTS ====================

export const ComponentSpecs = {
  Button: {
    props: {} as ButtonProps,
    variants: ButtonVariants,
    sizes: ButtonSizes,
    states: ButtonStates,
    angular: {} as ButtonAngular
  },
  FormField: {
    props: {} as FormFieldProps,
    states: FormFieldStates,
    angular: {} as FormFieldAngular
  },
  Input: {
    props: {} as InputProps,
    types: InputTypes,
    states: InputStates,
    angular: {} as InputAngular
  },
  Alert: {
    props: {} as AlertProps,
    variants: AlertVariants,
    states: AlertStates,
    angular: {} as AlertAngular
  },
  Modal: {
    props: {} as ModalProps,
    sizes: ModalSizes,
    states: ModalStates,
    angular: {} as ModalAngular
  },
  Tabs: {
    props: {} as TabsProps,
    variants: TabsVariants,
    states: TabStates,
    angular: {} as TabsAngular
  },
  Badge: {
    props: {} as BadgeProps,
    variants: BadgeVariants,
    sizes: BadgeSizes,
    angular: {} as BadgeAngular
  },
  ProgressSteps: {
    props: {} as ProgressStepsProps,
    variants: ProgressStepsVariants,
    states: StepStates,
    angular: {} as ProgressStepsAngular
  },
  LoadingSpinner: {
    props: {} as LoadingSpinnerProps,
    variants: LoadingVariants,
    angular: {} as LoadingSpinnerAngular
  },
  Card: {
    props: {} as CardProps,
    variants: CardVariants,
    states: CardStates,
    angular: {} as CardAngular
  },
  Breadcrumb: {
    props: {} as BreadcrumbProps,
    angular: {} as BreadcrumbAngular
  },
  Toast: {
    props: {} as ToastProps,
    positions: ToastPositions,
    states: ToastStates,
    angular: {} as ToastAngular
  },
  Checkbox: {
    props: {} as CheckboxProps,
    states: CheckboxStates,
    angular: {} as CheckboxAngular
  },
  Radio: {
    props: {} as RadioProps,
    states: RadioStates,
    angular: {} as RadioAngular
  },
  Select: {
    props: {} as SelectProps,
    states: SelectStates,
    angular: {} as SelectAngular
  }
};

export default ComponentSpecs;
