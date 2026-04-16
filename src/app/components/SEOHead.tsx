/**
 * SEOHead — Reusable SEO metadata component.
 * Updates document.title and meta tags on mount.
 *
 * Usage:
 *   <SEOHead title="Components" description="77 production-ready components" />
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOHeadProps {
  title?: string;
  description?: string;
  noindex?: boolean;
}

const BASE_TITLE = 'UX4G Design System';
const BASE_URL = 'https://designsystem.dl6.in';
const DEFAULT_DESC = "India's open-source design system for building consistent, accessible digital public services.";

export default function SEOHead({ title, description, noindex }: SEOHeadProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Title
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;

    // Description
    const desc = description || DEFAULT_DESC;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = `${BASE_URL}${pathname}`;
    }

    // OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title ? `${title} | ${BASE_TITLE}` : BASE_TITLE);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', desc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `${BASE_URL}${pathname}`);

    // Twitter
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title ? `${title} | ${BASE_TITLE}` : BASE_TITLE);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', desc);

    // Robots
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) {
      robots.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');
    }
  }, [title, description, pathname, noindex]);

  return null;
}
