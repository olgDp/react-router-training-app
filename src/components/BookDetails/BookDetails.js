import React from "react";
import { Link } from "react-router-dom";
import "./BookDetails.css";
import { Redirect } from "react-router-dom";
import books from "../../books";

const BookDetails = ({ bookId, category }) => {
  const categories = Object.keys(books);
  if (categories.indexOf(category) === -1) {
    return <Redirect to="/pageNotFound" />;
  }

  const book = books[category][bookId - 1];
  if (!book || book.id !== parseInt(bookId)) {
    return <Redirect to="/pageNotFound" />;
  }

  const { imgUrl, title, author } = book;
  return (
    <div className="BookDetails">
      <img src={`/img/${imgUrl}`} alt="book" width="300" height="auto" />
      <div className="info">
        <h2>{title}</h2>
        <span className="author">{author}</span>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          voluptate. Magnam voluptatum qui consequatur mollitia quaerat,
          inventore accusamus, facilis perspiciatis, repudiandae nesciunt
          deserunt et sint. Voluptas, ipsam qui? Illum officiis velit quae,
          minus quaerat odio libero corporis ut, exercitationem quasi voluptate
          voluptatibus voluptates inventore aspernatur repellendus vel ratione
          vitae ducimus cumque. Et mollitia modi earum laboriosam aliquid sed
          voluptate quo in?
        </p>
        <Link to={`/category/${category}`} className="linkToBack">
          ←&nbsp;&nbsp;{category} books
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
