import React, {useState} from "react"
import {Link} from 'react-router-dom'


// Home    -----       Big-Data  HDFS  Contact-Us

export default function Navbar() {
    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-button1'><Link to='/'>Home</Link></div>
                    <ul>
                        <li><a href='#'>Big Data</a></li>
                        <li><a href='#'>HDFS</a></li>
                    </ul>
                    <div className='navbar-button1'><Link to='/'>Contact Us</Link></div>
                </div>
            </nav>
        </>        
    )
    
}
