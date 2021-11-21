import React from 'react';
import c from './Post.module.css'

export default function Post({ name, message, likesCount, avatarURL, dispatch}) {
    let likeBtnHandler = () => {
        // addLikeCountInProfile(likesCount)
        let action = {type: 'ADD-LIKE-BY-BTN', likes: likesCount}
        dispatch(action)
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