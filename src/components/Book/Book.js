import React from "react";
import "./Book.css";
import { withRouter } from "react-router-dom";

const Book = ({ id, imgUrl, title, author, category, history }) => {
  return (
    <div
      className="Book"
      onClick={() => {
        const newPath = `/category/${category}/${id}`;
        history.push(newPath);
      }}
    >
      <img src={`/img/${imgUrl}`} alt="book" width="240" height="320" />
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </div>
  );
};

export default withRouter(Book);
