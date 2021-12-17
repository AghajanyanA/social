import React from "react";
import c from './users.module.css'
import axios from "axios";

const Users = (props) => {
    let pinURL = 'https://www.freeiconspng.com/uploads/red-location-icon-map-png-4.png'


    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.loadusers(response.data.items))

        
    }
    return (

        <div>
            {props.users.map(users => <div className={c.usersblock} key={users.id}>
                <img className={c.avatarURL} src={ users.photos.small != null ? users.photos.small : 'https://www.svgrepo.com/show/381153/protection-personal-computer-privacy-firewall-security.svg' } alt="sorry" />
                <div className={c.names}>
                    {users.name}
                </div>

                <div className={c.followBTNs}>
                    {users.following ?
                        <button className={c.unfollowBTN} onClick={() => props.followToggle(users.id)} >Unfollow</button> :
                        <button className={c.followBTN} onClick={() => props.followToggle(users.id)}  >Follow</button>}
                </div>
                <div className={c.userslocation}>
                    <img className={c.pinPIC} src={pinURL} />{'users.location.city'}, {'users.location.country'}
                </div>
                <div className={c.usersstatus}>
                    { users.status != null ? users.status : 'No status' }, UID: {users.id}
                </div>
            </div>)
            }
        </div>
    )
}

export default Users