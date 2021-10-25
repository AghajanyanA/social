import React from 'react';
import c from './Post.module.css'

export default function Post({name, message}) {
    return (
        <div className={c.posts}>
            <div className={c.avaNname}>
            <img className={c.postAvatar} src="https://html5css.ru/w3images/avatar2.png" alt="Not available" />
            <div className={c.userName}>{name}</div>
            </div>
            <div className={c.userMessage}>{message}</div>
            Like 
        </div>
    )
}