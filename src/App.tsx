import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OriginalPage from './pages/OriginalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/original" element={<OriginalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
