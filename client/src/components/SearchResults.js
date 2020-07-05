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
            API.saveBook(book)
            .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook])}))
            .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div>
                {this.props.books.map(result => (
                    <div style = {booksStyle} className = "row">
                        <div className = "col-md-12 allBooks" key = {result._id}>
                            <a style = {{fontSize: "2rem"}} href = {result.link}>{result.title}</a>
                            <p>Author(s): {result.authors}</p>
                            <img alt = {result.title} src = {result.image}/>
                            <p style = {{marginTop: "10px"}}>{result.description}</p>
                            <button style = {saveBtn} onClick={() => this.handleSaveBook(result)} className="btn" >
                                {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
        )
    }
}

const booksStyle = {
    marginTop: "20px",
    border: "1px solid lightgrey",
    borderRadius: "5px",
    padding: "10px"
}

const saveBtn = {
    border: "1px solid black"
}

export default Results;