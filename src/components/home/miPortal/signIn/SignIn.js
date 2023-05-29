import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

const defaultTheme = createTheme()

export default function SignInSide() {
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()
  const documentNumberRef = React.useRef()
  const passRef = React.useRef()
  const [credSave, setCredSave] = React.useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    try {
      setLoading(true)
      var values = {
        documentNumber: data.get('documentNumber'),
        password: data.get('password'),
      }
      console.log(values)

      const loggedInResponse = await fetch(
        'http://localhost:5001' + '/api/v1/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        }
      )
      const response = await loggedInResponse.json()

      if (response.success) {
        // Auth.storeToken(response.token)
        // dispatch({
        //   type: ActionTypes.LOGIN,
        //   payload: {
        //     isLoggedIn: true,
        //     userDetails: response.user,
        //   },
        // })

        navigate('/usuarios')
      } else {
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#d60cb8' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                inputRef={documentNumberRef}
                size="small"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Numero de documento"
                name="documentNumber"
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
              <TextField
                inputRef={passRef}
                size="small"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
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
                Ingresar
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    href="/registro"
                    variant="body2"
                    sx={{
                      color: '#d60cb8',
                    }}
                  >
                    {'¿No tienes una cuenta? Inscribirse'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
