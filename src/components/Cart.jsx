import { useCart } from "./CartContext";
import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import Swal from "sweetalert2";
import "./Cart.css"; 

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [pedidoRealizado, setPedidoRealizado] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  useEffect(() => {
    if (cart.length > 0) {
      setPedidoRealizado(false);
    }
  }, [cart]);

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
      clearCart();
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
    <div className="cartContainer">
      <h2>🛒 Carrito de compras</h2>
      {cart.length === 0 ? (
        <p className="emptyCart">El carrito está vacío</p>
      ) : (
        <>
          <div className="cartItems">
            {cart.map((item) => (
              <div className="cartItemCard" key={item.id}>
                <h3>{item.title}</h3>
                <img src={item.imageId} alt={item.title} className="cartItemImg" />
                <div className="itemDetails">
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Subtotal: ${item.price * item.cantidad}</p>
                </div>
                <button className="btnEliminar" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            ))}
          </div>
          <div className="cartResumen">
            <h3>Total a pagar: <span>${total}</span></h3>
            <div className="cartButtons">
              <button className="btnVaciar" onClick={clearCart}>Vaciar carrito</button>
              <button className="btnFinalizar" onClick={crearPedido}>Finalizar compra</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

