import { Outlet } from "react-router";
import NavigationHeader from "./NavigationHeader";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground" style={{ scrollPaddingTop: '5rem' }}>
      <ScrollToTop />
      <NavigationHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
