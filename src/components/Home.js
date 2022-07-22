import React from "react"
import {Link} from 'react-router-dom'
import data_home from './data-home'

export default function Home() {
    const dataHome = data_home.map(item => {
        return(
            <div className='home-data-home'>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
            </div>
        )
    }) 
    return (
        <main className="home">
            <div className='home-background-image'>
                <div>
                    <h1>Big Data Analytics in Banking</h1>
                </div>
            </div>   
            <div className='home-intro-container'>
                <div className='home-intro-text'>
                    {dataHome}
                </div>
                <div className='home-intro-sidebar'>
                    <h1>Categories</h1>
                </div>
            </div>
            <div className='home-about-us'>
                <h1>Get to Know Us More</h1>
                <Link to='/about-us'>About Us</Link>
            </div>
        </main>
    )
}