import { describe, it, expect } from 'vitest';
import { router } from '../../routes';
import { ROUTE_PATHS, toChildPath } from '../pathSource';

type RouteLike = {
  path?: string;
  children?: RouteLike[];
  index?: boolean;
};

function collectPaths(routes: RouteLike[] = [], acc = new Set<string>()): Set<string> {
  for (const route of routes) {
    if (route.path) {
      acc.add(route.path);
    }
    if (route.children?.length) {
      collectPaths(route.children, acc);
    }
  }
  return acc;
}

describe('route integrity', () => {
  it('includes the canonical high-traffic route paths', () => {
    const paths = collectPaths(((router as any).routes ?? []) as RouteLike[]);

    expect(paths.has(toChildPath(ROUTE_PATHS.FOUNDATIONS.ROOT))).toBe(true);
    expect(paths.has(toChildPath(ROUTE_PATHS.COMPONENTS.ROOT))).toBe(true);
    expect(paths.has(toChildPath(ROUTE_PATHS.PATTERNS.ROOT))).toBe(true);
    expect(paths.has(toChildPath(ROUTE_PATHS.SERVICES.OVERVIEW))).toBe(true);
    expect(paths.has(toChildPath(ROUTE_PATHS.CERTIFICATE.SIGN_IN))).toBe(true);
    expect(paths.has(toChildPath(ROUTE_PATHS.CERTIFICATE.PAYMENT_SUMMARY))).toBe(true);
    expect(paths.has(toChildPath(ROUTE_PATHS.GOVERNANCE.ROOT))).toBe(true);
    expect(paths.has(toChildPath(ROUTE_PATHS.FOUNDATIONS.ACCESSIBILITY))).toBe(true);
  });
});
