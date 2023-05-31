import React, {useState, useEffect} from 'react'
import './benefits.scss'
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff'

import CastConnectedIcon from '@mui/icons-material/CastConnected'
import CableIcon from '@mui/icons-material/Cable'
import {BiBorderRadius} from 'react-icons/bi'

function OurBenefits() {
  return (
    <div id="our-benefits">
      <div className="wrapperTitle">
        <h1 className="title">Nuestros Beneficios</h1>

      </div>

      <div className="items">
        {/* <div className="plan-benefits-box">
          <img className="serviceImg"
            src={'https://winempresas.pe/img/nosotros/iso-27001.jpg'}/>
        </div> */}


        <div className="plan-benefits-box">

          <h2 className="title">Becas de estudio
                      para Cursos TIC
          </h2>
        </div>


        <div className="plan-benefits-box">

          <h2 className="title">capacitaciones para colaboradores
          </h2>
        </div>
        <div className="plan-benefits-box">

          <h2 className="title">Evaluación Institucional
            de Cultura Digital
          </h2>
        </div>


      </div>
    </div>
  )
}
export default OurBenefits
