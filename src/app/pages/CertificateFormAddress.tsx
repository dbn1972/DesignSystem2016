import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { MapPin, Save, ArrowRight, ArrowLeft, AlertCircle, CheckCircle } from "lucide-react";

export default function CertificateFormAddress() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    residenceType: "",
    yearsAtAddress: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: undefined });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.addressLine1.trim()) newErrors.addressLine1 = "Address line 1 is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.district.trim()) newErrors.district = "District is required";
    if (!formData.state) newErrors.state = "Please select state";
    if (!formData.pincode) newErrors.pincode = "PIN code is required";
    else if (formData.pincode.length !== 6) newErrors.pincode = "Enter valid 6-digit PIN code";
    if (!formData.residenceType) newErrors.residenceType = "Please select residence type";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      navigate("/reference-service/certificate/form/review");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-orange-600 rounded flex items-center justify-center">
                <MapPin size={28} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Application Form</div>
                <h1 className="text-2xl font-bold text-gray-900">Address Details</h1>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50">
              <Save size={18} />
              Save Draft
            </button>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center gap-2">
            <StepIndicator number={1} label="Personal" status="complete" />
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <StepIndicator number={2} label="Address" status="current" />
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <StepIndicator number={3} label="Additional Info" status="pending" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Form - 8 columns */}
          <div className="col-span-8">
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              
              <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
                <h2 className="font-bold text-gray-900">Step 2: Current Residential Address</h2>
              </div>

              <div className="p-8 space-y-6">
                
                {/* Address Line 1 */}
                <FormField label="Address Line 1" required error={errors.addressLine1}>
                  <input
                    type="text"
                    value={formData.addressLine1}
                    onChange={(e) => handleChange("addressLine1", e.target.value)}
                    placeholder="House/Flat number, Building name"
                    className={`w-full px-4 py-3 border-2 rounded text-sm ${
                      errors.addressLine1 ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } focus:outline-none focus:border-[#000080]`}
                  />
                </FormField>

                {/* Address Line 2 */}
                <FormField label="Address Line 2">
                  <input
                    type="text"
                    value={formData.addressLine2}
                    onChange={(e) => handleChange("addressLine2", e.target.value)}
                    placeholder="Street name, Area"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
                  />
                </FormField>

                {/* Landmark */}
                <FormField label="Landmark">
                  <input
                    type="text"
                    value={formData.landmark}
                    onChange={(e) => handleChange("landmark", e.target.value)}
                    placeholder="Nearby landmark for easy identification"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
                  />
                </FormField>

                <div className="grid grid-cols-2 gap-6">
                  
                  {/* City */}
                  <FormField label="City/Town/Village" required error={errors.city}>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      placeholder="Enter city"
                      className={`w-full px-4 py-3 border-2 rounded text-sm ${
                        errors.city ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                    />
                  </FormField>

                  {/* District */}
                  <FormField label="District" required error={errors.district}>
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) => handleChange("district", e.target.value)}
                      placeholder="Enter district"
                      className={`w-full px-4 py-3 border-2 rounded text-sm ${
                        errors.district ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                    />
                  </FormField>

                </div>

                <div className="grid grid-cols-2 gap-6">
                  
                  {/* State */}
                  <FormField label="State" required error={errors.state}>
                    <select
                      value={formData.state}
                      onChange={(e) => handleChange("state", e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded text-sm ${
                        errors.state ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                    >
                      <option value="">Select state</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="delhi">Delhi</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="tamil-nadu">Tamil Nadu</option>
                      <option value="west-bengal">West Bengal</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="uttar-pradesh">Uttar Pradesh</option>
                    </select>
                  </FormField>

                  {/* PIN Code */}
                  <FormField label="PIN Code" required error={errors.pincode}>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => handleChange("pincode", e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="6-digit PIN code"
                      maxLength={6}
                      className={`w-full px-4 py-3 border-2 rounded text-sm ${
                        errors.pincode ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                    />
                  </FormField>

                </div>

                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Residence Type */}
                  <FormField label="Residence Type" required error={errors.residenceType}>
                    <select
                      value={formData.residenceType}
                      onChange={(e) => handleChange("residenceType", e.target.value)}
                      className={`w-full px-4 py-3 border-2 rounded text-sm ${
                        errors.residenceType ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } focus:outline-none focus:border-[#000080]`}
                    >
                      <option value="">Select type</option>
                      <option value="owned">Owned</option>
                      <option value="rented">Rented</option>
                      <option value="family">Family Owned</option>
                      <option value="other">Other</option>
                    </select>
                  </FormField>

                  {/* Years at Address */}
                  <FormField label="Years at Current Address">
                    <input
                      type="number"
                      value={formData.yearsAtAddress}
                      onChange={(e) => handleChange("yearsAtAddress", e.target.value)}
                      placeholder="Number of years"
                      min="0"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
                    />
                  </FormField>

                </div>

              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <Link
                to="/reference-service/certificate/form/personal"
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

          {/* Sidebar - 4 columns */}
          <aside className="col-span-4 space-y-6">
            
            {/* Progress Card */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Application Progress</h3>
              <div className="space-y-3">
                <ProgressItem label="Personal Information" status="complete" />
                <ProgressItem label="Address Details" status="current" />
                <ProgressItem label="Additional Information" status="pending" />
                <ProgressItem label="Document Upload" status="pending" />
                <ProgressItem label="Review & Submit" status="pending" />
              </div>
            </div>

            {/* Help */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Address Verification</h4>
              <p className="text-sm text-gray-700 mb-3">
                The address you enter will be verified against the address proof document you upload. 
                Ensure both match exactly.
              </p>
            </div>

          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Step 2 of 3: Address Details</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function StepIndicator({ number, label, status }: { number: number; label: string; status: 'complete' | 'current' | 'pending' }) {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded ${
      status === 'current' 
        ? 'bg-[#000080] text-white' 
        : status === 'complete' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-gray-100 text-gray-600'
    }`}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
        status === 'current' 
          ? 'bg-white text-[#000080]' 
          : status === 'complete' 
            ? 'bg-green-600 text-white' 
            : 'bg-gray-300 text-gray-600'
      }`}>
        {status === 'complete' ? '✓' : number}
      </div>
      <span className="text-sm font-bold">{label}</span>
    </div>
  );
}

function FormField({ 
  label, 
  required, 
  error, 
  children 
}: { 
  label: string; 
  required?: boolean; 
  error?: string; 
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
