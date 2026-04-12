import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, Save } from "lucide-react";
import * as validation from "../services/validation";
import { loadCertificateDraft, updateCertificateDraft } from "../services/certificateFlow";

export default function CertificateFormAddress() {
  const navigate = useNavigate();
  const baseDraft = useMemo(() => loadCertificateDraft(), []);
  const [formData, setFormData] = useState(baseDraft.address);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedDraft, setSavedDraft] = useState(false);

  const setField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    const requiredFields: Array<[keyof typeof formData, string]> = [
      ["addressLine1", "Address Line 1"],
      ["city", "City"],
      ["district", "District"],
      ["state", "State"],
      ["residenceType", "Residence Type"],
      ["pincode", "PIN Code"],
    ];

    requiredFields.forEach(([key, label]) => {
      const result = validation.required(formData[key], label);
      if (!result.valid && result.error) nextErrors[key] = result.error;
    });

    if (formData.pincode) {
      const pin = validation.pincode(formData.pincode);
      if (!pin.valid && pin.error) nextErrors.pincode = pin.error;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const saveDraft = () => {
    updateCertificateDraft({ address: formData });
    setSavedDraft(true);
    setTimeout(() => setSavedDraft(false), 2500);
  };

  const continueFlow = () => {
    if (!validateForm()) return;
    updateCertificateDraft({ address: formData });
    navigate("/reference-service/certificate/form/additional");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Apply for Government Certificate</p>
                <h1 className="text-xl font-bold text-gray-900">Step 2 of 3: Address Details</h1>
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
          <Field label="Address Line 1" required error={errors.addressLine1}>
            <input
              value={formData.addressLine1}
              onChange={(e) => setField("addressLine1", e.target.value)}
              className="w-full border-2 border-gray-300 rounded px-3 py-2"
            />
          </Field>

          <Field label="Address Line 2">
            <input
              value={formData.addressLine2}
              onChange={(e) => setField("addressLine2", e.target.value)}
              className="w-full border-2 border-gray-300 rounded px-3 py-2"
            />
          </Field>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="City" required error={errors.city}>
              <input
                value={formData.city}
                onChange={(e) => setField("city", e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              />
            </Field>
            <Field label="District" required error={errors.district}>
              <input
                value={formData.district}
                onChange={(e) => setField("district", e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="State" required error={errors.state}>
              <input
                value={formData.state}
                onChange={(e) => setField("state", e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              />
            </Field>
            <Field label="PIN Code" required error={errors.pincode}>
              <input
                inputMode="numeric"
                value={formData.pincode}
                onChange={(e) => setField("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Residence Type" required error={errors.residenceType}>
              <select
                value={formData.residenceType}
                onChange={(e) => setField("residenceType", e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              >
                <option value="">Select</option>
                <option value="owned">Owned</option>
                <option value="rented">Rented</option>
                <option value="family">Family Owned</option>
              </select>
            </Field>
            <Field label="Years at Current Address">
              <input
                type="number"
                min={0}
                value={formData.yearsAtAddress}
                onChange={(e) => setField("yearsAtAddress", e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-3 py-2"
              />
            </Field>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <Link
            to="/reference-service/certificate/form/personal"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded font-bold text-sm text-gray-700 hover:bg-gray-50"
          >
            <ArrowLeft size={16} />
            Previous
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
