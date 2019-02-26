import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SelectBook from "./components/SelectBook/SelectBook";
import Grid from "./components/Grid";
import PageNotFound from "./components/PageNotFound";
import BookDetails from "./components/BookDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={Navigation} />

          <Route exact path="/category/:category" component={Header} />
          <Route exact path="/category/:category" component={Navigation} />
          <Route exact path="/category/:category/:id" component={Header} />
          <Route exact path="/category/:category/:id" component={Navigation} />

          <Switch>
            <Route exact path="/" component={SelectBook} />
            <Route
              exact
              path="/category/:category"
              component={({ match }) => {
                const { category } = match.params;
                return <Grid category={category} />;
              }}
            />
            <Route
              exact
              path="/category/:category/:id"
              component={({ match }) => {
                const { category, id } = match.params;
                return <BookDetails bookId={id} category={category} />;
              }}
            />

            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
