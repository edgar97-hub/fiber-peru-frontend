import React, { useState, useEffect } from 'react'
import './aboutus.scss'
import img from '../../../../../assets/images/quienes-somos.png'

function Aboutus() {
  return (
    <div className="aboutus">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">¿Quiénes
somos?</h1>
          <p className="subtitleChooseUs">
          Somos fiber-peru Empresas y estamos aquí para acompañarte durante todo el viaje de la evolución digital de tu compañía. 
          </p>

          <div className="itemChooseUs">
            <div className="itemTitleChooseUs">
              100% de garantía de satisfacción
            </div>
            <div className="itemDescriptionChooseUs">
              Somos el aliado perfecto para el cumplimiento de tus metas IT
            </div>
          </div>

          <div className="itemChooseUs">
            <div className="itemTitleChooseUs">Comunicación 24/7</div>
            <div className="itemDescriptionChooseUs">
              Siempre estamos ahí para usted a través de correo electrónico,
              llamada o Skype.
            </div>
          </div>
        </div>
      </div>
      <div className="infoColumnChooseUs">
        <div className="imgWrapperChooseUs">
          <img className="imgChooseUs" src={img} alt={''} />
          <div className="infoColumnDescriptionChooseUs"></div>
        </div>
      </div>
    </div>
  )
}
export default Aboutus
