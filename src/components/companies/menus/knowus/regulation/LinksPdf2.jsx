import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'

export default function BillingInformation() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box
      sx={{
        //border: "1px solid #0d0d0f",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '20px', sm: '50px', md: '50px', lg: '50px' },
        //width:{ xs: 3, sm: 50, md: 50, lg: 50 },
        paddingLeft: { lg: '25%' },
        paddingRight: { lg: '25%' },
      }}
    >
   
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: '4%',
              flexShrink: 0,
            }}
          >
            #
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {' '}
            TUO de las condiciones facturación
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: '#7c7c7c !important',
            }}
          >
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: '4%',
              flexShrink: 0,
            }}
          >
            #
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {' '}
            Reglamento de neutralidad de la red
          
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: '#7c7c7c !important',
            }}
          >
           w
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: '4%',
              flexShrink: 0,
            }}
          >
            #
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Lugares y horarios de pago de servicios{' '}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: '#7c7c7c !important',
            }}
          >
           w
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              width: '4%',
              flexShrink: 0,
            }}
          >
            #
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Protección de datos
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: '#7c7c7c !important',
            }}
          >
           w
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              width: '4%',
              flexShrink: 0,
            }}
          >
            #
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Información a abonados y usuarios </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: '#7c7c7c !important',
            }}
          >
       w
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              width: '4%',
              flexShrink: 0,
            }}
          >
            #
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Protección de datos  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: '#7c7c7c !important',
            }}
          >
       w
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              width: '4%',
              flexShrink: 0,
            }}
          >
            #
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}> Indicadores de calidad   </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: '#7c7c7c !important',
            }}
          >
       w
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
