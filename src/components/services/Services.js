import React from "react";
import "./services.scss";
import DoneIcon from '@mui/icons-material/Done';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MouseParticles from "react-mouse-particles";

function Services() {
    return (
        <div id="services">
            <div className="wrapperTitle">
                <h1 className="title">ELIGE LA VELOCIDAD DE INTERNET
                                QUE MÁS SE AJUSTE A TUS NECESIDADES</h1>
                <div className="subtitle">
                    Fiber-Fix es flexible, escalable, y seguro. Nuestros paquetes pueden ser personalizados para satisfacer sus necesidades.
                </div>
            </div>

            <div className="service">
                <div className="serviceImg"></div>
                <h2 className="title">Hogar
                </h2>
                <h2 className="title">40 Mbps
                </h2>
                <h2 className="precio">s/50 al mes
                </h2>

                <Stack direction="column" alignItems="start"
                    gap={1}>

                    <div className="www"><DoneIcon  sx={{marginRight:"10px", color:"#3986d3"}}/>
                        <Typography variant="body1">Conexión para todos los dispositivos</Typography>
                    </div>
                    <div className="www"><DoneIcon  sx={{marginRight:"10px", color:"#3986d3"}}/>
                        <Typography variant="body1"> Moden WI-FI</Typography>
                    </div>
                    <div className="www"><DoneIcon  sx={{marginRight:"10px", color:"#3986d3"}}/>
                        <Typography variant="body1"> 100% Fibra Óptica</Typography>
                    </div>
                    <div className="www"><DoneIcon  sx={{marginRight:"10px", color:"#3986d3"}}/>
                        <Typography variant="body1">  Descarga ilimitada</Typography>
                    </div>
                </Stack>

                <div className="moreService">Solicitar</div>
                 <MouseParticles
          g={1}
          color="random"
          cull="MuiSvgIcon-root,MuiButton-root"
          level={6}
        />
            </div>
            <div className="service">
                <div className="serviceImg"></div>
                <h2 className="title">Gamer</h2>
                <h2 className="title">80 Mbps
                </h2>
                <h2 className="precio">s/70 al mes
                </h2>

                <Stack direction="column" alignItems="start"
                    gap={1}>

                    <div className="www"><DoneIcon  sx={{marginRight:"10px", color:"#3986d3"}}/>
                        <Typography variant="body1">Conexión para todos los dispositivos</Typography>
                    </div>
                    <div className="www"><DoneIcon  sx={{marginRight:"10px", color:"#3986d3"}}/>
                        <Typography variant="body1"> Moden WI-FI</Typography>
                    </div>
                    <div className="www"><DoneIcon  sx={{marginRight:"10px", color:"#3986d3"}}/>
                        <Typography variant="body1"> 100% Fibra Óptica</Typography>
                    </div>
                    <div className="www"><DoneIcon  sx={{marginRight:"10px", color:"#3986d3"}}/>
                        <Typography variant="body1">  Descarga ilimitada</Typography>
                    </div>
                </Stack>


                <div className="moreService">Solicitar</div>
            </div>
            <div className="service">
                <div className="serviceImg"></div>
                <h2 className="title">premiun</h2>
                <h2 className="title">120 Mbps</h2>
                <h2 className="precio">s/100 al mes
                </h2>
                <Stack direction="column" alignItems="start"
                    gap={1}>

                    <div className="www"><DoneIcon sx={{marginRight:"10px", color:"#3986d3"}} />
                        <Typography variant="body1">Conexión para todos los dispositivos</Typography>
                    </div>
                    <div className="www"><DoneIcon  sx={{marginRight:"10px", color:"#3986d3"}} />
                        <Typography variant="body1"> Moden WI-FI</Typography>
                    </div>
                    <div className="www"><DoneIcon  sx={{marginRight:"10px", color:"#3986d3"}} />
                        <Typography variant="body1"> 100% Fibra Óptica</Typography>
                    </div>
                    <div className="www"><DoneIcon  sx={{marginRight:"10px", color:"#3986d3"}} />
                        <Typography variant="body1">  Descarga ilimitada</Typography>
                    </div>
                </Stack>
                <div className="moreService">Solicitar</div>
            </div>
        </div>
    );
}
export default Services;
