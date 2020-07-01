import React, { Component } from "react";
import SearchBookForm from "./SearchBookForm";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };


  componentDidMount() {
    this.searchAuthor("The Matrix");
  };

  searchAuthor = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };
};