import { SUCCESS_MESSAGES } from "../content/content-library";

export type CertificateType = "income" | "domicile" | "caste" | "birth";

export type ApplicationStatus =
  | "draft"
  | "submitted"
  | "under-review"
  | "correction-required"
  | "approved"
  | "rejected"
  | "issued";

export interface PersonalInfo {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  fatherName: string;
  motherName: string;
  maritalStatus: string;
  mobileNumber: string;
  email: string;
  aadhaarNumber: string;
}

export interface AddressInfo {
  addressLine1: string;
  addressLine2: string;
  landmark: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  residenceType: string;
  yearsAtAddress: string;
}

export interface AdditionalInfo {
  certificateType: CertificateType;
  purpose: string;
  annualIncome: string;
  occupation: string;
  employerName: string;
  additionalInfo: string;
}

export interface UploadedDocument {
  id: string;
  name: string;
  required: boolean;
  status: "pending" | "uploaded";
  fileName?: string;
  size?: string;
  uploadedAt?: string;
}

export interface PaymentState {
  amount: number;
  status: "pending" | "processing" | "failed" | "success";
  attempts: number;
  transactionId?: string;
}

export interface CertificateDraft {
  personal: PersonalInfo;
  address: AddressInfo;
  additional: AdditionalInfo;
  documents: UploadedDocument[];
  declarationAccepted: boolean;
  payment: PaymentState;
  updatedAt: string;
}

export interface TimelineEvent {
  label: string;
  date: string;
  completed: boolean;
  current?: boolean;
}

export interface CertificateApplication {
  referenceNumber: string;
  certificateNumber?: string;
  applicantName: string;
  certificateType: string;
  submittedDate: string;
  status: ApplicationStatus;
  statusLabel: string;
  canDownload: boolean;
  paymentAmount: number;
  paymentStatus: "pending" | "failed" | "success";
  timeline: TimelineEvent[];
  draft: CertificateDraft;
}

export interface ServiceNotification {
  id: string;
  type: "success" | "warning" | "info";
  title: string;
  message: string;
  date: string;
  read: boolean;
  link: string | null;
}

const DRAFT_STORAGE_KEY = "ux4g.certificate.draft.v1";
const APPS_STORAGE_KEY = "ux4g.certificate.apps.v1";
const NOTIFICATIONS_STORAGE_KEY = "ux4g.certificate.notifications.v1";

const nowIso = () => new Date().toISOString();

const formatDisplayDate = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", {
    dateStyle: "long",
    timeStyle: "short",
  });

const formatDateOnly = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

const generateReferenceNumber = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const random = String(Math.floor(Math.random() * 900000) + 100000);
  return `CERT-${year}-${month}-${random}`;
};

const generateTransactionId = () => {
  const stamp = Date.now().toString().slice(-8);
  const random = String(Math.floor(Math.random() * 900) + 100);
  return `TXN${stamp}${random}`;
};

const generateCertificateNumber = () => {
  const year = new Date().getFullYear();
  const random = String(Math.floor(Math.random() * 900000) + 100000);
  return `INC/${year}/IN/${random}`;
};

const getFromStorage = <T>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const setInStorage = <T>(key: string, value: T) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

const defaultDocuments = (): UploadedDocument[] => [
  { id: "identity", name: "Identity Proof (Aadhaar / Voter ID)", required: true, status: "pending" },
  { id: "address", name: "Address Proof", required: true, status: "pending" },
  { id: "photo", name: "Photograph (Passport Size)", required: true, status: "pending" },
  { id: "income", name: "Income Proof (Salary Slip / ITR)", required: true, status: "pending" },
];

export const getEmptyCertificateDraft = (): CertificateDraft => ({
  personal: {
    fullName: "",
    dateOfBirth: "",
    gender: "",
    fatherName: "",
    motherName: "",
    maritalStatus: "",
    mobileNumber: "",
    email: "",
    aadhaarNumber: "",
  },
  address: {
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    residenceType: "",
    yearsAtAddress: "",
  },
  additional: {
    certificateType: "income",
    purpose: "",
    annualIncome: "",
    occupation: "",
    employerName: "",
    additionalInfo: "",
  },
  documents: defaultDocuments(),
  declarationAccepted: false,
  payment: {
    amount: 155,
    status: "pending",
    attempts: 0,
  },
  updatedAt: nowIso(),
});

export const loadCertificateDraft = (): CertificateDraft => {
  const saved = getFromStorage<CertificateDraft | null>(DRAFT_STORAGE_KEY, null);
  if (!saved) return getEmptyCertificateDraft();

  return {
    ...getEmptyCertificateDraft(),
    ...saved,
    personal: { ...getEmptyCertificateDraft().personal, ...saved.personal },
    address: { ...getEmptyCertificateDraft().address, ...saved.address },
    additional: { ...getEmptyCertificateDraft().additional, ...saved.additional },
    documents: Array.isArray(saved.documents) && saved.documents.length > 0 ? saved.documents : defaultDocuments(),
    payment: { ...getEmptyCertificateDraft().payment, ...saved.payment },
  };
};

export const saveCertificateDraft = (draft: CertificateDraft) => {
  setInStorage(DRAFT_STORAGE_KEY, { ...draft, updatedAt: nowIso() });
};

export const updateCertificateDraft = (partial: Partial<CertificateDraft>) => {
  const nextDraft = {
    ...loadCertificateDraft(),
    ...partial,
    updatedAt: nowIso(),
  };
  saveCertificateDraft(nextDraft);
  return nextDraft;
};

export const clearCertificateDraft = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(DRAFT_STORAGE_KEY);
};

export const getCertificateApplications = (): CertificateApplication[] =>
  getFromStorage<CertificateApplication[]>(APPS_STORAGE_KEY, []);

export const saveCertificateApplications = (apps: CertificateApplication[]) => {
  setInStorage(APPS_STORAGE_KEY, apps);
};

export const getCertificateNotifications = (): ServiceNotification[] =>
  getFromStorage<ServiceNotification[]>(NOTIFICATIONS_STORAGE_KEY, []);

export const saveCertificateNotifications = (items: ServiceNotification[]) => {
  setInStorage(NOTIFICATIONS_STORAGE_KEY, items);
};

export const markNotificationAsRead = (id: string) => {
  const updated = getCertificateNotifications().map((n) =>
    n.id === id ? { ...n, read: true } : n,
  );
  saveCertificateNotifications(updated);
};

export const markAllNotificationsRead = () => {
  const updated = getCertificateNotifications().map((n) => ({ ...n, read: true }));
  saveCertificateNotifications(updated);
};

export const processCertificatePayment = (draft: CertificateDraft) => {
  const nextAttempt = draft.payment.attempts + 1;
  const paymentSucceeded = nextAttempt > 1;

  const payment: PaymentState = paymentSucceeded
    ? {
        ...draft.payment,
        status: "success",
        attempts: nextAttempt,
        transactionId: generateTransactionId(),
      }
    : {
        ...draft.payment,
        status: "failed",
        attempts: nextAttempt,
      };

  const updatedDraft = { ...draft, payment, updatedAt: nowIso() };
  saveCertificateDraft(updatedDraft);

  return {
    success: paymentSucceeded,
    draft: updatedDraft,
  };
};

const getStatusLabel = (status: ApplicationStatus) => {
  switch (status) {
    case "submitted":
      return "Submitted";
    case "under-review":
      return "Under Review";
    case "correction-required":
      return "Correction Required";
    case "approved":
      return "Approved";
    case "rejected":
      return "Rejected";
    case "issued":
      return "Certificate Issued";
    default:
      return "Draft";
  }
};

const buildTimeline = (submittedIso: string, status: ApplicationStatus): TimelineEvent[] => {
  const checkpoints: Array<{ id: ApplicationStatus | "payment" | "assigned"; label: string }> = [
    { id: "submitted", label: "Application Submitted" },
    { id: "payment", label: "Payment Confirmed" },
    { id: "assigned", label: "Assigned to Officer" },
    { id: "under-review", label: "Under Review" },
    { id: "issued", label: "Approved & Certificate Issued" },
  ];

  const activeOrder: Record<ApplicationStatus, number> = {
    draft: 0,
    submitted: 1,
    "under-review": 4,
    "correction-required": 4,
    approved: 5,
    rejected: 4,
    issued: 5,
  };

  const currentIndex = activeOrder[status];

  return checkpoints.map((cp, idx) => {
    const completed = idx + 1 <= currentIndex;
    const current = idx + 1 === currentIndex && status !== "issued";
    return {
      label:
        status === "rejected" && cp.id === "issued"
          ? "Application Rejected"
          : cp.label,
      date: completed ? formatDisplayDate(submittedIso) : "Pending",
      completed,
      current,
    };
  });
};

export const submitCertificateApplication = (): CertificateApplication => {
  const draft = loadCertificateDraft();
  const submittedIso = nowIso();
  const referenceNumber = generateReferenceNumber();

  const app: CertificateApplication = {
    referenceNumber,
    applicantName: draft.personal.fullName || "Applicant",
    certificateType: draft.additional.certificateType,
    submittedDate: formatDateOnly(submittedIso),
    status: "submitted",
    statusLabel: getStatusLabel("submitted"),
    canDownload: false,
    paymentAmount: draft.payment.amount,
    paymentStatus: draft.payment.status,
    timeline: buildTimeline(submittedIso, "submitted"),
    draft,
  };

  const existing = getCertificateApplications();
  const updatedApps = [app, ...existing.filter((item) => item.referenceNumber !== referenceNumber)];
  saveCertificateApplications(updatedApps);

  const notifications = getCertificateNotifications();
  const newNotifications: ServiceNotification[] = [
    {
      id: `${referenceNumber}-submitted`,
      type: "success",
      title: "Application Submitted",
      message: `${SUCCESS_MESSAGES.applicationSubmitted} Reference number: ${referenceNumber}`,
      date: formatDisplayDate(submittedIso),
      read: false,
      link: "/reference-service/certificate/submission-success",
    },
    {
      id: `${referenceNumber}-payment`,
      type: "success",
      title: "Payment Confirmed",
      message: `Payment of Rs ${draft.payment.amount} has been received successfully for ${referenceNumber}.`,
      date: formatDisplayDate(submittedIso),
      read: false,
      link: "/reference-service/certificate/payment-receipt",
    },
  ];
  saveCertificateNotifications([...newNotifications, ...notifications]);

  clearCertificateDraft();
  return app;
};

export const getLatestCertificateApplication = (): CertificateApplication | null => {
  const apps = getCertificateApplications();
  return apps.length ? apps[0] : null;
};

export const setApplicationStatus = (referenceNumber: string, status: ApplicationStatus) => {
  const updatedApps = getCertificateApplications().map((app) => {
    if (app.referenceNumber !== referenceNumber) return app;

    const submittedIso = new Date().toISOString();
    const certificateNumber = status === "issued" ? generateCertificateNumber() : app.certificateNumber;

    return {
      ...app,
      status,
      statusLabel: getStatusLabel(status),
      canDownload: status === "issued" || status === "approved",
      certificateNumber,
      timeline: buildTimeline(submittedIso, status),
    };
  });

  saveCertificateApplications(updatedApps);

  const changed = updatedApps.find((a) => a.referenceNumber === referenceNumber);
  if (!changed) return;

  const notifications = getCertificateNotifications();
  const statusNote: ServiceNotification = {
    id: `${referenceNumber}-${status}-${Date.now()}`,
    type: status === "rejected" ? "warning" : "info",
    title: `Application ${getStatusLabel(status)}`,
    message: `Application ${referenceNumber} is now ${getStatusLabel(status).toLowerCase()}.`,
    date: formatDisplayDate(nowIso()),
    read: false,
    link:
      status === "issued"
        ? "/reference-service/certificate/issued"
        : "/reference-service/certificate/status-tracker",
  };
  saveCertificateNotifications([statusNote, ...notifications]);
};

export const getFallbackApplications = (): CertificateApplication[] => [
  {
    referenceNumber: "CERT-2026-04-876543",
    applicantName: "Priya Sharma",
    certificateType: "income",
    submittedDate: "10 April 2026",
    status: "under-review",
    statusLabel: "Under Review",
    canDownload: false,
    paymentAmount: 155,
    paymentStatus: "success",
    timeline: buildTimeline(nowIso(), "under-review"),
    draft: getEmptyCertificateDraft(),
  },
];
