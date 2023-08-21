import React from "react"
import { NavLink, Link } from "react-router-dom"

export default function Header() {

    const activeStyle = {
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null}>About</NavLink>
                <NavLink to="/vans" style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
                <NavLink to="/host" style={({isActive}) => isActive ? activeStyle : null}>Host</NavLink>
            </nav>
        </header>
    )
}