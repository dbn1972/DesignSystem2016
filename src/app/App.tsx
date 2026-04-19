import React, { Suspense } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./contexts/theme";
import { A11yToolkit } from "./accessibility-toolkit/react";
import "./accessibility-toolkit/core/styles/a11y-global.css";
import "./accessibility-toolkit/core/styles/a11y-panel.css";
import "../styles/index.css";
import "./i18n/config"; // Initialize i18n

export default function App() {
  return (
    <ThemeProvider defaultTheme="default" defaultColorScheme="system">
      <A11yToolkit
        config={{
          launcherPosition: "bottom-right",
          storageKey: "ux4g-a11y",
          skipToContentSelector: "#main-content",
          respectReducedMotion: true,
        }}
      >
        <Suspense fallback={<div className="p-6 text-sm text-muted-foreground">Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </A11yToolkit>
    </ThemeProvider>
  );
}
