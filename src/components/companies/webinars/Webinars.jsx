import React, { useState, useEffect } from 'react'
import './webinars.scss'
import img from '../../../assets/images/fibreoptica.jpg'
import Button from '@mui/material/Button'

function Webinars() {
  return (
    <div className="softphone">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">Webinars sobre TI</h1>
          <p className="subtitleChooseUs">
            Aprende más sobre las tecnologías que están impactando positivamente
            a las empresas con nuestros webinars sobre ciberseguridad,
            transformación digital, tecnologías cloud entre otros.
          </p>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            width: '40%',
            fontWeight: '600 !important',
            background: 'linear-gradient(73deg, #d60cb8, #fc59e3)',
            '&:hover': {
              backgroundColor: '#d60cb8',
            },
          }}
        >
          Más información
        </Button>
      </div>
    </div>
  )
}
export default Webinars
