import React from 'react';

import './App.css';

import AboutMe from './components/AboutMe';
import Projects from './components/projects';
import ContactMe from './components/contac-form';
import Menu from './components/menu'



function App() {

  return (
    <div className="App">
    
      <AboutMe/>

      <Projects/>
  
      <ContactMe/>
      
      <Menu/>
    </div>
  );
}

export default App;