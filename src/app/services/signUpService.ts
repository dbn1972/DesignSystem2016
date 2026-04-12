import { authApi } from "./mockApi";

export type SignUpFailureState =
  | "mobile-already-registered"
  | "service-unavailable"
  | "validation-error";

export type SignUpResult =
  | {
      success: true;
      message: string;
      userId: string;
      otpSent: boolean;
      mobileNumber: string;
    }
  | {
      success: false;
      state: SignUpFailureState;
      message: string;
    };

export interface SignUpPayload {
  fullName: string;
  mobileNumber: string;
  email?: string;
  password: string;
}

export const registerUser = async (payload: SignUpPayload): Promise<SignUpResult> => {
  if (payload.fullName.toLowerCase().includes("down")) {
    return {
      success: false,
      state: "service-unavailable",
      message: "Sign-up service is temporarily unavailable. Please try again shortly.",
    };
  }

  const response = await authApi.signUp({
    fullName: payload.fullName.trim(),
    mobileNumber: payload.mobileNumber.trim(),
    email: payload.email?.trim() || undefined,
    password: payload.password,
  });

  if (!response.success || !response.data) {
    const isDuplicate = (response.error || "").toLowerCase().includes("already");

    return {
      success: false,
      state: isDuplicate ? "mobile-already-registered" : "validation-error",
      message:
        response.error ||
        "We could not create your account right now. Please review your details and try again.",
    };
  }

  return {
    success: true,
    message: response.message || "Account created. OTP sent to your mobile number.",
    userId: response.data.userId,
    otpSent: response.data.otpSent,
    mobileNumber: payload.mobileNumber.trim(),
  };
};
