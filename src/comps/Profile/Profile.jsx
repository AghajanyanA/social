import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

export default function Profile({state, dispatch}) {
    return (
        <div>
            <div><img className={s.cover} src="https://i.ibb.co/2nybnm2/305c5a457807ba421ed67495c93198d3.png" alt='unable to load' /></div>
            <div className={s.avaInfo}>
                <img width='700px' height='200px' src={state.profilePage.avatarURL} alt="Not available" />
                <div><p>I love to be here! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor quaerat commodi soluta veniam asperiores. Impedit facere eaque ab architecto tempora nostrum enim, temporibus quia minima cum ipsam laborum, alias earum quasi blanditiis dolorum dolore quibusdam assumenda! Reiciendis, quia eveniet temporibus vitae officiis eaque tempore voluptate natus, soluta culpa iusto! Voluptatibus eaque, quod consequuntur nulla aliquam iste consequatur sed delectus accusamus ea aut. Atque eum rem quam vel consequuntur ea porro natus iure eius. Enim deleniti explicabo quis eos, omnis hic fuga! Sed quasi officiis aliquam nam ex vitae, magnam repudiandae possimus reprehenderit veritatis? Nobis commodi eos qui excepturi fugit.</p></div>
            </div>
            <MyPosts state={state} dispatch={dispatch}/>
        </div>
    )
}