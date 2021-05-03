import React from "react";
import { HashLink } from "react-router-hash-link";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <HashLink to="/home/#home" smooth className="navbar__link" href="#">
        Home
      </HashLink>
      <HashLink to="/home/#about" smooth className="navbar__link" href="#">
        About
      </HashLink>
      <HashLink to="/home/#rooms" smooth className="navbar__link" href="#">
        Rooms
      </HashLink>
      <HashLink to="/home/#service" smooth className="navbar__link" href="#">
        Service
      </HashLink>
      <HashLink to="/home/#gallery" smooth className="navbar__link" href="#">
        Gallery
      </HashLink>
      <HashLink to="/home/#todo" smooth className="navbar__link" href="#">
        SEO & Do
      </HashLink>
      <HashLink to="/home/#contact" smooth className="navbar__link" href="#">
        Contact
      </HashLink>
      <HashLink
        to="/home/#"
        smooth
        href="#"
        className="primary__btn navbar__btn"
      >
        Book a room
      </HashLink>
    </div>
  );
};

export default Navbar;
