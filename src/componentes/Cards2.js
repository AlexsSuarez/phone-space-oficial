import React from "react";
import "../Hojas-de-estilo/Cards2.css"

let Cards2=(props)=>{
    return(
        <div className="ContCards">
            <img className="imgCard" src={props.Imagen}/>
            <h3 className="nombreCard">{props.Nombre}</h3>
            <div className="botonCard" ><a href={props.Href}>Mas información</a></div>
        </div>
    )
}

export default Cards2