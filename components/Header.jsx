import React from "react"
import { NavLink, Link } from "react-router-dom"
import avatarImg from "../assets/images/avatar-icon.png" 

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
                <Link to="login" className="login-link">
                    <img 
                        src={avatarImg}
                        className="login-icon"
                    />
                </Link>
            </nav>
        </header>
    )
}