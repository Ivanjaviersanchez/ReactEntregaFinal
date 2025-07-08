import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CartWidget from "./CartWidget";
import Cart from "./Cart";
import Footer from "./Footer";
import logo from "../assets/logo.png";
import "./Layout.css";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <div>
      {/* Variable de entorno */}
      <p className="variableEntornoStyles">{import.meta.env.VITE_MENSAJE}</p>

      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="logo" className="navbar-logo" />
            <span className="navbar-title">TecnoBox</span>
          </Link>

          {/* Botón hamburguesa (mobile) */}
          <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {/* Enlaces */}
          <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link>
            </li>
            <li>
              <Link to="/catalogo" onClick={() => setMenuOpen(false)}>Catálogo</Link>
            </li>
            <li>
              <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            </li>
          </ul>

          {/* Icono Carrito */}
          <div className="navbar-cart">
            <CartWidget onClick={() => setCartVisible(true)} />
          </div>
        </div>
      </nav>

      {/* Fondo oscurecido */}
      {cartVisible && (
        <div className="CartOverlay" onClick={() => setCartVisible(false)}></div>
      )}

      {/* Sidebar del carrito */}
      <div className={`CartSidebar ${cartVisible ? "open" : ""}`}>
        <button className="CloseBtn" onClick={() => setCartVisible(false)}>
          X
        </button>
        <Cart />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
