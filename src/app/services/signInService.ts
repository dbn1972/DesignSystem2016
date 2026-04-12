import { authApi } from "./mockApi";

export type IdentifierType = "mobile" | "email" | "userId";

export type SignInFailureState =
  | "wrong-credentials"
  | "locked-account"
  | "session-expired"
  | "service-unavailable";

export type SignInResult =
  | {
      success: true;
      token: string;
      displayName: string;
      identifierType: IdentifierType;
    }
  | {
      success: false;
      state: SignInFailureState;
      message: string;
    };

export interface SignInPayload {
  identifier: string;
  password: string;
}

export const identifyIdentifierType = (value: string): IdentifierType => {
  const normalized = value.trim();

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return "email";
  }

  if (/^\d{10}$/.test(normalized)) {
    return "mobile";
  }

  return "userId";
};

const normalizeToMobile = (identifier: string, type: IdentifierType): string => {
  if (type === "mobile") {
    return identifier;
  }

  const knownEmailMap: Record<string, string> = {
    "priya.sharma@example.com": "9876543210",
  };

  const knownUserIdMap: Record<string, string> = {
    PRIYA001: "9876543210",
    DEMOUSER: "9876543210",
  };

  const normalized = identifier.trim();

  if (type === "email") {
    return knownEmailMap[normalized.toLowerCase()] || "";
  }

  return knownUserIdMap[normalized.toUpperCase()] || "";
};

const derivePreAuthState = (payload: SignInPayload): SignInFailureState | null => {
  const identifier = payload.identifier.trim().toLowerCase();
  const password = payload.password.trim().toLowerCase();

  if (identifier.includes("down") || password === "service-down") {
    return "service-unavailable";
  }

  if (identifier.includes("locked") || password === "locked-account") {
    return "locked-account";
  }

  if (identifier.includes("expired") || password === "session-expired") {
    return "session-expired";
  }

  return null;
};

const getFailureMessage = (state: SignInFailureState): string => {
  switch (state) {
    case "wrong-credentials":
      return "The identifier or password you entered is incorrect. Check your details and try again.";
    case "locked-account":
      return "Your account is temporarily locked after multiple unsuccessful attempts. Please try again later or contact support.";
    case "session-expired":
      return "Your previous session has expired. Sign in again to continue securely.";
    case "service-unavailable":
      return "Sign in is currently unavailable due to a service issue. Please try again in a few minutes.";
    default:
      return "We could not sign you in. Please try again.";
  }
};

export const signInWithIdentifier = async (payload: SignInPayload): Promise<SignInResult> => {
  const preAuthState = derivePreAuthState(payload);
  if (preAuthState) {
    return {
      success: false,
      state: preAuthState,
      message: getFailureMessage(preAuthState),
    };
  }

  if (payload.password.trim().toLowerCase() === "wrong-password") {
    return {
      success: false,
      state: "wrong-credentials",
      message: getFailureMessage("wrong-credentials"),
    };
  }

  const identifierType = identifyIdentifierType(payload.identifier);
  const mobileNumber = normalizeToMobile(payload.identifier, identifierType);

  if (!mobileNumber) {
    return {
      success: false,
      state: "wrong-credentials",
      message: getFailureMessage("wrong-credentials"),
    };
  }

  const response = await authApi.signIn({
    mobileNumber,
    password: payload.password,
  });

  if (!response.success || !response.data) {
    return {
      success: false,
      state: "wrong-credentials",
      message: getFailureMessage("wrong-credentials"),
    };
  }

  return {
    success: true,
    token: response.data.token,
    displayName: response.data.user.fullName,
    identifierType,
  };
};

export const mapSignInStateFromQuery = (value: string | null): SignInFailureState | null => {
  switch (value) {
    case "wrong-credentials":
    case "locked-account":
    case "session-expired":
    case "service-unavailable":
      return value;
    default:
      return null;
  }
};

export const getSignInStateTitle = (state: SignInFailureState): string => {
  switch (state) {
    case "wrong-credentials":
      return "Unable to Sign In";
    case "locked-account":
      return "Account Locked";
    case "session-expired":
      return "Session Expired";
    case "service-unavailable":
      return "Service Unavailable";
    default:
      return "Sign In Status";
  }
};
