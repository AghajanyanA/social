import React from 'react'
import c from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = ({state}) => {
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={'/messages/' + state.id}><img src={state.avatarURL} alt='no img'/>{state.user}</NavLink>
        </div>
    )
}

export default Dialog