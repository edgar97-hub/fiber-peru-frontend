import React, {useState, useEffect} from 'react'
import './devicesNetwork.scss'
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff'

import CastConnectedIcon from '@mui/icons-material/CastConnected'
import CableIcon from '@mui/icons-material/Cable'
import {BiBorderRadius} from 'react-icons/bi'

function OurBenefits() {
  return (
    <div id="devicesNetwork">
      <div className="wrapperTitle">
        {/* <h1 className="title">Nuestros Beneficios</h1> */} </div>

      <div className="items">
        {/* <div className="plan-benefits-box">
          <img className="serviceImg"
            src={'https://winempresas.pe/img/nosotros/iso-27001.jpg'}/>
        </div> */}


        <div className="plan-benefits-box">

          <h2 className="title">WIFI
                        Gestionado
          </h2>
          <p className="description">
            Renovamos y administramos los equipos de acceso inalámbrico en su empresa.
          </p>
        </div>


        <div className="plan-benefits-box">

          <h2 className="title">Cámaras de
            Videovigilancia
            Gestionadas
          </h2>
          <p className="description">
            Aseguramos la continuidad de tu negocio gestionando los equipos de tu red local. 
          </p>
        </div>
        <div className="plan-benefits-box">

          <h2 className="title">LAN
Gestionada
          </h2>
          <p className="description">
          Aseguramos la continuidad de tu negocio gestionando los equipos de tu red local. 
          </p>
        </div>


      </div>
    </div>
  )
}
export default OurBenefits
