import React from "react";
import "../Hojas-de-estilo/Cards.css"


let Cards=(props)=>{
    return(
            <div  className="Inf0">
                <img src={require(`../imagenes/Mejores/${props.Imagen}.jpg`)} className="img0"/>
            </div>
    )
}

export default Cards;