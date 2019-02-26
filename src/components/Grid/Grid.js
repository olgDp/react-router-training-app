import React from "react";
import { Redirect } from "react-router-dom";
import "./Grid.css";
import Book from "../Book";
import books from "../../books";

const Grid = ({ category, columns = 4 }) => {
  const categories = Object.keys(books);

  if (categories.indexOf(category) === -1) {
    return <Redirect to="/pageNotFound" />;
  }

  const renderBooks = books[category].map(book => {
    return <Book key={book.id} {...book} category={category} />;
  });

  return <div className="Grid">{renderBooks}</div>;
};

export default Grid;
