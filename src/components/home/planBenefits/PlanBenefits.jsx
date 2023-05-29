import React, { useState, useEffect } from 'react'
import './planBenefits.scss'
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff'

import CastConnectedIcon from '@mui/icons-material/CastConnected'
import CableIcon from '@mui/icons-material/Cable'

function PlanBenefits() {
  return (
    <div id="plan-benefits">
      <div className="wrapperTitle">
        <h1 className="title">
          ¿CUÁLES SON LOS BENEFICIOS DE NUESTROS PLANES?
        </h1>
        <div className="subtitle">
          Obtenga Internet residencial de alta velocidad
        </div>
      </div>

      <div className="plan-benefits-box">
        <div className="serviceImg">
          <PortableWifiOffIcon
            sx={{
              color: '#3986d3',
              fontSize: '50px',
            }}
          />
        </div>

        <h2 className="title">Velocidad simétrica</h2>

        <p className="description">
          Descarga y sube archivos a la misma velocidad
        </p>
      </div>

      <div className="plan-benefits-box">
        <div className="serviceImg">
          <CastConnectedIcon
            sx={{
              color: '#3986d3',
              fontSize: '50px',
            }}
          />
        </div>
        <h2 className="title">mayor conectividad</h2>

        <p className="description">
          Hasta 20 equipos conectados sin afectar la velocidad del plan de
          internet contratado.
        </p>
      </div>
      <div className="plan-benefits-box">
        <div className="serviceImg">
          <CableIcon
            sx={{
              color: '#3986d3',
              fontSize: '50px',
            }}
          />
        </div>
        <h2 className="title">Mayor estabilidad</h2>
        <p className="description">
          Conexión 100% fibra óptica hasta tu hogar (FTTH).
        </p>
      </div>
    </div>
  )
}
export default PlanBenefits
