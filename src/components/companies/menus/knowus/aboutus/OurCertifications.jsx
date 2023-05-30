import React, { useState, useEffect } from 'react'
import './services.scss'
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff'

import CastConnectedIcon from '@mui/icons-material/CastConnected'
import CableIcon from '@mui/icons-material/Cable'
import { BiBorderRadius } from 'react-icons/bi'

function Services() {
  return (
    <div id="our-certifications">
      <div className="wrapperTitle">
        <h1 className="title">Nuestras certificaciones</h1>
        
      </div>

      <div className="items">
        <div className="plan-benefits-box">
          <img
            className="serviceImg"
            src={
              'https://winempresas.pe/img/nosotros/iso-27001.jpg'
            }
          />
        </div>

        <div className="plan-benefits-box">
          <div className="serviceImg">
            <img
              className="serviceImg"
              src={
                'https://winempresas.pe/img/nosotros/iso-9001-2015.jpg'
              }
            />
          </div>
           
        </div>
        <div className="plan-benefits-box">
          <div className="serviceImg">
            <img
              className="serviceImg"
              src={
                'https://winempresas.pe/img/nosotros/iso-22301.png'
              }
            />
          </div>
        </div>

         
      </div>
    </div>
  )
}
export default Services
