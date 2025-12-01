import { useState } from 'react'
import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Resources from './components/Resources/Resources';
import DeveloperSetup from './components/DeveloperSetup/DeveloperSetup';

function App() {
  return (
    <div className="App">
      <Hero />
      <Work />
      <Skills />
      <Resources />
      <DeveloperSetup />
      <footer>
        <p>2025 Jan Misa</p>
      </footer>
    </div>
  );
}

export default App;