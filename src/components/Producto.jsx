import { Link } from "react-router-dom";
import "./Producto.css";

function Producto({ producto, descripcion, precio, imagen, id, variant = "default" }) {
  const handleClick = () => {
    const scrollY = window.scrollY;
    sessionStorage.setItem("scrollHome", scrollY);
  };

  return (
    <div className={`cardProducto ${variant === "destacado" ? "cardDestacado" : ""}`}>
      <Link to={`/catalogo/${id}`} onClick={handleClick} state={{ from: "home" }}>
        <h3 className="productoTitulo">{producto}</h3>
        <p className="productoDescripcion">{descripcion}</p>
        <img src={`/img/${imagen}`} alt={producto} className="productoImg" />
        <h4 className="productoPrecio">Precio: ${precio}</h4>
      </Link>
    </div>
  );
}

export default Producto;

