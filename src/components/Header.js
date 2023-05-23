import React, {useState, useEffect} from "react";
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import logo from "../images/logo2-1.png";
import {FaBars, FaTimes} from "react-icons/fa";


const Header = () => {
    const [click, setClick] = useState(false);
    const handleclick = () => {
        setClick(!click);
    };
    return (
        <header>
            <div className="nav-area">
                <Link to="/" className="logo">
                    <img src={logo}
                        style={
                            {
                                marginLeft: "0px",
                                marginRight: "10px",
                                width: "8rem",
                                height: "4rem"
                            }
                        }/>
                </Link>
                <Navbar setClick={setClick}
                    click={click}
                    handleclick={handleclick}/>
                <div className="mobileIcon"
                    onClick={handleclick}>
                    {
                    click ? <FaTimes/>: <FaBars/>
                } </div>
            </div>
        </header>
    );
};

export default Header;
