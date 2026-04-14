import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle, Download, MapPin, Save } from "lucide-react";

import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import { loadCertificateDraft, updateCertificateDraft } from "../../services/certificateFlow";
import { validateAddressInfo } from "../../services/formFlowService";

interface AddressFormServiceProps {
  category: string;
  title: string;
  serviceName: string;
  backPath: string;
  nextPath: string;
  codeDownloadPath?: string;
}

export function AddressFormService({
  category,
  title,
  serviceName,
  backPath,
  nextPath,
  codeDownloadPath,
}: AddressFormServiceProps) {
  const navigate = useNavigate();
  const baseDraft = useMemo(() => loadCertificateDraft(), []);
  const [formData, setFormData] = useState(baseDraft.address);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedDraft, setSavedDraft] = useState(false);

  const setField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const saveDraft = () => {
    updateCertificateDraft({ address: formData });
    setSavedDraft(true);
    window.setTimeout(() => setSavedDraft(false), 2500);
  };

  const continueFlow = () => {
    const nextErrors = validateAddressInfo(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    updateCertificateDraft({ address: formData });
    navigate(nextPath);
  };

  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader
        icon={MapPin}
        iconColor="bg-orange-600"
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
          <Field label="Address Line 1" required error={errors.addressLine1}>
            <input value={formData.addressLine1} onChange={(e) => setField("addressLine1", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2" />
          </Field>

          <Field label="Address Line 2">
            <input value={formData.addressLine2} onChange={(e) => setField("addressLine2", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2" />
          </Field>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="City" required error={errors.city}>
              <input value={formData.city} onChange={(e) => setField("city", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2" />
            </Field>
            <Field label="District" required error={errors.district}>
              <input value={formData.district} onChange={(e) => setField("district", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2" />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="State" required error={errors.state}>
              <input value={formData.state} onChange={(e) => setField("state", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2" />
            </Field>
            <Field label="PIN Code" required error={errors.pincode}>
              <input
                inputMode="numeric"
                value={formData.pincode}
                onChange={(e) => setField("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
                className="w-full border-2 border-border rounded px-3 py-2"
              />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Residence Type" required error={errors.residenceType}>
              <select value={formData.residenceType} onChange={(e) => setField("residenceType", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2">
                <option value="">Select</option>
                <option value="owned">Owned</option>
                <option value="rented">Rented</option>
                <option value="family">Family Owned</option>
              </select>
            </Field>
            <Field label="Years at Current Address">
              <input type="number" min={0} value={formData.yearsAtAddress} onChange={(e) => setField("yearsAtAddress", e.target.value)} className="w-full border-2 border-border rounded px-3 py-2" />
            </Field>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 gap-3 flex-wrap">
          <Link to={backPath} className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded font-bold text-sm text-muted-foreground hover:bg-muted">
            <ArrowLeft size={16} />
            Previous
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

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Address Details" />
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
