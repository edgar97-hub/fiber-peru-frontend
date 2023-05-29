import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const defaultTheme = createTheme()

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

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
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#d60cb8' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrar usuario
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  size="small"
                  sx={{
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
                >
                  <InputLabel id="demo-simple-select-label">
                    Tipo de documento
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    value={inputs.distrito}
                    label="Tipo de documento"
                    name="distrito"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>DNI</MenuItem>
                    <MenuItem value={20}>RUC</MenuItem>
                    <MenuItem value={30}> CARNET DE EXTRANJERIA </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Numero de documento"
                  sx={{
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
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{
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
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                fontWeight: '600 !important',
                background: 'linear-gradient(73deg, #d60cb8, #fc59e3)',
                '&:hover': {
                  backgroundColor: '#d60cb8',
                },
              }}
            >
              Continuar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/mi-portal"
                  variant="body2"
                  sx={{
                    color: '#d60cb8',
                  }}
                >
                  ¿Ya tienes una cuenta? Iniciar sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
