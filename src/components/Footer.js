import React from "react"


export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-links-all'>
                <div className='footer-title'><h4>Get in Touch</h4></div>
                <div className='footer-container'>
                    <div className='footer-row'>
                        <div className='footer-col'>
                            <ul>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Contact Us</a></li>
                                <li><a href='#'>References</a></li>
                                <li><a href='#'>Something Else</a></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <ul>
                                <li><a href='#'><i className='fab fa-linkedin-in'></i>   LinkedIn</a></li>
                                <li><a href='#'><i className='fab fa-twitter'></i>   Twitter</a></li>
                                <li><a href='#'><i className='fab fa-github'></i>   GitHub</a></li>
                                <li><a href='#'><i className='fab fa-youtube'></i>   YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>Copyright &copy;2022 Big Data Analytics. Designed by Pranjal Gupta</div>
        </footer>
    )
}