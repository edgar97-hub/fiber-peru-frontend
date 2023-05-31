import React, {useState, useEffect} from 'react'
import './regulation.scss'
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
import Notification from '../../../toolsForm/Notification'
import {useNavigate} from 'react-router-dom'

function FormContact() {
  const [age, setAge] = React.useState('')
  const [notify, setNotify] = useState({isOpen: false, message: '', type: ''})
  const navigate = useNavigate()

  const [inputs, setInputs] = React.useState({
    distrito: '',
    fullname: '',
    documenttype: '',
    documentnumber: '',
    email: '',
    mobile: '',
    message: '',
    termsAndConditions: false
  })


  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="cober-fibraoptica-wraper-contact">
      <div className="contact-form">

        <div className="textfield">
          Contacta a un experto
        </div>

        <FormControl size="small"
          sx={
            {
              mt: 2,
              width: '70%'
            }
        }>
          <InputLabel id="demo-simple-select-label">Servicio</InputLabel>
          <Select labelId="demo-simple-select-label"
            value={
              inputs.distrito
            }
            label="Servicio"
            name="distrito"
            onChange={handleChange}>
            <MenuItem value={"Conectividad"}>Conectividad</MenuItem>
            <MenuItem value={"Servicios Gestionados"}>Servicios Gestionados</MenuItem>
            <MenuItem value={"Seguridad Gestionada"}>Seguridad Gestionada</MenuItem>

          </Select>
        </FormControl>

        <TextField size="small"
          sx={
            {
              mt: 2,
              width: '70%'
            }
          }
          label="Empresa"
          name="company"
          value={
            inputs.fullname
          }
          onChange={handleChange}/>


        <TextField size="small"
          sx={
            {
              mt: 2,
              width: '70%'
            }
          }
          label="RUC"
          name="documentnumber"
          value={
            inputs.documentnumber
          }
          onChange={handleChange}/>

        <FormControl fullWidth size="small"
          sx={
            {
              mt: 2,
              width: '70%'
            }
        }>
          <InputLabel id="demo-simple-select-label">
            Tipo de servicio a  contratar
          </InputLabel>
          <Select labelId="demo-simple-select-label"
            value={
              inputs.documenttype
            }
            label="Tipo de servicio a  contratar"
            name="documenttype"
            onChange={handleChange}>
            <MenuItem value={'Empresarial'}>Empresarial</MenuItem>
            <MenuItem value={'Residencial'}>
              Residencial
            </MenuItem>
          </Select>
        </FormControl>

				<TextField size="small"
          sx={
            {
              mt: 2,
              width: '70%'
            }
          }
          label="Nombres"
          name="fullname"
          value={
            inputs.fullname
          }
          onChange={handleChange}/>

        <TextField size="small"
          sx={
            {
              mt: 2,
              width: '70%'
            }
          }
          label="Correo"
          name="email"
          value={
            inputs.email
          }
          onChange={handleChange}/>

        <TextField fullWidth size="small"
          sx={
            {
              mt: 2,
              width: '70%'
            }
          }
          label="Teléfono o celular"
          name="mobile"
          value={
            inputs.mobile
          }
          onChange={handleChange}/>


        <FormControlLabel sx={
            {
              marginTop: '20px',
              width: '70%'
            }
          }
          control={<Checkbox
            checked={
inputs.termsAndConditions}
          onChange={
            (e) => {
              inputs.termsAndConditions = e.target.checked
              setInputs({
                ...inputs,
                ['termsAndConditions']: e.target.checked
              })
            }
          }
          name="termsAndConditions"/>}
          label="He leído y acepto las condiciones del tratamiento de datos personales"/>

        <Button variant="contained"
          sx={
            {
              marginTop: '20px',
              width: '70%'
            }
          }
          onClick={
            async () => {

              try {
                console.log(inputs)
                var flat = false;

                for (const [key, value] of Object.entries(inputs)) {
                  if (!inputs[key] || inputs[key].length == 0) {
                    if (!(key === "termsAndConditions")) {
                      flat = true;
                    }
                    console.log(key)
                  }
                }

                if (flat) {
                  setNotify({isOpen: true, message: 'completa todos los campos', type: 'error'})
                  return false
                }
                const loggedInResponse = await fetch('http://localhost:5001' + '/api/v1/users/consultas', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(inputs)
                })
                const response = await loggedInResponse.json()


                if (response.success) {
                  setNotify({isOpen: true, message: 'guardado con éxito', type: 'success'})

                  navigate('/hogar')
                  console.log(response)

                } else {
                  setNotify({isOpen: true, message: 'Credenciales incorrectas', type: 'error'})
                  console.log(response)
                }

              } catch (error) {
                console.log(error)
              }


            }
        }>
          Enviar
        </Button>
      </div>
    </div>
  )
}
export default FormContact
