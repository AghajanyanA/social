import React from 'react'
import c from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = ({ users }) => {
    return (
        <NavLink to={'/messages/' + users.id} className={c.dialog} activeClassName={c.active}>
            <div className={c.dialog1}>
                <img src={users.avatarURL} alt='no img' />
                {users.user}
            </div>
        </NavLink>
    )
}

export default Dialog