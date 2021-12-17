import React from "react";
import c from './users.module.css'
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        .then(res => {
            this.props.loadusers(res.data.items)
            this.props.getTotalUsers(res.data.totalCount)
        }
        );
    }

    
    pageClickHandle = (page) => {
        this.props.pageChanger(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
        .then(res => this.props.loadusers(res.data.items))
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let page = []

        for (let i = 1; i <= pagesCount; i++) {
            page.push(i)
        }


        return (

            <div>
                class component
                <br />
                {page.map(p => {
                    return <span className={`${this.props.currentPage === p && c.selectedPage} ${c.pages }`}
                    onClick={() => this.pageClickHandle(p)}>{p}</span>
                })}

                {this.props.users.map(users => <div className={c.usersblock} key={users.id}>
                    <img className={c.avatarURL} src={users.photos.small != null ? users.photos.small : 'https://www.svgrepo.com/show/381153/protection-personal-computer-privacy-firewall-security.svg'} alt="sorry" />
                    <div className={c.names}>
                        {users.name}
                    </div>

                    <div className={c.followBTNs}>
                        {users.following ?
                            <button className={c.unfollowBTN} onClick={() => this.props.followToggle(users.id)} >Unfollow</button> :
                            <button className={c.followBTN} onClick={() => this.props.followToggle(users.id)} >Follow</button>}
                    </div>
                    <div className={c.userslocation}>
                        <img className={c.pinPIC} src='https://www.freeiconspng.com/uploads/red-location-icon-map-png-4.png' alt='' />{'users.location.city'}, {'users.location.country'}
                    </div>
                    <div className={c.usersstatus}>
                        {users.status != null ? users.status : 'No status'} <br />UID: {users.id}
                    </div>
                    
                </div>)
                }
                
                {page.map(p => {
                    return <span className={`${this.props.currentPage === p && c.selectedPage} ${c.pages }`}
                    onClick={() => this.pageClickHandle(p)}>{p}</span>
                })}
            </div>
        )
    }
}

export default Users