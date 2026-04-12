import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle, Save, User } from "lucide-react";
import * as validation from "../services/validation";
import { loadCertificateDraft, updateCertificateDraft } from "../services/certificateFlow";

export default function CertificateFormPersonal() {
  const navigate = useNavigate();
  const baseDraft = useMemo(() => loadCertificateDraft(), []);
  const [formData, setFormData] = useState(baseDraft.personal);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedDraft, setSavedDraft] = useState(false);

  const setField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    const requiredFields: Array<[keyof typeof formData, string]> = [
      ["fullName", "Full Name"],
      ["dateOfBirth", "Date of Birth"],
      ["gender", "Gender"],
      ["fatherName", "Father's Name"],
      ["motherName", "Mother's Name"],
      ["mobileNumber", "Mobile Number"],
    ];

    requiredFields.forEach(([key, label]) => {
      const result = validation.required(formData[key], label);
      if (!result.valid && result.error) nextErrors[key] = result.error;
    });

    if (formData.mobileNumber) {
      const mobileResult = validation.mobileNumber(formData.mobileNumber);
      if (!mobileResult.valid && mobileResult.error) nextErrors.mobileNumber = mobileResult.error;
    }

    if (formData.email) {
      const emailResult = validation.email(formData.email);
      if (!emailResult.valid && emailResult.error) nextErrors.email = emailResult.error;
    }

    if (formData.aadhaarNumber) {
      const aadhaarResult = validation.aadhaarNumber(formData.aadhaarNumber);
      if (!aadhaarResult.valid && aadhaarResult.error) nextErrors.aadhaarNumber = aadhaarResult.error;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const saveDraft = () => {
    updateCertificateDraft({ personal: formData });
    setSavedDraft(true);
    setTimeout(() => setSavedDraft(false), 2500);
  };

  const continueFlow = () => {
    if (!validateForm()) return;
    updateCertificateDraft({ personal: formData });
    navigate("/reference-service/certificate/form/address");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Apply for Government Certificate</p>
                <h1 className="text-xl font-bold text-gray-900">Step 1 of 3: Personal Information</h1>
              </div>
            </div>
            <button
              onClick={saveDraft}
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded text-sm font-bold text-gray-700 hover:bg-gray-50"
            >
              <Save size={16} />
              Save Draft
            </button>
          </div>
        </div>
      </header>

      {savedDraft && (
        <div className="bg-green-100 border-b-2 border-green-300">
          <div className="max-w-[1200px] mx-auto px-6 py-2 text-sm text-green-800 flex items-center gap-2">
            <CheckCircle size={16} />
            Draft saved successfully.
          </div>
        </div>
      )}

      <main className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 space-y-5">
          <Field label="Full Name" required error={errors.fullName}>
            <input
              value={formData.fullName}
              onChange={(e) => setField("fullName", e.target.value)}
              className="w-full border-2 border-gray-300 rounded px-3 py-2"
            />
          </Field>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Date of Birth" required error={errors.dateOfBirth}>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setField("dateOfBirth", e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              />
            </Field>
            <Field label="Gender" required error={errors.gender}>
              <select
                value={formData.gender}
                onChange={(e) => setField("gender", e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              >
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Father's Name" required error={errors.fatherName}>
              <input
                value={formData.fatherName}
                onChange={(e) => setField("fatherName", e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              />
            </Field>
            <Field label="Mother's Name" required error={errors.motherName}>
              <input
                value={formData.motherName}
                onChange={(e) => setField("motherName", e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Mobile Number" required error={errors.mobileNumber}>
              <input
                inputMode="numeric"
                value={formData.mobileNumber}
                onChange={(e) => setField("mobileNumber", e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setField("email", e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              />
            </Field>
          </div>

          <Field label="Aadhaar Number" error={errors.aadhaarNumber}>
            <input
              inputMode="numeric"
              value={formData.aadhaarNumber}
              onChange={(e) => setField("aadhaarNumber", e.target.value.replace(/\D/g, "").slice(0, 12))}
              className="w-full border-2 border-gray-300 rounded px-3 py-2"
            />
          </Field>
        </div>

        <div className="flex items-center justify-between mt-6">
          <Link
            to="/reference-service/certificate/start"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded font-bold text-sm text-gray-700 hover:bg-gray-50"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
          <button
            onClick={continueFlow}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#000080] text-white rounded font-bold text-sm hover:bg-blue-900"
          >
            Save and Continue
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
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
