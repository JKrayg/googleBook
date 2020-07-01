import React from 'react'

function SearchBookForm(props) {
    return (

        <div style = {formStyle} className = "form-container">
            <label htmlFor="search">Search by Title</label>
            <input
            onChange={props.handleOnChange}
            value={props.value}
            name = "search"
            type="text"
            className="form-control"
            placeholder = "Search by title..."
            id="search">
            </input>
            <button onClick={props.handleOnSubmit} type="submit" className="btn btn-primary">Submit</button>
        </div>
    )
}

const formStyle = {
    border: "1px solid black",
    padding: "10px"
}



export default SearchBookForm;
