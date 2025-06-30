import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imgCarrusel1 from '../assets/CarruselComputadoras.jpg';
import imgCarrusel2 from '../assets/CarruselAccesoriosGamer.jpg';
import imgCarrusel3 from '../assets/CarruselAccesoriosInsumos.jpg';


function HomeCarrusel() {
  return (
    <div className="container-fluid mt-4">
      
      {/* Carrusel */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imgCarrusel1} className="CarruselImgStyles" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imgCarrusel2} className="CarruselImgStyles" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imgCarrusel3} className="CarruselImgStyles" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
     
    </div>
  )
}

export default HomeCarrusel