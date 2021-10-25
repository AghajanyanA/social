import React from "react";
import { NavLink } from "react-router-dom"
import c from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={c.navbar}>
            <div><NavLink to='/profile' activeClassName={c.activeLink}>Profile</NavLink></div>
            <div><NavLink to='/messages' activeClassName={c.activeLink}>Messages</NavLink></div>
            <div><NavLink to='/news' activeClassName={c.activeLink}>News</NavLink></div>
            <div><NavLink to='/music' activeClassName={c.activeLink}>Music</NavLink></div>
            <div><NavLink to='/settings' activeClassName={c.activeLink}>Settings</NavLink></div>
        </div>
    
    )
}