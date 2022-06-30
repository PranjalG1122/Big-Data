import React, {useState} from "react"
import {Link} from 'react-router-dom'


export default function Navbar() {
    const [click, setClick] = useState(false); 
    function handleClick() {
        setClick(!click)
    }
    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>TRVL</Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <Link to='/test' path='./components/Main'>yo</Link>
                </div>  
            </nav>
        </>        
    )
    
}
