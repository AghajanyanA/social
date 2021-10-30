import React from 'react'
import c from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = ({id, user}) => {
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={'/messages/' + id}>{user}</NavLink>
        </div>
    )
}

export default Dialog