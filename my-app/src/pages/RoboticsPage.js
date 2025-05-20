import React, { useEffect } from 'react';
import './RoboticsPage.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import InfoBox from '../Components/InfoBox';
import Slider from '../Components/Slider';
import roboticsForAllLogo from '../Images/Robotics/RoboticsForAll.png';

export default function RoboticsPage() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <div className='robotics-App'>
        <div className='robotics-bigDiv'>
          <div className='robotics-intro'>
            <h1 className='robotics-header'>Robotics Program</h1>
            <button className='robotics-signUp' onClick={() => window.open('https://form.jotform.com/251397828114159', '_blank')}>Register Now</button>
            <a href="#robotics-nextSessions" className="robotics-link">Session Dates ↓</a>
          </div>
          <Slider className="robotics-mySlide"/>
        </div>

        <div className='robotics-boxesDiv'>
          <div className='robotics-miniBoxesDiv'>
            <InfoBox mainText={"Beginner"} littleText={"Friendly"} isRobotics={true}/>
            <InfoBox mainText={"VEX GO"} littleText={"Certified"} isRobotics={true}/>
            <InfoBox mainText={"Top-Tier"} littleText={"Curriculum"} isRobotics={true}/>
          </div>
        </div>

        <div className="robotics-aboutClasses">
          <h2 className="robotics-aboutClassesTitle" data-aos="flip-up" data-aos-duration='1100'>Program Details</h2>
          <div className="robotics-classBox">
            <div className='robotics-box' data-aos='fade-right' data-aos-duration='2200'>
              <h3 className='robotics-classNames'>Hands-on Learning</h3>
              <div className='robotics-classDesc'>
                Students will work with VEX GO Robotics kits, learning to build and program robots. 
                Each kit is shared among 3 students, ensuring everyone gets hands-on experience while 
                learning to collaborate effectively.
              </div>
            </div>
            <div className='robotics-box robotics-box2' data-aos='fade-up' data-aos-duration='2200'>
              <h3 className='robotics-classNames'>Core Concepts</h3>
              <div className='robotics-classDesc'>
                Learn essential robotics concepts including autonomous control, sensor integration, 
                and mechanical systems. Students will explore simple machines like lifts, pulleys, 
                and levers through practical applications.
              </div>
            </div>
            <div className='robotics-box' data-aos='fade-left' data-aos-duration='2200'>
              <h3 className='robotics-classNames'>Programming Skills</h3>
              <div className='robotics-classDesc'>
                Develop programming skills by coding robots to navigate obstacles and complete 
                challenges. Students will use their Chromebooks to program and control their robots, 
                learning valuable coding concepts along the way.
              </div>
            </div>
          </div>
        </div>

        <div id='robotics-nextSessions' className="robotics-nextsession robotics-nextSessions">
          <h2 className="robotics-nextTitle" data-aos='fade-up' data-aos-duration='1600'>Session Schedule</h2>
          <center><table className='robotics-sessionTable robotics-table' data-aos='flip-down' data-aos-duration='1600'>
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
                <td>June 1</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 2</td>
                <td>June 8</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 3</td>
                <td>June 15</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 4</td>
                <td>June 22</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 5</td>
                <td>June 29</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 6</td>
                <td>July 6</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 7</td>
                <td>July 13</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
            </tbody>
          </table></center>
          <div className="robotics-footnote">
            Sponsored by <img src={roboticsForAllLogo} alt="Robotics For All" className="robotics-sponsor-logo" />
          </div>
        </div>
      </div>
    </>
  );
} 