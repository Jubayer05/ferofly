import React from "react";
import quote from "../../img/quote.png";
import ReviewCarousel from "./ReviewCarousel";
import "./Todo.css";

const Todo = () => {
  const todoData = [
    {
      id: 1,
      title: "Wineries Tour",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: 2,
      title: "Cultural Sites",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: 3,
      title: "Market Tour",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: 4,
      title: "Leisure Activities",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: 5,
      title: "Birds Safari",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: 6,
      title: "Horse Riding",
      text: "I'm a paragraph. Click here to add your own text and edit me.",
    },
  ];
  return (
    <div className="todo" id="todo">
      <h2 className="todo__heading">THINGS TO DO</h2>
      <div className="todo__content">
        {todoData.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))}
      </div>
      <div className="review">
        <div className="review__content">
          <h2 className="review__heading">GUEST REVIEW</h2>
          <img src={quote} alt="quote" className="review__img" />
          <ReviewCarousel />
        </div>
      </div>
    </div>
  );
};

export default Todo;

const TodoItem = ({ item }) => {
  return (
    <div className="todoItem">
      <h3 className="todoItem__heading">{item.title}</h3>
      <p className="todoItem__text">{item.text}</p>
    </div>
  );
};
