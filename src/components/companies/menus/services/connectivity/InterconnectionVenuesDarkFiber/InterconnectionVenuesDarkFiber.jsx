import React, {useState, useEffect} from 'react'
import './interconnectionVenuesDarkFiber.scss'
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
// import YoutubeEmbed from './YoutubeEmbed'

function InterconnectionVenuesDarkFiber() {

  const [inputs, setInputs] = React.useState({
    distrito: '',
    fullname: '',
    documenttype: '',
    documentnumber: '',
    email: '',
    mobile: '',
    message: '',
    termsAndConditions: false,
    internetPlan: "",
    address:"",
  })


  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div className="interconnectionVenuesDarkFiber">
      <div className="plan-info-column">
        <div className="plan-info-text-wrapper">
          <h1 className="headingChooseUs">Interconexión de Sedes por Fibra Oscura
          </h1>
          {/* <p className="subtitleChooseUs">
            Porque Fiber peru le ofrece un gran valor por lo que paga
          </p> */}


          <div className="itemChooseUs">
            {/* <div className="itemTitleChooseUs">
              Sin planes de compromiso anual
            </div> */}
            <div className="itemDescriptionChooseUs">
            Conexión a través de un enlace físico dedicado de fibra óptica
            </div>
          </div>
           
        </div>
      </div>
      <div className="plan-info-column">
        <div className="plan-info-video contact-form">
        <Typography component="h1" variant="h5" sx={
              {
                ml: 5,
                width: '40%',
                color: "#aeb7be"

              }
          }>
        Registra tus datos 
            </Typography>
 
            <TextField size="small"
            sx={{
              mt: 2,
              width: '70%',
              '& label.Mui-focused': {
                color: '#aeb7be',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#aeb7be ',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#aeb7be',
                },
              },
            }}
            label="Empresa"
            name="company"
            value={
              inputs.company
            }
            onChange={handleChange}/>
          <TextField size="small"
            sx={{
              mt: 2,
              width: '70%',
              '& label.Mui-focused': {
                color: '#aeb7be',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#aeb7be',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#aeb7be',
                },
              },
            }}
            label="Nombre"
            name="fullname"
            value={
              inputs.fullname
            }
            onChange={handleChange}/>
          <FormControl fullWidth size="small"
            sx={{
              mt: 2,
              width: '70%',
              '& label.Mui-focused': {
                color: '#aeb7be',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#aeb7be',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#aeb7be',
                },
              },
            }}>
            <InputLabel id="demo-simple-select-label">
              Tipo de servicio a contratar
            </InputLabel>
            <Select labelId="demo-simple-select-label"
              value={
                inputs.documenttype
              }
              label="Tipo de servicio a contratar"
              name="documenttype"
              onChange={handleChange}>
              <MenuItem value={'DNI'}>DNI</MenuItem>
              <MenuItem value={'CARNÉ DE EXTRANJERIA'}>
                CARNÉ DE EXTRANJERIA
              </MenuItem>
            </Select>
          </FormControl>

          <TextField size="small"
             sx={{
              mt: 2,
              width: '70%',
              '& label.Mui-focused': {
                color: '#aeb7be',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#aeb7be',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#aeb7be',
                },
              },
            }}
            label="RUC"
            name="documentnumber"
            value={
              inputs.documentnumber
            }
            onChange={handleChange}/>

          <TextField size="small"
            sx={{
              mt: 2,
              width: '70%',
              '& label.Mui-focused': {
                color: '#aeb7be',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#aeb7be',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#aeb7be',
                },
              },
            }}
            label="Correo"
            name="email"
            value={
              inputs.email
            }
            onChange={handleChange}/>

          <TextField fullWidth size="small"
             sx={{
              mt: 2,
              width: '70%',
              '& label.Mui-focused': {
                color: '#aeb7be',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#aeb7be',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#aeb7be',
                },
              },
            }}
            label="Teléfono"
            name="mobile"
            value={
              inputs.mobile
            }
            onChange={handleChange}/>
          <FormControl size="small"
             sx={{
              mt: 2,
              width: '70%',
              '& label.Mui-focused': {
                color: '#aeb7be',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#aeb7be',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#aeb7be',
                },
              },
            }}>
            <InputLabel id="demo-simple-select-label">Plan de internet</InputLabel>
            <Select labelId="demo-simple-select-label"
              value={
                inputs.internetPlan
              }
              label="Plan de internet"
              name="internetPlan"
              onChange={handleChange}>
              <MenuItem value={"Sachaca"}>100 Mbps</MenuItem>
              <MenuItem value={"Tiabaya"}>50 Mbps</MenuItem>
            </Select>
          </FormControl>

          <TextField fullWidth size="small"
             sx={{
              mt: 2,
              width: '70%',
              '& label.Mui-focused': {
                color: '#aeb7be',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#aeb7be',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#aeb7be',
                },
              },
            }}
            label="Dirección"
            name="address"
            value={
              inputs.address
            }
            onChange={handleChange}/>


          <Button variant="contained"
            
            sx={{
              marginTop: '20px',
              width: '70%',
              fontWeight: '600 !important',
              background: 'linear-gradient(73deg, #aeb7be, #aeb7be)',
              '&:hover': {
                backgroundColor: '#aeb7be',
              },
            }}
            onClick={
              async () => {}
          }>
            Enviar
          </Button>
        </div>
        <div className="contact-form"></div>
      </div>
    </div>
  )
}
export default InterconnectionVenuesDarkFiber
