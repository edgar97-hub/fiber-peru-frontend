import React, {useState, useEffect} from "react";
import "./info.scss";
import img from "../../../images/fibreoptica.jpg";
import IconBank2 from "../../../images/bank2.jpg";

function Info() {
  return (<div className="payment-methods-info">
    <div className="infoColumnChooseUs">
      <div className="textWrapperChooseUs">
        <h1 className="headingChooseUs">
        Conoce dónde pagar
        tus recibos de manera
        fácil y rápida
        </h1>
        <p className="subtitleChooseUs">
         
        </p>


      </div>
    </div>
    <div className="infoColumnChooseUs">
      <div className="imgWrapperChooseUs">
        <img className="imgChooseUs"
          src={IconBank2}
          alt={""}/>
        <div className="infoColumnDescriptionChooseUs"></div>
      </div>
    </div>
  </div>);
}
export default Info;
