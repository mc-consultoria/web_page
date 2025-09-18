import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 👇 Ahora la app está envuelta en BrowserRouter con basename */}
    <BrowserRouter basename="/web_page">
      <App />
    </BrowserRouter>
  </StrictMode>
);
