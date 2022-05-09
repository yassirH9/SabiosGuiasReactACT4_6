import React from "react";
import './Slider.scss'
function ImgComp({ src, alt }) {
    return (
        <>
            <img className="slideimg" src={src} alt={alt} />
        </>
    );
}
export default ImgComp;