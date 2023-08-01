import React, {useEffect } from 'react'
import './RegisterPage.css'; 
import Aos from 'aos';
import "aos/dist/aos.css";
import InfoBox from '../Components/InfoBox';

export default function RegisterPage() {
    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <>
        <div className='App'>
            <div className='main'>
                <div className="overlay"></div>
                <video src="https://www.dropbox.com/s/ej442fe9em0eoq1/mwmc_slideshow.mp4?raw=1" autoPlay loop muted/>
                <div className="content">
                    <h1 id="title">Midwest Math Circle</h1>
                    <button id='signUp' onClick={() => window.open('https://forms.gle/uRPGkWxfKSAEi3Dr7', '_blank')}>Sign Up</button>
                    <a href="#nextTitle">Session Dates ↓</a>
                </div>
            </div>
            <div className='bigDiv reverse'>

                <div className='aboutTextDiv'>
                <h1 className='gold'>Philosophy</h1>
                <p style={{fontSize:'20px'}}>As Albert Einstein once said, "Education is not the learning of facts but the training of minds to think". At MWMC, we embody this philosophy. 
                We grew frustrated with the approach schools take to math, teaching a variety of concepts,
                but only enough to solve a few cookie cutter problems. We take the opposite approach, teaching our students so
                that they can look at a problem they'd never seen before, and break it down to solve it. </p>
                </div>
 
                <img src={require("../Images/download.jpeg")} alt='hi' className="aboutImg"/>

            </div>
            <div className='boxesDiv'>
            <div className='miniBoxesDiv'>
                <InfoBox mainText={"40+"} littleText={"Students Taught"}/>
                <InfoBox mainText={"3"} littleText={"Classes Offered"}/>
                <InfoBox mainText={"4:1"} littleText={"Student-Mentor Ratio"}/>
            </div>
            </div>
   

        
            <div id="aboutClasses">
                <h2 id="aboutClassesTitle" data-aos="flip-up" data-aos-duration='1100'>About Our Classes</h2>
                <div id="classBox">
                    <div className='box' id="box1" data-aos='fade-right' data-aos-duration='2200'>
                        <h3 className='classNames'>Algebra I</h3>
                        <div className='classDesc'>
                            In Algebra 1, students delve into the world of variables, equations, and functions. They gain valuable skills in graphing linear functions, solving quadratic equations, and working with exponents and polynomials. This foundational course sets the stage for more advanced math studies, empowering students to tackle real-world problem-solving with confidence.
                        </div>
                    </div>
                    <div className='box' id='box2' data-aos='fade-up' data-aos-duration='2200'>
                    <h3 className='classNames'>Geometry</h3>
                        <div className='classDesc'>
                            Welcome to Geometry! In this class, students explore the fascinating realm of shapes, angles, and spatial relationships. They'll learn to identify and classify various polygons, triangles, and quadrilaterals while discovering the principles of congruence and similarity. Through interactive activities, they'll explore the properties of circles, calculate areas and volumes, and dive into transformations like reflections, rotations, and translations.
                        </div>
                    </div>
                    <div className='box' id='box3' data-aos='fade-left' data-aos-duration='2200'>
                    <h3 className='classNames'>Counting & Probability</h3>
                        <div className='classDesc'>
                            In Counting & Probability, students embark on an exciting journey of mathematical possibilities. They'll master the art of counting techniques, permutations, and combinations to solve problems involving arrangements and selections. Probability concepts will be explored, helping students understand the likelihood of events and outcomes in various scenarios.
                        </div>
                    </div>
                </div>
            </div>



            <div id="nextsession" className='nextSessions'>
                <h2 id="nextTitle" data-aos='fade-up' data-aos-duration='1600'>Next Sessions</h2>
                <center><table id='sessionTable' data-aos='flip-down' data-aos-duration='1600'>
                    <tr>
                        <th>Session Name</th>
                        <th>Day</th>
                        <th>Time</th>
                        <th>Location</th>
                    </tr>
                    <tr>
                        <td>First Session!</td>
                        <td>August 6</td>
                        <td>2:30 - 4:30</td>
                        <td>Schaumburg Library</td>
                    </tr>
                    <tr>
                        <td>Session 2</td>
                        <td>August 13</td>
                        <td>2:30 - 4:30</td>
                        <td>Palatine Library</td>
                    </tr>
                    <tr>
                        <td>Session 3</td>
                        <td>August 20</td>
                        <td>2:30 - 4:30</td>
                        <td>Schaumburg Library</td>
                    </tr>
                    <tr>
                        <td>Session 4</td>
                        <td>August 27</td>
                        <td>2:30 - 4:30</td>
                        <td>Palatine Library</td>
                    </tr>
                    <tr>
                        <td>Session 5</td>
                        <td>September 4</td>
                        <td>2:30 - 4:30</td>
                        <td>Schaumburg Library</td>
                    </tr>
                    <tr>
                        <td>Session 6</td>
                        <td>September 11</td>
                        <td>2:30 - 4:30</td>
                        <td>Palatine Library</td>
                    </tr>
                    <tr>
                        <td>Session 7</td>
                        <td>September 18</td>
                        <td>2:30 - 4:30</td>
                        <td>Schaumburg Library</td>
                    </tr>
                    <tr>
                        <td>Session 8</td>
                        <td>September 25</td>
                        <td>2:30 - 4:30</td>
                        <td>Palatine Library</td>
                    </tr>
                </table></center>
            </div>
        </div>
        </>
    )
}
