import MainPage from './pages/MainPage';
import OurTeamPage from './pages/OurTeamPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import RegisterPage from './pages/RegisterPage';
import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar/>
      <div>
          <Routes>
            <Route index element={<RegisterPage />} />
            <Route path="/home" element={<RegisterPage />} />
            <Route path="/about" element={<MainPage />} />
            <Route path="/ourteam" element={<OurTeamPage />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}



export default App;
