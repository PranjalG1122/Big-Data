import React, {useState, useEffect} from 'react'
import data_contactUs from './data-contactUs'

export default function ContactUs() {
    const dataContactUs = data_contactUs.map(item => {
        return(
            <div className='contact-us-info'>
                <h1>{item.location}</h1>
                <p><i class="fa-solid fa-house contact-icon"></i> <i>{item.address}</i></p>
                <p><i class="fa-solid fa-phone contact-icon"></i> {item.phone}</p>
                <p><i class="fa-solid fa-envelope contact-icon"></i> <b>{item.email}</b></p>
            </div>
        )
    })
    return(
        <>
            <section className='contact-us'>
                <div className='contact-us-background'>
                    <h1>Contact Us</h1>
                </div>
                <div>
                    <h2>Our Many Locations</h2>
                </div>
                <div className='contact-us-container'>
                    {dataContactUs}
                </div>
                <div className='contact-us-message-container'>
                    <input type='text' placeholder='Name'></input>
                    <input type='text' placeholder='Surname'></input>
                    <input type='text' placeholder='Phone'></input>
                    <input type='text' placeholder='Email'></input>
                </div>
            </section>
        </>
    )
}