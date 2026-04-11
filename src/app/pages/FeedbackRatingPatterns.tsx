import { Link } from "react-router";
import { MessageCircle, Star, AlertTriangle, Lightbulb, CheckCircle, ArrowRight, TrendingUp, BarChart3, Users } from "lucide-react";

export default function FeedbackRatingPatterns() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-50 via-white to-blue-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-gray-600 hover:text-[#000080]">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <MessageCircle size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#000080] mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-5xl font-bold text-gray-900">Feedback, Rating & Continuous Improvement</h1>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Comprehensive patterns for collecting citizen feedback, service ratings, issue reports, and improvement suggestions.
                Designed to drive continuous service improvement through structured feedback collection, acknowledgment, and actionable insights.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF9933] rounded-full"></div>
                  <span className="text-gray-700">Pattern Family: <span className="font-bold text-gray-900">Quality & Improvement</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#138808] rounded-full"></div>
                  <span className="text-gray-700">Patterns: <span className="font-bold text-gray-900">5 Interactive Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#000080] rounded-full"></div>
                  <span className="text-gray-700">Complexity: <span className="font-bold text-gray-900">Low to Medium</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold text-center shadow-lg">
                GOVERNMENT GRADE
              </div>
              <div className="px-8 py-4 bg-white border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                ACCESSIBLE
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Access */}
      <div className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-bold text-gray-900">Quick Access:</span>
              <Link to="#overview" className="text-[#000080] hover:underline text-sm font-medium">
                Pattern Overview
              </Link>
              <Link to="#all-patterns" className="text-[#000080] hover:underline text-sm font-medium">
                View All Patterns
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              Last updated: April 2026
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">

        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pattern Overview</h2>
          <div className="bg-white border-2 border-gray-300 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Continuous Improvement</h3>
                  <p className="text-sm text-gray-700">
                    Structured feedback loops that enable data-driven service improvements
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Actionable Insights</h3>
                  <p className="text-sm text-gray-700">
                    Convert citizen feedback into measurable improvements and policy changes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Citizen Engagement</h3>
                  <p className="text-sm text-gray-700">
                    Foster trust and transparency through acknowledgment and visible action
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When to Use */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">When to Use These Patterns</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>After service completion or transaction to capture satisfaction ratings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>When citizens need to report issues, bugs, or service problems</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>To collect suggestions for new features or service improvements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>When building citizen-centric services that require ongoing refinement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>To demonstrate transparency and responsiveness to citizen input</span>
              </li>
            </ul>
          </div>
        </section>

        {/* All Patterns */}
        <section id="all-patterns" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">All Feedback & Rating Patterns</h2>

          <div className="grid grid-cols-1 gap-6">

            {/* Rate Service Pattern */}
            <Link
              to="/patterns/feedback/rate-service"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Rate Service</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Star rating system for capturing service satisfaction scores (1-5 stars) with optional quick sentiment tags
                    (Excellent, Good, Average, Poor, Very Poor).
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-bold">RATING</span>
                    <span className="text-gray-600">Complexity: Low</span>
                    <span className="text-gray-600">Time: 30 seconds</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Post-Completion Feedback */}
            <Link
              to="/patterns/feedback/post-completion"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Post-Completion Feedback</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Detailed feedback form triggered after service completion, collecting structured input on experience,
                    pain points, ease of use, and satisfaction with outcome.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-bold">FEEDBACK</span>
                    <span className="text-gray-600">Complexity: Medium</span>
                    <span className="text-gray-600">Time: 2-3 minutes</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Issue Reporting */}
            <Link
              to="/patterns/feedback/issue-reporting"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Issue Reporting</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Structured form for reporting bugs, errors, technical issues, or service problems with categorization,
                    severity levels, and screenshot/file attachment support.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full font-bold">ISSUE</span>
                    <span className="text-gray-600">Complexity: Medium</span>
                    <span className="text-gray-600">Time: 3-5 minutes</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Suggest Improvement */}
            <Link
              to="/patterns/feedback/suggest-improvement"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Suggest Improvement</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Ideation form for citizens to propose new features, service enhancements, policy changes, or process improvements
                    with impact assessment and voting capability.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-bold">SUGGESTION</span>
                    <span className="text-gray-600">Complexity: Low</span>
                    <span className="text-gray-600">Time: 2-3 minutes</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Feedback Acknowledgment */}
            <Link
              to="/patterns/feedback/acknowledgment"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Feedback Acknowledgment</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Confirmation screen and follow-up communication patterns showing feedback receipt, reference number,
                    expected timeline, and status tracking mechanism.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-bold">ACKNOWLEDGMENT</span>
                    <span className="text-gray-600">Complexity: Low</span>
                    <span className="text-gray-600">Auto-triggered</span>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Principles</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">1. Minimize Friction</h3>
              <p className="text-sm text-gray-700">
                Keep feedback forms short and simple. Allow quick ratings without mandatory comments.
                Every additional field reduces submission rates.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">2. Right Time, Right Place</h3>
              <p className="text-sm text-gray-700">
                Trigger feedback requests at natural completion points. Avoid interrupting active tasks.
                Allow "give feedback" access from all pages.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">3. Close the Loop</h3>
              <p className="text-sm text-gray-700">
                Always acknowledge feedback receipt. Provide tracking references. Show how feedback led to improvements.
                Build trust through transparency.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">4. Actionable Structure</h3>
              <p className="text-sm text-gray-700">
                Use categorization, severity levels, and tags to route feedback appropriately.
                Structure data for analysis and prioritization.
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8">
          <h3 className="font-bold text-gray-900 mb-4">Implementation Notes</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <strong>Backend Integration:</strong> Feedback patterns require backend systems for storage,
              categorization, and routing to appropriate teams. Consider integration with helpdesk or CRM systems.
            </p>
            <p>
              <strong>Analytics:</strong> Implement tracking for feedback submission rates, average ratings,
              common issues, and improvement themes to drive data-driven decisions.
            </p>
            <p>
              <strong>Privacy:</strong> Make feedback anonymous by default with option to provide contact details.
              Follow data protection guidelines for sensitive feedback.
            </p>
            <p>
              <strong>Accessibility:</strong> Ensure all feedback forms are keyboard accessible, screen-reader friendly,
              and available in all official languages with clear, simple language.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
