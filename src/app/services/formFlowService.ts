import * as validation from "./validation";
import {
  loadCertificateDraft,
  type AdditionalInfo,
  type AddressInfo,
  type CertificateType,
  type PersonalInfo,
} from "./certificateFlow";

const certificateTypeLabelMap: Record<CertificateType, string> = {
  income: "Income Certificate",
  domicile: "Domicile Certificate",
  caste: "Caste Certificate",
  birth: "Birth Certificate",
};

export const getCertificateTypeLabel = (type: CertificateType): string =>
  certificateTypeLabelMap[type] || "Certificate";

export const formatAadhaarForDisplay = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 12);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
};

export const validatePersonalInfo = (formData: PersonalInfo): Record<string, string> => {
  const nextErrors: Record<string, string> = {};

  const requiredFields: Array<[keyof PersonalInfo, string]> = [
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

  return nextErrors;
};

export const validateAddressInfo = (formData: AddressInfo): Record<string, string> => {
  const nextErrors: Record<string, string> = {};

  const requiredFields: Array<[keyof AddressInfo, string]> = [
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
    const pinResult = validation.pincode(formData.pincode);
    if (!pinResult.valid && pinResult.error) nextErrors.pincode = pinResult.error;
  }

  return nextErrors;
};

export const validateAdditionalInfo = (formData: AdditionalInfo): Record<string, string> => {
  const nextErrors: Record<string, string> = {};

  const purpose = validation.required(formData.purpose, "Purpose of Certificate");
  if (!purpose.valid && purpose.error) nextErrors.purpose = purpose.error;

  const occupation = validation.required(formData.occupation, "Occupation");
  if (!occupation.valid && occupation.error) nextErrors.occupation = occupation.error;

  if (formData.certificateType === "income") {
    const annual = validation.required(formData.annualIncome, "Annual Family Income");
    if (!annual.valid && annual.error) nextErrors.annualIncome = annual.error;
  }

  return nextErrors;
};

export const loadApplicationReviewData = () => {
  const draft = loadCertificateDraft();

  return {
    personal: {
      ...draft.personal,
      aadhaarNumber: formatAadhaarForDisplay(draft.personal.aadhaarNumber),
    },
    address: draft.address,
    additional: {
      ...draft.additional,
      certificateType: getCertificateTypeLabel(draft.additional.certificateType),
    },
  };
};
