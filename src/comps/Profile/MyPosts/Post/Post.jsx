import React from 'react';
import { likeBtnAction } from '../../../../redux/profileReducer';
import c from './Post.module.css'

export default function Post({ id, name, message, likesCount, avatarURL, postCompContainer}) {
    const likeBtnHandler = () => {
        const action = likeBtnAction(likesCount, id)
        postCompContainer(action)
    }
    return (

        <div className={c.posts}>
            <div className={c.avaNname}>
            <img className={c.postAvatar} src={avatarURL} alt="Not available" />
            <div className={c.userName}>{name}</div>
            </div>
            <div className={c.userMessage}>{message}</div>
            <button className={c.likeBtn} onClick={likeBtnHandler}>Like</button> · {likesCount}
        </div>
    )
}