import { describe, expect, it } from "vitest";

import { validateUploadFile } from "../documentUploadService";
import { email, mobileNumber, pincode, required } from "../validation";
import {
  formatAadhaarForDisplay,
  validateAdditionalInfo,
  validateAddressInfo,
  validatePersonalInfo,
} from "../formFlowService";

describe("form and upload validation", () => {
  it("covers required/email/mobile/pincode validation", () => {
    expect(required("", "Full Name").valid).toBe(false);
    expect(email("bad-email").valid).toBe(false);
    expect(email("ok@example.com").valid).toBe(true);
    expect(mobileNumber("12345").valid).toBe(false);
    expect(mobileNumber("9876543210").valid).toBe(true);
    expect(pincode("123").valid).toBe(false);
    expect(pincode("400069").valid).toBe(true);
  });

  it("validates personal form edge cases", () => {
    const result = validatePersonalInfo({
      fullName: "",
      dateOfBirth: "",
      gender: "",
      fatherName: "",
      motherName: "",
      maritalStatus: "",
      mobileNumber: "999",
      email: "bad",
      aadhaarNumber: "1234",
    });

    expect(result.fullName).toBeTruthy();
    expect(result.mobileNumber).toBeTruthy();
    expect(result.email).toBeTruthy();
    expect(result.aadhaarNumber).toBeTruthy();
  });

  it("validates address and additional forms", () => {
    const addressErrors = validateAddressInfo({
      addressLine1: "",
      addressLine2: "",
      landmark: "",
      city: "",
      district: "",
      state: "",
      pincode: "111",
      residenceType: "",
      yearsAtAddress: "",
    });

    const additionalErrors = validateAdditionalInfo({
      certificateType: "income",
      purpose: "",
      annualIncome: "",
      occupation: "",
      employerName: "",
      additionalInfo: "",
    });

    expect(addressErrors.addressLine1).toBeTruthy();
    expect(addressErrors.pincode).toBeTruthy();
    expect(additionalErrors.purpose).toBeTruthy();
    expect(additionalErrors.annualIncome).toBeTruthy();
  });

  it("accepts valid uploads and blocks dangerous file types", () => {
    const pngFile = new File(["ok"], "doc.png", { type: "image/png" });
    const exeFile = new File(["bad"], "virus.exe", { type: "application/octet-stream" });

    expect(validateUploadFile(pngFile)).toBeNull();
    expect(validateUploadFile(exeFile)).toMatch(/Only PDF, JPG, JPEG, and PNG/i);
  });

  it("formats aadhaar for review display", () => {
    expect(formatAadhaarForDisplay("123456789012")).toBe("1234 5678 9012");
  });
});
