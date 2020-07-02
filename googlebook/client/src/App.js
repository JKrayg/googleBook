import React, { Component } from "react";
import SearchBookForm from "./components/SearchBookForm";
import API from "./utils/API";
//import $ from 'jquery';
import "./App.css";
import AllBooks from "./components/AllBooks"
import Header from "./components/Header";

class App extends Component {
  state = {
    result: [],
    search: ""
  };


  componentDidMount() {
    console.log("API mount")
    this.searchTitle("the universe");
  }

  makeBook = bookData => {
    return {
        _id: bookData.id,
        title: bookData.volumeInfo.title,
        authors: bookData.volumeInfo.authors,
        description: bookData.volumeInfo.description,
        image: bookData.volumeInfo.imageLinks.thumbnail,
        link: bookData.volumeInfo.previewLink
    }
}

  searchTitle = query => {
    API.getBook(query)
    .then(res => this.setState({ result: res.data.items.map(bookData => this.makeBook(bookData)) }))
    .catch(err => console.error(err));
      console.log(this.state.result)
  };


  handleOnChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    
  };


  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state.search)
    this.searchTitle(this.state.search);
  };
  

  render() {
    return (
      <div >
        <Header />
        <div style = {containerStyle} className = "container">
          <div className = "row">
            <div className = "col-md-3">
              <SearchBookForm
              value = {this.state.search}
              handleOnChange={this.handleOnChange}
              handleOnSubmit={this.handleOnSubmit}
              />
            </div> 
            <div className = "col-md-9">
            {this.state.result.map((results) => (
              <AllBooks
                  key = {results.id}
                  title={results.volumeInfo.title}
                  author={results.volumeInfo.authors}
                  description={results.Director}
                  image={results.volumeInfo.imageLinks.thumbnail}
                  link={results.Released}
                  />
            ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const containerStyle = {
  border: "1px solid black",
  padding: "20px",
  marginTop: "40px"
}

export default App;
