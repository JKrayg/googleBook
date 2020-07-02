import React from 'react'

function AllBooks(props) {
    return (
        <div style = {booksStyle} className = "all-books">
            <h4>{props.title}</h4>
            <p>Authors: {props.author}</p>
            
            <img src = {props.image} alt = "book" />
        </div>
        
        
    )
}


const booksStyle = {
    border: "1px solid black",
    marginBottom: "5px",
    padding: "10px",
    textAlign: "center"
}



export default AllBooks;