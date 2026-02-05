import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OriginalPage from './pages/OriginalPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurTeam from './pages/OurTeam';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/original" element={<OriginalPage />} />
        <Route path="/our-team" element={<OurTeam />} />
        
      </Routes>
    </Router>
  );
}

export default App;
