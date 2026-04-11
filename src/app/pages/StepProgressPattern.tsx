import { Link } from "react-router";
import { useState } from "react";
import { TrendingUp, CheckCircle, Clock, AlertCircle, User, FileText, CreditCard, Truck, ChevronRight } from "lucide-react";

// Define application steps
const STEPS = [
  {
    id: 1,
    title: "Application Submitted",
    description: "Your application has been received and registered in the system",
    icon: <FileText size={24} />,
    status: "completed",
    completedDate: new Date(Date.now() - 72 * 60 * 60 * 1000),
    estimatedDuration: "Instant",
    actor: "Applicant",
    details: "Application #DL-2026-89012 submitted with all required documents"
  },
  {
    id: 2,
    title: "Initial Screening",
    description: "Application screened for completeness and basic eligibility",
    icon: <User size={24} />,
    status: "completed",
    completedDate: new Date(Date.now() - 48 * 60 * 60 * 1000),
    estimatedDuration: "6-12 hours",
    actor: "Screening Officer",
    details: "All required documents present. Eligibility criteria met."
  },
  {
    id: 3,
    title: "Payment Processing",
    description: "Application fee payment verification",
    icon: <CreditCard size={24} />,
    status: "completed",
    completedDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
    estimatedDuration: "1-2 hours",
    actor: "Payment Gateway",
    details: "Payment of ₹500 received and verified. Transaction ID: UPI2026040812345"
  },
  {
    id: 4,
    title: "Document Verification",
    description: "Detailed verification of all submitted documents",
    icon: <FileText size={24} />,
    status: "completed",
    completedDate: new Date(Date.now() - 5 * 60 * 60 * 1000),
    estimatedDuration: "1-2 days",
    actor: "Verification Officer",
    details: "All documents verified: Aadhaar, Address Proof, Existing License, Medical Certificate"
  },
  {
    id: 5,
    title: "Final Approval",
    description: "Application reviewed and approved by RTO",
    icon: <CheckCircle size={24} />,
    status: "current",
    startedDate: new Date(Date.now() - 2 * 60 * 60 * 1000),
    estimatedDuration: "2-3 days",
    estimatedCompletion: new Date(Date.now() + 22 * 60 * 60 * 1000),
    actor: "Regional Transport Officer",
    details: "Application under final review. Decision expected within 24 hours."
  },
  {
    id: 6,
    title: "License Generation",
    description: "Physical driving license is being printed",
    icon: <CreditCard size={24} />,
    status: "pending",
    estimatedDuration: "1-2 days",
    actor: "License Production Unit",
    details: "License will be printed after approval"
  },
  {
    id: 7,
    title: "Dispatch",
    description: "License dispatched to your registered address",
    icon: <Truck size={24} />,
    status: "pending",
    estimatedDuration: "3-5 days",
    actor: "Postal Service",
    details: "Tracking number will be provided after dispatch"
  }
];

export default function StepProgressPattern() {
  const [selectedStep, setSelectedStep] = useState(5); // Current step selected

  const currentStepIndex = STEPS.findIndex(s => s.status === 'current');
  const progress = ((currentStepIndex + 1) / STEPS.length) * 100;
  const completedSteps = STEPS.filter(s => s.status === 'completed').length;

  const getStepStatus = (step: typeof STEPS[0]) => {
    if (step.status === 'completed') return { color: 'green', label: 'Completed' };
    if (step.status === 'current') return { color: 'blue', label: 'In Progress' };
    return { color: 'gray', label: 'Pending' };
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return null;
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/status-lifecycle" className="text-sm text-gray-600 hover:text-[#000080]">
                ← Back to Patterns
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-sm font-bold text-gray-900">Step Progress Tracker</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Banner */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-[1400px] mx-auto px-8 py-8">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm opacity-90">Application Progress</div>
              <div className="text-lg font-bold">{Math.round(progress)}% Complete</div>
            </div>
            <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Application Reference</div>
              <div className="text-2xl font-bold">DL-2026-89012</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90 mb-1">Current Stage</div>
              <div className="text-xl font-bold">Step {currentStepIndex + 1} of {STEPS.length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-12">
        
        <div className="grid grid-cols-12 gap-8">
          
          {/* Step Progress Visualization */}
          <div className="col-span-4">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Application Journey</h2>
              
              {/* Vertical Progress Tracker */}
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute left-[19px] top-[20px] bottom-[20px] w-1 bg-gray-200"></div>
                <div 
                  className="absolute left-[19px] top-[20px] w-1 bg-[#138808] transition-all duration-500"
                  style={{ 
                    height: `${(completedSteps / STEPS.length) * 100}%` 
                  }}
                ></div>

                {/* Steps */}
                <div className="space-y-6">
                  {STEPS.map((step, index) => {
                    const status = getStepStatus(step);
                    const isSelected = selectedStep === step.id;
                    
                    return (
                      <button
                        key={step.id}
                        onClick={() => setSelectedStep(step.id)}
                        className={`relative w-full text-left transition-all ${
                          isSelected ? 'scale-105' : ''
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          {/* Step Icon */}
                          <div className={`relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md z-10 ${
                            step.status === 'completed' ? 'bg-[#138808]' :
                            step.status === 'current' ? 'bg-blue-500' :
                            'bg-gray-300'
                          }`}>
                            {step.status === 'completed' ? (
                              <CheckCircle size={20} className="text-white" />
                            ) : step.status === 'current' ? (
                              <Clock size={20} className="text-white animate-pulse" />
                            ) : (
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            )}
                          </div>

                          {/* Step Info */}
                          <div className={`flex-1 pt-1 ${isSelected ? 'bg-blue-50 -ml-2 -mr-2 px-2 py-1 rounded' : ''}`}>
                            <div className="font-bold text-gray-900 text-sm mb-1">
                              {step.title}
                            </div>
                            <div className={`text-xs font-bold ${
                              status.color === 'green' ? 'text-green-600' :
                              status.color === 'blue' ? 'text-blue-600' :
                              'text-gray-500'
                            }`}>
                              {status.label}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Summary Stats */}
              <div className="mt-8 pt-8 border-t-2 border-gray-300 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-[#138808]">{completedSteps}</div>
                  <div className="text-xs text-gray-600">Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-400">{STEPS.length - completedSteps - 1}</div>
                  <div className="text-xs text-gray-600">Remaining</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step Details */}
          <div className="col-span-8">
            {STEPS.filter(s => s.id === selectedStep).map(step => {
              const status = getStepStatus(step);
              
              return (
                <div key={step.id} className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
                  {/* Header */}
                  <div className={`p-8 border-b-2 border-gray-300 ${
                    status.color === 'green' ? 'bg-green-50' :
                    status.color === 'blue' ? 'bg-blue-50' :
                    'bg-gray-50'
                  }`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-4 rounded-lg ${
                        status.color === 'green' ? 'bg-green-500' :
                        status.color === 'blue' ? 'bg-blue-500' :
                        'bg-gray-400'
                      } text-white`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                          <span className={`px-3 py-1 text-sm font-bold rounded ${
                            status.color === 'green' ? 'bg-green-500 text-white' :
                            status.color === 'blue' ? 'bg-blue-500 text-white' :
                            'bg-gray-400 text-white'
                          }`}>
                            {status.label}
                          </span>
                        </div>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      {/* Responsible Party */}
                      <div>
                        <div className="text-sm font-bold text-gray-600 mb-2">Responsible Party</div>
                        <div className="flex items-center gap-2">
                          <User size={20} className="text-gray-500" />
                          <span className="font-bold text-gray-900">{step.actor}</span>
                        </div>
                      </div>

                      {/* Estimated Duration */}
                      <div>
                        <div className="text-sm font-bold text-gray-600 mb-2">Estimated Duration</div>
                        <div className="flex items-center gap-2">
                          <Clock size={20} className="text-gray-500" />
                          <span className="font-bold text-gray-900">{step.estimatedDuration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Completion/Start Date */}
                    {step.completedDate && (
                      <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle size={20} className="text-green-600" />
                          <span className="font-bold text-gray-900">Completed</span>
                        </div>
                        <div className="text-sm text-gray-700">
                          {formatDate(step.completedDate)}
                        </div>
                      </div>
                    )}

                    {step.status === 'current' && step.startedDate && (
                      <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Clock size={20} className="text-blue-600" />
                              <span className="font-bold text-gray-900">Started</span>
                            </div>
                            <div className="text-sm text-gray-700">
                              {formatDate(step.startedDate)}
                            </div>
                          </div>
                          {step.estimatedCompletion && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <TrendingUp size={20} className="text-blue-600" />
                                <span className="font-bold text-gray-900">Expected By</span>
                              </div>
                              <div className="text-sm text-gray-700">
                                {formatDate(step.estimatedCompletion)}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {step.status === 'pending' && (
                      <div className="mb-6 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle size={20} className="text-gray-500" />
                          <span className="font-bold text-gray-900">Awaiting Previous Step</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          This step will begin once the current stage is complete
                        </div>
                      </div>
                    )}

                    {/* Details */}
                    <div>
                      <div className="text-sm font-bold text-gray-600 mb-3">Details</div>
                      <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="p-6 bg-gray-50 border-t-2 border-gray-300 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedStep(Math.max(1, selectedStep - 1))}
                      disabled={selectedStep === 1}
                      className="px-4 py-2 border-2 border-gray-300 rounded font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:border-gray-400"
                    >
                      ← Previous Step
                    </button>
                    <button
                      onClick={() => setSelectedStep(Math.min(STEPS.length, selectedStep + 1))}
                      disabled={selectedStep === STEPS.length}
                      className="px-4 py-2 bg-[#000080] text-white rounded font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#000060] flex items-center gap-2"
                    >
                      <span>Next Step</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Pattern Info */}
        <div className="mt-12 bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Pattern Features Demonstrated</h3>
          <div className="grid grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-gray-700 mb-2">Visual Progress</div>
              <ul className="space-y-1 text-gray-600">
                <li>• Vertical step tracker</li>
                <li>• Progress percentage</li>
                <li>• Completion indicator</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-gray-700 mb-2">Step States</div>
              <ul className="space-y-1 text-gray-600">
                <li>• Completed (green)</li>
                <li>• In Progress (blue)</li>
                <li>• Pending (gray)</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-gray-700 mb-2">Time Intelligence</div>
              <ul className="space-y-1 text-gray-600">
                <li>• Estimated duration</li>
                <li>• Completion dates</li>
                <li>• Expected timeline</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-gray-700 mb-2">Accountability</div>
              <ul className="space-y-1 text-gray-600">
                <li>• Responsible party</li>
                <li>• Step details</li>
                <li>• Navigation</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
