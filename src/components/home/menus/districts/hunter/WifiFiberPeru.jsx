import React, {useState, useEffect} from 'react'
import './hunter.scss'
import YoutubeEmbed from './YoutubeEmbed'

function PlanInfo() {
  return (
    <div className="tiabaya">
      <div className="plan-info-column">
        <div className="plan-info-text-wrapper">
          <h1 className="headingChooseUs">Conecta todo tu hogar con WiFi Mesh y lleva la super velocidad del Internet fiber-peru a todos lados 
          </h1>
          <p className="subtitleChooseUs">
          Cuando contratas un plan de Internet para el hogar* te entregamos uno o más dispositivos WiFi Mesh que amplían la cobertura inalámbrica con tecnología de última generación. 

          </p>


        </div>
      </div>
      <div className="plan-info-column">
        <div className="plan-info-video">
          <YoutubeEmbed embedId="LJHvboWCn9s"/>
        </div>
      </div>
    </div>
  )
}
export default PlanInfo
