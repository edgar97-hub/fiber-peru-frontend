import React, {useState, useEffect} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons/lib";
import logo from "../../images/logo2-1.png";
import "./navbar.scss";


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };

    return (
        <>
            <div className="nav">
                <div className="navbarContainer">
                    <a className="navLogo" href="/">
                        <img className="logo"
                            src={logo}
                            style={
                                {
                                    marginLeft: "0px",
                                    marginRight: "100px",
                                    // marginTop: "0px",
                                    width: "8rem",
                                    height: "4rem",
                                    // borderRadius: "9px",
                                    // backgroundColor: "black",
                                }
                            }/>
                    </a>
                    <div className="mobileIcon"
                        onClick={handleClick}>
                        {
                        click ? <FaTimes/>: <FaBars/>
                    } </div>

                    <ul id="submenu">
                        <li className="">
                            <a>test1</a>

                        </li>
                        <li className="">
                            <a>test2</a>
                        </li>
                        <li className="">
                            <a>test3</a>
                        </li>
                       
                    </ul>

                    <ul className="navMenu"
                        onClick={handleClick}
                        style={
                            {
                                left: click ? 0 : "-100%",
                                // display: click ? "visible" : "hidden",
                                // opacity: click ? "1" : "0",
                                // left: 0,
                                // transition: "all 0.5s ease",
                            }
                    }>

                        <li className="navItem">
                            <a className="navLinksCustom"
                                // href="#home"
                                onClick={
                                    () => {
                                        window.scrollTo({top: 0, behavior: "smooth"});
                                        document.getElementById("home").focus();
                                    }
                            }>
                                Inicio
                            </a>
                        </li>
                        <li className="navItem ">
                            <a className="navLinksCustom" href="#services">
                                Hogar
                            </a>
                        </li>

                        <li className="navItem">
                            <a className="navLinksCustom" href="#contact">
                                Contáctanos
                            </a>
                        </li>

                        <li className="navItem">
                            <a className="navLinksCustom" href="#contact">
                                Regiones
                            </a>
                        </li>

                        <li className="navItem">
                            <a className="navLinksCustom" href="#contact">
                                Formas de pago
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
