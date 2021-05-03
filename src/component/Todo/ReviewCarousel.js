import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default function ReviewCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  const text = [
    {
      id: 1,
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: 2,
      text:
        "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      id: 3,
      text:
        "I'm a testimonial. Click to edit me and add text that says something nice about you and your services",
    },
  ];

  return (
    <Slider {...settings}>
      {text.map((item) => (
        <div key={item.id}>
          <p className="review__text">" {item.text} "</p>
        </div>
      ))}
    </Slider>
  );
}
