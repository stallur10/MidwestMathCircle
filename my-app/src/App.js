import MainPage from './pages/MainPage';
import OurTeamPage from './pages/OurTeamPage';
import Navbar from './Components/Navbar';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
        <Navbar />
      <div>
          <Routes>
            <Route index element={<OurTeamPage />} />
            <Route path="/home" element={<OurTeamPage />} />
            <Route path="/about" element={<MainPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
