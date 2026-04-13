import { type UploadedDocument } from "./certificateFlow";

const MAX_FILE_SIZE_BYTES = 2 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ["pdf", "jpg", "jpeg", "png"];

export const formatUploadSize = (bytes: number): string => {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
};

export const validateUploadFile = (file: File): string | null => {
  const extension = file.name.split(".").pop()?.toLowerCase() || "";
  if (!ALLOWED_EXTENSIONS.includes(extension)) {
    return "Only PDF, JPG, JPEG, and PNG files are allowed.";
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return "File size must be 2MB or less.";
  }

  return null;
};

export const applyUploadedFile = (
  documents: UploadedDocument[],
  id: string,
  file: File,
): UploadedDocument[] =>
  documents.map((doc) =>
    doc.id === id
      ? {
          ...doc,
          status: "uploaded",
          fileName: file.name,
          size: formatUploadSize(file.size),
          uploadedAt: new Date().toISOString(),
        }
      : doc,
  );

export const clearUploadedFile = (
  documents: UploadedDocument[],
  id: string,
): UploadedDocument[] =>
  documents.map((doc) =>
    doc.id === id
      ? {
          ...doc,
          status: "pending",
          fileName: undefined,
          size: undefined,
          uploadedAt: undefined,
        }
      : doc,
  );

export const allRequiredDocsUploaded = (documents: UploadedDocument[]): boolean =>
  documents.filter((doc) => doc.required).every((doc) => doc.status === "uploaded");
