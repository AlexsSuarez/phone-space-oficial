import React from "react";
import "../Hojas-de-estilo/Informador2.css"


let Informador2=()=>{
    return(
            <div  className="Inf2">

                <p className="parrafo2">
                <p>Somos una empresa de expertos en celulares y tecnología móvil, que te asesoramos sobre todo lo que necesitas saber y hacer a la hora de adquirir tu nuevo dispositivo. 😊</p>
                </p>
                <img src={require("../imagenes/1.jpg")} className="img2"/>
            </div>
    )
}

export default Informador2;