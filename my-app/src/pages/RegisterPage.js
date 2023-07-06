import React, { useState } from 'react'
import './RegisterPage.css';  

export default function RegisterPage() {
  return (
    <div className='App'>
        <div className='main'>
            <div className="overlay"></div>
            <video src="https://www.dropbox.com/s/ej442fe9em0eoq1/mwmc_slideshow.mp4?raw=1" autoPlay loop muted />
            <div className="content">
                <h1 id="title">Register for MWMC</h1>
                <button id='signUp'>Sign Up</button>
            </div>
        </div>
        <div id="aboutClasses">
            <h2 id="aboutClassesTitle" >About Our Classes</h2>
            <div id="classBox">
                <div className='box' id="box1">
                    <h3 className='classNames'>Young Kids</h3>
                    <div className='classDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div className='box' id='box2'>
                <h3 className='classNames'>Middle Kids</h3>
                    <div className='classDesc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className='box' id='box3'>
                <h3 className='classNames'>Old Kids</h3>
                    <div className='classDesc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </div>
        <div id="nextsession">
            <h2 id="nextTitle">Next Sessions</h2>
            <center><table id='sessionTable'>
                <tr>
                    <th>Session Name</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Location</th>
                </tr>
                <tr>
                    <td>Summer Session</td>
                    <td>Sundays</td>
                    <td>2:30 - 4:30</td>
                    <td>Schaumburg Library</td>
                </tr>
                <tr>
                    <td>Winter Session</td>
                    <td>Saturdays</td>
                    <td>3:30 - 5:30</td>
                    <td>Palatine Library</td>
                </tr>
                <tr>
                    <td>Spring Session</td>
                    <td>Sundays</td>
                    <td>2:30 - 4:30</td>
                    <td>Palatine Library</td>
                </tr>
            </table></center>
        </div>
    </div>
  )
}