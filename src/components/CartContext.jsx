// src/context/CartContext.js
import { createContext, useContext, useState } from "react";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import Swal from "sweetalert2";

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto fácilmente
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar al carrito
  const addToCart = (producto, cantidad = 1) => {
    const productoExistente = cart.find((item) => item.id === producto.id);

    if (productoExistente) {
      setCart(cart.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      ));
    } else {
      setCart([...cart, { ...producto, cantidad }]);
    }
  };

  // Eliminar un producto
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Calcular total de ítems
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
