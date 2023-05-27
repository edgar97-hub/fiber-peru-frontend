import React, { useState, useEffect } from "react";
import "./services2.scss";
import "./services.scss";

import DoneIcon from '@mui/icons-material/Done';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MouseParticles from "react-mouse-particles";
import { startCanvas } from "./particleTest";
import { startCanvas2 } from "./particle2";
import { startCanvas3 } from "./particle3";
import { start } from "./Slider";

function Services() {


    useEffect(() => {
        var canvas = document.getElementById("nokey");

        var can_w = parseInt(canvas?.getAttribute("width"));
        var can_h = parseInt(canvas?.getAttribute("height"));

        if (canvas && can_w && can_h) {
            // canvas.setAttribute("width", window.innerWidth);
            // canvas.setAttribute("height", window.innerHeight);
            // console.log("width", window.innerWidth);
            // console.log("height", window.innerHeight);
            // var dataUrl = canvas.toDataURL();
            // console.log(dataUrl);
            // document.querySelector(".infoSec").style.background =
            // "url(" + dataUrl + ")";

            startCanvas();

            //var dataUrl = canvas.toDataURL();
            //console.log(dataUrl)
            //document.getElementById('test').style.background = 'url(' + dataUrl + ')'
        }

        var canvas2 = document.getElementById("nokey2");
        var can_w2 = parseInt(canvas2?.getAttribute("width"));
        var can_h2 = parseInt(canvas2?.getAttribute("height"));

        if (canvas2 && can_w2 && can_h2) {
            startCanvas2();
        }

        var canvas3 = document.getElementById("nokey3");
        var can_w3 = parseInt(canvas3?.getAttribute("width"));
        var can_h3 = parseInt(canvas3?.getAttribute("height"));

        if (canvas3 && can_w3 && can_h3) {
            startCanvas3();
        }
        start()
    }, []);




    return (
        <div>
            <div className="wrapper-title">
                <h1 className="title">ELIGE LA VELOCIDAD DE INTERNET
                    QUE MÁS SE AJUSTE A TUS NECESIDADES</h1>
                <div className="subtitle">
                    Fiber-Fix es flexible, escalable, y seguro. Nuestros paquetes pueden ser personalizados para satisfacer sus necesidades.
                </div>
            </div>
            <div class="slider-wrapper">

                <i id="left" className="fa-solid fa-angle-left"></i>
                <div class="carousel">
                    <div className="rrr img-test">
                        <div className="header-information">Sin plazo de permanecia ni penalidades</div>
                        <div id="test">
                            <h2 className="title">Plan Hogar
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
                        <div className="header-information">Sin plazo de permanecia ni penalidades</div>
                        <div id="test">
                            <h2 className="title">Plan Gamer
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
                        <div className="header-information">Sin plazo de permanecia ni penalidades</div>
                        <div id="test">
                            <h2 className="title">Plan premiun
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
                        <div className="header-information">Sin plazo de permanecia ni penalidades</div>
                        <div id="test">
                            <h2 className="title">Plan Streaming
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
                        <div className="header-information">Sin plazo de permanecia ni penalidades</div>
                        <div id="test">
                            <h2 className="title">Plan Streaming
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
export default Services;
