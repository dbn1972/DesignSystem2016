import { lazy } from "react";
import type { RouteObject } from "react-router";

import { ROUTE_PATHS, toChildPath } from "../pathSource";

const Governance = lazy(() => import("../../pages/Governance"));
const SiteMap = lazy(() => import("../../pages/SiteMap"));
const Adoption = lazy(() => import("../../pages/Adoption"));
const ConformanceDashboard = lazy(() => import("../../pages/ConformanceDashboard"));
const ServiceAnalytics = lazy(() => import("../../pages/ServiceAnalytics"));
const SecurityPolicy = lazy(() => import("../../pages/SecurityPolicy"));
const CodeOfConduct = lazy(() => import("../../pages/CodeOfConduct"));
const Contributing = lazy(() => import("../../pages/Contributing"));
const Copyright = lazy(() => import("../../pages/Copyright"));
const Disclaimer = lazy(() => import("../../pages/Disclaimer"));
const PrivacyPolicy = lazy(() => import("../../pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("../../pages/TermsOfUse"));
const Contact = lazy(() => import("../../pages/Contact"));

export const governanceRoutes: RouteObject[] = [
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.ROOT), Component: Governance },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.SITE_MAP), Component: SiteMap },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.ADOPTION), Component: Adoption },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.CONFORMANCE), Component: ConformanceDashboard },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.ANALYTICS), Component: ServiceAnalytics },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.SECURITY_POLICY), Component: SecurityPolicy },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.CODE_OF_CONDUCT), Component: CodeOfConduct },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.CONTRIBUTING), Component: Contributing },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.COPYRIGHT), Component: Copyright },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.DISCLAIMER), Component: Disclaimer },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.PRIVACY_POLICY), Component: PrivacyPolicy },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.TERMS_OF_USE), Component: TermsOfUse },
  { path: toChildPath(ROUTE_PATHS.GOVERNANCE.CONTACT), Component: Contact },
];
