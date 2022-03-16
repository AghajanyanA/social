import React from "react";
import { Link } from "react-router-dom"
import c from './Header.module.css'
import { DefaultButtonComponent } from "../assets/buttonComponent/ButtonComponent";

function Header({ avatar, isLogged, login, uid, logoutProcess }) {
    const noavatar = 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg'
    const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png'

    const logoutHandler = () => {
        logoutProcess()
    }

    return (<div className={c.header}>
        <Link to='/'><img src={logo} alt='not loaded' /></Link>
        {isLogged ?
            <div className={c.welcomeMSG}>

                <div className={c.userinfo}> <Link to={`/profile/${uid}`} >{avatar ?
                    <img src={avatar} alt="failed to load sorry" /> :
                    <img src={noavatar} alt='oksorry' />} </Link> Welcome, {login}</div>
                <DefaultButtonComponent text="Logout" styleName={c.logoutBtn} handler={logoutHandler} />
            </div>
            : <Link to='/login'><DefaultButtonComponent text="Login" styleName={c.loginButton} /></Link>
        }


    </div>
    )
}


export default Header