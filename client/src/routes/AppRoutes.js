import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Navbar from '../componets/NavBar/Navbar.jsx';



function AppRouter() {
  return (
    <div>
      <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* Otras rutas */}
    </Routes>
    </div>
  );
}

export default AppRouter;