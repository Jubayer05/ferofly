import React from "react";
import "./Service.css";
import image1 from "../../img/service/breakfast.png";
import image2 from "../../img/service/gardening.png";
import image3 from "../../img/service/swimming.png";
import image4 from "../../img/service/wifi.png";
import image5 from "../../img/service/cleaning-tools.png";
import image6 from "../../img/service/dining.png";
import ServiceItem from "./ServiceItem/ServiceItem";

const Service = () => {
  const service = [
    {
      id: 1,
      icon: image1,
      title: "Breakfast",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: 2,
      icon: image2,
      title: "Garden",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: 3,
      icon: image3,
      title: "Pool",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: 4,
      icon: image4,
      title: "Free Wifi",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: 5,
      icon: image5,
      title: "Daily Housekeeping",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: 6,
      icon: image6,
      title: "In-Room Dining Service",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
  ];

  return (
    <div className="service" id="service">
      <h2 className="service__heading">OUR SERVICES</h2>
      <div className="service__content">
        {service.map((item) => (
          <ServiceItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Service;
