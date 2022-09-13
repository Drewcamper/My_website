export default function Menu (){
    return <div className='menuContainer'>
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
}