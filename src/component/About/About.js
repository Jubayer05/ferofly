import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__content">
        <h1 className="about__heading">ABOUT</h1>
        <p className="about__text">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
      </div>
      <div className="about__room" id="rooms">
        <div className="room__content">
          <h2 className="room__heading">OUR ROOMS</h2>
          <p className="about__text room__text">
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <button className="primary__btn">Book a Room</button>
        </div>
      </div>
    </div>
  );
};

export default About;
