import React, {useState, useEffect} from 'react'
import './partners.scss'
import img from '../../../assets/images/fibreoptica.jpg'

function WhyChooseFiber() {
  return (
    <div className="partners">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">Nuestros partners</h1>
          <p className="subtitleChooseUs">
            Las principales empresas en seguridad informática y desarrollo profesional nos acompañan.
          </p>
        </div>
      </div>
      <div className="images">
        <img className="imgChooseUs"
          src={"https://winempresas.pe/img/home/partenerts-1.png?ver=1.7"}
          alt={''}/>
        <img className="imgChooseUs"
          src={"https://winempresas.pe/img/home/partenerts-3.png?ver=1.7"}
          alt={''}/>
        <img className="imgChooseUs"
          src={"https://winempresas.pe/img/home/partenerts-1.png?ver=1.7"}
          alt={''}/>
      </div>
    </div>
  )
}
export default WhyChooseFiber
