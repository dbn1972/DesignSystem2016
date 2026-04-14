import { describe, it, expect } from 'vitest';
import {
  ROUTES,
  getApplicationSteps,
  getNextStep,
  getPreviousStep,
  isProtectedRoute,
  isOfficerRoute,
  getBreadcrumbs,
  getRouteMetadata,
} from '../routeConfig';

describe('ROUTES', () => {
  it('HOME is "/"', () => {
    expect(ROUTES.HOME).toBe('/');
  });

  it('CERTIFICATE routes are nested under /reference-service/certificate', () => {
    expect(ROUTES.CERTIFICATE.SIGN_IN).toContain('/reference-service/certificate');
    expect(ROUTES.CERTIFICATE.FORM_PERSONAL).toContain('/reference-service/certificate');
  });
});

describe('getApplicationSteps', () => {
  it('returns 5 steps', () => {
    expect(getApplicationSteps()).toHaveLength(5);
  });

  it('steps are in order from personal to review', () => {
    const steps = getApplicationSteps();
    expect(steps[0].label).toMatch(/Personal/i);
    expect(steps[4].label).toMatch(/Review/i);
  });

  it('each step has a step number, label, and path', () => {
    getApplicationSteps().forEach((step, i) => {
      expect(step.step).toBe(i + 1);
      expect(typeof step.label).toBe('string');
      expect(typeof step.path).toBe('string');
    });
  });
});

describe('getNextStep', () => {
  it('returns the next step path from personal info', () => {
    const next = getNextStep(ROUTES.CERTIFICATE.FORM_PERSONAL);
    expect(next).toBe(ROUTES.CERTIFICATE.FORM_ADDRESS);
  });

  it('returns null from the last step', () => {
    expect(getNextStep(ROUTES.CERTIFICATE.REVIEW_SUMMARY)).toBeNull();
  });

  it('returns null for an unknown path', () => {
    expect(getNextStep('/unknown/path')).toBeNull();
  });
});

describe('getPreviousStep', () => {
  it('returns the previous step path from address', () => {
    const prev = getPreviousStep(ROUTES.CERTIFICATE.FORM_ADDRESS);
    expect(prev).toBe(ROUTES.CERTIFICATE.FORM_PERSONAL);
  });

  it('returns null from the first step', () => {
    expect(getPreviousStep(ROUTES.CERTIFICATE.FORM_PERSONAL)).toBeNull();
  });

  it('returns null for an unknown path', () => {
    expect(getPreviousStep('/unknown/path')).toBeNull();
  });
});

describe('isProtectedRoute', () => {
  it('returns true for a protected route', () => {
    expect(isProtectedRoute(ROUTES.CERTIFICATE.FORM_PERSONAL)).toBe(true);
    expect(isProtectedRoute(ROUTES.CERTIFICATE.MY_APPLICATIONS)).toBe(true);
  });

  it('returns false for a public route', () => {
    expect(isProtectedRoute(ROUTES.CERTIFICATE.SIGN_IN)).toBe(false);
    expect(isProtectedRoute(ROUTES.HOME)).toBe(false);
  });
});

describe('isOfficerRoute', () => {
  it('returns true for officer routes', () => {
    expect(isOfficerRoute(ROUTES.CERTIFICATE.OFFICER_DASHBOARD)).toBe(true);
    expect(isOfficerRoute(ROUTES.CERTIFICATE.OFFICER_CASES)).toBe(true);
  });

  it('returns false for non-officer routes', () => {
    expect(isOfficerRoute(ROUTES.CERTIFICATE.FORM_PERSONAL)).toBe(false);
    expect(isOfficerRoute(ROUTES.HOME)).toBe(false);
  });
});

describe('getBreadcrumbs', () => {
  it('returns foundations breadcrumb for /foundations path', () => {
    const crumbs = getBreadcrumbs('/foundations');
    expect(crumbs.some((c) => c.label === 'Foundations')).toBe(true);
  });

  it('returns components breadcrumb for /components path', () => {
    const crumbs = getBreadcrumbs('/components/button');
    expect(crumbs.some((c) => c.label === 'Components')).toBe(true);
  });

  it('returns certificate service breadcrumb for certificate routes', () => {
    const crumbs = getBreadcrumbs(ROUTES.CERTIFICATE.FORM_PERSONAL);
    expect(crumbs.some((c) => c.label === 'Certificate Service')).toBe(true);
  });

  it('returns empty array for unknown routes', () => {
    expect(getBreadcrumbs('/unknown')).toHaveLength(0);
  });
});

describe('getRouteMetadata', () => {
  it('returns title for known routes', () => {
    const meta = getRouteMetadata(ROUTES.CERTIFICATE.SIGN_IN);
    expect(meta.title).toBeTruthy();
  });

  it('returns default metadata for unknown routes', () => {
    const meta = getRouteMetadata('/unknown/route');
    expect(meta.title).toBe('UX4G Design System');
    expect(meta.requiresAuth).toBe(false);
  });

  it('marks officer dashboard as requiring auth and officer role', () => {
    const meta = getRouteMetadata(ROUTES.CERTIFICATE.OFFICER_DASHBOARD);
    expect(meta.requiresAuth).toBe(true);
    expect(meta.requiresOfficer).toBe(true);
  });

  it('marks sign-in as not requiring auth', () => {
    const meta = getRouteMetadata(ROUTES.CERTIFICATE.SIGN_IN);
    expect(meta.requiresAuth).toBe(false);
  });
});
