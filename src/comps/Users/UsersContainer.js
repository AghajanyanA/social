import { connect } from "react-redux";
import { followAC, folllowIsPending } from "../../redux/usersReducer";
import UsersFin from "./UsersFin";
import React from "react";
import Preloader from "../assets/loading-gif/Preloader"
import c from './users.module.css'
import { loadUsersThunk, changePageThunk } from "../../redux/actions/users";


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
                followToggle={this.props.followToggle}
                followPending={this.props.followPending}
                followIsPendingToggler={this.props.followIsPendingToggler}
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
        followToggle: id => {
            dispatch(followAC(id))
        },
        followIsPendingToggler: (isPending, userID) => {
            dispatch(folllowIsPending(isPending, userID))
        },
        loadUsers: (pageSize, currentPage) => {
            dispatch(loadUsersThunk(pageSize, currentPage))
        },
        changeThePage: (pageSize, pageNumber) => {
            dispatch(changePageThunk(pageSize, pageNumber))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)