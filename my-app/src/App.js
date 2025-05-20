import MainPage from './pages/MainPage';
import OurTeamPage from './pages/OurTeamPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import RegisterPage from './pages/RegisterPage';
import {Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import SuccessPage from './pages/SuccessPage';
import RoboticsPage from './pages/RoboticsPage';

//161853 blue
//ec255a red
//faedf0 white
function App() {
  return (
    <div>
      <Navbar/>
      <div>
          <Routes>
            <Route index element={<RegisterPage />} />
            <Route path="/ourteam" element={<OurTeamPage />} />
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/robotics" element={<RoboticsPage />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}



export default App;
