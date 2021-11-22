

let messagesReducer = (state, action) => {
    switch (action.type) {

        case 'WRITE-PRIVATE-MESSAGE':
            state.messageTextareaControl = action.message
            return state
        case 'SEND-PRIVATE-MESSAGE':
            let new_message = {
                id: state.textMessageData.length + 1,
                msg: state.messageTextareaControl
            }
            state.textMessageData.push(new_message)
            state.messageTextareaControl = ''
            return state

        case 'CLEAR-PM-TEXTAREA':
            state.messageTextareaControl = ''
            return state
        default:
            return state
    }
}

export default messagesReducer