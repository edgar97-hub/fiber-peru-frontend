import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'
import './footer.scss'
import img from '../../../assets/images/logo2-1.png'

function Footer() {
  return (
    <div className="companies-footer">
      <div className="linksWrapper">
        <div className="items">
          <div className="title">Contacto</div>
          <div className="link">
            Llámanos Central telefónica (511) 500 3400 Atención Técnica 0800 700
            40
          </div>
          <div className="link">Escríbenos contacto@winempresas.pe</div>
          <div className="link">
            Dirección Av. Jose Galvez Barrenechea Nro. 645 Urb. Corpac Lima -
            Lima - San Borja
          </div>
        </div>
        <div className="items">
          <div className="title">Conócenos</div>
          <div className="link">&#8226; ¿Quiénes somos?</div>
          <div className="link">&#8226; Cobertura en fibra óptica</div>
          <div className="link">&#8226; Trabaja con nosotros</div>
          <div className="link">&#8226; Beneficios</div>
          <div className="link">&#8226; Obras por impuesto</div>
          <div className="link">&#8226; Código Ético</div>
        </div>

        <div className="items">
          <div className="title">Información para abonados y usuarios</div>
          <div className="link">&#8226; Servicios</div>
          <div className="link">&#8226; Conectividad</div>
          <div className="link">
            &#8226; Servicios Gestionados
          </div>
          <div className="link">&#8226; Telefonia y CCUU</div>
        </div>

        <div className="items">
          <div className="title">Contáctanos</div>
          <div className="link">&#8226; Atención de reclamos</div>
          <div className="link">&#8226; Solicitudes en línea</div>
        </div>
      </div>
      <div className="socialMedia">
        <div className="websiteRights">
          Copyright © 2023 company. Todos los derechos reservados.
        </div>
        <div className="socialIcons">
          <a
            className="socialIconLink"
            href="//www.youtube.com/channel/test"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="socialIconLink"
            href="//www.youtube.com/channel/test"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="socialIconLink"
            href="//www.youtube.com/channel/test"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaYoutube />
          </a>
          <a
            className="socialIconLink"
            href="//www.youtube.com/channel/test"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            className="socialIconLink"
            href="//www.youtube.com/channel/test"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
