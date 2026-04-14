import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * ScrollToTop
 * Resets the window scroll position to the top on every route change.
 * Must be rendered inside the router context (inside RouterProvider).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
