import React from "react";
import Form from "../components/Form";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        books: []
    }

    componentDidMount() {
        this.searchBook();
    }

    newBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }

    searchBook = query => {
        API.getBook(query)
        .then(res => this.setState({ books: res.data.items.map(bookData => this.newBook(bookData))}))
        .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        this.searchBook(this.state.search)
    }
    

    render() {
        return (
            <div className = "container">
                <Form 
                    search = {this.state.search}
                    handleInputChange = {this.handleInputChange}
                    handleFormSubmit = {this.handleFormSubmit}
                />
                <SearchResults books = {this.state.books} />
            </div>
            
        )
    }
}

export default Search;