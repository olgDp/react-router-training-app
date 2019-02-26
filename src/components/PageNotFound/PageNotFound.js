import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <div className="info">
        <h2>404</h2>
        <h3>Page not found</h3>
        <Link to="/">Back to Homepage</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
