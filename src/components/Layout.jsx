import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CartWidget from "./CartWidget";
import Cart from "./Cart";
import logo from "../assets/logo.png";
import "./Layout.css";

function Layout() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

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
          <CartWidget onClick={() => setCartVisible(true)}/>
        </div>
      </nav>

      {/* Fondo oscurecido */}
      {cartVisible && <div className="CartOverlay" onClick={() => setCartVisible(false)}></div>}

      {/* Sidebar del carrito */}
      <div className={`CartSidebar ${cartVisible ? "open" : ""}`}>
        <button className="CloseBtn" onClick={() => setCartVisible(false)}>X</button>
        <Cart />
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;


