import React, { Component } from "react";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class Saved extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks()
        .then(savedBooks => this.setState({ savedBooks: savedBooks }))
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div className = "container">
                <h3 style = {{marginBottom: "0", marginTop: "20px"}}>Your saved books</h3>
                <SearchResults books = {this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;