const set_auth_data = 'set_auth_data'

const init_state = {
    id: null,
    login: null,
    email: null,
    isLoggedIn: false
}

const authMeReducer = (state = init_state, action) => {
    switch(action.type) {
        case set_auth_data:
            return {
                ...state, ...action.data.data, isLoggedIn: true
            }
        default:
            return {
                ...state
            }
    }
}

export const setAuthMe = data => {return{type: set_auth_data, data}}

export default authMeReducer