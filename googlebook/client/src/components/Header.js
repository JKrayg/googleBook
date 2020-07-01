import React from 'react'

function Header() {
    return (
        <header style = {headerStyle} className = "Header">
            <div className = "row">
                <div className = "col-md-3">
                    <h1 style = {{}}>Header</h1>
                </div>
            </div>
        </header>
    )
}


const headerStyle = {
    height: "100px",
    borderBottom: "1px solid black"
}


export default Header;