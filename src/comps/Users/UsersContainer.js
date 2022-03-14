import { connect } from "react-redux";
import UsersFin from "./UsersFin";
import React from "react";
import Preloader from "../assets/loading-gif/Preloader"
import c from './users.module.css'
import { loadUsersThunk, changePageThunk, followBTNHandler, unfollowBTNHandler } from "../../redux/actions/users";
import RedirectHOC from '../HOC/redirect'
import { compose } from "redux";

class Users extends React.Component {
    componentDidMount() {
        this.props.loadUsers(this.props.pageSize, this.props.currentPage)
    }

    handlePageChange = (pageNumber) => {
        this.props.changeThePage(this.props.pageSize, pageNumber)
    }

    render() {
        return <>
            { this.props.isLoading && <div className={c.preloader}> <Preloader /> </div> }
             <UsersFin
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                handlePageChange={this.handlePageChange}
                users={this.props.users}
                followPending={this.props.followPending}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />    
        </>
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followPending: state.usersPage.followPending,
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: (pageSize, currentPage) => {
            dispatch(loadUsersThunk(pageSize, currentPage))
        },
        changeThePage: (pageSize, pageNumber) => {
            dispatch(changePageThunk(pageSize, pageNumber))
        },
        follow: userid => dispatch(followBTNHandler(userid)),
        unfollow: userid => dispatch(unfollowBTNHandler(userid))
    }

}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    RedirectHOC
)(Users)

//create login page that checks if auth - true/false. if true, then return to the where redirecred from, if false, show login page
//try: move connect(connect reacts to the changes that is present in mstp) from app.js to settings component