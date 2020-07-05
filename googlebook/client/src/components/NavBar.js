import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <nav style = {nav} className="navbar navbar-expand-lg text-light">
                <div className="container" style = {navStyle}>
                    <Link className="navbar-brand" to="/">Google Books</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/search"
                                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                            > Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/saved"
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                            >Saved</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const navStyle = {
    backgroundColor: "lightgrey",
    height: "100px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px"
}

const nav = {
    padding: "0",
    
}

export default NavBar;