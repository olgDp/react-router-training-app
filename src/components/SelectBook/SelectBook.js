import React from "react";
import "./SelectBook.css";

const SelectBook = () => {
  return (
    <div className="SelectBook">
      <img src="/img/arrow-up.png" alt="arrow-up" />
      <h2>Please select category</h2>
      <img className="book" src="/img/notebook.svg" alt="select" />
    </div>
  );
};

export default SelectBook;
