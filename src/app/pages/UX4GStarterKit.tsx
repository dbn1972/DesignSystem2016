import { Link } from "react-router";
import { Package, Layers, FileCode, Server, Layout, Puzzle, FolderTree, Download, Code, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";

export default function UX4GStarterKit() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-saffron-50 via-white to-green-50 border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-saffron-500 to-green-500 border-2 border-border rounded flex items-center justify-center">
                  <Package size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Production-Ready</div>
                  <h1 className="text-4xl font-bold text-foreground">UX4G Starter Kit</h1>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Production-ready starter kit for building government digital services. Includes reusable 
                components, patterns, pages, routing logic, layout system, and mock API layer. Build faster 
                with battle-tested UX4G components from real government services.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Version: <span className="font-bold text-foreground">1.0.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Updated: <span className="font-bold text-foreground">April 2026</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">License: <span className="font-bold text-foreground">Government of India</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 font-bold text-sm text-center">
                READY TO USE
              </div>
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded text-blue-700 font-bold text-xs text-center uppercase">
                Starter<br/>Kit
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
              { id: "structure", label: "Structure" },
              { id: "components", label: "Components" },
              { id: "patterns", label: "Patterns" },
              { id: "pages", label: "Pages" },
              { id: "services", label: "Services" },
              { id: "routing", label: "Routing" },
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
      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-16">
            <OverviewSection />
            <StructureSection />
            <ComponentsSection />
            <PatternsSection />
            <PagesSection />
            <ServicesSection />
            <RoutingSection />
            <UsageSection />
          </div>

          {/* Sidebar - 3 columns */}
          <aside className="col-span-3 space-y-6 sticky top-24 self-start">
            <QuickStart />
            <WhatsIncluded />
            <TechStack />
            <Resources />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Starter Kit v1.0.0</div>
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
        <h2 className="text-2xl font-bold text-foreground">What's the UX4G Starter Kit?</h2>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-border rounded-lg p-8">
        <p className="text-muted-foreground mb-6">
          The UX4G Starter Kit is a production-ready foundation for building government digital services. 
          Instead of starting from scratch, you get battle-tested components, patterns, and pages extracted 
          from real government services like the Certificate Application system.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard
            icon={<Layers size={24} />}
            title="45+ Pages"
            description="Complete citizen journey from discovery to issuance"
            color="blue"
          />
          <FeatureCard
            icon={<Puzzle size={24} />}
            title="30+ Components"
            description="Reusable UI components ready to use"
            color="green"
          />
          <FeatureCard
            icon={<Server size={24} />}
            title="Mock API Layer"
            description="Complete API simulation for development"
            color="purple"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <BenefitCard
          title="Build Faster"
          items={[
            "No need to build authentication from scratch",
            "Form patterns already validated and tested",
            "Payment flows ready to integrate",
            "Document upload handling included"
          ]}
        />
        <BenefitCard
          title="Best Practices Built-In"
          items={[
            "WCAG 2.1 AA accessibility compliance",
            "Mobile-responsive layouts",
            "Content design system integrated",
            "Auto-save and error recovery patterns"
          ]}
        />
      </div>
    </section>
  );
}

// ==================== STRUCTURE SECTION ====================

function StructureSection() {
  return (
    <section id="structure" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Folder Structure</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <FolderTree size={20} />
            Organized by Function
          </h3>
        </div>
        <div className="p-6">
          <pre className="bg-gray-900 text-green-400 p-6 rounded text-sm overflow-x-auto font-mono">
{`src/
├── app/
│   ├── components/          # Reusable UI Components
│   │   ├── FormField.tsx
│   │   ├── ProgressSteps.tsx
│   │   ├── AutoSaveIndicator.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── LoadingState.tsx
│   │   └── ResilienceDemo.tsx
│   │
│   ├── patterns/            # Common Interaction Patterns
│   │   ├── AuthPattern.tsx
│   │   ├── FormPattern.tsx
│   │   ├── PaymentPattern.tsx
│   │   └── DocumentUploadPattern.tsx
│   │
│   ├── pages/               # Complete Pages
│   │   ├── CertificateSignIn.tsx
│   │   ├── CertificateFormPersonal.tsx
│   │   ├── CertificateDocumentUpload.tsx
│   │   ├── CertificatePaymentSummary.tsx
│   │   └── ... (45+ pages)
│   │
│   ├── services/            # Business Logic & APIs
│   │   ├── mockApi.ts       # Mock API layer
│   │   ├── routeConfig.ts   # Route configuration
│   │   └── validation.ts    # Validation helpers
│   │
│   ├── content/             # Content Design System
│   │   └── content-library.ts
│   │
│   └── routes.tsx           # Routing configuration
│
└── styles/
    ├── theme.css            # Design tokens
    └── fonts.css            # Font imports`}
          </pre>
        </div>
      </div>
    </section>
  );
}

// ==================== COMPONENTS SECTION ====================

function ComponentsSection() {
  return (
    <section id="components" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Reusable Components</h2>
      </div>

      <p className="text-muted-foreground">
        30+ production-ready components extracted from real government services. All components 
        follow UX4G design standards and are accessibility-tested.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <ComponentCategory
          title="Form Components"
          components={[
            { name: "FormField", desc: "Labeled input with error/helper text", path: "components/FormField.tsx" },
            { name: "ProgressSteps", desc: "Multi-step form progress indicator", path: "components/ProgressSteps.tsx" },
            { name: "AutoSaveIndicator", desc: "Shows auto-save status", path: "components/AutoSaveIndicator.tsx" },
            { name: "ValidationMessage", desc: "Real-time validation feedback", path: "components/ValidationMessage.tsx" }
          ]}
        />
        <ComponentCategory
          title="State Management"
          components={[
            { name: "LoadingState", desc: "Loading indicators and skeletons", path: "components/LoadingState.tsx" },
            { name: "ErrorBoundary", desc: "Error recovery component", path: "components/ErrorBoundary.tsx" },
            { name: "EmptyState", desc: "No data / empty states", path: "components/EmptyState.tsx" },
            { name: "OfflineIndicator", desc: "Network status indicator", path: "components/OfflineIndicator.tsx" }
          ]}
        />
        <ComponentCategory
          title="Navigation"
          components={[
            { name: "Breadcrumb", desc: "Breadcrumb navigation", path: "components/Breadcrumb.tsx" },
            { name: "TabNavigation", desc: "Tab navigation component", path: "components/TabNavigation.tsx" },
            { name: "Pagination", desc: "List pagination", path: "components/Pagination.tsx" },
            { name: "Stepper", desc: "Step-by-step navigation", path: "components/Stepper.tsx" }
          ]}
        />
        <ComponentCategory
          title="Feedback"
          components={[
            { name: "Alert", desc: "Inline alerts and notifications", path: "components/Alert.tsx" },
            { name: "Toast", desc: "Toast notifications", path: "components/Toast.tsx" },
            { name: "Modal", desc: "Modal dialogs", path: "components/Modal.tsx" },
            { name: "ConfirmDialog", desc: "Confirmation dialogs", path: "components/ConfirmDialog.tsx" }
          ]}
        />
      </div>

      <CodeExample
        title="Example: Using FormField Component"
        code={`import { FormField } from './components/FormField';
import { LABELS, HELPER_TEXT, ERROR_MESSAGES, getRequiredLabel } from './content/content-library';

function MyForm() {
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
      />
    </section>
  );
}

// ==================== PATTERNS SECTION ====================

function PatternsSection() {
  return (
    <section id="patterns" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Common Patterns</h2>
      </div>

      <p className="text-muted-foreground">
        Proven interaction patterns for common government service scenarios. Use these patterns 
        as-is or customize for your specific needs.
      </p>

      <div className="grid grid-cols-1 gap-6">
        <PatternCard
          title="Authentication Pattern"
          description="Complete sign-up, sign-in, OTP verification, and password recovery flow"
          includes={[
            "Mobile/Email sign-up with OTP verification",
            "Sign-in with remember me option",
            "Forgot password flow",
            "Session timeout handling",
            "Account lockout after failed attempts"
          ]}
          pages={[
            { label: "Sign Up", path: "/certificate-signup" },
            { label: "Sign In", path: "/certificate-signin-updated" },
            { label: "OTP Verification", path: "/certificate-verify-otp" },
            { label: "Forgot Password", path: "/certificate-forgot-password" }
          ]}
        />
        <PatternCard
          title="Form Intelligence Pattern"
          description="Multi-step forms with auto-save, validation, and error recovery"
          includes={[
            "Auto-save every 2 minutes",
            "Real-time validation with helpful errors",
            "Progress indicator",
            "Draft resumption",
            "Offline support"
          ]}
          pages={[
            { label: "Personal Info", path: "/certificate-form-personal-updated" },
            { label: "Address", path: "/certificate-form-address" },
            { label: "Review", path: "/certificate-review-summary" }
          ]}
        />
        <PatternCard
          title="Payment Pattern"
          description="Fee payment with multiple payment methods and failure handling"
          includes={[
            "Payment method selection",
            "Amount breakdown",
            "Transaction confirmation",
            "Receipt generation",
            "Payment failure recovery"
          ]}
          pages={[
            { label: "Payment Summary", path: "/certificate-payment-summary" },
            { label: "Payment Receipt", path: "/certificate-payment-receipt" },
            { label: "Payment Failure", path: "/payment-failure-retry-demo" }
          ]}
        />
        <PatternCard
          title="Document Upload Pattern"
          description="Document upload with validation, preview, and management"
          includes={[
            "Drag & drop upload",
            "File type and size validation",
            "Upload progress indicator",
            "Document preview",
            "Delete and re-upload"
          ]}
          pages={[
            { label: "Document Upload", path: "/certificate-document-upload" }
          ]}
        />
      </div>
    </section>
  );
}

// ==================== PAGES SECTION ====================

function PagesSection() {
  return (
    <section id="pages" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">45+ Ready-to-Use Pages</h2>
      </div>

      <p className="text-muted-foreground">
        Complete pages covering the entire citizen journey from service discovery to certificate issuance. 
        All pages follow UX4G standards and include the Content Design System.
      </p>

      <div className="grid grid-cols-1 gap-6">
        <PageGroup
          phase="Phase 1: Discovery & Information"
          description="Help users understand the service before they start"
          pages={[
            { name: "Service Landing Page", path: "/certificate-service", type: "Public" },
            { name: "Eligibility Checker", path: "/certificate-eligibility", type: "Public" },
            { name: "Help & FAQs", path: "/certificate-help", type: "Public" },
            { name: "Document Guidelines", path: "/certificate-document-guidelines", type: "Public" }
          ]}
        />
        <PageGroup
          phase="Phase 2: Identity & Access"
          description="Authentication and account management"
          pages={[
            { name: "Sign Up", path: "/certificate-signup", type: "Public" },
            { name: "Sign In (Updated)", path: "/certificate-signin-updated", type: "Public" },
            { name: "OTP Verification", path: "/certificate-verify-otp", type: "Public" },
            { name: "Forgot Password", path: "/certificate-forgot-password", type: "Public" },
            { name: "Session Timeout", path: "/certificate-session-timeout", type: "Protected" },
            { name: "User Profile", path: "/certificate-user-profile", type: "Protected" }
          ]}
        />
        <PageGroup
          phase="Phase 3: Application Submission"
          description="Multi-step application form with auto-save"
          pages={[
            { name: "Application Start", path: "/certificate-start", type: "Protected" },
            { name: "Personal Info (Updated)", path: "/certificate-form-personal-updated", type: "Protected" },
            { name: "Address Details", path: "/certificate-form-address", type: "Protected" },
            { name: "Additional Info", path: "/certificate-form-additional", type: "Protected" },
            { name: "Document Upload", path: "/certificate-document-upload", type: "Protected" },
            { name: "Review Summary", path: "/certificate-review-summary", type: "Protected" },
            { name: "Declaration", path: "/certificate-declaration", type: "Protected" }
          ]}
        />
        <PageGroup
          phase="Phase 4: Payment"
          description="Fee payment and receipt"
          pages={[
            { name: "Payment Summary", path: "/certificate-payment-summary", type: "Protected" },
            { name: "Payment Receipt", path: "/certificate-payment-receipt", type: "Protected" }
          ]}
        />
        <PageGroup
          phase="Phase 5: Post-Submission"
          description="Track application and manage notifications"
          pages={[
            { name: "Submission Success", path: "/certificate-submission-success", type: "Protected" },
            { name: "Status Tracker", path: "/certificate-status-tracker", type: "Protected" },
            { name: "Notifications", path: "/certificate-notifications", type: "Protected" }
          ]}
        />
      </div>
    </section>
  );
}

// ==================== SERVICES SECTION ====================

function ServicesSection() {
  return (
    <section id="services" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Mock API Layer</h2>
      </div>

      <p className="text-muted-foreground">
        Complete mock API simulation for development and testing. Replace with real APIs in production.
      </p>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
          <h3 className="font-bold text-foreground">Location: /src/app/services/mockApi.ts</h3>
        </div>
        <div className="p-6 space-y-6">
          <ApiCategory
            name="Authentication API"
            endpoints={[
              { method: "POST", path: "auth.signUp()", desc: "Register new user with mobile/email" },
              { method: "POST", path: "auth.verifyOTP()", desc: "Verify OTP for registration" },
              { method: "POST", path: "auth.signIn()", desc: "Sign in with credentials" },
              { method: "POST", path: "auth.requestPasswordReset()", desc: "Request password reset OTP" },
              { method: "POST", path: "auth.resetPassword()", desc: "Reset password with OTP" },
              { method: "GET", path: "auth.getCurrentUser()", desc: "Get authenticated user" }
            ]}
          />
          <ApiCategory
            name="Application API"
            endpoints={[
              { method: "POST", path: "application.create()", desc: "Create new application" },
              { method: "PUT", path: "application.update()", desc: "Update application data" },
              { method: "POST", path: "application.submit()", desc: "Submit application" },
              { method: "GET", path: "application.getById()", desc: "Get application by ID" },
              { method: "GET", path: "application.getUserApplications()", desc: "Get user's all applications" },
              { method: "GET", path: "application.trackStatus()", desc: "Track application by number" }
            ]}
          />
          <ApiCategory
            name="Document API"
            endpoints={[
              { method: "POST", path: "document.upload()", desc: "Upload document file" },
              { method: "DELETE", path: "document.delete()", desc: "Delete document" }
            ]}
          />
          <ApiCategory
            name="Payment API"
            endpoints={[
              { method: "POST", path: "payment.initiate()", desc: "Initiate payment" },
              { method: "POST", path: "payment.process()", desc: "Process payment" },
              { method: "GET", path: "payment.verify()", desc: "Verify payment status" }
            ]}
          />
          <ApiCategory
            name="Certificate API"
            endpoints={[
              { method: "GET", path: "certificate.getCertificates()", desc: "Get issued certificates" },
              { method: "GET", path: "certificate.verify()", desc: "Verify certificate" },
              { method: "GET", path: "certificate.download()", desc: "Download certificate PDF" }
            ]}
          />
        </div>
      </div>

      <CodeExample
        title="Example: Using Mock API"
        code={`import { mockApi } from './services/mockApi';

// Sign in user
const handleSignIn = async () => {
  const response = await mockApi.auth.signIn({
    mobileNumber: "9876543210",
    password: "SecurePass123!"
  });

  if (response.success) {
    console.log("User signed in:", response.data?.user);
    // Navigate to dashboard
  } else {
    console.error("Sign in failed:", response.error);
  }
};

// Create application
const createApplication = async () => {
  const response = await mockApi.application.create({
    type: "Residence Certificate",
    formData: {
      fullName: "Priya Sharma",
      mobile: "9876543210"
    }
  });

  if (response.success) {
    console.log("Application created:", response.data?.applicationNumber);
  }
};`}
      />
    </section>
  );
}

// ==================== ROUTING SECTION ====================

function RoutingSection() {
  return (
    <section id="routing" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Routing Configuration</h2>
      </div>

      <p className="text-muted-foreground">
        Centralized routing configuration with route protection and navigation helpers.
      </p>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
          <h3 className="font-bold text-foreground">Location: /src/app/services/routeConfig.ts</h3>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <p className="font-bold text-foreground mb-2">Route Constants</p>
            <p className="text-sm text-muted-foreground mb-3">Use constants instead of hardcoded paths</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`import { ROUTES } from './services/routeConfig';

// Navigate to sign in
navigate(ROUTES.CERTIFICATE.SIGN_IN);

// Navigate to form
navigate(ROUTES.CERTIFICATE.FORM_PERSONAL);`}
            </pre>
          </div>

          <div>
            <p className="font-bold text-foreground mb-2">Route Protection</p>
            <p className="text-sm text-muted-foreground mb-3">Check if routes require authentication</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`import { isProtectedRoute, isOfficerRoute } from './services/routeConfig';

// Check if route requires auth
if (isProtectedRoute(currentPath)) {
  // Redirect to sign in
}

// Check if route requires officer role
if (isOfficerRoute(currentPath)) {
  // Check officer permissions
}`}
            </pre>
          </div>

          <div>
            <p className="font-bold text-foreground mb-2">Navigation Helpers</p>
            <p className="text-sm text-muted-foreground mb-3">Get next/previous steps in multi-step forms</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`import { getNextStep, getPreviousStep, getApplicationSteps } from './services/routeConfig';

// Get all steps
const steps = getApplicationSteps();

// Navigate to next step
const nextPath = getNextStep(currentPath);
if (nextPath) navigate(nextPath);

// Navigate to previous step
const prevPath = getPreviousStep(currentPath);
if (prevPath) navigate(prevPath);`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== USAGE SECTION ====================

function UsageSection() {
  return (
    <section id="usage" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Getting Started</h2>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-border rounded-lg p-8">
        <h3 className="font-bold text-foreground mb-4 text-lg">Quick Start Guide</h3>
        <div className="space-y-4">
          <Step
            number={1}
            title="Copy the starter kit files"
            description="Copy components, patterns, pages, and services to your project"
          />
          <Step
            number={2}
            title="Install dependencies"
            description="npm install react-router lucide-react"
          />
          <Step
            number={3}
            title="Configure routing"
            description="Import ROUTES from services/routeConfig.ts and use in your router"
          />
          <Step
            number={4}
            title="Start building"
            description="Use existing pages as templates or build new ones with components"
          />
          <Step
            number={5}
            title="Replace mock APIs"
            description="Replace mockApi calls with real API endpoints in production"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ExampleCard
          title="Build a New Form Page"
          steps={[
            "1. Copy CertificateFormPersonalUpdated.tsx",
            "2. Modify form fields using LABELS from content library",
            "3. Add validation using ERROR_MESSAGES",
            "4. Hook up to mockApi.application.update()",
            "5. Add route to routeConfig.ts"
          ]}
        />
        <ExampleCard
          title="Add Authentication"
          steps={[
            "1. Use CertificateSignInUpdated.tsx as template",
            "2. Hook up to mockApi.auth.signIn()",
            "3. Store auth token in localStorage",
            "4. Protect routes using isProtectedRoute()",
            "5. Add session timeout handling"
          ]}
        />
      </div>
    </section>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function QuickStart() {
  return (
    <div className="bg-gradient-to-br from-saffron-50 to-green-50 border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
        <Download size={20} className="text-primary" />
        Quick Start
      </h3>
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span className="text-muted-foreground">All files in /src/app/</span>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span className="text-muted-foreground">Copy to your project</span>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span className="text-muted-foreground">Start building immediately</span>
        </div>
      </div>
    </div>
  );
}

function WhatsIncluded() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">What's Included</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <IncludedItem count="30+" text="Components" />
        <IncludedItem count="8" text="Patterns" />
        <IncludedItem count="45+" text="Pages" />
        <IncludedItem count="6" text="API Services" />
        <IncludedItem count="1" text="Content Library" />
        <IncludedItem count="1" text="Route Config" />
      </div>
    </div>
  );
}

function TechStack() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Tech Stack</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <TechItem name="React 18" desc="Latest React" />
        <TechItem name="TypeScript" desc="Type safety" />
        <TechItem name="React Router" desc="Routing" />
        <TechItem name="Tailwind CSS v4" desc="Styling" />
        <TechItem name="Lucide React" desc="Icons" />
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Documentation</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <ResourceLink to="/content-design-system" text="Content Design System" />
        <ResourceLink to="/form-intelligence-system" text="Form Intelligence" />
        <ResourceLink to="/state-resilience-system" text="State & Resilience" />
        <ResourceLink to="/accessibility" text="Accessibility Guide" />
      </div>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function FeatureCard({ icon, title, description, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600"
  };

  return (
    <div className="bg-card border border-border rounded p-4">
      <div className={`w-12 h-12 ${colorClasses[color as keyof typeof colorClasses]} rounded flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="font-bold text-foreground mb-1">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
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

function ComponentCategory({ title, components }: {
  title: string;
  components: Array<{ name: string; desc: string; path: string }>;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-4 py-3">
        <h4 className="font-bold text-foreground text-sm">{title}</h4>
      </div>
      <div className="p-4 space-y-2">
        {components.map((comp, i) => (
          <div key={i} className="bg-background border border-border rounded p-3">
            <p className="font-bold text-foreground text-sm mb-1">{comp.name}</p>
            <p className="text-xs text-muted-foreground mb-2">{comp.desc}</p>
            <code className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{comp.path}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeExample({ title, code }: { title: string; code: string }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-6 py-4">
        <h4 className="font-bold text-foreground flex items-center gap-2">
          <Code size={18} />
          {title}
        </h4>
      </div>
      <div className="p-6">
        <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
          {code}
        </pre>
      </div>
    </div>
  );
}

function PatternCard({ title, description, includes, pages }: {
  title: string;
  description: string;
  includes: string[];
  pages: Array<{ label: string; path: string }>;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border-b-2 border-border px-6 py-4">
        <h3 className="font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <p className="text-sm font-bold text-foreground mb-2">Includes:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold text-foreground mb-2">Example Pages:</p>
          <div className="flex flex-wrap gap-2">
            {pages.map((page, i) => (
              <Link
                key={i}
                to={page.path}
                className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded text-xs text-blue-700 hover:bg-blue-100"
              >
                {page.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PageGroup({ phase, description, pages }: {
  phase: string;
  description: string;
  pages: Array<{ name: string; path: string; type: string }>;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-6 py-4">
        <h3 className="font-bold text-foreground mb-1">{phase}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="p-6">
        <div className="space-y-2">
          {pages.map((page, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-background border border-border rounded">
              <div>
                <p className="font-bold text-foreground text-sm">{page.name}</p>
                <Link to={page.path} className="text-xs text-blue-700 hover:underline">
                  {page.path}
                </Link>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-bold ${
                page.type === 'Public' 
                  ? 'bg-green-100 text-green-700' 
                  : page.type === 'Protected'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-purple-100 text-purple-700'
              }`}>
                {page.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ApiCategory({ name, endpoints }: {
  name: string;
  endpoints: Array<{ method: string; path: string; desc: string }>;
}) {
  return (
    <div>
      <h4 className="font-bold text-foreground mb-3">{name}</h4>
      <div className="space-y-2">
        {endpoints.map((endpoint, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-background border border-border rounded">
            <span className={`px-2 py-0.5 rounded text-xs font-bold flex-shrink-0 ${
              endpoint.method === 'GET' 
                ? 'bg-blue-100 text-blue-700'
                : endpoint.method === 'POST'
                ? 'bg-green-100 text-green-700'
                : endpoint.method === 'PUT'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {endpoint.method}
            </span>
            <div className="flex-1">
              <code className="text-sm text-foreground font-mono">{endpoint.path}</code>
              <p className="text-xs text-muted-foreground mt-1">{endpoint.desc}</p>
            </div>
          </div>
        ))}
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

function ExampleCard({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
        <h4 className="font-bold text-foreground">{title}</h4>
      </div>
      <div className="p-6">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <ArrowRight size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function IncludedItem({ count, text }: { count: string; text: string }) {
  return (
    <div className="flex items-center justify-between p-2 bg-background border border-border rounded">
      <span className="text-foreground">{text}</span>
      <span className="font-bold text-primary">{count}</span>
    </div>
  );
}

function TechItem({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="p-2 bg-background border border-border rounded">
      <p className="font-bold text-foreground">{name}</p>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
}

function ResourceLink({ to, text }: { to: string; text: string }) {
  return (
    <Link 
      to={to}
      className="flex items-center gap-2 p-2 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors text-foreground"
    >
      <ArrowRight size={12} className="text-primary" />
      <span>{text}</span>
    </Link>
  );
}
