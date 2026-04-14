import { lazy } from "react";
import type { RouteObject } from "react-router";

import { ROUTE_PATHS, toChildPath } from "../pathSource";

const Foundations = lazy(() => import("../../pages/Foundations"));
const Accessibility = lazy(() => import("../../pages/Accessibility"));
const ContentDesignSystem = lazy(() => import("../../pages/ContentDesignSystem"));

export const foundationsRoutes: RouteObject[] = [
  { path: toChildPath(ROUTE_PATHS.FOUNDATIONS.ROOT), Component: Foundations },
  { path: toChildPath(ROUTE_PATHS.FOUNDATIONS.ACCESSIBILITY), Component: Accessibility },
  { path: toChildPath(ROUTE_PATHS.FOUNDATIONS.CONTENT_SYSTEM), Component: ContentDesignSystem },
];

