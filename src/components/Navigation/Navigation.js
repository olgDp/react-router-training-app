import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

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
    const categories = ["design", "javascript", "react"];
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
