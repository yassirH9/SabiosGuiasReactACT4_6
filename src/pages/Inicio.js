import { infoRoutes } from "../components/infoRoutes";
import Footer from "../components/Footer";
import "./Inicio.scss";
import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Carousel/Slider";

import Tarjeta from '../components/TarjetasDeRuta/Tarjeta';
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
    const CARDS = [
        {
            src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1044773304-1-1620987041.jpg?crop=0.667xw:1.00xh;0.133xw,0&resize=640:*',
            alt: 'aguimes',
            title: 'Ruta Agüimes',
            txt: 'Ruta por el casco histórico de Agüimes realizando las 5 paradas...',
            link: 'http://localhost:3000/route-detail/0',
        },
        {
            src: 'https://static1.elcorreo.com/www/pre2017/multimedia/noticias/201606/30/media/cortadas/risco-kOKG-U2011865623975yE-575x380@El%20Correo.jpg',
            alt: 'Las palmas de gc',
            title: 'Ruta Las Palmas GC',
            txt: 'Ruta por Las Palmas de GC teniendo en cuenta los siguientes puntos de interés...',
            link: 'http://localhost:3000/route-detail/1',
        },
        {
            src: 'https://pm1.narvii.com/8183/c8ce7cd5e339e9902696668a7b74a45ac0e10ad2r1-1280-720v2_hq.jpg',
            alt: 'Tras las huellas británicas',
            title: 'Tras las huellas británicas',
            txt: 'Tras las Huellas Británicas es una ruta por Ciudad Jardín (Las Palmas de G.C.) donde se destacan visitan los principales elementos que recuerdan a día de hoy el pasado británico de la ciudad...',
            link: 'http://localhost:3000/route-detail/2',
        },
        {
            src: 'https://estaticos-cdn.prensaiberica.es/clip/4ba6d4cf-0077-4efc-90b5-4292a98ab226_16-9-aspect-ratio_default_1033836.jpg',
            alt: 'Domingo J Navarro',
            title: 'Inmersión Lingüística',
            txt: 'Ruta de inmersión lingüística Canaria, en la que a través de personajes relevantes de nuestra literatura...',
            link: 'http://localhost:3000/route-detail/3',
        },
        {
            src: 'https://static2.canarias7.es/www/multimedia/202006/09/media/cortadas/jardin_6562163_20200609174532--624x351.jpg',
            alt: 'Jardín Canario',
            title: 'Jardín Canario',
            txt: 'Ruta por el Jardín Canario realizando las 3 paradas que constituyen nuestra visita...',
            link: 'http://localhost:3000/route-detail/4',
        },
        {
            src: 'http://www.gevic.net/multimedia/imagenes/Gran_Canaria/mundo_rural/actualidad/El-Hierro.-Foto-Yuri-Millar.jpg',
            alt: 'Aguimes transhumante',
            title: 'Transhumancia',
            txt: 'Ruta por el casco histórico de Agüimes realizando las 5 paradas que constituyen nuestra visita...',
            link: 'http://localhost:3000/route-detail/5',
        },
    ]
    return (
        <>
            <ScrollToTop />
            <Header />
            <Slider />
            <div className="texts">
                <img className="dsgi" src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/cabecera-2048x325.png" />
                <h3>Es un <b>programa intergeneracional</b> de promoción del patrimonio y la cultura a través de la sabiduría de las personas mayores.</h3>
                <br />
                <h3><b>Guiar</b> y <b>saber interpretar</b> el paisaje y su historia acercándolo de forma peculiar a todos los públicos, es una labor que los <b>Sabios Guías Intérpretes</b> desarrollan con gran orgullo y capacidad.</h3>
            </div>
            <div className="display">
                <div className="texts">
                    <div><img className="img-container" src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/educacion_icon.png" /></div>
                    <h3>El proyecto Sabios Guías Intérpretes pretende acercarse aun más a la población juvenil a través del Programa enSeñas con el objetivo de incorporar de manera integral nuestros valores históricos, culturales y patrimoniales a la práctica educativa, entendida en su generalidad: formal, no formal e informal.</h3>
                </div>
                <div className="texts">
                    <div><img className="img-container" src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/guias_icon-copia.png" /></div>
                    <h3>Te proponemos una nueva forma de recorrer nuestros pueblos y municipios. De la mano de nuestros mayores podrás vivir de primera mano los usos originales de los lugares de interés y sus vivencias de antaño. Disfruta de la Naturaleza y también de la Historia.</h3>
                </div>
                <div className="texts">
                    <div><img className="img-container" src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/vidassabias_icon-copia.png" /></div>
                    <h3>Vidas Sabias nace con el objetivo de fomentar la recopilación audiovisual del patrimonio cultural inmaterial que las personas de Canarias nos aportan. Un reconocimiento al valor del saber popular y que no está escrito. Necesario para conocer y entender la riqueza cultural que nos rodea.</h3>
                </div>
            </div>
            <div className="vid-display">
                <iframe className="responsive-iframe" src="https://www.youtube.com/embed/Ztg7kqNP8DE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="container-tarjeta">
                {
                    CARDS.map((item, index) => {
                        return (
                            <>
                                <Tarjeta key={index} src={item.src} alt={item.alt} title={item.title} link={item.link} txt={item.txt} />
                            </>
                        );
                    })
                }
            </div>
            <Footer />
        </>
    );
}