import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home.jsx';
import Navbar from '../componets/NavBar/Navbar.jsx';
import About from '../pages/About/About.jsx';
import Gallery from '../pages/Gallery/Gallery.jsx';
import Login from '../pages/Login/Login.jsx';

function AppRouter() {
  return (
    <div>
      <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );
}

export default AppRouter;