import React, { Suspense } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import "../styles/index.css";
import "./i18n/config"; // Initialize i18n

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="p-6 text-sm text-muted-foreground">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}
