import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RegisterPage from './pages/RegisterPage';
import OurTeamPage from './pages/OurTeamPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);