import React, { useState, useEffect } from 'react'
import './services.scss'
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff'

import CastConnectedIcon from '@mui/icons-material/CastConnected'
import CableIcon from '@mui/icons-material/Cable'
import { BiBorderRadius } from 'react-icons/bi'

function Services() {
  return (
    <div id="companies-services">
      <div className="wrapperTitle">
        <h1 className="title">SERVICIOS</h1>
        <div className="subtitle">
          Impulsamos la innovación tecnológica a través de nuestro portafolio de
          soluciones para mejorar la productividad y competitividad de las
          empresas.
        </div>
      </div>

      <div className="items">
        <div className="plan-benefits-box">
          <img
            className="serviceImg"
            src={
              'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg'
            }
          />
          <h2 className="title">Conectividad para empresas</h2>
        </div>

        <div className="plan-benefits-box">
          <div className="serviceImg">
            <img
              className="serviceImg"
              src={
                'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg'
              }
            />
          </div>
          <h2 className="title">
            Telefonia corporativa y comunicaciones unificadas
          </h2>
        </div>
        <div className="plan-benefits-box">
          <div className="serviceImg">
            <img
              className="serviceImg"
              src={
                'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg'
              }
            />
          </div>
          <h2 className="title">Ciberseguridad para empresas</h2>
        </div>

        <div className="plan-benefits-box">
          <div className="serviceImg">
            <img
              className="serviceImg"
              src={
                'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg'
              }
            />
          </div>
          <h2 className="title">Servicios cloud</h2>
        </div>

        <div className="plan-benefits-box">
          <div className="serviceImg">
            <img
              className="serviceImg"
              src={
                'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg'
              }
            />
          </div>
          <h2 className="title">Data center</h2>
        </div>
      </div>
    </div>
  )
}
export default Services
