import store from "./state";


const new_status_post = () => 'NEW-STATUS-POST';
const update_newpost_textarea = () => 'UPDATE-NEWPOST-TEXT'


let profileReducer = (state, action) => {

    switch(action.type){
        case new_status_post():
            let new_post = {
                id: state.postData.length + 1,
                name: action.userName,
                message: action.value,
                likesCount: action.likesCount,
                avatarURL: action.avaURL
            }
            state.postData.push(new_post)
            state.textareaControl = ''
            return state
        case update_newpost_textarea():
            state.textareaControl = action.text
            return state
        case 'ADD-LIKE-BY-BTN':
            console.log(action.likes, '// BEFORE')
            state.postData.likesCount = action.likes++
            console.log(action.likes, '// AFTER')
            return state
        case 'CLEAR-PROFILE-TEXTAREA':
            state.textareaControl = ''
            return state
        default: 
            return state
    }
}

export let handlePostActionCreator = (userName, avaURL) => {
    return {type: new_status_post(), userName: userName, value: store.getState().profilePage.textareaControl, likesCount: 0, avaURL: avaURL}
}
export let updatePostTextActionCreator = (text) => {
    return {type: update_newpost_textarea(), text: text}
}


export default profileReducer