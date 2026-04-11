import { Link, useNavigate } from "react-router";
import { FileCheck, ArrowRight, ArrowLeft, Edit2 } from "lucide-react";

export default function CertificateFormReview() {
  const navigate = useNavigate();

  // Mock data - in real app this would come from form state
  const applicationData = {
    personal: {
      fullName: "Priya Sharma",
      dateOfBirth: "15/03/1995",
      gender: "Female",
      fatherName: "Rajesh Sharma",
      motherName: "Sunita Sharma",
      maritalStatus: "Single",
      mobileNumber: "9876543210",
      email: "priya.sharma@example.com",
      aadhaarNumber: "1234 5678 9012"
    },
    address: {
      addressLine1: "Flat 301, Sunrise Apartments",
      addressLine2: "MG Road, Andheri East",
      landmark: "Near Metro Station",
      city: "Mumbai",
      district: "Mumbai Suburban",
      state: "Maharashtra",
      pincode: "400069",
      residenceType: "Rented",
      yearsAtAddress: "3"
    },
    additional: {
      certificateType: "Income Certificate",
      purpose: "Educational scholarship application",
      annualIncome: "₹4,50,000",
      occupation: "Software Engineer"
    }
  };

  const handleContinue = () => {
    navigate("/reference-service/certificate/document-upload");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-teal-600 rounded flex items-center justify-center">
                <FileCheck size={28} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Application Form</div>
                <h1 className="text-2xl font-bold text-gray-900">Review Form Details</h1>
              </div>
            </div>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center gap-2">
            <StepIndicator number={1} label="Personal" status="complete" />
            <div className="w-8 h-0.5 bg-green-600"></div>
            <StepIndicator number={2} label="Address" status="complete" />
            <div className="w-8 h-0.5 bg-green-600"></div>
            <StepIndicator number={3} label="Review" status="current" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Review Content - 8 columns */}
          <div className="col-span-8 space-y-6">
            
            {/* Personal Information */}
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4 flex items-center justify-between">
                <h2 className="font-bold text-gray-900">Personal Information</h2>
                <Link
                  to="/reference-service/certificate/form/personal"
                  className="flex items-center gap-2 text-sm text-[#000080] font-bold hover:underline"
                >
                  <Edit2 size={14} />
                  Edit
                </Link>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <ReviewItem label="Full Name" value={applicationData.personal.fullName} />
                  <ReviewItem label="Date of Birth" value={applicationData.personal.dateOfBirth} />
                  <ReviewItem label="Gender" value={applicationData.personal.gender} />
                  <ReviewItem label="Father's Name" value={applicationData.personal.fatherName} />
                  <ReviewItem label="Mother's Name" value={applicationData.personal.motherName} />
                  <ReviewItem label="Marital Status" value={applicationData.personal.maritalStatus} />
                  <ReviewItem label="Mobile Number" value={applicationData.personal.mobileNumber} />
                  <ReviewItem label="Email Address" value={applicationData.personal.email} />
                  <ReviewItem label="Aadhaar Number" value={applicationData.personal.aadhaarNumber} />
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4 flex items-center justify-between">
                <h2 className="font-bold text-gray-900">Address Details</h2>
                <Link
                  to="/reference-service/certificate/form/address"
                  className="flex items-center gap-2 text-sm text-[#000080] font-bold hover:underline"
                >
                  <Edit2 size={14} />
                  Edit
                </Link>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="text-gray-900">
                    <div className="font-bold">{applicationData.address.addressLine1}</div>
                    <div>{applicationData.address.addressLine2}</div>
                    <div>{applicationData.address.landmark}</div>
                    <div>
                      {applicationData.address.city}, {applicationData.address.district}
                    </div>
                    <div>
                      {applicationData.address.state} - {applicationData.address.pincode}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t-2 border-gray-300">
                  <ReviewItem label="Residence Type" value={applicationData.address.residenceType} />
                  <ReviewItem label="Years at Address" value={`${applicationData.address.yearsAtAddress} years`} />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
                <h2 className="font-bold text-gray-900">Certificate Details</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <ReviewItem label="Certificate Type" value={applicationData.additional.certificateType} />
                  <ReviewItem label="Purpose" value={applicationData.additional.purpose} />
                  <ReviewItem label="Annual Income" value={applicationData.additional.annualIncome} />
                  <ReviewItem label="Occupation" value={applicationData.additional.occupation} />
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
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
                Confirm and Continue
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <aside className="col-span-4 space-y-6">
            
            {/* Progress Card */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Next Steps</h3>
              <div className="space-y-3">
                <NextStepItem label="Upload Documents" />
                <NextStepItem label="Make Declaration" />
                <NextStepItem label="Pay Fee (if applicable)" />
                <NextStepItem label="Submit Application" />
              </div>
            </div>

            {/* Help */}
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Review Carefully</h4>
              <p className="text-sm text-gray-700">
                Please verify all information is correct. You can edit any section by clicking the "Edit" button.
                Once submitted, changes will require a correction request.
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
            <div>Step 3 of 3: Review Details</div>
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

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-gray-600 mb-1">{label}</div>
      <div className="text-sm font-bold text-gray-900">{value}</div>
    </div>
  );
}

function NextStepItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-700">
      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
        ○
      </div>
      <span>{label}</span>
    </div>
  );
}
