import React, { useState, useEffect } from 'react'
import './regulation.scss'
//import img from '../../../assets/images/fibreoptica.jpg'

function FiberNetworkOpticsinPeru() {
  return (
    <div className="FiberNetworkOpticsinPeru">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">Red de Fibra óptica en Perú</h1>
          <p className="subtitleChooseUs">
            Nuestra Red de Alta Velocidad se basa en un anillo 100% de fibra
            óptica que recorre todo el Perú.
          </p>

          <div className="itemChooseUs">
            <div className="itemTitleChooseUs"></div>
            <div className="itemDescriptionChooseUs">
              El anillo metropolitano de Lima y Callao consta de 12 nodos de
              comunicación que forman la capa core de la red. En ella usamos
              tecnología de transmisión Ten Gigabit Ethernet en topología
              redundante que evita la pérdida de comunicación en el caso
              fortuito de que una de las interfaces de interconexión del anillo
              principal dejase de funcionar.
            </div>
          </div>
        </div>
      </div>
      <div className="infoColumnChooseUs">
        <div className="imgWrapperChooseUs">
          <img
            className="imgChooseUs"
            src={'https://winempresas.pe/img/cobertura/img-mapa.png?ver=1.8'}
            alt={''}
          />
          <div className="infoColumnDescriptionChooseUs"></div>
        </div>
      </div>
    </div>
  )
}
export default FiberNetworkOpticsinPeru
