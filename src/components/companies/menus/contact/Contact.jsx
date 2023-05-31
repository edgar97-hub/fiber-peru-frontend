import React, { useState, useEffect } from 'react'
import './contact.scss'
//import img from '../../../../../assets/images/quienes-somos.png'

function CybersecurityBusinesses() {
  return (
    <div className="contact">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">Consulta y cotiza
nuestras soluciones
para tu empresa </h1>
          <p className="subtitleChooseUs">
          Contamos con un equipo de consultores e ingenieros certificados que atenderán tus solicitudes de forma personalizada en las próximas horas. 
          </p>

          {/* <div className="itemChooseUs">
            <div className="itemTitleChooseUs">
            Las amenazas informáticas actuales son cada vez más sofisticadas y peligrosas al punto que pueden atentar contra la continuidad del negocio sino estamos preparados. 
            </div>
           <div className="itemDescriptionChooseUs">
              Somos el aliado perfecto para el cumplimiento de tus metas IT
            </div>
          </div> */}

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
          <img className="imgChooseUs" src={"https://winempresas.pe/img/services/ciberseguridad-para-empresas/home/img-portafolio.png?ver=1.8"} alt={''} />
          <div className="infoColumnDescriptionChooseUs"></div>
        </div>
      </div> */}
    </div>
  )
}
export default CybersecurityBusinesses
