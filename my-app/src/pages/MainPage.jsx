import Slider from '../Components/Slider';
import './MainPage.css'
import * as Unicons from '@iconscout/react-unicons';

function MainPage() {
  return (
    <>
    <div className='bigDiv'>
      <div className='intro'>

        <h1 className='header'>We Are Midwest Math Circle</h1>
        <button className='registerBtn'>{"Register Now"}</button>

        <div className='contact'>
          <Unicons.UilFacebook size="60" color="#fcba03"/>
          <Unicons.UilLinkedin size="60" color="#fcba03" />
          <Unicons.UilFastMail size="60" color="#fcba03" />
        </div>

      </div>
      
      <Slider className="mySlide"/>
    </div>

    <div className='bigDiv reverse'>

      <div className='aboutTextDiv'>
        <h1 className='gold'>About Us</h1>
        <h3 className='gold'>As Albert Einstein once said, "Education is not the learning of facts but the training of minds to think". At MWMC, we embody this philosophy. 
        We grew frustrated with the approach schools take to math, teaching a variety of concepts,
        but only enough to solve a few cookie cutter problems. We take the opposite approach, teaching our students so
        that they can look at a problem they'd never seen before, and break it down to solve it. </h3>
      </div>

      <img src={require("../Images/download.jpeg")} alt='hi' className="aboutImg"/>

    </div>
    
    </>
  );
}

export default MainPage;