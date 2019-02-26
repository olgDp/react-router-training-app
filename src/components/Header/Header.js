import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ title = "Web Designer liblary" }) => {
  return (
    <div className="Header">
      <Link to="/">{title}</Link>
    </div>
  );
};

export default Header;
