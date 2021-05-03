import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__heading">CONTACT US</h2>
        <div className="contact__info">
          <p className="contact__email">email@mywebsite.com</p>/
          <p>500 Terry Francois Street, San Francisco, CA 94158</p>/
          <p>Tel: 123-456-7890 </p>
        </div>
        <div className="contact__inputBox">
          <input className="input__name" type="text" placeholder="Name*" />
          <input className="input__email" type="text" placeholder="Email*" />
          <input
            className="contact__subject"
            type="text"
            placeholder="Subject*"
          />
          <textarea
            className="input__message"
            type="text"
            placeholder="Message*"
          />
          <button className="contact__btn primary__btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
