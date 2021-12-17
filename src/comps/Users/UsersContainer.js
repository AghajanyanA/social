import { connect } from "react-redux";
import { followAC, loadUsers, pageChangeAC, totalUsersAC } from "../../redux/usersReducer";
import Users from "./Users copy";


let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        getTotalUsers: number => {
            dispatch(totalUsersAC(number))
        },
        pageChanger: page => {
            dispatch(pageChangeAC(page))
        },
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)