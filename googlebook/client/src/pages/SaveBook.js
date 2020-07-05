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
            <div>
                <h3>Saved Books</h3>
                <SearchResults books = {this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;