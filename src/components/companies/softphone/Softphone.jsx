import React, { useState, useEffect } from 'react'
import './softphone.scss'
import img from '../../../assets/images/fibreoptica.jpg'
import Button from '@mui/material/Button'

function Softphone() {
  return (
    <div className="softphone">
      <div className="infoColumnChooseUs">
        <div className="textWrapperChooseUs">
          <h1 className="headingChooseUs">Softphone móvil corporativo</h1>
          <p className="subtitleChooseUs">
            Incremente la productividad de su equipo de trabajo con una
            aplicación flexible, segura y rápida para realizar llamadas desde
            cualquier lugar con su teléfono móvil.
          </p>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            width: '50%',
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
export default Softphone
