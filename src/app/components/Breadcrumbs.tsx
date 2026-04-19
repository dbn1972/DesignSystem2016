/**
 * Auto-generated breadcrumbs based on the current URL path.
 * Renders Home > Section > Page hierarchy with proper links.
 * Skips rendering on the home page and pages that handle their own breadcrumbs.
 */

import { Link, useLocation } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';

/** Human-readable labels for URL segments. */
const SEGMENT_LABELS: Record<string, string> = {
  components: 'Components',
  foundations: 'Foundations',
  patterns: 'Patterns',
  governance: 'Governance',
  resources: 'Resources',
  services: 'Services',
  systems: 'Systems',
  archetypes: 'Service Archetypes',
  'reference-service': 'Reference Service',
  documentation: 'Documentation',
  'api-reference': 'API Reference',
  'getting-started': 'Getting Started',
  'starter-kit': 'Starter Kit',
  'component-specs': 'Component Specs',
  'service-code-downloads': 'Code Downloads',
  figma: 'Figma',
  logos: 'Logos',
  'migration-guides': 'Migration Guides',
  'migration-material-ui': 'Material UI Migration',
  'angular-core': 'Angular Core',
  'angular-patterns': 'Angular Patterns',
  'web-components': 'Web Components',
  identity: 'Identity & Access',
  consent: 'Consent & Declaration',
  payment: 'Payment',
  forms: 'Forms',
  feedback: 'Feedback',
  dashboard: 'Dashboard',
  notifications: 'Notifications',
  'search-discovery': 'Search & Discovery',
  'status-lifecycle': 'Status Lifecycle',
  'data-input': 'Data Input',
  'contact-support': 'Contact & Support',
  localization: 'Localization',
  certificate: 'Certificate Service',
  officer: 'Officer Portal',
  form: 'Application Form',
  docs: 'Documentation',
  angular: 'Angular',
  overview: 'Overview',
  demo: 'Live Demo',
  conformance: 'Conformance',
  analytics: 'Analytics',
  adoption: 'Adoption',
  'content-system': 'Content System',
  'form-intelligence': 'Form Intelligence',
  'state-resilience': 'State Resilience',
  multilingual: 'Multilingual',
};

/** Convert a URL segment to a human-readable label. */
function segmentToLabel(segment: string): string {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment];
  // Convert kebab-case to Title Case
  return segment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Routes where the Layout breadcrumb should NOT render (page handles its own). */
const SKIP_PATHS = new Set(['/']);

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  // Don't render on home or skipped paths
  if (SKIP_PATHS.has(pathname)) return null;

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;

  // Build crumb list: Home + each path segment
  const crumbs: { label: string; path: string }[] = [];
  let accumulated = '';
  for (let i = 0; i < segments.length; i++) {
    accumulated += '/' + segments[i];
    crumbs.push({
      label: segmentToLabel(segments[i]),
      path: accumulated,
    });
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-[1600px] px-4 sm:px-6 pt-4 pb-3"
    >
      <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="inline-flex items-center gap-1.5">
              <ChevronRight size={12} className="text-border" aria-hidden />
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="hover:text-primary transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
