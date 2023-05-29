import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconBcp from "../../../../assets/images/bcp-4.svg";
import IconBbva from "../../../../assets/images/bbva.svg";
import IconScotiabank from "../../../../assets/images/scotiabank.svg";
import IconInterbank from "../../../../assets/images/interbank.svg";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconAgentes from "../../../../assets/images/agentes.jpg";

function Agents() {
  return (<Box sx={
    {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
       //border: "1px solid #0d0d0f",
       paddingTop:"10px",

    }
  }>
      <Box sx={
      {
        //border: "1px solid #0d0d0f",
        width: "30%"

      }
    }>
      <img className="imgChooseUs"
        src={IconAgentes}
        alt={""}
        height="100%"
        width="400px"/>
    </Box>
    
    <Box sx={
      {
        display: "flex",
        flexDirection: "column",
        //border: "1px solid #0d0d0f",
        // marginRight:5,
        width: "50%",
				padding:"10px",
				//paddingLeft:"30px",
				//paddingRight:"65px",


      }
    }>

      <Typography variant="h8"

        sx={
          {
            color: '#9CA3AF',
            whiteSpace: 'pre-line'
          }
      }>Agentes:</Typography>
      <Typography variant="h8"
        sx={
          {
            color: '#301d19',
            whiteSpace: 'pre-line',
						fontWeight: "500"

          }
      }> {'\n'}
        &#8226; Puedes realizar el pago de tus recibos en los agentes Interbank, BCP, BBVA y Scotiabank. 
      </Typography>
      <Typography variant="h8"
        sx={
          {color: '#301d19',
					fontWeight: "500"
				}
      }>
        &#8226; También puedes pagar en los establecimientos de Tambo (Efectivo y tarjeta BBVA), KasNet (Efectivo y tarjeta Scotiabank) y Western Union. 
      </Typography>
    </Box>
  

    <Box sx={
      {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        //border: "4px solid #0d0d0f",
        paddingTop:"50px",
        width: "100%",
        // height:"100%",


      }
    }>
      <Box sx={
        {
          minWidth: "15%",
          display: "flex",
          flexDirection: "column",
          // border: "1px solid #0d0d0f",
          alignItems: "center",
          justifyContent: "center",
          //backgroundColor: "#efefef",
          borderRadius: "9px",
          paddingTop: "15px",
          paddingBottom: "15px",
          margin: "20px",
          boxShadow: "-12px 14px 40px 0px grey",
          //boxShadow: "-12px 14px 40px 0px #0000001a",
          minHeight: "180px"
        }
      }>

        <img className=""
          src={IconBcp}
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
          &#8226; Efectivo
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
          &#8226; Tarjeta BCP
        </Typography>
         
      </Box>


      <Box sx={
        {
          minWidth: "15%",
          display: "flex",
          flexDirection: "column",
          // border: "1px solid #0d0d0f",
          alignItems: "center",
          justifyContent: "center",
          //backgroundColor: "#efefef",
          borderRadius: "9px",
          paddingTop: "15px",
          paddingBottom: "15px",
          margin: "20px",
          boxShadow: "-12px 14px 40px 0px grey",
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
          &#8226; Efectivo
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
          &#8226; Tarjeta BBVA
        </Typography>
        <Typography variant="h8"
          sx={
            {
              color: '#301d19',
              whiteSpace: 'pre-line'
            }
        }>
          Comisión S/1.90 
        </Typography>
      </Box>

      <Box sx={
        {
          minWidth: "15%",
          display: "flex",
          flexDirection: "column",
          // border: "1px solid #0d0d0f",
          alignItems: "center",
          justifyContent: "center",
          //backgroundColor: "#efefef",
          borderRadius: "9px",
          paddingTop: "15px",
          paddingBottom: "15px",
          margin: "20px",
          boxShadow: "-12px 14px 40px 0px grey",
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
          &#8226; Efectivo
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
          &#8226; Tarjeta Scotiabank
        </Typography>

        
      </Box>

      <Box sx={
        {
          minWidth: "15%",
          display: "flex",
          flexDirection: "column",
          // border: "1px solid #0d0d0f",
          alignItems: "center",
          //backgroundColor: "#efefef",
          borderRadius: "9px",
          paddingTop: "15px",
          paddingBottom: "15px",
          textAlign: "start",
          margin: "20px",
          boxShadow: "-12px 14px 40px 0px grey",


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
              color: "#301d19",
              boxSizing: "border-box"

            }
        }> {'\n'}
          &#8226; Efectivo
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
          &#8226; Tarjeta Scotiabank
        </Typography>
        <Typography variant="h8"
          sx={
            {
              color: '#301d19',
              whiteSpace: 'pre-line'
            }
        }>
          Comisión S/3.00
        </Typography>
      </Box>
    </Box>

    <Box sx={
      {
        width: "80%",
        paddingTop:"100px",
        display: "flex",
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
export default Agents;
