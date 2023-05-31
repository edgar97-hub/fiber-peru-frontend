import React, { useState, useEffect } from 'react'
import './cloudServices.scss'
import img from '../../../assets/images/fibreoptica.jpg'
import Button from '@mui/material/Button'

function WhyChooseFiber() {
  return (
    <div className="cloudServices">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">
            Servicios en la nube para tu empresa{' '}
          </h1>
          <p className="subtitleChooseUs">
            Descubre WIN Cloud, la nube privada para la continuidad de tu
            negocio, con soluciones de infraestructura digital (IaaS),
            almacenamiento y respaldos de información (BaaS), recuperación de
            desastres (DRaaS), entre otros.
          </p>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            width:"50%",
            fontWeight: '600 !important',
            background: 'linear-gradient(73deg, #4d4a4c, #4d4a4c)',
            '&:hover': {
              backgroundColor: '#4d4a4c',
            },
          }}
        >
          Más información
        </Button>
      </div>
    </div>
  )
}
export default WhyChooseFiber
