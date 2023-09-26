import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/assets/images/avatar-icon.png"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
             <Link className="site-logo" to="/">
            <span className="logo-text" style={{ color: '#354B5E', textShadow: '.4px .4px .4px #1F2D3A' }}>Book</span>
            <span className="logo-text" style={{ color: '#E3A008', textShadow: '.4px .4px .4px #B27D04' }}>Our</span>
            <span className="logo-text" style={{ color: '#BF0603', textShadow: '.4px .4px .4px #780202' }}>Vans</span>
           </Link>
            <nav>
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img
                        src={imageUrl}
                        className="login-icon"
                    />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    )
}