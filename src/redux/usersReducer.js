const follow_toggle = 'follow_toggle'
const load_users = 'load_users'
const change_current_page = 'change_current_page'
const get_total_users_count = 'total_users_count'
const toggle_is_loading = 'toggle_is_loading'

let init_state = {
    users: [],
    totalUsers: 50,
    pageSize: 10,
    currentPage: 1,
    isLoading: false,

}

let usersReducer = (state = init_state, action) => {
    switch (action.type) {
        case follow_toggle:
            return {
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, following: !user.following}
                    }
                    return user
                }
                    )
            }
        case load_users:
            return{
                ...state,
                users: action.users
            }
        case change_current_page:
            return{
                ...state,
                currentPage: action.page
            }
        case get_total_users_count:
            return{
                ...state,
                totalUsers: action.uNumber
            }
        case toggle_is_loading:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}
export const followAC = id => {return{type: follow_toggle, id: id}}
export const loadUsers = users => {return{type: load_users, users: users}}
export const changePageAC = page => {return{type: change_current_page, page: page}}
export const getTotalUsersAC = uNumber => {return{type: get_total_users_count, uNumber: uNumber}}
export const ToggleLoaderAC = isLoading => {return {type: toggle_is_loading, isLoading}}


export default usersReducer