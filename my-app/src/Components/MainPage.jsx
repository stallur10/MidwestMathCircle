import './MainPage.css'
import Slider from './Slider';

function MainPage() {
  return (
    <>
    <div className='bigDiv'>
      <div className='intro'>

        <h1 className='header'>We Are Midwest Math Circle</h1>
        <button className='registerBtn'>{"Register Now"}</button>

      </div>

      <Slider className="mySlide"/>
    </div>

    <div className='bigDiv reverse'>

      <div className='aboutTextDiv'>
        <h1>About Us</h1>
        <h3 className='aboutD'>As Albert Einstein once said, "Education is not the learning of facts but the training of minds to think". At MWMC, we embody this philosophy. 
        We grew frustrated with the approach schools take to math </h3>
      </div>

      <img src={require("../Images/download.jpeg")} alt='hi' className="aboutImg"/>

    </div>
    </>
  );
}

export default MainPage;