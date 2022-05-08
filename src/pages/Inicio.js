import { infoRoutes } from "../components/infoRoutes";
import Footer from "../components/Footer";
import "./Inicio.scss";
import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Carousel/Slider";


export default function AllRoutes() {
  const navigate = useNavigate();

  const selectStop = (stop) => {
    navigate(`/route-detail/${stop - 1}`);
  }

  const showRoute = (r, index) => {
    return (
      <div key={index} className="all-routes-route-container" onClick={() => selectStop(r.id)}>
        <div className="all-routes-route-id" style={{ backgroundColor: r.color }}>{r.id}</div>
        <div className="all-routes-route-name-and-description">
          <div className="all-routes-route-name">{r.name}</div>
          <div className="all-routes-route-description">{r.description}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <Slider/>
      <img src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/cabecera-2048x325.png"/>
      <h4>Es un programa intergeneracional de promoción del patrimonio y la cultura a través de la sabiduría de las personas mayores.</h4>
      <br/>
      <h4>Guiar y saber interpretar el paisaje y su historia acercándolo de forma peculiar a todos los públicos, es una labor que los Sabios Guías Intérpretes desarrollan con gran orgullo y capacidad.</h4>

      <Footer />
    </>
  );
}