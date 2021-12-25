import React from "react";
import c from './users.module.css'

let UsersFin = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>
            {pages.map(pageNumber => {  // pagination buttons
                return <span
                    className={props.currentPage === pageNumber ? c.selectedPage : c.pages}
                    onClick={pageNumber !== props.currentPage ? () => props.handlePageChange(pageNumber) : null} >
                    {pageNumber}
                </span>
            })}

            {props.users.map(users => <div className={c.usersblock} key={users.id}>  {/*  ///  users block  ///  */}
                <img className={c.avatarURL} src={users.photos.small != null ? users.photos.small : 'https://www.svgrepo.com/show/381153/protection-personal-computer-privacy-firewall-security.svg'} alt="sorry" />
                <div className={c.names}>
                    {users.name}
                </div>

                <div className={c.followBTNs}>
                    {users.following ? // follow - unfollow toggle
                        <button className={c.unfollowBTN} onClick={() => props.followToggle(users.id)} >Unfollow</button> :
                        <button className={c.followBTN} onClick={() => props.followToggle(users.id)} >Follow</button>}
                </div>
                <div className={c.userslocation}>
                    <img className={c.pinPIC} src='https://www.freeiconspng.com/uploads/red-location-icon-map-png-4.png' alt='' />{'{users.location.city}'}, {'{users.location.country}'}
                </div>
                <div className={c.usersstatus}>
                    {users.status != null ? users.status : 'No status'} <br />UID: {users.id}
                </div>

            </div>)
            }
        </div>
    )
}

export default UsersFin