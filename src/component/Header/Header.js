import {
  faFacebookF,
  faInstagram,
  faTripadvisor,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCaretDown,
  faCaretUp,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [adultNum, setAdultNum] = useState(1);
  const [kidsNum, setKidsNum] = useState(0);

  return (
    <div className="header">
      <div className="header__content">
        <h1>Ferofly</h1>
        <p className="header__text">Magnify your Journey</p>
      </div>
      <div className="header__bg"></div>
      <div className="header__form">
        <div className="header__calender">
          <p>Check In</p>
          <input type="date" name="" id="" />
        </div>
        <div className="header__calender">
          <p>Check Out</p>
          <input type="date" name="" id="" />
        </div>
        <div className="header__count">
          <p>Adult</p>
          <div className="count__box">
            <span className="count__num">{adultNum}</span>
            <p>
              <span onClick={() => setAdultNum(adultNum + 1)}>
                <FontAwesomeIcon icon={faCaretUp} />
              </span>
              <span onClick={() => adultNum > 1 && setAdultNum(adultNum - 1)}>
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </p>
          </div>
        </div>
        <div className="header__count">
          <p>Kids</p>
          <div className="count__box">
            <span className="count__num">{kidsNum}</span>
            <p>
              <span onClick={() => setKidsNum(kidsNum + 1)}>
                <FontAwesomeIcon icon={faCaretUp} />
              </span>

              <span onClick={() => kidsNum > 0 && setKidsNum(kidsNum - 1)}>
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </p>
          </div>
        </div>
        <button className="header__btn">Search</button>
      </div>
      <FontAwesomeIcon className="icon tripadvisor" icon={faTripadvisor} />
      <FontAwesomeIcon className="icon facebook" icon={faFacebookF} />
      <FontAwesomeIcon className="icon instagram" icon={faInstagram} />
      <FontAwesomeIcon className="commentDots" icon={faCommentDots} />
    </div>
  );
};

export default Header;
