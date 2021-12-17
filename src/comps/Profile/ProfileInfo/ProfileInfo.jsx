import React from "react";
import { connect } from "react-redux";
import s from './ProfileInfo.module.css'

function Profile({avatarURL}) {
                return (
                    <div>
                        <div><img className={s.cover} src="https://i.ibb.co/2nybnm2/305c5a457807ba421ed67495c93198d3.png" alt='unable to load' /></div>
                        <div className={s.avaInfo}>
                            <img width='700px' height='200px' src={avatarURL} alt="Not available" />
                            <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde esse corrupti totam consequatur culpa distinctio dicta. Sit animi tempora aliquam!</p></div>
                        </div>
                    </div>
                )
            }
            

let mapStateToProps = state => {
    return {
    avatarURL: state.profilePage.avatarURL
    }
}


export default connect(mapStateToProps)(Profile)