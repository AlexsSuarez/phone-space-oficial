import React from 'react';
import logo from "../imagenes/RRSS/A3.png";
import portafolio from"../imagenes/RRSS/FC1.png"
import "../Hojas-de-estilo/Footer.css"

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure className="fgr">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Nuestra organización ofrece servicios de asesoramiento sobre celulares y tecnología móvil.
          </p>
          <p>
            Nuestro equipo de expertos se especializa en características, funciones y hardware de los
            dispositivos móviles, así como en la actualidad de la industria de los celulares.
          </p>
        </div>
        <div className="box">
          <h2>NUESTROS PROYECTOS</h2>
          <div className="red-social">
            <a href="https://alexander-suarez-portafolio.my.canva.site/daf7cz8a8fg" className="fa fa-facebook">
              <img src={portafolio} alt="Facebook" className="RRSS" />
            </a>
            <a href="https://alexander-suarez-portafolio.my.canva.site/daf7cz8a8fg" className="fa fa-facebook">
              <img src={portafolio} alt="Facebook" className="RRSS" />
            </a>
            <a href="https://alexander-suarez-portafolio.my.canva.site/daf7cz8a8fg" className="fa fa-facebook">
              <img src={portafolio} alt="Facebook" className="RRSS" />
            </a>
            <a href="https://alexander-suarez-portafolio.my.canva.site/daf7cz8a8fg" className="fa fa-facebook">
              <img src={portafolio} alt="Facebook" className="RRSS" />
            </a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>
          © 2024 <b>Phone Space</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
