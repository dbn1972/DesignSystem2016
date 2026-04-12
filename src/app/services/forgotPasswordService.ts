import { authApi } from "./mockApi";
import { identifyIdentifierType } from "./signInService";

export type ForgotPasswordState =
  | "default"
  | "service-unavailable"
  | "identifier-not-found"
  | "invalid-otp"
  | "expired-otp"
  | "reset-success";

export interface RequestResetResult {
  success: boolean;
  state: ForgotPasswordState;
  message: string;
  mobileNumber?: string;
}

export interface ResetPasswordResult {
  success: boolean;
  state: ForgotPasswordState;
  message: string;
}

const knownEmailMap: Record<string, string> = {
  "priya.sharma@example.com": "9876543210",
};

const knownUserIdMap: Record<string, string> = {
  PRIYA001: "9876543210",
  DEMOUSER: "9876543210",
};

export const resolveIdentifierToMobile = (identifier: string): string => {
  const normalized = identifier.trim();
  const type = identifyIdentifierType(normalized);

  if (type === "mobile") {
    return normalized;
  }

  if (type === "email") {
    return knownEmailMap[normalized.toLowerCase()] || "";
  }

  return knownUserIdMap[normalized.toUpperCase()] || "";
};

export const requestPasswordReset = async (
  identifier: string
): Promise<RequestResetResult> => {
  const normalizedIdentifier = identifier.trim();

  if (normalizedIdentifier.toLowerCase().includes("down")) {
    return {
      success: false,
      state: "service-unavailable",
      message: "Password reset service is temporarily unavailable. Please try again shortly.",
    };
  }

  const mobileNumber = resolveIdentifierToMobile(normalizedIdentifier);

  if (!mobileNumber) {
    return {
      success: false,
      state: "identifier-not-found",
      message:
        "We could not find an account with that identifier. Check your details and try again.",
    };
  }

  const response = await authApi.requestPasswordReset(mobileNumber);

  if (!response.success) {
    return {
      success: false,
      state: "identifier-not-found",
      message:
        response.error ||
        "We could not find an account with that identifier. Check your details and try again.",
    };
  }

  return {
    success: true,
    state: "default",
    message: response.message || "OTP sent to your registered mobile number.",
    mobileNumber,
  };
};

export const completePasswordReset = async (payload: {
  identifier: string;
  otp: string;
  newPassword: string;
}): Promise<ResetPasswordResult> => {
  const mobileNumber = resolveIdentifierToMobile(payload.identifier);

  if (!mobileNumber) {
    return {
      success: false,
      state: "identifier-not-found",
      message:
        "We could not find an account with that identifier. Start again and verify your details.",
    };
  }

  if (payload.otp === "000000") {
    return {
      success: false,
      state: "expired-otp",
      message: "This OTP has expired. Request a new OTP and try again.",
    };
  }

  const response = await authApi.resetPassword({
    mobileNumber,
    otp: payload.otp,
    newPassword: payload.newPassword,
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
    state: "reset-success",
    message: response.message || "Password reset successful.",
  };
};
