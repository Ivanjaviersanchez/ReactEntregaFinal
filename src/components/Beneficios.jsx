
import "./Beneficios.css";

function Beneficios() {
  return (
    <section className="beneficiosContainer">
      <div className="beneficioItem">
        <span role="img" aria-label="Envío gratis" className="beneficioIcon">🚚</span>
        <p>Envío gratis</p>
      </div>
      <div className="beneficioItem">
        <span role="img" aria-label="Devoluciones" className="beneficioIcon">📦</span>
        <p>Devoluciones</p>
      </div>
      <div className="beneficioItem">
        <span role="img" aria-label="Garantía" className="beneficioIcon">🛠</span>
        <p>Garantía</p>
      </div>
    </section>
  );
}

export default Beneficios;
