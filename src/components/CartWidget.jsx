import { useCart } from "./CartContext.jsx";
import { Link } from "react-router-dom";
import "./CartWidget.css";

function CartWidget({ onClick }) {

  const { totalItems } = useCart();

  return (
    <div className="CartWidgetStyles" onClick={onClick}>
      <img className="CartStyles" src="/src/assets/icon-1001596_640.png" alt="Carrito" />
      {totalItems > 0 && <span className="Badge">{totalItems}</span>}
    </div>
  );
}

export default CartWidget;
