import { useCart } from "./CartContext";
import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import Swal from "sweetalert2";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [pedidoRealizado, setPedidoRealizado] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  useEffect(() => {
    if (cart.length > 0) {
      setPedidoRealizado(false);
    }
  }, [cart]);

   // Crear pedidos
  const crearPedido = async () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    const pedido = {
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        cantidad: item.cantidad,
        precio: item.price
      })),
      total: total,
      fecha: Timestamp.now()
    };

    try {
      const docRef = await addDoc(ordersCollection, pedido);
      Swal.fire({
        title: '¡Pedido realizado!',
        text: `Tu pedido fue guardado con el ID: ${docRef.id}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      clearCart(); // Vaciar carrito después del pedido
    } catch (error) {
      console.error("Error al guardar el pedido:", error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al realizar tu pedido',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} x {item.cantidad} = ${item.price * item.cantidad}
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h4>Total: ${total}</h4>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
      {cart.length > 0 && !pedidoRealizado && (
        <button onClick={crearPedido}>Finalizar compra</button>
      )}
    </div>
  );
}

export default Cart;
