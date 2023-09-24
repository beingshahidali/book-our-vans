import React from "react"
import { Link, NavLink } from "react-router-dom"
import userURL from "..\\assets\\images\\user.png"
export default function Header() {
    /**
     * Challenge - part 1:
     * Make the main navbar indicate the currently-active route. (You can
     * leave the home link alone, since it's doubling as our logo. Only
     * make changes to the /host, /about, and /vans links)
     * 
     * Use the following CSS rules:
     *      font-weight: bold;
     *      text-decoration: underline;
     *      color: #161616;
     * 
     * You can use either inline styles or a className.
     */
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
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/vans"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={userURL} 
                        className="login-icon"
                    />
                </Link>
            </nav>
        </header>
    )
}