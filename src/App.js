import './App.css';
import './projects.css';
import './navbar.css';
import './contact.css';
import './toggle.css';
import ContactMe from './contact-form';
import { ThemeContext, themes } from './contexts/ThemeContext';
import React from 'react';
import ToggleDark from './components/toggleDark';
import calculatorPP from './images/calculatorbg.png';
import tictactoePP from './images/tic-tac-toe_m.png';
import todoPP from './images/todo.png';
import weatherPP from './images/weather.png';




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


      


    
      <div id='Home' className='About_Page'>
          <div className='Hello'>Hello!</div>


              <div className='introducing'>I am András Kőrösi, a front-end developer.</div>
              <div className='aboutMe'>I enjoy diving into complex problems and solving them. To create something new and useful which makes people's lives easier on a day to day basis. I am eager to learn new skills to make more efficient, readable code. I am striving for perfection but an enso sign always reminds me of reality.</div>
              
          
      </div>

  {/*projects */}


      <div className='projects_grid' id="Projects">
          <div className='panels'>
          <div className='jump'>
                  <a className='items' href='https://www.w3schools.com/tags/tag_img.asp' target='_blank'>
                    <div>
                    <img className='projectPictures' src={todoPP} alt='Todo App'></img>                    
                    </div>                                           
                  </a> 
                  
                  <div className='btntextbox'>
                      <div className='explanation'>
                        Todo App
                        </div>
                        <p className='description'>A clean Todo App straight to the point. In this project I used React Hooks and UUID to easily manage the state of the notes and to give each of them a unique id. Material-UI gives an oportunity to make user-friendly look to the page.</p>

                      <a className='codeBtn' href='https://github.com/Drewcamper/todo-app' target='_blank'>View the code</a>
                      
                   </div>
              
              </div>  
          <div className='jump'>
                  <a className='items' href='https://www.w3schools.com/tags/tag_img.asp' target='_blank'>
                    <div>
                    <img className='projectPictures' src={weatherPP} alt='Weather App'></img>                    
                    </div>                                           
                  </a> 
                  
                  <div className='btntextbox'>
                      <div className='explanation'>
                        Weather App
                        </div>
                        <p className='description'>Weather forecast application using OpenWeatherMap api. In this projects I learned about fetching data, error handling, hiding private information (loading environment variables from dotenv file) and early returns.</p>

                      <a className='codeBtn' href='https://github.com/Drewcamper/weather-app' target='_blank'>View the code</a>
                      
                   </div>
              
              </div>
              <div className='jump'>
                  <a className='items' href='https://www.w3schools.com/tags/tag_img.asp' target='_blank'>
                    <div>
                    <img className='projectPictures' src={calculatorPP} alt='calculator'></img>                    
                    </div>                                           
                  </a> 
                  
                  <div className='btntextbox'>
                      <div className='explanation'>
                        Calculator
                        </div>
                        <p className='description'>A calculator for everyday use. I worked mostly with RegExp, event handlers, callback functions. Implementing eval in the right way was also a key figure. A more advanced version of this is on the way...</p>

                      <a className='codeBtn' href='https://github.com/Drewcamper/calculator' target='_blank'>View the code</a>
                      
                   </div>
              
              </div>
              <div className='jump'>
                  <a className='items' href='https://www.w3schools.com/tags/tag_img.asp' target='_blank'>
                    <div>
                    <img className='projectPictures' src={tictactoePP} alt='tic-tac-toe'></img>                    
                    </div>                                           
                  </a> 
                  
                  <div className='btntextbox'>
                      <div className='explanation'>
                        Tic-Tac-Toe
                        </div>
                        <p className='description'>It is always time to have a little fun. Using fundamentals gave me a good chance to practice Hooks, Loops, Conditional (ternary) operators. Looking forward to make a non-zero-sum game, to bring joy and balance in the game without losing.</p>

                      <a className='codeBtn' href='https://github.com/Drewcamper/tic-tac-toe' target='_blank'>View the code</a>
                      
                   </div>
              
              </div>
              
             
                  


              
          </div>
               

              

      </div>
      
  
             



{/*navbar*/}



<div className='menuContainer'>


    <div id="fp-nav" className="fp-right" >
        

        <a  href="#top" className='links'>{/*it is not working with #About*/}
          <span className="fp-sr-only">About</span>
          <span></span>
      </a>
   
      
        <a href='#Projects'  className='links'>
          <span className="fp-sr-only" >Projects</span>
          <span></span>
        </a>
    
        <a  href="#Contact_Me" className='links'>
          <span className="fp-sr-only" >Contact</span>
          <span></span>
        </a>
        
    
    </div>
</div>
            

      {/*contact form*/}


       <div id='Contact_Me' className="container">
    <ContactMe/>
      </div>

    


    </div>
  );
}

export default App;