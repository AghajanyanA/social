import { connect } from "react-redux";
import { changePageAC, followAC, getTotalUsersAC, loadUsers, ToggleLoaderAC } from "../../redux/usersReducer";
import axios from "axios";
import UsersFin from "./UsersFin";
import React from "react";
import Preloader from "../assets/loading-gif/Preloader"
import c from './users.module.css'


class Users extends React.Component {
    componentDidMount() {
        this.props.toggleLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(res => {
                this.props.toggleLoading(false)
                this.props.loadusers(res.data.items)
                this.props.totalUsersD(res.data.totalCount)
            }
            );
    }

    handlePageChange = (pageNumber) => {
        this.props.toggleLoading(true)
        this.props.handlePageChange(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(res => {
                this.props.toggleLoading(false)
                this.props.loadusers(res.data.items)
            }
            )
    }


    render() {
        return <>
            { this.props.isLoading && <div className={c.preloader}><Preloader /></div> }
             <UsersFin
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                handlePageChange={this.handlePageChange}
                users={this.props.users}
                followToggle={this.props.followToggle}
            />    
        </>
    }
}

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,

    }
}


let mapDispatchToProps = dispatch => {
    return {
        followToggle: id => {
            dispatch(followAC(id))
        },
        loadusers: users => {
            dispatch(loadUsers(users))
        },
        handlePageChange: page => {
            dispatch(changePageAC(page))
        },
        totalUsersD: number => {
            dispatch(getTotalUsersAC(number))
        },
        toggleLoading: isLing => {
            dispatch(ToggleLoaderAC(isLing))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)