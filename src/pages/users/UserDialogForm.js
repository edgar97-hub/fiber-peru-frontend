import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Controls from '../../components/controls/Controls'
import { useForm, Form } from '../../components/toolsForm/useForm'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'

const genderItems = [
  { id: 'male', title: 'Masculino' },
  { id: 'female', title: 'Femenino' },
  { id: 'other', title: 'Otro' },
]

const initialFValues = {
  id: 0,
  documenttype: '',
  documentnumber: '',
  email: '',
  fullname: '',
  mobile: '',
  password: '',
}
export default function UserDialogForm(props) {
  const { addOrEdit, recordForEdit, loading } = props
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const validate = (fieldValues = values) => {
    let temp = { ...errors }

    if ('documenttype' in fieldValues)
      temp.documenttype =
        fieldValues.documenttype.length != 0 ? '' : 'Este campo es obligatorio'
   
    setErrors({
      ...temp,
    })

    if (fieldValues == values) return Object.values(temp).every((x) => x == '')
  }

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      addOrEdit(values, resetForm)
    }
  }

  useEffect(() => {
    if (recordForEdit != null) {
      setValues({
        ...recordForEdit,
      })
    }
  }, [recordForEdit])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} direction="column" justifyContent="center">
        <Grid item xs={6}>
          <Controls.Input
            fullWidth
            name="documenttype"
            size="small"
            label="tipo plan"
            value={values.documenttype}
            onChange={handleInputChange}
            error={errors.documenttype}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            fullWidth
            name="documentnumber"
            size="small"
            label="Numero de documento"
            value={values.documentnumber}
            onChange={handleInputChange}
            error={errors.documentnumber}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            fullWidth
            label="precio"
            name="email"
            size="small"
            type="number"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            fullWidth
            label="nombre completo"
            name="fullname"
            size="small"
            type="number"
            value={values.fullname}
            onChange={handleInputChange}
            error={errors.fullname}
          />
        </Grid>
        <Grid
          container
          justifyContent="center"
          direction="row"
          alignItems="center"
          //spacing={5}
        >
          <Grid item xs={2} md={4} lg={4}>
            <Controls.Button
              style={{
                margin: 10,
              }}
              type="submit"
              text="Enviar"
              size="small"
              onClick={handleSubmit}
              loading={
                loading && (
                  <CircularProgress
                    size={40}
                    style={{ position: 'absolute' }}
                  />
                )
              }
              disabled={loading}
            />
          </Grid>
          <Grid item xs={6} md={9} lg={3}>
            <Controls.Button
              style={{
                margin: 10,
              }}
              text="Reset"
              size="small"
              color="default"
              onClick={resetForm}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
