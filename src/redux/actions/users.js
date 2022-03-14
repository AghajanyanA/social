import { ToggleLoaderAC, loadUsers, getTotalUsersAC, changePageAC, followIsPending, followAC } from "../usersReducer";
import { usersAPI } from "../../api-calls/APIcalls";
import { followAPI } from "../../api-calls/APIcalls";


export const loadUsersThunk = (pageSize, currentPage) => (dispatch) => {

    dispatch(ToggleLoaderAC(true))
    usersAPI.getUsersAPICall(pageSize, currentPage).then(data => {
        dispatch(ToggleLoaderAC(false))
        dispatch(loadUsers(data.items))
        dispatch(getTotalUsersAC(data.totalCount))
    }
    ).catch(err => console.log(err));
}

export const changePageThunk = (pageSize, pageNumber) => (dispatch) => {

    dispatch(ToggleLoaderAC(true))
    dispatch(changePageAC(pageNumber))
    usersAPI.getUsersAPICall(pageSize, pageNumber).then(data => {
        dispatch(ToggleLoaderAC(false))
        dispatch(loadUsers(data.items))
    }
    ).catch(err => console.log(err));
}

export const followBTNHandler = (userid) => dispatch => {
    dispatch(followIsPending(true, userid))
    followAPI.followUserApiCall(userid)
        .then(
            res => {
                if (res.data.resultCode === 0) {
                    dispatch(followAC(userid))
                    dispatch(followIsPending(false, userid))
                }
            }
        ).catch(err => console.log(err));
}

export const unfollowBTNHandler = userid => dispatch => {
    
    dispatch(followIsPending(true, userid))
    followAPI.unfollowUserApiCall(userid)
        .then(
            res => {
                if (res.data.resultCode === 0) {
                    dispatch(followAC(userid))
                    dispatch(followIsPending(false, userid))
                }
            }
        ).catch(err => console.log(err));
}