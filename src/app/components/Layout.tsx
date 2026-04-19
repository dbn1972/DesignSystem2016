import { Outlet, useLocation } from "react-router";
import NavigationHeader from "./NavigationHeader";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Breadcrumbs from "./Breadcrumbs";
import ComponentSidebar from "./ComponentSidebar";
import ComponentPageTOC from "./ComponentPageTOC";

export default function Layout() {
  const { pathname } = useLocation();
  const isComponentPage = pathname.startsWith('/components/') && pathname !== '/components' && !pathname.includes('/sandbox');

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden" style={{ scrollPaddingTop: '5rem' }}>
      {/* Skip to main content — WCAG 2.4.1 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#005196] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <NavigationHeader />
      <Breadcrumbs />

      {isComponentPage ? (
        <div className="flex-1 max-w-[1800px] mx-auto w-full flex">
          <ComponentSidebar />
          <main id="main-content" className="flex-1 min-w-0" tabIndex={-1}>
            <Outlet />
          </main>
          <ComponentPageTOC />
        </div>
      ) : (
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Outlet />
        </main>
      )}

      <Footer />
    </div>
  );
}
