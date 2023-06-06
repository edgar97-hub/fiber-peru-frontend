import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import IconBancos from '../../../../../assets/images/bancos.jpg'
import { Padding } from '@mui/icons-material'

function Online() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // border: "1px solid #0d0d0f",
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          //border: "1px solid #0d0d0f",
          // marginRight:5,
          width: '50%',
          padding: '10px',
          //paddingLeft:"30px",
          paddingRight: '35px',
        }}
      >
        <Typography
          variant="h8"
          sx={{
            color: '#9CA3AF',
            whiteSpace: 'pre-line',
          }}
        >
          Pagos en línea:
        </Typography>
        <Typography
          variant="h8"
          sx={{
            color: '#301d19',
            whiteSpace: 'pre-line',
            fontWeight: '500',
          }}
        >
          {' '}
          {'\n'}
          &#8226; Conoce cómo pagar tu recibo paso a paso aquí.
        </Typography>
        <Typography variant="h8" sx={{ color: '#301d19', fontWeight: '500' }}>
          &#8226; Aplica para los pagos desde la web y la app del banco.
        </Typography>
      </Box>
      <Box
        sx={{
          //border: "1px solid #0d0d0f",
          width: '20%',
        }}
      >
        <img
          className="imgChooseUs"
          src={IconBancos}
          alt={''}
          height="100%"
          width="400px"
        />
      </Box>

      <Box
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          //border: "1px solid #0d0d0f",
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PictureAsPdfIcon
          sx={{
            fontSize: '50px',
            color: '#315db7',
            cursor: 'pointer',
          }}
        />
        <Typography
          variant="h8"
          sx={{
            color: '#9CA3AF',
            whiteSpace: 'pre-line',
            fontSize: '15px !important',
            color: '#301d19',
            boxSizing: 'border-box',
          }}
        >
          Conoce el ciclo de facturación
        </Typography>
      </Box>
    </Box>
  )
}
export default Online
