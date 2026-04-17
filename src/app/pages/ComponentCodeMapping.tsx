import { Link } from "react-router";
import { Code, Layers, FileCode, CheckCircle, ChevronRight, ArrowRight, Copy, GitBranch } from "lucide-react";
import { useState } from "react";

export default function ComponentCodeMapping() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-border rounded flex items-center justify-center">
                  <GitBranch size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Cross-Framework Specifications</div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Component-to-Code Mapping</h1>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Complete component specifications with React props, Angular inputs/outputs, variants, and states. 
                Ensure consistency and reusability across frameworks. Copy-paste ready TypeScript definitions 
                for 15+ production components.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Components: <span className="font-bold text-foreground">15+</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Frameworks: <span className="font-bold text-foreground">React + Angular</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Updated: <span className="font-bold text-foreground">April 2026</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 font-bold text-sm text-center">
                TYPE-SAFE
              </div>
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded text-blue-700 font-bold text-xs text-center uppercase">
                Component<br/>Specs
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "button", label: "Button" },
              { id: "form-field", label: "Form Field" },
              { id: "input", label: "Input" },
              { id: "alert", label: "Alert" },
              { id: "modal", label: "Modal" },
              { id: "usage", label: "Usage" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-16">
            <OverviewSection />
            <ButtonMapping />
            <FormFieldMapping />
            <InputMapping />
            <AlertMapping />
            <ModalMapping />
            <UsageGuide />
          </div>

          {/* Sidebar - 3 columns */}
          <div className="col-span-3 space-y-6 sticky top-24 self-start">
            <QuickNav />
            <ComponentCount />
            <SpecsLocation />
            <FrameworkSupport />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Component Specifications</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== OVERVIEW SECTION ====================

function OverviewSection() {
  return (
    <section id="overview" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Component Specifications</h2>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
        <p className="text-muted-foreground mb-6">
          Every UX4G component has a complete specification defining React props, Angular inputs/outputs, 
          variants, and states. This ensures consistency across frameworks and makes components easy to 
          integrate into any government service.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard
            title="React Props"
            description="TypeScript interfaces with full prop definitions"
            icon={<Code size={24} className="text-blue-600" />}
          />
          <FeatureCard
            title="Angular I/O"
            description="Input/Output mappings for Angular components"
            icon={<Layers size={24} className="text-green-600" />}
          />
          <FeatureCard
            title="Variants & States"
            description="All visual variations and interaction states"
            icon={<FileCode size={24} className="text-purple-600" />}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BenefitCard
          title="Why This Matters"
          items={[
            "Single source of truth for component APIs",
            "Type-safe integration in TypeScript projects",
            "Consistent naming across React and Angular",
            "Easy to generate component documentation",
            "Reduces implementation errors"
          ]}
        />
        <BenefitCard
          title="What's Included"
          items={[
            "15+ component specifications",
            "React TypeScript interfaces",
            "Angular equivalents",
            "All variants and sizes",
            "State machine definitions",
            "Accessibility props"
          ]}
        />
      </div>
    </section>
  );
}

// ==================== BUTTON MAPPING ====================

function ButtonMapping() {
  return (
    <section id="button" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Button Component</h2>
      </div>

      <ComponentSpec
        name="Button"
        description="Primary action component for user interactions"
        reactProps={`interface ButtonProps {
  // Content
  children: React.ReactNode;
  
  // Variants
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // States
  disabled?: boolean;
  loading?: boolean;
  
  // Styling
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  
  // Behavior
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
}`}
        angularInputs={`@Input() variant: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost' | 'link' = 'primary';
@Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
@Input() disabled: boolean = false;
@Input() loading: boolean = false;
@Input() fullWidth: boolean = false;
@Input() iconLeft: string;
@Input() iconRight: string;
@Input() type: 'button' | 'submit' | 'reset' = 'button';
@Input() ariaLabel: string;

@Output() clicked = new EventEmitter<MouseEvent>();`}
        variants={[
          { name: 'primary', desc: 'Navy blue, high emphasis actions', example: 'Submit, Continue, Save' },
          { name: 'secondary', desc: 'White with border, medium emphasis', example: 'Cancel, Back' },
          { name: 'tertiary', desc: 'Text only, low emphasis', example: 'Skip, Learn More' },
          { name: 'danger', desc: 'Red, destructive actions', example: 'Delete, Remove' },
          { name: 'ghost', desc: 'Transparent, minimal', example: 'Close, Dismiss' },
          { name: 'link', desc: 'Link-styled button', example: 'Inline actions' }
        ]}
        sizes={[
          { name: 'sm', desc: 'Small: px-3 py-1.5 text-xs' },
          { name: 'md', desc: 'Medium: px-4 py-2 text-sm (default)' },
          { name: 'lg', desc: 'Large: px-6 py-3 text-base' },
          { name: 'xl', desc: 'Extra Large: px-8 py-4 text-lg' }
        ]}
        states={[
          { name: 'default', desc: 'Normal resting state' },
          { name: 'hover', desc: 'Mouse hover state' },
          { name: 'active', desc: 'Click/press state' },
          { name: 'focus', desc: 'Keyboard focus state' },
          { name: 'disabled', desc: 'Cannot be interacted with' },
          { name: 'loading', desc: 'Processing state with spinner' }
        ]}
      />

      <UsageExample
        title="Button Usage Example"
        reactCode={`import { Button } from './components/Button';

function MyForm() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Button
        variant="primary"
        size="lg"
        loading={loading}
        onClick={() => handleSubmit()}
      >
        Submit Application
      </Button>
      
      <Button
        variant="secondary"
        onClick={() => goBack()}
      >
        Back
      </Button>
    </div>
  );
}`}
        angularCode={`<ux4g-button
  variant="primary"
  size="lg"
  [loading]="isLoading"
  (clicked)="handleSubmit()">
  Submit Application
</ux4g-button>

<ux4g-button
  variant="secondary"
  (clicked)="goBack()">
  Back
</ux4g-button>`}
      />
    </section>
  );
}

// ==================== FORM FIELD MAPPING ====================

function FormFieldMapping() {
  return (
    <section id="form-field" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Form Field Component</h2>
      </div>

      <ComponentSpec
        name="FormField"
        description="Wrapper for form inputs with label, helper text, and validation"
        reactProps={`interface FormFieldProps {
  // Content
  label: string;
  children: React.ReactNode;
  
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
}`}
        angularInputs={`@Input() label: string;
@Input() helperText: string;
@Input() error: string;
@Input() success: boolean = false;
@Input() warning: string;
@Input() required: boolean = false;
@Input() disabled: boolean = false;
@Input() inline: boolean = false;
@Input() id: string;`}
        states={[
          { name: 'default', desc: 'Normal state with label and helper text' },
          { name: 'focus', desc: 'Input has keyboard focus' },
          { name: 'error', desc: 'Validation error with red border and error message' },
          { name: 'success', desc: 'Valid input with green checkmark' },
          { name: 'warning', desc: 'Warning state with yellow indicator' },
          { name: 'disabled', desc: 'Grayed out, cannot be edited' }
        ]}
      />

      <UsageExample
        title="Form Field Usage Example"
        reactCode={`import { FormField } from './components/FormField';
import { LABELS, HELPER_TEXT, ERROR_MESSAGES, getRequiredLabel } from './content/content-library';

function PersonalInfoForm() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  return (
    <FormField
      label={getRequiredLabel(LABELS.mobileNumber)}
      helperText={HELPER_TEXT.mobileNumber}
      error={error}
    >
      <input
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="w-full px-4 py-3 border-2 rounded"
      />
    </FormField>
  );
}`}
        angularCode={`<ux4g-form-field
  [label]="labels.mobileNumber"
  [helperText]="helperText.mobileNumber"
  [error]="mobileError"
  [required]="true">
  <input
    type="tel"
    [(ngModel)]="mobile"
    class="w-full px-4 py-3 border-2 rounded" />
</ux4g-form-field>`}
      />
    </section>
  );
}

// ==================== INPUT MAPPING ====================

function InputMapping() {
  return (
    <section id="input" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Input Component</h2>
      </div>

      <ComponentSpec
        name="Input"
        description="Text input with validation states and icons"
        reactProps={`interface InputProps {
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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
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
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}`}
        angularInputs={`@Input() value: string;
@Input() type: string = 'text';
@Input() size: 'sm' | 'md' | 'lg' = 'md';
@Input() disabled: boolean = false;
@Input() readOnly: boolean = false;
@Input() placeholder: string;
@Input() error: boolean = false;
@Input() success: boolean = false;
@Input() maxLength: number;
@Input() iconLeft: string;
@Input() iconRight: string;

@Output() valueChange = new EventEmitter<string>();
@Output() blur = new EventEmitter<FocusEvent>();
@Output() focus = new EventEmitter<FocusEvent>();`}
        variants={[
          { name: 'text', desc: 'Standard text input' },
          { name: 'email', desc: 'Email address input' },
          { name: 'tel', desc: 'Phone number input' },
          { name: 'password', desc: 'Password input (masked)' },
          { name: 'number', desc: 'Numeric input' },
          { name: 'url', desc: 'URL input' },
          { name: 'search', desc: 'Search input' }
        ]}
        states={[
          { name: 'default', desc: 'Empty, ready for input' },
          { name: 'focus', desc: 'User is typing' },
          { name: 'filled', desc: 'Contains value' },
          { name: 'error', desc: 'Validation error (red border)' },
          { name: 'success', desc: 'Valid input (green border)' },
          { name: 'disabled', desc: 'Cannot be edited' },
          { name: 'readonly', desc: 'Display only, no editing' }
        ]}
      />
    </section>
  );
}

// ==================== ALERT MAPPING ====================

function AlertMapping() {
  return (
    <section id="alert" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Alert Component</h2>
      </div>

      <ComponentSpec
        name="Alert"
        description="Inline notification for important messages"
        reactProps={`interface AlertProps {
  // Content
  children: React.ReactNode;
  title?: string;
  
  // Variants
  variant?: 'info' | 'success' | 'warning' | 'error';
  
  // Behavior
  dismissible?: boolean;
  onDismiss?: () => void;
  
  // Styling
  icon?: React.ReactNode;
  
  // Accessibility
  role?: 'alert' | 'status';
  ariaLive?: 'polite' | 'assertive' | 'off';
}`}
        angularInputs={`@Input() title: string;
@Input() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
@Input() dismissible: boolean = false;
@Input() icon: string;
@Input() role: string = 'alert';
@Input() ariaLive: string = 'polite';

@Output() dismissed = new EventEmitter<void>();`}
        variants={[
          { name: 'info', desc: 'Blue - informational messages', example: 'System updates, tips' },
          { name: 'success', desc: 'Green - success confirmations', example: 'Application submitted' },
          { name: 'warning', desc: 'Yellow - warning messages', example: 'Session expiring soon' },
          { name: 'error', desc: 'Red - error messages', example: 'Submission failed' }
        ]}
        states={[
          { name: 'visible', desc: 'Alert is displayed' },
          { name: 'dismissing', desc: 'Fade-out animation' },
          { name: 'dismissed', desc: 'Removed from DOM' }
        ]}
      />
    </section>
  );
}

// ==================== MODAL MAPPING ====================

function ModalMapping() {
  return (
    <section id="modal" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Modal Component</h2>
      </div>

      <ComponentSpec
        name="Modal"
        description="Dialog overlay for focused interactions"
        reactProps={`interface ModalProps {
  // State
  open: boolean;
  onClose: () => void;
  
  // Content
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  
  // Variants
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  // Behavior
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  preventScroll?: boolean;
  
  // Accessibility
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
}`}
        angularInputs={`@Input() open: boolean = false;
@Input() title: string;
@Input() size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
@Input() closeOnOverlayClick: boolean = true;
@Input() closeOnEscape: boolean = true;
@Input() preventScroll: boolean = true;

@Output() closed = new EventEmitter<void>();`}
        sizes={[
          { name: 'sm', desc: '400px max-width - Small confirmations' },
          { name: 'md', desc: '600px max-width - Standard dialogs (default)' },
          { name: 'lg', desc: '800px max-width - Forms, detailed content' },
          { name: 'xl', desc: '1200px max-width - Complex interfaces' },
          { name: 'full', desc: 'Full screen - Immersive experiences' }
        ]}
        states={[
          { name: 'closed', desc: 'Not visible' },
          { name: 'opening', desc: 'Fade-in animation' },
          { name: 'open', desc: 'Fully visible and interactive' },
          { name: 'closing', desc: 'Fade-out animation' }
        ]}
      />

      <UsageExample
        title="Modal Usage Example"
        reactCode={`import { Modal } from './components/Modal';

function ConfirmDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Delete</button>
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm Deletion"
        size="sm"
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => handleDelete()}>
              Delete
            </Button>
          </>
        }
      >
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      </Modal>
    </>
  );
}`}
        angularCode={`<button (click)="showModal = true">Delete</button>

<ux4g-modal
  [open]="showModal"
  (closed)="showModal = false"
  title="Confirm Deletion"
  size="sm">
  
  <p>Are you sure you want to delete this item? This action cannot be undone.</p>
  
  <div footer>
    <ux4g-button variant="secondary" (clicked)="showModal = false">
      Cancel
    </ux4g-button>
    <ux4g-button variant="danger" (clicked)="handleDelete()">
      Delete
    </ux4g-button>
  </div>
</ux4g-modal>`}
      />
    </section>
  );
}

// ==================== USAGE GUIDE ====================

function UsageGuide() {
  return (
    <section id="usage" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Using Component Specs</h2>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
        <h3 className="font-bold text-foreground mb-4 text-lg">Integration Steps</h3>
        <div className="space-y-4">
          <Step number={1} title="Import specifications" description="Import component specs from /src/app/services/componentSpecs.ts" />
          <Step number={2} title="Use TypeScript interfaces" description="Define props using the provided interfaces for type safety" />
          <Step number={3} title="Follow variant naming" description="Use the exact variant/size names defined in specs" />
          <Step number={4} title="Implement state machine" description="Handle all defined states in your component logic" />
          <Step number={5} title="Map to Angular" description="Use Angular input/output mappings for Angular implementations" />
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Example: Creating a New Component</h3>
        </div>
        <div className="p-6">
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`import { ButtonProps, ButtonVariants, ButtonSizes, ButtonStates } from './services/componentSpecs';

// React implementation
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  ...props
}: ButtonProps) {
  // Use variant constants
  const variantClasses = {
    [ButtonVariants.PRIMARY]: 'bg-primary text-white',
    [ButtonVariants.SECONDARY]: 'bg-card border-2 border-border',
    [ButtonVariants.DANGER]: 'bg-red-600 text-white'
  };

  // Use size constants
  const sizeClasses = {
    [ButtonSizes.SM]: 'px-3 py-1.5 text-xs',
    [ButtonSizes.MD]: 'px-4 py-2 text-sm',
    [ButtonSizes.LG]: 'px-6 py-3 text-base'
  };

  return (
    <button
      className={\`\${variantClasses[variant]} \${sizeClasses[size]}\`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function QuickNav() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Components</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <NavLink href="#button" text="Button" />
        <NavLink href="#form-field" text="Form Field" />
        <NavLink href="#input" text="Input" />
        <NavLink href="#alert" text="Alert" />
        <NavLink href="#modal" text="Modal" />
        <NavLink href="#usage" text="Usage Guide" />
      </div>
    </div>
  );
}

function ComponentCount() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-3 text-sm">Specifications</h3>
      <div className="space-y-2 text-xs">
        <CountItem count="15+" text="Components" />
        <CountItem count="50+" text="Variants" />
        <CountItem count="40+" text="States" />
        <CountItem count="2" text="Frameworks" />
      </div>
    </div>
  );
}

function SpecsLocation() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">File Location</h3>
      </div>
      <div className="p-4 text-xs">
        <code className="text-foreground bg-muted px-2 py-1 rounded block mb-2">
          /src/app/services/<br/>componentSpecs.ts
        </code>
        <p className="text-muted-foreground mt-2">
          Import component interfaces, variants, and states from this file
        </p>
      </div>
    </div>
  );
}

function FrameworkSupport() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Framework Support</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <FrameworkItem name="React" version="18+" status="Primary" />
        <FrameworkItem name="Angular" version="15+" status="Mapped" />
        <FrameworkItem name="Vue" version="3+" status="Planned" />
      </div>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function FeatureCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded p-4">
      <div className="mb-3">{icon}</div>
      <p className="font-bold text-foreground mb-1 text-sm">{title}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

function BenefitCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ComponentSpec({ name, description, reactProps, angularInputs, variants, sizes, states }: {
  name: string;
  description: string;
  reactProps: string;
  angularInputs: string;
  variants?: Array<{ name: string; desc: string; example?: string }>;
  sizes?: Array<{ name: string; desc: string }>;
  states?: Array<{ name: string; desc: string }>;
}) {
  const [activeTab, setActiveTab] = useState<'react' | 'angular'>('react');

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-border px-6 py-4">
        <h3 className="font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="border-b border-border">
        <div className="flex">
          <button
            onClick={() => setActiveTab('react')}
            className={`px-6 py-3 text-sm font-bold border-r border-border ${
              activeTab === 'react' ? 'bg-blue-50 text-primary' : 'bg-background text-muted-foreground'
            }`}
          >
            React Props
          </button>
          <button
            onClick={() => setActiveTab('angular')}
            className={`px-6 py-3 text-sm font-bold ${
              activeTab === 'angular' ? 'bg-blue-50 text-primary' : 'bg-background text-muted-foreground'
            }`}
          >
            Angular I/O
          </button>
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'react' && (
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
            {reactProps}
          </pre>
        )}
        {activeTab === 'angular' && (
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
            {angularInputs}
          </pre>
        )}
      </div>

      {variants && (
        <div className="border-t-2 border-border p-6">
          <h4 className="font-bold text-foreground mb-3 text-sm">Variants</h4>
          <div className="space-y-2">
            {variants.map((v, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-background border border-border rounded">
                <code className="text-sm text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-mono flex-shrink-0">
                  {v.name}
                </code>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{v.desc}</p>
                  {v.example && <p className="text-xs text-muted-foreground mt-1">Example: {v.example}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {sizes && (
        <div className="border-t-2 border-border p-6">
          <h4 className="font-bold text-foreground mb-3 text-sm">Sizes</h4>
          <div className="space-y-2">
            {sizes.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-background border border-border rounded">
                <code className="text-sm text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-mono flex-shrink-0">
                  {s.name}
                </code>
                <p className="text-sm text-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {states && (
        <div className="border-t-2 border-border p-6">
          <h4 className="font-bold text-foreground mb-3 text-sm">States</h4>
          <div className="space-y-2">
            {states.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-background border border-border rounded">
                <code className="text-sm text-green-700 bg-green-50 px-2 py-0.5 rounded font-mono flex-shrink-0">
                  {s.name}
                </code>
                <p className="text-sm text-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function UsageExample({ title, reactCode, angularCode }: {
  title: string;
  reactCode: string;
  angularCode: string;
}) {
  const [activeTab, setActiveTab] = useState<'react' | 'angular'>('react');

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-6 py-4 flex items-center justify-between">
        <h4 className="font-bold text-foreground">{title}</h4>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('react')}
            className={`px-3 py-1 text-xs font-bold rounded ${
              activeTab === 'react' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-muted-foreground'
            }`}
          >
            React
          </button>
          <button
            onClick={() => setActiveTab('angular')}
            className={`px-3 py-1 text-xs font-bold rounded ${
              activeTab === 'angular' ? 'bg-red-500 text-white' : 'bg-gray-200 text-muted-foreground'
            }`}
          >
            Angular
          </button>
        </div>
      </div>
      <div className="p-6">
        {activeTab === 'react' && (
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
            {reactCode}
          </pre>
        )}
        {activeTab === 'angular' && (
          <pre className="bg-gray-900 text-red-400 p-4 rounded text-xs overflow-x-auto">
            {angularCode}
          </pre>
        )}
      </div>
    </div>
  );
}

function Step({ number, title, description }: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <p className="font-bold text-foreground mb-1">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a 
      href={href}
      className="flex items-center gap-2 p-2 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors text-foreground"
    >
      <ArrowRight size={12} className="text-primary" />
      <span>{text}</span>
    </a>
  );
}

function CountItem({ count, text }: { count: string; text: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{text}</span>
      <span className="font-bold text-primary">{count}</span>
    </div>
  );
}

function FrameworkItem({ name, version, status }: {
  name: string;
  version: string;
  status: string;
}) {
  const statusColors = {
    'Primary': 'bg-green-100 text-green-700',
    'Mapped': 'bg-blue-100 text-blue-700',
    'Planned': 'bg-yellow-100 text-yellow-700'
  };

  return (
    <div className="flex items-center justify-between p-2 bg-background border border-border rounded">
      <div>
        <p className="font-bold text-foreground text-xs">{name}</p>
        <p className="text-muted-foreground text-xs">{version}</p>
      </div>
      <span className={`px-2 py-0.5 rounded text-xs font-bold ${statusColors[status as keyof typeof statusColors]}`}>
        {status}
      </span>
    </div>
  );
}
