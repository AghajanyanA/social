const write_private_message = 'WRITE-PRIVATE-MESSAGE'
const handle_send_pm = 'SEND-PRIVATE-MESSAGE'
const clear_pm_textarea = 'CLEAR-PM-TEXTAREA'


const init_state = {
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
}

const messagesReducer = (state = init_state, action) => {
    switch (action.type) {
        case write_private_message:
            return {
                ...state,
                messageTextareaControl: action.message
            }
        case handle_send_pm:
            const new_message = {
                id: state.textMessageData.length + 1,
                msg: state.messageTextareaControl
            }
            return {
                ...state,
                textMessageData: [...state.textMessageData, new_message],
                messageTextareaControl: ''
            }

        case clear_pm_textarea:
            return {
                ...state,
                messageTextareaControl: ''
            }
        default:
            return state
    }
}

export const msgTextareaActionCreator = text => {return {type: write_private_message, message: text}}
export const sendPMActionCreator = () => {return {type: handle_send_pm}}
export const clearTextareaActionCreator = () => {return {type: clear_pm_textarea}}

export default messagesReducer