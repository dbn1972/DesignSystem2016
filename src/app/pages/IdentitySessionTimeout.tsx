import { Link } from "react-router";
import { ArrowLeft, Shield, Clock, AlertCircle, RefreshCw, Info, HelpCircle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function IdentitySessionTimeout() {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes warning
  const [showWarning, setShowWarning] = useState(true);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (showWarning && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setTimedOut(true);
      setShowWarning(false);
    }
  }, [timeLeft, showWarning]);

  const handleStayLoggedIn = () => {
    setShowWarning(false);
    setTimeLeft(120);
    // Refresh session on backend
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/patterns/identity" className="flex items-center gap-2 text-gray-700 hover:text-[#000080]">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Identity Patterns</span>
          </Link>
          <div className="text-sm text-gray-600">
            <span className="font-bold">Flow:</span> Session Timeout / Re-authentication
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Prototype View - 8 columns */}
          <div className="col-span-8">
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
              {/* Tricolor Header */}
              <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 h-2"></div>
              
              {/* Government Header */}
              <div className="bg-white border-b-2 border-gray-300 px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#000080] rounded flex items-center justify-center">
                    <Shield size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900">Digital India Portal</div>
                    <div className="text-sm text-gray-600">Government of India</div>
                  </div>
                </div>
              </div>

              {/* Session Warning Modal Overlay */}
              {showWarning && (
                <div className="relative">
                  {/* Dimmed Background */}
                  <div className="absolute inset-0 bg-gray-900/50 z-10"></div>
                  
                  {/* Warning Modal */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 p-12">
                    <div className="bg-white border-2 border-yellow-300 rounded-lg shadow-2xl max-w-lg w-full">
                      <div className="bg-yellow-100 border-b-2 border-yellow-300 px-6 py-4 flex items-center gap-3">
                        <Clock size={24} className="text-yellow-700" />
                        <h2 className="font-bold text-gray-900 text-lg">Session About to Expire</h2>
                      </div>
                      
                      <div className="p-6 text-center">
                        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <div className="text-5xl font-bold text-yellow-700">{formatTime(timeLeft)}</div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          Your session will expire due to inactivity. You'll be automatically logged out for security reasons.
                        </p>

                        <div className="space-y-3">
                          <button
                            onClick={handleStayLoggedIn}
                            className="w-full py-4 bg-[#000080] text-white font-bold rounded-lg hover:bg-[#000060] transition-colors"
                          >
                            Stay Logged In
                          </button>
                          <button
                            onClick={() => setTimedOut(true)}
                            className="w-full py-3 bg-white text-gray-700 font-medium border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Log Out Now
                          </button>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg text-sm text-left">
                          <div className="flex items-start gap-2">
                            <Info size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="text-gray-700">
                              <div className="font-bold text-gray-900 mb-1">Why does this happen?</div>
                              <p>Sessions expire after 30 minutes of inactivity to protect your account and data.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Timed Out View */}
              {timedOut && (
                <div className="px-12 py-16">
                  <div className="max-w-xl mx-auto text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <AlertCircle size={40} className="text-red-600" />
                    </div>
                    
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">Session Expired</h1>
                    <p className="text-gray-600 mb-8">
                      Your session has expired due to inactivity. For security, you've been logged out automatically.
                    </p>

                    <div className="p-6 bg-gray-100 border-2 border-gray-300 rounded-lg mb-8 text-left">
                      <div className="font-bold text-gray-900 mb-3">Your work has been saved</div>
                      <div className="text-sm text-gray-700 space-y-2">
                        <p>• Any form data you entered has been saved as a draft</p>
                        <p>• Simply sign in again to continue where you left off</p>
                        <p>• Your draft will be available for 24 hours</p>
                      </div>
                    </div>

                    <Link
                      to="/patterns/identity/sign-in"
                      className="block w-full py-4 bg-[#000080] text-white font-bold rounded-lg hover:bg-[#000060] transition-colors text-center mb-4"
                    >
                      Sign In Again
                    </Link>

                    <div className="text-sm text-gray-600">
                      <Info size={14} className="inline mr-1" />
                      Session timeout helps protect your account from unauthorized access
                    </div>
                  </div>
                </div>
              )}

              {/* Active Session View (when warning dismissed) */}
              {!showWarning && !timedOut && (
                <div className="px-12 py-16">
                  <div className="max-w-xl mx-auto text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-600" />
                    </div>
                    
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">Session Extended</h1>
                    <p className="text-gray-600 mb-8">
                      Your session has been extended. You can continue working without interruption.
                    </p>

                    <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg mb-8 text-left">
                      <div className="font-bold text-gray-900 mb-3">Session Security</div>
                      <div className="text-sm text-gray-700 space-y-2">
                        <p>• Sessions expire after 30 minutes of inactivity</p>
                        <p>• You'll receive a warning 2 minutes before expiry</p>
                        <p>• Maximum session duration: 8 hours</p>
                        <p>• Always log out when finished for security</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowWarning(true)}
                      className="w-full py-3 bg-white text-gray-700 font-medium border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <RefreshCw size={16} className="inline mr-2" />
                      View Session Warning Again
                    </button>
                  </div>
                </div>
              )}

              {/* Help Card */}
              <div className="border-t-2 border-gray-300 bg-gray-50 px-12 py-6">
                <div className="max-w-xl mx-auto">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={20} className="text-[#000080] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 mb-2">Need Help?</div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p>Call: <span className="font-bold">1800-XXX-XXXX</span> (Toll-Free)</p>
                        <p>Email: <span className="font-bold">support@digitalindia.gov.in</span></p>
                        <p className="text-gray-600">Monday to Friday, 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Sidebar - 4 columns */}
          <aside className="col-span-4 space-y-6">
            <PatternInfo />
            <SecurityRationale />
            <TimingConfiguration />
            <ImplementationNotes />
          </aside>

        </div>
      </main>
    </div>
  );
}

// ==================== SIDEBAR COMPONENTS ====================

function PatternInfo() {
  return (
    <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
      <div className="bg-gray-100 border-b-2 border-gray-300 px-4 py-3">
        <h3 className="font-bold text-gray-900">Pattern Info</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <InfoRow label="Pattern ID" value="UX4G-PAT-009-08" />
        <InfoRow label="Status" value="Stable" badge="green" />
        <InfoRow label="Complexity" value="Medium" />
        <InfoRow label="Category" value="Security" />
        <InfoRow label="Version" value="1.0.0" />
      </div>
    </div>
  );
}

function SecurityRationale() {
  return (
    <div className="border-2 border-red-200 rounded-lg overflow-hidden bg-red-50">
      <div className="bg-red-100 border-b-2 border-red-200 px-4 py-3">
        <h3 className="font-bold text-gray-900">Security Rationale</h3>
      </div>
      <div className="p-4 space-y-2 text-sm text-gray-700">
        <SecurityItem text="Prevents unauthorized access to unattended devices" />
        <SecurityItem text="Reduces risk of session hijacking" />
        <SecurityItem text="Protects sensitive government data" />
        <SecurityItem text="Complies with security standards" />
        <SecurityItem text="Mandatory for high-security services" />
      </div>
    </div>
  );
}

function TimingConfiguration() {
  return (
    <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
      <div className="bg-gray-100 border-b-2 border-gray-300 px-4 py-3">
        <h3 className="font-bold text-gray-900">Timing Configuration</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <ConfigItem label="Inactivity Timeout" value="30 minutes" />
        <ConfigItem label="Warning Time" value="2 minutes before" />
        <ConfigItem label="Max Session" value="8 hours" />
        <ConfigItem label="Countdown Interval" value="1 second" />
      </div>
    </div>
  );
}

function ImplementationNotes() {
  return (
    <div className="border-2 border-blue-200 rounded-lg overflow-hidden bg-blue-50">
      <div className="bg-blue-100 border-b-2 border-blue-200 px-4 py-3">
        <h3 className="font-bold text-gray-900">Implementation</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-gray-700">
        <ImplementationItem
          title="Idle Detection"
          description="Track mouse movement, keyboard input, scroll events"
        />
        <ImplementationItem
          title="Warning Modal"
          description="Show modal overlay 2 minutes before expiry with countdown"
        />
        <ImplementationItem
          title="Session Extension"
          description="Refresh session token on backend when user clicks 'Stay Logged In'"
        />
        <ImplementationItem
          title="Auto-logout"
          description="Clear session and redirect to login when timer reaches zero"
        />
      </div>
    </div>
  );
}

// Helper Components
function InfoRow({ label, value, badge }: { label: string; value: string; badge?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-600">{label}</span>
      {badge ? (
        <span className={`px-2 py-0.5 ${badge === 'green' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'} text-xs font-bold rounded-full`}>
          {value}
        </span>
      ) : (
        <span className="font-bold text-gray-900">{value}</span>
      )}
    </div>
  );
}

function SecurityItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <AlertCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function ConfigItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-600">{label}</span>
      <span className="font-bold text-gray-900">{value}</span>
    </div>
  );
}

function ImplementationItem({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <div className="font-bold text-gray-900 mb-1">{title}</div>
      <div className="text-xs text-gray-600">{description}</div>
    </div>
  );
}
