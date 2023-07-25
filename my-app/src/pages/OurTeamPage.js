import { useEffect} from 'react';
import './OurTeamPage.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Card from '../Components/Card';
import Typewriter from 'typewriter-effect';
import { SocialIcon } from 'react-social-icons';
import rishi_headshot from "../Images/rishi_headshot.jpg";
import linkedin from '../Images/linkedin.png'
import logo from '../Images/logo.png'

//npm instals: AOS, typewriter-effect, react-social-icons


function App() {
      useEffect(() => {
        Aos.init({});
    }, []);

    var Anvith=logo
    var Shreyas=logo
    var Rishi= rishi_headshot
    return (
    <div className="App">
      <body> </body>
      <style>{'body {background-color: #0076FF;}'}</style>

      <div className="App-header">
   
                <h1 style={{color: 'yellow'}}>
                  The Midwest Math Circle Team
                </h1>
                <p style={{width: '270px', color: 'yellow'}}>
                  
                <Typewriter className="typeW" onInit={(typeWriter) =>{typeWriter.typeString("THINK. SOLVE. ENJOY.").start()}}/>
                  
                  </p>
      </div>

      <div className='mentors' data-aos="fade-up" data-aos-duration="1500">
        <div className='our-mentors-header'>
           <h1 style={{fontSize: 50, fontWeight: 10, color: 'black'}}>Our Mentors</h1>
        </div>

      <div className='mentors-container'>
        <div className='mentor-cards1'>
                <Card 
                  title='Rishi Kanchi'
                  imageURL= {Rishi}
                  body=''
                  />

                <Card 
                  title='Mentor'
                  imageURL= {logo}
                  body=''
                  />
                <Card 
                  title='Mentor'
                  imageURL= {logo}
                  body=''
                  />   

                <Card 
                  title='Mentor'
                  imageURL= {logo}
                  body=''
                  /> 
        </div>

        <div className='mentor-cards2'>
                <Card 
                  title='Mentor'
                  imageURL= {logo}
                  body=''
                  />

                <Card 
                  title='Mentor'
                  imageURL= {logo}
                  body=''
                  />

                <Card 
                  title='Mentor'
                  imageURL= {logo}
                  body=''
                  />  

                <Card 
                  title='MWMC'
                  imageURL= {logo}
                  body=''
                  />   
         </div>

       </div>
      </div>
      
      <div  className="web-devs">

        <h1 style={{marginTop: '70px', fontSize: 50, fontWeight: 10, color: 'white'}}>
            <Typewriter className="typeW" onInit={(typeWriter) =>{typeWriter.typeString("The Website Developers").start()}}/>
        </h1>

        <div className='web-devs-people'>

          <div className="devs_box Anvith" data-aos="fade-left" data-aos-duration="1900" style={{justifyContent: 'center', flexDirection: 'column', display: 'flex'}}>
                <img class='dev_imgs' src={Anvith} width="100%" height= "65%" alt="pors" style={{ border: 'solid', borderColor: 'yellow', borderWidth: '5px', borderRadius: "50px"}}/>
              <div style={{}}>
                <h1>Anvith Kotha</h1>
                <p style={{color: 'white'}}>Rising Senior at Conant Highschool</p>
                <SocialIcon url='?'></SocialIcon>
              </div>
          </div>

          <div className="devs_box Shreyas" data-aos="fade-up" data-aos-duration="1900" style={{ justifyContent: 'center', flexDirection: 'column', display: 'flex',marginRight: '12%',marginLeft: '12%'}}>
                <img class='dev_imgs' src={Shreyas} width="100%" height= "65%" alt="pors" style={{ border: 'solid', borderColor: 'yellow', borderWidth: '5px', borderRadius: "50px"}}/>
              <div style={{}}>
                <h1>Shreyas Talluri</h1>
                <p style={{color: 'white'}}>Rising Senior at Conant Highschool</p>
                <SocialIcon url='https://www.instagram.com/stallur10/'></SocialIcon>
                {/* <SocialIcon url='https://github.com/stallur10/My-Projects' style={{marginRight: '5px', marginLeft: '5px'}}></SocialIcon> */}
                <SocialIcon url='https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSKkVLjBftbwJZrssdSpgHjnwdXZjCjRzJctmvHSTdVxNTHtsrMnDJBMrLNJhNWWXggKGsfh' ></SocialIcon>
              </div>
          </div>


          <div className="devs_box Rishi" data-aos="fade-right" data-aos-duration="1900" style={{justifyContent: 'center', flexDirection: 'column', display: 'flex'}}>
                <img class='dev_imgs' src={Rishi} alt="pors" style={{ border: 'solid', borderColor: 'yellow', borderWidth: '5px', borderRadius: "50px", objectFit: 'contain'}}/>
              <div style={{}}>
                <h1>Rishi Kanchi</h1>
                <p style={{color: 'white', marginBottom: '5px'}}>Rising Junior at Fremd High School</p>
                <SocialIcon url='https://www.linkedin.com/in/rishi-kanchi-57b509281/' target="_blank" bgColor="yellow"></SocialIcon>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
