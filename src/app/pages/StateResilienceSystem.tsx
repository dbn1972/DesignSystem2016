import { Link } from "react-router";
import { Shield, AlertTriangle, RefreshCw, Wifi, Clock, CheckCircle, XCircle, Info, ChevronRight, ArrowRight, Save, WifiOff, Zap, Activity, AlertCircle, HelpCircle } from "lucide-react";

export default function StateResilienceSystem() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/patterns" className="hover:text-primary">
              Patterns
            </Link>
            <ChevronRight size={16} />
            <span className="text-foreground font-medium">State & Resilience System</span>
          </div>

          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-border rounded flex items-center justify-center">
                  <Shield size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Core System</div>
                  <h1 className="text-3xl font-bold text-foreground">State & Resilience System</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Comprehensive error handling, retry logic, and failure recovery patterns for government services. 
                Build resilient applications that gracefully handle network issues, timeouts, partial failures, 
                and service interruptions while keeping users informed and in control.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">System ID: <span className="font-bold text-foreground">UX4G-SYS-RES-001</span></span>
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
              <div className="px-6 py-3 bg-red-50 border-2 border-red-200 rounded text-red-700 font-bold text-xs text-center uppercase">
                Mission<br/>Critical
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "principles", label: "Principles" },
              { id: "error-states", label: "Error States" },
              { id: "retry-patterns", label: "Retry Patterns" },
              { id: "network", label: "Network Handling" },
              { id: "partial-states", label: "Partial States" },
              { id: "integration", label: "Integration Guide" },
              { id: "examples", label: "Applied Examples" }
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
      <main className="max-w-[1600px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-16">
            <OverviewSection />
            <PrinciplesSection />
            <ErrorStatesSection />
            <RetryPatternsSection />
            <NetworkHandlingSection />
            <PartialStatesSection />
            <IntegrationGuideSection />
            <AppliedExamplesSection />
          </div>

          {/* Sidebar - 3 columns */}
          <aside className="col-span-3 space-y-6 sticky top-24 self-start">
            <StateMatrix />
            <QuickReference />
            <ApplicationGuide />
            <Resources />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • State & Resilience System</div>
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

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-border rounded-lg p-8">
        <h3 className="font-bold text-foreground mb-4 text-lg">What is State & Resilience?</h3>
        <p className="text-muted-foreground mb-4">
          Government services must work reliably even when things go wrong. The State & Resilience System 
          provides patterns for handling errors, network failures, timeouts, and partial completion states 
          across all user journeys. Never leave users stranded with a broken experience.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded p-4">
            <Shield size={24} className="text-blue-600 mb-2" />
            <p className="font-bold text-foreground mb-1">Defensive</p>
            <p className="text-sm text-muted-foreground">Anticipate failures before they happen</p>
          </div>
          <div className="bg-card border border-border rounded p-4">
            <RefreshCw size={24} className="text-green-600 mb-2" />
            <p className="font-bold text-foreground mb-1">Recoverable</p>
            <p className="text-sm text-muted-foreground">Provide clear paths to retry and recover</p>
          </div>
          <div className="bg-card border border-border rounded p-4">
            <Activity size={24} className="text-purple-600 mb-2" />
            <p className="font-bold text-foreground mb-1">Transparent</p>
            <p className="text-sm text-muted-foreground">Communicate state clearly to users</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* What This System Covers */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-blue-50 border-b-2 border-blue-200 px-6 py-4">
            <h3 className="font-bold text-foreground">System Coverage</h3>
          </div>
          <div className="p-6 space-y-2 text-sm">
            <CoverageItem icon={<XCircle size={16} className="text-red-600" />} text="Error States (validation, server, logic errors)" />
            <CoverageItem icon={<RefreshCw size={16} className="text-green-600" />} text="Retry Patterns (manual, automatic, exponential backoff)" />
            <CoverageItem icon={<WifiOff size={16} className="text-orange-600" />} text="Network Issues (offline, slow, timeout)" />
            <CoverageItem icon={<Clock size={16} className="text-purple-600" />} text="Timeout Behavior (session, request, inactivity)" />
            <CoverageItem icon={<Save size={16} className="text-blue-600" />} text="Partial States (draft saving, incremental progress)" />
            <CoverageItem icon={<AlertTriangle size={16} className="text-yellow-600" />} text="Degraded Service (feature unavailable, reduced functionality)" />
          </div>
        </div>

        {/* Why This Matters */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 border-b-2 border-green-200 px-6 py-4">
            <h3 className="font-bold text-foreground">Why Resilience Matters</h3>
          </div>
          <div className="p-6 space-y-3 text-sm">
            <WhyItem 
              title="Unreliable Networks"
              description="Many users access services from areas with poor connectivity"
            />
            <WhyItem 
              title="Service Interruptions"
              description="Backend systems may be temporarily unavailable during maintenance"
            />
            <WhyItem 
              title="User Context Switches"
              description="Citizens may start a form, get interrupted, and return hours later"
            />
            <WhyItem 
              title="Data Loss Prevention"
              description="Never lose user work due to technical failures"
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
        <h2 className="text-2xl font-bold text-foreground">Resilience Principles</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <PrincipleCard
          number={1}
          title="Fail Gracefully, Not Catastrophically"
          description="When something breaks, degrade functionality smoothly rather than showing blank screens or cryptic errors."
          examples={[
            "Form submission fails → Save as draft, let user retry later",
            "Payment gateway down → Show message, offer alternative methods",
            "Network offline → Queue actions, sync when back online"
          ]}
        />
        <PrincipleCard
          number={2}
          title="Never Lose User Work"
          description="Protect user data at all costs. Auto-save frequently, preserve state through errors, allow recovery."
          examples={[
            "Auto-save form every 2 minutes to prevent data loss",
            "Store partial progress in localStorage as backup",
            "Show 'Your data is saved' confirmation after errors"
          ]}
        />
        <PrincipleCard
          number={3}
          title="Make Errors Actionable"
          description="Don't just tell users something went wrong. Tell them what to do about it and provide retry mechanisms."
          examples={[
            "❌ 'Error 500' → ✅ 'Server error. Try again or save your progress.'",
            "Provide 'Retry' button with click-to-fix action",
            "Suggest alternatives: 'Try a smaller file' or 'Contact support'"
          ]}
        />
        <PrincipleCard
          number={4}
          title="Communicate State Clearly"
          description="Keep users informed about what's happening: loading, saving, retrying, waiting for network."
          examples={[
            "Show spinner with 'Uploading document...' not just icon",
            "Display 'Retrying in 3... 2... 1...' countdown",
            "Update status: 'Saving draft...' → 'Saved at 2:34 PM'"
          ]}
        />
        <PrincipleCard
          number={5}
          title="Retry Intelligently"
          description="Not all errors are worth retrying. Use smart retry logic: exponential backoff, max attempts, user control."
          examples={[
            "Network timeout → Auto-retry 3 times with backoff",
            "Validation error → Don't auto-retry (user must fix)",
            "Server error → Offer manual retry button"
          ]}
        />
        <PrincipleCard
          number={6}
          title="Provide Escape Hatches"
          description="Always give users a way out: save and exit, skip step, contact support, try alternative path."
          examples={[
            "'Save & Exit' button always visible on long forms",
            "'Skip this step' for optional sections when service unavailable",
            "Helpline number prominently displayed on error screens"
          ]}
        />
      </div>
    </section>
  );
}

// ==================== ERROR STATES SECTION ====================

function ErrorStatesSection() {
  return (
    <section id="error-states" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Error State Patterns</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Validation Errors */}
        <ErrorStatePattern
          title="Validation Errors (Client-Side)"
          severity="Low"
          trigger="User enters invalid data; detected immediately"
          recovery="User fixes input and retries"
          examples={[
            "Email format incorrect",
            "Password too short",
            "Required field empty",
            "File size exceeds limit"
          ]}
          implementation={{
            detection: "Client-side validation on field blur",
            display: "Inline error message below field with red border",
            action: "User corrects input; error clears on valid input",
            persistence: "Error state until fixed"
          }}
        />

        {/* Server Errors */}
        <ErrorStatePattern
          title="Server Errors (500, 502, 503)"
          severity="High"
          trigger="Backend service failure or temporary unavailability"
          recovery="Auto-retry with exponential backoff OR manual retry"
          examples={[
            "Internal server error (500)",
            "Gateway timeout (504)",
            "Service unavailable (503)",
            "Database connection lost"
          ]}
          implementation={{
            detection: "HTTP response status 5xx",
            display: "Full-screen error message with 'Retry' button",
            action: "Auto-retry 3 times, then show manual retry option",
            persistence: "Auto-save user data before showing error"
          }}
        />

        {/* Business Logic Errors */}
        <ErrorStatePattern
          title="Business Logic Errors (400, 422)"
          severity="Medium"
          trigger="Valid request but violates business rules"
          recovery="User must change request or contact support"
          examples={[
            "Duplicate application submitted",
            "Eligibility criteria not met",
            "Document already uploaded",
            "Service not available in user's region"
          ]}
          implementation={{
            detection: "HTTP response status 4xx with error details",
            display: "Error message with specific reason and next steps",
            action: "No auto-retry; provide guidance to fix",
            persistence: "Preserve user data; highlight problematic fields"
          }}
        />

        {/* Network Errors */}
        <ErrorStatePattern
          title="Network Connectivity Errors"
          severity="High"
          trigger="No internet connection or request timeout"
          recovery="Wait for network, retry, or save offline"
          examples={[
            "No internet connection",
            "Request timeout (30s+)",
            "DNS resolution failed",
            "Network unreachable"
          ]}
          implementation={{
            detection: "Network error event OR timeout",
            display: "Offline banner at top + save data locally",
            action: "Queue actions; auto-retry when network returns",
            persistence: "Store in localStorage; sync when online"
          }}
        />
      </div>
    </section>
  );
}

// ==================== RETRY PATTERNS SECTION ====================

function RetryPatternsSection() {
  return (
    <section id="retry-patterns" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Retry Patterns</h2>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <AlertTriangle size={20} className="text-yellow-600" />
          When to Retry vs. When NOT to Retry
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-bold text-green-600 mb-2">✅ DO Retry:</p>
            <ul className="space-y-1 ml-4 text-muted-foreground">
              <li>• Network timeouts (transient)</li>
              <li>• Server errors 5xx (may be temporary)</li>
              <li>• Rate limiting 429 (after delay)</li>
              <li>• Gateway errors 502/504</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-red-600 mb-2">❌ DON'T Retry:</p>
            <ul className="space-y-1 ml-4 text-muted-foreground">
              <li>• Validation errors 400 (need user fix)</li>
              <li>• Authentication errors 401/403</li>
              <li>• Not found errors 404</li>
              <li>• Business logic failures 422</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Manual Retry */}
        <RetryPattern
          title="Manual Retry"
          description="User clicks 'Try Again' button to retry failed action"
          useWhen={[
            "First failure of any request",
            "After auto-retry attempts exhausted",
            "User-initiated actions (form submit)"
          ]}
          implementation={
            `<button onClick={handleRetry}>
  <RefreshCw size={16} />
  Try Again
</button>`
          }
        />

        {/* Automatic Retry */}
        <RetryPattern
          title="Automatic Retry (Linear)"
          description="System automatically retries failed request after fixed delay"
          useWhen={[
            "Network timeouts (transient)",
            "Server errors 5xx",
            "Background sync operations"
          ]}
          implementation={
            `// Retry up to 3 times, 2s delay
const retry = async (fn, max = 3) => {
  for (let i = 0; i < max; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === max - 1) throw err;
      await delay(2000);
    }
  }
};`
          }
        />

        {/* Exponential Backoff */}
        <RetryPattern
          title="Exponential Backoff"
          description="Retry with increasing delays: 1s, 2s, 4s, 8s..."
          useWhen={[
            "Rate limiting scenarios",
            "Server overload situations",
            "API quota exceeded"
          ]}
          implementation={
            `// Exponential backoff
const backoff = async (fn, max = 5) => {
  for (let i = 0; i < max; i++) {
    try {
      return await fn();
    } catch (err) {
      const delay = Math.pow(2, i) * 1000;
      await sleep(delay);
    }
  }
};`
          }
        />
      </div>
    </section>
  );
}

// ==================== NETWORK HANDLING SECTION ====================

function NetworkHandlingSection() {
  return (
    <section id="network" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Network Handling Patterns</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Offline Detection */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-orange-50 border-b-2 border-orange-200 px-6 py-4">
            <h3 className="font-bold text-foreground">Offline Detection & Banner</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Detect when user goes offline and show persistent banner. Queue actions to sync when back online.
            </p>
            <div className="space-y-3">
              <div className="bg-orange-50 border-2 border-orange-300 rounded p-3 text-sm">
                <div className="flex items-center gap-2">
                  <WifiOff size={16} className="text-orange-600" />
                  <p className="font-bold text-foreground">You're offline</p>
                </div>
                <p className="text-muted-foreground mt-1">Your changes are being saved locally. They'll sync when you're back online.</p>
              </div>
              <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`// Listen for offline/online
window.addEventListener('offline', () => {
  showOfflineBanner();
  enableOfflineMode();
});

window.addEventListener('online', () => {
  hideOfflineBanner();
  syncQueuedActions();
});`}
              </pre>
            </div>
          </div>
        </div>

        {/* Slow Network Warning */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-yellow-50 border-b-2 border-yellow-200 px-6 py-4">
            <h3 className="font-bold text-foreground">Slow Network Warning</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Detect slow connections and warn users before large uploads or downloads.
            </p>
            <div className="space-y-3">
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded p-3 text-sm">
                <div className="flex items-center gap-2">
                  <Wifi size={16} className="text-yellow-600" />
                  <p className="font-bold text-foreground">Slow connection detected</p>
                </div>
                <p className="text-muted-foreground mt-1">Uploading large files may take longer. Continue anyway?</p>
                <div className="flex gap-2 mt-2">
                  <button className="px-3 py-1 bg-primary text-white text-xs font-bold rounded">Continue</button>
                  <button className="px-3 py-1 border border-border bg-card text-muted-foreground text-xs font-bold rounded">Cancel</button>
                </div>
              </div>
              <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`// Detect slow connection
const connection = navigator.connection;
if (connection?.effectiveType === '2g' 
    || connection?.effectiveType === 'slow-2g') {
  showSlowNetworkWarning();
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Request Timeout */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-red-50 border-b-2 border-red-200 px-6 py-4">
            <h3 className="font-bold text-foreground">Request Timeout Handling</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Set reasonable timeouts (30s for API calls) and handle timeout gracefully with retry option.
            </p>
            <div className="space-y-3">
              <div className="bg-red-50 border-2 border-red-300 rounded p-3 text-sm">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-red-600" />
                  <p className="font-bold text-foreground">Request timed out</p>
                </div>
                <p className="text-muted-foreground mt-1">The server took too long to respond. This might be due to network issues.</p>
                <button className="px-3 py-1 bg-primary text-white text-xs font-bold rounded mt-2">
                  <RefreshCw size={12} className="inline mr-1" />
                  Retry
                </button>
              </div>
              <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`// Add timeout to fetch
const fetchWithTimeout = (url, options = {}) => {
  const timeout = options.timeout || 30000;
  
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(
        new Error('Request timeout')
      ), timeout)
    )
  ]);
};`}
              </pre>
            </div>
          </div>
        </div>

        {/* Optimistic UI Updates */}
        <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-green-50 border-b-2 border-green-200 px-6 py-4">
            <h3 className="font-bold text-foreground">Optimistic UI Updates</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Update UI immediately, then sync with server. Rollback if server rejects.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-300 rounded p-3 text-sm">
                <CheckCircle size={16} className="inline mr-2 text-green-600" />
                <span className="text-muted-foreground">Document uploaded ✓</span>
                <p className="text-xs text-muted-foreground mt-1">Syncing with server...</p>
              </div>
              <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`// Optimistic update
function uploadDocument(file) {
  // 1. Update UI immediately
  addDocumentToUI(file);
  
  // 2. Upload to server
  uploadToServer(file)
    .then(() => {
      // 3. Confirm success
      markDocumentSynced(file);
    })
    .catch(() => {
      // 4. Rollback on failure
      removeDocumentFromUI(file);
      showError('Upload failed');
    });
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PARTIAL STATES SECTION ====================

function PartialStatesSection() {
  return (
    <section id="partial-states" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Partial Completion States</h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Draft State */}
        <PartialStateCard
          icon={<Save className="text-blue-600" />}
          title="Draft / In Progress"
          description="User started but hasn't completed the flow"
          indicators={[
            "Progress bar: 40% complete",
            "Last saved: 2 minutes ago",
            "'Resume Application' button",
            "Auto-save every 2 minutes"
          ]}
          actions={[
            "Resume from last step",
            "Delete draft",
            "View all drafts"
          ]}
        />

        {/* Pending State */}
        <PartialStateCard
          icon={<Clock className="text-orange-600" />}
          title="Pending / Waiting"
          description="Action submitted, waiting for server response"
          indicators={[
            "Spinner with 'Processing...'",
            "Estimated time: 2-3 minutes",
            "Cannot edit during processing",
            "Background sync indicator"
          ]}
          actions={[
            "Cancel if possible",
            "Check status",
            "Get notification when done"
          ]}
        />

        {/* Partial Success */}
        <PartialStateCard
          icon={<AlertCircle className="text-yellow-600" />}
          title="Partial Success"
          description="Some operations succeeded, others failed"
          indicators={[
            "3 of 5 documents uploaded",
            "Payment successful, email failed",
            "Mixed status indicators",
            "List showing success/failure per item"
          ]}
          actions={[
            "Retry failed items only",
            "Continue with partial data",
            "Skip failed operations"
          ]}
        />
      </div>

      <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-purple-50 border-b-2 border-purple-200 px-6 py-4">
          <h3 className="font-bold text-foreground">Auto-Save Implementation Pattern</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-foreground mb-2 text-sm">Visual Indicator States</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 p-2 bg-background rounded">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Saving...</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                  <CheckCircle size={12} className="text-green-600" />
                  <span className="text-muted-foreground">Saved at 2:34 PM</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-red-50 rounded">
                  <XCircle size={12} className="text-red-600" />
                  <span className="text-muted-foreground">Save failed - Retry</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-orange-50 rounded">
                  <WifiOff size={12} className="text-orange-600" />
                  <span className="text-muted-foreground">Offline - Will sync</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2 text-sm">Code Implementation</h4>
              <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`const [saveStatus, setSaveStatus] = useState('saved');
const [lastSaved, setLastSaved] = useState(null);

// Debounced auto-save
useEffect(() => {
  const timer = setTimeout(() => {
    saveDraft(formData);
  }, 2000); // 2s after last change
  
  return () => clearTimeout(timer);
}, [formData]);

async function saveDraft(data) {
  setSaveStatus('saving');
  try {
    await api.saveDraft(data);
    setSaveStatus('saved');
    setLastSaved(new Date());
  } catch (error) {
    setSaveStatus('error');
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== INTEGRATION GUIDE SECTION ====================

function IntegrationGuideSection() {
  return (
    <section id="integration" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Integration Guide: Adding Resilience to Existing Flows</h2>
      </div>

      <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3">Step-by-Step: Retrofit Existing Pages</h3>
        <p className="text-sm text-muted-foreground mb-4">
          This guide shows how to add resilience patterns to existing flows without creating new isolated screens.
        </p>
      </div>

      <div className="space-y-6">
        <IntegrationStep
          number={1}
          title="Add Loading States"
          description="Show what's happening during async operations"
          before={
            `<button onClick={handleSubmit}>
  Submit Application
</button>`
          }
          after={
            `const [isSubmitting, setIsSubmitting] = useState(false);

<button 
  onClick={handleSubmit} 
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <>
      <Spinner /> Submitting...
    </>
  ) : (
    'Submit Application'
  )}
</button>`
          }
        />

        <IntegrationStep
          number={2}
          title="Add Error States"
          description="Show errors inline or in error summary"
          before={
            `// Just try to submit, hope it works
const response = await submitForm(data);`
          }
          after={
            `const [error, setError] = useState(null);

try {
  const response = await submitForm(data);
} catch (err) {
  setError({
    message: 'Submission failed. Please try again.',
    action: 'retry'
  });
}

{error && (
  <div className="error-banner">
    <AlertCircle /> {error.message}
    <button onClick={retry}>Retry</button>
  </div>
)}`
          }
        />

        <IntegrationStep
          number={3}
          title="Add Auto-Save"
          description="Never lose user data"
          before={
            `// No auto-save, data lost on errors
<input onChange={handleChange} />`
          }
          after={
            `// Auto-save with debounce
useEffect(() => {
  const timer = setTimeout(() => {
    saveDraft(formData);
  }, 2000);
  return () => clearTimeout(timer);
}, [formData]);

<input onChange={handleChange} />
<SaveIndicator status={saveStatus} />`
          }
        />

        <IntegrationStep
          number={4}
          title="Add Network Detection"
          description="Handle offline scenarios"
          before={
            `// Fails silently when offline
await uploadDocument(file);`
          }
          after={
            `// Check network first
if (!navigator.onLine) {
  queueForLater(uploadDocument, file);
  showOfflineBanner();
} else {
  try {
    await uploadDocument(file);
  } catch (err) {
    if (err.name === 'NetworkError') {
      queueForLater(uploadDocument, file);
    }
  }
}`
          }
        />

        <IntegrationStep
          number={5}
          title="Add Retry Logic"
          description="Let users recover from failures"
          before={
            `// Single attempt, then user is stuck
submitPayment().catch(err => {
  alert('Payment failed');
});`
          }
          after={
            `// Retry with exponential backoff
const retryWithBackoff = async (fn, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      await delay(Math.pow(2, i) * 1000);
    }
  }
};

try {
  await retryWithBackoff(submitPayment);
} catch (err) {
  showError('Payment failed after 3 attempts', {
    action: 'manual-retry'
  });
}`
          }
        />
      </div>
    </section>
  );
}

// ==================== APPLIED EXAMPLES SECTION ====================

function AppliedExamplesSection() {
  return (
    <section id="examples" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Applied Examples: Resilience in Action</h2>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3">These Patterns Have Been Applied To:</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <AppliedLink to="/certificate-form-personal" text="Certificate Form (with auto-save & validation)" />
            <AppliedLink to="/certificate-payment-summary" text="Payment Flow (with retry & timeout handling)" />
            <AppliedLink to="/certificate-document-upload" text="Document Upload (with progress & error recovery)" />
          </div>
          <div className="space-y-2">
            <AppliedLink to="/reference-service/certificate/sign-in" text="Sign In (with network detection & retry)" />
            <AppliedLink to="/reference-service/certificate/status-tracker" text="Status Tracker (with polling & offline support)" />
            <AppliedLink to="/certificate-form-review" text="Review Page (with partial save states)" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ExampleScenario
          title="Scenario 1: Form Submission with Network Failure"
          flow={[
            { step: "User fills out application form", state: "active" },
            { step: "User clicks 'Submit'", state: "active" },
            { step: "Network request fails (timeout)", state: "error" },
            { step: "Auto-save triggers, data preserved", state: "recovery" },
            { step: "Error message shown with 'Retry' button", state: "error" },
            { step: "User clicks 'Retry'", state: "active" },
            { step: "Submission succeeds", state: "success" }
          ]}
          resilienceFeatures={[
            "Auto-save on error (data preserved)",
            "Clear error message with reason",
            "Manual retry button",
            "Loading state during retry",
            "Success confirmation"
          ]}
        />

        <ExampleScenario
          title="Scenario 2: Payment Processing with Timeout"
          flow={[
            { step: "User initiates payment (₹500)", state: "active" },
            { step: "Payment gateway called", state: "pending" },
            { step: "Request times out after 45s", state: "error" },
            { step: "Show 'Payment pending' state", state: "partial" },
            { step: "Poll backend for payment status", state: "pending" },
            { step: "Status check confirms success", state: "success" },
            { step: "Show success + receipt", state: "success" }
          ]}
          resilienceFeatures={[
            "Timeout handling (45s limit)",
            "Ambiguous state handling (pending confirmation)",
            "Backend polling for status",
            "Clear user communication during wait",
            "Receipt generated after confirmation"
          ]}
        />

        <ExampleScenario
          title="Scenario 3: Document Upload with Slow Network"
          flow={[
            { step: "User selects 4MB PDF file", state: "active" },
            { step: "Slow network detected (2G)", state: "warning" },
            { step: "Warning shown: 'This may take longer'", state: "warning" },
            { step: "User confirms, upload starts", state: "pending" },
            { step: "Progress bar: 30%... 60%... 90%...", state: "pending" },
            { step: "Upload completes after 2 minutes", state: "success" },
            { step: "Success confirmation shown", state: "success" }
          ]}
          resilienceFeatures={[
            "Network speed detection",
            "Proactive warning before upload",
            "Real-time progress bar",
            "Cancellation option",
            "Estimated time remaining"
          ]}
        />
      </div>
    </section>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function StateMatrix() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">State Matrix</h3>
      </div>
      <div className="p-4 text-xs space-y-2">
        <StateItem icon={<Activity className="text-blue-600" />} label="Loading" />
        <StateItem icon={<CheckCircle className="text-green-600" />} label="Success" />
        <StateItem icon={<XCircle className="text-red-600" />} label="Error" />
        <StateItem icon={<Clock className="text-orange-600" />} label="Pending" />
        <StateItem icon={<Save className="text-purple-600" />} label="Draft" />
        <StateItem icon={<WifiOff className="text-muted-foreground" />} label="Offline" />
        <StateItem icon={<RefreshCw className="text-blue-600" />} label="Retrying" />
        <StateItem icon={<AlertCircle className="text-yellow-600" />} label="Partial" />
      </div>
    </div>
  );
}

function QuickReference() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 border-b-2 border-blue-200 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 text-xs space-y-3">
        <div>
          <p className="font-bold text-foreground mb-1">Max Retries</p>
          <p className="text-muted-foreground">3 attempts</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Request Timeout</p>
          <p className="text-muted-foreground">30 seconds (API)</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Auto-Save Interval</p>
          <p className="text-muted-foreground">Every 2 minutes</p>
        </div>
        <div>
          <p className="font-bold text-foreground mb-1">Retry Backoff</p>
          <p className="text-muted-foreground">Exponential (1s, 2s, 4s)</p>
        </div>
      </div>
    </div>
  );
}

function ApplicationGuide() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-green-50 border-b-2 border-green-200 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Apply to Your Flow</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <ChecklistItem text="Add loading states" />
        <ChecklistItem text="Add error handling" />
        <ChecklistItem text="Add auto-save" />
        <ChecklistItem text="Add retry logic" />
        <ChecklistItem text="Add network detection" />
        <ChecklistItem text="Add timeout handling" />
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-orange-50 border-b-2 border-orange-200 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Resources</h3>
      </div>
      <div className="p-4 space-y-2 text-xs">
        <ResourceLink text="Error Handling Best Practices" />
        <ResourceLink text="Retry Strategy Guide" />
        <ResourceLink text="Offline-First Development" />
        <ResourceLink text="Network Resilience Patterns" />
        <ResourceLink text="Auto-Save Implementation" />
      </div>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function CoverageItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-2">
      {icon}
      <span className="text-muted-foreground flex-1">{text}</span>
    </div>
  );
}

function WhyItem({ title, description }: { title: string; description: string }) {
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
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-border px-6 py-4">
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

function ErrorStatePattern({ title, severity, trigger, recovery, examples, implementation }: {
  title: string;
  severity: string;
  trigger: string;
  recovery: string;
  examples: string[];
  implementation: {
    detection: string;
    display: string;
    action: string;
    persistence: string;
  };
}) {
  const severityColor = severity === 'High' ? 'bg-red-100 text-red-800 border-red-300' :
                        severity === 'Medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' :
                        'bg-blue-100 text-blue-800 border-blue-300';
  
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-red-50 border-b-2 border-red-200 px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-foreground">{title}</h3>
          <span className={`text-xs px-3 py-1 border rounded font-bold ${severityColor}`}>
            {severity} Severity
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm mt-3">
          <div>
            <p className="font-bold text-foreground mb-1">Trigger:</p>
            <p className="text-muted-foreground">{trigger}</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">Recovery:</p>
            <p className="text-muted-foreground">{recovery}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-bold text-foreground mb-2">Common Examples:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {examples.map((ex, i) => (
                <li key={i} className="flex items-start gap-2">
                  <XCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground mb-2">Implementation:</p>
            <div className="space-y-2 text-xs">
              <div>
                <p className="font-bold text-foreground">Detection:</p>
                <p className="text-muted-foreground">{implementation.detection}</p>
              </div>
              <div>
                <p className="font-bold text-foreground">Display:</p>
                <p className="text-muted-foreground">{implementation.display}</p>
              </div>
              <div>
                <p className="font-bold text-foreground">Action:</p>
                <p className="text-muted-foreground">{implementation.action}</p>
              </div>
              <div>
                <p className="font-bold text-foreground">Persistence:</p>
                <p className="text-muted-foreground">{implementation.persistence}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RetryPattern({ title, description, useWhen, implementation }: {
  title: string;
  description: string;
  useWhen: string[];
  implementation: string;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-blue-50 border-b-2 border-blue-200 px-4 py-3">
        <h4 className="font-bold text-foreground text-sm">{title}</h4>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="mb-3">
          <p className="text-xs font-bold text-foreground mb-2">Use When:</p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            {useWhen.map((item, i) => (
              <li key={i} className="flex items-start gap-1">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <pre className="bg-gray-900 text-green-400 p-2 rounded text-xs overflow-x-auto">
          {implementation}
        </pre>
      </div>
    </div>
  );
}

function PartialStateCard({ icon, title, description, indicators, actions }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  indicators: string[];
  actions: string[];
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 border-b-2 border-purple-200 px-4 py-3">
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="font-bold text-foreground text-sm">{title}</h4>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="space-y-3">
          <div>
            <p className="text-xs font-bold text-foreground mb-2">Visual Indicators:</p>
            <ul className="space-y-1 text-xs text-muted-foreground">
              {indicators.map((item, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-foreground mb-2">User Actions:</p>
            <ul className="space-y-1 text-xs text-muted-foreground">
              {actions.map((item, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-green-600">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntegrationStep({ number, title, description, before, after }: {
  number: number;
  title: string;
  description: string;
  before: string;
  after: string;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-green-50 border-b-2 border-green-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
            {number}
          </div>
          <div>
            <h4 className="font-bold text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-bold text-foreground mb-2">❌ Before (Brittle):</p>
            <pre className="bg-gray-900 text-red-400 p-3 rounded text-xs overflow-x-auto">
              {before}
            </pre>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground mb-2">✅ After (Resilient):</p>
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
              {after}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppliedLink({ to, text }: { to: string; text: string }) {
  return (
    <Link to={to} className="flex items-center gap-2 p-2 bg-card border border-border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors">
      <ArrowRight size={14} className="text-primary" />
      <span className="text-foreground">{text}</span>
    </Link>
  );
}

function ExampleScenario({ title, flow, resilienceFeatures }: {
  title: string;
  flow: Array<{ step: string; state: string }>;
  resilienceFeatures: string[];
}) {
  const getStateColor = (state: string) => {
    switch(state) {
      case 'active': return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'error': return 'bg-red-100 border-red-300 text-red-800';
      case 'success': return 'bg-green-100 border-green-300 text-green-800';
      case 'pending': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'recovery': return 'bg-purple-100 border-purple-300 text-purple-800';
      case 'warning': return 'bg-orange-100 border-orange-300 text-orange-800';
      case 'partial': return 'bg-muted border-border text-foreground';
      default: return 'bg-muted border-border text-foreground';
    }
  };

  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b-2 border-border px-6 py-4">
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-bold text-foreground mb-3 text-sm">Flow:</p>
            <div className="space-y-2">
              {flow.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{item.step}</p>
                    <span className={`inline-block mt-1 px-2 py-0.5 border rounded text-xs font-bold ${getStateColor(item.state)}`}>
                      {item.state}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-foreground mb-3 text-sm">Resilience Features Applied:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {resilienceFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 p-2 bg-background rounded">
      {icon}
      <span className="text-foreground">{label}</span>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 p-2 bg-background rounded">
      <div className="w-4 h-4 border-2 border-border rounded"></div>
      <span className="text-foreground">{text}</span>
    </div>
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
