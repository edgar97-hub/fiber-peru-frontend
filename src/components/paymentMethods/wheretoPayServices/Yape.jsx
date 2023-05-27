import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from "../../../images/fibreoptica.jpg";
import IconBcp from "../../../images/bcp-4.svg";
import IconBbva from "../../../images/bbva.svg";
import IconScotiabank from "../../../images/scotiabank.svg";
import IconInterbank from "../../../images/interbank.svg";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconBancos from "../../../images/bancos.jpg";
import { Padding } from "@mui/icons-material";

function Yape() {
  return (<Box sx={
    {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      // border: "1px solid #0d0d0f",

    }
  }>
    <Box sx={
      {
        display: "flex",
        flexDirection: "column",
        //border: "1px solid #0d0d0f",
        // marginRight:5,
        width: "50%",
				padding:"10px",
				//paddingLeft:"30px",
				paddingRight:"35px",


      }
    }>

      <Typography variant="h8"

        sx={
          {
            color: '#9CA3AF',
            whiteSpace: 'pre-line'
          }
      }>Pagos con Yape:</Typography>
      <Typography variant="h8"
        sx={
          {
            color: '#301d19',
            whiteSpace: 'pre-line',
						fontWeight: "500"

          }
      }> {'\n'}
        &#8226; En el menú de Yape, ingresa a la opción Yapear Servicios.
      </Typography>
      <Typography variant="h8"
        sx={
          {color: '#301d19',
					fontWeight: "500"
				}
      }>
        &#8226; Haz clic en la categoría Telecomunicaciones.
      </Typography>
      <Typography variant="h8"
        sx={
          {color: '#301d19',
					fontWeight: "500"
				}
      }>
        &#8226; Selecciona el logo de fiber-peru.
      </Typography>
      <Typography variant="h8"
        sx={
          {color: '#301d19',
					fontWeight: "500"
				}
      }>
        &#8226; Coloca tu código de pago, selecciona el recibo y ¡listo!
      </Typography>
    </Box>
     
 
      

      

  


  </Box>);
}
export default Yape;
