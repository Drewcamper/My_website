import calculatorPP from '../images/calculatorbg.png';
import tictactoePP from '../images/tic-tac-toe.png';
import todoPP from '../images/todo.png';
import weatherPP from '../images/weather.png';
import  {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import ContactMe from './contac-form'

import '../styling/projects.css';

export default function Projects(){
    return(  
      //   <BrowserRouter>
    
      //   <nav>
      //     <div className='projects_grid' id="Projects">
      //       <div className='panels'>
      //         <NavLink to="/" >
      //           <div className='jump'>
      //             <div className='items'>
      //               <img className='projectPictures' src={todoPP} alt='Todo App' ></img>
      //             </div>
                  
      //           </div>
      //         </NavLink>   
  
      //       </div>
      //     </div> 
      //   </nav>
  
      //   <Routes>
      //     <Route exact path='/' element={<ContactMe/>} />
      //   </Routes>
        
      // </BrowserRouter>
        


        <div className='projects_grid' id="Projects">
            <div className='panels'>
                <div className='jump'>
                    <a className='items' href='https://todo.korosiandras.com' target='_blank' rel="noreferrer">
                        <div>
                            <img className='projectPictures' src={todoPP} alt='Todo App'></img>                    
                        </div>                                           
                    </a> 
                        
                    <div className='btntextbox'>
                        <div className='explanation'>Todo App</div>
                        <p className='description'>A clean Todo App straight to the point. In this project I used React Hooks and UUID to easily manage the state of the notes and to give each of them a unique id. Material-UI gives an oportunity to make user-friendly look to the page.</p>
                        <a className='codeBtn' href='https://github.com/Drewcamper/todo-app' target='_blank' rel="noreferrer">View the code</a>                
                    </div>                
                </div>  
                <div className='jump'>
                    <a className='items' href='https://weather.korosiandras.com' target='_blank' rel="noreferrer">
                        <div>
                            <img className='projectPictures' src={weatherPP} alt='Weather App'></img>                    
                        </div>                                           
                    </a> 
                        
                    <div className='btntextbox'>
                        <div className='explanation'>Weather App</div>
                        <p className='description'>Weather forecast application using OpenWeatherMap api. In this projects I learned about fetching data, error handling, hiding private information (loading environment variables from dotenv file) and early returns.</p>
                        <a className='codeBtn' href='https://github.com/Drewcamper/weather-app' target='_blank' rel="noreferrer">View the code</a>                   
                    </div>                
                </div>
                <div className='jump'>
                    <a className='items' href='https://calculator.korosiandras.com' target='_blank' rel="noreferrer">
                        <div>
                            <img className='projectPictures' src={calculatorPP} alt='calculator'></img>                    
                        </div>                                           
                    </a> 
                    
                    <div className='btntextbox'>
                        <div className='explanation'>Calculator</div>
                        <p className='description'>A calculator for everyday use. I worked mostly with RegExp, event handlers, callback functions. Implementing eval in the right way was also a key figure. A more advanced version of this is on the way...</p>
                        <a className='codeBtn' href='https://github.com/Drewcamper/calculator' target='_blank' rel="noreferrer">View the code</a>                    
                    </div>
                
                </div>
                <div className='jump'>
                    <a className='items' href='https://tic-tac-toe.korosiandras.com/' target='_blank' rel="noreferrer">
                        <div>
                            <img className='projectPictures' src={tictactoePP} alt='tic-tac-toe'></img>                    
                        </div>                                           
                    </a> 
                    
                    <div className='btntextbox'>
                        <div className='explanation'> Tic-Tac-Toe</div>
                        <p className='description'>It is always time to have a little fun. Using fundamentals gave me a good chance to practice Hooks, Loops, Conditional (ternary) operators. Looking forward to make a non-zero-sum game, to bring joy and balance in the game without losing.</p>
                        <a className='codeBtn' href='https://github.com/Drewcamper/tic-tac-toe' target='_blank' rel="noreferrer"> View the code</a>                    
                    </div>            
                </div>
                
            </div>

        </div>
    )
}