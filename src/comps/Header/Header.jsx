import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"
import c from './Header.module.css'
import { Button } from 'antd';

export default function Header({state}) {
    return (
        <Router>
            <div className={c.header}>
                <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png" alt='not loaded' /></Link>
                <div className={c.welcomeMSG}>
                    <div className={c.userinfo}> <img src={state.avatarURL} alt="failed to load sorry" /> {state.userName} {state.userLastName}</div>
                    <Button className={c.logoutBtn} type="primary" danger>
                    Log Off
                    </Button>
                </div>
            </div>
        </Router>
    )
}
