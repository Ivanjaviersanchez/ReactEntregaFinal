import { useEffect } from "react";
import HomeCarrusel from "./HomeCarrusel";
import DestacadosPorCategoria from "./DestacadosPorCategoria";
import Beneficios from "./Beneficios";
import BannerCTA from "./BannerCTA";
import "./Home.css"

function Home() {

  useEffect(() => {
    
    const savedScroll = sessionStorage.getItem("scrollHome");
    if (savedScroll) {
      window.scrollTo({ top: parseInt(savedScroll), behavior: "smooth" });
      sessionStorage.removeItem("scrollHome"); // Limpieza
    }
  }, []);

  return (
    <div>
      <HomeCarrusel/>
      <Beneficios/>
      <DestacadosPorCategoria/>
      <BannerCTA/>
    </div> 
  );
}

export default Home;
