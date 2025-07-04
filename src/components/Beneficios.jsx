import "./Beneficios.css";
import { FaMoneyCheckAlt, FaStore, FaWhatsapp, FaCreditCard } from "react-icons/fa";

function Beneficios() {
  return (
    <section className="beneficiosContainer">
      <div className="beneficioCard">
        <FaCreditCard className="icon" />
        <h3>Descuento exclusivo</h3>
        <p>Pagando con <strong>Transferencia Bancaria</strong>.</p>
      </div>

      <div className="beneficioCard">
        <FaMoneyCheckAlt className="icon" />
        <h3>Crédito TecnoBox</h3>
        <p>Solicitá tu crédito y <strong>disfrutá nuestros beneficios</strong>.</p>
      </div>

      <div className="beneficioCard">
        <FaWhatsapp className="icon" />
        <h3>¿Tenés dudas?</h3>
        <p>Escribinos por WhatsApp:</p>
        <a 
          href="https://wa.me/549223543210" 
          className="whatsappButton" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          📲 223 543210
        </a>
      </div>

      <div className="beneficioCard">
        <FaStore className="icon" />
        <h3>Retiro sin cargo</h3>
        <p>En nuestras <strong>sucursales</strong>.</p>
      </div>
    </section>
  );
}

export default Beneficios;

