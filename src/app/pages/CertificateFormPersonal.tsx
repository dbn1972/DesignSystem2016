import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { User, Save, ArrowRight, ArrowLeft, AlertCircle, CheckCircle } from "lucide-react";

export default function CertificateFormPersonal() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    fatherName: "",
    motherName: "",
    maritalStatus: "",
    mobileNumber: "",
    email: "",
    aadhaarNumber: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedDraft, setSavedDraft] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: undefined });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Please select gender";
    if (!formData.fatherName.trim()) newErrors.fatherName = "Father's name is required";
    if (!formData.motherName.trim()) newErrors.motherName = "Mother's name is required";
    if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile number is required";
    else if (formData.mobileNumber.length !== 10) newErrors.mobileNumber = "Enter valid 10-digit mobile number";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter valid email address";
    if (formData.aadhaarNumber && formData.aadhaarNumber.length !== 12) newErrors.aadhaarNumber = "Enter valid 12-digit Aadhaar number";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveDraft = () => {
    // Mock save draft
    setSavedDraft(true);
    setTimeout(() => setSavedDraft(false), 3000);
  };

  const handleContinue = () => {
    if (validateForm()) {
      // Navigate to next step
      navigate("/reference-service/certificate/form/address");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-purple-600 rounded flex items-center justify-center">
                <User size={28} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Application Form</div>
                <h1 className="text-2xl font-bold text-gray-900">Personal Information</h1>
              </div>
            </div>
            <button
              onClick={handleSaveDraft}
              className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50"
            >
              <Save size={18} />
              Save Draft
            </button>
          </div>
          
          {/* Progress Indicator */}
          <ProgressSteps currentStep={1} />
        </div>
      </header>

      {/* Save Success Banner */}
      {savedDraft && (
        <div className="bg-green-100 border-b-2 border-green-300">
          <div className="max-w-[1400px] mx-auto px-12 py-3">
            <div className="flex items-center gap-2 text-sm text-green-800">
              <CheckCircle size={18} />
              <span className="font-bold">Draft saved successfully!</span> You can resume this application later.
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Form - 8 columns */}
          <div className="col-span-8">
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              
              <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
                <h2 className="font-bold text-gray-900">Step 1: Personal Information</h2>
              </div>

              <div className="p-8 space-y-6">
                
                {/* Full Name */}
                <FormField
                  label="Full Name (as per official documents)"
                  required
                  error={errors.fullName}
                >
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                  />
                </FormField>

                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Date of Birth */}
                  <FormField
                    label="Date of Birth"
                    required
                    error={errors.dateOfBirth}
                  >
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded text-sm ${
                        errors.dateOfBirth ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                    />
                  </FormField>

                  {/* Gender */}
                  <FormField
                    label="Gender"
                    required
                    error={errors.gender}
                  >
                    <select
                      value={formData.gender}
                      onChange={(e) => handleChange("gender", e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded text-sm ${
                        errors.gender ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </FormField>

                </div>

                {/* Father's Name */}
                <FormField
                  label="Father's Name"
                  required
                  error={errors.fatherName}
                >
                  <input
                    type="text"
                    value={formData.fatherName}
                    onChange={(e) => handleChange("fatherName", e.target.value)}
                    placeholder="Enter father's name"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.fatherName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                  />
                </FormField>

                {/* Mother's Name */}
                <FormField
                  label="Mother's Name"
                  required
                  error={errors.motherName}
                >
                  <input
                    type="text"
                    value={formData.motherName}
                    onChange={(e) => handleChange("motherName", e.target.value)}
                    placeholder="Enter mother's name"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.motherName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                  />
                </FormField>

                {/* Marital Status */}
                <FormField
                  label="Marital Status"
                  error={errors.maritalStatus}
                >
                  <select
                    value={formData.maritalStatus}
                    onChange={(e) => handleChange("maritalStatus", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
                  >
                    <option value="">Select marital status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </FormField>

                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Mobile Number */}
                  <FormField
                    label="Mobile Number"
                    required
                    error={errors.mobileNumber}
                  >
                    <input
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => handleChange("mobileNumber", e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={`w-full px-4 py-3 border-2 rounded text-sm ${
                        errors.mobileNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                    />
                  </FormField>

                  {/* Email */}
                  <FormField
                    label="Email Address"
                    error={errors.email}
                  >
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 border-2 rounded text-sm ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                    />
                  </FormField>

                </div>

                {/* Aadhaar Number */}
                <FormField
                  label="Aadhaar Number (Optional)"
                  error={errors.aadhaarNumber}
                  helpText="Your Aadhaar will be used for identity verification"
                >
                  <input
                    type="text"
                    value={formData.aadhaarNumber}
                    onChange={(e) => handleChange("aadhaarNumber", e.target.value.replace(/\D/g, '').slice(0, 12))}
                    placeholder="12-digit Aadhaar number"
                    maxLength={12}
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.aadhaarNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                  />
                </FormField>

              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <Link
                to="/reference-service/certificate/start"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50"
              >
                <ArrowLeft size={18} />
                Back
              </Link>
              <button
                onClick={handleContinue}
                className="flex items-center gap-2 px-8 py-3 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900"
              >
                Save and Continue
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <aside className="col-span-4 space-y-6">
            
            {/* Progress Card */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Application Progress</h3>
              <div className="space-y-3">
                <ProgressItem label="Personal Information" status="current" />
                <ProgressItem label="Address Details" status="pending" />
                <ProgressItem label="Additional Information" status="pending" />
                <ProgressItem label="Document Upload" status="pending" />
                <ProgressItem label="Review & Submit" status="pending" />
              </div>
            </div>

            {/* Help */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Need Help?</h4>
              <p className="text-sm text-gray-700 mb-3">
                Fields marked with <span className="text-red-600">*</span> are mandatory. 
                Ensure all information matches your official documents.
              </p>
              <Link
                to="/reference-service/certificate/help"
                className="text-sm text-[#000080] font-bold hover:underline"
              >
                View Help Guide →
              </Link>
            </div>

          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Step 1 of 3: Personal Information</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function ProgressSteps({ currentStep }: { currentStep: number }) {
  const steps = [
    { number: 1, label: "Personal" },
    { number: 2, label: "Address" },
    { number: 3, label: "Additional Info" }
  ];

  return (
    <div className="flex items-center gap-2">
      {steps.map((step, idx) => (
        <div key={step.number} className="flex items-center">
          <div className={`flex items-center gap-2 px-4 py-2 rounded ${
            step.number === currentStep 
              ? 'bg-[#000080] text-white' 
              : step.number < currentStep 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-600'
          }`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              step.number === currentStep 
                ? 'bg-white text-[#000080]' 
                : step.number < currentStep 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-300 text-gray-600'
            }`}>
              {step.number < currentStep ? '✓' : step.number}
            </div>
            <span className="text-sm font-bold">{step.label}</span>
          </div>
          {idx < steps.length - 1 && (
            <div className="w-8 h-0.5 bg-gray-300 mx-1"></div>
          )}
        </div>
      ))}
    </div>
  );
}

function FormField({ 
  label, 
  required, 
  error, 
  helpText, 
  children 
}: { 
  label: string; 
  required?: boolean; 
  error?: string; 
  helpText?: string; 
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-900 mb-2">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <div className="mt-2 flex items-start gap-2 text-sm text-red-700">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}
      {helpText && !error && (
        <p className="mt-2 text-xs text-gray-600">{helpText}</p>
      )}
    </div>
  );
}

function ProgressItem({ label, status }: { label: string; status: 'complete' | 'current' | 'pending' }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
        status === 'complete' 
          ? 'bg-green-600 text-white' 
          : status === 'current' 
            ? 'bg-[#000080] text-white' 
            : 'bg-gray-200 text-gray-600'
      }`}>
        {status === 'complete' ? '✓' : status === 'current' ? '→' : '○'}
      </div>
      <span className={`text-sm ${
        status === 'current' ? 'font-bold text-gray-900' : 'text-gray-700'
      }`}>
        {label}
      </span>
    </div>
  );
}