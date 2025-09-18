import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo_mc.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm h-16">
      <div className="w-full flex items-center h-full">
        {/* Bloque azul con diagonal (más largo en mobile) */}
        <div
          className="flex items-center justify-center flex-shrink-0 h-full"
          style={{
            width: "clamp(260px, 48%, 440px)", // 👈 ancho mínimo mayor y max un poco más grande
            background: "#01395c",
            clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)", // diagonal un poco más suave
            WebkitClipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
          }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="MC Consultores"
              className="h-9 sm:h-10 md:h-11" // logo un poquito más alto en móvil
            />
          </Link>
        </div>

        {/* Menú desktop */}
        <div className="hidden lg:flex items-center space-x-6 ml-auto mr-6">
          <Link to="/inicio" className="text-gray-800 hover:text-blue-600">Inicio</Link>
          <Link to="/nosotros" className="text-gray-800 hover:text-blue-600">Nosotros</Link>
          <Link to="/servicios" className="text-gray-800 hover:text-blue-600">Servicios</Link>
          <Link to="/contacto" className="text-gray-800 hover:text-blue-600">Contáctanos</Link>
        </div>

        {/* Botón mobile */}
        <div className="lg:hidden ml-auto mr-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-3 space-y-2 shadow-md">
          <Link to="/inicio" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/nosotros" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Nosotros</Link>
          <Link to="/servicios" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link to="/contacto" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contáctanos</Link>
        </div>
      )}
    </nav>
  );
}
