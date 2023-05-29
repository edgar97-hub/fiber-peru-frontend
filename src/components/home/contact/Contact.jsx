import React, { useState, useEffect } from 'react'
import './Contact.scss'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import Typography from '@mui/material/Typography'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import BusinessIcon from '@mui/icons-material/Business'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

function Contact() {
  const [age, setAge] = React.useState('')

  const [inputs, setInputs] = React.useState({
    distrito: '',
    nombre: '',
    apellido: '',
    tipoDeDocumento: '',
    numeroDeDocumento: '',
    correo: '',
    telefono: '',
    mensaje: '',
    termsAndConditions: false,
  })

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="wraper-contact">
      <div className="contact-form">
        <div className="textfield">
          Si eres cliente, descubre Mi Portal Fiber-peru
        </div>
        <Button variant="contained" sx={{ marginLeft: 0 }}>
          Si, soy cliente
        </Button>
        <div className="textfield">
          Contacta con nuestro equipo para tus dudas o necesidades
        </div>

        <FormControl size="small" sx={{ mt: 2, width: '70%' }}>
          <InputLabel id="demo-simple-select-label">Distrito</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={inputs.distrito}
            label="Distrito"
            name="distrito"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <TextField
          size="small"
          sx={{ mt: 2, width: '70%' }}
          label="Nombre"
          name="nombre"
          value={inputs.nombre}
          onChange={handleChange}
        />
        <TextField
          size="small"
          sx={{ mt: 2, width: '70%' }}
          label="Apellido"
          name="apellido"
          value={inputs.apellido}
          onChange={handleChange}
        />

        <FormControl
          fullWidth
          size="small"
          sx={{
            mt: 2,
            width: '70%',
          }}
        >
          <InputLabel id="demo-simple-select-label">
            Tipo de documento
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={inputs.tipoDeDocumento}
            label="Tipo de documento"
            name="tipoDeDocumento"
            onChange={handleChange}
          >
            <MenuItem value={'DNI'}>DNI</MenuItem>
            <MenuItem value={'CARNÉ DE EXTRANJERIA'}>
              CARNÉ DE EXTRANJERIA
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          size="small"
          sx={{ mt: 2, width: '70%' }}
          label="Numero de documento"
          name="numeroDeDocumento"
          value={inputs.numeroDeDocumento}
          onChange={handleChange}
        />

        <TextField
          size="small"
          sx={{ mt: 2, width: '70%' }}
          label="Correo"
          name="correo"
          value={inputs.correo}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          size="small"
          sx={{ mt: 2, width: '70%' }}
          label="Teléfono o celular"
          name="telefono"
          value={inputs.telefono}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          size="small"
          sx={{ mt: 2, width: '70%' }}
          label="Escriba aqui su mensaje"
          multiline
          rows={4}
          name="mensaje"
          value={inputs.mensaje}
          onChange={handleChange}
        />

        <FormControlLabel
          sx={{
            marginTop: '20px',
            width: '70%',
          }}
          control={
            <Checkbox
              checked={inputs.termsAndConditions}
              onChange={(e) => {
                inputs.termsAndConditions = e.target.checked
                setInputs({
                  ...inputs,
                  ['termsAndConditions']: e.target.checked,
                })
              }}
              name="termsAndConditions"
            />
          }
          label="He leído y acepto las condiciones del tratamiento de datos personales"
        />

        <Button variant="contained" sx={{ marginTop: '20px', width: '70%' }}>
          Enviar
        </Button>
      </div>
      <div className="contact-form">
        <div className="test">
          <div className="textfield">ATENCIÓN AL CLIENTE</div>

          <div className="textfield-test">
            <LocalPhoneIcon
              sx={{
                fontSize: '40px',
                color: '#315db7',
                cursor: 'pointer',
                marginRight: '20px',
                whiteSpace: 'pre-line',
              }}
            />
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              Central: {'\n'}01 707 3000
            </Typography>
          </div>

          <div className="textfield-test">
            <MailOutlineIcon
              sx={{
                fontSize: '40px',
                color: '#315db7',
                cursor: 'pointer',
                marginRight: '20px',
                whiteSpace: 'pre-line',
              }}
            />
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              Escríbenos: {'\n'}contacto@win.pe
            </Typography>
          </div>

          <div className="textfield-test">
            <WhatsAppIcon
              sx={{
                fontSize: '40px',
                color: '#00b93e ',
                cursor: 'pointer',
                marginRight: '20px',
                whiteSpace: 'pre-line',
              }}
            />
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              Atención por Whatsapp
            </Typography>
          </div>
        </div>

        <div className="test">
          <div className="textfield">INFORMACIÓN COMERCIAL</div>
          <div className="textfield-test">
            <LocalPhoneIcon
              sx={{
                fontSize: '40px',
                color: '#315db7',
                cursor: 'pointer',
                marginRight: '20px',
                whiteSpace: 'pre-line',
              }}
            />
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              Ventas: {'\n'}01 707 3000
            </Typography>
          </div>

          <div className="textfield-test">
            <WhatsAppIcon
              sx={{
                fontSize: '40px',
                color: '#00b93e ',
                cursor: 'pointer',
                marginRight: '20px',
                whiteSpace: 'pre-line',
              }}
            />
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              Ventas por Whatsapp
            </Typography>
          </div>
        </div>

        <div className="test">
          <div className="textfield">NUESTRA OFICINA</div>
          <div className="textfield-test">
            <BusinessIcon
              sx={{
                fontSize: '40px',
                color: '#315db7',
                cursor: 'pointer',
                marginRight: '20px',
                whiteSpace: 'pre-line',
              }}
            />
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              SAN ISIDRO: {'\n'}Av. República de Panamá 3418 - 3420, Torre
              Barlovento
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
