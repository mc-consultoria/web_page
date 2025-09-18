import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo_mc.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm h-16">
      <div className="w-full flex items-center h-full">
        
        {/* Bloque azul con diagonal */}
        <div
          className="flex items-center justify-center flex-shrink-0 h-full"
          style={{
            width: 420, // ajusta según necesites
            background: "#01395c",
            clipPath: "polygon(0 0, 100% 0, 89% 100%, 0 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 89% 100%, 0 100%)",
          }}
        >
          <Link to="/">
            <img src={logo} alt="MC Consultores" style={{ height: 40 }} />
          </Link>
        </div>

        {/* Menú desktop a la derecha */}
        <div className="hidden lg:flex items-center space-x-6 ml-auto mr-6">
          <Link to="/inicio" className="text-gray-800 hover:text-blue-600">Inicio</Link>
          <Link to="/nosotros" className="text-gray-800 hover:text-blue-600">Nosotros</Link>
          <Link to="/servicios" className="text-gray-800 hover:text-blue-600">Servicios</Link>
          <Link to="/contacto" className="text-gray-800 hover:text-blue-600">Contáctanos</Link>
        </div>

        {/* <div className="hidden lg:block mr-6">
          <Link to="/cotizacion" className="bg-blue-500 text-white px-4 py-2 rounded">Get A Quote</Link>
        </div> */}

        {/* Botón mobile */}
        <div className="lg:hidden ml-auto mr-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-3 space-y-2">
          <Link to="/" className="block text-gray-800 hover:text-blue-600">Inicio</Link>
          <Link to="/nosotros" className="block text-gray-800 hover:text-blue-600">Nosotros</Link>
          <Link to="/servicios" className="block text-gray-800 hover:text-blue-600">Servicios</Link>
          <Link to="/contacto" className="block text-gray-800 hover:text-blue-600">Contáctanos</Link>
          {/* <Link
            to="/cotizacion"
            className="block bg-blue-500 text-white px-3 py-2 rounded text-center hover:bg-blue-600"
          >
            Get A Quote
          </Link> */}
        </div>
      )}
    </nav>
  );
}
