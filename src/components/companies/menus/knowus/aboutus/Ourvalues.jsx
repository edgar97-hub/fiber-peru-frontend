import React, { useState, useEffect } from "react";
import "./services2.scss";
import "./services.scss";

import DoneIcon from '@mui/icons-material/Done';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MouseParticles from "react-mouse-particles";
import { start } from "./Slider";

function Ourvalues() {

 



    return (
        <div>
            <div className="wrapper-title">
                <h1 className="title">Nuestros valores</h1>
                
            </div>
            <div className="slider-wrapper">

                <i id="left" className="fa-solid fa-angle-left"></i>
                <div class="carousel">
                    <div className="rrr img-test">
                        <div id="test">
                            <h2 className="title">Eficiencia
                            </h2>
                            <h2 className="sub-title">40 Mbps
                            </h2>
                            <h2 className="precio">s/50 al mes
                            </h2>

                            <Stack className="test-description" direction="column" alignItems="start"
                                gap={1}>

                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">Conexión para todos los dispositivos</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> Moden WI-FI</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> 100% Fibra Óptica</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">  Descarga ilimitada</Typography>
                                </div>
                            </Stack>
                        </div>
                    </div>

                    <div className="rrr img-test">
                        <div id="test">
                            <h2 className="title">Mejora continua
                            </h2>
                            <h2 className="sub-title">80 Mbps
                            </h2>
                            <h2 className="precio">s/70 al mes
                            </h2>

                            <Stack className="test-description" direction="column" alignItems="start"
                                gap={1}>

                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">Conexión para todos los dispositivos</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> Moden WI-FI</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> 100% Fibra Óptica</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">  Descarga ilimitada</Typography>
                                </div>
                            </Stack>

                        </div>
                    </div>
                    <div className="rrr img-test">
                        <div id="test">
                            <h2 className="title">satisfacción a nuestros clientes
                            </h2>
                            <h2 className="sub-title">120 Mbps
                            </h2>
                            <h2 className="precio">s/100 al mes
                            </h2>

                            <Stack className="test-description" direction="column" alignItems="start"
                                gap={1}>

                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">Conexión para todos los dispositivos</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> Moden WI-FI</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> 100% Fibra Óptica</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">  Descarga ilimitada</Typography>
                                </div>
                            </Stack>

                        </div>
                    </div>
                    <div className="rrr img-test">
                        <div id="test">
                            <h2 className="title">Innovación
                            </h2>
                            <h2 className="sub-title">40 Mbps
                            </h2>
                            <h2 className="precio">s/50 al mes
                            </h2>

                            <Stack className="test-description" direction="column" alignItems="start"
                                gap={1}>

                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">Conexión para todos los dispositivos</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> Moden WI-FI</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> 100% Fibra Óptica</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">  Descarga ilimitada</Typography>
                                </div>
                            </Stack>

                        </div>
                    </div>

                    <div className="rrr img-test">
                        <div id="test">
                            <h2 className="title">Confiabilidad
                            </h2>
                            <h2 className="sub-title">40 Mbps
                            </h2>
                            <h2 className="precio">s/50 al mes
                            </h2>

                            <Stack className="test-description" direction="column" alignItems="start"
                                gap={1}>

                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">Conexión para todos los dispositivos</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> Moden WI-FI</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> 100% Fibra Óptica</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">  Descarga ilimitada</Typography>
                                </div>
                            </Stack>

                        </div>
                    </div>

                    <div className="rrr img-test">
                        <div id="test">
                            <h2 className="title">Eficiencia
                            </h2>
                            <h2 className="sub-title">40 Mbps
                            </h2>
                            <h2 className="precio">s/50 al mes
                            </h2>

                            <Stack className="test-description" direction="column" alignItems="start"
                                gap={1}>

                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">Conexión para todos los dispositivos</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> Moden WI-FI</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1"> 100% Fibra Óptica</Typography>
                                </div>
                                <div className="www"><DoneIcon sx={{ marginRight: "10px", color: "#3986d3" }} />
                                    <Typography variant="body1">  Descarga ilimitada</Typography>
                                </div>
                            </Stack>

                        </div>
                    </div>
                    {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature11.jpg" className="img-test" alt="img" draggable="false" />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature11.jpg" className="img-test" alt="img" draggable="false" /> */}

                </div>
                <i id="right" className="fa-solid fa-angle-right"></i>
            </div>
        </div>

    );
}
export default Ourvalues;
