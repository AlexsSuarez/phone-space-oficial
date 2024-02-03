import React from "react";
import "../Hojas-de-estilo/Informador.css"


let Informador=()=>{
    return(
            <div  className="Inf">
                <h1>¡Bienvenido!</h1>
                <img src={require("../imagenes/0.jpg")} className="img"/>
                <p className="parrafo">
                <p>¿Quieres estar a la última en celulares, exprimir tu dispositivo al máximo y recibir el mejor asesoramiento para ti? </p><p>Si la respuesta es sí, ¡sigue leyendo! 😉</p>
                </p>
            </div>
    )
}

export default Informador;