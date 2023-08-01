import React, { useState, useEffect } from "react";
import {FaBars} from "react-icons/fa"
import { useRef } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../Images/logo.png'


function Navbar(){
    const navRef= useRef();
    const [state, setState] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        if (windowWidth > 768) {
            setState(0)
            document.body.style.overflow = ""
        }

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return(
        <header>
            <div id = 'logo'>
                <img src={logo} height='50px' alt="logo"/>
                <h3 id='mwmc'>MWMC</h3>
            </div>

            <nav ref={navRef}>
                {/* <Link to="/about" onClick={showNavbar}>About Us</Link> */}
                <Link to="/home" onClick={() => {
                    showNavbar()
                    setState(0)
                    document.body.style.overflow = ""
                }}>Home</Link>
                <Link to="/ourteam" onClick={() => {
                    showNavbar()
                    setState(0)
                    document.body.style.overflow = ""
                }}>Our Team</Link>
            </nav>
            <button className="nav-btn"  onClick={() => {
                showNavbar()
                if (state == 0) {
                    setState(1)
                    document.body.style.overflow = "hidden"
                } else {
                    setState(0)
                    document.body.style.overflow = ""
                }
            }}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;