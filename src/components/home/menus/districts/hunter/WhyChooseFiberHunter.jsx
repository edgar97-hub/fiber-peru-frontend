import React, {useState, useEffect} from 'react'
import './hunter.scss'
import YoutubeEmbed from './YoutubeEmbed'

function PlanInfo() {
  return (
    <div className="tiabaya">
      <div className="plan-info-column">
        <div className="plan-info-text-wrapper">
          <h1 className="headingChooseUs">¿Por qué escoger el Internet de fiber-peru en tiabaya?
          </h1>
          <p className="subtitleChooseUs">
            Porque ahora contarás con un servicio de Internet 100% fibra óptica hasta los hogares (FTTH), que te garantiza calidad en velocidad y ancho de banda gracias a nuestra tecnología de vanguardia y redes propias, brindando excelente conectividad a todos nuestros clientes en la región.
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
