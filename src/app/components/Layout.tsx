import { Outlet } from "react-router";
import NavigationHeader from "./NavigationHeader";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavigationHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}