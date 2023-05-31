import React, { useState, useEffect } from 'react'
import './managedServices.scss'
import img from '../../../../../assets/images/quienes-somos.png'

function Aboutus() {
  return (
    <div className="managedServices">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">Servicios
Gestionados</h1>
          <p className="subtitleChooseUs">
          Convierta CAPEX en OPEX con
nuestros servicios gestionados
          </p>

          <div className="itemChooseUs">
            {/* <div className="itemTitleChooseUs">
              100% de garantía de satisfacción
            </div> */}
            <div className="itemDescriptionChooseUs">
             

Invertir capital en servicios en lugar de equipos que se deprecian con el tiempo, ayuda a las empresas a sobrellevar la carga que significa comprar hardware y licencias de software.

            </div>
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
export default Aboutus
