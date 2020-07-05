import React from 'react'

function Form(props) {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="search"><p>Search for a Book!</p></label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search by Title..."
                    id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
            </div>
        </div>
    )
}
export default Form;