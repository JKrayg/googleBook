import React, { Component } from "react";
import API from "../utils/API";

class Results extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks()
        .then(savedBooks => this.setState({ savedBooks: savedBooks }))
        .catch(err => console.log(err))
    }

    handleSaveBook = book => {
        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
            .then(deleteBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deleteBook._id)}))
            .catch(err => console.log(err));
        } else {
            API.savedBook(book)
            .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook])}))
            .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div>
                {this.props.books.map(result => (
                    <div className = "row">
                        <div className = "col-md-12 allBooks" key = {result._id}>
                            <a href = {result.link}>{result.title}</a>
                            <p>{result.authors}</p>
                            <img alt = {result.title} src = {result.image}/>
                            <p>{result.description}</p>
                            <button onClick={() => this.handleSaveBook(result)} className="btn" >
                                {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
        )
    }
}

export default Results;