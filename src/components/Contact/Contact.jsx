import React from "react";
import { Element } from "react-scroll";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact__section">
      <Element name="contacts"></Element>
      <div className="heading">GET in touch</div>
      <div className="overlay__contact"></div>
      <div className="contact__form">
        <div>
          <input type="name" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email Address" />
        </div>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="btn">Send</button>
      </div>
    </div>
  );
};

export default Contact;
