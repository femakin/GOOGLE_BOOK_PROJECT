import React, { Component } from "react";
// import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Footer from "./components/common/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
        {/* <Footer /> */}
      </div>
    );
  }
}
