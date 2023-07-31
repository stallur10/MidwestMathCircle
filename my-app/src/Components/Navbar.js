import React from "react";
import {FaBars} from "react-icons/fa"
import { useRef } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../Images/logo.png'


function Navbar(){
    const navRef= useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }


    return(
        <header>
            <div id = 'logo'>
                <img src={logo} height='50px' alt="logo"/>
            </div>

            <nav ref={navRef}>
                <Link to="/home" onClick={showNavbar}>Home</Link>
                <Link to="/ourteam" onClick={showNavbar}>Our Team</Link>
                {/* <Link to="/contact" onClick={showNavbar}>Contact Us</Link>*/}
            </nav>
            <button className="nav-btn"  onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;