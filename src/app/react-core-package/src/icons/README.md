# UX4G Application Icon System

The UX4G icon system is a 24px stroke-based application icon library for public-service products, dashboards, forms, and administrative interfaces.

## Visual System

- Base grid: `24 x 24`
- Target small sizes: `16px` and `20px`
- Default stroke: `1.75`
- Stroke joins: `round`
- Stroke caps: `round`
- Corner behavior: soft geometric radii, no sharp ornamental corners
- Default color model: `currentColor`
- Fill use: only for optical anchors such as dots or half-disc contrast metaphors

## Quality Rules

- Keep all primary geometry aligned to the 24px grid.
- Avoid more than one metaphor per icon.
- Use balanced negative space over decorative detail.
- Prefer outline-first shapes that survive at `16px`.
- Use filled accents sparingly and consistently.
- Keep icons optically centered, not mathematically cramped.
- Do not rely on color alone to communicate meaning.

## Naming

- Use kebab-case for asset names, for example `external-link.svg`.
- Use PascalCase for React components, for example `ExternalLinkIcon`.
- Keep names noun-based when possible.
- Reserve directional or state variants for explicit use cases, not casual duplication.

## Categories

- Navigation
- Actions
- Status
- Users
- Security
- Communication
- Data
- Files
- Accessibility
- System
- Government

## React Usage

```tsx
import { Icon, SearchIcon, DownloadIcon, LinkIcon, CertificateIcon } from "@ux4g/react-core";

export function SearchButton() {
  return (
    <button type="button" className="inline-flex items-center gap-2">
      <SearchIcon size="md" decorative />
      Search records
    </button>
  );
}

export function StatusBadge() {
  return <Icon name="warning" title="Warning status" decorative={false} />;
}

export function ExportButton() {
  return (
    <button type="button" className="inline-flex items-center gap-2">
      <DownloadIcon size={20} decorative />
      Export report
    </button>
  );
}

export function ServiceLink() {
  return (
    <a href="/services/certificate" className="inline-flex items-center gap-2">
      <CertificateIcon decorative />
      Certificate service
      <LinkIcon size="sm" decorative />
    </a>
  );
}
```

## Accessibility Guidance

- Decorative icons should stay `aria-hidden`.
- Informative icons should provide a `title` and `decorative={false}`.
- Icon-only controls must include an accessible label on the interactive parent.
- Status icons must be paired with text in alerts, badges, and tables.
- Do not use icons as the only indicator for success, warning, or error.

## Theming

- Icons inherit `currentColor` by default.
- Use semantic text color tokens on the parent element.
- For high-contrast modes, favor solid text tokens over reduced-opacity icon color.
- Avoid embedding fixed fills except for system-approved optical accents.

## Gallery Tooling

- Search by canonical name, display label, or keyword
- Filter by category
- Preview icons at `16px`, `20px`, `24px`, and `32px`
- Evaluate against light, dark, and high-contrast surfaces
- Copy import, JSX usage, dynamic usage, canonical name, or raw SVG
- Download a single optimized SVG asset from the gallery

## File Structure

- `iconDefinitions.json`: source of truth for geometry and metadata
- `icons.tsx`: React component exports
- `registry.ts`: import-friendly registry and metadata
- `svg/*.svg`: generated raw vector assets for product and design-tool workflows
- `generate-ux4g-icons.mjs`: sync script for SVG output

## Current Coverage Highlights

- Navigation essentials: home, menu, close, chevrons, back arrow
- Table and toolbar actions: search, filter, sort, link, share, print, plus, minus
- Public-service workflows: service, case, certificate, receipt, id-card

## Adding New Icons

1. Add the icon metadata and nodes to `iconDefinitions.json`.
2. Export a named React component in `icons.tsx`.
3. Register the icon in `registry.ts`.
4. Run `node scripts/generate-ux4g-icons.mjs`.
5. Verify the icon at `16px`, `20px`, and `24px`.
6. Confirm the metaphor is unique and category placement is correct.
7. Add or update docs if the icon introduces a new public-service concept.
