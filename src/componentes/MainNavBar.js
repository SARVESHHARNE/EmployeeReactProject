import React from "react"
import { NavLink } from "react-router-dom"
const MainNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{"backgroundColor": "rgb(105, 104, 104)"}}>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded='true' aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/home">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/table">Table</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/list">List</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/form">Form</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MainNavBar