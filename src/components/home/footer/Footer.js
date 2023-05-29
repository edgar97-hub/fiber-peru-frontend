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
    <div className="footerWrapper">
      <div className="linksWrapper">
        <div className="items">
          <div className="ss">
            <img className="img" src={img} alt={''} />{' '}
          </div>
        </div>

        <div className="items">
          <div className="title">Contacto</div>
          <div className="link">direccion fiscal</div>
          <div className="link">Av. Republica de Panama Nro. 9999 - 9999</div>
          <div className="link">Central (+51) 99 999 9999</div>
          <div className="link">Oficina (+51) 09 999 9999</div>
          <div className="link">Email contacto@fiberperu.pe</div>
        </div>
        <div className="items">
          <div className="title">Información de abonados y usuarios</div>
          <div className="link">&#8226; Cómo reclamar?</div>
          <div className="link">&#8226; Condiciones de uso</div>
          <div className="link">&#8226; Directiva de reclamos</div>
          <div className="link">&#8226; Medios de pago</div>
          <div className="link">&#8226; Condiciones de uso del sitio web</div>
          <div className="link">&#8226; Politicas de uso de internet</div>
          <div className="link">
            &#8226; Informacián básica de que debes conocer
          </div>
          <div className="link">&#8226; Directiva de reclamos</div>
        </div>

        <div className="items">
          <div className="title">Tus derechos</div>
          <div className="link">&#8226; Entérate de tus derechos</div>
          <div className="link">&#8226; Reglamento de neutralidad</div>
          <div className="link">
            &#8226; Politica de proteción de datos personales
          </div>
          <div className="link">&#8226; Devolución de interrupciones</div>
        </div>

        <div className="items">
          <div className="title">De utilidad</div>
          <div className="link">&#8226; Débito automatico</div>
          <div className="link">&#8226; Compara tu plan</div>
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
