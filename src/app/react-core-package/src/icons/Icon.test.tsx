import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";
import { resolveIconName, UX4G_ICON_ALIASES, UX4G_ICON_METADATA, UX4G_ICONS } from "./registry";

describe("UX4G icon system", () => {
  it("renders a decorative icon hidden from assistive tech by default", () => {
    const { container } = render(<Icon name="search" data-testid="search-icon" />);
    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
    expect(svg?.querySelectorAll("circle, path, rect").length).toBeGreaterThan(0);
  });

  it("renders an informative icon with an accessible title", () => {
    render(<Icon name="warning" title="Warning status" decorative={false} />);

    expect(screen.getByLabelText("Warning status")).toBeInTheDocument();
    expect(screen.getByTitle("Warning status")).toBeInTheDocument();
  });

  it("keeps the registry and metadata aligned", () => {
    expect(Object.keys(UX4G_ICONS).sort()).toEqual(Object.keys(UX4G_ICON_METADATA).sort());
    expect(UX4G_ICON_METADATA["id-card"].category).toBe("government");
    expect(UX4G_ICON_METADATA.accessibility.keywords).toContain("inclusive");
    expect(UX4G_ICON_METADATA.link.category).toBe("actions");
    expect(UX4G_ICON_METADATA.certificate.displayName).toBe("Certificate");
    expect(UX4G_ICON_METADATA.pending.category).toBe("status");
    expect(UX4G_ICON_METADATA["screen-reader"].keywords).toContain("assistive");
    expect(UX4G_ICON_METADATA["sidebar-left"].category).toBe("navigation");
    expect(UX4G_ICON_METADATA["add-user"].category).toBe("users");
    expect(UX4G_ICON_METADATA["alert-octagon"].displayName).toBe("Alert octagon");
    expect(UX4G_ICON_METADATA.database.category).toBe("system");
    expect(UX4G_ICON_METADATA.stamp.category).toBe("government");
    expect(UX4G_ICON_METADATA["sort-asc"].category).toBe("data");
  });

  it("resolves aliases to canonical icon names", () => {
    expect(resolveIconName("trash")).toBe("delete");
    expect(resolveIconName("globe")).toBe("language");
    expect(UX4G_ICON_ALIASES.invoice).toBe("receipt");
    expect(resolveIconName("ellipsis")).toBe("more-horizontal");
    expect(resolveIconName("approve")).toBe("approval");
    expect(resolveIconName("sr")).toBe("screen-reader");
    expect(resolveIconName("kebab")).toBe("more-vertical");
    expect(resolveIconName("verified-user")).toBe("user-check");
    expect(resolveIconName("form")).toBe("application");
    expect(resolveIconName("storage")).toBe("database");
  });
});
