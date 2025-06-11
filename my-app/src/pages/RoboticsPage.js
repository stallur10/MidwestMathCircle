import React, { useEffect, useState } from 'react';
import './RoboticsPage.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import InfoBox from '../Components/InfoBox';
import Slider from '../Components/Slider';
import roboticsForAllLogo from '../Images/Robotics/RoboticsForAll.png';

export default function RoboticsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    Aos.init({});
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
                <td>June 15</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 2</td>
                <td>June 22</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 3</td>
                <td>June 29</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 4</td>
                <td>July 6</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 5</td>
                <td>July 13</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 6</td>
                <td>July 20</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
              <tr>
                <td>Session 7</td>
                <td>July 27</td>
                <td>3:30 PM - 5:00 PM</td>
                <td>Palatine/Schaumburg Library (TBD)</td>
              </tr>
            </tbody>
          </table></center>
        </div>

        <div id="robotics-faq" className='robotics-faqSection'>
          <h2 id="robotics-faqTitle" data-aos='fade-up' data-aos-duration='1600'>Frequently Asked Questions</h2>
          <div className='robotics-faqContainer' data-aos='fade-up' data-aos-duration='1600'>
            <div className={`robotics-faqItem ${openFaq === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
              <h3 className='robotics-faqQuestion'>
                Is there any cost for the program?
                <span className="robotics-faqIcon">{openFaq === 0 ? '−' : '+'}</span>
              </h3>
              <div className='robotics-faqAnswer'>
                There is an upfront cost of $10 for the entire program. Additionally, the nonprofit Robotics For All provides the robotics kits at no cost to students.
              </div>
            </div>
            <div className={`robotics-faqItem ${openFaq === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
              <h3 className='robotics-faqQuestion'>
                Do the students need to pay $10 for each of the robotics and math programs or just $10 in total even if a student participates in both?
                <span className="robotics-faqIcon">{openFaq === 1 ? '−' : '+'}</span>
              </h3>
              <div className='robotics-faqAnswer'>
                Students need to pay $10 for each program, which will only be a total cost of $20 if they participate in both but only $10 if they participate in one.
              </div>
            </div>
            <div className={`robotics-faqItem ${openFaq === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
              <h3 className='robotics-faqQuestion'>
                How long will sessions typically be?
                <span className="robotics-faqIcon">{openFaq === 2 ? '−' : '+'}</span>
              </h3>
              <div className='robotics-faqAnswer'>
                Each session will last an hour and a half and there will be seven sessions held over seven weeks.
              </div>
            </div>
            <div className={`robotics-faqItem ${openFaq === 3 ? 'active' : ''}`} onClick={() => toggleFaq(3)}>
              <h3 className='robotics-faqQuestion'>
                Is there any equipment needed (computers, tablets, etc.)?
                <span className="robotics-faqIcon">{openFaq === 3 ? '−' : '+'}</span>
              </h3>
              <div className='robotics-faqAnswer'>
                Although coding autonomous robots is part of the program, computers and tablets will be provided by the coordinators and teachers for students. Students will only need pencils to complete mini worksheets about their engineering process for their robots.
              </div>
            </div>
            <div className={`robotics-faqItem ${openFaq === 4 ? 'active' : ''}`} onClick={() => toggleFaq(4)}>
              <h3 className='robotics-faqQuestion'>
                Should students have prior experience or knowledge with robotics?
                <span className="robotics-faqIcon">{openFaq === 4 ? '−' : '+'}</span>
              </h3>
              <div className='robotics-faqAnswer'>
                No prior experience is necessary - this is a completely introductory course. The goal of the program is to introduce students to robotics and spark their interest in STEM-related careers.
              </div>
            </div>
            <div className={`robotics-faqItem ${openFaq === 5 ? 'active' : ''}`} onClick={() => toggleFaq(5)}>
              <h3 className='robotics-faqQuestion'>
                What age ranges are appropriate for this program?
                <span className="robotics-faqIcon">{openFaq === 5 ? '−' : '+'}</span>
              </h3>
              <div className='robotics-faqAnswer'>
                We recommend the program for students in grades 2 through 6. However, students outside this age range who are interested should contact us at rishirkanchi@gmail.com or 847-387-2223 to see if an exception can be made.
              </div>
            </div>
            <div className={`robotics-faqItem ${openFaq === 6 ? 'active' : ''}`} onClick={() => toggleFaq(6)}>
              <h3 className='robotics-faqQuestion'>
                Is there any homework?
                <span className="robotics-faqIcon">{openFaq === 6 ? '−' : '+'}</span>
              </h3>
              <div className='robotics-faqAnswer'>
                No, there is no homework for this course. However, students will complete worksheets during classes to document their progress and help refine their robots.
              </div>
            </div>
          </div>
          <div className="robotics-footnote">
            Sponsored by <img src={roboticsForAllLogo} alt="Robotics For All" className="robotics-sponsor-logo" />
          </div>
        </div>
      </div>
    </>
  );
} 