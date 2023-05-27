import React, { useState, useEffect } from 'react'
import './termsAndConditions.scss'

function TermsAndConditions() {
  return (
    <div id="terms-conditions">
      <div className="terms-conditions-wrapper-title">
        <div className="title">*Términos y condiciones</div>
      </div>

      <div className="item">
        <div className="title">Promoción Duplica Internet MONO Fiber peru</div>
        <div className="description">
          Vigencia del 01/05/2023 hasta el 31/05/2023 para contrataciones de
          planes a partir de 50 Mbps hasta 300 Mbps a través de nuestros canales
          de venta oficiales para residentes en Lima, Lambayeque, Piura, La
          Libertad, y Ancash. Costo de instalación S/120. Precios incluyen IGV.
          Sujeto a cobertura, prefactibilidad técnica y evaluación crediticia
          favorable. La velocidad mínima garantizada es de 70% de la velocidad
          contratada. Ver más en términos y condiciones.
        </div>
      </div>

      <div className="item">
        <div className="title">Promoción Duplica Internet DÚO Fiber peru</div>
        <div className="description">
          Vigencia del 01/05/2023 hasta el 31/05/2023 para contrataciones de
          planes a partir de 50 Mbps hasta 300 Mbps a través de nuestros canales
          de venta oficiales para residentes en Lima, Lambayeque, Piura, La
          Libertad, y Ancash. Costo de instalación S/0. Precios incluyen IGV.
          Sujeto a cobertura, prefactibilidad técnica y evaluación crediticia
          favorable. La velocidad mínima garantizada es de 70% de la velocidad
          contratada. Ver más en términos y condiciones.
        </div>
      </div>
    </div>
  )
}
export default TermsAndConditions
