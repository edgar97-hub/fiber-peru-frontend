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
        <div className="our-values">
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
                            
                            
                        </div>
                    </div>

                    <div className="rrr img-test">
                        <div id="test">
                            <h2 className="title">Mejora continua
                            </h2>
                            
                           

                        </div>
                    </div>
                    <div className="rrr img-test">
                        <div id="test">
                            <h2 className="title">satisfacción a nuestros clientes
                            </h2>
                            

                             

                        </div>
                    </div>
                    <div className="rrr img-test">
                        <div id="test">
                            <h2 className="title">Innovación
                            </h2>
                             

                            
                        </div>
                    </div>

                    <div className="rrr img-test">
                        <div id="test">
                            <h2 className="title">Confiabilidad
                            </h2>
                            
                             

                        </div>
                    </div>

                    <div className="rrr img-test">
                        <div id="test">
                            <h2 className="title">Eficiencia
                            </h2>
                            
                             
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
