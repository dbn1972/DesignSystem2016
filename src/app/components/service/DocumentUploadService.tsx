import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle, Download, Upload, XCircle } from "lucide-react";

import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import {
  loadCertificateDraft,
  updateCertificateDraft,
  type UploadedDocument,
} from "../../services/certificateFlow";
import {
  allRequiredDocsUploaded,
  applyUploadedFile,
  clearUploadedFile,
  validateUploadFile,
} from "../../services/documentUploadService";

interface DocumentUploadServiceProps {
  category: string;
  title: string;
  serviceName: string;
  previousPath: string;
  nextPath: string;
  codeDownloadPath?: string;
}

export function DocumentUploadService({
  category,
  title,
  serviceName,
  previousPath,
  nextPath,
  codeDownloadPath,
}: DocumentUploadServiceProps) {
  const navigate = useNavigate();
  const draft = useMemo(() => loadCertificateDraft(), []);

  const [documents, setDocuments] = useState<UploadedDocument[]>(draft.documents);
  const [errorMessage, setErrorMessage] = useState("");

  const persist = (nextDocs: UploadedDocument[]) => {
    setDocuments(nextDocs);
    updateCertificateDraft({ documents: nextDocs });
  };

  const onFileSelect = (id: string, file: File | null) => {
    if (!file) return;

    const validationError = validateUploadFile(file);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    const nextDocs = applyUploadedFile(documents, id, file);
    persist(nextDocs);
    setErrorMessage("");
  };

  const removeFile = (id: string) => {
    const nextDocs = clearUploadedFile(documents, id);
    persist(nextDocs);
  };

  const continueFlow = () => {
    if (!allRequiredDocsUploaded(documents)) {
      setErrorMessage("Please upload all required documents before continuing.");
      return;
    }

    navigate(nextPath);
  };

  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader icon={Upload} iconColor="bg-blue-600" category={category} title={title} />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
          <p className="text-sm text-muted-foreground">Upload required documents (PDF/JPEG/PNG, max 2MB each)</p>

          {documents.map((doc) => (
            <div key={doc.id} className="border-2 border-border rounded-lg p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold text-foreground">{doc.name}</p>
                  <p className="text-sm text-muted-foreground">{doc.required ? "Required" : "Optional"}</p>
                  {doc.fileName ? (
                    <p className="text-sm text-muted-foreground mt-1">
                      {doc.fileName} ({doc.size})
                    </p>
                  ) : null}
                </div>

                {doc.status === "uploaded" ? (
                  <CheckCircle className="text-green-600" size={20} />
                ) : (
                  <XCircle className="text-gray-400" size={20} />
                )}
              </div>

              <div className="flex items-center gap-3 mt-3">
                <label className="inline-flex items-center gap-2 px-3 py-2 border-2 border-primary text-primary font-bold text-sm rounded cursor-pointer hover:bg-blue-50">
                  <Upload size={16} />
                  {doc.status === "uploaded" ? "Replace" : "Upload"}
                  <input
                    className="hidden"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(event) => onFileSelect(doc.id, event.target.files?.[0] ?? null)}
                  />
                </label>

                {doc.status === "uploaded" ? (
                  <button
                    type="button"
                    onClick={() => removeFile(doc.id)}
                    className="px-3 py-2 border-2 border-red-300 text-red-700 rounded text-sm font-bold hover:bg-red-50"
                  >
                    Remove
                  </button>
                ) : null}
              </div>
            </div>
          ))}

          {errorMessage ? <p className="text-sm text-red-700">{errorMessage}</p> : null}
        </div>

        <div className="flex items-center justify-between mt-6">
          <Link
            to={previousPath}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded font-bold text-sm text-muted-foreground hover:bg-muted"
          >
            <ArrowLeft size={16} />
            Previous
          </Link>

          <div className="flex items-center gap-3">
            {codeDownloadPath && (
              <Link
                to={codeDownloadPath}
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border rounded font-bold text-sm text-primary hover:bg-muted"
              >
                <Download size={15} />
                Download React code
              </Link>
            )}

            <button
              type="button"
              onClick={continueFlow}
              className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded font-bold text-sm hover:opacity-90"
            >
              Continue to Review
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Document Upload" />
    </div>
  );
}
