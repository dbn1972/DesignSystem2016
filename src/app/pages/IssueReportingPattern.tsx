import { useState } from "react";
import { Link } from "react-router";
import { AlertTriangle, ArrowLeft, CheckCircle, Upload, X } from "lucide-react";

export default function IssueReportingPattern() {
  const [formData, setFormData] = useState({
    issueType: "",
    severity: "",
    title: "",
    description: "",
    stepsToReproduce: "",
    browser: "",
    device: "",
    screenshot: null as File | null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.issueType && formData.title && formData.description) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      issueType: "",
      severity: "",
      title: "",
      description: "",
      stepsToReproduce: "",
      browser: "",
      device: "",
      screenshot: null
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-red-50 via-white to-orange-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/feedback" className="text-sm text-gray-600 hover:text-[#000080]">
              ← Back to Feedback & Rating Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <AlertTriangle size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#000080] mb-2 uppercase tracking-wide">Feedback Pattern</div>
                  <h1 className="text-5xl font-bold text-gray-900">Issue Reporting</h1>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Structured form for reporting bugs, errors, technical issues, or service problems with proper categorization
                and detailed documentation for effective resolution.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-gray-900 mb-2">Interactive Demo</h2>
              <p className="text-sm text-gray-700">
                Report a technical issue or service problem using this structured form.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Report an Issue</h3>
                    <p className="text-sm text-gray-600">
                      Help us fix problems quickly by providing detailed information
                    </p>
                  </div>

                  {/* Issue Type */}
                  <div>
                    <label className="block font-bold text-gray-900 mb-2">
                      Issue Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={formData.issueType}
                      onChange={(e) => setFormData({...formData, issueType: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#000080] focus:outline-none"
                      required
                    >
                      <option value="">Select issue type</option>
                      <option value="bug">Bug / Error</option>
                      <option value="technical">Technical Problem</option>
                      <option value="performance">Performance Issue</option>
                      <option value="display">Display / UI Issue</option>
                      <option value="data">Data / Content Error</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Severity */}
                  <div>
                    <label className="block font-bold text-gray-900 mb-2">
                      Severity <span className="text-red-600">*</span>
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { value: "critical", label: "Critical", color: "red" },
                        { value: "high", label: "High", color: "orange" },
                        { value: "medium", label: "Medium", color: "yellow" },
                        { value: "low", label: "Low", color: "gray" }
                      ].map((sev) => (
                        <button
                          key={sev.value}
                          type="button"
                          onClick={() => setFormData({...formData, severity: sev.value})}
                          className={`px-4 py-3 border-2 rounded font-bold text-sm ${
                            formData.severity === sev.value
                              ? `border-${sev.color}-500 bg-${sev.color}-50 text-${sev.color}-700`
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          {sev.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block font-bold text-gray-900 mb-2">
                      Issue Title <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Brief description of the problem"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#000080] focus:outline-none"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block font-bold text-gray-900 mb-2">
                      Detailed Description <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      placeholder="Explain what happened, what you expected to happen, and any error messages you saw..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#000080] focus:outline-none"
                      required
                    />
                  </div>

                  {/* Steps to Reproduce */}
                  <div>
                    <label className="block font-bold text-gray-900 mb-2">
                      Steps to Reproduce
                    </label>
                    <textarea
                      value={formData.stepsToReproduce}
                      onChange={(e) => setFormData({...formData, stepsToReproduce: e.target.value})}
                      rows={3}
                      placeholder="1. Go to...\n2. Click on...\n3. Error appears..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#000080] focus:outline-none"
                    />
                  </div>

                  {/* Environment */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-gray-900 mb-2">Browser</label>
                      <select
                        value={formData.browser}
                        onChange={(e) => setFormData({...formData, browser: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#000080] focus:outline-none"
                      >
                        <option value="">Select browser</option>
                        <option value="chrome">Chrome</option>
                        <option value="firefox">Firefox</option>
                        <option value="safari">Safari</option>
                        <option value="edge">Edge</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-gray-900 mb-2">Device</label>
                      <select
                        value={formData.device}
                        onChange={(e) => setFormData({...formData, device: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#000080] focus:outline-none"
                      >
                        <option value="">Select device</option>
                        <option value="desktop">Desktop</option>
                        <option value="tablet">Tablet</option>
                        <option value="mobile">Mobile</option>
                      </select>
                    </div>
                  </div>

                  {/* Screenshot Upload */}
                  <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
                    <label className="block font-bold text-gray-900 mb-2">
                      Screenshot (Optional)
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded cursor-pointer hover:border-[#000080]">
                        <Upload size={16} />
                        <span className="text-sm font-bold">Choose File</span>
                        <input type="file" accept="image/*" className="hidden" />
                      </label>
                      <span className="text-sm text-gray-600">PNG, JPG up to 5MB</span>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-4 pt-4">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-red-600 text-white rounded font-bold hover:bg-red-700"
                    >
                      Submit Issue Report
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded font-bold hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Issue Reported Successfully</h3>
                  <p className="text-gray-700 mb-2">
                    Our technical team has been notified and will investigate this issue.
                  </p>
                  <p className="text-sm text-gray-600 mb-6">
                    Issue ID: ISS-2026-{Math.floor(Math.random() * 100000).toString().padStart(5, '0')}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-[#000080] text-white rounded font-bold hover:bg-blue-900"
                  >
                    Report Another Issue
                  </button>
                </div>
              )}
            </div>
          </div>

          <aside className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Complexity</div>
                    <div className="font-bold">Medium</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Average Time</div>
                    <div className="font-bold">3-5 minutes</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Response Time</div>
                    <div className="font-bold">24-48 hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Best Practices</h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li>✓ Categorize by type and severity</li>
                  <li>✓ Capture environment details automatically</li>
                  <li>✓ Allow screenshot/file attachments</li>
                  <li>✓ Provide tracking reference immediately</li>
                  <li>✓ Send status updates via notification</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/feedback/post-completion" className="block text-sm text-[#000080] hover:underline">
                    → Post-Completion Feedback
                  </Link>
                  <Link to="/patterns/feedback/acknowledgment" className="block text-sm text-[#000080] hover:underline">
                    → Feedback Acknowledgment
                  </Link>
                  <Link to="/patterns/contact-support" className="block text-sm text-[#000080] hover:underline">
                    → Contact & Support
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
