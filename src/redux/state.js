const new_status_post = () => 'NEW-STATUS-POST';
const update_newpost_textarea = () => 'UPDATE-NEWPOST-TEXT'


let store = {
    _state: {
        profilePage: {
            avatarURL: 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg',
            postData: [
                { id: 1, name: 'James', message: 'Cool pic man duuude', likesCount: 22, avatarURL: 'https://www.svgrepo.com/show/106358/avatar.svg' },
                { id: 2, name: 'Anthony', message: 'You look gr8', likesCount: 1, avatarURL: 'https://www.svgrepo.com/show/149771/avatar.svg' },
                { id: 3, name: 'Jessica', message: 'WHOS THAT BITCH BEHIND YOU', likesCount: 223, avatarURL: 'https://www.svgrepo.com/show/7225/avatar.svg' }],
            textareaControl: ''
        },
        messagesPage: {
            textMessageData: [
                { id: 1, msg: 'Hey' },
                { id: 2, msg: 'Yo' },
                { id: 3, msg: 'How are you?' },
                { id: 4, msg: 'Good thanks im on drive today!' },
                { id: 5, msg: 'Haha did you sniff the shit I suggested?' }
            ],
            dialogData: [
                { id: 1, user: 'Andrew', avatarURL: 'https://www.svgrepo.com/show/170303/avatar.svg' },
                { id: 2, user: 'Bobby', avatarURL: 'https://www.svgrepo.com/show/170302/avatar.svg' },
                { id: 3, user: 'Sam', avatarURL: 'https://www.svgrepo.com/show/157054/avatar.svg' },
                { id: 4, user: 'Jeffrey', avatarURL: 'https://www.svgrepo.com/show/53617/avatar.svg' },
                { id: 5, user: 'Andromeda', avatarURL: 'https://www.svgrepo.com/show/157053/avatar.svg' },
                { id: 6, user: 'Tiffany', avatarURL: 'https://www.svgrepo.com/show/169986/avatar.svg' }
            ],
            messageTextareaControl: ''
        },
        header: {
            userName: 'Gagik',
            userLastName: 'Tsarukyan',
            avatarURL: 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg',
        }
    },
    _renderWebsite() {

    },

    getState() {
        return this._state
    },
    subscribe(observe) {
        this._renderWebsite = observe
    },

    // addLikeCountInProfile(test) {
    //     console.log(test, 0)
    //     this._state.profilePage.postData.likesCount = test++
    //     console.log(test, 1)
    //     this._renderWebsite()
    // },

    // handleTextareaChange(text) {
    //     this._state.profilePage.textareaControl = text
    //     this._renderWebsite()
    // },


    // _statusPostHandler(name, msg, likeC = 0, aurl) {
    //     let new_post = {
    //         id: this._state.profilePage.postData.length + 1,
    //         name: name,
    //         message: msg,
    //         likesCount: likeC,
    //         avatarURL: aurl
    //     }
    //     this._state.profilePage.postData.push(new_post)
    //     this._state.profilePage.textareaControl = ''
    //     this._renderWebsite()
    // },

    dispatch(action) {
        if(action.type === new_status_post())  {
            let new_post = {
                id: this._state.profilePage.postData.length + 1,
                name: action.userName,
                message: action.value,
                likesCount: action.likesCount,
                avatarURL: action.avaURL
            }
            this._state.profilePage.postData.push(new_post)
            this._state.profilePage.textareaControl = ''
            this._renderWebsite()
        }
        else if(action.type === update_newpost_textarea()) {
            this._state.profilePage.textareaControl = action.text
            this._renderWebsite()
        }
        else if(action.type === 'ADD-LIKE-BY-BTN') {
            console.log(action.likes, '// BEFORE')
            this._state.profilePage.postData.likesCount = action.likes++
            console.log(action.likes, '// AFTER')
            this._renderWebsite()
        }
        else if(action.type === 'WRITE-PRIVATE-MESSAGE') {
            this._state.messagesPage.messageTextareaControl = action.message
            this._renderWebsite()
        }
        else if(action.type === 'SEND-PRIVATE-MESSAGE'){
            let new_message = {
                id: this._state.messagesPage.textMessageData.length + 1,
                msg: this._state.messagesPage.messageTextareaControl
            }
            this._state.messagesPage.textMessageData.push(new_message)
            this._state.messagesPage.messageTextareaControl = ''
            this._renderWebsite()
        }
        else if(action.type === 'CLEAR-PM-TEXTFIELD') {
            this._state.messagesPage.messageTextareaControl = ''
            this._renderWebsite()
        }
    },

}


window.store = store

export let handlePostActionCreator = (userName, value, avaURL) => {
    return {type: new_status_post(), userName: userName, value: value, likesCount: 0, avaURL: avaURL}
}
export let updatePostTextActionCreator = (text) => {
    return {type: update_newpost_textarea(), text: text}
}

export default store




// id: this._state.profilePage.postData.length + 1,
// name: action.userName,
// message: action.message,
// likesCount: action.likesCount,
// avatarURL: action.avaURL