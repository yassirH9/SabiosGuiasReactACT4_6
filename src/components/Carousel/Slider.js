import React, { useState } from "react";
import ImgComp from "./ImgComp";
import './Slider.scss';

//importacion de iconos
import left_icon from "../../SVG/left-arrow.png";
import right_icon from "../../SVG/right-arrow.png";

function Slider() {
    //json para slider
    var sliderArr = [
        {
            img: 'https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/12/slide19_hola.jpg',
            alt: 'Imagen slider: Bienvenido a las nuevas rutas.'
        },
        {
            img: 'https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/banner.jpg',
            alt: 'Imagen slider: Vidas sabias'
        },
        {
            img: 'https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/promovs2.png',
            alt: 'Imagen slider: Rutas de las 8 islas'
        },
        {
            img: 'https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/12/slide19_lpa.jpg',
            alt: 'Imagen slider: Nueva ruta en Las Palmas de Gran Canarias'
        },
        {
            img: 'https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/07/banner_trans_ins.png',
            alt: 'Imagen slider: Guia insular de Gan Canarias'
        }
    ];

    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
        //setX(x + 100)
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
        //setX(x - 100)
    };
    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <>
                            <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                               
                                <ImgComp src={item.img} alt={item.alt}/>
                            </div>
                        </>
                    );
                })}
            <button id="goLeft" onClick={goLeft}><img className="img-left" src={left_icon} /></button>
            <button id="goRight" onClick={goRight}><img className="img-right" src={right_icon} /></button>
        </div>
    );
}
export default Slider;