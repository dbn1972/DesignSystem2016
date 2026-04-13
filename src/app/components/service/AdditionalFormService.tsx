import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle, Download, FileText, Save } from "lucide-react";

import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import { loadCertificateDraft, type CertificateType, updateCertificateDraft } from "../../services/certificateFlow";
import { validateAdditionalInfo } from "../../services/formFlowService";

interface AdditionalFormServiceProps {
  category: string;
  title: string;
  serviceName: string;
  backPath: string;
  nextPath: string;
  codeDownloadPath?: string;
}

export function AdditionalFormService({
  category,
  title,
  serviceName,
  backPath,
  nextPath,
  codeDownloadPath,
}: AdditionalFormServiceProps) {
  const navigate = useNavigate();
  const baseDraft = useMemo(() => loadCertificateDraft(), []);
  const [formData, setFormData] = useState(baseDraft.additional);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedDraft, setSavedDraft] = useState(false);

  const setField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const saveDraft = () => {
    updateCertificateDraft({ additional: formData });
    setSavedDraft(true);
    window.setTimeout(() => setSavedDraft(false), 2500);
  };

  const continueFlow = () => {
    const nextErrors = validateAdditionalInfo(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    updateCertificateDraft({ additional: formData });
    navigate(nextPath);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader
        icon={FileText}
        iconColor="bg-indigo-600"
        category={category}
        title={title}
        rightContent={
          <button
            type="button"
            onClick={saveDraft}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded text-sm font-bold text-gray-700 hover:bg-gray-50"
          >
            <Save size={16} />
            Save Draft
          </button>
        }
      />

      {savedDraft && (
        <div className="bg-green-100 border-b-2 border-green-300">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-2 text-sm text-green-800 flex items-center gap-2">
            <CheckCircle size={16} />
            Draft saved successfully.
          </div>
        </div>
      )}

      <main className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 space-y-5">
          <Field label="Certificate Type" required>
            <select value={formData.certificateType} onChange={(e) => setField("certificateType", e.target.value as CertificateType)} className="w-full border-2 border-gray-300 rounded px-3 py-2">
              <option value="income">Income Certificate</option>
              <option value="domicile">Domicile Certificate</option>
              <option value="caste">Caste Certificate</option>
              <option value="birth">Birth Certificate</option>
            </select>
          </Field>

          <Field label="Purpose of Certificate" required error={errors.purpose}>
            <input value={formData.purpose} onChange={(e) => setField("purpose", e.target.value)} placeholder="e.g., Scholarship application" className="w-full border-2 border-gray-300 rounded px-3 py-2" />
          </Field>

          {formData.certificateType === "income" && (
            <Field label="Annual Family Income" required error={errors.annualIncome}>
              <input value={formData.annualIncome} onChange={(e) => setField("annualIncome", e.target.value)} placeholder="Amount in INR" className="w-full border-2 border-gray-300 rounded px-3 py-2" />
            </Field>
          )}

          <Field label="Occupation" required error={errors.occupation}>
            <input value={formData.occupation} onChange={(e) => setField("occupation", e.target.value)} className="w-full border-2 border-gray-300 rounded px-3 py-2" />
          </Field>

          <Field label="Employer / Business Name">
            <input value={formData.employerName} onChange={(e) => setField("employerName", e.target.value)} className="w-full border-2 border-gray-300 rounded px-3 py-2" />
          </Field>

          <Field label="Additional Information">
            <textarea rows={4} value={formData.additionalInfo} onChange={(e) => setField("additionalInfo", e.target.value)} className="w-full border-2 border-gray-300 rounded px-3 py-2" />
          </Field>
        </div>

        <div className="flex items-center justify-between mt-6 gap-3 flex-wrap">
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
              onClick={continueFlow}
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#000080] text-white rounded font-bold text-sm hover:bg-blue-900"
            >
              Save and Continue
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Additional Information" />
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-900 mb-1">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
