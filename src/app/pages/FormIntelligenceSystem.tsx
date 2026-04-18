import { Link } from "react-router";
import { FileText, CheckCircle, AlertCircle, Info, ChevronRight, ArrowRight, Save, Eye, HelpCircle, AlertTriangle, Zap, Layers, Code, Book, Shield, Clock, RefreshCw, Lock, Unlock, Check, X } from "lucide-react";
import { useState } from "react";

export default function FormIntelligenceSystem() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-green-100 border-2 border-border rounded flex items-center justify-center">
                  <FileText size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Reusable Pattern System</div>
                  <h1 className="text-3xl font-bold text-foreground">Form Intelligence System</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Comprehensive pattern library for government digital forms. Covers simple to complex forms with 
                intelligent features: conditional logic, progressive disclosure, validation, auto-save, review 
                flows, and assisted completion. Build accessible, user-friendly forms that work for all citizens.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">System ID: <span className="font-bold text-foreground">UX4G-SYS-FORM-001</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Version: <span className="font-bold text-foreground">2.0.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Updated: <span className="font-bold text-foreground">April 2026</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded text-blue-700 font-bold text-xs text-center uppercase">
                Core<br/>System
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
              { id: "principles", label: "Design Principles" },
              { id: "patterns", label: "Form Patterns" },
              { id: "components", label: "Components" },
              { id: "validation", label: "Validation" },
              { id: "intelligence", label: "Intelligence Features" },
              { id: "accessibility", label: "Accessibility" },
              { id: "implementation", label: "Implementation" }
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
            <PrinciplesSection />
            <FormPatternsSection />
            <ComponentsSection />
            <ValidationSection />
            <IntelligenceFeaturesSection />
            <AccessibilitySection />
            <ImplementationSection />
          </div>

          {/* Sidebar - 3 columns */}
          <div className="col-span-3 space-y-6 sticky top-24 self-start">
            <SystemArchitecture />
            <QuickStart />
            <PatternIndex />
            <Resources />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Form Intelligence System</div>
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
        <h2 className="text-2xl font-bold text-foreground">System Overview</h2>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-green-50 border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
        <h3 className="font-bold text-foreground mb-4 text-lg">What is Form Intelligence?</h3>
        <p className="text-muted-foreground mb-4">
          Form Intelligence is a comprehensive pattern system that makes government forms easier to complete, 
          more accessible, and resilient to user error. It combines smart UX patterns with technical 
          capabilities to guide users through complex data collection while preserving their work and 
          providing helpful assistance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded p-4">
            <Zap size={24} className="text-orange-600 mb-2" />
            <p className="font-bold text-foreground mb-1">Intelligent</p>
            <p className="text-sm text-muted-foreground">Adapts to user needs, shows relevant fields, validates in real-time</p>
          </div>
          <div className="bg-card border border-border rounded p-4">
            <Shield size={24} className="text-green-600 mb-2" />
            <p className="font-bold text-foreground mb-1">Resilient</p>
            <p className="text-sm text-muted-foreground">Auto-saves progress, recovers from errors, never loses data</p>
          </div>
          <div className="bg-card border border-border rounded p-4">
            <HelpCircle size={24} className="text-primary mb-2" />
            <p className="font-bold text-foreground mb-1">Supportive</p>
            <p className="text-sm text-muted-foreground">Contextual help, examples, validation feedback, error recovery</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* System Capabilities */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">System Capabilities</h3>
          </div>
          <div className="p-6 space-y-2 text-sm">
            <CapabilityItem icon={<Check size={16} className="text-green-600" />} text="10 reusable form patterns from simple to complex" />
            <CapabilityItem icon={<Check size={16} className="text-green-600" />} text="Conditional logic engine (show/hide based on answers)" />
            <CapabilityItem icon={<Check size={16} className="text-green-600" />} text="Progressive disclosure (reveal complexity gradually)" />
            <CapabilityItem icon={<Check size={16} className="text-green-600" />} text="Real-time and server-side validation" />
            <CapabilityItem icon={<Check size={16} className="text-green-600" />} text="Auto-save with draft recovery" />
            <CapabilityItem icon={<Check size={16} className="text-green-600" />} text="Multi-step wizards with progress tracking" />
            <CapabilityItem icon={<Check size={16} className="text-green-600" />} text="Review & confirm before submission" />
            <CapabilityItem icon={<Check size={16} className="text-green-600" />} text="Correction and resubmission flows" />
            <CapabilityItem icon={<Check size={16} className="text-green-600" />} text="Assisted completion with contextual help" />
            <CapabilityItem icon={<Check size={16} className="text-green-600" />} text="WCAG 2.1 AA accessibility compliance" />
          </div>
        </div>

        {/* Who Should Use This */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Who Should Use This System</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <UserGroup 
              title="Government Service Designers"
              description="Creating citizen-facing applications, registrations, or data collection forms"
            />
            <UserGroup 
              title="Development Teams"
              description="Building government portals, e-governance platforms, or public services"
            />
            <UserGroup 
              title="Department Stakeholders"
              description="Planning new digital services that require form-based data collection"
            />
            <UserGroup 
              title="Accessibility Specialists"
              description="Ensuring government forms meet WCAG standards and work for all citizens"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PRINCIPLES SECTION ====================

function PrinciplesSection() {
  return (
    <section id="principles" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Design Principles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PrincipleCard
          number={1}
          title="Ask Only What's Necessary"
          description="Every field should have a clear purpose. Remove optional fields that 'might be useful later.' Respect user time and cognitive load."
          examples={[
            "Pre-fill known data (name, email from account)",
            "Ask for phone OR email, not both if only one is needed",
            "Skip fields that can be derived (age from date of birth)"
          ]}
        />
        <PrincipleCard
          number={2}
          title="One Thing at a Time"
          description="Don't overwhelm users with long scrolling forms. Break complex forms into logical steps or reveal fields progressively."
          examples={[
            "Multi-step wizard for applications (personal → address → documents)",
            "Progressive disclosure: Show 'Add family member' only if needed",
            "Single-column layouts for focused attention"
          ]}
        />
        <PrincipleCard
          number={3}
          title="Guide, Don't Gatekeep"
          description="Help users succeed rather than punish mistakes. Provide examples, format guidance, and inline help before showing errors."
          examples={[
            "Show format examples: 'e.g., 1234 5678 9012'",
            "Use helper text: 'As shown on your Aadhaar card'",
            "Suggest corrections: 'Did you mean rajesh@gmail.com?'"
          ]}
        />
        <PrincipleCard
          number={4}
          title="Never Lose User Work"
          description="Auto-save drafts frequently. Allow users to resume from where they left off. Protect against session timeouts and browser crashes."
          examples={[
            "Auto-save every 2 minutes while user is active",
            "Show 'Draft saved at 2:34 PM' confirmation",
            "Resume from last completed step after re-authentication"
          ]}
        />
        <PrincipleCard
          number={5}
          title="Validate Early, Correct Gently"
          description="Catch errors early with inline validation, but don't interrupt the flow. Show errors after user leaves field, not while typing."
          examples={[
            "Check Aadhaar format on blur, not on keypress",
            "Show green checkmark for valid email immediately",
            "Summarize all errors at top before submission"
          ]}
        />
        <PrincipleCard
          number={6}
          title="Review Before Submit"
          description="Show a summary page where users can review all entered data before final submission. Allow easy editing of any section."
          examples={[
            "Display all data in readable format (not form fields)",
            "'Edit' button next to each section returns to that step",
            "Final 'Submit Application' only on review page"
          ]}
        />
      </div>
    </section>
  );
}

// ==================== FORM PATTERNS SECTION ====================

function FormPatternsSection() {
  return (
    <section id="patterns" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Form Patterns Catalog</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Pattern 1: Simple Form */}
        <FormPattern
          number={1}
          title="Simple Form Pattern"
          description="Single-page form with 3-10 fields. Best for quick data collection like contact forms, feedback, or simple registrations."
          complexity="Low"
          useWhen={[
            "Fewer than 10 fields total",
            "All fields visible at once without scrolling",
            "Single context (e.g., all contact info)",
            "Quick completion expected (<2 minutes)"
          ]}
          keyFeatures={[
            "Single column layout for mobile-first design",
            "Inline validation after field blur",
            "Clear primary action button at bottom",
            "Optional 'Save Draft' for logged-in users"
          ]}
          exampleComponent={<SimpleFormExample />}
        />

        {/* Pattern 2: Multi-Step Form */}
        <FormPattern
          number={2}
          title="Multi-Step Form (Wizard)"
          description="Break complex forms into logical steps with clear progress tracking. Users complete one section at a time."
          complexity="Medium"
          useWhen={[
            "More than 10 fields total",
            "Distinct sections (personal, address, documents)",
            "User needs cognitive breaks",
            "Mobile users (avoid long scrolling)"
          ]}
          keyFeatures={[
            "Step indicator showing progress (Step 2 of 4)",
            "Back/Next navigation between steps",
            "Save progress automatically on each step",
            "Review all data before final submission"
          ]}
          exampleComponent={<MultiStepFormExample />}
        />

        {/* Pattern 3: Conditional Logic */}
        <FormPattern
          number={3}
          title="Conditional Logic Pattern"
          description="Show or hide fields based on user's previous answers. Creates personalized, relevant forms."
          complexity="Medium"
          useWhen={[
            "Different users need different fields",
            "Follow-up questions depend on answers",
            "Want to reduce clutter and irrelevant fields",
            "Form adapts to user context"
          ]}
          keyFeatures={[
            "Show/hide fields based on radio/checkbox/select",
            "Smooth transitions (fade in/out)",
            "Clear causality (if X, then show Y)",
            "Don't re-validate hidden fields"
          ]}
          exampleComponent={<ConditionalLogicExample />}
        />

        {/* Pattern 4: Progressive Disclosure */}
        <FormPattern
          number={4}
          title="Progressive Disclosure Pattern"
          description="Start with essential fields, reveal optional or advanced fields only when user needs them."
          complexity="Low"
          useWhen={[
            "Some fields are optional or advanced",
            "Want to keep initial form simple",
            "Power users need more options",
            "Reducing perceived complexity"
          ]}
          keyFeatures={[
            "'Show more options' link/button",
            "Reveal fields inline (no page reload)",
            "Persist user choice (keep expanded if editing)",
            "Use for 'Add another' patterns (family members)"
          ]}
          exampleComponent={<ProgressiveDisclosureExample />}
        />

        {/* Pattern 5: Validation System */}
        <FormPattern
          number={5}
          title="Intelligent Validation Pattern"
          description="Multi-layer validation: client-side for instant feedback, server-side for data integrity, with clear error messaging."
          complexity="High"
          useWhen={[
            "All forms (validation is mandatory)",
            "Complex business rules",
            "Need to check against database (unique email)",
            "Critical data accuracy required"
          ]}
          keyFeatures={[
            "Inline validation on field blur (not keypress)",
            "Green checkmark for valid fields",
            "Red error message with fix suggestion",
            "Error summary at top before submission"
          ]}
          exampleComponent={<ValidationExample />}
        />

        {/* Pattern 6: Save and Resume */}
        <FormPattern
          number={6}
          title="Save & Resume Pattern"
          description="Auto-save draft data and allow users to return to complete form later. Critical for long forms."
          complexity="Medium"
          useWhen={[
            "Form takes >5 minutes to complete",
            "Users may not have all info immediately",
            "Multi-step forms",
            "Risk of session timeout or interruption"
          ]}
          keyFeatures={[
            "Auto-save every 2 minutes or on field change",
            "Show 'Saved at [time]' indicator",
            "Link to 'My Drafts' or dashboard",
            "Resume from last completed step"
          ]}
          exampleComponent={<SaveResumeExample />}
        />
      </div>
    </section>
  );
}

// ==================== COMPONENTS SECTION ====================

function ComponentsSection() {
  return (
    <section id="components" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Form Component Library</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Input */}
        <ComponentExample
          title="Text Input"
          description="Single-line text entry with label, helper text, and validation states"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input 
                type="text" 
                defaultValue="Priya Sharma"
                className="w-full px-4 py-3 border-2 border-green-400 rounded bg-green-50"
              />
              <p className="text-xs text-green-700 mt-1 flex items-center gap-1">
                <CheckCircle size={12} />
                Valid name
              </p>
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input 
                type="email" 
                defaultValue="priya@invalid"
                className="w-full px-4 py-3 border-2 border-red-400 rounded bg-red-50"
              />
              <p className="text-xs text-red-700 mt-1 flex items-center gap-1">
                <AlertCircle size={12} />
                Enter a valid email address
              </p>
            </div>
          </div>
        </ComponentExample>

        {/* Radio Buttons */}
        <ComponentExample
          title="Radio Button Group"
          description="Single selection from multiple options with clear labels"
        >
          <div>
            <label className="block text-sm font-bold text-foreground mb-3">
              Gender <span className="text-red-600">*</span>
            </label>
            <div className="space-y-2">
              {['Male', 'Female', 'Other', 'Prefer not to say'].map((option) => (
                <label key={option} className="flex items-center gap-3 p-3 border-2 border-border rounded hover:bg-background cursor-pointer">
                  <input 
                    type="radio" 
                    name="gender" 
                    value={option}
                    defaultChecked={option === 'Female'}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-foreground">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </ComponentExample>

        {/* Checkbox */}
        <ComponentExample
          title="Checkbox (Single/Multiple)"
          description="For agreements, confirmations, or multiple selections"
        >
          <div className="space-y-4">
            <div>
              <label className="flex items-start gap-3 p-3 border-2 border-border rounded cursor-pointer">
                <input type="checkbox" className="w-5 h-5 mt-0.5" />
                <span className="text-sm text-foreground">
                  I agree to the <a href="#" className="text-primary underline">terms and conditions</a>
                </span>
              </label>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground mb-2">Select services (multiple):</p>
              {['Birth Certificate', 'Marriage Certificate', 'Domicile Certificate'].map((service) => (
                <label key={service} className="flex items-center gap-3 p-2 hover:bg-background">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-foreground">{service}</span>
                </label>
              ))}
            </div>
          </div>
        </ComponentExample>

        {/* Select Dropdown */}
        <ComponentExample
          title="Select Dropdown"
          description="Choose from many options; use for 7+ choices"
        >
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              State <span className="text-red-600">*</span>
            </label>
            <select className="w-full px-4 py-3 border-2 border-border rounded bg-card" defaultValue="KA">
              <option value="">-- Select State --</option>
              <option value="MH">Maharashtra</option>
              <option value="KA">Karnataka</option>
              <option value="TN">Tamil Nadu</option>
              <option value="DL">Delhi</option>
              <option value="WB">West Bengal</option>
            </select>
            <p className="text-xs text-muted-foreground mt-1">
              Your current state of residence
            </p>
          </div>
        </ComponentExample>

        {/* Date Picker */}
        <ComponentExample
          title="Date Input"
          description="Native date picker with format guidance"
        >
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Date of Birth <span className="text-red-600">*</span>
            </label>
            <input 
              type="date" 
              defaultValue="1990-05-15"
              className="w-full px-4 py-3 border-2 border-border rounded"
            />
            <p className="text-xs text-muted-foreground mt-1">
              As shown on your identity document
            </p>
          </div>
        </ComponentExample>

        {/* File Upload */}
        <ComponentExample
          title="File Upload"
          description="Upload documents with format and size constraints"
        >
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Aadhaar Card (Front & Back) <span className="text-red-600">*</span>
            </label>
            <div className="border-2 border-dashed border-border rounded p-6 text-center bg-background">
              <FileText size={32} className="text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Drag and drop or click to upload</p>
              <p className="text-xs text-muted-foreground">PDF or JPG, max 5MB</p>
            </div>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded flex items-start gap-3">
              <FileText size={16} className="text-blue-600 mt-0.5" />
              <div className="flex-1 text-sm">
                <p className="font-bold text-foreground">aadhaar_front.jpg</p>
                <p className="text-muted-foreground">2.3 MB • Uploaded</p>
              </div>
              <button className="text-red-600 hover:text-red-800">
                <X size={18} />
              </button>
            </div>
          </div>
        </ComponentExample>

        {/* Helper Text & Tooltips */}
        <ComponentExample
          title="Helper Text & Tooltips"
          description="Contextual guidance and examples"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                Aadhaar Number <span className="text-red-600">*</span>
                <button className="text-muted-foreground hover:text-primary">
                  <HelpCircle size={16} />
                </button>
              </label>
              <input 
                type="text" 
                placeholder="1234 5678 9012"
                className="w-full px-4 py-3 border-2 border-border rounded"
              />
              <p className="text-xs text-muted-foreground mt-1">
                12-digit number on your Aadhaar card (spaces optional)
              </p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded text-sm">
              <div className="flex items-start gap-2">
                <Info size={16} className="text-blue-600 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground mb-1">Why we need this:</p>
                  <p className="text-muted-foreground">We use your Aadhaar to verify your identity and prevent duplicate applications.</p>
                </div>
              </div>
            </div>
          </div>
        </ComponentExample>

        {/* Error Summary */}
        <ComponentExample
          title="Error Summary"
          description="List all form errors before submission"
        >
          <div className="p-4 bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle size={20} className="text-red-600 mt-0.5" />
              <div>
                <h4 className="font-bold text-foreground mb-1">There are 3 errors in your form</h4>
                <p className="text-sm text-muted-foreground">Please correct the following and try again:</p>
              </div>
            </div>
            <ul className="space-y-1 ml-8 text-sm">
              <li>
                <a href="#email" className="text-primary hover:underline">
                  • Email Address: Enter a valid email
                </a>
              </li>
              <li>
                <a href="#phone" className="text-primary hover:underline">
                  • Mobile Number: Must be 10 digits
                </a>
              </li>
              <li>
                <a href="#aadhaar" className="text-primary hover:underline">
                  • Aadhaar: Required field is empty
                </a>
              </li>
            </ul>
          </div>
        </ComponentExample>
      </div>
    </section>
  );
}

// ==================== VALIDATION SECTION ====================

function ValidationSection() {
  return (
    <section id="validation" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Validation Strategy</h2>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <AlertTriangle size={20} className="text-yellow-600" />
          Multi-Layer Validation Approach
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Use progressive validation layers: client-side for instant feedback, server-side for data integrity, 
          and business logic validation for complex rules. Never rely on client-side validation alone.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded p-3">
            <p className="font-bold text-foreground text-sm mb-1">Layer 1: Client-Side</p>
            <p className="text-xs text-muted-foreground">HTML5 + JavaScript; instant feedback; format checks</p>
          </div>
          <div className="bg-card border border-border rounded p-3">
            <p className="font-bold text-foreground text-sm mb-1">Layer 2: Server-Side</p>
            <p className="text-xs text-muted-foreground">Backend validation; database checks; security</p>
          </div>
          <div className="bg-card border border-border rounded p-3">
            <p className="font-bold text-foreground text-sm mb-1">Layer 3: Business Logic</p>
            <p className="text-xs text-muted-foreground">Complex rules; eligibility; policy enforcement</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Validation Rules */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-6 py-4">
            <h3 className="font-bold text-foreground">Common Validation Rules</h3>
          </div>
          <div className="p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 font-bold text-foreground">Field Type</th>
                  <th className="text-left py-2 font-bold text-foreground">Validation Rule</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-border">
                  <td className="py-2 font-medium text-foreground">Email</td>
                  <td className="py-2 text-muted-foreground">RFC 5322 format; max 254 chars</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-medium text-foreground">Mobile</td>
                  <td className="py-2 text-muted-foreground">10 digits; starts with 6-9</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-medium text-foreground">Aadhaar</td>
                  <td className="py-2 text-muted-foreground">12 digits; Verhoeff checksum</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-medium text-foreground">PAN</td>
                  <td className="py-2 text-muted-foreground">10 chars; format: ABCDE1234F</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-medium text-foreground">Pincode</td>
                  <td className="py-2 text-muted-foreground">6 digits; valid India pincode</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-medium text-foreground">Date of Birth</td>
                  <td className="py-2 text-muted-foreground">Valid date; age 18-100 years</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-foreground">File Upload</td>
                  <td className="py-2 text-muted-foreground">PDF/JPG only; max 5MB; virus scan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Validation Timing */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">When to Validate</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <ValidationTiming 
              trigger="On Field Blur (recommended)"
              description="User leaves field → validate immediately"
              pros="Instant feedback; doesn't interrupt typing"
              cons="Slight delay until user tabs out"
            />
            <ValidationTiming 
              trigger="On Form Submit"
              description="User clicks Submit → validate all fields"
              pros="No interruption during data entry"
              cons="Late feedback; frustrating if many errors"
            />
            <ValidationTiming 
              trigger="On Keypress (avoid)"
              description="Validate while user is typing"
              pros="Immediate feedback"
              cons="Annoying; shows errors before user finishes"
            />
            <ValidationTiming 
              trigger="After First Submit Attempt"
              description="After failed submit → validate on blur"
              pros="Balance between early and late feedback"
              cons="More complex implementation"
            />
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
          <h3 className="font-bold text-foreground">Error Message Best Practices</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <X size={16} />
                DON'T: Vague or Technical
              </p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li>❌ "Invalid input"</li>
                <li>❌ "Validation error 400"</li>
                <li>❌ "Field required"</li>
                <li>❌ "Check format"</li>
                <li>❌ "Error: NaN"</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-600 mb-2 flex items-center gap-2">
                <Check size={16} />
                DO: Clear and Actionable
              </p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li>✅ "Enter a valid email address"</li>
                <li>✅ "Mobile number must be 10 digits"</li>
                <li>✅ "Email Address is required"</li>
                <li>✅ "Enter Aadhaar as 1234 5678 9012"</li>
                <li>✅ "Age must be 18 or above"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== INTELLIGENCE FEATURES SECTION ====================

function IntelligenceFeaturesSection() {
  return (
    <section id="intelligence" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Intelligence Features</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Auto-Save */}
        <IntelligenceFeature
          icon={<Save className="text-blue-600" />}
          title="Auto-Save Drafts"
          description="Save user progress automatically every 2 minutes or on field change"
          implementation={[
            "Use debounced save (2sec after last change)",
            "Store draft ID in sessionStorage",
            "Show 'Saved at HH:MM' timestamp",
            "Resume from last step on return"
          ]}
        />

        {/* Smart Prefill */}
        <IntelligenceFeature
          icon={<Zap className="text-orange-600" />}
          title="Smart Pre-fill"
          description="Auto-populate known data from user account or previous applications"
          implementation={[
            "Name, email, phone from user profile",
            "Address from last application",
            "Government ID numbers (if consented)",
            "Allow user to edit pre-filled data"
          ]}
        />

        {/* Format Assistance */}
        <IntelligenceFeature
          icon={<HelpCircle className="text-green-600" />}
          title="Format Assistance"
          description="Auto-format inputs like phone numbers, Aadhaar, dates while user types"
          implementation={[
            "Add spaces to Aadhaar: 1234 5678 9012",
            "Format phone: (XXX) XXX-XXXX",
            "Uppercase PAN automatically",
            "Don't interfere with user's input method"
          ]}
        />

        {/* Contextual Help */}
        <IntelligenceFeature
          icon={<Book className="text-purple-600" />}
          title="Contextual Help"
          description="Show relevant help, examples, and tips based on current field"
          implementation={[
            "Tooltip icon next to label",
            "Expandable 'Why we need this' section",
            "Example values: 'e.g., 1234 5678 9012'",
            "Link to full help documentation"
          ]}
        />

        {/* Eligibility Check */}
        <IntelligenceFeature
          icon={<Shield className="text-red-600" />}
          title="Eligibility Check"
          description="Validate user eligibility before allowing form start"
          implementation={[
            "Pre-screening questions",
            "Check age, residency, other criteria",
            "Show clear ineligibility message",
            "Suggest alternative services"
          ]}
        />

        {/* Review Summary */}
        <IntelligenceFeature
          icon={<Eye className="text-primary" />}
          title="Review & Confirm"
          description="Show summary of all entered data before final submission"
          implementation={[
            "Display data in readable format (not form)",
            "'Edit' button returns to specific step",
            "Confirm declaration/consent",
            "Final 'Submit' only on review page"
          ]}
        />

        {/* Correction Flow */}
        <IntelligenceFeature
          icon={<RefreshCw className="text-yellow-600" />}
          title="Correction & Resubmit"
          description="Allow users to fix and resubmit rejected/returned applications"
          implementation={[
            "Show rejection reason clearly",
            "Highlight fields needing correction",
            "Allow editing only flagged fields",
            "Track correction history"
          ]}
        />

        {/* Assisted Mode */}
        <IntelligenceFeature
          icon={<HelpCircle className="text-teal-600" />}
          title="Assisted Completion"
          description="Extra help mode for users who need more guidance"
          implementation={[
            "'Help me fill this form' mode",
            "Step-by-step instructions",
            "Read-aloud field labels (accessibility)",
            "Live chat or helpline link"
          ]}
        />

        {/* Long-Form Tools */}
        <IntelligenceFeature
          icon={<Clock className="text-indigo-600" />}
          title="Long-Form Experience"
          description="Special features for forms that take >10 minutes to complete"
          implementation={[
            "Save & Exit button prominently placed",
            "Progress indicator (40% complete)",
            "Session timeout warning (2min before)",
            "Estimate time remaining per step"
          ]}
        />
      </div>
    </section>
  );
}

// ==================== ACCESSIBILITY SECTION ====================

function AccessibilitySection() {
  return (
    <section id="accessibility" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Accessibility Requirements</h2>
      </div>

      <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Shield size={20} className="text-red-600" />
          WCAG 2.1 AA Compliance - Mandatory for Government Forms
        </h3>
        <p className="text-sm text-muted-foreground">
          All government forms must meet WCAG 2.1 Level AA standards. This is not optional. 
          Forms must work for citizens using screen readers, keyboard-only navigation, voice input, 
          and other assistive technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Labels & Instructions */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Labels & Instructions (WCAG 3.3.2)</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityRule
              rule="Every input has a visible label"
              example='<label for="email">Email Address</label>'
            />
            <AccessibilityRule
              rule="Use <label> element, not placeholder"
              example="Placeholder: 'Enter email' is NOT a label"
            />
            <AccessibilityRule
              rule="Mark required fields clearly"
              example='<span class="required">*</span> or "required" text'
            />
            <AccessibilityRule
              rule="Provide instructions before form"
              example='"Fill all fields marked with * asterisk"'
            />
          </div>
        </div>

        {/* Error Identification */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Error Identification (WCAG 3.3.1)</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityRule
              rule="Identify errors in text, not just color"
              example='"❌ Email is required" not just red border'
            />
            <AccessibilityRule
              rule="Use aria-invalid for screen readers"
              example='<input aria-invalid="true" aria-describedby="error-msg">'
            />
            <AccessibilityRule
              rule="Link error summary to fields"
              example='<a href="#email-field">Email error</a>'
            />
            <AccessibilityRule
              rule="Announce errors with aria-live"
              example='<div aria-live="assertive">Error: ...</div>'
            />
          </div>
        </div>

        {/* Keyboard Navigation */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Keyboard Navigation (WCAG 2.1.1)</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityRule
              rule="Tab through all form controls in logical order"
              example="Name → Email → Phone → Submit"
            />
            <AccessibilityRule
              rule="Enter key submits form from text inputs"
              example="Don't require mouse click on Submit"
            />
            <AccessibilityRule
              rule="Escape key closes modals/dialogs"
              example="Help popup closes with ESC"
            />
            <AccessibilityRule
              rule="No keyboard traps"
              example="User can Tab in and Tab out of every element"
            />
          </div>
        </div>

        {/* Visual Design */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Visual Design (WCAG 1.4.3)</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <AccessibilityRule
              rule="Minimum contrast ratio 4.5:1 for text"
              example="Black on white: 21:1 ✅; Gray on light gray: 2:1 ❌"
            />
            <AccessibilityRule
              rule="Larger touch targets: 44x44px minimum"
              example="Buttons, checkboxes, radio buttons"
            />
            <AccessibilityRule
              rule="Don't rely on color alone for meaning"
              example='Use icons + text: "❌ Error" not just red text'
            />
            <AccessibilityRule
              rule="Support 200% zoom without horizontal scroll"
              example="Use responsive, flexible layouts"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== IMPLEMENTATION SECTION ====================

function ImplementationSection() {
  return (
    <section id="implementation" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Implementation Guide</h2>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Quick Start: Building Your First Form</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4 text-sm">
            <ImplementationStep
              number={1}
              title="Choose Form Pattern"
              description="Decide which pattern fits your use case"
              details={[
                "3-10 fields, single context → Simple Form",
                "10+ fields, multiple sections → Multi-Step Form",
                "Different users need different fields → Conditional Logic",
                "Long completion time (>10min) → Save & Resume"
              ]}
            />
            <ImplementationStep
              number={2}
              title="Plan Field Structure"
              description="List all fields, mark required vs optional"
              details={[
                "Group related fields (personal, address, documents)",
                "Identify dependencies (if X then show Y)",
                "Define validation rules for each field",
                "Write helper text and examples"
              ]}
            />
            <ImplementationStep
              number={3}
              title="Implement Components"
              description="Use UX4G form components with proper markup"
              details={[
                "Use <label for='id'> for every input",
                "Add aria-required='true' for required fields",
                "Include helper text with aria-describedby",
                "Implement validation on blur, not keypress"
              ]}
            />
            <ImplementationStep
              number={4}
              title="Add Intelligence Features"
              description="Enhance with auto-save, pre-fill, smart validation"
              details={[
                "Auto-save draft every 2 minutes (if >5min form)",
                "Pre-fill known data from user profile",
                "Show error summary before submission",
                "Add review & confirm page for critical forms"
              ]}
            />
            <ImplementationStep
              number={5}
              title="Test Accessibility"
              description="Validate WCAG compliance and assistive technology support"
              details={[
                "Keyboard-only navigation (Tab, Enter, Escape)",
                "Screen reader testing (NVDA, JAWS, VoiceOver)",
                "Color contrast check (4.5:1 minimum)",
                "Zoom to 200% and verify layout works"
              ]}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Code Example: Simple Form */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: Simple Form</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`<form onSubmit={handleSubmit}>
  {/* Error Summary */}
  {errors.length > 0 && (
    <div role="alert" aria-live="assertive">
      <h3>Fix {errors.length} errors:</h3>
      <ul>
        {errors.map(err => (
          <li key={err.field}>
            <a href={\`#\${err.field}\`}>
              {err.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* Field: Name */}
  <div>
    <label htmlFor="name">
      Full Name 
      <span aria-label="required">*</span>
    </label>
    <input
      id="name"
      type="text"
      required
      aria-required="true"
      aria-invalid={!!errors.name}
      aria-describedby="name-help name-error"
      onBlur={validateField}
    />
    <p id="name-help">
      As shown on ID document
    </p>
    {errors.name && (
      <p id="name-error" role="alert">
        ❌ {errors.name}
      </p>
    )}
  </div>

  {/* Submit */}
  <button type="submit">
    Submit Application
  </button>
</form>`}
            </pre>
          </div>
        </div>

        {/* Code Example: Auto-Save */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Code Example: Auto-Save</h3>
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`// Auto-save with debounce
const [formData, setFormData] = useState({});
const [lastSaved, setLastSaved] = useState(null);

useEffect(() => {
  // Debounce save by 2 seconds
  const timer = setTimeout(() => {
    saveDraft(formData);
  }, 2000);
  
  return () => clearTimeout(timer);
}, [formData]);

async function saveDraft(data) {
  try {
    const response = await fetch(
      '/api/drafts/save',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formId: 'certificate-app',
          data: data,
          timestamp: new Date()
        })
      }
    );
    
    if (response.ok) {
      const saved = new Date();
      setLastSaved(saved);
      // Show "Saved at HH:MM" message
    }
  } catch (error) {
    console.error('Save failed:', error);
    // Show save error to user
  }
}

// On form field change
function handleChange(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function SystemArchitecture() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-br from-orange-50 to-green-50 border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">System Architecture</h3>
      </div>
      <div className="p-4 text-xs space-y-3">
        <div>
          <p className="font-bold text-foreground mb-1">Components</p>
          <p className="text-muted-foreground">8 reusable form controls</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Patterns</p>
          <p className="text-muted-foreground">10 form patterns (simple to complex)</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Intelligence</p>
          <p className="text-muted-foreground">9 smart features (auto-save, validation, etc.)</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Accessibility</p>
          <p className="text-muted-foreground">WCAG 2.1 AA compliant</p>
        </div>
      </div>
    </div>
  );
}

function QuickStart() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Start</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <QuickStartLink step="1" text="Choose your pattern" />
        <QuickStartLink step="2" text="Plan field structure" />
        <QuickStartLink step="3" text="Implement components" />
        <QuickStartLink step="4" text="Add intelligence features" />
        <QuickStartLink step="5" text="Test accessibility" />
      </div>
    </div>
  );
}

function PatternIndex() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Pattern Index</h3>
      </div>
      <div className="p-4 space-y-1 text-xs">
        <PatternLink text="Simple Form" />
        <PatternLink text="Multi-Step Form" />
        <PatternLink text="Conditional Logic" />
        <PatternLink text="Progressive Disclosure" />
        <PatternLink text="Validation System" />
        <PatternLink text="Save & Resume" />
        <PatternLink text="Review & Confirm" />
        <PatternLink text="Correction Flow" />
        <PatternLink text="Assisted Completion" />
        <PatternLink text="Long-Form Experience" />
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Resources</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <ResourceLink text="WCAG 2.1 Form Guidelines" />
        <ResourceLink text="Validation Best Practices" />
        <ResourceLink text="Accessibility Testing Tools" />
        <ResourceLink text="Form Component Library" />
        <ResourceLink text="Code Examples & Templates" />
      </div>
    </div>
  );
}

// ==================== INTERACTIVE EXAMPLES ====================

function SimpleFormExample() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState<any>({});
  
  return (
    <div className="bg-background border-2 border-border rounded p-6">
      <h4 className="font-bold text-foreground mb-4">Contact Form Example</h4>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-foreground mb-2">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input 
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border-2 border-border rounded"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-foreground mb-2">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input 
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border-2 border-border rounded"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <p className="text-xs text-muted-foreground mt-1">We'll send confirmation to this email</p>
        </div>
        <button className="w-full px-4 py-3 bg-primary text-white font-bold rounded">
          Submit
        </button>
      </div>
    </div>
  );
}

function MultiStepFormExample() {
  const [step, setStep] = useState(1);
  
  return (
    <div className="bg-background border-2 border-border rounded p-6">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-foreground">Step {step} of 3</span>
          <span className="text-xs text-muted-foreground">Personal Info</span>
        </div>
        <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>
      
      {step === 1 && (
        <div className="space-y-3">
          <input 
            type="text" 
            placeholder="Full Name"
            className="w-full px-4 py-3 border-2 border-border rounded"
          />
          <input 
            type="email" 
            placeholder="Email"
            className="w-full px-4 py-3 border-2 border-border rounded"
          />
        </div>
      )}
      
      <div className="flex gap-2 mt-4">
        {step > 1 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="flex-1 px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded"
          >
            Back
          </button>
        )}
        <button 
          onClick={() => step < 3 && setStep(step + 1)}
          className="flex-1 px-4 py-3 bg-primary text-white font-bold rounded"
        >
          {step === 3 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}

function ConditionalLogicExample() {
  const [hasVehicle, setHasVehicle] = useState(false);
  
  return (
    <div className="bg-background border-2 border-border rounded p-6">
      <h4 className="font-bold text-foreground mb-4">Conditional Fields Demo</h4>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-foreground mb-2">
            Do you own a vehicle? <span className="text-red-600">*</span>
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 border-2 border-border rounded cursor-pointer hover:bg-background">
              <input 
                type="radio" 
                name="vehicle" 
                checked={hasVehicle}
                onChange={() => setHasVehicle(true)}
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-3 p-3 border-2 border-border rounded cursor-pointer hover:bg-background">
              <input 
                type="radio" 
                name="vehicle"
                checked={!hasVehicle}
                onChange={() => setHasVehicle(false)}
              />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>
        
        {hasVehicle && (
          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded p-4 space-y-3">
            <p className="text-sm font-bold text-foreground">Vehicle Details</p>
            <input 
              type="text" 
              placeholder="Vehicle Registration Number"
              className="w-full px-4 py-3 border-2 border-border rounded"
            />
            <select className="w-full px-4 py-3 border-2 border-border rounded bg-card">
              <option value="">-- Vehicle Type --</option>
              <option>Two Wheeler</option>
              <option>Four Wheeler</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

function ProgressiveDisclosureExample() {
  const [showOptional, setShowOptional] = useState(false);
  
  return (
    <div className="bg-background border-2 border-border rounded p-6">
      <h4 className="font-bold text-foreground mb-4">Basic Contact Info</h4>
      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Full Name *"
          className="w-full px-4 py-3 border-2 border-border rounded"
        />
        <input 
          type="email" 
          placeholder="Email *"
          className="w-full px-4 py-3 border-2 border-border rounded"
        />
        
        {!showOptional && (
          <button 
            onClick={() => setShowOptional(true)}
            className="text-sm text-primary hover:underline flex items-center gap-2"
          >
            <ChevronRight size={14} />
            Show optional fields (alternate contact, address)
          </button>
        )}
        
        {showOptional && (
          <div className="pt-4 border-t-2 border-border space-y-3">
            <p className="text-sm font-bold text-muted-foreground">Optional Information</p>
            <input 
              type="tel" 
              placeholder="Alternate Phone"
              className="w-full px-4 py-3 border-2 border-border rounded"
            />
            <input 
              type="text" 
              placeholder="Address Line 1"
              className="w-full px-4 py-3 border-2 border-border rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function ValidationExample() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  
  const validateEmail = (value: string) => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setIsValid(valid);
  };
  
  return (
    <div className="bg-background border-2 border-border rounded p-6">
      <h4 className="font-bold text-foreground mb-4">Inline Validation Demo</h4>
      <div>
        <label className="block text-sm font-bold text-foreground mb-2">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => validateEmail(e.target.value)}
          className={`w-full px-4 py-3 border-2 rounded ${
            isValid === null ? 'border-border' :
            isValid ? 'border-green-400 bg-green-50' :
            'border-red-400 bg-red-50'
          }`}
          placeholder="you@example.com"
        />
        {isValid === true && (
          <p className="text-xs text-green-700 mt-1 flex items-center gap-1">
            <CheckCircle size={12} />
            Valid email address
          </p>
        )}
        {isValid === false && (
          <p className="text-xs text-red-700 mt-1 flex items-center gap-1">
            <AlertCircle size={12} />
            Enter a valid email address
          </p>
        )}
      </div>
    </div>
  );
}

function SaveResumeExample() {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  
  const handleSave = () => {
    setLastSaved(new Date());
  };
  
  return (
    <div className="bg-background border-2 border-border rounded p-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-foreground">Application Form</h4>
        {lastSaved && (
          <span className="text-xs text-green-700 flex items-center gap-1">
            <CheckCircle size={12} />
            Saved at {lastSaved.toLocaleTimeString()}
          </span>
        )}
      </div>
      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Enter data..."
          onChange={handleSave}
          className="w-full px-4 py-3 border-2 border-border rounded"
        />
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 rounded p-3 text-sm">
          <Info size={14} className="inline mr-2 text-blue-600" />
          Your progress is saved automatically every 2 minutes
        </div>
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-3 border-2 border-border bg-card text-muted-foreground font-bold rounded">
            Save & Exit
          </button>
          <button className="flex-1 px-4 py-3 bg-primary text-white font-bold rounded">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function CapabilityItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-2">
      {icon}
      <span className="text-muted-foreground flex-1">{text}</span>
    </div>
  );
}

function UserGroup({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <p className="font-bold text-foreground mb-1">{title}</p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function PrincipleCard({ number, title, description, examples }: {
  number: number;
  title: string;
  description: string;
  examples: string[];
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-orange-50 to-green-50 border-b-2 border-border px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
            {number}
          </div>
          <h3 className="font-bold text-foreground">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="bg-background border border-border rounded p-3">
          <p className="text-xs font-bold text-foreground mb-2">Examples:</p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            {examples.map((ex, i) => (
              <li key={i} className="flex items-start gap-2">
                <ArrowRight size={12} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FormPattern({ number, title, description, complexity, useWhen, keyFeatures, exampleComponent }: {
  number: number;
  title: string;
  description: string;
  complexity: string;
  useWhen: string[];
  keyFeatures: string[];
  exampleComponent: React.ReactNode;
}) {
  const complexityColor = complexity === 'Low' ? 'bg-green-100 text-green-800 border-green-300' :
                          complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' :
                          'bg-red-100 text-red-800 border-red-300';
  
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
              {number}
            </div>
            <h3 className="font-bold text-foreground">{title}</h3>
          </div>
          <span className={`text-xs px-3 py-1 border rounded font-bold ${complexityColor}`}>
            {complexity} Complexity
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm font-bold text-foreground mb-2">Use When:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {useWhen.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground mb-2">Key Features:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {keyFeatures.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Zap size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-foreground mb-3">Interactive Example:</p>
          {exampleComponent}
        </div>
      </div>
    </div>
  );
}

function ComponentExample({ title, description, children }: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
        <h3 className="font-bold text-foreground mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

function ValidationTiming({ trigger, description, pros, cons }: {
  trigger: string;
  description: string;
  pros: string;
  cons: string;
}) {
  return (
    <div className="border-b border-border pb-3">
      <p className="font-bold text-foreground mb-1">{trigger}</p>
      <p className="text-muted-foreground mb-2">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
        <div className="flex items-start gap-1">
          <Check size={12} className="text-green-600 mt-0.5" />
          <span className="text-muted-foreground">{pros}</span>
        </div>
        <div className="flex items-start gap-1">
          <X size={12} className="text-red-600 mt-0.5" />
          <span className="text-muted-foreground">{cons}</span>
        </div>
      </div>
    </div>
  );
}

function IntelligenceFeature({ icon, title, description, implementation }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  implementation: string[];
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-b-2 border-border px-4 py-3">
        <div className="flex items-center gap-2 mb-1">
          {icon}
          <h4 className="font-bold text-foreground text-sm">{title}</h4>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="bg-background border border-border rounded p-3">
          <p className="text-xs font-bold text-foreground mb-2">Implementation:</p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            {implementation.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight size={10} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function AccessibilityRule({ rule, example }: { rule: string; example: string }) {
  return (
    <div>
      <p className="font-bold text-foreground mb-1">{rule}</p>
      <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{example}</code>
    </div>
  );
}

function ImplementationStep({ number, title, description, details }: {
  number: number;
  title: string;
  description: string;
  details: string[];
}) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground mb-2">{description}</p>
        <ul className="space-y-1 ml-4">
          {details.map((detail, i) => (
            <li key={i} className="text-muted-foreground flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function QuickStartLink({ step, text }: { step: string; text: string }) {
  return (
    <a href="#implementation" className="flex items-center gap-2 p-2 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors">
      <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
        {step}
      </div>
      <span className="text-foreground">{text}</span>
    </a>
  );
}

function PatternLink({ text }: { text: string }) {
  return (
    <a href="#patterns" className="block p-2 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors">
      <div className="flex items-center gap-2">
        <Layers size={12} className="text-primary" />
        <span className="text-foreground">{text}</span>
      </div>
    </a>
  );
}

function ResourceLink({ text }: { text: string }) {
  return (
    <a href="#" className="flex items-center gap-2 p-2 bg-background border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors text-foreground">
      <ArrowRight size={12} className="text-primary" />
      <span>{text}</span>
    </a>
  );
}
