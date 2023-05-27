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
import "./wheretoPayServices.scss";

function Bank() {
  return (<Box sx={
    {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      //border: "1px solid #0d0d0f",

    }
  }>
    <Box sx={
      {
        display: "flex",
        flexDirection: "column",
        //border: "1px solid #0d0d0f",
        // marginRight:5,
        //width: "50%",
				padding:"10px",
				//paddingLeft:"30px",
				//paddingRight:"35px",
        //width:{ xs: 3, sm: 50, md: 50, lg: 50 },
        width:{ sm: "100%",lg: "50%" },

      }
    }>

      <Typography variant="h8"
        sx={
          {
            color: '#9CA3AF',
            whiteSpace: 'pre-line'
          }
      }>Bancos Afiliados:</Typography>
      <Typography variant="h8"
        sx={
          {
            color: '#301d19',
            whiteSpace: 'pre-line',
						fontWeight: "500"

          }
      }> {'\n'}
        &#8226; Acércate a ventanilla e indica que deseas realizar el pago de tu servicio de Internet fiber-peru.
      </Typography>
      <Typography variant="h8"
        sx={
          {color: '#301d19',
					fontWeight: "500"
				}
      }>
        &#8226; Brinda tu código de pago, ubicado en la parte superior derecha de tu recibo (no consideres los 00 de la izquierda)
      </Typography>
    </Box>
    <Box sx={
      {
      //border: "4px solid #0d0d0f",
        width:{ sm: "100%",lg: "50%" },
      }
    }>
      <img className="bank-img"
        src={IconBancos}
        alt={""}
        />
    </Box>

    <Box sx={
      {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        //border: "1px solid #0d0d0f",
        width:{ sm: "100%",lg: "50%" },
        // height:"100%",
        padding:"0px",
        margin:"0px"

      }
    }>
      <Box sx={
        {
          width: "48%",
          display: "flex",
          flexDirection: "column",
          //border: "1px solid #0d0d0f",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#efefef",
          borderRadius: "9px",
          paddingTop: "15px",
          paddingBottom: "15px",
          margin: "3px"
        }
      }>

        <img className=""
          src={IconBcp}
          width="70px"
        />
        <Typography variant="h8"
          sx={
            {
              color: '#9CA3AF',
              whiteSpace: 'pre-line',
              fontSize: "15px !important",
              color: "#301d19",
              boxSizing: "border-box"

            }
        }> {'\n'}
          &#8226; Ventanilla
        </Typography>
        <Typography variant="h8"
          sx={
            {
              color: '#301d19',
              whiteSpace: 'pre-line'
            }
        }>
          Comisión S/1.50
        </Typography>
      </Box>


      <Box sx={
        {
          width: "48%",
          display: "flex",
          flexDirection: "column",
          //border: "1px solid #0d0d0f",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#efefef",
          borderRadius: "9px",
          paddingTop: "15px",
          paddingBottom: "15px",
          margin: "3px"

        }
      }>

        <img className=""
          src={IconBbva}
          //height="20%"
          width="70px"
        />
        <Typography variant="h8"
          sx={
            {
              color: '#9CA3AF',
              whiteSpace: 'pre-line',
              fontSize: "15px !important",
              color: "#301d19",
              boxSizing: "border-box"

            }
        }> {'\n'}
          &#8226; Ventanilla
        </Typography>
        <Typography variant="h8"
          sx={
            {
              color: '#301d19',
              whiteSpace: 'pre-line'
            }
        }>
          Comisión S/4.00
        </Typography>
      </Box>

      <Box sx={
        {
          width: "48%",
          display: "flex",
          flexDirection: "column",
          // border: "1px solid #0d0d0f",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#efefef",
          borderRadius: "9px",
          paddingTop: "15px",
          paddingBottom: "15px",
          margin: "3px"

        }
      }>

        <img className=""
          src={IconScotiabank}
          width="100px"/>
        <Typography variant="h8"
          sx={
            {
              color: '#9CA3AF',
              whiteSpace: 'pre-line',
              fontSize: "15px !important",
              color: "#301d19",
              boxSizing: "border-box"

            }
        }> {'\n'}
          &#8226; Ventanilla
        </Typography>
        <Typography variant="h8"
          sx={
            {
              color: '#301d19',
              whiteSpace: 'pre-line'
            }
        }>
          Comisión S/0
        </Typography>
      </Box>

      <Box sx={
        {
          width: "48%",
          display: "flex",
          flexDirection: "column",
          // border: "1px solid #0d0d0f",
          alignItems: "center",
          backgroundColor: "#efefef",
          borderRadius: "9px",
          paddingTop: "15px",
          paddingBottom: "15px",
          margin: "3px",
          textAlign: "start"


        }
      }>

        <img className=""
          src={IconInterbank}
          width="90px"/>
        <Typography variant="h8"
          sx={
            {
              color: '#9CA3AF',
              whiteSpace: 'pre-line',
              fontSize: "15px !important",
              color: "#301d19"

            }
        }> {'\n'}
          &#8226; Agentes Interbank
        </Typography>
        <Typography variant="h8"
          sx={
            {
              color: '#9CA3AF',
              whiteSpace: 'pre-line',
              fontSize: "15px !important",
              color: "#301d19"

            }
        }>
          &#8226; APP
        </Typography>
        <Typography variant="h8"
          sx={
            {
              color: '#9CA3AF',
              whiteSpace: 'pre-line',
              fontSize: "15px !important",
              color: "#301d19",
              boxSizing: "border-box"

            }
        }>
          &#8226; Web
        </Typography>
      </Box>
    </Box>

    <Box sx={
      {
        width:{ xs: "100%",sm: "100%",lg: "50%" },
        display: "flex",
        paddingTop:"35px",
        flexDirection: "column",
        //border: "1px solid #0d0d0f",
        alignItems: "center",
        justifyContent: "center",
      }
    }>

      <PictureAsPdfIcon sx={
        {
          fontSize: "50px",
          color: "#315db7",
          cursor: "pointer"
        }
      }/>
      <Typography variant="h8"
        sx={
          {
            color: '#9CA3AF',
            whiteSpace: 'pre-line',
            fontSize: "15px !important",
            color: "#301d19",
            boxSizing: "border-box"
          }
      }>
        Conoce el ciclo de facturación
      </Typography>
    </Box>


  </Box>);
}
export default Bank;
