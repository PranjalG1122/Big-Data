import React, {useEffect,useState} from "react"
import {Link} from 'react-router-dom'

// false-contact is used to style when it's in mobile mode.

export default function Navbar() {
    const [click, setClick] = useState(true);
    function clicked() {
        setClick(!click)
    }

    // const [windowDimenion, detectHW] = useState({
    //     winWidth: window.innerWidth,
    //     winHeight: window.innerHeight,
    //   })
    
    //   const detectSize = () => {
    //     detectHW({
    //       winWidth: window.innerWidth,
    //       winHeight: window.innerHeight,
    //     })
    //   }
    
    //   useEffect(() => {
    //     window.addEventListener('resize', detectSize)
        
    
    //     return () => {
    //       window.removeEventListener('resize', detectSize)
    //     }
    //   }, [windowDimenion])
    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-button-home'>
                        <Link to='/' onClick={setClick}>Home</Link>
                        <button className='navbar-mobile-button' onClick={clicked}>
                            {click ? <i className='fas fa-bars'></i> : <i className='fas fa-times'></i>}
                        </button>
                    </div>
                    <div className={click ? 'navbar-button-middle' : 'false-contact'}>  
                        <Link to='/references' onClick={setClick}>References</Link>
                        <Link to='/about-us' onClick={setClick}>About Us</Link>
                        <Link to='/contact-us' onClick={setClick}>Contact Us</Link>
                    </div>
                </div>
            </nav>
        </>        
    )
    
}
