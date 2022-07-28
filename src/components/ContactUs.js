import React, { useState, useEffect } from "react";
import data_contactUs from "./data-contactUs";

export default function ContactUs() {
  const dataContactUs = data_contactUs.map((item) => {
    return (
      <div className="contact-us-info">
        <h1>{item.location}</h1>
        <p>
          <i class="fa-solid fa-house contact-icon"></i> <i>{item.address}</i>
        </p>
        <p>
          <i class="fa-solid fa-phone contact-icon"></i> {item.phone}
        </p>
        <p>
          <i class="fa-solid fa-envelope contact-icon"></i> <b>{item.email}</b>
        </p>
      </div>
    );
  });
  return (
    <>
      <section className="contact-us">
        <div className="contact-us-background">
          <h1>Contact Us</h1>
        </div>
        <div>
          <h2>Our Many Locations</h2>
        </div>
        <div className="contact-us-container">{dataContactUs}</div>
        <form
          className="contact-us-message-container pageclip-form"
          action="https://send.pageclip.co/gCAzd0XTTosqx7FS30ZKI4SVfPrMkNnz"
          method="post"
        >
          <input type="text" name="name" placeholder="Name"></input>
          <input type="text" name="surname" placeholder="Surname"></input>
          <input type="tel" name="tel" placeholder="Phone"></input>
          <input type="email" name="email" placeholder="Email"></input>
          <input
            placeholder="Message"
            name="message"
            class="contact-us-message-box"
          ></input>
          <button type="submit" className="pageclip-form__submit">
            submittt
          </button>
        </form>
      </section>
    </>
  );
}
