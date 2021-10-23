import React from "react";
import { Link } from "react-router-dom"
import c from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={c.navbar}>
            <div><Link to='/profile'>Profile</Link></div>
            <div><Link to='/messages'>Messages</Link></div>
            <div><Link to='/news'>News</Link></div>
            <div><Link to='/music'>Music</Link></div>
            <div><Link to='/settings'>Settings</Link></div>
        </div>
    
    )
}