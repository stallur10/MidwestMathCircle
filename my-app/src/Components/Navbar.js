import React from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";


function Navbar(){
    const navRef= useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }


    return(
        <header>
            <h3>MWMC</h3>
            <nav ref={navRef}>
                <Link to="/about">About Us</Link>
                <Link to="/home">Home</Link>
                <Link to="/register">Register</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn"  onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;