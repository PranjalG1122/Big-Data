import React from "react"
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-row'>
                <div className='footer-col'>
                    <ul>
                        <h4>Get in Touch</h4>
                        <li><Link to='/'>About Us</Link></li>
                        <li><Link to='/contact-us'>Contact Us</Link></li>
                        <li><Link to='/references'>References</Link></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <ul>
                        <h4>Media Links</h4>
                        <li><a target='_blank' href='https://www.linkedin.com/in/pranjal-gupta-10a595224/'><i className='fab fa-linkedin-in'></i>   LinkedIn</a></li>
                        <li><a target='_blank' href='https://twitter.com/PranjalG420'><i className='fab fa-twitter'></i>   Twitter</a></li>
                        <li><a target='_blank' href='https://github.com/PranjalG420'><i className='fab fa-github'></i>   GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-copyright'>Copyright &copy;2022 Big Data Analytics. Designed by Pranjal Gupta.</div>
        </footer>
    )
}