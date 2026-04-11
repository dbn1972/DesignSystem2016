import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FileText, Save, ArrowRight, ArrowLeft, AlertCircle } from "lucide-react";

export default function CertificateFormAdditional() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    certificateType: "income",
    purpose: "",
    annualIncome: "",
    occupation: "",
    employerName: "",
    additionalInfo: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: undefined });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.purpose.trim()) newErrors.purpose = "Purpose is required";
    if (!formData.annualIncome) newErrors.annualIncome = "Annual income is required";
    if (!formData.occupation.trim()) newErrors.occupation = "Occupation is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      navigate("/reference-service/certificate/document-upload");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-indigo-600 rounded flex items-center justify-center">
                <FileText size={28} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Application Form</div>
                <h1 className="text-2xl font-bold text-gray-900">Additional Information</h1>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50">
              <Save size={18} />
              Save Draft
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <StepIndicator number={1} label="Personal" status="complete" />
            <div className="w-8 h-0.5 bg-green-600"></div>
            <StepIndicator number={2} label="Address" status="complete" />
            <div className="w-8 h-0.5 bg-green-600"></div>
            <StepIndicator number={3} label="Additional Info" status="current" />
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          <div className="col-span-8">
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              
              <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
                <h2 className="font-bold text-gray-900">Step 3: Certificate-Specific Information</h2>
              </div>

              <div className="p-8 space-y-6">
                
                {/* Purpose */}
                <FormField label="Purpose of Certificate" required error={errors.purpose}>
                  <input
                    type="text"
                    value={formData.purpose}
                    onChange={(e) => handleChange("purpose", e.target.value)}
                    placeholder="e.g., Educational scholarship application"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.purpose ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                  />
                </FormField>

                {/* Annual Income */}
                <FormField label="Annual Family Income" required error={errors.annualIncome}>
                  <input
                    type="text"
                    value={formData.annualIncome}
                    onChange={(e) => handleChange("annualIncome", e.target.value)}
                    placeholder="Enter amount in ₹"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.annualIncome ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                  />
                </FormField>

                {/* Occupation */}
                <FormField label="Occupation" required error={errors.occupation}>
                  <input
                    type="text"
                    value={formData.occupation}
                    onChange={(e) => handleChange("occupation", e.target.value)}
                    placeholder="Your current occupation"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.occupation ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                  />
                </FormField>

                {/* Employer Name */}
                <FormField label="Employer/Business Name">
                  <input
                    type="text"
                    value={formData.employerName}
                    onChange={(e) => handleChange("employerName", e.target.value)}
                    placeholder="Name of employer or business"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
                  />
                </FormField>

                {/* Additional Info */}
                <FormField label="Additional Information">
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleChange("additionalInfo", e.target.value)}
                    placeholder="Any other relevant information"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
                  />
                </FormField>

              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <Link
                to="/reference-service/certificate/form/address"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50"
              >
                <ArrowLeft size={18} />
                Previous Step
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

          <aside className="col-span-4 space-y-6">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Application Progress</h3>
              <div className="space-y-3">
                <ProgressItem label="Personal Information" status="complete" />
                <ProgressItem label="Address Details" status="complete" />
                <ProgressItem label="Additional Information" status="current" />
                <ProgressItem label="Document Upload" status="pending" />
                <ProgressItem label="Review & Submit" status="pending" />
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Step 3 of 3: Additional Information</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StepIndicator({ number, label, status }: any) {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded ${
      status === 'current' ? 'bg-[#000080] text-white' : status === 'complete' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
    }`}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
        status === 'current' ? 'bg-white text-[#000080]' : status === 'complete' ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
      }`}>
        {status === 'complete' ? '✓' : number}
      </div>
      <span className="text-sm font-bold">{label}</span>
    </div>
  );
}

function FormField({ label, required, error, children }: any) {
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
    </div>
  );
}

function ProgressItem({ label, status }: any) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
        status === 'complete' ? 'bg-green-600 text-white' : status === 'current' ? 'bg-[#000080] text-white' : 'bg-gray-200 text-gray-600'
      }`}>
        {status === 'complete' ? '✓' : status === 'current' ? '→' : '○'}
      </div>
      <span className={`text-sm ${status === 'current' ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
        {label}
      </span>
    </div>
  );
}
