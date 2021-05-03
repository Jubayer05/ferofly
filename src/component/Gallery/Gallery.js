import React, { Component } from "react";
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Gallery extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      pauseOnHover: false,
    };

    const galleryImages = [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1549276755-1bbd36282c6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FyZGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1594568773147-a072c75e71c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3dpbW1pbmclMjBwb29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ];
    return (
      <div className="gallery" id="gallery">
        <h2 className="gallery__heading">GALLERY</h2>
        <Slider {...settings}>
          {galleryImages.map((item) => (
            <div key={item.id} className="galleryImg__container">
              <img className="gallery__img" src={item.image} alt={item.id} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
