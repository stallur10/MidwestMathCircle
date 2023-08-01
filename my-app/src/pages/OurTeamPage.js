import { useEffect} from 'react';
import './OurTeamPage.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Card from '../Components/Card';
import Typewriter from 'typewriter-effect';
import { SocialIcon } from 'react-social-icons';
import rishi_headshot from "../Images/rishi_headshot.jpg";
import logo from '../Images/logo.png'
import AnvithPic from  '../Images/AnvithPic.png'
import HetaPic from  '../Images/HetaPatel.JPG'
import MeeraPic from  '../Images/MeeraPradeepan.jpeg'
import ShreyasPic from  '../Images/ShreyasPic.jpg'
import VarunPic from  '../Images/VarunM.jpg'


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
      <style>{'body {background-color: #FEFEFF;}'}</style>

      <div className="App-header">
   
                <h1 style={{color: 'white'}}>
                  The Midwest Math Circle Team
                </h1>
                <p style={{width: '270px', color: 'white'}}>
                  
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
                  body='Rishi Kanchi is a rising junior at Fremd High School and is an integral member of the Fremd Math Team, being on the executive board. Additionally, Rishi has qualified for the AIME invitational math contest. He is also a part of the ARML math team. '
                  />

                <Card 
                  title='Anvith Kotha'
                  imageURL= {AnvithPic}
                  body='Anvith is a rising senior at Conant High School. He used to think that math was rigid and formulaic, but discovered the creativity and beauty behind it through competition math. In his free time, he likes to play the violin, run, and play video games.'
                  />
                <Card 
                  title='Meera Pradeepan'
                  imageURL= {MeeraPic}
                  body='Meera Pradeepan is a Schaumburg High School alumni and rising freshman at Carnegie Mellon University, where she plans on majoring in Computer Science. She has experience with competition mathematics and was a state qualifier for the ICTM orals competition. In her free time, she enjoys biking and cooking.'
                  />   

              
        </div>

        <div className='mentor-cards2'>
                <Card 
                  title='Varun Mittal'
                  imageURL= {VarunPic}
                  body='I go to Ducky University because i really like ducks and basketball'
                  />

                <Card 
                  title='Shreyas Talluri'
                  imageURL= {ShreyasPic}
                  body='Shreyas is a rising Senior at Conant High High School. He loves Computer Science and Physics. He is part of Conants Varsity Basketball Team and is Captain of Conants PF Debate Team'
                  />

                <Card 
                  title='Heta Patel'
                  imageURL= {HetaPic}
                  body='Heta is a senior at Schaumburg High School. She loves math & participated in math olympiad through elementary school. When she was a freshman, she joined math team wand found her passion for math again. She hopes to not only teach math, but to help kids find a passion for math.'
                  /> 

             
{/* 
                <Card 
                  title='TBA'
                  imageURL= {logo}
                  body=''
                  />  

                <Card 
                  title='MWMC'
                  imageURL= {logo}
                  body=''
                  />    */}
         </div>

       </div>
      </div>
      
      <div  className="web-devs">

        <h1 style={{marginTop: '70px', fontSize: 50, fontWeight: 10, color: '#000'}}>
            <Typewriter className="typeW" onInit={(typeWriter) =>{typeWriter.typeString("The Website Developers").start()}}/>
        </h1>

        <div className='web-devs-people'>

          <div className="devs_box Anvith" data-aos="fade-left" data-aos-duration="1900" style={{justifyContent: 'center', flexDirection: 'column', display: 'flex'}}>
                <img class='dev_imgs' src={AnvithPic}  alt="pors" style={{ border: 'solid', borderColor: '#29335C', borderWidth: '5px', borderRadius: "50px", objectFit: 'cover'}}/>
              <div style={{}}>
                <h1>Anvith Kotha</h1>
                <p style={{color: 'white'}}>Rising Senior at Conant Highschool</p>
                <SocialIcon url='?' bgColor="#000"></SocialIcon>
              </div>
          </div>

          <div className="devs_box Shreyas" data-aos="fade-up" data-aos-duration="1900" style={{ justifyContent: 'center', flexDirection: 'column', display: 'flex',marginRight: '12%',marginLeft: '12%'}}>
                <img class='dev_imgs'  src={ShreyasPic}  alt="pors" style={{ border: 'solid', borderColor: '#29335C', borderWidth: '5px', borderRadius: "50px", objectFit: 'cover'}}/>
              <div style={{}}>
                <h1>Shreyas Talluri</h1>
                <p style={{color: 'white'}}>Rising Senior at Conant Highschool</p>
                <SocialIcon url='https://www.instagram.com/stallur10/' bgColor="#000"></SocialIcon>
                {/* <SocialIcon url='https://github.com/stallur10/My-Projects' style={{marginRight: '5px', marginLeft: '5px'}}></SocialIcon> */}
                <SocialIcon url='https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSKkVLjBftbwJZrssdSpgHjnwdXZjCjRzJctmvHSTdVxNTHtsrMnDJBMrLNJhNWWXggKGsfh' bgColor="#000" ></SocialIcon>
              </div>
          </div>


          <div className="devs_box Rishi" data-aos="fade-right" data-aos-duration="1900" style={{justifyContent: 'center', flexDirection: 'column', display: 'flex'}}>
                <img class='dev_imgs' src={Rishi} alt="pors" style={{ border: 'solid', borderColor: '#29335C', borderWidth: '5px', borderRadius: "50px", objectFit: 'contain'}}/>
              <div style={{}}>
                <h1>Rishi Kanchi</h1>
                <p style={{color: 'white', marginBottom: '5px'}}>Rising Junior at Fremd High School</p>
                <SocialIcon url='https://www.linkedin.com/in/rishi-kanchi-57b509281/' target="_blank" bgColor="29335C"></SocialIcon>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
