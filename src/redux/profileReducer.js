const new_status_post = 'NEW-STATUS-POST';
const update_newpost_textarea = 'UPDATE-NEWPOST-TEXT'
const clear_profile_textarea = 'CLEAR-PROFILE-TEXTAREA'
const add_like_by_btn = 'ADD-LIKE-BY-BTN'

let init_state = {
    avatarURL: 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg',
    postData: [
        { id: 1, name: 'James', message: 'Cool pic man duuude', likesCount: 22, avatarURL: 'https://www.svgrepo.com/show/106358/avatar.svg' },
        { id: 2, name: 'Anthony', message: 'You look gr8', likesCount: 1, avatarURL: 'https://www.svgrepo.com/show/149771/avatar.svg' },
        { id: 3, name: 'Jessica', message: 'WHOS THAT BITCH BEHIND YOU', likesCount: 223, avatarURL: 'https://www.svgrepo.com/show/7225/avatar.svg' }
    ],
    textareaControl: ''
}


let profileReducer = (state = init_state, action) => {

    switch (action.type) {
        case new_status_post:
            let new_post = {
                id: state.postData.length + 1,
                name: action.userName,
                message: state.textareaControl,
                likesCount: 0,
                avatarURL: action.avaURL
            }
            return {
                ...state,
                textareaControl: '',
                postData: [...state.postData, new_post],
            }
        case update_newpost_textarea:
            return {
                ...state,
                textareaControl: action.text
            }
        case add_like_by_btn:
            state.postData[action.id - 1].likesCount = action.likesCount + 1
            return {
                ...state,
                // postData: postData[action.id - 1].likesCount: action.likesCount + 1
            }
        case clear_profile_textarea:
            return {
                ...state, 
                textareaControl: ''
            }
        default:
            return state
    }
}

export let handlePostActionCreator = (userName, avaURL) => {
    return { type: new_status_post, userName: userName, avaURL: avaURL }
}
export let updatePostTextActionCreator = (text) => {
    return { type: update_newpost_textarea, text: text }
}
export let resetProfileTextareaAction = () => {
    return { type: clear_profile_textarea }
}
export let likeBtnAction = (likesCount, id) => {
    return { type: add_like_by_btn, likesCount: likesCount, id: id }
}


export default profileReducer