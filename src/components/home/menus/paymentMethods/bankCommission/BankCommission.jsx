import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Padding } from '@mui/icons-material'

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  }
}

const rows = [
  {
    col1: 'BCP',
    col2: 'S/ 1.50',
    col3: 'S/ 0.00',
    col4: 'S/ 0.00',
    col5: 'S/ 0.00',
  },
  {
    col1: 'INTERBANK',
    col2: 'No aplica',
    col3: 'S/ 3.00',
    col4: 'S/ 0.00',
    col5: 'S/ 0.00',
  },
  {
    col1: 'BBVA',
    col2: 'S/ 4.00',
    col3: 'S/ 1.90',
    col4: 'S/ 0.00',
    col5: 'No aplica',
  },
  {
    col1: 'SCOTIABANK',
    col2: 'S/ 0.00',
    col3: 'S/ 0.00',
    col4: 'S/ 0.00',
    col5: 'S/ 0.00',
  },
]

const columns = [
  {
    id: 'col1',
    label: '',
    minWidth: 2,
  },
  {
    id: 'col2',
    label: 'Ventanilla',
    minWidth: 5,
  },
  {
    id: 'col3',
    label: 'Agente',
    minWidth: 5,
  },
  {
    id: 'col4',
    label: 'Web/App',
  },
  {
    id: 'col5',
    label: 'Débito Automático',
    minWidth: 10,
  },
]

export default function BasicTable() {
  return (
    <Box
      sx={{
        minWidth: '90%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //border: "1px solid #0d0d0f",
        // alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#efefef',
        // borderRadius: "9px",
        paddingTop: {
          xs: '9px',
          sm: '9px',
          sm: '9px',
          lg: '25px',
        },
        paddingBottom: '45px',
        paddingLeft: '45px',
        paddingRight: '45px',
        // margin: "3px"
      }}
    >
      <Box
        sx={{
          width: {
            sm: '100%',
            lg: '40%',
          },
          display: 'flex',
          flexDirection: 'column',
          //border: "1px solid #0d0d0f",
          // alignItems: "center",
          // justifyContent: "center",
          marginRight: '25px',
          //padding: "10px",
          padding: {
            xs: '30px',
            sm: '30px',
            sm: '30px',
            lg: '10px',
          },
        }}
      >
        <Typography
          variant="h8"
          sx={{
            color: '#9CA3AF',
            whiteSpace: 'pre-line',
          }}
        >
          Conoce las comisiones en entidades bancarias
        </Typography>
        <Typography
          variant="h8"
          sx={{
            color: '#301d19',
            whiteSpace: 'pre-line',
            fontWeight: '500',
          }}
        >
          {'\n'}
          &#8226; Te brindamos la información necesaria para que realices tus
          pagos sin problema. Por eso, aquí te mostramos las comisiones de
          acuerdo a la entidad bancaria donde realizas el pago de tu recibo.
        </Typography>
        <Typography
          variant="h8"
          sx={{
            color: '#301d19',
            fontWeight: '500',
            marginTop: '10px',
          }}
        >
          &#8226;*El horario de atención de los agentes se encuentra bajo
          disponibilidad de los establecimientos. *No olvides brindar tu código
          de pago sin los 00 de la izquierda (está ubicado en la parte superior
          derecha de tu recibo)
        </Typography>
      </Box>

      <TableContainer
        sx={{
          //border: "1px solid #0d0d0f",
          width: {
            sm: '100%',
            lg: '40%',
          },
        }}
      >
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  backgroundColor: '#308ce9',
                  borderRight: '0.5px solid  white',
                  color: 'white',
                }}
              >
                Entidad bancaria
              </TableCell>
              <TableCell
                align="center"
                colSpan={4}
                sx={{
                  backgroundColor: '#308ce9',
                  color: 'white',
                  borderRight: '0.5px solid  white',
                }}
              >
                Comisión al cliente
              </TableCell>
            </TableRow>
            <TableRow>
              {' '}
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    // top: 57,
                    minWidth: column.minWidth,
                    backgroundColor: '#308ce9',
                    // bordertop: "0.5px solid  white",
                    borderRight: '0.5px solid  white',
                    color: 'white',
                  }}
                >
                  {column.label}{' '}
                </TableCell>
              ))}{' '}
            </TableRow>
          </TableHead>
          <TableBody>
            {' '}
            {rows.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id]
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}{' '}
                      </TableCell>
                    )
                  })}{' '}
                </TableRow>
              )
            })}{' '}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
