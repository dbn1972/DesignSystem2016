import { lazy } from "react";
import type { RouteObject } from "react-router";

import { ROUTE_PATHS, toChildPath } from "../pathSource";

const SystemsHub = lazy(() => import("../../pages/SystemsHub"));
const StateResilienceSystem = lazy(() => import("../../pages/StateResilienceSystem"));

export const systemsRoutes: RouteObject[] = [
  { path: toChildPath(ROUTE_PATHS.SYSTEMS.ROOT), Component: SystemsHub },
  { path: "systems/state-resilience", Component: StateResilienceSystem },
];
