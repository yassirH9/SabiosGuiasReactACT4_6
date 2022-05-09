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
            <Slider />
            <div>
                <img className="dsgi" src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/cabecera-2048x325.png" />
                <h3>Es un <b>programa intergeneracional</b>de promoción del patrimonio y la cultura a través de la sabiduría de las personas mayores.</h3>
                <br />
                <h3><b>Guiar</b> y <b>saber interpretar</b> el paisaje y su historia acercándolo de forma peculiar a todos los públicos, es una labor que los <b>Sabios Guías Intérpretes</b> desarrollan con gran orgullo y capacidad.</h3>
            </div>
            <div className="display">
                <div>
                    <div><img className="img-container" src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/educacion_icon.png" /></div>
                    <h3>El proyecto Sabios Guías Intérpretes pretende acercarse aun más a la población juvenil a través del Programa enSeñas con el objetivo de incorporar de manera integral nuestros valores históricos, culturales y patrimoniales a la práctica educativa, entendida en su generalidad: formal, no formal e informal.</h3>
                </div>
                <div>
                    <div><img className="img-container" src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/guias_icon-copia.png" /></div>
                    <h3>Te proponemos una nueva forma de recorrer nuestros pueblos y municipios. De la mano de nuestros mayores podrás vivir de primera mano los usos originales de los lugares de interés y sus vivencias de antaño. Disfruta de la Naturaleza y también de la Historia.</h3>
                </div>
                <div>
                    <div><img className="img-container" src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/vidassabias_icon-copia.png" /></div>
                    <h3>Vidas Sabias nace con el objetivo de fomentar la recopilación audiovisual del patrimonio cultural inmaterial que las personas de Canarias nos aportan. Un reconocimiento al valor del saber popular y que no está escrito. Necesario para conocer y entender la riqueza cultural que nos rodea.</h3>
                </div>
            </div>
            <div className="vid-display">
                <iframe className="responsive-iframe" src="https://www.youtube.com/embed/Ztg7kqNP8DE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Footer />
        </>
    );
}