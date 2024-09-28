import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BestSellers from './components/BestSellers';
import Collections from './components/Collections';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <BestSellers />
      <Collections />
      
    </div>
  );
}

export default App;
