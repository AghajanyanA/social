import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"
import c from './Header.module.css'

export default function Header() {
    return (
        <Router>
            <div className={c.header}>
                <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png" alt='not loaded' /></Link>
            </div>
        </Router>
    )
}
