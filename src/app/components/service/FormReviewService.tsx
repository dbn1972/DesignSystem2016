import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Download, Edit2, FileCheck } from "lucide-react";

import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import { loadApplicationReviewData } from "../../services/formFlowService";

interface FormReviewServiceProps {
  category: string;
  title: string;
  serviceName: string;
  editPersonalPath: string;
  editAddressPath: string;
  editAdditionalPath: string;
  backPath: string;
  nextPath: string;
  codeDownloadPath?: string;
}

export function FormReviewService({
  category,
  title,
  serviceName,
  editPersonalPath,
  editAddressPath,
  editAdditionalPath,
  backPath,
  nextPath,
  codeDownloadPath,
}: FormReviewServiceProps) {
  const navigate = useNavigate();
  const data = loadApplicationReviewData();

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader icon={FileCheck} iconColor="bg-teal-600" category={category} title={title} />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 space-y-5">
        <Section title="Personal Information" editPath={editPersonalPath}>
          <ReviewItem label="Full Name" value={data.personal.fullName} />
          <ReviewItem label="Date of Birth" value={data.personal.dateOfBirth} />
          <ReviewItem label="Gender" value={data.personal.gender} />
          <ReviewItem label="Father's Name" value={data.personal.fatherName} />
          <ReviewItem label="Mother's Name" value={data.personal.motherName} />
          <ReviewItem label="Mobile Number" value={data.personal.mobileNumber} />
          <ReviewItem label="Email Address" value={data.personal.email} />
          <ReviewItem label="Aadhaar Number" value={data.personal.aadhaarNumber} />
        </Section>

        <Section title="Address Details" editPath={editAddressPath}>
          <ReviewItem label="Address Line 1" value={data.address.addressLine1} />
          <ReviewItem label="Address Line 2" value={data.address.addressLine2} />
          <ReviewItem label="City" value={data.address.city} />
          <ReviewItem label="District" value={data.address.district} />
          <ReviewItem label="State" value={data.address.state} />
          <ReviewItem label="PIN Code" value={data.address.pincode} />
          <ReviewItem label="Residence Type" value={data.address.residenceType} />
          <ReviewItem label="Years at Address" value={data.address.yearsAtAddress} />
        </Section>

        <Section title="Certificate Details" editPath={editAdditionalPath}>
          <ReviewItem label="Certificate Type" value={data.additional.certificateType} />
          <ReviewItem label="Purpose" value={data.additional.purpose} />
          <ReviewItem label="Annual Income" value={data.additional.annualIncome} />
          <ReviewItem label="Occupation" value={data.additional.occupation} />
          <ReviewItem label="Employer" value={data.additional.employerName} />
          <ReviewItem label="Additional Info" value={data.additional.additionalInfo} />
        </Section>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Link to={backPath} className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded font-bold text-sm text-gray-700 hover:bg-gray-50">
            <ArrowLeft size={16} />
            Previous
          </Link>

          <div className="flex items-center gap-3">
            {codeDownloadPath && (
              <Link to={codeDownloadPath} className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded font-bold text-sm text-[#000080] hover:bg-gray-50">
                <Download size={15} />
                Download React code
              </Link>
            )}

            <button
              type="button"
              onClick={() => navigate(nextPath)}
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#000080] text-white rounded font-bold text-sm hover:bg-blue-900"
            >
              Confirm and Continue
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Review Form Details" />
    </div>
  );
}

function Section({
  title,
  editPath,
  children,
}: {
  title: string;
  editPath: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="px-5 py-4 border-b-2 border-gray-200 flex items-center justify-between">
        <h2 className="font-bold text-gray-900">{title}</h2>
        <Link to={editPath} className="inline-flex items-center gap-1 text-sm text-[#000080] font-bold hover:underline">
          <Edit2 size={14} />
          Edit
        </Link>
      </div>
      <div className="p-5 grid md:grid-cols-2 gap-3">{children}</div>
    </section>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-600">{label}</p>
      <p className="text-sm font-bold text-gray-900">{value || "-"}</p>
    </div>
  );
}
