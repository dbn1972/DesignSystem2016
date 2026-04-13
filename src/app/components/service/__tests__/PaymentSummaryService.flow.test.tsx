import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

import { PaymentSummaryService } from "../PaymentSummaryService";

const navigateMock = vi.fn();
const preparePaymentAttemptMock = vi.fn();
const executePaymentAttemptMock = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>("react-router");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

vi.mock("../../../services/paymentService", () => ({
  loadPaymentSummaryData: () => ({
    lineItems: [
      { label: "Application Processing", amount: 100 },
      { label: "Service Charge", amount: 50 },
      { label: "Gateway Charge", amount: 5 },
    ],
    totalAmount: 155,
  }),
  preparePaymentAttempt: () => preparePaymentAttemptMock(),
  executePaymentAttempt: () => executePaymentAttemptMock(),
}));

describe("PaymentSummaryService flow", () => {
  beforeEach(() => {
    navigateMock.mockReset();
    preparePaymentAttemptMock.mockReset();
    executePaymentAttemptMock.mockReset();
  });

  const renderView = () =>
    render(
      <MemoryRouter>
        <PaymentSummaryService
          category="Government Service Access"
          title="Payment Summary"
          serviceName="Government Service Platform"
          backPath="/reference-service/declaration"
          nextPath="/reference-service/payment-receipt"
        />
      </MemoryRouter>
    );

  it("renders fee lines and total", () => {
    renderView();
    expect(screen.getByText(/Application Processing/i)).toBeInTheDocument();
    expect(screen.getByText(/Service Charge/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Amount/i)).toBeInTheDocument();
  });

  it("shows retry state when payment attempt fails", async () => {
    executePaymentAttemptMock.mockReturnValue({ success: false, message: "Payment failed due to a network issue. Please retry." });
    const user = userEvent.setup();
    renderView();

    await user.click(screen.getByRole("button", { name: /Continue/i }));

    expect(preparePaymentAttemptMock).toHaveBeenCalled();
    expect(await screen.findByText(/Payment failed due to a network issue/i)).toBeInTheDocument();
    expect(await screen.findByRole("button", { name: /Retry Payment/i })).toBeInTheDocument();
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("navigates to receipt after successful payment", async () => {
    executePaymentAttemptMock.mockReturnValue({ success: true, referenceNumber: "CERT-001" });
    const user = userEvent.setup();
    renderView();

    await user.click(screen.getByRole("button", { name: /Continue/i }));

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith("/reference-service/payment-receipt");
    }, { timeout: 3000 });
  });
});
