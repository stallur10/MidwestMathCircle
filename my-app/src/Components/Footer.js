// Footer.js
import React from 'react';
import './Footer.css';
import logo from '../Images/logo.png'
import facebook from '../Images/facebook.png'
import linkedin from '../Images/linkedin.png'
import phone from '../Images/phone.png'
import email from '../Images/email.png'

function Footer() {
  return (
    <footer style={{ backgroundColor: '#29335C', textAlign: 'center', color: 'white' }}>
        <div id='footerBox'>
            <div id="footerP1">
                <div ><img id='logo' src={logo} height='50px' alt="logo"/></div>
                <div id='mwmcBigFooter'>Midwest Math Circle</div>
            </div>

            <div id='socials'>
                <a href="https://www.facebook.com/midwestmathcircle/" target="_blank">
                    <img class='socialLogo' src={facebook} width="25px" height='25px' alt="logo" />
                </a>

                <a href="https://www.linkedin.com/company/midwest-math-circle" target="_blank">
                    <img class='socialLogo' src={linkedin} width="25px" height='25px' alt="logo" />
                </a>

                <a href="tel:8473872223" target="_blank">
                    <img class="socialLogo" src={phone} width="25px" height="25px" alt="logo" />
                </a>

                <a href="mailto:rishirkanchi@gmail.com">
                    <img class="socialLogo" src={email} width="25px" height="25px" alt="logo" />
                </a>
            </div>

            <div id='copyright'>
                Est. 2017 © 2023 Midwest Math Circle
            </div>
        </div>

         
    </footer>
  );
}

export default Footer;