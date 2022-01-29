import { ToggleLoaderAC, loadUsers, getTotalUsersAC, changePageAC } from "../usersReducer";
import { usersAPI } from "../../api-calls/APIcalls";
import { authAPI } from "../../api-calls/APIcalls";
import { setAuthMe } from "../authMeReducer";
import { getCurrentUserAvatar } from "../headerReducer";


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

export const establishAuthMe = (dispatch) => {
    
    authAPI.authMe()
    .then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthMe(res.data))
            authAPI.getUserPhoto(res.data.data.id)
                .then(res => dispatch(getCurrentUserAvatar(res.photos?.small)))
                .catch((err) => console.log(err))
        }
    })
    .catch((err) => {console.log(err)})
}