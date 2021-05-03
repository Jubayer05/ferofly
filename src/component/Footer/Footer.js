import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy;copyright 2021. Inspired by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://ferotechnologies.wixsite.com/mysite-1/"
        >
          Ferofly
        </a>
        . Created by{" "}
        <a target="_blank" rel="noreferrer" href="http://jubayer1.netlify.app">
          Jubayer Ahmed
        </a>
      </p>
    </div>
  );
};

export default Footer;
