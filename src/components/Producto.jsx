import { Link } from "react-router-dom";
import "./Producto.css";

function Producto({ producto, descripcion, precio, imagen, id }) {
  return (
    <div className="cardProducto">
      <Link to={`/catalogo/${id}`}>
        <h3>{producto}</h3>
        <p>{descripcion}</p>
        <img src={`/img/${imagen}`} alt={producto} />
        <h4>Precio: ${precio}</h4>
      </Link>
    </div>
  );
}

export default Producto;
