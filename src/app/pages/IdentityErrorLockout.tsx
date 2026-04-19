import { Link } from "react-router";
import { ArrowLeft, Shield, AlertTriangle, XCircle, Lock, Clock, Info, HelpCircle, CheckCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function IdentityErrorLockout() {
  const [selectedState, setSelectedState] = useState<"invalid" | "locked" | "expired" | "network" | "server">("invalid");

  const errorStates = [
    { id: "invalid", label: "Invalid Credentials", icon: <XCircle size={24} />, color: "red" },
    { id: "locked", label: "Account Locked", icon: <Lock size={24} />, color: "red" },
    { id: "expired", label: "Session Expired", icon: <Clock size={24} />, color: "yellow" },
    { id: "network", label: "Network Error", icon: <AlertTriangle size={24} />, color: "orange" },
    { id: "server", label: "Server Error", icon: <AlertTriangle size={24} />, color: "red" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/patterns/identity" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Identity Patterns</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            <span className="font-bold">Flow:</span> Authentication Error States & Lockout
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* State Selector */}
          <div className="col-span-12">
            <div className="bg-card border-2 border-border rounded-lg p-6 mb-8">
              <h2 className="font-bold text-foreground mb-4">Select Error State to View</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {errorStates.map((state) => (
                  <button
                    key={state.id}
                    onClick={() => setSelectedState(state.id as any)}
                    className={`p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-all ${
                      selectedState === state.id
                        ? 'border-primary bg-blue-50 shadow-lg'
                        : 'border-border bg-card hover:border-gray-400'
                    }`}
                  >
                    <div className={`text-${state.color}-600`}>{state.icon}</div>
                    <span className="text-sm font-medium text-foreground text-center">{state.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Prototype View - 8 columns */}
          <div className="col-span-8">
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden shadow-lg">
              {/* Tricolor Header */}
              <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 h-2"></div>
              
              {/* Government Header */}
              <div className="bg-card border-b-2 border-border px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                    <Shield size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-foreground">Digital India Portal</div>
                    <div className="text-sm text-muted-foreground">Government of India</div>
                  </div>
                </div>
              </div>

              {/* Error State Content */}
              <div className="px-4 sm:px-8 lg:px-12 py-10">
                <div className="max-w-2xl mx-auto">
                  
                  {/* Invalid Credentials */}
                  {selectedState === "invalid" && (
                    <ErrorStateView
                      icon={<XCircle size={48} className="text-red-600" />}
                      bgColor="bg-red-100"
                      title="Invalid Username or Password"
                      description="The credentials you entered don't match our records. Please check and try again."
                      attempts={3}
                      maxAttempts={5}
                      actions={
                        <>
                          <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors mb-3">
                            Try Again
                          </button>
                          <Link
                            to="/patterns/identity/forgot-password"
                            className="block w-full py-3 bg-card text-muted-foreground font-medium border-2 border-border rounded-lg hover:bg-background transition-colors text-center"
                          >
                            Forgot Password?
                          </Link>
                        </>
                      }
                      tips={[
                        "Check if Caps Lock is on",
                        "Ensure correct username format (mobile/email)",
                        "Password is case-sensitive",
                        "Try resetting your password if you forgot it"
                      ]}
                    />
                  )}

                  {/* Account Locked */}
                  {selectedState === "locked" && (
                    <ErrorStateView
                      icon={<Lock size={48} className="text-red-600" />}
                      bgColor="bg-red-100"
                      title="Account Temporarily Locked"
                      description="Your account has been locked due to multiple failed login attempts. This is a security measure to protect your account."
                      lockDuration="15 minutes"
                      actions={
                        <>
                          <div className="mb-6 p-6 bg-muted border-2 border-border rounded-lg text-center">
                            <div className="font-bold text-foreground mb-2">Account will unlock in</div>
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">12:34</div>
                          </div>
                          <Link
                            to="/patterns/identity/account-recovery"
                            className="block w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors text-center mb-3"
                          >
                            Unlock Account Now
                          </Link>
                          <button className="w-full py-3 bg-card text-muted-foreground font-medium border-2 border-border rounded-lg hover:bg-background transition-colors">
                            Contact Support
                          </button>
                        </>
                      }
                      tips={[
                        "Wait for the lock period to expire (15 minutes)",
                        "Use the account recovery process for immediate unlock",
                        "Contact support if you didn't attempt to sign in",
                        "Change your password after unlocking"
                      ]}
                    />
                  )}

                  {/* Session Expired */}
                  {selectedState === "expired" && (
                    <ErrorStateView
                      icon={<Clock size={48} className="text-yellow-600" />}
                      bgColor="bg-yellow-100"
                      title="Session Expired"
                      description="Your session has expired due to inactivity. Please sign in again to continue."
                      actions={
                        <>
                          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
                            <div className="flex items-start gap-3 text-sm">
                              <Info size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                              <div className="text-muted-foreground">
                                <div className="font-bold text-foreground mb-1">Your work has been saved</div>
                                <p>Any form data you entered is saved as a draft for 24 hours</p>
                              </div>
                            </div>
                          </div>
                          <Link
                            to="/patterns/identity/sign-in"
                            className="block w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors text-center"
                          >
                            Sign In Again
                          </Link>
                        </>
                      }
                      tips={[
                        "Sessions expire after 30 minutes of inactivity",
                        "Your progress is automatically saved",
                        "Sign in to continue where you left off",
                        "Always log out when finished for security"
                      ]}
                    />
                  )}

                  {/* Network Error */}
                  {selectedState === "network" && (
                    <ErrorStateView
                      icon={<AlertTriangle size={48} className="text-orange-600" />}
                      bgColor="bg-orange-100"
                      title="Connection Lost"
                      description="We couldn't connect to the server. Please check your internet connection and try again."
                      actions={
                        <>
                          <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors mb-3">
                            Retry Connection
                          </button>
                          <button className="w-full py-3 bg-card text-muted-foreground font-medium border-2 border-border rounded-lg hover:bg-background transition-colors">
                            Go Back
                          </button>
                        </>
                      }
                      tips={[
                        "Check your internet connection",
                        "Try switching between Wi-Fi and mobile data",
                        "Disable VPN if using one",
                        "Clear browser cache and cookies"
                      ]}
                    />
                  )}

                  {/* Server Error */}
                  {selectedState === "server" && (
                    <ErrorStateView
                      icon={<AlertTriangle size={48} className="text-red-600" />}
                      bgColor="bg-red-100"
                      title="Something Went Wrong"
                      description="We're experiencing technical difficulties. Our team has been notified and is working to fix this."
                      errorCode="ERR_500"
                      actions={
                        <>
                          <div className="mb-6 p-4 bg-muted border-2 border-border rounded-lg text-center">
                            <div className="text-sm text-muted-foreground mb-2">Error Reference</div>
                            <div className="font-mono font-bold text-foreground">REF-2026-04-XXXXX</div>
                            <div className="text-xs text-muted-foreground mt-2">Quote this when contacting support</div>
                          </div>
                          <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors mb-3">
                            Try Again
                          </button>
                          <Link
                            to="/"
                            className="block w-full py-3 bg-card text-muted-foreground font-medium border-2 border-border rounded-lg hover:bg-background transition-colors text-center"
                          >
                            Go to Homepage
                          </Link>
                        </>
                      }
                      tips={[
                        "Wait a few minutes and try again",
                        "Check system status page if available",
                        "Contact support with the error reference",
                        "Try accessing during off-peak hours"
                      ]}
                    />
                  )}
                </div>
              </div>

              {/* Help Card */}
              <div className="border-t-2 border-border bg-background px-4 sm:px-8 lg:px-12 py-6">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground mb-2">Still Having Issues?</div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Call: <span className="font-bold">1800-XXX-XXXX</span> (Toll-Free)</p>
                        <p>Email: <span className="font-bold">support@digitalindia.gov.in</span></p>
                        <p className="text-muted-foreground">Monday to Friday, 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Sidebar - 4 columns */}
          <div className="col-span-4 space-y-6">
            <PatternInfo />
            <ErrorTypes />
            <RecoveryActions />
            <ImplementationNotes />
          </div>

        </div>
      </div>
    </div>
  );
}

// ==================== ERROR STATE VIEW ====================

interface ErrorStateViewProps {
  icon: React.ReactNode;
  bgColor: string;
  title: string;
  description: string;
  attempts?: number;
  maxAttempts?: number;
  lockDuration?: string;
  errorCode?: string;
  actions: React.ReactNode;
  tips: string[];
}

function ErrorStateView({
  icon,
  bgColor,
  title,
  description,
  attempts,
  maxAttempts,
  lockDuration,
  errorCode,
  actions,
  tips
}: ErrorStateViewProps) {
  return (
    <div>
      {/* Icon */}
      <div className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
        {icon}
      </div>

      {/* Title and Description */}
      <h1 className="text-3xl font-bold text-foreground mb-3 text-center">{title}</h1>
      <p className="text-muted-foreground mb-6 text-center">{description}</p>

      {/* Error Details */}
      {(attempts !== undefined || lockDuration || errorCode) && (
        <div className="mb-6 p-4 bg-muted border-2 border-border rounded-lg">
          {attempts !== undefined && maxAttempts && (
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Failed Attempts:</span>
              <span className="font-bold text-red-600">{attempts} of {maxAttempts}</span>
            </div>
          )}
          {lockDuration && (
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Lock Duration:</span>
              <span className="font-bold text-foreground">{lockDuration}</span>
            </div>
          )}
          {errorCode && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Error Code:</span>
              <span className="font-mono font-bold text-foreground">{errorCode}</span>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="mb-8">{actions}</div>

      {/* Tips */}
      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="flex items-start gap-3">
          <Info size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-foreground mb-2 text-sm">Troubleshooting Tips</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {tips.map((tip, idx) => (
                <li key={idx}>• {tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function PatternInfo() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground">Pattern Info</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <InfoRow label="Pattern ID" value="UX4G-PAT-009-09" />
        <InfoRow label="Status" value="Stable" badge="green" />
        <InfoRow label="Complexity" value="Medium" />
        <InfoRow label="Category" value="Error Handling" />
        <InfoRow label="Version" value="1.0.0" />
      </div>
    </div>
  );
}

function ErrorTypes() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground">Error Types</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <ErrorTypeItem
          title="Authentication Errors"
          examples="Invalid credentials, wrong OTP, expired password"
        />
        <ErrorTypeItem
          title="Account Status Errors"
          examples="Locked, suspended, deactivated accounts"
        />
        <ErrorTypeItem
          title="Session Errors"
          examples="Timeout, concurrent login, token expired"
        />
        <ErrorTypeItem
          title="System Errors"
          examples="Network failure, server error, maintenance"
        />
      </div>
    </div>
  );
}

function RecoveryActions() {
  return (
    <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden bg-blue-50 dark:bg-blue-900/20">
      <div className="bg-blue-100 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground">Recovery Actions</h3>
      </div>
      <div className="p-4 space-y-2 text-sm text-muted-foreground">
        <RecoveryItem text="Clear, actionable error messages" />
        <RecoveryItem text="Multiple recovery paths provided" />
        <RecoveryItem text="Help and support always visible" />
        <RecoveryItem text="Error reference codes for tracking" />
        <RecoveryItem text="Retry limits to prevent abuse" />
      </div>
    </div>
  );
}

function ImplementationNotes() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground">Implementation</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <ImplementationItem
          title="Error Logging"
          description="Log all errors with user context and timestamp"
        />
        <ImplementationItem
          title="User Feedback"
          description="Provide immediate, clear feedback for every error"
        />
        <ImplementationItem
          title="Lockout Policy"
          description="5 failed attempts = 15 min lock, exponential backoff"
        />
        <ImplementationItem
          title="Error Recovery"
          description="Always provide at least 2 recovery options"
        />
      </div>
    </div>
  );
}

// Helper Components
function InfoRow({ label, value, badge }: { label: string; value: string; badge?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      {badge ? (
        <span className={`px-2 py-0.5 ${badge === 'green' ? 'bg-green-100 text-green-700 dark:text-green-400' : 'bg-muted text-muted-foreground'} text-xs font-bold rounded-full`}>
          {value}
        </span>
      ) : (
        <span className="font-bold text-foreground">{value}</span>
      )}
    </div>
  );
}

function ErrorTypeItem({ title, examples }: { title: string; examples: string }) {
  return (
    <div>
      <div className="font-bold text-foreground mb-1">{title}</div>
      <div className="text-xs text-muted-foreground">{examples}</div>
    </div>
  );
}

function RecoveryItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function ImplementationItem({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <div className="font-bold text-foreground mb-1">{title}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
}
