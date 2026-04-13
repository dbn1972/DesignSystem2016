import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

import { SignInService } from "../SignInService";

const navigateMock = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>("react-router");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

describe("SignInService flow", () => {
  const renderView = () =>
    render(
      <MemoryRouter>
        <SignInService
          category="Government Service Access"
          title="Sign In"
          subtitle="Secure Access"
          backLink="/reference-service/overview"
          backText="Back"
          successRedirectPath="/reference-service/start"
          forgotPasswordPath="/reference-service/forgot-password"
          otpSignInPath="/reference-service/verify-otp"
          helpPath="/patterns/contact-support"
          serviceName="Government Service Platform"
          signUpPath="/reference-service/sign-up"
        />
      </MemoryRouter>
    );

  it("shows inline validation errors and clears them after edits", async () => {
    const user = userEvent.setup();
    renderView();

    await user.click(screen.getByRole("button", { name: /sign in/i }));
    expect(screen.getByText(/Identifier is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();

    await user.type(screen.getByLabelText(/Email, Mobile Number, or User ID/i), "PRIYA001");
    await user.type(screen.getByLabelText(/^Password/i, { selector: "input" }), "StrongPass#1");

    await waitFor(() => {
      expect(screen.queryByText(/Identifier is required/i)).not.toBeInTheDocument();
    });
  });

  it("handles wrong-credential state and supports password visibility toggle", async () => {
    const user = userEvent.setup();
    renderView();

    const passwordInput = screen.getByLabelText(/^Password/i, { selector: "input" });
    expect(passwordInput).toHaveAttribute("type", "password");

    await user.click(screen.getByRole("button", { name: /show password/i }));
    expect(passwordInput).toHaveAttribute("type", "text");

    await user.type(screen.getByLabelText(/Email, Mobile Number, or User ID/i), "PRIYA001");
    await user.clear(passwordInput);
    await user.type(passwordInput, "wrong-password");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    await screen.findByText(/Unable to Sign In/i);
    expect(screen.getByText(/identifier or password you entered is incorrect/i)).toBeInTheDocument();
  });

  it("completes happy path and requests redirect", async () => {
    const user = userEvent.setup();
    renderView();

    await user.type(screen.getByLabelText(/Email, Mobile Number, or User ID/i), "PRIYA001");
    await user.type(screen.getByLabelText(/^Password/i, { selector: "input" }), "StrongPass#1");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    await screen.findByText(/Signed in successfully\. Redirecting/i);
    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith("/reference-service/start");
    });
  });

  it("keeps basic accessibility affordances for form controls", () => {
    renderView();
    expect(screen.getByLabelText(/Email, Mobile Number, or User ID/i)).toHaveAttribute("id", "signin-identifier");
    expect(screen.getByLabelText(/^Password/i, { selector: "input" })).toHaveAttribute("id", "signin-password");
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
  });
});
