import React, { useRef, useEffect, useState } from 'react';
import './RegisterPage.css'; 
import Aos from 'aos';
import "aos/dist/aos.css";
import InfoBox from '../Components/InfoBox';
import mwmc_pics from "../Images/mwmc_pics.mp4"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export default function RegisterPage() {

    const videoRef = useRef(null);
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        Aos.init({});
        if (videoRef.current) {
            videoRef.current.currentTime = getRandomInt(0, 541);
        } 
    }, []);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
        <div className='App'>
            <div className="temporary-banner" style={{
                backgroundColor: '#ffd700',
                color: '#000',
                padding: '10px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1.2em',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
            }}>
                <a href="/robotics" style={{ 
                    color: '#000', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                }}>
                    CHECK OUT OUR NEW ROBOTICS SUMMER PROGRAM
                    <span style={{ fontSize: '0.8em' }}>→</span>
                </a>
            </div>
            <div className='main'>
                <div className="overlay"></div>
                {/*https://www.dropbox.com/scl/fi/183otdxqfiftu9uj8o1s5/Untitled.mp4?rlkey=j79cnaiodwd7xihn3es8nzumr&raw=1*/}
                <video ref={videoRef} src={mwmc_pics} autoPlay loop muted/>
                <div className="content">
                    <h1 id="title">Midwest MATH Circle</h1>
                    <button id='signUp' onClick={() => window.open('https://form.jotform.com/250328181380149', '_blank')}>Sign Up</button>
                    <a href="#nextTitle">Session Dates ↓</a>
                </div>
            </div>
            <div className='bigDiv reverse'>

                <div className='aboutTextDiv'>
                <h1 className='gold'>Philosophy</h1>
                <p className="philDesc" style={{fontSize:'20px'}}>As Albert Einstein once said, "Education is not the learning of facts but the training of minds to think". At MWMC, we embody this philosophy. 
        We grew frustrated with the approach schools take to math, teaching a variety of concepts,
        but only enough to solve a few cookie cutter problems. We take the opposite approach, we offer specialized math tutoring in the Palatine and Schaumburg area to our students so
        that they can look at a problem they'd never seen before, and break it down to solve it. </p>
                </div>
 

            </div>
            <div className='boxesDiv'>
            <div className='miniBoxesDiv'>
                <InfoBox mainText={"90+"} littleText={"Students Taught"}/>
                <InfoBox mainText={"5"} littleText={"Years of Experience"}/>
                <InfoBox mainText={"1000+"} littleText={"Hours Volunteered"}/>
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
                    <thead>
                        <tr>
                            <th>Session</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Session 1</td>
                            <td>June 22</td>
                            <td>2:00 - 3:30 PM</td>
                            <td>Palatine/Schaumburg Library (TBD)</td>
                        </tr>
                        <tr>
                            <td>Session 2</td>
                            <td>June 29</td>
                            <td>2:00 - 3:30 PM</td>
                            <td>Palatine/Schaumburg Library (TBD)</td>
                        </tr>
                        <tr>
                            <td>Session 3</td>
                            <td>July 6</td>
                            <td>2:00 - 3:30 PM</td>
                            <td>Palatine/Schaumburg Library (TBD)</td>
                        </tr>
                        <tr>
                            <td>Session 4</td>
                            <td>July 13</td>
                            <td>2:00 - 3:30 PM</td>
                            <td>Palatine/Schaumburg Library (TBD)</td>
                        </tr>
                        <tr>
                            <td>Session 5</td>
                            <td>July 20</td>
                            <td>2:00 - 3:30 PM</td>
                            <td>Palatine/Schaumburg Library (TBD)</td>
                        </tr>
                        <tr>
                            <td>Session 6</td>
                            <td>July 27</td>
                            <td>2:00 - 3:30 PM</td>
                            <td>Palatine/Schaumburg Library (TBD)</td>
                        </tr>
                        <tr>
                            <td>Session 7</td>
                            <td>August 3</td>
                            <td>2:00 - 3:30 PM</td>
                            <td>Palatine/Schaumburg Library (TBD)</td>
                        </tr>
                    </tbody>
                </table></center>
            </div>
            <div id="faq" className='faqSection'>
                <h2 id="faqTitle" data-aos='fade-up' data-aos-duration='1600'>Frequently Asked Questions</h2>
                <div className='faqContainer' data-aos='fade-up' data-aos-duration='1600'>
                    <div className={`faqItem ${openFaq === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
                        <h3 className='faqQuestion'>
                            What are the benefits of enrolling my child in MWMC's program?
                            <span className="faqIcon">{openFaq === 0 ? '−' : '+'}</span>
                        </h3>
                        <div className='faqAnswer'>
                            By enrolling your child in MWMC's math summer program, you provide them with the opportunity to strengthen their math skills in a supportive, engaging environment. Our program offers students a structured curriculum to help them master core concepts and develop deeper problem solving skills, engaging challenges to provide students the ability to tackle competition and olympiad style questions, and promote future math success for future excellence in math and math competitions.
                        </div>
                    </div>
                    <div className={`faqItem ${openFaq === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
                        <h3 className='faqQuestion'>
                            How will you determine my child's mathematics abilities at MWMC?
                            <span className="faqIcon">{openFaq === 1 ? '−' : '+'}</span>
                        </h3>
                        <div className='faqAnswer'>
                            At the beginning of our session, we will provide every student with an evaluation placement examination to determine their current skills, strengths, and weaknesses. From then, we will place them in one of our mathematics levels (see the next question) and help them progress from their current mathematics abilities.
                        </div>
                    </div>
                    <div className={`faqItem ${openFaq === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
                        <h3 className='faqQuestion'>
                            What are the various levels at MWMC?
                            <span className="faqIcon">{openFaq === 2 ? '−' : '+'}</span>
                        </h3>
                        <div className='faqAnswer'>
                            MWMC has 5 major mathematics levels that we place students in. Note that all of our instructors are fluent in the material and have gone through the curriculum themselves.
                        </div>
                    </div>
                    <div className={`faqItem ${openFaq === 3 ? 'active' : ''}`} onClick={() => toggleFaq(3)}>
                        <h3 className='faqQuestion'>
                            What are the various topics that will be covered?
                            <span className="faqIcon">{openFaq === 3 ? '−' : '+'}</span>
                        </h3>
                        <div className='faqAnswer'>
                            MWMC will go over a variety of topics depending on grade and placement level, including (but not limited to) algebra, number theory, geometry, probability, and more!
                        </div>
                    </div>
                    <div className={`faqItem ${openFaq === 4 ? 'active' : ''}`} onClick={() => toggleFaq(4)}>
                        <h3 className='faqQuestion'>
                            How will MWMC classes be structured?
                            <span className="faqIcon">{openFaq === 4 ? '−' : '+'}</span>
                        </h3>
                        <div className='faqAnswer'>
                            Every MWMC class will last for 90 minutes at Palatine/Schaumburg Library.
                        </div>
                    </div>
                    <div className={`faqItem ${openFaq === 5 ? 'active' : ''}`} onClick={() => toggleFaq(5)}>
                        <h3 className='faqQuestion'>
                            What are the qualifications of MWMC instructors?
                            <span className="faqIcon">{openFaq === 5 ? '−' : '+'}</span>
                        </h3>
                        <div className='faqAnswer'>
                            All MWMC instructors are high achieving high school math juniors and seniors with 4+ years of competitive math experience. The instructors have competed and qualified in various statewide and national level mathematics competitions including (but not limited to) the American Math Contest (AMC), Math Kangaroo, Mathcounts, Illinois Council of Teachers and Mathematics (ICTM), North Suburban Mathematics League (NSML), American Invitational Mathematics Examination (AIME), and the American Regions Mathematics League (ARML).
                        </div>
                    </div>
                    <div className={`faqItem ${openFaq === 6 ? 'active' : ''}`} onClick={() => toggleFaq(6)}>
                        <h3 className='faqQuestion'>
                            How can I get in contact with MWMC to learn more?
                            <span className="faqIcon">{openFaq === 6 ? '−' : '+'}</span>
                        </h3>
                        <div className='faqAnswer'>
                            To get in touch with us, please visit our website at mwmathcircle.org or leave a voicemail at 847-387-2223
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
