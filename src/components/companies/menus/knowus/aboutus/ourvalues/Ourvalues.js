import React, { useState, useEffect } from 'react'
import './slider.scss'
import './homeService.scss'
import DoneIcon from '@mui/icons-material/Done'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { start } from './Slider'

function HomeService() {
  useEffect(() => {
    start()
  }, [])

  return (
    <div className="ourvalues">
      <div className="wrapper-title">
        <h1 className="title">Nuestros valores</h1>
      </div>
      <div className="slider-wrapper">
        <i id="left" className="fa-solid fa-angle-left"></i>
        <div class="carousel">
          <div className="rrr img-test">
            <div id="plan-service">
              <h2 className="title">Somos retadores</h2>
              <h2 className="sub-title">
                Desafiamos lo convencional y vemos cada situación como una
                oportunidad para pensar fuera de la caja.
              </h2>
            </div>
          </div>

          <div className="rrr img-test">
            <div id="plan-service">
              <h2 className="title">Somos agiles</h2>
              <h2 className="sub-title">
                Hacemos que las cosas pasen. Reconocemos que para innovar
                necesitamos que en el movimiento todo fluya.
              </h2>
            </div>
          </div>

          {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature11.jpg" className="img-test" alt="img" draggable="false" />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature11.jpg" className="img-test" alt="img" draggable="false" /> */}
        </div>
        <i id="right" className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  )
}
export default HomeService
