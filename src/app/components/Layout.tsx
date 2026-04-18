import { Outlet } from "react-router";
import NavigationHeader from "./NavigationHeader";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Breadcrumbs from "./Breadcrumbs";
import AutoTOC, { useAutoTOC } from "./AutoTOC";

export default function Layout() {
  const toc = useAutoTOC();

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

      {toc.visible ? (
        <div className="flex-1 max-w-[1440px] mx-auto w-full px-6 sm:px-8 lg:px-12 py-6 lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
          <aside className="hidden lg:block">
            <AutoTOC items={toc.items} activeId={toc.activeId} />
          </aside>
          <main id="main-content" tabIndex={-1}>
            <Outlet />
          </main>
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
