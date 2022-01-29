const get_auth_user_avatar = 'get_auth_user_avatar'

const init_state = {
    avatar: null
}


const headerReducer = (state = init_state, action) => {
    switch(action.type) {
        case get_auth_user_avatar: 
            return {
                ...state, avatar: action.url
            }
        default:
            return {
                ...state
            }
    }
}

export const getCurrentUserAvatar = url => {return{type: get_auth_user_avatar, url}}
export default headerReducer