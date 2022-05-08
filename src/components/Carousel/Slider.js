import React, { useState } from "react";
import ImgComp from "./ImgComp";
import './Slider.scss';

//importacion de iconos
import left_icon from "../../SVG/left-arrow.png";
import right_icon from "../../SVG/right-arrow.png";

function Slider() {
    //let array para componente este contendra lo que se mostrara en el slider
    let sliderArr = [
    <ImgComp src={'https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/12/slide19_hola.jpg'}/>, 
    <ImgComp src={'https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/banner.jpg'}/>,
    <ImgComp src={'https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/02/promovs2.png'}/>,
    <ImgComp src={'https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/12/slide19_lpa.jpg'}/>,
    <ImgComp src={'https://www.sabiosguiasinterpretes.com/wp-content/uploads/2021/07/banner_trans_ins.png'}/>,]

    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length -1)) : setX(x+100);
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
                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    );
                })}
            <button id="goLeft" onClick={goLeft}><img className="img-left" src={left_icon}/></button>
            <button id="goRight" onClick={goRight}><img className="img-right" src={right_icon}/></button>
        </div>
    );
}
export default Slider;