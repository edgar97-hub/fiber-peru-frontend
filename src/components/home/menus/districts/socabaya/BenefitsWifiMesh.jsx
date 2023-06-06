import React, { useState, useEffect } from 'react'
import './yanahuara.scss'
import img from '../../../../assets/images/benefits-wifi-mesh.webp'

function BenefitsWifiMesh() {
  return (
    <div className="benefitsWifiMesh">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">Beneficios del WiFi Mesh
para tu hogar</h1>
          <p className="subtitleChooseUs">
            PORQUE ES EL INTERNET HOGAR CON MAYOR PUNTAJE DE VELOCIDAD DEL PERÚ
          </p>

          <div className="itemChooseUs">
            <div className="itemTitleChooseUs">
              Mayor cobertura
            </div>
            <div className="itemDescriptionChooseUs">
            La tecnología Mesh permite crear
                                        redes
                                        tipo malla y así evitar zonas muertas en tu hogar.
            </div>
          </div>

          <div className="itemChooseUs">
            <div className="itemTitleChooseUs">Velocidad optima</div>
            <div className="itemDescriptionChooseUs">
            Ya no te preocupes por la lejanía del
                                        router, el WiFi Mesh hace que la velocidad se mantenga en los lugares más alejados
                                        de tu hogar.
                                    
            </div>
          </div>

          <div className="itemChooseUs">
            <div className="itemTitleChooseUs">Control y visibilidad</div>
            <div className="itemDescriptionChooseUs">
            WiFi Mesh cuenta con una app nativa
                                        que te permite controlar los accesos a la red en tu hogar, entre otras
                                        funcionalidades.
                                    
                                    
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
export default BenefitsWifiMesh
