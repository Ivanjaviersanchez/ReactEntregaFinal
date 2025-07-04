import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams, useNavigate, useLocation} from "react-router-dom"; 
import Swal from "sweetalert2";
import { useCart } from "./CartContext";
import "./DetalleProducto.css";

function DetalleProducto() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();  
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", id);

    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          setProducto(null);
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const incrementar = () => {
    if (cantidad < producto.stock) {
      setCantidad((prev) => prev + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad((prev) => prev - 1);
    }
  };

  const agregarAlCarrito = () => {
    addToCart(producto, cantidad);

    Swal.fire({
      title: '¡Producto agregado!',
      text: `Agregaste ${cantidad} unidad(es) de "${producto.title}" al carrito.`,
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 3000,
      timerProgressBar: true
    }).then(() => {
      if (location.state?.from === "home") {
        navigate("/");       // Redirige a home si estaba ahi
      } else {
        navigate("/catalogo");   // Sino redirige a catalogo
      }
    });
  };

  if (loading) return <h2>Cargando producto...</h2>;
  if (!producto) return <h2>El producto no existe</h2>;

  return (
  <div className="cardDetalleProducto">
    <h3>Detalles de producto</h3>
    <h3>{producto.title}</h3>
    
    <div className="detalleContenido">
      <div className="detalleImagen">
        <img src={producto.imageId} alt={producto.title} className="detalleImg" />
      </div>

      <div className="detalleInfo">
        <h3>{producto.description}</h3>
        <h3>Precio: ${producto.price}</h3>
        <h3>Stock disponible: {producto.stock} unid.</h3>

        <div className="contador">
          <button onClick={decrementar}>-</button>
          <span>{cantidad}</span>
          <button onClick={incrementar}>+</button>
        </div>

        <button className="btnCarrito" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
      </div>
    </div>
  </div>
);
}

export default DetalleProducto;


