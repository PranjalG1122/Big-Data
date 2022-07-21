import React, {useState, useEffect} from 'react'

export default function ContactUs() {
    return(
        <>
            <section className='contact-us'>
                <h4>Contact Us</h4>
                <div className='contact-us-container'>
                    <div className='contact-us-get-in-touch'>
                        <h3>Get in Touch</h3>
                        <p><i class="fa-solid fa-phone"></i> Phone: 88884444</p>
                        <p><i class="fa-solid fa-envelope"></i> Email: fakemail@gmail.com</p>
                    </div>
                    <div className='contact-us-input'>
                        <h3>Send us a Message</h3>
                        <input placeholder='Name'></input>
                        <input placeholder='Message'></input>
                        <button>Submit</button>
                    </div>
                </div>
            </section>
        </>
    )
}