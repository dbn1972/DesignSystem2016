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

    // Dynamic page title from pathname
    const base = 'UX4G Design System';
    if (pathname === '/') {
      document.title = base;
    } else {
      const segments = pathname.split('/').filter(Boolean);
      const title = segments
        .map(s => s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '))
        .join(' — ');
      document.title = `${title} | ${base}`;
    }
  }, [pathname]);

  return null;
}
