import React, {useState, useEffect} from 'react'
import './sachaca.scss'
import './video.scss'

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
import BgVideo from '../../../../assets/media/El reloj de San Jos de Tiabaya Tiabaya  By Soy Tiabaya - Soy Arequipa  Facebook (1).mp4'

function Sachaca() {

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

  const Videotest = () => {
    return (
      <>
        <video src={BgVideo} autoPlay muted loop class="video-bg" />
        <div className="bg-overlay"></div>
        <div className="home-text">
          <h1 className='video-title'>The Bubu Island</h1>
          <p className='video-description'>Come live out your ideal vacation with us</p>
        </div>
        <div className="home-btn">Explore</div>
      </>
    )
  }

  return (
    <div className="sachaca sachaca-video " style={{

    }}>
          <Videotest />

      <div className="plan-info-column">
        <div className="plan-info-text-wrapper">
          <h1 className="headingChooseUs">Ya llegó a Sachaca
          el Internet hogar
          100% fibra óptica de fiber-peru
          </h1>
          {/* <p className="subtitleChooseUs">
            Porque Fiber peru le ofrece un gran valor por lo que paga
          </p> */}
          <div className="itemChooseUs">
            <div className="itemTitleChooseUs">
              Sin planes de compromiso anual
            </div>
            <div className="itemDescriptionChooseUs">
              Nunca te quedes encerrado en un plan. No tener contratos anuales
              es parte de la libertad que experimentarás con Fiber peru.
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
                color: "#d60cb8"

              }
          }>
        Registra tus datos 
            </Typography>

          <FormControl size="small"
            sx={{
              mt: 2,
              width: '70%',
              '& label.Mui-focused': {
                color: '#d60cb8',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#d60cb8',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d60cb8',
                },
              },
            }}>
            <InputLabel id="demo-simple-select-label">Distrito</InputLabel>
            <Select labelId="demo-simple-select-label"
              value={
                inputs.distrito
              }
              label="Distrito"
              name="distrito"
              onChange={handleChange}>
              <MenuItem value={"Sachaca"}>Sachaca</MenuItem>
              <MenuItem value={"Tiabaya"}>Tiabaya</MenuItem>
            </Select>
          </FormControl>

          <TextField size="small"
            sx={{
              mt: 2,
              width: '70%',
              '& label.Mui-focused': {
                color: '#d60cb8',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#d60cb8',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d60cb8',
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
                color: '#d60cb8',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#d60cb8',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d60cb8',
                },
              },
            }}>
            <InputLabel id="demo-simple-select-label">
              Tipo de documento
            </InputLabel>
            <Select labelId="demo-simple-select-label"
              value={
                inputs.documenttype
              }
              label="Tipo de documento"
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
                color: '#d60cb8',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#d60cb8',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d60cb8',
                },
              },
            }}
            label="Numero de documento"
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
                color: '#d60cb8',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#d60cb8',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d60cb8',
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
                color: '#d60cb8',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#d60cb8',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d60cb8',
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
                color: '#d60cb8',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#d60cb8',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d60cb8',
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
                color: '#d60cb8',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#d60cb8',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&:hover fieldset': {
                  //borderColor: '#d60cb8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d60cb8',
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
              background: 'linear-gradient(73deg, #d60cb8, #fc59e3)',
              '&:hover': {
                backgroundColor: '#d60cb8',
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
export default Sachaca
