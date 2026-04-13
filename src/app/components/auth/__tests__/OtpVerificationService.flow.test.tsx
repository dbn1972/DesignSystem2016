import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

import { OtpVerificationService } from "../OtpVerificationService";

const navigateMock = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>("react-router");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

describe("OtpVerificationService flow", () => {
  beforeEach(() => {
    navigateMock.mockReset();
  });

  const renderView = () =>
    render(
      <MemoryRouter>
        <OtpVerificationService
          category="Government Service Access"
          title="Verify OTP"
          backLink="/reference-service/sign-in"
          backText="Back"
          successRedirectPath="/reference-service/start"
          helpPath="/patterns/contact-support"
          serviceName="Government Service Platform"
          identifier="9876543210"
        />
      </MemoryRouter>
    );

  it("keeps verify action disabled for non-6 digit OTP", async () => {
    const user = userEvent.setup();
    renderView();

    await user.type(screen.getByLabelText(/One-Time Password/i), "12345");
    const verifyButton = screen.getByRole("button", { name: /verify otp/i });
    expect(verifyButton).toBeDisabled();
    await user.click(verifyButton);
    expect(screen.queryByText(/Verification Status/i)).not.toBeInTheDocument();
  });

  it("handles expired OTP and resend recovery", async () => {
    const user = userEvent.setup();
    renderView();

    await user.type(screen.getByLabelText(/One-Time Password/i), "000000");
    await user.click(screen.getByRole("button", { name: /verify otp/i }));

    await screen.findByText(/OTP Expired/i);
    expect(screen.getByText(/Resend OTP in/i)).toBeInTheDocument();
  });

  it("supports successful verification redirect", async () => {
    const user = userEvent.setup();
    renderView();

    await user.type(screen.getByLabelText(/One-Time Password/i), "123456");
    await user.click(screen.getByRole("button", { name: /verify otp/i }));

    await screen.findByText(/Verification Successful/i);

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith("/reference-service/start");
    }, { timeout: 3000 });
  });
});
