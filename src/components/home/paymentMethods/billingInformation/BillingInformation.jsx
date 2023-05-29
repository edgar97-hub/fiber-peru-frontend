import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

export default function BillingInformation() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={
      {
        //border: "1px solid #0d0d0f",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding:{ xs: "20px",sm: "50px",  md: "50px",lg: "50px" },
        //width:{ xs: 3, sm: 50, md: 50, lg: 50 },
				paddingLeft:{  lg: "25%" },
				paddingRight:{  lg: "25%" },

      }
    }>
			 <Typography sx={
            {color: 'text.secondary',padding:"20px"}
          }> Información sobre
					facturación</Typography>
					
      <Accordion expanded={
          expanded === 'panel1'
        }
        onChange={
          handleChange('panel1')
      }>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography sx={
            {
              width: '4%',
              flexShrink: 0
            }
          }>
           #
          </Typography>
          <Typography sx={
            {color: 'text.secondary'}
          }> ¿Cuál es mi código de pago?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
						color: "#7c7c7c !important"
					}}>
					Es muy importante recordar que necesitas tu código de abonado para poder pagar tus recibos. Este código lo encuentras en la esquina superior derecha de tu recibo, bajo el título “CODIGO DE PAGO". 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={
          expanded === 'panel2'
        }
        onChange={
          handleChange('panel2')
      }>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography sx={
            {
              width: '4%',
              flexShrink: 0
            }
          }>#</Typography>
          <Typography sx={
            {color: 'text.secondary'}
          }>
            ¿Cuánto es el
						monto que tengo que pagar
						por mi servicio?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
						color: "#7c7c7c !important"
					}}>
					El monto que debes pagar por el uso del servicio, lo puedes ver en la parte inferior de tu recibo, donde se indica el “TOTAL MES A PAGAR”. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={
          expanded === 'panel3'
        }
        onChange={
          handleChange('panel3')
      }>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header">
          <Typography sx={
            {
              width: '4%',
              flexShrink: 0
            }
          }>
            #
          </Typography>
          <Typography sx={
            {color: 'text.secondary'}
          }>
             ¿Cuáles son los
							conceptos que componen
							mi recibo?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
						color: "#7c7c7c !important"
					}}>
					En tu recibo se detallan todos los conceptos, estos pueden ser cargos recurrentes como el cargo fijo por tu plan de velocidad contratado, y los cargos no recurrentes, como las cuotas por el costo de la instalación y otros productos adicionales que adquiriste. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={
          expanded === 'panel4'
        }
        onChange={
          handleChange('panel4')
      }>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography sx={
            {
              width: '4%',
              flexShrink: 0
            }
          }>#</Typography>
					<Typography sx={
            {color: 'text.secondary'}
          }>¿Dónde puedo encontrar mi recibo?                                                       
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
						color: "#7c7c7c !important"
					}}>
					Cada mes te llegará tu recibo al correo electrónico que registramos cuando contrataste el servicio de internet, la fecha de emisión podría variar según tu ciclo de facturación. Puedes ingresar a https://fiber-peru.pe para consultar tus recibos. 
          </Typography>
        </AccordionDetails>
      </Accordion>

			<Accordion expanded={
          expanded === 'panel5'
        }
        onChange={
          handleChange('panel5')
      }>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography sx={
            {
              width: '4%',
              flexShrink: 0
            }
          }>#</Typography>
					<Typography sx={
            {color: 'text.secondary'}
          }>  ¿Por qué podría
					suspenderse mi
					servicio?                                                     
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
						color: "#7c7c7c !important"
					}}>
					En caso de no haber realizado el pago de su recibo hasta el día de vencimiento, se procederá con la gestión de cobranza respectiva y la suspensión del servicio por falta de pago. 
          </Typography>
        </AccordionDetails>
      </Accordion>

			<Accordion expanded={
          expanded === 'panel6'
        }
        onChange={
          handleChange('panel6')
      }>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography sx={
            {
              width: '4%',
              flexShrink: 0
            }
          }>#</Typography>
					<Typography sx={
            {color: 'text.secondary'}
          }>   ¿Qué debo hacer
					si no me llegó mi
					recibo a mi correo electrónico?                                                     
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
						color: "#7c7c7c !important"
					}}>
					En caso no te haya llegado tu recibo a la bandeja principal de tu correo, por favor verifica tu bandeja de correos no deseados o spam. Adicionalmente, verifica que nuestro correo electrónico mailwin@winet.com.pe no se encuentre en la lista de correos bloqueados de tu servicio de correo electrónico.

Si aún así no lo llegas a encontrar, te puedes comunicar con nuestra central telefónica a 01 707 3000, opción 1, o nuestro WhatsApp 940 061 937, para que uno de nuestros asesores te pueda ayudar validando que tu correo registrado sea el correcto o actualiza tus datos de contacto, de ser necesario. 
          </Typography>
					</AccordionDetails>
      </Accordion>

			<Accordion expanded={
          expanded === 'panel7'
        }
        onChange={
          handleChange('panel7')
      }>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography sx={
            {
              width: '4%',
              flexShrink: 0
            }
          }>#</Typography>
					<Typography sx={
            {color: 'text.secondary'}
          }>   ¿Dónde puedo
					pagar?                                                    
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
						color: "#7c7c7c !important",
						whiteSpace: 'pre-line',

					}}>
            

					Para realizar el pago de tu servicio, tienes las siguientes opciones:
					{'\n'}
					{'\n'} &#8226; Pago en línea desde la página WEB o APP de los bancos: BBVA, BCP, INTERBANK y SCOTIABANK.
					{'\n'} &#8226; Pago presencial en las agencias bancarias, de los bancos mencionados anteriormente.
					{'\n'} &#8226; Pago presencial en los agentes autorizados en bodegas, minimarkets, etc.
					{'\n'}
					{'\n'}
					Es importante que al momento de realizar el pago tengas a la mano tu código de pago.

          </Typography>
					</AccordionDetails>
      </Accordion>

    </Box>
  );
}
