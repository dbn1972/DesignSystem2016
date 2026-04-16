# Scripts

## Validation Scripts (run regularly)

| Script | Command | Purpose |
|---|---|---|
| `check-doc-links.mjs` | `pnpm run check:docs-links` | Validate all documentation links |
| `check-api-doc-drift.mjs` | `pnpm run check:api-docs` | Check API documentation drift |
| `check-semantic-colors.mjs` | `pnpm run check:semantic-colors` | Validate semantic color tokens |

## Quality Audit Scripts

| Script | Purpose |
|---|---|
| `full-quality-audit.mjs` | Comprehensive content quality audit of all 77 pages |
| `audit-playgrounds.mjs` | Check playground controls are wired to previews |
| `audit-previews.mjs` | Check live preview rendering issues |
| `content-quality-audit.mjs` | Compare content depth against Button baseline |

## Build Scripts

| Script | Purpose |
|---|---|
| `publish.mjs` | Package publishing workflow |

## One-Time Migration Scripts (already run, kept for reference)

These scripts were used during the documentation standardization effort. They have already been executed and should not be re-run.

| Script | What it did |
|---|---|
| `add-premium-docs.mjs` | Added When to use, Related, Changelog, Research to first 19 components |
| `batch56-data.mjs` | Data for batch 5-6 component premium docs |
| `batch-all-remaining.mjs` | Applied premium docs to remaining components |
| `bulk-add-features.mjs` | Added playground, Do/Don't, preview to all pages |
| `fix-31-missing.mjs` | Added missing sections to 31 pages |
| `fix-usecases-count.mjs` | Ensured all pages have 4+ government use cases |
| `fix-previews.mjs` | Replaced generic placeholders with actual previews |
| `fix-preview-props.mjs` | Fixed Preview components called without required props |
| `fix-hero-previews.mjs` | Upgraded hero preview props for all pages |
| `wire-playgrounds.mjs` | Wired playground controls to Preview components |
| `wire-all-playgrounds.mjs` | Extended wiring to all remaining playgrounds |
| `upgrade-playgrounds.mjs` | Replaced emoji placeholders with real components |
| `upgrade-dodonts.mjs` | Added live previews to Do/Don't cards |
| `upgrade-31-playgrounds.mjs` | Added 2 more controls to 31 playgrounds |
| `add-dodont-21.mjs` | Added Do/Don't to 21 pages missing it |
| `fix-duplicates.mjs` | Fixed duplicate additionalContent props |
| `fix-10-group-a.mjs` | Fixed 10 pages with different closing patterns |
| `inject-features.mjs` | Feature injection prototype |
| `add-features-remaining.mjs` | Feature data for remaining components |
| `add-playground-all.mjs` | Playground data prototype |
| `add-playground-dodont.mjs` | Playground + Do/Don't prototype |
| `batch-remaining-a.mjs` | Batch data for remaining components |
