import React from "react";
import "./ServiceItem.css";

const ServiceItem = ({ item }) => {
  return (
    <div className="serviceItem">
      <img className="serviceItem__img" src={item.icon} alt="" />
      <h3 className="serviceItem__title">{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
};

export default ServiceItem;
