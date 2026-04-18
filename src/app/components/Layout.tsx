import { Outlet } from "react-router";
import NavigationHeader from "./NavigationHeader";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Breadcrumbs from "./Breadcrumbs";
import AutoTOC from "./AutoTOC";

export default function Layout() {
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
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <AutoTOC />
      <Footer />
    </div>
  );
}
