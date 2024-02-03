import React from "react";
import "../Hojas-de-estilo/Informador3.css"
import { animateScroll } from "react-scroll"


const Subir =()=>{
  animateScroll.scrollToTop();
}

let Informador3=()=>{

  return(
      <div className="Inf3">
          <div className="block">
          <p>Aquí encontrarás lo último en tecnología, diseño y rendimiento. Desde smartphones hasta laptops, tenemos el dispositivo perfecto para ti. No esperes más y haz clic en el botón y desplega la barra lateral para descubrir todas las opciones que te ofrecemos. ¡Te sorprenderás! 😊</p>
          <div class="wrapper">
<button onClick={Subir}>
¡Click! 
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</button>
</div>
          </div>
      </div>
  )
}

export default Informador3;
