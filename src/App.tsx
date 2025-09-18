import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";

import HomePage from "./pages/landing/HomePage";
import AboutPage from "./pages/landing/AboutPage";
import ServicesPage from "./pages/landing/ServicesPage";
import ContactPage from "./pages/landing/ContactPage";
import WhatsAppButton from "./components/whatsapp";

function App() {
  return (
    <>
      <WhatsAppButton />
      <Routes>
        {/* Redirección automática de "/" a "/inicio" */}
        <Route path="/" element={<Navigate to="/inicio" replace />} />

        {/* Layout Público con Navbar + Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
