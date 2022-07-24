import React, {useEffect,useState} from "react"
import {Link} from 'react-router-dom'

export default function Navbar() {
    const [click, setClick] = useState(true);
    function clicked() {
        setClick(!click)
    }
    return(
        <>
            <nav className='navbar'>
                <div className='navbar-button-home'>
                    <Link to='/' onClick={setClick}>Home</Link>
                    <button className='navbar-mobile-button' onClick={clicked}>
                        <i className={click ? 'fas fa-bars' : 'fas fa-times'}></i>
                    </button>
                </div>
                <div style={click ? {right: '-100%'} : {right: '0'}} className='navbar-button-middle'>  
                    <Link to='/references' onClick={setClick}>References</Link>
                    <Link to='/about-us' onClick={setClick}>About Us</Link>
                    <Link to='/contact-us' onClick={setClick}>Contact Us</Link>
                </div>
            </nav>
            
        </>        
    )
}