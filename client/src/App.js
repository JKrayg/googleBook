import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import SearchBooks from "./pages/SearchBook";
import SavedBooks from "./pages/SaveBook";
import "./App.css";

class App extends Component {
 
  render() {
    return (
      <Router>
        <Wrapper>
          <NavBar />
          <Switch>
            <Route exact path = "/" component = {SearchBooks} />
            <Route exact path = "/search" component = {SearchBooks} />
            <Route exact path = "/saved" component = {SavedBooks} />
          </Switch>
        </Wrapper>
      </Router>
    )
  };
};

export default App;