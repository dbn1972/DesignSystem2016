import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import "../styles/index.css";

export default function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}