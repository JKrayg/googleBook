import React from 'react'

function Form(props) {
    return (
        <div>
            <div style = {formStyle} className="form">
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search by title..."
                    id="search"
                />
                <button style = {{marginTop: "10px"}} onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
            </div>
        </div>
    )
}

const formStyle = {
    borderRadius: "5px",
    backgroundColor: "rgba(12, 122, 240, 0.502)",
    padding: "10px",
    marginTop: "20px"
}
export default Form;