import { Link } from "react-router";
import { FileText, CheckCircle, AlertCircle, Info, ChevronRight, ArrowRight, MessageSquare, Languages, Shield, Eye } from "lucide-react";
import { 
  LABELS, 
  HELPER_TEXT, 
  ERROR_MESSAGES, 
  SUCCESS_MESSAGES, 
  VALIDATION_MESSAGES,
  CONSENT_LANGUAGE,
  INFO_MESSAGES,
  BUTTON_TEXT,
  PLACEHOLDERS
} from "../content/content-library";

export default function ContentDesignSystem() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 border-2 border-border rounded flex items-center justify-center">
                  <MessageSquare size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Core System</div>
                  <h1 className="text-3xl font-bold text-foreground">Content Design System</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Standardized content library for government digital services. Consistent labels, helper text, 
                error messages, and consent language across all user journeys. Write once, use everywhere—ensuring 
                clarity, accessibility, and plain language for all citizens.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">System ID: <span className="font-bold text-foreground">UX4G-SYS-CONTENT-001</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
                  <span className="text-muted-foreground">Version: <span className="font-bold text-foreground">2.0.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
                  <span className="text-muted-foreground">Updated: <span className="font-bold text-foreground">April 2026</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 dark:bg-green-950/30 border-2 border-green-300 dark:border-green-800 rounded text-green-800 dark:text-green-300 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded text-blue-700 dark:text-blue-300 font-bold text-xs text-center uppercase">
                Content<br/>Standard
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
              { id: "principles", label: "Principles" },
              { id: "labels", label: "Labels" },
              { id: "helper-text", label: "Helper Text" },
              { id: "errors", label: "Error Messages" },
              { id: "success", label: "Success Messages" },
              { id: "consent", label: "Consent Language" },
              { id: "usage", label: "Usage Guide" }
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
            <LabelsSection />
            <HelperTextSection />
            <ErrorMessagesSection />
            <SuccessMessagesSection />
            <ConsentLanguageSection />
            <UsageGuideSection />
          </div>

          {/* Sidebar - 3 columns */}
          <div className="col-span-3 space-y-6 sticky top-24 self-start">
            <ContentLibrary />
            <QuickReference />
            <AppliedExamples />
            <Resources />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Content Design System</div>
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

      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
        <h3 className="font-bold text-foreground mb-4 text-lg">Why Content Design Matters</h3>
        <p className="text-muted-foreground mb-4">
          Inconsistent labels, confusing error messages, and unclear helper text create friction for users. 
          The Content Design System provides a single source of truth for all text across government services—
          ensuring every citizen gets the same clear, helpful guidance regardless of which service they use.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded p-4">
            <Languages size={24} className="text-green-600 mb-2" />
            <p className="font-bold text-foreground mb-1">Plain Language</p>
            <p className="text-sm text-muted-foreground">Simple words everyone understands</p>
          </div>
          <div className="bg-card border border-border rounded p-4">
            <CheckCircle size={24} className="text-blue-600 mb-2" />
            <p className="font-bold text-foreground mb-1">Consistency</p>
            <p className="text-sm text-muted-foreground">Same labels across all services</p>
          </div>
          <div className="bg-card border border-border rounded p-4">
            <Shield size={24} className="text-purple-600 mb-2" />
            <p className="font-bold text-foreground mb-1">Accessibility</p>
            <p className="text-sm text-muted-foreground">Works for all citizens and assistive tech</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* What's Included */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 dark:border-blue-800 dark:border-blue-800 px-6 py-4">
            <h3 className="font-bold text-foreground">What's Included</h3>
          </div>
          <div className="p-6 space-y-2 text-sm">
            <ContentItem count={50} text="Standardized field labels" />
            <ContentItem count={30} text="Helper text templates" />
            <ContentItem count={40} text="Error message patterns" />
            <ContentItem count={20} text="Success message templates" />
            <ContentItem count={25} text="Validation messages" />
            <ContentItem count={15} text="Consent language templates" />
            <ContentItem count={30} text="Button text standards" />
            <ContentItem count={20} text="Placeholder text examples" />
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 dark:border-green-800 dark:border-green-800 px-6 py-4">
            <h3 className="font-bold text-foreground">Benefits</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <BenefitItem 
              title="Faster Development"
              description="No need to write labels and messages from scratch every time"
            />
            <BenefitItem 
              title="Better User Experience"
              description="Consistent, familiar language reduces cognitive load"
            />
            <BenefitItem 
              title="Easier Translation"
              description="Single content library makes multilingual support simpler"
            />
            <BenefitItem 
              title="WCAG Compliance"
              description="All content tested for accessibility and plain language"
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
        <h2 className="text-2xl font-bold text-foreground">Content Design Principles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PrincipleCard
          number={1}
          title="Use Plain Language"
          description="Write for a reading level of Class 8-10. Avoid jargon, technical terms, and government acronyms."
          examples={[
            "❌ 'Domicile Certificate' → ✅ 'Certificate proving you live in this state'",
            "❌ 'As per Section 4(2)' → ✅ 'According to the rules'",
            "❌ 'Authentication failed' → ✅ 'The password you entered is incorrect'"
          ]}
        />
        <PrincipleCard
          number={2}
          title="Be Specific and Actionable"
          description="Tell users exactly what to do. Don't just identify problems—provide solutions."
          examples={[
            "❌ 'Invalid input' → ✅ 'Enter a 10-digit mobile number'",
            "❌ 'Error' → ✅ 'Email is required. Please enter your email address.'",
            "❌ 'Check format' → ✅ 'Enter Aadhaar as 1234 5678 9012'"
          ]}
        />
        <PrincipleCard
          number={3}
          title="Be Concise"
          description="Respect user's time. Use the fewest words possible while remaining clear."
          examples={[
            "❌ 'Please enter your complete full legal name as it appears on your official government-issued identity documents' → ✅ 'Full name as shown on your ID'",
            "❌ 'Click on the button below to proceed' → ✅ 'Continue'",
            "❌ 'In order to submit' → ✅ 'To submit'"
          ]}
        />
        <PrincipleCard
          number={4}
          title="Use Positive Language"
          description="Frame messages positively. Focus on what users can do, not what they can't."
          examples={[
            "❌ 'Don't use special characters' → ✅ 'Use only letters and numbers'",
            "❌ 'You can't proceed without...' → ✅ 'To continue, please provide...'",
            "❌ 'Missing required field' → ✅ 'Please enter your email address'"
          ]}
        />
        <PrincipleCard
          number={5}
          title="Maintain Consistent Terminology"
          description="Use the same words for the same concepts everywhere. Don't vary just for style."
          examples={[
            "✅ Always 'Mobile Number' (not 'Phone', 'Cell', 'Contact Number')",
            "✅ Always 'Sign In' (not 'Log In', 'Login', 'Enter')",
            "✅ Always 'Aadhaar Number' (not 'UID', 'UIDAI Number', 'Aadhaar ID')"
          ]}
        />
        <PrincipleCard
          number={6}
          title="Respect User Dignity"
          description="Be respectful and empathetic. Avoid blame. Assume users are trying their best."
          examples={[
            "❌ 'You entered the wrong password' → ✅ 'The password is incorrect'",
            "❌ 'You failed to...' → ✅ 'Please provide...'",
            "❌ 'Invalid' → ✅ 'Enter a valid...'"
          ]}
        />
      </div>
    </section>
  );
}

// ==================== LABELS SECTION ====================

function LabelsSection() {
  return (
    <section id="labels" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Standardized Field Labels</h2>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <Info size={20} className="text-yellow-600" />
          Label Writing Rules
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <p className="font-bold text-foreground mb-2">✅ DO:</p>
            <ul className="ml-4 space-y-1">
              <li>• Use sentence case (not Title Case)</li>
              <li>• Be concise (1-4 words ideal)</li>
              <li>• Use familiar everyday language</li>
              <li>• Mark required fields with asterisk *</li>
              <li>• Add (Optional) for optional fields</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">❌ DON'T:</p>
            <ul className="ml-4 space-y-1">
              <li>• Use colons after labels</li>
              <li>• Use abbreviations (except widely known ones)</li>
              <li>• Use ALL CAPS or Title Case</li>
              <li>• Include instructions in labels</li>
              <li>• Use technical jargon</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <LabelCategory
          title="Personal Information"
          labels={[
            { standard: LABELS.fullName, example: "Priya Sharma" },
            { standard: LABELS.dateOfBirth, example: "15/05/1990" },
            { standard: LABELS.gender, example: "Female" },
            { standard: LABELS.fatherName, example: "Rajesh Kumar Sharma" },
            { standard: LABELS.motherName, example: "Sunita Sharma" }
          ]}
        />
        <LabelCategory
          title="Contact Information"
          labels={[
            { standard: LABELS.mobileNumber, example: "9876543210" },
            { standard: LABELS.email, example: "priya@example.com" },
            { standard: LABELS.addressLine1, example: "45, MG Road" },
            { standard: LABELS.city, example: "Bangalore" },
            { standard: LABELS.pincode, example: "560001" }
          ]}
        />
        <LabelCategory
          title="Government IDs"
          labels={[
            { standard: LABELS.aadhaarNumber, example: "1234 5678 9012" },
            { standard: LABELS.panNumber, example: "ABCDE1234F" },
            { standard: LABELS.voterIdNumber, example: "ABC1234567" },
            { standard: LABELS.passportNumber, example: "K1234567" },
            { standard: LABELS.drivingLicenseNumber, example: "DL-0123456789" }
          ]}
        />
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Usage in Code</h3>
        </div>
        <div className="p-6">
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`import { LABELS, getRequiredLabel } from '../content/content-library';

// Simple usage
<label>{LABELS.fullName}</label>

// With required indicator
<label>{getRequiredLabel(LABELS.mobileNumber)}</label>
// Outputs: "Mobile Number *"

// With optional indicator
<label>{LABELS.alternateEmail} (Optional)</label>
// Outputs: "Alternate Email Address (Optional)"`}
          </pre>
        </div>
      </div>
    </section>
  );
}

// ==================== HELPER TEXT SECTION ====================

function HelperTextSection() {
  return (
    <section id="helper-text" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Helper Text Patterns</h2>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3">When to Use Helper Text</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
          <div>
            <p className="font-bold text-green-600 mb-2">✅ Use helper text when:</p>
            <ul className="ml-4 space-y-1">
              <li>• Format is not obvious (e.g., Aadhaar: 1234 5678 9012)</li>
              <li>• User needs context (e.g., "As shown on ID card")</li>
              <li>• Privacy matters (e.g., "We'll send OTP here")</li>
              <li>• Validation is complex (e.g., password requirements)</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-red-600 mb-2">❌ Don't use helper text when:</p>
            <ul className="ml-4 space-y-1">
              <li>• Label is self-explanatory (e.g., "Email Address")</li>
              <li>• It repeats the label</li>
              <li>• It's too verbose</li>
              <li>• Format is obvious from placeholder</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HelperTextExample
          field={LABELS.aadhaarNumber}
          helper={HELPER_TEXT.aadhaarNumber}
          placeholder={PLACEHOLDERS.aadhaarNumber}
          explanation="Format example + space information"
        />
        <HelperTextExample
          field={LABELS.email}
          helper={HELPER_TEXT.email}
          placeholder={PLACEHOLDERS.email}
          explanation="Purpose + what happens next"
        />
        <HelperTextExample
          field={LABELS.password}
          helper={HELPER_TEXT.password}
          placeholder={PLACEHOLDERS.password}
          explanation="Security requirements upfront"
        />
        <HelperTextExample
          field={LABELS.uploadDocument}
          helper={HELPER_TEXT.uploadDocument}
          placeholder="Choose file"
          explanation="File type + size constraints"
        />
      </div>
    </section>
  );
}

// ==================== ERROR MESSAGES SECTION ====================

function ErrorMessagesSection() {
  return (
    <section id="errors" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Error Message Standards</h2>
      </div>

      <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3">Error Message Formula</h3>
        <div className="bg-card border border-red-200 dark:border-red-800 dark:border-red-800 dark:border-red-800 rounded p-4 mb-4">
          <p className="font-bold text-foreground text-center text-lg">
            [Problem] + [What to do about it]
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-bold text-red-600 mb-2">❌ Bad Error Messages:</p>
            <ul className="ml-4 space-y-1 text-muted-foreground">
              <li>• "Error"</li>
              <li>• "Invalid input"</li>
              <li>• "Validation failed"</li>
              <li>• "Error code: 400"</li>
              <li>• "Something went wrong"</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-green-600 mb-2">✅ Good Error Messages:</p>
            <ul className="ml-4 space-y-1 text-muted-foreground">
              <li>• "Email is required. Please enter your email address."</li>
              <li>• "Enter a valid 10-digit mobile number"</li>
              <li>• "Password must be at least 8 characters"</li>
              <li>• "File size exceeds 5MB. Upload a smaller file."</li>
              <li>• "Server error. Try again or contact support."</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ErrorMessageCategory
          title="Required Field Errors"
          examples={[
            { wrong: "This field is required", right: ERROR_MESSAGES.required("Mobile Number") },
            { wrong: "Missing field", right: ERROR_MESSAGES.required("Email Address") },
            { wrong: "Cannot be empty", right: ERROR_MESSAGES.required("Full Name") }
          ]}
        />
        <ErrorMessageCategory
          title="Format Validation Errors"
          examples={[
            { wrong: "Invalid email", right: ERROR_MESSAGES.invalidEmail },
            { wrong: "Wrong mobile", right: ERROR_MESSAGES.invalidMobile },
            { wrong: "Aadhaar error", right: ERROR_MESSAGES.invalidAadhaar },
            { wrong: "Bad PAN", right: ERROR_MESSAGES.invalidPAN }
          ]}
        />
        <ErrorMessageCategory
          title="Length Validation Errors"
          examples={[
            { wrong: "Too short", right: ERROR_MESSAGES.tooShort("Password", 8) },
            { wrong: "Too long", right: ERROR_MESSAGES.tooLong("Comment", 500) },
            { wrong: "Wrong length", right: ERROR_MESSAGES.exactLength("OTP", 6) }
          ]}
        />
        <ErrorMessageCategory
          title="Network & Server Errors"
          examples={[
            { wrong: "Connection failed", right: ERROR_MESSAGES.networkError },
            { wrong: "500 error", right: ERROR_MESSAGES.serverError },
            { wrong: "Timeout", right: ERROR_MESSAGES.timeout }
          ]}
        />
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Usage in Code</h3>
        </div>
        <div className="p-6">
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`import { ERROR_MESSAGES, formatErrorMessage } from '../content/content-library';

// Direct usage
if (!email) {
  setError(ERROR_MESSAGES.required("Email Address"));
}

// With helper function
const error = formatErrorMessage("Mobile Number", "required");

// Validation
if (!/^\\d{10}$/.test(mobile)) {
  setError(ERROR_MESSAGES.invalidMobile);
}

// Length validation
if (password.length < 8) {
  setError(ERROR_MESSAGES.passwordTooShort);
}

// Display error
{error && (
  <div role="alert" className="error">
    <AlertCircle size={14} />
    {error}
  </div>
)}`}
          </pre>
        </div>
      </div>
    </section>
  );
}

// ==================== SUCCESS MESSAGES SECTION ====================

function SuccessMessagesSection() {
  return (
    <section id="success" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Success Message Patterns</h2>
      </div>

      <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3">Success Message Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
          <div>
            <p className="font-bold text-foreground mb-2">Structure:</p>
            <ul className="ml-4 space-y-1">
              <li>• Confirm what happened</li>
              <li>• Provide reference number if applicable</li>
              <li>• Tell user what happens next</li>
              <li>• Offer related actions</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">Tone:</p>
            <ul className="ml-4 space-y-1">
              <li>• Be congratulatory but professional</li>
              <li>• Use active voice</li>
              <li>• Be specific about outcome</li>
              <li>• Avoid excessive exclamation marks</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SuccessMessageExample
          category="Form Submission"
          message={SUCCESS_MESSAGES.applicationSubmitted}
          nextSteps={[
            "Your application number is ABC123456",
            "We'll review it within 7 working days",
            "You'll receive updates via email and SMS"
          ]}
        />
        <SuccessMessageExample
          category="Payment"
          message={SUCCESS_MESSAGES.paymentSuccessful + " TXN987654321"}
          nextSteps={[
            "Amount: ₹500",
            "Receipt sent to your email",
            "Download receipt"
          ]}
        />
        <SuccessMessageExample
          category="Document Upload"
          message={SUCCESS_MESSAGES.documentUploaded}
          nextSteps={[
            "Aadhaar card uploaded successfully",
            "You can upload more documents or continue"
          ]}
        />
        <SuccessMessageExample
          category="Account Creation"
          message={SUCCESS_MESSAGES.accountCreated}
          nextSteps={[
            "Check your email for verification link",
            "Sign in after verification"
          ]}
        />
      </div>
    </section>
  );
}

// ==================== CONSENT LANGUAGE SECTION ====================

function ConsentLanguageSection() {
  return (
    <section id="consent" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Consent & Legal Language</h2>
      </div>

      <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3">Legal Language Requirements</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Consent language must be legally sound while remaining understandable. All templates 
          reviewed by legal and plain language experts. Use standard templates unless you have 
          specific legal requirements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <p className="font-bold text-foreground mb-2">✅ Must include:</p>
            <ul className="ml-4 space-y-1">
              <li>• What data is collected</li>
              <li>• Why it's collected</li>
              <li>• How it will be used</li>
              <li>• Who it will be shared with</li>
              <li>• User's rights</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-foreground mb-2">❌ Avoid:</p>
            <ul className="ml-4 space-y-1">
              <li>• Legal jargon and Latin phrases</li>
              <li>• Excessively long sentences</li>
              <li>• Double negatives</li>
              <li>• Pre-checked consent boxes</li>
              <li>• Buried terms in fine print</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ConsentTemplate
          type="Terms & Conditions"
          short={CONSENT_LANGUAGE.termsAcceptance}
          full={CONSENT_LANGUAGE.termsAcceptanceFull}
        />
        <ConsentTemplate
          type="Privacy Policy"
          short={CONSENT_LANGUAGE.privacyConsent}
          full={CONSENT_LANGUAGE.privacyConsentFull}
        />
        <ConsentTemplate
          type="Data Sharing"
          short={CONSENT_LANGUAGE.dataSharingConsent}
          full={CONSENT_LANGUAGE.dataSharingConsentFull}
        />
        <ConsentTemplate
          type="Declaration of Truthfulness"
          short={CONSENT_LANGUAGE.declarationTruthfulness}
          full={CONSENT_LANGUAGE.declarationTruthfulnessFull}
        />
        <ConsentTemplate
          type="Aadhaar Consent"
          short={CONSENT_LANGUAGE.aadhaarConsent}
          full={CONSENT_LANGUAGE.aadhaarConsentFull}
        />
      </div>
    </section>
  );
}

// ==================== USAGE GUIDE SECTION ====================

function UsageGuideSection() {
  return (
    <section id="usage" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Usage Guide</h2>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 border-2 border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3">How to Use the Content Library</h3>
        <div className="space-y-4 text-sm text-muted-foreground">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">Import the content library</p>
              <code className="bg-muted px-2 py-1 rounded text-xs">
                import &#123; LABELS, ERROR_MESSAGES &#125; from '../content/content-library';
              </code>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">Use constants instead of hardcoded strings</p>
              <code className="bg-muted px-2 py-1 rounded text-xs">
                &lt;label&gt;&#123;LABELS.mobileNumber&#125;&lt;/label&gt;
              </code>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">Apply consistently across all pages</p>
              <p className="text-muted-foreground">Use the same labels for the same fields everywhere</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-muted border-b-2 border-border px-6 py-4">
          <h3 className="font-bold text-foreground">Complete Form Example</h3>
        </div>
        <div className="p-6">
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`import { 
  LABELS, 
  HELPER_TEXT, 
  ERROR_MESSAGES, 
  PLACEHOLDERS,
  getRequiredLabel 
} from '../content/content-library';

function ContactForm() {
  const [errors, setErrors] = useState({});
  
  return (
    <form>
      {/* Mobile Number Field */}
      <div>
        <label htmlFor="mobile">
          {getRequiredLabel(LABELS.mobileNumber)}
        </label>
        <input
          id="mobile"
          type="tel"
          placeholder={PLACEHOLDERS.mobileNumber}
          aria-describedby="mobile-help mobile-error"
        />
        <p id="mobile-help" className="helper-text">
          {HELPER_TEXT.mobileNumber}
        </p>
        {errors.mobile && (
          <p id="mobile-error" role="alert" className="error">
            {ERROR_MESSAGES.invalidMobile}
          </p>
        )}
      </div>
      
      {/* Email Field */}
      <div>
        <label htmlFor="email">
          {getRequiredLabel(LABELS.email)}
        </label>
        <input
          id="email"
          type="email"
          placeholder={PLACEHOLDERS.email}
          aria-describedby="email-help"
        />
        <p id="email-help" className="helper-text">
          {HELPER_TEXT.email}
        </p>
      </div>
      
      <button type="submit">
        {BUTTON_TEXT.submit}
      </button>
    </form>
  );
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function ContentLibrary() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Content Library</h3>
      </div>
      <div className="p-4 text-xs space-y-3">
        <div>
          <p className="font-bold text-foreground mb-1">Location</p>
          <code className="text-muted-foreground bg-muted px-2 py-1 rounded">
            /src/app/content/<br/>content-library.ts
          </code>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Import</p>
          <code className="text-muted-foreground bg-muted px-2 py-1 rounded text-xs">
            import &#123; LABELS &#125;<br/>from '../content/<br/>content-library'
          </code>
        </div>
      </div>
    </div>
  );
}

function QuickReference() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 dark:border-blue-800 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 text-xs space-y-3">
        <div>
          <p className="font-bold text-foreground mb-1">Total Labels</p>
          <p className="text-muted-foreground">50+ standardized</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Error Messages</p>
          <p className="text-muted-foreground">40+ templates</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Consent Templates</p>
          <p className="text-muted-foreground">15+ legal-approved</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Language Level</p>
          <p className="text-muted-foreground">Class 8-10 reading</p>
        </div>
      </div>
    </div>
  );
}

function AppliedExamples() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 dark:border-green-800 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Applied To</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <AppliedLink to="/certificate-form-personal" text="Certificate Form" />
        <AppliedLink to="/reference-service/certificate/sign-in" text="Sign In Page" />
        <AppliedLink to="/certificate-document-upload" text="Document Upload" />
        <AppliedLink to="/certificate-payment-summary" text="Payment Page" />
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
        <ResourceLink text="Plain Language Guidelines" />
        <ResourceLink text="Content Style Guide" />
        <ResourceLink text="Accessibility Writing Tips" />
        <ResourceLink text="Legal Language Templates" />
      </div>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function ContentItem({ count, text }: { count: number; text: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{text}</span>
      <span className="font-bold text-primary">{count}+</span>
    </div>
  );
}

function BenefitItem({ title, description }: { title: string; description: string }) {
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
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border-b-2 border-border px-6 py-4">
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
                <span className="text-primary flex-shrink-0">•</span>
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function LabelCategory({ title, labels }: {
  title: string;
  labels: Array<{ standard: string; example: string }>;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-4 py-3">
        <h4 className="font-bold text-foreground text-sm">{title}</h4>
      </div>
      <div className="p-4">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 font-bold text-foreground">Label</th>
              <th className="text-left py-2 font-bold text-foreground">Example</th>
            </tr>
          </thead>
          <tbody>
            {labels.map((label, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2 font-medium text-foreground">{label.standard}</td>
                <td className="py-2 text-muted-foreground">{label.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function HelperTextExample({ field, helper, placeholder, explanation }: {
  field: string;
  helper: string;
  placeholder: string;
  explanation: string;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 dark:border-blue-800 dark:border-blue-800 px-4 py-3">
        <h4 className="font-bold text-foreground text-sm">{field}</h4>
      </div>
      <div className="p-4">
        <div className="mb-3">
          <input 
            type="text" 
            placeholder={placeholder}
            className="w-full px-3 py-2 border-2 border-border rounded text-sm"
            readOnly
          />
          <p className="text-xs text-muted-foreground mt-1">{helper}</p>
        </div>
        <div className="bg-background border border-border rounded p-2 text-xs text-muted-foreground">
          <p className="font-bold text-foreground mb-1">Why:</p>
          <p>{explanation}</p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessageCategory({ title, examples }: {
  title: string;
  examples: Array<{ wrong: string; right: string }>;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 dark:border-red-800 dark:border-red-800 px-6 py-4">
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          {examples.map((ex, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 dark:border-red-800 dark:border-red-800 rounded p-3">
                <p className="font-bold text-red-600 mb-1 text-xs">❌ Wrong:</p>
                <p className="text-muted-foreground">{ex.wrong}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 dark:border-green-800 dark:border-green-800 rounded p-3">
                <p className="font-bold text-green-600 mb-1 text-xs">✅ Right:</p>
                <p className="text-muted-foreground">{ex.right}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SuccessMessageExample({ category, message, nextSteps }: {
  category: string;
  message: string;
  nextSteps: string[];
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 dark:border-green-800 dark:border-green-800 px-4 py-3">
        <h4 className="font-bold text-foreground text-sm">{category}</h4>
      </div>
      <div className="p-4">
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded p-4 mb-3">
          <div className="flex items-start gap-2">
            <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-foreground mb-2">{message}</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsentTemplate({ type, short, full }: {
  type: string;
  short: string;
  full: string;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-6 py-4">
        <h3 className="font-bold text-foreground">{type}</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-bold text-foreground mb-2">Short version (checkbox):</p>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded p-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-foreground">{short}</span>
              </label>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-foreground mb-2">Full version (expanded):</p>
            <div className="bg-background border border-border rounded p-4 text-sm text-muted-foreground leading-relaxed">
              {full}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppliedLink({ to, text }: { to: string; text: string }) {
  return (
    <Link to={to} className="flex items-center gap-2 p-2 bg-background border border-border rounded hover:bg-blue-50 dark:bg-blue-950/30 hover:border-blue-300 transition-colors">
      <Eye size={12} className="text-primary" />
      <span className="text-foreground">{text}</span>
    </Link>
  );
}

function ResourceLink({ text }: { text: string }) {
  return (
    <a href="#" className="flex items-center gap-2 p-2 bg-background border border-border rounded hover:bg-blue-50 dark:bg-blue-950/30 hover:border-blue-300 transition-colors text-foreground">
      <ArrowRight size={12} className="text-primary" />
      <span>{text}</span>
    </a>
  );
}
