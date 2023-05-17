import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import logo from "../images/logo2-1.png";

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link to="/" className="logo">
                    <img  
                        src={logo}
                        style={
                            {
                                marginLeft: "0px",
                                marginRight: "10px",
                                width: "8rem",
                                height: "4rem",
                            }
                        }/>
                </Link>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;
