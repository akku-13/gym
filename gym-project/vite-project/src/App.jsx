import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Animination.css';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Package from './Components/Package';
import Schedule from './Components/Schedule';
import Services from './Components/Services';
import Contect from './Components/Contect';
import GymJoiningForm from './Components/GymJoiningForm';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <Router>
      <Navbar /> {/* Keep Navbar outside to show on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/classes" element={<Schedule />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/package" element={<Package />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/about" element={<About/>} />
        <Route path="/gymjoiningform" element={<GymJoiningForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
