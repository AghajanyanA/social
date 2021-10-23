import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

export default function Profile() {
    return (
        <div>
            <div><img className={s.cover} src="https://i.pinimg.com/originals/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg" alt='unable to load' /></div>
            <div className={s.head}>
                <img src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="Not available" />
                <div><p>I love to be here</p></div>
            </div>
            <MyPosts />
        </div>
    )
}