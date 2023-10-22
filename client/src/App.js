import './App.css';
import React from 'react';

import AppRouter from './routes/AppRoutes';
import Navbar from './componets/NavBar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
