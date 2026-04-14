import { describe, expect, it } from "vitest";

import {
  identifyIdentifierType,
  signInWithIdentifier,
  getSignInStateTitle,
} from "../signInService";
import { maskMobileNumber, verifyOneTimePassword } from "../otpService";
import {
  completePasswordReset,
  requestPasswordReset,
  resolveIdentifierToMobile,
} from "../forgotPasswordService";

describe("auth service unit coverage", () => {
  it("detects identifier types", () => {
    expect(identifyIdentifierType("priya.sharma@example.com")).toBe("email");
    expect(identifyIdentifierType("9876543210")).toBe("mobile");
    expect(identifyIdentifierType("PRIYA001")).toBe("userId");
  });

  it("returns session/service lockout states for sign-in precheck", async () => {
    const locked = await signInWithIdentifier({ identifier: "locked.user", password: "anything" });
    const unavailable = await signInWithIdentifier({ identifier: "demo", password: "service-down" });

    expect(locked.success).toBe(false);
    expect(unavailable.success).toBe(false);
    if (locked.success === false) {
      expect(locked.state).toBe("locked-account");
    }
    if (unavailable.success === false) {
      expect(unavailable.state).toBe("service-unavailable");
    }
  });

  it("maps wrong credentials and success sign-in outcomes", async () => {
    const wrong = await signInWithIdentifier({ identifier: "PRIYA001", password: "wrong-password" });
    const success = await signInWithIdentifier({ identifier: "PRIYA001", password: "StrongPass#1" });

    expect(wrong.success).toBe(false);
    if (wrong.success === false) {
      expect(wrong.state).toBe("wrong-credentials");
    }
    expect(success.success).toBe(true);
  });

  it("resolves forgot-password identifiers and request failures", async () => {
    expect(resolveIdentifierToMobile("priya.sharma@example.com")).toBe("9876543210");
    expect(resolveIdentifierToMobile("DEMOUSER")).toBe("9876543210");
    expect(resolveIdentifierToMobile("unknown-id")).toBe("");

    const notFound = await requestPasswordReset("unknown-id");
    expect(notFound.success).toBe(false);
    expect(notFound.state).toBe("identifier-not-found");
  });

  it("supports OTP edge/failure/success outcomes", async () => {
    expect(maskMobileNumber("9876543210")).toBe("98XXXXXX10");
    expect(maskMobileNumber("123")).toBe("XXXXXXXXXX");

    const expired = await verifyOneTimePassword({ identifier: "PRIYA001", otp: "000000" });
    const unavailable = await verifyOneTimePassword({ identifier: "PRIYA001", otp: "999999" });
    const invalid = await verifyOneTimePassword({ identifier: "PRIYA001", otp: "123457" });
    const success = await verifyOneTimePassword({ identifier: "PRIYA001", otp: "123456" });

    expect(expired.state).toBe("expired-otp");
    expect(unavailable.state).toBe("service-unavailable");
    expect(invalid.state).toBe("invalid-otp");
    expect(success.state).toBe("verified");
    expect(success.success).toBe(true);
  });

  it("completes password reset and reports expired OTP", async () => {
    const expired = await completePasswordReset({
      identifier: "PRIYA001",
      otp: "000000",
      newPassword: "StrongPass#1",
    });

    const success = await completePasswordReset({
      identifier: "PRIYA001",
      otp: "123456",
      newPassword: "StrongPass#1",
    });

    expect(expired.success).toBe(false);
    expect(expired.state).toBe("expired-otp");
    expect(success.success).toBe(true);
    expect(success.state).toBe("reset-success");
  });

  it("returns meaningful sign-in state titles", () => {
    expect(getSignInStateTitle("wrong-credentials")).toMatch(/Unable to Sign In/i);
    expect(getSignInStateTitle("locked-account")).toMatch(/Account Locked/i);
  });
});
