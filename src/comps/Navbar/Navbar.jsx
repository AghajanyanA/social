import React from "react";
import { NavLink } from "react-router-dom"
import c from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={c.navbar}>
            <div><NavLink to='/profile' activeClassName={c.activeLink} className={c.links}>Profile</NavLink></div>
            <div><NavLink to='/messages' activeClassName={c.activeLink} className={c.links}>Messages</NavLink></div>
            <div><NavLink to='/news' activeClassName={c.activeLink} className={c.links}>News</NavLink></div>
            <div><NavLink to='/music' activeClassName={c.activeLink} className={c.links}>Music</NavLink></div>
            <div><NavLink to='/settings' activeClassName={c.activeLink} className={c.links}>Settings</NavLink></div>
            <div><NavLink to='/users' activeClassName={c.activeLink} className={c.links}>Users</NavLink></div>
            
        </div>
    
    )
}