import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';



function AppRouter() {
  return (
    <Routes>
        
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* Otras rutas */}
    </Routes>
  );
}

export default AppRouter;