import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="NavStyles">
        {/* Sección izquierda: menú hamburguesa */}
        <div className="NavLeft">
          <button className="Hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {/* Sección centro: logo */}
        <div className="NavCenter">
          <a className="LogoStyles" href="#">
            <img className="LogoImgStyles" src={logo} alt="logo" />
            <p className="LogoText">TecnoBox</p>
          </a>
        </div>

        {/* Menú desplegable */}
        <ul className={`NavLinks ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link></li>
          <li><Link to="/catalogo" onClick={() => setMenuOpen(false)}>Catálogo</Link></li>
          <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        </ul>

        {/* Sección derecha: carrito */}
        <div className="NavRight">
          <CartWidget />
        </div>

      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;


