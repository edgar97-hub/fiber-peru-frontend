import React, { useState, useEffect } from 'react'
import './aboutus.scss'
import img from '../../../../../assets/images/quienes-somos.png'

function Aboutus() {
  return (
    <div className="aboutus">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">Nuestro
Enfoque</h1>
          <p className="subtitleChooseUs">
          Nuestro enfoque en el sector corporativo nos permite identificar y comprender a nuestros clientes adelantándonos a sus necesidades con un compromiso constante hacia la excelencia.

Para ello disponemos de una Red Metropolitana de Alta Velocidad, propia, cuya tecnología de fibra óptica y protocolo IP de última generación, les permite alcanzar velocidades extraordinarias. 
          </p>

          
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
