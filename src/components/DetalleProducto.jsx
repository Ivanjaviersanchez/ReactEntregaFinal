import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./DetalleProducto.css";


/*  MUESTRA LOS DETALLES DE CADA PRODUCTO   */

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);

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

  if (loading) {
    return <h2>Cargando producto...</h2>;
  }
  if (!producto) {
    return <h2>El producto seleccionado no existe</h2>;
  }

  const incrementar = () => {
    if (cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    Swal.fire({
      title: '¡Producto agregado!',
      text: `Agregaste ${cantidad} unidad(es) de "${producto.title}" al carrito.`,
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 3000,
      timerProgressBar: true
    });
  };

  return (
    <div className="cardDetalleProducto">
      <h2>Detalles de producto</h2>
      <h3>Producto: {producto.title}</h3>
      <img src={`/img/${producto.imageId}`} alt={producto.title} />
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
  );
}

export default DetalleProducto;
