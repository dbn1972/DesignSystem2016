import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

import { StatusTrackerService } from "../StatusTrackerService";
import GeneralContactPattern from "../../../pages/GeneralContactPattern";

describe("status tracker and support basic accessibility", () => {
  it("renders status tracker content and accessible links", () => {
    render(
      <MemoryRouter>
        <StatusTrackerService
          category="Government Service Access"
          title="Track Application"
          serviceName="Government Service Platform"
          homePath="/reference-service/overview"
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /Timeline/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Go to Service Home/i })).toHaveAttribute("href", "/reference-service/overview");
  });

  it("validates general contact form required fields", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <GeneralContactPattern />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: /General Information/i }));
    await user.click(screen.getByRole("button", { name: /^Continue$/i }));
    await user.click(screen.getByRole("button", { name: /Review & Submit/i }));

    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
  });
});
