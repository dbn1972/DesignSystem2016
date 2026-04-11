import { FileText, User, CreditCard, Search as SearchIcon, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";

export default function Patterns() {
  const patterns = [
    {
      icon: FileText,
      title: "Form Patterns",
      description: "Structured approaches for data collection including single-page forms, multi-step wizards, and validation patterns.",
      examples: ["Application Forms", "Registration", "Survey Forms", "Feedback Forms"],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: User,
      title: "Authentication",
      description: "Secure login, registration, password reset, and multi-factor authentication patterns.",
      examples: ["Sign In", "Sign Up", "Password Reset", "OTP Verification"],
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: SearchIcon,
      title: "Search & Filter",
      description: "Patterns for helping users find information efficiently including search, filtering, and sorting.",
      examples: ["Global Search", "Advanced Filters", "Faceted Search", "Sort Options"],
      color: "from-green-600 to-green-700"
    },
    {
      icon: CreditCard,
      title: "Payment & Transactions",
      description: "Secure payment flows, transaction confirmations, and receipt patterns for government services.",
      examples: ["Fee Payment", "Bill Payment", "Transaction History", "Receipts"],
      color: "from-orange-600 to-orange-700"
    },
    {
      icon: FileCheck,
      title: "Document Management",
      description: "Patterns for uploading, viewing, downloading, and managing documents and certificates.",
      examples: ["Document Upload", "File Preview", "Download Center", "Certificate Generation"],
      color: "from-teal-600 to-teal-700"
    },
    {
      icon: AlertTriangle,
      title: "Error & Empty States",
      description: "Handling errors gracefully and communicating when content is unavailable or actions fail.",
      examples: ["404 Pages", "No Results", "Network Errors", "Permission Denied"],
      color: "from-red-600 to-red-700"
    }
  ];

  const serviceFlows = [
    {
      title: "Citizen Application Flow",
      steps: ["Login/Register", "Fill Application", "Upload Documents", "Preview & Submit", "Payment", "Confirmation"]
    },
    {
      title: "Status Tracking Flow",
      steps: ["Enter Reference", "View Status", "Download Updates", "Provide Feedback"]
    },
    {
      title: "Certificate Issuance Flow",
      steps: ["Verify Identity", "Check Eligibility", "Generate Certificate", "Digital Signature", "Download/Print"]
    }
  ];

  const bestPractices = [
    {
      title: "Progressive Disclosure",
      description: "Show information progressively to avoid overwhelming users. Display only essential information initially and reveal details on demand."
    },
    {
      title: "Clear Feedback",
      description: "Provide immediate, clear feedback for all user actions. Use success messages, error states, and loading indicators appropriately."
    },
    {
      title: "Consistent Navigation",
      description: "Maintain consistent navigation patterns across services. Users should always know where they are and how to move forward or backward."
    },
    {
      title: "Mobile-First Approach",
      description: "Design for mobile devices first, ensuring core functionality works on smaller screens before enhancing for larger displays."
    },
    {
      title: "Accessibility by Default",
      description: "Build accessibility into every pattern. Ensure keyboard navigation, screen reader support, and proper color contrast."
    },
    {
      title: "Multilingual Support",
      description: "Design patterns that accommodate multiple languages, including right-to-left scripts and varying text lengths."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#000080] to-[#000050] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Design Patterns</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Reusable solutions for common design problems in government digital services. 
            These patterns combine components and behaviors to solve specific user needs.
          </p>
        </div>
      </section>

      {/* Pattern Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Pattern Library</h2>
            <p className="text-lg text-gray-600">
              Common patterns for building government digital services that are consistent, 
              accessible, and user-friendly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patterns.map((pattern, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${pattern.color}`}></div>
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${pattern.color} rounded-lg flex items-center justify-center mb-4`}>
                    <pattern.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {pattern.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pattern.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Examples:</p>
                    <div className="flex flex-wrap gap-2">
                      {pattern.examples.map((example, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Flows */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Common Service Flows</h2>
            <p className="text-lg text-gray-600">
              End-to-end user journeys for typical government service scenarios.
            </p>
          </div>

          <div className="space-y-8">
            {serviceFlows.map((flow, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {flow.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {flow.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#000080] text-white rounded-full flex items-center justify-center font-semibold">
                          {idx + 1}
                        </div>
                        <span className="text-gray-700 font-medium">{step}</span>
                      </div>
                      {idx < flow.steps.length - 1 && (
                        <div className="hidden md:block w-8 h-0.5 bg-gray-300 mx-2"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Pattern Example */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Pattern Example: Application Form</h2>
            <p className="text-lg text-gray-600">
              A complete form pattern showing best practices for government service applications.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                {["Personal Info", "Documents", "Preview", "Submit"].map((step, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        idx === 0 ? "bg-[#000080] text-white" : "bg-gray-200 text-gray-600"
                      }`}>
                        {idx < 1 ? <CheckCircle size={20} /> : idx + 1}
                      </div>
                      <span className="text-xs mt-2 text-gray-600">{step}</span>
                    </div>
                    {idx < 3 && (
                      <div className="w-16 h-0.5 bg-gray-300 mx-2 mb-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000080] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000080] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000080] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000080] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    State *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000080] focus:border-transparent bg-white">
                    <option>Select your state</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                  Cancel
                </button>
                <button className="px-6 py-3 bg-[#000080] text-white rounded-lg hover:bg-[#000060] transition-colors font-semibold">
                  Continue to Documents
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Design Best Practices</h2>
            <p className="text-lg text-gray-600">
              Key principles to follow when implementing patterns in government digital services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bestPractices.map((practice, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#138808] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {practice.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility in Patterns */}
      <section className="py-16 bg-[#000080] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Accessibility in Patterns</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Every pattern in the UX4G Design System is designed with accessibility as a core 
              requirement. This includes proper heading hierarchy, keyboard navigation, screen 
              reader support, focus management, and clear error messaging.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">WCAG</div>
                <div className="text-sm text-blue-100">AA Compliant</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-blue-100">Keyboard Accessible</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">4.5:1</div>
                <div className="text-sm text-blue-100">Min Contrast Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
