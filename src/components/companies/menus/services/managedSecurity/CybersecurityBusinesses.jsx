import React, { useState, useEffect } from 'react'
import './cybersecurityBusinesses.scss'
import img from '../../../../../assets/images/quienes-somos.png'

function CybersecurityBusinesses() {
  return (
    <div className="cybersecurity-businesses">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">Ciberseguridad
para empresas</h1>
          <p className="subtitleChooseUs">
          La seguridad de la información es un deber de las empresas
          </p>

          <div className="itemChooseUs">
            <div className="itemTitleChooseUs">
            ¡Preocúpate por hacer crecer tu negocio, que nosotros lo protegemos por ti! 
            </div>
            {/* <div className="itemDescriptionChooseUs">
              Somos el aliado perfecto para el cumplimiento de tus metas IT
            </div> */}
          </div>

          {/* <div className="itemChooseUs">
            <div className="itemTitleChooseUs">Comunicación 24/7</div>
            <div className="itemDescriptionChooseUs">
              Siempre estamos ahí para usted a través de correo electrónico,
              llamada o Skype.
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="infoColumnChooseUs">
        <div className="imgWrapperChooseUs">
          <img className="imgChooseUs" src={img} alt={''} />
          <div className="infoColumnDescriptionChooseUs"></div>
        </div>
      </div> */}
    </div>
  )
}
export default CybersecurityBusinesses
