import messagesReducer from "./messagesReducer"
import profileReducer from "./profileReducer"


const store = {
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
    //     const new_post = {
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
        
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._renderWebsite()
    },

}


window.store = store

export default store




// id: this._state.profilePage.postData.length + 1,
// name: action.userName,
// message: action.message,
// likesCount: action.likesCount,
// avatarURL: action.avaURL