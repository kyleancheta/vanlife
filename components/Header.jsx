import React, { useState, useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import { LoggedinContext } from "../index";
// import avatarImg from "../assets/images/avatar-icon.png"
import { MdLogout } from "react-icons/md"

export default function Header() {
    const { loggedIn, setLoggedIn } = useContext(LoggedinContext);

    React.useEffect(() => {
        console.log("Logged in: " + loggedIn)
    }, [loggedIn])

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        setLoggedIn(false)
    }

    const activeStyle = {
        color: "#AAA",
        cursor: "default"
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav className="main-nav">
                <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null}>About</NavLink>
                <NavLink to="/vans" style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
                <NavLink to="/host" style={({isActive}) => isActive ? activeStyle : null}>Host</NavLink>
                {
                    loggedIn 
                    ?   <button onClick={fakeLogOut} className="btn-logout">
                            <MdLogout className="icon"/>
                        </button>
                    :   <Link to="login" className="login-link">
                            Login
                        </Link>
                }
            </nav>
        </header>
    )
}