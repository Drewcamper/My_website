/* eslint-disable */
import './App.css';
import ContactMe from './contact-form';
//import {useState} from 'react';
import { ThemeContext, themes } from './contexts/ThemeContext';
import React from 'react';
import ToggleDark from './components/toggleDark';
//import { Link } from "react-scroll";
import firstProjectPicture from './images/calculatorbg.png';
import secondProjectPicture from './images/tic-tac-toe_m.png';




function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  //const initialText = 'Show more';
 // const [buttonText, setButtonText] = useState(initialText);


   // const [click, setClick] = useState(false)
    //const handleClick = () => setClick(!click)
    //const scrolling = () => setClick(false);
  


 

  {/*function handleClick() {
    setButtonText('Show less');
   
  }*/}


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
 {/*I don't know why is it not working with smooth scrolling?!?!?!?!         */} 
      

      


    
      <div className='About_Page'>
          <div className='Hello'>Hello!</div>


              <div className='introducing'>I am András Kőrösi, a front-end developer.
       

              <div>
                  <div className="contact">
  
                      <div className="input-fields">
                        
                         {/* 
                          <div className="send-button">
                          
                              <button className="btn btn-info" onClick={handleClick}>{buttonText}</button>
                              
                          </div>
                         */}
                      </div>
               
                  </div>
              </div>

        
          </div>
          
      </div>

  {/*projects */}


      <div className='projects_grid' id="Projects">
          <div className='panels'>
              <div className='jump'>
                  <a className='items' href='https://www.w3schools.com/tags/tag_img.asp' target='_blank'>
                    <div>
                    <img className='projectPictures' src={firstProjectPicture} alt='calculator'></img>                    
                    </div>                                           
                  </a> 
                  
                  <div className='btntextbox'>
                      <div className='explanation'>
                        Calculator
                        </div>
                        <p className='description'>Something for text.Something for text.Something for text.Something for text.Something for text.Something for text.Something for text.</p>

                      <a className='codeBtn' href='https://www.pngarts.com/explore/48251' target='_blank'>View the code</a>
                      
                   </div>
              
              </div>
              <div className='jump'>
                  <a className='items' href='https://www.w3schools.com/tags/tag_img.asp' target='_blank'>
                    <div>
                    <img className='projectPictures' src={secondProjectPicture} alt='tic-tac-toe'></img>                    
                    </div>                                           
                  </a> 
                  
                  <div className='btntextbox'>
                      <div className='explanation'>
                        Tic-Tac-Toe
                        </div>
                        <p className='description'>Something for text.Something for text.Something for text.Something for text.Something for text.Something for text.</p>

                      <a className='codeBtn' href='https://www.pngarts.com/explore/48251' target='_blank'>View the code</a>
                      
                   </div>
              
              </div>
              
             
                  


              
          </div>
               

              

      </div>
      
      <div className='imageTry'>

      </div>
             



{/*navbar on the right*/}


<div>





      {/*
            {menuItems.map((menu) => (
              <li >
                <Link 
                  to={menu.title}
                  smooth={true}
                  offset={-430}
                  duration={500}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
Whyyyy is  it not working?
            
<div>
{menuItems.map((menu) => (
          <div className="content">
            <h1 className="content-header" id={menu.title}>
              {menu.title}
            </h1>
          </div>
        ))}
</div>

*/}
  
    </div>


<div className='menuContainer'>


    <div id="fp-nav" className="fp-right" >
        

        <a  href="#top" className='links'>{/*it is not working with #About*/}
          <span className="fp-sr-only" >About</span>
          <span></span>
      </a>
   
      
        <a href='#Projects'  className='links'>
          <span className="fp-sr-only" >Projects</span>
          <span></span>
        </a>
    
        <a  href="#Contact_Me" className='links'>
          <span className="fp-sr-only" >Contact me</span>
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