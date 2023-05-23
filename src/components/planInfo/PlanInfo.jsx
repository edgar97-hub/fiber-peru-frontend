import React, {useState, useEffect} from "react";
import "./planInfo.scss";
import img from "../../images/fibreoptica.jpg";
import YoutubeEmbed from "./YoutubeEmbed";

function PlanInfo() {
    return (
        <div className="planInfo">
            <div className="plan-info-column">
                <div className="plan-info-text-wrapper">
                    <h1 className="headingChooseUs">
                        ¿Por qué Internet de Fiber Peru?

                    </h1>
                    <p className="subtitleChooseUs">
                        Porque Fiber peru le ofrece un gran valor por lo que paga

                    </p>


                    {/** <div className="itemChooseUs">
                        <div className="itemTitleChooseUs">
                            El precio que ves
                            es el precio que obtienes
                        </div>
                        <div className="itemDescriptionChooseUs">
                            no más preocupaciones
                            sobre alzas sorpresivas de precios.
                        </div>
                    </div>


                    <div className="itemChooseUs">
                        <div className="itemTitleChooseUs">
                            Sin contratos anuales
                            o tarifas ocultas.
                        </div>
                        <div className="itemDescriptionChooseUs">
                            Obtenga Internet rápido y confiable
                            con más flexibilidad.
                        </div>
                    </div> */}

                    <div className="itemChooseUs">
                        <div className="itemTitleChooseUs">
                            Sin planes de compromiso anual
                        </div>
                        <div className="itemDescriptionChooseUs">
                            Nunca te quedes encerrado en un plan. No tener contratos anuales es parte de la libertad que experimentarás con Fiber peru.
                        </div>
                    </div>
                    <div className="itemChooseUs">
                        <div className="itemTitleChooseUs">
                            Sin límites de datos
                        </div>
                        <div className="itemDescriptionChooseUs">
                            Disfruta de la diversión sin fin en línea. Con datos mensuales ilimitados, puede conectarse todo lo que quiera, cuando quiera, sin cargos por excedentes.</div>
                    </div>


                </div>
            </div>
            <div className="plan-info-column">
                <div className="plan-info-video">
                    <YoutubeEmbed embedId="LJHvboWCn9s"/>
                </div>
            </div>
        </div>
    );
}
export default PlanInfo;
