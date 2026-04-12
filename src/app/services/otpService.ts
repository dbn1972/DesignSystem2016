import { authApi } from "./mockApi";
import { resolveIdentifierToMobile } from "./forgotPasswordService";

export type OtpVerificationState =
  | "default"
  | "invalid-otp"
  | "expired-otp"
  | "service-unavailable"
  | "verified";

export interface OtpVerificationResult {
  success: boolean;
  state: OtpVerificationState;
  message: string;
}

export const verifyOneTimePassword = async (payload: {
  identifier: string;
  otp: string;
}): Promise<OtpVerificationResult> => {
  const otp = payload.otp.trim();

  if (otp === "000000") {
    return {
      success: false,
      state: "expired-otp",
      message: "This OTP has expired. Request a new code and try again.",
    };
  }

  if (otp === "999999") {
    return {
      success: false,
      state: "service-unavailable",
      message: "OTP verification is temporarily unavailable. Please try again shortly.",
    };
  }

  const mobileNumber = resolveIdentifierToMobile(payload.identifier);
  if (!mobileNumber) {
    return {
      success: false,
      state: "invalid-otp",
      message: "Unable to verify this account. Check your details and try again.",
    };
  }

  const response = await authApi.verifyOTP({
    mobileNumber,
    otp,
  });

  if (!response.success) {
    return {
      success: false,
      state: "invalid-otp",
      message: response.error || "Invalid OTP. Please check the code and try again.",
    };
  }

  return {
    success: true,
    state: "verified",
    message: "OTP verified successfully.",
  };
};

export const maskMobileNumber = (mobileNumber: string): string => {
  const normalized = mobileNumber.trim();

  if (normalized.length !== 10) {
    return "XXXXXXXXXX";
  }

  return `${normalized.slice(0, 2)}XXXXXX${normalized.slice(-2)}`;
};
