import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle, Download, Save, User } from "lucide-react";

import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import { loadCertificateDraft, updateCertificateDraft } from "../../services/certificateFlow";
import { validatePersonalInfo } from "../../services/formFlowService";

interface PersonalFormServiceProps {
  category: string;
  title: string;
  serviceName: string;
  backPath: string;
  nextPath: string;
  codeDownloadPath?: string;
}

export function PersonalFormService({
  category,
  title,
  serviceName,
  backPath,
  nextPath,
  codeDownloadPath,
}: PersonalFormServiceProps) {
  const navigate = useNavigate();
  const baseDraft = useMemo(() => loadCertificateDraft(), []);
  const [formData, setFormData] = useState(baseDraft.personal);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedDraft, setSavedDraft] = useState(false);

  const setField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const saveDraft = () => {
    updateCertificateDraft({ personal: formData });
    setSavedDraft(true);
    window.setTimeout(() => setSavedDraft(false), 2500);
  };

  const continueFlow = () => {
    const nextErrors = validatePersonalInfo(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    updateCertificateDraft({ personal: formData });
    navigate(nextPath);
  };

  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader
        icon={User}
        iconColor="bg-purple-600"
        category={category}
        title={title}
        rightContent={
          <button
            type="button"
            onClick={saveDraft}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded text-sm font-bold text-muted-foreground hover:bg-muted"
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
        <div className="bg-card border-2 border-border rounded-lg p-6 space-y-5">
          <Field label="Full Name" required error={errors.fullName}>
            <input value={formData.fullName} onChange={(e) => setField("fullName", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2" />
          </Field>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Date of Birth" required error={errors.dateOfBirth}>
              <input type="date" value={formData.dateOfBirth} onChange={(e) => setField("dateOfBirth", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2" />
            </Field>
            <Field label="Gender" required error={errors.gender}>
              <select value={formData.gender} onChange={(e) => setField("gender", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2">
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Father's Name" required error={errors.fatherName}>
              <input value={formData.fatherName} onChange={(e) => setField("fatherName", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2" />
            </Field>
            <Field label="Mother's Name" required error={errors.motherName}>
              <input value={formData.motherName} onChange={(e) => setField("motherName", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2" />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Mobile Number" required error={errors.mobileNumber}>
              <input
                inputMode="numeric"
                value={formData.mobileNumber}
                onChange={(e) => setField("mobileNumber", e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="w-full border-2 border-border rounded px-3 py-2"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input type="email" value={formData.email} onChange={(e) => setField("email", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2" />
            </Field>
          </div>

          <Field label="Aadhaar Number" error={errors.aadhaarNumber}>
            <input
              inputMode="numeric"
              value={formData.aadhaarNumber}
              onChange={(e) => setField("aadhaarNumber", e.target.value.replace(/\D/g, "").slice(0, 12))}
              className="w-full border-2 border-border rounded px-3 py-2"
            />
          </Field>
        </div>

        <div className="flex items-center justify-between mt-6 gap-3 flex-wrap">
          <Link to={backPath} className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded font-bold text-sm text-muted-foreground hover:bg-muted">
            <ArrowLeft size={16} />
            Back
          </Link>

          <div className="flex items-center gap-3">
            {codeDownloadPath && (
              <Link to={codeDownloadPath} className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded font-bold text-sm text-primary hover:bg-muted">
                <Download size={15} />
                Download React code
              </Link>
            )}

            <button
              type="button"
              onClick={continueFlow}
              className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded font-bold text-sm hover:opacity-90"
            >
              Save and Continue
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Personal Information" />
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
      <label className="block text-sm font-bold text-foreground mb-1">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
