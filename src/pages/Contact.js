import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import '../styles/Contact.css'
export default function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" action="" method="post">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter full name..."
          />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter email..." id="" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            name="message"
            id=""
            cols="30"
            placeholder="Enter message..."
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
