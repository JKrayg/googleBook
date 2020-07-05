import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
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
          <Header />
          <Route exact path = "/" component = {SearchBooks} />
          <Route exact path = "/search" component = {SearchBooks} />
          <Route exact path = "/saved" component = {SavedBooks} />
        </Wrapper>
      </Router>
    )
  };
};

export default App;