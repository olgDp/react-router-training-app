import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";
import books from "../../books";

class Navigation extends Component {
  state = {
    category: ""
  };

  componentDidMount() {
    const currentPath = this.props.location.pathname;

    let category = "";

    if (currentPath !== "/") {
      category = this.props.match.params["category"];
    }

    this.setState({ category });
  }

  onClickHandler = category => {
    this.setState({ category });

    const newPath = `/category/${category}`;
    this.props.history.push(newPath);
  };

  render() {
    const categories = Object.keys(books);
    
    const links = categories.map(category => {
      const active = category === this.state.category ? "active" : "";

      return (
        <Link
          key={category}
          className={active}
          to={`/category/${category}`}
          onClick={() => this.onClickHandler(category)}
        >
          {category}
        </Link>
      );
    });

    return <div className="Navigation">{links}</div>;
  }
}

export default withRouter(Navigation);
