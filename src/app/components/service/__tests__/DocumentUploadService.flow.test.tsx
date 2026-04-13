import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

import { DocumentUploadService } from "../DocumentUploadService";

const navigateMock = vi.fn();
const updateDraftMock = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>("react-router");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

vi.mock("../../../services/certificateFlow", () => ({
  loadCertificateDraft: () => ({
    documents: [
      { id: "identity", name: "Identity Proof", required: true, status: "pending" },
      { id: "address", name: "Address Proof", required: true, status: "pending" },
    ],
  }),
  updateCertificateDraft: (...args: unknown[]) => updateDraftMock(...args),
}));

describe("DocumentUploadService flow", () => {
  beforeEach(() => {
    navigateMock.mockReset();
    updateDraftMock.mockReset();
  });

  const renderView = () =>
    render(
      <MemoryRouter>
        <DocumentUploadService
          category="Government Service Access"
          title="Document Upload"
          serviceName="Government Service Platform"
          previousPath="/reference-service/form/review"
          nextPath="/reference-service/review-summary"
        />
      </MemoryRouter>
    );

  it("blocks continue when required files are missing", async () => {
    const user = userEvent.setup();
    renderView();

    await user.click(screen.getByRole("button", { name: /Continue to Review/i }));
    expect(screen.getByText(/Please upload all required documents before continuing/i)).toBeInTheDocument();
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("shows file-type validation error for unsupported extension", async () => {
    const { container } = renderView();

    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    const badFile = new File(["malware"], "payload.exe", { type: "application/octet-stream" });

    fireEvent.change(fileInput, { target: { files: [badFile] } });
    expect(await screen.findByText(/Only PDF, JPG, JPEG, and PNG files are allowed/i)).toBeInTheDocument();
  });

  it("uploads required docs and allows happy-path navigation", async () => {
    const user = userEvent.setup();
    const { container } = renderView();

    const fileInputs = Array.from(container.querySelectorAll('input[type="file"]')) as HTMLInputElement[];

    await user.upload(fileInputs[0], new File(["id"], "id-proof.pdf", { type: "application/pdf" }));
    await user.upload(fileInputs[1], new File(["addr"], "address-proof.png", { type: "image/png" }));

    await user.click(screen.getByRole("button", { name: /Continue to Review/i }));

    expect(updateDraftMock).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalledWith("/reference-service/review-summary");
  });
});
