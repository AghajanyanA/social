import React from "react";
import { Link } from "react-router-dom"
import c from './Header.module.css'
import { Button } from 'antd';
import { connect } from "react-redux";

function Header({avatarURL, userName, userLastName}) {
    
    
    return (<div className={c.header}>
                <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png" alt='not loaded' /></Link>
                <div className={c.welcomeMSG}>
                    <div className={c.userinfo}> <img src={avatarURL} alt="failed to load sorry" /> {userName} {userLastName}</div>
                    <Button className={c.logoutBtn} type="primary" danger>
                    Log Off
                    </Button>
                </div>
            </div>
            )
    }

const mapStateToProps = state => {
    return {
        avatarURL: state.header.avatarURL,
        userName: state.header.userName,
        userLastName: state.header.userLastName
    }
}

export default connect(mapStateToProps)(Header)