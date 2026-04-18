# Versioning & Release Strategy

## Version Scheme

The toolkit follows semantic versioning: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes to the public API, config model, or CSS class names
- **MINOR**: New features, new config options, new accessibility controls
- **PATCH**: Bug fixes, CSS tweaks, label corrections

Current version: **1.0.0**

## Hosted URL Structure

```
https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js      ← Major version (recommended)
https://cdn.ux4g.gov.in/a11y/v1.0.0/ux4g-a11y.min.js   ← Pinned version
https://cdn.ux4g.gov.in/a11y/latest/ux4g-a11y.min.js    ← Latest (use with caution)
```

### Recommended: Major Version URL

```html
<script src="https://cdn.ux4g.gov.in/a11y/v1/ux4g-a11y.min.js" defer></script>
```

This gets all v1.x.x updates (new features + bug fixes) without breaking changes.

### Pinned Version

```html
<script src="https://cdn.ux4g.gov.in/a11y/v1.0.0/ux4g-a11y.min.js" defer></script>
```

Use this for maximum stability. You control when to upgrade.

## Package Versions

| Package | npm | Description |
|---|---|---|
| `@ux4g/a11y-core` | `^1.0.0` | Framework-independent engine |
| `@ux4g/a11y-react` | `^1.0.0` | React binding |
| `@ux4g/a11y-angular` | `^1.0.0` | Angular binding |
| `@ux4g/a11y-hosted` | `^1.0.0` | Browser bundle |

## Upgrade Guidance

### Minor Version Upgrades (1.0 → 1.1)

- New features may appear in the panel
- New config options may be available
- No action required — existing config continues to work
- Test that the panel still renders correctly

### Major Version Upgrades (1.x → 2.0)

- Read the migration guide for the specific version
- Check for renamed config options
- Check for changed CSS class names
- Test thoroughly before deploying

## Cache Headers

Hosted assets should be served with:

```
Cache-Control: public, max-age=31536000, immutable
```

Versioned URLs (e.g. `/v1.0.0/`) are immutable — the content never changes for a given version.

Major version URLs (e.g. `/v1/`) should use shorter cache times:

```
Cache-Control: public, max-age=86400
```

## Changelog Structure

Each release includes:
- Version number and date
- New features
- Bug fixes
- Breaking changes (major versions only)
- Migration steps (major versions only)

## Self-Hosted Upgrade Process

1. Download the new version's distribution files
2. Replace the files on your server
3. Clear CDN/proxy caches
4. Test the toolkit on a staging environment
5. Deploy to production
