import {
  getLatestCertificateApplication,
  loadCertificateDraft,
  processCertificatePayment,
  submitCertificateApplication,
  updateCertificateDraft,
} from "./certificateFlow";

export interface PaymentLineItem {
  label: string;
  amount: number;
}

export interface PaymentSummaryData {
  lineItems: PaymentLineItem[];
  totalAmount: number;
}

export interface ServiceReceiptData {
  transactionId: string;
  referenceNumber: string;
  paymentDate: string;
  paymentTime: string;
  applicantName: string;
  serviceLabel: string;
  applicationFee: number;
  processingFee: number;
  gst: number;
  total: number;
  paymentMethod: string;
  paymentStatus: "Success" | "Failed";
  bankReference: string;
}

const fallbackSummaryLines: PaymentLineItem[] = [
  { label: "Application Processing", amount: 100 },
  { label: "Service Charge", amount: 50 },
  { label: "Gateway Charge", amount: 5 },
];

const formatDate = (value: Date): string =>
  value.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

const formatTime = (value: Date): string =>
  value.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

const fallbackReceiptData = (): ServiceReceiptData => {
  const now = new Date();

  return {
    transactionId: `TXN${Date.now().toString().slice(-8)}`,
    referenceNumber: "CERT-2026-04-456789",
    paymentDate: formatDate(now),
    paymentTime: formatTime(now),
    applicantName: "Applicant",
    serviceLabel: "Government Certificate Service",
    applicationFee: 100,
    processingFee: 50,
    gst: 5,
    total: 155,
    paymentMethod: "UPI",
    paymentStatus: "Success",
    bankReference: "BANK-REF-889901",
  };
};

export const loadPaymentSummaryData = (): PaymentSummaryData => {
  const draft = loadCertificateDraft();

  return {
    lineItems: fallbackSummaryLines,
    totalAmount: draft.payment.amount,
  };
};

export const preparePaymentAttempt = () => {
  const draft = loadCertificateDraft();
  updateCertificateDraft({
    payment: {
      ...draft.payment,
      status: "processing",
    },
  });
};

export const executePaymentAttempt = () => {
  const result = processCertificatePayment(loadCertificateDraft());

  if (!result.success) {
    return {
      success: false as const,
      message: "Payment failed due to a network issue. Please retry.",
    };
  }

  return {
    success: true as const,
    referenceNumber: submitCertificateApplication().referenceNumber,
  };
};

export const loadPaymentReceiptData = (): ServiceReceiptData | null => {
  const latest = getLatestCertificateApplication();
  if (!latest) return null;

  const now = new Date();
  const total = latest.paymentAmount || 155;

  return {
    transactionId: latest.draft.payment.transactionId || `TXN${Date.now().toString().slice(-8)}`,
    referenceNumber: latest.referenceNumber,
    paymentDate: latest.submittedDate || formatDate(now),
    paymentTime: formatTime(now),
    applicantName: latest.applicantName || "Applicant",
    serviceLabel: `${latest.certificateType} certificate`,
    applicationFee: 100,
    processingFee: 50,
    gst: Math.max(total - 150, 0),
    total,
    paymentMethod: "UPI",
    paymentStatus: latest.paymentStatus === "success" ? "Success" : "Failed",
    bankReference: `BANK-${latest.referenceNumber.slice(-6)}`,
  };
};

export const loadPaymentReceiptDataOrFallback = (): ServiceReceiptData =>
  loadPaymentReceiptData() || fallbackReceiptData();
