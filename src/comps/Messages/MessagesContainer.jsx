import { connect } from 'react-redux';
import { clearTextareaActionCreator, msgTextareaActionCreator, sendPMActionCreator } from '../../redux/messagesReducer';
import Messages from './Messages';


let mapStateToProps = (state) => {
    return {
        state: state.messagePage
}
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleOnChange: (text) => {
            dispatch(msgTextareaActionCreator(text))
        },
        handleSendPM: () => {
            dispatch(sendPMActionCreator())
        },
        handleElseSendPM: () => {
            dispatch(clearTextareaActionCreator())
        }
    }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer