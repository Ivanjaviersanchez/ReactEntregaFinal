import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import cartIcon from "../assets/icon-1001596_640.png";
import "./CartWidget.css";

function CartWidget({ onClick }) {
  const { totalItems } = useCart();

  return (
    <div className="CartWidgetStyles" onClick={onClick}>
      <img className="CartStyles" src={cartIcon} alt="Carrito" />
      {totalItems > 0 && <span className="Badge">{totalItems}</span>}
    </div>
  );
}

export default CartWidget;

