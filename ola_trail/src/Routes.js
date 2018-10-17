import React, { Component } from "react";

import App from "./App";

import BookNow from "./BookNow";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/book_now" component={BookNow} />
        </div>
      </Router>
    );
  }
}
