
import "./BannerCTA.css";
import bannerPromo1 from "../assets/SMARTWATCH-COLMI-P76.jpg";
import bannerPromo2 from "../assets/CAMARA-GOPLUS-CAMPRO-4K.jpg";
import bannerPromo3 from "../assets/MICROFONO-YANMAI-SF-666R.jpg";

function BannerCTA() {
  return (
    <section className="bannerCTAContainer">
        <div className="bannerText">
            <h2>Descubrí nuestras promociones exclusivas del mes</h2>
        </div>
        <img src={bannerPromo1} alt="Promociones exclusivas" className="bannerImage" />
        <img src={bannerPromo2} alt="Promociones exclusivas" className="bannerImage" />
        <img src={bannerPromo3} alt="Promociones exclusivas" className="bannerImage" />

    </section>
  );
}

export default BannerCTA;
