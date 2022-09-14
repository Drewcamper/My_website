import './App.css';
import './toggle.css';

import ContactMe from './contact-form';
import Projects from './projects';
import ToggleDark from './components/toggleDark';
import Menu from './menu'
import AboutMe from './AboutMe';
import { ThemeContext, themes } from './contexts/ThemeContext';

import React from 'react';


function App() {

  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
     
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}        
      </ThemeContext.Consumer>

      <AboutMe/>

      <Projects/>
  
      <ContactMe/>
      
      <Menu/>
    </div>
  );
}

export default App;