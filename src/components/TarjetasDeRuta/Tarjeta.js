import React from 'react';
import './Tarjeta.scss'
export default function Tarjeta(props) {

    return (
        <>
            <div class="card" key={props.key}>
                <img src={props.src} alt={props.alt} />
                <div class="container" className='cardText'>
                    <h4><b>{props.title}</b></h4>
                    <p>{props.txt}</p>
                    <form action={props.link}>
                        <input className='button' type="submit" value="Ver ruta" />
                    </form>
                </div>
            </div>
        </>
    );
}