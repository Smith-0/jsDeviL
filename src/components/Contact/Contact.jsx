import React, { useRef } from "react";
import { Element } from "react-scroll";

import { sendForm } from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const form = useRef();
  console.log(process.env.REACT_APP_PUBLIC_KEY);

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="contact__section">
      <Element name="contacts"></Element>
      <div className="heading">GET in touch</div>
      <div className="overlay__contact"></div>
      <div className="contact__form">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input
              type="name"
              className="input"
              placeholder="Name"
              name="name"
            />
            <input
              type="email"
              className="input"
              placeholder="Email Address"
              name="gmail"
            />
          </div>
          <textarea
            name="message"
            id=""
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
