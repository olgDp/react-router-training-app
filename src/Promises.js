import React, { Component } from "react";

const wrapperStyles = {
  color: "white",
  width: "1280px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gridGap: "48px"
};

const imgStyles = {
  dispay: "block",
  maxWidth: "100%",
  height: "auto"
};

class Promises extends Component {
  state = {
    movies: null
  };

  componentDidMount() {
    this.getDatawithFetch();
  }
  getDatawithFetch = () => {
    const search = "superman";
    const url = `http://www.omdbapi.com/?s=${search}&apikey=4d3d20a5`;
    fetch(url)
      .then(response => response.json())
      .then(movies => {
        return movies.Search.map(movie => (
          <div key={movie.imdbID}>
            <img style={imgStyles} src={movie.Poster} alt={movie.Poster} />
            <div style={{ textAlign: "center" }}>{movie.Title}</div>
          </div>
        ));
      })
      .then(movies =>
        this.setState(state => {
          return { movies };
        })
      )
      .catch(error => <p>error - {error}</p>);
  };

  render() {
    const { movies } = this.state;
    return (
      <div style={wrapperStyles}>
        {/* <h1>Hello from promises</h1> */}
        {movies}
      </div>
    );
  }
}

export default Promises;
