const follow_toggle = 'follow_toggle'
const load_users = 'load_users'
const get_total_users_count = 'total_users_count'
const change_current_page = 'change_current_page'

let init_state = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
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
        case get_total_users_count:
            return{
                ...state,
                totalUsersCount: action.number
            }
        case change_current_page: 
            return {
                ...state, 
                currentPage: action.newPage
            }

        default:
            return state;
    }
}
export const followAC = id => {return{type: follow_toggle, id: id}}
export const loadUsers = users => {return{type: load_users, users: users}}
export const totalUsersAC = number => {return{type: get_total_users_count, number: number}}
export const pageChangeAC = newPage => {return{type: change_current_page, newPage}}



export default usersReducer