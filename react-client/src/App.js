import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from '../../daisyui/src/components/Navbar';
import Footer from '../../daisyui/src/components/Footer';
import Home from '../../daisyui/src/pages/home';
import Profile from '../../daisyui/src/pages/profile';
import About from '../../daisyui/src/pages/about';
import ErrorPage from '../../daisyui/src/pages/notfound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
